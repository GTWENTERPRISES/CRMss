from decimal import Decimal

from django.db import models

from apps.core.fields import EncryptedCharField
from apps.core.models import BaseModel


class Pago(BaseModel):
    class FormaPago(models.TextChoices):
        TRANSFERENCIA = 'transferencia', 'Transferencia'
        EFECTIVO = 'efectivo', 'Efectivo'
        TARJETA = 'tarjeta', 'Tarjeta'
        DEPOSITO = 'deposito', 'Deposito'
        BILLETERA = 'billetera', 'Billetera Digital'

    class Estado(models.TextChoices):
        PENDIENTE = 'pendiente', 'Pendiente Verificacion'
        CONFIRMADO = 'confirmado', 'Confirmado'
        RECHAZADO = 'rechazado', 'Rechazado'

    cliente = models.ForeignKey(
        'clientes.Cliente', on_delete=models.CASCADE, related_name='pagos',
    )
    facturas = models.ManyToManyField(
        'facturacion.Factura', through='PagoFactura', related_name='pagos',
    )

    monto = models.DecimalField(max_digits=10, decimal_places=2)
    forma_pago = models.CharField(max_length=20, choices=FormaPago.choices)
    referencia = EncryptedCharField(max_length=255, blank=True)
    banco_origen = EncryptedCharField(max_length=255, blank=True)
    num_comprobante = EncryptedCharField(max_length=255, blank=True, db_index=True)
    hash_qr = EncryptedCharField(max_length=255, blank=True)

    estado = models.CharField(
        max_length=20, choices=Estado.choices,
        default=Estado.PENDIENTE, db_index=True,
    )
    acreditado = models.BooleanField(default=False, db_index=True)
    fecha_transaccion = models.DateTimeField()
    verificado_por = models.CharField(max_length=50, blank=True)
    cuenta_destino = EncryptedCharField(max_length=255, blank=True)
    origen = models.CharField(max_length=30, blank=True)
    saldo_restante = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    class Meta:
        db_table = 'pagos'
        ordering = ['-fecha_transaccion']
        verbose_name = 'Pago'
        verbose_name_plural = 'Pagos'
        indexes = [
            models.Index(fields=['cliente', 'estado']),
            models.Index(fields=['fecha_transaccion']),
        ]

    def __str__(self):
        return f'Pago {self.monto} ({self.get_forma_pago_display()})'


class PagoFactura(models.Model):
    pago = models.ForeignKey(Pago, on_delete=models.CASCADE, related_name='aplicaciones')
    factura = models.ForeignKey(
        'facturacion.Factura', on_delete=models.CASCADE, related_name='pagos_factura',
    )
    monto_aplicado = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'pago_factura'
        verbose_name = 'Aplicacion de Pago'
        verbose_name_plural = 'Aplicaciones de Pago'
        constraints = [
            models.UniqueConstraint(
                fields=['pago', 'factura'], name='uniq_pago_factura',
            ),
        ]

    def __str__(self):
        return f'{self.monto_aplicado} a {self.factura.numero}'


class Corte(BaseModel):
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
