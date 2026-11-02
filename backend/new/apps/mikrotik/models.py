"""
Routers MikroTik, direcciones IP y bloqueos de firewall.

Las columnas son las de las tablas del dashboard (apps/dashboard/columnas.py,
columnas.py). Las credenciales del router las cifra el servicio de
red (middleware) con su propia clave: acá se guardan tal como llegan.
"""
from apps.dashboard import columnas


class RouterMikrotik(columnas.ColumnasRouterMikrotik):
    class Meta(columnas.ColumnasRouterMikrotik.Meta):
        db_table = 'routers_mikrotik'
        ordering = ['nombre']
        verbose_name = 'Router MikroTik'
        verbose_name_plural = 'Routers MikroTik'

    def __str__(self):
        return f'{self.nombre} - {self.ip_host}'


class IPAddress(columnas.ColumnasIPAddress):
    class Meta(columnas.ColumnasIPAddress.Meta):
        db_table = 'ip_addresses'
        ordering = ['router', 'ip_address']
        verbose_name = 'Dirección IP'
        verbose_name_plural = 'Direcciones IP'

    def __str__(self):
        return f'{self.ip_address}'


class FirewallBloqueo(columnas.ColumnasFirewallBloqueo):
    class Meta(columnas.ColumnasFirewallBloqueo.Meta):
        db_table = 'firewall_bloqueos'
        ordering = ['-created_at']
        verbose_name = 'Bloqueo de firewall'
        verbose_name_plural = 'Bloqueos de firewall'

    def __str__(self):
        return f'{self.cliente_ip} ({self.tipo_accion})'
