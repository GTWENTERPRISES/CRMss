from django.db.models import Q, Sum
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Cliente, Contrato, Servicio
from .serializers import (
    ClienteResumenSerializer,
    ClienteSerializer,
    ContratoSerializer,
    ServicioSerializer,
)


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.prefetch_related('servicios').all()
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['estado']
    search_fields = ['nombre', 'identificacion', 'codigo_pago']
    ordering_fields = ['nombre', 'created_at']

    @action(detail=False, methods=['get'], url_path='consultar-deuda')
    def consultar_deuda(self, request):
        cedula = request.query_params.get('cedula')
        telefono = request.query_params.get('telefono')
        cliente_id = request.query_params.get('cliente_id')

        if not any([cedula, telefono, cliente_id]):
            return Response(
                {'detail': 'Debe indicar cedula, telefono o cliente_id.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if cliente_id:
            filtro = Q(id=cliente_id)
        elif cedula:
            filtro = Q(identificacion=cedula)
        else:
            filtro = Q(telefono=telefono) | Q(telefono_movil=telefono)

        cliente = Cliente.objects.filter(filtro).first()
        if cliente is None:
            return Response(
                {'detail': 'Cliente no encontrado.'},
                status=status.HTTP_404_NOT_FOUND,
            )

        from apps.soporte.utils import detectar_falla_masiva_sector

        from apps.pagos.cobros import facturas_con_saldo

        pendientes = facturas_con_saldo(cliente)
        deuda = sum((saldo for _, saldo in pendientes), 0)
        facturas = [
            {
                'factura_id': str(f.id),
                'numero': f'{f.numero or 0:08d}',
                'mes': f.concepto,
                'monto': float(saldo),
                'fecha_vencimiento': f.fecha_vencimiento.isoformat(),
                'estado': f.estado,
            }
            for f, saldo in pendientes
        ]

        # Detectar falla masiva en el sector del cliente
        falla_info = detectar_falla_masiva_sector(cliente=cliente)
        falla_masiva = falla_info['falla_detectada']

        return Response({
            'status': 'success',
            'cliente': ClienteResumenSerializer(cliente).data,
            'deuda_total': float(deuda),
            'facturas_pendientes': facturas,
            'falla_masiva_sector': falla_masiva,
        })


class ContratoViewSet(viewsets.ModelViewSet):
    queryset = Contrato.objects.select_related('client').all()
    serializer_class = ContratoSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['client', 'estado', 'firma_estado']
    search_fields = ['numero']


class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.select_related('cliente', 'onu', 'plan').all()
    serializer_class = ServicioSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['cliente', 'estado', 'plan', 'onu']
    search_fields = ['cliente__nombre']
