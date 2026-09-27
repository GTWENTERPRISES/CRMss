"""
Tareas asíncronas de Celery para el módulo NMS (Network Management System)
Maneja sondeo de red, monitoreo de dispositivos y generación de alertas
"""
import logging
import time
from datetime import timedelta

from celery import shared_task
from django.utils import timezone

logger = logging.getLogger(__name__)

# Umbrales de monitoreo
RX_POWER_MINIMA = -27.0
RX_POWER_CRITICA = -30.0
LATENCIA_WARNING = 500  # ms
LATENCIA_CRITICAL = 1000  # ms


@shared_task(bind=True, rate_limit='1/m')
def sondear_red(self):
    """
    Sondeo completo de red: OLTs y Routers MikroTik
    Se ejecuta cada 5 minutos mediante Celery Beat
    """
    from apps.mikrotik.models import RouterMikrotik
    from apps.olts.models import OLT

    logger.info('Iniciando sondeo completo de red')
    
    olts_ok = 0
    olts_fail = 0
    routers_ok = 0
    routers_fail = 0
    
    # Sondear OLTs
    for olt in OLT.objects.filter(activo=True):
        try:
            if sondear_olt.delay(str(olt.id)).get(timeout=30):
                olts_ok += 1
            else:
                olts_fail += 1
        except Exception as e:
            olts_fail += 1
            logger.error(f'Error en sondeo OLT {olt.nombre}: {str(e)}')
    
    # Sondear Routers
    for router in RouterMikrotik.objects.filter(activo=True):
        try:
            if sondear_router.delay(str(router.id)).get(timeout=30):
                routers_ok += 1
            else:
                routers_fail += 1
        except Exception as e:
            routers_fail += 1
            logger.error(f'Error en sondeo router {router.nombre}: {str(e)}')
    
    resultado = {
        'olts_ok': olts_ok,
        'olts_fail': olts_fail,
        'routers_ok': routers_ok,
        'routers_fail': routers_fail,
    }
    
    logger.info(f'Sondeo completado: {resultado}')
    return resultado


@shared_task(bind=True, max_retries=2)
def sondear_olt(self, olt_id):
    """
    Sondea un OLT específico y actualiza el estado de sus ONUs
    
    Args:
        olt_id: UUID del OLT
    """
    from apps.olts.models import OLT, ONU
    from apps.olts.drivers import get_driver
    from .models import AlertaRed, SondeoRed

    try:
        olt = OLT.objects.get(id=olt_id)
    except OLT.DoesNotExist:
        logger.error(f'OLT {olt_id} no encontrado')
        return False

    inicio = time.monotonic()
    onus_actualizadas = 0
    
    try:
        with get_driver(olt) as driver:
            # Obtener lista de ONUs del OLT
            onus_activas = driver.get_onus()
            
            for onu in ONU.objects.filter(olt=olt):
                try:
                    # Obtener información óptica
                    info_optica = driver.get_onu_optical_info(
                        onu.frame,
                        onu.slot,
                        onu.puerto,
                        onu.onu_index,
                    )
                    
                    if info_optica:
                        rx_power = info_optica.get('rx_power')
                        tx_power = info_optica.get('tx_power')
                        distancia = info_optica.get('distance')
                        
                        # Actualizar ONU
                        onu.rx_power_dbm = rx_power
                        onu.tx_power_dbm = tx_power
                        onu.distancia_m = distancia
                        onu.ultima_lectura = timezone.now()
                        onu.estado = ONU.Estado.ONLINE
                        onu.save(update_fields=[
                            'rx_power_dbm',
                            'tx_power_dbm',
                            'distancia_m',
                            'ultima_lectura',
                            'estado',
                            'updated_at'
                        ])
                        
                        onus_actualizadas += 1
                        
                        # Generar alertas si hay problemas
                        if rx_power:
                            if rx_power < RX_POWER_CRITICA:
                                AlertaRed.objects.create(
                                    tipo=AlertaRed.Tipo.POTENCIA_BAJA,
                                    severidad=AlertaRed.Severidad.CRITICAL,
                                    mensaje=f'ONU {onu.sn} con potencia crítica: {rx_power} dBm',
                                    onu=onu,
                                )
                            elif rx_power < RX_POWER_MINIMA:
                                AlertaRed.objects.create(
                                    tipo=AlertaRed.Tipo.POTENCIA_BAJA,
                                    severidad=AlertaRed.Severidad.WARNING,
                                    mensaje=f'ONU {onu.sn} con potencia baja: {rx_power} dBm',
                                    onu=onu,
                                )
                    else:
                        # ONU no responde
                        onu.estado = ONU.Estado.OFFLINE
                        onu.save(update_fields=['estado', 'updated_at'])
                        
                except Exception as e:
                    logger.error(f'Error sondeando ONU {onu.sn}: {str(e)}')
                    continue
        
        # Calcular latencia
        latencia = int((time.monotonic() - inicio) * 1000)
        
        # Actualizar estado del OLT
        olt.estado_ultimo_sondeo = OLT.EstadoSondeo.ONLINE
        olt.ultima_conexion = timezone.now()
        olt.save(update_fields=['estado_ultimo_sondeo', 'ultima_conexion', 'updated_at'])
        
        # Registrar sondeo exitoso
        SondeoRed.objects.create(
            olt=olt,
            estado=SondeoRed.Estado.OK,
            latencia_ms=latencia,
            detalle=f'{onus_actualizadas} ONUs actualizadas',
        )
        
        logger.info(f'OLT {olt.nombre} sondeado: {onus_actualizadas} ONUs, {latencia}ms')
        return True
        
    except Exception as exc:
        logger.error(f'Error sondeando OLT {olt.nombre}: {str(exc)}')
        
        # Actualizar estado del OLT
        olt.estado_ultimo_sondeo = OLT.EstadoSondeo.OFFLINE
        olt.save(update_fields=['estado_ultimo_sondeo', 'updated_at'])
        
        # Registrar sondeo fallido
        SondeoRed.objects.create(
            olt=olt,
            estado=SondeoRed.Estado.DOWN,
            detalle=str(exc),
        )
        
        # La alerta se asocia a la ONU cuando corresponde; AlertaRed no tiene
        # relación directa con OLT, por lo que el detalle queda en el sondeo.
        
        return False


@shared_task(bind=True, max_retries=2)
def sondear_router(self, router_id):
    """
    Sondea un router MikroTik específico
    
    Args:
        router_id: UUID del router
    """
    from apps.mikrotik.models import RouterMikrotik
    from apps.mikrotik.drivers import get_driver
    from .models import AlertaRed, SondeoRed

    try:
        router = RouterMikrotik.objects.get(id=router_id)
    except RouterMikrotik.DoesNotExist:
        logger.error(f'Router {router_id} no encontrado')
        return False

    inicio = time.monotonic()
    
    try:
        with get_driver(router) as driver:
            # Verificar conectividad
            identidad = driver.obtener_identidad()
            
            # Obtener recursos del router
            recursos = driver.obtener_recursos()
            
            if recursos:
                resource_info = recursos[0] if recursos else {}
                cpu_load = resource_info.get('cpu-load', 0)
                free_memory = resource_info.get('free-memory', 0)
                
                # Generar alertas si hay problemas de recursos
                if cpu_load and int(cpu_load.replace('%', '')) > 80:
                    AlertaRed.objects.create(
                        tipo=AlertaRed.Tipo.CPU_ALTA,
                        severidad=AlertaRed.Severidad.WARNING,
                        mensaje=f'Router {router.nombre} con CPU alta: {cpu_load}',
                        router=router,
                    )
        
        # Calcular latencia
        latencia = int((time.monotonic() - inicio) * 1000)
        
        # Registrar sondeo exitoso
        SondeoRed.objects.create(
            router=router,
            estado=SondeoRed.Estado.OK,
            latencia_ms=latencia,
        )
        
        # Verificar latencia
        if latencia > LATENCIA_CRITICAL:
            AlertaRed.objects.create(
                tipo=AlertaRed.Tipo.LATENCIA_ALTA,
                severidad=AlertaRed.Severidad.CRITICAL,
                mensaje=f'Router {router.nombre} con latencia crítica: {latencia}ms',
                router=router,
            )
        
        logger.info(f'Router {router.nombre} sondeado: {latencia}ms')
        return True
        
    except Exception as exc:
        logger.error(f'Error sondeando router {router.nombre}: {str(exc)}')
        
        # Registrar sondeo fallido
        SondeoRed.objects.create(
            router=router,
            estado=SondeoRed.Estado.DOWN,
            detalle=str(exc),
        )
        
        # Generar alerta crítica
        AlertaRed.objects.create(
            tipo=AlertaRed.Tipo.ROUTER_CAIDO,
            severidad=AlertaRed.Severidad.CRITICAL,
            mensaje=f'Router {router.nombre} no responde: {exc}',
            router=router,
        )
        
        return False


@shared_task(bind=True)
def limpiar_alertas_antiguas(self):
    """
    Limpia alertas resueltas que tienen más de 30 días
    Se ejecuta semanalmente
    """
    from .models import AlertaRed
    
    logger.info('Limpiando alertas antiguas')
    
    fecha_limite = timezone.now() - timedelta(days=30)
    
    alertas_eliminadas = AlertaRed.objects.filter(
        resuelta=True,
        created_at__lt=fecha_limite,
    ).delete()
    
    count = alertas_eliminadas[0] if alertas_eliminadas else 0
    logger.info(f'{count} alertas antiguas eliminadas')
    
    return count


@shared_task(bind=True)
def limpiar_sondeos_antiguos(self):
    """
    Limpia registros de sondeo que tienen más de 7 días
    Mantiene solo estadísticas recientes
    """
    from .models import SondeoRed
    
    logger.info('Limpiando sondeos antiguos')
    
    fecha_limite = timezone.now() - timedelta(days=7)
    
    sondeos_eliminados = SondeoRed.objects.filter(
        created_at__lt=fecha_limite,
    ).delete()
    
    count = sondeos_eliminados[0] if sondeos_eliminados else 0
    logger.info(f'{count} registros de sondeo antiguos eliminados')
    
    return count


@shared_task(bind=True)
def generar_reporte_diario_red(self):
    """
    Genera reporte diario del estado de la red
    Envía resumen por email a administradores
    """
    from apps.olts.models import OLT, ONU
    from apps.mikrotik.models import RouterMikrotik
    from .models import AlertaRed, SondeoRed
    from django.core.mail import send_mail
    from django.conf import settings
    
    logger.info('Generando reporte diario de red')
    
    # Estadísticas del día
    hoy = timezone.now().date()
    
    # OLTs
    olts_total = OLT.objects.filter(activo=True).count()
    olts_online = OLT.objects.filter(
        activo=True,
        estado_ultimo_sondeo=OLT.EstadoSondeo.ONLINE,
    ).count()
    
    # ONUs
    onus_total = ONU.objects.filter(activo=True).count()
    onus_online = ONU.objects.filter(
        activo=True,
        estado=ONU.Estado.ONLINE,
    ).count()
    onus_offline = ONU.objects.filter(
        activo=True,
        estado=ONU.Estado.OFFLINE,
    ).count()
    
    # Routers
    routers_total = RouterMikrotik.objects.filter(activo=True).count()
    
    # Alertas
    alertas_criticas = AlertaRed.objects.filter(
        severidad=AlertaRed.Severidad.CRITICAL,
        resuelta=False,
    ).count()
    alertas_warning = AlertaRed.objects.filter(
        severidad=AlertaRed.Severidad.WARNING,
        resuelta=False,
    ).count()
    
    # Construir mensaje
    mensaje = f"""
    Reporte Diario de Red - {hoy}
    
    === OLTS ===
    Total: {olts_total}
    Online: {olts_online}
    Offline: {olts_total - olts_online}
    
    === ONUs ===
    Total: {onus_total}
    Online: {onus_online}
    Offline: {onus_offline}
    
    === Routers MikroTik ===
    Total: {routers_total}
    
    === Alertas ===
    Críticas: {alertas_criticas}
    Advertencias: {alertas_warning}
    
    Reporte generado automáticamente
    """
    
    # Enviar email a administradores
    admin_emails = getattr(settings, 'ADMIN_EMAILS', [])
    
    if admin_emails:
        try:
            send_mail(
                subject=f'Reporte Diario de Red - {hoy}',
                message=mensaje,
                from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', None),
                recipient_list=admin_emails,
                fail_silently=False,
            )
            logger.info('Reporte diario enviado por email')
        except Exception as e:
            logger.error(f'Error enviando reporte por email: {str(e)}')
    
    return {
        'olts_online': olts_online,
        'onus_online': onus_online,
        'alertas_criticas': alertas_criticas,
    }
