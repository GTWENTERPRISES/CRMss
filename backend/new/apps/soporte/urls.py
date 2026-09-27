from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import endpoints
from .views import TicketComentarioViewSet, TicketViewSet

router = DefaultRouter()
router.register('tickets', TicketViewSet, basename='ticket')
router.register('ticket-comentarios', TicketComentarioViewSet, basename='ticket-comentario')

# Montado bajo /api/v1/soporte/ (bd.md sección 5.3)
urlpatterns = [
    path('', include(router.urls)),

    # Endpoint de soporte
    path('crear-ticket', endpoints.crear_ticket, name='crear-ticket'),
]
