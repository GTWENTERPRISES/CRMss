"""
Endpoints especializados para ventas y soporte según bd.md sección 5.2 y 5.3
"""
import uuid
from datetime import date, timedelta

from django.db import transaction
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from apps.clientes.models import Cliente
from apps.core.fields import get_blind_hash
from apps.facturacion.models import PlanVelocidad
from apps.olts.models import ONU

from .models import Instalacion, Ticket


@api_view(['POST'])
@permission_classes([AllowAny])
def validar_cobertura(request):
    """
    Endpoint 4: Validar Cobertura
    POST /api/v1/ventas/validar-cobertura
    """
    data = request.data
    latitud = data.get('latitud')
    longitud = data.get('longitud')
    tecnologia = data.get('tecnologia', 'ftth')

    if not latitud or not longitud:
        return Response({
            'status': 'error',
            'mensaje': 'Latitud y longitud son requeridas'
        }, status=status.HTTP_400_BAD_REQUEST)

    # TODO: Implementar lógica real de validación de cobertura
    # Por ahora simulamos respuesta positiva
    
    tiene_cobertura = True
    caja_nap_cercana = "NAP-NORTE-04"
    distancia_metros = 45
    puertos_disponibles = 6

    return Response({
        'status': 'success',
        'tiene_cobertura': tiene_cobertura,
        'caja_nap_cercana': caja_nap_cercana,
        'distancia_metros': distancia_metros,
        'puertos_disponibles': puertos_disponibles,
        'opciones': [
            {
                'nombre': caja_nap_cercana,
                'tipo': 'nap',
                'distancia_metros': distancia_metros,
                'disponibles': puertos_disponibles
            }
        ]
    })


@api_view(['GET'])
@permission_classes([AllowAny])
def catalogo_planes(request):
    """
    Endpoint 5: Catálogo de Planes
    GET /api/v1/ventas/planes?categoria=residencial
    """
    categoria = request.query_params.get('categoria')
    
    planes_query = PlanVelocidad.objects.all().order_by('precio')
    
    if categoria:
        planes_query = planes_query.filter(categoria=categoria)

    planes_data = []
    for plan in planes_query:
        planes_data.append({
            'id': str(plan.id),
            'nombre': plan.nombre,
            'bajada_mbps': plan.bajada_mbps,
            'subida_mbps': plan.subida_mbps,
            'precio': float(plan.precio),
            'precio_incluye_iva': plan.precio_incluye_iva,
            'categoria': plan.categoria
        })

    return Response({
        'status': 'success',
        'planes': planes_data
    })


@api_view(['POST'])
@permission_classes([AllowAny])
@transaction.atomic
def agendar_instalacion(request):
    """
    Endpoint 6: Agendar Instalación
    POST /api/v1/ventas/agendar-instalacion
    """
    data = request.data
    prospecto = data.get('prospecto', {})
    plan_id = data.get('plan_id')
    fecha_programada = data.get('fecha_programada')
    franja_horaria = data.get('franja_horaria', '')

    # Validar datos
    required_prospecto = ['nombre', 'cedula', 'telefono', 'direccion']
    for field in required_prospecto:
        if field not in prospecto:
            return Response({
                'status': 'error',
                'mensaje': f'Campo requerido en prospecto: {field}'
            }, status=status.HTTP_400_BAD_REQUEST)

    if not plan_id or not fecha_programada:
        return Response({
            'status': 'error',
            'mensaje': 'plan_id y fecha_programada son requeridos'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Verificar plan
    try:
        plan = PlanVelocidad.objects.get(id=plan_id)
    except PlanVelocidad.DoesNotExist:
        return Response({
            'status': 'error',
            'mensaje': 'Plan no encontrado'
        }, status=status.HTTP_404_NOT_FOUND)

    # Generar orden_id
    orden_id = f"INS-{str(uuid.uuid4())[:4].upper()}"

    # Extraer coordenadas si vienen en formato "lat,lng"
    coordenadas_str = prospecto.get('coordenadas', '')
    latitud = None
    longitud = None
    if coordenadas_str and ',' in coordenadas_str:
        try:
            lat, lng = coordenadas_str.split(',')
            latitud = float(lat.strip())
            longitud = float(lng.strip())
        except:
            pass

    # Crear instalación
    instalacion = Instalacion.objects.create(
        orden_id=orden_id,
        prospecto_nombre=prospecto['nombre'],
        prospecto_cedula=prospecto['cedula'],
        prospecto_telefono=prospecto['telefono'],
        direccion=prospecto['direccion'],
        coordenadas_lat=latitud,
        coordenadas_lng=longitud,
        plan=plan,
        fecha_programada=fecha_programada,
        franja_horaria=franja_horaria,
        estado=Instalacion.Estado.AGENDADA
    )

    return Response({
        'status': 'success',
        'orden_instalacion_id': orden_id,
        'instalacion_id': str(instalacion.id),
        'mensaje': 'Instalación agendada correctamente.'
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
@transaction.atomic
def crear_ticket(request):
    """
    Endpoint 7: Crear Ticket
    POST /api/v1/soporte/crear-ticket
    """
    data = request.data
    cliente_id = data.get('cliente_id')
    tipo_incidencia = data.get('tipo_incidencia')
    descripcion_bot = data.get('descripcion_bot', '')
    prioridad = data.get('prioridad', Ticket.Prioridad.MEDIA)
    adjunto_url = data.get('adjunto_url', '')

    if not cliente_id or not tipo_incidencia:
        return Response({
            'status': 'error',
            'mensaje': 'cliente_id y tipo_incidencia son requeridos'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Verificar cliente
    try:
        cliente = Cliente.objects.get(id=cliente_id)
    except Cliente.DoesNotExist:
        return Response({
            'status': 'error',
            'mensaje': 'Cliente no encontrado'
        }, status=status.HTTP_404_NOT_FOUND)

    # Generar número de ticket
    ultimo_ticket = Ticket.objects.order_by('-created_at').first()
    if ultimo_ticket and ultimo_ticket.numero.startswith('TK-'):
        try:
            ultimo_num = int(ultimo_ticket.numero.split('-')[1])
            nuevo_num = ultimo_num + 1
        except:
            nuevo_num = 1
    else:
        nuevo_num = 1

    numero = f"TK-{nuevo_num:04d}"

    # Crear ticket
    ticket = Ticket.objects.create(
        cliente=cliente,
        numero=numero,
        tipo_incidencia=tipo_incidencia,
        descripcion_bot=descripcion_bot,
        prioridad=prioridad,
        adjunto_url=adjunto_url,
        estado=Ticket.Estado.ABIERTO
    )

    return Response({
        'status': 'success',
        'ticket_id': numero,
        'ticket_uuid': str(ticket.id),
        'mensaje': 'Ticket creado exitosamente.'
    }, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([AllowAny])
def diagnostico_ont_endpoint(request):
    """
    Endpoint 8: Diagnóstico en Vivo
    GET /api/v1/red/diagnostico-ont?cliente_id=uuid
    GET /api/v1/red/diagnostico-ont?cedula=...
    GET /api/v1/red/diagnostico-ont?cedula=...&en_vivo=1
    
    Con en_vivo=1, consulta la OLT en tiempo real vía SSH
    """
    import logging
    from django.utils import timezone
    from apps.olts.drivers import get_driver
    
    logger = logging.getLogger(__name__)
    
    cliente_id = request.query_params.get('cliente_id')
    cedula = request.query_params.get('cedula')
    en_vivo = request.query_params.get('en_vivo', '0') == '1'

    if not cliente_id and not cedula:
        return Response({
            'status': 'error',
            'mensaje': 'Debe proporcionar cliente_id o cedula'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Buscar cliente
    try:
        if cliente_id:
            cliente = Cliente.objects.get(id=cliente_id)
        else:
            cliente = Cliente.objects.get(cedula_hash=get_blind_hash(cedula))
    except Cliente.DoesNotExist:
        return Response({
            'status': 'error',
            'mensaje': 'Cliente no encontrado'
        }, status=status.HTTP_404_NOT_FOUND)

    # Buscar ONU del cliente
    onu = ONU.objects.filter(servicios__cliente=cliente).select_related('olt').first()

    if not onu:
        return Response({
            'status': 'success',
            'estado_ont': 'NO_ASIGNADA',
            'potencia_rx': None,
            'es_potencia_optima': False,
            'falla_masiva_sector': False,
            'resultado': 'sin_ont',
            'mensaje': 'No tienes una ONT registrada en nuestro sistema.',
            'accion_sugerida': 'contactar_soporte'
        })

    # Si se solicita en vivo, actualizar datos desde la OLT
    if en_vivo:
        try:
            logger.info(f"Diagnóstico en vivo para ONU {onu.sn} en OLT {onu.olt.nombre}")
            
            # Obtener driver SSH según marca de OLT
            driver = get_driver(onu.olt)
            
            # Conectar a la OLT
            with driver:
                # Obtener información óptica en tiempo real
                optical_info = driver.get_onu_optical_info(
                    frame=onu.frame,
                    slot=onu.slot,
                    puerto=onu.puerto,
                    onu_index=onu.onu_index
                )
                
                # Obtener estado actual de la ONU
                onus_info = driver.get_onus(
                    frame=onu.frame,
                    slot=onu.slot,
                    puerto=onu.puerto
                )
                
                # Buscar la ONU específica en la lista
                onu_data = next(
                    (o for o in onus_info if o['onu_index'] == onu.onu_index),
                    None
                )
                
                # Actualizar modelo con datos en vivo
                if optical_info.get('rx_power_dbm') is not None:
                    onu.rx_power_dbm = optical_info['rx_power_dbm']
                
                if optical_info.get('tx_power_dbm') is not None:
                    onu.tx_power_dbm = optical_info['tx_power_dbm']
                
                if optical_info.get('distancia_m') is not None:
                    onu.distancia_m = optical_info['distancia_m']
                
                if onu_data:
                    onu.estado = onu_data.get('estado', 'unknown')
                
                onu.ultima_lectura = timezone.now()
                onu.save()
                
                logger.info(
                    f"Diagnóstico completado: ONU {onu.sn} - "
                    f"Estado: {onu.estado}, RX: {onu.rx_power_dbm} dBm"
                )
                
        except Exception as e:
            logger.error(f"Error en diagnóstico en vivo de ONU {onu.sn}: {e}")
            return Response({
                'status': 'error',
                'mensaje': f'Error consultando OLT: {str(e)}',
                'usando_cache': True,
                'estado_ont': onu.estado.upper(),
                'potencia_rx': f"{onu.rx_power_dbm} dBm" if onu.rx_power_dbm else None,
                'ultima_lectura': onu.ultima_lectura.isoformat() if onu.ultima_lectura else None
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Analizar estado
    rx_power = onu.rx_power_dbm
    potencia_optima = onu.potencia_optima if rx_power else False
    
    es_online = onu.estado == ONU.Estado.ONLINE
    todo_ok = es_online and potencia_optima
    
    # Detectar falla masiva (simple: verificar si hay muchas ONUs offline en la misma OLT)
    falla_masiva = False
    if not es_online:
        onus_offline = ONU.objects.filter(
            olt=onu.olt,
            estado__in=[ONU.Estado.OFFLINE, ONU.Estado.LOS]
        ).count()
        total_onus = ONU.objects.filter(olt=onu.olt).count()
        
        # Si más del 30% están offline, probablemente es falla masiva
        if total_onus > 0 and (onus_offline / total_onus) > 0.3:
            falla_masiva = True

    return Response({
        'status': 'success',
        'estado_ont': onu.estado.upper(),
        'potencia_rx': f"{rx_power} dBm" if rx_power else None,
        'es_potencia_optima': potencia_optima,
        'falla_masiva_sector': falla_masiva,
        'resultado': 'todo_ok' if todo_ok else 'revisar',
        'mensaje': (
            'De nuestro lado tu conexión está bien. Si sigues sin servicio, reinicia tu equipo.'
            if todo_ok else
            ('Detectamos una falla masiva en el sector. Estamos trabajando en la solución.'
             if falla_masiva else
             'Detectamos una novedad en tu conexión. Un técnico la revisará.')
        ),
        'accion_sugerida': 'reiniciar' if es_online else 'contactar_soporte',
        'ultima_lectura': onu.ultima_lectura.isoformat() if onu.ultima_lectura else None,
        'consultado_en_vivo': en_vivo
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def cambiar_wifi(request):
    """
    Endpoint 9: Cambiar Credenciales WiFi
    POST /api/v1/red/cambiar-wifi
    """
    data = request.data
    cliente_id = data.get('cliente_id')
    nuevo_ssid = data.get('nuevo_ssid')
    nueva_clave = data.get('nueva_clave')

    if not all([cliente_id, nuevo_ssid, nueva_clave]):
        return Response({
            'status': 'error',
            'mensaje': 'cliente_id, nuevo_ssid y nueva_clave son requeridos'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Verificar cliente
    try:
        cliente = Cliente.objects.get(id=cliente_id)
    except Cliente.DoesNotExist:
        return Response({
            'status': 'error',
            'mensaje': 'Cliente no encontrado'
        }, status=status.HTTP_404_NOT_FOUND)

    # Buscar ONU
    onu = ONU.objects.filter(servicios__cliente=cliente).first()
    if not onu:
        return Response({
            'status': 'error',
            'mensaje': 'No se encontró ONT para este cliente'
        }, status=status.HTTP_404_NOT_FOUND)

    # TODO: Implementar cambio real en ONT vía TR-069 o CLI
    # Por ahora simulamos éxito
    
    return Response({
        'status': 'success',
        'aplicado': True,
        'estado': 'aplicada',
        'mensaje': 'Credenciales Wi-Fi actualizadas en el equipo remoto.',
        'nuevo_ssid': nuevo_ssid
    })
