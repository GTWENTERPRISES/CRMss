from rest_framework import serializers

from .models import Ticket, TicketComentario


class TicketComentarioSerializer(serializers.ModelSerializer):
    autor_nombre = serializers.CharField(source='autor.username', read_only=True)

    class Meta:
        model = TicketComentario
        fields = [
            'id', 'ticket', 'autor', 'autor_nombre', 'cuerpo', 'es_interno',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class TicketSerializer(serializers.ModelSerializer):
    tipo_incidencia_display = serializers.CharField(
        source='get_tipo_incidencia_display', read_only=True,
    )
    prioridad_display = serializers.CharField(source='get_prioridad_display', read_only=True)
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    cliente_nombre = serializers.CharField(source='cliente.nombre', read_only=True)
    comentarios = TicketComentarioSerializer(many=True, read_only=True)

    class Meta:
        model = Ticket
        fields = [
            'id', 'cliente', 'cliente_nombre', 'numero', 'tipo_incidencia',
            'tipo_incidencia_display', 'descripcion_bot', 'prioridad',
            'prioridad_display', 'estado', 'estado_display', 'adjunto_url',
            'asignado_a', 'fecha_cierre', 'comentarios',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'numero', 'created_at', 'updated_at', 'fecha_cierre']


class CrearTicketSerializer(serializers.Serializer):
    cliente_id = serializers.UUIDField(required=False)
    tipo_incidencia = serializers.ChoiceField(choices=Ticket.TipoIncidencia.choices)
    descripcion_bot = serializers.CharField(required=False, allow_blank=True)
    prioridad = serializers.ChoiceField(
        choices=Ticket.Prioridad.choices, default=Ticket.Prioridad.MEDIA,
    )
    adjunto_url = serializers.URLField(required=False, allow_blank=True)
