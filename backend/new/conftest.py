"""
Configuración global de pytest para el proyecto CRM ISP
Define fixtures compartidos y configuración de testing
"""
import pytest
from decimal import Decimal
from django.conf import settings
from rest_framework.test import APIClient

# Asegurar que estamos en modo testing
settings.DEBUG = False
settings.CELERY_TASK_ALWAYS_EAGER = True  # Ejecutar tareas Celery síncronamente en tests


@pytest.fixture
def api_client():
    """Cliente API de DRF para testing"""
    return APIClient()


@pytest.fixture
def authenticated_client(api_client, user):
    """Cliente API autenticado"""
    api_client.force_authenticate(user=user)
    return api_client


@pytest.fixture
def user(db):
    """Usuario de prueba"""
    from django.contrib.auth.models import User
    return User.objects.create_user(
        username='testuser',
        email='test@example.com',
        password='testpass123'
    )


@pytest.fixture
def superuser(db):
    """Superusuario de prueba"""
    from django.contrib.auth.models import User
    return User.objects.create_superuser(
        username='admin',
        email='admin@example.com',
        password='admin123'
    )


@pytest.fixture(autouse=True)
def enable_db_access_for_all_tests(db):
    """Habilita acceso a DB para todos los tests automáticamente"""
    pass


@pytest.fixture
def mock_redis(mocker):
    """Mock de Redis para tests que no necesitan Redis real"""
    return mocker.patch('redis.Redis')


@pytest.fixture
def mock_celery(mocker):
    """Mock de Celery para tests sin ejecución real de tareas"""
    return mocker.patch('celery.app.task.Task.apply_async')
