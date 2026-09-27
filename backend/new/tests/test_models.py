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
        assert cliente.estado_servicio == 'ACTIVO'
    
    def test_nombre_completo(self):
        cliente = ClienteFactory(nombre='Juan')
        assert cliente.nombre == 'Juan'
    
    def test_cliente_str(self):
        cliente = ClienteFactory(nombre='Juan', cedula='0900000001')
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
        assert factura.cliente is not None
        assert factura.numero is not None
        assert factura.estado == 'pendiente'
    
    def test_factura_totales(self):
        factura = FacturaFactory(
            subtotal=Decimal('100.00'),
            iva=Decimal('12.00'),
            total=Decimal('112.00')
        )
        assert factura.total == Decimal('112.00')
    
    def test_numero_completo(self):
        factura = FacturaFactory(numero='001-001-000000123')
        assert '001-001-000000123' in str(factura)


@pytest.mark.unit
class TestPagoModel:
    """Tests para el modelo Pago"""
    
    def test_crear_pago(self):
        pago = PagoFactory()
        assert pago.cliente is not None
        assert pago.monto > 0
        assert pago.forma_pago in ['transferencia', 'efectivo', 'tarjeta']
    
    def test_pago_confirmado(self):
        pago = PagoFactory(estado='confirmado', acreditado=True)
        assert pago.estado == 'confirmado'
        assert pago.acreditado is True


@pytest.mark.unit
class TestTicketModel:
    """Tests para el modelo Ticket"""
    
    def test_crear_ticket(self):
        ticket = TicketFactory()
        assert ticket.cliente is not None
        assert ticket.numero is not None
        assert ticket.estado == 'ABIERTO'
    
    def test_ticket_prioridades(self):
        ticket_alta = TicketFactory(prioridad='ALTA')
        ticket_baja = TicketFactory(prioridad='BAJA')
        assert ticket_alta.prioridad == 'ALTA'
        assert ticket_baja.prioridad == 'BAJA'
