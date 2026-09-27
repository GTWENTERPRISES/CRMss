from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.core.utils import generar_codigo_por_tipo

from .models import Ticket, TicketComentario
from .serializers import (
    CrearTicketSerializer,
    TicketComentarioSerializer,
    TicketSerializer,
)


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.select_related('cliente', 'asignado_a').prefetch_related('comentarios').all()
    serializer_class = TicketSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['cliente', 'estado', 'prioridad', 'tipo_incidencia', 'asignado_a']
    search_fields = ['numero', 'descripcion_bot', 'cliente__nombre', 'cliente__cedula']
    ordering_fields = ['created_at', 'prioridad', 'estado']

    @action(detail=False, methods=['post'], url_path='crear-ticket')
    def crear_ticket(self, request):
        entrada = CrearTicketSerializer(data=request.data)
        entrada.is_valid(raise_exception=True)
        datos = entrada.validated_data

        cliente = None
        cliente_id = datos.get('cliente_id')
        if cliente_id:
            from apps.clientes.models import Cliente

            cliente = Cliente.objects.filter(id=cliente_id).first()
            if cliente is None:
                return Response(
                    {'detail': 'Cliente no encontrado.'},
                    status=status.HTTP_404_NOT_FOUND,
                )

        ticket = Ticket.objects.create(
            cliente=cliente,
            numero=generar_codigo_por_tipo('TICKET'),
            tipo_incidencia=datos['tipo_incidencia'],
            descripcion_bot=datos.get('descripcion_bot', ''),
            prioridad=datos.get('prioridad', Ticket.Prioridad.MEDIA),
            adjunto_url=datos.get('adjunto_url', ''),
        )

        return Response(
            {
                'status': 'success',
                'ticket_id': ticket.numero,
                'ticket_uuid': str(ticket.id),
                'mensaje': 'Ticket creado exitosamente.',
            },
            status=status.HTTP_201_CREATED,
        )

    @action(detail=True, methods=['post'])
    def cerrar(self, request, pk=None):
        from django.utils import timezone

        ticket = self.get_object()
        ticket.estado = Ticket.Estado.CERRADO
        ticket.fecha_cierre = timezone.now()
        ticket.save(update_fields=['estado', 'fecha_cierre', 'updated_at'])
        return Response({'status': 'success', 'estado': ticket.estado})


class TicketComentarioViewSet(viewsets.ModelViewSet):
    queryset = TicketComentario.objects.select_related('ticket', 'autor').all()
    serializer_class = TicketComentarioSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['ticket', 'autor', 'es_interno']
    search_fields = ['cuerpo']
