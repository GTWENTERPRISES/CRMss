"""
manage.py respaldar — respalda la base y los archivos, y prueba que el respaldo se pueda restaurar.

    python manage.py respaldar            hace un respaldo nuevo (ver apps/core/respaldos.py)
    python manage.py respaldar --probar R prueba un respaldo existente (ruta al .sqlite3)

Celery Beat lo corre solo todas las noches (config/celery.py).
"""
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError

from apps.core.respaldos import (
    RespaldoFallido, carpeta, probar_restauracion, probar_restauracion_postgres, respaldar,
)


class Command(BaseCommand):
    help = 'Respalda la base y los archivos, y prueba que el respaldo se pueda restaurar.'

    def add_arguments(self, parser):
        parser.add_argument('--probar', metavar='RUTA', help='Probar un respaldo existente en vez de hacer uno.')

    def handle(self, *args, **opciones):
        try:
            if opciones['probar']:
                ruta = Path(opciones['probar'])
                r = (probar_restauracion_postgres(ruta) if ruta.suffix == '.dump'
                     else probar_restauracion(ruta))
                self.stdout.write(self.style.SUCCESS(
                    f"Se puede restaurar: {r['tablas']} tablas, "
                    f"{r['cifrados_leidos']} datos cifrados leídos con la clave actual."))
                return
            r = respaldar()
        except RespaldoFallido as e:
            raise CommandError(f'Respaldo fallido: {e}') from e
        self.stdout.write(self.style.SUCCESS(
            f"Respaldo listo en {carpeta()}: {r['base']['archivo']} ({r['base']['bytes'] // 1024} KB), "
            f"{r['archivos']['cantidad']} archivos. Prueba de restauración: {r['prueba']['tablas']} tablas, "
            f"{r['prueba']['cifrados_leidos']} datos cifrados leídos. Borrados por antigüedad: {r['borrados']}."))
