from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Corte, Pago
from .serializers import CorteSerializer, PagoSerializer


class PagoViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestión de pagos
    """
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer
    filterset_fields = ['client', 'factura', 'forma_pago', 'anulado', 'es_excedente']
    search_fields = ['n_transaccion', 'cliente_nombre', 'notas']
    ordering_fields = ['fecha_pago', 'monto', 'numero', 'created_at']
    ordering = ['-fecha_pago']


class CorteViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestión de cortes de servicio
    """
    queryset = Corte.objects.all()
    serializer_class = CorteSerializer
    filterset_fields = ['cliente', 'motivo', 'reactivado']
    search_fields = ['cliente__nombre', 'cliente__identificacion']
    ordering_fields = ['fecha_corte', 'fecha_reactivacion']
    ordering = ['-fecha_corte']
