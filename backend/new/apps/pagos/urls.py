from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import endpoints

router = DefaultRouter()
# Los viewsets se registrarán después de crear los serializers
# router.register(r'pagos', views.PagoViewSet, basename='pago')
# router.register(r'cortes', views.CorteViewSet, basename='corte')

# Montado bajo /api/v1/pagos/ (bd.md sección 5.1)
urlpatterns = [
    path('', include(router.urls)),

    # Endpoints especializados
    path('registrar', endpoints.registrar_pago, name='registrar-pago'),
    path('comprobante', endpoints.verificar_comprobante, name='verificar-comprobante'),
]
