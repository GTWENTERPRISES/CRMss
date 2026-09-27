from django.contrib import admin

from .models import Cliente, Contrato, Servicio


class ContratoInline(admin.TabularInline):
    model = Contrato
    extra = 0


class ServicioInline(admin.TabularInline):
    model = Servicio
    extra = 0
    autocomplete_fields = ['onu', 'plan']


@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'cedula', 'telefono', 'estado_servicio', 'codigo_pago']
    list_filter = ['estado_servicio']
    search_fields = ['cedula', 'nombre', 'telefono', 'email', 'codigo_pago']
    inlines = [ContratoInline, ServicioInline]


@admin.register(Contrato)
class ContratoAdmin(admin.ModelAdmin):
    list_display = ['numero', 'cliente', 'fecha_inicio', 'fecha_vencimiento', 'estado']
    list_filter = ['estado']
    search_fields = ['numero', 'cliente__nombre', 'cliente__cedula']


@admin.register(Servicio)
class ServicioAdmin(admin.ModelAdmin):
    list_display = ['cliente', 'onu', 'plan', 'fecha_alta', 'estado']
    list_filter = ['estado', 'plan']
    search_fields = ['cliente__nombre', 'cliente__cedula', 'onu__sn']
