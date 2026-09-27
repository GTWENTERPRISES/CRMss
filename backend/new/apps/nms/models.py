from django.db import models

from apps.core.models import BaseModel


class SondeoRed(BaseModel):
    class Estado(models.TextChoices):
        OK = 'OK', 'OK'
        WARN = 'WARN', 'Advertencia'
        DOWN = 'DOWN', 'Caido'

    olt = models.ForeignKey(
        'olts.OLT', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='sondeos',
    )
    router = models.ForeignKey(
        'mikrotik.RouterMikrotik', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='sondeos',
    )
    timestamp = models.DateTimeField(auto_now_add=True, db_index=True)
    estado = models.CharField(max_length=10, choices=Estado.choices, db_index=True)
    latencia_ms = models.IntegerField(null=True, blank=True)
    detalle = models.TextField(blank=True)

    class Meta:
        db_table = 'sondeos_red'
        ordering = ['-timestamp']
        verbose_name = 'Sondeo de Red'
        verbose_name_plural = 'Sondeos de Red'
        indexes = [models.Index(fields=['olt', 'timestamp'])]

    def __str__(self):
        objetivo = self.olt or self.router
        return f'{objetivo} - {self.get_estado_display()}'


class AlertaRed(BaseModel):
    class Tipo(models.TextChoices):
        POTENCIA_BAJA = 'POTENCIA_BAJA', 'Potencia Optica Baja'
        OLT_CAIDA = 'OLT_CAIDA', 'OLT Caida'
        ROUTER_CAIDO = 'ROUTER_CAIDO', 'Router Caido'
        ONU_LOS = 'ONU_LOS', 'ONU con LOS'

    class Severidad(models.TextChoices):
        INFO = 'INFO', 'Informativa'
        WARNING = 'WARNING', 'Advertencia'
        CRITICAL = 'CRITICAL', 'Critica'

    tipo = models.CharField(max_length=30, choices=Tipo.choices, db_index=True)
    severidad = models.CharField(
        max_length=10, choices=Severidad.choices, default=Severidad.WARNING, db_index=True,
    )
    mensaje = models.TextField()
    onu = models.ForeignKey(
        'olts.ONU', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='alertas',
    )
    resuelta = models.BooleanField(default=False, db_index=True)
    fecha_resolucion = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'alertas_red'
        ordering = ['-created_at']
        verbose_name = 'Alerta de Red'
        verbose_name_plural = 'Alertas de Red'
        indexes = [models.Index(fields=['resuelta', 'severidad'])]

    def __str__(self):
        return f'{self.get_tipo_display()} - {self.get_severidad_display()}'
