/**
 * Cliente Django REST compatible con la API de Supabase.
 * Permite migrar de Supabase a Django sin cambiar el código del frontend.
 * 
 * Uso:
 * import { django } from './djangoClient'
 * 
 * // Reemplazar:
 * // const { data } = await supabase.from('clientes').select('*')
 * // Por:
 * const { data } = await django.from('clientes').select('*')
 */

const API_URL = process.env.NEXT_PUBLIC_DJANGO_API_URL || 'http://localhost:8000/api/v1'

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
   */
  select(columns = '*') {
    this.params.set('select', columns)
    return this
  }

  /**
   * Filtros tipo Supabase
   * Ej: .eq('estado', 'activo')
   *     .gt('edad', 18)
   *     .like('nombre', '%Juan%')
   */
  eq(column, value) {
    this.params.set(column, `eq.${value}`)
    return this
  }

  neq(column, value) {
    this.params.set(column, `neq.${value}`)
    return this
  }

  gt(column, value) {
    this.params.set(column, `gt.${value}`)
    return this
  }

  gte(column, value) {
    this.params.set(column, `gte.${value}`)
    return this
  }

  lt(column, value) {
    this.params.set(column, `lt.${value}`)
    return this
  }

  lte(column, value) {
    this.params.set(column, `lte.${value}`)
    return this
  }

  like(column, pattern) {
    this.params.set(column, `like.${pattern}`)
    return this
  }

  ilike(column, pattern) {
    this.params.set(column, `ilike.${pattern}`)
    return this
  }

  is(column, value) {
    this.params.set(column, `is.${value}`)
    return this
  }

  in(column, values) {
    this.params.set(column, `in.(${values.join(',')})`)
    return this
  }

  /**
   * Ordenamiento
   * Ej: .order('created_at', { ascending: false })
   */
  order(column, { ascending = true } = {}) {
    const direction = ascending ? 'asc' : 'desc'
    this.params.set('order', `${column}.${direction}`)
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
    return this
  }

  /**
   * UPDATE
   * Ej: .update({ estado: 'activo' }).eq('id', 123)
   */
  update(data) {
    this.method = 'PATCH'
    this.body = JSON.stringify(data)
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
    return this
  }

  /**
   * SINGLE - Retorna un solo registro en vez de array
   * Ej: .select('*').eq('id', 123).single()
   */
  single() {
    this._single = true
    return this
  }

  /**
   * Ejecuta la query y retorna { data, error }
   */
  async execute() {
    try {
      let url = `${API_URL}/tables/${this.table}`
      
      // Si es UPDATE o DELETE con filtro .eq('id', X), agregar /<id> a la URL
      const idParam = this.params.get('id')
      if ((this.method === 'PATCH' || this.method === 'DELETE') && idParam) {
        const id = idParam.replace('eq.', '')
        url = `${url}/${id}`
        this.params.delete('id') // No enviar en query string
      }
      
      // Agregar query params
      const queryString = this.params.toString()
      if (queryString) {
        url = `${url}?${queryString}`
      }
      
      const response = await fetch(url, {
        method: this.method,
        headers: this.headers,
        body: this.body,
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        return {
          data: null,
          error: {
            message: errorData.error || response.statusText,
            code: response.status,
            details: errorData,
          },
        }
      }
      
      // DELETE retorna 204 sin body
      if (response.status === 204) {
        return { data: null, error: null }
      }
      
      const data = await response.json()
      
      // Si se pidió .single(), retornar el primer elemento
      if (this._single && Array.isArray(data)) {
        return { data: data[0] || null, error: null }
      }
      
      return { data, error: null }
    } catch (err) {
      return {
        data: null,
        error: {
          message: err.message,
          code: 'NETWORK_ERROR',
          details: err,
        },
      }
    }
  }

  // Alias para compatibilidad
  async then(resolve, reject) {
    const result = await this.execute()
    if (result.error && reject) {
      reject(result.error)
    } else {
      resolve(result)
    }
    return result
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
    try {
      const response = await fetch(`${API_URL}/rpc/${functionName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.token && { Authorization: `Bearer ${this.token}` }),
        },
        body: JSON.stringify(params),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        return {
          data: null,
          error: {
            message: errorData.error || response.statusText,
            code: response.status,
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
  async upload(path, file) {
    if (!this.bucket) {
      throw new Error('Must call .from(bucket) first')
    }
    
    const formData = new FormData()
    formData.append('file', file)
    formData.append('path', path)
    
    try {
      const response = await fetch(`${API_URL}/storage/${this.bucket}`, {
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
      const response = await fetch(`${API_URL}/storage/${this.bucket}/${path}`, {
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
        const response = await fetch(`${API_URL}/storage/${this.bucket}/${path}`, {
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
      const response = await fetch(
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
      const response = await fetch(`${API_URL.replace('/v1', '')}/auth/token/`, {
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
   * Obtiene el usuario actual
   */
  async getUser() {
    const token = this.token || (typeof window !== 'undefined' ? localStorage.getItem('django_access_token') : null)
    
    if (!token) {
      return { data: { user: null }, error: null }
    }
    
    try {
      // Decodificar JWT para obtener user_id
      const payload = JSON.parse(atob(token.split('.')[1]))
      
      // TODO: Llamar a endpoint /api/v1/auth/me para obtener datos completos
      this.user = {
        id: payload.user_id,
        email: payload.email || '',
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
   * Cierra sesión
   */
  async signOut() {
    this.token = null
    this.user = null
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('django_access_token')
      localStorage.removeItem('django_refresh_token')
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
      const response = await fetch(`${API_URL.replace('/v1', '')}/auth/token/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      })
      
      if (!response.ok) {
        return {
          data: { session: null, user: null },
          error: { message: 'Failed to refresh token' },
        }
      }
      
      const data = await response.json()
      this.token = data.access
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('django_access_token', data.access)
      }
      
      const user = await this.getUser()
      
      return {
        data: {
          session: {
            access_token: data.access,
            refresh_token: refreshToken,
          },
          user: user.data,
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

// Validación de configuración (similar a supabaseClient.js)
const djangoApiUrl = process.env.NEXT_PUBLIC_DJANGO_API_URL
const esFaltante = !djangoApiUrl || djangoApiUrl.includes('localhost') && djangoApiUrl.includes('8000')

export const djangoConfigurado = !!djangoApiUrl && !esFaltante

if (!djangoConfigurado && typeof window !== 'undefined') {
  console.warn(
    'NEXT_PUBLIC_DJANGO_API_URL no está configurado. Completá el .env con la URL del backend Django.',
  )
}
