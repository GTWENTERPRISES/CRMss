"""
Apaga las tareas de Celery Beat que duplicaban los automatismos del middleware.

Con el scheduler de base (django_celery_beat), las entradas del calendario de
config/celery.py quedan guardadas como PeriodicTask: sacarlas del calendario no
alcanza para que dejen de correr en una base donde Beat ya arrancó alguna vez.
"""
from django.db import migrations

TAREAS = (
    'apps.facturacion.tasks.generar_facturas_mensuales',
    'apps.facturacion.tasks.enviar_facturas_por_email',
    'apps.pagos.tasks.ejecutar_cortes_automaticos',
    'apps.pagos.tasks.enviar_recordatorios_pago',
    'apps.pagos.tasks.procesar_pagos_pendientes',
    'apps.nms.tasks.sondear_red',
    'apps.nms.tasks.generar_reporte_diario_red',
)


def apagar(apps, schema_editor):
    PeriodicTask = apps.get_model('django_celery_beat', 'PeriodicTask')
    PeriodicTask.objects.filter(task__in=TAREAS).update(enabled=False)


class Migration(migrations.Migration):
    dependencies = [
        ('core', '0012_alter_tecnico_options'),
        ('django_celery_beat', '0019_alter_periodictasks_options'),
    ]

    operations = [migrations.RunPython(apagar, migrations.RunPython.noop)]
