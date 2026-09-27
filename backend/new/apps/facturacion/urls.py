from rest_framework.routers import DefaultRouter

from .views import FacturaViewSet, PlanVelocidadViewSet

router = DefaultRouter()
router.register('planes', PlanVelocidadViewSet, basename='plan')
router.register('facturas', FacturaViewSet, basename='factura')

urlpatterns = router.urls
