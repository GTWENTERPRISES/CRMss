from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CorteViewSet, PagoViewSet

router = DefaultRouter()
router.register(r'pagos', PagoViewSet, basename='pago')
router.register(r'cortes', CorteViewSet, basename='corte')

# Montado bajo /api/v1/pagos/ (bd.md sección 5.1)
urlpatterns = [
    path('', include(router.urls)),
    # /api/v1/pagos/registrar y /comprobante los atiende el middleware con la
    # llave de integración (config/urls.py, RUTAS_DE_INTEGRACION).
]
