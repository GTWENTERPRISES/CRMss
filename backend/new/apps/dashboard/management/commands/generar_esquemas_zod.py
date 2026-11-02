"""
Genera web/src/lib/validacion/tablas.generado.js: la forma de cada tabla para
que el dashboard valide con Zod antes de guardar.

    python manage.py generar_esquemas_zod            # escribe el archivo
    python manage.py generar_esquemas_zod --verificar  # falla si está desactualizado

Sale de los mismos modelos que crean la base (columnas.py, generado desde
apps/dashboard/esquema_fuente.py), así que el navegador valida exactamente lo que la base acepta: el
tipo de cada columna, el largo máximo, los decimales y los valores permitidos
de los CHECK ... IN (...). Las reglas de negocio (cédula, teléfono, IP...) van
aparte, escritas a mano en web/src/lib/validacion/reglas.js.
"""
import json
from pathlib import Path

from django.apps import apps
from django.core.management.base import BaseCommand, CommandError
from django.db import models

DESTINO = Path(__file__).resolve().parents[6] / 'web' / 'src' / 'lib' / 'validacion' / 'tablas.generado.js'

TIPOS = [
    (models.UUIDField, 'uuid'),
    (models.BooleanField, 'bool'),
    (models.DateTimeField, 'momento'),
    (models.DateField, 'fecha'),
    (models.TimeField, 'hora'),
    (models.DecimalField, 'decimal'),
    (models.FloatField, 'decimal'),
    (models.SmallIntegerField, 'entero'),
    (models.IntegerField, 'entero'),
    (models.BigIntegerField, 'entero'),
    (models.JSONField, 'json'),
    (models.CharField, 'texto'),
    (models.TextField, 'texto'),
    (models.GenericIPAddressField, 'texto'),
]


def tipo_de(campo):
    destino = campo.target_field if campo.is_relation else campo
    if isinstance(destino, (models.AutoField, models.BigAutoField)):
        return 'entero'
    for clase, nombre in TIPOS:
        if isinstance(destino, clase):
            return nombre
    return 'texto'


def describir(campo):
    d = {'t': tipo_de(campo)}
    if campo.null:
        d['n'] = 1
    if d['t'] == 'texto' and getattr(campo, 'max_length', None):
        d['max'] = campo.max_length
    if isinstance(campo, models.DecimalField):
        d['dig'], d['dec'] = campo.max_digits, campo.decimal_places
    if campo.choices and not campo.is_relation:
        d['op'] = [str(v) for v, _ in campo.flatchoices]
    return d


def tablas():
    resultado = {}
    for modelo in apps.get_models():
        meta = modelo._meta
        if meta.proxy or not meta.managed and meta.app_label not in ('dashboard',):
            continue
        tabla = meta.db_table
        # Solo lo nuestro: lo de Django y sus paquetes (auth, sesiones, la lista
        # negra de tokens) no lo escribe el dashboard.
        if not modelo.__module__.startswith('apps.') or tabla in resultado:
            continue
        resultado[tabla] = {c.attname: describir(c) for c in meta.concrete_fields}
    return dict(sorted(resultado.items()))


# Tipo de los parámetros de las RPC. Los UUID quedan como texto: varios llevan
# el id de un usuario de Django ("4"), no un UUID; los valida el backend.
TIPOS_PG = (('BOOL', 'bool'), ('TIMESTAMP', 'momento'), ('DATE', 'fecha'), ('TIME', 'hora'),
            ('NUMERIC', 'decimal'), ('DECIMAL', 'decimal'), ('REAL', 'decimal'), ('DOUBLE', 'decimal'),
            ('INT', 'entero'), ('BIGINT', 'entero'), ('SMALLINT', 'entero'), ('JSON', 'json'))


def tipo_de_parametro(tipo_pg):
    t = tipo_pg.upper()
    if t.endswith('[]'):
        return 'json'
    return next((clase for prefijo, clase in TIPOS_PG if t.startswith(prefijo)), 'texto')


def funciones():
    """{función: {parámetro: {t, n}}}: todos admiten null, como en Postgres."""
    from apps.dashboard.plpgsql_motor import motor

    return {
        nombre: {p: {'t': tipo_de_parametro(tipo), 'n': 1} for p, tipo, _defecto, modo in firma if modo != 'OUT'}
        for nombre, firma in sorted(motor().firmas.items())
    }


def contenido():
    datos = json.dumps(tablas(), ensure_ascii=False, separators=(',', ':'), sort_keys=True)
    rpc = json.dumps(funciones(), ensure_ascii=False, separators=(',', ':'), sort_keys=True)
    return (
        '// GENERADO por `python manage.py generar_esquemas_zod` desde los modelos de Django.\n'
        '// No se edita a mano: si cambia la base, se vuelve a generar.\n'
        '// t: uuid | texto | entero | decimal | bool | fecha | momento | hora | json\n'
        '// n: admite null · max: largo máximo · dig/dec: dígitos y decimales · op: valores permitidos\n'
        f'export const TABLAS = {datos}\n'
        '\n// Parámetros de las funciones (RPC), desde las firmas del esquema del dashboard.\n'
        f'export const FUNCIONES = {rpc}\n'
    )


class Command(BaseCommand):
    help = 'Genera los esquemas de las tablas para la validación con Zod del dashboard.'

    def add_arguments(self, parser):
        parser.add_argument('--verificar', action='store_true', help='Falla si el archivo no está al día.')

    def handle(self, *args, **opciones):
        nuevo = contenido()
        if opciones['verificar']:
            actual = DESTINO.read_text(encoding='utf-8') if DESTINO.exists() else ''
            if actual != nuevo:
                raise CommandError(f'{DESTINO.name} está desactualizado: corre generar_esquemas_zod.')
            self.stdout.write(self.style.SUCCESS(f'{DESTINO.name} al día.'))
            return
        DESTINO.parent.mkdir(parents=True, exist_ok=True)
        DESTINO.write_text(nuevo, encoding='utf-8', newline='\n')
        self.stdout.write(self.style.SUCCESS(f'{len(tablas())} tablas y {len(funciones())} funciones -> {DESTINO}'))
