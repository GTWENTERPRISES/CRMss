"""
Emulación por ORM de las vistas de la ficha del abonado.

    v_clientes_ficha → apps/dashboard/esquema_fuente.py (columnas enumeradas) más las capas
                       de 108, 121, 131, 139, 141, 143, 144, 192 y 193.
    v_saldo_clientes → apps/dashboard/esquema_fuente.py (lo que debe y lo último que pagó).

`clientes` ya tiene las columnas del dashboard, así que la mayor parte de la
ficha sale directo de la tabla. Lo que viene de otras tablas se calcula con los
modelos Django que existen hoy; lo que no tiene modelo todavía (puntos_red,
prestadores) sale en None, nunca inventado.
"""
from collections import defaultdict
from decimal import Decimal

from django.db.models import Max, Sum

from .filas_postgrest import servir_filas

# Las columnas de `clientes` que publica la vista, en el orden de la vista. Se
# enumeran a propósito (migración 107): agregar una columna a la tabla no tiene
# que publicarla sin querer — `portal_clave_hash` no sale nunca de acá.
COLUMNAS_DEL_CLIENTE = [
    'id', 'nombre', 'router_id', 'onu_id', 'plan_id', 'ip', 'mac_address',
    'usuario_ppp', 'estado', 'origen', 'velocidad_cruda', 'comentario',
    'created_at', 'updated_at', 'tipo_identificacion', 'identificacion',
    'email', 'telefono', 'direccion', 'precio_mensual', 'dia_facturacion',
    'telefono_movil', 'codigo_pago', 'clave_ppp', 'latitud', 'longitud',
    'notas', 'nap_id', 'puerto_nap', 'conectado_a_id', 'ip_administracion',
    'tipo_antena', 'tipo_conexion', 'tipo_ip', 'red_ipv4', 'ipv6',
    'ipv6_duid', 'rutas', 'descripcion_servicio', 'excluir_firewall',
    'fecha_instalacion', 'factura_electronica', 'modalidad_pago',
    'dia_generar_factura', 'tipo_impuesto', 'dias_gracia', 'aplicar_corte',
    'descuento_tipo', 'descuento_porcentaje', 'descuento_documento',
    'promo_porcentaje', 'promo_meses', 'promo_desde', 'telegram_chat_id',
    'canal_preferido',
]
COLUMNAS_DE_LOS_JOINS = [
    'plan', 'plan_precio', 'bajada_kbps', 'subida_kbps', 'plan_categoria',
    'plan_tipo_impuesto', 'plan_iva_porcentaje', 'plan_perfil_ppp',
    'router', 'onu_serial', 'onu_estado', 'rx_power_dbm', 'nap', 'conectado_a',
    'saldo', 'facturas_pendientes', 'ultimo_pago',
    'contrato_id', 'contrato_numero', 'contrato_precio',
]
# Lo que fueron sumando las migraciones posteriores, también de `clientes`.
COLUMNAS_AGREGADAS = [
    'codigo', 'zona', 'estado_desde', 'portal_clave', 'numero_orden',      # 107
    'pasarela', 'baja_en',                                                 # 108
    'ultimo_pago_externo',                                                 # 121
    'cortar_tras_meses', 'avisos_activos', 'avisos_canales',               # 131
    'avisos_pantalla', 'aviso_dias_1', 'aviso_dias_2', 'aviso_dias_3',
    'aviso_factura_canales', 'aviso_pantalla_dias',
    'prestador_id', 'provincia', 'canton', 'ciudad', 'parroquia',          # 139
    'tarifa_preferencial', 'acepta_arbitraje', 'equipo_modalidad',
]
COLUMNAS_DEL_PRESTADOR = ['prestador', 'prestador_razon_social']           # 139
COLUMNAS_DE_LAS_CAPAS = [
    'condicion_especial',                                                  # 141
    'red_acceso', 'tipo_cuenta',                                           # 143
    'permanencia_meses', 'valor_instalacion',                              # 144
    'referencia_servicio',                                                 # 192
    'suspendido_motivo', 'suspendido_hasta',                               # 193
]
COLUMNAS_FICHA = (
    COLUMNAS_DEL_CLIENTE + COLUMNAS_DE_LOS_JOINS + COLUMNAS_AGREGADAS
    + COLUMNAS_DEL_PRESTADOR + COLUMNAS_DE_LAS_CAPAS
)
DE_LA_TABLA = COLUMNAS_DEL_CLIENTE + COLUMNAS_AGREGADAS + COLUMNAS_DE_LAS_CAPAS


def saldos_por_cliente():
    """
    client_id → {'saldo', 'facturas_pendientes', 'total_pagado', 'ultimo_pago'}.

    Es `v_saldo_clientes`: el saldo de cada factura no anulada (total menos los
    pagos no anulados que la apuntan) sumado por cliente, y los pagos.
    """
    from apps.facturacion.models import Factura
    from apps.pagos.models import Pago

    pagado = dict(
        Pago.objects.filter(anulado=False, factura__isnull=False)
        .values('factura_id').annotate(t=Sum('monto')).values_list('factura_id', 't')
    )
    saldos = defaultdict(lambda: {
        'saldo': Decimal('0'), 'facturas_pendientes': 0,
        'total_pagado': Decimal('0'), 'ultimo_pago': None,
    })
    for f in Factura.objects.filter(anulada=False).values('id', 'client_id', 'total'):
        saldo = f['total'] - (pagado.get(f['id']) or Decimal('0'))
        if saldo > Decimal('0.005'):
            s = saldos[f['client_id']]
            s['saldo'] += saldo
            s['facturas_pendientes'] += 1

    for p in (Pago.objects.filter(anulado=False).values('client_id')
              .annotate(total=Sum('monto'), ultimo=Max('fecha_pago'))):
        s = saldos[p['client_id']]
        s['total_pagado'] = p['total'] or Decimal('0')
        s['ultimo_pago'] = p['ultimo']
    return saldos


def v_clientes_ficha(request):
    from apps.clientes.models import Cliente, Contrato
    from apps.facturacion.models import PlanVelocidad
    from apps.mikrotik.models import RouterMikrotik
    from apps.olts.models import ONU

    planes = {p.id: p for p in PlanVelocidad.objects.all()}
    routers = dict(RouterMikrotik.objects.values_list('id', 'nombre'))
    onus = {o['id']: o for o in ONU.objects.values('id', 'sn', 'estado', 'rx_power_dbm')}
    saldos = saldos_por_cliente()
    # Contrato vigente: si quedó más de uno, el más reciente.
    contratos = {
        c.client_id: c
        for c in Contrato.objects.filter(estado=Contrato.Estado.VIGENTE).order_by('fecha_inicio')
    }
    from apps.dashboard.models import Prestadores, PuntosRed
    puntos = dict(PuntosRed.objects.values_list('id', 'nombre'))
    prestadores = {p.id: p for p in Prestadores.objects.all()}

    filas = []
    # values() pasa por el campo, así que correo y dirección llegan descifrados.
    for c in Cliente.objects.values(*DE_LA_TABLA):
        plan = planes.get(c['plan_id'])
        onu = onus.get(c['onu_id'])
        saldo = saldos.get(c['id'])
        contrato = contratos.get(c['id'])
        filas.append({
            **c,
            'plan': plan.nombre if plan else None,
            'plan_precio': plan.precio if plan else None,
            'bajada_kbps': plan.bajada_kbps if plan else None,
            'subida_kbps': plan.subida_kbps if plan else None,
            'plan_categoria': plan.categoria if plan else None,
            'plan_tipo_impuesto': plan.tipo_impuesto if plan else None,
            'plan_iva_porcentaje': plan.iva_porcentaje if plan else None,
            'plan_perfil_ppp': plan.perfil_ppp if plan else None,
            'router': routers.get(c['router_id']),
            'onu_serial': onu['sn'] if onu else None,
            'onu_estado': onu['estado'] if onu else None,
            'rx_power_dbm': onu['rx_power_dbm'] if onu else None,
            'nap': puntos.get(c['nap_id']),
            'conectado_a': puntos.get(c['conectado_a_id']),
            'saldo': saldo['saldo'] if saldo else Decimal('0'),
            'facturas_pendientes': saldo['facturas_pendientes'] if saldo else 0,
            'ultimo_pago': saldo['ultimo_pago'] if saldo else None,
            'contrato_id': contrato.id if contrato else None,
            'contrato_numero': contrato.numero if contrato else None,
            'contrato_precio': contrato.precio_mensual if contrato else None,
            'prestador': prestadores[c['prestador_id']].nombre_comercial if c['prestador_id'] in prestadores else None,
            'prestador_razon_social': prestadores[c['prestador_id']].razon_social if c['prestador_id'] in prestadores else None,
        })
    return servir_filas(request, filas, COLUMNAS_FICHA)


COLUMNAS_SALDO = [
    'client_id', 'nombre', 'identificacion', 'estado',
    'facturas_pendientes', 'saldo', 'total_pagado', 'ultimo_pago',
]


def v_saldo_clientes(request):
    from apps.clientes.models import Cliente

    saldos = saldos_por_cliente()
    filas = []
    for c in Cliente.objects.values('id', 'nombre', 'identificacion', 'estado'):
        s = saldos.get(c['id'], {})
        filas.append({
            'client_id': c['id'],
            'nombre': c['nombre'],
            'identificacion': c['identificacion'],
            'estado': c['estado'],
            'facturas_pendientes': s.get('facturas_pendientes', 0),
            'saldo': s.get('saldo', Decimal('0')),
            'total_pagado': s.get('total_pagado', Decimal('0')),
            'ultimo_pago': s.get('ultimo_pago'),
        })
    return servir_filas(request, filas, COLUMNAS_SALDO)
