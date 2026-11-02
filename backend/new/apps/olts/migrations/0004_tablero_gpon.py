"""
Tablero GPON: olt_historial, onts_esperando, olt_escaneos y onus.autorizada_at.

Las cuatro cosas ya existen en el Postgres de producción (migraciones 38, 40 y
42 del esquema del dashboard). Un CreateModel/AddField común ahí falla con "ya existe", así
que el estado de Django se declara entero y la base sólo se toca para crear lo
que falta: en SQLite se crea todo, en producción no se crea nada.
"""

import django.db.models.deletion
import django.utils.timezone
import uuid
from django.db import migrations, models


MODELOS = ('OltEscaneo', 'OntEsperando', 'OltHistorial')


def crear_lo_que_falta(apps, schema_editor):
    conexion = schema_editor.connection
    with conexion.cursor() as cursor:
        tablas = set(conexion.introspection.table_names(cursor))

    for nombre in MODELOS:
        modelo = apps.get_model('olts', nombre)
        if modelo._meta.db_table not in tablas:
            schema_editor.create_model(modelo)

    ONU = apps.get_model('olts', 'ONU')
    with conexion.cursor() as cursor:
        columnas = {
            c.name for c in conexion.introspection.get_table_description(cursor, ONU._meta.db_table)
        }
    if 'autorizada_at' not in columnas:
        schema_editor.add_field(ONU, ONU._meta.get_field('autorizada_at'))


class Migration(migrations.Migration):

    dependencies = [
        ('olts', '0003_alter_olt_usuario'),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.CreateModel(
                    name='OltEscaneo',
                    fields=[
                        ('olt', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='escaneo', serialize=False, to='olts.olt')),
                        ('at', models.DateTimeField(default=django.utils.timezone.now)),
                        ('encontradas', models.IntegerField(default=0)),
                        ('descartadas', models.IntegerField(default=0)),
                        ('puertos', models.IntegerField(default=0)),
                        ('ms', models.IntegerField(blank=True, null=True)),
                        ('error', models.TextField(blank=True, null=True)),
                    ],
                    options={
                        'db_table': 'olt_escaneos',
                    },
                ),
                migrations.AddField(
                    model_name='onu',
                    name='autorizada_at',
                    field=models.DateField(blank=True, null=True),
                ),
                migrations.CreateModel(
                    name='OntEsperando',
                    fields=[
                        ('id', models.BigAutoField(primary_key=True, serialize=False)),
                        ('sn', models.CharField(max_length=50)),
                        ('slot', models.IntegerField(blank=True, null=True)),
                        ('puerto', models.IntegerField(blank=True, null=True)),
                        ('modelo', models.CharField(blank=True, max_length=60, null=True)),
                        ('detectada', models.DateTimeField(blank=True, null=True)),
                        ('visto_at', models.DateTimeField(default=django.utils.timezone.now)),
                        ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                        ('olt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='onts_esperando', to='olts.olt')),
                    ],
                    options={
                        'db_table': 'onts_esperando',
                        'ordering': ['detectada'],
                    },
                ),
                migrations.CreateModel(
                    name='OltHistorial',
                    fields=[
                        ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                        ('accion', models.CharField(default='editar', max_length=20)),
                        ('campo', models.CharField(blank=True, max_length=60, null=True)),
                        ('valor_antes', models.TextField(blank=True, null=True)),
                        ('valor_despues', models.TextField(blank=True, null=True)),
                        ('quien', models.TextField(blank=True, null=True)),
                        ('created_at', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                        ('olt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='historial', to='olts.olt')),
                    ],
                    options={
                        'db_table': 'olt_historial',
                        'ordering': ['-created_at'],
                        'indexes': [models.Index(fields=['olt', '-created_at'], name='olt_historial_olt_idx')],
                    },
                ),
                migrations.AddConstraint(
                    model_name='ontesperando',
                    constraint=models.UniqueConstraint(fields=('olt', 'sn'), name='onts_esperando_olt_sn_key'),
                ),
            ],
        ),
        # Al revertir no se borra nada: en producción las tablas no son de Django.
        migrations.RunPython(crear_lo_que_falta, migrations.RunPython.noop),
    ]
