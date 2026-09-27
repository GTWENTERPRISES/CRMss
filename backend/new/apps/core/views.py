from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import AuditLog
from .permissions import EsAdministrador
from .serializers import AuditLogSerializer


class AuditLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AuditLog.objects.select_related('usuario').all()
    serializer_class = AuditLogSerializer
    permission_classes = [IsAuthenticated, EsAdministrador]
    filterset_fields = ['accion', 'entidad', 'usuario']
    search_fields = ['entidad', 'entidad_id', 'detalle']
    ordering_fields = ['created_at']
