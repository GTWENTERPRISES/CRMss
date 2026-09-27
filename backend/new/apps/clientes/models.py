from django.db import models

from apps.core.fields import EncryptedCharField, EncryptedTextField
from apps.core.models import BaseModel


class Cliente(BaseModel):
    class EstadoServicio(models.TextChoices):
        ACTIVO = 'ACTIVO', 'Activo'
        SUSPENDIDO_CORTE = 'SUSPENDIDO_POR_CORTE', 'Suspendido por Corte'
        SUSPENDIDO = 'SUSPENDIDO', 'Suspendido'
        DADO_BAJA = 'DADO_DE_BAJA', 'Dado de Baja'

    cedula = EncryptedCharField(max_length=255, unique=True, db_index=True)
    cedula_hash = models.CharField(max_length=64, blank=True, db_index=True)
    nombre = models.CharField(max_length=150, db_index=True)
    telefono = EncryptedCharField(max_length=255, db_index=True)
    telefono_hash = models.CharField(max_length=64, blank=True, db_index=True)
    email = EncryptedCharField(max_length=255, blank=True)
    direccion = EncryptedTextField()

    latitud = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitud = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)

    estado_servicio = models.CharField(
        max_length=30, choices=EstadoServicio.choices,
        default=EstadoServicio.ACTIVO, db_index=True,
    )
    codigo_pago = models.CharField(max_length=20, blank=True, db_index=True)

    class Meta:
        db_table = 'clientes'
        ordering = ['nombre']
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        indexes = [
            models.Index(fields=['estado_servicio']),
            models.Index(fields=['telefono']),
        ]

    def __str__(self):
        return f'{self.nombre} ({self.cedula})'

    def save(self, *args, **kwargs):
        from apps.core.fields import get_blind_hash
        if self.cedula:
            self.cedula_hash = get_blind_hash(self.cedula)
        if self.telefono:
            self.telefono_hash = get_blind_hash(self.telefono)
        super().save(*args, **kwargs)

    def deuda_total(self):
        from django.db.models import Sum

        from apps.facturacion.models import Factura

        total = Factura.objects.filter(
            cliente=self,
            estado__in=[Factura.Estado.PENDIENTE, Factura.Estado.VENCIDA],
        ).aggregate(total=Sum('total'))['total']
        return total or 0


class Contrato(BaseModel):
    class Estado(models.TextChoices):
        VIGENTE = 'vigente', 'Vigente'
        VENCIDO = 'vencido', 'Vencido'
        CANCELADO = 'cancelado', 'Cancelado'

    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='contratos')
    numero = models.CharField(max_length=20, unique=True)
    fecha_inicio = models.DateField()
    fecha_vencimiento = models.DateField()
    estado = models.CharField(max_length=20, choices=Estado.choices, default=Estado.VIGENTE)
    archivo_url = models.URLField(blank=True)

    class Meta:
        db_table = 'contratos'
        ordering = ['-fecha_inicio']
        verbose_name = 'Contrato'
        verbose_name_plural = 'Contratos'

    def __str__(self):
        return f'Contrato {self.numero} - {self.cliente.nombre}'


class Servicio(BaseModel):
    class Estado(models.TextChoices):
        ACTIVO = 'activo', 'Activo'
        SUSPENDIDO = 'suspendido', 'Suspendido'
        CANCELADO = 'cancelado', 'Cancelado'

    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='servicios')
    onu = models.ForeignKey(
        'olts.ONU', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='servicios',
    )
    plan = models.ForeignKey(
        'facturacion.PlanVelocidad', on_delete=models.SET_NULL,
        null=True, blank=True, related_name='servicios',
    )
    fecha_alta = models.DateField()
    estado = models.CharField(max_length=20, choices=Estado.choices, default=Estado.ACTIVO)

    class Meta:
        db_table = 'servicios'
        ordering = ['-fecha_alta']
        verbose_name = 'Servicio'
        verbose_name_plural = 'Servicios'
        indexes = [models.Index(fields=['cliente', 'estado'])]

    def __str__(self):
        return f'Servicio {self.cliente.nombre} ({self.get_estado_display()})'
