"""
Traducción de las vistas v_* del dashboard de Postgres a SQLite.

Las 129 vistas del esquema del dashboard son SQL de Postgres. SQLite entiende la mayor parte
(JOIN, CTE, ventanas, FILTER, ORDER BY en agregados, ->>, IS DISTINCT FROM),
pero no la aritmética de fechas, los intervalos, los arreglos ni las funciones
propias del sistema. Este módulo parsea cada vista con sqlglot, infiere los
tipos con el esquema (qualify + annotate_types) y reescribe el árbol:

    representación en SQLite
    ─────────────────────────
    fecha       'YYYY-MM-DD'
    timestamp   'YYYY-MM-DD HH:MM:SS[.ffffff]'  (UTC, como lo guarda Django)
    intervalo   número de días (REAL)
    arreglo     texto JSON

    ts ± INTERVAL '90 days'        → DATETIME(ts, '-90 days')
    fecha ± INTERVAL '1 month'     → pg_sumar_meses(fecha, -1)   (fin de mes como Postgres)
    ts - ts                        → (UNIXEPOCH(a) - UNIXEPOCH(b)) / 86400  (días)
    fecha - fecha                  → CAST(JULIANDAY(a) - JULIANDAY(b) AS INTEGER)
    EXTRACT(EPOCH FROM intervalo)  → días * 86400
    DATE_TRUNC('month', x)         → DATETIME(x, 'start of month')
    ARRAY_AGG / ARRAY[...]         → JSON_GROUP_ARRAY / JSON_ARRAY
    x = ANY(arr)                   → x IN (SELECT value FROM JSON_EACH(arr))
    jsonb ? 'k'                    → pg_json_tiene(jsonb, 'k')

Las funciones SQL propias (`valor_del_prospecto`, `puede_gestionar_retiros`...)
se insertan como subconsultas; las plpgsql que usan las vistas tienen un
equivalente SQL en EQUIVALENTES. Las funciones que SQLite no trae están en
`sqlite_funciones.py`.

Lo usa `manage.py generar_vistas`, que escribe `vistas_generadas.py`.
"""
import re
from itertools import count

import sqlglot
from sqlglot import exp
from sqlglot.optimizer.annotate_types import annotate_types
from sqlglot.optimizer.qualify import qualify

# ── tipos ────────────────────────────────────────────────────────────────────

TEMPORALES = {'date', 'ts'}


def tipo_sqlglot(tipo, enums=()):
    """El tipo de una columna del esquema del dashboard como lo entiende sqlglot."""
    t = (tipo or '').upper().strip()
    base = t.split('(')[0].strip()
    if t.endswith('[]'):
        return 'JSON'
    if base in ('BIGSERIAL', 'SERIAL', 'SMALLSERIAL'):
        return 'BIGINT'
    if base.startswith('TIMESTAMP'):
        return 'TIMESTAMPTZ'
    if base in ('INET', 'CIDR', 'MACADDR', 'CITEXT', '') or base.lower() in enums:
        return 'TEXT'
    return t


def clase_de_tipo(dt):
    """DataType de sqlglot → 'bool' | 'json' | 'date' | 'ts' | 'int' | 'num' | 'uuid' | 'interval' | 'text' | None."""
    if dt is None:
        return None
    t = dt.this
    T = exp.DataType.Type
    if t == T.BOOLEAN:
        return 'bool'
    if t in (T.JSON, T.JSONB, T.ARRAY):
        return 'json'
    if t == T.DATE:
        return 'date'
    if t in (T.TIMESTAMP, T.TIMESTAMPTZ, T.TIMESTAMPLTZ, T.DATETIME, T.TIMESTAMP_S, T.TIMESTAMP_MS):
        return 'ts'
    if t in (T.INT, T.BIGINT, T.SMALLINT, T.TINYINT, T.UINT, T.UBIGINT):
        return 'int'
    if t in (T.DECIMAL, T.DOUBLE, T.FLOAT, T.MONEY):
        return 'num'
    if t == T.UUID:
        return 'uuid'
    if t == T.INTERVAL:
        return 'interval'
    if t in (T.TEXT, T.VARCHAR, T.CHAR, T.NVARCHAR, T.NCHAR):
        return 'text'
    return None


def clase(nodo):
    """La clase de un nodo: la que le puso la reescritura o la inferida por sqlglot."""
    if nodo is None:
        return None
    marcada = nodo.meta.get('clase') if nodo.meta else None
    if marcada:
        return marcada
    return nodo.meta.get('tipo_original') if nodo.meta else clase_de_tipo(nodo.type)


# Funciones de SQLite (propias o nativas) que devuelven un arreglo u objeto
# JSON: lo que en Postgres era un ARRAY o un JSONB.
DEVUELVEN_JSON = {
    'json_array', 'json_object', 'json_group_array', 'json_group_object', 'json_patch',
    'array_remove', 'pg_json_claves', 'pg_json_concatenar', 'pg_json_sin_nulos',
    'pg_json_poner', 'pg_texto_a_arreglo', 'pg_json_agg_distinct',
}


def clase_de_salida(nodo):
    """La clase de una columna de salida ya reescrita, mirando además qué función la arma."""
    c = clase(nodo)
    if c is not None:
        return c
    while isinstance(nodo, (exp.Paren, exp.Coalesce)):
        nodo = nodo.this
        c = clase(nodo)
        if c is not None:
            return c
    if isinstance(nodo, exp.Func):
        nombre = (nodo.name if isinstance(nodo, exp.Anonymous) else nodo.sql_name()).lower()
        if nombre in DEVUELVEN_JSON:
            return 'json'
    return None


def marcar(nodo, c):
    nodo.meta['clase'] = c
    return nodo


def f(nombre, *args):
    """Una llamada a función de SQLite."""
    return exp.Anonymous(this=nombre, expressions=[a for a in args])


def lit(v):
    return exp.Literal.string(v) if isinstance(v, str) else exp.Literal.number(v)


def normalizar_cadenas(sql):
    """
    E'...\\n...' (cadenas con escapes de Postgres) → '...' con el carácter real.
    sqlglot no las genera para SQLite y deja la sentencia rota.
    """
    def decodificar(m):
        cuerpo = m.group(1)
        escapes = {'n': '\n', 't': '\t', 'r': '\r', '\\': '\\', "'": "'", 'b': '\b', 'f': '\f'}
        texto = re.sub(r'\\(.)', lambda e: escapes.get(e.group(1), e.group(1)), cuerpo.replace("''", "'"))
        return "'" + texto.replace("'", "''") + "'"
    sql = re.sub(r"(?<![\w'])[Ee]'((?:[^'\\]|\\.|'')*)'", decodificar, sql)
    # LOCALTIME / LOCALTIMESTAMP de Postgres (la hora de la sesión, que es UTC).
    sql = re.sub(r'\bLOCALTIMESTAMP\b', 'CURRENT_TIMESTAMP', sql, flags=re.I)
    sql = re.sub(r'\bLOCALTIME\b', "CAST(CURRENT_TIMESTAMP AS TIME)", sql, flags=re.I)
    return sql


RESERVADAS = {'null', 'true', 'false', 'select', 'from', 'where', 'order', 'group', 'limit', 'case', 'when',
              'then', 'else', 'end', 'and', 'or', 'not', 'in', 'is', 'as', 'on', 'join', 'table', 'index',
              'default', 'check', 'unique', 'primary', 'key', 'references', 'values', 'set', 'to', 'by'}


def como_json(nodo):
    """Un valor JSON adentro de JSON_OBJECT / JSON_ARRAY: con json() para que no quede como texto."""
    if clase(nodo) == 'json':
        return f('JSON', nodo)
    return nodo


# ── intervalos ───────────────────────────────────────────────────────────────

DIAS_POR_UNIDAD = {
    'MICROSECOND': 1 / 86400e6, 'MILLISECOND': 1 / 86400e3, 'SECOND': 1 / 86400, 'MINUTE': 1 / 1440,
    'HOUR': 1 / 24, 'DAY': 1, 'WEEK': 7, 'MONTH': 30, 'YEAR': 365,
}
MODIFICADOR = {
    'SECOND': 'seconds', 'MINUTE': 'minutes', 'HOUR': 'hours', 'DAY': 'days', 'WEEK': None,
    'MONTH': 'months', 'YEAR': 'years',
}


def partes_de_intervalo(nodo):
    """
    INTERVAL '90 days' / '1 year 2 months' / '24 hours' → [(cantidad, UNIDAD)].
    None si el intervalo no es un literal.
    """
    texto = None
    unidad = None
    if isinstance(nodo, exp.Interval):
        cosa = nodo.this
        unidad = nodo.text('unit').upper() if nodo.args.get('unit') else None
        if isinstance(cosa, exp.Literal):
            texto = cosa.this
        else:
            return None
    elif isinstance(nodo, exp.Cast) and isinstance(nodo.this, exp.Literal) and nodo.to.this == exp.DataType.Type.INTERVAL:
        texto = nodo.this.this
    else:
        return None
    if unidad:
        unidad = unidad.rstrip('S')
        try:
            return [(float(texto), unidad)]
        except ValueError:
            pass
    salida = []
    for cantidad, u in re.findall(r'(-?\d+(?:\.\d+)?)\s*([A-Za-z]+)', str(texto)):
        u = u.upper().rstrip('S')
        u = {'MON': 'MONTH', 'MIN': 'MINUTE', 'SEC': 'SECOND', 'HR': 'HOUR', 'YR': 'YEAR', 'D': 'DAY',
             'H': 'HOUR', 'M': 'MINUTE'}.get(u, u)
        salida.append((float(cantidad), u))
    hms = re.search(r'(\d+):(\d\d)(?::(\d\d))?', str(texto))
    if hms:
        salida.append((int(hms.group(1)) + int(hms.group(2)) / 60 + int(hms.group(3) or 0) / 3600, 'HOUR'))
    return salida or None


def intervalo_en_dias(partes):
    return sum(c * DIAS_POR_UNIDAD.get(u, 0) for c, u in partes)


def es_intervalo(nodo):
    return isinstance(nodo, exp.Interval) or (
        isinstance(nodo, exp.Cast) and nodo.to.this == exp.DataType.Type.INTERVAL) or clase(nodo) == 'interval'


def entero(texto):
    v = float(texto)
    return int(v) if v == int(v) else v


# ── el traductor ─────────────────────────────────────────────────────────────


def partir_por_comas_simple(texto):
    """Corta por comas que no estén entre paréntesis: `a NUMERIC(10,2), b TEXT`."""
    partes, nivel, actual = [], 0, ''
    for c in texto:
        if c == '(':
            nivel += 1
        elif c == ')':
            nivel -= 1
        if c == ',' and nivel == 0:
            partes.append(actual)
            actual = ''
        else:
            actual += c
    if actual.strip():
        partes.append(actual)
    return partes


def normalizar_postgres(arbol):
    """
    Corrige dos lecturas de sqlglot que no son Postgres:

    - `x -> clave` dentro de los argumentos de una función lo lee como una
      lambda (`x -> expresión`). En Postgres no hay lambdas: es el operador
      JSON. Sin esto `jsonb_build_array(v_antes -> e.key, ...)` dejaba
      `v_antes` sin reemplazar ("no such column: v_antes").
    - `jsonb_object_agg` / `json_object_agg` llegan como nodo propio y no como
      función genérica: se devuelven a genérica para que la traduzca `funcion`.
    """
    # Dos pasadas: transform() no entra en el nodo que devuelve, así que una
    # lambda adentro de un jsonb_object_agg reemplazado quedaría sin corregir.
    def sin_lambda(nodo):
        if isinstance(nodo, exp.Lambda) and len(nodo.expressions) == 1 and isinstance(nodo.expressions[0], exp.Identifier):
            return exp.JSONExtract(this=exp.Column(this=nodo.expressions[0].copy()), expression=nodo.this.copy())
        return nodo

    agregados = tuple(c for c in (getattr(exp, 'JSONBObjectAgg', None), getattr(exp, 'JSONObjectAgg', None)) if c)

    def agregado_generico(nodo):
        if agregados and isinstance(nodo, agregados) and nodo.args.get('expression') is not None:
            nombre = 'jsonb_object_agg' if type(nodo).__name__.startswith('JSONB') else 'json_object_agg'
            return exp.Anonymous(this=nombre, expressions=[nodo.this.copy(), nodo.args['expression'].copy()])
        return nodo

    return arbol.transform(sin_lambda).transform(agregado_generico)


class Traductor:
    def __init__(self, esquema, equivalentes=None):
        self.e = esquema
        enums = set(esquema.enums)
        self.tipos = {t.nombre: {c.nombre: tipo_sqlglot(c.tipo, enums) for c in t.columnas.values()}
                      for t in esquema.tablas.values()}
        self.funciones_sql = {}
        # RETURNS TABLE (a, b): las columnas se llaman así aunque el cuerpo
        # seleccione otros nombres.
        self.columnas_de_retorno = {}
        for nombre, fn in esquema.funciones.items():
            if fn.lenguaje == 'sql' and fn.cuerpo.strip():
                self.funciones_sql[nombre] = (fn.argumentos, fn.cuerpo)
                tabla = re.match(r'(?:SETOF\s+)?TABLE\s*\((.*)\)\s*$', fn.retorna or '', re.I | re.S)
                if tabla:
                    self.columnas_de_retorno[nombre] = [
                        c.strip().split()[0].strip('"').lower() for c in partir_por_comas_simple(tabla.group(1))]
        self.funciones_sql.update(equivalentes or {})
        self.funciones_conocidas = set(esquema.funciones)
        self._alias = count(1)

    # -- entrada --

    def traducir(self, sql, envolver=None):
        """
        (sql_sqlite, {columna: clase}) de una vista de Postgres.

        `envolver(arbol)` cambia el árbol antes de traducirlo: lo usa la RLS de
        las vistas security_invoker (apps/dashboard/politicas_rls.py).
        """
        sql = re.sub(r'\bauth\.uid\(\)', 'auth_uid()', sql, flags=re.I)
        sql = normalizar_cadenas(sql)
        for patron, reemplazo in REESCRITURAS:
            sql = re.sub(patron, reemplazo, sql, flags=re.I | re.S)
        arbol = sqlglot.parse_one(sql, read='postgres')
        if envolver is not None:
            arbol = envolver(arbol)
        return self.traducir_arbol(arbol)

    def traducir_arbol(self, arbol):
        """Como traducir(), sobre un árbol de sqlglot ya armado (lo usa el intérprete)."""
        arbol = normalizar_postgres(arbol)
        arbol = self.insertar_funciones(arbol)
        self.values_con_columnas(arbol)
        self.conjuntos_en_select(arbol)
        arbol = self.sin_grouping_sets(arbol)
        # De adentro hacia afuera: un LATERAL puede tener otro adentro.
        for select in reversed(list(arbol.find_all(exp.Select, bfs=False))):
            self.sin_lateral(select)
        try:
            arbol = qualify(arbol, schema=self.tipos, dialect='postgres', validate_qualify_columns=False,
                            quote_identifiers=False, identify=False)
        except Exception:
            pass
        try:
            arbol = annotate_types(arbol, schema=self.tipos)
        except Exception:
            pass
        for nodo in arbol.walk():
            nodo.meta['tipo_original'] = clase_de_tipo(nodo.type)
        salida = self.columnas_de_salida(arbol)
        # Columnas cifradas en reposo: se leen con pg_descifrar y se escriben
        # con pg_cifrar (apps/core/cifrado.py).
        from apps.core.cifrado import aplicar_cifrado
        arbol = aplicar_cifrado(arbol, self.tipos)
        arbol = self.reescribir(arbol)
        # Lo que sqlglot no supo tipar (ARRAY(SELECT ...), funciones propias) lo
        # sabe la reescritura: sin esto un arreglo saldría como texto JSON.
        for nombre, proy in self.proyecciones_de_salida(arbol).items():
            if salida.get(nombre) is None and nombre in salida:
                salida[nombre] = clase_de_salida(proy.unalias() if isinstance(proy, exp.Alias) else proy)
        # Alias que son palabras reservadas (`SELECT NULL::UUID` → AS null).
        for alias in arbol.find_all(exp.Alias):
            ident = alias.args.get('alias')
            if isinstance(ident, exp.Identifier) and ident.name.lower() in RESERVADAS:
                ident.set('quoted', True)
        # INSERT ... SELECT ... ON CONFLICT: SQLite exige un WHERE en el SELECT
        # para no confundir el ON CONFLICT con un JOIN ... ON.
        for insert in arbol.find_all(exp.Insert):
            sel = insert.expression
            if insert.args.get('conflict') is not None and isinstance(sel, exp.Select) and not sel.args.get('where'):
                sel.set('where', exp.Where(this=exp.true()))
        return arbol.sql(dialect='sqlite'), salida

    def registrar_vista(self, nombre, columnas):
        """Las columnas de una vista ya traducida, para las que la usan."""
        self.tipos[nombre] = columnas

    # -- columnas de salida --

    def proyecciones_de_salida(self, arbol):
        """{nombre: proyección} del SELECT de afuera (el primero de un UNION)."""
        select = arbol
        while isinstance(select, (exp.Union, exp.Except, exp.Intersect)):
            select = select.this
        if isinstance(select, exp.Subquery):
            select = select.this
        if not isinstance(select, exp.Select):
            return {}
        return {p.alias_or_name: p for p in select.expressions if p.alias_or_name and p.alias_or_name != '*'}

    def columnas_de_salida(self, arbol):
        select = arbol
        while isinstance(select, (exp.Union, exp.Except, exp.Intersect)):
            select = select.this
        if isinstance(select, exp.Subquery):
            select = select.this
        if not isinstance(select, exp.Select):
            # INSERT/UPDATE/DELETE: lo que devuelve es su RETURNING.
            retorno = select.args.get('returning') if isinstance(select, exp.Expression) else None
            proyecciones = retorno.expressions if retorno is not None else []
        else:
            proyecciones = select.expressions
        salida = {}
        for proy in proyecciones:
            nombre = proy.alias_or_name
            if not nombre or nombre == '*':
                continue
            salida[nombre] = clase_de_tipo(proy.type)
        return salida

    def tipos_para_esquema(self, salida):
        mapa = {'bool': 'BOOLEAN', 'json': 'JSON', 'date': 'DATE', 'ts': 'TIMESTAMPTZ', 'int': 'BIGINT',
                'num': 'DECIMAL', 'uuid': 'UUID', 'interval': 'INTERVAL', 'text': 'TEXT'}
        return {c: mapa.get(k, 'TEXT') for c, k in salida.items()}

    # -- funciones propias --

    def insertar_funciones(self, arbol):
        def reemplazar(nodo):
            if isinstance(nodo, exp.Anonymous) and nodo.name.lower() in self.funciones_sql:
                return self.cuerpo_insertado(nodo.name.lower(), nodo.expressions)
            return nodo
        # Varias pasadas: una función puede llamar a otra.
        for _ in range(4):
            antes = arbol.sql()
            arbol = arbol.transform(reemplazar)
            if arbol.sql() == antes:
                break
        return arbol

    def cuerpo_insertado(self, nombre, argumentos):
        firma, cuerpo = self.funciones_sql[nombre]
        parametros = []
        for p in [x.strip() for x in re.split(r',(?![^(]*\))', firma) if x.strip()]:
            m = re.match(r'(?:IN\s+)?(\w+)\s+(.*?)(?:\s+DEFAULT\s+(.*))?$', p, re.I | re.S)
            if m:
                parametros.append((m.group(1).lower(), m.group(3)))
        cuerpo = re.sub(r'\bauth\.uid\(\)', 'auth_uid()', cuerpo.strip().rstrip(';'), flags=re.I)
        sub = sqlglot.parse_one(cuerpo, read='postgres')
        # Los alias del cuerpo se renombran: `clientes c` adentro de la función no
        # puede tapar la `c` de la consulta que la llama.
        sufijo = f'_fn{next(self._alias)}'
        renombres = {}
        for tabla in sub.find_all(exp.Table):
            alias = tabla.alias
            if alias:
                renombres[alias] = alias + sufijo
                tabla.set('alias', exp.TableAlias(this=exp.to_identifier(alias + sufijo)))
        for col in sub.find_all(exp.Column):
            if col.table in renombres:
                col.set('table', exp.to_identifier(renombres[col.table]))
        valores = {}
        for i, (p, defecto) in enumerate(parametros):
            if i < len(argumentos):
                valores[p] = argumentos[i]
            elif defecto:
                valores[p] = sqlglot.parse_one(defecto, read='postgres')
            else:
                valores[p] = exp.Null()

        def poner(nodo):
            if isinstance(nodo, exp.Column) and not nodo.table and nodo.name.lower() in valores:
                return valores[nodo.name.lower()].copy()
            return nodo

        sub = sub.transform(poner)
        nombres = self.columnas_de_retorno.get(nombre)
        if nombres:
            primero = sub
            while isinstance(primero, (exp.Union, exp.Except, exp.Intersect)):
                primero = primero.this
            if isinstance(primero, exp.Select) and len(primero.expressions) == len(nombres):
                primero.set('expressions', [
                    exp.alias_(p.unalias() if isinstance(p, exp.Alias) else p, n)
                    for p, n in zip(primero.expressions, nombres)])
        return exp.Subquery(this=sub)

    # -- VALUES con nombres de columna --

    def values_con_columnas(self, arbol):
        """
        `FROM (VALUES (1, 'a'), (2, 'b')) AS v(n, letra)`: SQLite no admite los
        nombres en el alias; sus columnas se llaman column1, column2... Se
        envuelve en un SELECT que les pone los nombres.
        """
        for valores in list(arbol.find_all(exp.Values)):
            alias = valores.args.get('alias')
            if alias is None or not isinstance(valores.parent, (exp.From, exp.Join, exp.Subquery)):
                continue
            columnas = [c.name for c in alias.columns]
            if not columnas:
                # Sin nombres: los de SQLite (column1, column2...), que sqlglot
                # cambiaría por _col_0 al expandir un SELECT *.
                primera = valores.expressions[0] if valores.expressions else None
                n = len(primera.expressions) if isinstance(primera, exp.Tuple) else 1
                columnas = [f'column{i + 1}' for i in range(n)]
            nombre = alias.name
            proy = [exp.alias_(exp.column(f'column{i + 1}'), c) for i, c in enumerate(columnas)]
            interno = valores.copy()
            interno.set('alias', None)
            sub = exp.select(*proy).from_(exp.Subquery(this=interno))
            valores.replace(exp.Subquery(this=sub, alias=exp.TableAlias(this=exp.to_identifier(nombre))))

    # -- funciones que devuelven conjuntos en el SELECT --

    CONJUNTOS = {
        'jsonb_object_keys': 'key', 'json_object_keys': 'key',
        'jsonb_array_elements': 'value', 'json_array_elements': 'value',
        'jsonb_array_elements_text': 'value', 'json_array_elements_text': 'value', 'unnest': 'value',
    }

    def conjuntos_en_select(self, arbol):
        """
        `SELECT jsonb_object_keys(x)` / `SELECT id, unnest(arr) FROM t`: en
        Postgres una función que devuelve filas en la proyección multiplica las
        filas. En SQLite se escribe con JSON_EACH en el FROM.
        """
        for select in list(arbol.find_all(exp.Select)):
            for i, proy in enumerate(list(select.expressions)):
                base = proy.this if isinstance(proy, exp.Alias) else proy
                if not isinstance(base, exp.Anonymous) and not isinstance(base, exp.Explode) \
                        and type(base).__name__ not in ('Unnest',):
                    continue
                nombre = base.name.lower() if isinstance(base, exp.Anonymous) else 'unnest'
                if nombre not in self.CONJUNTOS:
                    continue
                args = base.expressions if isinstance(base, (exp.Anonymous, exp.Unnest)) else [base.this]
                if not args:
                    continue
                alias = f'_srf{next(self._alias)}'
                columna = proy.alias_or_name if isinstance(proy, exp.Alias) else nombre
                select.expressions[i] = exp.alias_(exp.column(self.CONJUNTOS[nombre], table=alias), columna)
                fuente = exp.Table(this=f('JSON_EACH', args[0]), alias=exp.TableAlias(this=exp.to_identifier(alias)))
                if select.args.get('from_') or select.args.get('from'):
                    select.append('joins', exp.Join(this=fuente))
                else:
                    select.set('from_', exp.From(this=fuente))

    # -- LATERAL --

    # Funciones de tabla que se usan con JOIN LATERAL: su equivalente en
    # sqlite_funciones devuelve la fila como objeto JSON.
    FUNCIONES_DE_FILA = {'comision_de_periodo': 'pg_comision_de_periodo'}

    def sin_lateral(self, select):
        """
        SQLite no tiene LATERAL. Cuando la subconsulta lateral da una sola fila
        (agregados sin GROUP BY, LIMIT 1, o sin FROM), cada `alias.columna` de
        afuera se reemplaza por la subconsulta correlacionada de esa columna.
        Si el JOIN no es LEFT y la subconsulta puede no dar filas, se agrega
        EXISTS al WHERE, que es lo que hacía el JOIN.
        """
        joins = select.args.get('joins') or []
        quedan = []
        for join in joins:
            lateral = join.this
            if not isinstance(lateral, exp.Lateral):
                quedan.append(join)
                continue
            alias = lateral.alias
            interno = lateral.this
            if isinstance(interno, exp.Anonymous) and interno.name.lower() in self.FUNCIONES_DE_FILA:
                llamada = f(self.FUNCIONES_DE_FILA[interno.name.lower()], *interno.expressions)

                def por_columna(col, _ll=llamada):
                    return f('JSON_EXTRACT', _ll.copy(), lit(f'$.{col}'))
                self._reemplazar_columnas(select, alias, por_columna)
                continue
            if isinstance(interno, exp.Anonymous) and interno.name.lower() in self.funciones_conocidas:
                # LATERAL f(t.x) de una función que devuelve filas: JSON_EACH sí
                # puede recibir columnas de las tablas de antes en SQLite.
                llamada = f('pg_filas', lit(interno.name.lower()), *interno.expressions)
                join.set('this', exp.Table(this=f('JSON_EACH', llamada), alias=exp.TableAlias(this=exp.to_identifier(alias))))
                quedan.append(join)

                def por_columna(col, _a=alias):
                    return f('JSON_EXTRACT', exp.column('value', table=_a), lit(f'$.{col}'))
                self._reemplazar_columnas(select, alias, por_columna)
                continue
            sub = interno.this if isinstance(interno, exp.Subquery) else interno
            if not isinstance(sub, exp.Select):
                quedan.append(join)
                continue
            una_fila = (not sub.args.get('group') and any(p.find(exp.AggFunc) for p in sub.expressions)) \
                or (sub.args.get('limit') is not None) or not sub.args.get('from_') and not sub.args.get('from')
            if not una_fila:
                quedan.append(join)
                continue
            proyecciones = {p.alias_or_name: (p.this if isinstance(p, exp.Alias) else p) for p in sub.expressions}

            def por_columna(col, _sub=sub, _proy=proyecciones):
                if col not in _proy:
                    return exp.Null()
                escalar = _sub.copy()
                escalar.set('expressions', [_proy[col].copy()])
                return exp.Subquery(this=escalar)
            self._reemplazar_columnas(select, alias, por_columna)
            agrega = not sub.args.get('group') and any(p.find(exp.AggFunc) for p in sub.expressions)
            if join.side != 'LEFT' and not agrega and (sub.args.get('from_') or sub.args.get('from')):
                existe = exp.Exists(this=sub.copy())
                donde = select.args.get('where')
                select.set('where', exp.Where(this=exp.and_(donde.this, existe) if donde else existe))
        select.set('joins', quedan)

    def _reemplazar_columnas(self, select, alias, por_columna):
        def cambiar(nodo):
            if isinstance(nodo, exp.Column) and nodo.table == alias:
                return por_columna(nodo.name)
            return nodo
        # Una proyección que era `alias.columna` sin AS conserva el nombre: si no,
        # la columna de la vista pasa a llamarse como la subconsulta.
        proyecciones = []
        for p in select.expressions:
            if isinstance(p, exp.Column) and p.table == alias:
                proyecciones.append(exp.alias_(por_columna(p.name), p.name))
            else:
                proyecciones.append(p)
        select.set('expressions', proyecciones)
        for clave in ('expressions', 'where', 'group', 'having', 'order', 'qualify'):
            valor = select.args.get(clave)
            if isinstance(valor, list):
                select.set(clave, [v.transform(cambiar) for v in valor])
            elif isinstance(valor, exp.Expression):
                select.set(clave, valor.transform(cambiar))
        for join in select.args.get('joins') or []:
            if join.args.get('on') is not None:
                join.set('on', join.args['on'].transform(cambiar))
            if isinstance(join.this, exp.Lateral):
                join.this.set('this', join.this.this.transform(cambiar))

    # -- GROUPING SETS --

    def sin_grouping_sets(self, arbol):
        """GROUP BY GROUPING SETS ((a, b), ()) → un SELECT por conjunto, unidos con UNION ALL."""
        for select in list(arbol.find_all(exp.Select)):
            grupo = select.args.get('group')
            if not grupo:
                continue
            sets = [g for g in grupo.expressions if isinstance(g, exp.GroupingSets)]
            conjuntos = list(grupo.args.get('grouping_sets') or [])
            for g in sets:
                conjuntos.extend(g.expressions)
            if not conjuntos:
                continue
            todas = []
            for gs in conjuntos:
                for c in (gs.expressions if isinstance(gs, exp.Tuple) else [gs.this] if isinstance(gs, exp.Paren) else [gs]):
                    todas.append(c)
            partes = []
            for gs in conjuntos:
                if isinstance(gs, exp.Tuple):
                    elegidas = list(gs.expressions)
                elif isinstance(gs, exp.Paren):
                    elegidas = [gs.this]
                else:
                    elegidas = [gs]
                elegidas_sql = {e.sql() for e in elegidas}
                copia = select.copy()
                proy = []
                for p in copia.expressions:
                    base = p.this if isinstance(p, exp.Alias) else p
                    if base.sql() in {t.sql() for t in todas} and base.sql() not in elegidas_sql:
                        proy.append(exp.alias_(exp.Null(), p.alias_or_name))
                    else:
                        proy.append(p)
                copia.set('expressions', proy)
                copia.set('group', exp.Group(expressions=[e.copy() for e in elegidas]) if elegidas else None)
                partes.append(copia)
            union = partes[0]
            for p in partes[1:]:
                union = exp.Union(this=union, expression=p, distinct=False)
            if select is arbol:
                return union
            select.replace(exp.Subquery(this=union) if not isinstance(select.parent, exp.Subquery) else union)
        return arbol

    # -- reescritura --

    def reescribir(self, nodo):
        if not isinstance(nodo, exp.Expression):
            return nodo
        previo = self.antes_de_hijos(nodo)
        if previo is not None:
            return previo
        for clave, valor in list(nodo.args.items()):
            if isinstance(valor, exp.Expression):
                nodo.set(clave, self.reescribir(valor))
            elif isinstance(valor, list):
                nodo.set(clave, [self.reescribir(v) if isinstance(v, exp.Expression) else v for v in valor])
        return self.despues_de_hijos(nodo)

    def r(self, nodo):
        return self.reescribir(nodo)

    def antes_de_hijos(self, nodo):
        """Reglas que necesitan ver los hijos sin reescribir (intervalos literales)."""
        if isinstance(nodo, (exp.Add, exp.Sub)):
            return self.aritmetica_temporal(nodo)
        if isinstance(nodo, exp.Extract):
            return self.extract(nodo)
        if isinstance(nodo, exp.Array) and nodo.expressions and isinstance(nodo.expressions[0], (exp.Select, exp.Subquery, exp.Union)):
            return self.array_de_subconsulta(nodo)
        return None

    def aritmetica_temporal(self, nodo):
        izq, der = nodo.this, nodo.expression
        ci, cd = clase(izq), clase(der)
        signo = '+' if isinstance(nodo, exp.Add) else '-'

        # INTERVAL + fecha → fecha + INTERVAL
        if isinstance(nodo, exp.Add) and (es_intervalo(izq) or self.multiplica_intervalo(izq)) and cd in TEMPORALES:
            izq, der, ci, cd = der, izq, cd, ci

        # fecha/ts ± intervalo
        if ci in TEMPORALES and (es_intervalo(der) or self.multiplica_intervalo(der)):
            return self.sumar_intervalo(izq, der, signo, ci)

        # fecha/ts - fecha/ts
        if isinstance(nodo, exp.Sub) and ci in TEMPORALES and cd in TEMPORALES:
            if ci == 'date' and cd == 'date':
                resta = exp.Sub(this=f('JULIANDAY', f('DATE', self.r(izq))), expression=f('JULIANDAY', f('DATE', self.r(der))))
                return marcar(exp.Cast(this=exp.Paren(this=resta), to=exp.DataType.build('INTEGER')), 'int')
            # En segundos exactos (JULIANDAY pierde milisegundos) y después a días.
            segundos = exp.Sub(this=f('UNIXEPOCH', self.r(izq), lit('subsec')),
                               expression=f('UNIXEPOCH', self.r(der), lit('subsec')))
            return marcar(exp.Paren(this=exp.Div(this=exp.Paren(this=segundos), expression=lit(86400.0))), 'interval')

        # fecha ± entero (días)
        if ci == 'date' and cd in ('int', 'num', None) and not es_intervalo(der) and cd != 'date':
            if cd is None and not isinstance(der, exp.Literal):
                return None
            dias = self.r(der)
            mod = exp.DPipe(this=exp.DPipe(this=lit(signo), expression=exp.Cast(this=dias, to=exp.DataType.build('TEXT'))),
                            expression=lit(' days'))
            return marcar(f('DATE', self.r(izq), mod), 'date')
        return None

    def multiplica_intervalo(self, nodo):
        return isinstance(nodo, exp.Mul) and (es_intervalo(nodo.this) or es_intervalo(nodo.expression))

    def sumar_intervalo(self, base, intervalo, signo, clase_base):
        base_sql = self.r(base)
        factor = None
        if self.multiplica_intervalo(intervalo):
            if es_intervalo(intervalo.this):
                intervalo, factor = intervalo.this, intervalo.expression
            else:
                intervalo, factor = intervalo.expression, intervalo.this
        partes = partes_de_intervalo(intervalo)
        if partes is None:
            # Intervalo calculado (una columna, un texto casteado): en días.
            dias = self.r(intervalo)
            if factor is not None:
                dias = exp.Mul(this=dias, expression=self.r(factor))
            op = exp.Add if signo == '+' else exp.Sub
            return marcar(f('DATETIME', op(this=f('JULIANDAY', base_sql), expression=exp.Paren(this=dias))), 'ts')

        meses = sum(c * (12 if u == 'YEAR' else 1) for c, u in partes if u in ('MONTH', 'YEAR'))
        dias = sum(c * DIAS_POR_UNIDAD[u] for c, u in partes if u not in ('MONTH', 'YEAR') and u in DIAS_POR_UNIDAD)
        resultado = base_sql
        es_fecha = clase_base == 'date' and dias == int(dias) and all(u in ('DAY', 'WEEK', 'MONTH', 'YEAR') for _, u in partes)
        if meses:
            cantidad = lit(entero(meses if signo == '+' else -meses))
            if factor is not None:
                cantidad = exp.Mul(this=cantidad, expression=self.r(factor.copy()))
            resultado = f('pg_sumar_meses', resultado, cantidad, lit(1 if es_fecha else 0))
        if dias:
            segundos = dias * 86400
            if factor is not None:
                mod = exp.DPipe(this=exp.DPipe(this=lit(signo), expression=exp.Cast(
                    this=exp.Mul(this=lit(entero(segundos)), expression=self.r(factor.copy())),
                    to=exp.DataType.build('TEXT'))), expression=lit(' seconds'))
            elif segundos % 86400 == 0:
                mod = lit(f'{signo}{int(segundos // 86400)} days')
            else:
                mod = lit(f'{signo}{entero(segundos)} seconds')
            resultado = f('DATE' if es_fecha else 'DATETIME', resultado, mod)
        elif not meses:
            resultado = f('DATE' if es_fecha else 'DATETIME', resultado)
        return marcar(resultado, 'date' if es_fecha else 'ts')

    UNIDADES_STRFTIME = {
        'YEAR': '%Y', 'MONTH': '%m', 'DAY': '%d', 'HOUR': '%H', 'MINUTE': '%M', 'SECOND': '%S',
        'DOW': '%w', 'DOY': '%j', 'WEEK': '%W',
    }

    def extract(self, nodo):
        unidad = nodo.this.name.upper() if nodo.this else ''
        x = nodo.expression
        # EXTRACT(... FROM AGE(a, b)): años y meses completos.
        if isinstance(x, exp.Anonymous) and x.name.upper() == 'AGE':
            args = x.expressions
            hasta, desde = (args[0], args[1]) if len(args) == 2 else (exp.CurrentDate(), args[0])
            meses = f('pg_meses_entre', self.r(desde), self.r(hasta))
            if unidad == 'YEAR':
                return marcar(exp.Cast(this=exp.Div(this=meses, expression=lit(12)), to=exp.DataType.build('INTEGER')), 'int')
            if unidad == 'MONTH':
                return marcar(exp.Mod(this=meses, expression=lit(12)), 'int')
            if unidad == 'DAY':
                return marcar(exp.Cast(this=f('pg_edad_dias', self.r(hasta), self.r(desde)), to=exp.DataType.build('INTEGER')), 'int')
        while isinstance(x, exp.Paren):
            x = x.this
        partes = partes_de_intervalo(x)
        # Se reescribe primero: `(a - b)` entre timestamps queda marcado como
        # intervalo recién después de reescribirlo.
        valor = None if partes else self.r(x)
        es_dias = partes is not None or es_intervalo(x) or clase(valor) == 'interval'
        if es_dias:
            dias = lit(intervalo_en_dias(partes)) if partes else valor
            if unidad == 'EPOCH':
                return marcar(exp.Mul(this=exp.Paren(this=dias), expression=lit(86400)), 'num')
            if unidad == 'DAY':
                return marcar(exp.Cast(this=dias, to=exp.DataType.build('INTEGER')), 'int')
            if unidad == 'HOUR':
                return marcar(exp.Mod(this=exp.Cast(this=exp.Mul(this=exp.Paren(this=dias), expression=lit(24)),
                                                    to=exp.DataType.build('INTEGER')), expression=lit(24)), 'int')
            if unidad == 'MINUTE':
                return marcar(exp.Mod(this=exp.Cast(this=exp.Mul(this=exp.Paren(this=dias), expression=lit(1440)),
                                                    to=exp.DataType.build('INTEGER')), expression=lit(60)), 'int')
            return marcar(exp.Cast(this=dias, to=exp.DataType.build('INTEGER')), 'int')
        if valor is None:
            valor = self.r(x)
        if unidad == 'EPOCH':
            return marcar(f('UNIXEPOCH', valor, lit('subsec')), 'num')
        if unidad == 'QUARTER':
            mes = exp.Cast(this=f('STRFTIME', lit('%m'), valor), to=exp.DataType.build('INTEGER'))
            return marcar(exp.Cast(this=exp.Div(this=exp.Paren(this=exp.Add(this=mes, expression=lit(2))), expression=lit(3)),
                                   to=exp.DataType.build('INTEGER')), 'int')
        if unidad == 'ISODOW':
            dow = exp.Cast(this=f('STRFTIME', lit('%w'), valor), to=exp.DataType.build('INTEGER'))
            return marcar(exp.Add(this=exp.Mod(this=exp.Paren(this=exp.Add(this=dow, expression=lit(6))), expression=lit(7)),
                                  expression=lit(1)), 'int')
        formato = self.UNIDADES_STRFTIME.get(unidad)
        if formato is None:
            return None
        return marcar(exp.Cast(this=f('STRFTIME', lit(formato), valor), to=exp.DataType.build('INTEGER')), 'int')

    def array_de_subconsulta(self, nodo):
        sub = nodo.expressions[0]
        if isinstance(sub, exp.Subquery):
            sub = sub.this
        sub = self.r(sub)
        if isinstance(sub, exp.Select) and len(sub.expressions) == 1 and isinstance(sub.expressions[0], exp.Anonymous) \
                and sub.expressions[0].name.lower() == 'jsonb_object_keys':
            arg = sub.expressions[0].expressions[0]
            return marcar(f('pg_json_claves', arg), 'json')
        alias = f'_arr{next(self._alias)}'
        columna = sub.expressions[0].alias_or_name if isinstance(sub, exp.Select) and sub.expressions else None
        if not columna or columna == '*':
            columna = None
        primera = sub.expressions[0] if isinstance(sub, exp.Select) else None
        if isinstance(sub, exp.Select) and primera is not None and not primera.alias:
            sub.expressions[0] = exp.alias_(primera, '_v')
            columna = '_v'
        valor = exp.column(columna or '_v', table=alias)
        consulta = exp.select(f('JSON_GROUP_ARRAY', valor)).from_(exp.Subquery(this=sub, alias=exp.TableAlias(this=exp.to_identifier(alias))))
        return marcar(exp.Coalesce(this=exp.Subquery(this=consulta), expressions=[lit('[]')]), 'json')

    def despues_de_hijos(self, nodo):
        T = exp.DataType.Type

        if isinstance(nodo, (exp.Interval,)):
            partes = partes_de_intervalo(nodo)
            if partes is not None:
                return marcar(lit(entero(intervalo_en_dias(partes))), 'interval')
            return marcar(f('pg_intervalo_dias', nodo.this), 'interval')

        if isinstance(nodo, exp.Cast):
            destino = nodo.to.this
            x = nodo.this
            if destino == T.DATE:
                return marcar(f('DATE', x), 'date')
            if destino in (T.TIMESTAMP, T.TIMESTAMPTZ, T.TIMESTAMPLTZ, T.DATETIME):
                return marcar(f('DATETIME', x), 'ts')
            if destino == T.INTERVAL:
                partes = partes_de_intervalo(nodo) if isinstance(x, exp.Literal) else None
                if partes is not None:
                    return marcar(lit(entero(intervalo_en_dias(partes))), 'interval')
                return marcar(f('pg_intervalo_dias', x), 'interval')
            if destino == T.TIME:
                return f('TIME', x)
            if destino in (T.TEXT, T.VARCHAR, T.CHAR, T.NVARCHAR):
                if clase(x) == 'bool':
                    return marcar(f('pg_texto_bool', x), 'text')
                return marcar(exp.Cast(this=x, to=exp.DataType.build('TEXT')), 'text')
            if destino in (T.INT, T.BIGINT, T.SMALLINT, T.TINYINT):
                return marcar(exp.Cast(this=x, to=exp.DataType.build('INTEGER')), 'int')
            if destino in (T.DECIMAL, T.DOUBLE, T.FLOAT):
                return marcar(exp.Cast(this=x, to=exp.DataType.build('REAL')), 'num')
            if destino == T.BOOLEAN:
                return marcar(x, 'bool')
            if destino in (T.JSON, T.JSONB, T.ARRAY):
                return marcar(x, 'json')
            # UUID, INET, enums...: el valor ya es el que se guarda.
            return x

        if isinstance(nodo, (exp.TimestampTrunc, exp.DateTrunc)):
            unidad = (nodo.text('unit') or '').upper()
            x = nodo.this
            if unidad in ('DAY', 'DD'):
                return marcar(f('DATETIME', x, lit('start of day')), 'ts')
            if unidad in ('MONTH', 'MON', 'MM'):
                return marcar(f('DATETIME', x, lit('start of month')), 'ts')
            if unidad in ('YEAR', 'YYYY'):
                return marcar(f('DATETIME', x, lit('start of year')), 'ts')
            if unidad == 'WEEK':
                return marcar(f('DATETIME', x, lit('start of day'), lit('-6 days'), lit('weekday 1')), 'ts')
            if unidad == 'HOUR':
                return marcar(f('STRFTIME', lit('%Y-%m-%d %H:00:00'), x), 'ts')
            if unidad == 'MINUTE':
                return marcar(f('STRFTIME', lit('%Y-%m-%d %H:%M:00'), x), 'ts')
            if unidad == 'QUARTER':
                mes = exp.Cast(this=f('STRFTIME', lit('%m'), x.copy()), to=exp.DataType.build('INTEGER'))
                atras = exp.DPipe(this=exp.DPipe(this=lit('-'), expression=exp.Cast(
                    this=exp.Mod(this=exp.Paren(this=exp.Sub(this=mes, expression=lit(1))), expression=lit(3)),
                    to=exp.DataType.build('TEXT'))), expression=lit(' months'))
                return marcar(f('DATETIME', x, lit('start of month'), atras), 'ts')
            return marcar(f('DATETIME', x), 'ts')

        if isinstance(nodo, exp.AtTimeZone):
            return marcar(f('pg_en_zona', nodo.this, nodo.args.get('zone')), 'ts')

        if isinstance(nodo, exp.Array):
            return marcar(f('JSON_ARRAY', *[como_json(x) for x in nodo.expressions]), 'json')

        if isinstance(nodo, exp.ArrayAgg):
            x = nodo.this
            if isinstance(x, exp.Distinct):
                return marcar(f('pg_json_agg_distinct', x.expressions[0]), 'json')
            return marcar(exp.Coalesce(this=f('JSON_GROUP_ARRAY', como_json(x)), expressions=[lit('[]')]), 'json')

        if isinstance(nodo, (exp.EQ, exp.NEQ)) and isinstance(nodo.expression, exp.Any):
            arreglo = nodo.expression.this
            sub = exp.select('value').from_(f('JSON_EACH', arreglo))
            en = exp.In(this=nodo.this, query=exp.Subquery(this=sub))
            return marcar(en if isinstance(nodo, exp.EQ) else exp.Not(this=en), 'bool')

        if isinstance(nodo, exp.GroupConcat):
            x = nodo.this
            sep = nodo.args.get('separator') or lit(',')
            if isinstance(x, exp.Distinct):
                return marcar(f('pg_string_agg_distinct', x.expressions[0], sep), 'text')
            if isinstance(x, exp.Order) and isinstance(x.this, exp.Distinct):
                return marcar(f('pg_string_agg_distinct', x.this.expressions[0], sep), 'text')
            return nodo

        if isinstance(nodo, exp.JSONBContainsTopKey) or type(nodo).__name__ == 'JSONBContains':
            return marcar(f('pg_json_tiene', nodo.this, nodo.expression), 'bool')
        if isinstance(nodo, exp.ArrayContainsAll):
            return marcar(f('pg_array_contiene', nodo.this, nodo.expression), 'bool')
        if type(nodo).__name__ in ('ArrayOverlaps',):
            return marcar(f('pg_array_solapa', nodo.this, nodo.expression), 'bool')
        if isinstance(nodo, exp.RegexpILike):
            return marcar(f('pg_regexp', nodo.this, nodo.expression, lit('i')), 'bool')
        if isinstance(nodo, exp.RegexpLike):
            return marcar(f('pg_regexp', nodo.this, nodo.expression), 'bool')
        if isinstance(nodo, exp.BitwiseLeftShift) and clase(nodo.this) in ('text', None) and clase(nodo.expression) in ('text', None):
            return marcar(f('pg_ip_en_red', nodo.this, nodo.expression), 'bool')
        if isinstance(nodo, exp.WithinGroup) and isinstance(nodo.this, exp.Anonymous) is False:
            agg = nodo.this
            orden = nodo.expression
            if type(agg).__name__ in ('PercentileCont', 'PercentileDisc') and isinstance(orden, exp.Order) and orden.expressions:
                p = agg.this
                x = orden.expressions[0].this
                return marcar(f('pg_percentil', p, x), 'num')
        if isinstance(nodo, exp.Pad):
            return f('rpad' if nodo.args.get('is_left') is False else 'lpad', nodo.this, nodo.expression,
                     nodo.args.get('fill_pattern') or lit(' '))
        if isinstance(nodo, exp.Unnest) and isinstance(nodo.parent, (exp.From, exp.Join)):
            return f('JSON_EACH', *nodo.expressions)

        if isinstance(nodo, exp.DPipe) and 'json' in (clase(nodo.this), clase(nodo.expression)):
            # jsonb || jsonb: agrega al arreglo o combina objetos, no concatena texto.
            return marcar(f('pg_json_concatenar', nodo.this, nodo.expression), 'json')

        if isinstance(nodo, exp.Filter) and isinstance(nodo.this, exp.Coalesce):
            # ARRAY_AGG(x) FILTER (WHERE ...): el FILTER va pegado al agregado,
            # no al COALESCE que lo envuelve.
            co = nodo.this
            co.set('this', exp.Filter(this=co.this, expression=nodo.expression))
            return co

        if isinstance(nodo, exp.Anonymous):
            return self.funcion(nodo)
        return nodo

    def funcion(self, nodo):
        nombre = nodo.name.lower()
        a = nodo.expressions
        if nombre in ('jsonb_agg', 'json_agg'):
            return marcar(exp.Coalesce(this=f('JSON_GROUP_ARRAY', *[como_json(x) for x in a]), expressions=[lit('[]')]), 'json')
        if nombre in ('jsonb_build_object', 'json_build_object'):
            return marcar(f('JSON_OBJECT', *[como_json(x) for x in a]), 'json')
        if nombre in ('jsonb_build_array', 'json_build_array'):
            return marcar(f('JSON_ARRAY', *[como_json(x) for x in a]), 'json')
        if nombre in ('to_jsonb', 'to_json'):
            return marcar(a[0], 'json')
        if nombre in ('jsonb_array_length', 'json_array_length'):
            return marcar(f('JSON_ARRAY_LENGTH', *a), 'int')
        if nombre in ('jsonb_strip_nulls', 'json_strip_nulls'):
            return marcar(f('pg_json_sin_nulos', *a), 'json')
        if nombre in ('jsonb_object_agg', 'json_object_agg'):
            return marcar(f('JSON_GROUP_OBJECT', a[0], como_json(a[1])), 'json')
        if nombre in ('jsonb_each', 'json_each', 'jsonb_each_text', 'json_each_text',
                      'jsonb_array_elements', 'json_array_elements', 'jsonb_array_elements_text',
                      'json_array_elements_text'):
            return f('JSON_EACH', *a)
        if nombre in ('jsonb_typeof', 'json_typeof'):
            return f('JSON_TYPE', *a)
        if nombre in ('jsonb_set', 'json_set'):
            return marcar(f('pg_json_poner', *a), 'json')
        if nombre in ('jsonb_insert',):
            return marcar(f('pg_json_poner', *a), 'json')
        if nombre in ('array_append',):
            return marcar(f('pg_json_concatenar', a[0], f('JSON_ARRAY', a[1])), 'json')
        if nombre in ('array_to_string',):
            return f('pg_arreglo_a_texto', *a)
        if nombre in ('string_to_array',):
            return marcar(f('pg_texto_a_arreglo', *a), 'json')
        if nombre in ('unnest',):
            return f('JSON_EACH', *a)
        if nombre in ('cardinality', 'array_length'):
            return marcar(f('pg_array_largo', a[0]), 'int')
        if nombre == 'jsonb_object_keys':
            return marcar(f('pg_json_claves', *a), 'json')
        if nombre == 'age':
            if len(a) == 1:
                return marcar(f('pg_edad_dias', exp.CurrentTimestamp(), a[0]), 'interval')
            return marcar(f('pg_edad_dias', a[0], a[1]), 'interval')
        if nombre == 'make_date':
            return marcar(f('pg_make_date', *a), 'date')
        if nombre in ('family', 'network', 'host', 'masklen'):
            return f(f'pg_{nombre}', *a)
        if nombre in ('gen_random_uuid', 'uuid_generate_v4'):
            return f('pg_uuid')
        if nombre == 'regexp_replace':
            return f('pg_regexp_reemplazar', *a)
        if nombre == 'to_char':
            return marcar(f('pg_to_char', *a), 'text')
        if nombre in ('now', 'statement_timestamp', 'clock_timestamp', 'transaction_timestamp'):
            return marcar(exp.CurrentTimestamp(), 'ts')
        if nombre == 'timezone' and len(a) == 2:
            return marcar(f('pg_en_zona', a[1], a[0]), 'ts')
        if nombre == 'date_part' and len(a) == 2 and isinstance(a[0], exp.Literal):
            return self.extract(exp.Extract(this=exp.var(a[0].this.upper()), expression=a[1])) or nodo
        if nombre in ('btrim',):
            return f('TRIM', *a)
        if nombre in ('char_length', 'character_length'):
            return f('LENGTH', *a)
        if nombre == 'to_date':
            return marcar(f('DATE', a[0]), 'date')
        return nodo


# ── reescrituras puntuales ───────────────────────────────────────────────────
# LATERAL que dan varias filas y no se pueden volver subconsulta escalar: se
# reescriben, en el SQL de Postgres, como un JOIN común equivalente.

REESCRITURAS = [
    # v_comision_equipo / v_comision_embudo: los períodos de cada vendedor más
    # el mes en curso. La correlación (x.vendedor_id = u.id) pasa al ON.
    (
        # Tolera las dos formas: la original y la que deja la expansión de `*`
        # (`AS periodo`, `AS x`, `CAST(DATE_TRUNC('MONTH', ...) AS DATE) AS _col_0`).
        r"CROSS\s+JOIN\s+LATERAL\s*\(\s*SELECT\s+DISTINCT\s+x\.periodo(?:\s+AS\s+periodo)?\s+FROM\s+comision_ventas\s+(?:AS\s+)?x\s+"
        r"WHERE\s+x\.vendedor_id\s*=\s*u\.id\s+AND\s+x\.periodo\s+IS\s+NOT\s+NULL\s+UNION\s+"
        r"SELECT\s+(?:DATE_TRUNC\('month',\s*CURRENT_DATE\)::DATE|CAST\(DATE_TRUNC\('MONTH',\s*CURRENT_DATE\)\s+AS\s+DATE\))"
        r"(?:\s+AS\s+\w+)?\s*\)\s*(?:AS\s+)?per",
        "JOIN (SELECT DISTINCT x.vendedor_id AS vendedor_id, x.periodo AS periodo FROM comision_ventas x "
        "WHERE x.periodo IS NOT NULL UNION SELECT u_per.id, DATE_TRUNC('month', CURRENT_DATE)::DATE "
        "FROM usuarios_sistema u_per) per ON per.vendedor_id = u.id",
    ),
]


# ── equivalentes de las funciones plpgsql que usan las vistas ────────────────

EQUIVALENTES = {
    # Meses completos desde el último pago (o desde que es abonado). Migración 121.
    'meses_sin_pago': (
        'p_cliente UUID, p_hasta DATE DEFAULT CURRENT_DATE',
        """SELECT CASE WHEN r.ref IS NULL OR r.ref >= p_hasta THEN 0
                       ELSE pg_meses_entre(r.ref, p_hasta) END
             FROM (SELECT COALESCE(
                       (SELECT MAX(pg.fecha_pago)::DATE FROM pagos pg
                         WHERE pg.client_id = p_cliente AND NOT pg.anulado),
                       (SELECT COALESCE(c.ultimo_pago_externo, c.activado_en::DATE,
                                        c.fecha_instalacion::DATE, c.created_at::DATE)
                          FROM clientes c WHERE c.id = p_cliente)) AS ref) r""",
    ),
    # Meses completos desde la factura con saldo más vieja. Migración 153.
    'meses_de_atraso': (
        'p_cliente UUID, p_hasta DATE DEFAULT CURRENT_DATE',
        """SELECT CASE WHEN r.vence IS NULL OR r.vence >= p_hasta THEN 0
                       ELSE pg_meses_entre(r.vence, p_hasta) END
             FROM (SELECT MIN(COALESCE(f.fecha_vencimiento, f.fecha_emision))::DATE AS vence
                     FROM v_facturas_por_cobrar f WHERE f.client_id = p_cliente) r""",
    ),
}
