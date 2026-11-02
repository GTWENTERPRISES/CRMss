from django.contrib import admin

from .models import DetalleFactura, Factura, PlanVelocidad


@admin.register(PlanVelocidad)
class PlanVelocidadAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'categoria', 'bajada_kbps', 'subida_kbps', 'precio', 'activo']
    list_filter = ['categoria', 'tipo_impuesto', 'activo']
    search_fields = ['nombre', 'codigo_facturacion']


class DetalleFacturaInline(admin.TabularInline):
    model = DetalleFactura
    extra = 0
    readonly_fields = ['subtotal']


@admin.register(Factura)
class FacturaAdmin(admin.ModelAdmin):
    list_display = ['numero', 'client', 'concepto', 'total', 'fecha_emision', 'fecha_vencimiento', 'anulada']
    list_filter = ['anulada', 'tipo', 'origen']
    search_fields = ['cliente_nombre', 'client__nombre', 'client__identificacion']
    date_hierarchy = 'fecha_emision'
    inlines = [DetalleFacturaInline]


@admin.register(DetalleFactura)
class DetalleFacturaAdmin(admin.ModelAdmin):
    list_display = ['factura', 'descripcion', 'cantidad', 'precio_unitario', 'subtotal']
    search_fields = ['descripcion']
    readonly_fields = ['subtotal']
