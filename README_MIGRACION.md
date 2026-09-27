# 🚀 CRM ISP - Migración a Django Backend

## 📌 Resumen

Este proyecto ha sido actualizado para usar **Django REST Framework** como backend único, reemplazando a Supabase.

### ¿Qué cambió?

**ANTES:**
```
Frontend Next.js → Supabase (CRUD, Auth, Storage) → PostgreSQL
```

**AHORA:**
```
Frontend Next.js → Django REST Framework → PostgreSQL
```

### Ventajas

✅ **Un solo backend** - Django maneja CRUD genérico + lógica de negocio especializada  
✅ **Sin costos de Supabase** - Self-hosted en tu infraestructura  
✅ **Control total** - Código propio, sin vendor lock-in  
✅ **API compatible** - Misma interfaz que Supabase, migración fácil  
✅ **Más funcionalidad** - Celery, Redis, WebSockets, TR-069, etc.  

## 🏗️ Arquitectura

### Backend Django

```
backend/new/
├── apps/
│   ├── core/              # CRUD genérico, RPC, Storage, Auth
│   ├── clientes/          # Clientes y contratos
│   ├── olts/              # Fibra óptica (OLT, ONU)
│   ├── mikrotik/          # Routers, IPs, firewall
│   ├── facturacion/       # Facturas, planes, SRI Ecuador
│   ├── pagos/             # Pagos y cortes
│   ├── soporte/           # Tickets e instalaciones
│   ├── whatsapp/          # WhatsApp Business
│   └── nms/               # Monitoreo de red
├── config/
│   ├── settings.py        # Configuración
│   ├── urls.py            # Rutas principales
│   └── wsgi.py / asgi.py  # Servidores
└── manage.py
```

### Frontend Next.js

```
web/
├── src/
│   ├── lib/
│   │   ├── djangoClient.js       # Cliente Django (reemplazo de Supabase)
│   │   ├── useTablaDjango.js     # Hook CRUD (reemplazo de useTabla)
│   │   ├── supabaseClient.js     # Original (deprecado)
│   │   └── useTabla.js           # Original (deprecado)
│   ├── components/
│   └── app/
└── package.json
```

## 🚀 Quick Start

### 1. Backend Django

```bash
# Instalar dependencias
cd backend/new
pip install -r requirements.txt

# Configurar .env
cp .env.example .env
# Editá .env con tus valores (DB, SECRET_KEY, etc.)

# Migraciones
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Iniciar servidor
python manage.py runserver
```

**Backend corriendo en:** http://localhost:8000

### 2. Frontend Next.js

```bash
# Instalar dependencias
cd web
npm install

# Configurar .env.local
cp .env.example .env.local
# Agregá: NEXT_PUBLIC_DJANGO_API_URL=http://localhost:8000/api/v1

# Iniciar dev server
npm run dev
```

**Frontend corriendo en:** http://localhost:3000

## 📚 Documentación

- **[MIGRACION_DJANGO.md](./MIGRACION_DJANGO.md)** - Guía completa de migración
- **[PLAN_MIGRACION.md](./PLAN_MIGRACION.md)** - Plan paso a paso
- **[API.md](./API.md)** - Documentación de endpoints (si existe)
- **Swagger UI:** http://localhost:8000/api/docs/
- **Admin Django:** http://localhost:8000/admin/

## 🔧 Configuración

### Backend (.env)

```env
# Django
DJANGO_SECRET_KEY=tu-secret-key-super-segura
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

# Base de datos
DATABASE_URL=postgresql://user:password@localhost:5432/crm_isp

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000

# Redis (opcional, para Celery y caché)
CELERY_BROKER_URL=redis://localhost:6379/0
```

### Frontend (.env.local)

```env
# Backend Django
NEXT_PUBLIC_DJANGO_API_URL=http://localhost:8000/api/v1

# Demo mode (opcional)
NEXT_PUBLIC_DEMO_MODE=false
```

## 📖 Uso del Cliente Django

### Import

```javascript
import { django } from '@/lib/djangoClient'
```

### CRUD Básico

```javascript
// SELECT
const { data, error } = await django.from('clientes').select('*')

// INSERT
const { data } = await django.from('clientes').insert({
  nombre: 'Juan',
  email: 'juan@example.com'
})

// UPDATE
await django.from('clientes').update({ estado: 'activo' }).eq('id', 123)

// DELETE
await django.from('clientes').delete().eq('id', 123)
```

### Filtros

```javascript
// WHERE estado = 'activo'
.eq('estado', 'activo')

// WHERE edad > 18
.gt('edad', 18)

// WHERE nombre LIKE '%Juan%'
.like('nombre', '*Juan*')

// ORDER BY created_at DESC
.order('created_at', { ascending: false })

// LIMIT 10
.limit(10)
```

### RPC (Stored Procedures)

```javascript
const { data } = await django.rpc('clientes_estadisticas_basicas')

const { data } = await django.rpc('racha_de_ventas', {
  empleado_id: 5
})
```

### Storage (Archivos)

```javascript
// Upload
await django.storage.from('avatars').upload('user/avatar.jpg', file)

// Download
const { data } = await django.storage.from('avatars').download('user/avatar.jpg')

// Get public URL
const { data } = django.storage.from('avatars').getPublicUrl('user/avatar.jpg')
console.log(data.publicURL)
```

### Autenticación

```javascript
// Login
const { data, error } = await django.auth.signInWithPassword({
  email: 'usuario@example.com',
  password: 'password123'
})

// Get current user
const { data } = await django.auth.getUser()

// Logout
await django.auth.signOut()
```

### Hook useTabla

```javascript
import { useTablaDjango as useTabla } from '@/lib/useTablaDjango'

function MiComponente() {
  const { filas, cargando, error, insertar, actualizar, eliminar } = 
    useTabla('clientes')

  if (cargando) return <div>Cargando...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {filas.map(fila => (
        <li key={fila.id}>{fila.nombre}</li>
      ))}
    </ul>
  )
}
```

## 🔄 Migrar un Componente

### Opción 1: Script automático (Windows)

```powershell
.\scripts\migrar_componente.ps1 web\src\components\clientes\ClienteForm.jsx
```

### Opción 2: Manual

1. Cambiar imports:
```javascript
// ANTES
import { supabase } from '@/lib/supabaseClient'
import { useTabla } from '@/lib/useTabla'

// DESPUÉS
import { django as supabase } from '@/lib/djangoClient'
import { useTablaDjango as useTabla } from '@/lib/useTablaDjango'
```

2. El resto del código queda igual (API compatible)

## 🧪 Testing

### Test del backend

```bash
cd backend/new
pytest
```

### Test manual de un endpoint

```bash
# Login
curl -X POST http://localhost:8000/api/v1/auth/token/ \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "admin123"}'

# Listar clientes (requiere token)
curl http://localhost:8000/api/v1/tables/clientes \
  -H "Authorization: Bearer <tu-token>"
```

### Test del frontend

```bash
cd web
npm run dev
```

Abrí http://localhost:3000 y verificá la consola del navegador.

## 🐛 Troubleshooting

### Backend no responde
```bash
cd backend/new
python manage.py runserver
tail -f logs/django.log
```

### CORS error
Agregá el origen del frontend a `CORS_ALLOWED_ORIGINS` en `settings.py`.

### Token expirado (401)
El token JWT expira cada hora. Llamá a `django.auth.refreshSession()` o volvé a loguearte.

### Tabla no encontrada (404)
Verificá que la tabla exista en PostgreSQL. El sistema usa SQL directo si no hay modelo Django.

## 📊 API Endpoints

### CRUD Genérico
- `GET /api/v1/tables/<tabla>` - Listar registros
- `POST /api/v1/tables/<tabla>` - Crear registro
- `PATCH /api/v1/tables/<tabla>/<id>` - Actualizar registro
- `DELETE /api/v1/tables/<tabla>/<id>` - Eliminar registro

### RPC
- `POST /api/v1/rpc/<funcion>` - Ejecutar función PostgreSQL

### Storage
- `POST /api/v1/storage/<bucket>` - Subir archivo
- `GET /api/v1/storage/<bucket>/<path>` - Descargar archivo
- `DELETE /api/v1/storage/<bucket>/<path>` - Eliminar archivo
- `GET /api/v1/storage/<bucket>/list` - Listar archivos

### Auth
- `POST /api/v1/auth/token/` - Login (obtener JWT)
- `POST /api/v1/auth/token/refresh/` - Refrescar token
- `GET /api/v1/auth/me` - Usuario actual
- `POST /api/v1/auth/register` - Registrar usuario
- `POST /api/v1/auth/change-password` - Cambiar contraseña

### Endpoints especializados
Ver `backend/new/config/urls.py` para lista completa de endpoints de:
- Clientes, OLTs, Mikrotik, Facturación, Pagos, Soporte, WhatsApp, NMS

## 🎯 Estado de Migración

### ✅ Completado
- Backend Django REST con CRUD genérico
- Cliente JavaScript compatible con Supabase
- RPC (stored procedures)
- Storage (archivos)
- Autenticación JWT
- Documentación completa

### 🔄 Pendiente
- Migrar componentes del frontend (ver PLAN_MIGRACION.md)
- Testing end-to-end
- Deploy a producción

## 📞 Soporte

Para problemas o dudas:

1. Revisá la documentación: `MIGRACION_DJANGO.md`
2. Checkeá los logs: `backend/new/logs/django.log`
3. Swagger UI: http://localhost:8000/api/docs/
4. Admin Django: http://localhost:8000/admin/

## 📜 Licencia

Propietario - Ver archivo LICENSE

---

**¿Dudas?** Leé `MIGRACION_DJANGO.md` para la guía completa paso a paso.
