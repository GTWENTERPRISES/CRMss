"""
Numera las filas que ya existían en las columnas seriales nuevas.

`olts.numero`, `pagos.numero`, `clientes.codigo`... los asigna TablaDashboard
al insertar, pero las filas cargadas antes de pasar al esquema del dashboard
quedaron en NULL, y las pantallas ordenan y muestran por ese número.
"""
from django.apps import apps as apps_reales
from django.db import migrations


def numerar(apps, schema_editor):
    from apps.dashboard.base import TablaDashboard

    for real in apps_reales.get_models():
        if not issubclass(real, TablaDashboard) or not real.SERIALES:
            continue
        try:
            modelo = apps.get_model(real._meta.app_label, real._meta.model_name)
        except LookupError:
            continue  # una tabla que se crea en una migración posterior: todavía no tiene filas

        campos = {f.name for f in modelo._meta.concrete_fields}
        orden = ['created_at'] if 'created_at' in campos else []
        for columna in real.SERIALES:
            if columna not in campos:
                continue
            existentes = [v for v in modelo.objects.exclude(**{columna: None}).values_list(columna, flat=True)]
            siguiente = max(existentes + [real.SERIALES_DESDE.get(columna, 1) - 1])
            for pk in modelo.objects.filter(**{columna: None}).order_by(*orden, 'pk').values_list('pk', flat=True):
                siguiente += 1
                modelo.objects.filter(pk=pk).update(**{columna: siguiente})


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
        ('clientes', '0012_cliente_conectado_a_cliente_motivo_baja_cliente_nap_and_more'),
        ('facturacion', '0005_facturas_copiar_anuladas'),
        ('pagos', '0005_pagos_copiar_aplicaciones'),
        ('olts', '0006_alter_lineprofile_options_alter_onu_options_and_more'),
        ('mikrotik', '0004_alter_firewallbloqueo_options_and_more'),
        ('soporte', '0009_instalaciones_copiar_tecnico_y_numero'),
        ('core', '0006_usuarios_como_texto'),
    ]

    operations = [
        migrations.RunPython(numerar, migrations.RunPython.noop),
    ]
