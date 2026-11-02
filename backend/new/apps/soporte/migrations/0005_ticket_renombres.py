"""
Primer paso de `tickets` hacia el esquema del dashboard: renombres y valores.

    cliente         → client        (columna client_id, como en el dashboard)
    descripcion_bot → descripcion
    fecha_cierre    → cerrado_at

y los valores al formato del dashboard, ANTES de que la migración siguiente
cambie `numero` a entero: SQLite copiaría 'TK-0001' como texto en una columna
numérica sin quejarse.
"""
import re

from django.db import migrations

ESTADOS = {'ABIERTO': 'abierto', 'EN_PROCESO': 'en_proceso', 'RESUELTO': 'resuelto', 'CERRADO': 'resuelto'}
PRIORIDADES = {'BAJA': 'baja', 'MEDIA': 'media', 'ALTA': 'alta', 'CRITICA': 'alta'}
TIPOS = {
    'SIN_SERVICIO_LUZ_ROJA': 'fibra_cortada', 'SIN_SERVICIO': 'sin_internet',
    'LENTITUD': 'lentitud', 'WIFI': 'otro', 'FACTURACION': 'otro', 'OTRO': 'otro',
}


def convertir(apps, schema_editor):
    Ticket = apps.get_model('soporte', 'Ticket')
    for campo, tabla in (('estado', ESTADOS), ('prioridad', PRIORIDADES), ('tipo_incidencia', TIPOS)):
        for viejo, nuevo in tabla.items():
            Ticket.objects.filter(**{campo: viejo}).update(**{campo: nuevo})

    # 'TK-0007' y 'TK-2025-0007' → '7' (el número es el último tramo; el año
    # no). Los que no tienen número se numeran después del mayor.
    usados = set()
    sin_numero = []
    for t in Ticket.objects.order_by('created_at').only('id', 'numero'):
        final = re.search(r'(\d+)\D*$', t.numero or '')
        n = int(final.group(1)) if final else None
        if n is None or n in usados:
            sin_numero.append(t.id)
            continue
        usados.add(n)
        Ticket.objects.filter(pk=t.pk).update(numero=str(n))
    siguiente = max(usados, default=0)
    for pk in sin_numero:
        siguiente += 1
        Ticket.objects.filter(pk=pk).update(numero=str(siguiente))


class Migration(migrations.Migration):

    dependencies = [
        ('soporte', '0004_instalacion_prospecto_cedula_hash_and_more'),
        ('clientes', '0009_cliente_servicio_en_la_fila'),
    ]

    operations = [
        migrations.RemoveIndex(model_name='ticket', name='tickets_estado_38575d_idx'),
        migrations.RemoveIndex(model_name='ticket', name='tickets_cliente_81bc94_idx'),
        migrations.RenameField(model_name='ticket', old_name='cliente', new_name='client'),
        migrations.RenameField(model_name='ticket', old_name='descripcion_bot', new_name='descripcion'),
        migrations.RenameField(model_name='ticket', old_name='fecha_cierre', new_name='cerrado_at'),
        migrations.RunPython(convertir, migrations.RunPython.noop),
    ]
