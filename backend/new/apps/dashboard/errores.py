"""
Errores de la base y usuario de cada petición, para todas las APIs.

- `manejar_excepcion` (EXCEPTION_HANDLER de DRF): cuando un disparador o una
  función del dashboard hace RAISE, SQLite sólo dice "user-defined function
  raised exception". El error verdadero lo guardó el intérprete; acá se
  devuelve ése, con su código de Postgres (23514, P0001...), como lo haría
  PostgREST.
- `LimpiarContexto`: al empezar cada petición no queda nada de la anterior.
"""
from django.db import DatabaseError, IntegrityError
from rest_framework import status
from rest_framework.response import Response

from . import contexto
from .mensajes import humanizar
from .plpgsql import ErrorPlpgsql, _local, limpiar_error, ultimo_error

ESTADO_POR_CODIGO = {'23505': status.HTTP_409_CONFLICT, '23503': status.HTTP_409_CONFLICT}


def respuesta(error):
    """Como PostgREST (message, code, details, hint), con el mensaje técnico traducido."""
    mensaje, sugerencia, detalle = error.mensaje, error.sugerencia, error.detalle
    humano = humanizar(mensaje)
    if humano:
        detalle = mensaje
        mensaje, sugerencia = humano[0], sugerencia or humano[1]
    return Response({
        'error': mensaje,
        'message': mensaje,
        'code': error.codigo,
        'details': detalle,
        'hint': sugerencia,
    }, status=ESTADO_POR_CODIGO.get(error.codigo, status.HTTP_400_BAD_REQUEST))


def manejar_excepcion(exc, context):
    if isinstance(exc, ErrorPlpgsql):
        return respuesta(exc)
    if isinstance(exc, DatabaseError):
        real = ultimo_error()
        if real is not None and 'user-defined function raised exception' in str(exc):
            limpiar_error()
            return respuesta(real)
        if isinstance(exc, IntegrityError):
            from apps.core.views_generic import error_de_integridad
            return error_de_integridad(exc)
    from rest_framework.views import exception_handler
    return exception_handler(exc, context)


class LimpiarContexto:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        contexto.limpiar()
        _local.error = None
        if getattr(request, 'user', None) is not None and request.user.is_authenticated:
            contexto.establecer_usuario(request.user)
        try:
            return self.get_response(request)
        finally:
            # El hilo atiende después a otro: no se lleva el usuario (ni su
            # exención de RLS) a la petición siguiente.
            contexto.limpiar()
