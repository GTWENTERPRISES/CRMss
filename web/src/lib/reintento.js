/**
 * fetch que aguanta los cortes cortos de la red.
 *
 * Entre la oficina y el servidor se pierde algún paquete: la conexión tarda 1,
 * 3 o 7 s en abrirse, o no se abre. Y mientras se redespliega el backend, Traefik
 * contesta 502/503 durante un minuto. Sin esto, cualquiera de las dos cosas era
 * un error en pantalla aunque al segundo siguiente todo anduviera.
 *
 * Solo se reintentan las LECTURAS (GET/HEAD): repetir un POST podría registrar
 * dos veces un pago o mandar dos veces un corte.
 */
const ESPERAS_MS = [500, 1500, 3000]
const LIMITE_LECTURA_MS = 25000
const REINTENTABLES = new Set([502, 503, 504])

const esLectura = (opciones) => ['GET', 'HEAD'].includes(String(opciones?.method || 'GET').toUpperCase())

const dormir = (ms) => new Promise((r) => setTimeout(r, ms))

async function intento(url, opciones) {
  // Una lectura colgada (la conexión se abrió y nunca contestó) se corta a los
  // 25 s y se reintenta, en vez de dejar la pantalla esperando para siempre.
  if (opciones?.signal || typeof AbortController === 'undefined') return fetch(url, opciones)
  const control = new AbortController()
  const reloj = setTimeout(() => control.abort(), LIMITE_LECTURA_MS)
  try {
    return await fetch(url, { ...opciones, signal: control.signal })
  } finally {
    clearTimeout(reloj)
  }
}

export async function fetchConReintento(url, opciones = {}) {
  if (!esLectura(opciones)) return fetch(url, opciones)
  let ultimoError
  for (let i = 0; i <= ESPERAS_MS.length; i++) {
    try {
      const respuesta = await intento(url, opciones)
      if (!REINTENTABLES.has(respuesta.status) || i === ESPERAS_MS.length) return respuesta
    } catch (error) {
      // Lo canceló quien llamó (cambió de pantalla): no se insiste.
      if (opciones?.signal?.aborted) throw error
      ultimoError = error
      if (i === ESPERAS_MS.length) throw error
    }
    await dormir(ESPERAS_MS[i])
  }
  throw ultimoError
}
