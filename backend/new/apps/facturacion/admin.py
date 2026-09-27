from django.contrib import admin

from .models import DetalleFactura, Factura, PlanVelocidad


@admin.register(PlanVelocidad)
class PlanVelocidadAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'categoria', 'bajada_kbps', 'subida_kbps', 'precio']
    list_filter = ['categoria', 'precio_incluye_iva']
    search_fields = ['nombre']


class DetalleFacturaInline(admin.TabularInline):
    model = DetalleFactura
    extra = 1
    readonly_fields = ['subtotal']


@admin.register(Factura)
class FacturaAdmin(admin.ModelAdmin):
    list_display = ['numero', 'cliente', 'mes', 'total', 'estado', 'fecha_vencimiento', 'enviada']
    list_filter = ['estado', 'enviada', 'mes']
    search_fields = ['numero', 'clave_acceso', 'cliente__nombre', 'cliente__cedula']
    readonly_fields = ['xml_sri', 'clave_acceso', 'subtotal', 'iva', 'fecha']
    date_hierarchy = 'fecha'
    inlines = [DetalleFacturaInline]

    fieldsets = (
        ('Información General', {
            'fields': ('cliente', 'numero', 'mes', 'fecha', 'fecha_vencimiento')
        }),
        ('Montos', {
            'fields': ('subtotal', 'iva', 'total')
        }),
        ('Estado', {
            'fields': ('estado', 'enviada')
        }),
        ('SRI', {
            'fields': ('clave_acceso', 'xml_sri'),
            'classes': ('collapse',)
        }),
    )


@admin.register(DetalleFactura)
class DetalleFacturaAdmin(admin.ModelAdmin):
    list_display = ['factura', 'descripcion', 'cantidad', 'precio_unitario', 'subtotal', 'aplica_iva']
    list_filter = ['aplica_iva']
    search_fields = ['factura__numero', 'descripcion']
    readonly_fields = ['subtotal']
