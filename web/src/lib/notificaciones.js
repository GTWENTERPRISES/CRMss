/**
 * Avisos breves en una esquina ("Cliente creado", "Pago anulado · Deshacer").
 *
 * Un solo lugar para todos: así quien usa el sistema aprende dónde mirar. Los
 * dibuja <Avisos/> (components/layout/Avisos.jsx), montado una vez en el layout.
 *
 *     avisar('Pago registrado')
 *     avisar('No se pudo enviar', { tipo: 'error' })
 *     await conDeshacer('Cliente dado de baja', () => api.darDeBaja(id))
 */

let siguiente = 1
let lista = []
const oyentes = new Set()

const emitir = () => oyentes.forEach((f) => f(lista))

export function suscribirAvisos(fn) {
  oyentes.add(fn)
  fn(lista)
  return () => oyentes.delete(fn)
}

export function cerrarAviso(id) {
  lista = lista.filter((a) => a.id !== id)
  emitir()
}

/**
 * @param {string} mensaje
 * @param {{tipo?: 'exito'|'error'|'info', duracion?: number, accion?: {label: string, onClick: Function}, cuenta?: number}} op
 *   duracion 0 = queda hasta que se cierre; cuenta = segundos a mostrar en cuenta regresiva
 * @returns {number} el id, para cerrarlo antes
 */
export function avisar(mensaje, { tipo = 'exito', duracion = 4000, accion, cuenta } = {}) {
  const id = siguiente++
  lista = [...lista.slice(-3), { id, mensaje, tipo, accion, cuenta, duracion, desde: Date.now() }]
  emitir()
  if (duracion > 0) setTimeout(() => cerrarAviso(id), duracion)
  return id
}

// Lo que espera su turno: si se cierra la pestaña, se ejecuta igual (lo que el
// usuario confirmó no puede perderse por cerrar rápido).
const pendientes = new Map()
if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', () => {
    for (const ejecutar of pendientes.values()) ejecutar()
  })
}

/**
 * Hace la acción después de unos segundos, con un "Deshacer" en el aviso.
 *
 * Para lo que ya se confirmó pero duele si fue un error de dedo (anular, cortar,
 * dar de baja): mientras corre la cuenta, no se mandó nada. Si se deshace, la
 * promesa resuelve `{ deshecho: true }`; si no, resuelve con lo que devolvió
 * la acción, o rechaza con su error.
 *
 * @param {string} mensaje   lo que va a pasar, en pasado: "Cobro anulado"
 * @param {() => Promise<any>} accion
 */
export function conDeshacer(mensaje, accion, { segundos = 6 } = {}) {
  return new Promise((resolver, rechazar) => {
    let hecho = false
    let idAviso = null
    const clave = Symbol('pendiente')

    const ejecutar = () => {
      if (hecho) return
      hecho = true
      pendientes.delete(clave)
      cerrarAviso(idAviso)
      Promise.resolve()
        .then(accion)
        .then(resolver, (err) => {
          avisar(err?.message || 'No se pudo completar la acción.', { tipo: 'error', duracion: 7000 })
          rechazar(err)
        })
    }

    idAviso = avisar(mensaje, {
      tipo: 'info',
      duracion: 0,
      accion: {
        label: 'Deshacer',
        onClick: () => {
          if (hecho) return
          hecho = true
          pendientes.delete(clave)
          clearTimeout(reloj)
          cerrarAviso(idAviso)
          avisar('Listo, no se hizo ningún cambio.', { tipo: 'info', duracion: 3000 })
          resolver({ deshecho: true })
        },
      },
      cuenta: segundos,
    })

    pendientes.set(clave, ejecutar)
    const reloj = setTimeout(ejecutar, segundos * 1000)
  })
}
