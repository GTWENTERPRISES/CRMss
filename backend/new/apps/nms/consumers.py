"""Consumidor WebSocket para actualizaciones del NMS."""
from channels.generic.websocket import AsyncJsonWebsocketConsumer


class NMSConsumer(AsyncJsonWebsocketConsumer):
    """Entrega eventos NMS al usuario autenticado conectado."""

    group_name = 'nms_updates'

    async def connect(self):
        if self.scope.get('user') is None or self.scope['user'].is_anonymous:
            await self.close(code=4401)
            return
        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()
        await self.send_json({'type': 'connection', 'status': 'connected'})

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.group_name, self.channel_name)

    async def nms_event(self, event):
        await self.send_json(event.get('payload', event))

    async def receive_json(self, content, **kwargs):
        # El cliente puede solicitar un mensaje de estado sin publicar eventos.
        if content.get('type') == 'ping':
            await self.send_json({'type': 'pong'})


async def broadcast_nms_event(channel_layer, payload):
    """Publica un evento NMS en todas las conexiones WebSocket."""
    await channel_layer.group_send('nms_updates', {'type': 'nms_event', 'payload': payload})
