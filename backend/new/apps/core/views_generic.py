"""
Vista genérica CRUD para cualquier tabla.

Simula la API de PostgREST. Los dos clientes que la usan son:
- el frontend (djangoClient.js),
- el servicio interno de red / middleware (djangoDb.js),

Soporta:
- filtros por columna: eq, neq, gt, gte, lt, lte, like, ilike, is, in y not.*
- orden múltiple (order=col.desc&order=otra.asc o separado por comas)
- paginación (limit/offset), proyección (select=a,b) y conteo (count=exact
  → cabecera X-Total-Count, con head=true para pedir solo el número)
- INSERT de un objeto o de un arreglo (lote)
- UPSERT (_upsert + _conflict → ON CONFLICT (cols) DO UPDATE)
- PATCH y DELETE sobre la colección usando filtros (sin id en la URL)
- tablas sin modelo Django vía SQL directo (también vistas v_*)
"""
import json
import re
import uuid

from django.apps import apps
from django.db import DatabaseError, IntegrityError, connection, transaction
from django.db.models import F, Func, Q
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.dashboard import contexto

from . import rls
from .cifrado import es_cifrada
from .embeds import Relaciones, adjuntar, columnas_necesarias, partir_select
from .fields import cifrar

# ── Vistas principales ────────────────────────────────────────────────────────


@api_view(['GET', 'POST', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def generic_table_list(request, table_name):
    """
    GET    /api/v1/tables/<tabla>?col=eq.valor&order=id.desc&limit=50
    POST   /api/v1/tables/<tabla>       → insertar (objeto o arreglo)
    PATCH  /api/v1/tables/<tabla>?...   → actualizar lo que matchee los filtros
    DELETE /api/v1/tables/<tabla>?...   → borrar lo que matchee los filtros
    """
    contexto.establecer_usuario(request.user)
    model = find_model(table_name)
    if model is None and not rls.tabla_expuesta(table_name):
        return rls.respuesta_no_existe(table_name)

    if not model:
        # Tabla (o vista SQL) sin modelo Django: SQL directo parametrizado.
        if request.method == 'GET':
            return raw_select(request, table_name)
        if request.method == 'POST':
            return raw_insert(request, table_name)
        if request.method == 'PATCH':
            return raw_update_filtrado(request, table_name)
        return raw_delete_filtrado(request, table_name)

    if request.method == 'GET':
        return model_listar(request, model)
    if request.method == 'POST':
        return model_insertar(request, model)
    if request.method == 'PATCH':
        return model_actualizar_filtrado(request, model)
    return model_borrar_filtrado(request, model)


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def generic_table_detail(request, table_name, pk):
    """
    GET    /api/v1/tables/<tabla>/<id>
    PATCH  /api/v1/tables/<tabla>/<id>
    DELETE /api/v1/tables/<tabla>/<id>
    """
    contexto.establecer_usuario(request.user)
    model = find_model(table_name)
    if model is None and not rls.tabla_expuesta(table_name):
        return rls.respuesta_no_existe(table_name)
    if not model:
        if request.method == 'GET':
            return raw_select_one(request, table_name, pk)
        if request.method == 'PATCH':
            return raw_update(request, table_name, pk)
        return raw_delete(request, table_name, pk)

    tabla = model._meta.db_table
    accion = {'GET': 'select', 'PATCH': 'update', 'DELETE': 'delete'}[request.method]
    if rls.negada(tabla, accion):
        return rls.respuesta_denegada(tabla, accion)
    try:
        obj = rls.filtrar_queryset(model.objects.all(), accion).get(pk=pk)
    except model.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    except (ValueError, TypeError):
        return Response({'error': 'Id inválido'}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        return Response(rls.quitar_ocultas(tabla, [model_to_dict_safe(obj)])[0])

    if request.method == 'PATCH':
        cambiados = aplicar_cambios(obj, request.data)
        try:
            with transaction.atomic():
                if cambiados:
                    obj.save(update_fields=cambiados)
                rls.revisar_queryset(model, [obj.pk], 'update_check')
        except rls.Denegado as e:
            return rls.respuesta_denegada(e.tabla, e.accion)
        except IntegrityError as e:
            return error_de_integridad(e)
        except Exception as e:
            return error_de_base(e)
        return Response(rls.quitar_ocultas(tabla, [model_to_dict_safe(obj)])[0])

    obj.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


# ── Camino con modelo Django ─────────────────────────────────────────────────


def model_listar(request, model):
    queryset = rls.filtrar_queryset(model.objects.all(), 'select')

    try:
        filters = filtros_postgrest(request.GET, model)
    except ValueError as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if filters:
        queryset = queryset.filter(filters)

    # count=exact → el total SIN el límite, como PostgREST.
    total = None
    if request.GET.get('count') == 'exact':
        total = queryset.count()

    # Con `olt_id` además de `olt`: `values()` devuelve la columna, y es la que
    # el cliente ordena y proyecta.
    campos = campos_filtrables(model)
    orden = orden_de_query(request.GET, campos, model)
    if orden:
        queryset = queryset.order_by(*orden)

    limit = request.GET.get('limit')
    offset = int(request.GET.get('offset', 0) or 0)
    if limit:
        queryset = queryset[offset:offset + int(limit)]

    # `select('*, tecnicos(nombre)')`: los paréntesis son embeds, no columnas.
    columnas_base, embeds = partir_select(request.GET.get('select'))

    try:
        columnas = columnas_de_select(','.join(columnas_base) or None, campos)
    except ValueError as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    # Las columnas que hacen falta para resolver los embeds se piden de más y se
    # borran antes de responder.
    tabla = model._meta.db_table
    relaciones = Relaciones()
    extras = set()
    if embeds and columnas:
        extras = {
            c for c in columnas_necesarias(tabla, embeds, relaciones)
            if c not in set(columnas) and c in campos
        }

    if columnas:
        data = list(queryset.values(*(list(columnas) + sorted(extras))))
    else:
        data = list(queryset.values())

    if embeds:
        adjuntar(data, tabla, embeds, relaciones)
        for fila in data:
            for extra in extras:
                fila.pop(extra, None)
    descifrar_columnas(data)
    rls.quitar_ocultas(tabla, data)

    if request.GET.get('head') == 'true':
        data = []

    respuesta = Response(data)
    if total is not None:
        respuesta['X-Total-Count'] = str(total)
    return respuesta


def model_insertar(request, model):
    data = request.data
    tabla = model._meta.db_table
    if rls.negada(tabla, 'insert'):
        return rls.respuesta_denegada(tabla, 'insert')

    # Lote: insert de un arreglo. Si una fila falla, la 409/400 explica cuál.
    if isinstance(data, list):
        filas = [separar_meta_upsert(f)[0] for f in data]
        try:
            with transaction.atomic():
                objetos = [model.objects.create(**fila) for fila in filas]
                rls.revisar_queryset(model, [o.pk for o in objetos], 'insert')
            creados = rls.quitar_ocultas(tabla, [model_to_dict_safe(o) for o in objetos])
        except rls.Denegado as e:
            return rls.respuesta_denegada(e.tabla, e.accion)
        except IntegrityError as e:
            return error_de_integridad(e)
        except TypeError as e:
            return Response({'error': f'Columna desconocida: {e}'}, status=400)
        except DatabaseError as e:
            return error_de_base(e)
        return Response(creados, status=status.HTTP_201_CREATED)

    fila, upsert, conflicto = separar_meta_upsert(data)
    try:
        with transaction.atomic():
            if upsert:
                filtro = {c: fila[c] for c in conflicto if c in fila}
                existente = model.objects.filter(**filtro).first() if filtro else None
                if existente is not None:
                    # ON CONFLICT DO UPDATE: la fila que ya estaba tiene que
                    # poder tocarse, y quedar como la política deja.
                    if not rls.filtrar_queryset(model.objects.filter(pk=existente.pk), 'update').exists():
                        raise rls.Denegado(tabla, 'update')
                    cambiados = aplicar_cambios(existente, fila)
                    if cambiados:
                        existente.save(update_fields=cambiados)
                    rls.revisar_queryset(model, [existente.pk], 'update_check')
                    return Response(rls.quitar_ocultas(tabla, [model_to_dict_safe(existente)])[0])
            obj = model.objects.create(**fila)
            rls.revisar_queryset(model, [obj.pk], 'insert')
    except rls.Denegado as e:
        return rls.respuesta_denegada(e.tabla, e.accion)
    except IntegrityError as e:
        return error_de_integridad(e)
    except TypeError as e:
        return Response({'error': f'Columna desconocida: {e}'}, status=400)
    except DatabaseError as e:
        return error_de_base(e)
    return Response(rls.quitar_ocultas(tabla, [model_to_dict_safe(obj)])[0], status=status.HTTP_201_CREATED)


def model_actualizar_filtrado(request, model):
    data = request.data
    if not isinstance(data, dict) or not data:
        return Response({'error': 'Body vacío'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        filters = filtros_postgrest(request.GET, model)
    except ValueError as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if not filters:
        return Response(
            {'error': 'PATCH sobre la colección exige al menos un filtro'},
            status=status.HTTP_400_BAD_REQUEST,
        )

    tabla = model._meta.db_table
    if rls.negada(tabla, 'update'):
        return rls.respuesta_denegada(tabla, 'update')

    actualizadas = []
    try:
        with transaction.atomic():
            objetos = list(rls.filtrar_queryset(model.objects.filter(filters), 'update'))
            for obj in objetos:
                cambiados = aplicar_cambios(obj, data)
                if cambiados:
                    obj.save(update_fields=cambiados)
                actualizadas.append(model_to_dict_safe(obj))
            rls.revisar_queryset(model, [o.pk for o in objetos], 'update_check')
    except rls.Denegado as e:
        return rls.respuesta_denegada(e.tabla, e.accion)
    except IntegrityError as e:
        return error_de_integridad(e)
    except Exception as e:
        return error_de_base(e)
    return Response(rls.quitar_ocultas(tabla, actualizadas))


def model_borrar_filtrado(request, model):
    try:
        filters = filtros_postgrest(request.GET, model)
    except ValueError as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if not filters:
        return Response(
            {'error': 'DELETE sobre la colección exige al menos un filtro'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    tabla = model._meta.db_table
    if rls.negada(tabla, 'delete'):
        return rls.respuesta_denegada(tabla, 'delete')
    try:
        rls.filtrar_queryset(model.objects.filter(filters), 'delete').delete()
    except DatabaseError as e:
        return error_de_base(e)
    return Response(status=status.HTTP_204_NO_CONTENT)


# ── Modelo ↔ tabla ───────────────────────────────────────────────────────────


def find_model(table_name):
    """
    Busca el modelo Django que corresponde a table_name.
    Mapea snake_case a los nombres de modelo en PascalCase.
    """
    # Mapeo manual de tablas a modelos
    table_to_model = {
        # clientes
        'clientes': 'clientes.Cliente',
        'contratos': 'clientes.Contrato',
        'servicios': 'clientes.Servicio',
        # olts
        'olts': 'olts.OLT',
        'tipos_ont': 'olts.TipoONT',
        'line_profiles': 'olts.LineProfile',
        'onus': 'olts.ONU',
        'olt_historial': 'olts.OltHistorial',
        'onts_esperando': 'olts.OntEsperando',
        'olt_escaneos': 'olts.OltEscaneo',
        # facturacion
        'planes_velocidad': 'facturacion.PlanVelocidad',
        'planes': 'facturacion.PlanVelocidad',
        'facturas': 'facturacion.Factura',
        'detalles_factura': 'facturacion.DetalleFactura',
        # pagos
        'pagos': 'pagos.Pago',
        'pago_factura': 'pagos.PagoFactura',
        'cortes': 'pagos.Corte',
        # soporte
        'tickets': 'soporte.Ticket',
        'ticket_comentarios': 'soporte.TicketComentario',
        'instalaciones': 'soporte.Instalacion',
        # mikrotik
        'routers_mikrotik': 'mikrotik.RouterMikrotik',
        'ip_addresses': 'mikrotik.IPAddress',
        'firewall_bloqueos': 'mikrotik.FirewallBloqueo',
        # whatsapp
        'conversaciones_whatsapp': 'whatsapp.ConversacionWhatsapp',
        'mensajes_whatsapp': 'whatsapp.MensajeWhatsapp',
        # nms
        'sondeos_red': 'nms.SondeoRed',
        'alertas_red': 'nms.AlertaRed',
        # core
        'tecnicos': 'core.Tecnico',
    }

    model_path = table_to_model.get(table_name)
    if not model_path:
        return None

    try:
        app_label, model_name = model_path.split('.')
        model = apps.get_model(app_label, model_name)
    except (ValueError, LookupError):
        return None

    return model if modelo_coincide_con_tabla(model) else None


# (base, tabla) → bool. El esquema no cambia mientras el proceso vive, y sin
# esto cada petición pagaría una consulta a information_schema.
_COINCIDENCIAS = {}


def modelo_coincide_con_tabla(model):
    """
    True si la tabla real tiene todas las columnas del modelo.

    En desarrollo las tablas las crea Django y coinciden. En producción Django
    apunta a un Postgres heredado, donde `clientes` tiene `estado`,
    `codigo`, `suspendido_hasta`... y el modelo dice `estado_servicio` y
    `codigo_pago`. Ir por el ORM ahí rompe con columnas que no existen y, peor,
    descarta los filtros por las columnas que el modelo no conoce. Si no
    coincide, se usa el SQL directo, que trabaja con las columnas verdaderas.
    """
    tabla = model._meta.db_table
    clave = (connection.settings_dict.get('NAME'), tabla)
    if clave not in _COINCIDENCIAS:
        reales = columnas_reales(tabla)
        propias = {f.column for f in model._meta.concrete_fields}
        _COINCIDENCIAS[clave] = bool(reales) and propias <= reales
    return _COINCIDENCIAS[clave]


# ── Filtros estilo PostgREST ─────────────────────────────────────────────────

# col=op.valor — y col=not.op.valor para negarlo.
PATRON_FILTRO = re.compile(r'^not\.(eq|neq|gt|gte|lt|lte|like|ilike|is|in)\.(.+)$', re.S)
PATRON_FILTRO_DIRECTO = re.compile(r'^(eq|neq|gt|gte|lt|lte|like|ilike|is|in)\.(.+)$', re.S)

SUFIJOS = {'eq': '', 'gt': '__gt', 'gte': '__gte', 'lt': '__lt', 'lte': '__lte'}


def partir_filtro(valor):
    """
    'eq.5' → ('eq', '5', False)   |   'not.eq.5' → ('eq', '5', True)
    Sin operador conocido → (None, valor, False): igualdad simple.
    """
    m = PATRON_FILTRO.match(valor)
    if m:
        return m.group(1), m.group(2), True
    m = PATRON_FILTRO_DIRECTO.match(valor)
    if m:
        return m.group(1), m.group(2), False
    return None, valor, False


def partir_lista_in(val):
    """'in.(a,b,c)' llegó como '(a,b,c)': lo vuelve ['a','b','c']."""
    dentro = val.strip()
    if dentro.startswith('(') and dentro.endswith(')'):
        dentro = dentro[1:-1]
    return [v.strip() for v in dentro.split(',') if v.strip()]


def lookup_de_like(patron):
    """
    Traduce el patrón SQL (con % o *) al lookup de Django que significa lo mismo.
    'sesion.%' → __istartswith 'sesion.'; '%x%' → __icontains 'x'.
    """
    patron = patron.replace('*', '%')
    if len(patron) >= 2 and patron.startswith('%') and patron.endswith('%'):
        return '__icontains', patron[1:-1]
    if patron.endswith('%'):
        return '__istartswith', patron[:-1]
    if patron.startswith('%'):
        return '__iendswith', patron[1:]
    return '__iexact', patron


def q_de_filtro(key, valor_crudo):
    """Un filtro del querystring como Q de Django (o None si no aplica)."""
    op, val, negado = partir_filtro(valor_crudo)

    if op is None:
        q = Q(**{key: val})
        return ~q if negado else q

    if op == 'in':
        lista = partir_lista_in(val)
        if not lista:
            # in.() no puede matchear nada.
            return None if negado else Q(pk__in=[])
        q = Q(**{f'{key}__in': lista})
        return ~q if negado else q

    if op == 'is':
        if str(val).lower() == 'null':
            q = Q(**{f'{key}__isnull': True})
        else:
            q = Q(**{key: val})
        return ~q if negado else q

    if op in ('like', 'ilike'):
        lookup, texto = lookup_de_like(val)
        q = Q(**{f'{key}{lookup}': texto})
        return ~q if negado else q

    if op == 'neq':
        if str(val).lower() == 'null':
            q = ~Q(**{f'{key}__isnull': True})   # "distinto de null" = tiene valor
        else:
            q = ~Q(**{key: val})
        return ~q if negado else q

    if op == 'eq' and str(val).lower() == 'null':
        q = Q(**{f'{key}__isnull': True})
        return ~q if negado else q

    # eq, gt, gte, lt, lte — el campo de Django se encarga de convertir el tipo.
    q = Q(**{f'{key}{SUFIJOS[op]}': val})
    return ~q if negado else q


PARAMETROS_DE_CONTROL = ('select', 'order', 'limit', 'offset', 'count', 'head', 'or')


def partir_or(texto):
    """
    `or=(nombre.ilike.%ana%,numero.eq.5,ip.not.is.null)` →
    [('nombre', 'ilike.%ana%'), ('numero', 'eq.5'), ('ip', 'not.is.null')]

    Es lo que manda `.or()` del cliente PostgREST. Se corta por las comas de primer
    nivel: las de `in.(a,b)` pertenecen a su condición.
    """
    texto = (texto or '').strip()
    if texto.startswith('(') and texto.endswith(')'):
        texto = texto[1:-1]
    partes, actual, profundidad = [], '', 0
    for caracter in texto:
        if caracter == '(':
            profundidad += 1
        elif caracter == ')':
            profundidad -= 1
        if caracter == ',' and profundidad == 0:
            partes.append(actual)
            actual = ''
        else:
            actual += caracter
    partes.append(actual)

    condiciones = []
    for parte in partes:
        parte = parte.strip()
        if not parte:
            continue
        columna, punto, filtro = parte.partition('.')
        if not punto or not filtro:
            raise ValueError(f'Condición inválida en or: {parte}')
        condiciones.append((columna, filtro))
    return condiciones


def campos_filtrables(model):
    """
    Los nombres por los que se puede filtrar: el del campo (`olt`) y el de la
    columna (`olt_id`). El cliente habla PostgREST, o sea columnas: sin
    `attname`, `onus?olt_id=eq.X` no matcheaba ningún campo.
    """
    campos = set()
    for f in model._meta.get_fields():
        campos.add(f.name)
        attname = getattr(f, 'attname', None)
        if attname:
            campos.add(attname)
    return campos


def normalizar_booleano(model, key, valor_crudo):
    """
    `activo=eq.true` → `activo=eq.True`. PostgREST escribe los booleanos en
    minúscula y el BooleanField de Django sólo acepta 't', 'True' o '1': con
    'true' tiraba ValidationError y la petición moría con 500.
    """
    try:
        campo = model._meta.get_field(key)
    except Exception:
        return valor_crudo
    if campo.get_internal_type() not in ('BooleanField', 'NullBooleanField'):
        return valor_crudo
    return re.sub(
        r'(^|\.)(true|false)$',
        lambda m: m.group(1) + m.group(2).capitalize(),
        valor_crudo,
        flags=re.I,
    )


def filtros_postgrest(query_params, model):
    """
    Convierte los filtros del querystring en un Q de Django.

    Una columna que el modelo no tiene es un ValueError (→ 400), igual que en
    el camino SQL y en PostgREST. Antes se descartaba en silencio, y eso es
    peligroso: `DELETE onus?olt_id=eq.X&slot=eq.1` borraba el slot 1 de TODAS
    las OLTs, porque el filtro por OLT no llegaba a la consulta.
    """
    filtros = Q()
    campos = campos_filtrables(model)

    for key, value in query_params.items():
        if key in PARAMETROS_DE_CONTROL:
            continue
        if key not in campos:
            raise ValueError(f'Columna inválida: {key}')
        # `col=a&col=b` (rango con gte y lte, por ejemplo) llega como lista.
        for valor in query_params.getlist(key) if hasattr(query_params, 'getlist') else [value]:
            q = q_de_filtro(key, normalizar_booleano(model, key, valor))
            if q is not None:
                filtros &= q

    for crudo in query_params.getlist('or') if hasattr(query_params, 'getlist') else []:
        alguna = None
        for col, valor in partir_or(crudo):
            if col not in campos:
                raise ValueError(f'Columna inválida: {col}')
            q = q_de_filtro(col, normalizar_booleano(model, col, valor))
            if q is not None:
                alguna = q if alguna is None else alguna | q
        if alguna is not None:
            filtros &= alguna

    return filtros if filtros else None


# ── Orden, proyección y utilidades ────────────────────────────────────────────


def parse_order(order_str):
    """
    Parsea 'col.asc' o 'col.desc'.
    Retorna (columna, 'asc'|'desc'). La columna se devuelve tal cual: el
    llamador DEBE validarla antes de usarla en SQL u order_by.
    """
    if '.' in order_str:
        col, direction = order_str.rsplit('.', 1)
        return col, direction.lower() if direction.lower() in ('asc', 'desc') else 'asc'
    return order_str, 'asc'


def orden_de_query(params, permitidas=None, model=None):
    """
    order=col.desc y order=col1.asc,col2.desc (o repetidos) → ['-col', 'col2'].
    Las columnas que no existen se ignoran: las pantallas arman el orden con
    datos de la base y una columna vieja no puede tumbar el listado.
    """
    claves = []
    for crudo in params.getlist('order'):
        for parte in crudo.split(','):
            parte = parte.strip()
            if not parte:
                continue
            col, direccion = parse_order(parte)
            if permitidas is not None and col not in permitidas:
                continue
            # Una columna cifrada se ordena por su texto en claro, no por el token.
            expr = Func(F(col), function='pg_descifrar') if model is not None and _campo_cifrado(model, col) else F(col)
            # Nulos como en Postgres: al final en ASC, al principio en DESC.
            claves.append(expr.desc(nulls_first=True) if direccion == 'desc' else expr.asc(nulls_last=True))
    return claves


def _campo_cifrado(model, col):
    from .fields import EncryptedMixin
    return any(f.attname == col and isinstance(f, EncryptedMixin) for f in model._meta.concrete_fields)


def columnas_de_select(select_str, permitidas):
    """'id, nombre' → ['id', 'nombre']; '*' o None → [] (todas)."""
    if not select_str or select_str.strip() == '*':
        return []
    columnas = [c.strip() for c in select_str.split(',') if c.strip()]
    invalidas = [c for c in columnas if c not in permitidas]
    if invalidas:
        raise ValueError(f'Columnas inválidas en select: {invalidas}')
    return columnas


def separar_meta_upsert(data):
    """
    El cliente manda {_upsert: true, _conflict: 'col1,col2'} para el upsert.
    Devuelve (fila_limpia, es_upsert, columnas_de_conflicto).
    """
    fila = dict(data) if isinstance(data, dict) else {}
    upsert = fila.pop('_upsert', False) is True
    conflicto = [
        c.strip()
        for c in str(fila.pop('_conflict', 'id')).split(',')
        if c.strip()
    ]
    return fila, upsert, conflicto


def como_json(valor):
    """
    psycopg2 no sabe adaptar dict/list: los valores JSONB viajan como texto y
    Postgres los castea solo. En SQLite el TEXT los guarda tal cual.
    """
    if isinstance(valor, (dict, list)):
        return json.dumps(valor, ensure_ascii=False)
    return valor


def error_de_base(exc):
    """
    Un error al guardar: si lo levantó un disparador o una función del
    dashboard, su mensaje real (no el "user-defined function raised exception"
    de SQLite).
    """
    from apps.dashboard.errores import manejar_excepcion

    respuesta = manejar_excepcion(exc, {})
    if respuesta is not None:
        return respuesta
    return Response({'error': str(exc)}, status=status.HTTP_400_BAD_REQUEST)


def error_de_integridad(exc):
    """
    Traduce violaciones de constraints al formato que los clientes esperan:
    el middleware distingue por error.code (23505 = repetido, como Postgres).
    """
    from apps.dashboard.mensajes import humanizar

    causa = getattr(exc, '__cause__', None)
    pgcode = getattr(causa, 'pgcode', None)
    mensaje = str(causa or exc)
    humano = humanizar(mensaje) or (f'No se pudo guardar: {mensaje}', None)

    def contestar(codigo, estado):
        return Response({'error': humano[0], 'message': humano[0], 'hint': humano[1],
                         'details': mensaje, 'code': codigo}, status=estado)

    if pgcode == '23505' or 'UNIQUE constraint failed' in mensaje:
        return contestar('23505', status.HTTP_409_CONFLICT)
    if pgcode == '23503' or 'FOREIGN KEY constraint failed' in mensaje:
        return contestar('23503', status.HTTP_409_CONFLICT)
    if pgcode == '23514' or 'CHECK constraint failed' in mensaje:
        return contestar('23514', status.HTTP_400_BAD_REQUEST)
    if pgcode == '23502' or 'NOT NULL constraint failed' in mensaje:
        return contestar('23502', status.HTTP_400_BAD_REQUEST)
    return contestar(pgcode, status.HTTP_400_BAD_REQUEST)


# Letras de cualquier idioma (hay una vista `v_auditoria_señales`), dígitos y _.
_IDENT_RE = re.compile(r'^[^\W\d]\w*\Z')


def identificador_valido(nombre):
    """True si `nombre` es un identificador SQL seguro (sin comillas ni espacios)."""
    return bool(nombre) and bool(_IDENT_RE.match(nombre))


def columnas_reales(table_name):
    """
    Devuelve el set de columnas reales de `table_name` según el motor activo.
    Postgres: information_schema (incluye las vistas v_*). SQLite: PRAGMA.
    """
    if not identificador_valido(table_name):
        return set()

    engine = connection.vendor
    with connection.cursor() as cursor:
        if engine == 'postgresql':
            # Sólo el esquema activo: en un Postgres heredado hay tablas con el
            # mismo nombre en `auth` y `storage` (users, objects...) y mezclar
            # sus columnas dejaría pasar filtros que después revientan en SQL.
            cursor.execute(
                "SELECT column_name FROM information_schema.columns "
                "WHERE table_name = %s AND table_schema = current_schema()",
                [table_name],
            )
            return {row[0] for row in cursor.fetchall()}
        # SQLite: PRAGMA table_info da (cid, name, type, ...). La columna 0 es
        # el número de orden; tomarla devolvía {0, 1, 2...} y todo filtro o
        # select por nombre salía como "Columna inválida".
        cursor.execute(f'PRAGMA table_info("{table_name}")')
        return {row[1] for row in cursor.fetchall()}


def tabla_existe(table_name):
    """True si la tabla existe en la base activa."""
    if not identificador_valido(table_name):
        return False

    engine = connection.vendor
    with connection.cursor() as cursor:
        if engine == 'postgresql':
            cursor.execute(
                "SELECT 1 FROM information_schema.tables "
                "WHERE table_name = %s AND table_schema = current_schema()",
                [table_name],
            )
        else:
            cursor.execute(
                "SELECT 1 FROM sqlite_master WHERE type='table' AND name = %s",
                [table_name],
            )
        return cursor.fetchone() is not None


def aplicar_cambios(obj, datos):
    """
    Pone en `obj` lo que manda el cliente y devuelve los campos que de verdad
    cambian, para guardar solo esos (como un UPDATE de PostgREST).

    Los formularios mandan la ficha entera. Guardarla toda volvería a cifrar
    email y dirección —Fernet da otro texto cada vez— y la auditoría los
    anotaría como cambiados aunque nadie los tocó.
    """
    from django.core.exceptions import FieldDoesNotExist, ValidationError

    cambiados = []
    for clave, valor in datos.items():
        try:
            campo = obj._meta.get_field(clave)
        except FieldDoesNotExist:
            campo = next((f for f in obj._meta.concrete_fields if f.attname == clave), None)
        if campo is None or not campo.concrete:
            continue
        nombre = campo.attname
        try:
            nuevo = campo.to_python(valor)
        except (ValidationError, TypeError, ValueError):
            nuevo = valor
        if getattr(obj, nombre) != nuevo:
            setattr(obj, nombre, valor)
            cambiados.append(nombre)
    return cambiados


def model_to_dict_safe(obj):
    """
    Convierte un modelo Django a dict JSON-serializable.
    """
    from django.forms.models import model_to_dict
    from django.db.models.fields.files import FieldFile
    from datetime import date, datetime

    from decimal import Decimal

    # Con el nombre de la columna (`plan_id`, no `plan`), como PostgREST y como
    # el listado: el frontend lee la misma clave en los dos.
    data = {}
    for field in obj._meta.concrete_fields:
        value = getattr(obj, field.attname)
        if isinstance(value, (date, datetime)):
            value = value.isoformat()
        elif isinstance(value, FieldFile):
            value = value.url if value else None
        elif isinstance(value, Decimal):
            value = float(value)
        elif isinstance(value, uuid.UUID):
            value = str(value)
        data[field.attname] = value

    descifrar_columnas([data])
    return data


# ── RAW SQL para tablas sin modelo Django ───────────────────────────────────


def clausulas_where(params, columnas, tabla=None):
    """
    Los filtros del querystring como SQL parametrizado.
    El nombre de cada columna se valida contra las reales: interpolarlo crudo
    sería inyección SQL.
    """
    where, valores = [], []

    for key, value in params.items():
        if key in PARAMETROS_DE_CONTROL:
            continue
        if key not in columnas:
            raise ValueError(f'Columna inválida: {key}')
        # `fecha=gte.X&fecha=lte.Y`: items() sólo da el último y el rango
        # quedaba abierto por un lado.
        for valor in params.getlist(key) if hasattr(params, 'getlist') else [value]:
            op, val, negado = partir_filtro(valor)
            condicion = condicion_sql(key, op, val, valores, tabla)
            if condicion is None:
                continue
            where.append(f'NOT ({condicion})' if negado else condicion)

    for crudo in params.getlist('or') if hasattr(params, 'getlist') else []:
        alternativas = []
        for col, valor in partir_or(crudo):
            if col not in columnas:
                raise ValueError(f'Columna inválida: {col}')
            op, val, negado = partir_filtro(valor)
            condicion = condicion_sql(col, op, val, valores, tabla)
            if condicion is not None:
                alternativas.append(f'NOT ({condicion})' if negado else condicion)
        if alternativas:
            where.append('(' + ' OR '.join(alternativas) + ')')

    return where, valores


_UUID_CON_GUIONES = re.compile(r'^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')
# Un timestamp ISO del navegador: '2026-10-14T19:34:00.000Z', con zona u hora.
_MOMENTO_ISO = re.compile(r'^\d{4}-\d\d-\d\dT\d\d:\d\d')


def valor_sql(val):
    """
    El valor de un filtro como lo guarda la base.

    En SQLite Django guarda los UUID sin guiones y los booleanos como 0/1; el
    cliente los manda como los devuelve la API ('a1b2c3d4-...', 'true'). En
    Postgres se usan tal cual.
    """
    if connection.vendor != 'sqlite' or not isinstance(val, str):
        return val
    if _UUID_CON_GUIONES.match(val):
        return val.replace('-', '').lower()
    if _MOMENTO_ISO.match(val):
        # `.lte('programado_para', new Date().toISOString())`: comparado como
        # texto contra '2026-10-14 19:34:00' la 'T' daba el orden al revés.
        return momento_sql(val)
    if val.lower() in ('true', 'false'):
        return 1 if val.lower() == 'true' else 0
    return val


def ref_columna(col, tabla=None):
    """
    La columna como se compara en SQL. Las cifradas en reposo, por su texto en
    claro (pg_descifrar, apps/core/fields.py): el token cambia en cada guardado.
    """
    return f'pg_descifrar("{col}")' if tabla and es_cifrada(tabla, col) else f'"{col}"'


def condicion_sql(col_, op, val, valores, tabla=None):
    """Una condición SQL con sus parámetros. None = la condición no aplica."""
    postgres = connection.vendor == 'postgresql'
    col = ref_columna(col_, tabla)

    if op is None:
        valores.append(valor_sql(val))
        return f'{col} = %s'
    if op == 'eq':
        if str(val).lower() == 'null':
            return f'{col} IS NULL'
        valores.append(valor_sql(val))
        return f'{col} = %s'
    if op == 'neq':
        if str(val).lower() == 'null':
            return f'{col} IS NOT NULL'
        valores.append(valor_sql(val))
        return f'{col} <> %s'
    if op == 'gt':
        valores.append(valor_sql(val))
        return f'{col} > %s'
    if op == 'gte':
        valores.append(valor_sql(val))
        return f'{col} >= %s'
    if op == 'lt':
        valores.append(valor_sql(val))
        return f'{col} < %s'
    if op == 'lte':
        valores.append(valor_sql(val))
        return f'{col} <= %s'
    if op == 'like':
        valores.append(val.replace('*', '%'))
        return f'{col} LIKE %s'
    if op == 'ilike':
        valores.append(val.replace('*', '%'))
        # En SQLite LIKE ya ignora mayúsculas: no hay ILIKE y hace falta el reemplazo.
        return f'{col} ILIKE %s' if postgres else f'{col} LIKE %s'
    if op == 'is':
        if str(val).lower() == 'null':
            return f'{col} IS NULL'
        valores.append(valor_sql(val))
        return f'{col} = %s'
    if op == 'in':
        lista = partir_lista_in(val)
        if not lista:
            # in.() no matchea nada, y negarlo matchea todo.
            return None
        valores.extend(valor_sql(v) for v in lista)
        huecos = ', '.join(['%s'] * len(lista))
        return f'{col} IN ({huecos})'
    return None


def proyeccion_de_select(select_str, columnas):
    """select=a,b → '"a", "b"'; '*' o None → '*'."""
    if not select_str or select_str.strip() == '*':
        return '*'
    pedidas = [c.strip() for c in select_str.split(',') if c.strip()]
    for c in pedidas:
        if c not in columnas:
            raise ValueError(f'Columna inválida en select: {c}')
    return ', '.join(f'"{c}"' for c in pedidas)


def orden_sql(params, columnas, tabla=None):
    """order=col.desc&order=otra.asc → '"col" DESC, "otra" ASC'."""
    pedidos = []
    for crudo in params.getlist('order'):
        for parte in crudo.split(','):
            parte = parte.strip()
            if not parte:
                continue
            col, direccion = parse_order(parte)
            if col not in columnas:
                raise ValueError(f'Columna de orden inválida: {col}')
            # Postgres pone los nulos al final en ASC y al principio en DESC;
            # SQLite al revés. Se explicita para que el orden sea el mismo.
            ref = ref_columna(col, tabla)
            if connection.vendor == 'sqlite':
                pedidos.append(f'{ref} DESC NULLS FIRST' if direccion == 'desc' else f'{ref} ASC NULLS LAST')
            else:
                pedidos.append(f'{ref} DESC' if direccion == 'desc' else f'{ref} ASC')
    return ', '.join(pedidos)


def filas_de_cursor(cursor):
    columnas = [c[0] for c in cursor.description]
    return [dict(zip(columnas, fila)) for fila in cursor.fetchall()]


_MOMENTO = re.compile(r'^\d{4}-\d\d-\d\d[ T]\d\d:\d\d(:\d\d(\.\d+)?)?$')
_HEX32 = re.compile(r'^[0-9a-f]{32}$')


def convertir_valor(clase, valor):
    """Un valor crudo de SQLite al tipo que devuelve PostgREST."""
    if valor is None or clase is None:
        return valor
    if clase == 'bool':
        if isinstance(valor, str):
            return valor.lower() in ('1', 't', 'true')
        return bool(valor)
    if clase == 'json':
        if isinstance(valor, str):
            try:
                return json.loads(valor)
            except ValueError:
                return valor
        return valor
    if clase == 'uuid':
        texto = str(valor)
        if _HEX32.match(texto):
            return f'{texto[:8]}-{texto[8:12]}-{texto[12:16]}-{texto[16:20]}-{texto[20:]}'
        return texto
    if clase == 'ts':
        texto = str(valor)
        if _MOMENTO.match(texto):
            return texto.replace(' ', 'T') + '+00:00'
        return texto
    if clase == 'date':
        return str(valor)[:10]
    if clase in ('int', 'num'):
        # El tipo inferido puede decir entero donde Postgres daba numeric (una
        # división, un EXTRACT): con decimales se respeta el valor.
        try:
            numero = float(valor)
        except (TypeError, ValueError):
            return valor
        numero = round(numero, 6)
        return int(numero) if clase == 'int' and numero.is_integer() else numero
    return valor


# Lo que guarda el modelo de Django en cada columna, como clase de PostgREST.
CLASE_DEL_CAMPO = {
    'UUIDField': 'uuid', 'BooleanField': 'bool', 'NullBooleanField': 'bool',
    'JSONField': 'json', 'DateTimeField': 'ts', 'DateField': 'date',
    'DecimalField': 'num', 'FloatField': 'num',
    'IntegerField': 'int', 'BigIntegerField': 'int', 'SmallIntegerField': 'int',
    'PositiveIntegerField': 'int', 'PositiveSmallIntegerField': 'int',
    'AutoField': 'int', 'BigAutoField': 'int',
}
_CLASES_DE_TABLA = {}


def clases_de(table_name):
    """
    {columna: clase} de una vista (lo infirió el traductor) o de una tabla (lo
    dice su modelo). Sin esto una tabla leída por SQL directo devolvería los
    UUID sin guiones, los booleanos como 0/1 y el JSON como texto.
    """
    try:
        from apps.dashboard.vistas_generadas import COLUMNAS
    except ImportError:
        COLUMNAS = {}
    if table_name in COLUMNAS:
        return COLUMNAS[table_name]
    if table_name not in _CLASES_DE_TABLA:
        clases = {}
        modelo = modelo_de_tabla(table_name)
        if modelo is not None:
            for campo in modelo._meta.concrete_fields:
                destino = campo.target_field if campo.is_relation else campo
                clase = CLASE_DEL_CAMPO.get(destino.get_internal_type())
                if clase:
                    clases.setdefault(campo.column, clase)
        _CLASES_DE_TABLA[table_name] = clases
    return _CLASES_DE_TABLA[table_name]


def modelo_de_tabla(table_name):
    """El modelo (no proxy) cuya tabla es `table_name`, o None."""
    for modelo in apps.get_models():
        if modelo._meta.db_table == table_name and not modelo._meta.proxy:
            return modelo
    return None


def completar_por_defecto(table_name, fila):
    """
    Los DEFAULT que en Postgres ponía la base (id, created_at, estados...). Las
    tablas de SQLite las crea Django y sus valores por defecto viven en el
    modelo: un INSERT por SQL directo sin `id` fallaba con NOT NULL.
    """
    if connection.vendor != 'sqlite':
        return fila
    modelo = modelo_de_tabla(table_name)
    if modelo is None:
        return fila
    completa = dict(fila)
    for campo in modelo._meta.concrete_fields:
        if campo.column in completa:
            continue
        if campo.has_default():
            valor = campo.get_default()
        elif getattr(campo, 'auto_now', False) or getattr(campo, 'auto_now_add', False):
            valor = timezone.now()
        else:
            continue
        if campo.is_relation and valor is not None and not isinstance(valor, (str, int, uuid.UUID)):
            valor = getattr(valor, 'pk', valor)
        completa[campo.column] = campo.get_db_prep_save(valor, connection)
    return completa


def momento_sql(valor):
    """
    Un timestamp como lo guarda Django en SQLite: '2026-10-14 19:34:00.123000',
    en UTC y sin zona.

    El navegador manda ISO ('2026-10-17T00:34:00.000Z'). Guardado tal cual, las
    comparaciones de texto de las vistas salen mal: la 'T' ordena después del
    espacio, y dentro del mismo día "vencido" o "de hoy" dan al revés.
    """
    from datetime import timezone as tz

    from django.utils.dateparse import parse_date, parse_datetime

    if not isinstance(valor, str) or not valor.strip():
        return valor
    texto = valor.strip()
    try:
        momento = parse_datetime(texto.replace('Z', '+00:00'))
    except ValueError:
        momento = None
    if momento is None:
        fecha = parse_date(texto)
        return f'{fecha.isoformat()} 00:00:00' if fecha else valor
    if momento.tzinfo is not None:
        momento = momento.astimezone(tz.utc).replace(tzinfo=None)
    return momento.isoformat(sep=' ', timespec='microseconds')


def fecha_sql(valor):
    """Una fecha como 'YYYY-MM-DD' aunque llegue con hora ('2026-10-14T00:00:00Z')."""
    if isinstance(valor, str) and len(valor) > 10 and valor[4] == '-' and valor[10] in 'T ':
        return valor[:10]
    return valor


class ValorInvalido(ValueError):
    """Un valor que Postgres rechazaría por su tipo (22P02)."""


def _tipo_de_red(table_name, columna):
    try:
        from apps.dashboard.funciones_generadas import TABLAS
    except ImportError:
        return None
    tipo = (TABLAS.get(table_name, {}).get(columna) or '').upper()
    return next((t for t in ('MACADDR', 'CIDR', 'INET') if tipo.startswith(t)), None)


def validar_red(tipo, valor):
    """
    INET, CIDR y MACADDR como los valida Postgres. En SQLite esas columnas son
    texto y aceptaban cualquier cosa ('QA' como gateway de un bloque de IPs).
    """
    import ipaddress

    if valor is None or valor == '':
        return None if valor == '' else valor
    texto = str(valor).strip()
    try:
        if tipo == 'INET':
            ipaddress.ip_interface(texto)
        elif tipo == 'CIDR':
            ipaddress.ip_network(texto, strict=True)
        elif tipo == 'MACADDR' and not re.fullmatch(r'([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}', texto):
            raise ValueError
    except ValueError:
        raise ValorInvalido(f'invalid input syntax for type {tipo.lower()}: "{texto}"')
    return texto


def respuesta_valor_invalido(e):
    from apps.dashboard.mensajes import humanizar

    texto, sugerencia = humanizar(str(e)) or (str(e), None)
    return Response({'error': texto, 'message': texto, 'hint': sugerencia, 'details': str(e), 'code': '22P02'},
                    status=400)


def convertir_entrada(table_name, fila):
    """Un cuerpo de INSERT/UPDATE como lo guarda la base (UUID, booleanos, fechas y redes)."""
    if connection.vendor != 'sqlite':
        return fila
    clases = clases_de(table_name)
    convertida = {}
    for columna, valor in fila.items():
        tipo_red = _tipo_de_red(table_name, columna)
        if tipo_red:
            convertida[columna] = validar_red(tipo_red, valor)
            continue
        clase = clases.get(columna)
        if clase in ('uuid', 'bool'):
            valor = valor_sql(valor)
        elif clase == 'ts':
            valor = momento_sql(valor)
        elif clase == 'date':
            valor = fecha_sql(valor)
        if es_cifrada(table_name, columna):
            valor = cifrar(valor) if isinstance(valor, str) else valor
        convertida[columna] = valor
    return convertida


def convertir_fila(table_name, fila):
    """Una sola fila (o None) con los tipos de PostgREST."""
    if fila:
        convertir_salida(table_name, [fila])
    return fila


def convertir_salida(table_name, filas):
    """
    Las filas de una vista con los tipos de PostgREST.

    SQLite no tiene booleanos, JSON ni UUID: devuelve 0/1, texto y hex sin
    guiones. `vistas_generadas.COLUMNAS` dice de qué clase es cada columna de
    cada vista (lo infirió el traductor desde el SQL de Postgres).
    """
    if not filas:
        return filas
    descifrar_columnas(filas)
    if connection.vendor != 'sqlite':
        return filas
    clases = clases_de(table_name)
    if not clases:
        return filas
    for fila in filas:
        for columna, valor in fila.items():
            if columna in clases:
                fila[columna] = convertir_valor(clases[columna], valor)
            elif (columna == 'id' or columna.endswith('_id')) and isinstance(valor, str) and _HEX32.match(valor):
                # Una columna de texto con un UUID adentro (auditoria_sistema.
                # entidad_id): los disparadores lo escriben sin guiones y en
                # Postgres el texto de un UUID los lleva. Los filtros ya
                # convierten en el otro sentido (valor_sql).
                fila[columna] = convertir_valor('uuid', valor)
    # Otra vez, ya con el JSON leído: tokens viejos guardados DENTRO de un JSON.
    descifrar_columnas(filas)
    return filas


def _descifrar_anidado(valor, columna=''):
    from .fields import descifrar, esta_cifrado
    # Las *_encrypted son secretos (contraseñas de equipos): nunca salen en
    # claro hacia el navegador.
    if columna.endswith('_encrypted'):
        return valor
    if esta_cifrado(valor):
        texto = descifrar(valor)
        # Un token que ninguna clave configurada abre (cifrado con una clave
        # que ya no está): se dice qué es en vez de mostrar el token.
        return '(dato cifrado con una clave anterior)' if esta_cifrado(texto) else texto
    if isinstance(valor, dict):
        return {k: _descifrar_anidado(v, k) for k, v in valor.items()}
    if isinstance(valor, list):
        return [_descifrar_anidado(v) for v in valor]
    return valor


def descifrar_columnas(filas):
    """
    Lo cifrado en reposo ('enc::...', apps/core/fields.py) que llegue crudo a
    la respuesta —SQL directo sobre una tabla, o fotos viejas de la auditoría
    que guardaron el token dentro del JSON— se descifra antes de responder a
    quien ya está autenticado.
    """
    for fila in filas:
        for columna, valor in fila.items():
            if isinstance(valor, (str, dict, list)):
                fila[columna] = _descifrar_anidado(valor, columna)


def respuesta_con_total(data, total):
    respuesta = Response(data)
    if total is not None:
        respuesta['X-Total-Count'] = str(total)
    return respuesta


def raw_select(request, table_name):
    """SELECT con filtros, orden, paginación, proyección y conteo."""
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    columnas = columnas_reales(table_name)
    if not columnas:
        return Response({'error': f'Tabla "{table_name}" no existe'}, status=404)

    # `select('*, proveedores(nombre)')`: los paréntesis son embeds, no columnas.
    columnas_base, embeds = partir_select(request.GET.get('select'))

    try:
        where, valores = clausulas_where(request.GET, columnas, table_name)
        proyeccion = proyeccion_de_select(','.join(columnas_base) or None, columnas)
        orden = orden_sql(request.GET, columnas, table_name)
    except ValueError as e:
        return Response({'error': str(e)}, status=400)
    filtro_rls = rls.filtro(table_name, 'select')
    if filtro_rls:
        where.append(filtro_rls)

    # Las columnas que sólo hacen falta para resolver los embeds viajan en el
    # SELECT y se borran antes de responder: quien pidió `select` no las quiere.
    relaciones = Relaciones()
    extras = set()
    if embeds and columnas_base and columnas_base != ['*']:
        extras = {
            c for c in columnas_necesarias(table_name, embeds, relaciones)
            if c not in set(columnas_base)
        }
        if extras:
            proyeccion += ', ' + ', '.join(f'"{c}"' for c in sorted(extras))

    # ¿Solo quieren el número? count=exact (opcionalmente con head=true).
    total = None
    if request.GET.get('count') == 'exact':
        sql_total = f'SELECT COUNT(*) FROM "{table_name}"'
        if where:
            sql_total += ' WHERE ' + ' AND '.join(where)
        with connection.cursor() as cursor:
            cursor.execute(sql_total, valores)
            total = cursor.fetchone()[0]

    if request.GET.get('head') == 'true':
        return respuesta_con_total([], total)

    sql = f'SELECT {proyeccion} FROM "{table_name}"'
    if where:
        sql += ' WHERE ' + ' AND '.join(where)
    if orden:
        sql += ' ORDER BY ' + orden
    if request.GET.get('limit') not in (None, ''):
        sql += f' LIMIT {max(int(request.GET["limit"]), 0)}'
    if request.GET.get('offset') not in (None, ''):
        sql += f' OFFSET {max(int(request.GET["offset"]), 0)}'

    with connection.cursor() as cursor:
        cursor.execute(sql, valores)
        filas = convertir_salida(table_name, filas_de_cursor(cursor))
    rls.quitar_ocultas(table_name, filas)

    if embeds:
        adjuntar(filas, table_name, embeds, relaciones)
        for fila in filas:
            for extra in extras:
                fila.pop(extra, None)

    return respuesta_con_total(filas, total)



def raw_select_one(request, table_name, pk):
    """SELECT por ID."""
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    filtro_rls = rls.filtro(table_name, 'select')
    with connection.cursor() as cursor:
        cursor.execute(f'SELECT * FROM "{table_name}" WHERE id = %s' + (f' AND {filtro_rls}' if filtro_rls else ''),
                       [valor_sql(str(pk))])
        columnas = [c[0] for c in cursor.description]
        fila = cursor.fetchone()

    if not fila:
        return Response({'error': 'Not found'}, status=404)
    return Response(rls.quitar_ocultas(table_name, [convertir_fila(table_name, dict(zip(columnas, fila)))])[0])


FILA_RLS = '__rls_fila'


def insertar_fila(table_name, columnas, data):
    """
    INSERT (o UPSERT con ON CONFLICT) de una fila; devuelve la fila creada.

    Si la tabla tiene política de escritura, la fila vuelve con su rowid en
    FILA_RLS para revisarla (WITH CHECK); quien llama lo saca antes de responder.
    """
    fila, upsert, conflicto = separar_meta_upsert(data)
    if not fila:
        raise ValueError('Body vacío')
    fila = convertir_entrada(table_name, fila)
    enviadas = list(fila.keys())
    fila = completar_por_defecto(table_name, fila)

    invalidas = [k for k in fila.keys() if k not in columnas]
    if invalidas:
        raise ValueError(f'Columnas inválidas: {invalidas}')

    columnas_sql = ', '.join(f'"{k}"' for k in fila.keys())
    placeholders = ', '.join(['%s'] * len(fila))
    valores = [como_json(v) for v in fila.values()]

    sql = f'INSERT INTO "{table_name}" ({columnas_sql}) VALUES ({placeholders})'

    if upsert:
        for c in conflicto:
            if c not in columnas:
                raise ValueError(f'Columna de conflicto inválida: {c}')
        if not conflicto:
            raise ValueError('El upsert necesita columnas de conflicto')
        llave = ', '.join(f'"{c}"' for c in conflicto)
        # Lo que no es clave de conflicto se pisa; si todo es clave, no hay
        # nada que actualizar y alcanza con DO NOTHING.
        # Sólo lo que mandó el cliente: los DEFAULT completados no pisan nada.
        actualiza = [c for c in enviadas if c not in conflicto]
        if actualiza:
            sql += f' ON CONFLICT ({llave}) DO UPDATE SET '
            sql += ', '.join(f'"{c}" = EXCLUDED."{c}"' for c in actualiza)
        else:
            sql += f' ON CONFLICT ({llave}) DO NOTHING'

    revisar = rls.necesita_revision(table_name, 'insert') or (upsert and rls.necesita_revision(table_name, 'update_check'))
    sql += f' RETURNING rowid AS "{FILA_RLS}", *' if revisar else ' RETURNING *'

    with connection.cursor() as cursor:
        cursor.execute(sql, valores)
        if cursor.description is None:
            # DO NOTHING: no hubo fila que devolver.
            return {}
        columnas_out = [c[0] for c in cursor.description]
        fila_out = cursor.fetchone()
        fila_out = dict(zip(columnas_out, fila_out)) if fila_out else {}
        if revisar and fila_out:
            rls.revisar_filas(cursor, table_name, [fila_out[FILA_RLS]], 'insert')
            if upsert:
                rls.revisar_filas(cursor, table_name, [fila_out[FILA_RLS]], 'update_check')
        fila_out.pop(FILA_RLS, None)
        return fila_out


def raw_insert(request, table_name):
    """
    INSERT INTO table. Acepta un objeto o un arreglo (lote).
    Con objeto devuelve la fila creada (frontend); con arreglo la lista.
    """
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    columnas = columnas_reales(table_name)
    if not columnas:
        return Response({'error': f'Tabla "{table_name}" no existe'}, status=404)

    data = request.data
    if data is None:
        return Response({'error': 'Body vacío'}, status=400)

    if rls.negada(table_name, 'insert'):
        return rls.respuesta_denegada(table_name, 'insert')

    filas = data if isinstance(data, list) else [data]
    try:
        with transaction.atomic():
            creadas = [insertar_fila(table_name, columnas, fila) for fila in filas]
    except rls.Denegado as e:
        return rls.respuesta_denegada(e.tabla, e.accion)
    except IntegrityError as e:
        return error_de_integridad(e)
    except ValorInvalido as e:
        return respuesta_valor_invalido(e)
    except (ValueError, TypeError) as e:
        return Response({'error': str(e)}, status=400)

    convertir_salida(table_name, [f for f in creadas if f])
    rls.quitar_ocultas(table_name, creadas)
    if isinstance(data, list):
        return Response(creadas, status=201)
    return Response(creadas[0] if creadas else None, status=201)


def raw_update(request, table_name, pk):
    """UPDATE table SET ... WHERE id = pk."""
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

    try:
        data = convertir_entrada(table_name, data)
    except ValorInvalido as e:
        return respuesta_valor_invalido(e)
    if rls.negada(table_name, 'update'):
        return rls.respuesta_denegada(table_name, 'update')
    set_clauses = ', '.join([f'"{k}" = %s' for k in data.keys()])
    valores = [como_json(v) for v in data.values()] + [valor_sql(str(pk))]
    filtro_rls = rls.filtro(table_name, 'update')
    revisar = rls.necesita_revision(table_name, 'update_check')

    try:
        with transaction.atomic(), connection.cursor() as cursor:
            cursor.execute(
                f'UPDATE "{table_name}" SET {set_clauses} WHERE id = %s'
                + (f' AND {filtro_rls}' if filtro_rls else '')
                + (f' RETURNING rowid AS "{FILA_RLS}", *' if revisar else ' RETURNING *'),
                valores,
            )
            fila = cursor.fetchone()
            if not fila:
                return Response({'error': 'Not found'}, status=404)
            columnas_out = [c[0] for c in cursor.description]
            fila = dict(zip(columnas_out, fila))
            if revisar:
                rls.revisar_filas(cursor, table_name, [fila.pop(FILA_RLS)], 'update_check')
    except rls.Denegado as e:
        return rls.respuesta_denegada(e.tabla, e.accion)
    except IntegrityError as e:
        return error_de_integridad(e)
    return Response(rls.quitar_ocultas(table_name, [convertir_fila(table_name, fila)])[0])


def raw_delete(request, table_name, pk):
    """DELETE FROM table WHERE id = pk."""
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    if rls.negada(table_name, 'delete'):
        return rls.respuesta_denegada(table_name, 'delete')
    filtro_rls = rls.filtro(table_name, 'delete')
    with connection.cursor() as cursor:
        cursor.execute(f'DELETE FROM "{table_name}" WHERE id = %s' + (f' AND {filtro_rls}' if filtro_rls else ''),
                       [valor_sql(str(pk))])
        if cursor.rowcount == 0:
            return Response({'error': 'Not found'}, status=404)
        return Response(status=204)


def raw_update_filtrado(request, table_name):
    """UPDATE con los filtros del querystring (sin id en la URL)."""
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    columnas = columnas_reales(table_name)
    if not columnas:
        return Response({'error': f'Tabla "{table_name}" no existe'}, status=404)

    data = request.data
    if not isinstance(data, dict) or not data:
        return Response({'error': 'Body vacío'}, status=400)

    try:
        where, valores_where = clausulas_where(request.GET, columnas, table_name)
    except ValueError as e:
        return Response({'error': str(e)}, status=400)

    if not where:
        return Response(
            {'error': 'PATCH sobre la colección exige al menos un filtro'},
            status=400,
        )

    invalidas = [k for k in data.keys() if k not in columnas]
    if invalidas:
        return Response({'error': f'Columnas inválidas: {invalidas}'}, status=400)

    try:
        data = convertir_entrada(table_name, data)
    except ValorInvalido as e:
        return respuesta_valor_invalido(e)
    if rls.negada(table_name, 'update'):
        return rls.respuesta_denegada(table_name, 'update')
    filtro_rls = rls.filtro(table_name, 'update')
    if filtro_rls:
        where.append(filtro_rls)
    set_sql = ', '.join([f'"{k}" = %s' for k in data.keys()])
    valores = [como_json(v) for v in data.values()] + valores_where
    revisar = rls.necesita_revision(table_name, 'update_check')
    sql = (f'UPDATE "{table_name}" SET {set_sql} WHERE ' + ' AND '.join(where)
           + (f' RETURNING rowid AS "{FILA_RLS}", *' if revisar else ' RETURNING *'))

    try:
        with transaction.atomic(), connection.cursor() as cursor:
            cursor.execute(sql, valores)
            crudas = filas_de_cursor(cursor)
            if revisar:
                rls.revisar_filas(cursor, table_name, [f.pop(FILA_RLS, None) for f in crudas], 'update_check')
    except rls.Denegado as e:
        return rls.respuesta_denegada(e.tabla, e.accion)
    except IntegrityError as e:
        return error_de_integridad(e)
    filas = convertir_salida(table_name, crudas)

    return Response(rls.quitar_ocultas(table_name, filas))


def raw_delete_filtrado(request, table_name):
    """DELETE con los filtros del querystring (sin id en la URL)."""
    if not identificador_valido(table_name):
        return Response({'error': 'Invalid table name'}, status=400)

    columnas = columnas_reales(table_name)
    if not columnas:
        return Response({'error': f'Tabla "{table_name}" no existe'}, status=404)

    try:
        where, valores = clausulas_where(request.GET, columnas, table_name)
    except ValueError as e:
        return Response({'error': str(e)}, status=400)

    if not where:
        return Response(
            {'error': 'DELETE sobre la colección exige al menos un filtro'},
            status=400,
        )

    if rls.negada(table_name, 'delete'):
        return rls.respuesta_denegada(table_name, 'delete')
    filtro_rls = rls.filtro(table_name, 'delete')
    if filtro_rls:
        where.append(filtro_rls)
    with connection.cursor() as cursor:
        cursor.execute(f'DELETE FROM "{table_name}" WHERE ' + ' AND '.join(where), valores)
        return Response(status=204)






