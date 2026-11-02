# API Documentation - CRM System

Este documento describe todos los endpoints REST API disponibles en el sistema CRM.

## Base URL

```
http://localhost:8000/api/v1
```

En desarrollo con Next.js, las peticiones se pueden hacer a `/api/v1/*` gracias al proxy configurado en `next.config.mjs`.

## Autenticación

Todos los endpoints excepto `/auth/*` requieren autenticación mediante JWT Bearer token.

```
Authorization: Bearer <access_token>
```

## Estructura de Respuestas

### Éxito
```json
{
  "data": [...],
  "error": null
}
```

### Error
```json
{
  "data": null,
  "error": {
    "message": "Error message",
    "code": 400
  }
}
```

---

## 📋 Tabla de Contenidos

1. [Autenticación](#autenticación)
2. [Clientes](#clientes)
3. [Facturación](#facturación)
4. [Pagos](#pagos)
5. [OLTs y ONUs](#olts-y-onus)
6. [MikroTik](#mikrotik)
7. [Soporte](#soporte)
8. [WhatsApp](#whatsapp)
9. [NMS (Network Monitoring)](#nms)
10. [Tablas Genéricas](#tablas-genéricas)

---

## Autenticación

### POST `/auth/token/`
Login con email/username y contraseña

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGci...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGci..."
}
```

### POST `/auth/token/refresh/`
Refrescar access token

**Request:**
```json
{
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGci..."
}
```

### GET `/auth/me`
Obtener datos del usuario actual

**Response:**
```json
{
  "id": 1,
  "email": "user@example.com",
  "username": "usuario",
  "first_name": "Juan",
  "last_name": "Pérez",
  "is_staff": false,
  "is_superuser": false
}
```

### POST `/auth/register`
Registrar nuevo usuario

### POST `/auth/change-password`
Cambiar contraseña del usuario actual

---

## Clientes

### Endpoints CRUD

**Base:** `/clientes/`

#### `GET /clientes/clientes/`
Listar todos los clientes

**Filtros:**
- `?estado=activo` - Filtrar por estado
- `?search=Juan` - Buscar por nombre, cédula, email
- `?ordering=-created_at` - Ordenar

#### `POST /clientes/clientes/`
Crear nuevo cliente

#### `GET /clientes/clientes/{id}/`
Obtener cliente por ID

#### `PATCH /clientes/clientes/{id}/`
Actualizar cliente

#### `DELETE /clientes/clientes/{id}/`
Eliminar cliente

#### `GET /clientes/clientes/{id}/servicios/`
Obtener servicios del cliente

#### `GET /clientes/clientes/{id}/facturas_pendientes/`
Obtener facturas pendientes del cliente

### Contratos

#### `GET /clientes/contratos/`
Listar contratos

#### `POST /clientes/contratos/`
Crear contrato

#### `GET /clientes/contratos/{id}/`
Obtener contrato

#### `PATCH /clientes/contratos/{id}/`
Actualizar contrato

#### `DELETE /clientes/contratos/{id}/`
Eliminar contrato

### Servicios

#### `GET /clientes/servicios/`
Listar servicios

**Filtros:**
- `?cliente=<id>` - Filtrar por cliente
- `?estado=activo` - Filtrar por estado

#### `POST /clientes/servicios/`
Crear servicio

#### `GET /clientes/servicios/{id}/`
Obtener servicio

#### `PATCH /clientes/servicios/{id}/`
Actualizar servicio

#### `DELETE /clientes/servicios/{id}/`
Eliminar servicio

---

## Facturación

### Planes de Velocidad

**Base:** `/facturacion/`

#### `GET /facturacion/planes/`
Listar planes de velocidad

**Filtros:**
- `?categoria=residencial` - Filtrar por categoría
- `?precio_incluye_iva=true`

#### `POST /facturacion/planes/`
Crear plan

#### `GET /facturacion/planes/{id}/`
Obtener plan

#### `PATCH /facturacion/planes/{id}/`
Actualizar plan

#### `DELETE /facturacion/planes/{id}/`
Eliminar plan

#### `GET /facturacion/planes/catalogo/`
Obtener catálogo de planes simplificado

**Response:**
```json
{
  "status": "success",
  "planes": [
    {
      "id": "uuid",
      "nombre": "Plan 10 Mbps",
      "bajada_mbps": 10,
      "subida_mbps": 5,
      "precio": 25.00,
      "precio_incluye_iva": false,
      "categoria": "residencial"
    }
  ]
}
```

### Facturas

#### `GET /facturacion/facturas/`
Listar facturas

**Filtros:**
- `?cliente=<id>` - Filtrar por cliente
- `?estado=pendiente` - Filtrar por estado
- `?mes=2024-01` - Filtrar por mes
- `?enviada=true` - Filtrar por enviadas

#### `POST /facturacion/facturas/`
Crear factura

#### `GET /facturacion/facturas/{id}/`
Obtener factura

#### `PATCH /facturacion/facturas/{id}/`
Actualizar factura

#### `DELETE /facturacion/facturas/{id}/`
Eliminar factura

#### `POST /facturacion/facturas/{id}/anular/`
Anular factura

**Response:**
```json
{
  "status": "success",
  "estado": "anulada"
}
```

#### `POST /facturacion/facturas/{id}/enviar/`
Enviar factura por email (encola tarea Celery)

**Response:**
```json
{
  "status": "success",
  "encolada": true
}
```

### Detalles de Factura

#### `GET /facturacion/detalles-factura/`
Listar detalles de facturas

**Filtros:**
- `?factura=<id>` - Filtrar por factura
- `?servicio=<id>` - Filtrar por servicio

#### `POST /facturacion/detalles-factura/`
Crear detalle de factura

---

## Pagos

**Base:** `/pagos/`

### Pagos

#### `GET /pagos/pagos/`
Listar pagos

**Filtros:**
- `?cliente=<id>` - Filtrar por cliente
- `?estado=confirmado` - Filtrar por estado
- `?forma_pago=transferencia` - Filtrar por forma de pago
- `?acreditado=true` - Filtrar por acreditados
- `?ordering=-fecha_transaccion` - Ordenar

#### `POST /pagos/pagos/`
Crear pago

#### `GET /pagos/pagos/{id}/`
Obtener pago

#### `PATCH /pagos/pagos/{id}/`
Actualizar pago

#### `DELETE /pagos/pagos/{id}/`
Eliminar pago

### Cortes

#### `GET /pagos/cortes/`
Listar cortes de servicio

**Filtros:**
- `?cliente=<id>` - Filtrar por cliente
- `?motivo=MORA` - Filtrar por motivo
- `?reactivado=false` - Filtrar por reactivados

#### `POST /pagos/cortes/`
Crear corte

#### `GET /pagos/cortes/{id}/`
Obtener corte

#### `PATCH /pagos/cortes/{id}/`
Actualizar corte (ej: reactivar servicio)

### Endpoints Especializados

#### `POST /pagos/registrar`
Registrar pago (endpoint especializado)

#### `POST /pagos/comprobante`
Verificar comprobante de pago

#### `GET /cliente/consultar-deuda`
Consultar deuda de un cliente

---

## OLTs y ONUs

**Base:** `/olts/`

### OLTs

#### `GET /olts/olts/`
Listar OLTs

#### `POST /olts/olts/`
Crear OLT

#### `GET /olts/olts/{id}/`
Obtener OLT

#### `PATCH /olts/olts/{id}/`
Actualizar OLT

#### `DELETE /olts/olts/{id}/`
Eliminar OLT

### Tipos de ONT

#### `GET /olts/tipos-ont/`
Listar tipos de ONT

#### `POST /olts/tipos-ont/`
Crear tipo de ONT

### Line Profiles

#### `GET /olts/line-profiles/`
Listar line profiles

#### `POST /olts/line-profiles/`
Crear line profile

### ONUs

#### `GET /olts/onus/`
Listar ONUs

**Filtros:**
- `?olt=<id>` - Filtrar por OLT
- `?cliente=<id>` - Filtrar por cliente
- `?estado=online` - Filtrar por estado

#### `POST /olts/onus/`
Crear ONU

#### `GET /olts/onus/{id}/`
Obtener ONU

#### `PATCH /olts/onus/{id}/`
Actualizar ONU

#### `DELETE /olts/onus/{id}/`
Eliminar ONU

---

## MikroTik

**Base:** `/mikrotik/`

### Routers

#### `GET /mikrotik/routers/`
Listar routers MikroTik

#### `POST /mikrotik/routers/`
Crear router

#### `GET /mikrotik/routers/{id}/`
Obtener router

#### `PATCH /mikrotik/routers/{id}/`
Actualizar router

### IP Addresses

#### `GET /mikrotik/ip-addresses/`
Listar direcciones IP

**Filtros:**
- `?router=<id>` - Filtrar por router
- `?disponible=true` - Filtrar por disponibles

#### `POST /mikrotik/ip-addresses/`
Crear IP address

### Bloqueos de Firewall

#### `GET /mikrotik/bloqueos/`
Listar bloqueos de firewall

**Filtros:**
- `?servicio=<id>` - Filtrar por servicio
- `?activo=true` - Filtrar por activos

#### `POST /mikrotik/bloqueos/`
Crear bloqueo

---

## Soporte

**Base:** `/soporte/`

### Tickets

#### `GET /soporte/tickets/`
Listar tickets

**Filtros:**
- `?cliente=<id>` - Filtrar por cliente
- `?estado=ABIERTO` - Filtrar por estado
- `?prioridad=ALTA` - Filtrar por prioridad
- `?tipo_incidencia=SIN_SERVICIO` - Filtrar por tipo
- `?asignado_a=<user_id>` - Filtrar por asignado

#### `POST /soporte/tickets/`
Crear ticket

#### `GET /soporte/tickets/{id}/`
Obtener ticket

#### `PATCH /soporte/tickets/{id}/`
Actualizar ticket

#### `DELETE /soporte/tickets/{id}/`
Eliminar ticket

#### `POST /soporte/tickets/crear-ticket/`
Crear ticket (endpoint especializado compatible con bot)

**Request:**
```json
{
  "cliente_id": "uuid",
  "tipo_incidencia": "SIN_SERVICIO",
  "descripcion_bot": "Cliente reporta sin servicio",
  "prioridad": "ALTA",
  "adjunto_url": "https://..."
}
```

**Response:**
```json
{
  "status": "success",
  "ticket_id": "TCK-000123",
  "ticket_uuid": "uuid",
  "mensaje": "Ticket creado exitosamente."
}
```

#### `POST /soporte/tickets/{id}/cerrar/`
Cerrar ticket

### Comentarios de Tickets

#### `GET /soporte/ticket-comentarios/`
Listar comentarios de tickets

**Filtros:**
- `?ticket=<id>` - Filtrar por ticket
- `?autor=<user_id>` - Filtrar por autor
- `?es_interno=true` - Filtrar por internos

#### `POST /soporte/ticket-comentarios/`
Crear comentario

### Instalaciones

#### `GET /soporte/instalaciones/`
Listar instalaciones

**Filtros:**
- `?estado=agendada` - Filtrar por estado
- `?tecnico_asignado=<user_id>` - Filtrar por técnico
- `?plan=<id>` - Filtrar por plan
- `?fecha_programada=2024-01-15` - Filtrar por fecha

#### `POST /soporte/instalaciones/`
Crear instalación

#### `GET /soporte/instalaciones/{id}/`
Obtener instalación

#### `PATCH /soporte/instalaciones/{id}/`
Actualizar instalación

#### `DELETE /soporte/instalaciones/{id}/`
Eliminar instalación

### Endpoints Especializados

#### `POST /soporte/crear-ticket`
Crear ticket (endpoint de compatibilidad)

#### `POST /ventas/validar-cobertura`
Validar cobertura de servicio

#### `GET /ventas/planes`
Obtener catálogo de planes (alias de `/facturacion/planes/catalogo/`)

#### `POST /ventas/agendar-instalacion`
Agendar instalación nueva

#### `POST /red/diagnostico-ont`
Ejecutar diagnóstico de ONT

#### `POST /red/cambiar-wifi`
Cambiar credenciales WiFi

---

## WhatsApp

**Base:** `/whatsapp/`

### Conversaciones

#### `GET /whatsapp/conversaciones/`
Listar conversaciones

**Filtros:**
- `?from_number=593...` - Filtrar por número
- `?atendida=false` - Filtrar por atendidas

#### `POST /whatsapp/conversaciones/`
Crear conversación

#### `GET /whatsapp/conversaciones/{id}/`
Obtener conversación

#### `PATCH /whatsapp/conversaciones/{id}/`
Actualizar conversación

### Mensajes

#### `GET /whatsapp/mensajes/`
Listar mensajes

**Filtros:**
- `?conversacion=<id>` - Filtrar por conversación
- `?tipo=text` - Filtrar por tipo

#### `POST /whatsapp/mensajes/`
Crear mensaje

#### `GET /whatsapp/mensajes/{id}/`
Obtener mensaje

### Endpoints Especializados

#### `POST /whatsapp/webhook`
Webhook para recibir mensajes de WhatsApp

#### `POST /whatsapp/enviar`
Enviar mensaje de WhatsApp

---

## NMS

**Base:** `/nms/`

### Sondeos de Red

#### `GET /nms/sondeos/`
Listar sondeos de red

**Filtros:**
- `?onu=<id>` - Filtrar por ONU
- `?tipo=automatico` - Filtrar por tipo

#### `POST /nms/sondeos/`
Crear sondeo

#### `GET /nms/sondeos/{id}/`
Obtener sondeo

### Alertas de Red

#### `GET /nms/alertas/`
Listar alertas de red

**Filtros:**
- `?onu=<id>` - Filtrar por ONU
- `?severidad=critica` - Filtrar por severidad
- `?reconocida=false` - Filtrar por reconocidas

#### `POST /nms/alertas/`
Crear alerta

#### `GET /nms/alertas/{id}/`
Obtener alerta

#### `PATCH /nms/alertas/{id}/`
Actualizar alerta (ej: reconocer)

---

## Tablas Genéricas

**Base:** `/tables/`

API genérica estilo PostgREST para acceder a las tablas del dashboard (con su seguridad por fila).

### GET `/tables/{table_name}`
Listar registros de una tabla

**Filtros estilo PostgREST:**
- `?select=*` - Seleccionar columnas
- `?col=eq.valor` - Filtro de igualdad
- `?col=gt.10` - Mayor que
- `?col=gte.10` - Mayor o igual
- `?col=lt.10` - Menor que
- `?col=lte.10` - Menor o igual
- `?col=like.*palabra*` - LIKE
- `?order=col.asc` - Ordenar ascendente
- `?order=col.desc` - Ordenar descendente
- `?limit=50` - Limitar resultados
- `?offset=100` - Offset para paginación

**Ejemplo:**
```
GET /tables/clientes?estado=eq.activo&order=nombre.asc&limit=20
```

### POST `/tables/{table_name}`
Crear registro en una tabla

### GET `/tables/{table_name}/{id}`
Obtener registro por ID

### PATCH `/tables/{table_name}/{id}`
Actualizar registro

### DELETE `/tables/{table_name}/{id}`
Eliminar registro

---

## Logs de Auditoría

### GET `/audit-logs/`
Listar logs de auditoría del sistema

**Filtros:**
- `?user=<id>` - Filtrar por usuario
- `?action=create` - Filtrar por acción
- `?model=Cliente` - Filtrar por modelo

---

## Códigos de Estado HTTP

- **200 OK** - Operación exitosa
- **201 Created** - Recurso creado exitosamente
- **204 No Content** - Operación exitosa sin contenido de respuesta
- **400 Bad Request** - Datos inválidos
- **401 Unauthorized** - No autenticado
- **403 Forbidden** - Sin permisos
- **404 Not Found** - Recurso no encontrado
- **500 Internal Server Error** - Error del servidor

---

## Notas de Implementación

1. **Proxy en Next.js**: Las peticiones a `/api/v1/*` se redirigen automáticamente a `http://localhost:8000/api/v1/*` en desarrollo.

2. **djangoClient.js**: Cliente JavaScript del frente (`django.from(...)`, `django.rpc(...)`, `django.storage`).

3. **Paginación**: Usar `?limit=` y `?offset=` para paginar resultados.

4. **Búsqueda**: Usar `?search=` para buscar en campos de texto.

5. **Filtros**: La mayoría de ViewSets soportan filtrado por campos relevantes.

6. **Ordenamiento**: Usar `?ordering=campo` o `?ordering=-campo` para orden descendente.

7. **CORS**: No hay problemas de CORS en desarrollo gracias al proxy de Next.js.

8. **WebSockets**: Para notificaciones en tiempo real, se puede implementar Django Channels.

---

## Próximos Pasos

- [ ] Implementar endpoints de RPC para funciones especializadas
- [ ] Agregar endpoints de storage para archivos
- [ ] Documentación OpenAPI/Swagger disponible en `/api/docs/`
- [ ] Implementar rate limiting
- [ ] Agregar filtros avanzados y búsqueda full-text
