#!/usr/bin/env python3
"""
Script de verificación de migración Supabase → Django
Comprueba que el backend esté configurado correctamente.

Uso:
    python scripts/verificar_migracion.py
"""

import os
import sys
import django
import requests
from pathlib import Path

# Agregar el directorio del proyecto al path
backend_path = Path(__file__).parent.parent / 'backend' / 'new'
sys.path.insert(0, str(backend_path))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

# Setup Django
django.setup()

from django.conf import settings
from django.db import connection
from django.contrib.auth import get_user_model

# Colores para terminal
GREEN = '\033[92m'
RED = '\033[91m'
YELLOW = '\033[93m'
BLUE = '\033[94m'
RESET = '\033[0m'


def print_ok(msg):
    print(f"{GREEN}✓{RESET} {msg}")


def print_error(msg):
    print(f"{RED}✗{RESET} {msg}")


def print_warning(msg):
    print(f"{YELLOW}⚠{RESET} {msg}")


def print_info(msg):
    print(f"{BLUE}ℹ{RESET} {msg}")


def verificar_configuracion():
    """Verifica las variables de entorno y configuración de Django"""
    print("\n" + "=" * 60)
    print("VERIFICACIÓN DE CONFIGURACIÓN")
    print("=" * 60)
    
    # SECRET_KEY
    if settings.SECRET_KEY == 'django-insecure-dev-only-change-me-in-production':
        print_warning("SECRET_KEY usa el valor por defecto (cambiar en producción)")
    else:
        print_ok("SECRET_KEY configurado")
    
    # DEBUG
    if settings.DEBUG:
        print_info("DEBUG=True (desarrollo)")
    else:
        print_ok("DEBUG=False (producción)")
    
    # ALLOWED_HOSTS
    if '*' in settings.ALLOWED_HOSTS:
        print_warning("ALLOWED_HOSTS='*' (inseguro en producción)")
    else:
        print_ok(f"ALLOWED_HOSTS={settings.ALLOWED_HOSTS}")
    
    # CORS
    if settings.CORS_ALLOW_ALL_ORIGINS:
        print_warning("CORS_ALLOW_ALL_ORIGINS=True (inseguro en producción)")
    elif settings.CORS_ALLOWED_ORIGINS:
        print_ok(f"CORS configurado para: {', '.join(settings.CORS_ALLOWED_ORIGINS)}")
    else:
        print_error("CORS no configurado")


def verificar_base_datos():
    """Verifica la conexión a la base de datos"""
    print("\n" + "=" * 60)
    print("VERIFICACIÓN DE BASE DE DATOS")
    print("=" * 60)
    
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT version()")
            version = cursor.fetchone()[0]
            print_ok(f"Conexión PostgreSQL exitosa")
            print_info(f"  Version: {version}")
            
            # Contar tablas
            cursor.execute("""
                SELECT COUNT(*)
                FROM information_schema.tables
                WHERE table_schema = 'public'
            """)
            num_tablas = cursor.fetchone()[0]
            print_ok(f"Tablas en base de datos: {num_tablas}")
            
            # Verificar tablas principales
            tablas_requeridas = [
                'clientes', 'contratos', 'planes', 'facturas', 'pagos',
                'tickets', 'instalaciones', 'olts', 'onus'
            ]
            
            cursor.execute("""
                SELECT table_name
                FROM information_schema.tables
                WHERE table_schema = 'public'
                AND table_name = ANY(%s)
            """, [tablas_requeridas])
            
            tablas_existentes = [row[0] for row in cursor.fetchall()]
            
            for tabla in tablas_requeridas:
                if tabla in tablas_existentes:
                    print_ok(f"  Tabla '{tabla}' existe")
                else:
                    print_warning(f"  Tabla '{tabla}' no encontrada")
    
    except Exception as e:
        print_error(f"Error de base de datos: {e}")
        return False
    
    return True


def verificar_modelos():
    """Verifica que los modelos Django estén migrados"""
    print("\n" + "=" * 60)
    print("VERIFICACIÓN DE MODELOS DJANGO")
    print("=" * 60)
    
    try:
        from apps.clientes.models import Cliente
        from apps.facturacion.models import Plan, Factura
        from apps.pagos.models import Pago
        from apps.soporte.models import Ticket
        from apps.olts.models import OLT
        
        modelos = [
            ('Cliente', Cliente),
            ('Plan', Plan),
            ('Factura', Factura),
            ('Pago', Pago),
            ('Ticket', Ticket),
            ('OLT', OLT),
        ]
        
        for nombre, modelo in modelos:
            try:
                count = modelo.objects.count()
                print_ok(f"Modelo {nombre}: {count} registros")
            except Exception as e:
                print_error(f"Modelo {nombre}: {e}")
    
    except ImportError as e:
        print_error(f"Error importando modelos: {e}")


def verificar_usuarios():
    """Verifica que exista al menos un superusuario"""
    print("\n" + "=" * 60)
    print("VERIFICACIÓN DE USUARIOS")
    print("=" * 60)
    
    User = get_user_model()
    
    total_users = User.objects.count()
    superusers = User.objects.filter(is_superuser=True).count()
    
    print_info(f"Total de usuarios: {total_users}")
    
    if superusers > 0:
        print_ok(f"Superusuarios: {superusers}")
        print_info("  Podés acceder al admin en: http://localhost:8000/admin/")
    else:
        print_warning("No hay superusuarios")
        print_info("  Creá uno con: python manage.py createsuperuser")


def verificar_endpoints():
    """Verifica que los endpoints de la API respondan"""
    print("\n" + "=" * 60)
    print("VERIFICACIÓN DE ENDPOINTS")
    print("=" * 60)
    
    base_url = "http://localhost:8000"
    
    endpoints = [
        ("/api/docs/", "Swagger UI"),
        ("/api/redoc/", "ReDoc"),
        ("/api/schema/", "OpenAPI Schema"),
        ("/admin/", "Django Admin"),
    ]
    
    servidor_corriendo = False
    
    for path, nombre in endpoints:
        try:
            response = requests.get(f"{base_url}{path}", timeout=2)
            if response.status_code in [200, 302]:  # 302 = redirect al login
                print_ok(f"{nombre}: {base_url}{path}")
                servidor_corriendo = True
            else:
                print_warning(f"{nombre}: HTTP {response.status_code}")
        except requests.exceptions.ConnectionError:
            print_error(f"{nombre}: Servidor no está corriendo")
        except Exception as e:
            print_error(f"{nombre}: {e}")
    
    if not servidor_corriendo:
        print("\n")
        print_warning("El servidor Django no está corriendo")
        print_info("  Inicialo con: cd backend/new && python manage.py runserver")


def verificar_archivos_frontend():
    """Verifica que los archivos del frontend existan"""
    print("\n" + "=" * 60)
    print("VERIFICACIÓN DE ARCHIVOS FRONTEND")
    print("=" * 60)
    
    web_path = Path(__file__).parent.parent / 'web'
    
    archivos_requeridos = [
        'src/lib/djangoClient.js',
        'src/lib/useTablaDjango.js',
        '.env.example',
    ]
    
    for archivo in archivos_requeridos:
        path = web_path / archivo
        if path.exists():
            print_ok(f"{archivo} existe")
        else:
            print_error(f"{archivo} no encontrado")
    
    # Verificar .env.local
    env_local = web_path / '.env.local'
    if env_local.exists():
        print_ok(".env.local existe")
        
        # Leer y verificar NEXT_PUBLIC_DJANGO_API_URL
        with open(env_local, 'r') as f:
            contenido = f.read()
            if 'NEXT_PUBLIC_DJANGO_API_URL' in contenido:
                print_ok("  NEXT_PUBLIC_DJANGO_API_URL configurado")
            else:
                print_warning("  NEXT_PUBLIC_DJANGO_API_URL no encontrado")
    else:
        print_warning(".env.local no existe")
        print_info("  Crealo desde .env.example: cp .env.example .env.local")


def main():
    print(f"\n{BLUE}{'=' * 60}{RESET}")
    print(f"{BLUE}VERIFICACIÓN DE MIGRACIÓN SUPABASE → DJANGO{RESET}")
    print(f"{BLUE}{'=' * 60}{RESET}\n")
    
    verificar_configuracion()
    verificar_base_datos()
    verificar_modelos()
    verificar_usuarios()
    verificar_endpoints()
    verificar_archivos_frontend()
    
    print("\n" + "=" * 60)
    print("RESUMEN")
    print("=" * 60)
    print_info("Verificación completa. Revisá los warnings y errores arriba.")
    print("\nPróximos pasos:")
    print("1. Si el servidor no está corriendo: python manage.py runserver")
    print("2. Si falta .env.local: cp web/.env.example web/.env.local")
    print("3. Si no hay superusuario: python manage.py createsuperuser")
    print("4. Documentación completa: MIGRACION_DJANGO.md")
    print()


if __name__ == '__main__':
    main()
