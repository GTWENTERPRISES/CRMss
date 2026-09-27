"""
Endpoints especializados para operaciones WhatsApp
"""
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import ConversacionWhatsapp, MensajeWhatsapp
from .services import WhatsAppService


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enviar_mensaje_directo(request):
    """
    Envía un mensaje de WhatsApp directamente sin conversación previa
    
    POST /api/whatsapp/enviar-mensaje/
    {
        "telefono": "593987654321",
        "mensaje": "Hola, este es un mensaje de prueba"
    }
    """
    telefono = request.data.get('telefono')
    mensaje = request.data.get('mensaje')
    
    if not telefono or not mensaje:
        return Response(
            {'error': 'telefono y mensaje son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    whatsapp = WhatsAppService()
    
    try:
        resultado = whatsapp.enviar_mensaje(telefono, mensaje)
        
        # Crear o actualizar conversación
        conversacion, created = ConversacionWhatsapp.objects.get_or_create(
            telefono=whatsapp._limpiar_telefono(telefono),
            defaults={'estado': ConversacionWhatsapp.Estado.ACTIVA},
        )
        
        # Guardar mensaje
        msg_obj = MensajeWhatsapp.objects.create(
            conversacion=conversacion,
            direccion=MensajeWhatsapp.Direccion.SALIENTE,
            tipo=MensajeWhatsapp.Tipo.TEXTO,
            cuerpo=mensaje,
            wa_message_id=resultado.get('messages', [{}])[0].get('id', ''),
            payload_json=resultado,
            estado=MensajeWhatsapp.Estado.ENVIADO,
        )
        
        return Response({
            'status': 'success',
            'mensaje_id': str(msg_obj.id),
            'wa_message_id': msg_obj.wa_message_id,
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response(
            {'error': f'Error enviando mensaje: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enviar_plantilla(request):
    """
    Envía una plantilla pre-aprobada de WhatsApp
    
    POST /api/whatsapp/enviar-plantilla/
    {
        "telefono": "593987654321",
        "template_name": "recordatorio_pago",
        "parameters": ["Juan Pérez", "50.00", "31/12/2024"],
        "language": "es"
    }
    """
    telefono = request.data.get('telefono')
    template_name = request.data.get('template_name')
    parameters = request.data.get('parameters', [])
    language = request.data.get('language', 'es')
    
    if not telefono or not template_name:
        return Response(
            {'error': 'telefono y template_name son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    whatsapp = WhatsAppService()
    
    try:
        resultado = whatsapp.enviar_plantilla(telefono, template_name, parameters, language)
        
        # Crear conversación
        conversacion, _ = ConversacionWhatsapp.objects.get_or_create(
            telefono=whatsapp._limpiar_telefono(telefono),
            defaults={'estado': ConversacionWhatsapp.Estado.ACTIVA},
        )
        
        # Guardar mensaje
        msg_obj = MensajeWhatsapp.objects.create(
            conversacion=conversacion,
            direccion=MensajeWhatsapp.Direccion.SALIENTE,
            tipo=MensajeWhatsapp.Tipo.PLANTILLA,
            cuerpo=f'Template: {template_name}',
            wa_message_id=resultado.get('messages', [{}])[0].get('id', ''),
            payload_json=resultado,
            estado=MensajeWhatsapp.Estado.ENVIADO,
        )
        
        return Response({
            'status': 'success',
            'mensaje_id': str(msg_obj.id),
            'template': template_name,
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response(
            {'error': f'Error enviando plantilla: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enviar_documento(request):
    """
    Envía un documento (factura PDF, etc)
    
    POST /api/whatsapp/enviar-documento/
    {
        "telefono": "593987654321",
        "document_url": "https://ejemplo.com/factura.pdf",
        "filename": "Factura_001-001-000001.pdf",
        "caption": "Tu factura del mes de diciembre"
    }
    """
    telefono = request.data.get('telefono')
    document_url = request.data.get('document_url')
    filename = request.data.get('filename', 'documento.pdf')
    caption = request.data.get('caption', '')
    
    if not telefono or not document_url:
        return Response(
            {'error': 'telefono y document_url son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    whatsapp = WhatsAppService()
    
    try:
        resultado = whatsapp.enviar_documento(telefono, document_url, filename, caption)
        
        conversacion, _ = ConversacionWhatsapp.objects.get_or_create(
            telefono=whatsapp._limpiar_telefono(telefono),
            defaults={'estado': ConversacionWhatsapp.Estado.ACTIVA},
        )
        
        msg_obj = MensajeWhatsapp.objects.create(
            conversacion=conversacion,
            direccion=MensajeWhatsapp.Direccion.SALIENTE,
            tipo=MensajeWhatsapp.Tipo.DOCUMENTO,
            cuerpo=caption or filename,
            wa_message_id=resultado.get('messages', [{}])[0].get('id', ''),
            payload_json=resultado,
            estado=MensajeWhatsapp.Estado.ENVIADO,
        )
        
        return Response({
            'status': 'success',
            'mensaje_id': str(msg_obj.id),
            'filename': filename,
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response(
            {'error': f'Error enviando documento: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enviar_botones(request):
    """
    Envía mensaje con botones interactivos
    
    POST /api/whatsapp/enviar-botones/
    {
        "telefono": "593987654321",
        "texto": "¿Cómo podemos ayudarte?",
        "botones": [
            {"id": "soporte", "title": "Soporte Técnico"},
            {"id": "ventas", "title": "Ventas"},
            {"id": "pagos", "title": "Pagos"}
        ]
    }
    """
    telefono = request.data.get('telefono')
    texto = request.data.get('texto')
    botones = request.data.get('botones', [])
    
    if not telefono or not texto or not botones:
        return Response(
            {'error': 'telefono, texto y botones son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    if len(botones) > 3:
        return Response(
            {'error': 'Máximo 3 botones permitidos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    whatsapp = WhatsAppService()
    
    try:
        resultado = whatsapp.enviar_botones_interactivos(telefono, texto, botones)
        
        conversacion, _ = ConversacionWhatsapp.objects.get_or_create(
            telefono=whatsapp._limpiar_telefono(telefono),
            defaults={'estado': ConversacionWhatsapp.Estado.ACTIVA},
        )
        
        msg_obj = MensajeWhatsapp.objects.create(
            conversacion=conversacion,
            direccion=MensajeWhatsapp.Direccion.SALIENTE,
            tipo=MensajeWhatsapp.Tipo.INTERACTIVO,
            cuerpo=texto,
            wa_message_id=resultado.get('messages', [{}])[0].get('id', ''),
            payload_json=resultado,
            estado=MensajeWhatsapp.Estado.ENVIADO,
        )
        
        return Response({
            'status': 'success',
            'mensaje_id': str(msg_obj.id),
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response(
            {'error': f'Error enviando botones: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def notificar_recordatorio_pago(request):
    """
    Envía recordatorio de pago a un cliente (shortcut)
    
    POST /api/whatsapp/recordatorio-pago/
    {
        "telefono": "593987654321",
        "cliente_nombre": "Juan Pérez",
        "monto": "50.00",
        "fecha_vencimiento": "31/12/2024"
    }
    """
    telefono = request.data.get('telefono')
    cliente_nombre = request.data.get('cliente_nombre')
    monto = request.data.get('monto')
    fecha_vencimiento = request.data.get('fecha_vencimiento')
    
    if not all([telefono, cliente_nombre, monto, fecha_vencimiento]):
        return Response(
            {'error': 'Todos los campos son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    whatsapp = WhatsAppService()
    
    try:
        resultado = whatsapp.enviar_recordatorio_pago(
            telefono, cliente_nombre, monto, fecha_vencimiento
        )
        
        return Response({
            'status': 'success',
            'mensaje': 'Recordatorio enviado',
            'wa_message_id': resultado.get('messages', [{}])[0].get('id', ''),
        })
        
    except Exception as e:
        return Response(
            {'error': f'Error enviando recordatorio: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def notificar_corte_servicio(request):
    """
    Notifica corte de servicio a un cliente
    
    POST /api/whatsapp/notificar-corte/
    {
        "telefono": "593987654321",
        "cliente_nombre": "Juan Pérez",
        "motivo": "mora"
    }
    """
    telefono = request.data.get('telefono')
    cliente_nombre = request.data.get('cliente_nombre')
    motivo = request.data.get('motivo', 'mora')
    
    if not telefono or not cliente_nombre:
        return Response(
            {'error': 'telefono y cliente_nombre son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    whatsapp = WhatsAppService()
    
    try:
        resultado = whatsapp.enviar_aviso_corte(telefono, cliente_nombre, motivo)
        
        return Response({
            'status': 'success',
            'mensaje': 'Aviso de corte enviado',
            'wa_message_id': resultado.get('messages', [{}])[0].get('id', ''),
        })
        
    except Exception as e:
        return Response(
            {'error': f'Error enviando aviso: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def notificar_reactivacion(request):
    """
    Notifica reactivación de servicio
    
    POST /api/whatsapp/notificar-reactivacion/
    {
        "telefono": "593987654321",
        "cliente_nombre": "Juan Pérez"
    }
    """
    telefono = request.data.get('telefono')
    cliente_nombre = request.data.get('cliente_nombre')
    
    if not telefono or not cliente_nombre:
        return Response(
            {'error': 'telefono y cliente_nombre son requeridos'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    whatsapp = WhatsAppService()
    
    try:
        resultado = whatsapp.enviar_aviso_reactivacion(telefono, cliente_nombre)
        
        return Response({
            'status': 'success',
            'mensaje': 'Aviso de reactivación enviado',
            'wa_message_id': resultado.get('messages', [{}])[0].get('id', ''),
        })
        
    except Exception as e:
        return Response(
            {'error': f'Error enviando aviso: {str(e)}'},
            status=status.HTTP_502_BAD_GATEWAY,
        )
