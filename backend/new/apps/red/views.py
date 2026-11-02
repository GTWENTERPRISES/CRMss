"""
Puerta de enlace al servicio interno de red (middleware Node).

Django es el único backend expuesto: el navegador NUNCA habla con el middleware.
Todo lo que toca la red (OLTs por SSH, MikroTik, TR-069, SRI, WhatsApp, portal,
actas, documentos) entra por acá y Django lo reenvía al servicio interno.

    Navegador → Django (/api/v1/red/api/...) → middleware (127.0.0.1:4000/api/...)

La autenticación es la de Django (JWT). Al middleware se le agrega una clave
interna compartida y la identidad de quien pide, para que la auditoría siga
diciendo quién hizo qué.
"""
import requests
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.authentication import JWTAuthentication

# Prefijos que se reenvían SIN sesión de Django. Quien golpea acá no tiene
# usuario del personal: el abonado del portal, Meta con su webhook, la
# integración con su X-API-Key o el login mismo antes de entrar.
# Se comparan por segmentos exactos: "api/integracion" NO habilita
# "api/integracion-admin".
PREFIJOS_PUBLICOS = (
    'api/health',
    'api/licencia',
    'api/general',
    'api/marca',
    'api/portal',
    'api/webhooks',
    'api/integracion',
    # El contrato del CRM y del bot (middleware/src/routes/v1.routes.js): lo
    # autoriza la llave de integración que cada ruta exige con requireApiKey.
    'api/v1',
)

# Cabeceras que no se reenvían: son del salto anterior, no del nuevo.
NO_REENVIAR = {
    'host',
    'authorization',
    'content-length',
    'connection',
    'keep-alive',
    'transfer-encoding',
    'te',
    'trailer',
    'upgrade',
    'proxy-authorization',
    'proxy-connection',
    'accept-encoding',
    # La identidad y la clave interna las pone Django, nunca quien llama: en
    # una ruta pública, un X-Usuario-Id que viniera de afuera llegaría al
    # middleware como si fuera alguien del personal.
    'x-clave-interna',
    'x-usuario-id',
    'x-usuario-email',
}


def es_ruta_publica(ruta):
    return any(ruta == p or ruta.startswith(p + '/') for p in PREFIJOS_PUBLICOS)


@csrf_exempt
def proxy_servicio_red(request, ruta=''):
    """
    Reenvía cualquier método a MIDDLEWARE_INTERNA_URL/<ruta>.

    - Requiere JWT de Django salvo en los prefijos públicos.
    - Agrega X-Clave-Interna (secreto compartido con el middleware).
    - Agrega X-Usuario-Id / X-Usuario-Email de quien tiene la sesión.
    - Pasa el cuerpo crudo y el querystring tal cual, y devuelve la
      respuesta del middleware tal cual (JSON o binario: PDFs, planillas).
    """
    if not es_ruta_publica(ruta):
        usuario = usuario_de_request(request)
        if usuario is None:
            return JsonResponse(
                {
                    'error': 'Falta iniciar sesión para usar el módulo de red',
                    'hint': 'El módulo de red se usa con el token de Django en Authorization: Bearer.',
                },
                status=401,
            )
        id_usuario = str(usuario.id)
        email_usuario = usuario.email or ''
    else:
        id_usuario = None
        email_usuario = None

    destino = (
        getattr(settings, 'MIDDLEWARE_INTERNA_URL', 'http://127.0.0.1:4000')
        .rstrip('/') + '/' + ruta
    )

    # Querystring tal cual llegó: los filtros y los ?descargar=1 no se tocan.
    if request.META.get('QUERY_STRING'):
        destino += '?' + request.META['QUERY_STRING']

    cabeceras = {}
    for nombre, valor in request.headers.items():
        if nombre.lower() not in NO_REENVIAR:
            cabeceras[nombre] = valor

    # La llave de una integración puede venir como `Authorization: Bearer sk_...`
    # (middleware/src/lib/apiKey.js). El token del personal no se reenvía nunca.
    autorizacion = request.headers.get('Authorization', '')
    if id_usuario is None and autorizacion.startswith('Bearer sk_'):
        cabeceras['Authorization'] = autorizacion

    cabeceras['X-Clave-Interna'] = getattr(settings, 'CLAVE_INTERNA_MW', '')
    if id_usuario is not None:
        cabeceras['X-Usuario-Id'] = id_usuario
        cabeceras['X-Usuario-Email'] = email_usuario

    try:
        respuesta = requests.request(
            request.method,
            destino,
            data=request.body or None,
            headers=cabeceras,
            timeout=(10, 300),  # SSH y facturación tardan; 5 minutos de techo.
        )
    except requests.RequestException:
        return JsonResponse(
            {
                'error': 'No se puede contactar al servicio de red (middleware interno)',
                'hint': 'Verifica que esté corriendo: cd middleware && npm run start.',
            },
            status=502,
        )

    salida = HttpResponse(
        content=respuesta.content,
        status=respuesta.status_code,
    )
    salida['Content-Type'] = respuesta.headers.get(
        'Content-Type', 'application/json'
    )
    # El RIDE y las actas se descargan: sin esta cabecera el navegador las
    # abriría en lugar de bajarlas.
    if 'Content-Disposition' in respuesta.headers:
        salida['Content-Disposition'] = respuesta.headers['Content-Disposition']
    return salida


def proxy_integracion(ruta_mw):
    """
    Una ruta del contrato del CRM y del bot (`/api/v1/cliente/consultar-deuda`,
    `/api/v1/pagos/registrar`...) que atiende el middleware con su llave de
    integración, sus permisos y su registro de llamadas.

    Antes Django tenía su propia copia de estas rutas, abierta a cualquiera:
    registraba pagos y mostraba deudas sin pedir nada.
    """
    @csrf_exempt
    def vista(request):
        return proxy_servicio_red(request, ruta_mw)

    vista.__name__ = 'proxy_' + ruta_mw.replace('/', '_').replace('-', '_')
    return vista


def usuario_de_request(request):
    """
    Resuelve el usuario del JWT de Django. Devuelve None si no hay sesión
    válida (y deja que el llamador decida si eso es un error).
    """
    try:
        resultado = JWTAuthentication().authenticate(request)
    except AuthenticationFailed:
        return None
    if resultado is None:
        return None
    return resultado[0]
