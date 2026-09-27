from django.db import models

from apps.core.fields import EncryptedCharField, EncryptedTextField
from apps.core.models import BaseModel


class Ticket(BaseModel):
    class TipoIncidencia(models.TextChoices):
        SIN_SERVICIO_LUZ_ROJA = 'SIN_SERVICIO_LUZ_ROJA', 'Sin servicio (luz roja / LOS)'
        SIN_SERVICIO = 'SIN_SERVICIO', 'Sin servicio'
        LENTITUD = 'LENTITUD', 'Lentitud'
        WIFI = 'WIFI', 'Problema de Wi-Fi'
        FACTURACION = 'FACTURACION', 'Facturacion'
        OTRO = 'OTRO', 'Otro'

    class Prioridad(models.TextChoices):
        BAJA = 'BAJA', 'Baja'
        MEDIA = 'MEDIA', 'Media'
        ALTA = 'ALTA', 'Alta'
        CRITICA = 'CRITICA', 'Critica'

    class Estado(models.TextChoices):
        ABIERTO = 'ABIERTO', 'Abierto'
        EN_PROCESO = 'EN_PROCESO', 'En Proceso'
        RESUELTO = 'RESUELTO', 'Resuelto'
        CERRADO = 'CERRADO', 'Cerrado'

    cliente = models.ForeignKey(
        'clientes.Cliente', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='tickets',
    )
    numero = models.CharField(max_length=20, unique=True, db_index=True)
    tipo_incidencia = models.CharField(
        max_length=30, choices=TipoIncidencia.choices, db_index=True,
    )
    descripcion_bot = EncryptedTextField(blank=True)
    prioridad = models.CharField(
        max_length=10, choices=Prioridad.choices,
        default=Prioridad.MEDIA, db_index=True,
    )
    estado = models.CharField(
        max_length=20, choices=Estado.choices,
        default=Estado.ABIERTO, db_index=True,
    )
    adjunto_url = models.URLField(blank=True)
    asignado_a = models.ForeignKey(
        'auth.User', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='tickets_asignados',
    )
    fecha_cierre = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'tickets'
        ordering = ['-created_at']
        verbose_name = 'Ticket'
        verbose_name_plural = 'Tickets'
        indexes = [
            models.Index(fields=['estado', 'prioridad']),
            models.Index(fields=['cliente', 'estado']),
        ]

    def __str__(self):
        return f'{self.numero} - {self.get_tipo_incidencia_display()}'


class TicketComentario(BaseModel):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE, related_name='comentarios')
    autor = models.ForeignKey(
        'auth.User', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='comentarios_ticket',
    )
    cuerpo = EncryptedTextField()
    es_interno = models.BooleanField(default=False)

    class Meta:
        db_table = 'ticket_comentarios'
        ordering = ['created_at']
        verbose_name = 'Comentario de Ticket'
        verbose_name_plural = 'Comentarios de Ticket'

    def __str__(self):
        return f'Comentario en {self.ticket.numero}'


class Instalacion(BaseModel):
    class Estado(models.TextChoices):
        AGENDADA = 'agendada', 'Agendada'
        EN_PROCESO = 'en_proceso', 'En Proceso'
        COMPLETADA = 'completada', 'Completada'
        CANCELADA = 'cancelada', 'Cancelada'

    orden_id = models.CharField(max_length=20, unique=True, db_index=True)
    prospecto_nombre = models.CharField(max_length=150)
    prospecto_cedula = EncryptedCharField(max_length=255, db_index=True)
    prospecto_cedula_hash = models.CharField(max_length=64, blank=True, db_index=True)
    prospecto_telefono = EncryptedCharField(max_length=255, db_index=True)
    prospecto_telefono_hash = models.CharField(max_length=64, blank=True, db_index=True)
    direccion = EncryptedTextField()
    coordenadas_lat = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    coordenadas_lng = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    
    plan = models.ForeignKey(
        'facturacion.PlanVelocidad', on_delete=models.SET_NULL,
        null=True, blank=True, related_name='instalaciones',
    )
    fecha_programada = models.DateField()
    franja_horaria = models.CharField(max_length=50, blank=True)
    estado = models.CharField(
        max_length=20, choices=Estado.choices,
        default=Estado.AGENDADA, db_index=True,
    )
    
    tecnico_asignado = models.ForeignKey(
        'auth.User', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='instalaciones_asignadas',
    )
    cliente_creado = models.ForeignKey(
        'clientes.Cliente', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='instalacion_origen',
    )
    fecha_completada = models.DateTimeField(null=True, blank=True)
    observaciones = models.TextField(blank=True)

    class Meta:
        db_table = 'instalaciones'
        ordering = ['fecha_programada', '-created_at']
        verbose_name = 'Instalación'
        verbose_name_plural = 'Instalaciones'
        indexes = [
            models.Index(fields=['estado', 'fecha_programada']),
            models.Index(fields=['prospecto_cedula']),
        ]

    def __str__(self):
        return f'{self.orden_id} - {self.prospecto_nombre}'

    def save(self, *args, **kwargs):
        from apps.core.fields import get_blind_hash
        if self.prospecto_cedula:
            self.prospecto_cedula_hash = get_blind_hash(self.prospecto_cedula)
        if self.prospecto_telefono:
            self.prospecto_telefono_hash = get_blind_hash(self.prospecto_telefono)
        super().save(*args, **kwargs)
