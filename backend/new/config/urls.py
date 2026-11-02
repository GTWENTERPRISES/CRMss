from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenBlacklistView,
    TokenRefreshView,
    TokenVerifyView,
)
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from apps.core.serializers_auth import EmailOrUsernameTokenSerializer

class EmailOrUsernameTokenView(APIView):
    """
    POST /api/v1/auth/token/
    Login con email O username + password.
    Compatible con djangoClient.js (formato del frente).
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        serializer = EmailOrUsernameTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data)
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

from apps.core.views_auth import (
    admin_user_collection,
    admin_user_detail,
    change_password,
    get_current_user,
    register_user,
)
from apps.core.views_recuperacion import cambiar_con_codigo, solicitar_codigo, verificar_codigo
from apps.red.views import proxy_integracion

# El contrato del CRM y del bot de WhatsApp: lo atiende el middleware
# (middleware/src/routes/v1.routes.js), que exige la llave de integración de
# Ajustes → Integraciones. Las mismas rutas que usaba la copia vieja de Django.
RUTAS_DE_INTEGRACION = [
    'cliente/consultar-deuda',
    'pagos/registrar',
    'pagos/comprobante',
    'ventas/validar-cobertura',
    'ventas/planes',
    'ventas/agendar-instalacion',
    'soporte/crear-ticket',
    'red/diagnostico-ont',
    'red/cambiar-wifi',
]

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Authentication
    path('api/v1/auth/token/', EmailOrUsernameTokenView.as_view(), name='token_obtain_pair'),
    path('api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    # Cerrar sesión: el refresh queda en la lista negra y ya no renueva nada.
    path('api/v1/auth/token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
    path('api/v1/auth/me', get_current_user, name='auth-me'),
    path('api/v1/auth/register', register_user, name='auth-register'),
    path('api/v1/auth/change-password', change_password, name='auth-change-password'),
    # Recuperación de contraseña con un código al correo (sin sesión).
    path('api/v1/auth/recuperar', solicitar_codigo, name='auth-recuperar'),
    path('api/v1/auth/recuperar/verificar', verificar_codigo, name='auth-recuperar-verificar'),
    path('api/v1/auth/recuperar/cambiar', cambiar_con_codigo, name='auth-recuperar-cambiar'),
    # Administración de credenciales (el middleware las usa con su usuario de
    # servicio, reemplazando a la administración de credenciales).
    path('api/v1/auth/users', admin_user_collection, name='auth-admin-users'),
    path('api/v1/auth/users/<int:user_id>', admin_user_detail, name='auth-admin-user'),

    # API Documentation (OpenAPI/Swagger)
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    # Endpoints especializados de primer nivel (bd.md sección 5)
    *[
        path(f'api/v1/{ruta}', proxy_integracion(f'api/v1/{ruta}'), name=f'integracion-{ruta}')
        for ruta in RUTAS_DE_INTEGRACION
    ],

    # API Endpoints
    #
    # El proxy al servicio de red va ANTES que el include de core: si no, el
    # prefijo api/v1/ de core se traga "red/..." y resuelve a 404 sin probar
    # las rutas de la app.
    path('api/v1/red/', include('apps.red.urls')),
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
