"""
Ejecutor genérico de funciones RPC (stored procedures) de PostgreSQL.
Compatible con supabase.rpc('nombre_funcion', { params })
"""
from django.db import connection
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
import json


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def execute_rpc(request, function_name):
    """
    POST /api/v1/rpc/<function_name>
    Body: { "param1": value1, "param2": value2 }
    
    Ejecuta una función PostgreSQL y retorna el resultado.
    Compatible con: supabase.rpc('nombre_funcion', { params })
    """
    if not is_valid_function_name(function_name):
        return Response(
            {'error': 'Invalid function name'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    params = request.data or {}
    
    try:
        result = call_postgres_function(function_name, params)
        return Response(result)
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


def call_postgres_function(function_name, params):
    """
    Llama a una función PostgreSQL con parámetros nombrados.
    
    Ejemplos de funciones que el frontend usa:
    - clientes_estadisticas_basicas()
    - clientes_por_estado()
    - clientes_con_mora()
    - racha_de_ventas(empleado_id)
    - resumen_facturacion(mes, anio)
    - top_pagadores(limit)
    """
    with connection.cursor() as cursor:
        # Construir llamada con parámetros nombrados
        if params:
            param_list = ', '.join([f"{k} := %({k})s" for k in params.keys()])
            sql = f"SELECT * FROM {function_name}({param_list})"
            cursor.execute(sql, params)
        else:
            sql = f"SELECT * FROM {function_name}()"
            cursor.execute(sql)
        
        # Obtener columnas y filas
        columns = [col[0] for col in cursor.description]
        rows = cursor.fetchall()
        
        # Si la función retorna un escalar (1 columna, 1 fila)
        if len(columns) == 1 and len(rows) == 1:
            return rows[0][0]
        
        # Si retorna una tabla
        result = []
        for row in rows:
            row_dict = {}
            for i, col in enumerate(columns):
                value = row[i]
                # Serializar tipos especiales
                if hasattr(value, 'isoformat'):
                    value = value.isoformat()
                row_dict[col] = value
            result.append(row_dict)
        
        return result


def is_valid_function_name(name):
    """
    Valida que el nombre de función sea seguro.
    Solo permite letras, números y guiones bajos.
    """
    return name.replace('_', '').isalnum()


# ============================================================================
# RPCs específicos usados por el frontend
# ============================================================================

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_clientes_estadisticas_basicas(request):
    """
    Estadísticas básicas de clientes: total, activos, suspendidos, morosos
    """
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT
                COUNT(*) as total,
                COUNT(*) FILTER (WHERE estado = 'activo') as activos,
                COUNT(*) FILTER (WHERE estado = 'suspendido') as suspendidos,
                COUNT(*) FILTER (WHERE estado = 'cortado') as cortados,
                COUNT(*) FILTER (WHERE deuda > 0) as con_deuda
            FROM clientes
        """)
        row = cursor.fetchone()
        return Response({
            'total': row[0],
            'activos': row[1],
            'suspendidos': row[2],
            'cortados': row[3],
            'con_deuda': row[4],
        })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_clientes_por_estado(request):
    """
    Distribución de clientes por estado
    """
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT estado, COUNT(*) as cantidad
            FROM clientes
            GROUP BY estado
            ORDER BY cantidad DESC
        """)
        return Response([
            {'estado': row[0], 'cantidad': row[1]}
            for row in cursor.fetchall()
        ])


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_resumen_facturacion(request):
    """
    Resumen de facturación por mes
    Parámetros: mes (int), anio (int)
    """
    mes = request.data.get('mes')
    anio = request.data.get('anio')
    
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT
                COUNT(*) as total_facturas,
                SUM(total) as monto_total,
                SUM(total) FILTER (WHERE estado = 'pagada') as monto_pagado,
                SUM(total) FILTER (WHERE estado = 'pendiente') as monto_pendiente,
                COUNT(*) FILTER (WHERE estado = 'pagada') as facturas_pagadas,
                COUNT(*) FILTER (WHERE estado = 'pendiente') as facturas_pendientes
            FROM facturas
            WHERE EXTRACT(MONTH FROM fecha_emision) = %s
              AND EXTRACT(YEAR FROM fecha_emision) = %s
        """, [mes, anio])
        
        row = cursor.fetchone()
        return Response({
            'total_facturas': row[0] or 0,
            'monto_total': float(row[1] or 0),
            'monto_pagado': float(row[2] or 0),
            'monto_pendiente': float(row[3] or 0),
            'facturas_pagadas': row[4] or 0,
            'facturas_pendientes': row[5] or 0,
        })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_racha_de_ventas(request):
    """
    Racha de instalaciones consecutivas de un empleado
    Parámetros: empleado_id (int)
    """
    empleado_id = request.data.get('empleado_id')
    
    with connection.cursor() as cursor:
        cursor.execute("""
            WITH instalaciones_ordenadas AS (
                SELECT
                    fecha,
                    LAG(fecha) OVER (ORDER BY fecha) as fecha_anterior
                FROM instalaciones
                WHERE tecnico_id = %s
                  AND estado = 'completada'
                ORDER BY fecha DESC
            )
            SELECT COUNT(*) as racha
            FROM instalaciones_ordenadas
            WHERE fecha_anterior IS NULL
               OR fecha - fecha_anterior <= INTERVAL '7 days'
        """, [empleado_id])
        
        row = cursor.fetchone()
        return Response({'racha': row[0] or 0})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_top_pagadores(request):
    """
    Top clientes por monto pagado
    Parámetros: limit (int, default 10)
    """
    limit = request.data.get('limit', 10)
    
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT
                c.id,
                c.nombre,
                c.apellido,
                SUM(p.monto) as total_pagado,
                COUNT(p.id) as numero_pagos
            FROM clientes c
            JOIN pagos p ON p.cliente_id = c.id
            GROUP BY c.id, c.nombre, c.apellido
            ORDER BY total_pagado DESC
            LIMIT %s
        """, [limit])
        
        return Response([
            {
                'cliente_id': row[0],
                'nombre': row[1],
                'apellido': row[2],
                'total_pagado': float(row[3]),
                'numero_pagos': row[4],
            }
            for row in cursor.fetchall()
        ])


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rpc_clientes_con_mora(request):
    """
    Clientes con facturas vencidas
    """
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT
                c.id,
                c.nombre,
                c.apellido,
                c.telefono,
                COUNT(f.id) as facturas_vencidas,
                SUM(f.total) as deuda_total,
                MIN(f.fecha_vencimiento) as factura_mas_antigua
            FROM clientes c
            JOIN facturas f ON f.cliente_id = c.id
            WHERE f.estado = 'pendiente'
              AND f.fecha_vencimiento < CURRENT_DATE
            GROUP BY c.id, c.nombre, c.apellido, c.telefono
            ORDER BY deuda_total DESC
        """)
        
        return Response([
            {
                'cliente_id': row[0],
                'nombre': row[1],
                'apellido': row[2],
                'telefono': row[3],
                'facturas_vencidas': row[4],
                'deuda_total': float(row[5]),
                'factura_mas_antigua': row[6].isoformat() if row[6] else None,
            }
            for row in cursor.fetchall()
        ])
