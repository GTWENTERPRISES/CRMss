"""
Los timestamps que entraron con formato ISO del navegador ('2026-10-17T00:34:00.000Z')
pasan al de Django ('2026-10-17 00:34:00.000000', UTC).

Las vistas comparan esas columnas como texto, y la 'T' ordena después del
espacio: "vencido" o "de hoy" daban al revés dentro del mismo día. La API ya
los guarda bien (views_generic.momento_sql); esto arregla lo que entró antes.
"""
from django.db import migrations, models


def normalizar(apps, schema_editor):
    if schema_editor.connection.vendor != 'sqlite':
        return
    from apps.core.views_generic import fecha_sql, momento_sql

    tablas = set(schema_editor.connection.introspection.table_names())
    with schema_editor.connection.cursor() as cursor:
        for modelo in apps.get_models():
            tabla = modelo._meta.db_table
            if tabla not in tablas or modelo._meta.proxy:
                continue
            for campo in modelo._meta.concrete_fields:
                if isinstance(campo, models.DateTimeField):
                    arreglar = momento_sql
                elif isinstance(campo, models.DateField):
                    arreglar = fecha_sql
                else:
                    continue
                col = campo.column
                # CAST: con la columna declarada como fecha, el cursor de Django
                # la devuelve convertida y no el texto que hay que arreglar.
                cursor.execute(
                    f'SELECT rowid, CAST("{col}" AS TEXT) FROM "{tabla}" '
                    f'WHERE CAST("{col}" AS TEXT) LIKE %s OR CAST("{col}" AS TEXT) LIKE %s',
                    ['%T%', '%+__:__'],
                )
                for rowid, valor in cursor.fetchall():
                    nuevo = arreglar(valor)
                    if nuevo != valor:
                        cursor.execute(f'UPDATE "{tabla}" SET "{col}" = %s WHERE rowid = %s', [nuevo, rowid])


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_semillas'),
        ('core', '0007_codigos_de_recuperacion'),
    ]

    operations = [
        migrations.RunPython(normalizar, migrations.RunPython.noop),
    ]
