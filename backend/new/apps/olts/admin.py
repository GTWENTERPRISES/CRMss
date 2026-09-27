from django.contrib import admin

from .models import OLT, LineProfile, ONU, TipoONT


@admin.register(OLT)
class OLTAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'marca', 'ip_host', 'puerto_ssh', 'activo', 'estado_ultimo_sondeo']
    list_filter = ['marca', 'activo', 'estado_ultimo_sondeo']
    search_fields = ['nombre', 'ip_host']
    readonly_fields = ['password_encrypted', 'enable_password_encrypted', 'ultima_conexion']


@admin.register(TipoONT)
class TipoONTAdmin(admin.ModelAdmin):
    list_display = ['marca', 'modelo', 'puertos_ethernet', 'puertos_fxs', 'wifi']
    list_filter = ['marca', 'wifi']
    search_fields = ['marca', 'modelo']


@admin.register(LineProfile)
class LineProfileAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'olt', 'vlan_id', 'gemport_id', 'profile_id_olt']
    list_filter = ['olt']
    search_fields = ['nombre']


@admin.register(ONU)
class ONUAdmin(admin.ModelAdmin):
    list_display = ['sn', 'nombre_cliente', 'olt', 'posicion', 'estado', 'rx_power_dbm']
    list_filter = ['estado', 'olt']
    search_fields = ['sn', 'nombre_cliente']
    readonly_fields = ['posicion']
