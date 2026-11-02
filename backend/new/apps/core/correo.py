"""
Correos que manda Django (por ahora, el código de recuperación de contraseña).

Salen con la configuración de correo de Django: las variables EMAIL_* de
backend/new/.env (ver config/settings.py). Sin EMAIL_HOST se usa el backend de
consola y el correo se ve en el log del servidor.
"""
from django.conf import settings
from django.core.mail import EmailMultiAlternatives


def enviar_correo(para, asunto, texto, html=None):
    """Manda un correo. Lanza la excepción del servidor si no sale."""
    mensaje = EmailMultiAlternatives(asunto, texto, settings.DEFAULT_FROM_EMAIL, [para])
    if html:
        mensaje.attach_alternative(html, 'text/html')
    mensaje.send()
