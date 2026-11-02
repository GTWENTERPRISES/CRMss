"""
Datos de los clientes que ya existían, al formato del esquema nuevo.

- `identificacion` y `telefono` dejaron de estar cifrados (son claves de
  búsqueda): se descifra lo que quedó con el prefijo `enc::`.
- `estado` pasa de los valores viejos a los del dashboard.
"""
from django.db import migrations

ESTADOS = {
    'ACTIVO': 'activo',
    'SUSPENDIDO_POR_CORTE': 'cortado',
    'SUSPENDIDO': 'suspendido',
    'DADO_DE_BAJA': 'baja',
}
PREFIJO = 'enc::'


def _en_claro(valor):
    from cryptography.fernet import InvalidToken
    from apps.core.fields import get_fernet

    if not valor or not valor.startswith(PREFIJO):
        return valor
    try:
        return get_fernet().decrypt(valor[len(PREFIJO):].encode()).decode()
    except (InvalidToken, ValueError):
        # Cifrado con otra clave: mejor vacío que basura que parezca un dato.
        return None


def adelante(apps, schema_editor):
    Cliente = apps.get_model('clientes', 'Cliente')
    for viejo, nuevo in ESTADOS.items():
        Cliente.objects.filter(estado=viejo).update(estado=nuevo)
    for c in Cliente.objects.all().only('id', 'identificacion', 'telefono'):
        identificacion, telefono = _en_claro(c.identificacion), _en_claro(c.telefono)
        if (identificacion, telefono) != (c.identificacion, c.telefono):
            Cliente.objects.filter(pk=c.pk).update(identificacion=identificacion, telefono=telefono)


def atras(apps, schema_editor):
    Cliente = apps.get_model('clientes', 'Cliente')
    for viejo, nuevo in ESTADOS.items():
        Cliente.objects.filter(estado=nuevo).update(estado=viejo)


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0007_esquema_del_dashboard'),
    ]

    operations = [
        migrations.RunPython(adelante, atras),
    ]
