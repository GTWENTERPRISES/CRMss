"""
Quién hace la petición, para las vistas que filtran por usuario.

En Postgres las vistas preguntaban `auth.uid()` (el usuario del JWT).
En SQLite esa función la provee `sqlite_funciones.auth_uid`, que lee
lo que se guardó acá al empezar cada petición a las APIs del dashboard.

También decide si corre la seguridad por fila (`rls_activa()`, ver
apps/dashboard/politicas_rls.py). No corre:

- sin usuario: un comando, una tarea, el arranque. Postgres tampoco la aplicaba
  a quien se conectaba como dueño de la base;
- para el usuario de servicio del middleware (superusuario de Django sin legajo
  en usuarios_sistema);
- adentro de una función SECURITY DEFINER, que corre con los permisos del dueño.
"""
import threading
from contextlib import contextmanager

_local = threading.local()


def establecer_usuario(usuario):
    """Guarda el id de Django del usuario (como texto, igual que usuarios_sistema.auth_id)."""
    uid = getattr(usuario, 'pk', None) if usuario is not None else None
    autenticado = uid is not None and getattr(usuario, 'is_authenticated', False)
    nuevo = str(uid) if autenticado else None
    if nuevo != getattr(_local, 'usuario_id', None):
        _local.memo = {}
    _local.usuario_id = nuevo
    _local.usuario_email = getattr(usuario, 'email', None) if autenticado else None
    _local.servicio = bool(autenticado and getattr(usuario, 'is_superuser', False) and not _tiene_legajo(nuevo))


def _tiene_legajo(uid):
    from django.db import DatabaseError, connection
    try:
        with connection.cursor() as cursor:
            cursor.execute('SELECT 1 FROM usuarios_sistema WHERE auth_id = %s LIMIT 1', [uid])
            return cursor.fetchone() is not None
    except DatabaseError:
        # Sin la tabla (una base a medio migrar) no hay personal que proteger
        # de sí mismo: el superusuario es el dueño.
        return False


def limpiar():
    """Al empezar y al terminar cada petición: un hilo no hereda al usuario anterior."""
    _local.usuario_id = None
    _local.usuario_email = None
    _local.servicio = False
    _local.definidor = 0
    _local.memo = {}


def usuario_id():
    return getattr(_local, 'usuario_id', None)


def usuario_email():
    return getattr(_local, 'usuario_email', None)


def es_servicio():
    return getattr(_local, 'servicio', False)


def rls_activa():
    return bool(usuario_id()) and not es_servicio() and not getattr(_local, 'definidor', 0)


@contextmanager
def como_definidor():
    """Mientras corre una función SECURITY DEFINER."""
    _local.definidor = getattr(_local, 'definidor', 0) + 1
    try:
        yield
    finally:
        _local.definidor -= 1


def memo():
    """Resultados de las funciones que no cambian en la petición (mi_legajo_id()...)."""
    if not hasattr(_local, 'memo'):
        _local.memo = {}
    return _local.memo
