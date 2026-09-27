import math
import random
import string

from django.utils import timezone


PREFIJOS = {
    'INSTALACION': 'INS',
    'TICKET': 'TK',
    'TRANSACCION': 'REP',
    'CONTRATO': 'CTR',
    'PAGO': 'PAG',
}


def generar_codigo(prefijo, longitud=4):
    digitos = ''.join(random.choices(string.digits, k=longitud))
    return f'{prefijo}-{digitos}'


def generar_codigo_por_tipo(tipo, longitud=4):
    return generar_codigo(PREFIJOS.get(tipo.upper(), tipo.upper()[:3]), longitud)


def generar_numero_factura():
    ahora = timezone.now()
    return f'{ahora:%Y%m}{random.randint(1000, 9999)}'


def calcular_distancia_haversine(lat1, lon1, lat2, lon2):
    """
    Calcula la distancia entre dos puntos geográficos usando la fórmula de Haversine.
    
    Args:
        lat1, lon1: Coordenadas del primer punto (latitud, longitud)
        lat2, lon2: Coordenadas del segundo punto (latitud, longitud)
    
    Returns:
        Distancia en metros
    """
    R = 6371000  # Radio de la Tierra en metros
    
    # Convertir grados a radianes
    lat1_rad = math.radians(float(lat1))
    lat2_rad = math.radians(float(lat2))
    delta_lat = math.radians(float(lat2) - float(lat1))
    delta_lon = math.radians(float(lon2) - float(lon1))
    
    # Fórmula de Haversine
    a = (math.sin(delta_lat / 2) ** 2 +
         math.cos(lat1_rad) * math.cos(lat2_rad) *
         math.sin(delta_lon / 2) ** 2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    distancia = R * c
    return round(distancia, 2)
