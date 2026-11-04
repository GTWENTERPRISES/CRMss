"""
Motor que ejecuta las funciones PL/pgSQL compiladas por `plpgsql.py`.

Cada sentencia SQL del cuerpo se arma con sqlglot, las variables de la función
se reemplazan por parámetros con su tipo (`CAST(:p_monto AS NUMERIC)`), se
traduce a SQLite con `vistas_sqlite.Traductor` y se ejecuta en la conexión
cruda de SQLite (la misma de Django). Así una función puede llamar a otra, un
disparador puede escribir en otras tablas y un RAISE deshace la sentencia,
como en Postgres.
"""
import json
import logging
import re
import sqlite3
from datetime import datetime, timezone
from decimal import Decimal

import sqlglot
from sqlglot import exp

from apps.core.fields import descifrar

from . import contexto
from .plpgsql import (
    Asignar, Bloque, Bucle, Caso, Diagnostico, ErrorPlpgsql, Lanzar, Mientras, ParaCada,
    ParaConsulta, ParaEntero, Retornar, Salir, Si, Sql, _Continuar, _local, _partir_comas,
    _Retornar, _Salir, compilar,
)
from .vistas_sqlite import EQUIVALENTES, Traductor, normalizar_postgres, tipo_sqlglot

logger = logging.getLogger(__name__)

_HEX32 = re.compile(r'^[0-9a-f]{32}$')
_UUID = re.compile(r'^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')
_MOMENTO_ISO = re.compile(r'^\d{4}-\d\d-\d\dT\d\d:\d\d')

CLASE_A_TIPO = {'bool': 'BOOLEAN', 'json': 'JSONB', 'date': 'DATE', 'ts': 'TIMESTAMPTZ', 'int': 'BIGINT',
                'num': 'NUMERIC', 'uuid': 'UUID', 'interval': 'INTERVAL', 'text': 'TEXT'}

CODIGOS_SQLITE = [
    ('UNIQUE constraint failed', '23505'),
    ('FOREIGN KEY constraint failed', '23503'),
    ('CHECK constraint failed', '23514'),
    ('NOT NULL constraint failed', '23502'),
]

CONDICIONES = {
    'unique_violation': '23505', 'foreign_key_violation': '23503', 'check_violation': '23514',
    'not_null_violation': '23502', 'no_data_found': 'P0002', 'too_many_rows': 'P0003',
    'raise_exception': 'P0001', 'division_by_zero': '22012', 'invalid_text_representation': '22P02',
    'undefined_table': '42P01', 'undefined_column': '42703', 'undefined_function': '42883',
    'lock_not_available': '55P03', 'serialization_failure': '40001', 'insufficient_privilege': '42501',
}


def clase_de_tipo_pg(tipo):
    """El tipo declarado de una variable → clase (como las de vistas_sqlite)."""
    t = (tipo or '').upper().strip()
    if t.endswith('[]'):
        return 'json'
    base = t.split('(')[0].strip()
    if base in ('UUID',):
        return 'uuid'
    if base in ('BOOLEAN', 'BOOL'):
        return 'bool'
    if base == 'DATE':
        return 'date'
    if base.startswith('TIMESTAMP'):
        return 'ts'
    if base in ('INT', 'INTEGER', 'BIGINT', 'SMALLINT', 'INT4', 'INT8', 'INT2', 'BIGSERIAL', 'SERIAL'):
        return 'int'
    if base in ('NUMERIC', 'DECIMAL', 'REAL', 'DOUBLE PRECISION', 'FLOAT', 'MONEY'):
        return 'num'
    if base in ('JSON', 'JSONB'):
        return 'json'
    if base == 'INTERVAL':
        return 'interval'
    if base in ('RECORD',):
        return 'record'
    return 'text'


def a_sqlite(valor, clase=None):
    """Un valor de Python como lo guarda SQLite (para pasarlo de parámetro)."""
    if valor is None:
        return None
    if isinstance(valor, bool):
        return 1 if valor else 0
    if isinstance(valor, (dict, list)):
        return json.dumps(valor, default=str)
    if isinstance(valor, Decimal):
        return float(valor)
    if clase == 'uuid' and isinstance(valor, str) and _UUID.match(valor):
        return valor.replace('-', '').lower()
    if clase == 'bool' and isinstance(valor, str):
        return 1 if valor.lower() in ('t', 'true', '1', 'yes', 'on') else 0
    if clase == 'ts' and isinstance(valor, str) and _MOMENTO_ISO.match(valor):
        # Del navegador llega '2026-10-17T00:34:00.000Z': se guarda como Django,
        # en UTC y con espacio, para que las comparaciones de texto anden.
        from apps.core.views_generic import momento_sql
        return momento_sql(valor)
    if isinstance(valor, datetime):
        if valor.tzinfo is not None:
            valor = valor.astimezone(timezone.utc).replace(tzinfo=None)
        return valor.isoformat(sep=' ')
    if hasattr(valor, 'isoformat'):
        return valor.isoformat()
    return valor


def a_api(valor, clase=None):
    """Un valor crudo de SQLite como lo devolvería PostgREST."""
    if valor is None:
        return None
    if clase == 'bool':
        return bool(valor) if not isinstance(valor, str) else valor.lower() in ('1', 't', 'true')
    if clase == 'json':
        if isinstance(valor, str):
            try:
                return _uuids_con_guiones(json.loads(valor))
            except ValueError:
                return valor
        return _uuids_con_guiones(valor)
    if clase == 'uuid' and isinstance(valor, str) and _HEX32.match(valor):
        return f'{valor[:8]}-{valor[8:12]}-{valor[12:16]}-{valor[16:20]}-{valor[20:]}'
    if clase == 'ts' and isinstance(valor, str) and re.match(r'^\d{4}-\d\d-\d\d[ T]\d\d:\d\d', valor):
        return valor.replace(' ', 'T') + ('' if re.search(r'[+-]\d\d:\d\d$|Z$', valor) else '+00:00')
    if clase in ('int', 'num') and isinstance(valor, (int, float)):
        return int(valor) if clase == 'int' and float(valor).is_integer() else valor
    return valor


def _uuids_con_guiones(obj):
    if isinstance(obj, dict):
        return {k: _uuids_con_guiones(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [_uuids_con_guiones(v) for v in obj]
    if isinstance(obj, str) and _HEX32.match(obj):
        return f'{obj[:8]}-{obj[8:12]}-{obj[12:16]}-{obj[16:20]}-{obj[20:]}'
    return obj


class Variable:
    __slots__ = ('valor', 'tipo', 'clase', 'campos')

    def __init__(self, valor=None, tipo='TEXT', campos=None):
        self.tipo = tipo
        self.clase = clase_de_tipo_pg(tipo) if campos is None else 'record'
        self.campos = campos       # registro: {columna: tipo_pg}
        self.valor = valor


class Resultado:
    def __init__(self, columnas, filas, filas_afectadas, clases):
        self.columnas = columnas
        self.filas = filas
        self.filas_afectadas = filas_afectadas
        self.clases = clases

    def registros(self):
        return [dict(zip(self.columnas, f)) for f in self.filas]


class Contexto:
    def __init__(self, motor, conexion, funcion):
        self.motor = motor
        self.con = conexion
        self.funcion = funcion
        self.ambitos = [{}]
        self.encontrado = False
        self.filas_afectadas = 0
        self.resultados = []
        self.error_actual = None

    def buscar(self, nombre):
        for ambito in reversed(self.ambitos):
            if nombre in ambito:
                return ambito[nombre]
        if nombre == 'found':
            return Variable(1 if self.encontrado else 0, 'BOOLEAN')
        return None

    def declarar(self, nombre, variable):
        self.ambitos[-1][nombre] = variable

    def asignar(self, destino, valor, clase=None):
        nombre, _, campo = destino.partition('.')
        var = self.buscar(nombre)
        if var is None:
            raise ErrorPlpgsql(f'La variable "{nombre}" no existe', '42703')
        if campo:
            if not isinstance(var.valor, dict):
                var.valor = {}
            var.valor[campo] = a_sqlite(valor, (var.campos or {}).get(campo) and clase_de_tipo_pg(var.campos[campo]))
            return
        if var.clase == 'record':
            var.valor = dict(valor) if isinstance(valor, dict) else valor
            return
        var.valor = a_sqlite(valor, var.clase)


class Motor:
    """Una instancia por proceso: funciones, tipos de tablas y traductor."""

    def __init__(self, funciones, tablas, vistas_columnas=None, enums=None, defaults=None):
        self.defaults = defaults or {}
        self.inicio_de_secuencia = {('instalaciones', 'numero'): 1000}
        from .esquema import Columna, Esquema, Funcion, Tabla

        e = Esquema()
        for t, cols in tablas.items():
            tabla = Tabla(nombre=t)
            for c, tipo in cols.items():
                tabla.columnas[c] = Columna(nombre=c, tipo=tipo)
            e.tablas[t] = tabla
        e.enums = dict(enums or {})
        for nombre, (args, retorna, lenguaje, cuerpo) in funciones.items():
            e.funciones[nombre] = Funcion(nombre, args, retorna, cuerpo, lenguaje)
        # Las SQL las inserta el traductor; las plpgsql quedan como llamadas a
        # funciones de SQLite que vuelven a este motor.
        self.traductor = Traductor(e, EQUIVALENTES)
        for v, cols in (vistas_columnas or {}).items():
            self.traductor.registrar_vista(v, {c: CLASE_A_TIPO.get(k, 'TEXT') for c, k in cols.items()})
        self.funciones = funciones
        self.tablas = tablas
        self.compiladas = {}
        self.cache_sql = {}
        self.firmas = {n: self.firma(a) for n, (a, *_r) in funciones.items()}

    # -- funciones --

    @staticmethod
    def firma(argumentos):
        """'p_a UUID, p_b TEXT DEFAULT 'x', OUT total INT' → [(nombre, tipo, defecto, modo)]."""
        salida = []
        for parte in _partir_comas(argumentos or ''):
            modo = 'IN'
            m = re.match(r'^(IN|OUT|INOUT|VARIADIC)\s+', parte, re.I)
            if m:
                modo = m.group(1).upper()
                parte = parte[m.end():]
            m = re.match(r'(\w+)\s+(.*?)(?:\s+(?:DEFAULT|=)\s+(.*))?$', parte.strip(), re.I | re.S)
            if m:
                salida.append((m.group(1).lower(), m.group(2).strip(), m.group(3), modo))
        return salida

    def compilada(self, nombre):
        if nombre not in self.compiladas:
            self.compiladas[nombre] = compilar(self.funciones[nombre][3])
        return self.compiladas[nombre]

    def tipo_de_retorno(self, nombre):
        return (self.funciones[nombre][1] or '').strip()

    def columnas_de_retorno(self, nombre):
        """Columnas (nombre → tipo) si la función devuelve filas; None si es escalar."""
        retorna = self.tipo_de_retorno(nombre)
        m = re.match(r'^TABLE\s*\((.*)\)\s*$', retorna, re.I | re.S)
        if m:
            cols = {}
            for parte in _partir_comas(m.group(1)):
                n, _, t = parte.strip().partition(' ')
                cols[n.lower().strip('"')] = t.strip()
            return cols
        m = re.match(r'^SETOF\s+(\w+)$', retorna, re.I)
        if m and m.group(1).lower() in self.tablas:
            return dict(self.tablas[m.group(1).lower()])
        if retorna.lower() in self.tablas:
            return dict(self.tablas[retorna.lower()])
        salidas = [(n, t) for n, t, _d, modo in self.firmas.get(nombre, []) if modo in ('OUT', 'INOUT')]
        if salidas:
            return {n: t for n, t in salidas}
        return None

    def devuelve_conjunto(self, nombre):
        retorna = self.tipo_de_retorno(nombre).upper()
        return retorna.startswith('TABLE') or retorna.startswith('SETOF')

    # -- SQL --

    def preparar(self, texto, ctx):
        """(sql_sqlite, clases_de_salida, [(parametro, variable, campo)])."""
        firma = tuple(sorted((n, v.tipo, tuple(sorted((v.campos or {}).items())))
                             for amb in ctx.ambitos for n, v in amb.items()))
        clave = (texto, firma)
        if clave in self.cache_sql:
            return self.cache_sql[clave]
        from .vistas_sqlite import normalizar_cadenas

        fuente = re.sub(r'\bauth\.uid\(\)', 'auth_uid()', texto, flags=re.I)
        fuente = re.sub(r'\bauth\.jwt\(\)', 'auth_jwt()', fuente, flags=re.I)
        fuente = normalizar_cadenas(fuente)
        fuente = self.argumentos_por_posicion(fuente)
        fuente = re.sub(r'\bON\s+COMMIT\s+(DROP|DELETE\s+ROWS|PRESERVE\s+ROWS)', '', fuente, flags=re.I)
        fuente = re.sub(r'^\s*TRUNCATE\s+(?:TABLE\s+)?([\w."]+)\s*$', r'DELETE FROM \1', fuente, flags=re.I)
        fuente = re.sub(r'\bFOR\s+(UPDATE|SHARE|NO\s+KEY\s+UPDATE)(\s+OF\s+[\w, ]+)?(\s+(NOWAIT|SKIP\s+LOCKED))?', '',
                        fuente, flags=re.I)
        try:
            arbol = sqlglot.parse_one(fuente, read='postgres')
        except Exception as e:
            raise ErrorPlpgsql(f'No se pudo leer la sentencia: {e}: {texto[:200]}', '42601')
        # Antes de reemplazar variables: `v_antes -> e.key` no es una lambda.
        arbol = normalizar_postgres(arbol)
        parametros = []
        usados = {}

        def parametro(nombre, campo, tipo):
            clave_p = (nombre, campo)
            if clave_p not in usados:
                usados[clave_p] = re.sub(r'\W', '_', f'v_{nombre}_{campo or ""}')
                parametros.append((usados[clave_p], nombre, campo))
            ph = exp.Placeholder(this=usados[clave_p])
            if tipo and clase_de_tipo_pg(tipo) not in ('text', 'record'):
                return exp.Cast(this=ph, to=exp.DataType.build(tipo_sqlglot(tipo), dialect='postgres'))
            return ph

        def es_destino_de_set(col):
            padre = col.parent
            return isinstance(padre, exp.EQ) and padre.this is col and isinstance(padre.parent, (exp.Update,)) \
                or isinstance(padre, exp.EQ) and padre.this is col and padre.find_ancestor(exp.OnConflict) is not None

        def reemplazar(nodo):
            if isinstance(nodo, exp.Column):
                if es_destino_de_set(nodo):
                    return nodo
                tabla = nodo.table.lower() if nodo.table else ''
                nombre = nodo.name.lower()
                if not tabla:
                    var = ctx.buscar(nombre)
                    if var is not None:
                        if var.clase == 'record':
                            return parametro(nombre, None, 'JSONB')
                        return parametro(nombre, None, var.tipo)
                else:
                    var = ctx.buscar(tabla)
                    if var is not None and var.clase == 'record':
                        tipo = (var.campos or {}).get(nombre)
                        return parametro(tabla, nombre, tipo)
            return nodo

        arbol = arbol.transform(reemplazar)
        self.completar_insert(arbol)
        arbol = self.funciones_de_conjunto(arbol)
        try:
            sql, salida = self.traductor.traducir_arbol(arbol)
        except Exception as e:
            raise ErrorPlpgsql(f'No se pudo traducir la sentencia: {e}: {texto[:200]}', '42601')
        sql = re.sub(r'(ON CONFLICT\s*\([^)]*?)\s+NULLS (?:LAST|FIRST)', r'\1', sql)
        while re.search(r'ON CONFLICT\s*\([^)]*NULLS (?:LAST|FIRST)', sql):
            sql = re.sub(r'(ON CONFLICT\s*\([^)]*?)\s+NULLS (?:LAST|FIRST)', r'\1', sql)
        resultado = (sql, salida, parametros)
        self.cache_sql[clave] = resultado
        return resultado

    def argumentos_por_posicion(self, texto):
        """
        `f(p_b := 2, p_a => 1)` → `f(1, 2, <defaults>)`. sqlglot no entiende los
        argumentos con nombre; la firma de la función dice el orden.
        """
        if ':=' not in texto and '=>' not in texto:
            return texto
        from .plpgsql import tokenizar
        tokens = tokenizar(texto)
        reemplazos = []
        for k, tk in enumerate(tokens):
            if tk.tipo != 'ident' or tk.texto.lower() not in self.firmas or k + 1 >= len(tokens) or tokens[k + 1].texto != '(':
                continue
            prof, j = 0, k + 1
            while j < len(tokens):
                if tokens[j].texto == '(':
                    prof += 1
                elif tokens[j].texto == ')':
                    prof -= 1
                    if prof == 0:
                        break
                j += 1
            if j >= len(tokens):
                continue
            interior = texto[tokens[k + 1].fin:tokens[j].inicio]
            partes = _partir_comas(interior)
            con_nombre = [re.match(r'^\s*(\w+)\s*(?::=|=>)\s*(.*)$', p, re.S) for p in partes]
            if not any(con_nombre):
                continue
            firma = [p for p in self.firmas[tk.texto.lower()] if p[3] != 'OUT']
            posicionales = [p for p, m in zip(partes, con_nombre) if not m]
            nombrados = {m.group(1).lower(): m.group(2) for m in con_nombre if m}
            valores = []
            for i, (nombre, _tipo, defecto, _modo) in enumerate(firma):
                if i < len(posicionales):
                    valores.append(posicionales[i])
                elif nombre in nombrados:
                    valores.append(nombrados[nombre])
                else:
                    valores.append(defecto if defecto is not None else 'NULL')
            # Los que sobran al final con su default no hace falta mandarlos.
            reemplazos.append((tokens[k + 1].fin, tokens[j].inicio, ', '.join(valores)))
        if not reemplazos:
            return texto
        # Uno por vez (el que empieza más tarde: el más interno) y se vuelve a
        # leer: con llamadas anidadas, las posiciones viejas ya no sirven.
        inicio, fin, nuevo = max(reemplazos)
        return self.argumentos_por_posicion(texto[:inicio] + nuevo + texto[fin:])

    def completar_insert(self, arbol):
        """
        Agrega al INSERT las columnas que Postgres completaba con su DEFAULT.

        Django crea las tablas de SQLite sin DEFAULT (los aplica en Python), así
        que un INSERT de una función que no nombra `id`, `created_at` o `numero`
        fallaría o quedaría vacío. Las secuencias de un INSERT de una sola fila
        se resuelven acá con el máximo + 1; las de varias filas, con el
        disparador de numeración (disparadores.py).
        """
        insert = arbol if isinstance(arbol, exp.Insert) else arbol.find(exp.Insert)
        if insert is None or not isinstance(insert.this, exp.Schema):
            return
        esquema = insert.this
        tabla = esquema.this.name.lower() if isinstance(esquema.this, exp.Table) else None
        defaults = self.defaults.get(tabla) if tabla else None
        if not defaults:
            return
        presentes = {i.name.lower() for i in esquema.expressions}
        faltan = [(c, d) for c, d in defaults.items() if c not in presentes]
        if not faltan:
            return
        valores = insert.expression
        filas = valores.expressions if isinstance(valores, exp.Values) else None
        selects = [valores] if isinstance(valores, exp.Select) else []
        una_fila = filas is not None and len(filas) == 1
        for columna, defecto in faltan:
            if defecto == 'SERIAL':
                if not una_fila:
                    continue        # lo numera el disparador de SQLite
                desde = (self.inicio_de_secuencia or {}).get((tabla, columna), 1)
                expresion = sqlglot.parse_one(
                    f'(SELECT COALESCE(MAX({columna}), {desde - 1}) + 1 FROM {tabla})', read='postgres')
            else:
                try:
                    expresion = sqlglot.parse_one(defecto, read='postgres')
                except Exception:
                    continue
            esquema.append('expressions', exp.to_identifier(columna))
            for fila in filas or []:
                fila.append('expressions', expresion.copy())
            for s in selects:
                s.append('expressions', exp.alias_(expresion.copy(), columna))

    def funciones_de_conjunto(self, arbol):
        """`FROM f(x) alias` de una función que devuelve filas → JSON_EACH de su resultado."""
        for tabla in list(arbol.find_all(exp.Table)):
            fn = tabla.this
            if not isinstance(fn, exp.Anonymous) or fn.name.lower() not in self.funciones:
                continue
            nombre = fn.name.lower()
            cols = self.columnas_de_retorno(nombre) or {nombre: self.tipo_de_retorno(nombre).split()[-1]}
            alias = tabla.alias or nombre
            llamada = exp.Anonymous(this='pg_filas', expressions=[exp.Literal.string(nombre), *fn.expressions])
            proy = [exp.alias_(exp.Anonymous(this='JSON_EXTRACT', expressions=[exp.column('value'), exp.Literal.string(f'$.{c}')]), c)
                    for c in cols]
            sub = exp.select(*proy).from_(exp.Anonymous(this='JSON_EACH', expressions=[llamada]))
            tabla.replace(exp.Subquery(this=sub, alias=exp.TableAlias(this=exp.to_identifier(alias))))
        return arbol

    _CTE_DML = re.compile(r'^\s*WITH\b.*?\bAS\s*(?:MATERIALIZED\s+|NOT\s+MATERIALIZED\s+)?\(\s*(INSERT|UPDATE|DELETE)\b',
                          re.I | re.S)

    def ejecutar_sql(self, texto, ctx):
        if self._CTE_DML.match(texto):
            return self.ejecutar_con_cte_dml(texto, ctx)
        return self._ejecutar_sql(texto, ctx)

    def ejecutar_con_cte_dml(self, texto, ctx):
        """
        `WITH a AS (UPDATE ... RETURNING ...), b AS (...) <sentencia>`: SQLite no
        admite INSERT/UPDATE/DELETE adentro de un WITH. Cada CTE que modifica se
        ejecuta antes y lo que devuelve su RETURNING queda en una tabla temporal
        con el nombre de la CTE; la sentencia principal la lee de ahí.
        """
        from .vistas_sqlite import normalizar_cadenas
        try:
            arbol = sqlglot.parse_one(normalizar_cadenas(texto), read='postgres')
        except Exception as e:
            raise ErrorPlpgsql(f'No se pudo leer la sentencia: {e}', '42601')
        con_with = arbol.args.get('with') or arbol.args.get('with_')
        if con_with is None:
            return self._ejecutar_sql(texto, ctx)
        temporales, quedan = [], []
        for cte in con_with.expressions:
            interno = cte.this
            if isinstance(interno, (exp.Insert, exp.Update, exp.Delete)):
                previas = exp.With(expressions=[q.copy() for q in quedan]) if quedan else None
                if previas is not None:
                    interno.set('with_' if 'with_' in interno.arg_types else 'with', previas)
                r = self._ejecutar_sql(interno.sql(dialect='postgres'), ctx)
                nombre = cte.alias
                temporal = f'_cte_{nombre}_{id(ctx)}'
                columnas = r.columnas or ['_vacia']
                ctx.con.execute(f'DROP TABLE IF EXISTS temp."{temporal}"')
                ctx.con.execute(f'CREATE TEMP TABLE "{temporal}" ({", ".join(chr(34) + c + chr(34) for c in columnas)})')
                if r.filas:
                    huecos = ', '.join('?' for _ in columnas)
                    ctx.con.executemany(f'INSERT INTO "{temporal}" VALUES ({huecos})', r.filas)
                temporales.append((nombre, temporal))
            else:
                quedan.append(cte)
        con_with.set('expressions', quedan)
        if not quedan:
            arbol.set('with', None)
            arbol.set('with_', None)
        for nombre, temporal in temporales:
            for tabla in arbol.find_all(exp.Table):
                if tabla.name == nombre and not tabla.db:
                    tabla.set('this', exp.to_identifier(temporal, quoted=True))
                    if not tabla.alias:
                        tabla.set('alias', exp.TableAlias(this=exp.to_identifier(nombre)))
        try:
            return self._ejecutar_sql(arbol.sql(dialect='postgres'), ctx)
        finally:
            for _n, temporal in temporales:
                ctx.con.execute(f'DROP TABLE IF EXISTS temp."{temporal}"')

    def _ejecutar_sql(self, texto, ctx):
        sql, salida, parametros = self.preparar(texto, ctx)
        valores = {}
        for ph, nombre, campo in parametros:
            var = ctx.buscar(nombre)
            if var is None:
                valores[ph] = None
            elif campo:
                valores[ph] = (var.valor or {}).get(campo) if isinstance(var.valor, dict) else None
            elif var.clase == 'record':
                valores[ph] = json.dumps(var.valor) if isinstance(var.valor, dict) else var.valor
            else:
                valores[ph] = a_sqlite(var.valor, var.clase)
        try:
            cursor = ctx.con.execute(sql, valores)
            columnas = [d[0] for d in cursor.description] if cursor.description else []
            # La conexión de Django convierte timestamp/decimal a datetime/Decimal:
            # acá todo se maneja como lo guarda SQLite.
            # Lo cifrado en reposo que llegue crudo (un SELECT * que el traductor
            # no pudo expandir) se descifra: el proceso trabaja con el texto.
            filas = [tuple(descifrar(a_sqlite(v)) for v in f) for f in cursor.fetchall()] if cursor.description else []
            afectadas = cursor.rowcount if cursor.rowcount is not None and cursor.rowcount >= 0 else len(filas)
        except sqlite3.Error as e:
            anidado = getattr(_local, 'error', None)
            if anidado is not None and 'user-defined function raised exception' in str(e):
                _local.error = None
                raise anidado
            mensaje = str(e)
            codigo = next((c for patron, c in CODIGOS_SQLITE if patron in mensaje), 'XX000')
            raise ErrorPlpgsql(mensaje, codigo, detalle=sql[:500])
        return Resultado(columnas, filas, afectadas, salida)

    def evaluar(self, expresion, ctx):
        r = self.ejecutar_sql(f'SELECT ({expresion}) AS valor', ctx)
        return (r.filas[0][0] if r.filas else None), r.clases.get('valor')

    def verdadero(self, expresion, ctx):
        valor, _ = self.evaluar(expresion, ctx)
        return bool(valor) and valor not in ('0', 'f', 'false')

    # -- tipos de registros --

    def campos_de_tipo(self, tipo):
        m = re.match(r'^(\w+)%ROWTYPE$', tipo.strip(), re.I)
        if m and m.group(1).lower() in self.tablas:
            return dict(self.tablas[m.group(1).lower()])
        if tipo.strip().lower() in self.tablas:
            return dict(self.tablas[tipo.strip().lower()])
        return None

    def tipo_de_columna(self, tipo):
        """`clientes.id%TYPE` → 'UUID'."""
        m = re.match(r'^(\w+)\.(\w+)%TYPE$', tipo.strip(), re.I)
        if m and m.group(1).lower() in self.tablas:
            return self.tablas[m.group(1).lower()].get(m.group(2).lower(), 'TEXT')
        return tipo

    # -- invocación --

    def ejecutar(self, nombre, argumentos=None, conexion=None, disparador=None):
        """
        Ejecuta la función `nombre`. `argumentos` es un dict (por nombre de
        parámetro, como los manda la RPC) o una lista (por posición, como desde
        SQL). Devuelve el valor crudo de SQLite (o lista de dicts si devuelve
        filas).
        """
        # SECURITY DEFINER: corre con los permisos del dueño, sin la RLS de
        # quien la llama (las vistas security_invoker que lea ven todo).
        if nombre in _definidoras():
            with contexto.como_definidor():
                return self._ejecutar(nombre, argumentos, conexion, disparador)
        return self._ejecutar(nombre, argumentos, conexion, disparador)

    def _ejecutar(self, nombre, argumentos=None, conexion=None, disparador=None):
        if conexion is None:
            from django.db import connection
            connection.ensure_connection()
            conexion = connection.connection
        lenguaje = self.funciones[nombre][2]
        ctx = Contexto(self, conexion, nombre)
        self.cargar_parametros(nombre, argumentos, ctx)
        if disparador:
            for clave, var in disparador.items():
                ctx.declarar(clave, var)
        if lenguaje == 'sql':
            return self.ejecutar_sql_funcion(nombre, ctx)
        bloque = self.compilada(nombre)
        try:
            self.bloque(bloque, ctx)
        except _Retornar as r:
            if self.devuelve_conjunto(nombre):
                return ctx.resultados
            return r.valor
        if self.devuelve_conjunto(nombre):
            return ctx.resultados
        salidas = [n for n, _t, _d, modo in self.firmas[nombre] if modo in ('OUT', 'INOUT')]
        if salidas:
            return {n: ctx.buscar(n).valor for n in salidas}
        return None

    def cargar_parametros(self, nombre, argumentos, ctx):
        firma = self.firmas[nombre]
        entradas = [p for p in firma if p[3] in ('IN', 'INOUT', 'VARIADIC')]
        for i, (p, tipo, defecto, modo) in enumerate(firma):
            tipo = self.tipo_de_columna(tipo)
            campos = self.campos_de_tipo(tipo)
            if modo == 'OUT':
                ctx.declarar(p, Variable(None, tipo, campos))
                continue
            posicion = entradas.index((p, tipo, defecto, modo)) if (p, tipo, defecto, modo) in entradas else i
            if isinstance(argumentos, dict):
                presente = p in argumentos
                valor = argumentos.get(p)
            else:
                presente = argumentos is not None and posicion < len(argumentos)
                valor = argumentos[posicion] if presente else None
            var = Variable(None, tipo, campos)
            if not presente and defecto is not None:
                ctx.declarar(p, var)
                valor, _ = self.evaluar(defecto, ctx)
            if campos is not None and isinstance(valor, str):
                try:
                    valor = json.loads(valor)
                except ValueError:
                    pass
            var.valor = valor if campos is not None else a_sqlite(valor, var.clase)
            ctx.declarar(p, var)
            # $1, $2... por posición, como en las funciones SQL.
            ctx.declarar(f'${posicion + 1}', var)

    def ejecutar_sql_funcion(self, nombre, ctx):
        cuerpo = self.funciones[nombre][3]
        # $1 → nombre del parámetro (las funciones SQL viejas usan posiciones).
        for i, (p, *_r) in enumerate(self.firmas[nombre]):
            cuerpo = re.sub(rf'\${i + 1}\b', p, cuerpo)
        sentencias = [s for s in _partir_sentencias_sql(cuerpo) if s.strip()]
        resultado = None
        for s in sentencias:
            resultado = self.ejecutar_sql(s, ctx)
        if resultado is None:
            return None
        # Como Postgres: las columnas de RETURNS TABLE (...) se asignan por
        # posición, no por el nombre del SELECT (que puede repetirse: n, n...).
        declaradas = list((self.columnas_de_retorno(nombre) or {}).keys())
        if declaradas and len(declaradas) == len(resultado.columnas):
            registros = [dict(zip(declaradas, fila)) for fila in resultado.filas]
        else:
            registros = resultado.registros()
        if self.devuelve_conjunto(nombre):
            return registros
        if not resultado.filas:
            return None
        if declaradas and len(resultado.columnas) > 1:
            return registros[0]
        return resultado.filas[0][0]

    # -- sentencias --

    def bloque(self, b, ctx):
        ctx.ambitos.append({})
        punto = None
        capturar = bool(b.manejadores)
        if capturar:
            punto = f'pl_{id(b)}_{len(ctx.ambitos)}'
            try:
                ctx.con.execute(f'SAVEPOINT {punto}')
            except sqlite3.OperationalError:
                # Adentro de un disparador (hay una sentencia en curso) SQLite no
                # deja abrir un savepoint: el bloque captura el error igual, sin
                # deshacer lo que hizo antes de fallar.
                punto = None
        try:
            for d in b.declaraciones:
                if d.tipo == 'ALIAS':
                    continue
                tipo = self.tipo_de_columna(d.tipo)
                campos = self.campos_de_tipo(tipo)
                var = Variable(None, tipo, campos if campos is not None else ({} if tipo.upper() == 'RECORD' else None))
                ctx.declarar(d.nombre, var)
                if d.defecto is not None:
                    valor, clase = self.evaluar(d.defecto, ctx)
                    var.valor = a_sqlite(valor, var.clase) if var.clase != 'record' else valor
            self.sentencias(b.cuerpo, ctx)
            if punto:
                ctx.con.execute(f'RELEASE {punto}')
        except ErrorPlpgsql as e:
            if not capturar:
                raise
            if punto:
                ctx.con.execute(f'ROLLBACK TO {punto}')
                ctx.con.execute(f'RELEASE {punto}')
            for condiciones, cuerpo in b.manejadores:
                if any(self.coincide(c, e) for c in condiciones):
                    ctx.declarar('sqlerrm', Variable(e.mensaje, 'TEXT'))
                    ctx.declarar('sqlstate', Variable(e.codigo, 'TEXT'))
                    anterior, ctx.error_actual = ctx.error_actual, e
                    try:
                        self.sentencias(cuerpo, ctx)
                    finally:
                        ctx.error_actual = anterior
                    break
            else:
                raise
        finally:
            ctx.ambitos.pop()

    @staticmethod
    def coincide(condicion, error):
        c = condicion.strip().lower()
        if c == 'others':
            return True
        m = re.match(r"sqlstate\s+'(\w+)'", c)
        if m:
            return error.codigo == m.group(1).upper()
        return CONDICIONES.get(c) == error.codigo

    def sentencias(self, lista, ctx):
        for s in lista:
            self.sentencia(s, ctx)

    def sentencia(self, s, ctx):
        if isinstance(s, Bloque):
            return self.bloque(s, ctx)
        if isinstance(s, Si):
            for cond, cuerpo in s.ramas:
                if self.verdadero(cond, ctx):
                    return self.sentencias(cuerpo, ctx)
            if s.otro:
                self.sentencias(s.otro, ctx)
            return
        if isinstance(s, Caso):
            if s.expresion is not None:
                valor, _ = self.evaluar(s.expresion, ctx)
                for valores, cuerpo in s.ramas:
                    for v in _partir_comas(valores):
                        candidato, _ = self.evaluar(v, ctx)
                        if candidato == valor:
                            return self.sentencias(cuerpo, ctx)
            else:
                for cond, cuerpo in s.ramas:
                    if self.verdadero(cond, ctx):
                        return self.sentencias(cuerpo, ctx)
            if s.otro is None:
                raise ErrorPlpgsql('case not found', '20000')
            return self.sentencias(s.otro, ctx)
        if isinstance(s, (Bucle, Mientras, ParaEntero, ParaConsulta, ParaCada)):
            return self.bucle(s, ctx)
        if isinstance(s, Salir):
            if s.condicion is None or self.verdadero(s.condicion, ctx):
                raise (_Continuar if s.continuar else _Salir)(s.etiqueta)
            return
        if isinstance(s, Retornar):
            return self.retornar(s, ctx)
        if isinstance(s, Lanzar):
            return self.lanzar(s, ctx)
        if isinstance(s, Asignar):
            destino = ctx.buscar(s.destino.split('.')[0])
            llamada = re.match(r'^\s*(\w+)\s*\(', s.expresion)
            if destino is not None and destino.clase == 'record' and '.' not in s.destino and llamada \
                    and llamada.group(1).lower() in self.funciones:
                # registro := función_que_devuelve_una_fila(...)
                r = self.ejecutar_sql(f'SELECT * FROM {s.expresion}', ctx)
                destino.campos = {**(destino.campos or {}),
                                  **{c: CLASE_A_TIPO.get(r.clases.get(c), 'TEXT') for c in r.columnas}}
                destino.valor = dict(zip(r.columnas, r.filas[0])) if r.filas else None
                return
            valor, clase = self.evaluar(s.expresion, ctx)
            if isinstance(valor, str) and clase == 'json':
                var = ctx.buscar(s.destino.split('.')[0])
                if var is not None and var.clase == 'record' and '.' not in s.destino:
                    try:
                        valor = json.loads(valor)
                    except ValueError:
                        pass
            return ctx.asignar(s.destino, valor, clase)
        if isinstance(s, Diagnostico):
            for var, item in s.asignaciones:
                if item == 'ROW_COUNT':
                    ctx.asignar(var, ctx.filas_afectadas)
            return
        if isinstance(s, Sql):
            return self.sql(s, ctx)
        raise ErrorPlpgsql(f'Sentencia no soportada: {type(s).__name__}', '0A000')

    def bucle(self, s, ctx):
        def correr_cuerpo():
            try:
                self.sentencias(s.cuerpo, ctx)
            except _Continuar as c:
                if c.etiqueta and c.etiqueta != s.etiqueta:
                    raise
            return True

        try:
            if isinstance(s, Bucle):
                for _ in range(1_000_000):
                    correr_cuerpo()
                raise ErrorPlpgsql('LOOP sin salida', '54000')
            if isinstance(s, Mientras):
                vueltas = 0
                while self.verdadero(s.condicion, ctx):
                    correr_cuerpo()
                    vueltas += 1
                    if vueltas > 1_000_000:
                        raise ErrorPlpgsql('WHILE sin salida', '54000')
                return
            ctx.ambitos.append({})
            try:
                if isinstance(s, ParaEntero):
                    desde, _ = self.evaluar(s.desde, ctx)
                    hasta, _ = self.evaluar(s.hasta, ctx)
                    paso = int(self.evaluar(s.paso, ctx)[0]) if s.paso else 1
                    rango = range(int(hasta), int(desde) - 1, -paso) if s.reverso else range(int(desde), int(hasta) + 1, paso)
                    var = Variable(None, 'INT')
                    ctx.declarar(s.variable, var)
                    for i in rango:
                        var.valor = i
                        correr_cuerpo()
                    return
                if isinstance(s, ParaCada):
                    arreglo, _ = self.evaluar(s.arreglo, ctx)
                    elementos = json.loads(arreglo) if isinstance(arreglo, str) else (arreglo or [])
                    existente = ctx.buscar(s.variable)
                    var = Variable(None, existente.tipo if existente else 'TEXT')
                    ctx.declarar(s.variable, var)
                    for x in elementos:
                        var.valor = x
                        correr_cuerpo()
                    return
                # FOR registro IN consulta
                r = self.ejecutar_sql(s.consulta, ctx)
                tipos = {c: CLASE_A_TIPO.get(r.clases.get(c), 'TEXT') for c in r.columnas}
                existentes = [ctx.buscar(v) for v in s.variables]
                if len(s.variables) == 1 and (existentes[0] is None or existentes[0].clase == 'record'):
                    var = existentes[0] or Variable(None, 'RECORD', {})
                    if existentes[0] is None:
                        ctx.declarar(s.variables[0], var)
                    var.campos = {**(var.campos or {}), **tipos}
                    var.clase = 'record'
                    destino = None
                else:
                    destino = s.variables
                ctx.encontrado = bool(r.filas)
                for fila in r.filas:
                    if destino is None:
                        var.valor = dict(zip(r.columnas, fila))
                    else:
                        for nombre, v in zip(destino, fila):
                            ctx.asignar(nombre, v)
                    correr_cuerpo()
                ctx.encontrado = bool(r.filas)
            finally:
                ctx.ambitos.pop()
        except _Salir as salida:
            if salida.etiqueta and salida.etiqueta != s.etiqueta:
                raise

    def retornar(self, s, ctx):
        if s.consulta is not None:
            r = self.ejecutar_sql(s.consulta, ctx)
            columnas = list((self.columnas_de_retorno(ctx.funcion) or {}).keys())
            for fila in r.filas:
                if columnas and len(columnas) == len(fila):
                    ctx.resultados.append(dict(zip(columnas, fila)))
                elif len(fila) == 1 and not columnas:
                    ctx.resultados.append(fila[0])
                else:
                    ctx.resultados.append(dict(zip(r.columnas, fila)))
            return
        if s.siguiente:
            if s.expresion:
                valor, _ = self.evaluar(s.expresion, ctx)
                ctx.resultados.append(valor)
            else:
                salidas = [n for n, _t, _d, modo in self.firmas[ctx.funcion] if modo in ('OUT', 'INOUT')]
                ctx.resultados.append({n: ctx.buscar(n).valor for n in salidas})
            return
        if s.expresion is None:
            raise _Retornar(None)
        nombre = s.expresion.strip().lower()
        var = ctx.buscar(nombre)
        if var is not None and var.clase == 'record':
            raise _Retornar(var.valor)
        valor, _ = self.evaluar(s.expresion, ctx)
        raise _Retornar(valor)

    def lanzar(self, s, ctx):
        if s.formato is None and not s.opciones.get('CONDICION') and not s.opciones.get('MESSAGE'):
            if ctx.error_actual is not None:
                raise ctx.error_actual
            raise ErrorPlpgsql('RAISE sin excepción activa', 'P0001')
        mensaje = ''
        if s.formato is not None:
            formato, _ = self.evaluar(s.formato, ctx)
            argumentos = [self.evaluar(a, ctx)[0] for a in s.argumentos]
            partes = re.split(r'(%%|%)', formato or '')
            texto, k = [], 0
            for p in partes:
                if p == '%%':
                    texto.append('%')
                elif p == '%':
                    v = argumentos[k] if k < len(argumentos) else None
                    texto.append('<NULL>' if v is None else str(v))
                    k += 1
                else:
                    texto.append(p)
            mensaje = ''.join(texto)
        opciones = {}
        for clave, expresion in s.opciones.items():
            if clave == 'CONDICION':
                continue
            opciones[clave] = self.evaluar(expresion, ctx)[0]
        if opciones.get('MESSAGE'):
            mensaje = opciones['MESSAGE']
        if s.nivel != 'EXCEPTION':
            logger.debug('%s %s: %s', s.nivel, ctx.funcion, mensaje)
            return
        codigo = opciones.get('ERRCODE') or 'P0001'
        condicion = (s.opciones.get('CONDICION') or '').strip().lower()
        if condicion:
            codigo = CONDICIONES.get(condicion, codigo)
            mensaje = mensaje or condicion
        raise ErrorPlpgsql(mensaje, CONDICIONES.get(str(codigo).lower(), str(codigo)),
                           opciones.get('DETAIL'), opciones.get('HINT'))

    def sql(self, s, ctx):
        texto = s.texto
        if s.perform:
            texto = texto if re.match(r'^\s*(SELECT|WITH)\b', texto, re.I) else f'SELECT {texto}'
        if re.match(r'^\s*EXECUTE\b', texto, re.I):
            dinamico, _ = self.evaluar(re.sub(r'^\s*EXECUTE\s+', '', texto, flags=re.I), ctx)
            texto = dinamico
        r = self.ejecutar_sql(texto, ctx)
        ctx.filas_afectadas = r.filas_afectadas
        es_dml = bool(re.match(r'^\s*(INSERT|UPDATE|DELETE|WITH\s.*\b(INSERT|UPDATE|DELETE)\b)', texto, re.I | re.S))
        ctx.encontrado = (r.filas_afectadas > 0) if es_dml else bool(r.filas)
        if not s.destinos:
            return
        if s.estricto and len(r.filas) != 1:
            if not r.filas:
                raise ErrorPlpgsql('query returned no rows', 'P0002')
            raise ErrorPlpgsql('query returned more than one row', 'P0003')
        fila = r.filas[0] if r.filas else None
        ctx.encontrado = fila is not None
        if len(s.destinos) == 1:
            destino = s.destinos[0]
            var = ctx.buscar(destino.split('.')[0])
            if var is not None and var.clase == 'record' and '.' not in destino:
                tipos = {c: CLASE_A_TIPO.get(r.clases.get(c), 'TEXT') for c in r.columnas}
                if var.campos is not None and not var.campos:
                    var.campos = tipos
                var.valor = dict(zip(r.columnas, fila)) if fila is not None else None
                return
            valor = fila[0] if fila is not None else None
            ctx.asignar(destino, valor, r.clases.get(r.columnas[0]) if r.columnas else None)
            return
        for i, destino in enumerate(s.destinos):
            valor = fila[i] if fila is not None and i < len(fila) else None
            ctx.asignar(destino, valor, r.clases.get(r.columnas[i]) if fila is not None and i < len(r.columnas) else None)


def _partir_sentencias_sql(texto):
    from .esquema import partir_sentencias
    return partir_sentencias(texto)


# ── instancia del proceso ────────────────────────────────────────────────────

_motor = None


_DEFINIDORAS = None


def _definidoras():
    global _DEFINIDORAS
    if _DEFINIDORAS is None:
        try:
            from .politicas_generadas import DEFINIDORAS
            _DEFINIDORAS = frozenset(DEFINIDORAS)
        except ImportError:
            _DEFINIDORAS = frozenset()
    return _DEFINIDORAS


def motor():
    global _motor
    if _motor is None:
        from . import funciones_generadas as g
        from . import vistas_generadas as vg
        _motor = Motor(g.FUNCIONES, g.TABLAS, vg.COLUMNAS, g.ENUMS, getattr(g, 'DEFAULTS', {}))
    return _motor


def ejecutar_funcion(nombre, argumentos=None, conexion=None):
    """Para la RPC: el resultado ya con los tipos de PostgREST."""
    m = motor()
    if nombre not in m.funciones:
        raise ErrorPlpgsql(f'La función {nombre} no existe', '42883')
    crudo = m.ejecutar(nombre, argumentos, conexion)
    columnas = m.columnas_de_retorno(nombre)
    if isinstance(crudo, list):
        salida = []
        for fila in crudo:
            if isinstance(fila, dict):
                salida.append({k: a_api(v, clase_de_tipo_pg(columnas.get(k)) if columnas else None) for k, v in fila.items()})
            else:
                salida.append(a_api(fila, clase_de_tipo_pg(m.tipo_de_retorno(nombre).split()[-1])))
        return _uuids_con_guiones(salida)
    if isinstance(crudo, dict):
        return _uuids_con_guiones({k: a_api(v, clase_de_tipo_pg(columnas.get(k)) if columnas else None)
                                   for k, v in crudo.items()})
    return a_api(crudo, clase_de_tipo_pg(m.tipo_de_retorno(nombre)))
