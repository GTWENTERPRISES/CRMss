"""
Cifra lo que ya estaba guardado en claro en las columnas que pasaron a ser
EncryptedCharField / EncryptedTextField (datos personales: nombres, cédulas,
teléfonos, correos, direcciones, firmantes, mensajes enviados).

Va por SQL directo y salta lo que ya empieza con 'enc::', así que se puede
correr de nuevo sin cifrar dos veces. Los disparadores del dashboard no corren:
pre_migrate los quita y post_migrate los vuelve a crear (apps/dashboard/apps.py).

Hacia atrás no hace nada: los campos leen igual lo cifrado, y descifrar en masa
la base no es algo que deba poder pasar por un rollback.
"""
from django.db import migrations


def cifrar_existentes(apps, schema_editor):
    from apps.core.cifrado import cifrar_lo_que_esta_en_claro

    with schema_editor.connection.cursor() as cursor:
        cifrar_lo_que_esta_en_claro(cursor, apps)


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_alter_tecnico_email_alter_tecnico_identificacion_and_more'),
        ('clientes', '0014_alter_cliente_clave_ppp_alter_cliente_identificacion_and_more'),
        ('dashboard', '0005_alter_apillamadas_identificacion_and_more'),
        ('facturacion', '0007_alter_factura_cliente_nombre'),
        ('pagos', '0007_alter_pago_cliente_nombre'),
        ('soporte', '0010_alter_instalacion_clave_ppp_and_more'),
        ('olts', '0007_alter_onu_direccion'),
    ]

    operations = [migrations.RunPython(cifrar_existentes, migrations.RunPython.noop)]
