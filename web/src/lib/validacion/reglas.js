/**
 * Reglas de negocio de los campos, con Zod.
 *
 * El tipo de cada columna sale de la base (tablas.generado.js). Lo que la base
 * no sabe —que una cédula tiene dígito verificador, que una IP tiene cuatro
 * octetos de 0 a 255, que un día de facturación va de 1 a 31— va acá, y se
 * aplica por el NOMBRE de la columna: así vale igual para `telefono` en
 * clientes, prospectos o técnicos.
 *
 * Cada regla es un esquema de Zod sobre un valor ya no vacío. Los mensajes van
 * en tuteo y dicen qué corregir.
 */
import { z } from 'zod'

const IPV4 = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/
const IPV6 = /^[0-9a-fA-F:]+:[0-9a-fA-F:]*$/
const MAC = /^([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$/
const CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const HOST = /^(?=.{1,253}$)[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/

function esUrl(v) {
  try {
    // "www.isp.com" sin https:// también vale: es como la escribe la gente.
    const u = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(v) ? v : `https://${v}`)
    return (u.protocol === 'http:' || u.protocol === 'https:') && !!u.hostname
  } catch {
    return false
  }
}

/** Dígito verificador de la cédula ecuatoriana (módulo 10). */
export function cedulaValida(cedula) {
  if (!/^\d{10}$/.test(cedula)) return false
  const provincia = Number(cedula.slice(0, 2))
  if (!((provincia >= 1 && provincia <= 24) || provincia === 30)) return false
  if (Number(cedula[2]) >= 6) return false
  const suma = [...cedula.slice(0, 9)].reduce((s, d, i) => {
    let v = Number(d) * (i % 2 === 0 ? 2 : 1)
    if (v > 9) v -= 9
    return s + v
  }, 0)
  return (10 - (suma % 10)) % 10 === Number(cedula[9])
}

const texto = (v) => String(v).trim()

export const ESQUEMAS = {
  correo: z.string().trim().regex(CORREO, 'no es un correo válido (ejemplo: nombre@correo.com)'),

  telefono: z
    .string()
    .transform((v) => v.replace(/[\s\-().+]/g, ''))
    .pipe(z.string().regex(/^\d{7,15}$/, 'debe tener entre 7 y 15 dígitos (ejemplo: 0991234567)')),

  // Formato siempre; el dígito verificador solo al crear (más abajo), para no
  // trabar la edición de fichas viejas que ya tienen una cédula mal cargada.
  identificacion: z
    .string()
    .trim()
    .refine(
      (v) => /^\d{10}$/.test(v) || /^\d{10}001$/.test(v) || v === '9999999999999' || /^[A-Za-z0-9]{5,20}$/.test(v),
      'debe ser una cédula de 10 dígitos, un RUC de 13 que termine en 001 o un pasaporte',
    ),

  ruc: z.string().trim().regex(/^(\d{10}001|9999999999999)$/, 'debe tener 13 dígitos y terminar en 001'),

  ip: z.string().trim().refine((v) => IPV4.test(v) || IPV6.test(v), 'no es una dirección IP válida (ejemplo: 192.168.1.10)'),

  red: z
    .string()
    .trim()
    .refine((v) => {
      const [ip, mascara] = v.split('/')
      return (IPV4.test(ip) && /^\d+$/.test(mascara ?? '') && Number(mascara) <= 32) || (IPV6.test(ip) && /^\d+$/.test(mascara ?? ''))
    }, 'no es una red válida (ejemplo: 10.0.0.0/24)'),

  mac: z.string().trim().regex(MAC, 'no es una MAC válida (ejemplo: AA:BB:CC:DD:EE:FF)'),

  latitud: z.coerce.number().min(-90, 'tiene que estar entre -90 y 90').max(90, 'tiene que estar entre -90 y 90'),
  longitud: z.coerce.number().min(-180, 'tiene que estar entre -180 y 180').max(180, 'tiene que estar entre -180 y 180'),
  // Plata: además del mínimo, el campo muestra "$" adelante (components/ui, Field).
  noNegativo: z.coerce.number().min(0, 'no puede ser negativo'),
  // Lo que se cuenta o se mide y no es plata: cantidades, km, minutos, kbps, meses.
  cantidad: z.coerce.number().min(0, 'no puede ser negativo'),
  porcentaje: z.coerce.number().min(0, 'va de 0 a 100').max(100, 'va de 0 a 100'),
  diaDelMes: z.coerce.number().int('tiene que ser un número entero').min(1, 'va del 1 al 31').max(31, 'va del 1 al 31'),
  vlan: z.coerce.number().int('tiene que ser un número entero').min(1, 'va de 1 a 4094').max(4094, 'va de 1 a 4094'),
  puerto: z.coerce.number().int('tiene que ser un número entero').min(0, 'va de 0 a 65535').max(65535, 'va de 0 a 65535'),
  hora: z.string().trim().regex(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, 'tiene que ser una hora HH:MM, como 09:00'),
  url: z.string().trim().refine(esUrl, 'no es una dirección web válida (ejemplo: https://empresa.com)'),
  host: z.string().trim().refine((v) => HOST.test(v) || IPV4.test(v), 'no es un servidor válido (ejemplo: smtp.gmail.com)'),
  // Números de serie de ONU / equipos: Huawei HWTC1234ABCD, V-SOL en hexadecimal...
  serie: z.string().trim().regex(/^[A-Za-z0-9][A-Za-z0-9:-]{3,31}$/, 'solo letras, números, guiones o dos puntos, sin espacios'),
  placa: z.string().trim().regex(/^[A-Za-z]{2,3}-?\d{3,4}[A-Za-z]?$/, 'no es una placa válida (ejemplo: PBA-1234)'),
  ssid: z.string().min(1, 'no puede quedar vacío').max(32, 'admite hasta 32 caracteres'),
  claveWifi: z.string().regex(/^[ -~]{8,63}$/, 'debe tener entre 8 y 63 caracteres, sin tildes ni ñ'),
  usuarioPpp: z.string().trim().regex(/^[A-Za-z0-9._@-]{1,64}$/, 'sin espacios, tildes ni ñ (hasta 64 caracteres)'),
}

/**
 * Reglas que dependen de la tabla, no solo del nombre: `placa` es la del auto en
 * vehiculos y la tarjeta de la OLT ("0/1") en puertos_pon.
 */
export const REGLAS_DE_TABLA = {
  vehiculos: { placa: 'placa' },
}

/** Reglas numéricas: solo se aplican a columnas que en la base son números. */
export const REGLAS_NUMERICAS = new Set(['latitud', 'longitud', 'noNegativo', 'cantidad', 'porcentaje', 'diaDelMes', 'vlan', 'puerto'])

/**
 * Qué regla le toca a una columna, por su nombre. `null` = solo el tipo.
 * El orden importa: lo más específico primero.
 */
export function reglaDe(columna) {
  const c = columna.toLowerCase()
  if (c.endsWith('_id') || c === 'id' || c.endsWith('_encrypted') || c.includes('chat')) return null
  // email_from_name es el nombre que se muestra como remitente, no un correo.
  if ((/(^|_)(email|correo)(_|$)/.test(c) || c.endsWith('_email')) && !/_(name|nombre)$/.test(c)) return 'correo'
  // Números de teléfono. Las columnas de configuración de WhatsApp
  // (whatsapp_via, whatsapp_pausa_segundos...) no son números.
  if (/(^|_)(telefono|celular|movil)(_|$)/.test(c) || c === 'whatsapp' || c === 'telefono_whatsapp') return 'telefono'
  if (c === 'ruc') return 'ruc'
  // tipo_identificacion es el código del tipo ("05"), no el número.
  if (c.startsWith('tipo_')) return null
  if (c === 'identificacion' || c === 'cedula' || c.endsWith('_cedula') || c.endsWith('_identificacion')) return 'identificacion'
  if (c === 'cidr' || c === 'red_ipv4' || c === 'subred') return 'red'
  if (/^(ip|gateway|dns1|dns2|ip_address|ip_host|ip_administracion|ip_gestion|rango_desde|rango_hasta)$/.test(c)) return 'ip'
  if (c === 'mac' || c === 'mac_address' || c.endsWith('_mac')) return 'mac'
  // Coordenadas con cualquier nombre: centro_lat, llegada_lng, latitud_anterior.
  if (c === 'latitud' || /(^|_)lat(_|$)/.test(c) || /^latitud_|_latitud$/.test(c)) return 'latitud'
  if (c === 'longitud' || /(^|_)(lng|lon)(_|$)/.test(c) || /^longitud_|_longitud$/.test(c)) return 'longitud'
  if (c.includes('porcentaje') || c.endsWith('_pct')) return 'porcentaje'
  if (/^dia_(facturacion|pago|generar_factura|maximo_pago|corte|cierre)$/.test(c)) return 'diaDelMes'
  if (c === 'vlan' || c.startsWith('vlan_')) return 'vlan'
  if (/^(puerto_ssh|puerto_api|snmp_puerto|puerto_snmp|api_port|puerto|smtp_port)$/.test(c)) return 'puerto'
  if (/^(precio|monto|costo|total|subtotal|descuento|bono|comision|propina|importe|base_imponible|base_total|meta_monto|promesa_monto|deuda_equipo)(_|$)/.test(c) && !c.includes('ajuste')) return 'noNegativo'
  if (/^valor_(instalacion|iva|retenido|mensual|total|unitario)$/.test(c)) return 'noNegativo'
  if (/^(cantidad|litros|odometro|kilometraje|km_inicio|km_fin|metros_cable|stock_minimo|minimo|reponer|disponibles|limite|intentos|capacidad|tamano|puertos|puertos_ethernet|puertos_fxs|wifi_ssids|catv|meta_altas|slot|frame|gemport|onu_index|nms_paquetes)$/.test(c)) return 'cantidad'
  // Los días de aviso (-3 = tres días antes de vencer) y los umbrales de señal
  // en dBm (optica_limite -27, radio_limite -80) son negativos a propósito.
  if (/(^|_)dias_aviso|aviso_dias/.test(c)) return null
  if (/^(dias|meses|anios|cada)_/.test(c) || /(^|_)(segundos|minutos|horas|kbps|mbps)(_|$)/.test(c) || /_(dias|meses|ms|m|km|lote)$/.test(c)) return 'cantidad'
  if (c === 'hora' || c.endsWith('_hora')) return 'hora'
  if (/^(web|sitio_web|url|api_url|webhook_url|portal_url)$/.test(c) || /^whatsapp_\w+_url$/.test(c)) return 'url'
  if (c === 'host' || c === 'smtp_host') return 'host'
  if (/^(sn|sn_anterior|sn_nuevo|serie|serie_anterior|serie_nueva|ont_serie|equipo_sn|numero_serie|onu_sn)$/.test(c)) return 'serie'
  if (c === 'ssid' || /^ssid_\d$/.test(c) || c === 'wifi_ssid') return 'ssid'
  if (c === 'clave_wifi' || c === 'wifi_clave' || c === 'wifi_password') return 'claveWifi'
  if (c === 'usuario_ppp' || c === 'pppoe_usuario' || c === 'ppp_usuario') return 'usuarioPpp'
  return null
}

/**
 * Tablas donde la cédula se ESCRIBE al registrar a una persona. En las demás
 * (tickets, instalaciones, pagos...) se copia de la ficha del cliente: exigir
 * ahí el dígito verificador dejaba sin poder abrir un ticket a un abonado viejo
 * con la cédula mal cargada.
 */
const SE_ESCRIBE_LA_CEDULA = new Set(['clientes', 'prospectos', 'tecnicos', 'proveedores', 'usuarios_sistema'])

/** Mensaje extra al crear: la cédula con su dígito verificador. */
export function reglaAlCrear(columna, valor, tabla) {
  if (tabla && !SE_ESCRIBE_LA_CEDULA.has(tabla)) return null
  const c = columna.toLowerCase()
  const esIdentificacion = c === 'identificacion' || c === 'cedula' || c.endsWith('_cedula')
  if (esIdentificacion && /^\d{10}$/.test(texto(valor)) && !cedulaValida(texto(valor))) {
    return 'no es una cédula válida: el dígito verificador no coincide'
  }
  return null
}
