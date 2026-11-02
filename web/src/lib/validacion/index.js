/**
 * Validación con Zod de todo lo que el dashboard guarda.
 *
 * Se engancha en djangoClient: cada insert / update / upsert sobre una tabla
 * pasa por `validarDatos` antes de salir. Si algo no cumple, el pedido no se
 * manda y la pantalla recibe un error como los de la API —con `message`,
 * `hint` y, además, `campos` ({columna: mensaje})—, así que todos los
 * formularios lo muestran sin cambiar nada.
 *
 * Qué se valida, por columna:
 *  - el tipo, el largo máximo, los decimales y los valores permitidos, tal como
 *    los define la base (tablas.generado.js, que sale de los modelos);
 *  - que no venga null en una columna que no lo admite;
 *  - las reglas de negocio por nombre de columna (reglas.js): cédula, teléfono,
 *    correo, IP, red, MAC, coordenadas, montos, porcentajes, días, VLAN.
 *
 * Además limpia: un '' en una columna que no es de texto (número, fecha, uuid)
 * se manda como null, que es lo que significa en un formulario.
 */
import { z } from 'zod'
import { ESQUEMAS, REGLAS_DE_TABLA, REGLAS_NUMERICAS, reglaAlCrear, reglaDe } from './reglas.js'
import { FUNCIONES, TABLAS } from './tablas.generado.js'

const UUID = /^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/

// Nombres legibles para los mensajes. Lo que no está se arma solo.
const ETIQUETAS = {
  identificacion: 'Cédula o RUC', tipo_identificacion: 'Tipo de identificación', telefono: 'Teléfono',
  telefono_movil: 'Celular', telefono_whatsapp: 'WhatsApp', email: 'Correo', direccion: 'Dirección',
  ip: 'IP', mac_address: 'MAC', mac: 'MAC', cidr: 'Red', gateway: 'Gateway', dns1: 'DNS 1', dns2: 'DNS 2',
  rango_desde: 'Inicio del rango', rango_hasta: 'Fin del rango', latitud: 'Latitud', longitud: 'Longitud',
  precio: 'Precio', precio_mensual: 'Precio mensual', monto: 'Monto', total: 'Total', subtotal: 'Subtotal',
  dia_facturacion: 'Día de facturación', dia_pago: 'Día de pago', vlan: 'VLAN', nombre: 'Nombre',
  ruc: 'RUC', razon_social: 'Razón social', placa: 'Placa', usuario_ppp: 'Usuario PPPoE', ip_administracion: 'IP de administración',
}

export function etiqueta(columna) {
  if (ETIQUETAS[columna]) return ETIQUETAS[columna]
  const base = columna.replace(/_id$/, '').replace(/_/g, ' ')
  return base.charAt(0).toUpperCase() + base.slice(1)
}

const vacio = (v) => v === null || v === undefined || (typeof v === 'string' && v.trim() === '')
const aNumero = (v) => (typeof v === 'string' && v.trim() !== '' ? Number(v) : v)

/** El esquema de Zod del TIPO de una columna (sin la regla de negocio). */
function esquemaDeTipo(meta) {
  switch (meta.t) {
    case 'uuid':
      return z.string().regex(UUID, 'no es un identificador válido')
    case 'entero':
      return z.preprocess(aNumero, z.number({ error: 'tiene que ser un número' }).int('tiene que ser un número entero'))
    case 'decimal': {
      let n = z.number({ error: 'tiene que ser un número' })
      if (meta.dig != null) {
        const tope = 10 ** (meta.dig - (meta.dec ?? 0))
        n = n.refine((v) => Math.abs(v) < tope, `es demasiado grande (máximo ${tope - 1})`)
      }
      if (meta.dec != null) {
        n = n.refine((v) => Number.isInteger(Math.round(v * 10 ** meta.dec * 1e6) / 1e6), `admite hasta ${meta.dec} decimales`)
      }
      return z.preprocess(aNumero, n)
    }
    case 'bool':
      return z.preprocess((v) => (v === 'true' ? true : v === 'false' ? false : v), z.boolean({ error: 'tiene que ser sí o no' }))
    case 'fecha':
      return z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}/, 'no es una fecha válida')
        .refine((v) => !Number.isNaN(new Date(v.slice(0, 10)).getTime()), 'no es una fecha válida')
    case 'momento':
      return z.preprocess(
        (v) => (v instanceof Date ? v.toISOString() : v),
        z.string().refine((v) => !Number.isNaN(new Date(v).getTime()), 'no es una fecha y hora válida'),
      )
    case 'hora':
      return z.string().regex(/^\d{2}:\d{2}/, 'no es una hora válida (ejemplo: 14:30)')
    case 'json':
      return z.any()
    default: {
      let s = z.preprocess((v) => (typeof v === 'number' ? String(v) : v), z.string({ error: 'tiene que ser texto' }))
      if (meta.max) s = s.refine((v) => v.length <= meta.max, `admite hasta ${meta.max} caracteres`)
      return s
    }
  }
}

/** Tipo + valores permitidos + regla de negocio (por el nombre, sin el `p_` de las RPC). */
function esquemaDeColumna(col, meta, tabla) {
  let esquema = esquemaDeTipo(meta)
  if (meta.op) {
    const permitidos = meta.op
    esquema = esquema.refine((v) => permitidos.includes(String(v)), `no es una opción válida (${permitidos.join(', ')})`)
  }
  const regla = REGLAS_DE_TABLA[tabla]?.[col] ?? reglaDe(col.replace(/^p_/, ''))
  // Una regla de números sobre una columna de texto (un `limite` que guarda
  // "sin límite", un `codigo` libre) frenaría datos buenos: solo con el tipo.
  const numerica = meta.t === 'entero' || meta.t === 'decimal'
  if (regla && ESQUEMAS[regla] && (numerica || !REGLAS_NUMERICAS.has(regla))) {
    const deNegocio = ESQUEMAS[regla]
    esquema = esquema.superRefine((v, ctx) => {
      const r = deNegocio.safeParse(typeof v === 'number' ? (regla === 'telefono' ? String(v) : v) : v)
      if (!r.success) ctx.addIssue({ code: 'custom', message: r.error.issues[0].message })
    })
  }
  return { meta, esquema }
}

const CACHE = new Map()

function armar(clave, definicion) {
  if (!definicion) return null
  if (!CACHE.has(clave)) {
    const tabla = clave.startsWith('tabla:') ? clave.slice(6) : null
    CACHE.set(clave, Object.fromEntries(Object.entries(definicion).map(([col, meta]) => [col, esquemaDeColumna(col, meta, tabla)])))
  }
  return CACHE.get(clave)
}

/** {columna: esquema Zod} de una tabla, armado una vez. */
export function esquemaDeTabla(tabla) {
  return armar(`tabla:${tabla}`, TABLAS[tabla])
}

/** {parámetro: esquema Zod} de una función RPC. */
export function esquemaDeFuncion(funcion) {
  return armar(`rpc:${funcion}`, FUNCIONES[funcion])
}

/** Valida un objeto {campo: valor} contra sus esquemas; devuelve la copia limpia y los errores. */
function validarFila(columnas, fila, modo, nombre, errores, tabla) {
  if (typeof fila !== 'object' || fila === null) return fila
  const limpia = { ...fila }
  for (const [col, valor] of Object.entries(fila)) {
    const def = columnas[col]
    if (!def || valor === undefined) continue // lo que no es de la tabla lo rechaza el backend
    const { meta, esquema } = def
    if (vacio(valor)) {
      // '' en un número, una fecha o un uuid es "no hay dato": va como null.
      if (meta.t !== 'texto' && meta.t !== 'json') limpia[col] = null
      if (limpia[col] === null && !meta.n) errores.push({ campo: col, mensaje: `${nombre(col)} no puede quedar vacío` })
      continue
    }
    const r = esquema.safeParse(valor)
    if (!r.success) {
      errores.push({ campo: col, mensaje: `${nombre(col)} ${r.error.issues[0].message}` })
      continue
    }
    if (modo === 'crear') {
      const extra = reglaAlCrear(col, valor, tabla)
      if (extra) errores.push({ campo: col, mensaje: `${nombre(col)} ${extra}` })
    }
  }
  return limpia
}

/**
 * Valida una fila (o un arreglo de filas) antes de mandarla.
 *
 * @param {string} tabla
 * @param {object|object[]} datos
 * @param {'crear'|'editar'} modo  al crear además se valida el dígito de la cédula
 * @returns {{ ok: true, datos } | { ok: false, errores: {campo, mensaje}[] }}
 */
export function validarDatos(tabla, datos, modo = 'crear') {
  const columnas = esquemaDeTabla(tabla)
  if (!columnas || datos == null) return { ok: true, datos }
  const filas = Array.isArray(datos) ? datos : [datos]
  const errores = []
  const limpias = filas.map((fila) => validarFila(columnas, fila, modo, etiqueta, errores, tabla))
  if (errores.length) return { ok: false, errores }
  return { ok: true, datos: Array.isArray(datos) ? limpias : limpias[0] }
}

/**
 * Valida los argumentos de una función RPC (aplicar_cobro, registrar_pago...)
 * con el tipo de cada parámetro y la regla de su nombre: `p_monto` no puede ser
 * negativo, `p_email` tiene que ser un correo. Funciones desconocidas pasan.
 */
export function validarArgumentos(funcion, args) {
  const parametros = esquemaDeFuncion(funcion)
  if (!parametros || args == null || typeof args !== 'object' || Array.isArray(args)) return { ok: true, datos: args }
  const errores = []
  const limpios = validarFila(parametros, args, 'rpc', (p) => etiqueta(p.replace(/^p_/, '')), errores)
  return errores.length ? { ok: false, errores } : { ok: true, datos: limpios }
}

/**
 * Solo las reglas de negocio, por el nombre de cada clave. Para los pedidos que
 * no van a una tabla ni a una RPC (portal del abonado, módulo de red).
 */
export function validarPorNombre(datos) {
  if (datos == null || typeof datos !== 'object') return { ok: true, datos }
  const errores = []
  const revisar = (obj, profundidad) => {
    for (const [clave, valor] of Object.entries(obj)) {
      if (vacio(valor)) continue
      // Lo anidado también: { onu: { sn, vlan } }, una lista de puertos.
      if (typeof valor === 'object') {
        if (profundidad < 3) {
          for (const hijo of Array.isArray(valor) ? valor : [valor]) {
            if (hijo && typeof hijo === 'object') revisar(hijo, profundidad + 1)
          }
        }
        continue
      }
      const regla = reglaDe(clave)
      if (!regla || !ESQUEMAS[regla]) continue
      // Sin la tabla no se sabe el tipo: un texto que no es número, con una
      // regla de números, se deja (es otro campo que se llama parecido).
      if (REGLAS_NUMERICAS.has(regla) && typeof valor !== 'number' && Number.isNaN(Number(String(valor).replace(',', '.')))) continue
      const r = ESQUEMAS[regla].safeParse(typeof valor === 'number' && regla === 'telefono' ? String(valor) : valor)
      if (!r.success && !errores.some((e) => e.campo === clave)) {
        errores.push({ campo: clave, mensaje: `${etiqueta(clave)} ${r.error.issues[0].message}` })
      }
    }
  }
  revisar(datos, 0)
  return errores.length ? { ok: false, errores } : { ok: true, datos }
}

/** El error que reciben las pantallas, con la misma forma que los de la API. */
export function errorDeValidacion(errores) {
  const campos = Object.fromEntries(errores.map((e) => [e.campo, e.mensaje]))
  const message = errores.length === 1 ? `${errores[0].mensaje}.` : `Revisa ${errores.length} campos: ${errores.map((e) => e.mensaje).join('; ')}.`
  return {
    message,
    code: 'VALIDACION',
    status: 0,
    hint: 'Corrige el dato y vuelve a guardar. No se envió nada al servidor.',
    campos,
  }
}
