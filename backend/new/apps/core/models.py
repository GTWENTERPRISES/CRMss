import uuid

from django.db import models


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class UUIDModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        abstract = True


class BaseModel(UUIDModel, TimeStampedModel):
    class Meta:
        abstract = True


class ActivableModel(models.Model):
    activo = models.BooleanField(default=True, db_index=True)

    class Meta:
        abstract = True


class AuditLog(models.Model):
    class Accion(models.TextChoices):
        CREAR = 'CREAR', 'Crear'
        ACTUALIZAR = 'ACTUALIZAR', 'Actualizar'
        ELIMINAR = 'ELIMINAR', 'Eliminar'
        CORTAR = 'CORTAR', 'Cortar Servicio'
        REACTIVAR = 'REACTIVAR', 'Reactivar Servicio'
        PAGO = 'PAGO', 'Registrar Pago'
        LOGIN = 'LOGIN', 'Inicio de Sesion'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    usuario = models.ForeignKey(
        'auth.User', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='audit_logs',
    )
    accion = models.CharField(max_length=20, choices=Accion.choices, db_index=True)
    entidad = models.CharField(max_length=100, db_index=True)
    entidad_id = models.CharField(max_length=64, blank=True)
    detalle = models.TextField(blank=True)
    ip_origen = models.GenericIPAddressField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        db_table = 'audit_logs'
        ordering = ['-created_at']
        indexes = [models.Index(fields=['entidad', 'entidad_id'])]

    def __str__(self):
        return f'{self.accion} {self.entidad} ({self.created_at:%Y-%m-%d %H:%M})'
