from django.contrib import admin

from .models import Cliente, Contrato, Servicio


@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'identificacion', 'telefono', 'estado', 'ip', 'plan', 'codigo']
    list_filter = ['estado', 'tipo_conexion', 'zona']
    search_fields = ['identificacion', 'nombre', 'telefono', 'ip', 'usuario_ppp', 'codigo_pago']


@admin.register(Contrato)
class ContratoAdmin(admin.ModelAdmin):
    list_display = ['numero', 'client', 'plan', 'fecha_inicio', 'fecha_fin', 'estado', 'firma_estado']
    list_filter = ['estado', 'firma_estado']
    search_fields = ['numero', 'client__nombre', 'client__identificacion']


@admin.register(Servicio)
class ServicioAdmin(admin.ModelAdmin):
    list_display = ['cliente', 'onu', 'plan', 'fecha_alta', 'estado']
    list_filter = ['estado']
    search_fields = ['cliente__nombre', 'cliente__identificacion']
