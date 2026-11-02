"""
Pasa las credenciales que guardó el Django anterior al formato del middleware.

El sistema viejo cifraba con Fernet ('enc::...', FIELD_ENCRYPTION_KEY). El
middleware —que es el que se conecta a las OLT y a los MikroTik— espera
'v1:<iv>:<tag>:<texto>' (AES-256-GCM con CREDENTIALS_KEY) y con lo viejo
contesta "La credencial guardada no tiene el formato esperado".

    CREDENTIALS_KEY=<la de middleware/.env> python manage.py migrar_credenciales_legado [--aplicar]

- Las columnas *_encrypted se descifran con Fernet y se vuelven a cifrar con el
  formato del middleware.
- Las demás columnas con 'enc::' que el esquema del esquema del dashboard tiene en claro
  (olts.usuario, routers_mikrotik.usuario) quedan en claro, como las lee el
  middleware.
- Las columnas que el modelo de Django declara cifradas (clientes.email y
  clientes.direccion) no se tocan.

Sin --aplicar solo muestra qué cambiaría.
"""
import base64
import hashlib
import os

from django.apps import apps
from django.core.management.base import BaseCommand, CommandError
from django.db import connection, transaction

from apps.core.fields import EncryptedMixin

PREFIJO_LEGADO = EncryptedMixin.prefix
SAL = b'taller-smartolt-v1'


def cifrar_para_el_middleware(texto, clave):
    """Lo mismo que encrypt() de middleware/src/lib/crypto.js."""
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM

    llave = hashlib.scrypt(clave.encode(), salt=SAL, n=16384, r=8, p=1, dklen=32)
    iv = os.urandom(12)
    sellado = AESGCM(llave).encrypt(iv, texto.encode(), None)
    cifrado, tag = sellado[:-16], sellado[-16:]
    return ':'.join(['v1', *(base64.b64encode(x).decode() for x in (iv, tag, cifrado))])


def columnas_cifradas_por_django():
    """(tabla, columna) que un modelo declara con un campo Encrypted*: esas se dejan."""
    propias = set()
    for modelo in apps.get_models():
        for campo in modelo._meta.concrete_fields:
            if isinstance(campo, EncryptedMixin):
                propias.add((modelo._meta.db_table, campo.column))
    return propias


class Command(BaseCommand):
    help = 'Re-cifra las credenciales del Django anterior (enc::) con el formato del middleware.'

    def add_arguments(self, parser):
        parser.add_argument('--aplicar', action='store_true', help='Guardar los cambios (sin esto, solo informa).')

    def handle(self, *args, **opciones):
        clave = os.environ.get('CREDENTIALS_KEY', '')
        if not clave:
            raise CommandError('Falta CREDENTIALS_KEY (la misma de middleware/.env) en el entorno.')
        legado = EncryptedMixin()
        intocables = columnas_cifradas_por_django()
        cambios = []

        with connection.cursor() as cursor:
            tablas = connection.introspection.table_names(cursor)
            for tabla in tablas:
                columnas = [c.name for c in connection.introspection.get_table_description(cursor, tabla)]
                for columna in columnas:
                    if (tabla, columna) in intocables:
                        continue
                    cursor.execute(
                        f'SELECT rowid, "{columna}" FROM "{tabla}" WHERE CAST("{columna}" AS TEXT) LIKE %s',
                        [PREFIJO_LEGADO + '%'],
                    )
                    for rowid, valor in cursor.fetchall():
                        claro = legado.from_db_value(valor, None, None)
                        if claro == valor:
                            self.stderr.write(f'  {tabla}.{columna} (fila {rowid}): no se pudo descifrar, se deja igual')
                            continue
                        nuevo = cifrar_para_el_middleware(claro, clave) if columna.endswith('_encrypted') else claro
                        cambios.append((tabla, columna, rowid, nuevo))

        por_columna = {}
        for tabla, columna, _, nuevo in cambios:
            clave_col = f'{tabla}.{columna}'
            por_columna[clave_col] = por_columna.get(clave_col, 0) + 1
        for nombre, n in sorted(por_columna.items()):
            destino = 'formato del middleware' if nombre.endswith('_encrypted') else 'texto en claro'
            self.stdout.write(f'  {nombre}: {n} fila(s) → {destino}')

        if not opciones['aplicar']:
            self.stdout.write(self.style.WARNING(f'{len(cambios)} valores para migrar. Ejecuta con --aplicar para guardarlos.'))
            return
        with transaction.atomic(), connection.cursor() as cursor:
            for tabla, columna, rowid, nuevo in cambios:
                cursor.execute(f'UPDATE "{tabla}" SET "{columna}" = %s WHERE rowid = %s', [nuevo, rowid])
        self.stdout.write(self.style.SUCCESS(f'{len(cambios)} valores migrados.'))
