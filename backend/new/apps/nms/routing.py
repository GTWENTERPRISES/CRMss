from django.urls import re_path

from .consumers import NMSConsumer

websocket_urlpatterns = [
    re_path(r'^ws/nms/$', NMSConsumer.as_asgi()),
]
