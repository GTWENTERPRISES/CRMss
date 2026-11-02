from django.contrib import admin

from .models import OLT, LineProfile, OltEscaneo, OltHistorial, ONU, OntEsperando, TipoONT


@admin.register(OLT)
class OLTAdmin(admin.ModelAdmin):
    list_display = ['numero', 'nombre', 'marca', 'ip_host', 'activo', 'estado', 'estado_at']
    list_filter = ['marca', 'activo', 'estado']
    search_fields = ['nombre', 'ip_host']
    readonly_fields = ['password_encrypted', 'enable_password_encrypted', 'snmp_ro_encrypted', 'snmp_rw_encrypted']


@admin.register(TipoONT)
class TipoONTAdmin(admin.ModelAdmin):
    list_display = ['marca', 'modelo', 'puertos_ethernet', 'puertos_fxs', 'wifi', 'pon_tipo']
    list_filter = ['marca', 'wifi']
    search_fields = ['marca', 'modelo']


@admin.register(LineProfile)
class LineProfileAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'olt', 'vlan_id', 'gemport_id', 'profile_id_olt']
    search_fields = ['nombre']


@admin.register(ONU)
class ONUAdmin(admin.ModelAdmin):
    list_display = ['sn', 'nombre_cliente', 'olt', 'posicion', 'estado', 'rx_power_dbm']
    list_filter = ['estado', 'olt']
    search_fields = ['sn', 'nombre_cliente']


admin.site.register(OltHistorial)
admin.site.register(OntEsperando)
admin.site.register(OltEscaneo)
