from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import InstalacionViewSet, TicketComentarioViewSet, TicketViewSet

router = DefaultRouter()
router.register('tickets', TicketViewSet, basename='ticket')
router.register('ticket-comentarios', TicketComentarioViewSet, basename='ticket-comentario')
router.register('instalaciones', InstalacionViewSet, basename='instalacion')

# Montado bajo /api/v1/soporte/ (bd.md sección 5.3)
urlpatterns = [
    path('', include(router.urls)),
    # /api/v1/soporte/crear-ticket lo atiende el middleware con la llave de
    # integración (config/urls.py, RUTAS_DE_INTEGRACION).
]
