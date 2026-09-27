import base64
import hashlib

from cryptography.fernet import Fernet, InvalidToken
from django.conf import settings
from django.db import models


def get_blind_hash(value):
    if not value:
        return ''
    salt = settings.SECRET_KEY.encode('utf-8')
    return hashlib.sha256(str(value).encode('utf-8') + salt).hexdigest()


def _build_fernet():
    raw = settings.FIELD_ENCRYPTION_KEY
    if isinstance(raw, str):
        raw = raw.encode()
    key = base64.urlsafe_b64encode(hashlib.sha256(raw).digest())
    return Fernet(key)


_fernet = None


def get_fernet():
    global _fernet
    if _fernet is None:
        _fernet = _build_fernet()
    return _fernet


class EncryptedMixin:
    prefix = 'enc::'

    def get_prep_value(self, value):
        if value is None or value == '':
            return value
        if isinstance(value, str) and value.startswith(self.prefix):
            return value
        token = get_fernet().encrypt(str(value).encode())
        return self.prefix + token.decode()

    def from_db_value(self, value, expression, connection):
        if value is None or value == '':
            return value
        if not isinstance(value, str) or not value.startswith(self.prefix):
            return value
        token = value[len(self.prefix):].encode()
        try:
            return get_fernet().decrypt(token).decode()
        except (InvalidToken, ValueError):
            return value

    def to_python(self, value):
        if value is None or value == '':
            return value
        if isinstance(value, str) and value.startswith(self.prefix):
            return self.from_db_value(value, None, None)
        return value


class EncryptedCharField(EncryptedMixin, models.CharField):
    description = 'Char field encrypted at rest'


class EncryptedTextField(EncryptedMixin, models.TextField):
    description = 'Text field encrypted at rest'
