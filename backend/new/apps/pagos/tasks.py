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
    
    # Buscar clientes activos con facturas vencidas
    hoy = timezone.now().date()
    dias_gracia = 5  # Días después del vencimiento antes de cortar
    fecha_limite = hoy - timedelta(days=dias_gracia)
    
    clientes_morosos = Cliente.objects.filter(
        estado_servicio=Cliente.EstadoServicio.ACTIVO,
    ).annotate(
        facturas_vencidas=models.Count(
            'facturas',
            filter=models.Q(
                facturas__estado=Factura.Estado.PENDIENTE,
                facturas__fecha_vencimiento__lte=fecha_limite,
            )
        )
    ).filter(facturas_vencidas__gt=0)
    
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
            
            # Ejecutar corte en MikroTik
            for servicio in cliente.servicios.filter(estado=Servicio.Estado.ACTIVO):
                if not servicio.onu_id:
                    continue
                ips = servicio.onu.ip_addresses.filter(
                    estado=IPAddress.Estado.ASIGNADA,
                ).values_list('ip_address', flat=True)
                for ip in ips:
                    # Encolar tarea para bloquear en MikroTik
                    ejecutar_corte_mikrotik.delay(str(corte.id), str(ip))

            # Actualizar estado del cliente
            cliente.estado_servicio = Cliente.EstadoServicio.SUSPENDIDO_CORTE
            cliente.save(update_fields=['estado_servicio', 'updated_at'])
            
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
                tipo_accion=FirewallBloqueo.TipoAccion.CORTAR,
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
        
        # Obtener IPs del cliente
        ips_cliente = []
        for servicio in cliente.servicios.filter(estado=Servicio.Estado.ACTIVO):
            if not servicio.onu_id:
                continue
            ips_cliente.extend(
                str(ip) for ip in servicio.onu.ip_addresses.filter(
                    estado=IPAddress.Estado.ASIGNADA,
                ).values_list('ip_address', flat=True)
            )
        
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
        cliente.estado_servicio = Cliente.EstadoServicio.ACTIVO
        cliente.save(update_fields=['estado_servicio', 'updated_at'])
        
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
    
    facturas_pendientes = Factura.objects.filter(
        estado=Factura.Estado.PENDIENTE,
        fecha_vencimiento=fecha_recordatorio,
    ).select_related('cliente')
    
    enviados = 0
    errores = 0
    
    for factura in facturas_pendientes:
        try:
            if factura.cliente.telefono:
                # Enviar recordatorio por WhatsApp
                enviar_recordatorio_whatsapp.delay(
                    str(factura.id),
                    factura.cliente.telefono,
                    factura.cliente.nombre,
                    str(factura.total),
                    str(factura.fecha_vencimiento),
                )
                enviados += 1
                logger.info(f'Recordatorio enviado a {factura.cliente.nombre}')
        except Exception as exc:
            errores += 1
            logger.error(f'Error enviando recordatorio a {factura.cliente.nombre}: {str(exc)}')
    
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
    Procesa pagos pendientes de verificación
    Verifica estado y aplica a facturas correspondientes
    """
    from .models import Pago, PagoFactura
    from apps.facturacion.models import Factura
    
    logger.info('Procesando pagos pendientes de verificación')
    
    pagos_pendientes = Pago.objects.filter(
        estado=Pago.Estado.PENDIENTE,
        acreditado=False,
    ).select_related('cliente')[:50]  # Procesar máximo 50 por ejecución
    
    procesados = 0
    
    for pago in pagos_pendientes:
        try:
            # Aquí iría lógica de verificación con banco/pasarela
            # Por ahora, marcar como confirmado si tiene comprobante
            if pago.num_comprobante:
                pago.estado = Pago.Estado.CONFIRMADO
                pago.acreditado = True
                pago.save(update_fields=['estado', 'acreditado', 'updated_at'])
                
                # Aplicar pago a facturas pendientes del cliente
                aplicar_pago_a_facturas.delay(str(pago.id))
                
                procesados += 1
                logger.info(f'Pago {pago.id} procesado y confirmado')
                
        except Exception as exc:
            logger.error(f'Error procesando pago {pago.id}: {str(exc)}')
    
    return {'procesados': procesados}


@shared_task(bind=True, max_retries=3)
def aplicar_pago_a_facturas(self, pago_id):
    """
    Aplica un pago confirmado a las facturas pendientes del cliente
    
    Args:
        pago_id: UUID del pago
    """
    from .models import Pago, PagoFactura
    from apps.facturacion.models import Factura
    
    try:
        pago = Pago.objects.select_related('cliente').get(id=pago_id)
    except Pago.DoesNotExist:
        logger.error(f'Pago {pago_id} no encontrado')
        return False
    
    if pago.estado != Pago.Estado.CONFIRMADO:
        logger.warning(f'Pago {pago_id} no está confirmado')
        return False
    
    try:
        # Obtener facturas pendientes del cliente, ordenadas por antigüedad
        facturas_pendientes = Factura.objects.filter(
            cliente=pago.cliente,
            estado=Factura.Estado.PENDIENTE,
        ).order_by('fecha_vencimiento')
        
        monto_restante = pago.monto
        
        for factura in facturas_pendientes:
            if monto_restante <= 0:
                break
            
            monto_factura = factura.total
            monto_aplicado = min(monto_restante, monto_factura)
            
            # Crear relación pago-factura
            PagoFactura.objects.create(
                pago=pago,
                factura=factura,
                monto_aplicado=monto_aplicado,
            )
            
            monto_restante -= monto_aplicado
            
            # Si el pago cubre toda la factura, marcarla como pagada
            if monto_aplicado >= monto_factura:
                factura.estado = Factura.Estado.PAGADA
                factura.fecha_pago = timezone.now()
                factura.save(update_fields=['estado', 'fecha_pago', 'updated_at'])
                logger.info(f'Factura {factura.numero} marcada como pagada')
        
        # Actualizar saldo restante del pago
        pago.saldo_restante = monto_restante
        pago.save(update_fields=['saldo_restante', 'updated_at'])
        
        # Si el cliente no tiene facturas pendientes, reactivar servicio
        if not facturas_pendientes.exists():
            ejecutar_reactivacion.delay(str(pago.cliente.id))
        
        logger.info(f'Pago {pago_id} aplicado a facturas correctamente')
        return True
        
    except Exception as exc:
        logger.error(f'Error aplicando pago {pago_id}: {str(exc)}')
        raise self.retry(exc=exc, countdown=60)
