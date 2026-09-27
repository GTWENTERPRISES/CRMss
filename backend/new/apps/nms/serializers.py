from rest_framework import serializers

from .models import AlertaRed, SondeoRed


class SondeoRedSerializer(serializers.ModelSerializer):
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)

    class Meta:
        model = SondeoRed
        fields = [
            'id', 'olt', 'router', 'timestamp', 'estado', 'estado_display',
            'latencia_ms', 'detalle', 'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'timestamp', 'created_at', 'updated_at']


class AlertaRedSerializer(serializers.ModelSerializer):
    tipo_display = serializers.CharField(source='get_tipo_display', read_only=True)
    severidad_display = serializers.CharField(source='get_severidad_display', read_only=True)

    class Meta:
        model = AlertaRed
        fields = [
            'id', 'tipo', 'tipo_display', 'severidad', 'severidad_display',
            'mensaje', 'onu', 'resuelta', 'fecha_resolucion',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'fecha_resolucion']
