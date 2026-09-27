from django.db import models

from apps.core.fields import EncryptedCharField
from apps.core.models import BaseModel


class RouterMikrotik(BaseModel):
    class ModoAPI(models.TextChoices):
        BINARIA = 'binaria', 'API Binaria (8728)'
        REST = 'rest', 'REST API (HTTP/HTTPS)'

    nombre = models.CharField(max_length=100, db_index=True)
    ip_host = models.GenericIPAddressField()
    modo_api = models.CharField(max_length=10, choices=ModoAPI.choices, default=ModoAPI.BINARIA)
    puerto_api = models.IntegerField(default=8728)
    usa_https = models.BooleanField(default=False)
    usuario = EncryptedCharField(max_length=255)
    password_encrypted = EncryptedCharField(max_length=255)
    activo = models.BooleanField(default=True, db_index=True)

    class Meta:
        db_table = 'routers_mikrotik'
        ordering = ['nombre']
        verbose_name = 'Router MikroTik'
        verbose_name_plural = 'Routers MikroTik'
        constraints = [
            models.UniqueConstraint(
                fields=['ip_host', 'puerto_api'], name='uniq_router_host_puerto',
            ),
        ]

    def __str__(self):
        return f'{self.nombre} - {self.ip_host}'


class IPAddress(BaseModel):
    class Estado(models.TextChoices):
        LIBRE = 'libre', 'Libre'
        ASIGNADA = 'asignada', 'Asignada'
        RESERVADA = 'reservada', 'Reservada'

    router = models.ForeignKey(
        RouterMikrotik, on_delete=models.CASCADE, related_name='ip_addresses',
    )
    onu = models.ForeignKey(
        'olts.ONU', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='ip_addresses',
    )
    ip_address = models.GenericIPAddressField()
    netmask = models.CharField(max_length=15, default='255.255.255.0')
    interfaz = models.CharField(max_length=50)
    estado = models.CharField(
        max_length=20, choices=Estado.choices, default=Estado.LIBRE, db_index=True,
    )

    class Meta:
        db_table = 'ip_addresses'
        ordering = ['router', 'ip_address']
        verbose_name = 'Direccion IP'
        verbose_name_plural = 'Direcciones IP'
        constraints = [
            models.UniqueConstraint(
                fields=['router', 'ip_address'], name='uniq_ip_router_direccion',
            ),
        ]
        indexes = [models.Index(fields=['router', 'estado'])]

    def __str__(self):
        return f'{self.ip_address}/{self.netmask}'


class FirewallBloqueo(BaseModel):
    class TipoAccion(models.TextChoices):
        CORTAR = 'CORTAR_SERVICIO', 'Cortar Servicio'
        REDIRECCION = 'REDIRECCION_PAGO', 'Redireccion de Pago'
        DROP = 'DROP_FORWARD', 'Drop Forward'

    router = models.ForeignKey(
        RouterMikrotik, on_delete=models.CASCADE, related_name='bloqueos',
    )
    onu = models.ForeignKey(
        'olts.ONU', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='bloqueos',
    )
    cliente_ip = models.GenericIPAddressField()
    mac_address = models.CharField(max_length=17, blank=True)
    tipo_accion = models.CharField(max_length=20, choices=TipoAccion.choices)
    comentario = models.TextField(blank=True)
    routeros_id = models.CharField(max_length=30, blank=True)
    activo = models.BooleanField(default=True, db_index=True)

    class Meta:
        db_table = 'firewall_bloqueos'
        ordering = ['-created_at']
        verbose_name = 'Bloqueo de Firewall'
        verbose_name_plural = 'Bloqueos de Firewall'
        indexes = [
            models.Index(fields=['router', 'activo']),
            models.Index(fields=['cliente_ip']),
        ]

    def __str__(self):
        return f'{self.cliente_ip} ({self.get_tipo_accion_display()})'
