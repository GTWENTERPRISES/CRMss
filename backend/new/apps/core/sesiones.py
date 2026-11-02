"""
Cortar las sesiones de alguien.

Con la lista negra de simplejwt cada refresh token emitido queda anotado
(OutstandingToken). Revocarlos todos es lo que hace que cambiar la contraseña
—o desactivar a alguien— eche también a quien tenía la sesión abierta en otro
lado: sin esto, un refresh robado seguía sirviendo una semana.

El access token no se puede revocar (no se consulta la base para validarlo),
por eso dura poco (SIMPLE_JWT en config/settings.py).
"""
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken, OutstandingToken
from rest_framework_simplejwt.tokens import RefreshToken


def revocar_sesiones(usuario):
    """Pone en la lista negra todos los refresh vigentes del usuario. Devuelve cuántos."""
    pendientes = OutstandingToken.objects.filter(user=usuario, blacklistedtoken__isnull=True)
    n = 0
    for token in pendientes:
        BlacklistedToken.objects.get_or_create(token=token)
        n += 1
    return n


def sesion_nueva(usuario):
    """Un par de tokens nuevo, para que quien cambió su contraseña siga adentro."""
    refresh = RefreshToken.for_user(usuario)
    return {'access': str(refresh.access_token), 'refresh': str(refresh)}
