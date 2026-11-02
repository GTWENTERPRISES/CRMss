"""
Primer paso de soporte hacia las tablas del dashboard: se quitan los índices y
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


ESTADOS = {'en_proceso': 'en_curso', 'completada': 'hecha'}


def convertir(apps, schema_editor):
    """Datos del prospecto en claro, estados y franja del dashboard."""
    filas = _filas(schema_editor, 'SELECT id, identificacion, telefono, direccion, franja, estado FROM instalaciones')
    for pk, ident, tel, direccion, franja, estado in filas:
        f = (franja or '').lower()
        franja = 'manana' if f.startswith(('ma', '08', '09', '10', '11')) else (
            'tarde' if f.startswith(('ta', '12', '13', '14', '15', '16', '17')) else None)
        _ejecutar(schema_editor,
                  'UPDATE instalaciones SET identificacion = %s, telefono = %s, direccion = %s, '
                  'franja = %s, estado = %s WHERE id = %s',
                  [_descifrar(ident), _descifrar(tel), (_descifrar(direccion) or '')[:300] or None,
                   franja, ESTADOS.get(estado, estado), pk])


class Migration(migrations.Migration):

    dependencies = [
        ('soporte', '0006_tickets_esquema_del_dashboard'),
    ]

    operations = [
        migrations.RemoveIndex(model_name='ticket', name='tickets_estado_prioridad_idx'),
        migrations.RemoveIndex(model_name='ticket', name='tickets_client_estado_idx'),
        migrations.RemoveIndex(model_name='instalacion', name='instalacion_estado_600db0_idx'),
        migrations.RemoveIndex(model_name='instalacion', name='instalacion_prospec_490679_idx'),
        migrations.RenameField(model_name='instalacion', old_name='prospecto_nombre', new_name='nombre'),
        migrations.RenameField(model_name='instalacion', old_name='prospecto_cedula', new_name='identificacion'),
        migrations.RenameField(model_name='instalacion', old_name='prospecto_telefono', new_name='telefono'),
        migrations.RenameField(model_name='instalacion', old_name='coordenadas_lat', new_name='latitud'),
        migrations.RenameField(model_name='instalacion', old_name='coordenadas_lng', new_name='longitud'),
        migrations.RenameField(model_name='instalacion', old_name='fecha_programada', new_name='fecha'),
        migrations.RenameField(model_name='instalacion', old_name='franja_horaria', new_name='franja'),
        migrations.RenameField(model_name='instalacion', old_name='cliente_creado', new_name='client'),
        migrations.RenameField(model_name='instalacion', old_name='fecha_completada', new_name='alta_at'),
            migrations.RunPython(convertir, migrations.RunPython.noop),
    ]
