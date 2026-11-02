import uuid

from django.db import models
from apps.core.fields import por_texto


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


from apps.dashboard.columnas import ColumnasAuditLog, ColumnasTecnico  # noqa: E402


class Tecnico(ColumnasTecnico):
    """Técnico de campo (tabla `tecnicos` del dashboard). `user_id` es su usuario de Django."""

    class Especialidad(models.TextChoices):
        FTTH = 'ftth', 'Fibra'
        WIRELESS = 'wireless', 'Inalámbrico'
        AMBAS = 'ambas', 'Fibra e inalámbrico'

    class Meta(ColumnasTecnico.Meta):
        db_table = 'tecnicos'
        ordering = [por_texto('nombre')]  # nombre va cifrado
        verbose_name = 'Técnico'
        verbose_name_plural = 'Técnicos'

    def __str__(self):
        return self.nombre

    @property
    def usuario(self):
        """El usuario de Django (por `user_id`), o None."""
        from django.contrib.auth import get_user_model

        if not self.user_id or not str(self.user_id).isdigit():
            return None
        return get_user_model().objects.filter(pk=int(self.user_id)).first()


class AuditLog(ColumnasAuditLog):
    """Registro de auditoría (tabla `audit_logs` del dashboard)."""

    class Accion(models.TextChoices):
        CREAR = 'crear', 'Crear'
        MODIFICAR = 'modificar', 'Modificar'
        ELIMINAR = 'eliminar', 'Eliminar'

    class Meta(ColumnasAuditLog.Meta):
        db_table = 'audit_logs'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.accion} {self.entidad} ({self.created_at:%Y-%m-%d %H:%M})'


class CodigoRecuperacion(models.Model):
    """
    Un código de recuperación de contraseña mandado al correo.

    Se guarda solo el hash: quien lea la base no puede usar un código vigente.
    Vence a los 15 minutos, admite 5 intentos y sirve una sola vez; al
    verificarlo se entrega un token firmado con el que se elige la contraseña
    nueva.
    """

    usuario = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='codigos_recuperacion')
    codigo_hash = models.CharField(max_length=128)
    creado_en = models.DateTimeField(auto_now_add=True)
    expira_en = models.DateTimeField()
    intentos = models.PositiveSmallIntegerField(default=0)
    verificado_en = models.DateTimeField(null=True, blank=True)
    usado_en = models.DateTimeField(null=True, blank=True)
    ip = models.CharField(max_length=45, blank=True)

    class Meta:
        db_table = 'codigos_recuperacion'
        ordering = ['-creado_en']
        verbose_name = 'Código de recuperación'
        verbose_name_plural = 'Códigos de recuperación'

    def __str__(self):
        return f'{self.usuario} · {self.creado_en:%Y-%m-%d %H:%M}'
