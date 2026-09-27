from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Factura, PlanVelocidad
from .serializers import FacturaSerializer, PlanVelocidadSerializer


class PlanVelocidadViewSet(viewsets.ModelViewSet):
    queryset = PlanVelocidad.objects.all()
    serializer_class = PlanVelocidadSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['categoria', 'precio_incluye_iva']
    search_fields = ['nombre']
    ordering_fields = ['bajada_kbps', 'precio']

    @action(detail=False, methods=['get'])
    def catalogo(self, request):
        categoria = request.query_params.get('categoria')
        qs = self.get_queryset()
        if categoria:
            qs = qs.filter(categoria=categoria)
        planes = [
            {
                'id': str(p.id),
                'nombre': p.nombre,
                'bajada_mbps': p.bajada_mbps,
                'subida_mbps': p.subida_mbps,
                'precio': float(p.precio),
                'precio_incluye_iva': p.precio_incluye_iva,
                'categoria': p.categoria,
            }
            for p in qs
        ]
        return Response({'status': 'success', 'planes': planes})


class FacturaViewSet(viewsets.ModelViewSet):
    queryset = Factura.objects.select_related('cliente').all()
    serializer_class = FacturaSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['cliente', 'estado', 'mes', 'enviada']
    search_fields = ['numero', 'clave_acceso', 'cliente__nombre', 'cliente__cedula']
    ordering_fields = ['fecha', 'fecha_vencimiento', 'total']

    @action(detail=True, methods=['post'])
    def anular(self, request, pk=None):
        factura = self.get_object()
        if factura.estado == Factura.Estado.PAGADA:
            return Response(
                {'detail': 'No se puede anular una factura pagada.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        factura.estado = Factura.Estado.ANULADA
        factura.save(update_fields=['estado', 'updated_at'])
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
