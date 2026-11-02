"""
Emulación por ORM de las vistas de soporte.

    v_tickets → apps/dashboard/esquema_fuente.py

`tickets` ya tiene las columnas del dashboard, así que `t.*` sale directo de la
tabla y acá sólo se calcula lo que la vista agrega: el código, los nombres del
técnico y del abonado, cuánto lleva abierto, si la visita está atrasada y los
tiempos y la distancia de la llegada al domicilio. Lo que todavía no tiene
modelo Django (puntos_red, cuadrillas, ticket_adjuntos) sale en None o en 0.
"""
import math
from datetime import date
from decimal import Decimal

from django.utils import timezone

from .filas_postgrest import servir_filas

CALCULADAS = [
    'codigo', 'nap', 'torre', 'tecnico', 'tecnico_telefono', 'cuadrilla',
    'cliente', 'plan_id', 'estado_cliente', 'horas_abierto', 'visita_atrasada',
    'adjuntos', 'minutos_en_ruta', 'minutos_en_sitio', 'llegada_distancia_m',
]


def _columnas_de(model):
    return [f.attname for f in model._meta.concrete_fields]


def _minutos(desde, hasta):
    if desde is None or hasta is None:
        return None
    return (hasta - desde).total_seconds() / 60


def _distancia_m(lat1, lng1, lat2, lng2):
    """Haversine, igual que la vista: metros entre el domicilio y la llegada."""
    if None in (lat1, lng1, lat2, lng2):
        return None
    lat1, lng1, lat2, lng2 = (math.radians(float(v)) for v in (lat1, lng1, lat2, lng2))
    a = (math.sin((lat2 - lat1) / 2) ** 2
         + math.cos(lat1) * math.cos(lat2) * math.sin((lng2 - lng1) / 2) ** 2)
    return Decimal(round(6371000 * 2 * math.asin(math.sqrt(a))))


def v_tickets(request):
    from apps.clientes.models import Cliente
    from apps.core.models import Tecnico
    from apps.soporte.models import Ticket

    columnas_tabla = _columnas_de(Ticket)
    from django.db.models import Count
    from apps.dashboard.models import Cuadrillas, PuntosRed, TicketAdjuntos

    tecnicos = {t.id: t for t in Tecnico.objects.all()}
    puntos = dict(PuntosRed.objects.values_list('id', 'nombre'))
    cuadrillas = dict(Cuadrillas.objects.values_list('id', 'nombre'))
    adjuntos = dict(TicketAdjuntos.objects.values('ticket_id').annotate(n=Count('id')).values_list('ticket_id', 'n'))
    clientes = {c['id']: c for c in Cliente.objects.values('id', 'nombre', 'plan_id', 'estado')}
    ahora = timezone.now()
    hoy = date.today()

    filas = []
    for t in Ticket.objects.values(*columnas_tabla):
        tec = tecnicos.get(t['tecnico_id'])
        cli = clientes.get(t['client_id'])
        cerrado_o_ahora = t['cerrado_at'] or ahora
        filas.append({
            **t,
            'codigo': f"{t['numero']:06d}" if t['numero'] is not None else None,
            'nap': puntos.get(t['nap_id']),
            'torre': puntos.get(t['torre_id']),
            'tecnico': tec.nombre if tec else None,
            'tecnico_telefono': tec.telefono if tec else None,
            'cuadrilla': cuadrillas.get(t['cuadrilla_id']),
            'cliente': cli['nombre'] if cli else None,
            'plan_id': cli['plan_id'] if cli else None,
            'estado_cliente': cli['estado'] if cli else None,
            'horas_abierto': (cerrado_o_ahora - t['created_at']).total_seconds() / 3600,
            'visita_atrasada': (
                t['estado'] not in ('resuelto', 'cancelado')
                and t['fecha_visita'] is not None
                and t['fecha_visita'] < hoy
            ),
            'adjuntos': adjuntos.get(t['id'], 0),
            'minutos_en_ruta': _minutos(t['salida_at'], t['llegada_at']),
            'minutos_en_sitio': _minutos(t['llegada_at'], cerrado_o_ahora) if t['llegada_at'] else None,
            'llegada_distancia_m': _distancia_m(t['latitud'], t['longitud'], t['llegada_lat'], t['llegada_lng']),
        })
    return servir_filas(request, filas, columnas_tabla + CALCULADAS)
