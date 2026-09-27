from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from apps.core.fields import EncryptedCharField
from apps.core.models import BaseModel


class OLT(BaseModel):
    class Marca(models.TextChoices):
        HUAWEI = 'Huawei', 'Huawei'
        VSOL = 'VSOL', 'V-SOL'

    class EstadoSondeo(models.TextChoices):
        ONLINE = 'online', 'Online'
        OFFLINE = 'offline', 'Offline'
        ERROR = 'error', 'Error de conexion'
        DESCONOCIDO = 'desconocido', 'Desconocido'

    nombre = models.CharField(max_length=100, db_index=True)
    marca = models.CharField(max_length=20, choices=Marca.choices)
    ip_host = models.GenericIPAddressField()
    puerto_ssh = models.IntegerField(default=22)
    usuario = EncryptedCharField(max_length=255)
    password_encrypted = EncryptedCharField(max_length=255)
    enable_password_encrypted = EncryptedCharField(max_length=255, null=True, blank=True)
    activo = models.BooleanField(default=True, db_index=True)

    estado_ultimo_sondeo = models.CharField(
        max_length=20, choices=EstadoSondeo.choices,
        default=EstadoSondeo.DESCONOCIDO, db_index=True,
    )
    ultima_conexion = models.DateTimeField(null=True, blank=True)
    modelo = models.CharField(max_length=50, blank=True)

    class Meta:
        db_table = 'olts'
        ordering = ['nombre']
        verbose_name = 'OLT'
        verbose_name_plural = 'OLTs'
        constraints = [
            models.UniqueConstraint(fields=['ip_host', 'puerto_ssh'], name='uniq_olt_host_puerto'),
        ]

    def __str__(self):
        return f'{self.nombre} ({self.ip_host})'


class TipoONT(BaseModel):
    marca = models.CharField(max_length=50, db_index=True)
    modelo = models.CharField(max_length=50)
    puertos_ethernet = models.IntegerField(default=1)
    puertos_fxs = models.IntegerField(default=0)
    wifi = models.BooleanField(default=False)

    class Meta:
        db_table = 'tipos_ont'
        ordering = ['marca', 'modelo']
        verbose_name = 'Tipo de ONT'
        verbose_name_plural = 'Tipos de ONT'
        constraints = [
            models.UniqueConstraint(fields=['marca', 'modelo'], name='uniq_tipoont_marca_modelo'),
        ]

    def __str__(self):
        return f'{self.marca} {self.modelo}'


class LineProfile(BaseModel):
    olt = models.ForeignKey(OLT, on_delete=models.CASCADE, related_name='line_profiles')
    nombre = models.CharField(max_length=100)
    vlan_id = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(4094)],
    )
    gemport_id = models.IntegerField(default=1)
    profile_id_olt = models.IntegerField()

    class Meta:
        db_table = 'line_profiles'
        ordering = ['olt', 'nombre']
        verbose_name = 'Line Profile'
        verbose_name_plural = 'Line Profiles'
        constraints = [
            models.UniqueConstraint(fields=['olt', 'nombre'], name='uniq_lineprofile_olt_nombre'),
        ]

    def __str__(self):
        return f'{self.nombre} (VLAN {self.vlan_id})'


class ONU(BaseModel):
    class Estado(models.TextChoices):
        ONLINE = 'online', 'Online'
        OFFLINE = 'offline', 'Offline'
        LOS = 'los', 'LOS (Loss of Signal)'
        UNKNOWN = 'unknown', 'Desconocido'

    olt = models.ForeignKey(OLT, on_delete=models.CASCADE, related_name='onus')
    sn = models.CharField(max_length=50, db_index=True)
    nombre_cliente = models.CharField(max_length=150, blank=True)

    frame = models.IntegerField(default=0)
    slot = models.IntegerField(default=0)
    puerto = models.IntegerField()
    onu_index = models.IntegerField()

    tipo_ont = models.ForeignKey(
        TipoONT, on_delete=models.SET_NULL, null=True, blank=True, related_name='onus',
    )
    line_profile = models.ForeignKey(
        LineProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='onus',
    )
    plan = models.ForeignKey(
        'facturacion.PlanVelocidad', on_delete=models.SET_NULL,
        null=True, blank=True, related_name='onus',
    )
    plan_velocidad = models.CharField(max_length=50, blank=True)

    estado = models.CharField(
        max_length=20, choices=Estado.choices, default=Estado.OFFLINE, db_index=True,
    )
    rx_power_dbm = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    tx_power_dbm = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    distancia_m = models.IntegerField(null=True, blank=True)
    ultima_lectura = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'onus'
        ordering = ['olt', 'frame', 'slot', 'puerto', 'onu_index']
        verbose_name = 'ONU'
        verbose_name_plural = 'ONUs'
        constraints = [
            models.UniqueConstraint(fields=['olt', 'sn'], name='uniq_onu_olt_sn'),
            models.UniqueConstraint(
                fields=['olt', 'frame', 'slot', 'puerto', 'onu_index'],
                name='uniq_onu_posicion_fisica',
            ),
        ]
        indexes = [
            models.Index(fields=['olt', 'estado']),
            models.Index(fields=['sn']),
        ]

    def __str__(self):
        return f'{self.sn} - {self.nombre_cliente or "Sin cliente"}'

    @property
    def posicion(self):
        return f'{self.frame}/{self.slot}/{self.puerto}:{self.onu_index}'

    @property
    def potencia_optima(self):
        if self.rx_power_dbm is None:
            return None
        return -27 <= float(self.rx_power_dbm) <= -8
