from rest_framework.routers import DefaultRouter

from .views import AlertaRedViewSet, SondeoRedViewSet

router = DefaultRouter()
router.register('sondeos', SondeoRedViewSet, basename='sondeo')
router.register('alertas', AlertaRedViewSet, basename='alerta')

urlpatterns = router.urls
