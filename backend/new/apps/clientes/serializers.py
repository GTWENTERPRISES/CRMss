from rest_framework import serializers

from .models import Cliente, Contrato, Servicio


class ContratoSerializer(serializers.ModelSerializer):
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)

    class Meta:
        model = Contrato
        fields = [
            'id', 'cliente', 'numero', 'fecha_inicio', 'fecha_vencimiento',
            'estado', 'estado_display', 'archivo_url', 'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class ServicioSerializer(serializers.ModelSerializer):
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    plan_nombre = serializers.CharField(source='plan.nombre', read_only=True)
    onu_sn = serializers.CharField(source='onu.sn', read_only=True)

    class Meta:
        model = Servicio
        fields = [
            'id', 'cliente', 'onu', 'onu_sn', 'plan', 'plan_nombre',
            'fecha_alta', 'estado', 'estado_display', 'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class ClienteSerializer(serializers.ModelSerializer):
    estado_servicio_display = serializers.CharField(
        source='get_estado_servicio_display', read_only=True,
    )
    contratos = ContratoSerializer(many=True, read_only=True)
    servicios = ServicioSerializer(many=True, read_only=True)
    deuda_total = serializers.SerializerMethodField()

    class Meta:
        model = Cliente
        fields = [
            'id', 'cedula', 'nombre', 'telefono', 'email', 'direccion',
            'latitud', 'longitud', 'estado_servicio', 'estado_servicio_display',
            'codigo_pago', 'contratos', 'servicios', 'deuda_total',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'codigo_pago']

    def get_deuda_total(self, obj):
        return float(obj.deuda_total())


class ClienteResumenSerializer(serializers.ModelSerializer):
    estado_servicio_display = serializers.CharField(
        source='get_estado_servicio_display', read_only=True,
    )

    class Meta:
        model = Cliente
        fields = [
            'id', 'cedula', 'nombre', 'telefono', 'estado_servicio',
            'estado_servicio_display', 'codigo_pago',
        ]
