from django.contrib import admin

from .models import Corte, Pago


@admin.register(Pago)
class PagoAdmin(admin.ModelAdmin):
    list_display = ['numero', 'client', 'monto', 'forma_pago', 'fecha_pago', 'factura', 'anulado']
    list_filter = ['forma_pago', 'anulado', 'es_excedente', 'es_reparto']
    search_fields = ['cliente_nombre', 'client__nombre', 'client__identificacion', 'n_transaccion']
    date_hierarchy = 'fecha_pago'


@admin.register(Corte)
class CorteAdmin(admin.ModelAdmin):
    list_display = ['cliente', 'motivo', 'ejecutado_por', 'fecha_corte', 'reactivado']
    list_filter = ['motivo', 'reactivado']
    search_fields = ['cliente__nombre', 'cliente__identificacion', 'ejecutado_por']
