"""
Abonados, contratos y servicios.

Las columnas de `clientes` y `contratos` son las de las tablas del dashboard
(apps/dashboard/columnas.py, columnas.py).
"""
from decimal import Decimal

from django.db import models
from django.db.models import Sum

from apps.core.fields import EncryptedCharField, EncryptedTextField, por_texto
from apps.core.models import BaseModel
from apps.dashboard import columnas


class Cliente(columnas.ColumnasCliente):
    """
    Un abonado: una fila por servicio contratado (una persona con dos servicios
    tiene dos filas con la misma identificación). La ONU, el plan y el router
    del servicio van en la misma fila.

    `identificacion` y los teléfonos van en claro porque son claves de búsqueda:
    el portal del abonado entra por identificación, el bot de WhatsApp encuentra
    al cliente por los últimos dígitos del teléfono, y un valor cifrado no se
    puede comparar. El correo y la dirección, que nadie busca, van cifrados.
    """

    class Estado(models.TextChoices):
        ACTIVO = 'activo', 'Activo'
        CORTADO = 'cortado', 'Cortado'
        SUSPENDIDO = 'suspendido', 'Suspendido'
        BAJA = 'baja', 'Dado de baja'

    email = EncryptedCharField(max_length=255, null=True, blank=True)
    direccion = EncryptedTextField(null=True, blank=True)

    class Meta(columnas.ColumnasCliente.Meta):
        db_table = 'clientes'
        ordering = [por_texto('nombre')]  # nombre va cifrado
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'

    def __str__(self):
        return f'{self.nombre} ({self.identificacion or "sin identificación"})'

    def deuda_total(self):
        """Lo que debe: el saldo de sus facturas no anuladas (como v_saldo_clientes)."""
        from apps.facturacion.models import Factura
        from apps.pagos.models import Pago

        facturado = Factura.objects.filter(client=self, anulada=False).aggregate(
            t=Sum('total'))['t'] or Decimal('0')
        pagado = Pago.objects.filter(
            factura__client=self, factura__anulada=False, anulado=False,
        ).aggregate(t=Sum('monto'))['t'] or Decimal('0')
        return max(facturado - pagado, Decimal('0'))


class Contrato(columnas.ColumnasContrato):
    class Estado(models.TextChoices):
        VIGENTE = 'vigente', 'Vigente'
        TERMINADO = 'terminado', 'Terminado'
        ANULADO = 'anulado', 'Anulado'
        SUSPENDIDO = 'suspendido', 'Suspendido'

    class Meta(columnas.ColumnasContrato.Meta):
        db_table = 'contratos'
        ordering = ['-created_at']
        verbose_name = 'Contrato'
        verbose_name_plural = 'Contratos'

    def __str__(self):
        return f'Contrato {self.numero or self.id}'


class Servicio(BaseModel):
    """
    El servicio de un cliente según el modelo anterior a la migración.

    En el esquema del dashboard el servicio es la propia fila de `clientes`
    (onu_id, plan_id, fecha_instalacion). Esta tabla se conserva por los datos
    viejos; lo nuevo se escribe en `clientes`.
    """

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
