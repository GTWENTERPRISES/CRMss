"""
Datos de referencia que cargaban las migraciones del esquema del dashboard.

Configuraciones de una sola fila (config_corte, config_avisos_pago...), las
plantillas de mensajes del sistema, cuentas de cobro iniciales, motivos de
baja, reglas de alertas, el esquema de comisiones de partida, etc.

Cada INSERT se aplica sólo si su tabla está vacía: es el caso de una
instalación nueva, y en una base con datos no se duplica ni se pisa nada. Se
ejecutan con el intérprete (traducción a SQLite y DEFAULT de cada columna).
"""
import logging
import re

from django.db import migrations

logger = logging.getLogger(__name__)




def sembrar(apps, schema_editor):
    if schema_editor.connection.vendor != 'sqlite':
        return
    from apps.dashboard.semillas import cargar
    cargar(schema_editor.connection)


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_numerar_filas_existentes'),
    ]

    operations = [
        migrations.RunPython(sembrar, migrations.RunPython.noop),
    ]
