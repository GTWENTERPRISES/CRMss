"""Factories compatibles con los modelos actuales del CRM ISP."""
from decimal import Decimal

import factory
from factory.django import DjangoModelFactory


class ClienteFactory(DjangoModelFactory):
    class Meta:
        model = 'clientes.Cliente'

    identificacion = factory.Sequence(lambda n: f'09{n:08d}')
    nombre = factory.Faker('name', locale='es_ES')
    telefono = factory.Sequence(lambda n: f'09{n:08d}')
    email = factory.Faker('email', locale='es_ES')
    direccion = factory.Faker('address', locale='es_ES')
    estado = 'activo'


class ContratoFactory(DjangoModelFactory):
    class Meta:
        model = 'clientes.Contrato'

    client = factory.SubFactory(ClienteFactory)
    numero = factory.Sequence(lambda n: f'CNT-{n:06d}')
    fecha_inicio = factory.Faker('date_this_year')
    fecha_fin = factory.Faker('future_date')
    estado = 'vigente'


class PlanVelocidadFactory(DjangoModelFactory):
    class Meta:
        model = 'facturacion.PlanVelocidad'

    nombre = factory.Sequence(lambda n: f'Plan {10 * (n + 1)} Mbps {n}')
    categoria = 'residencial'
    bajada_kbps = factory.Sequence(lambda n: 10000 * (n + 1))
    subida_kbps = factory.Sequence(lambda n: 5000 * (n + 1))
    precio = factory.Sequence(lambda n: Decimal(str(20 + n * 5)))
    tipo_impuesto = 'mas'


class OLTFactory(DjangoModelFactory):
    class Meta:
        model = 'olts.OLT'

    nombre = factory.Sequence(lambda n: f'OLT-{n}')
    marca = 'Huawei'
    ip_host = factory.Sequence(lambda n: f'10.0.0.{n + 10}')
    puerto_ssh = factory.Sequence(lambda n: 2200 + n)
    usuario = 'admin'
    password_encrypted = 'encrypted_password'
    activo = True


class TipoONTFactory(DjangoModelFactory):
    class Meta:
        model = 'olts.TipoONT'

    marca = 'Huawei'
    modelo = factory.Sequence(lambda n: f'HG8245-{n}')
    puertos_ethernet = 4
    puertos_fxs = 1
    wifi = True


class ONUFactory(DjangoModelFactory):
    class Meta:
        model = 'olts.ONU'

    olt = factory.SubFactory(OLTFactory)
    tipo_ont = factory.SubFactory(TipoONTFactory)
    sn = factory.Sequence(lambda n: f'HWTC{n:08X}')
    frame = 0
    slot = 0
    puerto = factory.Sequence(lambda n: n + 1)
    onu_index = factory.Sequence(lambda n: n + 1)
    rx_power_dbm = Decimal('-23.50')
    estado = 'online'


class RouterMikrotikFactory(DjangoModelFactory):
    class Meta:
        model = 'mikrotik.RouterMikrotik'

    nombre = factory.Sequence(lambda n: f'Router-{n}')
    ip_host = factory.Sequence(lambda n: f'10.1.0.{n + 10}')
    modo_api = 'binaria'
    puerto_api = factory.Sequence(lambda n: 8700 + n)
    usuario = 'admin'
    password_encrypted = 'encrypted_password'
    activo = True


class IPAddressFactory(DjangoModelFactory):
    class Meta:
        model = 'mikrotik.IPAddress'

    router = factory.SubFactory(RouterMikrotikFactory)
    onu = factory.SubFactory(ONUFactory)
    ip_address = factory.Sequence(lambda n: f'192.168.10.{n + 1}')
    netmask = '255.255.255.0'
    interfaz = 'ether1'
    estado = 'asignada'


class FirewallBloqueoFactory(DjangoModelFactory):
    class Meta:
        model = 'mikrotik.FirewallBloqueo'

    router = factory.SubFactory(RouterMikrotikFactory)
    onu = factory.SubFactory(ONUFactory)
    cliente_ip = factory.Sequence(lambda n: f'192.168.20.{n + 1}')
    tipo_accion = 'CORTAR_SERVICIO'
    activo = True


class FacturaFactory(DjangoModelFactory):
    class Meta:
        model = 'facturacion.Factura'

    client = factory.SubFactory(ClienteFactory)
    cliente_nombre = factory.LazyAttribute(lambda f: f.client.nombre if f.client else None)
    concepto = 'Servicio de internet - 09/2026'
    subtotal = Decimal('50.00')
    impuesto = Decimal('6.00')
    total = Decimal('56.00')
    fecha_vencimiento = factory.Faker('future_date')


class DetalleFacturaFactory(DjangoModelFactory):
    class Meta:
        model = 'facturacion.DetalleFactura'

    factura = factory.SubFactory(FacturaFactory)
    descripcion = 'Servicio Internet Mensual'
    cantidad = Decimal('1.00')
    precio_unitario = Decimal('50.00')
    subtotal = Decimal('50.00')
    aplica_iva = True


class PagoFactory(DjangoModelFactory):
    class Meta:
        model = 'pagos.Pago'

    client = factory.SubFactory(ClienteFactory)
    cliente_nombre = factory.LazyAttribute(lambda p: p.client.nombre if p.client else None)
    monto = Decimal('56.00')
    forma_pago = 'efectivo'
    n_transaccion = factory.Sequence(lambda n: f'REF{n:08d}')
    fecha_pago = factory.Faker('date_this_month')


class CorteFactory(DjangoModelFactory):
    class Meta:
        model = 'pagos.Corte'

    cliente = factory.SubFactory(ClienteFactory)
    motivo = 'MORA'
    ejecutado_por = 'SISTEMA_AUTO'
    reactivado = False


class TicketFactory(DjangoModelFactory):
    class Meta:
        model = 'soporte.Ticket'

    client = factory.SubFactory(ClienteFactory)
    nombre = factory.LazyAttribute(lambda t: t.client.nombre if t.client else 'Sin identificar')
    tipo_incidencia = 'sin_internet'
    descripcion = factory.Faker('text', locale='es_ES')
    prioridad = 'media'
    estado = 'abierto'


class InstalacionFactory(DjangoModelFactory):
    class Meta:
        model = 'soporte.Instalacion'

    nombre = factory.Faker('name', locale='es_ES')
    identificacion = factory.Sequence(lambda n: f'17{n:08d}')
    telefono = factory.Sequence(lambda n: f'09{n:08d}')
    direccion = factory.Faker('street_address', locale='es_ES')
    plan = factory.SubFactory(PlanVelocidadFactory)
    fecha = factory.Faker('future_date')
    franja = 'manana'
    estado = 'agendada'


class ConversacionWhatsappFactory(DjangoModelFactory):
    class Meta:
        model = 'whatsapp.ConversacionWhatsapp'

    cliente = factory.SubFactory(ClienteFactory)
    telefono = factory.Sequence(lambda n: f'593{n:09d}')
    estado = 'ACTIVA'


class MensajeWhatsappFactory(DjangoModelFactory):
    class Meta:
        model = 'whatsapp.MensajeWhatsapp'

    conversacion = factory.SubFactory(ConversacionWhatsappFactory)
    direccion = 'SALIENTE'
    tipo = 'TEXTO'
    cuerpo = factory.Faker('sentence', locale='es_ES')
    estado = 'ENVIADO'


class SondeoRedFactory(DjangoModelFactory):
    class Meta:
        model = 'nms.SondeoRed'

    olt = factory.SubFactory(OLTFactory)
    estado = 'OK'
    latencia_ms = 50


class AlertaRedFactory(DjangoModelFactory):
    class Meta:
        model = 'nms.AlertaRed'

    tipo = 'POTENCIA_BAJA'
    severidad = 'WARNING'
    mensaje = 'Potencia óptica baja'
    onu = factory.SubFactory(ONUFactory)
    resuelta = False
