from django.urls import path
from rest_framework.routers import DefaultRouter

from . import endpoints
from .views import FirewallBloqueoViewSet, IPAddressViewSet, RouterMikrotikViewSet

router = DefaultRouter()
router.register('routers', RouterMikrotikViewSet, basename='router')
router.register('ip-addresses', IPAddressViewSet, basename='ip-address')
router.register('bloqueos', FirewallBloqueoViewSet, basename='bloqueo')

# Endpoints especializados
urlpatterns = [
    path('bloquear-cliente/', endpoints.bloquear_cliente, name='bloquear-cliente'),
    path('desbloquear-cliente/', endpoints.desbloquear_cliente, name='desbloquear-cliente'),
    path('configurar-ancho-banda/', endpoints.configurar_ancho_banda, name='configurar-ancho-banda'),
    path('estadisticas/<uuid:router_id>/', endpoints.obtener_estadisticas_router, name='estadisticas-router'),
    path('asignar-ip/', endpoints.asignar_ip, name='asignar-ip'),
    path('ping/', endpoints.ping_desde_router, name='ping-router'),
] + router.urls
