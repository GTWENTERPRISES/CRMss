"""
Primer paso de olts hacia las tablas del dashboard: se quitan los índices y
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
    """El estado del sondeo con los valores del dashboard ('error' no existe allá)."""
    _ejecutar(schema_editor, "UPDATE olts SET estado = 'offline' WHERE estado = 'error'")


class Migration(migrations.Migration):

    dependencies = [
        ('olts', '0004_tablero_gpon'),
    ]

    operations = [
        migrations.RemoveConstraint(model_name='olt', name='uniq_olt_host_puerto'),
        migrations.RemoveConstraint(model_name='tipoont', name='uniq_tipoont_marca_modelo'),
        migrations.RemoveConstraint(model_name='lineprofile', name='uniq_lineprofile_olt_nombre'),
        migrations.RemoveIndex(model_name='onu', name='onus_olt_id_8b2ef2_idx'),
        migrations.RemoveIndex(model_name='onu', name='onus_sn_b8c10a_idx'),
        migrations.RemoveConstraint(model_name='onu', name='uniq_onu_olt_sn'),
        migrations.RemoveConstraint(model_name='onu', name='uniq_onu_posicion_fisica'),
        migrations.RenameField(model_name='olt', old_name='estado_ultimo_sondeo', new_name='estado'),
        migrations.RenameField(model_name='olt', old_name='ultima_conexion', new_name='estado_at'),
            migrations.RunPython(convertir, migrations.RunPython.noop),
    ]
