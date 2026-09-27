import logging

logger = logging.getLogger(__name__)


def get_driver(router):
    """Factory para obtener driver de MikroTik según configuración"""
    return MikroTikDriver(router)


class MikroTikDriver:
    def __init__(self, router, timeout=10):
        self.router = router
        self.timeout = timeout
        self.conn = None

    def connect(self):
        from librouteros import connect
        from librouteros.login import plain

        self.conn = connect(
            host=self.router.ip_host,
            username=self.router.usuario,
            password=self.router.password_encrypted,
            port=self.router.puerto_api,
            timeout=self.timeout,
            login_method=plain,
            ssl=self.router.usa_https,
        )
        return self

    def obtener_identidad(self):
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return list(self.conn.path('system', 'identity'))

    def crear_pool_ip(self, nombre, rango_ip):
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return self.conn.path('ip', 'pool').add(name=nombre, ranges=rango_ip)

    def crear_bloqueo(self, ip, lista='CORTADOS'):
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return self.conn.path('ip', 'firewall', 'address-list').add(
            list=lista, address=ip,
        )

    def quitar_bloqueo(self, ip, lista='CORTADOS'):
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        path = self.conn.path('ip', 'firewall', 'address-list')
        for entrada in path:
            if entrada.get('address') == ip and entrada.get('list') == lista:
                path.remove(entrada.get('.id'))
                return True
        return False

    def crear_redireccion_pago(self, ip, url_portal):
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return self.conn.path('ip', 'firewall', 'nat').add(
            chain='dstnat',
            **{'src-address': ip, 'action': 'redirect', 'to-ports': '80'},
        )

    def obtener_interfaces(self):
        """Obtiene lista de interfaces del router"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return list(self.conn.path('interface'))

    def obtener_ips(self):
        """Obtiene todas las IPs configuradas en el router"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return list(self.conn.path('ip', 'address'))

    def crear_ip(self, address, interface, comment=''):
        """Asigna una IP a una interfaz"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        params = {'address': address, 'interface': interface}
        if comment:
            params['comment'] = comment
        return self.conn.path('ip', 'address').add(**params)

    def eliminar_ip(self, address):
        """Elimina una IP del router"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        path = self.conn.path('ip', 'address')
        for ip in path:
            if ip.get('address') == address:
                path.remove(ip.get('.id'))
                return True
        return False

    def obtener_queue_simple(self, name=None):
        """Obtiene queues simples (limitación de ancho de banda)"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        queues = list(self.conn.path('queue', 'simple'))
        if name:
            return [q for q in queues if q.get('name') == name]
        return queues

    def crear_queue_simple(self, name, target, max_limit_up, max_limit_down, comment=''):
        """Crea un queue simple para limitar ancho de banda de un cliente"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        params = {
            'name': name,
            'target': target,
            'max-limit': f'{max_limit_up}/{max_limit_down}',
        }
        if comment:
            params['comment'] = comment
        return self.conn.path('queue', 'simple').add(**params)

    def actualizar_queue_simple(self, name, max_limit_up, max_limit_down):
        """Actualiza el ancho de banda de un queue existente"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        path = self.conn.path('queue', 'simple')
        for queue in path:
            if queue.get('name') == name:
                path.update(
                    **{'.id': queue.get('.id'), 'max-limit': f'{max_limit_up}/{max_limit_down}'},
                )
                return True
        return False

    def eliminar_queue_simple(self, name):
        """Elimina un queue simple"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        path = self.conn.path('queue', 'simple')
        for queue in path:
            if queue.get('name') == name:
                path.remove(queue.get('.id'))
                return True
        return False

    def obtener_dhcp_leases(self):
        """Obtiene lista de IPs asignadas por DHCP"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return list(self.conn.path('ip', 'dhcp-server', 'lease'))

    def crear_dhcp_lease(self, address, mac_address, comment=''):
        """Crea una reserva DHCP estática"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        params = {'address': address, 'mac-address': mac_address}
        if comment:
            params['comment'] = comment
        return self.conn.path('ip', 'dhcp-server', 'lease').add(**params)

    def obtener_recursos(self):
        """Obtiene información de recursos del router (CPU, RAM, uptime)"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return list(self.conn.path('system', 'resource'))

    def obtener_trafico_interfaz(self, interface_name):
        """Obtiene estadísticas de tráfico de una interfaz"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        path = self.conn.path('interface')
        for interface in path:
            if interface.get('name') == interface_name:
                return {
                    'rx_bytes': interface.get('rx-byte', 0),
                    'tx_bytes': interface.get('tx-byte', 0),
                    'rx_packets': interface.get('rx-packet', 0),
                    'tx_packets': interface.get('tx-packet', 0),
                }
        return None

    def ping(self, address, count=4):
        """Ejecuta ping desde el router"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return list(self.conn.path('ping').select(address=address, count=str(count)))

    def obtener_arp_table(self):
        """Obtiene tabla ARP del router"""
        if self.conn is None:
            raise RuntimeError('Driver no conectado. Ejecute connect() primero.')
        return list(self.conn.path('ip', 'arp'))

    def close(self):
        if self.conn is not None:
            try:
                self.conn.close()
            except Exception:
                pass
            self.conn = None

    def __enter__(self):
        return self.connect()

    def __exit__(self, *exc):
        self.close()
