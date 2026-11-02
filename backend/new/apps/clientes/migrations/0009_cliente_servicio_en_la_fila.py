"""
Copia a la fila del cliente el plan y la ONU que estaban en `servicios`.

En el esquema del dashboard cada fila de `clientes` ES un servicio: la ONU, el
plan y la fecha de instalación van en la misma fila (`onu_id`, `plan_id`,
`fecha_instalacion`), y de ahí los leen las vistas (v_clientes_ficha,
v_onus_clientes, v_olt_resumen). Los datos cargados antes vivían en `servicios`
y las pantallas los mostraban vacíos.

Sólo completa lo que está vacío y toma el servicio activo más reciente; no pisa
nada que ya se haya cargado en la fila.
"""
from django.db import migrations


def copiar(apps, schema_editor):
    Cliente = apps.get_model('clientes', 'Cliente')
    Servicio = apps.get_model('clientes', 'Servicio')

    elegido = {}
    for s in Servicio.objects.order_by('cliente_id', 'fecha_alta'):
        actual = elegido.get(s.cliente_id)
        # El activo gana; entre iguales, el más reciente (el orden ya lo da).
        if actual is None or s.estado == 'activo' or actual.estado != 'activo':
            elegido[s.cliente_id] = s

    for cliente in Cliente.objects.filter(id__in=elegido.keys()):
        s = elegido[cliente.id]
        cambios = {}
        if cliente.onu_id is None and s.onu_id:
            cambios['onu_id'] = s.onu_id
        if cliente.plan_id is None and s.plan_id:
            cambios['plan_id'] = s.plan_id
        if cliente.fecha_instalacion is None and s.fecha_alta:
            cambios['fecha_instalacion'] = s.fecha_alta
        if cambios:
            Cliente.objects.filter(pk=cliente.pk).update(**cambios)


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0008_cliente_datos_en_claro'),
    ]

    operations = [
        migrations.RunPython(copiar, migrations.RunPython.noop),
    ]
