from rest_framework import serializers

from .models import OLT, LineProfile, ONU, TipoONT


class OLTSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False, allow_blank=True)
    enable_password = serializers.CharField(write_only=True, required=False, allow_blank=True)
    marca_display = serializers.CharField(source='get_marca_display', read_only=True)

    class Meta:
        model = OLT
        fields = [
            'id', 'nombre', 'marca', 'marca_display', 'ip_host', 'puerto_ssh',
            'usuario', 'password', 'enable_password', 'activo',
            'estado_ultimo_sondeo', 'ultima_conexion', 'modelo',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'ultima_conexion', 'estado_ultimo_sondeo']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        enable_password = validated_data.pop('enable_password', None)
        if password is not None:
            validated_data['password_encrypted'] = password
        if enable_password is not None:
            validated_data['enable_password_encrypted'] = enable_password
        return super().create(validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        enable_password = validated_data.pop('enable_password', None)
        if password:
            instance.password_encrypted = password
        if enable_password:
            instance.enable_password_encrypted = enable_password
        return super().update(instance, validated_data)


class TipoONTSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoONT
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']


class LineProfileSerializer(serializers.ModelSerializer):
    olt_nombre = serializers.CharField(source='olt.nombre', read_only=True)

    class Meta:
        model = LineProfile
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']


class ONUSerializer(serializers.ModelSerializer):
    olt_nombre = serializers.CharField(source='olt.nombre', read_only=True)
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    posicion = serializers.CharField(read_only=True)
    potencia_optima = serializers.BooleanField(read_only=True)

    class Meta:
        model = ONU
        fields = [
            'id', 'olt', 'olt_nombre', 'sn', 'nombre_cliente',
            'frame', 'slot', 'puerto', 'onu_index', 'posicion',
            'tipo_ont', 'line_profile', 'plan',
            'estado', 'estado_display', 'rx_power_dbm', 'tx_power_dbm',
            'distancia_m', 'ultima_lectura', 'potencia_optima',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'ultima_lectura']


class DiagnosticoONTSerializer(serializers.Serializer):
    status = serializers.CharField()
    estado_ont = serializers.CharField()
    potencia_rx = serializers.CharField(allow_null=True)
    es_potencia_optima = serializers.BooleanField()
    falla_masiva_sector = serializers.BooleanField()
    resultado = serializers.CharField()
    mensaje = serializers.CharField()
    accion_sugerida = serializers.CharField(allow_null=True)
