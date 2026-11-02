"""
Tickets de soporte e instalaciones.

`tickets` e `instalaciones` tienen las columnas de las tablas del dashboard
(apps/dashboard/columnas.py, columnas.py). La numeración de los
tickets (BIGSERIAL) la hace TablaDashboard al guardar.
"""
from django.db import models

from apps.core.fields import EncryptedTextField
from apps.core.models import BaseModel
from apps.dashboard import columnas


class Ticket(columnas.ColumnasTicket):
    """
    Un reclamo de soporte: los datos del abonado copiados al momento del
    reclamo, la parte técnica (FTTH o inalámbrica), la visita, el cierre en
    campo con firma y la llegada del técnico con su ubicación.
    """

    class Tecnologia(models.TextChoices):
        FTTH = 'ftth', 'Fibra'
        WIRELESS = 'wireless', 'Inalámbrico'

    class Prioridad(models.TextChoices):
        ALTA = 'alta', 'Alta'
        MEDIA = 'media', 'Media'
        BAJA = 'baja', 'Baja'

    class Franja(models.TextChoices):
        MANANA = 'manana', 'Mañana'
        TARDE = 'tarde', 'Tarde'
        EXACTA = 'exacta', 'Hora exacta'

    class Estado(models.TextChoices):
        ABIERTO = 'abierto', 'Abierto'
        ASIGNADO = 'asignado', 'Asignado'
        EN_RUTA = 'en_ruta', 'En ruta'
        EN_PROCESO = 'en_proceso', 'En proceso'
        RESUELTO = 'resuelto', 'Resuelto'
        CANCELADO = 'cancelado', 'Cancelado'

    ABIERTOS = (Estado.ABIERTO, Estado.ASIGNADO, Estado.EN_RUTA, Estado.EN_PROCESO)

    # Los tipos son los de web/src/lib/soporte.js (INCIDENCIAS). El bot de
    # WhatsApp todavía manda los nombres viejos en mayúscula: se traducen acá.
    TIPO_DESDE_BOT = {
        'SIN_SERVICIO_LUZ_ROJA': 'fibra_cortada',
        'SIN_SERVICIO': 'sin_internet',
        'LENTITUD': 'lentitud',
        'WIFI': 'otro',
        'FACTURACION': 'otro',
        'OTRO': 'otro',
    }

    class Meta(columnas.ColumnasTicket.Meta):
        db_table = 'tickets'
        ordering = ['-created_at']
        verbose_name = 'Ticket'
        verbose_name_plural = 'Tickets'

    def __str__(self):
        return f'#{self.numero or "—"} {self.nombre} ({self.tipo_incidencia})'

    @property
    def codigo(self):
        """Como lo muestra el dashboard: `LPAD(numero, 6, '0')`."""
        return f'{self.numero:06d}' if self.numero is not None else None

    @classmethod
    def desde_bot(cls, cliente, tipo_incidencia, descripcion='', prioridad=None, adjunto_url=''):
        """
        El reclamo que abre el bot de WhatsApp. Copia los datos de contacto del
        abonado (el ticket los guarda tal como estaban ese día) y traduce los
        valores que el bot todavía manda en mayúscula. La foto que manda el bot
        queda anotada en la descripción.
        """
        tipo = cls.TIPO_DESDE_BOT.get(tipo_incidencia, (tipo_incidencia or 'otro').lower())
        prioridad = (prioridad or cls.Prioridad.MEDIA).lower()
        if prioridad == 'critica':
            prioridad = cls.Prioridad.ALTA
        if prioridad not in cls.Prioridad.values:
            prioridad = cls.Prioridad.MEDIA

        contacto = {}
        if cliente is not None:
            contacto = {
                'identificacion': cliente.identificacion,
                'telefono': cliente.telefono,
                'telefono_whatsapp': cliente.telefono_movil or cliente.telefono,
                'direccion': (cliente.direccion or '')[:300] or None,
                'latitud': cliente.latitud,
                'longitud': cliente.longitud,
            }
        texto = descripcion or ''
        if adjunto_url:
            texto = f'{texto}\nAdjunto: {adjunto_url}'.strip()
        return cls.objects.create(
            client=cliente,
            nombre=cliente.nombre if cliente else 'Sin identificar',
            tipo_incidencia=tipo,
            descripcion=texto or None,
            prioridad=prioridad,
            **contacto,
        )

    def save(self, *args, **kwargs):
        if not self.nombre and self.client_id:
            self.nombre = self.client.nombre
        return super().save(*args, **kwargs)


class TicketComentario(BaseModel):
    """Comentarios internos de un ticket hechos desde Django (no es tabla del dashboard)."""

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


class Instalacion(columnas.ColumnasInstalacion):
    """
    Una orden de instalación (o traslado, reparación, retiro): desde el
    prospecto y la factibilidad hasta el alta en campo con firma, pruebas y
    aprovisionamiento.
    """

    class Estado(models.TextChoices):
        PROSPECTO = 'prospecto', 'Prospecto'
        NUEVA = 'nueva', 'Nueva'
        REVISANDO = 'revisando', 'Revisando'
        LISTA_ASIGNAR = 'lista_asignar', 'Lista para asignar'
        AGENDADA = 'agendada', 'Agendada'
        EN_RUTA = 'en_ruta', 'En ruta'
        EN_CURSO = 'en_curso', 'En curso'
        HECHA = 'hecha', 'Hecha'
        NO_REALIZADA = 'no_realizada', 'No realizada'
        REPROGRAMADA = 'reprogramada', 'Reprogramada'
        CANCELADA = 'cancelada', 'Cancelada'

    class Meta(columnas.ColumnasInstalacion.Meta):
        db_table = 'instalaciones'
        ordering = ['-fecha', '-created_at']
        verbose_name = 'Instalación'
        verbose_name_plural = 'Instalaciones'

    def __str__(self):
        return f'{self.numero or "—"} - {self.nombre}'
