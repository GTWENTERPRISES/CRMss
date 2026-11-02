"""
Cifra lo que ya estaba en claro en la auditoría (antes, después, descripción:
las fotos de cada cambio llevan los datos personales de la fila) y en el
detalle de las notificaciones. Mismo criterio que 0009.
"""
from django.db import migrations


def cifrar_existentes(apps, schema_editor):
    from apps.core.cifrado import cifrar_lo_que_esta_en_claro

    with schema_editor.connection.cursor() as cursor:
        cifrar_lo_que_esta_en_claro(cursor, apps)


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_alter_auditlog_antes_alter_auditlog_descripcion_and_more'),
        ('dashboard', '0006_alter_notificaciones_detalle'),
    ]

    operations = [migrations.RunPython(cifrar_existentes, migrations.RunPython.noop)]
