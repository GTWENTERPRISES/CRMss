/**
 * El cliente del portal del abonado.
 *
 * Aparte del `api` del personal a propósito: aquel manda el token del
 * personal, este manda el del abonado. Si compartieran el cliente, un descuido
 * haría que el token del personal viaje al portal o al revés.
 *
 * El portal también entra por Django (el proxy /api/v1/red/...): es el único
 * backend expuesto. El token es el que emite el servicio interno para el
 * abonado, y lo valida él mismo.
 */

import { errorDeValidacion, validarPorNombre } from './validacion/index.js'
import { avisarErrores } from './validacion/enVivo.js'

const DJANGO = (process.env.NEXT_PUBLIC_DJANGO_API_URL || 'http://localhost:8000/api/v1').replace(/\/$/, '')
const BASE = (process.env.NEXT_PUBLIC_API_URL || `${DJANGO}/red`).replace(/\/$/, '')

const LLAVE = 'portal_token'

export const tokenGuardado = () => localStorage.getItem(LLAVE)
export const guardarToken = (t) => localStorage.setItem(LLAVE, t)
export const olvidarToken = () => localStorage.removeItem(LLAVE)

export class PortalError extends Error {
  constructor(mensaje, { status, hint, sesion_vencida } = {}) {
    super(mensaje)
    this.status = status
    this.hint = hint
    this.sesionVencida = sesion_vencida
  }
}

async function pedir(metodo, ruta, cuerpo) {
  // Cédula, correo, teléfono...: con un dato mal escrito no se manda nada.
  const v = validarPorNombre(cuerpo)
  if (!v.ok) {
    const e = errorDeValidacion(v.errores)
    avisarErrores(e.campos)
    throw new PortalError(e.message, { status: 0, hint: 'Corrige el dato y vuelve a intentar.' })
  }
  const token = tokenGuardado()

  let res
  try {
    res = await fetch(`${BASE}/api/portal${ruta}`, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: cuerpo ? JSON.stringify(cuerpo) : undefined,
    })
  } catch {
    throw new PortalError('No pudimos conectarnos. Revisa tu conexión e intenta de nuevo.')
  }

  const texto = await res.text()
  let json = null
  try {
    json = texto ? JSON.parse(texto) : null
  } catch {
    /* respuesta sin JSON: se usa el status */
  }

  if (!res.ok) {
    // La sesión vencida se limpia sola. Dejar un token muerto guardado haría
    // que cada pantalla falle sola hasta que alguien borre los datos del
    // navegador — y nadie sabe hacer eso.
    if (res.status === 401) olvidarToken()

    throw new PortalError(json?.error || 'Algo salió mal. Intenta de nuevo en un momento.', {
      status: res.status,
      hint: json?.hint,
      sesion_vencida: json?.sesion_vencida,
    })
  }

  return json
}

export const portalApi = {
  pedirCodigo: (identificacion) => pedir('POST', '/codigo', { identificacion }),
  entrar: (identificacion, codigo) => pedir('POST', '/entrar', { identificacion, codigo }),
  entrarConClave: (identificacion, clave) => pedir('POST', '/entrar-clave', { identificacion, clave }),
  cambiarClave: (actual, nueva) => pedir('POST', '/clave', { actual, nueva }),
  salir: () => pedir('POST', '/salir'),
  // Pasar a otro servicio de la misma persona. El token no cambia: se mueve
  // la sesión, así que no hay nada que volver a guardar.
  cambiarServicio: (clienteId) => pedir('POST', '/servicio', { clienteId }),

  miCuenta: () => pedir('GET', '/mi-cuenta'),
  facturas: () => pedir('GET', '/facturas'),
  consumo: () => pedir('GET', '/consumo'),
  tickets: () => pedir('GET', '/tickets'),
  abrirTicket: (tipo, descripcion) => pedir('POST', '/tickets', { tipo, descripcion }),
  guardarContacto: (datos) => pedir('PUT', '/contacto', datos),
  solicitudWifi: () => pedir('GET', '/wifi'),
  cambiarWifi: (datos) => pedir('POST', '/wifi', datos),
}
