from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import AuditLogViewSet
from .views_generic import generic_table_list, generic_table_detail
from .views_rpc import (
    execute_rpc,
    rpc_clientes_estadisticas_basicas,
    rpc_clientes_por_estado,
    rpc_resumen_facturacion,
    rpc_racha_de_ventas,
    rpc_top_pagadores,
    rpc_clientes_con_mora,
)
from .views_storage import (
    storage_upload,
    storage_download,
    storage_delete,
    storage_list,
    storage_public_url,
)

router = DefaultRouter()
router.register('audit-logs', AuditLogViewSet, basename='audit-log')

urlpatterns = [
    # API genérica tipo PostgREST (compatible con Supabase)
    path('tables/<str:table_name>', generic_table_list, name='table-list'),
    # <str:pk>, no <int:pk>: los modelos usan CharField (UUID hex de 32 chars)
    # como PK, así que una ruta con <int:pk> nunca resuelve para datos reales.
    path('tables/<str:table_name>/<str:pk>', generic_table_detail, name='table-detail'),
    
    # RPC - Ejecutor genérico de funciones PostgreSQL
    path('rpc/<str:function_name>', execute_rpc, name='rpc-execute'),
    
    # RPC - Funciones específicas comunes
    path('rpc/clientes_estadisticas_basicas', rpc_clientes_estadisticas_basicas, name='rpc-clientes-stats'),
    path('rpc/clientes_por_estado', rpc_clientes_por_estado, name='rpc-clientes-estado'),
    path('rpc/resumen_facturacion', rpc_resumen_facturacion, name='rpc-resumen-facturacion'),
    path('rpc/racha_de_ventas', rpc_racha_de_ventas, name='rpc-racha-ventas'),
    path('rpc/top_pagadores', rpc_top_pagadores, name='rpc-top-pagadores'),
    path('rpc/clientes_con_mora', rpc_clientes_con_mora, name='rpc-clientes-mora'),
    
    # Storage - Compatible con Supabase Storage
    path('storage/<str:bucket>', storage_upload, name='storage-upload'),
    path('storage/<str:bucket>/list', storage_list, name='storage-list'),
    path('storage/<str:bucket>/public/<path:path>', storage_public_url, name='storage-public-url'),
    path('storage/<str:bucket>/<path:path>', storage_download, name='storage-download'),
    
] + router.urls
