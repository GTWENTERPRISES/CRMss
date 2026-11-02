"""
Primer paso de pagos hacia las tablas del dashboard: se quitan los índices y
restricciones del modelo anterior y se renombran las columnas que tienen un
equivalente, para que la migración siguiente no las tome por "borrar y crear".
"""
from django.db import migrations


def _descifrar(valor):
    """Lo que el modelo anterior guardaba cifrado ('enc::...'), en claro."""
    if not valor or not str(valor).startswith('enc::'):
        return valor
    from cryptography.fernet import InvalidToken
    from apps.core.fields import get_fernet
    try:
        return get_fernet().decrypt(str(valor)[5:].encode()).decode()
    except (InvalidToken, ValueError):
        return None


def _filas(schema_editor, sql, params=()):
    with schema_editor.connection.cursor() as cursor:
        cursor.execute(sql, params)
        return cursor.fetchall()


def _ejecutar(schema_editor, sql, params=()):
    with schema_editor.connection.cursor() as cursor:
        cursor.execute(sql, params)


def convertir(apps, schema_editor):
    """El comprobante en claro y la fecha sin hora (fecha_pago es DATE)."""
    for pk, numero, fecha in _filas(schema_editor, 'SELECT id, n_transaccion, fecha_pago FROM pagos'):
        _ejecutar(schema_editor, 'UPDATE pagos SET n_transaccion = %s, fecha_pago = %s WHERE id = %s',
                  [_descifrar(numero) or None, str(fecha)[:10] if fecha else None, pk])


class Migration(migrations.Migration):

    dependencies = [
        ('pagos', '0002_alter_pago_banco_origen_alter_pago_cuenta_destino_and_more'),
    ]

    operations = [
        migrations.RemoveIndex(model_name='pago', name='pagos_cliente_aab17f_idx'),
        migrations.RemoveIndex(model_name='pago', name='pagos_fecha_t_6e02a8_idx'),
        migrations.RenameField(model_name='pago', old_name='cliente', new_name='client'),
        migrations.RenameField(model_name='pago', old_name='num_comprobante', new_name='n_transaccion'),
        migrations.RenameField(model_name='pago', old_name='fecha_transaccion', new_name='fecha_pago'),
            migrations.RunPython(convertir, migrations.RunPython.noop),
    ]
