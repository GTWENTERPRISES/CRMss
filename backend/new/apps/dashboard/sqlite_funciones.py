"""
Funciones de Postgres que SQLite no trae, registradas en cada conexión.

Las vistas del dashboard (traducidas por `vistas_sqlite.py`) las llaman por
estos nombres. Las convenciones de representación en SQLite son:

- fecha:     'YYYY-MM-DD'
- timestamp: 'YYYY-MM-DD HH:MM:SS[.ffffff]' en UTC (como lo guarda Django)
- intervalo: número de días (REAL)
- arreglo:   texto JSON
"""
import hashlib
import ipaddress
import json
import re
from datetime import date, datetime, timedelta
from zoneinfo import ZoneInfo

from django.db.backends.signals import connection_created

from . import contexto


# ── utilidades ───────────────────────────────────────────────────────────────


def _fecha(valor):
    if valor is None:
        return None
    if isinstance(valor, (date, datetime)):
        return valor if isinstance(valor, date) and not isinstance(valor, datetime) else valor.date()
    texto = str(valor)[:10]
    try:
        return date.fromisoformat(texto)
    except ValueError:
        return None


def _momento(valor):
    if valor is None:
        return None
    texto = str(valor).replace('T', ' ').replace('Z', '')
    texto = re.sub(r'([+-]\d\d:?\d\d)$', '', texto)
    for formato in ('%Y-%m-%d %H:%M:%S.%f', '%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M', '%Y-%m-%d'):
        try:
            return datetime.strptime(texto, formato)
        except ValueError:
            continue
    return None


def _json(valor):
    if valor is None:
        return None
    if isinstance(valor, (list, dict)):
        return valor
    try:
        return json.loads(valor)
    except (TypeError, ValueError):
        return None


# ── funciones escalares ──────────────────────────────────────────────────────


def auth_uid():
    return contexto.usuario_id()


def rls_activa():
    """Si la seguridad por fila corre para esta consulta (ver apps/dashboard/contexto.py)."""
    return 1 if contexto.rls_activa() else 0


def pg_json_tiene(valor, clave):
    """`jsonb ? 'clave'`: si el objeto tiene la clave o el arreglo el elemento."""
    datos = _json(valor)
    if datos is None or clave is None:
        return None
    if isinstance(datos, dict):
        return 1 if clave in datos else 0
    if isinstance(datos, list):
        return 1 if clave in datos or str(clave) in [str(x) for x in datos] else 0
    return 1 if datos == clave else 0


def pg_json_claves(valor):
    datos = _json(valor)
    return json.dumps(list(datos.keys())) if isinstance(datos, dict) else '[]'


def pg_json_concatenar(a, b):
    """`jsonb || jsonb`: arreglo + valor agrega, objeto + objeto combina, arreglo + arreglo une."""
    x, y = _json(a), _json(b)
    if x is None or y is None:
        return None
    if isinstance(x, list):
        return json.dumps(x + (y if isinstance(y, list) else [y]))
    if isinstance(y, list):
        return json.dumps([x] + y)
    if isinstance(x, dict) and isinstance(y, dict):
        return json.dumps({**x, **y})
    return json.dumps([x, y])


def pg_json_sin_nulos(valor):
    def limpiar(x):
        if isinstance(x, dict):
            return {k: limpiar(v) for k, v in x.items() if v is not None}
        if isinstance(x, list):
            return [limpiar(v) for v in x]
        return x
    datos = _json(valor)
    return None if datos is None else json.dumps(limpiar(datos))


def pg_json_poner(objetivo, ruta, valor, crear=1):
    """jsonb_set(objetivo, '{a,b}', valor): pone el valor en la ruta."""
    datos = _json(objetivo)
    if datos is None:
        return None
    claves = [c.strip().strip('"') for c in str(ruta).strip('{}').split(',') if c.strip()]
    nuevo = _json(valor) if isinstance(valor, str) and valor[:1] in '[{"' or valor in ('true', 'false', 'null') else valor
    actual = datos
    for c in claves[:-1]:
        if isinstance(actual, list):
            actual = actual[int(c)]
        else:
            actual = actual.setdefault(c, {})
    if claves:
        if isinstance(actual, list):
            actual[int(claves[-1])] = nuevo
        else:
            actual[claves[-1]] = nuevo
    return json.dumps(datos)


def pg_arreglo_a_texto(arreglo, separador, nulo=None):
    datos = _json(arreglo)
    if datos is None:
        return None
    return str(separador).join(str(x) if x is not None else (nulo or '') for x in datos if x is not None or nulo)


def pg_texto_a_arreglo(texto, separador, nulo=None):
    if texto is None:
        return None
    partes = str(texto).split(separador) if separador is not None else list(str(texto))
    return json.dumps([None if nulo is not None and p == nulo else p for p in partes])


def pg_array_contiene(a, b):
    """`a @> b` entre arreglos JSON."""
    a, b = _json(a), _json(b)
    if a is None or b is None:
        return None
    return 1 if all(x in a for x in b) else 0


def pg_array_solapa(a, b):
    """`a && b` entre arreglos JSON."""
    a, b = _json(a), _json(b)
    if a is None or b is None:
        return None
    return 1 if any(x in a for x in b) else 0


def pg_array_largo(a):
    datos = _json(a)
    return len(datos) if isinstance(datos, list) and datos else None


def pg_greatest(*valores):
    reales = [v for v in valores if v is not None]
    return max(reales) if reales else None


def pg_least(*valores):
    reales = [v for v in valores if v is not None]
    return min(reales) if reales else None


def lpad(texto, largo, relleno=' '):
    if texto is None or largo is None:
        return None
    texto, largo = str(texto), int(largo)
    if len(texto) >= largo:
        return texto[:largo]
    relleno = relleno or ' '
    falta = largo - len(texto)
    return (relleno * (falta // len(relleno) + 1))[:falta] + texto


def rpad(texto, largo, relleno=' '):
    if texto is None or largo is None:
        return None
    texto, largo = str(texto), int(largo)
    if len(texto) >= largo:
        return texto[:largo]
    relleno = relleno or ' '
    falta = largo - len(texto)
    return texto + (relleno * (falta // len(relleno) + 1))[:falta]


def initcap(texto):
    return None if texto is None else re.sub(r'\w+', lambda m: m.group(0).capitalize(), str(texto).lower())


def split_part(texto, separador, n):
    if texto is None or separador is None or n is None:
        return None
    partes = str(texto).split(separador)
    n = int(n)
    if n < 0:
        n = len(partes) + n + 1
    return partes[n - 1] if 1 <= n <= len(partes) else ''


def strpos(texto, buscado):
    if texto is None or buscado is None:
        return None
    return str(texto).find(str(buscado)) + 1


def md5(texto):
    return None if texto is None else hashlib.md5(str(texto).encode()).hexdigest()


def regexp(patron, texto):
    """Para el operador REGEXP de SQLite: `texto REGEXP patron`."""
    if patron is None or texto is None:
        return None
    return 1 if re.search(patron, str(texto)) else 0


def pg_regexp(texto, patron, banderas=''):
    if patron is None or texto is None:
        return None
    flags = re.I if 'i' in (banderas or '') else 0
    return 1 if re.search(patron, str(texto), flags) else 0


def pg_regexp_reemplazar(texto, patron, reemplazo, banderas=''):
    if texto is None or patron is None:
        return None
    flags = re.I if 'i' in (banderas or '') else 0
    cuantas = 0 if 'g' in (banderas or '') else 1
    reemplazo = re.sub(r'\\(\d)', r'\\\1', reemplazo or '')
    return re.sub(patron, reemplazo, str(texto), count=cuantas, flags=flags)


def pg_en_zona(valor, zona):
    """`ts AT TIME ZONE 'America/Guayaquil'`: de UTC a la hora local (sin zona)."""
    momento = _momento(valor)
    if momento is None or not zona:
        return None
    try:
        local = momento.replace(tzinfo=ZoneInfo('UTC')).astimezone(ZoneInfo(zona))
    except Exception:
        return None
    return local.strftime('%Y-%m-%d %H:%M:%S')


_UNIDADES = {
    'microsecond': 1 / 86400e6, 'millisecond': 1 / 86400e3, 'second': 1 / 86400, 'sec': 1 / 86400,
    'minute': 1 / 1440, 'min': 1 / 1440, 'hour': 1 / 24, 'day': 1, 'week': 7,
    'month': 30, 'mon': 30, 'year': 365, 'yr': 365,
}


def pg_intervalo_dias(texto):
    """'3 days 02:00:00', '2 hours', '1 mon' → días."""
    if texto is None:
        return None
    if isinstance(texto, (int, float)):
        return float(texto)
    total = 0.0
    s = str(texto).lower()
    for cantidad, unidad in re.findall(r'(-?\d+(?:\.\d+)?)\s*([a-z]+)', s):
        unidad = unidad.rstrip('s')
        total += float(cantidad) * _UNIDADES.get(unidad, 0)
    hms = re.search(r'(-?)(\d+):(\d\d)(?::(\d\d(?:\.\d+)?))?', s)
    if hms:
        signo = -1 if hms.group(1) else 1
        total += signo * (int(hms.group(2)) / 24 + int(hms.group(3)) / 1440 + float(hms.group(4) or 0) / 86400)
    return total


def pg_sumar_meses(valor, meses, es_fecha=0):
    """`fecha + n * INTERVAL '1 month'` respetando fin de mes, como Postgres."""
    if valor is None or meses is None:
        return None
    momento = _momento(valor)
    if momento is None:
        return None
    meses = int(round(float(meses)))
    anio, mes = divmod(momento.month - 1 + meses, 12)
    anio, mes = momento.year + anio, mes + 1
    import calendar
    dia = min(momento.day, calendar.monthrange(anio, mes)[1])
    resultado = momento.replace(year=anio, month=mes, day=dia)
    return resultado.strftime('%Y-%m-%d') if es_fecha else resultado.strftime('%Y-%m-%d %H:%M:%S')


def pg_meses_entre(desde, hasta):
    """`EXTRACT(YEAR FROM AGE(hasta, desde)) * 12 + EXTRACT(MONTH FROM ...)`."""
    a, b = _fecha(desde), _fecha(hasta)
    if a is None or b is None:
        return None
    meses = (b.year - a.year) * 12 + (b.month - a.month)
    if b.day < a.day:
        meses -= 1
    return meses


def pg_edad_dias(hasta, desde):
    """AGE(a, b) aproximado como intervalo en días (para comparaciones)."""
    a, b = _momento(hasta), _momento(desde)
    if a is None or b is None:
        return None
    return (a - b).total_seconds() / 86400


def pg_to_char(valor, formato):
    """TO_CHAR para fechas y números con los formatos que usan las vistas."""
    if valor is None or formato is None:
        return None
    momento = _momento(valor) if not isinstance(valor, (int, float)) else None
    if momento is not None:
        f = formato
        meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto',
                 'septiembre', 'octubre', 'noviembre', 'diciembre']
        reemplazos = [
            ('YYYY', '%Y'), ('YY', '%y'), ('TMMonth', meses[momento.month - 1].capitalize()),
            ('TMmonth', meses[momento.month - 1]), ('Month', meses[momento.month - 1].capitalize().ljust(9)),
            ('FMMonth', meses[momento.month - 1].capitalize()), ('MM', '%m'), ('DD', '%d'),
            ('HH24', '%H'), ('HH12', '%I'), ('HH', '%I'), ('MI', '%M'), ('SS', '%S'), ('AM', '%p'),
        ]
        for a, b in reemplazos:
            f = f.replace(a, b)
        f = f.replace('FM', '')
        return momento.strftime(f)
    try:
        numero = float(valor)
    except (TypeError, ValueError):
        return str(valor)
    decimales = len(formato.split('.')[1]) if '.' in formato else 0
    texto = f'{numero:,.{decimales}f}' if ',' in formato or 'G' in formato else f'{numero:.{decimales}f}'
    return texto


def pg_make_date(anio, mes, dia):
    try:
        return date(int(anio), int(mes), int(dia)).isoformat()
    except (TypeError, ValueError):
        return None


def pg_family(valor):
    try:
        return ipaddress.ip_interface(str(valor)).version
    except ValueError:
        return None


def pg_network(valor):
    try:
        return str(ipaddress.ip_interface(str(valor)).network)
    except ValueError:
        return None


def pg_host(valor):
    try:
        return str(ipaddress.ip_interface(str(valor)).ip)
    except ValueError:
        return None


def pg_broadcast(valor):
    try:
        red = ipaddress.ip_interface(str(valor)).network
        return f'{red.broadcast_address}/{red.prefixlen}'
    except ValueError:
        return None


def pg_masklen(valor):
    try:
        return ipaddress.ip_interface(str(valor)).network.prefixlen
    except ValueError:
        return None


def pg_ip_en_red(ip, red):
    """`ip << red` / `ip <<= red`."""
    try:
        return 1 if ipaddress.ip_interface(str(ip)).ip in ipaddress.ip_network(str(red), strict=False) else 0
    except ValueError:
        return None


def pg_inet_a_numero(valor):
    try:
        return int(ipaddress.ip_interface(str(valor)).ip)
    except ValueError:
        return None


def pg_uuid():
    import uuid
    return uuid.uuid4().hex


def pg_left(texto, n):
    if texto is None or n is None:
        return None
    n = int(n)
    return str(texto)[:n] if n >= 0 else str(texto)[:n]


def pg_right(texto, n):
    if texto is None or n is None:
        return None
    n = int(n)
    return str(texto)[-n:] if n > 0 else str(texto)[-n:] if n < 0 else ''


def pg_array_quitar(arreglo, valor):
    datos = _json(arreglo)
    if datos is None:
        return None
    return json.dumps([x for x in datos if x != valor])


def pg_texto_bool(valor):
    """Un booleano como lo escribe Postgres al pasarlo a texto."""
    if valor is None:
        return None
    return 'true' if valor in (1, True, '1', 't', 'true') else 'false'


# ── agregados ────────────────────────────────────────────────────────────────


class StringAggDistinct:
    """STRING_AGG(DISTINCT x, sep): SQLite no deja DISTINCT con dos argumentos."""

    def __init__(self):
        self.valores = []
        self.separador = ','

    def step(self, valor, separador):
        if valor is not None and valor not in self.valores:
            self.valores.append(valor)
        if separador is not None:
            self.separador = separador

    def finalize(self):
        return self.separador.join(str(v) for v in self.valores) if self.valores else None


class JsonAggDistinct:
    def __init__(self):
        self.valores = []

    def step(self, valor):
        if valor not in self.valores:
            self.valores.append(valor)

    def finalize(self):
        return json.dumps(self.valores)


class Mediana:
    """PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY x)."""

    def __init__(self):
        self.valores = []
        self.p = 0.5

    def step(self, p, valor):
        if valor is not None:
            self.valores.append(float(valor))
        if p is not None:
            self.p = float(p)

    def finalize(self):
        if not self.valores:
            return None
        v = sorted(self.valores)
        k = (len(v) - 1) * self.p
        i = int(k)
        return v[i] + (v[min(i + 1, len(v) - 1)] - v[i]) * (k - i)


ESCALARES = {
    'auth_uid': (auth_uid, 0),
    'rls_activa': (rls_activa, 0),
    'pg_json_tiene': (pg_json_tiene, 2),
    'pg_json_claves': (pg_json_claves, 1),
    'pg_json_concatenar': (pg_json_concatenar, 2),
    'pg_json_sin_nulos': (pg_json_sin_nulos, 1),
    'pg_json_poner': (pg_json_poner, -1),
    'pg_arreglo_a_texto': (pg_arreglo_a_texto, -1),
    'pg_texto_a_arreglo': (pg_texto_a_arreglo, -1),
    'pg_array_contiene': (pg_array_contiene, 2),
    'pg_array_solapa': (pg_array_solapa, 2),
    'pg_array_largo': (pg_array_largo, 1),
    'pg_greatest': (pg_greatest, -1),
    'pg_least': (pg_least, -1),
    'lpad': (lpad, -1),
    'rpad': (rpad, -1),
    'initcap': (initcap, 1),
    'split_part': (split_part, 3),
    'strpos': (strpos, 2),
    'md5': (md5, 1),
    'regexp': (regexp, 2),
    'pg_regexp': (pg_regexp, -1),
    'pg_regexp_reemplazar': (pg_regexp_reemplazar, -1),
    'pg_en_zona': (pg_en_zona, 2),
    'pg_intervalo_dias': (pg_intervalo_dias, 1),
    'pg_sumar_meses': (pg_sumar_meses, -1),
    'pg_meses_entre': (pg_meses_entre, 2),
    'pg_edad_dias': (pg_edad_dias, 2),
    'pg_to_char': (pg_to_char, 2),
    'pg_make_date': (pg_make_date, 3),
    'pg_family': (pg_family, 1),
    'pg_network': (pg_network, 1),
    'pg_host': (pg_host, 1),
    'pg_masklen': (pg_masklen, 1),
    'pg_ip_en_red': (pg_ip_en_red, 2),
    'pg_inet_a_numero': (pg_inet_a_numero, 1),
    'pg_uuid': (pg_uuid, 0),
    'uuid': (pg_uuid, 0),
    'gen_random_uuid': (pg_uuid, 0),
    'pg_texto_bool': (pg_texto_bool, 1),
    'left': (pg_left, 2),
    'right': (pg_right, 2),
    'host': (pg_host, 1),
    'broadcast': (pg_broadcast, 1),
    # text(inet) de Postgres: la dirección con su máscara ('10.0.0.1/32').
    'text': (lambda v: None if v is None else (str(v) if '/' in str(v) or ':' in str(v) or not re.fullmatch(r'[\d.]+', str(v)) else f'{v}/32'), 1),
    'array_remove': (pg_array_quitar, 2),
}


# ── funciones que consultan la base ──────────────────────────────────────────
# Equivalentes de funciones plpgsql que las vistas usan con LATERAL. Reciben la
# conexión cruda: una función de SQLite puede consultar la misma conexión
# mientras corre la consulta que la llamó.


def comision_de_periodo(con, vendedor, periodo):
    """
    `comision_de_periodo` (apps/dashboard/esquema_fuente.py): cuánto cobra un vendedor por
    las ventas comisionables de un mes. Devuelve un objeto JSON con las columnas
    de la función: ventas, base_total, nivel, porcentaje, monto, esquema_id.
    """
    vacio = {'ventas': 0, 'base_total': 0, 'nivel': None, 'porcentaje': 0, 'monto': 0, 'esquema_id': None}
    mes = _fecha(periodo)
    if vendedor is None or mes is None:
        return json.dumps(vacio)
    mes = mes.replace(day=1).isoformat()
    filtro = ("FROM comision_ventas cv WHERE cv.vendedor_id = ? AND date(cv.periodo, 'start of month') = ? "
              "AND cv.comisionable_en IS NOT NULL AND cv.estado NOT IN ('anulada')")
    fila = con.execute(f'SELECT cv.esquema_id {filtro} GROUP BY cv.esquema_id ORDER BY COUNT(*) DESC LIMIT 1',
                       (vendedor, mes)).fetchone()
    if fila is None or fila[0] is None:
        return json.dumps(vacio)
    esquema = fila[0]
    modo = (con.execute('SELECT modo FROM comision_esquemas WHERE id = ?', (esquema,)).fetchone() or [None])[0]
    ventas, base = con.execute(f'SELECT COUNT(*), COALESCE(SUM(cv.base), 0) {filtro}', (vendedor, mes)).fetchone()
    if not ventas:
        return json.dumps({**vacio, 'esquema_id': esquema})
    nivel = con.execute(
        'SELECT nombre, porcentaje FROM comision_niveles WHERE esquema_id = ? AND ? >= desde_ventas '
        'AND (hasta_ventas IS NULL OR ? <= hasta_ventas) ORDER BY desde_ventas DESC LIMIT 1',
        (esquema, ventas, ventas)).fetchone()
    porcentaje = float(nivel[1]) if nivel and nivel[1] is not None else 0.0
    if modo == 'progresivo':
        monto = con.execute(
            f"""SELECT COALESCE(SUM(x.base * n.porcentaje / 100.0), 0)
                  FROM (SELECT cv.base, ROW_NUMBER() OVER (ORDER BY cv.comisionable_en, cv.id) AS pos {filtro}) x
                  JOIN comision_niveles n ON n.esquema_id = ? AND x.pos >= n.desde_ventas
                   AND (n.hasta_ventas IS NULL OR x.pos <= n.hasta_ventas)""",
            (vendedor, mes, esquema)).fetchone()[0]
    else:
        monto = float(base or 0) * porcentaje / 100.0
    return json.dumps({
        'ventas': ventas, 'base_total': float(base or 0), 'nivel': nivel[0] if nivel else None,
        'porcentaje': porcentaje, 'monto': round(float(monto or 0), 2), 'esquema_id': esquema,
    })


CON_BASE = {
    'pg_comision_de_periodo': (comision_de_periodo, 2),
}

AGREGADOS = {
    'pg_string_agg_distinct': (StringAggDistinct, 2),
    'pg_json_agg_distinct': (JsonAggDistinct, 1),
    'pg_percentil': (Mediana, 2),
}


def registrar(conexion_sqlite):
    """Registra las funciones en una conexión sqlite3 (la de Django o una suelta)."""
    for nombre, (funcion, aridad) in ESCALARES.items():
        conexion_sqlite.create_function(nombre, aridad, funcion, deterministic=nombre not in ('auth_uid', 'rls_activa', 'pg_uuid', 'uuid', 'gen_random_uuid'))
    for nombre, (clase, aridad) in AGREGADOS.items():
        conexion_sqlite.create_aggregate(nombre, aridad, clase)
    for nombre, (funcion, aridad) in CON_BASE.items():
        conexion_sqlite.create_function(
            nombre, aridad, lambda *args, _f=funcion: _f(conexion_sqlite, *args))
    registrar_funciones_plpgsql(conexion_sqlite)
    registrar_cifrado(conexion_sqlite)


def registrar_cifrado(conexion_sqlite):
    """
    pg_descifrar(x) y pg_cifrar(x): las columnas cifradas en reposo
    (apps/core/fields.py) vistas desde SQL. El traductor las pone solo alrededor
    de esas columnas (apps/core/cifrado.py), así las vistas, los procesos y la
    API comparan, buscan y ordenan por el texto en claro.

    pg_descifrar es determinista (mismo token, mismo texto); pg_cifrar no (Fernet
    usa un IV al azar), y no se puede marcar como tal.
    """
    from apps.core.fields import cifrar, descifrar

    conexion_sqlite.create_function('pg_descifrar', 1, descifrar, deterministic=True)
    conexion_sqlite.create_function('pg_cifrar', 1, lambda v: cifrar(v) if isinstance(v, str) else v)


def auth_jwt():
    """auth.jwt(): lo que las funciones leen del token (id y correo del usuario)."""
    return json.dumps({'sub': contexto.usuario_id(), 'email': contexto.usuario_email(), 'role': 'authenticated'})


# Las funciones sin argumentos que usan las políticas de RLS: dependen solo de
# quién hace la petición.
ESTABLES_EN_LA_PETICION = {
    'mi_legajo_id', 'mi_tecnico_id', 'cartera_completa', 've_todo_el_equipo', 'puede_configurar_alertas',
    'puede_configurar_comisiones', 've_comisiones_de_todos', 'puede_gestionar_retiros', 'puede_ver_monitoreo',
    'puede_operar_red', 'puede_ver_red', 'mis_clientes_visibles',
}


def registrar_funciones_plpgsql(conexion_sqlite):
    """
    Cada función del esquema del dashboard como función de SQLite que la ejecuta con el
    intérprete. Así una vista, otra función o un disparador pueden llamarla
    como en Postgres. Las que devuelven filas se usan con `pg_filas`.
    """
    try:
        from . import funciones_generadas
    except ImportError:
        return
    from .plpgsql import ErrorPlpgsql, _local
    from .plpgsql_motor import a_sqlite, motor

    conexion_sqlite.create_function('auth_jwt', 0, auth_jwt)
    conexion_sqlite.create_function('current_setting', -1, lambda *a: None)

    def llamar(nombre, args):
        # Las preguntas de las políticas (¿quién soy?, ¿veo toda la cartera?)
        # se hacen una vez por fila; la respuesta no cambia en la petición.
        clave = (contexto.usuario_id(), nombre) if not args and nombre in ESTABLES_EN_LA_PETICION else None
        if clave is not None and clave in contexto.memo():
            return contexto.memo()[clave]
        try:
            resultado = motor().ejecutar(nombre, list(args), conexion_sqlite)
        except ErrorPlpgsql as e:
            _local.error = e
            raise
        except Exception as e:
            _local.error = ErrorPlpgsql(str(e), 'XX000')
            raise
        if isinstance(resultado, (dict, list)):
            resultado = json.dumps(resultado, default=str)
        else:
            resultado = a_sqlite(resultado)
        if clave is not None:
            contexto.memo()[clave] = resultado
        return resultado

    for nombre in funciones_generadas.FUNCIONES:
        conexion_sqlite.create_function(nombre, -1, lambda *a, _n=nombre: llamar(_n, a))
    def filas(nombre, *a):
        # Siempre un arreglo de filas: una función que devuelve un solo registro
        # (RETURNS tabla) también se puede usar en un FROM.
        crudo = llamar(nombre, a)
        datos = json.loads(crudo) if isinstance(crudo, str) and crudo[:1] in '[{' else crudo
        if isinstance(datos, dict):
            datos = [datos]
        elif not isinstance(datos, list):
            datos = [] if datos is None else [{nombre: datos}]
        return json.dumps(datos, default=str)

    conexion_sqlite.create_function('pg_filas', -1, filas)

    from .disparadores import disparar
    conexion_sqlite.create_function(
        'pg_disparar', 4, lambda tabla, evento, rowid, viejo: disparar(conexion_sqlite, tabla, evento, rowid, viejo))


def preparar_sqlite(conexion_sqlite):
    """
    Varios escribiendo a la vez sin "database is locked".

    - WAL: quien lee no frena a quien escribe ni al revés. El middleware graba
      cada pocos minutos (óptica, cortes, tareas) mientras el personal guarda
      fichas y cobros; con el diario por defecto cada escritura bloqueaba toda
      la base. Queda guardado en el archivo: basta con pedirlo una vez.
    - synchronous=NORMAL: con WAL es seguro ante un corte de luz (se puede
      perder la última transacción, nunca corromper la base) y escribe mucho
      menos al disco.
    La espera ante un bloqueo la pone `timeout` en DATABASES (config/settings.py).
    """
    cursor = conexion_sqlite.cursor()
    try:
        cursor.execute('PRAGMA journal_mode=WAL')
        cursor.execute('PRAGMA synchronous=NORMAL')
    finally:
        cursor.close()


def al_conectar(sender, connection, **kwargs):
    if connection.vendor == 'sqlite':
        registrar(connection.connection)
        preparar_sqlite(connection.connection)


def conectar_senal():
    connection_created.connect(al_conectar, dispatch_uid='dashboard_sqlite_funciones')
