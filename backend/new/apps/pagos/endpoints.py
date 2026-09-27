"""
Endpoints especializados para módulo de pagos según bd.md sección 5.1
"""
import logging
from decimal import Decimal, InvalidOperation

from django.core.exceptions import ValidationError
from django.db import transaction
from django.db.models import Q, Sum
from django.utils import timezone
from django.utils.dateparse import parse_datetime
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from apps.clientes.models import Cliente
from apps.core.fields import get_blind_hash
from apps.facturacion.models import Factura
from apps.mikrotik.models import FirewallBloqueo

from .models import Corte, Pago, PagoFactura

logger = logging.getLogger(__name__)


@api_view(['GET'])
@permission_classes([AllowAny])  # Público para WhatsApp Bot
def consultar_deuda(request):
    """
    Endpoint 1: Consulta de Deuda
    GET /api/v1/cliente/consultar-deuda?cedula=1204567890
    GET /api/v1/cliente/consultar-deuda?telefono=0991234567
    GET /api/v1/cliente/consultar-deuda?cliente_id=uuid
    """
    try:
        # Validar parámetros de entrada
        cedula = request.query_params.get('cedula', '').strip()
        telefono = request.query_params.get('telefono', '').strip()
        cliente_id = request.query_params.get('cliente_id', '').strip()

        if not any([cedula, telefono, cliente_id]):
            return Response({
                'status': 'error',
                'mensaje': 'Debe proporcionar al menos uno: cedula, telefono o cliente_id',
                'codigo': 'PARAMETROS_FALTANTES'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validar longitud de cédula si se proporciona
        if cedula and (len(cedula) < 10 or len(cedula) > 13):
            return Response({
                'status': 'error',
                'mensaje': 'Cédula debe tener entre 10 y 13 caracteres',
                'codigo': 'CEDULA_INVALIDA'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validar formato de teléfono si se proporciona
        if telefono and (len(telefono) < 7 or len(telefono) > 15):
            return Response({
                'status': 'error',
                'mensaje': 'Teléfono debe tener entre 7 y 15 caracteres',
                'codigo': 'TELEFONO_INVALIDO'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Construir query
        query = Q()
        if cliente_id:
            try:
                query |= Q(id=cliente_id)
            except ValidationError:
                return Response({
                    'status': 'error',
                    'mensaje': 'El formato de cliente_id no es válido',
                    'codigo': 'UUID_INVALIDO'
                }, status=status.HTTP_400_BAD_REQUEST)
        
        if cedula:
            query |= Q(cedula_hash=get_blind_hash(cedula))
        
        if telefono:
            query |= Q(telefono_hash=get_blind_hash(telefono))

        # Buscar cliente
        try:
            cliente = Cliente.objects.get(query)
        except Cliente.DoesNotExist:
            return Response({
                'status': 'error',
                'mensaje': 'Cliente no encontrado con los datos proporcionados',
                'codigo': 'CLIENTE_NO_ENCONTRADO'
            }, status=status.HTTP_404_NOT_FOUND)
        except Cliente.MultipleObjectsReturned:
            logger.warning(
                f"Múltiples clientes encontrados con criterios: "
                f"cedula={cedula}, telefono={telefono}, cliente_id={cliente_id}"
            )
            return Response({
                'status': 'error',
                'mensaje': 'Se encontraron múltiples clientes. Use cliente_id para mayor precisión',
                'codigo': 'MULTIPLES_RESULTADOS'
            }, status=status.HTTP_409_CONFLICT)

        # Obtener facturas pendientes
        facturas_pendientes = Factura.objects.filter(
            cliente=cliente,
            estado__in=[Factura.Estado.PENDIENTE, Factura.Estado.VENCIDA]
        ).order_by('fecha_vencimiento')

        deuda_total = facturas_pendientes.aggregate(
            total=Sum('total')
        )['total'] or Decimal('0')

        facturas_data = []
        for factura in facturas_pendientes:
            try:
                facturas_data.append({
                    'factura_id': str(factura.id),
                    'numero': factura.numero,
                    'mes': factura.mes,
                    'monto': float(factura.total),
                    'fecha_vencimiento': factura.fecha_vencimiento.isoformat(),
                    'estado': factura.estado
                })
            except Exception as e:
                logger.error(f"Error procesando factura {factura.id}: {e}")
                continue

        # Verificar falla masiva del sector (simplificado)
        falla_masiva = False
        # TODO: Implementar lógica de detección de fallas masivas

        return Response({
            'status': 'success',
            'cliente': {
                'id': str(cliente.id),
                'nombre': cliente.nombre,
                'cedula': cliente.cedula,
                'estado_servicio': cliente.estado_servicio,
                'codigo_pago': cliente.codigo_pago or ''
            },
            'deuda_total': float(deuda_total),
            'facturas_pendientes': facturas_data,
            'falla_masiva_sector': falla_masiva
        })

    except Exception as e:
        logger.exception(f"Error inesperado en consultar_deuda: {e}")
        return Response({
            'status': 'error',
            'mensaje': 'Error interno del servidor al consultar deuda',
            'codigo': 'ERROR_INTERNO'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([AllowAny])  # Público para WhatsApp Bot
@transaction.atomic
def registrar_pago(request):
    """
    Endpoint 2: Registrar Pago
    POST /api/v1/pagos/registrar
    """
    try:
        data = request.data

        # Validar campos requeridos
        required_fields = ['cliente_id', 'monto', 'forma_pago', 'fecha_transaccion']
        missing_fields = [field for field in required_fields if not data.get(field)]
        
        if missing_fields:
            return Response({
                'status': 'error',
                'mensaje': f'Campos requeridos faltantes: {", ".join(missing_fields)}',
                'codigo': 'CAMPOS_REQUERIDOS_FALTANTES',
                'campos_faltantes': missing_fields
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validar formato y valor del monto
        try:
            monto = Decimal(str(data['monto']))
            if monto <= 0:
                return Response({
                    'status': 'error',
                    'mensaje': 'El monto debe ser mayor que cero',
                    'codigo': 'MONTO_INVALIDO'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Validar que el monto no sea excesivamente grande (límite razonable)
            if monto > Decimal('999999.99'):
                return Response({
                    'status': 'error',
                    'mensaje': 'El monto excede el límite máximo permitido',
                    'codigo': 'MONTO_EXCESIVO'
                }, status=status.HTTP_400_BAD_REQUEST)
                
        except (InvalidOperation, ValueError, TypeError) as e:
            return Response({
                'status': 'error',
                'mensaje': 'El formato del monto no es válido. Debe ser un número decimal',
                'codigo': 'FORMATO_MONTO_INVALIDO'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validar forma de pago
        forma_pago = data['forma_pago']
        if forma_pago not in dict(Pago.FormaPago.choices):
            return Response({
                'status': 'error',
                'mensaje': f'Forma de pago inválida. Opciones válidas: {", ".join(dict(Pago.FormaPago.choices).keys())}',
                'codigo': 'FORMA_PAGO_INVALIDA',
                'formas_validas': list(dict(Pago.FormaPago.choices).keys())
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validar y parsear fecha de transacción
        try:
            fecha_transaccion = data['fecha_transaccion']
            if isinstance(fecha_transaccion, str):
                fecha_transaccion = parse_datetime(fecha_transaccion)
                if fecha_transaccion is None:
                    raise ValueError("Formato de fecha inválido")
            
            # Validar que la fecha no sea futura
            if fecha_transaccion > timezone.now():
                return Response({
                    'status': 'error',
                    'mensaje': 'La fecha de transacción no puede ser futura',
                    'codigo': 'FECHA_FUTURA'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Validar que la fecha no sea demasiado antigua (ej: más de 1 año)
            fecha_limite = timezone.now() - timezone.timedelta(days=365)
            if fecha_transaccion < fecha_limite:
                return Response({
                    'status': 'error',
                    'mensaje': 'La fecha de transacción es demasiado antigua',
                    'codigo': 'FECHA_ANTIGUA'
                }, status=status.HTTP_400_BAD_REQUEST)
                
        except (ValueError, TypeError) as e:
            return Response({
                'status': 'error',
                'mensaje': 'Formato de fecha de transacción inválido. Use formato ISO 8601',
                'codigo': 'FORMATO_FECHA_INVALIDO'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Buscar cliente
        try:
            cliente = Cliente.objects.get(id=data['cliente_id'])
        except Cliente.DoesNotExist:
            return Response({
                'status': 'error',
                'mensaje': 'Cliente no encontrado con el ID proporcionado',
                'codigo': 'CLIENTE_NO_ENCONTRADO'
            }, status=status.HTTP_404_NOT_FOUND)
        except ValidationError:
            return Response({
                'status': 'error',
                'mensaje': 'El formato del cliente_id no es válido',
                'codigo': 'UUID_CLIENTE_INVALIDO'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validar datos opcionales
        num_comprobante = data.get('num_comprobante', '').strip()
        hash_qr = data.get('hash_qr', '').strip()
        
        # Verificar duplicación de comprobante/hash_qr si se proporcionan
        if num_comprobante:
            pago_existente = Pago.objects.filter(
                num_comprobante=num_comprobante,
                cliente=cliente
            ).first()
            if pago_existente:
                logger.warning(
                    f"Intento de registrar pago duplicado. "
                    f"Comprobante: {num_comprobante}, Cliente: {cliente.id}"
                )
                return Response({
                    'status': 'error',
                    'mensaje': 'Ya existe un pago registrado con este número de comprobante para este cliente',
                    'codigo': 'PAGO_DUPLICADO',
                    'pago_existente_id': str(pago_existente.id)
                }, status=status.HTTP_409_CONFLICT)

        if hash_qr:
            pago_existente = Pago.objects.filter(hash_qr=hash_qr).first()
            if pago_existente:
                logger.warning(
                    f"Intento de registrar pago duplicado. "
                    f"Hash QR: {hash_qr}, Cliente: {cliente.id}"
                )
                return Response({
                    'status': 'error',
                    'mensaje': 'Ya existe un pago registrado con este hash QR',
                    'codigo': 'HASH_QR_DUPLICADO',
                    'pago_existente_id': str(pago_existente.id)
                }, status=status.HTTP_409_CONFLICT)

        # Validar longitud de campos opcionales
        if len(data.get('referencia', '')) > 100:
            return Response({
                'status': 'error',
                'mensaje': 'La referencia no puede exceder 100 caracteres',
                'codigo': 'REFERENCIA_EXCEDE_LIMITE'
            }, status=status.HTTP_400_BAD_REQUEST)

        if len(data.get('banco_origen', '')) > 100:
            return Response({
                'status': 'error',
                'mensaje': 'El banco origen no puede exceder 100 caracteres',
                'codigo': 'BANCO_EXCEDE_LIMITE'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Crear pago
        try:
            pago = Pago.objects.create(
                cliente=cliente,
                monto=monto,
                forma_pago=forma_pago,
                referencia=data.get('referencia', '').strip(),
                banco_origen=data.get('banco_origen', '').strip(),
                num_comprobante=num_comprobante,
                hash_qr=hash_qr,
                fecha_transaccion=fecha_transaccion,
                verificado_por=data.get('verificado_por', 'manual'),
                cuenta_destino=data.get('cuenta_destino', '').strip(),
                origen=data.get('origen', 'WEB'),
                estado=Pago.Estado.CONFIRMADO,
                acreditado=True
            )
            logger.info(
                f"Pago creado exitosamente. ID: {pago.id}, "
                f"Cliente: {cliente.nombre}, Monto: {monto}"
            )
        except Exception as e:
            logger.exception(f"Error al crear el pago: {e}")
            return Response({
                'status': 'error',
                'mensaje': 'Error al guardar el pago en la base de datos',
                'codigo': 'ERROR_CREAR_PAGO'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Aplicar pago a facturas pendientes
        facturas_pendientes = Factura.objects.filter(
            cliente=cliente,
            estado__in=[Factura.Estado.PENDIENTE, Factura.Estado.VENCIDA]
        ).order_by('fecha_vencimiento')

        if not facturas_pendientes.exists():
            logger.info(
                f"No hay facturas pendientes para el cliente {cliente.id}. "
                f"Pago registrado como saldo a favor."
            )

        monto_restante = monto
        facturas_aplicadas = []
        
        for factura in facturas_pendientes:
            if monto_restante <= 0:
                break

            try:
                saldo_factura = factura.saldo_pendiente
                if saldo_factura <= 0:
                    continue

                monto_aplicar = min(monto_restante, saldo_factura)

                # Crear registro de aplicación
                PagoFactura.objects.create(
                    pago=pago,
                    factura=factura,
                    monto_aplicado=monto_aplicar
                )

                monto_restante -= monto_aplicar
                facturas_aplicadas.append({
                    'factura_id': str(factura.id),
                    'numero': factura.numero,
                    'monto_aplicado': float(monto_aplicar)
                })

                # Si la factura queda pagada completamente
                if monto_aplicar >= saldo_factura:
                    factura.estado = Factura.Estado.PAGADA
                    factura.save()
                    logger.info(f"Factura {factura.numero} marcada como PAGADA")
                    
            except Exception as e:
                logger.error(f"Error aplicando pago a factura {factura.id}: {e}")
                # Continuar con las demás facturas

        pago.saldo_restante = monto_restante
        pago.save()

        # Reactivar servicio si estaba cortado
        reactivacion = {'ok': False, 'nota': ''}
        if cliente.estado_servicio == Cliente.EstadoServicio.SUSPENDIDO_CORTE:
            # Verificar si ya no tiene deuda
            deuda_actual = cliente.deuda_total()
            if deuda_actual <= 0:
                try:
                    cliente.estado_servicio = Cliente.EstadoServicio.ACTIVO
                    cliente.save()
                    logger.info(f"Cliente {cliente.id} reactivado - Estado: ACTIVO")

                    # Eliminar bloqueos de firewall
                    bloqueos = FirewallBloqueo.objects.filter(
                        onu__servicios__cliente=cliente,
                        activo=True
                    )
                    bloqueos_count = bloqueos.count()
                    
                    for bloqueo in bloqueos:
                        bloqueo.activo = False
                        bloqueo.save()
                        # TODO: Eliminar del router físicamente
                        logger.info(f"Bloqueo {bloqueo.id} desactivado")

                    # Registrar reactivación
                    cortes_actualizados = Corte.objects.filter(
                        cliente=cliente,
                        reactivado=False
                    ).update(
                        reactivado=True,
                        fecha_reactivacion=timezone.now()
                    )

                    reactivacion = {
                        'ok': True,
                        'nota': f'Servicio restablecido. {bloqueos_count} bloqueos eliminados.'
                    }
                    logger.info(
                        f"Reactivación completa para cliente {cliente.id}. "
                        f"Bloqueos eliminados: {bloqueos_count}, "
                        f"Cortes reactivados: {cortes_actualizados}"
                    )
                except Exception as e:
                    logger.exception(f"Error durante reactivación del cliente {cliente.id}: {e}")
                    reactivacion = {
                        'ok': False,
                        'nota': 'Error al reactivar el servicio. Contacte a soporte.'
                    }
            else:
                logger.info(
                    f"Cliente {cliente.id} aún tiene deuda pendiente: {deuda_actual}. "
                    f"No se reactivó el servicio."
                )

        # Generar ID de transacción
        transaccion_id = f"REP-{str(pago.id)[:8]}"

        return Response({
            'status': 'success',
            'mensaje': 'Pago registrado' + (' y servicio restablecido' if reactivacion['ok'] else '') + '.',
            'transaccion_id': transaccion_id,
            'pago_id': str(pago.id),
            'acreditado': pago.acreditado,
            'estado': pago.estado,
            # Alias de compatibilidad para clientes antiguos del API.
            'monto': float(monto),
            'monto_pagado': float(monto),
            'saldo_restante': float(pago.saldo_restante),
            'facturas_aplicadas': facturas_aplicadas,
            'reactivacion': reactivacion
        }, status=status.HTTP_201_CREATED)

    except Exception as e:
        logger.exception(f"Error inesperado en registrar_pago: {e}")
        return Response({
            'status': 'error',
            'mensaje': 'Error interno del servidor al registrar el pago',
            'codigo': 'ERROR_INTERNO'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([AllowAny])
def verificar_comprobante(request):
    """
    Endpoint 3: Verificar Comprobante
    GET /api/v1/pagos/comprobante?hash_qr=...
    GET /api/v1/pagos/comprobante?num_comprobante=...&cedula=...
    """
    hash_qr = request.query_params.get('hash_qr')
    num_comprobante = request.query_params.get('num_comprobante')
    cedula = request.query_params.get('cedula')

    if hash_qr:
        pago = Pago.objects.filter(hash_qr=hash_qr).first()
    elif num_comprobante and cedula:
        pago = Pago.objects.filter(
            num_comprobante=num_comprobante,
            cliente__cedula_hash=get_blind_hash(cedula)
        ).first()
    else:
        return Response({
            'status': 'error',
            'mensaje': 'Debe proporcionar hash_qr o (num_comprobante + cedula)'
        }, status=status.HTTP_400_BAD_REQUEST)

    if not pago:
        return Response({
            'status': 'error',
            'mensaje': 'Comprobante no encontrado',
            'existe': False
        }, status=status.HTTP_404_NOT_FOUND)

    return Response({
        'status': 'success',
        'existe': True,
        'pago': {
            'id': str(pago.id),
            'cliente_nombre': pago.cliente.nombre,
            'monto': float(pago.monto),
            'fecha_transaccion': pago.fecha_transaccion.isoformat(),
            'estado': pago.estado,
            'acreditado': pago.acreditado,
            'forma_pago': pago.forma_pago
        }
    })
