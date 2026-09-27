from rest_framework import serializers

from .models import Factura, PlanVelocidad


class PlanVelocidadSerializer(serializers.ModelSerializer):
    bajada_mbps = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    subida_mbps = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    categoria_display = serializers.CharField(source='get_categoria_display', read_only=True)

    class Meta:
        model = PlanVelocidad
        fields = [
            'id', 'nombre', 'categoria', 'categoria_display',
            'bajada_kbps', 'subida_kbps', 'bajada_mbps', 'subida_mbps',
            'burst_limit', 'precio', 'precio_incluye_iva',
            'traffic_table_index', 'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class FacturaSerializer(serializers.ModelSerializer):
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    cliente_nombre = serializers.CharField(source='cliente.nombre', read_only=True)
    cliente_cedula = serializers.CharField(source='cliente.cedula', read_only=True)
    saldo_pendiente = serializers.DecimalField(
        max_digits=10, decimal_places=2, read_only=True,
    )

    class Meta:
        model = Factura
        fields = [
            'id', 'cliente', 'cliente_nombre', 'cliente_cedula', 'numero',
            'fecha', 'mes', 'subtotal', 'iva', 'total', 'saldo_pendiente',
            'fecha_vencimiento', 'estado', 'estado_display', 'clave_acceso',
            'enviada', 'created_at', 'updated_at',
        ]
        read_only_fields = [
            'id', 'created_at', 'updated_at', 'clave_acceso', 'fecha',
        ]
