"""
JWT de simplejwt que además deja el usuario disponible para `auth.uid()` en
las vistas, funciones y disparadores del dashboard (apps/dashboard/contexto.py).
"""
from rest_framework_simplejwt.authentication import JWTAuthentication

from . import contexto


class AutenticacionJWT(JWTAuthentication):
    def authenticate(self, request):
        resultado = super().authenticate(request)
        if resultado is not None:
            contexto.establecer_usuario(resultado[0])
        return resultado
