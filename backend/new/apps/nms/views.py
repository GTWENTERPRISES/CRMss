from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import AlertaRed, SondeoRed
from .serializers import AlertaRedSerializer, SondeoRedSerializer


class SondeoRedViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SondeoRed.objects.select_related('olt', 'router').all()
    serializer_class = SondeoRedSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['olt', 'router', 'estado']
    ordering_fields = ['timestamp']


class AlertaRedViewSet(viewsets.ModelViewSet):
    queryset = AlertaRed.objects.select_related('onu').all()
    serializer_class = AlertaRedSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['tipo', 'severidad', 'resuelta', 'onu']
    search_fields = ['mensaje']
    ordering_fields = ['created_at', 'severidad']

    @action(detail=True, methods=['post'])
    def resolver(self, request, pk=None):
        from django.utils import timezone

        alerta = self.get_object()
        alerta.resuelta = True
        alerta.fecha_resolucion = timezone.now()
        alerta.save(update_fields=['resuelta', 'fecha_resolucion', 'updated_at'])
        return Response({'status': 'success', 'resuelta': True})

    @action(detail=False, methods=['post'])
    def sondear_ahora(self, request):
        from .tasks import sondear_red

        try:
            sondear_red.delay()
        except Exception as exc:
            return Response({'detail': str(exc)}, status=status.HTTP_503_SERVICE_UNAVAILABLE)
        return Response({'status': 'success', 'encolado': True})
