"""
Quita las vistas SQL "de relleno" que quedaron en la base SQLite de desarrollo.

Se habían creado a mano (no están en ninguna migración) para que el dashboard no
diera 404, y hacen más daño que bien:

- devuelven datos inventados fijos (`ip = '192.168.1.1'`, `plan_nombre =
  'Plan Base'`, `ont_rx = -20.5`) o directamente nada (`WHERE 1=0`);
- el dispatcher de vistas prefiere la vista de la base a la emulación por ORM,
  así que estas tapaban las emulaciones que sí calculan con datos reales;
- `v_clientes_ficha` nombra columnas de `clientes` y SQLite no deja reconstruir
  la tabla mientras la vista exista.

Sólo se tocan en SQLite: en Postgres las vistas v_* son las de verdad.
"""
from django.db import migrations

VISTAS = (
    'v_clientes_ficha', 'v_instalaciones', 'v_jornadas', 'v_expedientes',
    'v_estado_red', 'v_cobros_por_gestionar', 'v_prospectos',
)


def quitar(apps, schema_editor):
    if schema_editor.connection.vendor != 'sqlite':
        return
    for vista in VISTAS:
        schema_editor.execute(f'DROP VIEW IF EXISTS "{vista}"')


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_tecnico'),
    ]

    operations = [
        migrations.RunPython(quitar, migrations.RunPython.noop),
    ]
