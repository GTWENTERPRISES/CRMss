from rest_framework import serializers

from .models import Corte, Pago


class PagoSerializer(serializers.ModelSerializer):
    forma_pago_display = serializers.CharField(source='get_forma_pago_display', read_only=True)

    class Meta:
        model = Pago
        fields = '__all__'
        read_only_fields = ['id', 'numero', 'created_at', 'updated_at']


class CorteSerializer(serializers.ModelSerializer):
    motivo_display = serializers.CharField(source='get_motivo_display', read_only=True)
    cliente_nombre = serializers.CharField(source='cliente.nombre', read_only=True)

    class Meta:
        model = Corte
        fields = [
            'id', 'cliente', 'cliente_nombre', 'motivo', 'motivo_display',
            'ejecutado_por', 'fecha_corte', 'reactivado', 'fecha_reactivacion',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'fecha_corte']
