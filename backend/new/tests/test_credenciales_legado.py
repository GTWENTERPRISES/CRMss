"""migrar_credenciales_legado: lo cifrado por el Django anterior queda como lo lee el middleware."""
import base64
import hashlib

import pytest
from django.core.management import call_command
from django.db import connection

from apps.core.fields import EncryptedMixin
from apps.core.management.commands.migrar_credenciales_legado import SAL

from .factories import ClienteFactory, OLTFactory

CLAVE = 'clave-de-prueba-del-middleware'


def descifrar_como_el_middleware(payload, clave=CLAVE):
    """decrypt() de middleware/src/lib/crypto.js."""
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM

    prefijo, iv, tag, texto = payload.split(':')
    assert prefijo == 'v1'
    iv, tag, texto = (base64.b64decode(x) for x in (iv, tag, texto))
    llave = hashlib.scrypt(clave.encode(), salt=SAL, n=16384, r=8, p=1, dklen=32)
    return AESGCM(llave).decrypt(iv, texto + tag, None).decode()


@pytest.mark.integration
def test_migra_las_credenciales_viejas(monkeypatch):
    monkeypatch.setenv('CREDENTIALS_KEY', CLAVE)
    viejo = EncryptedMixin()
    olt = OLTFactory()
    cliente = ClienteFactory(email='ana@example.com')
    with connection.cursor() as c:
        c.execute('UPDATE olts SET usuario = %s, password_encrypted = %s WHERE id = %s',
                  [viejo.get_prep_value('admin'), viejo.get_prep_value('s3cr3t'), olt.id.hex])

    call_command('migrar_credenciales_legado')            # sin --aplicar: no cambia nada
    with connection.cursor() as c:
        c.execute('SELECT usuario FROM olts WHERE id = %s', [olt.id.hex])
        assert c.fetchone()[0].startswith('enc::')

    call_command('migrar_credenciales_legado', '--aplicar')
    with connection.cursor() as c:
        c.execute('SELECT usuario, password_encrypted FROM olts WHERE id = %s', [olt.id.hex])
        usuario, password = c.fetchone()
        c.execute('SELECT email FROM clientes WHERE id = %s', [cliente.id.hex])
        email = c.fetchone()[0]
    assert usuario == 'admin'
    assert descifrar_como_el_middleware(password) == 's3cr3t'
    # El correo del cliente lo cifra el modelo de Django a propósito: no se toca.
    assert email.startswith('enc::')


def test_sin_clave_no_hace_nada(monkeypatch):
    monkeypatch.delenv('CREDENTIALS_KEY', raising=False)
    from django.core.management.base import CommandError
    with pytest.raises(CommandError):
        call_command('migrar_credenciales_legado')
