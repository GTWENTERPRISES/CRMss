"""
Utilidades para el módulo de soporte
Incluye detección de fallas masivas de sector
"""
from datetime import timedelta

from django.db.models import Count, Q
from django.utils import timezone


def detectar_falla_masiva_sector(cliente=None, olt=None, puerto=None, umbral_porcentaje=30, umbral_minimo_onus=3):
    """
    Detecta si hay una falla masiva en el sector del cliente.
    
    Una falla masiva se identifica cuando un porcentaje significativo de ONUs
    en el mismo puerto/sector están offline al mismo tiempo.
    
    Args:
        cliente: Instancia de Cliente (opcional, se usa para obtener su ONU)
        olt: Instancia de OLT (opcional, si no se pasa cliente)
        puerto: Número de puerto (opcional, si no se pasa cliente)
        umbral_porcentaje: Porcentaje mínimo de ONUs offline para considerar falla masiva (default: 30%)
        umbral_minimo_onus: Número mínimo de ONUs offline para considerar falla masiva (default: 3)
    
    Returns:
        dict: {
            'falla_detectada': bool,
            'onus_offline': int,
            'onus_total': int,
            'porcentaje_offline': float,
            'puerto': str,
            'olt_nombre': str,
            'mensaje': str
        }
    """
    from apps.olts.models import ONU
    
    # Si se pasa cliente, obtener su ONU
    if cliente:
        onu_cliente = ONU.objects.filter(servicios__cliente=cliente).select_related('olt').first()
        if not onu_cliente:
            return {
                'falla_detectada': False,
                'onus_offline': 0,
                'onus_total': 0,
                'porcentaje_offline': 0.0,
                'puerto': None,
                'olt_nombre': None,
                'mensaje': 'Cliente sin ONU asignada'
            }
        
        olt = onu_cliente.olt
        puerto = onu_cliente.puerto
    
    # Validar que tengamos OLT y puerto
    if not olt or puerto is None:
        return {
            'falla_detectada': False,
            'onus_offline': 0,
            'onus_total': 0,
            'porcentaje_offline': 0.0,
            'puerto': None,
            'olt_nombre': None,
            'mensaje': 'Datos insuficientes para detectar falla'
        }
    
    # Obtener todas las ONUs del mismo puerto
    onus_puerto = ONU.objects.filter(
        olt=olt,
        puerto=puerto
    )
    
    onus_total = onus_puerto.count()
    
    # Si hay muy pocas ONUs en el puerto, no tiene sentido buscar falla masiva
    if onus_total < umbral_minimo_onus:
        return {
            'falla_detectada': False,
            'onus_offline': 0,
            'onus_total': onus_total,
            'porcentaje_offline': 0.0,
            'puerto': f'{olt.nombre} - Puerto {puerto}',
            'olt_nombre': olt.nombre,
            'mensaje': f'Puerto con pocas ONUs ({onus_total}), no aplica detección masiva'
        }
    
    # Contar ONUs offline/LOS (actualizadas recientemente para evitar falsos positivos)
    tiempo_limite = timezone.now() - timedelta(minutes=30)
    onus_offline = onus_puerto.filter(
        Q(estado__in=[ONU.Estado.OFFLINE, ONU.Estado.LOS]) &
        (Q(ultima_lectura__gte=tiempo_limite) | Q(ultima_lectura__isnull=True))
    ).count()
    
    # Calcular porcentaje
    porcentaje_offline = (onus_offline / onus_total * 100) if onus_total > 0 else 0.0
    
    # Determinar si hay falla masiva
    falla_detectada = (
        onus_offline >= umbral_minimo_onus and
        porcentaje_offline >= umbral_porcentaje
    )
    
    # Generar mensaje
    if falla_detectada:
        mensaje = (
            f'Falla masiva detectada: {onus_offline} de {onus_total} ONUs offline '
            f'({porcentaje_offline:.1f}%) en {olt.nombre} puerto {puerto}'
        )
    else:
        mensaje = f'Sin falla masiva. {onus_offline} de {onus_total} ONUs offline ({porcentaje_offline:.1f}%)'
    
    return {
        'falla_detectada': falla_detectada,
        'onus_offline': onus_offline,
        'onus_total': onus_total,
        'porcentaje_offline': round(porcentaje_offline, 2),
        'puerto': f'{olt.nombre} - Puerto {puerto}',
        'olt_nombre': olt.nombre,
        'mensaje': mensaje
    }


def detectar_falla_masiva_olt(olt, umbral_porcentaje=40, umbral_minimo_onus=10):
    """
    Detecta si hay una falla masiva en toda la OLT.
    
    Args:
        olt: Instancia de OLT
        umbral_porcentaje: Porcentaje mínimo de ONUs offline (default: 40%)
        umbral_minimo_onus: Número mínimo de ONUs offline (default: 10)
    
    Returns:
        dict: Información sobre la falla en la OLT
    """
    from apps.olts.models import ONU
    
    onus_total = ONU.objects.filter(olt=olt).count()
    
    if onus_total == 0:
        return {
            'falla_detectada': False,
            'onus_offline': 0,
            'onus_total': 0,
            'porcentaje_offline': 0.0,
            'olt_nombre': olt.nombre,
            'mensaje': 'OLT sin ONUs registradas'
        }
    
    # Contar ONUs offline actualizadas recientemente
    tiempo_limite = timezone.now() - timedelta(minutes=30)
    onus_offline = ONU.objects.filter(
        olt=olt,
        estado__in=[ONU.Estado.OFFLINE, ONU.Estado.LOS]
    ).filter(
        Q(ultima_lectura__gte=tiempo_limite) | Q(ultima_lectura__isnull=True)
    ).count()
    
    porcentaje_offline = (onus_offline / onus_total * 100) if onus_total > 0 else 0.0
    
    falla_detectada = (
        onus_offline >= umbral_minimo_onus and
        porcentaje_offline >= umbral_porcentaje
    )
    
    if falla_detectada:
        mensaje = (
            f'Falla masiva en OLT {olt.nombre}: {onus_offline} de {onus_total} '
            f'ONUs offline ({porcentaje_offline:.1f}%)'
        )
    else:
        mensaje = f'{olt.nombre}: {onus_offline} de {onus_total} ONUs offline ({porcentaje_offline:.1f}%)'
    
    return {
        'falla_detectada': falla_detectada,
        'onus_offline': onus_offline,
        'onus_total': onus_total,
        'porcentaje_offline': round(porcentaje_offline, 2),
        'olt_nombre': olt.nombre,
        'mensaje': mensaje
    }


def obtener_estadisticas_sector(olt, puerto):
    """
    Obtiene estadísticas detalladas de un puerto/sector específico.
    
    Args:
        olt: Instancia de OLT
        puerto: Número de puerto
    
    Returns:
        dict: Estadísticas del sector
    """
    from apps.olts.models import ONU
    
    onus = ONU.objects.filter(olt=olt, puerto=puerto)
    
    stats = onus.aggregate(
        total=Count('id'),
        online=Count('id', filter=Q(estado=ONU.Estado.ONLINE)),
        offline=Count('id', filter=Q(estado=ONU.Estado.OFFLINE)),
        los=Count('id', filter=Q(estado=ONU.Estado.LOS)),
        unknown=Count('id', filter=Q(estado=ONU.Estado.UNKNOWN))
    )
    
    return {
        'olt': olt.nombre,
        'puerto': puerto,
        'total_onus': stats['total'],
        'online': stats['online'],
        'offline': stats['offline'],
        'los': stats['los'],
        'unknown': stats['unknown'],
        'porcentaje_online': round((stats['online'] / stats['total'] * 100) if stats['total'] > 0 else 0, 2)
    }
