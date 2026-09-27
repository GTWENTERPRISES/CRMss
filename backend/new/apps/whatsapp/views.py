from django.conf import settings
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ConversacionWhatsapp, MensajeWhatsapp
from .serializers import ConversacionWhatsappSerializer, MensajeWhatsappSerializer


class ConversacionWhatsappViewSet(viewsets.ModelViewSet):
    queryset = ConversacionWhatsapp.objects.select_related('cliente').prefetch_related('mensajes').all()
    serializer_class = ConversacionWhatsappSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['estado', 'cliente']
    search_fields = ['telefono', 'cliente__nombre']
    ordering_fields = ['ultima_actividad', 'created_at']

    @action(detail=True, methods=['post'])
    def enviar(self, request, pk=None):
        conversacion = self.get_object()
        cuerpo = request.data.get('cuerpo', '')
        if not cuerpo:
            return Response(
                {'detail': 'El campo cuerpo es obligatorio.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        mensaje = MensajeWhatsapp.objects.create(
            conversacion=conversacion,
            direccion=MensajeWhatsapp.Direccion.SALIENTE,
            tipo=MensajeWhatsapp.Tipo.TEXTO,
            cuerpo=cuerpo,
        )
        from .services import WhatsAppService

        try:
            resultado = WhatsAppService().enviar_mensaje(conversacion.telefono, cuerpo)
            mensaje.wa_message_id = str(resultado.get('messages', [{}])[0].get('id', ''))
            mensaje.payload_json = resultado
            mensaje.save(update_fields=['wa_message_id', 'payload_json', 'updated_at'])
        except Exception as exc:
            mensaje.estado = MensajeWhatsapp.Estado.FALLIDO
            mensaje.save(update_fields=['estado', 'updated_at'])
            return Response({'detail': str(exc)}, status=status.HTTP_502_BAD_GATEWAY)
        return Response(MensajeWhatsappSerializer(mensaje).data, status=status.HTTP_201_CREATED)


class MensajeWhatsappViewSet(viewsets.ModelViewSet):
    queryset = MensajeWhatsapp.objects.select_related('conversacion').all()
    serializer_class = MensajeWhatsappSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['conversacion', 'direccion', 'tipo', 'estado']
    search_fields = ['cuerpo', 'wa_message_id']


class WhatsAppWebhookView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def get(self, request):
        mode = request.query_params.get('hub.mode')
        token = request.query_params.get('hub.verify_token')
        challenge = request.query_params.get('hub.challenge', '')
        if mode == 'subscribe' and token == settings.WHATSAPP_VERIFY_TOKEN:
            return Response(int(challenge) if challenge.isdigit() else challenge)
        return Response({'detail': 'Verificacion fallida.'}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        payload = request.data
        for entry in payload.get('entry', []):
            for change in entry.get('changes', []):
                valor = change.get('value', {})
                for msg in valor.get('messages', []):
                    telefono = msg.get('from', '')
                    conversacion, _ = ConversacionWhatsapp.objects.get_or_create(
                        telefono=telefono,
                        defaults={'estado': ConversacionWhatsapp.Estado.ACTIVA},
                    )
                    MensajeWhatsapp.objects.create(
                        conversacion=conversacion,
                        direccion=MensajeWhatsapp.Direccion.ENTRANTE,
                        tipo=MensajeWhatsapp.Tipo.TEXTO,
                        cuerpo=msg.get('text', {}).get('body', ''),
                        wa_message_id=msg.get('id', ''),
                        payload_json=msg,
                    )
        return Response({'status': 'received'})
