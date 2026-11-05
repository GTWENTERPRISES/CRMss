"""
Recuperación de contraseña con un código al correo.

    POST /api/v1/auth/recuperar            {email}            → manda el código
    POST /api/v1/auth/recuperar/verificar  {email, codigo}    → {token}
    POST /api/v1/auth/recuperar/cambiar    {token, password}  → contraseña nueva

Las tres son públicas (quien olvidó la clave no tiene sesión), así que:

- `recuperar` contesta lo mismo exista o no el correo: no sirve para averiguar
  quién tiene cuenta;
- el código es de 6 dígitos, vence a los 15 minutos, admite 5 intentos y se
  guarda solo su hash; pedir uno nuevo anula los anteriores;
- verificar el código no cambia nada: entrega un token firmado que vence a los
  10 minutos y sirve una sola vez para elegir la contraseña nueva, que pasa por
  los validadores de Django;
- cada ruta tiene su propio límite por IP (ver DEFAULT_THROTTLE_RATES).
"""
import logging
import secrets
from datetime import timedelta

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth.password_validation import validate_password
from django.core import signing
from django.core.exceptions import ValidationError
from django.db import connection, transaction
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes, throttle_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle

from .correo import enviar_correo
from .models import CodigoRecuperacion

logger = logging.getLogger(__name__)

VIGENCIA_CODIGO = timedelta(minutes=15)
VIGENCIA_TOKEN = 10 * 60          # segundos
MAX_INTENTOS = 5
ESPERA_REENVIO = timedelta(seconds=60)
SAL_TOKEN = 'recuperar-clave'

RESPUESTA_GENERICA = {
    'ok': True,
    'mensaje': 'Si el correo está registrado, te llegó un código de 6 dígitos. Revisa también la carpeta de spam.',
}
CODIGO_INVALIDO = {
    'error': 'El código no es correcto o ya venció.',
    'hint': 'Revisa el último correo que te llegó o pide un código nuevo.',
}


class LimiteSolicitud(AnonRateThrottle):
    scope = 'recuperar_clave'


class LimiteVerificacion(AnonRateThrottle):
    scope = 'verificar_codigo'


def _ip(request):
    reenviada = (request.META.get('HTTP_X_FORWARDED_FOR') or '').split(',')[0].strip()
    return (reenviada or request.META.get('REMOTE_ADDR') or '')[:45]


def _usuario_por_correo(email):
    email = (email or '').strip()
    if not email:
        return None
    return get_user_model().objects.filter(email__iexact=email, is_active=True).order_by('id').first()


def _codigo_vigente(usuario):
    return (CodigoRecuperacion.objects
            .filter(usuario=usuario, usado_en__isnull=True, expira_en__gt=timezone.now())
            .order_by('-creado_en').first())


def _nombre_del_sistema():
    """El nombre que muestra el login (Ajustes → General), o el de settings."""
    try:
        with connection.cursor() as cursor:
            cursor.execute('SELECT nombre_sistema FROM config_general LIMIT 1')
            fila = cursor.fetchone()
    except Exception:
        fila = None
    return (fila and fila[0]) or getattr(settings, 'NOMBRE_SISTEMA', '') or 'HomeLink'


def _texto_del_correo(codigo, minutos):
    nombre = _nombre_del_sistema()
    texto = (
        f'Tu código para recuperar la contraseña de {nombre} es:\n\n'
        f'    {codigo}\n\n'
        f'Vence en {minutos} minutos. Si no lo pediste, ignora este correo: '
        'tu contraseña no cambia.'
    )
    html = (
        '<div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.6;color:#0f172a">'
        f'<p>Tu código para recuperar la contraseña de {nombre} es:</p>'
        f'<p style="font-size:28px;font-weight:700;letter-spacing:6px;margin:16px 0">{codigo}</p>'
        f'<p>Vence en {minutos} minutos. Si no lo pediste, ignora este correo: tu contraseña no cambia.</p>'
        '</div>'
    )
    return texto, html


@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
@throttle_classes([LimiteSolicitud])
def solicitar_codigo(request):
    usuario = _usuario_por_correo(request.data.get('email'))
    if usuario is None:
        return Response(RESPUESTA_GENERICA)

    ultimo = CodigoRecuperacion.objects.filter(usuario=usuario).order_by('-creado_en').first()
    if ultimo and ultimo.creado_en > timezone.now() - ESPERA_REENVIO:
        # Uno recién mandado: no se llena la casilla (ni se avisa que existe).
        return Response(RESPUESTA_GENERICA)

    codigo = f'{secrets.randbelow(10 ** 6):06d}'
    with transaction.atomic():
        CodigoRecuperacion.objects.filter(usuario=usuario, usado_en__isnull=True).update(usado_en=timezone.now())
        registro = CodigoRecuperacion.objects.create(
            usuario=usuario, codigo_hash=make_password(codigo),
            expira_en=timezone.now() + VIGENCIA_CODIGO, ip=_ip(request),
        )

    texto, html = _texto_del_correo(codigo, int(VIGENCIA_CODIGO.total_seconds() // 60))
    try:
        enviar_correo(usuario.email, 'Tu código para recuperar la contraseña', texto, html)
    except Exception:
        logger.exception('No se pudo mandar el código de recuperación a %s', usuario.email)
        registro.delete()
        return Response({
            'error': 'No se pudo enviar el correo en este momento.',
            'hint': 'Prueba de nuevo en unos minutos. Si sigue fallando, avísale al administrador: '
                    'puede faltar configurar el servidor de correo.',
        }, status=status.HTTP_503_SERVICE_UNAVAILABLE)
    return Response(RESPUESTA_GENERICA)


@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
@throttle_classes([LimiteVerificacion])
def verificar_codigo(request):
    codigo = str(request.data.get('codigo') or '').strip()
    usuario = _usuario_por_correo(request.data.get('email'))
    registro = _codigo_vigente(usuario) if usuario else None
    if registro is None or not codigo.isdigit() or len(codigo) != 6:
        return Response(CODIGO_INVALIDO, status=status.HTTP_400_BAD_REQUEST)

    registro.intentos += 1
    if not check_password(codigo, registro.codigo_hash):
        if registro.intentos >= MAX_INTENTOS:
            registro.usado_en = timezone.now()
            registro.save(update_fields=['intentos', 'usado_en'])
            return Response({
                'error': 'Demasiados intentos con este código.',
                'hint': 'Pide un código nuevo.',
            }, status=status.HTTP_400_BAD_REQUEST)
        registro.save(update_fields=['intentos'])
        return Response(CODIGO_INVALIDO, status=status.HTTP_400_BAD_REQUEST)

    registro.verificado_en = timezone.now()
    registro.save(update_fields=['intentos', 'verificado_en'])
    token = signing.dumps({'codigo': registro.pk, 'usuario': usuario.pk}, salt=SAL_TOKEN)
    return Response({'ok': True, 'token': token})


@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
@throttle_classes([LimiteVerificacion])
def cambiar_con_codigo(request):
    password = request.data.get('password') or ''
    try:
        datos = signing.loads(request.data.get('token') or '', salt=SAL_TOKEN, max_age=VIGENCIA_TOKEN)
    except signing.BadSignature:
        return Response({
            'error': 'El permiso para cambiar la contraseña venció.',
            'hint': 'Pide un código nuevo y vuelve a intentarlo.',
        }, status=status.HTTP_400_BAD_REQUEST)

    with transaction.atomic():
        registro = (CodigoRecuperacion.objects.select_for_update()
                    .filter(pk=datos.get('codigo'), usuario_id=datos.get('usuario'),
                            verificado_en__isnull=False, usado_en__isnull=True)
                    .select_related('usuario').first())
        if registro is None or not registro.usuario.is_active:
            return Response({
                'error': 'Este código ya se usó.',
                'hint': 'Pide un código nuevo si todavía necesitas cambiar la contraseña.',
            }, status=status.HTTP_400_BAD_REQUEST)
        usuario = registro.usuario
        try:
            validate_password(password, user=usuario)
        except ValidationError as e:
            return Response({'error': ' '.join(e.messages)}, status=status.HTTP_400_BAD_REQUEST)
        usuario.set_password(password)
        usuario.save(update_fields=['password'])
        ahora = timezone.now()
        CodigoRecuperacion.objects.filter(usuario=usuario, usado_en__isnull=True).update(usado_en=ahora)
        # Si recupera la clave porque se la robaron, quien la tenía queda afuera.
        from .sesiones import revocar_sesiones
        revocar_sesiones(usuario)

    return Response({'ok': True, 'mensaje': 'Listo: ya puedes entrar con tu contraseña nueva.'})
