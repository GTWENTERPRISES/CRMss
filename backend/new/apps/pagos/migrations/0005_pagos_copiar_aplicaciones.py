"""
Pagos: la aplicación a facturas pasa a `pagos.factura_id` antes de borrar pago_factura.
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
    """Cada pago apunta a su factura (la primera a la que se aplicó) y los rechazados quedan anulados."""
    for pago_id, factura_id in _filas(schema_editor,
            'SELECT pago_id, factura_id FROM pago_factura ORDER BY created_at DESC'):
        _ejecutar(schema_editor, 'UPDATE pagos SET factura_id = %s WHERE id = %s', [factura_id, pago_id])
    _ejecutar(schema_editor, "UPDATE pagos SET anulado = 1 WHERE estado = 'rechazado'")
    _ejecutar(schema_editor, "UPDATE pagos SET es_excedente = 0, es_reparto = 0, comision = 0 WHERE comision IS NULL")


class Migration(migrations.Migration):

    dependencies = [
        ('pagos', '0004_remove_pagofactura_factura_remove_pagofactura_pago_and_more'),
    ]

    operations = [
        migrations.RunPython(copiar, migrations.RunPython.noop),
        migrations.RemoveField(
            model_name='pago',
            name='facturas',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='acreditado',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='banco_origen',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='cuenta_destino',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='estado',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='hash_qr',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='origen',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='referencia',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='saldo_restante',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='verificado_por',
        ),
        migrations.DeleteModel(
            name='PagoFactura',
        ),    ]
