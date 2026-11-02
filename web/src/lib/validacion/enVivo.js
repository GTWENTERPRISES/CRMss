/**
 * Validación en vivo de cada campo del dashboard.
 *
 * `<Field>` (components/ui) llama a `revisarCampo` al salir del campo y,
 * después, mientras se corrige. Mira tres cosas, en este orden:
 *  1. lo que el navegador ya sabe del control: required, type=email/number,
 *     min, max, maxLength, pattern;
 *  2. la regla de negocio de la columna (reglas.js): por el nombre del campo
 *     (`campo="email"`) o, si no lo tiene, por la etiqueta ("Correo", "Cédula");
 *  3. al escribir una cédula nueva, su dígito verificador.
 *
 * Y cuando un guardado vuelve con errores de validación (djangoClient),
 * `avisarErrores` los reparte entre los campos que están en pantalla y lleva
 * el foco al primero.
 */
import { cedulaValida, ESQUEMAS, REGLAS_NUMERICAS, reglaDe } from './reglas.js'

export const EVENTO_ERRORES = 'validacion:errores'

const sinTildes = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

/** La regla que corresponde por la etiqueta, solo en los casos sin ambigüedad. */
export function reglaPorEtiqueta(etiqueta, tipo) {
  const e = sinTildes(etiqueta || '')
  if (!e) return null
  if (/(^|\s)(correo|e-?mail)\b/.test(e) && !/plantilla|asunto|mensaje/.test(e)) return 'correo'
  if (/^(cedula|identificacion|cedula o ruc|cedula\/ruc|ruc o cedula|ruc\/cedula|n° de cedula)/.test(e)) return 'identificacion'
  if (/^ruc\b/.test(e)) return 'ruc'
  if (/^(telefono|celular|movil|whatsapp)\b/.test(e) && tipo !== 'number' && !/plantilla|mensaje|via|pausa|numero de envio/.test(e)) return 'telefono'
  if (/^(latitud)\b/.test(e)) return 'latitud'
  if (/^(longitud)\b/.test(e)) return 'longitud'
  if (/^(direccion mac|mac)\b/.test(e)) return 'mac'
  if (/^vlan\b/.test(e)) return 'vlan'
  return null
}

/** La regla de un campo: por su columna o, si no la tiene, por su etiqueta. */
export function reglaDelCampo({ campo, etiqueta, tipo }) {
  return (campo && reglaDe(campo)) || reglaPorEtiqueta(etiqueta, tipo)
}

function mensajeNativo(el) {
  const v = el.validity
  if (!v || v.valid) return null
  if (v.valueMissing) return el.tagName === 'SELECT' ? 'Elige una opción de la lista.' : 'Este campo es obligatorio.'
  if (v.badInput) return 'Tiene que ser un número.'
  if (v.typeMismatch) return el.type === 'email' ? 'No es un correo válido (ejemplo: nombre@correo.com).' : 'El formato no es válido.'
  if (v.rangeUnderflow) return `El mínimo es ${el.min}.`
  if (v.rangeOverflow) return `El máximo es ${el.max}.`
  if (v.tooLong) return `Admite hasta ${el.maxLength} caracteres.`
  if (v.tooShort) return `Necesita al menos ${el.minLength} caracteres.`
  if (v.patternMismatch) return el.title || 'El formato no es válido.'
  if (v.stepMismatch) return null // 25.5 en un step=1: lo decide el formulario, no es un error de tipeo
  return null
}

const mayuscula = (s) => s.charAt(0).toUpperCase() + s.slice(1)

/**
 * El mensaje de error de un control, o null si está bien.
 *
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} el
 * @param {{campo?: string, regla?: string|false, etiqueta?: string, escrito?: boolean}} op
 *   escrito: el usuario tecleó en este campo (para la cédula: una ficha vieja
 *   con el dígito mal cargado no se marca solo por pasar por el campo).
 */
export function revisarCampo(el, { campo, regla, etiqueta, escrito = false } = {}) {
  if (!el || el.disabled || el.readOnly) return null
  if (el.type === 'checkbox' || el.type === 'radio' || el.type === 'file' || el.type === 'hidden') return null

  const nativo = mensajeNativo(el)
  if (nativo) return nativo

  const valor = String(el.value ?? '').trim()
  if (!valor) return null

  const nombre = regla === false ? null : regla || reglaDelCampo({ campo, etiqueta, tipo: el.type })
  // Una regla de números sobre un texto que no es un número (un "sin límite"):
  // acá no se adivina; si la columna era numérica, lo frena el guardado.
  const noAplica = REGLAS_NUMERICAS.has(nombre) && el.type !== 'number' && Number.isNaN(Number(valor.replace(',', '.')))
  if (nombre && ESQUEMAS[nombre] && el.tagName !== 'SELECT' && !noAplica) {
    const r = ESQUEMAS[nombre].safeParse(valor)
    if (!r.success) return `${mayuscula(r.error.issues[0].message)}.`
    if (nombre === 'identificacion' && escrito && /^\d{10}$/.test(valor) && !cedulaValida(valor)) {
      return 'No es una cédula válida: el dígito verificador no coincide.'
    }
  }
  return null
}

/**
 * Reparte los errores de un guardado entre los campos en pantalla.
 * `campos` = {columna: mensaje} (de errorDeValidacion).
 */
export function avisarErrores(campos) {
  if (typeof window === 'undefined' || !campos) return
  window.dispatchEvent(new CustomEvent(EVENTO_ERRORES, { detail: campos }))
  enfocarPrimero()
}

let reloj = null

/** Después de que los campos pintaron su error: el foco al primero. Una vez aunque lo pidan varios. */
export function enfocarPrimero() {
  if (typeof document === 'undefined') return
  clearTimeout(reloj)
  reloj = setTimeout(() => {
    const primero = document.querySelector('[data-campo-invalido="1"] :is(input, select, textarea)')
    if (primero) {
      primero.focus({ preventScroll: true })
      const quieto = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      primero.scrollIntoView({ block: 'center', behavior: quieto ? 'auto' : 'smooth' })
    }
  }, 30)
}

/** El mensaje de una columna que le toca a este campo, si alguno coincide. */
export function errorParaCampo(campos, { campo, etiqueta }) {
  if (!campos) return null
  const claves = campo ? [campo, `p_${campo}`] : []
  for (const c of claves) if (campos[c]) return campos[c]
  // Sin `campo`: por la etiqueta, que es con la que empieza el mensaje.
  const e = sinTildes(etiqueta || '')
  if (!e) return null
  for (const mensaje of Object.values(campos)) {
    if (sinTildes(mensaje).startsWith(`${e} `)) return mensaje
  }
  return null
}
