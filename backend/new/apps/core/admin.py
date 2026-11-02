from django.contrib import admin

from .models import AuditLog, Tecnico


@admin.register(Tecnico)
class TecnicoAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'especialidad', 'telefono', 'email', 'activo']
    list_filter = ['activo', 'especialidad']
    search_fields = ['nombre', 'identificacion', 'telefono', 'email']
    list_editable = ['activo']


@admin.register(AuditLog)
class AuditLogAdmin(admin.ModelAdmin):
    list_display = ['created_at', 'categoria', 'accion', 'entidad', 'entidad_id', 'actor_email']
    list_filter = ['accion', 'categoria', 'entidad']
    search_fields = ['entidad', 'descripcion', 'actor_email']
    date_hierarchy = 'created_at'

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False
