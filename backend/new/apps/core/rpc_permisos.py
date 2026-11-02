"""
Quién puede llamar a las funciones que NO son SECURITY DEFINER.

Las SECURITY DEFINER revisan los permisos adentro (tiene_permiso_comision...)
o solo devuelven lo que la seguridad por fila deja ver. Las otras —SECURITY
INVOKER— en Postgres se apoyaban en la RLS de las tablas que tocan; el
intérprete de SQLite no la aplica adentro de una función. En vez de reescribir
cada consulta de cada función, la RPC pide antes el permiso de lo que la
función hace:

- las que llama el frente, el permiso de esa acción (cobrar → pagos.registrar);
- las que solo usa el middleware (webhooks, secuenciales del SRI, sondeo de
  nodos, incidencias), solo el usuario de servicio.

Una función nueva SECURITY INVOKER que escriba tablas tiene que sumarse acá: la
prueba tests/test_seguridad_api.py::TestRpc falla si queda alguna sin decidir.
"""
from django.db import DatabaseError, connection
from rest_framework import status
from rest_framework.response import Response

from apps.dashboard import contexto

# función → permisos (alcanza con uno).
PERMISOS = {
    'aplicar_cobro': ('pagos.registrar',),
    'aplicar_saldo_a_favor': ('pagos.registrar',),
    'cobertura_cercana': ('ventas.cobertura', 'ventas.prospectos', 'instalaciones.ver', 'instalaciones.crear',
                          'instalaciones.backoffice'),
    # Totales de toda la cartera (tarjetas del panel y reporte por router).
    'panel_facturacion': ('facturacion.ver', 'pagos.ver', 'finanzas.reportes'),
    'reporte_crecimiento_routers': ('reportes.ver', 'finanzas.reportes'),
}

SOLO_SERVICIO = frozenset({
    'abrir_incidencia', 'resolver_incidencia', 'anotar_entrante_whatsapp', 'confirmar_pago_reportado',
    'rechazar_pago_reportado', 'registrar_chequeo_nodo', 'sri_liberar_secuencial', 'sri_next_secuencial',
    'sumar_consumo',
})

# Solo leen datos de configuración o normalizan un texto: cualquiera con sesión.
LIBRES = frozenset({'documento_de_identidad', 'parametros_tecnicos', 'distancia_m', 'hoy_isp'})


def _legajo(usuario):
    """(activo, permisos) del legajo, o None si el usuario no tiene legajo."""
    import json
    try:
        with connection.cursor() as cursor:
            cursor.execute('SELECT activo, permisos FROM usuarios_sistema WHERE auth_id = %s LIMIT 1',
                           [str(usuario.pk)])
            fila = cursor.fetchone()
    except DatabaseError:
        return None
    if fila is None:
        return None
    permisos = fila[1]
    if isinstance(permisos, str):
        try:
            permisos = json.loads(permisos)
        except ValueError:
            permisos = []
    return bool(fila[0]), list(permisos or [])


def _negada(mensaje):
    return Response({'error': mensaje, 'message': mensaje, 'code': '42501',
                     'hint': 'Pídele el permiso a un administrador en Ajustes → Gestión de personal.'},
                    status=status.HTTP_403_FORBIDDEN)


def rpc_negada(usuario, nombre):
    """Una respuesta 403 si este usuario no puede llamar a esta función; None si puede."""
    if contexto.es_servicio():
        return None
    if nombre in SOLO_SERVICIO:
        return _negada('Esta función la usa solo el servicio interno.')
    exigidos = PERMISOS.get(nombre)
    if not exigidos:
        return None
    legajo = _legajo(usuario)
    if legajo is None:
        # Sin legajo no se bloquea a nadie: es lo mismo que hace la seguridad
        # por fila (cartera_completa) para una instalación sin personal cargado.
        return None
    activo, permisos = legajo
    if activo and ('*' in permisos or any(p in permisos for p in exigidos)):
        return None
    return _negada('No tienes permiso para hacer esto.')
