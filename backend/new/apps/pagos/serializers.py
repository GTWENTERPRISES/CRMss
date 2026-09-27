from rest_framework import serializers

from .models import Corte, Pago, PagoFactura


class PagoFacturaSerializer(serializers.ModelSerializer):
    factura_numero = serializers.CharField(source='factura.numero', read_only=True)

    class Meta:
        model = PagoFactura
        fields = ['id', 'pago', 'factura', 'factura_numero', 'monto_aplicado', 'created_at']
        read_only_fields = ['id', 'created_at']


class PagoSerializer(serializers.ModelSerializer):
    forma_pago_display = serializers.CharField(source='get_forma_pago_display', read_only=True)
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    cliente_nombre = serializers.CharField(source='cliente.nombre', read_only=True)

    class Meta:
        model = Pago
        fields = [
            'id', 'cliente', 'cliente_nombre', 'monto', 'forma_pago',
            'forma_pago_display', 'referencia', 'banco_origen', 'num_comprobante',
            'estado', 'estado_display', 'acreditado', 'fecha_transaccion',
            'verificado_por', 'cuenta_destino', 'origen', 'saldo_restante',
            'created_at', 'updated_at',
        ]
        read_only_fields = [
            'id', 'created_at', 'updated_at', 'hash_qr', 'acreditado', 'saldo_restante',
        ]


class RegistrarPagoSerializer(serializers.Serializer):
    cliente_id = serializers.UUIDField()
    factura_id = serializers.UUIDField(required=False)
    monto = serializers.DecimalField(max_digits=10, decimal_places=2)
    banco_origen = serializers.CharField(required=False, allow_blank=True)
    num_comprobante = serializers.CharField(required=False, allow_blank=True)
    hash_qr = serializers.CharField(required=False, allow_blank=True)
    fecha_transaccion = serializers.DateTimeField()
    forma_pago = serializers.ChoiceField(choices=Pago.FormaPago.choices)
    verificado_por = serializers.CharField(required=False, allow_blank=True)
    cuenta_destino = serializers.CharField(required=False, allow_blank=True)
    origen = serializers.CharField(required=False, allow_blank=True)


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
