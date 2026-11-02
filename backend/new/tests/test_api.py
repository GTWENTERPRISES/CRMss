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

    def test_listar_clientes(self, servicio_jwt):
        ClienteFactory.create_batch(5)
        response = servicio_jwt.get('/api/v1/clientes/clientes/')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 5

    def test_crear_cliente(self, servicio_jwt):
        data = {
            'identificacion': '0987654321',
            'nombre': 'Juan',
            'email': 'juan@example.com',
            'telefono': '0987654321',
            'direccion': 'Av. Principal 123',
            'estado': 'activo'
        }
        response = servicio_jwt.post('/api/v1/clientes/clientes/', data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['nombre'] == 'Juan'

    def test_detalle_cliente(self, servicio_jwt):
        cliente = ClienteFactory()
        response = servicio_jwt.get(f'/api/v1/clientes/clientes/{cliente.id}/')
        assert response.status_code == status.HTTP_200_OK
        assert response.data['nombre'] == cliente.nombre


@pytest.mark.integration
class TestFacturacionAPI:
    """Tests para endpoints de facturación"""

    def test_listar_facturas(self, servicio_jwt):
        FacturaFactory.create_batch(3)
        response = servicio_jwt.get('/api/v1/facturacion/facturas/')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 3

    def test_filtrar_facturas_pendientes(self, servicio_jwt):
        FacturaFactory.create_batch(2)
        FacturaFactory.create_batch(3, anulada=True)

        response = servicio_jwt.get('/api/v1/facturacion/facturas/?anulada=false')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 2
        assert {f['estado'] for f in response.data['results']} == {'pendiente'}


@pytest.mark.integration
class TestSoporteAPI:
    """Tests para endpoints de soporte"""

    def test_crear_ticket(self, servicio_jwt):
        cliente = ClienteFactory()
        data = {
            'client': str(cliente.id),
            'nombre': cliente.nombre,
            'tipo_incidencia': 'sin_internet',
            'descripcion': 'El servicio está caído desde ayer',
            'prioridad': 'alta'
        }
        response = servicio_jwt.post('/api/v1/soporte/tickets/', data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['estado'] == 'abierto'
        assert response.data['numero'] is not None

    def test_listar_tickets_cliente(self, servicio_jwt):
        cliente = ClienteFactory()
        TicketFactory.create_batch(3, client=cliente)

        response = servicio_jwt.get(f'/api/v1/soporte/tickets/?client={cliente.id}')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 3


@pytest.mark.integration
class TestOLTsAPI:
    """Tests para endpoints de OLTs"""

    def test_listar_olts(self, servicio_jwt):
        ONUFactory.create_batch(2)
        response = servicio_jwt.get('/api/v1/olts/onus/')
        assert response.status_code == status.HTTP_200_OK

    def test_filtrar_onus_online(self, servicio_jwt):
        ONUFactory.create_batch(3, estado='online')
        ONUFactory.create_batch(2, estado='offline')

        response = servicio_jwt.get('/api/v1/olts/onus/?estado=online')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 3


@pytest.mark.integration
class TestMikroTikAPI:
    """Tests para endpoints de MikroTik"""

    def test_listar_routers(self, servicio_jwt):
        RouterMikrotikFactory.create_batch(2)
        response = servicio_jwt.get('/api/v1/mikrotik/routers/')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 2


@pytest.mark.integration
class TestAuthentication:
    """Tests de autenticación"""

    def test_acceso_sin_auth_denegado(self, api_client):
        response = api_client.get('/api/v1/clientes/clientes/')
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_acceso_con_auth_permitido(self, servicio_jwt):
        response = servicio_jwt.get('/api/v1/clientes/clientes/')
        assert response.status_code == status.HTTP_200_OK
