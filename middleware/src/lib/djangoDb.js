/**
 * Cliente de datos del middleware: habla con las APIs de Django.
 *
 * Mantiene su interfaz
 * (.from().select().eq()…, .rpc(), .auth.admin.*) para que ningún servicio
 * tenga que cambiarse: solo cambia por dónde viajan los datos.
 *
 * ── Cómo entra ──
 * Al arrancar no hay token: el primer pedido dispara el login del usuario de
 * servicio (DJANGO_SERVICIO_EMAIL / DJANGO_SERVICIO_CLAVE contra /auth/token/).
 * El access token dura una hora; cuando vence Django contesta 401 y acá se
 * vuelve a entrar y se reintenta una vez, sin que quien llama se entere.
 *
 * ── Semántica PostgREST que se respeta ──
 * - insert/update sin .select() → data: null (no hay representación).
 *   Con .select() → la fila (o el arreglo).
 * - single() falla si no hay fila o hay más de una; maybeSingle() solo si hay
 *   más de una.
 * - select('*', { count: 'exact', head: true }) → { data: [], count }.
 * - Los errores llegan como { message, code, details } y NO como excepción,
 *   igual que en el cliente PostgREST (los servicios miran `error.code === '23505'`).
 */
import { config } from '../config.js'
import { AppError } from './errors.js'

const BASE = () => config.djangoApiUrl.replace(/\/$/, '')

let token = null
let loginEnCurso = null

/**
 * Entrada del usuario de servicio. Concurrente-safe: la primera que llega
 * gana y las demás esperan la misma promesa.
 */
async function entrar() {
  if (!config.djangoServicioEmail || !config.djangoServicioClave) {
    throw new AppError('El middleware no tiene su usuario de servicio de Django', {
      status: 500,
      hint: 'Define DJANGO_SERVICIO_EMAIL y DJANGO_SERVICIO_CLAVE en middleware/.env, y creó el usuario con: python manage.py sincronizar_personal',
    })
  }

  loginEnCurso ??= fetch(`${BASE()}/auth/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: config.djangoServicioEmail,
      password: config.djangoServicioClave,
    }),
  })
    .then(async (res) => {
      if (!res.ok) {
        throw new AppError('El usuario de servicio no pudo entrar a Django', {
          status: 502,
          hint: 'Revisa DJANGO_SERVICIO_EMAIL / DJANGO_SERVICIO_CLAVE y ejecuta de nuevo: python manage.py sincronizar_personal',
        })
      }
      const data = await res.json()
      token = data.access
      return token
    })
    .finally(() => {
      loginEnCurso = null
    })

  return loginEnCurso
}

/** Pedido a Django con el token; si venció (401), re-entra y reintenta una vez. */
async function llamar(metodo, ruta, { cuerpo, señal, reintentos = 1 } = {}) {
  if (!token) await entrar()

  const res = await fetch(`${BASE()}${ruta}`, {
    method: metodo,
    headers: {
      ...(cuerpo !== undefined ? { 'Content-Type': 'application/json' } : {}),
      Authorization: `Bearer ${token}`,
    },
    body: cuerpo,
    signal: señal,
  })

  if (res.status === 401 && reintentos > 0) {
    token = null
    await entrar()
    return llamar(metodo, ruta, { cuerpo, señal, reintentos: 0 })
  }
  return res
}

/** null → 'null', true → 'true', arreglos → '(a,b)' — el formato de PostgREST. */
function serializar(valor) {
  if (valor === null || valor === undefined) return 'null'
  if (typeof valor === 'boolean') return valor ? 'true' : 'false'
  if (Array.isArray(valor)) return `(${valor.map(serializar).join(',')})`
  return String(valor)
}

/** Error de red (Django caído) con la forma de error de el cliente PostgREST. */
function errorDeRed(err) {
  return {
    data: null,
    error: {
      message: `No se puede contactar a Django (${config.djangoApiUrl}): ${err.message}`,
      code: 'NETWORK_ERROR',
      details: null,
    },
    count: null,
  }
}

const CERO = { data: null, error: null, count: null }

// ── Constructor de consultas ────────────────────────────────────────────────

class Consulta {
  constructor(tabla) {
    this.tabla = tabla
    this.params = new URLSearchParams()
    this.metodo = 'GET'
    this.cuerpo = undefined
    this.conteo = false
    this.soloCabeza = false
    this.unico = null // null | 'single' | 'maybe'
    this.quiereFilas = false // .select() encadenado tras insert/upsert/update
    this.señal = null
  }

  select(columnas = '*', opciones = {}) {
    if (columnas && columnas !== '*') this.params.set('select', columnas)
    if (opciones.count === 'exact' || opciones.count === true) this.conteo = true
    if (opciones.head) this.soloCabeza = true
    this.quiereFilas = true
    return this
  }

  _filtro(col, op, valor) {
    this.params.append(col, `${op}.${serializar(valor)}`)
    return this
  }

  eq(col, valor) { return this._filtro(col, 'eq', valor) }
  neq(col, valor) { return this._filtro(col, 'neq', valor) }
  gt(col, valor) { return this._filtro(col, 'gt', valor) }
  gte(col, valor) { return this._filtro(col, 'gte', valor) }
  lt(col, valor) { return this._filtro(col, 'lt', valor) }
  lte(col, valor) { return this._filtro(col, 'lte', valor) }
  like(col, patron) { return this._filtro(col, 'like', patron) }
  ilike(col, patron) { return this._filtro(col, 'ilike', patron) }

  is(col, valor) {
    this.params.append(col, `is.${serializar(valor)}`)
    return this
  }

  in(col, valores) {
    this.params.append(col, `in.(${(valores ?? []).map(serializar).join(',')})`)
    return this
  }

  not(col, op, valor) {
    this.params.append(col, `not.${op}.${serializar(valor)}`)
    return this
  }

  // .or('telefono.ilike.%123,telefono_movil.ilike.%123'): condiciones
  // alternativas, como en el cliente PostgREST. Django las recibe en `or=(...)`.
  or(condiciones) {
    this.params.append('or', `(${condiciones})`)
    return this
  }

  order(col, { ascending = true } = {}) {
    this.params.append('order', `${col}.${ascending ? 'asc' : 'desc'}`)
    return this
  }

  limit(n) {
    this.params.set('limit', String(n))
    return this
  }

  range(desde, hasta) {
    this.params.set('offset', String(desde))
    this.params.set('limit', String(hasta - desde + 1))
    return this
  }

  single() {
    this.unico = 'single'
    return this
  }

  maybeSingle() {
    this.unico = 'maybe'
    return this
  }

  abortSignal(señal) {
    this.señal = señal
    return this
  }

  insert(datos) {
    this.metodo = 'POST'
    this.cuerpo = JSON.stringify(datos)
    return this
  }

  upsert(datos, { onConflict = 'id' } = {}) {
    const marcar = (fila) => ({ ...fila, _upsert: true, _conflict: onConflict })
    this.metodo = 'POST'
    this.cuerpo = JSON.stringify(Array.isArray(datos) ? datos.map(marcar) : marcar(datos))
    return this
  }

  update(cambios) {
    this.metodo = 'PATCH'
    this.cuerpo = JSON.stringify(cambios)
    return this
  }

  delete() {
    this.metodo = 'DELETE'
    return this
  }

  // await consulta → ejecuta, igual que en el cliente PostgREST.
  then(alResolver, alRechazar) {
    return this.execute().then(alResolver, alRechazar)
  }

  async execute() {
    try {
      return await this._ejecutar()
    } catch (err) {
      // Los AppError (usuario de servicio sin configurar) sí vuelan: es un
      // problema de instalación, no un dato que el servicio pueda manejar.
      if (err instanceof AppError) throw err
      return errorDeRed(err)
    }
  }

  async _ejecutar() {
    // PATCH/DELETE con .eq('id', x) van por la ruta del id, como el resto
    // del sistema. Los demás filtros viajan en el querystring.
    let ruta = `/tables/${this.tabla}`
    const idFiltro = this.params.get('id')
    if (
      (this.metodo === 'PATCH' || this.metodo === 'DELETE') &&
      idFiltro &&
      idFiltro.startsWith('eq.')
    ) {
      ruta += `/${encodeURIComponent(idFiltro.slice(3))}`
      this.params.delete('id')
    }

    if (this.conteo) this.params.set('count', 'exact')
    if (this.soloCabeza) this.params.set('head', 'true')
    const qs = this.params.toString()
    if (qs) ruta += `?${qs}`

    const res = await llamar(this.metodo, ruta, { cuerpo: this.cuerpo, señal: this.señal })

    if (res.status === 204) return CERO

    if (!res.ok) {
      const cuerpo = await res.json().catch(() => ({}))
      return {
        data: null,
        error: {
          message: cuerpo.error || `Error ${res.status} de Django`,
          code: cuerpo.code || res.status,
          details: cuerpo,
        },
        count: null,
      }
    }

    if (this.metodo === 'DELETE') return CERO

    const total = res.headers.get('X-Total-Count')
    const count = total !== null ? Number(total) : null

    let data = null
    if (this.metodo === 'GET') {
      const crudo = await res.json()
      data = Array.isArray(crudo) ? crudo : [crudo]
    } else {
      // insert/upsert/update: la fila solo cuando se pidió con .select(),
      // como PostgREST.
      if (this.quiereFilas) {
        const crudo = await res.json()
        data = Array.isArray(crudo) ? crudo : [crudo]
      }
    }

    if (this.unico) {
      if (Array.isArray(data) && data.length > 1) {
        return {
          data: null,
          error: { message: 'La consulta trajo más de una fila', code: 'PGRST116' },
          count,
        }
      }
      if (this.unico === 'single' && Array.isArray(data) && data.length === 0) {
        return {
          data: null,
          error: { message: 'La consulta no trajo ninguna fila', code: 'PGRST116' },
          count,
        }
      }
      data = Array.isArray(data) ? (data[0] ?? null) : data
    }

    return { data, error: null, count }
  }
}

// ── RPC (funciones de PostgreSQL) ───────────────────────────────────────────

class RPCCall {
  constructor(nombre, params) {
    this.nombre = nombre
    this.params = params ?? {}
    this.unico = null
    this.señal = null
  }

  single() {
    this.unico = 'single'
    return this
  }

  maybeSingle() {
    this.unico = 'maybe'
    return this
  }

  abortSignal(señal) {
    this.señal = señal
    return this
  }

  then(alResolver, alRechazar) {
    return this.execute().then(alResolver, alRechazar)
  }

  async execute() {
    try {
      const res = await llamar('POST', `/rpc/${this.nombre}`, {
        cuerpo: JSON.stringify(this.params),
        señal: this.señal,
      })

      if (!res.ok) {
        const cuerpo = await res.json().catch(() => ({}))
        return {
          data: null,
          error: {
            message: cuerpo.error || `Error ${res.status} al llamar a ${this.nombre}`,
            code: res.status,
            details: cuerpo,
          },
        }
      }

      let data = await res.json()
      if (this.unico && Array.isArray(data)) {
        data = data[0] ?? null
      }
      return { data, error: null }
    } catch (err) {
      if (err instanceof AppError) throw err
      return errorDeRed(err)
    }
  }
}

// ── Administración de credenciales (las credenciales del personal en Django) ────────

const auth = {
  admin: {
    /**
     * Crea la credencial en Django. Equivale a la administración de credenciales (createUser):
     * devuelve { data: { user: { id } }, error } y NO lanza.
     */
    async createUser(attrs = {}) {
      const res = await llamar('POST', '/auth/users', {
        cuerpo: JSON.stringify({
          email: attrs.email,
          password: attrs.password,
          username: attrs.email?.split('@')[0],
          first_name: attrs.user_metadata?.full_name?.split(' ')[0] || '',
          last_name: attrs.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
        }),
      })

      if (!res.ok) {
        const cuerpo = await res.json().catch(() => ({}))
        return { data: { user: null }, error: { message: cuerpo.error || `Error ${res.status}` } }
      }
      const creado = await res.json()
      return { data: { user: { id: creado.id, email: creado.email, aud: 'authenticated' } }, error: null }
    },

    /** Cambia clave/email/estado. Equivale a updateUserById. */
    async updateUserById(id, attrs = {}) {
      const res = await llamar('PATCH', `/auth/users/${id}`, {
        cuerpo: JSON.stringify(attrs),
      })
      if (!res.ok) {
        const cuerpo = await res.json().catch(() => ({}))
        return { data: { user: null }, error: { message: cuerpo.error || `Error ${res.status}` } }
      }
      return { data: { user: { id } }, error: null }
    },

    async deleteUser(id) {
      const res = await llamar('DELETE', `/auth/users/${id}`)
      if (!res.ok && res.status !== 204) {
        const cuerpo = await res.json().catch(() => ({}))
        return { data: null, error: { message: cuerpo.error || `Error ${res.status}` } }
      }
      return { data: null, error: null }
    },
  },
}

// ── El cliente ──────────────────────────────────────────────────────────────

class DjangoCliente {
  constructor() {
    this.auth = auth
  }

  from(tabla) {
    return new Consulta(tabla)
  }

  rpc(nombre, params) {
    return new RPCCall(nombre, params)
  }
}

const instancia = new DjangoCliente()

/**
 * El mismo `db()` de siempre: la única diferencia con el cliente de datos
 * es de qué lado está la base — ahora todas las consultas pasan por Django.
 */
export function db() {
  if (!config.djangoApiUrl || !config.djangoServicioEmail || !config.djangoServicioClave) {
    throw new AppError('El middleware no tiene configurado su acceso a Django', {
      status: 500,
      hint: 'Define DJANGO_API_URL, DJANGO_SERVICIO_EMAIL y DJANGO_SERVICIO_CLAVE en middleware/.env (el usuario se crea con: python manage.py sincronizar_personal).',
    })
  }
  return instancia
}

