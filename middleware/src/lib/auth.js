import { config } from '../config.js'
import { AppError } from './errors.js'

/**
 * Quién puede llamar a esta API: Django, y nada más.
 *
 * El navegador ya no golpea acá — entra por el proxy de Django
 * (/api/v1/red/...), que valida la sesión del personal y agrega dos cosas:
 *
 *   X-Clave-Interna  → el secreto compartido con Django (backend/.env y
 *                      middleware/.env, CLAVE_INTERNA_MW).
 *   X-Usuario-Id     → quién tiene la sesión, para que la auditoría siga
 *                      diciendo quién hizo qué.
 *
 * Sin la clave configurada no se exige nada (desarrollo directo al :4000).
 * Con ella, un pedido sin clave o con la clave equivocada no entra: este
 * proceso guarda las credenciales descifradas de todos los equipos.
 */
export async function requireAuth(req, _res, next) {
  if (!config.claveInterna) return next()

  const clave = req.headers['x-clave-interna']
  if (clave !== config.claveInterna) {
    return next(
      new AppError('Esta API solo acepta llamadas del backend Django', {
        status: 401,
        hint: 'El navegador no habla con el middleware: va por http://TU-DJANGO:8000/api/v1/red/... Verifica que CLAVE_INTERNA_MW coincida en backend/new/.env y middleware/.env.',
      }),
    )
  }

  const id = req.headers['x-usuario-id']
  req.usuario = id
    ? { id, email: req.headers['x-usuario-email'] || null, aud: 'authenticated' }
    : null

  next()
}
