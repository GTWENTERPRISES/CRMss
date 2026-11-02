from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import DetalleFactura, Factura, PlanVelocidad
from .serializers import DetalleFacturaSerializer, FacturaSerializer, PlanVelocidadSerializer


class PlanVelocidadViewSet(viewsets.ModelViewSet):
    queryset = PlanVelocidad.objects.all()
    serializer_class = PlanVelocidadSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['categoria', 'tipo_impuesto', 'activo']
    search_fields = ['nombre']
    ordering_fields = ['bajada_kbps', 'precio']

    @action(detail=False, methods=['get'])
    def catalogo(self, request):
        categoria = request.query_params.get('categoria')
        qs = self.get_queryset().filter(activo=True)
        if categoria:
            qs = qs.filter(categoria=categoria)
        planes = [
            {
                'id': str(p.id),
                'nombre': p.nombre,
                'bajada_mbps': p.bajada_mbps,
                'subida_mbps': p.subida_mbps,
                'precio': float(p.precio),
                'precio_incluye_iva': p.tipo_impuesto == 'incluido',
                'tipo_impuesto': p.tipo_impuesto,
                'categoria': p.categoria,
            }
            for p in qs
        ]
        return Response({'status': 'success', 'planes': planes})


class FacturaViewSet(viewsets.ModelViewSet):
    queryset = Factura.objects.select_related('client').all()
    serializer_class = FacturaSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['client', 'anulada', 'tipo', 'origen']
    search_fields = ['cliente_nombre', 'concepto', 'client__nombre', 'client__identificacion']
    ordering_fields = ['fecha_emision', 'fecha_vencimiento', 'total', 'numero']

    @action(detail=True, methods=['post'])
    def anular(self, request, pk=None):
        factura = self.get_object()
        if factura.estado == Factura.Estado.PAGADA:
            return Response(
                {'detail': 'No se puede anular una factura pagada.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        factura.anulada = True
        factura.motivo_anulacion = request.data.get('motivo') or factura.motivo_anulacion
        factura.save(update_fields=['anulada', 'motivo_anulacion', 'updated_at'])
        return Response({'status': 'success', 'estado': factura.estado})

    @action(detail=True, methods=['post'])
    def enviar(self, request, pk=None):
        factura = self.get_object()
        from .tasks import enviar_factura_individual

        try:
            enviar_factura_individual.delay(str(factura.id))
        except Exception as exc:
            return Response({'detail': str(exc)}, status=status.HTTP_503_SERVICE_UNAVAILABLE)
        return Response({'status': 'success', 'encolada': True})


class DetalleFacturaViewSet(viewsets.ModelViewSet):
    queryset = DetalleFactura.objects.select_related('factura', 'servicio').all()
    serializer_class = DetalleFacturaSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['factura', 'servicio', 'aplica_iva']
    search_fields = ['descripcion']
    ordering_fields = ['factura', 'subtotal']
