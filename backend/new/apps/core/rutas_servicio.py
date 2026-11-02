"""
Las APIs REST de cada módulo (/api/v1/clientes/, /olts/, /mikrotik/, ...),
solo para el usuario de servicio.

El dashboard y el middleware trabajan con /api/v1/tables, /rpc, /storage y el
proxy de red; estas rutas no las usa ninguno de los dos. Pero quedaban abiertas
a cualquier sesión y por fuera de la seguridad por fila: alguien del personal
podía leer la cartera completa por /api/v1/clientes/clientes/, cortar a un
abonado en el MikroTik o mandar un WhatsApp a nombre de la empresa. Ahora las
atiende solo un superusuario (el de servicio, o el dueño desde un script).
"""
from django.http import JsonResponse
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.authentication import JWTAuthentication

PREFIJOS = (
    '/api/v1/clientes/',
    '/api/v1/olts/',
    '/api/v1/mikrotik/',
    '/api/v1/facturacion/',
    '/api/v1/pagos/',
    '/api/v1/soporte/',
    '/api/v1/whatsapp/',
    '/api/v1/nms/',
    '/api/v1/tecnicos',
    '/api/v1/audit-logs',
)

# Lo que entra sin sesión del personal y se autoriza de otra forma.
EXCEPCIONES = (
    '/api/v1/whatsapp/webhook/',   # Meta: va al middleware, que verifica la firma
    '/api/v1/pagos/registrar',     # contrato del CRM/bot: llave de integración
    '/api/v1/pagos/comprobante',
    '/api/v1/soporte/crear-ticket',
)


def _usuario(request):
    try:
        resultado = JWTAuthentication().authenticate(request)
    except AuthenticationFailed:
        return None
    if resultado is not None:
        return resultado[0]
    usuario = getattr(request, 'user', None)
    return usuario if usuario is not None and usuario.is_authenticated else None


class SoloServicio:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        ruta = request.path
        if ruta.startswith(PREFIJOS) and not any(ruta == e or ruta.startswith(e.rstrip('/') + '/') for e in EXCEPCIONES):
            usuario = _usuario(request)
            if usuario is None:
                return JsonResponse({'error': 'Falta iniciar sesión'}, status=401)
            if not usuario.is_superuser:
                return JsonResponse({
                    'error': 'Esta API es del servicio interno.',
                    'hint': 'El personal trabaja desde el dashboard; los sistemas externos, con una llave de '
                            'Ajustes → Integraciones.',
                }, status=403)
        return self.get_response(request)
