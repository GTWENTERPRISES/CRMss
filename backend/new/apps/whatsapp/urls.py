from django.urls import path
from rest_framework.routers import DefaultRouter

from . import endpoints
from .views import (
    ConversacionWhatsappViewSet,
    MensajeWhatsappViewSet,
    WhatsAppWebhookView,
)

router = DefaultRouter()
router.register('conversaciones', ConversacionWhatsappViewSet, basename='conversacion')
router.register('mensajes', MensajeWhatsappViewSet, basename='mensaje')

# Endpoints especializados
urlpatterns = [
    path('webhook/', WhatsAppWebhookView.as_view(), name='whatsapp-webhook'),
    path('enviar-mensaje/', endpoints.enviar_mensaje_directo, name='enviar-mensaje'),
    path('enviar-plantilla/', endpoints.enviar_plantilla, name='enviar-plantilla'),
    path('enviar-documento/', endpoints.enviar_documento, name='enviar-documento'),
    path('enviar-botones/', endpoints.enviar_botones, name='enviar-botones'),
    path('recordatorio-pago/', endpoints.notificar_recordatorio_pago, name='recordatorio-pago'),
    path('notificar-corte/', endpoints.notificar_corte_servicio, name='notificar-corte'),
    path('notificar-reactivacion/', endpoints.notificar_reactivacion, name='notificar-reactivacion'),
] + router.urls
