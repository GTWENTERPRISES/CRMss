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
    filterset_fields = ['cliente', 'estado', 'forma_pago', 'acreditado']
    search_fields = ['num_comprobante', 'banco_origen', 'referencia']
    ordering_fields = ['fecha_transaccion', 'monto', 'created_at']
    ordering = ['-fecha_transaccion']


class CorteViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestión de cortes de servicio
    """
    queryset = Corte.objects.all()
    serializer_class = CorteSerializer
    filterset_fields = ['cliente', 'motivo', 'reactivado']
    search_fields = ['cliente__nombre', 'cliente__cedula']
    ordering_fields = ['fecha_corte', 'fecha_reactivacion']
    ordering = ['-fecha_corte']
