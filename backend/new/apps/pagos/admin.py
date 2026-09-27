from django.contrib import admin

from .models import Corte, Pago, PagoFactura


class PagoFacturaInline(admin.TabularInline):
    model = PagoFactura
    extra = 1
    readonly_fields = ['created_at']


@admin.register(Pago)
class PagoAdmin(admin.ModelAdmin):
    list_display = ['cliente', 'monto', 'forma_pago', 'estado', 'acreditado', 'fecha_transaccion']
    list_filter = ['forma_pago', 'estado', 'acreditado', 'origen']
    search_fields = ['cliente__nombre', 'cliente__cedula', 'num_comprobante', 'banco_origen']
    readonly_fields = ['hash_qr', 'created_at']
    date_hierarchy = 'fecha_transaccion'
    inlines = [PagoFacturaInline]

    fieldsets = (
        ('Información del Pago', {
            'fields': ('cliente', 'monto', 'forma_pago', 'fecha_transaccion')
        }),
        ('Detalles de Transferencia', {
            'fields': ('banco_origen', 'num_comprobante', 'referencia', 'cuenta_destino', 'hash_qr'),
            'classes': ('collapse',)
        }),
        ('Estado', {
            'fields': ('estado', 'acreditado', 'verificado_por', 'origen', 'saldo_restante')
        }),
    )


@admin.register(Corte)
class CorteAdmin(admin.ModelAdmin):
    list_display = ['cliente', 'motivo', 'fecha_corte', 'reactivado', 'fecha_reactivacion', 'ejecutado_por']
    list_filter = ['motivo', 'reactivado']
    search_fields = ['cliente__nombre', 'cliente__cedula', 'ejecutado_por']
    readonly_fields = ['fecha_corte', 'fecha_reactivacion']
    date_hierarchy = 'fecha_corte'
