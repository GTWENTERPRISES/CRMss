"""
Tests de integración para API REST
"""
import pytest
from rest_framework import status
from .factories import (
    ClienteFactory, FacturaFactory, PagoFactory,
    TicketFactory, ONUFactory, RouterMikrotikFactory
)


@pytest.mark.integration
class TestClientesAPI:
    """Tests para endpoints de clientes"""
    
    def test_listar_clientes(self, authenticated_client):
        ClienteFactory.create_batch(5)
        response = authenticated_client.get('/api/v1/clientes/clientes/')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 5
    
    def test_crear_cliente(self, authenticated_client):
        data = {
            'cedula': '0987654321',
            'nombre': 'Juan',
            'email': 'juan@example.com',
            'telefono': '0987654321',
            'direccion': 'Av. Principal 123',
            'estado_servicio': 'ACTIVO'
        }
        response = authenticated_client.post('/api/v1/clientes/clientes/', data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['nombre'] == 'Juan'
    
    def test_detalle_cliente(self, authenticated_client):
        cliente = ClienteFactory()
        response = authenticated_client.get(f'/api/v1/clientes/clientes/{cliente.id}/')
        assert response.status_code == status.HTTP_200_OK
        assert response.data['nombre'] == cliente.nombre


@pytest.mark.integration
class TestFacturacionAPI:
    """Tests para endpoints de facturación"""
    
    def test_listar_facturas(self, authenticated_client):
        FacturaFactory.create_batch(3)
        response = authenticated_client.get('/api/v1/facturacion/facturas/')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 3
    
    def test_filtrar_facturas_pendientes(self, authenticated_client):
        FacturaFactory.create_batch(2, estado='pendiente')
        FacturaFactory.create_batch(3, estado='pagada')
        
        response = authenticated_client.get('/api/v1/facturacion/facturas/?estado=pendiente')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 2


@pytest.mark.integration
class TestPagosAPI:
    """Tests para endpoints de pagos"""
    
    def test_registrar_pago(self, authenticated_client):
        cliente = ClienteFactory()
        data = {
            'cliente_id': str(cliente.id),
            'monto': '56.00',
            'forma_pago': 'transferencia',
            'referencia': 'REF123456',
            'fecha_transaccion': '2026-09-20T10:00:00Z',
            'estado': 'pendiente'
        }
        response = authenticated_client.post('/api/v1/pagos/registrar', data)
        assert response.status_code == status.HTTP_201_CREATED
        assert float(response.data['monto']) == 56.00


@pytest.mark.integration
class TestSoporteAPI:
    """Tests para endpoints de soporte"""
    
    def test_crear_ticket(self, authenticated_client):
        cliente = ClienteFactory()
        data = {
            'cliente': str(cliente.id),
            'tipo_incidencia': 'SIN_SERVICIO',
            'descripcion_bot': 'El servicio está caído desde ayer',
            'prioridad': 'ALTA'
        }
        response = authenticated_client.post('/api/v1/soporte/tickets/', data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['estado'] == 'ABIERTO'
    
    def test_listar_tickets_cliente(self, authenticated_client):
        cliente = ClienteFactory()
        TicketFactory.create_batch(3, cliente=cliente)
        
        response = authenticated_client.get(f'/api/v1/soporte/tickets/?cliente={cliente.id}')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 3


@pytest.mark.integration
class TestOLTsAPI:
    """Tests para endpoints de OLTs"""
    
    def test_listar_olts(self, authenticated_client):
        ONUFactory.create_batch(2)
        response = authenticated_client.get('/api/v1/olts/onus/')
        assert response.status_code == status.HTTP_200_OK
    
    def test_filtrar_onus_online(self, authenticated_client):
        ONUFactory.create_batch(3, estado='online')
        ONUFactory.create_batch(2, estado='offline')
        
        response = authenticated_client.get('/api/v1/olts/onus/?estado=online')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 3


@pytest.mark.integration
class TestMikroTikAPI:
    """Tests para endpoints de MikroTik"""
    
    def test_listar_routers(self, authenticated_client):
        RouterMikrotikFactory.create_batch(2)
        response = authenticated_client.get('/api/v1/mikrotik/routers/')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 2


@pytest.mark.integration
class TestAuthentication:
    """Tests de autenticación"""
    
    def test_acceso_sin_auth_denegado(self, api_client):
        response = api_client.get('/api/v1/clientes/clientes/')
        assert response.status_code == status.HTTP_401_UNAUTHORIZED
    
    def test_acceso_con_auth_permitido(self, authenticated_client):
        response = authenticated_client.get('/api/v1/clientes/clientes/')
        assert response.status_code == status.HTTP_200_OK
