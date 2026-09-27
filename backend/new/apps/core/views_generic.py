"""
Vista genérica CRUD para cualquier tabla.
Simula la API PostgREST de Supabase para mantener compatibilidad con el frontend.
"""
import json
import re

from django.apps import apps
from django.db import connection
from django.db.models import Q
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def generic_table_list(request, table_name):
    """
    GET: Lista registros de una tabla con filtros y ordenamiento
    POST: Crea un nuevo registro
    
    Compatible con la API de Supabase:
    - GET /api/v1/tables/<table>?select=*&order=col.asc&col=eq.valor
    - POST /api/v1/tables/<table> con body JSON
    """
    # Buscar el modelo Django correspondiente
    model = find_model(table_name)
    if not model:
        # Si no hay modelo Django, ejecutar query SQL directo (tablas sin modelo)
        if request.method == 'GET':
            return raw_select(request, table_name)
        else:
            return raw_insert(request, table_name)
    
    if request.method == 'GET':
        queryset = model.objects.all()
        
        # Filtros tipo Supabase: ?col=eq.valor, ?col=gt.10, ?col=like.*palabra*
        filters = parse_supabase_filters(request.GET, model)
        if filters:
            queryset = queryset.filter(filters)
        
        # Ordenamiento: ?order=col.asc o ?order=col.desc
        order = request.GET.get('order', 'id.asc')
        if order:
            col, direction = parse_order(order)
            if col:
                queryset = queryset.order_by(f"{'-' if direction == 'desc' else ''}{col}")
        
        # Paginación: ?limit=50&offset=100
        limit = request.GET.get('limit')
        offset = request.GET.get('offset', 0)
        if limit:
            queryset = queryset[int(offset):int(offset) + int(limit)]
        
        # Select: ?select=col1,col2 (simplificado - devolvemos todo por ahora)
        data = list(queryset.values())
        
        return Response(data)
    
    elif request.method == 'POST':
        data = request.data
        try:
            obj = model.objects.create(**data)
            return Response(model_to_dict_safe(obj), status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def generic_table_detail(request, table_name, pk):
    """
    GET: Obtiene un registro por ID
    PATCH: Actualiza un registro
    DELETE: Elimina un registro
    """
    model = find_model(table_name)
    if not model:
        if request.method == 'GET':
            return raw_select_one(request, table_name, pk)
        elif request.method == 'PATCH':
            return raw_update(request, table_name, pk)
        elif request.method == 'DELETE':
            return raw_delete(request, table_name, pk)
    
    try:
        obj = model.objects.get(pk=pk)
    except model.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        return Response(model_to_dict_safe(obj))
    
    elif request.method == 'PATCH':
        for key, value in request.data.items():
            setattr(obj, key, value)
        try:
            obj.save()
            return Response(model_to_dict_safe(obj))
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


def find_model(table_name):
    """
    Busca el modelo Django que corresponde a table_name.
    Mapea snake_case a los nombres de modelo en PascalCase.
    """
    # Mapeo manual de tablas a modelos
    table_to_model = {
        'clientes': 'clientes.Cliente',
        'contratos': 'clientes.Contrato',
        'olts': 'olts.OLT',
        'onus': 'olts.ONU',
        'mikrotiks': 'mikrotik.MikroTik',
        'ips': 'mikrotik.IP',
        'planes': 'facturacion.Plan',
        'facturas': 'facturacion.Factura',
        'lineas_factura': 'facturacion.LineaFactura',
        'pagos': 'pagos.Pago',
        'cortes': 'pagos.Corte',
        'tickets': 'soporte.Ticket',
        'instalaciones': 'soporte.Instalacion',
        'mensajes_whatsapp': 'whatsapp.MensajeWhatsApp',
        'campanas': 'whatsapp.Campana',
        'alertas': 'nms.Alerta',
        'dispositivos_monitoreados': 'nms.DispositivoMonitoreado',
    }
    
    model_path = table_to_model.get(table_name)
    if not model_path:
        return None
    
    try:
        app_label, model_name = model_path.split('.')
        return apps.get_model(app_label, model_name)
    except (ValueError, LookupError):
        return None


def parse_supabase_filters(query_params, model):
    """
    Convierte filtros tipo Supabase a Q objects de Django.
    Ej: ?nombre=eq.Juan → Q(nombre='Juan')
        ?edad=gt.18 → Q(edad__gt=18)
        ?email=like.*@gmail.com → Q(email__contains='@gmail.com')
    """
    filters = Q()

    # Campos reales del modelo. Un `key` que no exista haría que Django lance
    # FieldError (500) y además permite inyectar lookups arbitrarios.
    campos = {f.name for f in model._meta.get_fields()}

    for key, value in query_params.items():
        if key in ['select', 'order', 'limit', 'offset']:
            continue

        if key not in campos:
            continue

        # Parsear operador Supabase: col=op.valor
        if '=' in value and '.' in value:
            parts = value.split('.', 1)
            if len(parts) == 2:
                op, val = parts
                lookup = {
                    'eq': '',
                    'neq': '__ne',
                    'gt': '__gt',
                    'gte': '__gte',
                    'lt': '__lt',
                    'lte': '__lte',
                    'like': '__icontains',
                    'ilike': '__icontains',
                    'in': '__in',
                }.get(op, '')
                
                # Limpiar wildcards de LIKE
                if op in ['like', 'ilike']:
                    val = val.replace('*', '')
                
                # Convertir tipos
                if val.isdigit():
                    val = int(val)
                elif val.lower() == 'true':
                    val = True
                elif val.lower() == 'false':
                    val = False
                elif val.lower() == 'null':
                    lookup = '__isnull'
                    val = True
                
                filter_key = f"{key}{lookup}" if lookup else key
                filters &= Q(**{filter_key: val})
        else:
            # Filtro simple sin operador: asume igualdad
            filters &= Q(**{key: value})
    
    return filters


def parse_order(order_str):
    """
    Parsea ?order=col.asc o ?order=col.desc
    Retorna (columna, 'asc'|'desc')

    La columna se devuelve tal cual; el llamador DEBE validarla con
    columnas_reales() antes de usarla en SQL u order_by.
    """
    if '.' in order_str:
        col, direction = order_str.rsplit('.', 1)
        return col, direction.lower() if direction.lower() in ('asc', 'desc') else 'asc'
    return order_str, 'asc'


_IDENT_RE = re.compile(r'^[A-Za-z_][A-Za-z0-9_]*$')


def identificador_valido(nombre):
    """True si `nombre` es un identificador SQL seguro (sin comillas ni espacios)."""
    return bool(nombre) and bool(_IDENT_RE.match(nombre))


def columnas_reales(table_name):
    """
    Devuelve el set de columnas reales de `table_name` según el motor activo.
    Postgres: information_schema. SQLite: PRAGMA table_info.

    Se usa para validar todo identificador que venga del request antes de
    interpolarlo en SQL. Devuelve set() si la tabla no existe.
    """
    if not identificador_valido(table_name):
        return set()

    engine = connection.vendor  # 'postgresql' | 'sqlite' | ...

    with connection.cursor() as cursor:
        if engine == 'postgresql':
            cursor.execute(
                "SELECT column_name FROM information_schema.columns "
                "WHERE table_name = %s",
                [table_name],
            )
        else:
            # SQLite y compatibles
            cursor.execute(f'PRAGMA table_info("{table_name}")')
        return {row[0] for row in cursor.fetchall()}


def tabla_existe(table_name):
    """True si la tabla existe en la base activa."""
    if not identificador_valido(table_name):
        return False

    engine = connection.vendor
    with connection.cursor() as cursor:
        if engine == 'postgresql':
            cursor.execute(
                "SELECT 1 FROM information_schema.tables WHERE table_name = %s",
                [table_name],
            )
        else:
            cursor.execute(
                "SELECT 1 FROM sqlite_master WHERE type='table' AND name = %s",
                [table_name],
            )
        return cursor.fetchone() is not None


def model_to_dict_safe(obj):
    """
    Convierte un modelo Django a dict JSON-serializable.
    """
    from django.forms.models import model_to_dict
    from django.db.models.fields.files import FieldFile
    from datetime import date, datetime
    
    data = {}
    for field in obj._meta.fields:
        value = getattr(obj, field.name)
        if isinstance(value, (date, datetime)):
            value = value.isoformat()
        elif isinstance(value, FieldFile):
            value = value.url if value else None
        elif hasattr(value, 'pk'):
            value = value.pk
        data[field.name] = value
    
    return data


# ============================================================================
# RAW SQL para tablas sin modelo Django
# ============================================================================

def raw_select(request, table_name):
    """SELECT * FROM table con filtros básicos"""
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    columnas = columnas_reales(table_name)
    if not columnas:
        return Response({'error': f'Tabla "{table_name}" no existe'}, status=404)

    sql = f'SELECT * FROM {table_name}'
    params = []

    # Filtros básicos (solo =). El nombre de columna se valida contra las
    # columnas reales: interpolarlo crudo sería inyección SQL.
    where_clauses = []
    for key, value in request.GET.items():
        if key in ('select', 'order', 'limit', 'offset'):
            continue
        if key not in columnas:
            return Response({'error': f'Columna inválida: {key}'}, status=400)
        if '=' not in value:
            where_clauses.append(f"{key} = %s")
            params.append(value)

    if where_clauses:
        sql += ' WHERE ' + ' AND '.join(where_clauses)

    # Ordenamiento
    order = request.GET.get('order', 'id')
    if order:
        col, direction = parse_order(order)
        if col not in columnas:
            return Response({'error': f'Columna de orden inválida: {col}'}, status=400)
        sql += f' ORDER BY {col} {"DESC" if direction == "desc" else "ASC"}'

    # Paginación
    limit = request.GET.get('limit', 100)
    offset = request.GET.get('offset', 0)
    sql += f' LIMIT {int(limit)} OFFSET {int(offset)}'

    with connection.cursor() as cursor:
        cursor.execute(sql, params)
        columns = [col[0] for col in cursor.description]
        rows = [dict(zip(columns, row)) for row in cursor.fetchall()]

    return Response(rows)


def raw_select_one(request, table_name, pk):
    """SELECT por ID"""
    if not table_name.replace('_', '').isalnum():
        return Response({'error': 'Invalid table name'}, status=400)
    
    with connection.cursor() as cursor:
        sql = f'SELECT * FROM {table_name} WHERE id = %s'
        cursor.execute(sql, [pk])
        columns = [col[0] for col in cursor.description]
        row = cursor.fetchone()
        
        if not row:
            return Response({'error': 'Not found'}, status=404)
        
        return Response(dict(zip(columns, row)))


def raw_insert(request, table_name):
    """INSERT INTO table"""
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    columnas = columnas_reales(table_name)
    if not columnas:
        return Response({'error': f'Tabla "{table_name}" no existe'}, status=404)

    data = request.data
    if not data:
        return Response({'error': 'Body vacío'}, status=400)

    invalidas = [k for k in data.keys() if k not in columnas]
    if invalidas:
        return Response({'error': f'Columnas inválidas: {invalidas}'}, status=400)

    columns = ', '.join(data.keys())
    placeholders = ', '.join(['%s'] * len(data))
    values = list(data.values())

    with connection.cursor() as cursor:
        sql = f'INSERT INTO {table_name} ({columns}) VALUES ({placeholders}) RETURNING *'
        cursor.execute(sql, values)
        columns_ret = [col[0] for col in cursor.description]
        row = cursor.fetchone()

        return Response(dict(zip(columns_ret, row)), status=201)


def raw_update(request, table_name, pk):
    """UPDATE table SET ... WHERE id = pk"""
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    columnas = columnas_reales(table_name)
    if not columnas:
        return Response({'error': f'Tabla "{table_name}" no existe'}, status=404)

    data = request.data
    if not data:
        return Response({'error': 'Body vacío'}, status=400)

    invalidas = [k for k in data.keys() if k not in columnas]
    if invalidas:
        return Response({'error': f'Columnas inválidas: {invalidas}'}, status=400)

    set_clauses = ', '.join([f"{k} = %s" for k in data.keys()])
    values = list(data.values()) + [pk]
    
    with connection.cursor() as cursor:
        sql = f'UPDATE {table_name} SET {set_clauses} WHERE id = %s RETURNING *'
        cursor.execute(sql, values)
        
        if cursor.rowcount == 0:
            return Response({'error': 'Not found'}, status=404)
        
        columns = [col[0] for col in cursor.description]
        row = cursor.fetchone()
        return Response(dict(zip(columns, row)))


def raw_delete(request, table_name, pk):
    """DELETE FROM table WHERE id = pk"""
    if not table_name.replace('_', '').isalnum():
        return Response({'error': 'Invalid table name'}, status=400)
    
    with connection.cursor() as cursor:
        sql = f'DELETE FROM {table_name} WHERE id = %s'
        cursor.execute(sql, [pk])
        
        if cursor.rowcount == 0:
            return Response({'error': 'Not found'}, status=404)
        
        return Response(status=204)
