from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

from apps.core.views_auth import get_current_user, register_user, change_password
from apps.pagos import endpoints as pagos_endpoints
from apps.soporte import endpoints as soporte_endpoints

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Authentication
    path('api/v1/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/v1/auth/me', get_current_user, name='auth-me'),
    path('api/v1/auth/register', register_user, name='auth-register'),
    path('api/v1/auth/change-password', change_password, name='auth-change-password'),

    # API Documentation (OpenAPI/Swagger)
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    # Endpoints especializados de primer nivel (bd.md sección 5)
    path('api/v1/cliente/consultar-deuda', pagos_endpoints.consultar_deuda, name='consultar-deuda'),
    path('api/v1/ventas/validar-cobertura', soporte_endpoints.validar_cobertura, name='validar-cobertura'),
    path('api/v1/ventas/planes', soporte_endpoints.catalogo_planes, name='catalogo-planes'),
    path('api/v1/ventas/agendar-instalacion', soporte_endpoints.agendar_instalacion, name='agendar-instalacion'),
    path('api/v1/red/diagnostico-ont', soporte_endpoints.diagnostico_ont_endpoint, name='diagnostico-ont'),
    path('api/v1/red/cambiar-wifi', soporte_endpoints.cambiar_wifi, name='cambiar-wifi'),

    # API Endpoints
    path('api/v1/', include('apps.core.urls')),
    path('api/v1/olts/', include('apps.olts.urls')),
    path('api/v1/mikrotik/', include('apps.mikrotik.urls')),
    path('api/v1/clientes/', include('apps.clientes.urls')),
    path('api/v1/facturacion/', include('apps.facturacion.urls')),
    path('api/v1/pagos/', include('apps.pagos.urls')),
    path('api/v1/soporte/', include('apps.soporte.urls')),
    path('api/v1/whatsapp/', include('apps.whatsapp.urls')),
    path('api/v1/nms/', include('apps.nms.urls')),
]
