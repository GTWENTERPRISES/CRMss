# Guía de Configuración y Uso de Celery

## 📋 Descripción

Este proyecto utiliza **Celery** con **Redis** como broker para manejar tareas asíncronas del sistema CRM ISP:

- **Facturación mensual automática**
- **Cortes por mora**
- **Recordatorios de pago por WhatsApp**
- **Sondeo de red (OLTs y Routers)**
- **Procesamiento de facturas electrónicas SRI**
- **Envío de emails masivos**

---

## 🚀 Instalación

### 1. Instalar Redis

#### Windows:
```powershell
# Descargar desde: https://github.com/microsoftarchive/redis/releases
# O usar WSL con:
wsl --install
sudo apt update
sudo apt install redis-server
sudo service redis-server start
```

#### Linux/Mac:
```bash
# Ubuntu/Debian
sudo apt install redis-server
sudo systemctl start redis
sudo systemctl enable redis

# Mac
brew install redis
brew services start redis
```

#### Docker (Recomendado):
```bash
docker run -d --name redis -p 6379:6379 redis:7-alpine
```

### 2. Instalar Dependencias Python

```bash
pip install -r requirements.txt
```

Esto instalará:
- `celery==5.4.0`
- `redis==5.1.1`
- `django-celery-beat==2.7.0`
- `flower==2.0.1`

### 3. Configurar Variables de Entorno

Copiar `.env.example` a `.env` y configurar:

```env
CELERY_BROKER_URL=redis://localhost:6379/0
CELERY_RESULT_BACKEND=redis://localhost:6379/1
```

### 4. Ejecutar Migraciones

```bash
python manage.py migrate
```

Esto creará las tablas necesarias para `django-celery-beat`.

---

## 🎯 Ejecutar Celery

### Opción 1: Comandos Manuales

#### Terminal 1 - Worker Principal:
```bash
celery -A config worker --loglevel=info --concurrency=4
```

#### Terminal 2 - Worker NMS (Monitoreo):
```bash
celery -A config worker --loglevel=info --concurrency=2 -Q nms
```

#### Terminal 3 - Celery Beat (Tareas Programadas):
```bash
celery -A config beat --loglevel=info --scheduler django_celery_beat.schedulers:DatabaseScheduler
```

#### Terminal 4 - Flower (Monitoreo Web - Opcional):
```bash
celery -A config flower --port=5555
```

Acceder a Flower en: http://localhost:5555

### Opción 2: Docker Compose (Recomendado)

```bash
docker-compose up -d
```

Esto levanta automáticamente:
- PostgreSQL
- Redis
- Django Web
- Celery Worker
- Celery Worker NMS
- Celery Beat
- Flower

---

## 📅 Tareas Programadas

Las siguientes tareas se ejecutan automáticamente:

| Tarea | Frecuencia | Descripción |
|-------|------------|-------------|
| `generar_facturas_mensuales` | 1º de cada mes, 2:00 AM | Genera facturas para todos los clientes activos |
| `enviar_facturas_email` | Diario, 9:00 AM | Envía facturas pendientes por correo |
| `ejecutar_cortes_automaticos` | Diario, 8:00 AM | Corta servicio a clientes morosos |
| `enviar_recordatorios_pago` | Diario, 10:00 AM | Envía recordatorios 3 días antes de vencimiento |
| `procesar_pagos_pendientes` | Cada 30 minutos | Verifica y confirma pagos pendientes |
| `sondear_red` | Cada 5 minutos | Monitorea OLTs, ONUs y Routers |
| `reporte_diario_red` | Diario, 7:00 AM | Genera y envía reporte de red |
| `limpiar_alertas_antiguas` | Semanal, Domingo 3:00 AM | Limpia alertas resueltas >30 días |
| `limpiar_sondeos_antiguos` | Diario, 4:00 AM | Limpia registros de sondeo >7 días |

### Modificar Schedule

Editar `config/celery.py` en la sección `beat_schedule`.

---

## 🔧 Ejecutar Tareas Manualmente

### Desde Python/Django Shell:

```python
python manage.py shell
```

```python
from apps.facturacion.tasks import generar_facturas_mensuales
from apps.pagos.tasks import ejecutar_cortes_automaticos
from apps.nms.tasks import sondear_red

# Ejecutar inmediatamente
resultado = generar_facturas_mensuales()

# O encolar para ejecución asíncrona
tarea = generar_facturas_mensuales.delay()
print(tarea.id)  # ID de la tarea
print(tarea.status)  # Estado: PENDING, STARTED, SUCCESS, FAILURE
print(tarea.result)  # Resultado cuando complete
```

### Desde Flower:

1. Ir a http://localhost:5555
2. Pestaña "Tasks"
3. Buscar la tarea
4. Click en "Execute"

---

## 📊 Monitoreo

### Flower (Web UI)

```bash
celery -A config flower
```

Acceder a: http://localhost:5555

Funcionalidades:
- ✅ Ver tareas en ejecución
- ✅ Estadísticas de workers
- ✅ Historial de tareas
- ✅ Ejecutar tareas manualmente
- ✅ Inspeccionar workers

### Logs

```bash
# Ver logs de Celery Worker
tail -f logs/django.log | grep celery

# Ver logs en Docker
docker-compose logs -f celery_worker
docker-compose logs -f celery_beat
```

### Redis CLI

```bash
# Conectar a Redis
redis-cli

# Ver tareas pendientes
KEYS celery*

# Monitorear en tiempo real
MONITOR
```

---

## 🐛 Troubleshooting

### Error: "Cannot connect to Redis"

```bash
# Verificar que Redis esté corriendo
redis-cli ping
# Respuesta esperada: PONG

# Si no responde, iniciar Redis:
sudo service redis-server start  # Linux
brew services start redis  # Mac
# O usar Docker
```

### Error: "Task not registered"

Verificar que las apps estén en `INSTALLED_APPS` en `settings.py`.

```bash
# Reiniciar workers
celery -A config control shutdown
celery -A config worker --loglevel=info
```

### Tasks no se ejecutan automáticamente

Verificar que Celery Beat esté corriendo:

```bash
ps aux | grep celery
```

Debe haber procesos para `worker` y `beat`.

### Ver tareas disponibles

```bash
celery -A config inspect registered
```

---

## 🔒 Seguridad

### Producción

1. **Usar Redis con password:**

```env
CELERY_BROKER_URL=redis://:mi_password_seguro@localhost:6379/0
```

2. **Configurar Flower con autenticación:**

```bash
celery -A config flower --basic_auth=admin:password_seguro
```

3. **Limitar conexiones Redis:**

Editar `/etc/redis/redis.conf`:
```
bind 127.0.0.1
protected-mode yes
requirepass tu_password_seguro
```

---

## 📈 Optimización

### Ajustar Concurrency

```bash
# Más workers para más tareas simultáneas
celery -A config worker --concurrency=8

# Auto-scaling
celery -A config worker --autoscale=10,3
```

### Priorizar Colas

```python
# En config/celery.py
app.conf.task_routes = {
    'apps.facturacion.tasks.*': {'queue': 'facturacion', 'priority': 10},
    'apps.nms.tasks.*': {'queue': 'nms', 'priority': 5},
}
```

### Rate Limiting

```python
# En tasks.py
@shared_task(rate_limit='10/m')  # Máximo 10 ejecuciones por minuto
def tarea_limitada():
    pass
```

---

## 📚 Recursos

- [Celery Documentation](https://docs.celeryproject.org/)
- [Django Celery Beat](https://django-celery-beat.readthedocs.io/)
- [Flower Documentation](https://flower.readthedocs.io/)
- [Redis Documentation](https://redis.io/documentation)

---

## 🆘 Soporte

Si tienes problemas, revisa:
1. Logs en `logs/django.log`
2. Estado de Redis: `redis-cli ping`
3. Workers activos: `celery -A config inspect active`
4. Tareas registradas: `celery -A config inspect registered`
