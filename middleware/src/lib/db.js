import { AppError, notFound } from './errors.js'
import { decrypt } from './crypto.js'
import { db as clienteDjango } from './djangoDb.js'

/**
 * El acceso a datos del middleware.
 *
 * Era un cliente con permisos de administrador; ahora es el cliente de Django
 * (djangoDb.js), con la MISMA interfaz: los servicios siguen escribiendo
 * db().from('olts').select()… y no cambian una línea. Lo que cambió es el
 * dueño de la base: Django es el único backend, y este proceso habla con sus
 * APIs con su usuario de servicio.
 */
export function db() {
  return clienteDjango()
}

/** Carga una OLT y devuelve sus credenciales ya descifradas. */
export async function cargarOlt(oltId) {
  const { data, error } = await db().from('olts').select('*').eq('id', oltId).maybeSingle()
  if (error) throw new AppError(`No se pudo leer la OLT: ${error.message}`, { status: 502 })
  if (!data) throw notFound(`No existe una OLT con id ${oltId}`)

  return {
    ...data,
    password: decrypt(data.password_encrypted),
    enablePassword: data.enable_password_encrypted
      ? decrypt(data.enable_password_encrypted)
      : decrypt(data.password_encrypted),
  }
}

/** Carga un router MikroTik y devuelve sus credenciales ya descifradas. */
export async function cargarRouter(routerId) {
  const { data, error } = await db()
    .from('routers_mikrotik')
    .select('*')
    .eq('id', routerId)
    .maybeSingle()
  if (error) throw new AppError(`No se pudo leer el router: ${error.message}`, { status: 502 })
  if (!data) throw notFound(`No existe un router MikroTik con id ${routerId}`)

  return conClave(data)
}

/**
 * Una fila de `routers_mikrotik`, lista para conectarse.
 *
 * En la base la contraseña está cifrada. Leer la fila directo y pasársela al
 * driver manda la cifrada, y el MikroTik contesta "Username or password is
 * invalid" — un error que hace buscar el problema en el router, cuando el
 * router está bien. Pasó con la medición de consumo y con las herramientas de
 * la ficha. Todo lo que lea routers por su cuenta pasa por acá.
 */
export function conClave(fila) {
  return { ...fila, password: decrypt(fila.password_encrypted) }
}
