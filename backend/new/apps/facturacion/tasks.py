"""
Tareas de Celery de facturación: emisión mensual, envío por correo y SRI.

Trabajan sobre las tablas del dashboard: la factura (`facturas`) dice a quién y
por qué período; lo pagado sale de `pagos`; el comprobante electrónico vive en
`electronic_documents` y la factura lo apunta con `document_id`.
"""
import logging
from datetime import timedelta
from decimal import ROUND_HALF_UP, Decimal

from celery import shared_task
from django.conf import settings
from django.core.mail import EmailMessage
from django.utils import timezone

from .sri import SRIIntegration

logger = logging.getLogger(__name__)


def _centavos(valor):
    return Decimal(valor).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)


def importes(precio, tipo_impuesto):
    """(subtotal, impuesto, total) de un precio según cómo se cobra el IVA."""
    iva = Decimal(str(getattr(settings, 'IVA_PORCENTAJE', 15))) / 100
    precio = Decimal(precio)
    if tipo_impuesto == 'ninguno':
        return _centavos(precio), Decimal('0.00'), _centavos(precio)
    if tipo_impuesto == 'mas':
        subtotal = _centavos(precio)
        impuesto = _centavos(subtotal * iva)
        return subtotal, impuesto, subtotal + impuesto
    # 'incluido' (el valor de siempre): el precio ya trae el IVA adentro.
    total = _centavos(precio)
    subtotal = _centavos(total / (1 + iva))
    return subtotal, total - subtotal, total


@shared_task(bind=True, max_retries=3)
def generar_facturas_mensuales(self):
    """
    Una factura de servicios por abonado activo para el mes en curso.

    El precio es el `precio_mensual` del abonado o, si no tiene, el de su plan.
    Si ya existe la factura de servicios de ese período, no se repite.
    """
    from apps.clientes.models import Cliente

    from .models import Factura

    hoy = timezone.localdate()
    desde = hoy.replace(day=1)
    hasta = (desde + timedelta(days=32)).replace(day=1) - timedelta(days=1)
    generadas = errores = 0

    for cliente in Cliente.objects.filter(estado=Cliente.Estado.ACTIVO).select_related('plan'):
        try:
            if Factura.objects.filter(client=cliente, tipo='servicios', periodo_desde=desde,
                                      anulada=False).exists():
                continue
            precio = cliente.precio_mensual or (cliente.plan.precio if cliente.plan_id else None)
            if not precio:
                logger.warning('Cliente %s sin precio: no se factura', cliente.nombre)
                continue
            tipo_impuesto = cliente.tipo_impuesto or (cliente.plan.tipo_impuesto if cliente.plan_id else 'incluido')
            subtotal, impuesto, total = importes(precio, tipo_impuesto)
            plan = cliente.plan.nombre if cliente.plan_id else 'Internet'
            factura = Factura.objects.create(
                client=cliente,
                cliente_nombre=cliente.nombre,
                tipo='servicios',
                concepto=f'Servicio de internet {plan} - {desde:%m/%Y}',
                periodo_desde=desde,
                periodo_hasta=hasta,
                fecha_emision=hoy,
                fecha_vencimiento=hoy + timedelta(days=cliente.dias_gracia or 5),
                subtotal=subtotal,
                impuesto=impuesto,
                total=total,
                origen='automatica',
            )
            generadas += 1
            enviar_factura_individual.delay(str(factura.id))
        except Exception as exc:
            errores += 1
            logger.error('Error generando factura para %s: %s', cliente.nombre, exc)

    logger.info('Facturas generadas: %s, errores: %s', generadas, errores)
    return {'generadas': generadas, 'errores': errores}


def _correo_de_factura(factura):
    cliente = factura.client
    return (
        f'<html><body style="font-family: Arial, sans-serif;">'
        f'<h2>Factura N° {factura.numero:08d}</h2>'
        f'<p>Estimado/a {cliente.nombre},</p>'
        f'<p>{factura.concepto}</p>'
        f'<p><strong>Total:</strong> ${factura.total}</p>'
        f'<p><strong>Vence:</strong> {factura.fecha_vencimiento:%d/%m/%Y}</p>'
        f'</body></html>'
    )


@shared_task(bind=True, max_retries=3)
def enviar_factura_individual(self, factura_id):
    """Manda por correo una factura al abonado (si tiene correo)."""
    from .models import Factura

    factura = Factura.objects.select_related('client').filter(id=factura_id).first()
    if factura is None or factura.client is None:
        return False
    if not factura.client.email:
        logger.warning('Cliente %s no tiene email', factura.client.nombre)
        return False
    try:
        correo = EmailMessage(
            subject=f'Factura {factura.numero:08d} - {factura.concepto}',
            body=_correo_de_factura(factura),
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[factura.client.email],
        )
        correo.content_subtype = 'html'
        correo.send()
        if factura.document_id:
            factura.document.__class__.objects.filter(pk=factura.document_id).update(
                enviado_por_email=True, fecha_envio_email=timezone.now())
        return True
    except Exception as exc:
        logger.error('Error enviando factura %s: %s', factura_id, exc)
        raise self.retry(exc=exc, countdown=300)


@shared_task(bind=True, max_retries=3)
def enviar_facturas_por_email(self):
    """Manda las facturas emitidas hoy (no anuladas) a quien tenga correo."""
    from .models import Factura

    enviadas = 0
    for factura in Factura.objects.filter(fecha_emision=timezone.localdate(), anulada=False,
                                          client__isnull=False)[:200]:
        if factura.client.email:
            enviar_factura_individual.delay(str(factura.id))
            enviadas += 1
    return {'enviadas': enviadas, 'errores': 0}


@shared_task(bind=True, max_retries=3)
def procesar_factura_electronica_sri(self, factura_id):
    """
    Arma el comprobante electrónico de una factura y lo manda al SRI.

    El comprobante queda en `electronic_documents` (estado BORRADOR → FIRMADO →
    ENVIADO) y la factura lo apunta con `document_id`.
    """
    from apps.dashboard.models import ElectronicDocuments

    from .models import DetalleFactura, Factura

    factura = Factura.objects.select_related('client').filter(id=factura_id).first()
    if factura is None or factura.client is None:
        return False

    sri = SRIIntegration()
    factura.serie = '001-001'
    xml = sri.generar_xml_factura(factura, list(DetalleFactura.objects.filter(factura=factura)))
    cliente = factura.client
    documento = factura.document or ElectronicDocuments(
        tipo_doc='01',
        ambiente=str(getattr(settings, 'SRI_AMBIENTE', '1')),
        secuencial=str(factura.numero).zfill(9),
        clave_acceso=getattr(factura, 'clave_acceso', None) or '',
        fecha_emision=factura.fecha_emision,
        client=cliente,
        tipo_identificacion_comprador=cliente.tipo_identificacion or '05',
        identificacion_comprador=cliente.identificacion or '',
        razon_social_comprador=cliente.nombre,
        direccion_comprador=(cliente.direccion or '')[:300] or None,
        email_comprador=cliente.email,
        total_sin_impuestos=factura.subtotal,
        total_iva=factura.impuesto,
        importe_total=factura.total,
    )
    documento.xml_sin_firma = xml
    documento.save()
    if factura.document_id != documento.pk:
        factura.document = documento
        factura.save(update_fields=['document', 'updated_at'])

    certificado = getattr(settings, 'SRI_CERTIFICADO_PATH', '')
    if not certificado:
        logger.warning('Sin certificado SRI: el comprobante %s queda en borrador', documento.pk)
        return True
    try:
        documento.xml_firmado = sri.firmar_xml(xml, certificado, settings.SRI_CERTIFICADO_PASSWORD)
        documento.estado = 'FIRMADO'
        documento.save(update_fields=['xml_firmado', 'estado', 'updated_at'])
        recepcion = sri.enviar_recepcion(documento.xml_firmado)
        if recepcion.get('estado') == 'RECIBIDA':
            documento.estado = 'ENVIADO'
            documento.save(update_fields=['estado', 'updated_at'])
            consultar_autorizacion_sri.apply_async(args=[str(factura.id)], countdown=30)
        else:
            documento.mensaje_autorizacion = recepcion.get('mensaje') or str(recepcion)
            documento.save(update_fields=['mensaje_autorizacion', 'updated_at'])
        return True
    except Exception as exc:
        logger.error('Error procesando comprobante de %s: %s', factura_id, exc)
        raise self.retry(exc=exc, countdown=120)


@shared_task(bind=True, max_retries=5)
def consultar_autorizacion_sri(self, factura_id):
    """Pregunta al SRI si autorizó el comprobante de la factura."""
    from .models import Factura

    factura = Factura.objects.select_related('document').filter(id=factura_id).first()
    documento = factura.document if factura else None
    if documento is None or not documento.clave_acceso:
        return False
    try:
        resultado = SRIIntegration().consultar_autorizacion(documento.clave_acceso)
    except Exception as exc:
        raise self.retry(exc=exc, countdown=300)

    estado = resultado.get('estado')
    if estado == 'AUTORIZADO':
        documento.estado = 'AUTORIZADO'
        documento.numero_autorizacion = resultado.get('numero_autorizacion') or documento.clave_acceso
        documento.fecha_autorizacion = timezone.now()
        documento.save(update_fields=['estado', 'numero_autorizacion', 'fecha_autorizacion', 'updated_at'])
        return True
    if estado == 'NO AUTORIZADO':
        documento.estado = 'NO_AUTORIZADO'
        documento.mensaje_autorizacion = resultado.get('mensaje') or ''
        documento.save(update_fields=['estado', 'mensaje_autorizacion', 'updated_at'])
        return False
    raise self.retry(countdown=300)
