"""
Dispatcher de las vistas del dashboard (v_*).

El dashboard pide `/api/v1/tables/v_algo` en casi todas sus pantallas: son 115
vistas distintas las que consulta, y las da por hechas. Django, en cambio, sólo
tenía una emulación por ORM para 14 de ellas y devolvía `[]` para el resto —una
lista vacía, con código 200—. El resultado era el peor posible: pantallas "sin
datos" sin un solo error en la consola, y nadie se enteraba de que faltaba migrar
algo.

El orden de resolución es deliberado:

1. **La vista existe en la base** → se sirve con `raw_select`: datos reales, con
   los mismos filtros (`eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `like`, `ilike`,
   `is`, `in`, `not.*`), orden múltiple, paginación, proyección `select=` y
   `count=exact` que PostgREST. Las 130 vistas de `apps/dashboard/esquema_fuente.py`
   viven en Postgres, así que en producción este es el camino normal.
2. **No existe** (desarrollo con SQLite, que no crea las vistas SQL, o una vista
   todavía sin migrar) → emulación por ORM, si la hay en `VISTAS_ORM`.
3. **Ninguna de las dos** → `[]`. Una vista que falta es un pendiente de
   migración, no una caída: la pantalla queda vacía en vez de romperse.

La capa 2 es una red de desarrollo, no un objetivo. Cada vista que se pueda
servir desde Postgres conviene servirla desde Postgres: las emulaciones devuelven
campos de relleno (`plan_nombre: None`, `valor_mensual: 0`, `dias_sin_contacto:
0`) que la vista real sí calcula, así que una emulación "que anda" en SQLite
puede mostrar números peores que los verdaderos.
"""
import logging

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.dashboard import contexto

from . import views_vistas_clientes, views_vistas_gpon, views_vistas_soporte
from .views_generic import columnas_reales, raw_select

logger = logging.getLogger(__name__)


# Vistas que el dashboard pide y que en desarrollo (SQLite) no existen como SQL.
# Los nombres son los de Postgres: es la clave con la que se busca la emulación.
VISTAS_ORM = {
    'v_clientes_ficha': views_vistas_clientes.v_clientes_ficha,
    'v_saldo_clientes': views_vistas_clientes.v_saldo_clientes,
    'v_tickets': views_vistas_soporte.v_tickets,
    'v_onus_clientes': views_vistas_gpon.v_onus_clientes,
    'v_olt_resumen': views_vistas_gpon.v_olt_resumen,
    'v_pon_puertos': views_vistas_gpon.v_pon_puertos,
    'v_onus_por_dia': views_vistas_gpon.v_onus_por_dia,
    'v_esperando_autorizacion': views_vistas_gpon.v_esperando_autorizacion,
}


def _peticion_django(request):
    """
    La petición de Django debajo de la de DRF.

    Las emulaciones son vistas de DRF ya envueltas: llamarlas con una petición de
    DRF las envolvería por segunda vez. Se les pasa la petición original —sólo
    leen `request.GET`— y la autenticación ya la resolvió este dispatcher.
    """
    return getattr(request, '_request', request)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def vista(request, nombre):
    """
    GET /api/v1/tables/v_xxx

    Sirve cualquier vista del dashboard: desde Postgres si existe (el caso
    normal), desde la emulación por ORM si no, y vacía si no hay ninguna de las
    dos.
    """
    contexto.establecer_usuario(request.user)
    if columnas_reales(nombre):
        return raw_select(request, nombre)

    emulacion = VISTAS_ORM.get(nombre)
    if emulacion is not None:
        logger.debug('vista %s servida por emulación ORM (no existe en la base)', nombre)
        return emulacion(_peticion_django(request))

    logger.debug('vista %s no existe en la base ni tiene emulación: se devuelve []', nombre)
    return Response([])
