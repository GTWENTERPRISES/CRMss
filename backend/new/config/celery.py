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


# Configuración de tareas periódicas con Celery Beat
app.conf.beat_schedule = {
    # Facturación mensual - 1º de cada mes a las 2:00 AM
    'generar-facturas-mensuales': {
        'task': 'apps.facturacion.tasks.generar_facturas_mensuales',
        'schedule': crontab(day_of_month='1', hour=2, minute=0),
        'options': {'queue': 'facturacion'},
    },
    
    # Envío de facturas por email - Diario a las 6:00 AM
    'enviar-facturas-email': {
        'task': 'apps.facturacion.tasks.enviar_facturas_por_email',
        'schedule': crontab(hour=6, minute=0),
        'options': {'queue': 'facturacion'},
    },
    
    # Cortes automáticos por mora - Diario a las 8:00 PM (20:00)
    'ejecutar-cortes-automaticos': {
        'task': 'apps.pagos.tasks.ejecutar_cortes_automaticos',
        'schedule': crontab(hour=20, minute=0),
        'options': {'queue': 'pagos'},
    },
    
    # Recordatorios de pago - Diario a las 10:00 AM
    'enviar-recordatorios-pago': {
        'task': 'apps.pagos.tasks.enviar_recordatorios_pago',
        'schedule': crontab(hour=10, minute=0),
        'options': {'queue': 'pagos'},
    },
    
    # Procesar pagos pendientes - Cada 30 minutos
    'procesar-pagos-pendientes': {
        'task': 'apps.pagos.tasks.procesar_pagos_pendientes',
        'schedule': crontab(minute='*/30'),
        'options': {'queue': 'pagos'},
    },
    
    # Sondeo de red completo - Cada 5 minutos
    'sondear-red': {
        'task': 'apps.nms.tasks.sondear_red',
        'schedule': crontab(minute='*/5'),
        'options': {'queue': 'nms'},
    },
    
    # Reporte diario de red - Diario a las 7:00 AM
    'reporte-diario-red': {
        'task': 'apps.nms.tasks.generar_reporte_diario_red',
        'schedule': crontab(hour=7, minute=0),
        'options': {'queue': 'nms'},
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
