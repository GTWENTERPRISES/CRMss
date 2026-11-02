from django.contrib import admin

from .models import FirewallBloqueo, IPAddress, RouterMikrotik


@admin.register(RouterMikrotik)
class RouterMikrotikAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'ip_host', 'modo_api', 'puerto_api', 'activo']
    list_filter = ['modo_api', 'activo', 'usa_https']
    search_fields = ['nombre', 'ip_host']


@admin.register(IPAddress)
class IPAddressAdmin(admin.ModelAdmin):
    list_display = ['ip_address', 'router', 'client', 'interfaz', 'estado', 'origen']
    list_filter = ['estado', 'origen']
    search_fields = ['ip_address', 'interfaz', 'mac_address']


@admin.register(FirewallBloqueo)
class FirewallBloqueoAdmin(admin.ModelAdmin):
    list_display = ['cliente_ip', 'router', 'cliente', 'tipo_accion', 'lista', 'activo', 'created_at']
    list_filter = ['tipo_accion', 'activo']
    search_fields = ['cliente_ip', 'mac_address', 'comentario']
