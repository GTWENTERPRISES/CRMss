"""
PostgREST sobre filas que ya están en memoria.

Las emulaciones de vistas (v_*) arman sus filas con el ORM, y después el cliente
les manda lo mismo que le mandaría a la vista real: `select=a,b`, `olt_id=eq.X`,
`senal_baja=eq.true`, `order=rx_power_dbm.asc`, `limit=6`, `count=exact`...

Las primeras emulaciones leían a mano uno o dos de esos parámetros e ignoraban
el resto, y el resultado no era un error sino datos equivocados: la tarjeta de
"señal baja" del inicio contaba TODAS las ONUs, porque el filtro no se aplicaba.
`servir_filas` aplica todo con las mismas reglas que `raw_select`:

- una columna que la vista no tiene es un 400, no un filtro que se ignora;
- en orden ascendente los nulos van al final y en descendente al principio, como
  en Postgres;
- `count=exact` es el total filtrado SIN el límite (cabecera X-Total-Count).
"""
import re
from datetime import date, datetime
from decimal import Decimal, InvalidOperation
from uuid import UUID

from rest_framework.response import Response

from .embeds import partir_select
from .views_generic import (
    PARAMETROS_DE_CONTROL,
    parse_order,
    partir_filtro,
    partir_lista_in,
    partir_or,
    respuesta_con_total,
)


def servir_filas(request, filas, columnas):
    """
    Responde `filas` (lista de dicts) como respondería PostgREST a la vista.

    `columnas` son las de la vista. Hacen falta aparte porque, sin filas, no hay
    de dónde sacarlas, y un filtro inválido tiene que dar 400 igual.
    """
    params = request.GET
    columnas = list(columnas)
    validas = set(columnas)

    try:
        # Antes de filtrar: sin filas, la validación fila por fila no correría.
        for key in params.keys():
            if key not in PARAMETROS_DE_CONTROL and key not in validas:
                raise ValueError(f'Columna inválida: {key}')
        for crudo in params.getlist('or'):
            for col, _ in partir_or(crudo):
                if col not in validas:
                    raise ValueError(f'Columna inválida: {col}')
        filas = [f for f in filas if _pasa_filtros(f, params)]
        orden = _orden(params, validas)
        proyeccion = _proyeccion(params, validas)
        limite = _entero(params, 'limit')
        desde = _entero(params, 'offset') or 0
    except ValueError as e:
        return Response({'error': str(e)}, status=400)

    total = len(filas) if params.get('count') == 'exact' else None
    if params.get('head') == 'true':
        return respuesta_con_total([], total)

    # Varias claves: se ordena de la última a la primera (sort es estable).
    for col, descendente in reversed(orden):
        filas.sort(key=lambda f, c=col, d=descendente: _clave_orden(f.get(c), d), reverse=descendente)

    filas = filas[desde:desde + limite] if limite is not None else filas[desde:]
    cols = proyeccion or columnas
    return respuesta_con_total([{c: _json(f.get(c)) for c in cols} for f in filas], total)


# ── Filtros ──────────────────────────────────────────────────────────────────


def _pasa_filtros(fila, params):
    for key in params.keys():
        if key in PARAMETROS_DE_CONTROL:
            continue
        for crudo in params.getlist(key):
            op, val, negado = partir_filtro(crudo)
            resultado = _cumple(fila.get(key), op or 'eq', val)
            if resultado is None:
                # Comparar con NULL no es verdadero ni falso: la fila no pasa,
                # tampoco negada (igual que NOT (NULL = x) en SQL).
                return False
            if resultado == negado:
                return False
    for crudo in params.getlist('or'):
        if not any(_cumple_uno(fila.get(col), valor) for col, valor in partir_or(crudo)):
            return False
    return True


def _cumple_uno(valor, crudo):
    op, val, negado = partir_filtro(crudo)
    resultado = _cumple(valor, op or 'eq', val)
    return resultado is not None and resultado != negado


def _cumple(valor, op, texto):
    """True/False según la condición; None si en SQL daría NULL."""
    if op == 'is':
        t = texto.lower()
        if t == 'null':
            return valor is None
        if t in ('true', 'false'):
            return valor is (t == 'true')
        return None if valor is None else _igual(valor, texto)

    if op in ('eq', 'neq') and texto.lower() == 'null':
        # `eq.null` / `neq.null` los entiende el resto del backend como IS (NOT) NULL.
        return (valor is None) if op == 'eq' else (valor is not None)

    if valor is None:
        return None

    if op == 'eq':
        return _igual(valor, texto)
    if op == 'neq':
        return not _igual(valor, texto)
    if op == 'in':
        return any(_igual(valor, t) for t in partir_lista_in(texto))
    if op in ('like', 'ilike'):
        patron = '^' + re.escape(texto.replace('*', '%')).replace('%', '.*').replace('_', '.') + '$'
        banderas = re.S | (re.I if op == 'ilike' else 0)
        return re.match(patron, str(valor), banderas) is not None
    if op in ('gt', 'gte', 'lt', 'lte'):
        a, b = _comparables(valor, texto)
        return {'gt': a > b, 'gte': a >= b, 'lt': a < b, 'lte': a <= b}[op]
    return None


def _igual(valor, texto):
    a, b = _comparables(valor, texto)
    return a == b


def _comparables(valor, texto):
    """El texto del querystring convertido al tipo del valor de la fila."""
    if isinstance(valor, bool):
        return valor, texto.lower() in ('true', 't', '1')
    if isinstance(valor, (int, float, Decimal)):
        try:
            return Decimal(str(valor)), Decimal(texto)
        except InvalidOperation:
            raise ValueError(f'"{texto}" no es un número')
    if isinstance(valor, (date, datetime)):
        # Fechas ISO: comparar el texto alcanza, recortado al largo pedido
        # (`dia=eq.2026-10-13` contra una fecha con hora también matchea).
        iso = valor.isoformat()
        return iso[:len(texto)] if len(texto) < len(iso) else iso, texto
    return str(valor), texto


# ── Orden, proyección, límites ───────────────────────────────────────────────


def _orden(params, validas):
    pedidos = []
    for crudo in params.getlist('order'):
        for parte in crudo.split(','):
            parte = parte.strip()
            if not parte:
                continue
            col, direccion = parse_order(parte)
            if col not in validas:
                raise ValueError(f'Columna de orden inválida: {col}')
            pedidos.append((col, direccion == 'desc'))
    return pedidos


def _clave_orden(valor, descendente):
    # Nulos al final en asc y al principio en desc (lo que hace Postgres): con
    # reverse=True, "ser mayor" los pone primero.
    if valor is None:
        return (1, 0)
    if isinstance(valor, Decimal):
        valor = float(valor)
    elif isinstance(valor, (date, datetime, UUID)):
        valor = str(valor)
    return (0, valor)


def _proyeccion(params, validas):
    base, _embeds = partir_select(params.get('select'))
    if not base or '*' in base:
        return None
    invalidas = [c for c in base if c not in validas]
    if invalidas:
        raise ValueError(f'Columnas inválidas en select: {invalidas}')
    return base


def _entero(params, nombre):
    crudo = params.get(nombre)
    if crudo in (None, ''):
        return None
    try:
        return max(int(crudo), 0)
    except ValueError:
        raise ValueError(f'{nombre} inválido: {crudo}')


def _json(valor):
    """Como lo serializa PostgREST: numeric como número, fechas ISO, uuid texto."""
    if isinstance(valor, Decimal):
        return float(valor)
    if isinstance(valor, (date, datetime)):
        return valor.isoformat()
    if isinstance(valor, UUID):
        return str(valor)
    return valor
