"""
Integración con WhatsApp Business API (Meta/Facebook)
Implementa envío de mensajes, plantillas, multimedia y manejo de webhooks
"""
import json
import logging
from typing import Dict, List, Optional

import requests
from django.conf import settings

logger = logging.getLogger(__name__)


class WhatsAppService:
    """
    Cliente para WhatsApp Business API v18.0
    Documentación: https://developers.facebook.com/docs/whatsapp/
    """
    
    API_VERSION = 'v18.0'
    
    def __init__(self):
        self.token = getattr(settings, 'WHATSAPP_TOKEN', '')
        self.phone_id = getattr(settings, 'WHATSAPP_PHONE_ID', '')
        self.business_account_id = getattr(settings, 'WHATSAPP_BUSINESS_ACCOUNT_ID', '')
        self.verify_token = getattr(settings, 'WHATSAPP_VERIFY_TOKEN', 'verify_token_123')
        
        self.base_url = f'https://graph.facebook.com/{self.API_VERSION}'
        self.messages_url = f'{self.base_url}/{self.phone_id}/messages'

    @property
    def headers(self) -> Dict[str, str]:
        """Headers para peticiones a la API"""
        return {
            'Authorization': f'Bearer {self.token}',
            'Content-Type': 'application/json',
        }

    def enviar_mensaje(self, telefono: str, mensaje: str) -> Dict:
        """
        Envía un mensaje de texto simple
        
        Args:
            telefono: número en formato internacional (ej: 593987654321)
            mensaje: texto del mensaje (máx 4096 caracteres)
        
        Returns:
            dict con respuesta de WhatsApp API
        """
        # Limpiar número de teléfono
        telefono = self._limpiar_telefono(telefono)
        
        payload = {
            'messaging_product': 'whatsapp',
            'recipient_type': 'individual',
            'to': telefono,
            'type': 'text',
            'text': {'body': mensaje},
        }
        
        try:
            response = requests.post(
                self.messages_url,
                json=payload,
                headers=self.headers,
                timeout=30,
            )
            response.raise_for_status()
            result = response.json()
            logger.info(f'Mensaje enviado a {telefono}: {result}')
            return result
        except requests.exceptions.RequestException as e:
            logger.error(f'Error enviando mensaje a {telefono}: {str(e)}')
            raise

    def enviar_plantilla(self, telefono: str, template_name: str, 
                        parameters: List[str], language: str = 'es') -> Dict:
        """
        Envía una plantilla pre-aprobada de WhatsApp
        
        Args:
            telefono: número en formato internacional
            template_name: nombre de la plantilla aprobada
            parameters: lista de parámetros para reemplazar en la plantilla
            language: código de idioma (es, en, etc)
        
        Returns:
            dict con respuesta de WhatsApp API
            
        Ejemplo:
            enviar_plantilla('593987654321', 'recordatorio_pago', 
                           ['Juan Pérez', '50.00', '31/12/2024'])
        """
        telefono = self._limpiar_telefono(telefono)
        
        payload = {
            'messaging_product': 'whatsapp',
            'to': telefono,
            'type': 'template',
            'template': {
                'name': template_name,
                'language': {'code': language},
                'components': [
                    {
                        'type': 'body',
                        'parameters': [
                            {'type': 'text', 'text': str(p)} for p in parameters
                        ],
                    },
                ],
            },
        }
        
        try:
            response = requests.post(
                self.messages_url,
                json=payload,
                headers=self.headers,
                timeout=30,
            )
            response.raise_for_status()
            result = response.json()
            logger.info(f'Plantilla {template_name} enviada a {telefono}')
            return result
        except requests.exceptions.RequestException as e:
            logger.error(f'Error enviando plantilla a {telefono}: {str(e)}')
            raise

    def enviar_imagen(self, telefono: str, image_url: str, caption: str = '') -> Dict:
        """
        Envía una imagen por URL
        
        Args:
            telefono: número en formato internacional
            image_url: URL pública de la imagen (HTTPS)
            caption: texto opcional que acompaña la imagen
        """
        telefono = self._limpiar_telefono(telefono)
        
        payload = {
            'messaging_product': 'whatsapp',
            'to': telefono,
            'type': 'image',
            'image': {
                'link': image_url,
            },
        }
        
        if caption:
            payload['image']['caption'] = caption
        
        try:
            response = requests.post(
                self.messages_url,
                json=payload,
                headers=self.headers,
                timeout=30,
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f'Error enviando imagen a {telefono}: {str(e)}')
            raise

    def enviar_documento(self, telefono: str, document_url: str, 
                        filename: str, caption: str = '') -> Dict:
        """
        Envía un documento (PDF, DOCX, etc)
        
        Args:
            telefono: número en formato internacional
            document_url: URL pública del documento
            filename: nombre del archivo
            caption: descripción opcional
        """
        telefono = self._limpiar_telefono(telefono)
        
        payload = {
            'messaging_product': 'whatsapp',
            'to': telefono,
            'type': 'document',
            'document': {
                'link': document_url,
                'filename': filename,
            },
        }
        
        if caption:
            payload['document']['caption'] = caption
        
        try:
            response = requests.post(
                self.messages_url,
                json=payload,
                headers=self.headers,
                timeout=30,
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f'Error enviando documento a {telefono}: {str(e)}')
            raise

    def enviar_ubicacion(self, telefono: str, latitude: float, longitude: float,
                        name: str = '', address: str = '') -> Dict:
        """
        Envía una ubicación geográfica
        
        Args:
            telefono: número en formato internacional
            latitude: latitud
            longitude: longitud
            name: nombre del lugar
            address: dirección del lugar
        """
        telefono = self._limpiar_telefono(telefono)
        
        payload = {
            'messaging_product': 'whatsapp',
            'to': telefono,
            'type': 'location',
            'location': {
                'latitude': str(latitude),
                'longitude': str(longitude),
            },
        }
        
        if name:
            payload['location']['name'] = name
        if address:
            payload['location']['address'] = address
        
        try:
            response = requests.post(
                self.messages_url,
                json=payload,
                headers=self.headers,
                timeout=30,
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f'Error enviando ubicación a {telefono}: {str(e)}')
            raise

    def enviar_botones_interactivos(self, telefono: str, texto_body: str,
                                    botones: List[Dict[str, str]]) -> Dict:
        """
        Envía mensaje con botones interactivos (máximo 3 botones)
        
        Args:
            telefono: número en formato internacional
            texto_body: texto del mensaje
            botones: lista de dict con 'id' y 'title'
                    Ej: [{'id': 'btn_1', 'title': 'Opción 1'}]
        """
        telefono = self._limpiar_telefono(telefono)
        
        if len(botones) > 3:
            raise ValueError('WhatsApp permite máximo 3 botones')
        
        payload = {
            'messaging_product': 'whatsapp',
            'to': telefono,
            'type': 'interactive',
            'interactive': {
                'type': 'button',
                'body': {'text': texto_body},
                'action': {
                    'buttons': [
                        {
                            'type': 'reply',
                            'reply': {
                                'id': btn['id'],
                                'title': btn['title'][:20],  # Máx 20 caracteres
                            }
                        }
                        for btn in botones
                    ]
                }
            }
        }
        
        try:
            response = requests.post(
                self.messages_url,
                json=payload,
                headers=self.headers,
                timeout=30,
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f'Error enviando botones a {telefono}: {str(e)}')
            raise

    def enviar_lista_opciones(self, telefono: str, texto_body: str,
                             texto_boton: str, secciones: List[Dict]) -> Dict:
        """
        Envía mensaje con lista de opciones
        
        Args:
            telefono: número en formato internacional
            texto_body: texto del mensaje
            texto_boton: texto del botón que abre la lista
            secciones: lista de secciones con opciones
                Ej: [{
                    'title': 'Sección 1',
                    'rows': [
                        {'id': 'opt1', 'title': 'Opción 1', 'description': 'Desc 1'}
                    ]
                }]
        """
        telefono = self._limpiar_telefono(telefono)
        
        payload = {
            'messaging_product': 'whatsapp',
            'to': telefono,
            'type': 'interactive',
            'interactive': {
                'type': 'list',
                'body': {'text': texto_body},
                'action': {
                    'button': texto_boton,
                    'sections': secciones,
                }
            }
        }
        
        try:
            response = requests.post(
                self.messages_url,
                json=payload,
                headers=self.headers,
                timeout=30,
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f'Error enviando lista a {telefono}: {str(e)}')
            raise

    def marcar_como_leido(self, message_id: str) -> Dict:
        """
        Marca un mensaje como leído
        
        Args:
            message_id: ID del mensaje recibido
        """
        payload = {
            'messaging_product': 'whatsapp',
            'status': 'read',
            'message_id': message_id,
        }
        
        try:
            response = requests.post(
                self.messages_url,
                json=payload,
                headers=self.headers,
                timeout=30,
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f'Error marcando mensaje {message_id} como leído: {str(e)}')
            raise

    def obtener_perfil_usuario(self, telefono: str) -> Optional[Dict]:
        """
        Obtiene información del perfil de un usuario
        
        Args:
            telefono: número en formato internacional
        
        Returns:
            dict con información del perfil o None si no se encuentra
        """
        telefono = self._limpiar_telefono(telefono)
        url = f'{self.base_url}/{telefono}/profile'
        
        try:
            response = requests.get(url, headers=self.headers, timeout=30)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f'Error obteniendo perfil de {telefono}: {str(e)}')
            return None

    def verificar_webhook(self, mode: str, token: str, challenge: str) -> Optional[str]:
        """
        Verifica el webhook de WhatsApp (handshake inicial)
        
        Args:
            mode: debe ser 'subscribe'
            token: token de verificación configurado
            challenge: challenge enviado por WhatsApp
        
        Returns:
            challenge si la verificación es exitosa, None si falla
        """
        if mode == 'subscribe' and token == self.verify_token:
            logger.info('Webhook verificado exitosamente')
            return challenge
        else:
            logger.warning(f'Verificación de webhook fallida. Mode: {mode}, Token: {token}')
            return None

    def procesar_webhook(self, payload: Dict) -> Dict:
        """
        Procesa eventos recibidos del webhook de WhatsApp
        
        Args:
            payload: datos JSON recibidos del webhook
        
        Returns:
            dict con información extraída del evento
        """
        try:
            entry = payload.get('entry', [{}])[0]
            changes = entry.get('changes', [{}])[0]
            value = changes.get('value', {})
            
            # Extraer mensajes
            messages = value.get('messages', [])
            if messages:
                mensaje = messages[0]
                return {
                    'tipo': 'mensaje',
                    'from': mensaje.get('from'),
                    'id': mensaje.get('id'),
                    'timestamp': mensaje.get('timestamp'),
                    'type': mensaje.get('type'),
                    'text': mensaje.get('text', {}).get('body', ''),
                    'mensaje_completo': mensaje,
                }
            
            # Extraer estados de mensajes enviados
            statuses = value.get('statuses', [])
            if statuses:
                status = statuses[0]
                return {
                    'tipo': 'status',
                    'id': status.get('id'),
                    'status': status.get('status'),  # sent, delivered, read, failed
                    'timestamp': status.get('timestamp'),
                    'recipient_id': status.get('recipient_id'),
                }
            
            return {'tipo': 'desconocido', 'payload': payload}
            
        except Exception as e:
            logger.error(f'Error procesando webhook: {str(e)}')
            return {'tipo': 'error', 'error': str(e)}

    @staticmethod
    def _limpiar_telefono(telefono: str) -> str:
        """
        Limpia número de teléfono removiendo caracteres no numéricos
        
        Args:
            telefono: número de teléfono
        
        Returns:
            número limpio (solo dígitos)
        """
        # Remover espacios, guiones, paréntesis, etc
        limpio = ''.join(filter(str.isdigit, telefono))
        
        # Si empieza con 0, removerlo (ej: 0987654321 -> 987654321)
        if limpio.startswith('0'):
            limpio = limpio[1:]
        
        # Si no tiene código de país, agregar Ecuador por defecto (593)
        if len(limpio) == 9:  # Número local ecuatoriano
            limpio = f'593{limpio}'
        
        return limpio

    # Métodos de conveniencia para ISP
    
    def enviar_recordatorio_pago(self, cliente_telefono: str, cliente_nombre: str,
                                 monto: str, fecha_vencimiento: str) -> Dict:
        """Envía recordatorio de pago a cliente"""
        mensaje = (
            f'Hola {cliente_nombre}! 👋\n\n'
            f'Te recordamos que tienes un pago pendiente:\n'
            f'💰 Monto: ${monto}\n'
            f'📅 Vence: {fecha_vencimiento}\n\n'
            f'Realiza tu pago para evitar cortes de servicio.\n'
            f'¡Gracias por tu preferencia!'
        )
        return self.enviar_mensaje(cliente_telefono, mensaje)

    def enviar_confirmacion_pago(self, cliente_telefono: str, cliente_nombre: str,
                                 monto: str, numero_factura: str) -> Dict:
        """Envía confirmación de pago recibido"""
        mensaje = (
            f'Hola {cliente_nombre}! ✅\n\n'
            f'Hemos recibido tu pago de ${monto}\n'
            f'Factura: {numero_factura}\n\n'
            f'¡Gracias por tu pago puntual!'
        )
        return self.enviar_mensaje(cliente_telefono, mensaje)

    def enviar_aviso_corte(self, cliente_telefono: str, cliente_nombre: str,
                          motivo: str = 'mora') -> Dict:
        """Envía aviso de corte de servicio"""
        mensaje = (
            f'Estimado/a {cliente_nombre},\n\n'
            f'⚠️ Tu servicio de internet ha sido suspendido por {motivo}.\n\n'
            f'Para reactivar tu servicio, ponte al día con tus pagos.\n'
            f'Contáctanos para más información.'
        )
        return self.enviar_mensaje(cliente_telefono, mensaje)

    def enviar_aviso_reactivacion(self, cliente_telefono: str, cliente_nombre: str) -> Dict:
        """Envía aviso de reactivación de servicio"""
        mensaje = (
            f'Hola {cliente_nombre}! 🎉\n\n'
            f'✅ Tu servicio de internet ha sido reactivado.\n\n'
            f'Ya puedes disfrutar de tu conexión.\n'
            f'¡Gracias por tu confianza!'
        )
        return self.enviar_mensaje(cliente_telefono, mensaje)

    def enviar_ticket_creado(self, cliente_telefono: str, numero_ticket: str,
                            descripcion: str) -> Dict:
        """Envía confirmación de ticket de soporte creado"""
        mensaje = (
            f'📋 Ticket de soporte creado\n\n'
            f'Número: {numero_ticket}\n'
            f'Descripción: {descripcion}\n\n'
            f'Nuestro equipo técnico te contactará pronto.'
        )
        return self.enviar_mensaje(cliente_telefono, mensaje)
