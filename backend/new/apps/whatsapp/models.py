from django.db import models

from apps.core.fields import EncryptedCharField, EncryptedTextField
from apps.core.models import BaseModel


class ConversacionWhatsapp(BaseModel):
    class Estado(models.TextChoices):
        ACTIVA = 'ACTIVA', 'Activa'
        PAUSADA = 'PAUSADA', 'Pausada (atencion humana)'
        CERRADA = 'CERRADA', 'Cerrada'

    telefono = EncryptedCharField(max_length=255, db_index=True)
    telefono_hash = models.CharField(max_length=64, blank=True, db_index=True)
    cliente = models.ForeignKey(
        'clientes.Cliente', on_delete=models.SET_NULL, null=True, blank=True,
        related_name='conversaciones_whatsapp',
    )
    estado = models.CharField(
        max_length=20, choices=Estado.choices, default=Estado.ACTIVA, db_index=True,
    )
    ultima_actividad = models.DateTimeField(auto_now=True, db_index=True)

    class Meta:
        db_table = 'conversaciones_whatsapp'
        ordering = ['-ultima_actividad']
        verbose_name = 'Conversacion WhatsApp'
        verbose_name_plural = 'Conversaciones WhatsApp'
        indexes = [models.Index(fields=['telefono', 'estado'])]

    def __str__(self):
        return f'{self.telefono} ({self.get_estado_display()})'

    def save(self, *args, **kwargs):
        from apps.core.fields import get_blind_hash
        if self.telefono:
            self.telefono_hash = get_blind_hash(self.telefono)
        super().save(*args, **kwargs)


class MensajeWhatsapp(BaseModel):
    class Direccion(models.TextChoices):
        ENTRANTE = 'ENTRANTE', 'Entrante'
        SALIENTE = 'SALIENTE', 'Saliente'

    class Tipo(models.TextChoices):
        TEXTO = 'TEXTO', 'Texto'
        PLANTILLA = 'PLANTILLA', 'Plantilla'
        IMAGEN = 'IMAGEN', 'Imagen'
        DOCUMENTO = 'DOCUMENTO', 'Documento'

    class Estado(models.TextChoices):
        ENVIADO = 'ENVIADO', 'Enviado'
        ENTREGADO = 'ENTREGADO', 'Entregado'
        LEIDO = 'LEIDO', 'Leido'
        FALLIDO = 'FALLIDO', 'Fallido'

    conversacion = models.ForeignKey(
        ConversacionWhatsapp, on_delete=models.CASCADE, related_name='mensajes',
    )
    direccion = models.CharField(max_length=10, choices=Direccion.choices)
    tipo = models.CharField(max_length=20, choices=Tipo.choices, default=Tipo.TEXTO)
    cuerpo = EncryptedTextField(blank=True)
    wa_message_id = models.CharField(max_length=100, blank=True, db_index=True)
    estado = models.CharField(
        max_length=20, choices=Estado.choices, default=Estado.ENVIADO,
    )
    payload_json = models.JSONField(null=True, blank=True)

    class Meta:
        db_table = 'mensajes_whatsapp'
        ordering = ['created_at']
        verbose_name = 'Mensaje WhatsApp'
        verbose_name_plural = 'Mensajes WhatsApp'
        indexes = [models.Index(fields=['conversacion', 'created_at'])]

    def __str__(self):
        return f'{self.get_direccion_display()}: {self.cuerpo[:40]}'
