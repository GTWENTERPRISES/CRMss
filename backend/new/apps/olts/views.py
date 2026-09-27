from django.db.models import Q
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import OLT, LineProfile, ONU, TipoONT
from .serializers import (
    LineProfileSerializer,
    OLTSerializer,
    ONUSerializer,
    TipoONTSerializer,
)


class OLTViewSet(viewsets.ModelViewSet):
    queryset = OLT.objects.all()
    serializer_class = OLTSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['marca', 'activo', 'estado_ultimo_sondeo']
    search_fields = ['nombre', 'ip_host', 'modelo']
    ordering_fields = ['nombre', 'created_at']

    @action(detail=True, methods=['post'])
    def sondear(self, request, pk=None):
        olt = self.get_object()
        from apps.nms.tasks import sondear_olt
        try:
            sondear_olt(olt)
        except Exception as exc:
            return Response({'detail': str(exc)}, status=status.HTTP_502_BAD_GATEWAY)
        return Response({'status': 'success', 'estado': olt.estado_ultimo_sondeo})


class TipoONTViewSet(viewsets.ModelViewSet):
    queryset = TipoONT.objects.all()
    serializer_class = TipoONTSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['marca', 'wifi']
    search_fields = ['marca', 'modelo']


class LineProfileViewSet(viewsets.ModelViewSet):
    queryset = LineProfile.objects.select_related('olt').all()
    serializer_class = LineProfileSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['olt', 'vlan_id']
    search_fields = ['nombre']


class ONUViewSet(viewsets.ModelViewSet):
    queryset = ONU.objects.select_related('olt', 'tipo_ont', 'line_profile', 'plan').all()
    serializer_class = ONUSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['olt', 'estado', 'puerto', 'line_profile', 'plan']
    search_fields = ['sn', 'nombre_cliente']
    ordering_fields = ['sn', 'ultima_lectura', 'created_at']


class DiagnosticoONTView(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        cliente_id = request.query_params.get('cliente_id')
        cedula = request.query_params.get('cedula')
        if not cliente_id and not cedula:
            return Response(
                {'detail': 'Debe indicar cliente_id o cedula.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        from apps.clientes.models import Cliente

        filtro = Q(id=cliente_id) if cliente_id else Q(cedula=cedula)
        cliente = Cliente.objects.filter(filtro).first()
        if cliente is None:
            return Response({'detail': 'Cliente no encontrado.'}, status=status.HTTP_404_NOT_FOUND)

        onu = (
            ONU.objects.filter(servicios__cliente=cliente)
            .select_related('olt')
            .first()
        )
        if onu is None:
            return Response({
                'status': 'success',
                'estado_ont': 'NO_ASIGNADA',
                'potencia_rx': None,
                'es_potencia_optima': False,
                'falla_masiva_sector': False,
                'resultado': 'sin_ont',
                'mensaje': 'No tienes una ONT registrada en nuestro sistema.',
                'accion_sugerida': 'contactar_soporte',
            })

        rx = onu.rx_power_dbm
        optima = onu.potencia_optima or False
        return Response({
            'status': 'success',
            'estado_ont': onu.estado.upper(),
            'potencia_rx': f'{rx} dBm' if rx is not None else None,
            'es_potencia_optima': bool(optima),
            'falla_masiva_sector': False,
            'resultado': 'todo_ok' if (onu.estado == ONU.Estado.ONLINE and optima) else 'revisar',
            'mensaje': (
                'De nuestro lado tu conexion esta bien. Si sigues sin servicio, '
                'reinicia tu equipo.'
                if onu.estado == ONU.Estado.ONLINE and optima
                else 'Detectamos una novedad en tu conexion. Un tecnico la revisara.'
            ),
            'accion_sugerida': 'reiniciar' if onu.estado == ONU.Estado.ONLINE else 'contactar_soporte',
        })
