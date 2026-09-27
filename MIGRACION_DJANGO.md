# Migración de Supabase a Django REST Framework

Este documento explica cómo conectar el frontend Next.js con el backend Django, reemplazando Supabase.

## 📋 Resumen

El backend Django ahora expone una API REST completa compatible con la interfaz de Supabase, permitiendo:

- ✅ CRUD genérico sobre cualquier tabla PostgreSQL
- ✅ Funciones RPC (stored procedures)
- ✅ Storage de archivos
- ✅ Autenticación JWT unificada
- ✅ Migración gradual (sin reescribir todo el frontend)

## 🏗️ Arquitectura

### Antes (Supabase)
```
Frontend Next.js → Supabase (PostgREST + Auth + Storage) → PostgreSQL
                ↘ Middleware Node.js (red/portal)
```

### Después (Django)
```
Frontend Next.js → Django REST Framework → PostgreSQL
                                        ↘ APIs de red (Mikrotik, OLT, etc.)
```

## 🚀 Configuración del Backend

### 1. Instalar dependencias

El backend ya tiene todas las dependencias necesarias en `requirements.txt`. Solo asegurate de tenerlas instaladas:

```bash
cd backend/new
pip install -r requirements.txt
```

### 2. Configurar variables de entorno

Editá `backend/new/.env` y agregá:

```env
# Django
DJANGO_SECRET_KEY=tu-secret-key-super-segura
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

# Base de datos (usa la misma que Supabase si querés migrar gradualmente)
DATABASE_URL=postgresql://usuario:password@localhost:5432/crm_isp
# O configuración individual:
DB_ENGINE=postgresql
DB_NAME=crm_isp
DB_USER=postgres
DB_PASSWORD=tu_password
DB_HOST=localhost
DB_PORT=5432

# CORS (permitir el frontend)
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# JWT
# (opcional, usa el SECRET_KEY por defecto)
```

### 3. Aplicar migraciones

```bash
python manage.py migrate
```

### 4. Crear superusuario

```bash
python manage.py createsuperuser
```

### 5. Iniciar el servidor

```bash
python manage.py runserver
```

El backend estará en `http://localhost:8000`

### 6. Verificar la API

Abrí en el navegador:
- Swagger UI: http://localhost:8000/api/docs/
- ReDoc: http://localhost:8000/api/redoc/
- Admin: http://localhost:8000/admin/

## 🎨 Configuración del Frontend

### 1. Variables de entorno

Editá `web/.env.local` y agregá:

```env
# URL del backend Django
NEXT_PUBLIC_DJANGO_API_URL=http://localhost:8000/api/v1

# Mantené las de Supabase si querés migración gradual
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...

# Middleware (si todavía lo usás)
NEXT_PUBLIC_API_URL=http://localhost:4000

NEXT_PUBLIC_DEMO_MODE=false
```

### 2. Migración gradual (recomendado)

Podés migrar componente por componente reemplazando los imports:

#### Opción A: Import directo
```javascript
// ANTES
import { supabase } from '@/lib/supabaseClient'

// DESPUÉS
import { django } from '@/lib/djangoClient'
```

#### Opción B: Alias (más fácil)
En el archivo que querés migrar:

```javascript
import { django as supabase } from '@/lib/djangoClient'
// Ahora todo el código que usa `supabase` funciona igual
```

### 3. Migración completa (reemplazo total)

Si querés migrar todo de una vez, renombrá los archivos:

```bash
cd web/src/lib
# Backup del original
mv supabaseClient.js supabaseClient.js.bak
mv useTabla.js useTabla.js.bak

# Usar las versiones Django
cp djangoClient.js supabaseClient.js
cp useTablaDjango.js useTabla.js
```

Editá `web/src/lib/supabaseClient.js` (el nuevo):

```javascript
// Reexportar django como supabase para compatibilidad total
export { django as supabase } from './djangoClient'
export { djangoConfigurado as supabaseConfigurado } from './djangoClient'
```

## 📚 Ejemplos de Uso

### CRUD básico

```javascript
import { django } from '@/lib/djangoClient'

// SELECT * FROM clientes
const { data, error } = await django.from('clientes').select('*')

// SELECT id, nombre, email FROM clientes WHERE estado = 'activo'
const { data } = await django
  .from('clientes')
  .select('id,nombre,email')
  .eq('estado', 'activo')

// INSERT
const { data } = await django
  .from('clientes')
  .insert({
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@example.com',
  })

// UPDATE
const { data } = await django
  .from('clientes')
  .update({ estado: 'suspendido' })
  .eq('id', 123)

// DELETE
await django.from('clientes').delete().eq('id', 123)
```

### Filtros avanzados

```javascript
// WHERE edad > 18
.gt('edad', 18)

// WHERE edad >= 18
.gte('edad', 18)

// WHERE edad < 65
.lt('edad', 65)

// WHERE nombre LIKE '%Juan%'
.like('nombre', '*Juan*')

// WHERE estado IN ('activo', 'suspendido')
.in('estado', ['activo', 'suspendido'])

// Múltiples filtros (AND)
.eq('estado', 'activo')
.gt('deuda', 0)
```

### Ordenamiento y paginación

```javascript
// ORDER BY created_at DESC
.order('created_at', { ascending: false })

// LIMIT 10
.limit(10)

// LIMIT 10 OFFSET 20
.range(20, 29)
```

### Funciones RPC

```javascript
// Llamar a una función PostgreSQL
const { data } = await django.rpc('clientes_estadisticas_basicas')

// Con parámetros
const { data } = await django.rpc('racha_de_ventas', {
  empleado_id: 5,
})

// Funciones disponibles:
// - clientes_estadisticas_basicas()
// - clientes_por_estado()
// - clientes_con_mora()
// - resumen_facturacion(mes, anio)
// - racha_de_ventas(empleado_id)
// - top_pagadores(limit)
```

### Storage (archivos)

```javascript
// Upload
const { data, error } = await django.storage
  .from('avatars')
  .upload('user123/avatar.jpg', file)

// Download
const { data, error } = await django.storage
  .from('avatars')
  .download('user123/avatar.jpg')

// Delete
await django.storage.from('avatars').remove(['user123/avatar.jpg'])

// List files
const { data } = await django.storage.from('avatars').list('user123/')

// Get public URL
const { data } = django.storage.from('avatars').getPublicUrl('user123/avatar.jpg')
console.log(data.publicURL)
```

### Autenticación

```javascript
// Login
const { data, error } = await django.auth.signInWithPassword({
  email: 'usuario@example.com',
  password: 'password123',
})

if (!error) {
  console.log('User:', data.user)
  console.log('Token:', data.session.access_token)
}

// Get current user
const { data } = await django.auth.getUser()
console.log('Current user:', data.user)

// Logout
await django.auth.signOut()

// Refresh token (automático cada hora)
await django.auth.refreshSession()
```

### Hook useTabla

```javascript
import { useTablaDjango as useTabla } from '@/lib/useTablaDjango'

function ClientesList() {
  const { filas, cargando, error, insertar, actualizar, eliminar } = useTabla('clientes')

  if (cargando) return <div>Cargando...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {filas.map(cliente => (
        <div key={cliente.id}>
          {cliente.nombre} - {cliente.email}
          <button onClick={() => eliminar(cliente.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  )
}
```

## 🔐 Autenticación

### Login desde el frontend

```javascript
import { django } from '@/lib/djangoClient'

async function handleLogin(email, password) {
  const { data, error } = await django.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Login failed:', error.message)
    return
  }

  console.log('Logged in as:', data.user.email)
  // El token se guarda automáticamente en localStorage
}
```

### Proteger rutas

```javascript
// pages/_app.js o layout.js
import { useEffect, useState } from 'react'
import { django } from '@/lib/djangoClient'
import { useRouter } from 'next/navigation'

function ProtectedApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      const { data } = await django.auth.getUser()
      setUser(data.user)
      setLoading(false)

      if (!data.user && !isPublicRoute(router.pathname)) {
        router.push('/login')
      }
    }

    checkAuth()
  }, [router.pathname])

  if (loading) return <div>Cargando...</div>

  return <Component {...pageProps} user={user} />
}

function isPublicRoute(path) {
  return ['/login', '/register', '/'].includes(path)
}
```

## 📊 Tablas Soportadas

El backend soporta CRUD sobre estas tablas (con modelos Django):

### Con modelos Django
- `clientes` → Cliente
- `contratos` → Contrato
- `olts` → OLT
- `onus` → ONU
- `mikrotiks` → MikroTik
- `ips` → IP
- `planes` → Plan
- `facturas` → Factura
- `lineas_factura` → LineaFactura
- `pagos` → Pago
- `cortes` → Corte
- `tickets` → Ticket
- `instalaciones` → Instalacion
- `mensajes_whatsapp` → MensajeWhatsApp
- `campanas` → Campana
- `alertas` → Alerta
- `dispositivos_monitoreados` → DispositivoMonitoreado

### Sin modelo (SQL directo)
Cualquier otra tabla de PostgreSQL se puede consultar directamente con:
```javascript
const { data } = await django.from('nombre_tabla').select('*')
```

El backend ejecuta SQL crudo para tablas sin modelo Django.

## 🔧 Agregar Soporte para Nuevas Tablas

### Opción 1: Crear modelo Django (recomendado)

```python
# backend/new/apps/core/models.py o en la app correspondiente

from django.db import models

class MiNuevaTabla(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField(blank=True)
    activo = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'mi_nueva_tabla'  # Nombre real en PostgreSQL
        ordering = ['-created_at']
```

Luego agregar al mapeo en `apps/core/views_generic.py`:

```python
table_to_model = {
    # ... existentes ...
    'mi_nueva_tabla': 'core.MiNuevaTabla',
}
```

### Opción 2: Usar SQL directo (para tablas legacy)

No requiere cambios en Django. Solo usá el frontend:

```javascript
const { data } = await django.from('tabla_legacy').select('*')
```

## 🚦 Testing

### Test del backend

```bash
cd backend/new
pytest
```

### Test de un endpoint específico

```bash
curl -X POST http://localhost:8000/api/v1/auth/token/ \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "admin123"}'
```

### Test del frontend

```bash
cd web
npm run dev
```

Abrí http://localhost:3000 y verificá que cargue sin errores de consola.

## 📈 Migración Gradual Recomendada

1. **Día 1: Setup inicial**
   - Configurar Django backend
   - Verificar que las APIs funcionen
   - Agregar variables de entorno al frontend

2. **Día 2-3: Migrar componentes de solo lectura**
   - Dashboards
   - Listas de clientes
   - Reportes

3. **Día 4-5: Migrar formularios**
   - Crear/editar clientes
   - Crear/editar tickets
   - Crear facturas

4. **Día 6-7: Migrar funciones avanzadas**
   - Storage (archivos)
   - RPCs complejos
   - Autenticación completa

5. **Día 8+: Limpieza**
   - Eliminar código de Supabase
   - Optimizar queries
   - Tests end-to-end

## 🐛 Troubleshooting

### Error: "Invalid table name"
- Verificá que la tabla exista en PostgreSQL
- Si no tiene modelo Django, usa SQL directo (funciona automáticamente)

### Error: 401 Unauthorized
- El token JWT expiró o no existe
- Volvé a hacer login: `django.auth.signInWithPassword()`

### Error: CORS policy
- Agregá el frontend a `CORS_ALLOWED_ORIGINS` en `backend/new/config/settings.py`

### Error: "Module not found: djangoClient"
- Verificá que el archivo `web/src/lib/djangoClient.js` exista
- El import debería ser: `import { django } from '@/lib/djangoClient'`

### Las queries son lentas
- Agregá índices en PostgreSQL
- Usá `.select()` con columnas específicas en vez de `*`
- Agregá paginación con `.limit()` y `.range()`

## 📞 Soporte

Para dudas o problemas:
1. Revisá los logs de Django: `backend/new/logs/django.log`
2. Revisá la consola del navegador
3. Usá las herramientas de dev de Django: http://localhost:8000/api/docs/

## 🎯 Próximos Pasos

Una vez completada la migración básica:

1. **Optimización**
   - Agregar caché (Redis)
   - Optimizar queries N+1
   - Comprimir respuestas

2. **Seguridad**
   - Rate limiting por usuario
   - Validación de permisos granular
   - Auditoría de accesos

3. **Funcionalidades avanzadas**
   - WebSockets (Django Channels)
   - Notificaciones push
   - Exportación masiva (CSV, Excel)

4. **DevOps**
   - Docker compose para dev
   - CI/CD pipelines
   - Monitoreo (Sentry, New Relic)
