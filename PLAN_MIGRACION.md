# Plan de Migración: Supabase → Django

## 🎯 Objetivo

Reemplazar Supabase por Django REST Framework como backend único del CRM ISP, manteniendo la misma funcionalidad y sin interrumpir el servicio.

## 📊 Análisis Actual

### Frontend (Next.js)
- **~100 archivos** usan Supabase directamente
- **~178 tablas** en la base de datos
- **~20 funciones RPC** (stored procedures)
- **Storage** para archivos (avatars, documentos, etc.)

### Backend actual
- **Django**: Apps especializadas (clientes, OLTs, Mikrotik, facturación, pagos, soporte, WhatsApp, NMS)
- **Middleware Node.js**: APIs de red (puerto 4000)
- **Supabase**: CRUD genérico, auth, storage

## ✅ Solución Implementada

### Nuevos componentes Django

1. **`apps/core/views_generic.py`**
   - API CRUD genérica tipo PostgREST
   - Soporta tablas con/sin modelo Django
   - Filtros, ordenamiento, paginación
   - Compatible con sintaxis de Supabase

2. **`apps/core/views_rpc.py`**
   - Ejecutor de funciones PostgreSQL
   - RPCs específicos más comunes
   - Compatible con `supabase.rpc()`

3. **`apps/core/views_storage.py`**
   - Upload, download, delete de archivos
   - Compatible con `supabase.storage`
   - Organización en buckets

4. **`apps/core/views_auth.py`**
   - Endpoints de usuario actual
   - Registro de usuarios
   - Cambio de contraseña

### Nuevos componentes Frontend

1. **`web/src/lib/djangoClient.js`**
   - Cliente JavaScript compatible con API de Supabase
   - Mismos métodos: `.from()`, `.select()`, `.insert()`, etc.
   - Auth, RPC, Storage incluidos

2. **`web/src/lib/useTablaDjango.js`**
   - Hook React compatible con `useTabla` original
   - Drop-in replacement

## 📅 Cronograma de Migración

### Fase 1: Setup y Preparación (1-2 días)

**Día 1: Backend**
- [ ] Configurar variables de entorno Django
- [ ] Aplicar migraciones: `python manage.py migrate`
- [ ] Crear superusuario: `python manage.py createsuperuser`
- [ ] Iniciar servidor: `python manage.py runserver`
- [ ] Verificar Swagger UI: http://localhost:8000/api/docs/

**Día 2: Frontend**
- [ ] Agregar `NEXT_PUBLIC_DJANGO_API_URL` al `.env.local`
- [ ] Verificar que `djangoClient.js` y `useTablaDjango.js` existan
- [ ] Test de conectividad básica (ver sección de testing)

### Fase 2: Migración de Componentes de Solo Lectura (2-3 días)

Componentes que **NO** modifican datos (solo SELECT):

**Prioridad Alta** (críticos para operación)
- [ ] `web/src/components/dashboard/EstadisticasGenerales.jsx`
- [ ] `web/src/app/(dashboard)/clientes/page.jsx`
- [ ] `web/src/app/(dashboard)/facturacion/page.jsx`
- [ ] `web/src/app/(dashboard)/soporte/tickets/page.jsx`

**Comando:**
```powershell
.\scripts\migrar_componente.ps1 web\src\components\dashboard\EstadisticasGenerales.jsx
```

**Prioridad Media**
- [ ] Listas de OLTs, ONUs
- [ ] Listas de IPs, Mikrotiks
- [ ] Historial de pagos
- [ ] Reportes

**Prioridad Baja**
- [ ] Gráficas y estadísticas
- [ ] Logs y auditoría

### Fase 3: Migración de Formularios (2-3 días)

Componentes que **modifican** datos (INSERT, UPDATE, DELETE):

**Prioridad Alta**
- [ ] `web/src/components/clientes/ClienteForm.jsx`
- [ ] `web/src/components/soporte/TicketForm.jsx`
- [ ] `web/src/components/pagos/PagoForm.jsx`

**Prioridad Media**
- [ ] Formularios de instalaciones
- [ ] Formularios de planes/contratos
- [ ] Formularios de dispositivos (OLT, ONU, Mikrotik)

**Prioridad Baja**
- [ ] Formularios de configuración
- [ ] Formularios de administración

### Fase 4: Funciones Avanzadas (2-3 días)

**RPC (Stored Procedures)**
- [ ] Verificar que las funciones PostgreSQL existan
- [ ] Migrar llamadas a RPCs en dashboards
- [ ] Migrar reportes personalizados

**Storage (Archivos)**
- [ ] Migrar uploads de avatares
- [ ] Migrar uploads de documentos
- [ ] Migrar visualizadores de archivos

**Autenticación**
- [ ] Migrar login/logout
- [ ] Migrar registro de usuarios
- [ ] Migrar cambio de contraseña
- [ ] Migrar guards de rutas protegidas

### Fase 5: Testing y Optimización (2-3 días)

**Testing funcional**
- [ ] CRUD de cada módulo principal
- [ ] Flujo completo de cliente (desde prospecto hasta pago)
- [ ] Flujo de tickets (creación, asignación, resolución)
- [ ] Subida y descarga de archivos

**Testing de rendimiento**
- [ ] Comparar tiempos de carga vs Supabase
- [ ] Identificar queries lentas
- [ ] Agregar índices en PostgreSQL si es necesario

**Optimización**
- [ ] Caché de queries frecuentes (Redis)
- [ ] Paginación en listas grandes
- [ ] Lazy loading de componentes pesados

### Fase 6: Limpieza y Deploy (1-2 días)

**Limpieza de código**
- [ ] Eliminar imports de Supabase no usados
- [ ] Eliminar archivos `.bak` de migraciones
- [ ] Actualizar documentación

**Deploy**
- [ ] Configurar producción (Docker / servidor)
- [ ] Configurar CORS correctamente
- [ ] Configurar SSL/HTTPS
- [ ] Configurar backups automáticos

## 🧪 Testing de Componentes Migrados

### Test básico (después de migrar un componente)

1. **Abrir en el navegador**
   ```bash
   npm run dev
   ```

2. **Verificar consola del navegador**
   - No debe haber errores de tipo "supabase is not defined"
   - No debe haber errores de red (excepto si el backend no está corriendo)

3. **Test funcional**
   - Probar todas las acciones del componente
   - Verificar que los datos se muestren correctamente
   - Verificar que se puedan crear/editar/eliminar registros

### Test de autenticación

```javascript
// En la consola del navegador:
import { django } from '@/lib/djangoClient'

// Login
const result = await django.auth.signInWithPassword({
  email: 'admin@example.com',
  password: 'admin123'
})
console.log('Login:', result)

// Get user
const user = await django.auth.getUser()
console.log('User:', user)
```

### Test de CRUD

```javascript
// Listar
const { data } = await django.from('clientes').select('*').limit(5)
console.log('Clientes:', data)

// Insertar
const { data: nuevo } = await django.from('clientes').insert({
  nombre: 'Test',
  apellido: 'Usuario',
  email: 'test@example.com',
  telefono: '0999999999',
  cedula: '9999999999'
})
console.log('Nuevo cliente:', nuevo)

// Actualizar
await django.from('clientes').update({ estado: 'activo' }).eq('id', nuevo.id)

// Eliminar
await django.from('clientes').delete().eq('id', nuevo.id)
```

## 📋 Checklist de Componentes

### Autenticación
- [ ] `web/src/app/login/page.jsx`
- [ ] `web/src/components/auth/LoginForm.jsx`
- [ ] `web/src/components/auth/ProtectedRoute.jsx`
- [ ] `web/src/lib/authContext.js`

### Dashboard
- [ ] `web/src/app/(dashboard)/page.jsx`
- [ ] `web/src/components/dashboard/EstadisticasGenerales.jsx`
- [ ] `web/src/components/dashboard/GraficoVentas.jsx`
- [ ] `web/src/components/dashboard/ResumenFacturacion.jsx`

### Clientes
- [ ] `web/src/app/(dashboard)/clientes/page.jsx`
- [ ] `web/src/app/(dashboard)/clientes/[id]/page.jsx`
- [ ] `web/src/components/clientes/ClienteForm.jsx`
- [ ] `web/src/components/clientes/ClienteDetalle.jsx`
- [ ] `web/src/components/clientes/ListaClientes.jsx`

### Facturación
- [ ] `web/src/app/(dashboard)/facturacion/page.jsx`
- [ ] `web/src/components/facturacion/FacturaForm.jsx`
- [ ] `web/src/components/facturacion/ListaFacturas.jsx`
- [ ] `web/src/components/facturacion/DetalleFactura.jsx`

### Pagos
- [ ] `web/src/app/(dashboard)/pagos/page.jsx`
- [ ] `web/src/components/pagos/PagoForm.jsx`
- [ ] `web/src/components/pagos/ListaPagos.jsx`

### Soporte
- [ ] `web/src/app/(dashboard)/soporte/tickets/page.jsx`
- [ ] `web/src/components/soporte/TicketForm.jsx`
- [ ] `web/src/components/soporte/ListaTickets.jsx`
- [ ] `web/src/components/soporte/DetalleTicket.jsx`

### Instalaciones
- [ ] `web/src/app/(dashboard)/instalaciones/page.jsx`
- [ ] `web/src/components/instalaciones/InstalacionForm.jsx`
- [ ] `web/src/components/instalaciones/ListaInstalaciones.jsx`

### Red (OLT, ONU, Mikrotik)
- [ ] `web/src/app/(dashboard)/red/olts/page.jsx`
- [ ] `web/src/components/olts/OLTForm.jsx`
- [ ] `web/src/components/onus/ONUForm.jsx`
- [ ] `web/src/components/mikrotik/MikroTikForm.jsx`

### WhatsApp
- [ ] `web/src/app/(dashboard)/whatsapp/page.jsx`
- [ ] `web/src/components/whatsapp/EnviarMensaje.jsx`
- [ ] `web/src/components/whatsapp/ListaCampanas.jsx`

### NMS (Monitoreo)
- [ ] `web/src/app/(dashboard)/nms/page.jsx`
- [ ] `web/src/components/nms/ListaAlertas.jsx`
- [ ] `web/src/components/nms/DispositivosMonitoreados.jsx`

## 🚨 Problemas Comunes y Soluciones

### Backend no responde
```bash
# Verificar que Django esté corriendo
cd backend/new
python manage.py runserver

# Ver logs
tail -f logs/django.log
```

### Error CORS
Agregar en `backend/new/config/settings.py`:
```python
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:3001',
    # Agregar dominio de producción
]
```

### Token expirado
El token JWT expira cada hora. El frontend debe llamar a `refreshSession()` automáticamente:

```javascript
// Agregar interceptor en djangoClient.js o en un middleware de Next.js
setInterval(async () => {
  await django.auth.refreshSession()
}, 50 * 60 * 1000) // cada 50 minutos
```

### Tabla no encontrada (404)
- Verificar que la tabla exista en PostgreSQL
- Si no hay modelo Django, el sistema usa SQL directo automáticamente
- Verificar el mapeo en `views_generic.py`

## 📊 Métricas de Éxito

Al finalizar la migración:

- [ ] **0 errores** en consola del navegador
- [ ] **100% de componentes** migrados
- [ ] **Tiempo de carga** similar o mejor que Supabase
- [ ] **Tests funcionales** pasando
- [ ] **Documentación** actualizada

## 📚 Recursos

- Documentación completa: `MIGRACION_DJANGO.md`
- Swagger UI: http://localhost:8000/api/docs/
- Admin Django: http://localhost:8000/admin/
- Scripts de migración: `scripts/migrar_componente.ps1`

## 🎉 Beneficios Post-Migración

1. **Un solo backend**: Django maneja todo (CRUD, lógica de negocio, autenticación)
2. **Sin costos de Supabase**: Self-hosted en tu infraestructura
3. **Control total**: Código propio, sin vendor lock-in
4. **Mejor integración**: API especializada + CRUD genérico en un solo lugar
5. **Más rápido**: Sin latencia de Supabase, consultas optimizadas
6. **Escalable**: Caché, optimizaciones, workers Celery, etc.
