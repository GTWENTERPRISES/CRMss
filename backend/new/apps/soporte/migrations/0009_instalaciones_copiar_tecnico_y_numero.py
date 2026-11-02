"""
Instalaciones: técnico asignado y número de orden a las columnas del dashboard.
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
    """
    - el técnico: el usuario asignado pasa a `tecnico_id` si tiene ficha de técnico;
    - el número: 'INS-0012' → 12; las que no tienen, desde 1000 (la secuencia del dashboard).
    """
    import re
    tecnico_de = dict(_filas(schema_editor, 'SELECT user_id, id FROM tecnicos WHERE user_id IS NOT NULL'))
    usados, sin = set(), []
    for pk, usuario, orden in _filas(schema_editor,
            'SELECT id, tecnico_asignado_id, orden_id FROM instalaciones ORDER BY created_at'):
        if usuario is not None and str(usuario) in tecnico_de:
            _ejecutar(schema_editor, 'UPDATE instalaciones SET tecnico_id = %s WHERE id = %s',
                      [tecnico_de[str(usuario)], pk])
        final = re.search(r'(\d+)\D*$', orden or '')
        n = int(final.group(1)) if final else None
        if n is None or n in usados:
            sin.append(pk)
        else:
            usados.add(n)
            _ejecutar(schema_editor, 'UPDATE instalaciones SET numero = %s WHERE id = %s', [n, pk])
    siguiente = max(max(usados, default=0), 999)
    for pk in sin:
        siguiente += 1
        _ejecutar(schema_editor, 'UPDATE instalaciones SET numero = %s WHERE id = %s', [siguiente, pk])


class Migration(migrations.Migration):

    dependencies = [
        ('soporte', '0008_alter_instalacion_options_and_more'),
    ]

    operations = [
        migrations.RunPython(copiar, migrations.RunPython.noop),
        migrations.RemoveField(
            model_name='instalacion',
            name='orden_id',
        ),
        migrations.RemoveField(
            model_name='instalacion',
            name='tecnico_asignado',
        ),
    ]
