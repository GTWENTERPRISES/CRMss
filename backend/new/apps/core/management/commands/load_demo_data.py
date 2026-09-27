"""
Management command para cargar datos de demostración en el CRM ISP
"""
from django.core.management.base import BaseCommand
from django.db import transaction


class Command(BaseCommand):
    help = 'Carga datos de demostración para el CRM ISP'

    def add_arguments(self, parser):
        parser.add_argument(
            '--flush',
            action='store_true',
            help='Elimina todos los datos antes de cargar (excepto usuarios)',
        )

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('🚀 Cargando datos de demostración...'))

        if options['flush']:
            self.stdout.write(self.style.WARNING('⚠️  Eliminando datos existentes...'))
            self._flush_data()

        try:
            with transaction.atomic():
                self._load_fixtures()
                self.stdout.write(self.style.SUCCESS('\n✅ Datos cargados exitosamente!'))
                self._print_summary()
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'\n❌ Error: {e}'))
            raise

    def _flush_data(self):
        """Elimina datos de prueba manteniendo estructura"""
        from apps.pagos.models import Corte, Pago, PagoFactura
        from apps.facturacion.models import DetalleFactura, Factura
        from apps.clientes.models import Servicio, Contrato, Cliente
        from apps.olts.models import ONU, LineProfile, TipoONT, OLT
        from apps.mikrotik.models import FirewallBloqueo, IPAddress, RouterMikrotik
        from apps.soporte.models import TicketComentario, Ticket, Instalacion
        from apps.nms.models import AlertaRed, SondeoRed
        from apps.whatsapp.models import MensajeWhatsapp, ConversacionWhatsapp

        # Orden inverso de dependencias
        models_to_flush = [
            MensajeWhatsapp, ConversacionWhatsapp,
            AlertaRed, SondeoRed,
            TicketComentario, Ticket, Instalacion,
            FirewallBloqueo, IPAddress,
            PagoFactura, Corte, Pago,
            DetalleFactura, Factura,
            Servicio, Contrato,
            ONU, LineProfile,
            Cliente, RouterMikrotik, OLT, TipoONT,
        ]

        for model in models_to_flush:
            count = model.objects.count()
            model.objects.all().delete()
            self.stdout.write(f'  - Eliminados {count} registros de {model._meta.verbose_name_plural}')

    def _load_fixtures(self):
        """Carga fixtures usando loaddata"""
        from django.core.management import call_command

        fixtures = [
            ('olts', 'initial_data'),
            ('facturacion', 'planes'),
            ('clientes', 'clientes_demo'),
        ]

        self.stdout.write('\n📦 Cargando fixtures...')
        for app, fixture in fixtures:
            try:
                call_command('loaddata', f'{app}/fixtures/{fixture}.json', verbosity=0)
                self.stdout.write(f'  ✓ {app}/{fixture}')
            except Exception as e:
                self.stdout.write(self.style.WARNING(f'  ⚠ {app}/{fixture}: {e}'))

    def _print_summary(self):
        """Muestra resumen de datos cargados"""
        from apps.olts.models import OLT, TipoONT
        from apps.facturacion.models import PlanVelocidad
        from apps.clientes.models import Cliente, Contrato

        self.stdout.write('\n📊 Resumen de datos:')
        self.stdout.write(f'  • OLTs: {OLT.objects.count()}')
        self.stdout.write(f'  • Tipos de ONT: {TipoONT.objects.count()}')
        self.stdout.write(f'  • Planes de velocidad: {PlanVelocidad.objects.count()}')
        self.stdout.write(f'  • Clientes: {Cliente.objects.count()}')
        self.stdout.write(f'  • Contratos: {Contrato.objects.count()}')

        self.stdout.write('\n💡 Próximos pasos:')
        self.stdout.write('  1. Crear superusuario: python manage.py createsuperuser')
        self.stdout.write('  2. Acceder al admin: python manage.py runserver')
        self.stdout.write('  3. Admin panel: http://localhost:8000/admin/')
