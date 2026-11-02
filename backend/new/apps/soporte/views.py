from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from .models import Instalacion, Ticket, TicketComentario
from .serializers import (
    CrearTicketSerializer,
    InstalacionSerializer,
    TicketComentarioSerializer,
    TicketSerializer,
)


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.select_related('client', 'tecnico').prefetch_related('comentarios').all()
    serializer_class = TicketSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['client', 'estado', 'prioridad', 'tipo_incidencia', 'tecnico']
    search_fields = ['nombre', 'identificacion', 'descripcion', 'client__nombre']
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

        ticket = Ticket.desde_bot(
            cliente,
            datos['tipo_incidencia'],
            datos.get('descripcion_bot', ''),
            datos.get('prioridad'),
            datos.get('adjunto_url', ''),
        )

        return Response(
            {
                'status': 'success',
                'ticket_id': ticket.codigo,
                'ticket_uuid': str(ticket.id),
                'mensaje': 'Ticket creado exitosamente.',
            },
            status=status.HTTP_201_CREATED,
        )

    @action(detail=True, methods=['post'])
    def cerrar(self, request, pk=None):
        from django.utils import timezone

        ticket = self.get_object()
        ticket.estado = Ticket.Estado.RESUELTO
        ticket.cerrado_at = timezone.now()
        ticket.save(update_fields=['estado', 'cerrado_at', 'updated_at'])
        return Response({'status': 'success', 'estado': ticket.estado})


class TicketComentarioViewSet(viewsets.ModelViewSet):
    queryset = TicketComentario.objects.select_related('ticket', 'autor').all()
    serializer_class = TicketComentarioSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['ticket', 'autor', 'es_interno']
    search_fields = ['cuerpo']


class InstalacionViewSet(viewsets.ModelViewSet):
    queryset = Instalacion.objects.select_related('plan', 'client').all()
    serializer_class = InstalacionSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['estado', 'tipo', 'tecnico_id', 'plan', 'fecha', 'client']
    search_fields = ['nombre', 'identificacion', 'telefono', 'notas', 'observaciones']
    ordering_fields = ['fecha', 'numero', 'created_at', 'estado']
