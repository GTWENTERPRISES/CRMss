"""
La clave del cifrado en reposo (apps/core/fields.py), revisada al arrancar.

Si FIELD_ENCRYPTION_KEY no está definida, settings usa la SECRET_KEY: la base
queda cifrada, pero con una clave que también firma las sesiones y que suele
viajar en más lugares. En producción (DEBUG apagado) eso no arranca.
"""
import os

from django.conf import settings
from django.core.checks import Error, Warning, register

EJEMPLO = 'change-this-for-field-encryption'


@register()
def clave_de_cifrado(app_configs, **kwargs):
    propia = os.getenv('FIELD_ENCRYPTION_KEY', '')
    problemas = []
    if not propia or propia == settings.SECRET_KEY:
        problemas.append('FIELD_ENCRYPTION_KEY no está definida aparte: los datos se cifran con la SECRET_KEY.')
    elif propia == EJEMPLO:
        problemas.append('FIELD_ENCRYPTION_KEY tiene el valor de ejemplo de .env.example.')
    elif len(propia) < 32:
        problemas.append('FIELD_ENCRYPTION_KEY es corta: usa al menos 32 caracteres al azar.')
    pista = ('Genera una con: python -c "import secrets; print(secrets.token_urlsafe(48))" y guárdala fuera '
             'de la base y del repositorio. Si ya hay datos cifrados con otra, ponla en '
             'FIELD_ENCRYPTION_KEYS_ANTERIORES y corre `manage.py recifrar`.')
    clase = Warning if settings.DEBUG else Error
    return [clase(p, hint=pista, id='core.E001') for p in problemas]
