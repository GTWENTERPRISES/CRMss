/**
 * El formato del dinero, en un solo lugar.
 *
 * Estaba repetido en una docena de archivos, cada uno con su `$` escrito a
 * mano. Mientras el sistema fuera de un solo ISP en Ecuador eso no molestaba;
 * ahora se vende, y un ISP de otro país no puede necesitar que le editen doce
 * archivos para que diga S/ en vez de $.
 *
 * No es un hook ni un contexto a propósito. La moneda no cambia mientras
 * alguien usa el sistema: se lee una vez al arrancar y listo. Un contexto
 * obligaría a convertir en componente cada función que hoy formatea un monto,
 * a cambio de nada.
 */

let simbolo = '$'

/** Se llama una vez al arrancar, con lo que diga la configuración. */
export function configurarMoneda(nuevoSimbolo) {
  if (nuevoSimbolo) simbolo = nuevoSimbolo
}

export const simboloMoneda = () => simbolo

/**
 * Un monto listo para mostrar.
 *
 * `null` y `undefined` dan `—`, no `$0.00`. No es lo mismo "no debe nada" que
 * "no sabemos cuánto debe", y mostrar cero cuando falta el dato hace que nadie
 * lo busque.
 */
export const dinero = (n) => (n == null ? '—' : dineroCero(n))

/**
 * Igual, pero el vacío es cero de verdad: para totales y sumas.
 *
 * Con separador de miles y el signo delante del símbolo: "$1,234.56" y
 * "-$5.00", el mismo formato del RIDE del SRI. Antes cada pantalla armaba el
 * suyo y convivían "$782,00" y "$287.50".
 */
export const dineroCero = (n) => {
  const valor = Number(n) || 0
  const texto = Math.abs(valor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return `${valor < 0 ? '-' : ''}${simbolo}${texto}`
}

/** Un número entero o con decimales, con el mismo separador de miles que los montos. */
export const numero = (n, decimales) =>
  n == null || n === '' || Number.isNaN(Number(n))
    ? '—'
    : Number(n).toLocaleString('en-US', {
        // Sin decimales pedidos: los que tenga, hasta dos (12.5 m de fibra).
        minimumFractionDigits: decimales ?? 0,
        maximumFractionDigits: decimales ?? 2,
      })

// ── Fechas ──────────────────────────────────────────────────────────────────
//
// Una sola forma de mostrar fechas en todo el sistema: "14 oct 2026" y
// "14 oct 2026, 14:19". Antes convivían "24/9/2026", "14/10/26, 14:19" y
// "2026-10-14", y muchas pantallas usaban el idioma del navegador.

const ZONA = 'America/Guayaquil'
const FMT_FECHA = new Intl.DateTimeFormat('es-EC', { day: 'numeric', month: 'short', year: 'numeric', timeZone: ZONA })
const FMT_FECHA_HORA = new Intl.DateTimeFormat('es-EC', {
  day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: ZONA,
})
const FMT_HORA = new Intl.DateTimeFormat('es-EC', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: ZONA })

/**
 * Un valor de fecha a Date. Una fecha sola ('2026-10-14') es ese día en
 * Ecuador: `new Date('2026-10-14')` la toma como medianoche UTC, que en
 * Guayaquil es el día anterior a las 19:00, y la pantalla mostraba el 13.
 */
export function aFecha(v) {
  if (v == null || v === '') return null
  if (v instanceof Date) return Number.isNaN(v.getTime()) ? null : v
  const texto = String(v)
  const solo = /^(\d{4})-(\d{2})-(\d{2})$/.exec(texto)
  const d = solo ? new Date(`${texto}T12:00:00-05:00`) : new Date(v)
  return Number.isNaN(d.getTime()) ? null : d
}

const limpiar = (s) => s.replace(/\./g, '')

/** "14 oct 2026" */
export const fecha = (v) => {
  const d = aFecha(v)
  return d ? limpiar(FMT_FECHA.format(d)) : '—'
}

/** "14 oct 2026, 14:19" */
export const fechaHora = (v) => {
  const d = aFecha(v)
  return d ? limpiar(FMT_FECHA_HORA.format(d)) : '—'
}

/** "14:19" */
export const hora = (v) => {
  const d = aFecha(v)
  return d ? FMT_HORA.format(d) : '—'
}
