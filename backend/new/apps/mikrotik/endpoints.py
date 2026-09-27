"""
Endpoints especializados para operaciones MikroTik
"""
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .drivers import get_driver
from .models import FirewallBloqueo, IPAddress, RouterMikrotik


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def bloquear_cliente(request):
    """
    Bloquea un cliente en el firewall de MikroTik
    
    POST /api/mikrotik/bloquear-cliente/
    {
        "router_id": "uuid",
        "cliente_ip": "192.168.1.100",
        "tipo_accion": "CORTAR_SERVICIO",
        "comentario": "Mora - Factura vencida"
    }
    """
    router_id = request.data.get('router_id')
    cliente_ip = request.data.get('cliente_ip')
    tipo_accion = request.data.get('tipo_accion', 'CORTAR_SERVICIO')
    comentario = request.data.get('comentario', '')
    mac_address = request.data.get('mac_address', '')
    
    if not router_id or not cliente_ip:
        return Response(
            {'error': 'router_id y cliente_ip son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    try:
        router = RouterMikrotik.objects.get(id=router_id)
    except RouterMikrotik.DoesNotExist:
        return Response(
            {'error': 'Router no encontrado'},
            status=status.HTTP_404_NOT_FOUND,
        )
    
    # Ejecutar bloqueo en MikroTik
    try:
        with get_driver(router) as driver:
            lista = 'CORTADOS' if tipo_accion == 'CORTAR_SERVICIO' else 'MOROSOS'
            resultado = driver.crear_bloqueo(cliente_ip, lista)
    except Exception as e:
        return Response(
            {'error': f'Error al conectar con MikroTik: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )
    
    # Registrar en base de datos
    bloqueo = FirewallBloqueo.objects.create(
        router=router,
        cliente_ip=cliente_ip,
        mac_address=mac_address,
        tipo_accion=tipo_accion,
        comentario=comentario,
        routeros_id=resultado.get('.id', ''),
        activo=True,
    )
    
    return Response({
        'status': 'success',
        'mensaje': f'Cliente {cliente_ip} bloqueado correctamente',
        'bloqueo_id': str(bloqueo.id),
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def desbloquear_cliente(request):
    """
    Desbloquea un cliente del firewall de MikroTik
    
    POST /api/mikrotik/desbloquear-cliente/
    {
        "router_id": "uuid",
        "cliente_ip": "192.168.1.100"
    }
    """
    router_id = request.data.get('router_id')
    cliente_ip = request.data.get('cliente_ip')
    
    if not router_id or not cliente_ip:
        return Response(
            {'error': 'router_id y cliente_ip son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    try:
        router = RouterMikrotik.objects.get(id=router_id)
    except RouterMikrotik.DoesNotExist:
        return Response(
            {'error': 'Router no encontrado'},
            status=status.HTTP_404_NOT_FOUND,
        )
    
    # Quitar bloqueo de MikroTik
    try:
        with get_driver(router) as driver:
            # Intentar quitar de ambas listas
            result1 = driver.quitar_bloqueo(cliente_ip, 'CORTADOS')
            result2 = driver.quitar_bloqueo(cliente_ip, 'MOROSOS')
            liberado = result1 or result2
    except Exception as e:
        return Response(
            {'error': f'Error al conectar con MikroTik: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )
    
    # Actualizar registros en base de datos
    bloqueos = FirewallBloqueo.objects.filter(
        router=router,
        cliente_ip=cliente_ip,
        activo=True,
    )
    count = bloqueos.update(activo=False)
    
    return Response({
        'status': 'success',
        'mensaje': f'Cliente {cliente_ip} desbloqueado correctamente',
        'liberado_de_mikrotik': liberado,
        'registros_actualizados': count,
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def configurar_ancho_banda(request):
    """
    Configura el ancho de banda de un cliente (queue simple)
    
    POST /api/mikrotik/configurar-ancho-banda/
    {
        "router_id": "uuid",
        "cliente_ip": "192.168.1.100",
        "nombre": "cliente_juan_perez",
        "subida_mbps": 10,
        "bajada_mbps": 50,
        "comentario": "Plan 50MB"
    }
    """
    router_id = request.data.get('router_id')
    cliente_ip = request.data.get('cliente_ip')
    nombre = request.data.get('nombre')
    subida_mbps = request.data.get('subida_mbps')
    bajada_mbps = request.data.get('bajada_mbps')
    comentario = request.data.get('comentario', '')
    
    if not all([router_id, cliente_ip, nombre, subida_mbps, bajada_mbps]):
        return Response(
            {'error': 'Faltan campos requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    try:
        router = RouterMikrotik.objects.get(id=router_id)
    except RouterMikrotik.DoesNotExist:
        return Response(
            {'error': 'Router no encontrado'},
            status=status.HTTP_404_NOT_FOUND,
        )
    
    # Convertir Mbps a formato MikroTik (ej: "10M/50M")
    max_limit_up = f'{subida_mbps}M'
    max_limit_down = f'{bajada_mbps}M'
    
    try:
        with get_driver(router) as driver:
            # Verificar si ya existe el queue
            queues_existentes = driver.obtener_queue_simple(name=nombre)
            
            if queues_existentes:
                # Actualizar queue existente
                driver.actualizar_queue_simple(nombre, max_limit_up, max_limit_down)
                accion = 'actualizado'
            else:
                # Crear nuevo queue
                driver.crear_queue_simple(
                    nombre,
                    cliente_ip,
                    max_limit_up,
                    max_limit_down,
                    comentario,
                )
                accion = 'creado'
    except Exception as e:
        return Response(
            {'error': f'Error al configurar ancho de banda: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )
    
    return Response({
        'status': 'success',
        'mensaje': f'Queue {accion} correctamente',
        'nombre': nombre,
        'subida': f'{subida_mbps} Mbps',
        'bajada': f'{bajada_mbps} Mbps',
    })


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def obtener_estadisticas_router(request, router_id):
    """
    Obtiene estadísticas en tiempo real del router MikroTik
    
    GET /api/mikrotik/estadisticas/{router_id}/
    """
    try:
        router = RouterMikrotik.objects.get(id=router_id)
    except RouterMikrotik.DoesNotExist:
        return Response(
            {'error': 'Router no encontrado'},
            status=status.HTTP_404_NOT_FOUND,
        )
    
    try:
        with get_driver(router) as driver:
            recursos = driver.obtener_recursos()
            interfaces = driver.obtener_interfaces()
            queues = driver.obtener_queue_simple()
            dhcp_leases = driver.obtener_dhcp_leases()
            
            # Extraer información relevante
            resource_info = recursos[0] if recursos else {}
            
            estadisticas = {
                'router': {
                    'nombre': router.nombre,
                    'ip': router.ip_host,
                    'activo': router.activo,
                },
                'recursos': {
                    'uptime': resource_info.get('uptime', 'N/A'),
                    'cpu_load': resource_info.get('cpu-load', 'N/A'),
                    'free_memory': resource_info.get('free-memory', 'N/A'),
                    'total_memory': resource_info.get('total-memory', 'N/A'),
                },
                'interfaces': len(interfaces),
                'queues_activas': len(queues),
                'clientes_dhcp': len([l for l in dhcp_leases if l.get('status') == 'bound']),
            }
    except Exception as e:
        return Response(
            {'error': f'Error al obtener estadísticas: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )
    
    return Response(estadisticas)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def asignar_ip(request):
    """
    Asigna una IP a una interfaz del router
    
    POST /api/mikrotik/asignar-ip/
    {
        "router_id": "uuid",
        "address": "192.168.1.254/24",
        "interface": "ether1",
        "comentario": "Red LAN principal"
    }
    """
    router_id = request.data.get('router_id')
    address = request.data.get('address')
    interface = request.data.get('interface')
    comentario = request.data.get('comentario', '')
    
    if not all([router_id, address, interface]):
        return Response(
            {'error': 'router_id, address e interface son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    try:
        router = RouterMikrotik.objects.get(id=router_id)
    except RouterMikrotik.DoesNotExist:
        return Response(
            {'error': 'Router no encontrado'},
            status=status.HTTP_404_NOT_FOUND,
        )
    
    try:
        with get_driver(router) as driver:
            driver.crear_ip(address, interface, comentario)
    except Exception as e:
        return Response(
            {'error': f'Error al asignar IP: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )
    
    # Registrar en base de datos
    ip_parts = address.split('/')
    ip_address = ip_parts[0]
    netmask = f'/{ip_parts[1]}' if len(ip_parts) > 1 else '/24'
    
    IPAddress.objects.create(
        router=router,
        ip_address=ip_address,
        netmask=netmask,
        interfaz=interface,
        estado='ASIGNADA',
    )
    
    return Response({
        'status': 'success',
        'mensaje': f'IP {address} asignada a {interface}',
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ping_desde_router(request):
    """
    Ejecuta ping desde el router MikroTik
    
    POST /api/mikrotik/ping/
    {
        "router_id": "uuid",
        "destino": "8.8.8.8",
        "count": 4
    }
    """
    router_id = request.data.get('router_id')
    destino = request.data.get('destino')
    count = request.data.get('count', 4)
    
    if not router_id or not destino:
        return Response(
            {'error': 'router_id y destino son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    try:
        router = RouterMikrotik.objects.get(id=router_id)
    except RouterMikrotik.DoesNotExist:
        return Response(
            {'error': 'Router no encontrado'},
            status=status.HTTP_404_NOT_FOUND,
        )
    
    try:
        with get_driver(router) as driver:
            resultado = driver.ping(destino, count)
    except Exception as e:
        return Response(
            {'error': f'Error al ejecutar ping: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )
    
    return Response({
        'status': 'success',
        'destino': destino,
        'resultado': resultado,
    })
