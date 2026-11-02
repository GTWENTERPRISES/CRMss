"""
Primer paso de clientes hacia las tablas del dashboard: se quitan los índices y
restricciones del modelo anterior y se renombran las columnas que tienen un
equivalente, para que la migración siguiente no las tome por "borrar y crear".
"""
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0009_cliente_servicio_en_la_fila'),
    ]

    operations = [
        migrations.RenameField(model_name='contrato', old_name='cliente', new_name='client'),
        migrations.RenameField(model_name='contrato', old_name='fecha_vencimiento', new_name='fecha_fin'),
        migrations.RenameField(model_name='contrato', old_name='archivo_url', new_name='documento_url'),
    ]
