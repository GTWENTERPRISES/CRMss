"""
Primer paso de mikrotik hacia las tablas del dashboard: se quitan los índices y
restricciones del modelo anterior y se renombran las columnas que tienen un
equivalente, para que la migración siguiente no las tome por "borrar y crear".
"""
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mikrotik', '0002_alter_routermikrotik_usuario'),
    ]

    operations = [
        migrations.RemoveConstraint(model_name='routermikrotik', name='uniq_router_host_puerto'),
        migrations.RemoveIndex(model_name='ipaddress', name='ip_addresse_router__555ada_idx'),
        migrations.RemoveConstraint(model_name='ipaddress', name='uniq_ip_router_direccion'),
        migrations.RemoveIndex(model_name='firewallbloqueo', name='firewall_bl_router__efc145_idx'),
        migrations.RemoveIndex(model_name='firewallbloqueo', name='firewall_bl_cliente_01e605_idx'),
    ]
