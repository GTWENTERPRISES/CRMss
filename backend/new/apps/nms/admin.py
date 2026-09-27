from django.contrib import admin

from .models import AlertaRed, SondeoRed


@admin.register(SondeoRed)
class SondeoRedAdmin(admin.ModelAdmin):
    list_display = ['olt', 'router', 'estado', 'latencia_ms', 'timestamp']
    list_filter = ['estado']
    search_fields = ['detalle']
    date_hierarchy = 'timestamp'


@admin.register(AlertaRed)
class AlertaRedAdmin(admin.ModelAdmin):
    list_display = ['tipo', 'severidad', 'onu', 'resuelta', 'created_at']
    list_filter = ['tipo', 'severidad', 'resuelta']
    search_fields = ['mensaje']
    date_hierarchy = 'created_at'
