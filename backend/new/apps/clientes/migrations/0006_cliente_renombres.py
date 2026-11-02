"""
Primer paso hacia el esquema del dashboard: renombres sin perder datos.

    cedula          → identificacion
    estado_servicio → estado

Va separado de la migración que agrega las demás columnas para que Django no
interprete los renombres como "borrar una columna y crear otra".
"""
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0005_cliente_cedula_hash_cliente_telefono_hash'),
    ]

    operations = [
        # Los índices viejos nombran las columnas por su nombre anterior.
        migrations.RemoveIndex(model_name='cliente', name='clientes_estado__0c8d5b_idx'),
        migrations.RemoveIndex(model_name='cliente', name='clientes_telefon_4a8762_idx'),
        migrations.RenameField(model_name='cliente', old_name='cedula', new_name='identificacion'),
        migrations.RenameField(model_name='cliente', old_name='estado_servicio', new_name='estado'),
    ]
