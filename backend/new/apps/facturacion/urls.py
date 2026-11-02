from rest_framework.routers import DefaultRouter

from .views import DetalleFacturaViewSet, FacturaViewSet, PlanVelocidadViewSet

router = DefaultRouter()
router.register('planes', PlanVelocidadViewSet, basename='plan')
router.register('facturas', FacturaViewSet, basename='factura')
router.register('detalles-factura', DetalleFacturaViewSet, basename='detalle-factura')

urlpatterns = router.urls
