"""
Sincroniza el personal del CRM (usuarios_sistema) con los usuarios de Django.

La credencial vive en auth_user de Django y el legajo sigue en
usuarios_sistema. Este comando:

1. Crea (o actualiza) un usuario Django por cada legajo activo, con el mismo
   correo. A los nuevos les pone la clave inicial indicada (o una generada,
   que se muestra una sola vez por pantalla).
2. Reescribe usuarios_sistema.auth_id con el id del usuario Django (antes era
   un UUID; la columna pasa a TEXT para poder guardarlo).
3. Crea el usuario de SERVICIO del middleware (DJANGO_SERVICIO_EMAIL /
   DJANGO_SERVICIO_CLAVE), con el que el servicio interno consulta las tablas.

Con --reset-clave repone la clave de todos los legajos (útil la primera vez).
"""
import secrets
import string

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.db import connection

from apps.core.views_generic import columnas_reales


def clave_aleatoria():
    alfabeto = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alfabeto) for _ in range(12))


class Command(BaseCommand):
    help = (
        'Sincroniza usuarios_sistema con los usuarios de Django y crea el '
        'usuario de servicio del middleware.'
    )

    def add_arguments(self, parser):
        parser.add_argument(
            '--clave',
            help='Clave inicial para los legajos nuevos (si no se da, se genera).',
        )
        parser.add_argument(
            '--reset-clave',
            action='store_true',
            help='Repone la clave de TODOS los legajos (peligroso: los saca a todos hasta que cambien).',
        )

    def handle(self, *args, **options):
        User = get_user_model()
        self.crear_usuario_servicio(User)

        columnas = columnas_reales('usuarios_sistema')
        if not columnas:
            self.stdout.write(
                self.style.WARNING(
                    'La tabla usuarios_sistema no existe en esta base. '
                    'Solo se creó el usuario de servicio.'
                )
            )
            return

        self.asegurar_auth_id_texto()

        with connection.cursor() as cursor:
            cursor.execute('SELECT id, email, usuario, activo FROM usuarios_sistema')
            legajos = cursor.fetchall()

        base = options.get('clave')
        con_reset = options.get('reset_clave', False)

        for id_legajo, email, usuario, activo in legajos:
            if not email:
                self.stdout.write(self.style.WARNING(f'Legajo {usuario} sin correo: se saltea.'))
                continue

            existente = User.objects.filter(email__iexact=email).first()
            if existente is None:
                clave = base or clave_aleatoria()
                existente = User.objects.create_user(
                    username=usuario or email.split('@')[0],
                    email=email,
                    password=clave,
                    is_active=bool(activo),
                )
                self.stdout.write(self.style.SUCCESS(f'Usuario nuevo: {email} (clave inicial: {clave})'))
            else:
                existente.is_active = bool(activo)
                if con_reset:
                    nueva = base or clave_aleatoria()
                    existente.set_password(nueva)
                    self.stdout.write(self.style.SUCCESS(f'Clave repuesta para {email}: {nueva}'))
                existente.save()

            with connection.cursor() as cursor:
                cursor.execute(
                    'UPDATE usuarios_sistema SET auth_id = %s WHERE id = %s',
                    [str(existente.id), id_legajo],
                )

        self.stdout.write(self.style.SUCCESS(f'{len(legajos)} legajos sincronizados.'))

    def asegurar_auth_id_texto(self):
        """
        En el Postgres anterior, auth_id era UUID (apuntaba a auth.users).
        Los ids de Django son enteros: la columna pasa a TEXT, conservando el
        valor viejo (que ya no se usa, pero borrarla sería más destructivo).
        """
        if connection.vendor != 'postgresql':
            return
        with connection.cursor() as cursor:
            cursor.execute(
                "SELECT data_type FROM information_schema.columns "
                "WHERE table_name = 'usuarios_sistema' AND column_name = 'auth_id'"
            )
            fila = cursor.fetchone()
            if fila and fila[0] == 'uuid':
                cursor.execute(
                    'ALTER TABLE usuarios_sistema '
                    'ALTER COLUMN auth_id TYPE text USING auth_id::text'
                )
                self.stdout.write('Columna auth_id convertida de UUID a TEXT.')

    def crear_usuario_servicio(self, User):
        """
        El middleware ya no tiene llave de administrador de la base: entra a
        Django con un usuario propio, igual que cualquier integración.
        """
        import os

        email = os.getenv('DJANGO_SERVICIO_EMAIL', 'servicio@middleware.local').strip()
        clave = os.getenv('DJANGO_SERVICIO_CLAVE', '').strip()
        if not clave:
            self.stdout.write(
                self.style.WARNING(
                    'DJANGO_SERVICIO_CLAVE no está en el .env: se genera una '
                    'y hay que copiarla a middleware/.env.'
                )
            )
            clave = clave_aleatoria()

        usuario = User.objects.filter(email__iexact=email).first()
        if usuario is None:
            User.objects.create_user(
                username='servicio_middleware',
                email=email,
                password=clave,
                is_staff=True,
                is_superuser=True,
            )
            self.stdout.write(self.style.SUCCESS(f'Usuario de servicio creado: {email}'))
        else:
            usuario.is_staff = True
            usuario.is_superuser = True
            usuario.set_password(clave)
            usuario.save()
            self.stdout.write(self.style.SUCCESS(f'Usuario de servicio actualizado: {email}'))

