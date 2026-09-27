# 📘 Documentación API REST - CRM ISP

## Índice

1. [Información General](#información-general)
2. [Autenticación](#autenticación)
3. [Módulo 1: Pagos y Facturación](#módulo-1-pagos-y-facturación)
   - [Endpoint 1: Consulta de Deuda](#endpoint-1-consulta-de-deuda)
   - [Endpoint 2: Registrar Pago](#endpoint-2-registrar-pago)
   - [Endpoint 3: Verificar Comprobante](#endpoint-3-verificar-comprobante)
4. [Módulo 2: Ventas y Captación](#módulo-2-ventas-y-captación)
   - [Endpoint 4: Validar Cobertura](#endpoint-4-validar-cobertura)
   - [Endpoint 5: Catálogo de Planes](#endpoint-5-catálogo-de-planes)
   - [Endpoint 6: Agendar Instalación](#endpoint-6-agendar-instalación)
5. [Módulo 3: Soporte Técnico](#módulo-3-soporte-técnico)
   - [Endpoint 7: Crear Ticket](#endpoint-7-crear-ticket)
   - [Endpoint 8: Diagnóstico en Vivo](#endpoint-8-diagnóstico-en-vivo)
   - [Endpoint 9: Cambiar Credenciales WiFi](#endpoint-9-cambiar-credenciales-wifi)

---

## Información General

**URL Base**: `http://localhost:8000/api/v1/`

**Formato de Datos**: JSON

**Códigos de Estado HTTP**:
- `200 OK` - Solicitud exitosa
- `201 Created` - Recurso creado exitosamente
- `400 Bad Request` - Parámetros inválidos
- `401 Unauthorized` - No autenticado
- `403 Forbidden` - Sin permisos
- `404 Not Found` - Recurso no encontrado
- `500 Internal Server Error` - Error del servidor

**Documentación Interactiva**:
- Swagger UI: `http://localhost:8000/api/docs/`
- ReDoc: `http://localhost:8000/api/redoc/`
- OpenAPI Schema: `http://localhost:8000/api/schema/`

---

## Autenticación

Este API utiliza **JWT (JSON Web Tokens)** para autenticación.

### Obtener Token

**Endpoint**: `POST /api/v1/auth/token/`

**Request Body**:
```json
{
  "username": "admin",
  "password": "password123"
}
```

**Response 200**:
```json
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

### Uso del Token

Incluir en el header de cada petición:

```
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

### Refrescar Token

**Endpoint**: `POST /api/v1/auth/token/refresh/`

**Request Body**:
```json
{
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

**Response 200**:
```json
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

---

## Módulo 1: Pagos y Facturación

### Endpoint 1: Consulta de Deuda

Consulta el estado de cuenta y facturas pendientes de un cliente.

**Método**: `GET`

**URL**: `/api/v1/clientes/consultar-deuda`

**Parámetros Query** (uno requerido):
- `cedula` (string): Cédula del cliente
- `telefono` (string): Teléfono del cliente
- `cliente_id` (uuid): ID del cliente

#### Ejemplo 1: Consulta por Cédula

**Request**:
```http
GET /api/v1/clientes/consultar-deuda?cedula=1204567890
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "cliente": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "cedula": "1204567890",
    "nombre": "Jefferson Oña",
    "telefono": "0991234567",
    "estado_servicio": "SUSPENDIDO_POR_CORTE",
    "estado_servicio_display": "Suspendido por Corte",
    "codigo_pago": "10245"
  },
  "deuda_total": 10.00,
  "facturas_pendientes": [
    {
      "factura_id": "b1c2d3e4-f5a6-7890-bcde-1234567890ab",
      "numero": "9841",
      "mes": "Agosto 2026",
      "monto": 10.00,
      "fecha_vencimiento": "2026-08-15",
      "estado": "vencida"
    }
  ],
  "falla_masiva_sector": false
}
```

#### Ejemplo 2: Consulta por Teléfono

**Request**:
```http
GET /api/v1/clientes/consultar-deuda?telefono=0991234567
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**: (mismo formato que arriba)

#### Ejemplo 3: Cliente sin Deuda

**Request**:
```http
GET /api/v1/clientes/consultar-deuda?cedula=1205678901
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "cliente": {
    "id": "c2d3e4f5-a6b7-8901-cdef-234567890abc",
    "cedula": "1205678901",
    "nombre": "María González",
    "telefono": "0987654321",
    "estado_servicio": "ACTIVO",
    "estado_servicio_display": "Activo",
    "codigo_pago": "10246"
  },
  "deuda_total": 0.00,
  "facturas_pendientes": [],
  "falla_masiva_sector": false
}
```

**Response 404** (Cliente no encontrado):
```json
{
  "detail": "Cliente no encontrado."
}
```

**Response 400** (Parámetros faltantes):
```json
{
  "detail": "Debe indicar cedula, telefono o cliente_id."
}
```

---

### Endpoint 2: Registrar Pago

Registra un pago realizado por un cliente y, si se acredita correctamente, reactiva el servicio automáticamente.

**Método**: `POST`

**URL**: `/api/v1/pagos/registrar`

**Request Body**:
```json
{
  "cliente_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "factura_id": "b1c2d3e4-f5a6-7890-bcde-1234567890ab",
  "monto": 10.00,
  "banco_origen": "Banco Pichincha",
  "num_comprobante": "92947292",
  "hash_qr": "9aa587037b5c4441ffcff621f722c7e1",
  "fecha_transaccion": "2026-08-17T05:00:00Z",
  "forma_pago": "transferencia",
  "verificado_por": "ocr_only",
  "cuenta_destino": "1234567890",
  "origen": "BOT_WHATSAPP"
}
```

**Campos Requeridos**:
- `cliente_id` (uuid): ID del cliente
- `monto` (decimal): Monto del pago
- `fecha_transaccion` (datetime): Fecha y hora de la transacción
- `forma_pago` (string): Opciones: `transferencia`, `efectivo`, `tarjeta`, `deposito`, `billetera`

**Campos Opcionales**:
- `factura_id` (uuid): ID de la factura a pagar (si no se especifica, se aplica a la más antigua)
- `banco_origen` (string): Banco de origen
- `num_comprobante` (string): Número de comprobante
- `hash_qr` (string): Hash único del comprobante QR
- `verificado_por` (string): Método de verificación (ej: `ocr_only`, `manual`, `automatico`)
- `cuenta_destino` (string): Cuenta de destino
- `origen` (string): Origen del registro (ej: `BOT_WHATSAPP`, `WEB`, `APP`)

#### Ejemplo 1: Pago Acreditado con Reactivación

**Request**:
```http
POST /api/v1/pagos/registrar
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "factura_id": "b1c2d3e4-f5a6-7890-bcde-1234567890ab",
  "monto": 10.00,
  "banco_origen": "Banco Pichincha",
  "num_comprobante": "92947292",
  "hash_qr": "9aa587037b5c4441ffcff621f722c7e1",
  "fecha_transaccion": "2026-08-17T05:00:00Z",
  "forma_pago": "transferencia",
  "verificado_por": "ocr_only",
  "cuenta_destino": "1234567890",
  "origen": "BOT_WHATSAPP"
}
```

**Response 201**:
```json
{
  "status": "success",
  "mensaje": "Pago registrado y servicio restablecido.",
  "transaccion_id": "REP-6b21a4c8",
  "acreditado": true,
  "estado": "confirmado",
  "saldo_restante": 0.00,
  "reactivacion": {
    "ok": true,
    "nota": "Se quitó 10.20.0.45 del corte en el router."
  }
}
```

#### Ejemplo 2: Pago Pendiente de Verificación

**Request**:
```http
POST /api/v1/pagos/registrar
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "monto": 15.00,
  "banco_origen": "Banco Guayaquil",
  "num_comprobante": "98765432",
  "fecha_transaccion": "2026-08-17T08:30:00Z",
  "forma_pago": "deposito",
  "origen": "WEB"
}
```

**Response 201**:
```json
{
  "status": "success",
  "mensaje": "Pago registrado, pendiente de verificación.",
  "transaccion_id": "REP-7c32b5d9",
  "acreditado": false,
  "estado": "pendiente",
  "saldo_restante": 10.00,
  "reactivacion": {
    "ok": false,
    "nota": "Pago pendiente de confirmación manual."
  }
}
```

#### Ejemplo 3: Pago en Efectivo

**Request**:
```http
POST /api/v1/pagos/registrar
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "c2d3e4f5-a6b7-8901-cdef-234567890abc",
  "monto": 20.00,
  "fecha_transaccion": "2026-08-17T10:00:00Z",
  "forma_pago": "efectivo",
  "verificado_por": "cajero_oficina",
  "origen": "OFICINA"
}
```

**Response 201**:
```json
{
  "status": "success",
  "mensaje": "Pago registrado exitosamente.",
  "transaccion_id": "REP-8d43c6e0",
  "acreditado": true,
  "estado": "confirmado",
  "saldo_restante": 0.00,
  "reactivacion": {
    "ok": true,
    "nota": "Cliente no tenía servicio cortado."
  }
}
```

**Response 404** (Cliente no encontrado):
```json
{
  "detail": "Cliente no encontrado."
}
```

**Response 400** (Datos inválidos):
```json
{
  "monto": ["Este campo es requerido."],
  "fecha_transaccion": ["Formato de fecha inválido."]
}
```

---

### Endpoint 3: Verificar Comprobante

Verifica si un comprobante de pago ya fue registrado (previene pagos duplicados).

**Método**: `GET`

**URL**: `/api/v1/pagos/comprobante`

**Parámetros Query** (una combinación requerida):
- `hash_qr` (string): Hash único del comprobante
- `num_comprobante` (string) + `cedula` (string): Número de comprobante y cédula del cliente

#### Ejemplo 1: Verificación por Hash QR

**Request**:
```http
GET /api/v1/pagos/comprobante?hash_qr=9aa587037b5c4441ffcff621f722c7e1
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200** (Comprobante encontrado):
```json
{
  "status": "success",
  "existe": true,
  "pago": {
    "id": "d3e4f5a6-b7c8-9012-defg-34567890abcd",
    "cliente_nombre": "Jefferson Oña",
    "monto": 10.00,
    "fecha_transaccion": "2026-08-17T05:00:00Z",
    "estado": "confirmado",
    "acreditado": true,
    "banco_origen": "Banco Pichincha",
    "num_comprobante": "92947292",
    "created_at": "2026-08-17T05:15:00Z"
  }
}
```

**Response 200** (Comprobante no encontrado):
```json
{
  "status": "success",
  "existe": false,
  "mensaje": "Comprobante no registrado en el sistema."
}
```

#### Ejemplo 2: Verificación por Número de Comprobante y Cédula

**Request**:
```http
GET /api/v1/pagos/comprobante?num_comprobante=92947292&cedula=1204567890
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**: (mismo formato que arriba)

**Response 400** (Parámetros faltantes):
```json
{
  "detail": "Debe indicar hash_qr o la combinación num_comprobante + cedula."
}
```

---

## Módulo 2: Ventas y Captación

### Endpoint 4: Validar Cobertura

Valida si existe cobertura de servicio en una ubicación geográfica específica.

**Método**: `POST`

**URL**: `/api/v1/ventas/validar-cobertura`

**Request Body**:
```json
{
  "latitud": -0.180653,
  "longitud": -78.467838,
  "tecnologia": "ftth"
}
```

**Campos Requeridos**:
- `latitud` (decimal): Latitud de la ubicación
- `longitud` (decimal): Longitud de la ubicación

**Campos Opcionales**:
- `tecnologia` (string): Tipo de tecnología (ej: `ftth`, `radio`, `hibrido`). Default: `ftth`

#### Ejemplo 1: Ubicación con Cobertura

**Request**:
```http
POST /api/v1/ventas/validar-cobertura
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "latitud": -0.180653,
  "longitud": -78.467838,
  "tecnologia": "ftth"
}
```

**Response 200**:
```json
{
  "status": "success",
  "tiene_cobertura": true,
  "caja_nap_cercana": "NAP-NORTE-04",
  "distancia_metros": 45,
  "puertos_disponibles": 6,
  "opciones": [
    {
      "nombre": "NAP-NORTE-04",
      "tipo": "nap",
      "distancia_metros": 45,
      "disponibles": 6
    },
    {
      "nombre": "NAP-NORTE-03",
      "tipo": "nap",
      "distancia_metros": 120,
      "disponibles": 3
    }
  ]
}
```

#### Ejemplo 2: Ubicación sin Cobertura

**Request**:
```http
POST /api/v1/ventas/validar-cobertura
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "latitud": -0.250000,
  "longitud": -78.600000,
  "tecnologia": "ftth"
}
```

**Response 200**:
```json
{
  "status": "success",
  "tiene_cobertura": false,
  "caja_nap_cercana": null,
  "distancia_metros": null,
  "puertos_disponibles": 0,
  "opciones": [],
  "mensaje": "Lo sentimos, aún no tenemos cobertura en tu zona. Te contactaremos cuando esté disponible."
}
```

#### Ejemplo 3: Cobertura con Puertos Agotados

**Request**:
```http
POST /api/v1/ventas/validar-cobertura
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "latitud": -0.185000,
  "longitud": -78.470000,
  "tecnologia": "ftth"
}
```

**Response 200**:
```json
{
  "status": "success",
  "tiene_cobertura": true,
  "caja_nap_cercana": "NAP-SUR-08",
  "distancia_metros": 35,
  "puertos_disponibles": 0,
  "opciones": [
    {
      "nombre": "NAP-SUR-08",
      "tipo": "nap",
      "distancia_metros": 35,
      "disponibles": 0
    }
  ],
  "mensaje": "Tenemos cobertura en tu zona, pero actualmente no hay puertos disponibles. Registraremos tu solicitud."
}
```

**Response 400** (Coordenadas inválidas):
```json
{
  "latitud": ["Este campo es requerido."],
  "longitud": ["Este campo es requerido."]
}
```

---

### Endpoint 5: Catálogo de Planes

Obtiene el catálogo de planes de internet disponibles para venta.

**Método**: `GET`

**URL**: `/api/v1/facturacion/planes/catalogo`

**Parámetros Query** (opcionales):
- `categoria` (string): Filtra por categoría (`residencial`, `empresarial`, `corporativo`)

#### Ejemplo 1: Todos los Planes

**Request**:
```http
GET /api/v1/facturacion/planes/catalogo
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "planes": [
    {
      "id": "e4f5a6b7-c8d9-0123-efgh-4567890abcde",
      "nombre": "Plan Básico 50 Mbps",
      "bajada_mbps": 50,
      "subida_mbps": 25,
      "precio": 15.00,
      "precio_incluye_iva": true,
      "categoria": "residencial"
    },
    {
      "id": "f5a6b7c8-d9e0-1234-fghi-567890abcdef",
      "nombre": "Plan Hogar Fibra 200 Mbps",
      "bajada_mbps": 200,
      "subida_mbps": 100,
      "precio": 20.00,
      "precio_incluye_iva": true,
      "categoria": "residencial"
    },
    {
      "id": "a6b7c8d9-e0f1-2345-ghij-67890abcdef0",
      "nombre": "Plan Premium 500 Mbps",
      "bajada_mbps": 500,
      "subida_mbps": 250,
      "precio": 30.00,
      "precio_incluye_iva": true,
      "categoria": "residencial"
    },
    {
      "id": "b7c8d9e0-f1a2-3456-hijk-7890abcdef01",
      "nombre": "Plan Empresarial 1 Gbps",
      "bajada_mbps": 1000,
      "subida_mbps": 500,
      "precio": 80.00,
      "precio_incluye_iva": false,
      "categoria": "empresarial"
    }
  ]
}
```

#### Ejemplo 2: Planes Residenciales

**Request**:
```http
GET /api/v1/facturacion/planes/catalogo?categoria=residencial
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "planes": [
    {
      "id": "e4f5a6b7-c8d9-0123-efgh-4567890abcde",
      "nombre": "Plan Básico 50 Mbps",
      "bajada_mbps": 50,
      "subida_mbps": 25,
      "precio": 15.00,
      "precio_incluye_iva": true,
      "categoria": "residencial"
    },
    {
      "id": "f5a6b7c8-d9e0-1234-fghi-567890abcdef",
      "nombre": "Plan Hogar Fibra 200 Mbps",
      "bajada_mbps": 200,
      "subida_mbps": 100,
      "precio": 20.00,
      "precio_incluye_iva": true,
      "categoria": "residencial"
    },
    {
      "id": "a6b7c8d9-e0f1-2345-ghij-67890abcdef0",
      "nombre": "Plan Premium 500 Mbps",
      "bajada_mbps": 500,
      "subida_mbps": 250,
      "precio": 30.00,
      "precio_incluye_iva": true,
      "categoria": "residencial"
    }
  ]
}
```

#### Ejemplo 3: Planes Empresariales

**Request**:
```http
GET /api/v1/facturacion/planes/catalogo?categoria=empresarial
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "planes": [
    {
      "id": "b7c8d9e0-f1a2-3456-hijk-7890abcdef01",
      "nombre": "Plan Empresarial 1 Gbps",
      "bajada_mbps": 1000,
      "subida_mbps": 500,
      "precio": 80.00,
      "precio_incluye_iva": false,
      "categoria": "empresarial"
    },
    {
      "id": "c8d9e0f1-a2b3-4567-ijkl-890abcdef012",
      "nombre": "Plan Corporativo 2 Gbps",
      "bajada_mbps": 2000,
      "subida_mbps": 1000,
      "precio": 150.00,
      "precio_incluye_iva": false,
      "categoria": "empresarial"
    }
  ]
}
```

---

### Endpoint 6: Agendar Instalación

Agenda una instalación de nuevo servicio para un prospecto.

**Método**: `POST`

**URL**: `/api/v1/ventas/agendar-instalacion`

**Request Body**:
```json
{
  "prospecto": {
    "nombre": "Carmen Velez",
    "cedula": "1300000000",
    "telefono": "+593987654321",
    "email": "carmen.velez@email.com",
    "direccion": "Av. Amazonas y Colón",
    "coordenadas": "-0.180653, -78.467838"
  },
  "plan_id": "f5a6b7c8-d9e0-1234-fghi-567890abcdef",
  "fecha_programada": "2026-08-21",
  "franja_horaria": "10:00 - 12:00"
}
```

**Campos Requeridos**:
- `prospecto.nombre` (string): Nombre completo del prospecto
- `prospecto.cedula` (string): Cédula de identidad
- `prospecto.telefono` (string): Teléfono de contacto
- `prospecto.direccion` (string): Dirección de instalación
- `plan_id` (uuid): ID del plan contratado
- `fecha_programada` (date): Fecha de la instalación

**Campos Opcionales**:
- `prospecto.email` (string): Email del prospecto
- `prospecto.coordenadas` (string): Coordenadas GPS
- `franja_horaria` (string): Horario preferido

#### Ejemplo 1: Instalación Agendada Exitosamente

**Request**:
```http
POST /api/v1/ventas/agendar-instalacion
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "prospecto": {
    "nombre": "Carmen Velez",
    "cedula": "1300000000",
    "telefono": "+593987654321",
    "email": "carmen.velez@email.com",
    "direccion": "Av. Amazonas y Colón",
    "coordenadas": "-0.180653, -78.467838"
  },
  "plan_id": "f5a6b7c8-d9e0-1234-fghi-567890abcdef",
  "fecha_programada": "2026-08-21",
  "franja_horaria": "10:00 - 12:00"
}
```

**Response 201**:
```json
{
  "status": "success",
  "orden_instalacion_id": "INS-4029",
  "instalacion_id": "d9e0f1a2-b3c4-5678-jklm-90abcdef0123",
  "mensaje": "Instalación agendada correctamente.",
  "prospecto_id": "e0f1a2b3-c4d5-6789-klmn-0abcdef01234",
  "detalle": {
    "tecnico_asignado": "Por asignar",
    "fecha_programada": "2026-08-21",
    "franja_horaria": "10:00 - 12:00",
    "plan_contratado": "Plan Hogar Fibra 200 Mbps",
    "estado": "PENDIENTE"
  }
}
```

#### Ejemplo 2: Sin Franja Horaria Especificada

**Request**:
```http
POST /api/v1/ventas/agendar-instalacion
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "prospecto": {
    "nombre": "Luis Morales",
    "cedula": "1301111111",
    "telefono": "+593991111111",
    "direccion": "Calle 10 de Agosto 456"
  },
  "plan_id": "e4f5a6b7-c8d9-0123-efgh-4567890abcde",
  "fecha_programada": "2026-08-22"
}
```

**Response 201**:
```json
{
  "status": "success",
  "orden_instalacion_id": "INS-4030",
  "instalacion_id": "f1a2b3c4-d5e6-7890-mnop-1abcdef01235",
  "mensaje": "Instalación agendada correctamente.",
  "prospecto_id": "a2b3c4d5-e6f7-8901-nopq-bcdef0123456",
  "detalle": {
    "tecnico_asignado": "Por asignar",
    "fecha_programada": "2026-08-22",
    "franja_horaria": "08:00 - 18:00",
    "plan_contratado": "Plan Básico 50 Mbps",
    "estado": "PENDIENTE"
  }
}
```

**Response 400** (Datos inválidos):
```json
{
  "prospecto": {
    "cedula": ["Este campo es requerido."],
    "telefono": ["Formato de teléfono inválido."]
  },
  "plan_id": ["Plan no encontrado."]
}
```

**Response 400** (Fecha inválida):
```json
{
  "detail": "No se puede agendar instalaciones en fechas pasadas.",
  "fecha_programada": "2026-08-22"
}
```

---

## Módulo 3: Soporte Técnico

### Endpoint 7: Crear Ticket

Crea un ticket de soporte técnico para un cliente.

**Método**: `POST`

**URL**: `/api/v1/soporte/crear-ticket`

**Request Body**:
```json
{
  "cliente_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "tipo_incidencia": "SIN_SERVICIO_LUZ_ROJA",
  "descripcion_bot": "El cliente indica que la ONT tiene la luz LOS en rojo.",
  "prioridad": "ALTA",
  "adjunto_url": "https://ejemplo.com/foto_los.jpg"
}
```

**Campos Requeridos**:
- `cliente_id` (uuid): ID del cliente
- `tipo_incidencia` (string): Tipo de incidencia

**Opciones de `tipo_incidencia`**:
- `SIN_SERVICIO`
- `SIN_SERVICIO_LUZ_ROJA`
- `INTERNET_LENTO`
- `WIFI_NO_FUNCIONA`
- `ONT_DAÑADA`
- `INSTALACION_NUEVA`
- `CAMBIO_DOMICILIO`
- `SOPORTE_TECNICO`
- `OTRO`

**Campos Opcionales**:
- `descripcion_bot` (string): Descripción detallada
- `prioridad` (string): `BAJA`, `MEDIA`, `ALTA`, `CRITICA` (default: `MEDIA`)
- `adjunto_url` (string): URL de imagen o archivo adjunto

#### Ejemplo 1: Ticket de Servicio Caído

**Request**:
```http
POST /api/v1/soporte/crear-ticket
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "tipo_incidencia": "SIN_SERVICIO_LUZ_ROJA",
  "descripcion_bot": "El cliente indica que la ONT tiene la luz LOS en rojo desde hace 2 horas.",
  "prioridad": "ALTA",
  "adjunto_url": "https://storage.example.com/tickets/foto_ont_12345.jpg"
}
```

**Response 201**:
```json
{
  "status": "success",
  "ticket_id": "TK-8821",
  "ticket_uuid": "b3c4d5e6-f7a8-9012-opqr-cdef01234567",
  "mensaje": "Ticket creado exitosamente.",
  "detalle": {
    "cliente": "Jefferson Oña",
    "tipo_incidencia": "SIN_SERVICIO_LUZ_ROJA",
    "prioridad": "ALTA",
    "estado": "ABIERTO",
    "asignado_a": "Por asignar"
  }
}
```

#### Ejemplo 2: Ticket de Internet Lento

**Request**:
```http
POST /api/v1/soporte/crear-ticket
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "c2d3e4f5-a6b7-8901-cdef-234567890abc",
  "tipo_incidencia": "INTERNET_LENTO",
  "descripcion_bot": "Cliente reporta velocidad baja. Plan contratado: 200 Mbps, velocidad actual: 50 Mbps",
  "prioridad": "MEDIA"
}
```

**Response 201**:
```json
{
  "status": "success",
  "ticket_id": "TK-8822",
  "ticket_uuid": "c4d5e6f7-a8b9-0123-pqrs-def012345678",
  "mensaje": "Ticket creado exitosamente.",
  "detalle": {
    "cliente": "María González",
    "tipo_incidencia": "INTERNET_LENTO",
    "prioridad": "MEDIA",
    "estado": "ABIERTO",
    "asignado_a": "Por asignar"
  }
}
```

#### Ejemplo 3: Ticket sin Cliente (Consulta General)

**Request**:
```http
POST /api/v1/soporte/crear-ticket
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "tipo_incidencia": "SOPORTE_TECNICO",
  "descripcion_bot": "Consulta sobre cobertura en sector Los Ceibos",
  "prioridad": "BAJA"
}
```

**Response 201**:
```json
{
  "status": "success",
  "ticket_id": "TK-8823",
  "ticket_uuid": "d5e6f7a8-b9c0-1234-qrst-ef0123456789",
  "mensaje": "Ticket creado exitosamente.",
  "detalle": {
    "cliente": null,
    "tipo_incidencia": "SOPORTE_TECNICO",
    "prioridad": "BAJA",
    "estado": "ABIERTO",
    "asignado_a": "Por asignar"
  }
}
```

**Response 404** (Cliente no encontrado):
```json
{
  "detail": "Cliente no encontrado."
}
```

**Response 400** (Datos inválidos):
```json
{
  "tipo_incidencia": ["Este campo es requerido."]
}
```

---

### Endpoint 8: Diagnóstico en Vivo

Realiza un diagnóstico en tiempo real del estado de la ONT de un cliente.

**Método**: `GET`

**URL**: `/api/v1/olts/diagnostico-ont`

**Parámetros Query** (uno requerido):
- `cliente_id` (uuid): ID del cliente
- `cedula` (string): Cédula del cliente

**Parámetros Opcionales**:
- `en_vivo` (int): Si es `1`, realiza lectura en tiempo real desde la OLT

#### Ejemplo 1: ONT en Línea con Señal Óptima

**Request**:
```http
GET /api/v1/olts/diagnostico-ont?cliente_id=a1b2c3d4-e5f6-7890-abcd-ef1234567890&en_vivo=1
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "estado_ont": "ONLINE",
  "potencia_rx": "-21.5 dBm",
  "es_potencia_optima": true,
  "falla_masiva_sector": false,
  "resultado": "todo_ok",
  "mensaje": "De nuestro lado tu conexion esta bien. Si sigues sin servicio, reinicia tu equipo.",
  "accion_sugerida": "reiniciar",
  "detalle": {
    "sn": "HWTC12345678",
    "modelo": "HG8546M",
    "puerto": 5,
    "onu_index": 3,
    "distancia": "1250 m",
    "tx_power": "2.5 dBm",
    "ultima_lectura": "2026-09-24T20:15:00Z"
  }
}
```

#### Ejemplo 2: ONT con Señal Débil

**Request**:
```http
GET /api/v1/olts/diagnostico-ont?cedula=1204567890
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "estado_ont": "ONLINE",
  "potencia_rx": "-28.2 dBm",
  "es_potencia_optima": false,
  "falla_masiva_sector": false,
  "resultado": "revisar",
  "mensaje": "Detectamos una novedad en tu conexion. Un tecnico la revisara.",
  "accion_sugerida": "contactar_soporte",
  "detalle": {
    "sn": "HWTC87654321",
    "modelo": "HG8546M",
    "puerto": 8,
    "onu_index": 12,
    "distancia": "2800 m",
    "tx_power": "2.3 dBm",
    "ultima_lectura": "2026-09-24T20:14:00Z"
  }
}
```

#### Ejemplo 3: ONT Offline

**Request**:
```http
GET /api/v1/olts/diagnostico-ont?cedula=1205678901
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "estado_ont": "OFFLINE",
  "potencia_rx": null,
  "es_potencia_optima": false,
  "falla_masiva_sector": false,
  "resultado": "revisar",
  "mensaje": "Detectamos una novedad en tu conexion. Un tecnico la revisara.",
  "accion_sugerida": "contactar_soporte",
  "detalle": {
    "sn": "HWTC11223344",
    "modelo": "HG8546M",
    "puerto": 3,
    "onu_index": 7,
    "distancia": null,
    "tx_power": null,
    "ultima_lectura": "2026-09-24T18:30:00Z"
  }
}
```

#### Ejemplo 4: Cliente sin ONT Asignada

**Request**:
```http
GET /api/v1/olts/diagnostico-ont?cliente_id=e0f1a2b3-c4d5-6789-klmn-0abcdef01234
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "estado_ont": "NO_ASIGNADA",
  "potencia_rx": null,
  "es_potencia_optima": false,
  "falla_masiva_sector": false,
  "resultado": "sin_ont",
  "mensaje": "No tienes una ONT registrada en nuestro sistema.",
  "accion_sugerida": "contactar_soporte"
}
```

#### Ejemplo 5: Falla Masiva en el Sector

**Request**:
```http
GET /api/v1/olts/diagnostico-ont?cliente_id=a1b2c3d4-e5f6-7890-abcd-ef1234567890
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Response 200**:
```json
{
  "status": "success",
  "estado_ont": "OFFLINE",
  "potencia_rx": null,
  "es_potencia_optima": false,
  "falla_masiva_sector": true,
  "resultado": "falla_masiva",
  "mensaje": "Estamos trabajando en restaurar el servicio en tu sector. Te notificaremos cuando esté resuelto.",
  "accion_sugerida": "esperar",
  "sector_afectado": "Norte - Zona 3",
  "onus_afectadas": 45,
  "estimado_resolucion": "2 horas"
}
```

**Response 404** (Cliente no encontrado):
```json
{
  "detail": "Cliente no encontrado."
}
```

**Response 400** (Parámetros faltantes):
```json
{
  "detail": "Debe indicar cliente_id o cedula."
}
```

---

### Endpoint 9: Cambiar Credenciales WiFi

Cambia las credenciales WiFi (SSID y contraseña) de forma remota en la ONT del cliente mediante TR-069.

**Método**: `POST`

**URL**: `/api/v1/red/cambiar-wifi`

**Request Body**:
```json
{
  "cliente_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "nuevo_ssid": "MiRedFibra_5G",
  "nueva_clave": "Seguridad2026*"
}
```

**Campos Requeridos**:
- `cliente_id` (uuid): ID del cliente

**Campos Opcionales** (al menos uno requerido):
- `nuevo_ssid` (string): Nuevo nombre de la red WiFi
- `nueva_clave` (string): Nueva contraseña WiFi

**Validaciones**:
- SSID: 1-32 caracteres
- Clave: mínimo 8 caracteres, recomendado incluir mayúsculas, minúsculas y símbolos

#### Ejemplo 1: Cambio de SSID y Clave

**Request**:
```http
POST /api/v1/red/cambiar-wifi
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "nuevo_ssid": "MiRedFibra_5G",
  "nueva_clave": "Seguridad2026*"
}
```

**Response 200**:
```json
{
  "status": "success",
  "aplicado": true,
  "estado": "aplicada",
  "mensaje": "Credenciales Wi-Fi actualizadas en el equipo remoto.",
  "configuracion": {
    "ssid": "MiRedFibra_5G",
    "ssid_anterior": "FIBRA_CLARO_8945",
    "clave_modificada": true,
    "metodo": "TR069",
    "aplicado_en": "2026-09-24T20:18:00Z"
  }
}
```

#### Ejemplo 2: Solo Cambio de Contraseña

**Request**:
```http
POST /api/v1/red/cambiar-wifi
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "c2d3e4f5-a6b7-8901-cdef-234567890abc",
  "nueva_clave": "NuevaClaveSegura2026!"
}
```

**Response 200**:
```json
{
  "status": "success",
  "aplicado": true,
  "estado": "aplicada",
  "mensaje": "Credenciales Wi-Fi actualizadas en el equipo remoto.",
  "configuracion": {
    "ssid": "FIBRA_MARIA_2024",
    "ssid_anterior": "FIBRA_MARIA_2024",
    "clave_modificada": true,
    "metodo": "TR069",
    "aplicado_en": "2026-09-24T20:19:00Z"
  }
}
```

#### Ejemplo 3: Solo Cambio de SSID

**Request**:
```http
POST /api/v1/red/cambiar-wifi
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "d3e4f5a6-b7c8-9012-defg-34567890abcd",
  "nuevo_ssid": "CasaGonzalez_WiFi"
}
```

**Response 200**:
```json
{
  "status": "success",
  "aplicado": true,
  "estado": "aplicada",
  "mensaje": "Credenciales Wi-Fi actualizadas en el equipo remoto.",
  "configuracion": {
    "ssid": "CasaGonzalez_WiFi",
    "ssid_anterior": "FIBRA_4567",
    "clave_modificada": false,
    "metodo": "TR069",
    "aplicado_en": "2026-09-24T20:20:00Z"
  }
}
```

#### Ejemplo 4: ONT sin Soporte TR-069

**Request**:
```http
POST /api/v1/red/cambiar-wifi
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "e4f5a6b7-c8d9-0123-efgh-4567890abcde",
  "nuevo_ssid": "NuevaRed",
  "nueva_clave": "Clave2026"
}
```

**Response 200**:
```json
{
  "status": "partial",
  "aplicado": false,
  "estado": "no_soportado",
  "mensaje": "Tu equipo ONT no soporta configuración remota. Debes cambiar las credenciales manualmente.",
  "instrucciones": [
    "1. Conecta tu computadora por cable a la ONT",
    "2. Abre tu navegador y ve a http://192.168.1.1",
    "3. Usuario: admin, Clave: admin (o la que está en la etiqueta del equipo)",
    "4. Busca la sección Wireless/WiFi",
    "5. Cambia el SSID y la contraseña",
    "6. Guarda y reinicia el equipo"
  ]
}
```

#### Ejemplo 5: ONT Offline

**Request**:
```http
POST /api/v1/red/cambiar-wifi
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

{
  "cliente_id": "f5a6b7c8-d9e0-1234-fghi-567890abcdef",
  "nuevo_ssid": "MiRed",
  "nueva_clave": "Password123"
}
```

**Response 503**:
```json
{
  "status": "error",
  "aplicado": false,
  "estado": "ont_offline",
  "mensaje": "No se pudo aplicar el cambio porque tu ONT está desconectada.",
  "detalle": "Verifica que tu equipo ONT esté encendido y con las luces correspondientes activas."
}
```

**Response 404** (Cliente no encontrado):
```json
{
  "detail": "Cliente no encontrado."
}
```

**Response 400** (Validación fallida):
```json
{
  "nuevo_ssid": ["El SSID debe tener entre 1 y 32 caracteres."],
  "nueva_clave": ["La contraseña debe tener al menos 8 caracteres."]
}
```

**Response 400** (Ningún campo especificado):
```json
{
  "detail": "Debe especificar al menos nuevo_ssid o nueva_clave."
}
```

---

## Notas Adicionales

### Paginación

Todos los endpoints de listado soportan paginación estándar de Django REST Framework:

```http
GET /api/v1/clientes/?page=2&page_size=20
```

**Respuesta con paginación**:
```json
{
  "count": 150,
  "next": "http://localhost:8000/api/v1/clientes/?page=3",
  "previous": "http://localhost:8000/api/v1/clientes/?page=1",
  "results": [...]
}
```

### Filtros y Búsqueda

Todos los viewsets soportan filtros y búsqueda:

```http
GET /api/v1/clientes/?search=Jefferson&estado_servicio=ACTIVO
GET /api/v1/facturas/?cliente=<uuid>&estado=pendiente
GET /api/v1/soporte/tickets/?prioridad=ALTA&estado=ABIERTO
```

### Ordenamiento

```http
GET /api/v1/clientes/?ordering=-created_at
GET /api/v1/pagos/?ordering=fecha_transaccion
GET /api/v1/facturas/?ordering=-fecha_vencimiento
```

### Manejo de Errores Comunes

**401 Unauthorized**:
```json
{
  "detail": "Las credenciales de autenticación no se proveyeron."
}
```

**403 Forbidden**:
```json
{
  "detail": "Usted no tiene permiso para realizar esta acción."
}
```

**500 Internal Server Error**:
```json
{
  "status": "error",
  "mensaje": "Error interno del servidor. Contacte al administrador.",
  "trace_id": "abc123def456"
}
```

### Rate Limiting

El API implementa límites de tasa para prevenir abuso:
- Usuarios autenticados: 1000 requests/hora
- Endpoints públicos: 100 requests/hora por IP

**Respuesta cuando se excede el límite**:
```json
{
  "detail": "Request was throttled. Expected available in 3600 seconds."
}
```

---

## Changelog

**Versión 1.0** (2026-09-24)
- Documentación inicial de 9 endpoints principales
- Ejemplos completos de request/response
- Casos de error documentados

---

**Desarrollado con Django REST Framework**  
**Versión API**: v1  
**Última actualización**: 2026-09-24
