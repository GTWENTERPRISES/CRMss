"""
RPC del dashboard: `POST /api/v1/rpc/<función>` (como `django.rpc(...)`).

Las funciones del esquema del dashboard (aplicar_cobro, finalizar_alta_instalacion,
generar_comisiones... son 135) las ejecuta el intérprete de PL/pgSQL
(apps/dashboard/plpgsql_motor.py) sobre la misma base, dentro de una
transacción: si la función hace RAISE, se deshace todo lo que llegó a escribir,
igual que en Postgres.

Con la base en Postgres (si algún día se vuelve), se llama a la función de la
base directamente.

Además hay cinco RPC auxiliares que no son del esquema del dashboard (estadísticas para
pantallas de ejemplo), calculadas sobre las vistas.
"""
import json
import logging

from django.db import connection, transaction
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.dashboard import contexto

from .views_generic import descifrar_columnas

logger = logging.getLogger(__name__)


def respuesta_de_error(error, estado=status.HTTP_400_BAD_REQUEST):
    """Como los errores de PostgREST: message, code, details, hint (traducido si es técnico)."""
    from apps.dashboard.errores import respuesta
    r = respuesta(error)
    r.status_code = estado
    return r


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def execute_rpc(request, function_name):
    """
    POST /api/v1/rpc/<función>   Body: { "p_param": valor, ... }
    """
    if not is_valid_function_name(function_name):
        return Response({'error': 'Nombre de función inválido'}, status=status.HTTP_400_BAD_REQUEST)
    params = request.data if isinstance(request.data, dict) else {}
    contexto.establecer_usuario(request.user)
    from .rpc_permisos import rpc_negada
    negada = rpc_negada(request.user, function_name)
    if negada is not None:
        return negada

    if connection.vendor == 'sqlite':
        from apps.dashboard.plpgsql import ErrorPlpgsql, limpiar_error
        from apps.dashboard.plpgsql_motor import ejecutar_funcion, motor

        if function_name not in motor().funciones:
            return Response({'error': f'No existe la función {function_name}', 'code': 'PGRST202'},
                            status=status.HTTP_404_NOT_FOUND)
        limpiar_error()
        try:
            with transaction.atomic():
                connection.ensure_connection()
                resultado = ejecutar_funcion(function_name, params, connection.connection)
                filas = resultado if isinstance(resultado, list) else [resultado]
                descifrar_columnas([f for f in filas if isinstance(f, dict)])
                return Response(resultado)
        except ErrorPlpgsql as e:
            return respuesta_de_error(e)
        except Exception as e:  # un error de Python adentro del intérprete
            logger.exception('Error ejecutando la RPC %s', function_name)
            return Response({'error': str(e), 'message': str(e), 'code': 'XX000'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    try:
        return Response(call_postgres_function(function_name, params))
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def call_postgres_function(function_name, params):
    """Postgres: la función de la base, con parámetros nombrados."""
    with connection.cursor() as cursor:
        if params:
            lista = ', '.join(f'{k} := %({k})s' for k in params)
            cursor.execute(f'SELECT * FROM {function_name}({lista})', params)
        else:
            cursor.execute(f'SELECT * FROM {function_name}()')
        columnas = [c[0] for c in cursor.description]
        filas = cursor.fetchall()
        if len(columnas) == 1 and len(filas) == 1 and funcion_retorna_conjunto(function_name) is False:
            return filas[0][0]
        resultado = []
        for fila in filas:
            d = {}
            for col, valor in zip(columnas, fila):
                if isinstance(valor, str):
                    try:
                        valor = json.loads(valor) if valor[:1] in '[{' else valor
                    except ValueError:
                        pass
                d[col] = valor
            resultado.append(d)
        return resultado


def funcion_retorna_conjunto(function_name):
    """Postgres: si la función devuelve filas (proretset) o un valor suelto."""
    if connection.vendor != 'postgresql':
        return None   # sin pg_proc no se adivina (en SQLite decide el intérprete)
    with connection.cursor() as cursor:
        cursor.execute('SELECT proretset FROM pg_proc WHERE proname = %s LIMIT 1', [function_name])
        fila = cursor.fetchone()
    return bool(fila[0]) if fila else True


def is_valid_function_name(name):
    return bool(name) and name.replace('_', '').isalnum() and len(name) <= 63


# ── RPC auxiliares (no son del esquema del dashboard) ─────────────────────────────────────


def _filas(sql, params=()):
    with connection.cursor() as cursor:
        cursor.execute(sql, params)
        columnas = [c[0] for c in cursor.description]
        return [dict(zip(columnas, f)) for f in cursor.fetchall()]


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_clientes_estadisticas_basicas(request):
    """Total de abonados, por estado y cuántos deben."""
    [fila] = _filas("""
        SELECT COUNT(*) AS total,
               SUM(CASE WHEN c.estado = 'activo' THEN 1 ELSE 0 END) AS activos,
               SUM(CASE WHEN c.estado = 'suspendido' THEN 1 ELSE 0 END) AS suspendidos,
               SUM(CASE WHEN c.estado = 'cortado' THEN 1 ELSE 0 END) AS cortados,
               SUM(CASE WHEN s.saldo > 0.005 THEN 1 ELSE 0 END) AS con_deuda
          FROM clientes c LEFT JOIN v_saldo_clientes s ON s.client_id = c.id
    """)
    return Response({k: int(v or 0) for k, v in fila.items()})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_clientes_por_estado(request):
    return Response(_filas('SELECT estado, COUNT(*) AS cantidad FROM clientes GROUP BY estado ORDER BY cantidad DESC'))


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_resumen_facturacion(request):
    """Facturación de un mes: emitido, cobrado y pendiente (según v_facturas)."""
    mes = int(request.data.get('mes') or 0)
    anio = int(request.data.get('anio') or 0)
    desde = f'{anio:04d}-{mes:02d}-01'
    [fila] = _filas("""
        SELECT COUNT(*) AS total_facturas,
               COALESCE(SUM(total), 0) AS monto_total,
               COALESCE(SUM(pagado), 0) AS monto_pagado,
               COALESCE(SUM(CASE WHEN estado IN ('pendiente', 'vencida') THEN saldo ELSE 0 END), 0) AS monto_pendiente,
               SUM(CASE WHEN estado = 'pagada' THEN 1 ELSE 0 END) AS facturas_pagadas,
               SUM(CASE WHEN estado IN ('pendiente', 'vencida') THEN 1 ELSE 0 END) AS facturas_pendientes
          FROM v_facturas
         WHERE NOT anulada AND date(fecha_emision, 'start of month') = %s
    """, [desde])
    return Response({k: (float(v or 0) if k.startswith('monto') else int(v or 0)) for k, v in fila.items()})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_top_pagadores(request):
    limite = int(request.data.get('limit', 10) or 10)
    filas = _filas("""
        SELECT c.id AS cliente_id, c.nombre, SUM(p.monto) AS total_pagado, COUNT(p.id) AS numero_pagos
          FROM clientes c JOIN pagos p ON p.client_id = c.id AND NOT p.anulado
         GROUP BY c.id, c.nombre ORDER BY total_pagado DESC LIMIT %s
    """, [limite])
    return Response([{**f, 'total_pagado': float(f['total_pagado'] or 0)} for f in filas])


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_clientes_con_mora(request):
    """Abonados con facturas vencidas que todavía deben."""
    filas = _filas("""
        SELECT c.id AS cliente_id, c.nombre, c.telefono,
               COUNT(f.id) AS facturas_vencidas, SUM(f.saldo) AS deuda_total,
               MIN(f.fecha_vencimiento) AS factura_mas_antigua
          FROM clientes c JOIN v_facturas f ON f.client_id = c.id
         WHERE f.estado = 'vencida'
         GROUP BY c.id, c.nombre, c.telefono ORDER BY deuda_total DESC
    """)
    return Response([{**f, 'deuda_total': float(f['deuda_total'] or 0)} for f in filas])
