from django.urls import path, re_path
from rest_framework.routers import DefaultRouter

from .views import AuditLogViewSet, TecnicoViewSet
from .views_generic import generic_table_list, generic_table_detail
from .views_vistas_fallback import vista as vista_dashboard
from .views_rpc import (
    execute_rpc,
    rpc_clientes_estadisticas_basicas,
    rpc_clientes_por_estado,
    rpc_resumen_facturacion,
    rpc_top_pagadores,
    rpc_clientes_con_mora,
)
from .views_storage import (
    storage_upload,
    storage_download,
    storage_delete,
    storage_list,
    storage_public_url,
    storage_signed_url,
    storage_signed_download,
    storage_archivo,
)

router = DefaultRouter()
router.register('audit-logs', AuditLogViewSet, basename='audit-log')
router.register('tecnicos', TecnicoViewSet, basename='tecnico')

urlpatterns = [
    # ------------------------------------------------------------------ #
    # Vistas del dashboard (v_*)                                         #
    # ------------------------------------------------------------------ #
    # TODO lo que el dashboard pide como `tables/v_algo` entra por acá: se
    # sirve desde Postgres (donde viven las 130 vistas de las migraciones) y
    # sólo cae en la emulación por ORM cuando la vista no existe en la base
    # activa. Antes cada vista emulada tenía su propio `path()` y el resto caía
    # en un `v_vacia` que devolvía [] — pantallas vacías sin ningún error.
    # Tiene que ir ANTES del handler genérico de tablas.
    re_path(r'^tables/(?P<nombre>v_[A-Za-z0-9_]+)$', vista_dashboard, name='vista-dashboard'),

    # API genérica tipo PostgREST (compatible con el cliente del frente)
    path('tables/<str:table_name>', generic_table_list, name='table-list'),
    path('tables/<str:table_name>/<str:pk>', generic_table_detail, name='table-detail'),

    # RPC - Funciones específicas comunes
    # Van ANTES del ejecutor genérico: si el genérico fuera primero, se las
    # comería y estas seis quedarían como código muerto.
    path('rpc/clientes_estadisticas_basicas', rpc_clientes_estadisticas_basicas, name='rpc-clientes-stats'),
    path('rpc/clientes_por_estado', rpc_clientes_por_estado, name='rpc-clientes-estado'),
    path('rpc/resumen_facturacion', rpc_resumen_facturacion, name='rpc-resumen-facturacion'),
    path('rpc/top_pagadores', rpc_top_pagadores, name='rpc-top-pagadores'),
    path('rpc/clientes_con_mora', rpc_clientes_con_mora, name='rpc-clientes-mora'),

    # RPC - Ejecutor genérico de funciones PostgreSQL
    path('rpc/<str:function_name>', execute_rpc, name='rpc-execute'),

    # Storage - Compatible con el cliente de storage del frente
    path('storage/<str:bucket>', storage_upload, name='storage-upload'),
    path('storage/<str:bucket>/list', storage_list, name='storage-list'),
    # Las firmadas van ANTES de la descarga genérica: su ruta también encaja en
    # `storage/<bucket>/<path:path>`, que si no se las come.
    path('storage/<str:bucket>/signed-url', storage_signed_url, name='storage-signed-url'),
    path('storage/<str:bucket>/signed/<path:path>', storage_signed_download, name='storage-signed-download'),
    path('storage/<str:bucket>/public/<path:path>', storage_public_url, name='storage-public-url'),
    path('storage/<str:bucket>/<path:path>', storage_archivo, name='storage-download'),

] + router.urls

