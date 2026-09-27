from rest_framework.routers import DefaultRouter

from .views import ClienteViewSet, ContratoViewSet, ServicioViewSet

router = DefaultRouter()
router.register('clientes', ClienteViewSet, basename='cliente')
router.register('contratos', ContratoViewSet, basename='contrato')
router.register('servicios', ServicioViewSet, basename='servicio')

urlpatterns = router.urls
