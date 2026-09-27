"""
Tareas asíncronas de Celery para el módulo de Facturación
Maneja generación masiva, envío y procesamiento de facturas electrónicas
"""
import logging
from datetime import timedelta
from decimal import Decimal

from celery import shared_task
from django.conf import settings
from django.core.mail import EmailMessage
from django.utils import timezone

from .sri import SRIIntegration

logger = logging.getLogger(__name__)


@shared_task(bind=True, max_retries=3)
def generar_facturas_mensuales(self):
    """
    Genera facturas mensuales para todos los clientes activos
    Se ejecuta el 1º de cada mes mediante Celery Beat
    """
    from apps.clientes.models import Cliente
    from .models import DetalleFactura, Factura
    logger.info('Iniciando generación masiva de facturas mensuales')
    
    clientes = Cliente.objects.filter(
        estado_servicio=Cliente.EstadoServicio.ACTIVO,
    ).prefetch_related('servicios__plan')

    generadas = 0
    errores = 0
    mes_actual = timezone.now().strftime('%B %Y')
    
    for cliente in clientes:
        try:
            # Verificar si ya tiene factura este mes
            existe = Factura.objects.filter(
                cliente=cliente,
                mes=mes_actual,
            ).exists()
            
            if existe:
                logger.debug(f'Cliente {cliente.nombre} ya tiene factura de {mes_actual}')
                continue
            
            # Obtener servicios activos del cliente
            servicios = cliente.servicios.filter(estado='activo')
            
            if not servicios.exists():
                logger.warning(f'Cliente {cliente.nombre} no tiene servicios activos')
                continue
            
            # Calcular subtotal de todos los servicios
            subtotal = sum(s.plan.precio for s in servicios if s.plan)
            
            if subtotal == 0:
                logger.warning(f'Cliente {cliente.nombre} tiene servicios sin precio')
                continue
            
            # Calcular IVA y total
            iva_porcentaje = getattr(settings, 'IVA_PORCENTAJE', Decimal('12'))
            iva = subtotal * (iva_porcentaje / 100)
            total = subtotal + iva
            
            # Generar número secuencial
            ultimo_numero = Factura.objects.order_by('-created_at').first()
            nuevo_numero = 1
            if ultimo_numero:
                try:
                    nuevo_numero = int(ultimo_numero.numero.rsplit('-', 1)[-1]) + 1
                except (TypeError, ValueError):
                    nuevo_numero = Factura.objects.count() + 1
            
            # Crear factura
            factura = Factura.objects.create(
                cliente=cliente,
                numero=f'001-001-{nuevo_numero:09d}',
                mes=mes_actual,
                subtotal=subtotal,
                iva=iva,
                total=total,
                fecha_vencimiento=(timezone.now() + timedelta(days=5)).date(),
                estado=Factura.Estado.PENDIENTE,
            )
            
            # Crear detalles de factura
            for servicio in servicios:
                if servicio.plan:
                    DetalleFactura.objects.create(
                        factura=factura,
                        descripcion=f'Servicio Internet - Plan {servicio.plan.nombre}',
                        cantidad=Decimal('1.00'),
                        precio_unitario=servicio.plan.precio,
                        subtotal=servicio.plan.precio,
                    )
            
            generadas += 1
            logger.info(f'Factura {factura.numero} generada para {cliente.nombre}')
            
            # Encolar tarea para enviar factura
            enviar_factura_individual.delay(str(factura.id))
            
        except Exception as exc:
            errores += 1
            logger.error(f'Error generando factura para {cliente.nombre}: {str(exc)}')
    
    resultado = f'Facturas generadas: {generadas}, Errores: {errores}'
    logger.info(resultado)
    return {'generadas': generadas, 'errores': errores}


@shared_task(bind=True, max_retries=3)
def enviar_facturas_por_email(self):
    """
    Envía facturas pendientes por correo electrónico
    """
    from .models import Factura

    logger.info('Iniciando envío masivo de facturas por email')
    
    pendientes = Factura.objects.filter(
        estado=Factura.Estado.PENDIENTE,
        enviada=False,
    ).exclude(
        cliente__email=''
    ).select_related('cliente').prefetch_related('detalles')[:100]  # Limitar a 100 por ejecución

    enviadas = 0
    errores = 0
    
    for factura in pendientes:
        try:
            # Generar HTML de factura
            detalles_html = '<br>'.join([
                f'- {d.descripcion}: ${d.subtotal}'
                for d in factura.detalles.all()
            ])
            
            mensaje_html = f"""
            <html>
            <body>
                <h2>Factura {factura.numero}</h2>
                <p>Estimado/a {factura.cliente.nombre},</p>
                <p>Adjuntamos el detalle de su factura:</p>
                <p><strong>Mes:</strong> {factura.mes}</p>
                <p><strong>Detalles:</strong><br>{detalles_html}</p>
                <p><strong>Subtotal:</strong> ${factura.subtotal}</p>
                <p><strong>IVA:</strong> ${factura.iva}</p>
                <p><strong>Total:</strong> ${factura.total}</p>
                <p><strong>Fecha de vencimiento:</strong> {factura.fecha_vencimiento}</p>
                <p>Gracias por su preferencia.</p>
            </body>
            </html>
            """
            
            email = EmailMessage(
                subject=f'Factura {factura.numero} - {factura.mes}',
                body=mensaje_html,
                from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', None),
                to=[factura.cliente.email],
            )
            email.content_subtype = 'html'
            email.send(fail_silently=False)
            
            factura.enviada = True
            factura.save(update_fields=['enviada', 'updated_at'])
            enviadas += 1
            
            logger.info(f'Factura {factura.numero} enviada a {factura.cliente.email}')
            
        except Exception as exc:
            errores += 1
            logger.error(f'Error enviando factura {factura.numero}: {str(exc)}')
    
    return {'enviadas': enviadas, 'errores': errores}


@shared_task(bind=True, max_retries=3)
def enviar_factura_individual(self, factura_id):
    """
    Envía una factura individual por correo electrónico
    
    Args:
        factura_id: UUID de la factura
    """
    from .models import Factura
    
    try:
        factura = Factura.objects.select_related('cliente').prefetch_related(
            'detalles'
        ).get(id=factura_id)
    except Factura.DoesNotExist:
        logger.error(f'Factura {factura_id} no encontrada')
        return False
    
    if not factura.cliente.email:
        logger.warning(f'Cliente {factura.cliente.nombre} no tiene email')
        return False
    
    try:
        # Generar HTML
        detalles_html = '<br>'.join([
            f'- {d.descripcion}: ${d.subtotal}'
            for d in factura.detalles.all()
        ])
        
        mensaje_html = f"""
        <html>
        <body>
            <h2>Factura {factura.numero}</h2>
            <p>Estimado/a {factura.cliente.nombre},</p>
            <p>Adjuntamos el detalle de su factura:</p>
            <p><strong>Mes:</strong> {factura.mes}</p>
            <p><strong>Detalles:</strong><br>{detalles_html}</p>
            <p><strong>Total:</strong> ${factura.total}</p>
            <p><strong>Vence:</strong> {factura.fecha_vencimiento}</p>
        </body>
        </html>
        """
        
        email = EmailMessage(
            subject=f'Factura {factura.numero}',
            body=mensaje_html,
            from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', None),
            to=[factura.cliente.email],
        )
        email.content_subtype = 'html'
        email.send()
        
        factura.enviada = True
        factura.save(update_fields=['enviada', 'updated_at'])
        
        logger.info(f'Factura {factura.numero} enviada exitosamente')
        return True
        
    except Exception as exc:
        logger.error(f'Error enviando factura {factura.numero}: {str(exc)}')
        raise self.retry(exc=exc, countdown=60)


@shared_task(bind=True, max_retries=3)
def procesar_factura_electronica_sri(self, factura_id):
    """
    Genera XML, firma y envía factura al SRI Ecuador
    
    Args:
        factura_id: UUID de la factura
    """
    from .models import Factura
    from .sri import SRIIntegration
    
    try:
        factura = Factura.objects.select_related('cliente').prefetch_related(
            'detalles'
        ).get(id=factura_id)
    except Factura.DoesNotExist:
        logger.error(f'Factura {factura_id} no encontrada')
        return False
    
    sri = SRIIntegration()
    
    try:
        # 1. Generar XML
        logger.info(f'Generando XML para factura {factura.numero}')
        xml_factura = sri.generar_xml_factura(factura, factura.detalles.all())
        
        # 2. Firmar XML (requiere certificado digital)
        cert_path = getattr(settings, 'SRI_CERTIFICADO_PATH', None)
        cert_password = getattr(settings, 'SRI_CERTIFICADO_PASSWORD', None)
        
        if cert_path and cert_password:
            logger.info(f'Firmando XML factura {factura.numero}')
            xml_firmado = sri.firmar_xml(xml_factura, cert_path, cert_password)
        else:
            logger.warning('Certificado SRI no configurado, usando XML sin firmar')
            xml_firmado = xml_factura
        
        # 3. Enviar a recepción SRI
        logger.info(f'Enviando factura {factura.numero} al SRI')
        resultado_recepcion = sri.enviar_recepcion(xml_firmado)
        
        if resultado_recepcion.get('estado') == 'RECIBIDA':
            factura.xml_factura = xml_firmado
            factura.estado_sri = 'RECIBIDA'
            factura.save(update_fields=['xml_factura', 'estado_sri', 'updated_at'])
            
            # 4. Consultar autorización (después de algunos segundos)
            consultar_autorizacion_sri.apply_async(
                args=[factura_id],
                countdown=10,  # Esperar 10 segundos
            )
            
            logger.info(f'Factura {factura.numero} recibida por SRI')
            return True
        else:
            logger.error(f'Factura {factura.numero} rechazada por SRI: {resultado_recepcion}')
            factura.estado_sri = 'RECHAZADA'
            factura.save(update_fields=['estado_sri', 'updated_at'])
            return False
            
    except Exception as exc:
        logger.error(f'Error procesando factura {factura.numero} en SRI: {str(exc)}')
        raise self.retry(exc=exc, countdown=300)  # Reintentar en 5 minutos


@shared_task(bind=True, max_retries=5)
def consultar_autorizacion_sri(self, factura_id):
    """
    Consulta el estado de autorización de una factura en el SRI
    
    Args:
        factura_id: UUID de la factura
    """
    from .models import Factura
    from .sri import SRIIntegration
    
    try:
        factura = Factura.objects.get(id=factura_id)
    except Factura.DoesNotExist:
        logger.error(f'Factura {factura_id} no encontrada')
        return False
    
    if not factura.clave_acceso:
        logger.error(f'Factura {factura.numero} no tiene clave de acceso')
        return False
    
    sri = SRIIntegration()
    
    try:
        resultado = sri.consultar_autorizacion(factura.clave_acceso)
        
        estado = resultado.get('estado')
        
        if estado == 'AUTORIZADO':
            factura.estado_sri = 'AUTORIZADA'
            factura.numero_autorizacion_sri = resultado.get('numero_autorizacion', '')
            factura.fecha_autorizacion = timezone.now()
            factura.save(update_fields=[
                'estado_sri',
                'numero_autorizacion_sri',
                'fecha_autorizacion',
                'updated_at'
            ])
            logger.info(f'Factura {factura.numero} AUTORIZADA por SRI')
            return True
            
        elif estado == 'NO AUTORIZADO':
            factura.estado_sri = 'NO_AUTORIZADA'
            factura.save(update_fields=['estado_sri', 'updated_at'])
            logger.warning(f'Factura {factura.numero} NO AUTORIZADA por SRI')
            return False
            
        else:
            # Estado aún en proceso, reintentar
            logger.info(f'Factura {factura.numero} aún en proceso en SRI, reintentando...')
            raise self.retry(countdown=30)  # Reintentar en 30 segundos
            
    except Exception as exc:
        logger.error(f'Error consultando autorización factura {factura.numero}: {str(exc)}')
        raise self.retry(exc=exc, countdown=60)
