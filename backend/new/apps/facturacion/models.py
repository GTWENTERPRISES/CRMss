from decimal import Decimal

from django.db import models

from apps.core.fields import EncryptedCharField, EncryptedTextField
from apps.core.models import BaseModel


class PlanVelocidad(BaseModel):
    class Categoria(models.TextChoices):
        RESIDENCIAL = 'residencial', 'Residencial'
        EMPRESARIAL = 'empresarial', 'Empresarial'

    nombre = models.CharField(max_length=100, unique=True, db_index=True)
    categoria = models.CharField(
        max_length=20, choices=Categoria.choices,
        default=Categoria.RESIDENCIAL, db_index=True,
    )
    bajada_kbps = models.IntegerField()
    subida_kbps = models.IntegerField()
    burst_limit = models.CharField(max_length=50, blank=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    precio_incluye_iva = models.BooleanField(default=False)
    traffic_table_index = models.IntegerField(null=True, blank=True)

    class Meta:
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


class Factura(BaseModel):
    class Estado(models.TextChoices):
        PENDIENTE = 'pendiente', 'Pendiente'
        VENCIDA = 'vencida', 'Vencida'
        PAGADA = 'pagada', 'Pagada'
        ANULADA = 'anulada', 'Anulada'

    cliente = models.ForeignKey(
        'clientes.Cliente', on_delete=models.CASCADE, related_name='facturas',
    )
    numero = models.CharField(max_length=20, unique=True)
    fecha = models.DateField(auto_now_add=True)
    mes = models.CharField(max_length=20)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    iva = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_vencimiento = models.DateField()
    estado = models.CharField(
        max_length=20, choices=Estado.choices,
        default=Estado.PENDIENTE, db_index=True,
    )
    xml_sri = EncryptedTextField(blank=True)
    clave_acceso = EncryptedCharField(max_length=255, blank=True, db_index=True)
    enviada = models.BooleanField(default=False, db_index=True)

    class Meta:
        db_table = 'facturas'
        ordering = ['-fecha', '-numero']
        verbose_name = 'Factura'
        verbose_name_plural = 'Facturas'
        indexes = [
            models.Index(fields=['cliente', 'estado']),
            models.Index(fields=['fecha_vencimiento']),
        ]

    def __str__(self):
        return f'Factura {self.numero} - {self.cliente.nombre}'

    @property
    def saldo_pendiente(self):
        from django.db.models import Sum

        aplicado = self.pagos_factura.aggregate(total=Sum('monto_aplicado'))['total'] or Decimal('0')
        return max(self.total - aplicado, Decimal('0'))


class DetalleFactura(BaseModel):
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
        # Calcular subtotal automáticamente
        self.subtotal = self.cantidad * self.precio_unitario
        super().save(*args, **kwargs)
