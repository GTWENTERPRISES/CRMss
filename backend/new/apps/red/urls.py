from django.urls import re_path

from .views import proxy_servicio_red

urlpatterns = [
    # Todo lo que llega a /api/v1/red/<cualquier cosa> se reenvía al middleware.
    re_path(r'^(?P<ruta>.*)$', proxy_servicio_red, name='proxy-red'),
]
