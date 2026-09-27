from django.contrib import admin

from .models import Instalacion, Ticket, TicketComentario


class TicketComentarioInline(admin.TabularInline):
    model = TicketComentario
    extra = 0


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ['numero', 'cliente', 'tipo_incidencia', 'prioridad', 'estado', 'asignado_a']
    list_filter = ['estado', 'prioridad', 'tipo_incidencia']
    search_fields = ['numero', 'descripcion_bot', 'cliente__nombre', 'cliente__cedula']
    inlines = [TicketComentarioInline]
    date_hierarchy = 'created_at'


@admin.register(TicketComentario)
class TicketComentarioAdmin(admin.ModelAdmin):
    list_display = ['ticket', 'autor', 'es_interno', 'created_at']
    list_filter = ['es_interno']
    search_fields = ['cuerpo', 'ticket__numero']


@admin.register(Instalacion)
class InstalacionAdmin(admin.ModelAdmin):
    list_display = [
        'orden_id', 'prospecto_nombre', 'prospecto_cedula', 'prospecto_telefono',
        'fecha_programada', 'estado', 'tecnico_asignado'
    ]
    list_filter = ['estado', 'fecha_programada', 'tecnico_asignado']
    search_fields = ['orden_id', 'prospecto_nombre', 'prospecto_cedula', 'prospecto_telefono']
    readonly_fields = ['orden_id', 'cliente_creado', 'fecha_completada']
    date_hierarchy = 'fecha_programada'

    fieldsets = (
        ('Información del Prospecto', {
            'fields': ('orden_id', 'prospecto_nombre', 'prospecto_cedula', 'prospecto_telefono', 'direccion')
        }),
        ('Ubicación', {
            'fields': ('coordenadas_lat', 'coordenadas_lng')
        }),
        ('Plan y Programación', {
            'fields': ('plan', 'fecha_programada', 'franja_horaria')
        }),
        ('Asignación y Estado', {
            'fields': ('estado', 'tecnico_asignado', 'cliente_creado', 'fecha_completada')
        }),
        ('Observaciones', {
            'fields': ('observaciones',),
            'classes': ('collapse',)
        }),
    )
