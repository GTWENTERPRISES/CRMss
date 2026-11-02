import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { django } from './djangoClient'
import { modoDemo, sesionDemo } from './demo'
import { personalApi } from './personal'
import { TODO, tienePermiso } from './permisos'
import { cargarParametros } from './instalaciones'
import { limpiarCache } from './cacheLocal'

const AuthContext = createContext({ sesion: null, usuario: null, cargando: true })

/* ── El perfil guardado, para poder arrancar sin señal ───────────────────── */

const CLAVE_PERFIL = 'legajo-cache'

/**
 * Guarda el legajo junto al `auth_id` de quien es.
 *
 * El `auth_id` no es decorativo: es lo que impide que en un teléfono que se
 * presta, el perfil del anterior le pinte la pantalla al siguiente.
 */
function guardarPerfil(fila, authId) {
  try {
    if (!fila || !authId) return
    localStorage.setItem(CLAVE_PERFIL, JSON.stringify({ authId, fila }))
  } catch {
    /* modo privado: se sigue sin caché, que es como estaba antes */
  }
}

function leerPerfil(authId) {
  try {
    if (!authId) return null
    const crudo = localStorage.getItem(CLAVE_PERFIL)
    if (!crudo) return null
    const { authId: de, fila } = JSON.parse(crudo)
    return de === authId ? fila : null
  } catch {
    return null
  }
}

const olvidarPerfil = () => {
  try {
    localStorage.removeItem(CLAVE_PERFIL)
  } catch {
    /* nada que hacer */
  }
}

/**
 * Lee el token guardado en localStorage y construye un objeto de sesión
 * compatible con el formato que espera el resto de la app.
 */
function leerSesionGuardada() {
  try {
    const token = localStorage.getItem('django_access_token')
    const refresh = localStorage.getItem('django_refresh_token')
    if (!token) return null
    // Decodificar payload del JWT
    const payload = JSON.parse(atob(token.split('.')[1]))
    // Verificar que no esté expirado
    if (payload.exp && payload.exp * 1000 < Date.now()) return null
    return {
      access_token: token,
      refresh_token: refresh,
      user: {
        id: String(payload.user_id),
        email: payload.email || '',
      },
    }
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [sesion, setSesion] = useState(null)
  const [cargando, setCargando] = useState(true)
  // El legajo: quién es y qué puede.
  const [perfil, setPerfil] = useState(null)
  const [cargandoPerfil, setCargandoPerfil] = useState(true)
  const [errorPerfil, setErrorPerfil] = useState(null)

  useEffect(() => {
    // En modo demo no hay backend: se entra con una sesión falsa.
    if (modoDemo) {
      setSesion(sesionDemo)
      setCargando(false)
      return
    }

    // ── Leer la sesión guardada en localStorage (token Django) ────────────
    // Con el access token vencido pero el refresh vigente (volver al otro día,
    // recargar después de una hora) se renueva en vez de mandar al login.
    let vigente = true
    ;(async () => {
      let sesionGuardada = leerSesionGuardada()
      if (!sesionGuardada && localStorage.getItem('django_refresh_token')) {
        await django.auth.tokenVigente()
        sesionGuardada = leerSesionGuardada()
      }
      if (!vigente) return
      if (sesionGuardada) setSesion(sesionGuardada)
      setCargando(false)
    })()

    // Una consulta que no pudo renovar el token avisa: la sesión terminó de
    // verdad (refresh vencido o revocado) y hay que volver a entrar.
    const alVencer = () => {
      setSesion(null)
      olvidarPerfil()
      limpiarCache()
    }
    window.addEventListener('django:sesion-vencida', alVencer)

    // ── Mantener el token al día aunque no haya consultas ────────────────
    // Cada consulta ya lo renueva sola si hace falta; esto solo actualiza el
    // token que guarda la sesión. Un error de red NO cierra la sesión: el
    // técnico sin señal no tiene que volver a entrar al recuperarla. La sesión
    // termina solo con 'django:sesion-vencida' (refresh vencido o revocado).
    const intervalo = setInterval(async () => {
      const token = await django.auth.tokenVigente()
      if (token) setSesion((prev) => (prev && prev.access_token !== token ? { ...prev, access_token: token } : prev))
    }, 10 * 60 * 1000)

    return () => {
      vigente = false
      clearInterval(intervalo)
      window.removeEventListener('django:sesion-vencida', alVencer)
    }
  }, [])

  const recargarPerfil = useCallback(async () => {
    if (!sesion) {
      setPerfil(null)
      setErrorPerfil(null)
      setCargandoPerfil(false)
      return null
    }
    setCargandoPerfil(true)
    try {
      const fila = await personalApi.yo()
      setPerfil(fila)
      setErrorPerfil(null)
      guardarPerfil(fila, sesion.user?.id)
      return fila
    } catch (err) {
      console.warn('No se pudo leer el legajo del usuario:', err)

      /**
       * Plan B: el último perfil conocido.
       *
       * Sin esto, el técnico que abre la app en una zona rural ve una pantalla
       * en blanco. El perfil guardado NO relaja ninguna seguridad: cada consulta
       * la sigue filtrando el backend.
       */
      const guardado = leerPerfil(sesion.user?.id)
      if (guardado) {
        setPerfil(guardado)
        setErrorPerfil(null)
        return guardado
      }

      setPerfil(null)
      setErrorPerfil(err)
      return null
    } finally {
      setCargandoPerfil(false)
    }
  }, [sesion])

  useEffect(() => {
    let vivo = true
    recargarPerfil().then((fila) => {
      if (vivo && fila) personalApi.marcarAcceso()
      if (vivo && fila) cargarParametros()
    })
    return () => {
      vivo = false
    }
  }, [recargarPerfil])

  const cerrarSesion = async () => {
    olvidarPerfil()
    limpiarCache()
    if (modoDemo) {
      setSesion(null)
      return
    }
    await django.auth.signOut()
    setSesion(null)
  }

  const entrarDemo = () => setSesion(sesionDemo)

  /**
   * ¿Puede hacer esto?
   *
   * Devuelve false mientras carga el perfil (evita parpadeo de menú),
   * false si hubo error (no decidir a ciegas), y evalúa permisos cuando ya hay datos.
   */
  const puede = useCallback(
    (clave) => {
      if (modoDemo) return true
      if (cargandoPerfil) return false
      if (errorPerfil) return false
      if (!perfil) return true
      return tienePermiso(perfil, clave)
    },
    [perfil, cargandoPerfil, errorPerfil],
  )

  return (
    <AuthContext.Provider
      value={{
        sesion,
        usuario: sesion?.user ?? null,
        perfil,
        rol: perfil?.rol ?? null,
        esSuperAdmin: perfil?.rol === 'super_admin' || perfil?.permisos?.includes(TODO) === true,
        puede,
        recargarPerfil,
        cargando,
        cargandoPerfil,
        errorPerfil,
        cerrarSesion,
        entrarDemo,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

/**
 * Atajo para las pantallas que solo necesitan preguntar por un permiso.
 */
export const usePermisos = () => {
  const { puede, perfil, rol, esSuperAdmin, cargandoPerfil, errorPerfil } =
    useContext(AuthContext)
  return { puede, perfil, rol, esSuperAdmin, cargandoPerfil, errorPerfil }
}
