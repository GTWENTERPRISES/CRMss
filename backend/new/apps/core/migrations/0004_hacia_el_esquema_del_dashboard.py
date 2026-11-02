"""
Primer paso de core hacia las tablas del dashboard: se quitan los índices y
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
    """Las especialidades del modelo anterior no existen en el dashboard: 'ambas'."""
    _ejecutar(schema_editor, "UPDATE tecnicos SET especialidad = 'ambas' "
                             "WHERE especialidad NOT IN ('ftth', 'wireless', 'ambas')")


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_quitar_vistas_de_relleno'),
    ]

    operations = [
        migrations.RemoveIndex(model_name='auditlog', name='audit_logs_entidad_115c26_idx'),
        migrations.RenameField(model_name='tecnico', old_name='cedula', new_name='identificacion'),
        migrations.RenameField(model_name='auditlog', old_name='detalle', new_name='descripcion'),
            migrations.RunPython(convertir, migrations.RunPython.noop),
    ]
