from rest_framework import serializers

from .models import DetalleFactura, Factura, PlanVelocidad


class PlanVelocidadSerializer(serializers.ModelSerializer):
    bajada_mbps = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    subida_mbps = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = PlanVelocidad
        fields = '__all__'
        read_only_fields = ['id', 'created_at']


class DetalleFacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleFactura
        fields = [
            'id', 'factura', 'servicio', 'descripcion', 'cantidad',
            'precio_unitario', 'subtotal', 'aplica_iva',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'subtotal', 'created_at', 'updated_at']


class FacturaSerializer(serializers.ModelSerializer):
    """La factura con lo que agrega v_facturas: estado, pagado y saldo."""

    cliente_cedula = serializers.CharField(source='client.identificacion', read_only=True, default=None)
    estado = serializers.CharField(read_only=True)
    pagado = serializers.DecimalField(max_digits=12, decimal_places=2, read_only=True)
    saldo_pendiente = serializers.DecimalField(max_digits=12, decimal_places=2, read_only=True)

    class Meta:
        model = Factura
        fields = '__all__'
        read_only_fields = ['id', 'numero', 'created_at', 'updated_at']
