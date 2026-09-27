from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import FirewallBloqueo, IPAddress, RouterMikrotik
from .serializers import (
    FirewallBloqueoSerializer,
    IPAddressSerializer,
    RouterMikrotikSerializer,
)


class RouterMikrotikViewSet(viewsets.ModelViewSet):
    queryset = RouterMikrotik.objects.all()
    serializer_class = RouterMikrotikSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['modo_api', 'activo', 'usa_https']
    search_fields = ['nombre', 'ip_host']
    ordering_fields = ['nombre', 'created_at']

    @action(detail=True, methods=['post'])
    def probar_conexion(self, request, pk=None):
        router = self.get_object()
        try:
            from .drivers.api import MikroTikDriver

            with MikroTikDriver(router) as driver:
                identidad = driver.obtener_identidad()
            return Response({'status': 'success', 'identidad': identidad})
        except Exception as exc:
            return Response({'detail': str(exc)}, status=status.HTTP_502_BAD_GATEWAY)


class IPAddressViewSet(viewsets.ModelViewSet):
    queryset = IPAddress.objects.select_related('router', 'onu').all()
    serializer_class = IPAddressSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['router', 'estado', 'onu']
    search_fields = ['ip_address', 'interfaz']


class FirewallBloqueoViewSet(viewsets.ModelViewSet):
    queryset = FirewallBloqueo.objects.select_related('router', 'onu').all()
    serializer_class = FirewallBloqueoSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['router', 'activo', 'tipo_accion', 'onu']
    search_fields = ['cliente_ip', 'mac_address', 'comentario']

    @action(detail=True, methods=['post'])
    def liberar(self, request, pk=None):
        bloqueo = self.get_object()
        try:
            from .drivers.api import MikroTikDriver

            with MikroTikDriver(bloqueo.router) as driver:
                driver.quitar_bloqueo(bloqueo.cliente_ip)
        except Exception as exc:
            return Response({'detail': str(exc)}, status=status.HTTP_502_BAD_GATEWAY)
        bloqueo.activo = False
        bloqueo.save(update_fields=['activo', 'updated_at'])
        return Response({'status': 'success', 'activo': False})
