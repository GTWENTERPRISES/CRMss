"""
Mantenimiento del cifrado en reposo (apps/core/fields.py).

    python manage.py recifrar --verificar   # cuenta lo que quedó en claro o no se puede abrir
    python manage.py recifrar               # vuelve a cifrar todo con la clave actual

Para cambiar la clave:
  1. FIELD_ENCRYPTION_KEYS_ANTERIORES = <la clave vieja>
     FIELD_ENCRYPTION_KEY             = <la nueva>
  2. python manage.py recifrar
  3. con `--verificar` en 0, se puede borrar la vieja de FIELD_ENCRYPTION_KEYS_ANTERIORES.

Lo que está en claro (filas viejas) también queda cifrado. Corre en una sola
transacción y sin los disparadores del dashboard: si algo falla, no cambia nada.
"""
from django.core.management.base import BaseCommand
from django.db import connection, transaction

from apps.core.cifrado import columnas_cifradas
from apps.core.fields import PREFIJO, _descifrar_token, cifrar, reiniciar_claves


class Command(BaseCommand):
    help = 'Vuelve a cifrar las columnas cifradas con la clave actual (o verifica su estado).'

    def add_arguments(self, parser):
        parser.add_argument('--verificar', action='store_true', help='Solo cuenta, no cambia nada.')

    def handle(self, *args, **op):
        reiniciar_claves()
        en_claro = ilegibles = recifradas = 0
        tablas = columnas_cifradas()

        with transaction.atomic(), connection.cursor() as cursor:
            if not op['verificar']:
                from apps.dashboard import disparadores
                disparadores.borrar(cursor)
            try:
                for tabla, cols in sorted(tablas.items()):
                    for col in sorted(cols):
                        cursor.execute(f'SELECT rowid, "{col}" FROM "{tabla}" WHERE "{col}" IS NOT NULL AND "{col}" <> \'\'')
                        for rowid, valor in cursor.fetchall():
                            if not str(valor).startswith(PREFIJO):
                                en_claro += 1
                                texto = valor
                            else:
                                texto = _descifrar_token(valor[len(PREFIJO):])
                                if texto is None:
                                    ilegibles += 1
                                    self.stderr.write(f'  {tabla}.{col} (rowid {rowid}): ninguna clave lo abre')
                                    continue
                            if not op['verificar']:
                                cursor.execute(f'UPDATE "{tabla}" SET "{col}" = %s WHERE rowid = %s', [cifrar(texto), rowid])
                                recifradas += 1
            finally:
                if not op['verificar']:
                    disparadores.crear(cursor)

        columnas = sum(len(c) for c in tablas.values())
        if op['verificar']:
            self.stdout.write(f'{columnas} columnas cifradas en {len(tablas)} tablas: '
                              f'{en_claro} valores en claro, {ilegibles} que ninguna clave abre.')
            if en_claro or ilegibles:
                raise SystemExit(1)
        else:
            self.stdout.write(self.style.SUCCESS(
                f'{recifradas} valores cifrados con la clave actual ({en_claro} estaban en claro).'
                + (f' {ilegibles} no se pudieron abrir y quedaron como estaban.' if ilegibles else '')))
