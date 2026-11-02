"""
Campos cifrados en reposo.

Un campo `EncryptedCharField` / `EncryptedTextField` guarda en la base
`enc::<token Fernet>` (AES-128-CBC + HMAC-SHA256) y devuelve el texto en claro
al leerlo con el ORM. Quien se lleve el archivo de la base —o una copia de
respaldo— ve tokens ilegibles: la clave no vive en la base sino en el entorno
(FIELD_ENCRYPTION_KEY).

── Por qué el resto del sistema sigue funcionando ──

El cifrado de Fernet es aleatorio: el mismo texto da un token distinto cada vez,
así que la base ya no puede comparar, buscar ni ordenar por esa columna. Para
que eso siga andando, todo lo que consulta la base ve el texto en claro:

- el ORM: los lookups (`exact`, `icontains`, `in`...) de estos campos comparan
  contra `pg_descifrar(columna)` (abajo, `Descifrado*`);
- el SQL propio (vistas, procesos, la API genérica): `pg_descifrar()` y
  `pg_cifrar()` están registradas en cada conexión de SQLite
  (apps/dashboard/sqlite_funciones.py) y el traductor las pone solo
  alrededor de las columnas cifradas (apps/core/cifrado.py).

── Claves ──

FIELD_ENCRYPTION_KEY es la clave con que se cifra. Para cambiarla sin perder
nada, la vieja va en FIELD_ENCRYPTION_KEYS_ANTERIORES (separadas por coma): se
sigue pudiendo leer con ellas, y `manage.py recifrar` pasa todo a la nueva.
"""
import base64
import hashlib
from functools import lru_cache

from cryptography.fernet import Fernet, InvalidToken, MultiFernet
from django.conf import settings
from django.db import models
from django.db.models import lookups

PREFIJO = 'enc::'


def get_blind_hash(value):
    if not value:
        return ''
    salt = settings.SECRET_KEY.encode('utf-8')
    return hashlib.sha256(str(value).encode('utf-8') + salt).hexdigest()


def _fernet_de(clave):
    if isinstance(clave, str):
        clave = clave.encode()
    return Fernet(base64.urlsafe_b64encode(hashlib.sha256(clave).digest()))


_fernet = None


def get_fernet():
    """MultiFernet: cifra con la clave actual y descifra con la actual o las anteriores."""
    global _fernet
    if _fernet is None:
        anteriores = [c.strip() for c in getattr(settings, 'FIELD_ENCRYPTION_KEYS_ANTERIORES', []) if c.strip()]
        _fernet = MultiFernet([_fernet_de(settings.FIELD_ENCRYPTION_KEY), *map(_fernet_de, anteriores)])
    return _fernet


def reiniciar_claves():
    """Para los tests y para `recifrar`: vuelve a leer las claves de settings."""
    global _fernet
    _fernet = None
    _descifrar_token.cache_clear()


def cifrar(valor):
    """Texto → 'enc::...'. None, '' y lo que ya está cifrado quedan igual."""
    if valor is None or valor == '':
        return valor
    texto = str(valor)
    if texto.startswith(PREFIJO):
        return texto
    return PREFIJO + get_fernet().encrypt(texto.encode()).decode()


@lru_cache(maxsize=200_000)
def _descifrar_token(token):
    # Con caché: una vista de 5.000 abonados descifra las mismas celdas en cada
    # consulta, y Fernet cuesta ~20 µs por celda.
    try:
        return get_fernet().decrypt(token.encode()).decode()
    except (InvalidToken, ValueError):
        return None


def descifrar(valor):
    """'enc::...' → texto. Lo que no está cifrado (filas viejas) vuelve tal cual."""
    if not isinstance(valor, str) or not valor.startswith(PREFIJO):
        return valor
    texto = _descifrar_token(valor[len(PREFIJO):])
    # Un token que ninguna clave abre se devuelve crudo antes que perder el dato.
    return valor if texto is None else texto


def esta_cifrado(valor):
    return isinstance(valor, str) and valor.startswith(PREFIJO)


# ── búsquedas sobre la columna descifrada ────────────────────────────────────

class _SobreDescifrado:
    """Compara contra pg_descifrar(columna) y deja el valor buscado en claro."""

    prepare_rhs = False
    can_use_none_as_rhs = False

    def process_lhs(self, compiler, connection, lhs=None):
        sql, params = super().process_lhs(compiler, connection, lhs)
        return f'pg_descifrar({sql})', params

    def get_db_prep_lookup(self, value, connection):
        return ('%s', [value])


def _lookup(base):
    return type(f'Descifrado{base.__name__}', (_SobreDescifrado, base), {})


LOOKUPS_DESCIFRADOS = {
    c.lookup_name: _lookup(c)
    for c in (lookups.Exact, lookups.IExact, lookups.Contains, lookups.IContains, lookups.StartsWith,
              lookups.IStartsWith, lookups.EndsWith, lookups.IEndsWith, lookups.Regex, lookups.IRegex,
              lookups.GreaterThan, lookups.GreaterThanOrEqual, lookups.LessThan, lookups.LessThanOrEqual)
}


class _InDescifrado(_SobreDescifrado, lookups.In):
    def batch_process_rhs(self, compiler, connection, rhs=None):
        valores = list(self.rhs if rhs is None else rhs)
        return ['%s'] * len(valores), valores


LOOKUPS_DESCIFRADOS['in'] = _InDescifrado


class EncryptedMixin:
    prefix = PREFIJO
    cifrado = True

    # También se usa suelto (EncryptedMixin().get_prep_value(x)) para cifrar o
    # descifrar un valor sin campo: de ahí los getattr.
    def get_prep_value(self, value):
        previo = getattr(super(), 'get_prep_value', None)
        return cifrar(previo(value) if previo else value)

    def from_db_value(self, value, expression, connection):
        return descifrar(value)

    def to_python(self, value):
        previo = getattr(super(), 'to_python', None)
        return descifrar(previo(value) if previo else value)

    def get_lookup(self, lookup_name):
        return LOOKUPS_DESCIFRADOS.get(lookup_name) or super().get_lookup(lookup_name)


class EncryptedCharField(EncryptedMixin, models.CharField):
    description = 'Texto cifrado en reposo'


class EncryptedTextField(EncryptedMixin, models.TextField):
    description = 'Texto largo cifrado en reposo'


class EncryptedJSONField(models.JSONField):
    """
    JSON cifrado en reposo: se guarda 'enc::<token del JSON>'. Lo usa la
    auditoría, cuyas fotos de antes/después llevan los datos personales de la
    fila. Desde SQL se lee igual (pg_descifrar devuelve el JSON como texto, y
    las funciones JSON de SQLite lo aceptan).
    """

    description = 'JSON cifrado en reposo'
    cifrado = True

    # En la base es texto: el token no es JSON, y el CHECK (JSON_VALID(...))
    # que Django le pone a un JSONField en SQLite lo rechazaría.
    def db_type(self, connection):
        return 'text'

    def db_check(self, connection):
        return None

    def get_db_prep_value(self, value, connection, prepared=False):
        crudo = super().get_db_prep_value(value, connection, prepared)
        return cifrar(crudo) if isinstance(crudo, str) else crudo

    def from_db_value(self, value, expression, connection):
        return super().from_db_value(descifrar(value), expression, connection)


def por_texto(campo):
    """
    Orden por el texto en claro de un campo cifrado: `ordering = [por_texto('nombre')]`.
    Ordenar por la columna cruda ordenaría por el token, que es al azar.
    """
    from django.db.models import F, Func
    return Func(F(campo), function='pg_descifrar').asc(nulls_last=True)
