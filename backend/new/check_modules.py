#!/usr/bin/env python
"""
Script para verificar todos los módulos del sistema Django
"""
import os
import sys
import django

# Configurar Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.apps import apps
from django.urls import get_resolver
from rest_framework.routers import DefaultRouter
from django.conf import settings

def check_installed_apps():
    """Verificar todas las apps instaladas"""
    print("=" * 80)
    print("APPS INSTALADAS")
    print("=" * 80)
    
    custom_apps = []
    for app_config in apps.get_app_configs():
        if app_config.name.startswith('apps.'):
            custom_apps.append(app_config)
            print(f"✓ {app_config.label}: {app_config.verbose_name}")
            
            # Contar modelos
            models = list(app_config.get_models())
            if models:
                print(f"  └─ Modelos ({len(models)}): {', '.join([m.__name__ for m in models])}")
    
    print(f"\nTotal apps personalizadas: {len(custom_apps)}")
    return custom_apps

def check_models():
    """Verificar todos los modelos"""
    print("\n" + "=" * 80)
    print("MODELOS POR APP")
    print("=" * 80)
    
    apps_to_check = ['clientes', 'facturacion', 'pagos', 'olts', 'mikrotik', 'soporte', 'whatsapp', 'nms', 'core']
    
    for app_name in apps_to_check:
        try:
            app_config = apps.get_app_config(app_name)
            models = list(app_config.get_models())
            
            print(f"\n{app_name.upper()}: {len(models)} modelos")
            for model in models:
                count = model.objects.count()
                print(f"  ✓ {model.__name__}: {count} registros")
        except Exception as e:
            print(f"  ✗ Error en {app_name}: {e}")

def check_urls():
    """Verificar todas las URLs registradas"""
    print("\n" + "=" * 80)
    print("ENDPOINTS API REGISTRADOS")
    print("=" * 80)
    
    resolver = get_resolver()
    
    api_patterns = []
    for pattern in resolver.url_patterns:
        if hasattr(pattern, 'pattern'):
            url = str(pattern.pattern)
            if url.startswith('api/v1/'):
                api_patterns.append(url)
    
    api_patterns.sort()
    
    print("\nEndpoints principales:")
    for url in api_patterns:
        print(f"  /{url}")
    
    print(f"\nTotal endpoints: {len(api_patterns)}")

def check_viewsets():
    """Verificar ViewSets disponibles"""
    print("\n" + "=" * 80)
    print("VIEWSETS REGISTRADOS")
    print("=" * 80)
    
    viewsets_info = {
        'clientes': ['ClienteViewSet', 'ContratoViewSet', 'ServicioViewSet'],
        'facturacion': ['PlanVelocidadViewSet', 'FacturaViewSet', 'DetalleFacturaViewSet'],
        'pagos': ['PagoViewSet', 'CorteViewSet'],
        'olts': ['OLTViewSet', 'TipoONTViewSet', 'LineProfileViewSet', 'ONUViewSet'],
        'mikrotik': ['RouterMikrotikViewSet', 'IPAddressViewSet', 'FirewallBloqueoViewSet'],
        'soporte': ['TicketViewSet', 'TicketComentarioViewSet', 'InstalacionViewSet'],
        'whatsapp': ['ConversacionWhatsappViewSet', 'MensajeWhatsappViewSet'],
        'nms': ['SondeoRedViewSet', 'AlertaRedViewSet'],
    }
    
    for app_name, viewsets in viewsets_info.items():
        try:
            app_module = __import__(f'apps.{app_name}.views', fromlist=[''])
            print(f"\n{app_name.upper()}:")
            for viewset_name in viewsets:
                if hasattr(app_module, viewset_name):
                    print(f"  ✓ {viewset_name}")
                else:
                    print(f"  ✗ {viewset_name} NO ENCONTRADO")
        except ImportError as e:
            print(f"  ✗ Error importando {app_name}: {e}")

def check_database():
    """Verificar conexión a base de datos"""
    print("\n" + "=" * 80)
    print("BASE DE DATOS")
    print("=" * 80)
    
    from django.db import connection
    
    db_config = settings.DATABASES['default']
    print(f"Engine: {db_config['ENGINE']}")
    print(f"Name: {db_config.get('NAME', 'N/A')}")
    print(f"Host: {db_config.get('HOST', 'N/A')}")
    print(f"Port: {db_config.get('PORT', 'N/A')}")
    
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT version();")
            version = cursor.fetchone()[0]
            print(f"\n✓ Conexión exitosa")
            print(f"  PostgreSQL: {version.split(',')[0]}")
    except Exception as e:
        print(f"\n✗ Error de conexión: {e}")

def main():
    print("\n🔍 VERIFICACIÓN DE MÓDULOS DEL SISTEMA CRM")
    print("=" * 80)
    
    check_installed_apps()
    check_models()
    check_viewsets()
    check_urls()
    check_database()
    
    print("\n" + "=" * 80)
    print("✅ VERIFICACIÓN COMPLETADA")
    print("=" * 80)

if __name__ == '__main__':
    main()
