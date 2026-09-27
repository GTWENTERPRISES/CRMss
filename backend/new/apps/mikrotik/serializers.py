from rest_framework import serializers

from .models import FirewallBloqueo, IPAddress, RouterMikrotik


class RouterMikrotikSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False, allow_blank=True)
    modo_api_display = serializers.CharField(source='get_modo_api_display', read_only=True)

    class Meta:
        model = RouterMikrotik
        fields = [
            'id', 'nombre', 'ip_host', 'modo_api', 'modo_api_display',
            'puerto_api', 'usa_https', 'usuario', 'password', 'activo',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        if password is not None:
            validated_data['password_encrypted'] = password
        return super().create(validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        if password:
            instance.password_encrypted = password
        return super().update(instance, validated_data)


class IPAddressSerializer(serializers.ModelSerializer):
    router_nombre = serializers.CharField(source='router.nombre', read_only=True)
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)

    class Meta:
        model = IPAddress
        fields = [
            'id', 'router', 'router_nombre', 'onu', 'ip_address', 'netmask',
            'interfaz', 'estado', 'estado_display', 'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class FirewallBloqueoSerializer(serializers.ModelSerializer):
    router_nombre = serializers.CharField(source='router.nombre', read_only=True)
    tipo_accion_display = serializers.CharField(source='get_tipo_accion_display', read_only=True)

    class Meta:
        model = FirewallBloqueo
        fields = [
            'id', 'router', 'router_nombre', 'onu', 'cliente_ip', 'mac_address',
            'tipo_accion', 'tipo_accion_display', 'comentario', 'routeros_id',
            'activo', 'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'routeros_id']
