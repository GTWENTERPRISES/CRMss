"""
Crea el primer administrador de una base nueva: el legajo (usuarios_sistema,
rol super_admin) y su usuario de Django, enlazados por auth_id.

    DJANGO_ADMIN_EMAIL=... DJANGO_ADMIN_CLAVE=... python manage.py crear_administrador

Si ya existe un legajo con ese correo no toca nada: se puede correr en cada
arranque del contenedor. Un superusuario de Django sin legajo NO sirve para
entrar al panel: es la cuenta de servicio del middleware.
"""
import os

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.db import transaction


class Command(BaseCommand):
    help = 'Crea el primer administrador (legajo super_admin + usuario de Django) desde DJANGO_ADMIN_EMAIL / DJANGO_ADMIN_CLAVE.'

    def handle(self, *args, **options):
        from apps.dashboard.models import UsuariosSistema

        email = os.getenv('DJANGO_ADMIN_EMAIL', '').strip().lower()
        clave = os.getenv('DJANGO_ADMIN_CLAVE', '').strip()
        if not email or not clave:
            self.stdout.write('Sin DJANGO_ADMIN_EMAIL / DJANGO_ADMIN_CLAVE: no se crea administrador.')
            return
        if UsuariosSistema.objects.filter(email__iexact=email).exists():
            self.stdout.write(f'El administrador {email} ya existe.')
            return
        if len(clave) < 8:
            self.stderr.write('DJANGO_ADMIN_CLAVE tiene que tener al menos 8 caracteres.')
            return

        User = get_user_model()
        with transaction.atomic():
            usuario = User.objects.filter(email__iexact=email).first()
            if usuario is None:
                usuario = User.objects.create_user(username=email.split('@')[0], email=email, password=clave)
            UsuariosSistema.objects.create(
                auth_id=str(usuario.id),
                nombre=os.getenv('DJANGO_ADMIN_NOMBRE', 'Administrador'),
                usuario=email.split('@')[0],
                email=email,
                rol='super_admin',
                activo=True,
                todas_las_zonas=True,
                permisos=['*'],
            )
        self.stdout.write(self.style.SUCCESS(f'Administrador creado: {email}'))
