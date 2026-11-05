/**
 * Cliente Django REST compatible con la API que usa el frente.
 * Permite migrar de la base a Django sin cambiar el código del frontend.
 * 
 * Uso:
 * import { django } from './djangoClient'
 * 
 * // Reemplazar:
 * // const { data } = await django.from('clientes').select('*')
 * // Por:
 * const { data } = await django.from('clientes').select('*')
 */

import { errorDeValidacion, validarArgumentos, validarDatos } from './validacion/index.js'
import { avisarErrores } from './validacion/enVivo.js'
import { fetchConReintento } from './reintento.js'

/** El error para la pantalla, y cada campo en pantalla marcado con el suyo. */
function rechazar(errores) {
  const error = errorDeValidacion(errores)
  avisarErrores(error.campos)
  return error
}

const API_URL = process.env.NEXT_PUBLIC_DJANGO_API_URL || 'http://localhost:8000/api/v1'

/** True si el JWT vence en menos de un minuto (o no se puede leer). */
function venceEnBreve(token) {
  try {
    const { exp } = JSON.parse(atob(token.split('.')[1]))
    return !exp || exp * 1000 - Date.now() < 60 * 1000
  } catch {
    return true
  }
}

/**
 * fetch a Django con el token vigente.
 *
 * El access token dura una hora. Antes se renovaba con un temporizador de 50
 * minutos contados desde que se abrió la página: si se recargaba a mitad de
 * camino, o la notebook se suspendía, el token vencía antes y todas las
 * consultas fallaban con 401 hasta volver a entrar. Ahora se renueva justo
 * antes de usarlo, y si igual llega un 401 se renueva y se reintenta una vez.
 */
async function fetchConSesion(url, opciones = {}) {
  const enviar = async () => {
    const token = await django.auth.tokenVigente()
    const headers = { ...(opciones.headers || {}) }
    delete headers.Authorization
    delete headers.authorization
    if (token) headers.Authorization = `Bearer ${token}`
    return fetchConReintento(url, { ...opciones, headers })
  }
  let respuesta = await enviar()
  if (respuesta.status === 401 && typeof window !== 'undefined' && localStorage.getItem('django_refresh_token')) {
    localStorage.removeItem('django_access_token')
    respuesta = await enviar()
    if (respuesta.status === 401) window.dispatchEvent(new Event('django:sesion-vencida'))
  }
  return respuesta
}

class DjangoQueryBuilder {
  constructor(table, token) {
    this.table = table
    this.token = token
    this.params = new URLSearchParams()
    this.method = 'GET'
    this.body = null
    this.headers = {
      'Content-Type': 'application/json',
    }
    
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`
    }
  }

  /**
   * SELECT columns
   * Ej: .select('*') o .select('id,nombre,email')
   *     .select('*', { count: 'exact', head: true }) → solo el total (count)
   */
  select(columns = '*', { count, head } = {}) {
    this.params.set('select', columns)
    if (count === 'exact' || count === true) this.params.set('count', 'exact')
    if (head) this.params.set('head', 'true')
    return this
  }

  /**
   * Filtros tipo la base
   * Ej: .eq('estado', 'activo')
   *     .gt('edad', 18)
   *     .like('nombre', '%Juan%')
   */
  eq(column, value) {
    this.params.append(column, `eq.${value}`)
    return this
  }

  neq(column, value) {
    this.params.append(column, `neq.${value}`)
    return this
  }

  not(column, operator, value) {
    this.params.append(column, `not.${operator}.${value}`)
    return this
  }

  gt(column, value) {
    this.params.append(column, `gt.${value}`)
    return this
  }

  gte(column, value) {
    this.params.append(column, `gte.${value}`)
    return this
  }

  lt(column, value) {
    this.params.append(column, `lt.${value}`)
    return this
  }

  lte(column, value) {
    this.params.append(column, `lte.${value}`)
    return this
  }

  like(column, pattern) {
    this.params.append(column, `like.${pattern}`)
    return this
  }

  ilike(column, pattern) {
    this.params.append(column, `ilike.${pattern}`)
    return this
  }

  is(column, value) {
    this.params.append(column, `is.${value}`)
    return this
  }

  in(column, values) {
    this.params.append(column, `in.(${values.join(',')})`)
    return this
  }

  /**
   * Condiciones alternativas, como en el cliente PostgREST:
   * .or('nombre.ilike.%ana%,identificacion.ilike.%ana%')
   */
  or(condiciones) {
    this.params.append('or', `(${condiciones})`)
    return this
  }

  /** .filter('estado', 'in', '(a,b)') — el operador va crudo, como en PostgREST. */
  filter(column, operator, value) {
    this.params.append(column, `${operator}.${value}`)
    return this
  }

  /** .match({ estado: 'activo', zona: 'norte' }) → un .eq() por clave. */
  match(condiciones) {
    for (const [column, value] of Object.entries(condiciones)) this.eq(column, value)
    return this
  }

  /** Cancela la petición con un AbortController. */
  abortSignal(signal) {
    this.signal = signal
    return this
  }

  /**
   * Ordenamiento. Se puede encadenar: .order('a').order('b', { ascending: false })
   */
  order(column, { ascending = true } = {}) {
    const direction = ascending ? 'asc' : 'desc'
    this.params.append('order', `${column}.${direction}`)
    return this
  }

  /**
   * Paginación
   * Ej: .limit(10).range(0, 9)
   */
  limit(count) {
    this.params.set('limit', count)
    return this
  }

  range(from, to) {
    this.params.set('offset', from)
    this.params.set('limit', to - from + 1)
    return this
  }

  /**
   * INSERT
   * Ej: .insert({ nombre: 'Juan', email: 'juan@example.com' })
   */
  insert(data) {
    this.method = 'POST'
    this.body = JSON.stringify(data)
    this._aValidar = { datos: data, modo: 'crear' }
    return this
  }

  /**
   * UPDATE
   * Ej: .update({ estado: 'activo' }).eq('id', 123)
   */
  update(data) {
    this.method = 'PATCH'
    this.body = JSON.stringify(data)
    this._aValidar = { datos: data, modo: 'editar' }
    // Necesitamos el ID para PATCH, se extrae del filtro .eq('id', ...)
    return this
  }

  /**
   * DELETE
   * Ej: .delete().eq('id', 123)
   */
  delete() {
    this.method = 'DELETE'
    return this
  }

  /**
   * UPSERT (INSERT con conflicto → UPDATE)
   * Ej: .upsert({ id: 1, nombre: 'Juan' })
   */
  upsert(data, { onConflict = 'id' } = {}) {
    // Django no tiene UPSERT nativo, simular con try INSERT → catch UPDATE
    this.method = 'POST'
    this.body = JSON.stringify({ ...data, _upsert: true, _conflict: onConflict })
    this._aValidar = { datos: data, modo: 'crear', extra: { _upsert: true, _conflict: onConflict } }
    return this
  }

  /**
   * SINGLE - Retorna un solo registro en vez de array
   * Ej: .select('*').eq('id', 123).single()
   */
  single() {
    this._single = 'exacto'
    return this
  }

  /**
   * Como single(), pero cero filas no es un error: devuelve data = null.
   * Ej: .select('*').eq('identificacion', ced).maybeSingle()
   */
  maybeSingle() {
    this._single = 'opcional'
    return this
  }

  /**
   * Ejecuta la query y retorna { data, error }
   */
  async execute() {
    // Zod antes de salir: lo que no cumple no se manda (ver lib/validacion).
    if (this._aValidar) {
      const { datos, modo, extra } = this._aValidar
      const r = validarDatos(this.table, datos, modo)
      if (!r.ok) return { data: null, error: rechazar(r.errores), status: 0 }
      this.body = JSON.stringify(extra ? { ...r.datos, ...extra } : r.datos)
    }
    try {
      let url = `${API_URL}/tables/${this.table}`
      
      // Si es UPDATE o DELETE con filtro .eq('id', X), agregar /<id> a la URL
      // Sólo con un único `id=eq.X`: un `in.(...)` o varios filtros por id van
      // por la colección, que el backend sabe filtrar.
      const idParam = this.params.getAll('id').length === 1 ? this.params.get('id') : null
      if ((this.method === 'PATCH' || this.method === 'DELETE') && idParam?.startsWith('eq.')) {
        const id = idParam.replace('eq.', '')
        url = `${url}/${id}`
        this.params.delete('id') // No enviar en query string
      }
      
      // Agregar query params
      const queryString = this.params.toString()
      if (queryString) {
        url = `${url}?${queryString}`
      }
      
      const response = await fetchConSesion(url, {
        method: this.method,
        headers: this.headers,
        body: this.body,
        signal: this.signal,
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        return {
          data: null,
          error: {
            message: errorData.error || errorData.detail || errorData.message || response.statusText,
            hint: errorData.hint,
            // El código de Postgres cuando el backend lo informa (23505 = ya
            // existe...), que es lo que las pantallas comparan; si no, el HTTP.
            code: errorData.code || String(response.status),
            status: response.status,
            details: errorData,
          },
          status: response.status,
        }
      }
      
      // DELETE retorna 204 sin body
      if (response.status === 204) {
        return { data: null, error: null }
      }
      
      // El total, cuando se pidió con { count: 'exact' }
      const total = response.headers.get('X-Total-Count')
      const count = total !== null ? Number(total) : null
      
      const data = await response.json()
      
      // .single() exige exactamente una fila; .maybeSingle() acepta cero.
      // Los códigos son los de PostgREST, que es lo que el código ya compara.
      if (this._single && Array.isArray(data)) {
        if (data.length > 1 || (data.length === 0 && this._single === 'exacto')) {
          return {
            data: null,
            count,
            error: {
              message: data.length === 0
                ? 'No se encontró el registro'
                : 'Se esperaba un solo registro y vinieron varios',
              code: 'PGRST116',
              details: { filas: data.length },
            },
          }
        }
        return { data: data[0] ?? null, error: null, count }
      }
      
      return { data, error: null, count }
    } catch (err) {
      return {
        data: null,
        error: {
          message: err.message,
          code: err.name === 'AbortError' ? 'ABORTED' : 'NETWORK_ERROR',
          details: err,
        },
      }
    }
  }

  /**
   * Hace al builder "await-able". Como el cliente PostgREST, NUNCA rechaza por un error
   * de la API: lo devuelve en `error`. Rechazar hacía que
   * `const { data, error } = await ...` lanzara una excepción, y el manejo de
   * `error` de cada pantalla quedaba sin ejecutarse.
   */
  then(resolve, reject) {
    return this.execute().then(resolve, reject)
  }
}

class DjangoRPC {
  constructor(token) {
    this.token = token
  }

  /**
   * Ejecuta una función RPC (stored procedure)
   * Ej: django.rpc('clientes_estadisticas_basicas')
   *     django.rpc('racha_de_ventas', { empleado_id: 5 })
   */
  async call(functionName, params = {}) {
    // Mismo criterio que las tablas: con un argumento inválido no sale nada.
    const validacion = validarArgumentos(functionName, params)
    if (!validacion.ok) return { data: null, error: rechazar(validacion.errores) }
    params = validacion.datos ?? {}
    try {
      const response = await fetchConSesion(`${API_URL}/rpc/${functionName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.token && { Authorization: `Bearer ${this.token}` }),
        },
        body: JSON.stringify(params),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        // Como el cliente PostgREST: el mensaje del RAISE de la función y su código
        // (P0001, 23505...), que es lo que las pantallas muestran y comparan.
        return {
          data: null,
          error: {
            message: errorData.message || errorData.error || response.statusText,
            code: errorData.code || String(response.status),
            details: errorData.details ?? null,
            hint: errorData.hint ?? null,
            status: response.status,
          },
        }
      }
      
      const data = await response.json()
      return { data, error: null }
    } catch (err) {
      return {
        data: null,
        error: {
          message: err.message,
          code: 'NETWORK_ERROR',
        },
      }
    }
  }
}

class DjangoStorage {
  constructor(token) {
    this.token = token
    this.bucket = null
  }

  /**
   * Selecciona un bucket
   * Ej: django.storage.from('avatars')
   */
  from(bucket) {
    this.bucket = bucket
    return this
  }

  /**
   * Sube un archivo
   * Ej: .upload('users/avatar.jpg', file)
   */
  async upload(path, file, opciones = {}) {
    if (!this.bucket) {
      throw new Error('Must call .from(bucket) first')
    }
    
    const formData = new FormData()
    formData.append('file', file)
    formData.append('path', path)
    if (opciones.upsert) formData.append('upsert', 'true')
    
    try {
      const response = await fetchConSesion(`${API_URL}/storage/${this.bucket}`, {
        method: 'POST',
        headers: {
          ...(this.token && { Authorization: `Bearer ${this.token}` }),
        },
        body: formData,
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        return {
          data: null,
          error: {
            message: errorData.error || response.statusText,
          },
        }
      }
      
      const data = await response.json()
      return { data, error: null }
    } catch (err) {
      return {
        data: null,
        error: { message: err.message },
      }
    }
  }

  /**
   * Descarga un archivo
   * Ej: .download('users/avatar.jpg')
   */
  async download(path) {
    if (!this.bucket) {
      throw new Error('Must call .from(bucket) first')
    }
    
    try {
      const response = await fetchConSesion(`${API_URL}/storage/${this.bucket}/${path}`, {
        headers: {
          ...(this.token && { Authorization: `Bearer ${this.token}` }),
        },
      })
      
      if (!response.ok) {
        return {
          data: null,
          error: {
            message: response.statusText,
          },
        }
      }
      
      const blob = await response.blob()
      return { data: blob, error: null }
    } catch (err) {
      return {
        data: null,
        error: { message: err.message },
      }
    }
  }

  /**
   * Elimina archivos
   * Ej: .remove(['users/avatar.jpg'])
   */
  async remove(paths) {
    if (!this.bucket) {
      throw new Error('Must call .from(bucket) first')
    }
    
    const results = []
    for (const path of paths) {
      try {
        const response = await fetchConSesion(`${API_URL}/storage/${this.bucket}/${path}`, {
          method: 'DELETE',
          headers: {
            ...(this.token && { Authorization: `Bearer ${this.token}` }),
          },
        })
        
        results.push({
          path,
          success: response.ok,
          error: response.ok ? null : response.statusText,
        })
      } catch (err) {
        results.push({
          path,
          success: false,
          error: err.message,
        })
      }
    }
    
    return { data: results, error: null }
  }

  /**
   * Lista archivos en un path
   * Ej: .list('users/')
   */
  async list(path = '') {
    if (!this.bucket) {
      throw new Error('Must call .from(bucket) first')
    }
    
    try {
      const response = await fetchConSesion(
        `${API_URL}/storage/${this.bucket}/list?prefix=${encodeURIComponent(path)}`,
        {
          headers: {
            ...(this.token && { Authorization: `Bearer ${this.token}` }),
          },
        }
      )
      
      if (!response.ok) {
        return {
          data: null,
          error: {
            message: response.statusText,
          },
        }
      }
      
      const data = await response.json()
      return { data, error: null }
    } catch (err) {
      return {
        data: null,
        error: { message: err.message },
      }
    }
  }

  /**
   * URL firmada y temporaria para un archivo privado.
   * Ej: .createSignedUrl('clientes/12/cedula.jpg', 3600)
   *
   * Devuelve `{ data: { signedUrl }, error }`, como el cliente PostgREST. Hace falta
   * porque la descarga pide sesión y un `<img src>` no manda cabeceras: la firma
   * va en la URL y vence sola.
   */
  async createSignedUrl(path, segundos = 3600) {
    if (!this.bucket) {
      throw new Error('Must call .from(bucket) first')
    }

    const parametros = new URLSearchParams({ path, segundos: String(segundos) })

    try {
      const response = await fetchConSesion(
        `${API_URL}/storage/${this.bucket}/signed-url?${parametros.toString()}`,
        {
          headers: {
            ...(this.token && { Authorization: `Bearer ${this.token}` }),
          },
        }
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        return {
          data: { signedUrl: null },
          error: { message: errorData.error || response.statusText },
        }
      }

      const data = await response.json()
      return { data: { signedUrl: data.signedUrl }, error: null }
    } catch (err) {
      return {
        data: { signedUrl: null },
        error: { message: err.message },
      }
    }
  }

  /**
   * Obtiene URL pública de un archivo
   * Ej: .getPublicUrl('users/avatar.jpg')
   */
  getPublicUrl(path) {
    if (!this.bucket) {
      throw new Error('Must call .from(bucket) first')
    }
    
    return {
      data: {
        publicURL: `${API_URL}/storage/${this.bucket}/public/${path}`,
      },
    }
  }
}

class DjangoAuth {
  constructor() {
    this.token = null
    this.user = null
  }

  /**
   * Login con email y contraseña
   * Ej: django.auth.signInWithPassword({ email, password })
   */
  async signInWithPassword({ email, password }) {
    try {
      const response = await fetch(`${API_URL}/auth/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        return {
          data: { user: null, session: null },
          error: {
            message: errorData.detail || 'Invalid credentials',
          },
        }
      }
      
      const data = await response.json()
      this.token = data.access
      
      // Guardar token en localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('django_access_token', data.access)
        localStorage.setItem('django_refresh_token', data.refresh)
      }
      
      // Obtener datos del usuario (decodificar JWT o llamar a endpoint /me)
      const user = await this.getUser()
      
      return {
        data: {
          user: user.data,
          session: {
            access_token: data.access,
            refresh_token: data.refresh,
          },
        },
        error: null,
      }
    } catch (err) {
      return {
        data: { user: null, session: null },
        error: { message: err.message },
      }
    }
  }

  /**
   * Recuperación de contraseña con un código al correo (rutas públicas).
   * Devuelven { data, error } con el `error`/`hint` que manda Django.
   */
  async _postPublico(ruta, cuerpo) {
    try {
      const response = await fetch(`${API_URL}${ruta}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cuerpo),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        const message = response.status === 429
          ? 'Demasiados intentos. Espera un rato antes de volver a probar.'
          : data.error || data.detail || 'No se pudo completar el pedido'
        return { data: null, error: { message, hint: data.hint } }
      }
      return { data, error: null }
    } catch (err) {
      return { data: null, error: { message: 'No hay conexión con el servidor', hint: err.message } }
    }
  }

  /** Manda un código de 6 dígitos al correo. Contesta igual exista o no la cuenta. */
  pedirCodigoRecuperacion(email) {
    return this._postPublico('/auth/recuperar', { email })
  }

  /** Verifica el código; si es correcto devuelve { token } para elegir la contraseña nueva. */
  verificarCodigoRecuperacion(email, codigo) {
    return this._postPublico('/auth/recuperar/verificar', { email, codigo })
  }

  /** Guarda la contraseña nueva con el token de verificarCodigoRecuperacion. */
  cambiarClaveConCodigo(token, password) {
    return this._postPublico('/auth/recuperar/cambiar', { token, password })
  }

  /**
   * Cambia la contraseña de quien inició sesión. El servidor comprueba la
   * actual (POST /auth/change-password): no hace falta volver a entrar.
   * Devuelve { error } como el resto del cliente.
   */
  async cambiarMiClave(actual, nueva) {
    const token = await this.tokenVigente()
    if (!token) return { error: { message: 'La sesión venció: vuelve a entrar.' } }
    try {
      const response = await fetchConSesion(`${API_URL}/auth/change-password`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ old_password: actual, new_password: nueva }),
      })
      const datos = await response.json().catch(() => ({}))
      if (response.ok) {
        // Django cortó todas las sesiones (también la de otros equipos) y
        // devolvió un par nuevo para seguir en esta.
        if (datos.access && typeof window !== 'undefined') {
          localStorage.setItem('django_access_token', datos.access)
          if (datos.refresh) localStorage.setItem('django_refresh_token', datos.refresh)
          this.token = datos.access
        }
        return { error: null }
      }
      return { error: { message: datos.error || datos.message || 'No se pudo cambiar la contraseña.', hint: datos.hint } }
    } catch {
      return { error: { message: 'No se pudo contactar al servidor.' } }
    }
  }

  /**
   * Obtiene el usuario actual (llama a /api/v1/auth/me para datos completos)
   */
  async getUser() {
    // Renovado si está por vencer: con el token vencido esto contestaba "Token
    // expirado" aunque el refresh siguiera sirviendo.
    const token = await this.tokenVigente()

    if (!token) {
      return { data: { user: null }, error: null }
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        return { data: { user: null }, error: { message: 'Token expirado' } }
      }

      // Llamar al endpoint /auth/me para obtener datos completos del usuario
      const response = await fetchConSesion(`${API_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        // Fallback: construir usuario básico desde el JWT
        this.user = {
          id: String(payload.user_id),
          email: payload.email || '',
        }
        return { data: { user: this.user }, error: null }
      }

      const userData = await response.json()
      this.user = {
        id: String(userData.id),
        email: userData.email,
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name,
        is_staff: userData.is_staff,
        is_superuser: userData.is_superuser,
      }
      
      return {
        data: { user: this.user },
        error: null,
      }
    } catch (err) {
      return {
        data: { user: null },
        error: { message: err.message },
      }
    }
  }

  /**
   * El access token listo para usar: si vence en menos de un minuto se renueva
   * con el refresh token (uno solo a la vez, aunque lo pidan diez consultas
   * juntas). Null si no hay sesión o ya no se puede renovar.
   */
  async tokenVigente() {
    const actual = typeof window !== 'undefined' ? localStorage.getItem('django_access_token') : this.token
    if (actual && !venceEnBreve(actual)) {
      this.token = actual
      return actual
    }
    if (typeof window === 'undefined' || !localStorage.getItem('django_refresh_token')) return actual
    this._renovando ??= this.refreshSession().finally(() => {
      this._renovando = null
    })
    const { data, error } = await this._renovando
    return error ? null : data.session.access_token
  }

  /**
   * Obtiene la sesión actual (renovando el token si hace falta)
   * Compatible con la API que usa el frente
   */
  async getSession() {
    let accessToken = null
    let refreshToken = null
    if (typeof window !== 'undefined') {
      accessToken = await this.tokenVigente()
      refreshToken = localStorage.getItem('django_refresh_token')
    } else {
      accessToken = this.token
    }

    if (!accessToken) {
      return { data: { session: null }, error: null }
    }

    // Quién es, leído del JWT (como la base, la sesión trae `user`). Sin
    // esto `personalApi.yo()` no encontraba el id y el legajo no cargaba
    // nunca: Personal decía "tu sesión no tiene legajo" y no dejaba guardar.
    let user = null
    try {
      const payload = JSON.parse(atob(accessToken.split('.')[1]))
      user = { id: String(payload.user_id), email: payload.email || '' }
    } catch {
      user = null
    }

    return {
      data: {
        session: {
          access_token: accessToken,
          refresh_token: refreshToken,
          user,
        },
      },
      error: null,
    }
  }

  /**
   * Cierra sesión
   */
  async signOut() {
    this.token = null
    this.user = null

    if (typeof window !== 'undefined') {
      const refresh = localStorage.getItem('django_refresh_token')
      localStorage.removeItem('django_access_token')
      localStorage.removeItem('django_refresh_token')
      // Que el refresh quede revocado en el servidor: borrarlo de acá no
      // alcanza si alguien ya lo había copiado. Si Django no contesta, la
      // sesión igual se cierra en este equipo.
      if (refresh) {
        await fetch(`${API_URL}/auth/token/blacklist/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh }),
        }).catch(() => {})
      }
    }

    return { error: null }
  }

  /**
   * Refresca el token de acceso
   */
  async refreshSession() {
    const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('django_refresh_token') : null
    
    if (!refreshToken) {
      return {
        data: { session: null, user: null },
        error: { message: 'No refresh token' },
      }
    }
    
    try {
      const response = await fetch(`${API_URL}/auth/token/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      })
      
      if (!response.ok) {
        // Otra pestaña renovó primero: Django rota el refresh y el viejo queda
        // en la lista negra. El par nuevo ya está guardado; se usa ese en vez de
        // cerrar la sesión de todas las pestañas.
        const otro = typeof window !== 'undefined' ? localStorage.getItem('django_refresh_token') : null
        const acceso = typeof window !== 'undefined' ? localStorage.getItem('django_access_token') : null
        if (otro && otro !== refreshToken && acceso && !venceEnBreve(acceso)) {
          this.token = acceso
          return { data: { session: { access_token: acceso, refresh_token: otro } }, error: null }
        }
        return {
          data: { session: null, user: null },
          error: { message: 'Failed to refresh token' },
        }
      }
      
      const data = await response.json()
      this.token = data.access
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('django_access_token', data.access)
        // Con ROTATE_REFRESH_TOKENS Django manda uno nuevo: guardarlo es lo que
        // hace que la sesión dure 7 días desde el último uso y no desde el login.
        if (data.refresh) localStorage.setItem('django_refresh_token', data.refresh)
      }
      
      return {
        data: {
          session: {
            access_token: data.access,
            refresh_token: data.refresh || refreshToken,
          },
        },
        error: null,
      }
    } catch (err) {
      return {
        data: { session: null, user: null },
        error: { message: err.message },
      }
    }
  }
}

class DjangoClient {
  constructor() {
    this.auth = new DjangoAuth()
    
    // Cargar token guardado
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('django_access_token')
      if (token) {
        this.auth.token = token
      }
    }
  }

  /**
   * Inicia una query sobre una tabla
   * Ej: django.from('clientes')
   */
  from(table) {
    return new DjangoQueryBuilder(table, this.auth.token)
  }

  /**
   * Ejecuta una función RPC
   * Ej: django.rpc('clientes_estadisticas_basicas')
   */
  rpc(functionName, params) {
    const rpc = new DjangoRPC(this.auth.token)
    return rpc.call(functionName, params)
  }

  /**
   * Storage API
   */
  get storage() {
    return new DjangoStorage(this.auth.token)
  }
}

// Instancia singleton
export const django = new DjangoClient()

// Validación de configuración
const djangoApiUrl = process.env.NEXT_PUBLIC_DJANGO_API_URL
const esFaltante = !djangoApiUrl || djangoApiUrl.includes('ejemplo.com')

export const djangoConfigurado = !!djangoApiUrl && !esFaltante

if (!djangoConfigurado && typeof window !== 'undefined') {
  console.warn(
    'NEXT_PUBLIC_DJANGO_API_URL no está configurado. Completa el .env con la URL del backend Django.',
  )
}

