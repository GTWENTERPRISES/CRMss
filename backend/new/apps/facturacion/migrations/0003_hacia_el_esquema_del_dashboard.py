"""
Primer paso de facturacion hacia las tablas del dashboard: se quitan los índices y
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
    """'001-001-000000123' → 123 (el número del dashboard es un serial) y el mes, concepto."""
    import re
    usados, sin = set(), []
    for pk, numero, concepto in _filas(schema_editor, 'SELECT id, numero, concepto FROM facturas ORDER BY created_at'):
        final = re.search(r'(\d+)\D*$', numero or '')
        n = int(final.group(1)) if final else None
        if n is None or n in usados:
            sin.append(pk)
        else:
            usados.add(n)
            _ejecutar(schema_editor, 'UPDATE facturas SET numero = %s WHERE id = %s', [str(n), pk])
        if concepto and not str(concepto).lower().startswith('servicio'):
            _ejecutar(schema_editor, 'UPDATE facturas SET concepto = %s WHERE id = %s',
                      [f'Servicio de internet - {concepto}', pk])
    siguiente = max(usados, default=0)
    for pk in sin:
        siguiente += 1
        _ejecutar(schema_editor, 'UPDATE facturas SET numero = %s WHERE id = %s', [str(siguiente), pk])


class Migration(migrations.Migration):

    dependencies = [
        ('facturacion', '0002_alter_factura_clave_acceso'),
    ]

    operations = [
        migrations.RemoveIndex(model_name='factura', name='facturas_cliente_83b2cf_idx'),
        migrations.RemoveIndex(model_name='factura', name='facturas_fecha_v_1f52e0_idx'),
        migrations.RenameField(model_name='factura', old_name='cliente', new_name='client'),
        migrations.RenameField(model_name='factura', old_name='fecha', new_name='fecha_emision'),
        migrations.RenameField(model_name='factura', old_name='iva', new_name='impuesto'),
        migrations.RenameField(model_name='factura', old_name='mes', new_name='concepto'),
            migrations.RunPython(convertir, migrations.RunPython.noop),
    ]
