"""
Técnicos y auditoría: el usuario pasa de clave foránea a `user_id` / `actor_id` (texto).
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
    """El usuario de Django del técnico y del registro de auditoría, como texto."""
    _ejecutar(schema_editor, 'UPDATE tecnicos SET user_id = CAST(usuario_id AS TEXT) WHERE usuario_id IS NOT NULL')
    _ejecutar(schema_editor, 'UPDATE audit_logs SET actor_id = CAST(usuario_id AS TEXT) WHERE usuario_id IS NOT NULL')


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_remove_auditlog_usuario_remove_tecnico_updated_at_and_more'),
    ]

    operations = [
        migrations.RunPython(copiar, migrations.RunPython.noop),
        migrations.RemoveField(
            model_name='auditlog',
            name='usuario',
        ),
        migrations.RemoveField(
            model_name='tecnico',
            name='usuario',
        ),
    ]
