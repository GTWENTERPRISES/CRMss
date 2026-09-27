"""
Tests para tareas Celery
"""
import pytest
from decimal import Decimal
from unittest.mock import Mock, patch
from .factories import (
    ClienteFactory, FacturaFactory, PagoFactory,
    ONUFactory, OLTFactory, RouterMikrotikFactory
)


@pytest.mark.celery
class TestFacturacionTasks:
    """Tests para tareas de facturación"""
    
    @patch('apps.facturacion.tasks.SRIIntegration')
    def test_generar_facturas_mensuales(self, mock_sri):
        from apps.facturacion.tasks import generar_facturas_mensuales
        
        # Crear clientes activos
        ClienteFactory.create_batch(5, estado_servicio='ACTIVO')
        
        # Ejecutar tarea
        resultado = generar_facturas_mensuales()
        
        assert 'generadas' in resultado
        assert resultado['generadas'] >= 0
    
    @patch('django.core.mail.EmailMessage.send')
    def test_enviar_factura_individual(self, mock_send):
        from apps.facturacion.tasks import enviar_factura_individual
        
        factura = FacturaFactory(cliente__email='test@example.com')
        
        resultado = enviar_factura_individual(str(factura.id))
        
        assert resultado is True
        mock_send.assert_called_once()


@pytest.mark.celery
class TestPagosTasks:
    """Tests para tareas de pagos y cortes"""
    
    @patch('apps.pagos.tasks.Corte')
    def test_ejecutar_cortes_automaticos(self, mock_corte):
        from apps.pagos.tasks import ejecutar_cortes_automaticos
        from apps.facturacion.models import Factura
        from django.utils import timezone
        from datetime import timedelta
        
        # Crear cliente con factura vencida
        cliente = ClienteFactory(estado_servicio='ACTIVO')
        FacturaFactory(
            cliente=cliente,
            estado='PENDIENTE',
            fecha_vencimiento=timezone.now().date() - timedelta(days=10)
        )
        
        # Ejecutar tarea
        resultado = ejecutar_cortes_automaticos()
        
        assert 'cortados' in resultado
    
    @patch('apps.whatsapp.services.WhatsAppService.enviar_recordatorio_pago')
    def test_enviar_recordatorio_whatsapp(self, mock_whatsapp):
        from apps.pagos.tasks import enviar_recordatorio_whatsapp
        
        resultado = enviar_recordatorio_whatsapp(
            '123',
            '593987654321',
            'Juan Pérez',
            '50.00',
            '2024-12-31'
        )
        
        mock_whatsapp.assert_called_once()


@pytest.mark.celery
@pytest.mark.slow
class TestNMSTasks:
    """Tests para tareas de monitoreo NMS"""
    
    @patch('apps.olts.drivers.get_driver')
    def test_sondear_olt(self, mock_driver):
        from apps.nms.tasks import sondear_olt
        
        olt = OLTFactory()
        ONUFactory.create_batch(3, olt=olt)
        
        # Mock del driver
        mock_instance = Mock()
        mock_instance.get_onus.return_value = []
        mock_instance.get_onu_optical_info.return_value = {
            'rx_power': -23.5,
            'tx_power': 2.3,
            'distance': 500
        }
        mock_driver.return_value.__enter__.return_value = mock_instance
        
        resultado = sondear_olt(str(olt.id))
        
        assert resultado is True
    
    @patch('apps.mikrotik.drivers.get_driver')
    def test_sondear_router(self, mock_driver):
        from apps.nms.tasks import sondear_router
        
        router = RouterMikrotikFactory()
        
        # Mock del driver
        mock_instance = Mock()
        mock_instance.obtener_identidad.return_value = [{'name': 'test-router'}]
        mock_instance.obtener_recursos.return_value = [{'cpu-load': '10%'}]
        mock_driver.return_value.__enter__.return_value = mock_instance
        
        resultado = sondear_router(str(router.id))
        
        assert resultado is True
