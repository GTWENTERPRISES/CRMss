from django.contrib import admin

from .models import FirewallBloqueo, IPAddress, RouterMikrotik


@admin.register(RouterMikrotik)
class RouterMikrotikAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'ip_host', 'modo_api', 'puerto_api', 'activo']
    list_filter = ['modo_api', 'activo', 'usa_https']
    search_fields = ['nombre', 'ip_host']
    readonly_fields = ['password_encrypted']


@admin.register(IPAddress)
class IPAddressAdmin(admin.ModelAdmin):
    list_display = ['ip_address', 'router', 'onu', 'interfaz', 'estado']
    list_filter = ['estado', 'router']
    search_fields = ['ip_address', 'interfaz']


@admin.register(FirewallBloqueo)
class FirewallBloqueoAdmin(admin.ModelAdmin):
    list_display = ['cliente_ip', 'router', 'tipo_accion', 'activo', 'created_at']
    list_filter = ['tipo_accion', 'activo', 'router']
    search_fields = ['cliente_ip', 'mac_address', 'comentario']
    readonly_fields = ['routeros_id']
