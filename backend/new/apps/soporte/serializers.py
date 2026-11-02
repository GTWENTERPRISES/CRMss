from rest_framework import serializers

from .models import Instalacion, Ticket, TicketComentario


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
    codigo = serializers.CharField(read_only=True)
    prioridad_display = serializers.CharField(source='get_prioridad_display', read_only=True)
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    comentarios = TicketComentarioSerializer(many=True, read_only=True)

    class Meta:
        model = Ticket
        fields = '__all__'
        read_only_fields = ['id', 'numero', 'created_at', 'updated_at']


class InstalacionSerializer(serializers.ModelSerializer):
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    plan_nombre = serializers.CharField(source='plan.nombre', read_only=True, default=None)

    class Meta:
        model = Instalacion
        fields = '__all__'
        read_only_fields = ['id', 'numero', 'created_at', 'updated_at']


class CrearTicketSerializer(serializers.Serializer):
    cliente_id = serializers.UUIDField(required=False)
    # Acepta los nombres viejos del bot (SIN_SERVICIO...) y los del dashboard.
    tipo_incidencia = serializers.CharField(max_length=40)
    descripcion_bot = serializers.CharField(required=False, allow_blank=True)
    prioridad = serializers.CharField(max_length=10, required=False)
    adjunto_url = serializers.URLField(required=False, allow_blank=True)
