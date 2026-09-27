from django.db.models import Sum
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.core.fields import get_blind_hash
from .models import Cliente, Contrato, Servicio
from .serializers import (
    ClienteResumenSerializer,
    ClienteSerializer,
    ContratoSerializer,
    ServicioSerializer,
)


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.prefetch_related('contratos', 'servicios').all()
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['estado_servicio']
    search_fields = ['nombre', 'codigo_pago']
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

        filtro = {}
        if cliente_id:
            filtro['id'] = cliente_id
        elif cedula:
            filtro['cedula_hash'] = get_blind_hash(cedula)
        else:
            filtro['telefono_hash'] = get_blind_hash(telefono)

        cliente = Cliente.objects.filter(**filtro).first()
        if cliente is None:
            return Response(
                {'detail': 'Cliente no encontrado.'},
                status=status.HTTP_404_NOT_FOUND,
            )

        from apps.facturacion.models import Factura
        from apps.soporte.utils import detectar_falla_masiva_sector

        pendientes = Factura.objects.filter(
            cliente=cliente,
            estado__in=[Factura.Estado.PENDIENTE, Factura.Estado.VENCIDA],
        ).order_by('fecha_vencimiento')

        deuda = pendientes.aggregate(total=Sum('total'))['total'] or 0
        facturas = [
            {
                'factura_id': str(f.id),
                'numero': f.numero,
                'mes': f.mes,
                'monto': float(f.total),
                'fecha_vencimiento': f.fecha_vencimiento.isoformat(),
                'estado': f.estado,
            }
            for f in pendientes
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
    queryset = Contrato.objects.select_related('cliente').all()
    serializer_class = ContratoSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['cliente', 'estado']
    search_fields = ['numero']


class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.select_related('cliente', 'onu', 'plan').all()
    serializer_class = ServicioSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['cliente', 'estado', 'plan', 'onu']
    search_fields = ['cliente__nombre']
