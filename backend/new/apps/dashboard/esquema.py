"""
El esquema del dashboard: tablas, vistas, funciones, disparadores y seguridad
por fila, en SQL de Postgres.

La fuente está en apps/dashboard/esquema_fuente.py. De ahí sale lo que corre
en SQLite:

    manage.py generar_vistas   → vistas_generadas.py, funciones_generadas.py,
                                 politicas_generadas.py
    manage.py generar_esquemas_zod → la validación del frente

Las tablas, en cambio, son los modelos de Django (columnas.py y cada app): una
columna nueva se agrega en el modelo y se migra con makemigrations. Lo que hay
en esquema_fuente.TABLAS es lo que necesitan el traductor y el intérprete para
saber el tipo de cada columna.

    esquema = leer_esquema()
    esquema.tablas['clientes'].columnas['estado']   → Columna(...)
    esquema.vistas['v_clientes_ficha']                → 'SELECT ...'
    esquema.funciones['aplicar_cobro']                → Funcion(...)
"""
import re
from collections import OrderedDict
from dataclasses import dataclass, field


@dataclass
class Columna:
    nombre: str
    tipo: str                    # en mayúsculas, sin restricciones: 'VARCHAR(20)', 'UUID'
    nulo: bool = True
    default: str = None          # tal cual en SQL: "'activo'", 'NOW()', '0'
    referencia: str = None       # tabla a la que apunta
    referencia_col: str = None   # columna a la que apunta (None = la PK)
    al_borrar: str = None        # CASCADE / SET NULL / RESTRICT
    opciones: list = None        # CHECK (col IN (...))
    pk: bool = False
    unico: bool = False
    generada: str = None         # GENERATED ALWAYS AS (expr) STORED
    identidad: bool = False      # GENERATED ... AS IDENTITY / SERIAL


@dataclass
class Tabla:
    nombre: str
    columnas: 'OrderedDict[str, Columna]' = field(default_factory=OrderedDict)
    unicos: list = field(default_factory=list)       # [('olt_id', 'sn'), ...]
    pk: tuple = ()


@dataclass
class Funcion:
    nombre: str
    argumentos: str
    retorna: str
    cuerpo: str
    lenguaje: str
    definidor: bool = False      # SECURITY DEFINER: corre con los permisos del dueño


@dataclass
class Politica:
    """Una política de seguridad por fila, con sus expresiones en SQL de Postgres."""
    nombre: str
    tabla: str
    comando: str                 # ALL / SELECT / INSERT / UPDATE / DELETE
    roles: tuple                 # ('authenticated',), ('public',), ('anon', 'authenticated')...
    usar: str = None             # USING (...)
    chequear: str = None         # WITH CHECK (...)


@dataclass
class Trigger:
    nombre: str
    tabla: str
    momento: str                 # BEFORE INSERT OR UPDATE ...
    funcion: str
    condicion: str = None        # WHEN (...)


@dataclass
class Esquema:
    tablas: 'OrderedDict[str, Tabla]' = field(default_factory=OrderedDict)
    vistas: 'OrderedDict[str, str]' = field(default_factory=OrderedDict)
    columnas_de_vista: dict = field(default_factory=dict)
    indices_unicos: dict = field(default_factory=dict)      # nombre → (tabla, columnas_sql, where_sql)
    semillas: list = field(default_factory=list)            # [(orden, tabla, INSERT ...)]
    enums: dict = field(default_factory=dict)
    funciones: dict = field(default_factory=dict)
    triggers: dict = field(default_factory=dict)            # (tabla, nombre) → Trigger
    # Seguridad por fila: tablas con RLS activo, sus políticas, columnas que se
    # le quitaron al personal y vistas que corren con los permisos de quien
    # consulta (security_invoker).
    rls: set = field(default_factory=set)
    politicas: dict = field(default_factory=dict)          # tabla → {nombre: Politica}
    columnas_revocadas: dict = field(default_factory=dict) # tabla → {columna}
    vistas_invoker: set = field(default_factory=set)


def leer_esquema():
    """El esquema completo, armado desde esquema_fuente.py."""
    from . import esquema_fuente as f

    e = Esquema()
    for nombre, t in f.TABLAS.items():
        e.tablas[nombre] = Tabla(
            nombre=nombre,
            columnas=OrderedDict((c['nombre'], Columna(**c)) for c in t['columnas']),
            unicos=[tuple(u) for u in t['unicos']],
            pk=tuple(t['pk']),
        )
    e.vistas = OrderedDict(f.VISTAS)
    e.columnas_de_vista = dict(f.COLUMNAS_DE_VISTA)
    e.indices_unicos = {n: tuple(v) for n, v in f.INDICES_UNICOS.items()}
    e.semillas = [tuple(s) for s in f.SEMILLAS]
    e.enums = dict(f.ENUMS)
    e.funciones = {n: Funcion(nombre=n, **d) for n, d in f.FUNCIONES.items()}
    e.triggers = {(t['tabla'], t['nombre']): Trigger(**t) for t in f.TRIGGERS}
    e.rls = set(f.RLS)
    e.politicas = {
        tabla: OrderedDict((p['nombre'], Politica(tabla=tabla, roles=tuple(p.pop('roles')), **p))
                           for p in (dict(x) for x in lista))
        for tabla, lista in f.POLITICAS.items()
    }
    e.columnas_revocadas = {t: set(c) for t, c in f.COLUMNAS_REVOCADAS.items()}
    e.vistas_invoker = set(f.VISTAS_INVOKER)
    return e


# ── Partir el SQL en sentencias (lo usa el intérprete de PL/pgSQL) ──────────

_DOLAR = re.compile(r'\$[A-Za-z_]*\$')


def partir_sentencias(sql):
    """
    Corta por `;` de primer nivel, respetando comillas, comentarios y bloques
    $tag$...$tag$. Devuelve las sentencias sin los comentarios.
    """
    sentencias, actual = [], []
    i, n = 0, len(sql)
    while i < n:
        c = sql[i]
        if c == '-' and sql.startswith('--', i):
            fin = sql.find('\n', i)
            i = n if fin < 0 else fin
            continue
        if c == '/' and sql.startswith('/*', i):
            fin = sql.find('*/', i + 2)
            i = n if fin < 0 else fin + 2
            continue
        if c == "'":
            j = i + 1
            while j < n:
                if sql[j] == "'":
                    if j + 1 < n and sql[j + 1] == "'":
                        j += 2
                        continue
                    break
                j += 1
            actual.append(sql[i:j + 1])
            i = j + 1
            continue
        if c == '"':
            j = sql.find('"', i + 1)
            j = n - 1 if j < 0 else j
            actual.append(sql[i:j + 1])
            i = j + 1
            continue
        if c == '$':
            m = _DOLAR.match(sql, i)
            if m:
                etiqueta = m.group(0)
                fin = sql.find(etiqueta, m.end())
                fin = n if fin < 0 else fin + len(etiqueta)
                actual.append(sql[i:fin])
                i = fin
                continue
        if c == ';':
            texto = ''.join(actual).strip()
            if texto:
                sentencias.append(texto)
            actual = []
            i += 1
            continue
        actual.append(c)
        i += 1
    texto = ''.join(actual).strip()
    if texto:
        sentencias.append(texto)
    return sentencias
