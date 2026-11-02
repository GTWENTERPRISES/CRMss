"""

Configuración de Celery para el sistema CRM ISP
Maneja tareas asíncronas: facturación, cortes, sondeo de red
"""
import os

from celery import Celery
from celery.schedules import crontab

# Configurar Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

# Crear instancia de Celery
app = Celery('crm_isp')

# Cargar configuración desde Django settings con namespace 'CELERY'
app.config_from_object('django.conf:settings', namespace='CELERY')

# Auto-descubrir tareas en cada app Django
app.autodiscover_tasks()


# Tareas periódicas con Celery Beat.
#
# Las tareas que tocan la plata, la red o los mensajes al abonado —facturación
# mensual, cortes por mora, recordatorios de pago, sondeo de OLTs y routers—
# las corre el middleware, con su interruptor en Ajustes → Tareas programadas
# (tabla config_tareas). Antes también estaban acá, con otra lógica: con Celery
# Beat levantado (docker-compose) el día 1 se facturaba dos veces y los cortes
# iban directo al MikroTik sin pasar por el middleware.
#
# Acá queda lo propio de Django: el respaldo nocturno y la limpieza de sus tablas. Las tareas de
# apps/*/tasks.py siguen disponibles para correrlas a mano.
TAREAS_DEL_MIDDLEWARE = (
    'apps.facturacion.tasks.generar_facturas_mensuales',
    'apps.facturacion.tasks.enviar_facturas_por_email',
    'apps.pagos.tasks.ejecutar_cortes_automaticos',
    'apps.pagos.tasks.enviar_recordatorios_pago',
    'apps.pagos.tasks.procesar_pagos_pendientes',
    'apps.nms.tasks.sondear_red',
    'apps.nms.tasks.generar_reporte_diario_red',
)

app.conf.beat_schedule = {
    # Respaldo de la base y los archivos, con prueba de restauración - Diario.
    # Hora en RESPALDOS_HORA (por defecto 03:15, cuando no hay nadie cobrando).
    'respaldar-base': {
        'task': 'apps.core.tasks.respaldar_base',
        'schedule': crontab(hour=int(os.getenv('RESPALDOS_HORA', '3:15').split(':')[0]),
                            minute=int(os.getenv('RESPALDOS_HORA', '3:15').split(':')[1])),
        'options': {'queue': 'celery'},
    },
    # Limpieza de alertas antiguas - Semanal, domingos a las 3:00 AM
    'limpiar-alertas-antiguas': {
        'task': 'apps.nms.tasks.limpiar_alertas_antiguas',
        'schedule': crontab(day_of_week='sunday', hour=3, minute=0),
        'options': {'queue': 'nms'},
    },
    # Limpieza de sondeos antiguos - Diario a las 4:00 AM
    'limpiar-sondeos-antiguos': {
        'task': 'apps.nms.tasks.limpiar_sondeos_antiguos',
        'schedule': crontab(hour=4, minute=0),
        'options': {'queue': 'nms'},
    },
}


# Configuración de ruteo de tareas por cola
app.conf.task_routes = {
    'apps.facturacion.tasks.*': {'queue': 'facturacion'},
    'apps.pagos.tasks.*': {'queue': 'pagos'},
    'apps.nms.tasks.*': {'queue': 'nms'},
    'apps.whatsapp.tasks.*': {'queue': 'whatsapp'},
}


# Opciones adicionales de Celery
app.conf.update(
    # Zona horaria
    timezone='America/Guayaquil',
    enable_utc=True,
    
    # Límites de tiempo
    task_soft_time_limit=300,  # 5 minutos límite soft
    task_time_limit=600,  # 10 minutos límite hard
    
    # Resultados
    result_expires=3600,  # 1 hora
    
    # Serialización
    task_serializer='json',
    accept_content=['json'],
    result_serializer='json',
    
    # Workers
    worker_prefetch_multiplier=4,
    worker_max_tasks_per_child=1000,
    
    # Optimizaciones
    task_compression='gzip',
    result_compression='gzip',
    
    # Reintentos
    task_acks_late=True,
    task_reject_on_worker_lost=True,
)


@app.task(bind=True, ignore_result=True)
def debug_task(self):
    """Tarea de debug para verificar configuración"""
    print(f'Request: {self.request!r}')
