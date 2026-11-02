"""
Las columnas de cada tabla del dashboard.

Se editan acá, como cualquier modelo de Django: después del cambio,
`manage.py makemigrations` y `migrate`. Si una vista o una función del
esquema usa la columna, se agrega también en apps/dashboard/esquema_fuente.py
(TABLAS) y se corre `manage.py generar_vistas`.
"""
import uuid  # noqa: F401
from decimal import Decimal  # noqa: F401

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils import timezone  # noqa: F401

from apps.core.fields import EncryptedCharField, EncryptedJSONField, EncryptedTextField  # noqa: F401

from .base import TablaDashboard, hoy  # noqa: F401


def por_defecto_1():
    return ['GPON']


def por_defecto_2():
    return ['super_admin', 'admin']


class ColumnasOLT(TablaDashboard):
    """`olts`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True)
    marca = models.CharField(max_length=20, choices=[('Huawei', 'Huawei'), ('VSOL', 'VSOL')], blank=True)
    ip_host = models.CharField(max_length=45, blank=True)
    puerto_ssh = models.IntegerField(default=22, null=True, blank=True)
    usuario = models.CharField(max_length=50, blank=True)
    password_encrypted = models.TextField(blank=True)
    enable_password_encrypted = models.TextField(null=True, blank=True)
    activo = models.BooleanField(default=True, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    numero = models.BigIntegerField(null=True, blank=True)
    via_vpn = models.BooleanField(default=False, null=True, blank=True)
    snmp_ro_encrypted = models.TextField(null=True, blank=True)
    snmp_rw_encrypted = models.TextField(null=True, blank=True)
    snmp_puerto = models.IntegerField(default=161, null=True, blank=True)
    snmp_trap = models.BooleanField(default=False, null=True, blank=True)
    iptv = models.BooleanField(default=False, null=True, blank=True)
    hw_version = models.CharField(max_length=60, null=True, blank=True)
    sw_version = models.CharField(max_length=60, null=True, blank=True)
    pon_tipos = models.CharField(max_length=60, null=True, blank=True)
    versiones_at = models.DateTimeField(null=True, blank=True)
    ntp_servers = models.TextField(null=True, blank=True)
    tr069_perfil = models.CharField(max_length=80, null=True, blank=True)
    tr069_interfaz = models.CharField(max_length=40, choices=[('mgmt_ip', 'mgmt_ip'), ('wan_ip', 'wan_ip'), ('loopback', 'loopback'), ('ninguna', 'ninguna')], default='mgmt_ip', null=True, blank=True)
    estado = models.CharField(max_length=12, choices=[('online', 'online'), ('offline', 'offline'), ('desconocido', 'desconocido')], default='desconocido', null=True, blank=True)
    estado_at = models.DateTimeField(null=True, blank=True)
    estado_latencia_ms = models.IntegerField(null=True, blank=True)
    estado_detalle = models.TextField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['numero'], name='%(app_label)s_%(class)s_numero_uniq'),
        ]


class ColumnasRouterMikrotik(TablaDashboard):
    """`routers_mikrotik`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True)
    ip_host = models.CharField(max_length=45, blank=True)
    modo_api = models.CharField(max_length=10, choices=[('binaria', 'binaria'), ('rest', 'rest')], default='binaria', blank=True)
    puerto_api = models.IntegerField(default=8728, null=True, blank=True)
    usa_https = models.BooleanField(default=False, null=True, blank=True)
    usuario = models.CharField(max_length=50, blank=True)
    password_encrypted = models.TextField(blank=True)
    activo = models.BooleanField(default=True, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    lista_morosos = models.CharField(max_length=50, default='CORTE_MOROSOS', blank=True)
    lista_aviso = models.CharField(max_length=50, null=True, blank=True)
    ipv6_activo = models.BooleanField(default=False)
    ipv6_lista_morosos = models.CharField(max_length=60, default='CORTE_MOROSOS_V6', null=True, blank=True)
    ipv6_preparado_at = models.DateTimeField(null=True, blank=True)

    # Migraciones 196-217 (keplerost/CRM_ISP).
    conexion_estado = models.CharField(max_length=12, choices=[('up', 'up'), ('down', 'down')], default='up')
    conexion_fallas = models.IntegerField(default=0)
    conexion_falla_en = models.DateTimeField(null=True, blank=True)
    conexion_desde = models.DateTimeField(null=True, blank=True)
    conexion_chequeo = models.DateTimeField(null=True, blank=True)
    conexion_detalle = models.TextField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasTipoONT(TablaDashboard):
    """`tipos_ont`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    marca = models.CharField(max_length=50, blank=True)
    modelo = models.CharField(max_length=50, blank=True)
    puertos_ethernet = models.IntegerField(default=1, null=True, blank=True)
    puertos_fxs = models.IntegerField(default=0, null=True, blank=True)
    wifi = models.BooleanField(default=False, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    soporta_tr069 = models.BooleanField(null=True, blank=True)
    pon_tipo = models.CharField(max_length=10, choices=[('GPON', 'GPON'), ('EPON', 'EPON')], default='GPON', blank=True)
    canales = models.JSONField(default=por_defecto_1, blank=True)
    wifi_ssids = models.IntegerField(default=0)
    catv = models.IntegerField(default=0)
    perfiles_propios = models.BooleanField(default=True)
    perfil_default = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    capacidad = models.CharField(max_length=20, choices=[('bridging', 'bridging'), ('bridging_routing', 'bridging_routing')], default='bridging_routing', blank=True)
    prefijo_eth = models.CharField(max_length=30, default='eth_0/', null=True, blank=True)
    prefijo_wifi = models.CharField(max_length=30, default='wifi_0/', null=True, blank=True)
    prefijo_voip = models.CharField(max_length=30, default='pots_0/', null=True, blank=True)
    vendor_id = models.CharField(max_length=20, null=True, blank=True)
    version_spec = models.CharField(max_length=30, null=True, blank=True)
    parametros = models.JSONField(null=True, blank=True)
    imagen_url = models.TextField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['marca', 'modelo'], name='%(app_label)s_%(class)s_marca_modelo_uniq'),
        ]


class ColumnasLineProfile(TablaDashboard):
    """`line_profiles`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    nombre = models.CharField(max_length=100, blank=True)
    vlan_id = models.IntegerField()
    gemport_id = models.IntegerField(default=1, null=True, blank=True)
    profile_id_olt = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['olt', 'nombre'], name='%(app_label)s_%(class)s_olt_id_nombre_uniq'),
        ]


class ColumnasPlanVelocidad(TablaDashboard):
    """`planes_velocidad`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True, unique=True)
    bajada_kbps = models.IntegerField()
    subida_kbps = models.IntegerField()
    burst_limit = models.CharField(max_length=50, null=True, blank=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0'))
    traffic_table_index = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    codigo_facturacion = models.CharField(max_length=25, null=True, blank=True)
    perfil_ppp = models.CharField(max_length=100, null=True, blank=True)
    burst_bajada_kbps = models.IntegerField(null=True, blank=True)
    burst_subida_kbps = models.IntegerField(null=True, blank=True)
    umbral_bajada_kbps = models.IntegerField(null=True, blank=True)
    umbral_subida_kbps = models.IntegerField(null=True, blank=True)
    burst_segundos_bajada = models.IntegerField(null=True, blank=True)
    burst_segundos_subida = models.IntegerField(null=True, blank=True)
    garantizado_bajada_kbps = models.IntegerField(null=True, blank=True)
    garantizado_subida_kbps = models.IntegerField(null=True, blank=True)
    prioridad = models.SmallIntegerField(null=True, blank=True)
    categoria = models.CharField(max_length=15, choices=[('residencial', 'residencial'), ('corporativo', 'corporativo'), ('otro', 'otro')], default='residencial', blank=True)
    tipo_impuesto = models.CharField(max_length=10, choices=[('incluido', 'incluido'), ('mas', 'mas'), ('ninguno', 'ninguno')], default='incluido', blank=True)
    iva_porcentaje = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('15'))
    descripcion = models.TextField(null=True, blank=True)
    control_pppoe = models.CharField(max_length=10, choices=[('olt', 'olt'), ('mikrotik', 'mikrotik')], default='olt', blank=True)
    activo = models.BooleanField(default=True)
    traffic_table_subida = models.IntegerField(null=True, blank=True)
    traffic_table_bajada = models.IntegerField(null=True, blank=True)
    tablas_verificadas_at = models.DateTimeField(null=True, blank=True)
    tablas_verificadas_en = models.UUIDField(null=True, blank=True)
    comparticion = models.CharField(max_length=8, null=True, blank=True)
    minima_bajada_kbps = models.IntegerField(null=True, blank=True)
    minima_subida_kbps = models.IntegerField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasONU(TablaDashboard):
    """`onus`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    sn = models.CharField(max_length=50, blank=True)
    nombre_cliente = models.CharField(max_length=150, null=True, blank=True)
    frame = models.IntegerField(default=0, null=True, blank=True)
    slot = models.IntegerField(default=0)
    puerto = models.IntegerField()
    onu_index = models.IntegerField()
    tipo_ont = models.ForeignKey('olts.TipoONT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    line_profile = models.ForeignKey('olts.LineProfile', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    plan_velocidad = models.CharField(max_length=50, null=True, blank=True)
    estado = models.CharField(max_length=20, choices=[('online', 'online'), ('offline', 'offline'), ('los', 'los'), ('power_off', 'power_off'), ('unknown', 'unknown')], default='offline', null=True, blank=True)
    rx_power_dbm = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    tx_power_dbm = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    distancia_m = models.IntegerField(null=True, blank=True)
    ultima_lectura = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    causa_caida = models.CharField(max_length=20, null=True, blank=True)
    causa_caida_cruda = models.CharField(max_length=100, null=True, blank=True)
    ultima_caida = models.CharField(max_length=40, null=True, blank=True)
    autorizada_at = models.DateField(null=True, blank=True)
    zona = models.CharField(max_length=60, null=True, blank=True)
    optica_registrada_at = models.DateTimeField(null=True, blank=True)
    modelo = models.CharField(max_length=60, null=True, blank=True)
    vlan = models.IntegerField(null=True, blank=True)
    descripcion_olt = models.TextField(null=True, blank=True)
    direccion = EncryptedTextField(null=True, blank=True)
    contacto = models.CharField(max_length=80, null=True, blank=True)
    odb = models.CharField(max_length=60, null=True, blank=True)
    line_profile_olt = models.IntegerField(null=True, blank=True)
    srv_profile_olt = models.IntegerField(null=True, blank=True)
    srv_profile_nombre = models.CharField(max_length=60, null=True, blank=True)
    ficha_leida_at = models.DateTimeField(null=True, blank=True)
    nap = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    nap_origen = models.CharField(max_length=20, null=True, blank=True)
    ssid = models.CharField(max_length=64, null=True, blank=True)
    clave_wifi = models.CharField(max_length=128, null=True, blank=True)
    configurada_por = models.CharField(max_length=15, null=True, blank=True)
    configurada_at = models.DateTimeField(null=True, blank=True)
    olt_rx_power_dbm = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    temperatura_c = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['olt', 'sn'], name='%(app_label)s_%(class)s_olt_id_sn_uniq'),
            models.UniqueConstraint(fields=['olt', 'frame', 'slot', 'puerto', 'onu_index'], name='%(app_label)s_%(class)s_olt_id_frame_slot_puerto_onu_index_uniq'),
        ]


class ColumnasIPAddress(TablaDashboard):
    """`ip_addresses`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    router = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    onu = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    ip_address = models.CharField(max_length=45, blank=True)
    netmask = models.CharField(max_length=15, default='255.255.255.0', null=True, blank=True)
    interfaz = models.CharField(max_length=50, null=True, blank=True)
    estado = models.CharField(max_length=20, choices=[('libre', 'libre'), ('asignada', 'asignada'), ('reservada', 'reservada')], default='libre', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    subred = models.ForeignKey('dashboard.Subredes', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    descripcion = models.CharField(max_length=150, null=True, blank=True)
    mac_address = models.CharField(max_length=17, null=True, blank=True)
    origen = models.CharField(max_length=15, choices=[('manual', 'manual'), ('arp', 'arp'), ('dhcp', 'dhcp'), ('ppp', 'ppp'), ('address', 'address'), ('alta', 'alta')], default='manual', blank=True)
    visto_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['router', 'ip_address'], name='%(app_label)s_%(class)s_router_id_ip_address_uniq'),
        ]


class ColumnasFirewallBloqueo(TablaDashboard):
    """`firewall_bloqueos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    router = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    onu = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cliente_ip = models.CharField(max_length=45, blank=True)
    mac_address = models.CharField(max_length=17, null=True, blank=True)
    tipo_accion = models.CharField(max_length=20, choices=[('CORTAR_SERVICIO', 'CORTAR_SERVICIO'), ('REDIRECCION_PAGO', 'REDIRECCION_PAGO'), ('DROP_FORWARD', 'DROP_FORWARD')], blank=True)
    comentario = models.TextField(null=True, blank=True)
    routeros_id = models.CharField(max_length=30, null=True, blank=True)
    activo = models.BooleanField(default=True, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    lista = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasCliente(TablaDashboard):
    """`clientes`."""
    SERIALES = ('codigo',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = EncryptedCharField(max_length=150, blank=True)
    router = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    onu = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    ip = models.CharField(max_length=45, null=True, blank=True)
    mac_address = models.CharField(max_length=17, null=True, blank=True)
    usuario_ppp = models.CharField(max_length=100, null=True, blank=True)
    estado = models.CharField(max_length=20, choices=[('activo', 'activo'), ('cortado', 'cortado'), ('suspendido', 'suspendido'), ('baja', 'baja')], default='activo', blank=True)
    origen = models.CharField(max_length=20, choices=[('manual', 'manual'), ('ppp-secret', 'ppp-secret'), ('simple-queue', 'simple-queue'), ('dhcp-lease', 'dhcp-lease'), ('address-list', 'address-list'), ('onu', 'onu')], default='manual', blank=True)
    velocidad_cruda = models.CharField(max_length=50, null=True, blank=True)
    comentario = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    tipo_identificacion = models.CharField(max_length=2, choices=[('04', '04'), ('05', '05'), ('06', '06'), ('07', '07'), ('08', '08')], default='05', null=True, blank=True)
    identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    telefono = EncryptedCharField(max_length=30, null=True, blank=True)
    direccion = models.CharField(max_length=300, null=True, blank=True)
    precio_mensual = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    dia_facturacion = models.IntegerField(null=True, blank=True)
    telefono_movil = EncryptedCharField(max_length=30, null=True, blank=True)
    codigo_pago = models.CharField(max_length=50, null=True, blank=True)
    clave_ppp = EncryptedCharField(max_length=100, null=True, blank=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    nap = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    puerto_nap = models.CharField(max_length=20, null=True, blank=True)
    conectado_a = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    ip_administracion = models.CharField(max_length=45, null=True, blank=True)
    tipo_antena = models.CharField(max_length=50, null=True, blank=True)
    tipo_conexion = models.CharField(max_length=10, choices=[('ip', 'ip'), ('pppoe', 'pppoe'), ('hotspot', 'hotspot')], default='ip', blank=True)
    tipo_ip = models.CharField(max_length=10, choices=[('fija', 'fija'), ('dinamica', 'dinamica')], default='fija', blank=True)
    red_ipv4 = models.CharField(max_length=50, null=True, blank=True)
    ipv6 = models.CharField(max_length=45, null=True, blank=True)
    ipv6_duid = models.CharField(max_length=60, null=True, blank=True)
    rutas = models.TextField(null=True, blank=True)
    descripcion_servicio = models.TextField(null=True, blank=True)
    excluir_firewall = models.BooleanField(default=False)
    fecha_instalacion = models.DateField(null=True, blank=True)
    factura_electronica = models.BooleanField(default=True)
    modalidad_pago = models.CharField(max_length=10, choices=[('prepago', 'prepago'), ('postpago', 'postpago')], default='prepago', blank=True)
    dia_generar_factura = models.IntegerField(null=True, blank=True)
    tipo_impuesto = models.CharField(max_length=10, choices=[('incluido', 'incluido'), ('mas', 'mas'), ('ninguno', 'ninguno')], default='incluido', blank=True)
    dias_gracia = models.IntegerField(default=0)
    aplicar_corte = models.BooleanField(default=True)
    descuento_tipo = models.TextField(null=True, blank=True)
    descuento_porcentaje = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    descuento_documento = models.TextField(null=True, blank=True)
    promo_porcentaje = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    promo_meses = models.IntegerField(null=True, blank=True)
    promo_desde = models.DateField(null=True, blank=True)
    telegram_chat_id = models.CharField(max_length=40, null=True, blank=True)
    canal_preferido = models.CharField(max_length=15, default='whatsapp', null=True, blank=True)
    codigo_externo = models.CharField(max_length=50, null=True, blank=True)
    sistema_origen = models.CharField(max_length=30, null=True, blank=True)
    importado_at = models.DateTimeField(null=True, blank=True)
    portal_clave_hash = models.TextField(null=True, blank=True)
    portal_clave_puesta = models.DateTimeField(null=True, blank=True)
    activado_en = models.DateTimeField(null=True, blank=True)
    numero_orden = models.IntegerField(null=True, blank=True)
    motivo_baja = models.ForeignKey('dashboard.MotivosBaja', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    baja_en = models.DateTimeField(null=True, blank=True)
    baja_nota = models.TextField(null=True, blank=True)
    codigo = models.IntegerField(null=True, blank=True)
    portal_clave = models.CharField(max_length=40, null=True, blank=True)
    zona = models.CharField(max_length=60, null=True, blank=True)
    estado_desde = models.DateTimeField(default=timezone.now, null=True, blank=True)
    pasarela = models.CharField(max_length=40, null=True, blank=True)
    deuda_equipo = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    ultimo_pago_externo = models.DateField(null=True, blank=True)
    avisos_activos = models.BooleanField(default=True)
    avisos_canales = models.JSONField(null=True, blank=True)
    avisos_pantalla = models.BooleanField(default=True)
    aviso_dias_1 = models.IntegerField(null=True, blank=True)
    aviso_dias_2 = models.IntegerField(null=True, blank=True)
    aviso_dias_3 = models.IntegerField(null=True, blank=True)
    aviso_factura_canales = models.JSONField(null=True, blank=True)
    aviso_pantalla_dias = models.IntegerField(null=True, blank=True)
    cortar_tras_meses = models.IntegerField(default=1)
    prestador = models.ForeignKey('dashboard.Prestadores', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    provincia = models.CharField(max_length=60, null=True, blank=True)
    canton = models.CharField(max_length=60, null=True, blank=True)
    ciudad = models.CharField(max_length=60, null=True, blank=True)
    parroquia = models.CharField(max_length=60, null=True, blank=True)
    tarifa_preferencial = models.BooleanField(null=True, blank=True)
    acepta_arbitraje = models.BooleanField(null=True, blank=True)
    equipo_modalidad = models.CharField(max_length=14, choices=[('arrendamiento', 'arrendamiento'), ('compra', 'compra')], default='arrendamiento', blank=True)
    condicion_especial = models.CharField(max_length=40, choices=[('ninguna', 'ninguna'), ('tercera_edad', 'tercera_edad'), ('discapacidad', 'discapacidad'), ('ambas', 'ambas')], default='ninguna', blank=True)
    red_acceso = models.CharField(max_length=40, choices=[('par_cobre', 'par_cobre'), ('fibra', 'fibra'), ('coaxial', 'coaxial'), ('inalambrico', 'inalambrico'), ('otros', 'otros')], null=True, blank=True)
    tipo_cuenta = models.CharField(max_length=40, choices=[('residencial', 'residencial'), ('corporativo', 'corporativo'), ('cibercafe', 'cibercafe'), ('otros', 'otros')], null=True, blank=True)
    permanencia_meses = models.IntegerField(null=True, blank=True)
    valor_instalacion = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    avisos_baja_at = models.DateTimeField(null=True, blank=True)
    avisos_baja_texto = models.CharField(max_length=200, null=True, blank=True)
    descuento_fijo = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    descuento_fijo_motivo = models.CharField(max_length=160, null=True, blank=True)
    ipv6_prefijo = models.CharField(max_length=60, null=True, blank=True)
    acepta_datos_personales = models.BooleanField(null=True, blank=True)
    cortado_en = models.DateField(null=True, blank=True)
    aviso_dias_4 = models.IntegerField(null=True, blank=True)
    referencia_servicio = models.TextField(null=True, blank=True)
    suspendido_motivo = models.TextField(null=True, blank=True)
    suspendido_hasta = models.DateField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['codigo'], name='%(app_label)s_%(class)s_codigo_uniq'),
        ]


class ColumnasSriConfig(TablaDashboard):
    """`sri_config`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    ruc = models.CharField(max_length=13, blank=True)
    razon_social = models.CharField(max_length=300, blank=True)
    nombre_comercial = models.CharField(max_length=300, null=True, blank=True)
    dir_matriz = models.CharField(max_length=300, blank=True)
    dir_establecimiento = models.CharField(max_length=300, null=True, blank=True)
    contribuyente_especial = models.CharField(max_length=13, null=True, blank=True)
    obligado_contabilidad = models.BooleanField(default=False)
    agente_retencion = models.CharField(max_length=10, null=True, blank=True)
    regimen_microempresas = models.BooleanField(default=False, null=True, blank=True)
    ambiente = models.CharField(max_length=1, choices=[('1', '1'), ('2', '2')], default='1', blank=True)
    tipo_emision = models.CharField(max_length=1, default='1', blank=True)
    certificado_b64 = models.TextField(null=True, blank=True)
    certificado_pass_encrypted = models.TextField(null=True, blank=True)
    certificado_vence = models.DateField(null=True, blank=True)
    smtp_host = models.CharField(max_length=200, null=True, blank=True)
    smtp_port = models.IntegerField(default=587, null=True, blank=True)
    smtp_secure = models.BooleanField(default=False, null=True, blank=True)
    smtp_user = models.CharField(max_length=200, null=True, blank=True)
    smtp_pass_encrypted = models.TextField(null=True, blank=True)
    email_from = models.CharField(max_length=200, null=True, blank=True)
    email_from_name = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    telefono = models.CharField(max_length=30, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    logo_b64 = models.TextField(null=True, blank=True)
    plantilla_info_adicional = models.TextField(null=True, blank=True)
    dia_maximo_pago = models.IntegerField(default=5, null=True, blank=True)
    meses_desplazado = models.IntegerField(default=0, null=True, blank=True)
    establecimiento = models.CharField(max_length=3, default='001', blank=True)
    punto_emision = models.CharField(max_length=3, default='001', blank=True)

    class Meta:
        abstract = True


class ColumnasSriSequences(TablaDashboard):
    """`sri_sequences`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tipo_doc = models.CharField(max_length=2, blank=True)
    establecimiento = models.CharField(max_length=3, default='001', blank=True)
    punto_emision = models.CharField(max_length=3, default='001', blank=True)
    ultimo_numero = models.BigIntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['tipo_doc', 'establecimiento', 'punto_emision'], name='%(app_label)s_%(class)s_tipo_doc_establecimiento_punto_emision_uniq'),
        ]


class ColumnasElectronicDocuments(TablaDashboard):
    """`electronic_documents`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tipo_doc = models.CharField(max_length=2, choices=[('01', '01'), ('03', '03'), ('04', '04'), ('05', '05'), ('06', '06'), ('07', '07')], blank=True)
    ambiente = models.CharField(max_length=1, default='1', blank=True)
    tipo_emision = models.CharField(max_length=1, default='1', blank=True)
    establecimiento = models.CharField(max_length=3, default='001', blank=True)
    punto_emision = models.CharField(max_length=3, default='001', blank=True)
    secuencial = models.CharField(max_length=9, blank=True)
    clave_acceso = models.CharField(max_length=49, blank=True, unique=True)
    fecha_emision = models.DateField(default=hoy)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tipo_identificacion_comprador = models.CharField(max_length=2, default='05', blank=True)
    identificacion_comprador = models.CharField(max_length=20, blank=True)
    razon_social_comprador = models.CharField(max_length=300, blank=True)
    direccion_comprador = models.CharField(max_length=300, null=True, blank=True)
    email_comprador = models.CharField(max_length=200, null=True, blank=True)
    total_sin_impuestos = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    total_descuento = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    total_iva = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    propina = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    importe_total = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    moneda = models.CharField(max_length=20, default='DOLAR', blank=True)
    forma_pago = models.CharField(max_length=2, default='01', null=True, blank=True)
    estado = models.CharField(max_length=15, choices=[('BORRADOR', 'BORRADOR'), ('FIRMADO', 'FIRMADO'), ('ENVIADO', 'ENVIADO'), ('AUTORIZADO', 'AUTORIZADO'), ('NO_AUTORIZADO', 'NO_AUTORIZADO'), ('ANULADO', 'ANULADO')], default='BORRADOR', blank=True)
    numero_autorizacion = models.CharField(max_length=49, null=True, blank=True)
    fecha_autorizacion = models.DateTimeField(null=True, blank=True)
    mensaje_autorizacion = models.TextField(null=True, blank=True)
    xml_sin_firma = models.TextField(null=True, blank=True)
    xml_firmado = models.TextField(null=True, blank=True)
    xml_autorizado = models.TextField(null=True, blank=True)
    enviado_por_email = models.BooleanField(default=False, null=True, blank=True)
    fecha_envio_email = models.DateTimeField(null=True, blank=True)
    doc_modificado_tipo = models.CharField(max_length=2, null=True, blank=True)
    doc_modificado_numero = models.CharField(max_length=17, null=True, blank=True)
    doc_modificado_fecha = models.DateField(null=True, blank=True)
    motivo = models.CharField(max_length=300, null=True, blank=True)
    observaciones = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['tipo_doc', 'establecimiento', 'punto_emision', 'secuencial'], name='%(app_label)s_%(class)s_tipo_doc_establecimiento_punto_emision_s_uniq'),
        ]


class ColumnasDocumentItems(TablaDashboard):
    """`document_items`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    document = models.ForeignKey('dashboard.ElectronicDocuments', on_delete=models.CASCADE, related_name='+')
    orden = models.IntegerField(default=1)
    codigo_principal = models.CharField(max_length=25, null=True, blank=True)
    codigo_auxiliar = models.CharField(max_length=25, null=True, blank=True)
    descripcion = models.CharField(max_length=300, blank=True)
    cantidad = models.DecimalField(max_digits=14, decimal_places=6, default=Decimal('1'))
    precio_unitario = models.DecimalField(max_digits=14, decimal_places=6, default=Decimal('0'))
    descuento = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    precio_total_sin_impuesto = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    codigo_impuesto = models.CharField(max_length=1, default='2', blank=True)
    codigo_porcentaje = models.CharField(max_length=4, default='4', blank=True)
    tarifa_iva = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('15.00'))
    base_imponible_iva = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    valor_iva = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasRetencionItems(TablaDashboard):
    """`retencion_items`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    document = models.ForeignKey('dashboard.ElectronicDocuments', on_delete=models.CASCADE, related_name='+')
    codigo = models.CharField(max_length=1, blank=True)
    codigo_retencion = models.CharField(max_length=5, blank=True)
    base_imponible = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    porcentaje_retener = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('0'))
    valor_retenido = models.DecimalField(max_digits=14, decimal_places=2, default=Decimal('0'))
    cod_doc_sustento = models.CharField(max_length=2, null=True, blank=True)
    num_doc_sustento = models.CharField(max_length=17, null=True, blank=True)
    fecha_emision_doc_sustento = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasCuentasPago(TablaDashboard):
    """`cuentas_pago`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True, unique=True)
    tipo = models.CharField(max_length=20, choices=[('efectivo', 'efectivo'), ('banco', 'banco'), ('billetera', 'billetera'), ('otro', 'otro')], default='banco', blank=True)
    banco = models.CharField(max_length=100, null=True, blank=True)
    numero = models.CharField(max_length=50, null=True, blank=True)
    titular = models.CharField(max_length=150, null=True, blank=True)
    activa = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    mostrar_en_corte = models.BooleanField(default=True)
    identificacion = models.CharField(max_length=20, null=True, blank=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasPago(TablaDashboard):
    """`pagos`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cliente_nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    document = models.ForeignKey('dashboard.ElectronicDocuments', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cuenta = models.ForeignKey('dashboard.CuentasPago', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    monto = models.DecimalField(max_digits=12, decimal_places=2)
    comision = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    forma_pago = models.CharField(max_length=20, choices=[('efectivo', 'efectivo'), ('transferencia', 'transferencia'), ('deposito', 'deposito'), ('tarjeta', 'tarjeta'), ('otro', 'otro')], default='efectivo', blank=True)
    n_transaccion = models.CharField(max_length=60, null=True, blank=True)
    fecha_pago = models.DateField(default=hoy)
    notas = models.TextField(null=True, blank=True)
    activo_servicio = models.BooleanField(default=False)
    anulado = models.BooleanField(default=False)
    motivo_anulacion = models.TextField(null=True, blank=True)
    anulado_at = models.DateTimeField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    numero = models.BigIntegerField(null=True, blank=True)
    facturar = models.BooleanField(default=False)
    factura = models.ForeignKey('facturacion.Factura', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    es_excedente = models.BooleanField(default=False)
    pago_origen = models.ForeignKey('self', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    es_reparto = models.BooleanField(default=False)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['numero'], name='%(app_label)s_%(class)s_numero_uniq'),
        ]


class ColumnasPromesasPago(TablaDashboard):
    """`promesas_pago`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    document = models.ForeignKey('dashboard.ElectronicDocuments', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    monto = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    fecha_promesa = models.DateField()
    estado = models.CharField(max_length=15, choices=[('activa', 'activa'), ('cumplida', 'cumplida'), ('incumplida', 'incumplida'), ('anulada', 'anulada')], default='activa', blank=True)
    pago = models.ForeignKey('pagos.Pago', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    nota = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    activo_servicio = models.BooleanField(default=False)
    factura = models.ForeignKey('facturacion.Factura', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasInstalacion(TablaDashboard):
    """`instalaciones`."""
    SERIALES = ('numero',)
    SERIALES_DESDE = {'numero': 1000}

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    tipo = models.CharField(max_length=20, choices=[('nueva', 'nueva'), ('traslado', 'traslado'), ('reparacion', 'reparacion'), ('retiro', 'retiro'), ('revision', 'revision')], default='nueva', blank=True)
    estado = models.CharField(max_length=20, choices=[('prospecto', 'prospecto'), ('agendada', 'agendada'), ('en_curso', 'en_curso'), ('hecha', 'hecha'), ('cancelada', 'cancelada'), ('nueva', 'nueva'), ('revisando', 'revisando'), ('lista_asignar', 'lista_asignar'), ('en_ruta', 'en_ruta'), ('no_realizada', 'no_realizada'), ('reprogramada', 'reprogramada')], default='agendada', blank=True)
    fecha = models.DateField(default=hoy)
    hora = models.TimeField(null=True, blank=True)
    tecnico = models.CharField(max_length=150, null=True, blank=True)
    onu = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    equipo = models.CharField(max_length=150, null=True, blank=True)
    metros_cable = models.IntegerField(null=True, blank=True)
    costo = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    direccion = EncryptedCharField(max_length=300, null=True, blank=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    tipo_identificacion = models.CharField(max_length=2, default='05', null=True, blank=True)
    identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    telefono = EncryptedCharField(max_length=30, null=True, blank=True)
    telefono_whatsapp = EncryptedCharField(max_length=30, null=True, blank=True)
    email = EncryptedCharField(max_length=200, null=True, blank=True)
    referencia = EncryptedTextField(null=True, blank=True)
    sector = models.CharField(max_length=100, null=True, blank=True)
    canton = models.CharField(max_length=100, null=True, blank=True)
    tecnologia = models.CharField(max_length=10, choices=[('ftth', 'ftth'), ('wireless', 'wireless')], default='ftth', blank=True)
    factibilidad = models.CharField(max_length=15, choices=[('pendiente', 'pendiente'), ('factible', 'factible'), ('con_obra', 'con_obra'), ('no_factible', 'no_factible')], default='pendiente', blank=True)
    factibilidad_notas = models.TextField(null=True, blank=True)
    factibilidad_at = models.DateTimeField(null=True, blank=True)
    nap = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    puerto_nap = models.CharField(max_length=20, null=True, blank=True)
    torre = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    distancia_nodo_m = models.IntegerField(null=True, blank=True)
    tecnico_id = models.UUIDField(null=True, blank=True)
    cuadrilla = models.ForeignKey('dashboard.Cuadrillas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    franja = models.CharField(max_length=10, null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    precio_mensual = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    dia_facturacion = models.IntegerField(null=True, blank=True)
    equipo_tipo = models.CharField(max_length=10, null=True, blank=True)
    equipo_modelo = models.CharField(max_length=100, null=True, blank=True)
    equipo_sn = models.CharField(max_length=100, null=True, blank=True)
    equipo_mac = models.CharField(max_length=17, null=True, blank=True)
    equipo_origen = models.CharField(max_length=10, null=True, blank=True)
    olt = models.ForeignKey('olts.OLT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    puerto_pon = models.CharField(max_length=20, null=True, blank=True)
    rx_power_dbm = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    tx_power_dbm = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    senal_dbm = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    ccq = models.IntegerField(null=True, blank=True)
    lectura_at = models.DateTimeField(null=True, blank=True)
    router = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tipo_conexion = models.CharField(max_length=10, choices=[('ip', 'ip'), ('pppoe', 'pppoe'), ('hotspot', 'hotspot')], default='pppoe', blank=True)
    tipo_ip = models.CharField(max_length=10, choices=[('fija', 'fija'), ('dinamica', 'dinamica')], default='fija', blank=True)
    usuario_ppp = models.CharField(max_length=100, null=True, blank=True)
    clave_ppp = EncryptedCharField(max_length=100, null=True, blank=True)
    ip = models.CharField(max_length=45, null=True, blank=True)
    ipv6 = models.CharField(max_length=45, null=True, blank=True)
    pool = models.CharField(max_length=100, null=True, blank=True)
    aprovisionado_at = models.DateTimeField(null=True, blank=True)
    ping_ok = models.BooleanField(null=True, blank=True)
    ping_ms = models.DecimalField(max_digits=8, decimal_places=1, null=True, blank=True)
    ping_perdida = models.IntegerField(null=True, blank=True)
    test_bajada_mbps = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    test_subida_mbps = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    pruebas_at = models.DateTimeField(null=True, blank=True)
    firma_b64 = models.TextField(null=True, blank=True)
    firmante_nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    firmante_identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    observaciones = models.TextField(null=True, blank=True)
    alta_at = models.DateTimeField(null=True, blank=True)
    paso = models.SmallIntegerField(default=0)
    motivo_no_realizada = models.CharField(max_length=30, null=True, blank=True)
    detalle_no_realizada = models.TextField(null=True, blank=True)
    reprogramada_para = models.DateField(null=True, blank=True)
    llegada_at = models.DateTimeField(null=True, blank=True)
    llegada_lat = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    llegada_lng = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    llegada_precision_m = models.IntegerField(null=True, blank=True)
    numero = models.IntegerField(null=True, blank=True)
    provincia = models.CharField(max_length=60, null=True, blank=True)
    ciudad = models.CharField(max_length=60, null=True, blank=True)
    parroquia = models.CharField(max_length=60, null=True, blank=True)
    condicion_especial = models.CharField(max_length=40, choices=[('ninguna', 'ninguna'), ('tercera_edad', 'tercera_edad'), ('discapacidad', 'discapacidad'), ('ambas', 'ambas')], default='ninguna', blank=True)
    tarifa_preferencial = models.BooleanField(null=True, blank=True)
    acepta_arbitraje = models.BooleanField(null=True, blank=True)
    equipo_modalidad = models.CharField(max_length=14, choices=[('arrendamiento', 'arrendamiento'), ('compra', 'compra')], default='arrendamiento', blank=True)
    red_acceso = models.CharField(max_length=40, choices=[('par_cobre', 'par_cobre'), ('fibra', 'fibra'), ('coaxial', 'coaxial'), ('inalambrico', 'inalambrico'), ('otros', 'otros')], null=True, blank=True)
    tipo_cuenta = models.CharField(max_length=40, choices=[('residencial', 'residencial'), ('corporativo', 'corporativo'), ('cibercafe', 'cibercafe'), ('otros', 'otros')], null=True, blank=True)
    permanencia_meses = models.IntegerField(null=True, blank=True)
    valor_instalacion = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    acepta_datos_personales = models.BooleanField(null=True, blank=True)

    # Migraciones 196-217 (keplerost/CRM_ISP).
    ruta_fecha = models.DateField(null=True, blank=True)
    ruta_orden = models.IntegerField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasContrato(TablaDashboard):
    """`contratos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    numero = models.CharField(max_length=30, null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    fecha_inicio = models.DateField(default=hoy)
    fecha_fin = models.DateField(null=True, blank=True)
    permanencia_meses = models.IntegerField(null=True, blank=True)
    precio_mensual = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    dia_pago = models.IntegerField(null=True, blank=True)
    estado = models.CharField(max_length=15, choices=[('vigente', 'vigente'), ('terminado', 'terminado'), ('anulado', 'anulado'), ('suspendido', 'suspendido')], default='vigente', blank=True)
    documento_url = models.TextField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    firma_estado = models.CharField(max_length=12, choices=[('no_enviado', 'no_enviado'), ('enviado', 'enviado'), ('firmado', 'firmado'), ('rechazado', 'rechazado'), ('vencido', 'vencido')], default='no_enviado', blank=True)
    firma_proveedor = models.CharField(max_length=40, null=True, blank=True)
    firma_referencia = models.CharField(max_length=120, null=True, blank=True)
    firma_enviado_en = models.DateTimeField(null=True, blank=True)
    firma_en = models.DateTimeField(null=True, blank=True)
    firma_por = models.UUIDField(null=True, blank=True)
    firma_evidencia_url = models.TextField(null=True, blank=True)
    version = models.SmallIntegerField(default=1)
    contenido_hash = models.CharField(max_length=64, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasPuntosRed(TablaDashboard):
    """`puntos_red`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True, unique=True)
    tipo = models.CharField(max_length=20, choices=[('nap', 'nap'), ('antena', 'antena'), ('torre', 'torre'), ('switch', 'switch'), ('otro', 'otro')], default='nap', blank=True)
    capacidad = models.IntegerField(null=True, blank=True)
    direccion = models.CharField(max_length=300, null=True, blank=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    olt = models.ForeignKey('olts.OLT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    puerto_pon = models.CharField(max_length=20, null=True, blank=True)
    activo = models.BooleanField(default=True)
    notas = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    slot = models.IntegerField(null=True, blank=True)
    origen = models.CharField(max_length=20, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasFactura(TablaDashboard):
    """`facturas`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.BigIntegerField(null=True, blank=True)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cliente_nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    tipo = models.CharField(max_length=15, choices=[('servicios', 'servicios'), ('libre', 'libre'), ('instalacion', 'instalacion'), ('otro', 'otro')], default='servicios', blank=True)
    concepto = models.CharField(max_length=300, default='Servicio de internet', blank=True)
    periodo_desde = models.DateField(null=True, blank=True)
    periodo_hasta = models.DateField(null=True, blank=True)
    fecha_emision = models.DateField(default=hoy)
    fecha_vencimiento = models.DateField(default=hoy)
    subtotal = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    impuesto = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    total = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    document = models.ForeignKey('dashboard.ElectronicDocuments', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    anulada = models.BooleanField(default=False)
    motivo_anulacion = models.TextField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    descuento = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    descuento_motivo = models.TextField(null=True, blank=True)
    origen = models.CharField(max_length=20, choices=[('sistema', 'sistema'), ('migracion', 'migracion'), ('manual', 'manual')], default='sistema', blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['numero'], name='%(app_label)s_%(class)s_numero_uniq'),
        ]


class ColumnasSriSecuencialesLibres(TablaDashboard):
    """`sri_secuenciales_libres`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tipo_doc = models.CharField(max_length=2, blank=True)
    establecimiento = models.CharField(max_length=3, blank=True)
    punto_emision = models.CharField(max_length=3, blank=True)
    numero = models.BigIntegerField()
    motivo = models.TextField(null=True, blank=True)
    document = models.ForeignKey('dashboard.ElectronicDocuments', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['tipo_doc', 'establecimiento', 'punto_emision', 'numero'], name='%(app_label)s_%(class)s_tipo_doc_establecimiento_punto_emision_n_uniq'),
        ]


class ColumnasTecnico(TablaDashboard):
    """`tecnicos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = EncryptedCharField(max_length=150, blank=True)
    identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    telefono = EncryptedCharField(max_length=30, null=True, blank=True)
    email = EncryptedCharField(max_length=150, null=True, blank=True)
    user_id = models.CharField(max_length=64, null=True, blank=True)
    especialidad = models.CharField(max_length=20, choices=[('ftth', 'ftth'), ('wireless', 'wireless'), ('ambas', 'ambas')], default='ambas', blank=True)
    activo = models.BooleanField(default=True)
    notas = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasCuadrillas(TablaDashboard):
    """`cuadrillas`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True, unique=True)
    zona = models.CharField(max_length=100, null=True, blank=True)
    vehiculo = models.CharField(max_length=100, null=True, blank=True)
    activo = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    # Migraciones 196-217 (keplerost/CRM_ISP).
    # `vehiculo` ya es el texto libre de antes; el vehículo de la flota va aparte.
    vehiculo_asignado = models.ForeignKey('dashboard.Vehiculos', on_delete=models.SET_NULL, related_name='+',
                                          null=True, blank=True, db_column='vehiculo_id')

    class Meta:
        abstract = True


class ColumnasCuadrillaMiembros(TablaDashboard):
    """`cuadrilla_miembros`."""

    id = models.BigAutoField(primary_key=True)
    cuadrilla = models.ForeignKey('dashboard.Cuadrillas', on_delete=models.CASCADE, related_name='+')
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.CASCADE, related_name='+')
    rol = models.CharField(max_length=20, choices=[('lider', 'lider'), ('tecnico', 'tecnico'), ('ayudante', 'ayudante')], default='tecnico', blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['cuadrilla', 'tecnico'], name='%(app_label)s_%(class)s_cuadrilla_id_tecnico_id_uniq'),
        ]


class ColumnasTicket(TablaDashboard):
    """`tickets`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.BigIntegerField(null=True, blank=True)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    nombre = EncryptedCharField(max_length=150, blank=True)
    telefono = EncryptedCharField(max_length=30, null=True, blank=True)
    telefono_whatsapp = EncryptedCharField(max_length=30, null=True, blank=True)
    direccion = EncryptedCharField(max_length=300, null=True, blank=True)
    referencia = EncryptedTextField(null=True, blank=True)
    sector = models.CharField(max_length=100, null=True, blank=True)
    canton = models.CharField(max_length=100, null=True, blank=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    tecnologia = models.CharField(max_length=10, choices=[('ftth', 'ftth'), ('wireless', 'wireless')], default='ftth', blank=True)
    nap = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    puerto_nap = models.CharField(max_length=20, null=True, blank=True)
    ont_modelo = models.CharField(max_length=100, null=True, blank=True)
    ont_serie = models.CharField(max_length=100, null=True, blank=True)
    potencia_dbm = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    torre = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cpe_ip = models.CharField(max_length=45, null=True, blank=True)
    frecuencia = models.CharField(max_length=30, null=True, blank=True)
    senal_dbm = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    antena_modelo = models.CharField(max_length=100, null=True, blank=True)
    tipo_incidencia = models.CharField(max_length=40, default='sin_internet', blank=True)
    descripcion = models.TextField(null=True, blank=True)
    prioridad = models.CharField(max_length=10, choices=[('alta', 'alta'), ('media', 'media'), ('baja', 'baja')], default='media', blank=True)
    fecha_visita = models.DateField(null=True, blank=True)
    franja = models.CharField(max_length=10, choices=[('manana', 'manana'), ('tarde', 'tarde'), ('exacta', 'exacta')], null=True, blank=True)
    hora_visita = models.TimeField(null=True, blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cuadrilla = models.ForeignKey('dashboard.Cuadrillas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    estado = models.CharField(max_length=15, choices=[('abierto', 'abierto'), ('asignado', 'asignado'), ('en_ruta', 'en_ruta'), ('en_proceso', 'en_proceso'), ('resuelto', 'resuelto'), ('cancelado', 'cancelado')], default='abierto', blank=True)
    solucion = models.TextField(null=True, blank=True)
    checklist = models.JSONField(default=dict, blank=True)
    firma_b64 = models.TextField(null=True, blank=True)
    firmante_nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    firmante_cedula = EncryptedCharField(max_length=20, null=True, blank=True)
    material_usado = models.TextField(null=True, blank=True)
    motivo_cancelacion = models.TextField(null=True, blank=True)
    cerrado_at = models.DateTimeField(null=True, blank=True)
    cerrado_por = models.CharField(max_length=64, null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    salida_at = models.DateTimeField(null=True, blank=True)
    llegada_at = models.DateTimeField(null=True, blank=True)
    llegada_lat = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    llegada_lng = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    llegada_precision_m = models.DecimalField(max_digits=8, decimal_places=1, null=True, blank=True)
    email = EncryptedCharField(max_length=150, null=True, blank=True)

    # Migraciones 196-217 (keplerost/CRM_ISP).
    ruta_fecha = models.DateField(null=True, blank=True)
    ruta_orden = models.IntegerField(null=True, blank=True)
    reprogramar_desde = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasTicketEventos(TablaDashboard):
    """`ticket_eventos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    ticket = models.ForeignKey('soporte.Ticket', on_delete=models.CASCADE, related_name='+')
    estado_anterior = models.CharField(max_length=15, null=True, blank=True)
    estado_nuevo = models.CharField(max_length=15, blank=True)
    nota = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    clave_idempotencia = models.UUIDField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasTicketAdjuntos(TablaDashboard):
    """`ticket_adjuntos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    ticket = models.ForeignKey('soporte.Ticket', on_delete=models.CASCADE, related_name='+')
    tipo = models.CharField(max_length=20, choices=[('foto', 'foto'), ('potencia', 'potencia'), ('antes', 'antes'), ('despues', 'despues'), ('otro', 'otro')], default='foto', blank=True)
    ruta = models.TextField(blank=True)
    descripcion = models.CharField(max_length=200, null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    clave_idempotencia = models.UUIDField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasPlantillasMensaje(TablaDashboard):
    """`plantillas_mensaje`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True)
    canal = models.CharField(max_length=15, choices=[('email', 'email'), ('whatsapp', 'whatsapp'), ('telegram', 'telegram'), ('sms', 'sms'), ('cualquiera', 'cualquiera'), ('documento', 'documento'), ('web', 'web')], blank=True)
    asunto = models.CharField(max_length=200, null=True, blank=True)
    cuerpo = models.TextField(blank=True)
    variables = models.JSONField(null=True, blank=True)
    activa = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    clave = models.CharField(max_length=60, null=True, blank=True)
    categoria = models.CharField(max_length=12, choices=[('documento', 'documento'), ('correo', 'correo'), ('sms', 'sms'), ('web', 'web')], default='correo', blank=True)
    descripcion = models.TextField(null=True, blank=True)
    formato = models.CharField(max_length=6, choices=[('texto', 'texto'), ('html', 'html')], default='texto', blank=True)
    del_sistema = models.BooleanField(default=False)
    actualizado_en = models.DateTimeField(null=True, blank=True)
    actualizado_por = models.UUIDField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasComunicaciones(TablaDashboard):
    """`comunicaciones`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    ticket = models.ForeignKey('soporte.Ticket', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    factura = models.ForeignKey('facturacion.Factura', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    canal = models.CharField(max_length=15, choices=[('email', 'email'), ('whatsapp', 'whatsapp'), ('telegram', 'telegram'), ('sms', 'sms')], blank=True)
    direccion = models.CharField(max_length=10, choices=[('saliente', 'saliente'), ('entrante', 'entrante')], default='saliente', blank=True)
    destino = EncryptedCharField(max_length=200, null=True, blank=True)
    asunto = EncryptedCharField(max_length=300, null=True, blank=True)
    cuerpo = EncryptedTextField(null=True, blank=True)
    plantilla = models.ForeignKey('dashboard.PlantillasMensaje', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    automatico = models.BooleanField(default=False)
    estado = models.CharField(max_length=12, choices=[('pendiente', 'pendiente'), ('enviado', 'enviado'), ('entregado', 'entregado'), ('leido', 'leido'), ('fallido', 'fallido'), ('recibido', 'recibido')], default='pendiente', blank=True)
    proveedor_id = models.CharField(max_length=200, null=True, blank=True)
    error = models.TextField(null=True, blank=True)
    enviado_at = models.DateTimeField(null=True, blank=True)
    entregado_at = models.DateTimeField(null=True, blank=True)
    leido_at = models.DateTimeField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasDocumentos(TablaDashboard):
    """`documentos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    categoria = models.CharField(max_length=30, choices=[('cedula_frontal', 'cedula_frontal'), ('cedula_reverso', 'cedula_reverso'), ('contrato', 'contrato'), ('acta_entrega', 'acta_entrega'), ('planilla_servicio', 'planilla_servicio'), ('foto_instalacion', 'foto_instalacion'), ('autorizacion', 'autorizacion'), ('ruc', 'ruc'), ('cedula_representante', 'cedula_representante'), ('otro', 'otro')], default='otro', blank=True)
    nombre = models.CharField(max_length=200, blank=True)
    ruta = models.TextField(blank=True)
    mime = models.CharField(max_length=100, null=True, blank=True)
    tamano = models.BigIntegerField(null=True, blank=True)
    visible_cliente = models.BooleanField(default=False)
    firmado_at = models.DateTimeField(null=True, blank=True)
    firmante_nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    reemplazado_en = models.DateTimeField(null=True, blank=True)
    reemplazado_por = models.UUIDField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasEquiposCliente(TablaDashboard):
    """`equipos_cliente`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    documento = models.ForeignKey('dashboard.Documentos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tipo = models.CharField(max_length=30, choices=[('ont', 'ont'), ('router', 'router'), ('antena', 'antena'), ('cpe', 'cpe'), ('switch', 'switch'), ('otro', 'otro')], default='ont', blank=True)
    marca = models.CharField(max_length=60, null=True, blank=True)
    modelo = models.CharField(max_length=80, null=True, blank=True)
    serie = models.CharField(max_length=100, null=True, blank=True)
    mac = models.CharField(max_length=20, null=True, blank=True)
    propiedad = models.CharField(max_length=10, choices=[('isp', 'isp'), ('cliente', 'cliente')], default='isp', blank=True)
    estado = models.CharField(max_length=15, choices=[('entregado', 'entregado'), ('devuelto', 'devuelto'), ('perdido', 'perdido'), ('dañado', 'dañado')], default='entregado', blank=True)
    entregado_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    devuelto_at = models.DateTimeField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasConsumoDiario(TablaDashboard):
    """`consumo_diario`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    fecha = models.DateField()
    subida_bytes = models.BigIntegerField(default=0)
    bajada_bytes = models.BigIntegerField(default=0)
    estado_servicio = models.CharField(max_length=15, choices=[('activo', 'activo'), ('promesa', 'promesa'), ('cortado', 'cortado'), ('suspendido', 'suspendido')], default='activo', blank=True)
    fuente = models.CharField(max_length=15, choices=[('mikrotik', 'mikrotik'), ('radius', 'radius'), ('olt', 'olt'), ('manual', 'manual')], default='mikrotik', blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['client', 'fecha'], name='%(app_label)s_%(class)s_client_id_fecha_uniq'),
        ]


class ColumnasSesionesConexion(TablaDashboard):
    """`sesiones_conexion`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    usuario = models.CharField(max_length=100, null=True, blank=True)
    ip = models.CharField(max_length=45, null=True, blank=True)
    mac = models.CharField(max_length=20, null=True, blank=True)
    nas = models.CharField(max_length=100, null=True, blank=True)
    inicio = models.DateTimeField()
    fin = models.DateTimeField(null=True, blank=True)
    subida_bytes = models.BigIntegerField(default=0, null=True, blank=True)
    bajada_bytes = models.BigIntegerField(default=0, null=True, blank=True)
    motivo_desconexion = models.CharField(max_length=60, null=True, blank=True)
    fuente = models.CharField(max_length=15, choices=[('mikrotik', 'mikrotik'), ('radius', 'radius')], default='mikrotik', blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasComandosEjecutados(TablaDashboard):
    """`comandos_ejecutados`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    destino_tipo = models.CharField(max_length=15, choices=[('mikrotik', 'mikrotik'), ('olt', 'olt'), ('cpe', 'cpe'), ('sistema', 'sistema')], default='mikrotik', blank=True)
    destino_id = models.UUIDField(null=True, blank=True)
    destino_nombre = models.CharField(max_length=150, null=True, blank=True)
    comando = models.CharField(max_length=40, blank=True)
    parametros = models.JSONField(default=dict, blank=True)
    salida = models.TextField(null=True, blank=True)
    exito = models.BooleanField(default=True)
    error = models.TextField(null=True, blank=True)
    duracion_ms = models.IntegerField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    ip_origen = models.CharField(max_length=45, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasAuditLog(TablaDashboard):
    """`audit_logs`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    categoria = models.CharField(max_length=30, blank=True)
    accion = models.CharField(max_length=15, choices=[('crear', 'crear'), ('modificar', 'modificar'), ('eliminar', 'eliminar')], blank=True)
    entidad = models.CharField(max_length=40, blank=True)
    entidad_id = models.UUIDField(null=True, blank=True)
    client_id = models.UUIDField(null=True, blank=True)
    descripcion = EncryptedTextField(null=True, blank=True)
    antes = EncryptedJSONField(null=True, blank=True)
    despues = EncryptedJSONField(null=True, blank=True)
    actor_id = models.CharField(max_length=64, null=True, blank=True)
    actor_email = models.CharField(max_length=150, null=True, blank=True)
    ip_origen = models.CharField(max_length=45, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasConsumoContadores(TablaDashboard):
    """`consumo_contadores`."""

    client = models.OneToOneField('clientes.Cliente', on_delete=models.CASCADE, related_name='+', primary_key=True)
    subida_bytes = models.BigIntegerField(default=0)
    bajada_bytes = models.BigIntegerField(default=0)
    origen = models.CharField(max_length=40, null=True, blank=True)
    fuente = models.CharField(max_length=15, default='mikrotik', blank=True)
    leido_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasInstalacionFotos(TablaDashboard):
    """`instalacion_fotos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.CASCADE, related_name='+')
    tipo = models.CharField(max_length=20, choices=[('foto', 'foto'), ('fachada', 'fachada'), ('exterior', 'exterior'), ('cableado', 'cableado'), ('roseta', 'roseta'), ('equipo', 'equipo'), ('potencia', 'potencia'), ('velocidad', 'velocidad'), ('otro', 'otro')], default='foto', blank=True)
    ruta = models.TextField(blank=True)
    descripcion = models.CharField(max_length=200, null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    clave_idempotencia = models.UUIDField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasSubredes(TablaDashboard):
    """`subredes`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.BigIntegerField(null=True, blank=True)
    nombre = models.CharField(max_length=100, blank=True)
    cidr = models.CharField(max_length=50, blank=True)
    tipo = models.CharField(max_length=15, choices=[('estatica', 'estatica'), ('pool_pppoe', 'pool_pppoe'), ('cgnat', 'cgnat'), ('nodos', 'nodos')], default='estatica', blank=True)
    router = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    pool_router = models.CharField(max_length=100, null=True, blank=True)
    gateway = models.CharField(max_length=50, null=True, blank=True)
    vlan = models.IntegerField(null=True, blank=True)
    punto = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    activo = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    olt = models.ForeignKey('olts.OLT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    proposito = models.CharField(max_length=20, choices=[('abonados', 'abonados'), ('gestion_onu', 'gestion_onu'), ('wan_onu', 'wan_onu')], default='abonados', blank=True)
    dns1 = models.CharField(max_length=50, null=True, blank=True)
    dns2 = models.CharField(max_length=50, null=True, blank=True)
    rango_desde = models.CharField(max_length=50, null=True, blank=True)
    rango_hasta = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasNodosRed(TablaDashboard):
    """`nodos_red`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True, unique=True)
    tipo = models.CharField(max_length=15, choices=[('ptp', 'ptp'), ('ptmp', 'ptmp'), ('rb_torre', 'rb_torre'), ('olt', 'olt'), ('energia', 'energia'), ('switch', 'switch'), ('otro', 'otro')], default='ptmp', blank=True)
    ip = models.CharField(max_length=45, blank=True)
    padre = models.ForeignKey('self', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    router = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    punto = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    olt = models.ForeignKey('olts.OLT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    latencia_warning_ms = models.IntegerField(default=150)
    perdida_warning_pct = models.IntegerField(default=20)
    monitorear = models.BooleanField(default=True)
    avisar = models.BooleanField(default=True)
    estado = models.CharField(max_length=12, choices=[('up', 'up'), ('warning', 'warning'), ('down', 'down'), ('desconocido', 'desconocido')], default='desconocido', blank=True)
    latencia_ms = models.DecimalField(max_digits=8, decimal_places=1, null=True, blank=True)
    perdida_pct = models.IntegerField(null=True, blank=True)
    desde = models.DateTimeField(null=True, blank=True)
    ultimo_chequeo = models.DateTimeField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    numero = models.BigIntegerField(null=True, blank=True)
    equipo = models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasNodoEventos(TablaDashboard):
    """`nodo_eventos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nodo = models.ForeignKey('dashboard.NodosRed', on_delete=models.CASCADE, related_name='+')
    estado = models.CharField(max_length=12, choices=[('up', 'up'), ('warning', 'warning'), ('down', 'down'), ('desconocido', 'desconocido')], blank=True)
    desde = models.DateTimeField(default=timezone.now)
    hasta = models.DateTimeField(null=True, blank=True)
    latencia_ms = models.DecimalField(max_digits=8, decimal_places=1, null=True, blank=True)
    perdida_pct = models.IntegerField(null=True, blank=True)
    causa_padre = models.ForeignKey('dashboard.NodosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    notificado = models.BooleanField(default=False)
    notificado_at = models.DateTimeField(null=True, blank=True)
    detalle = models.TextField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasPlanRouters(TablaDashboard):
    """`plan_routers`."""

    id = models.BigAutoField(primary_key=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.CASCADE, related_name='+')
    router = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.CASCADE, related_name='+')
    estado = models.CharField(max_length=12, choices=[('pendiente', 'pendiente'), ('aplicado', 'aplicado'), ('error', 'error')], default='pendiente', blank=True)
    perfil_aplicado = models.CharField(max_length=100, null=True, blank=True)
    rate_limit = models.CharField(max_length=100, null=True, blank=True)
    aprovisionado_at = models.DateTimeField(null=True, blank=True)
    error = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['plan', 'router'], name='%(app_label)s_%(class)s_plan_id_router_id_uniq'),
        ]


class ColumnasOltHistorial(TablaDashboard):
    """`olt_historial`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+')
    accion = models.CharField(max_length=20, default='editar', blank=True)
    campo = models.CharField(max_length=60, null=True, blank=True)
    valor_antes = models.TextField(null=True, blank=True)
    valor_despues = models.TextField(null=True, blank=True)
    quien = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasOltBackups(TablaDashboard):
    """`olt_backups`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+')
    nombre = models.CharField(max_length=120, blank=True)
    contenido = models.TextField(blank=True)
    bytes = models.IntegerField(null=True, blank=True, editable=False)
    comando = models.TextField(null=True, blank=True)
    quien = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasOnuOpticaHistorial(TablaDashboard):
    """`onu_optica_historial`."""

    id = models.BigAutoField(primary_key=True)
    onu = models.ForeignKey('olts.ONU', on_delete=models.CASCADE, related_name='+')
    rx_dbm = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    tx_dbm = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    temperatura_c = models.IntegerField(null=True, blank=True)
    medida_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasOntEsperando(TablaDashboard):
    """`onts_esperando`."""

    id = models.BigAutoField(primary_key=True)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+')
    sn = models.CharField(max_length=50, blank=True)
    slot = models.IntegerField(null=True, blank=True)
    puerto = models.IntegerField(null=True, blank=True)
    modelo = models.CharField(max_length=60, null=True, blank=True)
    detectada = models.DateTimeField(null=True, blank=True)
    visto_at = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['olt', 'sn'], name='%(app_label)s_%(class)s_olt_id_sn_uniq'),
        ]


class ColumnasOltEscaneo(TablaDashboard):
    """`olt_escaneos`."""

    olt = models.OneToOneField('olts.OLT', on_delete=models.CASCADE, related_name='+', primary_key=True)
    at = models.DateTimeField(default=timezone.now)
    encontradas = models.IntegerField(default=0)
    descartadas = models.IntegerField(default=0)
    puertos = models.IntegerField(default=0)
    ms = models.IntegerField(null=True, blank=True)
    error = models.TextField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasAutorizacionPresets(TablaDashboard):
    """`autorizacion_presets`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=80, blank=True)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    line_profile_id = models.IntegerField(null=True, blank=True)
    line_profile_nombre = models.CharField(max_length=60, null=True, blank=True)
    srv_profile_id = models.IntegerField(null=True, blank=True)
    srv_profile_nombre = models.CharField(max_length=60, null=True, blank=True)
    vlan = models.IntegerField(null=True, blank=True)
    gemport = models.IntegerField(default=1, null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    zona = models.CharField(max_length=60, null=True, blank=True)
    predeterminado = models.BooleanField(default=False)
    notas = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasOntsPreautorizadas(TablaDashboard):
    """`onts_preautorizadas`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+')
    sn = models.CharField(max_length=50, blank=True)
    preset = models.ForeignKey('dashboard.AutorizacionPresets', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    nombre = models.CharField(max_length=120, null=True, blank=True)
    comentario = models.TextField(null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    vlan = models.IntegerField(null=True, blank=True)
    gemport = models.IntegerField(default=1, null=True, blank=True)
    line_profile_id = models.IntegerField(null=True, blank=True)
    srv_profile_id = models.IntegerField(null=True, blank=True)
    slot = models.IntegerField(null=True, blank=True)
    puerto = models.IntegerField(null=True, blank=True)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    automatica = models.BooleanField(default=True)
    estado = models.CharField(max_length=20, default='esperando', blank=True)
    intentos = models.IntegerField(default=0)
    ultimo_error = models.TextField(null=True, blank=True)
    vence_at = models.DateTimeField(null=True, blank=True)
    autorizada_at = models.DateTimeField(null=True, blank=True)
    onu = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['olt', 'sn'], name='%(app_label)s_%(class)s_olt_id_sn_uniq'),
        ]


class ColumnasVlansOlt(TablaDashboard):
    """`vlans_olt`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+')
    vlan = models.IntegerField()
    descripcion = models.TextField(null=True, blank=True)
    uso = models.CharField(max_length=20, choices=[('internet', 'internet'), ('gestion', 'gestion'), ('voip', 'voip'), ('iptv', 'iptv'), ('otra', 'otra')], default='internet', blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['olt', 'vlan'], name='%(app_label)s_%(class)s_olt_id_vlan_uniq'),
        ]


class ColumnasPuertosPon(TablaDashboard):
    """`puertos_pon`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    olt = models.ForeignKey('olts.OLT', on_delete=models.CASCADE, related_name='+')
    slot = models.IntegerField()
    puerto = models.IntegerField()
    vlan = models.IntegerField(null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    placa = models.TextField(null=True, blank=True)
    vlans_equipo = models.JSONField(null=True, blank=True)
    onts_equipo = models.IntegerField(null=True, blank=True)
    leido_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['olt', 'slot', 'puerto'], name='%(app_label)s_%(class)s_olt_id_slot_puerto_uniq'),
        ]


class ColumnasLicencia(TablaDashboard):
    """`licencia`."""

    id = models.IntegerField(primary_key=True, default=1)
    instalacion = models.UUIDField(default=uuid.uuid4)
    token = models.TextField(null=True, blank=True)
    ultimo_contacto = models.DateTimeField(null=True, blank=True)
    ultimo_error = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasConfigMensajeria(TablaDashboard):
    """`config_mensajeria`."""

    id = models.IntegerField(primary_key=True, default=1)
    telegram_token_encrypted = models.TextField(null=True, blank=True)
    telegram_bot_usuario = models.CharField(max_length=64, null=True, blank=True)
    whatsapp_via = models.CharField(max_length=12, choices=[('manual', 'manual'), ('meta', 'meta'), ('twilio', 'twilio'), ('baileys', 'baileys'), ('evolution', 'evolution'), ('crm', 'crm')], default='manual', blank=True)
    whatsapp_token_encrypted = models.TextField(null=True, blank=True)
    whatsapp_phone_id = models.CharField(max_length=64, null=True, blank=True)
    whatsapp_desde = models.CharField(max_length=32, null=True, blank=True)
    twilio_sid = models.CharField(max_length=64, null=True, blank=True)
    twilio_token_encrypted = models.TextField(null=True, blank=True)
    twilio_desde = models.CharField(max_length=32, null=True, blank=True)
    nms_canal = models.CharField(max_length=15, default='telegram', null=True, blank=True)
    nms_destino = models.CharField(max_length=120, null=True, blank=True)
    actualizado_en = models.DateTimeField(default=timezone.now)
    whatsapp_evolution_url = models.CharField(max_length=200, null=True, blank=True)
    whatsapp_evolution_instancia = models.CharField(max_length=64, null=True, blank=True)
    whatsapp_evolution_key_encrypted = models.TextField(null=True, blank=True)
    whatsapp_verify_token = models.CharField(max_length=120, null=True, blank=True)
    whatsapp_app_secret_encrypted = models.TextField(null=True, blank=True)
    whatsapp_crm_nombre = models.CharField(max_length=60, null=True, blank=True)
    whatsapp_crm_url = models.TextField(null=True, blank=True)
    whatsapp_crm_header = models.CharField(max_length=40, default='X-API-Key', null=True, blank=True)
    whatsapp_crm_key_encrypted = models.TextField(null=True, blank=True)
    avisos_desde = models.TextField(default='08:00', blank=True)
    avisos_hasta = models.TextField(default='20:00', blank=True)
    whatsapp_pausa_segundos = models.IntegerField(default=0)

    class Meta:
        abstract = True


class ColumnasConfigTareas(TablaDashboard):
    """`config_tareas`."""

    id = models.IntegerField(primary_key=True, default=1)
    cortes_automaticos = models.BooleanField(null=True, blank=True)
    cortes_hora = models.CharField(max_length=5, null=True, blank=True)
    cortes_limite = models.IntegerField(null=True, blank=True)
    facturacion_automatica = models.BooleanField(null=True, blank=True)
    facturacion_hora = models.CharField(max_length=5, null=True, blank=True)
    consumo_automatico = models.BooleanField(null=True, blank=True)
    consumo_cada_minutos = models.IntegerField(null=True, blank=True)
    nms_automatico = models.BooleanField(null=True, blank=True)
    nms_cada_minutos = models.IntegerField(null=True, blank=True)
    nms_paquetes = models.IntegerField(null=True, blank=True)
    optica_automatica = models.BooleanField(null=True, blank=True)
    optica_cada_minutos = models.IntegerField(null=True, blank=True)
    esperando_automatico = models.BooleanField(null=True, blank=True)
    esperando_cada_minutos = models.IntegerField(null=True, blank=True)
    actualizado_en = models.DateTimeField(default=timezone.now)
    cobranza_cada_minutos = models.IntegerField(null=True, blank=True)
    comisiones_automatico = models.BooleanField(default=False, null=True, blank=True)
    comisiones_hora = models.CharField(max_length=5, default='03:30', null=True, blank=True)
    cartera_automatico = models.BooleanField(default=False, null=True, blank=True)
    cartera_hora = models.CharField(max_length=5, default='04:00', null=True, blank=True)
    alertas_automaticas = models.BooleanField(default=False, null=True, blank=True)
    alertas_cada_minutos = models.IntegerField(default=5, null=True, blank=True)
    stock_automatico = models.BooleanField(default=False, null=True, blank=True)
    stock_hora = models.CharField(max_length=5, default='07:00', null=True, blank=True)
    avisos_pago_automatico = models.BooleanField(default=False, null=True, blank=True)
    avisos_pago_hora = models.CharField(max_length=5, default='09:00', null=True, blank=True)
    mora_automatico = models.BooleanField(default=False, null=True, blank=True)
    mora_hora = models.CharField(max_length=5, default='05:00', null=True, blank=True)
    mora_limite = models.IntegerField(default=50, null=True, blank=True)
    mora_reconexion_minutos = models.IntegerField(default=10, null=True, blank=True)
    mora_reconexion_segundos = models.IntegerField(default=5, null=True, blank=True)
    mora_barrida_minutos = models.IntegerField(default=15, null=True, blank=True)
    firmas_automatico = models.BooleanField(default=False)
    firmas_cada_minutos = models.IntegerField(default=60)
    incidencias_cola_activa = models.BooleanField(null=True, blank=True)
    incidencias_automatico = models.BooleanField(null=True, blank=True)
    incidencias_minutos = models.IntegerField(null=True, blank=True)
    incidencias_cada_minutos = models.IntegerField(null=True, blank=True)
    incidencias_lote = models.IntegerField(null=True, blank=True)
    pausas_automatico = models.BooleanField(default=True)
    pausas_hora = models.TextField(default='08:00', blank=True)

    # Migraciones 196-217 (keplerost/CRM_ISP).
    foto_routers_automatico = models.BooleanField(default=True)
    foto_routers_hora = models.TextField(default='23:30')
    subida_automatico = models.BooleanField(default=True)
    subida_cada_minutos = models.IntegerField(default=5)
    horario_desde = models.TimeField(default='07:00')
    horario_hasta = models.TimeField(default='18:00')
    nms_router_fallas = models.IntegerField(default=3)
    nms_gracia_minutos = models.IntegerField(default=5)

    class Meta:
        abstract = True


class ColumnasConfigGeneral(TablaDashboard):
    """`config_general`."""

    id = models.IntegerField(primary_key=True, default=1)
    nombre_sistema = models.CharField(max_length=60, null=True, blank=True)
    lema = models.CharField(max_length=80, null=True, blank=True)
    logo_b64 = models.TextField(null=True, blank=True)
    moneda_simbolo = models.CharField(max_length=5, default='$', blank=True)
    moneda_codigo = models.CharField(max_length=3, default='USD', blank=True)
    actualizado_en = models.DateTimeField(default=timezone.now)
    zona_horaria = models.TextField(default='America/Guayaquil', blank=True)

    # Migraciones 196-217 (keplerost/CRM_ISP).
    iva_porcentaje = models.DecimalField(max_digits=5, decimal_places=2, validators=[MinValueValidator(0), MaxValueValidator(100)], default=15)
    pais = models.CharField(max_length=2, default='EC')

    class Meta:
        abstract = True


class ColumnasPortalCodigos(TablaDashboard):
    """`portal_codigos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    codigo_hash = models.CharField(max_length=64, blank=True)
    expira_en = models.DateTimeField()
    intentos = models.SmallIntegerField(default=0)
    usado_en = models.DateTimeField(null=True, blank=True)
    canal = models.CharField(max_length=15, null=True, blank=True)
    enviado_a = models.CharField(max_length=120, null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasPortalSesiones(TablaDashboard):
    """`portal_sesiones`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    token_hash = models.CharField(max_length=64, blank=True, unique=True)
    expira_en = models.DateTimeField()
    ultimo_uso = models.DateTimeField(null=True, blank=True)
    agente = models.CharField(max_length=200, null=True, blank=True)
    creada_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasPortalSolicitudes(TablaDashboard):
    """`portal_solicitudes`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    tipo = models.CharField(max_length=20, choices=[('clave_wifi', 'clave_wifi'), ('nombre_wifi', 'nombre_wifi')], blank=True)
    valor_encrypted = models.TextField(blank=True)
    estado = models.CharField(max_length=15, choices=[('pendiente', 'pendiente'), ('aplicada', 'aplicada'), ('fallida', 'fallida'), ('cancelada', 'cancelada')], default='pendiente', blank=True)
    intentos = models.SmallIntegerField(default=0)
    ultimo_error = models.TextField(null=True, blank=True)
    aplicada_en = models.DateTimeField(null=True, blank=True)
    creada_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasUsuariosSistema(TablaDashboard):
    """`usuarios_sistema`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    auth_id = models.CharField(max_length=64, null=True, blank=True, unique=True)
    nombre = EncryptedCharField(max_length=60, blank=True)
    apellido = EncryptedCharField(max_length=60, default='', blank=True)
    usuario = models.CharField(max_length=40, blank=True)
    email = models.CharField(max_length=120, blank=True)
    celular = EncryptedCharField(max_length=30, null=True, blank=True)
    rol = models.CharField(max_length=20, choices=[('super_admin', 'super_admin'), ('admin', 'admin'), ('finanzas', 'finanzas'), ('cobrador', 'cobrador'), ('cajero', 'cajero'), ('vendedor', 'vendedor'), ('supervisor', 'supervisor'), ('tecnico', 'tecnico'), ('bodega', 'bodega'), ('recaudacion', 'recaudacion')], default='tecnico', blank=True)
    activo = models.BooleanField(default=True)
    todas_las_zonas = models.BooleanField(default=False)
    dos_factores = models.BooleanField(default=False)
    permisos = models.JSONField(default=list, blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    ultimo_acceso = models.DateTimeField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasAuditoriaSistema(TablaDashboard):
    """`auditoria_sistema`."""

    id = models.BigAutoField(primary_key=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    usuario_nombre = models.CharField(max_length=140, null=True, blank=True)
    usuario_rol = models.CharField(max_length=20, null=True, blank=True)
    accion = models.CharField(max_length=60, blank=True)
    descripcion = models.TextField(blank=True)
    entidad = models.CharField(max_length=40, null=True, blank=True)
    entidad_id = models.CharField(max_length=60, null=True, blank=True)
    datos = models.JSONField(null=True, blank=True)
    ip = models.CharField(max_length=45, null=True, blank=True)
    user_agent = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasProspectos(TablaDashboard):
    """`prospectos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = EncryptedCharField(max_length=150, blank=True)
    identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    telefono = EncryptedCharField(max_length=30, null=True, blank=True)
    telefono_whatsapp = EncryptedCharField(max_length=30, null=True, blank=True)
    email = EncryptedCharField(max_length=200, null=True, blank=True)
    direccion = EncryptedTextField(null=True, blank=True)
    referencia = EncryptedTextField(null=True, blank=True)
    sector = models.CharField(max_length=100, null=True, blank=True)
    canton = models.CharField(max_length=100, null=True, blank=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    origen = models.CharField(max_length=20, default='otro', blank=True)
    estado = models.CharField(max_length=15, default='nuevo', blank=True)
    motivo_perdida = models.TextField(null=True, blank=True)
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cobertura = models.CharField(max_length=15, default='pendiente', blank=True)
    nap = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    distancia_nodo_m = models.IntegerField(null=True, blank=True)
    proxima_accion = models.DateField(null=True, blank=True)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)
    archivado_en = models.DateTimeField(null=True, blank=True)
    ganado_en = models.DateTimeField(null=True, blank=True)
    promocion = models.ForeignKey('dashboard.Promociones', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tipo_operacion = models.CharField(max_length=14, choices=[('nueva', 'nueva'), ('reactivacion', 'reactivacion')], default='nueva', blank=True)

    class Meta:
        abstract = True


class ColumnasProspectoActividades(TablaDashboard):
    """`prospecto_actividades`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prospecto = models.ForeignKey('dashboard.Prospectos', on_delete=models.CASCADE, related_name='+')
    tipo = models.CharField(max_length=15, blank=True)
    resultado = models.CharField(max_length=20, null=True, blank=True)
    detalle = models.TextField(null=True, blank=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    usuario_nombre = models.CharField(max_length=140, null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    programado_para = models.DateTimeField(null=True, blank=True)
    proxima_accion = models.TextField(null=True, blank=True)
    estado = models.CharField(max_length=12, choices=[('pendiente', 'pendiente'), ('completado', 'completado'), ('cancelado', 'cancelado')], default='completado', blank=True)
    completado_en = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasCotizaciones(TablaDashboard):
    """`cotizaciones`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.BigIntegerField(null=True, blank=True)
    prospecto = models.ForeignKey('dashboard.Prospectos', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    plan_nombre = models.CharField(max_length=120, null=True, blank=True)
    precio_mensual = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    costo_instalacion = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    costo_equipo = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    descuento = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    meses_contrato = models.SmallIntegerField(null=True, blank=True)
    validez_dias = models.SmallIntegerField(default=15)
    estado = models.CharField(max_length=12, default='borrador', blank=True)
    notas = models.TextField(null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    telefono = EncryptedCharField(max_length=30, null=True, blank=True)
    sector = models.CharField(max_length=100, null=True, blank=True)
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    convertida_en = models.UUIDField(null=True, blank=True)
    promocion = models.ForeignKey('dashboard.Promociones', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    promocion_nombre = models.CharField(max_length=120, null=True, blank=True)
    precio_promocional = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    meses_promocion = models.SmallIntegerField(null=True, blank=True)
    primer_mes = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasZonasCobertura(TablaDashboard):
    """`zonas_cobertura`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=120, blank=True)
    tipo = models.CharField(max_length=10, default='circulo', blank=True)
    tecnologia = models.CharField(max_length=10, default='ftth', blank=True)
    centro_lat = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    centro_lng = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    radio_m = models.IntegerField(null=True, blank=True)
    poligono = models.JSONField(null=True, blank=True)
    color = models.CharField(max_length=7, default='#0ea5e9', blank=True)
    activa = models.BooleanField(default=True)
    notas = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasVerificacionesCobertura(TablaDashboard):
    """`verificaciones_cobertura`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    direccion = EncryptedTextField(blank=True)
    sector = models.CharField(max_length=100, null=True, blank=True)
    referencia = EncryptedTextField(null=True, blank=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    resultado = models.CharField(max_length=22, default='requiere_verificacion', blank=True)
    nap = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    olt = models.ForeignKey('olts.OLT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    puerto_pon = models.CharField(max_length=20, null=True, blank=True)
    puerto_nap = models.CharField(max_length=20, null=True, blank=True)
    distancia_m = models.IntegerField(null=True, blank=True)
    capacidad = models.IntegerField(null=True, blank=True)
    disponibles = models.IntegerField(null=True, blank=True)
    tecnologia = models.CharField(max_length=10, default='ftth', blank=True)
    notas = models.TextField(null=True, blank=True)
    prospecto = models.ForeignKey('dashboard.Prospectos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    verificado_por = models.CharField(max_length=64, null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasMetasVenta(TablaDashboard):
    """`metas_venta`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    anio = models.SmallIntegerField()
    mes = models.SmallIntegerField()
    meta_altas = models.IntegerField(default=0)
    meta_monto = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasAlmacenes(TablaDashboard):
    """`almacenes`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, blank=True)
    tipo = models.CharField(max_length=12, default='bodega', blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    direccion = models.TextField(null=True, blank=True)
    activo = models.BooleanField(default=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasArticulos(TablaDashboard):
    """`articulos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    codigo = models.CharField(max_length=40, null=True, blank=True)
    nombre = models.CharField(max_length=140, blank=True)
    categoria = models.CharField(max_length=20, default='material', blank=True)
    unidad = models.CharField(max_length=10, default='u', blank=True)
    por_serie = models.BooleanField(default=False)
    tipo_ont = models.ForeignKey('olts.TipoONT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    stock_minimo = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    costo_ultimo = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    activo = models.BooleanField(default=True)
    notas = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasEquipos(TablaDashboard):
    """`equipos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    articulo = models.ForeignKey('dashboard.Articulos', on_delete=models.DO_NOTHING, related_name='+')
    serie = models.CharField(max_length=60, blank=True)
    mac = models.CharField(max_length=20, null=True, blank=True)
    almacen = models.ForeignKey('dashboard.Almacenes', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    estado = models.CharField(max_length=12, default='en_stock', blank=True)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    onu = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasProveedores(TablaDashboard):
    """`proveedores`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=140, blank=True)
    identificacion = models.CharField(max_length=20, null=True, blank=True)
    telefono = models.CharField(max_length=30, null=True, blank=True)
    email = models.CharField(max_length=120, null=True, blank=True)
    direccion = models.TextField(null=True, blank=True)
    contacto = models.CharField(max_length=120, null=True, blank=True)
    activo = models.BooleanField(default=True)
    notas = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasCompras(TablaDashboard):
    """`compras`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.BigIntegerField(null=True, blank=True)
    proveedor = models.ForeignKey('dashboard.Proveedores', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    almacen = models.ForeignKey('dashboard.Almacenes', on_delete=models.DO_NOTHING, related_name='+')
    documento = models.CharField(max_length=40, null=True, blank=True)
    fecha = models.DateField(default=hoy)
    total = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    estado = models.CharField(max_length=12, default='borrador', blank=True)
    recibida_en = models.DateTimeField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasCompraItems(TablaDashboard):
    """`compra_items`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    compra = models.ForeignKey('dashboard.Compras', on_delete=models.CASCADE, related_name='+')
    articulo = models.ForeignKey('dashboard.Articulos', on_delete=models.DO_NOTHING, related_name='+')
    cantidad = models.DecimalField(max_digits=12, decimal_places=2)
    costo_unit = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    series = models.JSONField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasMovimientosInventario(TablaDashboard):
    """`movimientos_inventario`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tipo = models.CharField(max_length=14, blank=True)
    articulo = models.ForeignKey('dashboard.Articulos', on_delete=models.DO_NOTHING, related_name='+')
    equipo = models.ForeignKey('dashboard.Equipos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cantidad = models.DecimalField(max_digits=12, decimal_places=2)
    almacen_origen = models.ForeignKey('dashboard.Almacenes', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    almacen_destino = models.ForeignKey('dashboard.Almacenes', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    ticket = models.ForeignKey('soporte.Ticket', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    compra = models.ForeignKey('dashboard.Compras', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    costo_unit = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    motivo = models.TextField(null=True, blank=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    usuario_nombre = models.CharField(max_length=140, null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    clave_idempotencia = models.UUIDField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasExistencias(TablaDashboard):
    """`existencias`."""

    id = models.BigAutoField(primary_key=True)
    articulo = models.ForeignKey('dashboard.Articulos', on_delete=models.CASCADE, related_name='+')
    almacen = models.ForeignKey('dashboard.Almacenes', on_delete=models.CASCADE, related_name='+')
    cantidad = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['articulo', 'almacen'], name='%(app_label)s_%(class)s_articulo_id_almacen_id_uniq'),
        ]


class ColumnasConfigCartera(TablaDashboard):
    """`config_cartera`."""

    id = models.SmallIntegerField(primary_key=True, default=1)
    ventana_cobranza_meses = models.SmallIntegerField(default=6)
    archivar_prospectos = models.BooleanField(default=True)
    actualizado_en = models.DateTimeField(default=timezone.now)
    comision_porcentaje = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('0'))

    class Meta:
        abstract = True


class ColumnasCobranzaAsignaciones(TablaDashboard):
    """`cobranza_asignaciones`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.CASCADE, related_name='+')
    vence_el = models.DateField()
    estado = models.CharField(max_length=12, default='activa', blank=True)
    saldo_inicial = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    motivo = models.TextField(null=True, blank=True)
    asignado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    cerrado_en = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasCobranzaGestiones(TablaDashboard):
    """`cobranza_gestiones`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    asignacion = models.ForeignKey('dashboard.CobranzaAsignaciones', on_delete=models.CASCADE, related_name='+')
    canal = models.CharField(max_length=12, blank=True)
    resultado = models.CharField(max_length=20, blank=True)
    observacion = models.TextField(null=True, blank=True)
    promesa_monto = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    promesa_fecha = models.DateField(null=True, blank=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    usuario_nombre = models.CharField(max_length=140, null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasExpedientes(TablaDashboard):
    """`expedientes`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prospecto = models.OneToOneField('dashboard.Prospectos', on_delete=models.CASCADE, related_name='+')
    contrato = models.ForeignKey('clientes.Contrato', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    datos_confirmados_en = models.DateTimeField(null=True, blank=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    precision_m = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    ubicacion_origen = models.CharField(max_length=6, null=True, blank=True)
    ubicacion_en = models.DateTimeField(null=True, blank=True)
    ubicacion_por = models.UUIDField(null=True, blank=True)
    estado = models.CharField(max_length=12, default='abierto', blank=True)
    enviado_en = models.DateTimeField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasExpedienteDocumentos(TablaDashboard):
    """`expediente_documentos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    expediente = models.ForeignKey('dashboard.Expedientes', on_delete=models.CASCADE, related_name='+')
    tipo = models.CharField(max_length=20, blank=True)
    ruta = models.TextField(blank=True)
    estado = models.CharField(max_length=10, default='cargado', blank=True)
    mime = models.CharField(max_length=60, null=True, blank=True)
    bytes = models.IntegerField(null=True, blank=True)
    subido_por = models.UUIDField(null=True, blank=True)
    subido_en = models.DateTimeField(default=timezone.now)
    validado_por = models.UUIDField(null=True, blank=True)
    validado_en = models.DateTimeField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasUsuarioDispositivos(TablaDashboard):
    """`usuario_dispositivos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.CASCADE, related_name='+')
    ip = models.CharField(max_length=45, blank=True)
    user_agent = models.TextField(null=True, blank=True)
    primera_vez = models.DateTimeField(default=timezone.now)
    ultima_vez = models.DateTimeField(default=timezone.now)
    accesos = models.IntegerField(default=1)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['usuario', 'ip'], name='%(app_label)s_%(class)s_usuario_id_ip_uniq'),
        ]


class ColumnasNotificaciones(TablaDashboard):
    """`notificaciones`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.CASCADE, related_name='+')
    tipo = models.CharField(max_length=30, blank=True)
    titulo = models.TextField(blank=True)
    detalle = EncryptedTextField(null=True, blank=True)
    ruta = models.TextField(null=True, blank=True)
    entidad = models.CharField(max_length=40, null=True, blank=True)
    entidad_id = models.CharField(max_length=60, null=True, blank=True)
    leida_en = models.DateTimeField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasPromociones(TablaDashboard):
    """`promociones`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=120, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    tipo = models.CharField(max_length=20, blank=True)
    valor = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    meses_aplica = models.SmallIntegerField(null=True, blank=True)
    vigente_desde = models.DateField(default=hoy)
    vigente_hasta = models.DateField(null=True, blank=True)
    activa = models.BooleanField(default=True)
    color = models.CharField(max_length=7, default='#d95926', blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasPromocionPlanes(TablaDashboard):
    """`promocion_planes`."""

    id = models.BigAutoField(primary_key=True)
    promocion = models.ForeignKey('dashboard.Promociones', on_delete=models.CASCADE, related_name='+')
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.CASCADE, related_name='+')

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['promocion', 'plan'], name='%(app_label)s_%(class)s_promocion_id_plan_id_uniq'),
        ]


class ColumnasMensajesComerciales(TablaDashboard):
    """`mensajes_comerciales`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prospecto = models.ForeignKey('dashboard.Prospectos', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    cotizacion = models.ForeignKey('dashboard.Cotizaciones', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    canal = models.CharField(max_length=20, default='whatsapp', blank=True)
    destino = models.CharField(max_length=40, blank=True)
    cuerpo = models.TextField(blank=True)
    estado = models.CharField(max_length=20, default='preparado', blank=True)
    via = models.CharField(max_length=20, default='manual', blank=True)
    proveedor_id = models.TextField(null=True, blank=True)
    enviado_en = models.DateTimeField(null=True, blank=True)
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    clave_idempotencia = models.UUIDField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasParametrosTecnicos(TablaDashboard):
    """`parametros_tecnicos`."""

    id = models.SmallIntegerField(primary_key=True, default=1)
    optica_optimo = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('-25'))
    optica_limite = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('-27'))
    optica_saturado = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('-8'))
    radio_optimo = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('-70'))
    radio_limite = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('-80'))
    radio_ccq_minimo = models.SmallIntegerField(default=80)
    ping_bueno_ms = models.SmallIntegerField(default=30)
    ping_limite_ms = models.SmallIntegerField(default=80)
    perdida_maxima_pct = models.SmallIntegerField(default=2)
    velocidad_minima_pct = models.SmallIntegerField(default=80)
    actualizado_en = models.DateTimeField(default=timezone.now)
    actualizado_por = models.UUIDField(null=True, blank=True)
    tolerancia_puntualidad_min = models.SmallIntegerField(default=15)
    dias_reincidencia = models.SmallIntegerField(default=30)

    class Meta:
        abstract = True


class ColumnasVehiculos(TablaDashboard):
    """`vehiculos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=60, blank=True)
    placa = models.CharField(max_length=20, null=True, blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    activo = models.BooleanField(default=True)
    notas = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasJornadas(TablaDashboard):
    """`jornadas`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.CASCADE, related_name='+')
    fecha = models.DateField(default=hoy)
    vehiculo = models.ForeignKey('dashboard.Vehiculos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    km_inicio = models.IntegerField(null=True, blank=True)
    km_fin = models.IntegerField(null=True, blank=True)
    inicio_at = models.DateTimeField(null=True, blank=True)
    fin_at = models.DateTimeField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    foto_ingreso = models.TextField(null=True, blank=True)
    foto_ingreso_at = models.DateTimeField(null=True, blank=True)
    lat_ingreso = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    lng_ingreso = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    precision_ingreso_m = models.IntegerField(null=True, blank=True)
    primer_trabajo_id = models.UUIDField(null=True, blank=True)
    distancia_ingreso_m = models.IntegerField(null=True, blank=True)

    # Migraciones 196-217 (keplerost/CRM_ISP).
    cuadrilla = models.ForeignKey('dashboard.Cuadrillas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    ingreso_grupal = models.ForeignKey('dashboard.IngresosGrupales', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['tecnico', 'fecha'], name='%(app_label)s_%(class)s_tecnico_id_fecha_uniq'),
        ]


class ColumnasCargasCombustible(TablaDashboard):
    """`cargas_combustible`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    vehiculo = models.ForeignKey('dashboard.Vehiculos', on_delete=models.CASCADE, related_name='+')
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    fecha = models.DateField(default=hoy)
    odometro = models.IntegerField()
    litros = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    monto = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    estacion = models.CharField(max_length=80, null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasReemplazosEquipo(TablaDashboard):
    """`reemplazos_equipo`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    ticket = models.ForeignKey('soporte.Ticket', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    equipo_anterior = models.ForeignKey('dashboard.Equipos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    equipo_nuevo = models.ForeignKey('dashboard.Equipos', on_delete=models.DO_NOTHING, related_name='+')
    onu_anterior = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    serie_anterior = models.CharField(max_length=60, null=True, blank=True)
    serie_nueva = models.CharField(max_length=60, blank=True)
    motivo = models.CharField(max_length=24, blank=True)
    detalle = models.TextField(null=True, blank=True)
    destino_anterior = models.CharField(max_length=12, default='averiado', blank=True)
    pendiente_olt = models.BooleanField(default=True)
    olt_at = models.DateTimeField(null=True, blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasTraslados(TablaDashboard):
    """`traslados`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    direccion_anterior = models.CharField(max_length=300, null=True, blank=True)
    latitud_anterior = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud_anterior = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    olt_anterior = models.ForeignKey('olts.OLT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    onu_anterior = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    sn_anterior = models.CharField(max_length=60, null=True, blank=True)
    slot_anterior = models.IntegerField(null=True, blank=True)
    puerto_anterior = models.IntegerField(null=True, blank=True)
    onu_index_anterior = models.IntegerField(null=True, blank=True)
    vlan_anterior = models.IntegerField(null=True, blank=True)
    nap_anterior = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    puerto_nap_anterior = models.CharField(max_length=20, null=True, blank=True)
    router_anterior = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    ip_anterior = models.CharField(max_length=45, null=True, blank=True)
    direccion_nueva = models.CharField(max_length=300, null=True, blank=True)
    latitud_nueva = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitud_nueva = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    motivo = models.TextField(null=True, blank=True)
    pendiente_baja = models.BooleanField(default=True)
    baja_at = models.DateTimeField(null=True, blank=True)
    baja_detalle = models.TextField(null=True, blank=True)
    estado = models.CharField(max_length=12, default='abierto', blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    cerrado_en = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasComisionEsquemas(TablaDashboard):
    """`comision_esquemas`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=80, blank=True)
    notas = models.TextField(null=True, blank=True)
    vigente_desde = models.DateField(default=hoy)
    vigente_hasta = models.DateField(null=True, blank=True)
    modo = models.CharField(max_length=12, default='retroactivo', blank=True)
    activo = models.BooleanField(default=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasComisionBasesPlan(TablaDashboard):
    """`comision_bases_plan`."""

    id = models.BigAutoField(primary_key=True)
    esquema = models.ForeignKey('dashboard.ComisionEsquemas', on_delete=models.CASCADE, related_name='+')
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.CASCADE, related_name='+')
    base = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    comisiona = models.BooleanField(default=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['esquema', 'plan'], name='%(app_label)s_%(class)s_esquema_id_plan_id_uniq'),
        ]


class ColumnasComisionNiveles(TablaDashboard):
    """`comision_niveles`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    esquema = models.ForeignKey('dashboard.ComisionEsquemas', on_delete=models.CASCADE, related_name='+')
    orden = models.SmallIntegerField()
    nombre = models.CharField(max_length=30, blank=True)
    desde_ventas = models.SmallIntegerField()
    hasta_ventas = models.SmallIntegerField(null=True, blank=True)
    porcentaje = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['esquema', 'orden'], name='%(app_label)s_%(class)s_esquema_id_orden_uniq'),
        ]


class ColumnasComisionBonosCalidad(TablaDashboard):
    """`comision_bonos_calidad`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    esquema = models.ForeignKey('dashboard.ComisionEsquemas', on_delete=models.CASCADE, related_name='+')
    orden = models.SmallIntegerField()
    desde_pct = models.DecimalField(max_digits=5, decimal_places=2)
    hasta_pct = models.DecimalField(max_digits=5, decimal_places=2)
    monto = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['esquema', 'orden'], name='%(app_label)s_%(class)s_esquema_id_orden_uniq'),
        ]


class ColumnasComisionReglas(TablaDashboard):
    """`comision_reglas`."""

    esquema = models.OneToOneField('dashboard.ComisionEsquemas', on_delete=models.CASCADE, related_name='+', primary_key=True)
    requiere_aprobacion = models.BooleanField(default=False)
    requiere_documentacion = models.BooleanField(default=False)
    requiere_contrato = models.BooleanField(default=False)
    requiere_instalacion = models.BooleanField(default=True)
    requiere_activacion = models.BooleanField(default=True)
    requiere_primer_pago = models.BooleanField(default=False)
    dia_cortesia_desde = models.SmallIntegerField(default=25)
    pago_ventana_desde = models.SmallIntegerField(default=1)
    pago_ventana_hasta = models.SmallIntegerField(default=5)
    dia_cierre = models.SmallIntegerField(default=5)
    dias_cohorte = models.SmallIntegerField(default=90)
    min_clientes_cohorte = models.SmallIntegerField(default=10)
    meses_sin_pago_suspension = models.SmallIntegerField(default=1)
    meses_sin_pago_retiro = models.SmallIntegerField(default=2)
    actualizado_en = models.DateTimeField(default=timezone.now)
    actualizado_por = models.UUIDField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasMotivosBaja(TablaDashboard):
    """`motivos_baja`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=80, blank=True, unique=True)
    afecta_calidad = models.BooleanField(default=True)
    orden = models.SmallIntegerField(default=0)
    activo = models.BooleanField(default=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasComisionVentas(TablaDashboard):
    """`comision_ventas`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prospecto = models.ForeignKey('dashboard.Prospectos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tipo_operacion = models.CharField(max_length=14, default='nueva', blank=True)
    esquema = models.ForeignKey('dashboard.ComisionEsquemas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    base = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    periodo = models.DateField(null=True, blank=True)
    cohorte = models.DateField(null=True, blank=True)
    ganado_en = models.DateTimeField(null=True, blank=True)
    aprobado_en = models.DateTimeField(null=True, blank=True)
    documentado_en = models.DateTimeField(null=True, blank=True)
    contrato_en = models.DateTimeField(null=True, blank=True)
    instalado_en = models.DateTimeField(null=True, blank=True)
    activado_en = models.DateTimeField(null=True, blank=True)
    primer_pago_en = models.DateTimeField(null=True, blank=True)
    comisionable_en = models.DateTimeField(null=True, blank=True)
    espera_pago_hasta = models.DateField(null=True, blank=True)
    estado = models.CharField(max_length=22, default='proyectada', blank=True)
    motivo_anulacion = models.TextField(null=True, blank=True)
    anulada_por = models.UUIDField(null=True, blank=True)
    anulada_en = models.DateTimeField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)
    calidad_estado = models.CharField(max_length=14, choices=[('en_seguimiento', 'en_seguimiento'), ('conservado', 'conservado'), ('perdido', 'perdido'), ('excluido', 'excluido')], default='en_seguimiento', blank=True)
    calidad_motivo = models.TextField(null=True, blank=True)
    calidad_en = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasSolicitudesValidacion(TablaDashboard):
    """`solicitudes_validacion`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prospecto = models.OneToOneField('dashboard.Prospectos', on_delete=models.CASCADE, related_name='+')
    estado = models.CharField(max_length=16, default='pendiente', blank=True)
    motivo_publico = models.TextField(null=True, blank=True)
    motivo_interno = models.TextField(null=True, blank=True)
    validado_por = models.UUIDField(null=True, blank=True)
    validado_en = models.DateTimeField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasComisionPeriodos(TablaDashboard):
    """`comision_periodos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.CASCADE, related_name='+')
    periodo = models.DateField()
    esquema = models.ForeignKey('dashboard.ComisionEsquemas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    ventas_validas = models.IntegerField(default=0)
    base_total = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    nivel = models.CharField(max_length=30, null=True, blank=True)
    porcentaje = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('0'))
    monto = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    bono = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    estado = models.CharField(max_length=10, default='cerrado', blank=True)
    cerrado_por = models.CharField(max_length=64, null=True, blank=True)
    cerrado_en = models.DateTimeField(default=timezone.now)
    aprobado_por = models.UUIDField(null=True, blank=True)
    aprobado_en = models.DateTimeField(null=True, blank=True)
    pagado_por = models.UUIDField(null=True, blank=True)
    pagado_en = models.DateTimeField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['vendedor', 'periodo'], name='%(app_label)s_%(class)s_vendedor_id_periodo_uniq'),
        ]


class ColumnasComisionCohortes(TablaDashboard):
    """`comision_cohortes`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.CASCADE, related_name='+')
    cohorte = models.DateField()
    esquema = models.ForeignKey('dashboard.ComisionEsquemas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    evaluables = models.IntegerField(default=0)
    conservados = models.IntegerField(default=0)
    perdidos = models.IntegerField(default=0)
    excluidos = models.IntegerField(default=0)
    calidad = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('0'))
    bono = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    detalle = models.TextField(null=True, blank=True)
    cierra_el = models.DateField()
    estado = models.CharField(max_length=8, default='abierta', blank=True)
    periodo_liquidado = models.DateField(null=True, blank=True)
    liquidado_en = models.DateTimeField(null=True, blank=True)
    evaluado_en = models.DateTimeField(default=timezone.now)
    cerrado_en = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['vendedor', 'cohorte'], name='%(app_label)s_%(class)s_vendedor_id_cohorte_uniq'),
        ]


class ColumnasRetirosEquipo(TablaDashboard):
    """`retiros_equipo`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    equipo = models.ForeignKey('dashboard.Equipos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    onu = models.ForeignKey('olts.ONU', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    serie = models.CharField(max_length=60, null=True, blank=True)
    modelo = models.CharField(max_length=140, null=True, blank=True)
    valor = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    fecha_instalacion = models.DateField(null=True, blank=True)
    ultimo_pago = models.DateField(null=True, blank=True)
    suspendido_en = models.DateField(null=True, blank=True)
    meses_sin_pago = models.SmallIntegerField(null=True, blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    intentos = models.SmallIntegerField(default=0)
    estado = models.CharField(max_length=14, default='pendiente', blank=True)
    motivo = models.CharField(max_length=24, null=True, blank=True)
    observaciones = models.TextField(null=True, blank=True)
    evidencia_url = models.TextField(null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    asignado_en = models.DateTimeField(null=True, blank=True)
    cerrado_por = models.CharField(max_length=64, null=True, blank=True)
    cerrado_en = models.DateTimeField(null=True, blank=True)
    responsable = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    agendado_para = models.DateTimeField(null=True, blank=True)
    agenda_nota = models.TextField(null=True, blank=True)
    recordado_en = models.DateTimeField(null=True, blank=True)
    firma_b64 = models.TextField(null=True, blank=True)
    firmante = models.CharField(max_length=150, null=True, blank=True)
    firmado_en = models.DateTimeField(null=True, blank=True)
    categoria_cierre = models.CharField(max_length=24, null=True, blank=True)
    deuda_aplicada = models.BooleanField(default=False)

    class Meta:
        abstract = True


class ColumnasRetiroIntentos(TablaDashboard):
    """`retiro_intentos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    retiro = models.ForeignKey('dashboard.RetirosEquipo', on_delete=models.CASCADE, related_name='+')
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    resultado = models.CharField(max_length=16, blank=True)
    observacion = models.TextField(null=True, blank=True)
    foto_url = models.TextField(null=True, blank=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasReactivaciones(TablaDashboard):
    """`reactivaciones`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    vendedor = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    pago = models.ForeignKey('pagos.Pago', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    pago_anterior = models.DateField(null=True, blank=True)
    reactivado_el = models.DateField()
    meses_inactivo = models.SmallIntegerField(default=0)
    retiro = models.ForeignKey('dashboard.RetirosEquipo', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    origen = models.CharField(max_length=10, default='automatica', blank=True)
    notas = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['cliente', 'reactivado_el'], name='%(app_label)s_%(class)s_cliente_id_reactivado_el_uniq'),
        ]


class ColumnasEntregasInventario(TablaDashboard):
    """`entregas_inventario`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.IntegerField(null=True, blank=True)
    entrega = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    almacen_origen = models.UUIDField(null=True, blank=True)
    recibe = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    almacen_destino = models.UUIDField(null=True, blank=True)
    estado = models.CharField(max_length=12, choices=[('pendiente', 'pendiente'), ('recibida', 'recibida'), ('anulada', 'anulada')], default='pendiente', blank=True)
    firma_b64 = models.TextField(null=True, blank=True)
    firmado_en = models.DateTimeField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    motivo_anulacion = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    firma_entrega_b64 = models.TextField(null=True, blank=True)
    firma_entrega_en = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['numero'], name='%(app_label)s_%(class)s_numero_uniq'),
        ]


class ColumnasEntregaItems(TablaDashboard):
    """`entrega_items`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    entrega = models.ForeignKey('dashboard.EntregasInventario', on_delete=models.CASCADE, related_name='+')
    equipo = models.ForeignKey('dashboard.Equipos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    serie = models.CharField(max_length=100, null=True, blank=True)
    modelo = models.CharField(max_length=150, null=True, blank=True)
    retiro = models.ForeignKey('dashboard.RetirosEquipo', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    estado_fisico = models.CharField(max_length=12, choices=[('bueno', 'bueno'), ('dañado', 'dañado'), ('incompleto', 'incompleto')], default='bueno', blank=True)
    observacion = models.TextField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['entrega', 'equipo'], name='%(app_label)s_%(class)s_entrega_id_equipo_id_uniq'),
        ]


class ColumnasAlertaReglas(TablaDashboard):
    """`alerta_reglas`."""

    clave = models.CharField(max_length=30, primary_key=True)
    nombre = models.CharField(max_length=80, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    activa = models.BooleanField(default=True)
    espera_min = models.IntegerField(default=10)
    umbral = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    desde_hora = models.TimeField(null=True, blank=True)
    hasta_hora = models.TimeField(null=True, blank=True)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasAlertaDestinos(TablaDashboard):
    """`alerta_destinos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=60, blank=True)
    canal = models.CharField(max_length=12, choices=[('whatsapp', 'whatsapp'), ('telegram', 'telegram'), ('email', 'email'), ('sms', 'sms')], default='whatsapp', blank=True)
    destino = models.CharField(max_length=120, blank=True)
    tipos = models.JSONField(default=list, blank=True)
    zonas = models.JSONField(default=list, blank=True)
    desde_hora = models.TimeField(null=True, blank=True)
    hasta_hora = models.TimeField(null=True, blank=True)
    activo = models.BooleanField(default=True)
    probado_en = models.DateTimeField(null=True, blank=True)
    probado_ok = models.BooleanField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasAlertaEventos(TablaDashboard):
    """`alerta_eventos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    regla = models.CharField(max_length=30, blank=True)
    entidad = models.CharField(max_length=20, blank=True)
    entidad_id = models.CharField(max_length=80, blank=True)
    etiqueta = models.CharField(max_length=150, null=True, blank=True)
    zona = models.CharField(max_length=60, null=True, blank=True)
    abonados = models.IntegerField(default=1)
    detalle = models.JSONField(default=dict, blank=True)
    empezo_en = models.DateTimeField(default=timezone.now)
    avisado_en = models.DateTimeField(null=True, blank=True)
    resuelto_en = models.DateTimeField(null=True, blank=True)
    resuelto_avisado_en = models.DateTimeField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasAlertaEnvios(TablaDashboard):
    """`alerta_envios`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    evento = models.ForeignKey('dashboard.AlertaEventos', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    destino_id = models.UUIDField(null=True, blank=True)
    canal = models.CharField(max_length=12, blank=True)
    destino = models.CharField(max_length=120, blank=True)
    texto = models.TextField(null=True, blank=True)
    estado = models.CharField(max_length=12, choices=[('enviado', 'enviado'), ('fallido', 'fallido'), ('omitido', 'omitido')], default='enviado', blank=True)
    respuesta = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasRetiroCategorias(TablaDashboard):
    """`retiro_categorias`."""

    clave = models.CharField(max_length=24, primary_key=True)
    nombre = models.CharField(max_length=80, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    es_perdida = models.BooleanField(default=True)
    reclamable = models.BooleanField(default=False)
    cierra_ficha = models.BooleanField(default=True)
    orden = models.SmallIntegerField(default=0)
    activa = models.BooleanField(default=True)

    class Meta:
        abstract = True


class ColumnasStockMinimos(TablaDashboard):
    """`stock_minimos`."""

    id = models.BigAutoField(primary_key=True)
    almacen = models.ForeignKey('dashboard.Almacenes', on_delete=models.CASCADE, related_name='+')
    articulo = models.ForeignKey('dashboard.Articulos', on_delete=models.CASCADE, related_name='+')
    minimo = models.DecimalField(max_digits=12, decimal_places=2)
    reponer = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['almacen', 'articulo'], name='%(app_label)s_%(class)s_almacen_id_articulo_id_uniq'),
        ]


class ColumnasConfigCorte(TablaDashboard):
    """`config_corte`."""

    id = models.SmallIntegerField(primary_key=True, default=1)
    activa = models.BooleanField(default=False)
    whatsapp_pagos = models.CharField(max_length=30, null=True, blank=True)
    telefono_pagos = models.CharField(max_length=30, null=True, blank=True)
    titulo = models.CharField(max_length=120, default='Tu servicio está suspendido', blank=True)
    mensaje = models.TextField(default='Tu servicio de internet fue suspendido por falta de pago. Apenas registremos tu pago se reactiva automáticamente.', blank=True)
    mostrar_saldo = models.BooleanField(default=True)
    mostrar_facturas = models.BooleanField(default=True)
    aviso_despues_de_pagar = models.TextField(default='Enviá la foto del comprobante por WhatsApp y reactivamos tu servicio.', blank=True)
    actualizado_en = models.DateTimeField(default=timezone.now)
    cuentas_inicializadas = models.BooleanField(default=False)

    # Migraciones 196-217 (keplerost/CRM_ISP).
    aviso_pausa_horas = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(72)], default=6)

    class Meta:
        abstract = True


class ColumnasConfigAvisosPago(TablaDashboard):
    """`config_avisos_pago`."""

    id = models.SmallIntegerField(primary_key=True, default=1)
    activa = models.BooleanField(default=False)
    dias_aviso_1 = models.IntegerField(default=-3)
    dias_aviso_2 = models.IntegerField(default=1)
    dias_aviso_3 = models.IntegerField(default=5)
    canal = models.CharField(max_length=15, choices=[('preferido', 'preferido'), ('email', 'email'), ('whatsapp', 'whatsapp'), ('telegram', 'telegram'), ('sms', 'sms')], default='preferido', blank=True)
    limite = models.IntegerField(default=200)
    actualizado_en = models.DateTimeField(default=timezone.now)
    dias_aviso_4 = models.IntegerField(default=10)
    repetir_cada_4 = models.IntegerField(default=15)

    class Meta:
        abstract = True


class ColumnasReconexionesPendientes(TablaDashboard):
    """`reconexiones_pendientes`."""

    id = models.BigAutoField(primary_key=True)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    motivo = models.CharField(max_length=30, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    procesado_en = models.DateTimeField(null=True, blank=True)
    error = models.TextField(null=True, blank=True)
    intentos = models.IntegerField(default=0)

    class Meta:
        abstract = True


class ColumnasAvisosPendientes(TablaDashboard):
    """`avisos_pendientes`."""

    id = models.BigAutoField(primary_key=True)
    cliente = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    tipo = models.CharField(max_length=30, blank=True)
    referencia_id = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    procesado_en = models.DateTimeField(null=True, blank=True)
    error = models.TextField(null=True, blank=True)
    intentos = models.IntegerField(default=0)
    enviar_desde = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasPrestadores(TablaDashboard):
    """`prestadores`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    razon_social = models.CharField(max_length=160, blank=True)
    nombre_comercial = models.CharField(max_length=120, null=True, blank=True)
    ruc = models.CharField(max_length=13, null=True, blank=True)
    direccion = models.TextField(null=True, blank=True)
    provincia = models.CharField(max_length=60, null=True, blank=True)
    canton = models.CharField(max_length=60, null=True, blank=True)
    ciudad = models.CharField(max_length=60, null=True, blank=True)
    parroquia = models.CharField(max_length=60, null=True, blank=True)
    telefono = models.CharField(max_length=30, null=True, blank=True)
    email = models.CharField(max_length=120, null=True, blank=True)
    web = models.CharField(max_length=160, null=True, blank=True)
    reclamos_email = models.CharField(max_length=120, null=True, blank=True)
    reclamos_telefono = models.CharField(max_length=30, null=True, blank=True)
    reclamos_oficinas = models.TextField(null=True, blank=True)
    reclamos_horario = models.CharField(max_length=80, null=True, blank=True)
    modelo_inscrito_el = models.DateField(null=True, blank=True)
    vigencia_meses = models.IntegerField(default=24)
    permanencia_meses = models.IntegerField(default=24)
    predeterminado = models.BooleanField(default=False)
    activo = models.BooleanField(default=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)
    valor_instalacion = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal('0'))
    plazo_instalacion = models.CharField(max_length=40, default='24 horas', blank=True)
    beneficios_permanencia = models.TextField(null=True, blank=True)
    beneficio_anexo = models.TextField(null=True, blank=True)
    costo_no_permanencia = models.TextField(null=True, blank=True)
    arbitraje_por_defecto = models.BooleanField(default=True)

    class Meta:
        abstract = True


class ColumnasConfigFirma(TablaDashboard):
    """`config_firma`."""

    id = models.IntegerField(primary_key=True, default=1)
    api_habilitada = models.BooleanField(default=False)
    proveedor = models.CharField(max_length=40, null=True, blank=True)
    api_url = models.TextField(null=True, blank=True)
    api_key_encrypted = models.TextField(null=True, blank=True)
    timeout_segundos = models.IntegerField(default=30)
    vigencia_horas = models.IntegerField(default=72)
    roles_autorizan = models.JSONField(default=por_defecto_2, blank=True)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasFirmasContrato(TablaDashboard):
    """`firmas_contrato`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    instalacion = models.ForeignKey('soporte.Instalacion', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    contrato = models.ForeignKey('clientes.Contrato', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    metodo = models.CharField(max_length=16, choices=[('electronica_api', 'electronica_api'), ('manual', 'manual')], blank=True)
    estado = models.CharField(max_length=12, choices=[('pendiente', 'pendiente'), ('enviado', 'enviado'), ('firmado', 'firmado'), ('rechazado', 'rechazado'), ('vencido', 'vencido'), ('fallido', 'fallido')], default='pendiente', blank=True)
    proveedor = models.CharField(max_length=40, null=True, blank=True)
    referencia_proveedor = models.CharField(max_length=160, null=True, blank=True)
    enlace_firma = models.TextField(null=True, blank=True)
    enviado_en = models.DateTimeField(null=True, blank=True)
    vence_en = models.DateTimeField(null=True, blank=True)
    error_api = models.TextField(null=True, blank=True)
    autorizado_por = models.UUIDField(null=True, blank=True)
    autorizado_en = models.DateTimeField(null=True, blank=True)
    motivo_manual = models.TextField(null=True, blank=True)
    validado_por = models.UUIDField(null=True, blank=True)
    validado_en = models.DateTimeField(null=True, blank=True)
    documento_firmado_url = models.TextField(null=True, blank=True)
    fecha_firma = models.DateTimeField(null=True, blank=True)
    firmante_nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    firmante_identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    contenido_hash = models.CharField(max_length=64, null=True, blank=True)
    creado_por = models.UUIDField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasClausulasContrato(TablaDashboard):
    """`clausulas_contrato`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prestador = models.ForeignKey('dashboard.Prestadores', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    orden = models.IntegerField()
    numeral = models.CharField(max_length=60, blank=True)
    titulo = models.CharField(max_length=120, blank=True)
    texto = models.TextField(null=True, blank=True)
    cierre = models.TextField(null=True, blank=True)
    cierre2 = models.TextField(null=True, blank=True)
    numerales = models.JSONField(default=list, blank=True)
    bloque = models.CharField(max_length=20, null=True, blank=True)
    bloque_final = models.CharField(max_length=20, null=True, blank=True)
    condicion = models.CharField(max_length=30, null=True, blank=True)
    etiqueta_condicion = models.CharField(max_length=120, null=True, blank=True)
    raya_firma = models.BooleanField(default=False)
    lista_titulo = models.CharField(max_length=120, null=True, blank=True)
    lista_campo = models.CharField(max_length=30, null=True, blank=True)
    activa = models.BooleanField(default=True)
    creado_en = models.DateTimeField(default=timezone.now)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasPlanesVelocidadHistorico(TablaDashboard):
    """`planes_velocidad_historico`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    plan = models.ForeignKey('facturacion.PlanVelocidad', on_delete=models.CASCADE, related_name='+', null=True, blank=True)
    nombre = models.CharField(max_length=100, null=True, blank=True)
    bajada_kbps = models.IntegerField(null=True, blank=True)
    subida_kbps = models.IntegerField(null=True, blank=True)
    motivo = models.TextField(null=True, blank=True)
    cambiado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasApiLlaves(TablaDashboard):
    """`api_llaves`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=80, blank=True)
    prefijo = models.CharField(max_length=16, blank=True)
    huella = models.TextField(blank=True, unique=True)
    permisos = models.JSONField(default=list, blank=True)
    ips_permitidas = models.JSONField(default=list, blank=True)
    cuenta = models.ForeignKey('dashboard.CuentasPago', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    confirma_pagos = models.BooleanField(default=False)
    reactiva_servicio = models.BooleanField(default=False)
    activa = models.BooleanField(default=True)
    notas = models.TextField(null=True, blank=True)
    creada_por = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    ultimo_uso = models.DateTimeField(null=True, blank=True)
    revocada_at = models.DateTimeField(null=True, blank=True)
    revocada_por = models.CharField(max_length=64, null=True, blank=True)
    motivo_revocacion = models.TextField(null=True, blank=True)
    generada_desde = models.UUIDField(null=True, blank=True)
    generada_desde_nombre = models.CharField(max_length=150, null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasApiLlamadas(TablaDashboard):
    """`api_llamadas`."""

    id = models.BigAutoField(primary_key=True)
    llave = models.ForeignKey('dashboard.ApiLlaves', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    llave_nombre = models.CharField(max_length=80, null=True, blank=True)
    metodo = models.CharField(max_length=8, blank=True)
    ruta = models.CharField(max_length=200, blank=True)
    status = models.IntegerField(null=True, blank=True)
    ms = models.IntegerField(null=True, blank=True)
    ip = models.CharField(max_length=60, null=True, blank=True)
    identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    error = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasPagosReportados(TablaDashboard):
    """`pagos_reportados`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    cliente_nombre = EncryptedCharField(max_length=150, null=True, blank=True)
    identificacion = EncryptedCharField(max_length=20, null=True, blank=True)
    llave = models.ForeignKey('dashboard.ApiLlaves', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    llave_nombre = models.CharField(max_length=80, null=True, blank=True)
    monto = models.DecimalField(max_digits=12, decimal_places=2)
    forma_pago = models.CharField(max_length=20, choices=[('efectivo', 'efectivo'), ('transferencia', 'transferencia'), ('deposito', 'deposito'), ('tarjeta', 'tarjeta'), ('otro', 'otro')], default='transferencia', blank=True)
    n_transaccion = models.CharField(max_length=60, null=True, blank=True)
    fecha_pago = models.DateField(default=hoy)
    referencia_externa = models.CharField(max_length=120, null=True, blank=True)
    comprobante_url = models.TextField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    estado = models.CharField(max_length=12, choices=[('pendiente', 'pendiente'), ('confirmado', 'confirmado'), ('rechazado', 'rechazado')], default='pendiente', blank=True)
    pago = models.ForeignKey('pagos.Pago', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    verificado_por = models.CharField(max_length=64, null=True, blank=True)
    verificado_at = models.DateTimeField(null=True, blank=True)
    motivo_rechazo = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    banco_origen = models.CharField(max_length=80, null=True, blank=True)
    depositante = models.CharField(max_length=150, null=True, blank=True)
    hash_qr = models.CharField(max_length=128, null=True, blank=True)
    uuid_transaccion = models.CharField(max_length=80, null=True, blank=True)
    factura = models.ForeignKey('facturacion.Factura', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    metodo_verificacion = models.CharField(max_length=20, null=True, blank=True)
    origen = models.CharField(max_length=30, null=True, blank=True)
    cuenta = models.ForeignKey('dashboard.CuentasPago', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasIncidenciasMasivas(TablaDashboard):
    """`incidencias_masivas`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tipo = models.CharField(max_length=20, choices=[('averia', 'averia'), ('fibra_rota', 'fibra_rota'), ('mantenimiento', 'mantenimiento'), ('corte_energia', 'corte_energia'), ('enlace_caido', 'enlace_caido'), ('otro', 'otro')], default='averia', blank=True)
    titulo = models.CharField(max_length=120, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    alcance = models.CharField(max_length=12, choices=[('zona', 'zona'), ('punto', 'punto'), ('nodo', 'nodo'), ('olt', 'olt'), ('router', 'router'), ('manual', 'manual')], blank=True)
    zona = models.CharField(max_length=60, null=True, blank=True)
    punto = models.ForeignKey('dashboard.PuntosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    nodo = models.ForeignKey('dashboard.NodosRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    olt = models.ForeignKey('olts.OLT', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    puerto_pon = models.CharField(max_length=20, null=True, blank=True)
    router = models.ForeignKey('mikrotik.RouterMikrotik', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    clientes_manual = models.JSONField(default=list, blank=True)
    estado = models.CharField(max_length=12, choices=[('borrador', 'borrador'), ('abierta', 'abierta'), ('resuelta', 'resuelta'), ('cancelada', 'cancelada')], default='borrador', blank=True)
    ocurrio_at = models.DateTimeField(default=timezone.now)
    abierta_at = models.DateTimeField(null=True, blank=True)
    resuelta_at = models.DateTimeField(null=True, blank=True)
    estimado_at = models.DateTimeField(null=True, blank=True)
    programada = models.BooleanField(default=False)
    inicio_previsto = models.DateTimeField(null=True, blank=True)
    fin_previsto = models.DateTimeField(null=True, blank=True)
    origen = models.CharField(max_length=10, choices=[('manual', 'manual'), ('nms', 'nms')], default='manual', blank=True)
    nodo_evento_id = models.BigIntegerField(null=True, blank=True)
    avisar_apertura = models.BooleanField(default=True)
    avisar_resolucion = models.BooleanField(default=True)
    afectados = models.IntegerField(null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    created_by = models.CharField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasIncidenciaAvisos(TablaDashboard):
    """`incidencia_avisos`."""

    id = models.BigAutoField(primary_key=True)
    incidencia = models.ForeignKey('dashboard.IncidenciasMasivas', on_delete=models.CASCADE, related_name='+')
    client = models.ForeignKey('clientes.Cliente', on_delete=models.CASCADE, related_name='+')
    momento = models.CharField(max_length=12, choices=[('apertura', 'apertura'), ('resolucion', 'resolucion')], blank=True)
    estado = models.CharField(max_length=10, choices=[('pendiente', 'pendiente'), ('enviado', 'enviado'), ('fallido', 'fallido'), ('omitido', 'omitido')], default='pendiente', blank=True)
    canal = models.CharField(max_length=15, null=True, blank=True)
    motivo = models.TextField(null=True, blank=True)
    intentos = models.IntegerField(default=0)
    creado_en = models.DateTimeField(default=timezone.now)
    enviado_en = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['incidencia', 'client', 'momento'], name='%(app_label)s_%(class)s_incidencia_id_client_id_momento_uniq'),
        ]


class ColumnasPlantillasWhatsapp(TablaDashboard):
    """`plantillas_whatsapp`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    plantilla = models.OneToOneField('dashboard.PlantillasMensaje', on_delete=models.CASCADE, related_name='+')
    nombre_meta = models.CharField(max_length=64, blank=True)
    idioma = models.CharField(max_length=10, default='es', blank=True)
    categoria = models.CharField(max_length=15, choices=[('UTILITY', 'UTILITY'), ('MARKETING', 'MARKETING'), ('AUTHENTICATION', 'AUTHENTICATION')], default='UTILITY', blank=True)
    cuerpo_meta = models.TextField(blank=True)
    variables = models.JSONField(default=list, blank=True)
    ejemplos = models.JSONField(default=list, blank=True)
    estado = models.CharField(max_length=12, choices=[('borrador', 'borrador'), ('enviada', 'enviada'), ('aprobada', 'aprobada'), ('rechazada', 'rechazada'), ('pausada', 'pausada')], default='borrador', blank=True)
    motivo_rechazo = models.TextField(null=True, blank=True)
    meta_id = models.CharField(max_length=40, null=True, blank=True)
    sid_twilio = models.CharField(max_length=40, null=True, blank=True)
    notas = models.TextField(null=True, blank=True)
    actualizado_en = models.DateTimeField(default=timezone.now)
    purpose_crm = models.CharField(max_length=60, null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['nombre_meta', 'idioma'], name='%(app_label)s_%(class)s_nombre_meta_idioma_uniq'),
        ]


class ColumnasVentanasWhatsapp(TablaDashboard):
    """`ventanas_whatsapp`."""

    telefono = EncryptedCharField(max_length=20, primary_key=True)
    client = models.ForeignKey('clientes.Cliente', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    ultimo_entrante = models.DateTimeField()
    ultimo_texto = models.CharField(max_length=300, null=True, blank=True)
    mensajes = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasMantenimientoTipos(TablaDashboard):
    """`mantenimiento_tipos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    clave = models.CharField(max_length=40, blank=True, unique=True)
    nombre = models.CharField(max_length=80, blank=True)
    cada_km = models.IntegerField(null=True, blank=True)
    cada_meses = models.IntegerField(null=True, blank=True)
    orden = models.IntegerField(default=100)
    activo = models.BooleanField(default=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasMantenimientoIntervalos(TablaDashboard):
    """`mantenimiento_intervalos`."""

    id = models.BigAutoField(primary_key=True)
    vehiculo = models.ForeignKey('dashboard.Vehiculos', on_delete=models.CASCADE, related_name='+')
    tipo = models.ForeignKey('dashboard.MantenimientoTipos', on_delete=models.CASCADE, related_name='+')
    cada_km = models.IntegerField(null=True, blank=True)
    cada_meses = models.IntegerField(null=True, blank=True)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['vehiculo', 'tipo'], name='%(app_label)s_%(class)s_vehiculo_id_tipo_id_uniq'),
        ]


class ColumnasMantenimientos(TablaDashboard):
    """`mantenimientos`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    vehiculo = models.ForeignKey('dashboard.Vehiculos', on_delete=models.CASCADE, related_name='+')
    tipo = models.ForeignKey('dashboard.MantenimientoTipos', on_delete=models.DO_NOTHING, related_name='+')
    fecha = models.DateField(default=hoy)
    odometro = models.IntegerField(null=True, blank=True)
    costo = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    taller = models.CharField(max_length=100, null=True, blank=True)
    nota = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


# ── Migraciones 196-217 (keplerost/CRM_ISP) ─────────────────────────────────


class ColumnasCampoLlamadas(TablaDashboard):
    """`campo_llamadas`."""

    id = models.BigAutoField(primary_key=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    item_tipo = models.CharField(max_length=12, choices=[('ticket', 'ticket'), ('instalacion', 'instalacion')], blank=True)
    item_id = models.UUIDField()
    canal = models.CharField(max_length=10, choices=[('llamada', 'llamada'), ('whatsapp', 'whatsapp')], default='llamada')
    creado_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasCuadrillaReemplazos(TablaDashboard):
    """`cuadrilla_reemplazos`."""

    id = models.BigAutoField(primary_key=True)
    cuadrilla = models.ForeignKey('dashboard.Cuadrillas', on_delete=models.CASCADE, related_name='+')
    fecha = models.DateField()
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.CASCADE, related_name='+')
    designado_por = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True, db_column='designado_por')
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['cuadrilla', 'fecha'], name='%(app_label)s_%(class)s_cuadrilla_id_fecha_uniq'),
        ]


class ColumnasFacturaProveedores(TablaDashboard):
    """`factura_proveedores`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    pais = models.CharField(max_length=2, blank=True)
    proveedor = models.CharField(max_length=40, blank=True)
    activo = models.BooleanField(default=False)
    modo_prueba = models.BooleanField(default=True)
    datos = models.JSONField(default=dict)
    secretos_cifrados = models.JSONField(default=dict)
    actualizado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['pais', 'proveedor'], name='%(app_label)s_%(class)s_pais_proveedor_uniq'),
        ]


class ColumnasFotosRoutersMensual(TablaDashboard):
    """`fotos_routers_mensual`."""

    id = models.BigAutoField(primary_key=True)
    mes = models.DateField()
    router_id = models.UUIDField()
    router_nombre = models.TextField(blank=True)
    activos = models.IntegerField(default=0)
    cortados = models.IntegerField(default=0)
    suspendidos = models.IntegerField(default=0)
    por_cobrar = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    vencido = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    tomada_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
        constraints = [
            models.UniqueConstraint(fields=['mes', 'router_id'], name='%(app_label)s_%(class)s_mes_router_id_uniq'),
        ]


class ColumnasIngresosGrupales(TablaDashboard):
    """`ingresos_grupales`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cuadrilla = models.ForeignKey('dashboard.Cuadrillas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    jefe = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    fecha = models.DateField()
    momento = models.DateTimeField(default=timezone.now)
    lat = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    lng = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    precision_m = models.IntegerField(null=True, blank=True)
    distancia_m = models.IntegerField(null=True, blank=True)
    sitio_tipo = models.CharField(max_length=12, choices=[('ticket', 'ticket'), ('instalacion', 'instalacion'), ('reparacion', 'reparacion')], null=True, blank=True)
    sitio_id = models.UUIDField(null=True, blank=True)
    presentes = models.JSONField(default=list)
    foto = models.TextField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasReparacionReportes(TablaDashboard):
    """`reparacion_reportes`."""

    id = models.BigAutoField(primary_key=True)
    reparacion = models.ForeignKey('dashboard.ReparacionesRed', on_delete=models.CASCADE, related_name='+')
    tipo = models.CharField(max_length=12, choices=[('asignada', 'asignada'), ('avance', 'avance'), ('reparada', 'reparada'), ('cancelada', 'cancelada')], default='avance')
    texto = models.TextField(null=True, blank=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    lat = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    lng = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    creado_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasReparacionesRed(TablaDashboard):
    """`reparaciones_red`."""
    SERIALES = ('numero',)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.BigIntegerField(null=True, blank=True)
    incidencia = models.ForeignKey('dashboard.IncidenciasMasivas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    alerta = models.ForeignKey('dashboard.AlertaEventos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tipo = models.CharField(max_length=20, default='averia')
    titulo = models.CharField(max_length=150, blank=True)
    lugar = models.CharField(max_length=150, null=True, blank=True)
    afectados = models.IntegerField(null=True, blank=True)
    instrucciones = models.TextField(null=True, blank=True)
    prioridad = models.CharField(max_length=10, choices=[('alta', 'alta'), ('media', 'media'), ('baja', 'baja')], default='alta')
    cuadrilla = models.ForeignKey('dashboard.Cuadrillas', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    estado = models.CharField(max_length=12, choices=[('asignada', 'asignada'), ('en_curso', 'en_curso'), ('reparada', 'reparada'), ('cancelada', 'cancelada')], default='asignada')
    asignada_por = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True, db_column='asignada_por')
    creada_at = models.DateTimeField(default=timezone.now)
    iniciada_at = models.DateTimeField(null=True, blank=True)
    cerrada_at = models.DateTimeField(null=True, blank=True)
    cerrada_por = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True, db_column='cerrada_por')
    cierre_nota = models.TextField(null=True, blank=True)

    class Meta:
        abstract = True


class ColumnasRutaCambios(TablaDashboard):
    """`ruta_cambios`."""

    id = models.BigAutoField(primary_key=True)
    fecha = models.DateField()
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    motivo = models.TextField(null=True, blank=True)
    items = models.JSONField()
    creado_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasSalidasEmergencia(TablaDashboard):
    """`salidas_emergencia`."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.CASCADE, related_name='+')
    reparacion = models.ForeignKey('dashboard.ReparacionesRed', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    motivo = models.TextField(blank=True)
    inicio_at = models.DateTimeField(default=timezone.now)
    fin_at = models.DateTimeField(null=True, blank=True)
    lat_ingreso = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    lng_ingreso = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    foto_ingreso = models.TextField(null=True, blank=True)
    cierre_nota = models.TextField(null=True, blank=True)
    vehiculo = models.ForeignKey('dashboard.Vehiculos', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    km_inicio = models.IntegerField(null=True, blank=True)
    km_fin = models.IntegerField(null=True, blank=True)
    creado_en = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class ColumnasVisitasFallidas(TablaDashboard):
    """`visitas_fallidas`."""

    id = models.BigAutoField(primary_key=True)
    ticket = models.ForeignKey('soporte.Ticket', on_delete=models.CASCADE, related_name='+')
    tecnico = models.ForeignKey('core.Tecnico', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    usuario = models.ForeignKey('dashboard.UsuariosSistema', on_delete=models.SET_NULL, related_name='+', null=True, blank=True)
    motivo = models.CharField(max_length=20, choices=[('no_contesta', 'no_contesta'), ('sin_nadie', 'sin_nadie'), ('no_permite', 'no_permite'), ('direccion_erronea', 'direccion_erronea'), ('falta_material', 'falta_material'), ('clima', 'clima'), ('otro', 'otro')], blank=True)
    detalle = models.TextField(null=True, blank=True)
    foto = models.TextField(blank=True)
    lat = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    lng = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    llegada_at = models.DateTimeField(null=True, blank=True)
    creado_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True
