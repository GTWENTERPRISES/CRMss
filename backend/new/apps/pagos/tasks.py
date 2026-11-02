"""
Tareas asíncronas de Celery para el módulo de Pagos y Cortes
Maneja cortes automáticos por mora, recordatorios y reactivaciones
"""
import logging
from datetime import timedelta
from decimal import Decimal

from celery import shared_task
from django.db import models
from django.utils import timezone

logger = logging.getLogger(__name__)

from .models import Corte


@shared_task(bind=True)
def ejecutar_cortes_automaticos(self):
    """
    Ejecuta cortes automáticos para clientes con facturas vencidas
    Se ejecuta diariamente mediante Celery Beat
    """
    from apps.clientes.models import Cliente
    from apps.facturacion.models import Factura
    from .models import Corte

    logger.info('Iniciando proceso de cortes automáticos')

    from .cobros import facturas_con_saldo

    # Activos a los que se les corta, con alguna factura vencida que siga
    # debiendo después de sus días de gracia.
    hoy = timezone.localdate()
    clientes_morosos = []
    for cliente in Cliente.objects.filter(estado=Cliente.Estado.ACTIVO, aplicar_corte=True):
        gracia = timedelta(days=cliente.dias_gracia or 0)
        if any(f.fecha_vencimiento + gracia < hoy for f, _ in facturas_con_saldo(cliente)):
            clientes_morosos.append(cliente)

    cortados = 0
    errores = 0

    for cliente in clientes_morosos:
        try:
            # Verificar que no tenga ya un corte activo
            tiene_corte_activo = Corte.objects.filter(
                cliente=cliente,
                reactivado=False,
            ).exists()

            if tiene_corte_activo:
                logger.debug(f'Cliente {cliente.nombre} ya tiene corte activo')
                continue

            # Registrar corte en base de datos
            corte = Corte.objects.create(
                cliente=cliente,
                motivo=Corte.Motivo.MORA,
                ejecutado_por='SISTEMA_AUTO',
            )

            # Ejecutar corte en MikroTik (la IP del servicio está en la fila).
            if cliente.ip:
                ejecutar_corte_mikrotik.delay(str(corte.id), str(cliente.ip))

            # Actualizar estado del cliente
            cliente.estado = Cliente.Estado.CORTADO
            cliente.cortado_en = hoy
            cliente.save(update_fields=['estado', 'cortado_en', 'updated_at'])

            # Enviar notificación por WhatsApp
            if cliente.telefono:
                notificar_corte_whatsapp.delay(
                    str(cliente.id),
                    'mora'
                )

            cortados += 1
            logger.info(f'Corte ejecutado para cliente {cliente.nombre}')

        except Exception as exc:
            errores += 1
            logger.error(f'Error ejecutando corte para {cliente.nombre}: {str(exc)}')

    resultado = f'Cortes ejecutados: {cortados}, Errores: {errores}'
    logger.info(resultado)
    return {'cortados': cortados, 'errores': errores}


@shared_task(bind=True, max_retries=3)
def ejecutar_corte_mikrotik(self, corte_id, ip_cliente):
    """
    Ejecuta el bloqueo de un cliente en MikroTik

    Args:
        corte_id: UUID del corte
        ip_cliente: IP del cliente a bloquear
    """
    from apps.mikrotik.models import RouterMikrotik, FirewallBloqueo
    from apps.mikrotik.drivers import get_driver
    from .models import Corte

    try:
        corte = Corte.objects.select_related('cliente').get(id=corte_id)
    except Corte.DoesNotExist:
        logger.error(f'Corte {corte_id} no encontrado')
        return False

    # Obtener router principal (ajustar según lógica de negocio)
    router = RouterMikrotik.objects.filter(activo=True).first()

    if not router:
        logger.error('No hay routers MikroTik activos configurados')
        return False

    try:
        with get_driver(router) as driver:
            # Crear bloqueo en firewall
            resultado = driver.crear_bloqueo(ip_cliente, 'CORTADOS')

            # Registrar bloqueo en BD
            FirewallBloqueo.objects.create(
                router=router,
                cliente_ip=ip_cliente,
                tipo_accion='CORTAR_SERVICIO',
                cliente=corte.cliente,
                comentario=f'Corte automático - Mora (Corte ID: {corte_id})',
                activo=True,
            )

            logger.info(f'Cliente {ip_cliente} bloqueado en MikroTik')
            return True

    except Exception as exc:
        logger.error(f'Error bloqueando {ip_cliente} en MikroTik: {str(exc)}')
        raise self.retry(exc=exc, countdown=60)


@shared_task(bind=True, max_retries=3)
def ejecutar_reactivacion(self, cliente_id):
    """
    Reactiva el servicio de un cliente después de pago

    Args:
        cliente_id: UUID del cliente
    """
    from apps.clientes.models import Cliente
    from apps.mikrotik.models import RouterMikrotik
    from apps.mikrotik.drivers import get_driver
    from .models import Corte

    try:
        cliente = Cliente.objects.get(id=cliente_id)
    except Cliente.DoesNotExist:
        logger.error(f'Cliente {cliente_id} no encontrado')
        return False

    try:
        # Buscar cortes activos del cliente
        cortes_activos = Corte.objects.filter(
            cliente=cliente,
            reactivado=False,
        )

        if not cortes_activos.exists():
            logger.warning(f'Cliente {cliente.nombre} no tiene cortes activos')
            return False

        # La IP del servicio está en la fila del cliente.
        ips_cliente = [str(cliente.ip)] if cliente.ip else []

        if not ips_cliente:
            logger.warning(f'Cliente {cliente.nombre} no tiene IPs asignadas')

        # Desbloquear en MikroTik
        router = RouterMikrotik.objects.filter(activo=True).first()
        if router:
            with get_driver(router) as driver:
                for ip in ips_cliente:
                    try:
                        driver.quitar_bloqueo(ip, 'CORTADOS')
                        logger.info(f'IP {ip} desbloqueada en MikroTik')
                    except Exception as e:
                        logger.error(f'Error desbloqueando {ip}: {str(e)}')

        # Actualizar cortes
        cortes_activos.update(
            reactivado=True,
            fecha_reactivacion=timezone.now(),
        )

        # Actualizar estado del cliente
        cliente.estado = Cliente.Estado.ACTIVO
        cliente.cortado_en = None
        cliente.save(update_fields=['estado', 'cortado_en', 'updated_at'])

        # Enviar notificación por WhatsApp
        if cliente.telefono:
            notificar_reactivacion_whatsapp.delay(str(cliente.id))

        logger.info(f'Servicio reactivado para cliente {cliente.nombre}')
        return True

    except Exception as exc:
        logger.error(f'Error reactivando servicio para cliente {cliente_id}: {str(exc)}')
        raise self.retry(exc=exc, countdown=60)


@shared_task(bind=True)
def enviar_recordatorios_pago(self):
    """
    Envía recordatorios de pago a clientes con facturas próximas a vencer
    Se ejecuta diariamente
    """
    from apps.clientes.models import Cliente
    from apps.facturacion.models import Factura

    logger.info('Iniciando envío de recordatorios de pago')

    # Facturas que vencen en 3 días
    hoy = timezone.now().date()
    fecha_recordatorio = hoy + timedelta(days=3)

    from .cobros import saldo_de_factura

    facturas_pendientes = Factura.objects.filter(
        anulada=False,
        fecha_vencimiento=fecha_recordatorio,
        client__isnull=False,
    ).select_related('client')

    enviados = 0
    errores = 0

    for factura in facturas_pendientes:
        cliente = factura.client
        try:
            saldo = saldo_de_factura(factura)
            if saldo > 0 and cliente.telefono:
                enviar_recordatorio_whatsapp.delay(
                    str(factura.id),
                    cliente.telefono,
                    cliente.nombre,
                    str(saldo),
                    str(factura.fecha_vencimiento),
                )
                enviados += 1
                logger.info(f'Recordatorio enviado a {cliente.nombre}')
        except Exception as exc:
            errores += 1
            logger.error(f'Error enviando recordatorio a {cliente.nombre}: {str(exc)}')

    return {'enviados': enviados, 'errores': errores}


@shared_task(bind=True, max_retries=3)
def enviar_recordatorio_whatsapp(self, factura_id, telefono, nombre, monto, fecha_vencimiento):
    """
    Envía un recordatorio de pago por WhatsApp
    """
    from apps.whatsapp.services import WhatsAppService

    try:
        whatsapp = WhatsAppService()
        resultado = whatsapp.enviar_recordatorio_pago(
            telefono,
            nombre,
            monto,
            fecha_vencimiento,
        )

        logger.info(f'Recordatorio WhatsApp enviado a {telefono}')
        return True

    except Exception as exc:
        logger.error(f'Error enviando recordatorio WhatsApp: {str(exc)}')
        raise self.retry(exc=exc, countdown=300)


@shared_task(bind=True, max_retries=3)
def notificar_corte_whatsapp(self, cliente_id, motivo='mora'):
    """
    Notifica corte de servicio por WhatsApp
    """
    from apps.clientes.models import Cliente
    from apps.whatsapp.services import WhatsAppService

    try:
        cliente = Cliente.objects.get(id=cliente_id)
    except Cliente.DoesNotExist:
        logger.error(f'Cliente {cliente_id} no encontrado')
        return False

    if not cliente.telefono:
        logger.warning(f'Cliente {cliente.nombre} no tiene teléfono')
        return False

    try:
        whatsapp = WhatsAppService()
        resultado = whatsapp.enviar_aviso_corte(
            cliente.telefono,
            cliente.nombre,
            motivo,
        )

        logger.info(f'Aviso de corte enviado a {cliente.nombre}')
        return True

    except Exception as exc:
        logger.error(f'Error enviando aviso de corte: {str(exc)}')
        raise self.retry(exc=exc, countdown=300)


@shared_task(bind=True, max_retries=3)
def notificar_reactivacion_whatsapp(self, cliente_id):
    """
    Notifica reactivación de servicio por WhatsApp
    """
    from apps.clientes.models import Cliente
    from apps.whatsapp.services import WhatsAppService

    try:
        cliente = Cliente.objects.get(id=cliente_id)
    except Cliente.DoesNotExist:
        logger.error(f'Cliente {cliente_id} no encontrado')
        return False

    if not cliente.telefono:
        return False

    try:
        whatsapp = WhatsAppService()
        resultado = whatsapp.enviar_aviso_reactivacion(
            cliente.telefono,
            cliente.nombre,
        )

        logger.info(f'Aviso de reactivación enviado a {cliente.nombre}')
        return True

    except Exception as exc:
        logger.error(f'Error enviando aviso de reactivación: {str(exc)}')
        raise self.retry(exc=exc, countdown=300)


@shared_task(bind=True)
def procesar_pagos_pendientes(self):
    """
    Sin efecto desde el esquema del dashboard.

    Los pagos que informa el abonado desde el portal quedan en `pagos_reportados`
    y los aprueba una persona desde el dashboard (que ahí sí registra el cobro);
    confirmarlos solos por tener un comprobante sería acreditar plata que nadie
    vio. Se conserva la tarea para no romper el calendario de Celery.
    """
    return {'procesados': 0}


@shared_task(bind=True, max_retries=3)
def aplicar_pago_a_facturas(self, pago_id):
    """
    Después de un pago: si el cliente estaba cortado y ya no debe, se reactiva.

    El reparto entre facturas ya lo hizo `cobros.aplicar_cobro` al registrar el
    pago (un pago por factura alcanzada), así que acá no se reparte nada.
    """
    from apps.clientes.models import Cliente
    from .models import Pago

    pago = Pago.objects.select_related('client').filter(id=pago_id).first()
    if pago is None or pago.anulado or pago.client is None:
        return False
    if pago.client.estado == Cliente.Estado.CORTADO and pago.client.deuda_total() <= 0:
        ejecutar_reactivacion.delay(str(pago.client_id))
    return True

