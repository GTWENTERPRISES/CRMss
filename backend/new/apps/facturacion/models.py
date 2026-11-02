"""
Planes de velocidad y facturas.

Las columnas son las de las tablas del dashboard (apps/dashboard/columnas.py,
columnas.py). Lo pagado de una factura es la suma de los pagos no
anulados que la apuntan (`pagos.factura_id`): un cobro que reparte entre varias
facturas deja un pago por factura, como en el dashboard.
"""
from datetime import timedelta
from decimal import Decimal

from django.db import models
from django.db.models import Sum

from apps.core.models import BaseModel
from apps.dashboard import columnas


class PlanVelocidad(columnas.ColumnasPlanVelocidad):
    class Categoria(models.TextChoices):
        RESIDENCIAL = 'residencial', 'Residencial'
        CORPORATIVO = 'corporativo', 'Corporativo'
        EMPRESARIAL = 'empresarial', 'Empresarial'
        OTRO = 'otro', 'Otro'

    categoria = models.CharField(max_length=15, choices=Categoria.choices, default=Categoria.RESIDENCIAL, blank=True)

    class Meta(columnas.ColumnasPlanVelocidad.Meta):
        db_table = 'planes_velocidad'
        ordering = ['bajada_kbps']
        verbose_name = 'Plan de Velocidad'
        verbose_name_plural = 'Planes de Velocidad'

    def __str__(self):
        return f'{self.nombre} ({self.bajada_kbps} Kbps)'

    @property
    def bajada_mbps(self):
        return round(self.bajada_kbps / 1000, 2)

    @property
    def subida_mbps(self):
        return round(self.subida_kbps / 1000, 2)


class Factura(columnas.ColumnasFactura):
    class Estado(models.TextChoices):
        """El estado no se guarda: lo calcula v_facturas (anulada, saldo, mora)."""
        PENDIENTE = 'pendiente', 'Pendiente'
        VENCIDA = 'vencida', 'Vencida'
        PAGADA = 'pagada', 'Pagada'
        ANULADA = 'anulada', 'Anulada'

    class Meta(columnas.ColumnasFactura.Meta):
        db_table = 'facturas'
        ordering = ['-fecha_emision', '-numero']
        verbose_name = 'Factura'
        verbose_name_plural = 'Facturas'

    def __str__(self):
        return f'Factura {self.numero} - {self.cliente_nombre or self.client_id}'

    @property
    def pagado(self):
        from apps.pagos.models import Pago

        return Pago.objects.filter(factura=self, anulado=False).aggregate(
            t=Sum('monto'))['t'] or Decimal('0')

    @property
    def saldo_pendiente(self):
        if self.anulada:
            return Decimal('0')
        return max(self.total - self.pagado, Decimal('0'))

    @property
    def estado(self):
        """El mismo CASE que v_facturas."""
        from apps.dashboard.base import hoy

        if self.anulada:
            return self.Estado.ANULADA
        if self.saldo_pendiente <= Decimal('0.005'):
            return self.Estado.PAGADA
        gracia = (self.client.dias_gracia or 0) if self.client_id else 0
        if hoy() > self.fecha_vencimiento + timedelta(days=gracia):
            return self.Estado.VENCIDA
        return self.Estado.PENDIENTE


class DetalleFactura(BaseModel):
    """Renglones de una factura armada desde Django (no es tabla del dashboard)."""

    factura = models.ForeignKey(Factura, on_delete=models.CASCADE, related_name='detalles')
    servicio = models.ForeignKey(
        'clientes.Servicio', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='detalles_factura',
    )
    descripcion = models.CharField(max_length=255)
    cantidad = models.DecimalField(max_digits=10, decimal_places=2, default=1)
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    aplica_iva = models.BooleanField(default=True)

    class Meta:
        db_table = 'detalles_factura'
        ordering = ['factura', 'id']
        verbose_name = 'Detalle de Factura'
        verbose_name_plural = 'Detalles de Factura'

    def __str__(self):
        return f'{self.descripcion} - {self.subtotal}'

    def save(self, *args, **kwargs):
        self.subtotal = self.cantidad * self.precio_unitario
        super().save(*args, **kwargs)
