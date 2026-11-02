from django.contrib import admin

from .models import Instalacion, Ticket, TicketComentario


class TicketComentarioInline(admin.TabularInline):
    model = TicketComentario
    extra = 0


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ['numero', 'nombre', 'tipo_incidencia', 'prioridad', 'estado', 'tecnico', 'fecha_visita']
    list_filter = ['estado', 'prioridad', 'tipo_incidencia', 'tecnologia']
    search_fields = ['nombre', 'identificacion', 'descripcion', 'client__nombre']
    inlines = [TicketComentarioInline]
    date_hierarchy = 'created_at'


@admin.register(TicketComentario)
class TicketComentarioAdmin(admin.ModelAdmin):
    list_display = ['ticket', 'autor', 'es_interno', 'created_at']
    list_filter = ['es_interno']


@admin.register(Instalacion)
class InstalacionAdmin(admin.ModelAdmin):
    list_display = ['numero', 'nombre', 'identificacion', 'tipo', 'estado', 'fecha', 'franja', 'tecnico_id']
    list_filter = ['estado', 'tipo', 'tecnologia']
    search_fields = ['nombre', 'identificacion', 'telefono', 'direccion']
    date_hierarchy = 'fecha'
