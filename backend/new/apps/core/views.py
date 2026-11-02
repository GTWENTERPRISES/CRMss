from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import AuditLog, Tecnico
from .permissions import EsAdministrador
from .serializers import AuditLogSerializer, TecnicoSerializer


class TecnicoViewSet(viewsets.ModelViewSet):
    queryset = Tecnico.objects.all()
    serializer_class = TecnicoSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['activo', 'especialidad', 'user_id']
    search_fields = ['nombre', 'identificacion', 'telefono', 'email']
    ordering_fields = ['nombre', 'created_at']


class AuditLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AuditLog.objects.all()
    serializer_class = AuditLogSerializer
    permission_classes = [IsAuthenticated, EsAdministrador]
    filterset_fields = ['accion', 'categoria', 'entidad', 'actor_id']
    search_fields = ['entidad', 'descripcion', 'actor_email']
    ordering_fields = ['created_at']
