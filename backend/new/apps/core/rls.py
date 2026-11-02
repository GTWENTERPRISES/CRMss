"""
Quién ve y quién toca qué en la API de tablas (/api/v1/tables, embeds).

Dos reglas:

1. **Solo se exponen las tablas del dashboard**: las del esquema del dashboard (que es lo que
   el frente y el middleware conocen), sus vistas y los modelos de nuestras
   apps. Lo interno de Django —auth_user con los hashes de las contraseñas,
   django_session, la lista negra de tokens, las tareas de celery— no existe
   para esta API: contesta 404 como cualquier tabla inventada.

2. **Seguridad por fila (RLS)**: las políticas del esquema del dashboard traducidas a SQLite
   (apps/dashboard/politicas_generadas.py, ver apps/dashboard/politicas_rls.py).
   Igual que Postgres:
   - SELECT ve solo las filas que su política deja ver;
   - UPDATE / DELETE solo alcanzan las filas visibles que su política deja
     tocar (las demás quedan como estaban, sin error);
   - INSERT / UPDATE revisan la fila como quedó (WITH CHECK) y, si no pasa, se
     deshace todo con 403;
   - una acción que ninguna política permite se niega con 403.

   No corre para el usuario de servicio del middleware ni fuera de una
   petición (apps/dashboard/contexto.py).
"""
from functools import lru_cache

from django.apps import apps as django_apps
from rest_framework import status
from rest_framework.response import Response

from apps.dashboard import contexto

try:
    from apps.dashboard.politicas_generadas import CONDICIONES, OCULTAS
except ImportError:  # antes del primer `generar_vistas`
    CONDICIONES, OCULTAS = {}, {}

QUE_HACE = {
    'select': 'ver',
    'insert': 'crear',
    'update': 'modificar',
    'update_check': 'dejar así',
    'delete': 'borrar',
}


class Denegado(Exception):
    def __init__(self, tabla, accion):
        super().__init__(f'RLS: {accion} en {tabla}')
        self.tabla = tabla
        self.accion = accion


def respuesta_denegada(tabla, accion):
    mensaje = f'No tienes permiso para {QUE_HACE.get(accion, accion)} esto ({tabla}).'
    return Response({
        'error': mensaje,
        'message': mensaje,
        'hint': 'Si tu trabajo lo necesita, pídele a un administrador el permiso en Ajustes → Gestión de personal.',
        'details': f'new row violates row-level security policy for table "{tabla}"',
        'code': '42501',
    }, status=status.HTTP_403_FORBIDDEN)


# ── Qué tablas existen para la API ───────────────────────────────────────────


@lru_cache(maxsize=1)
def tablas_expuestas():
    nombres = set()
    try:
        from apps.dashboard import funciones_generadas, vistas_generadas
        nombres |= set(funciones_generadas.TABLAS) | set(vistas_generadas.VISTAS)
    except ImportError:
        pass
    for modelo in django_apps.get_models():
        if modelo.__module__.startswith('apps.'):
            nombres.add(modelo._meta.db_table)
    return frozenset(nombres)


def tabla_expuesta(nombre):
    return nombre in tablas_expuestas()


def respuesta_no_existe(nombre):
    return Response({'error': f'Tabla "{nombre}" no existe'}, status=status.HTTP_404_NOT_FOUND)


# ── Condiciones ──────────────────────────────────────────────────────────────


def condicion(tabla, accion):
    """La condición SQLite de la política, o None si no restringe (o no corre)."""
    if not contexto.rls_activa():
        return None
    return CONDICIONES.get(tabla, {}).get(accion)


def negada(tabla, accion):
    """Ninguna política permite la acción: se contesta 403 antes de tocar nada."""
    if accion in ('update', 'delete') and condicion(tabla, 'select') == '0':
        return True
    return condicion(tabla, accion) == '0'


def filtro(tabla, accion, columna='rowid'):
    """
    Lo que se agrega con AND al WHERE de una consulta sobre "tabla" para que
    solo alcance las filas que la política deja (None si no hace falta).

    Para UPDATE y DELETE también cuenta la de lectura: en Postgres no se puede
    tocar una fila que no se ve.
    """
    acciones = (accion,) if accion in ('select', 'insert') else ('select', accion)
    partes = [c for c in (condicion(tabla, a) for a in acciones) if c]
    if not partes:
        return None
    if '0' in partes:
        return '0'
    donde = ' AND '.join(f'({c})' for c in partes)
    return f'"{tabla}".{columna} IN (SELECT {columna} FROM "{tabla}" WHERE {donde})'


def filtrar_queryset(queryset, accion):
    tabla = queryset.model._meta.db_table
    f = filtro(tabla, accion)
    return queryset.extra(where=[f]) if f else queryset


def revisar_queryset(model, pks, accion='insert'):
    """WITH CHECK sobre las filas recién escritas por el ORM."""
    tabla = model._meta.db_table
    c = condicion(tabla, accion)
    if not c or not pks:
        return
    if c == '0' or model.objects.filter(pk__in=list(pks)).extra(where=[f'NOT COALESCE(({c}), 0)']).exists():
        raise Denegado(tabla, accion)


def revisar_filas(cursor, tabla, rowids, accion='insert'):
    """WITH CHECK sobre filas escritas con SQL crudo (por rowid)."""
    c = condicion(tabla, accion)
    rowids = [r for r in rowids if r is not None]
    if not c or not rowids:
        return
    if c == '0':
        raise Denegado(tabla, accion)
    huecos = ', '.join(['%s'] * len(rowids))
    cursor.execute(
        f'SELECT COUNT(*) FROM "{tabla}" WHERE rowid IN ({huecos}) AND NOT COALESCE(({c}), 0)', rowids)
    if cursor.fetchone()[0]:
        raise Denegado(tabla, accion)


def necesita_revision(tabla, accion):
    return bool(condicion(tabla, accion))


# ── Columnas que el personal no lee ──────────────────────────────────────────


def quitar_ocultas(tabla, filas):
    ocultas = OCULTAS.get(tabla)
    if not ocultas or contexto.es_servicio():
        return filas
    for fila in filas:
        if isinstance(fila, dict):
            for c in ocultas:
                fila.pop(c, None)
    return filas
