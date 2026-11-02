"""
Tests unitarios para modelos del sistema
"""
import pytest
from decimal import Decimal
from .factories import (
    ClienteFactory, ONUFactory, FacturaFactory,
    PagoFactory, TicketFactory
)


@pytest.mark.unit
class TestClienteModel:
    """Tests para el modelo Cliente"""

    def test_crear_cliente(self):
        cliente = ClienteFactory()
        assert cliente.nombre is not None
        assert cliente.email is not None
        assert cliente.estado == 'activo'

    def test_nombre_completo(self):
        cliente = ClienteFactory(nombre='Juan')
        assert cliente.nombre == 'Juan'

    def test_cliente_str(self):
        cliente = ClienteFactory(nombre='Juan', identificacion='0900000001')
        assert str(cliente) == 'Juan (0900000001)'


@pytest.mark.unit
class TestONUModel:
    """Tests para el modelo ONU"""

    def test_crear_onu(self):
        onu = ONUFactory()
        assert onu.sn is not None
        assert onu.olt is not None
        assert onu.estado == 'online'

    def test_onu_location(self):
        onu = ONUFactory(frame=0, slot=1, puerto=5, onu_index=10)
        assert onu.posicion == '0/1/5:10'

    def test_rx_power_decimal(self):
        onu = ONUFactory(rx_power_dbm=Decimal('-23.5'))
        assert isinstance(onu.rx_power_dbm, Decimal)
        assert onu.rx_power_dbm == Decimal('-23.5')


@pytest.mark.unit
class TestFacturaModel:
    """Tests para el modelo Factura"""

    def test_crear_factura(self):
        factura = FacturaFactory()
        assert factura.client is not None
        assert factura.numero is not None          # serial: lo pone el modelo
        assert factura.estado == 'pendiente'       # calculado como en v_facturas

    def test_factura_totales(self):
        factura = FacturaFactory(
            subtotal=Decimal('100.00'),
            impuesto=Decimal('15.00'),
            total=Decimal('115.00')
        )
        assert factura.total == Decimal('115.00')
        assert factura.saldo_pendiente == Decimal('115.00')

    def test_numero_correlativo(self):
        primera, segunda = FacturaFactory(), FacturaFactory()
        assert segunda.numero == primera.numero + 1

    def test_pagada_y_anulada(self):
        from apps.pagos.models import Pago
        factura = FacturaFactory(total=Decimal('20.00'))
        Pago.objects.create(client=factura.client, factura=factura, monto=Decimal('20.00'))
        assert factura.estado == 'pagada'
        factura.anulada = True
        assert factura.estado == 'anulada'


@pytest.mark.unit
class TestPagoModel:
    """Tests para el modelo Pago"""

    def test_crear_pago(self):
        pago = PagoFactory()
        assert pago.client is not None
        assert pago.monto > 0
        assert pago.numero is not None
        assert pago.forma_pago in ['transferencia', 'efectivo', 'tarjeta']

    def test_pago_anulado(self):
        pago = PagoFactory(anulado=True, motivo_anulacion='duplicado')
        assert pago.anulado is True


@pytest.mark.unit
class TestTicketModel:
    """Tests para el modelo Ticket"""

    def test_crear_ticket(self):
        ticket = TicketFactory()
        assert ticket.client is not None
        assert ticket.numero is not None
        assert ticket.estado == 'abierto'

    def test_ticket_prioridades(self):
        ticket_alta = TicketFactory(prioridad='alta')
        ticket_baja = TicketFactory(prioridad='baja')
        assert ticket_alta.prioridad == 'alta'
        assert ticket_baja.prioridad == 'baja'
