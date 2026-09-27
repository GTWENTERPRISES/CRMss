from rest_framework import serializers

from .models import ConversacionWhatsapp, MensajeWhatsapp


class MensajeWhatsappSerializer(serializers.ModelSerializer):
    direccion_display = serializers.CharField(source='get_direccion_display', read_only=True)
    tipo_display = serializers.CharField(source='get_tipo_display', read_only=True)
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)

    class Meta:
        model = MensajeWhatsapp
        fields = [
            'id', 'conversacion', 'direccion', 'direccion_display', 'tipo',
            'tipo_display', 'cuerpo', 'wa_message_id', 'estado',
            'estado_display', 'payload_json', 'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'wa_message_id']


class ConversacionWhatsappSerializer(serializers.ModelSerializer):
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    cliente_nombre = serializers.CharField(source='cliente.nombre', read_only=True)
    mensajes = MensajeWhatsappSerializer(many=True, read_only=True)

    class Meta:
        model = ConversacionWhatsapp
        fields = [
            'id', 'telefono', 'cliente', 'cliente_nombre', 'estado',
            'estado_display', 'ultima_actividad', 'mensajes',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'ultima_actividad']
