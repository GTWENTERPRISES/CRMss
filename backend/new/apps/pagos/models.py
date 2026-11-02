"""
Pagos y cortes de servicio.

`pagos` tiene las columnas de la tabla del dashboard (apps/dashboard/columnas.py,
columnas.py): cada pago apunta a UNA factura (`factura_id`); un
cobro que alcanza para varias se reparte en varios pagos (`es_reparto`) y lo que
sobra queda como excedente (`es_excedente`, `pago_origen_id`).
"""
from django.db import models

from apps.core.models import BaseModel
from apps.dashboard import columnas


class Pago(columnas.ColumnasPago):
    class FormaPago(models.TextChoices):
        EFECTIVO = 'efectivo', 'Efectivo'
        TRANSFERENCIA = 'transferencia', 'Transferencia'
        DEPOSITO = 'deposito', 'Depósito'
        TARJETA = 'tarjeta', 'Tarjeta'
        BILLETERA = 'billetera', 'Billetera digital'
        OTRO = 'otro', 'Otro'

    forma_pago = models.CharField(max_length=20, choices=FormaPago.choices, default=FormaPago.EFECTIVO, blank=True)

    class Meta(columnas.ColumnasPago.Meta):
        db_table = 'pagos'
        ordering = ['-fecha_pago', '-created_at']
        verbose_name = 'Pago'
        verbose_name_plural = 'Pagos'

    def __str__(self):
        return f'Pago {self.monto} ({self.forma_pago})'


class Corte(BaseModel):
    """Registro de un corte de servicio hecho desde Django (no es tabla del dashboard)."""

    class Motivo(models.TextChoices):
        MORA = 'MORA', 'Mora'
        MANUAL = 'MANUAL', 'Manual'
        SOLICITUD = 'SOLICITUD', 'Solicitud del Cliente'

    cliente = models.ForeignKey(
        'clientes.Cliente', on_delete=models.CASCADE, related_name='cortes',
    )
    motivo = models.CharField(max_length=20, choices=Motivo.choices)
    ejecutado_por = models.CharField(max_length=50)
    fecha_corte = models.DateTimeField(auto_now_add=True)
    reactivado = models.BooleanField(default=False, db_index=True)
    fecha_reactivacion = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'cortes'
        ordering = ['-fecha_corte']
        verbose_name = 'Corte de Servicio'
        verbose_name_plural = 'Cortes de Servicio'
        indexes = [models.Index(fields=['cliente', 'reactivado'])]

    def __str__(self):
        return f'Corte {self.cliente.nombre} ({self.get_motivo_display()})'
