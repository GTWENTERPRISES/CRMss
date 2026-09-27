import os
from datetime import timedelta
from pathlib import Path
from urllib.parse import unquote, urlparse

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / '.env')

SECRET_KEY = os.getenv(
    'DJANGO_SECRET_KEY',
    'django-insecure-dev-only-change-me-in-production',
)
FIELD_ENCRYPTION_KEY = os.getenv('FIELD_ENCRYPTION_KEY', SECRET_KEY)

DEBUG = os.getenv('DJANGO_DEBUG', 'True').lower() in ('1', 'true', 'yes')

ALLOWED_HOSTS = [h.strip() for h in os.getenv('DJANGO_ALLOWED_HOSTS', '*').split(',') if h.strip()]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'django_filters',
    'corsheaders',
    'django_celery_beat',  # Celery Beat programado con Django
    'drf_spectacular',  # OpenAPI 3.0 / Swagger
    'channels',  # WebSockets ASGI
    'apps.core',
    'apps.olts',
    'apps.mikrotik',
    'apps.clientes',
    'apps.facturacion',
    'apps.pagos',
    'apps.soporte',
    'apps.whatsapp',
    'apps.nms',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'
ASGI_APPLICATION = 'config.asgi.application'

DATABASE_URL = os.getenv('DATABASE_URL', '').strip()
DB_ENGINE = os.getenv('DB_ENGINE', '').strip().lower()
if DATABASE_URL.startswith(('postgres://', 'postgresql://')):
    parsed_db = urlparse(DATABASE_URL)
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': parsed_db.path.lstrip('/') or os.getenv('DB_NAME', 'crm_isp'),
            'USER': unquote(parsed_db.username or os.getenv('DB_USER', 'postgres')),
            'PASSWORD': unquote(parsed_db.password or os.getenv('DB_PASSWORD', '')),
            'HOST': parsed_db.hostname or os.getenv('DB_HOST', 'localhost'),
            'PORT': str(parsed_db.port or os.getenv('DB_PORT', '5432')),
            'CONN_MAX_AGE': 600,
        }
    }
elif DB_ENGINE in ('postgres', 'postgresql'):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.getenv('DB_NAME', 'crm_isp'),
            'USER': os.getenv('DB_USER', 'postgres'),
            'PASSWORD': os.getenv('DB_PASSWORD', ''),
            'HOST': os.getenv('DB_HOST', 'localhost'),
            'PORT': os.getenv('DB_PORT', '5432'),
            'CONN_MAX_AGE': 600,
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

LANGUAGE_CODE = 'es-ec'
TIME_ZONE = os.getenv('DJANGO_TIME_ZONE', 'America/Guayaquil')
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
MEDIA_URL = 'media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',  # OpenAPI 3.0
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'apps.core.pagination.StandardPagination',
    'PAGE_SIZE': 50,
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': os.getenv('DRF_ANON_RATE', '60/minute'),
        'user': os.getenv('DRF_USER_RATE', '600/minute'),
    },
    'DATETIME_FORMAT': '%Y-%m-%d %H:%M:%S',
}

# ==============================================================================
# DRF SPECTACULAR - OPENAPI/SWAGGER DOCUMENTATION
# ==============================================================================
SPECTACULAR_SETTINGS = {
    'TITLE': 'CRM ISP API',
    'DESCRIPTION': 'API REST completa para sistema CRM de proveedores de Internet (ISP)',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
    'COMPONENT_SPLIT_REQUEST': True,
    'SCHEMA_PATH_PREFIX': r'/api/',
    
    # Autenticación
    'SECURITY': [
        {
            'Bearer': {
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }
        }
    ],
    
    # Tags y agrupación
    'TAGS': [
        {'name': 'Clientes', 'description': 'Gestión de clientes y contratos'},
        {'name': 'OLTs', 'description': 'OLTs, ONUs y fibra óptica'},
        {'name': 'MikroTik', 'description': 'Routers, IPs y firewall'},
        {'name': 'Facturación', 'description': 'Facturas, planes y SRI Ecuador'},
        {'name': 'Pagos', 'description': 'Pagos y cortes de servicio'},
        {'name': 'Soporte', 'description': 'Tickets e instalaciones'},
        {'name': 'WhatsApp', 'description': 'Mensajería WhatsApp Business'},
        {'name': 'NMS', 'description': 'Monitoreo de red y alertas'},
        {'name': 'Autenticación', 'description': 'Login y tokens JWT'},
    ],
    
    # UI
    'SWAGGER_UI_SETTINGS': {
        'deepLinking': True,
        'persistAuthorization': True,
        'displayOperationId': True,
        'filter': True,
    },
    
    # Información de contacto
    'CONTACT': {
        'name': 'Soporte Técnico',
        'email': 'soporte@miempresa.com',
    },
    'LICENSE': {
        'name': 'Propietario',
    },
}

# ==============================================================================
# SIMPLE JWT CONFIGURATION
# ==============================================================================
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': False,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
}

CORS_ALLOW_ALL_ORIGINS = DEBUG
CORS_ALLOWED_ORIGINS = [
    o.strip() for o in os.getenv('CORS_ALLOWED_ORIGINS', '').split(',') if o.strip()
]

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels.layers.InMemoryChannelLayer',
    },
}

# ==============================================================================
# CELERY CONFIGURATION
# ==============================================================================
CELERY_BROKER_URL = os.getenv('CELERY_BROKER_URL', 'redis://localhost:6379/0')
CELERY_RESULT_BACKEND = os.getenv('CELERY_RESULT_BACKEND', 'redis://localhost:6379/1')
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = TIME_ZONE
CELERY_TASK_TRACK_STARTED = True
CELERY_TASK_TIME_LIMIT = 30 * 60  # 30 minutos
CELERY_TASK_SOFT_TIME_LIMIT = 25 * 60  # 25 minutos
CELERY_TASK_ACKS_LATE = True
CELERY_TASK_REJECT_ON_WORKER_LOST = True
CELERY_WORKER_PREFETCH_MULTIPLIER = 4
CELERY_WORKER_MAX_TASKS_PER_CHILD = 1000
CELERY_RESULT_EXPIRES = 3600  # 1 hora
CELERY_TASK_COMPRESSION = 'gzip'
CELERY_RESULT_COMPRESSION = 'gzip'

# Celery Beat - Tareas programadas (ver config/celery.py para schedule)
CELERY_BEAT_SCHEDULER = 'django_celery_beat.schedulers:DatabaseScheduler'

# ==============================================================================
# WHATSAPP BUSINESS API
# ==============================================================================
WHATSAPP_TOKEN = os.getenv('WHATSAPP_TOKEN', '')
WHATSAPP_PHONE_ID = os.getenv('WHATSAPP_PHONE_ID', '')
WHATSAPP_BUSINESS_ACCOUNT_ID = os.getenv('WHATSAPP_BUSINESS_ACCOUNT_ID', '')
WHATSAPP_VERIFY_TOKEN = os.getenv('WHATSAPP_VERIFY_TOKEN', 'verify_token_123')

# TR-069 / ACS. Se mantiene deshabilitado hasta configurar un servidor ACS.
TR069_ACS_URL = os.getenv('TR069_ACS_URL', '').rstrip('/')
TR069_ACS_USERNAME = os.getenv('TR069_ACS_USERNAME', '')
TR069_ACS_PASSWORD = os.getenv('TR069_ACS_PASSWORD', '')
TR069_TIMEOUT = int(os.getenv('TR069_TIMEOUT', '15'))

# ==============================================================================
# SRI ECUADOR - FACTURACIÓN ELECTRÓNICA
# ==============================================================================
SRI_URL_RECEPCION = os.getenv(
    'SRI_URL_RECEPCION',
    'https://cel.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl',
)
SRI_URL_AUTORIZACION = os.getenv(
    'SRI_URL_AUTORIZACION',
    'https://cel.sri.gob.ec/comprobantes-electronicos-ws/AutorizacionComprobantesOffline?wsdl',
)
SRI_AMBIENTE = os.getenv('SRI_AMBIENTE', '1')  # 1=Pruebas, 2=Producción
SRI_RUC_EMPRESA = os.getenv('SRI_RUC_EMPRESA', '1234567890001')
SRI_RAZON_SOCIAL = os.getenv('SRI_RAZON_SOCIAL', 'MI ISP S.A.')
SRI_NOMBRE_COMERCIAL = os.getenv('SRI_NOMBRE_COMERCIAL', 'MI ISP')
SRI_DIRECCION_MATRIZ = os.getenv('SRI_DIRECCION_MATRIZ', 'Av. Principal 123, Ciudad')
SRI_CERTIFICADO_PATH = os.getenv('SRI_CERTIFICADO_PATH', '')  # Ruta al archivo .p12
SRI_CERTIFICADO_PASSWORD = os.getenv('SRI_CERTIFICADO_PASSWORD', '')

# ==============================================================================
# CONFIGURACIONES DEL NEGOCIO
# ==============================================================================
IVA_PORCENTAJE = float(os.getenv('IVA_PORCENTAJE', '12'))  # Ecuador 12%
DIAS_MORA_CORTE = int(os.getenv('DIAS_MORA_CORTE', '5'))  # Días después de vencimiento
ADMIN_EMAILS = [e.strip() for e in os.getenv('ADMIN_EMAILS', '').split(',') if e.strip()]

# Email
EMAIL_BACKEND = os.getenv('EMAIL_BACKEND', 'django.core.mail.backends.console.EmailBackend')
EMAIL_HOST = os.getenv('EMAIL_HOST', '')
EMAIL_PORT = int(os.getenv('EMAIL_PORT', '587'))
EMAIL_USE_TLS = os.getenv('EMAIL_USE_TLS', 'True').lower() in ('1', 'true', 'yes')
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD', '')
DEFAULT_FROM_EMAIL = os.getenv('DEFAULT_FROM_EMAIL', 'noreply@miempresa.com')

# ==============================================================================
# LOGGING
# ==============================================================================
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {asctime} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
        'file': {
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': BASE_DIR / 'logs' / 'django.log',
            'maxBytes': 1024 * 1024 * 15,  # 15MB
            'backupCount': 10,
            'formatter': 'verbose',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console', 'file'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'INFO'),
            'propagate': False,
        },
        'celery': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
        'apps': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG' if DEBUG else 'INFO',
            'propagate': False,
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'INFO',
    },
}

# Crear directorio de logs si no existe
(BASE_DIR / 'logs').mkdir(exist_ok=True)
