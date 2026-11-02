"""manage.py cargar_semillas — los datos de referencia del esquema del dashboard que falten (ver apps/dashboard/semillas.py)."""
from django.core.management.base import BaseCommand
from django.db import connection, transaction

from apps.dashboard.semillas import cargar


class Command(BaseCommand):
    help = 'Carga los datos de referencia del esquema del dashboard en las tablas que no los tengan.'

    def handle(self, *args, **opciones):
        with transaction.atomic():
            r = cargar(connection)
        self.stdout.write(self.style.SUCCESS(f"{r['aplicadas']} semillas aplicadas, {r['omitidas']} omitidas "
                                             f"(la tabla ya tenía datos)."))
        for tabla, motivo in r['fallas'].items():
            self.stdout.write(self.style.WARNING(f'  {tabla}: {motivo}'))
