"""
Quién ve y quién toca cada archivo del storage.

Las políticas de los archivos (las de storage.objects en el esquema del dashboard): el
archivo cuelga de una carpeta con el id de su dueño, y se ve, se sube o se
borra solo si ese dueño se ve. Es la seguridad por fila de la tabla aplicada
al archivo: el documento de un abonado lo abre quien puede abrir al abonado.

    documentos     <cliente_id>/...                → clientes
                   ordenes/<instalacion_id>/...   → instalaciones (documentos de la venta,
                                                     antes de que haya abonado)
    tickets        <ticket_id>/...                → tickets
    instalaciones  <instalacion_id>/...           → instalaciones
    expedientes    <expediente_id>/...            → expedientes
    jornadas       <jornada_id>/...               → jornadas

`tipos-onu` es público para leer (las fotos de los modelos). Los demás buckets
(avatars) solo piden sesión, como antes.

No corre para el usuario de servicio ni fuera de una petición
(apps/dashboard/contexto.py), igual que la RLS de las tablas.
"""
import re

from django.db import connection

from apps.dashboard import contexto

from . import rls

DUEÑOS = {
    'documentos': 'clientes',
    'tickets': 'tickets',
    'instalaciones': 'instalaciones',
    'expedientes': 'expedientes',
    'jornadas': 'jornadas',
}

# Subcarpetas con otro dueño dentro de un bucket: (bucket, primera carpeta) → tabla.
SUBCARPETAS = {
    ('documentos', 'ordenes'): 'instalaciones',
}

_BUCKET = re.compile(r'^[a-z0-9][a-z0-9_-]{0,62}$')


def bucket_valido(bucket):
    return bool(_BUCKET.match(bucket or ''))


def ruta_valida(ruta):
    """
    Sin `..`, sin barra al principio, sin contrabarras: `documentos/../tickets/x`
    no puede salir de su bucket (ni de su carpeta) para saltarse la regla.
    """
    if not ruta or ruta.startswith('/') or '\\' in ruta or '\x00' in ruta:
        return False
    return all(p not in ('', '.', '..') for p in ruta.rstrip('/').split('/'))


def dueño(bucket, ruta):
    """(tabla, id) del dueño del archivo, o None si el bucket no tiene regla."""
    tabla = DUEÑOS.get(bucket)
    if tabla is None:
        return None
    partes = ruta.split('/')
    sub = SUBCARPETAS.get((bucket, partes[0]))
    if sub is not None:
        return sub, (partes[1] if len(partes) > 1 else '')
    return tabla, partes[0]


def _se_ve(tabla, ident):
    """¿La fila existe y la deja ver su política de lectura?"""
    if not ident:
        return False
    clave = ident.replace('-', '').lower()
    filtro = rls.filtro(tabla, 'select')
    sql = f'SELECT 1 FROM "{tabla}" WHERE replace(lower(CAST(id AS TEXT)), \'-\', \'\') = %s'
    if filtro:
        sql += f' AND {filtro}'
    with connection.cursor() as cursor:
        cursor.execute(sql + ' LIMIT 1', [clave])
        return cursor.fetchone() is not None


def puede(bucket, ruta):
    """Si quien hace la petición puede ver, subir o borrar este archivo."""
    if not bucket_valido(bucket) or not ruta_valida(ruta):
        return False
    if not contexto.rls_activa():
        return True
    d = dueño(bucket, ruta)
    if d is None:
        return True
    return _se_ve(*d)
