"""
Embeds de PostgREST: los paréntesis dentro del `select`.

PostgREST resuelve `select('*, proveedores(nombre)')` como una relación anidada.
El handler genérico los tomaba como nombres de columna y respondía 400, así que
las pantallas que los usan —Compras, en Inventario, y los intentos de retiro, en
Cartera— quedaban con error en vez de con datos.

Las relaciones se resuelven contra las claves foráneas REALES de la base
(`information_schema` en Postgres, `PRAGMA` en SQLite) y no adivinando el nombre
de la columna por el de la tabla: `retiro_intentos` apunta a `usuarios_sistema`
por `creado_por`, y ninguna regla de plurales va de `usuarios_sistema` a
`creado_por`.

Sin clave foránea no hay embed: una vista SQL no las declara, así que ahí la
relación se omite —mejor una pantalla sin una columna que una pantalla con
error—.
"""
import logging
import re
import uuid

from django.db import connection

logger = logging.getLogger(__name__)

IDENTIFICADOR = re.compile(r'^[A-Za-z_][A-Za-z0-9_]*$')
_UUID_CON_GUIONES = re.compile(r'^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')


def partir_select(select_str):
    """
    '*, proveedores(nombre), compra_items(*, articulos(nombre))' →

    (['*'], [('proveedores', 'nombre'), ('compra_items', '*, articulos(nombre)')])

    Se recorre contando paréntesis: el contenido de un embed anidado pertenece al
    texto del padre, no a la lista del padre.
    """
    if not select_str:
        return [], []

    base, embeds, actual, profundidad = [], [], '', 0

    for caracter in select_str:
        if caracter == '(':
            profundidad += 1
            actual += caracter
        elif caracter == ')':
            profundidad -= 1
            actual += caracter
            if profundidad == 0:
                nombre, _, dentro = actual.partition('(')
                embeds.append((nombre.strip(), dentro[:-1].strip()))
                actual = ''
        elif caracter == ',' and profundidad == 0:
            if actual.strip():
                base.append(actual.strip())
            actual = ''
        else:
            actual += caracter

    if actual.strip():
        base.append(actual.strip())

    return base, embeds


def _claves_foraneas_de_la_base():
    """
    Todas las claves foráneas, como {(tabla local, tabla referida): columna local}.

    Se leen de la base y no de un diccionario propio: las migraciones ya declaran
    las relaciones, y duplicarlas acá sería una lista que se desactualiza sola.
    """
    claves = {}

    with connection.cursor() as cursor:
        if connection.vendor == 'postgresql':
            cursor.execute(
                """
                SELECT tc.table_name, kcu.column_name, ccu.table_name
                FROM information_schema.table_constraints tc
                JOIN information_schema.key_column_usage kcu
                  ON kcu.constraint_name = tc.constraint_name
                 AND kcu.table_schema = tc.table_schema
                JOIN information_schema.constraint_column_usage ccu
                  ON ccu.constraint_name = tc.constraint_name
                 AND ccu.table_schema = tc.table_schema
                WHERE tc.constraint_type = 'FOREIGN KEY'
                """
            )
            for local, columna, referida in cursor.fetchall():
                claves[(local, referida)] = columna
            return claves

        # SQLite: hay que preguntar tabla por tabla.
        cursor.execute("SELECT name FROM sqlite_master WHERE type IN ('table', 'view')")
        tablas = [fila[0] for fila in cursor.fetchall()]

    for tabla in tablas:
        if not IDENTIFICADOR.match(tabla):
            continue
        try:
            with connection.cursor() as cursor:
                cursor.execute(f'PRAGMA foreign_key_list("{tabla}")')
                for fila in cursor.fetchall():
                    # (id, seq, tabla_referida, columna_local, columna_referida, ...)
                    claves[(tabla, fila[2])] = fila[3]
        except Exception:  # una vista no acepta el PRAGMA de claves foráneas
            continue

    return claves


def _salientes(tabla, relaciones):
    """{tabla_referida: columna_local} — el hijo apunta al padre."""
    return {
        referida: columna
        for (local, referida), columna in relaciones.items()
        if local == tabla
    }


def _entrantes(tabla, relaciones):
    """{tabla_hija: columna_hija} — el hijo apunta a esta tabla."""
    return {
        local: columna
        for (local, referida), columna in relaciones.items()
        if referida == tabla
    }


class Relaciones:
    """
    Las claves foráneas de la base, leídas una sola vez por consulta.

    Sin esto cada embed las volvía a leer —y en SQLite eso es un PRAGMA por
    tabla de la base—, cuatro veces por nivel de anidamiento.
    """

    def __init__(self):
        self._todas = None

    @property
    def todas(self):
        if self._todas is None:
            self._todas = _claves_foraneas_de_la_base()
        return self._todas


def columnas_necesarias(tabla, embeds, relaciones=None):
    """
    Columnas de más que hacen falta para resolver los embeds de este nivel: el
    `id` (para agrupar los embed entrantes) y la columna de la clave foránea
    cuando no se pidió. Se quitan del resultado antes de responder.
    """
    relaciones = relaciones or Relaciones()
    todas = relaciones.todas

    necesarias = set()
    salientes = _salientes(tabla, todas)
    entrantes = _entrantes(tabla, todas)

    for nombre, _ in embeds:
        if nombre in salientes:
            necesarias.add(salientes[nombre])
        elif nombre in entrantes:
            necesarias.add('id')

    return necesarias


def adjuntar(filas, tabla, embeds, relaciones=None):
    """
    Agrega a cada fila sus relaciones anidadas, con la forma de PostgREST: un
    objeto cuando el embed es "muchos a uno" y una lista cuando es "uno a muchos".
    """
    if not filas or not embeds:
        return

    relaciones = relaciones or Relaciones()
    salientes = _salientes(tabla, relaciones.todas)
    entrantes = _entrantes(tabla, relaciones.todas)

    for nombre, sub_select in embeds:
        if not IDENTIFICADOR.match(nombre):
            continue

        columnas, sub_embeds = partir_select(sub_select)

        if nombre in salientes:
            columna = salientes[nombre]
            claves = {fila.get(columna) for fila in filas} - {None}
            hijos, extras = _traer(nombre, columnas, 'id', claves)
            adjuntar(hijos, nombre, sub_embeds, relaciones)
            por_id = {_clave(hijo.get('id')): hijo for hijo in hijos}
            _quitar(hijos, extras)
            for fila in filas:
                fila[nombre] = por_id.get(_clave(fila.get(columna)))
        elif nombre in entrantes:
            columna = entrantes[nombre]
            claves = {fila.get('id') for fila in filas} - {None}
            hijos, extras = _traer(nombre, columnas, columna, claves)
            adjuntar(hijos, nombre, sub_embeds, relaciones)
            agrupados = {}
            for hijo in hijos:
                agrupados.setdefault(_clave(hijo.get(columna)), []).append(hijo)
            _quitar(hijos, extras)
            for fila in filas:
                fila[nombre] = agrupados.get(_clave(fila.get('id')), [])
        else:
            logger.debug(
                'sin clave foránea entre "%s" y "%s": el embed se omite', tabla, nombre,
            )


def _adaptar(valor):
    """
    SQLite no sabe ligar un UUID (ni un Decimal) a un parámetro: el error es
    "type 'UUID' is not supported". En Postgres los adapta psycopg2, así que la
    conversión se hace sólo donde hace falta —y con la misma forma con la que
    Django los guarda ahí, sin guiones.
    """
    if connection.vendor == 'postgresql':
        return valor
    if isinstance(valor, str) and _UUID_CON_GUIONES.match(valor):
        return valor.replace('-', '').lower()
    if valor is None or isinstance(valor, (int, float, str, bytes, bool)):
        return valor
    if isinstance(valor, uuid.UUID):
        return valor.hex
    return str(valor)


def _clave(valor):
    """
    La forma con la que se comparan las claves de los dos lados del embed.

    Un UUID llega como UUID desde el ORM y como texto desde el SQL crudo, así que
    sin igualarlos la relación no engancha nunca: el padre busca por UUID y el
    hijo está indexado por texto.
    """
    if valor is None:
        return None
    if isinstance(valor, uuid.UUID):
        return valor.hex
    if isinstance(valor, str) and _UUID_CON_GUIONES.match(valor):
        return valor.replace('-', '').lower()
    return str(valor)


def _traer(tabla, columnas, columna, valores):
    """
    Trae las filas del embed. Devuelve (filas, columnas_extra): las extra —el id y
    la columna de la clave foránea— se piden siempre porque hacen falta para
    agrupar, y se borran después.
    """
    if not valores:
        return [], []

    extras = [c for c in ('id', columna) if c not in columnas]
    pedidas = [c for c in extras + columnas if IDENTIFICADOR.match(c)]
    proyeccion = ', '.join(f'"{c}"' for c in pedidas) if pedidas else '*'

    from . import rls

    # Un embed es una lectura más: solo tablas del dashboard y con su RLS.
    if not rls.tabla_expuesta(tabla):
        return [], extras

    huecos = ', '.join(['%s'] * len(valores))
    sql = f'SELECT {proyeccion} FROM "{tabla}" WHERE "{columna}" IN ({huecos})'
    filtro_rls = rls.filtro(tabla, 'select')
    if filtro_rls:
        sql += f' AND {filtro_rls}'

    with connection.cursor() as cursor:
        cursor.execute(sql, [_adaptar(v) for v in valores])
        nombres = [c[0] for c in cursor.description]
        filas = [dict(zip(nombres, fila)) for fila in cursor.fetchall()]

    from .views_generic import convertir_salida
    return rls.quitar_ocultas(tabla, convertir_salida(tabla, filas)), extras


def _quitar(filas, columnas):
    """Borra las columnas que se pidieron sólo para resolver los embeds."""
    for fila in filas:
        for columna in columnas:
            fila.pop(columna, None)
