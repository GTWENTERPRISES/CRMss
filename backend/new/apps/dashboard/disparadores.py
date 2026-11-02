"""
Disparadores e índices únicos del esquema del dashboard en SQLite.

Los 62 disparadores de Postgres son funciones PL/pgSQL. En SQLite se crea, por
tabla y evento, un disparador que llama a `pg_disparar(...)`; esa función
(Python) ejecuta con el intérprete las funciones de disparador de esa tabla
en el orden de Postgres (alfabético por nombre):

1. los BEFORE, con NEW/OLD: lo que devuelven es la fila que se guarda. SQLite
   no deja cambiar NEW en un BEFORE, así que corren después de escribir la fila
   y los cambios se vuelven a escribir con un UPDATE (con recursive_triggers
   apagado, ese UPDATE no vuelve a disparar);
2. los AFTER, con la fila final.

Un RAISE adentro aborta la sentencia de SQLite y deshace lo que hizo, igual que
en Postgres. Las columnas seriales (`numero`) se numeran acá también, antes de
que corran las funciones.

Se crean en cada `migrate` (apps.py), junto con las vistas.
"""
import json
import logging
import re

from .plpgsql import ErrorPlpgsql, _local
from .plpgsql_motor import Variable, a_sqlite, motor

logger = logging.getLogger(__name__)

PREFIJO = 'pgtrg_'
MAX_PROFUNDIDAD = 12
INICIO_DE_SECUENCIA = {('instalaciones', 'numero'): 1000}


def _cols(cursor, tabla):
    return [r[1] for r in cursor.execute(f'PRAGMA table_info("{tabla}")').fetchall()]


def _json_de_fila(prefijo, columnas):
    """
    NEW/OLD como objeto JSON (json_object admite hasta ~60 pares: en trozos).

    Los trozos se unen con pg_json_concatenar y no con json_patch: json_patch
    (RFC 7396) borra las claves con valor null, y entonces OLD perdía las
    columnas vacías de más allá de la 50 —la auditoría las daba por cambiadas.
    """
    trozos = []
    for i in range(0, len(columnas), 50):
        pares = ', '.join(f"'{c}', {prefijo}.\"{c}\"" for c in columnas[i:i + 50])
        trozos.append(f'json_object({pares})')
    expresion = trozos[0]
    for t in trozos[1:]:
        expresion = f'pg_json_concatenar({expresion}, {t})'
    return expresion


def _eventos(momento):
    """'BEFORE INSERT OR UPDATE OF ESTADO, FECHA' → ('BEFORE', {'INSERT', 'UPDATE'}, {'estado', 'fecha'})."""
    m = re.match(r'(BEFORE|AFTER|INSTEAD OF)\s+(.*)$', momento.strip(), re.I)
    if not m:
        return None, set(), set()
    cuando, resto = m.group(1).upper(), m.group(2)
    eventos, columnas = set(), set()
    for parte in re.split(r'\s+OR\s+', resto, flags=re.I):
        parte = parte.strip()
        uo = re.match(r'UPDATE\s+OF\s+(.*)$', parte, re.I)
        if uo:
            eventos.add('UPDATE')
            columnas |= {c.strip().lower() for c in uo.group(1).split(',')}
        else:
            eventos.add(parte.split()[0].upper())
    return cuando, eventos, columnas


def disparadores_por_tabla():
    from . import funciones_generadas as g

    salida = {}
    for tabla, nombre, momento, funcion, condicion in g.DISPARADORES:
        cuando, eventos, columnas = _eventos(momento)
        salida.setdefault(tabla, []).append({
            'nombre': nombre, 'funcion': funcion, 'cuando': cuando, 'eventos': eventos,
            'columnas': columnas, 'condicion': condicion,
        })
    for lista in salida.values():
        lista.sort(key=lambda d: d['nombre'])
    return salida


def seriales_por_tabla():
    from . import funciones_generadas as g
    return {t: [c for c, d in cols.items() if d == 'SERIAL'] for t, cols in g.DEFAULTS.items()
            if any(d == 'SERIAL' for d in cols.values())}


# ── creación ─────────────────────────────────────────────────────────────────


def borrar(cursor):
    for (nombre,) in cursor.execute(
            "SELECT name FROM sqlite_master WHERE type = 'trigger' AND name LIKE 'pgtrg\\_%' ESCAPE '\\'").fetchall():
        cursor.execute(f'DROP TRIGGER IF EXISTS "{nombre}"')


def crear(cursor):
    """Crea índices únicos y disparadores. Devuelve {objeto: error} de los que no se pudieron crear."""
    errores = {}
    errores.update(crear_indices(cursor))
    borrar(cursor)
    tablas = set(disparadores_por_tabla()) | set(seriales_por_tabla())
    existentes = {r[0] for r in cursor.execute("SELECT name FROM sqlite_master WHERE type = 'table'").fetchall()}
    por_tabla = disparadores_por_tabla()
    for tabla in sorted(tablas):
        if tabla not in existentes:
            continue
        columnas = _cols(cursor, tabla)
        eventos = set()
        for d in por_tabla.get(tabla, []):
            eventos |= d['eventos']
        if tabla in seriales_por_tabla():
            eventos.add('INSERT')
        sentencias = []
        if 'INSERT' in eventos:
            sentencias.append(
                f'CREATE TRIGGER "{PREFIJO}{tabla}_ins" AFTER INSERT ON "{tabla}" FOR EACH ROW BEGIN '
                f"SELECT pg_disparar('{tabla}', 'INSERT', NEW.rowid, NULL); END")
        if 'UPDATE' in eventos:
            sentencias.append(
                f'CREATE TRIGGER "{PREFIJO}{tabla}_upd" AFTER UPDATE ON "{tabla}" FOR EACH ROW BEGIN '
                f"SELECT pg_disparar('{tabla}', 'UPDATE', NEW.rowid, {_json_de_fila('OLD', columnas)}); END")
        if 'DELETE' in eventos:
            antes = any(d['cuando'] == 'BEFORE' and 'DELETE' in d['eventos'] for d in por_tabla.get(tabla, []))
            if antes:
                sentencias.append(
                    f'CREATE TRIGGER "{PREFIJO}{tabla}_delb" BEFORE DELETE ON "{tabla}" FOR EACH ROW BEGIN '
                    f"SELECT pg_disparar('{tabla}', 'DELETE_ANTES', OLD.rowid, {_json_de_fila('OLD', columnas)}); END")
            sentencias.append(
                f'CREATE TRIGGER "{PREFIJO}{tabla}_del" AFTER DELETE ON "{tabla}" FOR EACH ROW BEGIN '
                f"SELECT pg_disparar('{tabla}', 'DELETE', NULL, {_json_de_fila('OLD', columnas)}); END")
        for s in sentencias:
            try:
                cursor.execute(s)
            except Exception as e:
                errores[f'disparador {tabla}'] = str(e)
    return errores


def crear_indices(cursor):
    """Los índices únicos de Postgres (incluidos los parciales), que usan los ON CONFLICT."""
    import sqlglot

    from . import funciones_generadas as g

    errores = {}
    for nombre, (tabla, columnas, donde) in g.INDICES_UNICOS.items():
        try:
            consulta = sqlglot.parse_one(f'SELECT {columnas} FROM {tabla}' + (f' WHERE {donde}' if donde else ''),
                                         read='postgres')
            exprs = ', '.join(e.sql(dialect='sqlite') for e in consulta.expressions)
            # Las funciones de red de Postgres tienen su par en SQLite (registradas
            # como deterministas, que es lo que SQLite pide para indexarlas).
            # Sin esto `idx_subredes_cidr` no se creaba y se podían cargar dos
            # bloques con la misma red.
            for de_pg, de_sqlite in (('NETWORK(', 'pg_network('), ('HOST(', 'pg_host('), ('MASKLEN(', 'pg_masklen(')):
                exprs = re.sub(re.escape(de_pg), de_sqlite, exprs, flags=re.I)
            filtro = consulta.args.get('where')
            sql = f'CREATE UNIQUE INDEX IF NOT EXISTS "pgidx_{nombre}" ON "{tabla}" ({exprs})'
            if filtro is not None:
                sql += ' WHERE ' + filtro.this.sql(dialect='sqlite')
            cursor.execute(sql)
        except Exception as e:
            errores[f'índice {nombre}'] = str(e)
    return errores


# ── ejecución ────────────────────────────────────────────────────────────────


def disparar(con, tabla, evento, rowid, viejo):
    """La función `pg_disparar` de SQLite."""
    if evento == 'UPDATE' and (tabla, rowid) in getattr(_local, 'escribiendo', ()):
        # El UPDATE con que se guarda lo que cambiaron los BEFORE: en Postgres es
        # la misma escritura, no una modificación aparte que vuelva a disparar.
        return None
    profundidad = getattr(_local, 'profundidad', 0)
    if profundidad >= MAX_PROFUNDIDAD:
        return None
    _local.profundidad = profundidad + 1
    try:
        return _disparar(con, tabla, evento, rowid, viejo)
    except ErrorPlpgsql as e:
        _local.error = e
        raise
    except Exception as e:
        logger.exception('Error en un disparador de %s', tabla)
        _local.error = ErrorPlpgsql(str(e), 'XX000')
        raise
    finally:
        _local.profundidad = profundidad


def _disparar(con, tabla, evento, rowid, viejo):
    m = motor()
    columnas = _cols(con, tabla)
    # NEW y OLD con las columnas cifradas en claro: así los procesos comparan
    # texto (no tokens, que cambian en cada guardado) y _escribir las vuelve a
    # cifrar al guardar.
    old = _en_claro(tabla, json.loads(viejo)) if viejo else None
    new = None
    if rowid is not None:
        fila = con.execute(f'SELECT * FROM "{tabla}" WHERE rowid = ?', (rowid,)).fetchone()
        if fila is None:
            return None
        new = _en_claro(tabla, {c: a_sqlite(v) for c, v in zip(columnas, fila)})

    if evento == 'INSERT':
        cambios = {}
        for c in seriales_por_tabla().get(tabla, []):
            if new.get(c) is None:
                desde = INICIO_DE_SECUENCIA.get((tabla, c), 1)
                siguiente = con.execute(f'SELECT COALESCE(MAX("{c}"), {desde - 1}) + 1 FROM "{tabla}"').fetchone()[0]
                cambios[c] = siguiente
        if cambios:
            _escribir(con, tabla, rowid, cambios)
            new.update(cambios)

    disparadores = disparadores_por_tabla().get(tabla, [])
    op = 'DELETE' if evento in ('DELETE', 'DELETE_ANTES') else evento
    candidatos = [d for d in disparadores if op in d['eventos']]
    if not candidatos:
        return None

    def corre(d):
        if op == 'UPDATE' and d['columnas'] and old is not None:
            if not any(old.get(c) != new.get(c) for c in d['columnas']):
                return False
        if d['condicion']:
            return _condicion(m, con, tabla, d, new, old, op)
        return True

    if evento == 'DELETE_ANTES':
        for d in candidatos:
            if d['cuando'] == 'BEFORE' and corre(d):
                resultado = _ejecutar(m, con, tabla, d, None, old, op)
                if resultado is None:
                    raise ErrorPlpgsql(f'El borrado en {tabla} lo canceló {d["nombre"]}', 'P0001')
        return None
    if evento == 'DELETE':
        for d in candidatos:
            if d['cuando'] == 'AFTER' and corre(d):
                _ejecutar(m, con, tabla, d, None, old, op)
        return None

    # INSERT / UPDATE: primero los BEFORE (cambian la fila), después los AFTER.
    original = dict(new)
    for d in candidatos:
        if d['cuando'] != 'BEFORE' or not corre(d):
            continue
        resultado = _ejecutar(m, con, tabla, d, new, old, op)
        if resultado is None:
            if op == 'INSERT':
                con.execute(f'DELETE FROM "{tabla}" WHERE rowid = ?', (rowid,))
                return None
            _escribir(con, tabla, rowid, old)
            return None
        if isinstance(resultado, dict):
            new = {c: resultado.get(c, new.get(c)) for c in columnas}
    cambios = {c: v for c, v in new.items() if original.get(c) != v}
    if cambios:
        _escribir(con, tabla, rowid, cambios)
    for d in candidatos:
        if d['cuando'] == 'AFTER' and corre(d):
            _ejecutar(m, con, tabla, d, new, old, op)
    return None


def _contexto_de_disparador(m, tabla, d, new, old, op):
    campos = dict(m.tablas.get(tabla, {}))
    return {
        'new': Variable(dict(new) if new is not None else None, 'RECORD', campos),
        'old': Variable(dict(old) if old is not None else None, 'RECORD', campos),
        'tg_op': Variable(op, 'TEXT'),
        'tg_when': Variable(d['cuando'], 'TEXT'),
        'tg_name': Variable(d['nombre'], 'TEXT'),
        'tg_table_name': Variable(tabla, 'TEXT'),
        'tg_argv': Variable('[]', 'JSONB'),
        'tg_nargs': Variable(0, 'INT'),
    }


def _ejecutar(m, con, tabla, d, new, old, op):
    contexto = _contexto_de_disparador(m, tabla, d, new, old, op)
    resultado = m.ejecutar(d['funcion'], [], con, disparador=contexto)
    if resultado is None and contexto['new'].valor is not None and d['cuando'] == 'BEFORE':
        # RETURN NULL explícito cancela; una función que no retorna es un error en
        # Postgres, acá se toma como que deja la fila como está.
        return resultado
    return resultado


def _condicion(m, con, tabla, d, new, old, op):
    from .plpgsql_motor import Contexto
    ctx = Contexto(m, con, d['funcion'])
    for k, v in _contexto_de_disparador(m, tabla, d, new, old, op).items():
        ctx.declarar(k, v)
    return m.verdadero(d['condicion'], ctx)


def _en_claro(tabla, fila):
    from apps.core.cifrado import columnas_cifradas
    from apps.core.fields import descifrar
    cols = columnas_cifradas().get(tabla)
    if not cols or fila is None:
        return fila
    return {c: descifrar(v) if c in cols else v for c, v in fila.items()}


def _escribir(con, tabla, rowid, valores):
    if not valores:
        return
    from apps.core.cifrado import columnas_cifradas
    from apps.core.fields import cifrar
    cols = columnas_cifradas().get(tabla, ())
    valores = {c: cifrar(v) if c in cols and isinstance(v, str) else v for c, v in valores.items()}
    asignaciones = ', '.join(f'"{c}" = ?' for c in valores)
    escribiendo = getattr(_local, 'escribiendo', set())
    _local.escribiendo = escribiendo | {(tabla, rowid)}
    try:
        con.execute(f'UPDATE "{tabla}" SET {asignaciones} WHERE rowid = ?', [*valores.values(), rowid])
    finally:
        _local.escribiendo = escribiendo
