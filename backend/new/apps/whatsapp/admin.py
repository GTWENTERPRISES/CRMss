from django.contrib import admin

from .models import ConversacionWhatsapp, MensajeWhatsapp


class MensajeWhatsappInline(admin.TabularInline):
    model = MensajeWhatsapp
    extra = 0
    readonly_fields = ['wa_message_id', 'payload_json']


@admin.register(ConversacionWhatsapp)
class ConversacionWhatsappAdmin(admin.ModelAdmin):
    list_display = ['telefono', 'cliente', 'estado', 'ultima_actividad']
    list_filter = ['estado']
    search_fields = ['telefono', 'cliente__nombre']
    inlines = [MensajeWhatsappInline]


@admin.register(MensajeWhatsapp)
class MensajeWhatsappAdmin(admin.ModelAdmin):
    list_display = ['conversacion', 'direccion', 'tipo', 'estado', 'created_at']
    list_filter = ['direccion', 'tipo', 'estado']
    search_fields = ['cuerpo', 'wa_message_id']
