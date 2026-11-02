"""
Facturas: el estado `anulada` pasa a la columna `anulada`.
"""
from django.db import migrations


def _filas(schema_editor, sql, params=()):
    with schema_editor.connection.cursor() as cursor:
        cursor.execute(sql, params)
        return cursor.fetchall()


def _ejecutar(schema_editor, sql, params=()):
    with schema_editor.connection.cursor() as cursor:
        cursor.execute(sql, params)


def copiar(apps, schema_editor):
    """La factura anulada lo dice con `anulada` (el estado ahora lo calcula v_facturas)."""
    _ejecutar(schema_editor, "UPDATE facturas SET anulada = 1 WHERE estado = 'anulada'")


class Migration(migrations.Migration):

    dependencies = [
        ('facturacion', '0004_alter_factura_options_remove_factura_clave_acceso_and_more'),
    ]

    operations = [
        migrations.RunPython(copiar, migrations.RunPython.noop),
        migrations.RemoveField(
            model_name='factura',
            name='estado',
        ),
    ]
