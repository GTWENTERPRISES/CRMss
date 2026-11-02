"""
Emulación por ORM de las vistas del tablero GPON y de las ONUs.

Cada función reproduce una vista del esquema del dashboard columna por columna:

    v_olt_resumen, v_pon_puertos, v_onus_por_dia  → migracion-40-dashboard-gpon.sql
    v_esperando_autorizacion                      → migracion-42-esperando-autorizacion.sql
    v_onus_clientes                               → migracion-57-bucket-tipos-onu.sql

Como toda emulación (ver views_vistas_fallback), sólo se usa cuando la vista no
existe en la base. Las columnas que la base de desarrollo no tiene (`numero`,
`hw_version`, `causa_caida`...) salen en None —nunca inventadas—, y los umbrales
ópticos son los mismos de la vista para que los números coincidan.

A diferencia de las primeras emulaciones, estas devuelven TODAS las columnas de
la vista y dejan filtros, orden, límites y conteo a `servir_filas`.
"""
from collections import defaultdict
from decimal import Decimal

from django.utils import timezone

from .filas_postgrest import servir_filas

# Umbrales de la migración 40: por debajo de -27 hay cortes, entre -27 y -24
# hay que mirarla antes de que corte.
RX_CRITICA = Decimal('-27')
RX_AVISO = Decimal('-24')


def _promedio(valores):
    if not valores:
        return None
    return round(sum(valores) / len(valores), 2)


def _onus():
    from apps.olts.models import ONU
    return list(ONU.objects.values(
        'id', 'olt_id', 'slot', 'puerto', 'estado', 'rx_power_dbm', 'ultima_lectura',
    ))


def _onus_con_abonado():
    """ONUs que sirven a alguien (`clientes.onu_id`, como en la vista)."""
    from apps.clientes.models import Cliente
    return set(Cliente.objects.filter(onu__isnull=False).values_list('onu_id', flat=True))


# ── v_olt_resumen ────────────────────────────────────────────────────────────

COLUMNAS_OLT_RESUMEN = [
    'olt_id', 'numero', 'nombre', 'marca', 'ip_host', 'activo', 'olt_estado',
    'estado_at', 'estado_latencia_ms', 'hw_version', 'sw_version',
    'onus', 'online', 'caidas', 'los', 'power_off', 'sin_causa',
    'sin_lectura', 'senal_critica', 'senal_aviso', 'rx_promedio', 'rx_peor',
    'sin_abonado', 'ultima_lectura',
]


def v_olt_resumen(request):
    from apps.olts.models import OLT

    por_olt = defaultdict(list)
    for u in _onus():
        por_olt[u['olt_id']].append(u)
    con_abonado = _onus_con_abonado()

    filas = []
    for o in OLT.objects.all():
        onus = por_olt.get(o.id, [])
        rx = [u['rx_power_dbm'] for u in onus if u['rx_power_dbm'] is not None]
        lecturas = [u['ultima_lectura'] for u in onus if u['ultima_lectura']]
        filas.append({
            'olt_id': o.id,
            'numero': o.numero,
            'nombre': o.nombre,
            'marca': o.marca,
            'ip_host': o.ip_host,
            'activo': o.activo,
            'olt_estado': o.estado,
            'estado_at': o.estado_at,
            'estado_latencia_ms': o.estado_latencia_ms,
            'hw_version': o.hw_version,
            'sw_version': o.sw_version,
            'onus': len(onus),
            'online': sum(u['estado'] == 'online' for u in onus),
            'caidas': sum(u['estado'] != 'online' for u in onus),
            'los': sum(u['estado'] == 'los' for u in onus),
            'power_off': sum(u['estado'] == 'power_off' for u in onus),
            # "No sé por qué se cayó" se cuenta aparte de "se quedó sin luz".
            'sin_causa': sum(u['estado'] in ('offline', 'unknown') for u in onus),
            'sin_lectura': sum(u['rx_power_dbm'] is None for u in onus),
            'senal_critica': sum(v < RX_CRITICA for v in rx),
            'senal_aviso': sum(RX_CRITICA <= v < RX_AVISO for v in rx),
            'rx_promedio': _promedio(rx),
            'rx_peor': min(rx) if rx else None,
            'sin_abonado': sum(u['id'] not in con_abonado for u in onus),
            'ultima_lectura': max(lecturas) if lecturas else None,
        })
    return servir_filas(request, filas, COLUMNAS_OLT_RESUMEN)


# ── v_pon_puertos ────────────────────────────────────────────────────────────

COLUMNAS_PON_PUERTOS = [
    'olt_id', 'olt', 'slot', 'puerto', 'onus', 'online', 'caidas',
    'senal_critica', 'rx_promedio', 'rx_peor', 'puerto_caido', 'puerto_degradado',
]


def v_pon_puertos(request):
    from apps.olts.models import OLT

    nombres = dict(OLT.objects.values_list('id', 'nombre'))
    por_puerto = defaultdict(list)
    for u in _onus():
        por_puerto[(u['olt_id'], u['slot'], u['puerto'])].append(u)

    filas = []
    for (olt_id, slot, puerto), onus in por_puerto.items():
        total = len(onus)
        online = sum(u['estado'] == 'online' for u in onus)
        caidas = total - online
        rx = [u['rx_power_dbm'] for u in onus if u['rx_power_dbm'] is not None]
        filas.append({
            'olt_id': olt_id,
            'olt': nombres.get(olt_id),
            'slot': slot,
            'puerto': puerto,
            'onus': total,
            'online': online,
            'caidas': caidas,
            'senal_critica': sum(v < RX_CRITICA for v in rx),
            'rx_promedio': _promedio(rx),
            'rx_peor': min(rx) if rx else None,
            # Todo el puerto abajo es la red, no los abonados. Con una sola ONT
            # puede ser el equipo del cliente: se exigen dos.
            'puerto_caido': total > 1 and online == 0,
            # Más de la mitad caídas pero no todas: se está degradando.
            'puerto_degradado': total > 3 and caidas * 2 > total and online > 0,
        })
    return servir_filas(request, filas, COLUMNAS_PON_PUERTOS)


# ── v_onus_por_dia ───────────────────────────────────────────────────────────

COLUMNAS_ONUS_POR_DIA = ['olt_id', 'dia', 'altas']


def v_onus_por_dia(request):
    from django.db.models import Count
    from apps.olts.models import ONU

    # Con la fecha real de autorización: las que no la tienen quedan fuera en
    # vez de amontonarse en el día en que se importaron.
    filas = [
        {'olt_id': f['olt_id'], 'dia': f['autorizada_at'], 'altas': f['altas']}
        for f in ONU.objects.filter(autorizada_at__isnull=False)
        .values('olt_id', 'autorizada_at')
        .annotate(altas=Count('id'))
        .order_by()
    ]
    return servir_filas(request, filas, COLUMNAS_ONUS_POR_DIA)


# ── v_esperando_autorizacion ─────────────────────────────────────────────────

COLUMNAS_ESPERANDO = [
    'olt_id', 'numero', 'olt', 'activo', 'tiene_snmp',
    'escaneada_at', 'escaneo_error', 'puertos_consultados', 'descartadas',
    'escaneo_ms', 'escaneada_hace_segundos', 'esperando',
]


def v_esperando_autorizacion(request):
    from django.db.models import Count
    from apps.olts.models import OLT, OltEscaneo, OntEsperando

    escaneos = {e.olt_id: e for e in OltEscaneo.objects.all()}
    esperando = dict(
        OntEsperando.objects.values('olt_id').annotate(n=Count('id')).values_list('olt_id', 'n')
    )
    ahora = timezone.now()

    filas = []
    for o in OLT.objects.all():
        e = escaneos.get(o.id)
        filas.append({
            'olt_id': o.id,
            'numero': o.numero,
            'olt': o.nombre,
            'activo': o.activo,
            'tiene_snmp': bool(o.snmp_ro_encrypted),
            'escaneada_at': e.at if e else None,
            'escaneo_error': e.error if e else None,
            'puertos_consultados': e.puertos if e else None,
            'descartadas': e.descartadas if e else None,
            'escaneo_ms': e.ms if e else None,
            'escaneada_hace_segundos': int((ahora - e.at).total_seconds()) if e else None,
            'esperando': esperando.get(o.id, 0),
        })
    return servir_filas(request, filas, COLUMNAS_ESPERANDO)


# ── v_onus_clientes ──────────────────────────────────────────────────────────

COLUMNAS_ONUS_CLIENTES = [
    'onu_id', 'olt_id', 'olt', 'olt_numero', 'sn', 'frame', 'slot', 'puerto',
    'onu_index', 'onu_estado', 'causa_caida', 'causa_caida_cruda', 'ultima_caida',
    'rx_power_dbm', 'tx_power_dbm', 'distancia_m', 'ultima_lectura',
    'autorizada_at', 'created_at', 'nombre_en_la_olt', 'descripcion_olt',
    'direccion', 'contacto', 'zona', 'odb', 'modelo', 'vlan', 'line_profile_olt',
    'srv_profile_olt', 'srv_profile_nombre', 'ficha_leida_at', 'ssid',
    'clave_wifi', 'configurada_por', 'configurada_at', 'plan_id_onu',
    'plan_velocidad', 'client_id', 'cliente', 'identificacion', 'cliente_estado',
    'cliente_origen', 'plan_id', 'plan', 'bajada_kbps', 'subida_kbps',
    'sin_abonado', 'senal_baja', 'ruta_onu',
]


def v_onus_clientes(request):
    from apps.clientes.models import Cliente
    from apps.olts.models import ONU

    # `LEFT JOIN clientes c ON c.onu_id = u.id`. Si dos filas apuntan a la misma
    # ONU, la vista las devolvería repetidas; acá manda la más reciente.
    cliente_de = {}
    for c in (Cliente.objects.filter(onu__isnull=False)
              .select_related('plan').order_by('onu_id', 'created_at')):
        cliente_de[c.onu_id] = c

    filas = []
    for u in ONU.objects.select_related('olt', 'plan', 'tipo_ont', 'line_profile'):
        c = cliente_de.get(u.id)
        # COALESCE(c.plan_id, u.plan_id)
        plan = (c.plan if c and c.plan_id else None) or u.plan
        filas.append({
            'onu_id': u.id,
            'olt_id': u.olt_id,
            'olt': u.olt.nombre,
            'olt_numero': u.olt.numero,
            'sn': u.sn,
            'frame': u.frame,
            'slot': u.slot,
            'puerto': u.puerto,
            'onu_index': u.onu_index,
            'onu_estado': u.estado,
            'causa_caida': u.causa_caida,
            'causa_caida_cruda': u.causa_caida_cruda,
            'ultima_caida': u.ultima_caida,
            'rx_power_dbm': u.rx_power_dbm,
            'tx_power_dbm': u.tx_power_dbm,
            'distancia_m': u.distancia_m,
            'ultima_lectura': u.ultima_lectura,
            'autorizada_at': u.autorizada_at,
            'created_at': u.created_at,
            'nombre_en_la_olt': u.nombre_cliente or None,
            'descripcion_olt': u.descripcion_olt,
            'direccion': u.direccion,
            'contacto': u.contacto,
            'zona': u.zona,
            'odb': u.odb,
            'modelo': u.modelo or (str(u.tipo_ont) if u.tipo_ont_id else None),
            'vlan': u.vlan,
            'line_profile_olt': u.line_profile_olt,
            'srv_profile_olt': u.srv_profile_olt,
            'srv_profile_nombre': u.srv_profile_nombre,
            'ficha_leida_at': u.ficha_leida_at,
            'ssid': u.ssid,
            'clave_wifi': u.clave_wifi,
            'configurada_por': u.configurada_por,
            'configurada_at': u.configurada_at,
            'plan_id_onu': u.plan_id,
            'plan_velocidad': u.plan_velocidad or None,
            'client_id': c.id if c else None,
            'cliente': c.nombre if c else None,
            'identificacion': c.identificacion if c else None,
            'cliente_estado': c.estado if c else None,
            'cliente_origen': c.origen if c else None,
            'plan_id': c.plan_id if c else None,
            'plan': plan.nombre if plan else None,
            'bajada_kbps': plan.bajada_kbps if plan else None,
            'subida_kbps': plan.subida_kbps if plan else None,
            # Hay servicio dado y nadie a quien facturarle.
            'sin_abonado': c is None,
            'senal_baja': u.rx_power_dbm is not None and u.rx_power_dbm < RX_CRITICA,
            'ruta_onu': f'gpon-onu_{u.frame}/{u.slot}/{u.puerto}:{u.onu_index}',
        })
    return servir_filas(request, filas, COLUMNAS_ONUS_CLIENTES)
