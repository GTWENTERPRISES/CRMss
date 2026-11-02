import { useState } from 'react'
import { Navigate } from '@/lib/nextNavigation'
import { KeyRound, LogIn, Mail, ShieldCheck } from 'lucide-react'
import { django, djangoConfigurado } from '../lib/djangoClient'
import { modoDemo } from '../lib/demo'
import { useAuth } from '../lib/AuthContext'
import { Button, ErrorBanner, Field, Input, Aviso, Cargando } from '../components/ui'
import AvisoLicencia from '../components/AvisoLicencia'
import { useLicencia } from '../lib/useLicencia'
import { useMarca } from '../lib/useMarca'

export default function Login() {
  const { sesion, cargando, entrarDemo } = useAuth()
  // La licencia se pregunta acá y no adentro: si venció, no tiene sentido
  // dejar entrar para mostrar el mismo cartel en cada pantalla.
  const { licencia, vencida } = useLicencia()
  const marca = useMarca()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [enviando, setEnviando] = useState(false)
  /**
   * El paso en que está la pantalla:
   *   entrar → pedir (correo) → codigo (los 6 dígitos) → nueva (contraseña) → entrar
   */
  const [paso, setPaso] = useState('entrar')
  const [codigo, setCodigo] = useState('')
  const [token, setToken] = useState(null)
  const [nueva, setNueva] = useState('')
  const [repetida, setRepetida] = useState('')
  const [aviso, setAviso] = useState(null)

  if (cargando) return <Cargando texto="Verificando sesión…" />
  if (sesion) return <Navigate to="/" replace />

  function irA(siguiente) {
    setPaso(siguiente)
    setError(null)
    setAviso(null)
  }

  /** Paso 1: manda el código al correo. También sirve para reenviarlo. */
  async function pedirCodigo(e) {
    e?.preventDefault()
    setError(null)
    setEnviando(true)
    const { data, error: err } = await django.auth.pedirCodigoRecuperacion(email)
    setEnviando(false)
    if (err) return setError(err)
    setCodigo('')
    setPaso('codigo')
    setAviso(data?.mensaje)
  }

  /** Paso 2: el código que llegó al correo. */
  async function verificarCodigo(e) {
    e.preventDefault()
    setError(null)
    setEnviando(true)
    const { data, error: err } = await django.auth.verificarCodigoRecuperacion(email, codigo)
    setEnviando(false)
    if (err) return setError(err)
    setToken(data.token)
    setNueva('')
    setRepetida('')
    irA('nueva')
  }

  /** Paso 3: la contraseña nueva. Después vuelve al login con el correo puesto. */
  async function guardarClave(e) {
    e.preventDefault()
    setError(null)
    if (nueva !== repetida) return setError({ message: 'Las dos contraseñas no coinciden' })
    if (nueva.length < 8) return setError({ message: 'La contraseña tiene que tener al menos 8 caracteres' })
    setEnviando(true)
    const { data, error: err } = await django.auth.cambiarClaveConCodigo(token, nueva)
    setEnviando(false)
    if (err) return setError(err)
    setToken(null)
    setPassword('')
    setPaso('entrar')
    setAviso(data?.mensaje || 'Contraseña cambiada. Ya puedes entrar.')
  }

  async function entrar(e) {
    e.preventDefault()
    setError(null)
    setEnviando(true)
    const { data, error: err } = await django.auth.signInWithPassword({ email, password })
    setEnviando(false)
    if (err) {
      setError({
        message: err.message,
        hint:
          err.message?.includes('credenciales') || err.message?.includes('credentials')
            ? 'Verifica tu email y contraseña. Si la olvidaste, usa "¿Olvidaste tu contraseña?".'
            : undefined,
      })
      setAviso(null)
    } else if (data?.session) {
      // Actualizar el contexto de auth con la nueva sesión
      window.location.href = '/'
    }
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-10 sm:px-6">
      <AvisoLicencia licencia={licencia} />

      <div className="w-full max-w-sm">
        <div className="mb-7 text-center sm:mb-8">
          {/* El logo del ISP si lo cargó; si no, su inicial. Nunca una marca
              ajena: el técnico que entra todos los días tiene que ver la suya. */}
          {marca.logo_b64 ? (
            <>
              {/*
                Con logo, el nombre NO se repite debajo.
                Casi todos los logos de ISP ya llevan el nombre dentro —el de
                CNET dice "CNET S.A"—, así que escribirlo otra vez lo duplica y
                le roba tamaño al logo, que es lo que se reconoce de un vistazo.
                Sigue estando para quien usa lector de pantalla: va en el `alt`
                y en un h1 que no se ve pero se lee.

                La altura crece con la pantalla en vez de ser fija, y el ancho
                se topa al 72% para que un logo apaisado no toque los bordes en
                un teléfono.
              */}
              <img
                src={marca.logo_b64}
                alt={marca.nombre_sistema}
                className="mx-auto mb-4 h-auto max-h-24 w-auto max-w-[72%] object-contain sm:max-h-32"
              />
              <h1 className="sr-only">{marca.nombre_sistema}</h1>
            </>
          ) : (
            <>
              <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-sky-600 text-xl font-bold text-white sm:h-16 sm:w-16 sm:text-2xl">
                {marca.nombre_sistema.trim().charAt(0).toUpperCase()}
              </div>
              <h1 className="t-titulo text-xl font-bold text-slate-100">{marca.nombre_sistema}</h1>
            </>
          )}
          {marca.lema && <p className="mt-1 text-xs text-slate-500">{marca.lema}</p>}
        </div>

        {modoDemo ? (
          <div className="mb-4 space-y-3">
            <Aviso>
              <b>Modo demo activo.</b> Se entra sin backend, con datos de ejemplo en memoria. Todo
              lo que crees se pierde al recargar y no se conecta a ningún equipo real.
            </Aviso>
            <Button variante="primario" icon={LogIn} className="w-full" onClick={entrarDemo}>
              Entrar en modo demo
            </Button>
          </div>
        ) : (
          !djangoConfigurado && (
            <div className="mb-4">
              <Aviso tipo="alerta">
                Falta configurar <code className="text-amber-100">web/.env.local</code> con{' '}
                <code>NEXT_PUBLIC_DJANGO_API_URL</code>. Ejemplo:{' '}
                <code>http://localhost:8000/api/v1</code>
              </Aviso>
            </div>
          )
        )}

        <form
          onSubmit={{ entrar, pedir: pedirCodigo, codigo: verificarCodigo, nueva: guardarClave }[paso]}
          className="space-y-4 t-card p-6"
        >
          {paso === 'pedir' && (
            <p className="text-xs leading-snug text-slate-500">
              Pon tu correo y te mandamos un código de 6 dígitos para elegir una contraseña nueva.
            </p>
          )}
          {paso === 'codigo' && (
            <p className="text-xs leading-snug text-slate-500">
              Escribe el código que te llegó a <b className="text-slate-300">{email}</b>. Vence en 15 minutos.
            </p>
          )}
          {paso === 'nueva' && (
            <p className="text-xs leading-snug text-slate-500">
              Código correcto. Elige tu contraseña nueva: al menos 8 caracteres, que no sea solo
              números ni se parezca a tu correo.
            </p>
          )}

          {aviso && <Aviso tipo="exito">{aviso}</Aviso>}

          {(paso === 'entrar' || paso === 'pedir') && (
            <Field label="Email">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="usuario@taller.local"
                autoComplete="username"
                required
              />
            </Field>
          )}

          {paso === 'entrar' && (
            <Field label="Contraseña">
              <Input placeholder="Mínimo 8 caracteres"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </Field>
          )}

          {paso === 'codigo' && (
            <Field label="Código">
              <Input
                value={codigo}
                onChange={(e) => setCodigo(e.target.value.replace(/\D/g, '').slice(0, 6))}
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="000000"
                pattern="\d{6}"
                className="text-center font-mono text-lg tracking-[0.5em]"
                autoFocus
                required
              />
            </Field>
          )}

          {paso === 'nueva' && (
            <>
              {/* El correo oculto ayuda al gestor de contraseñas a guardar la nueva. */}
              <input type="email" value={email} autoComplete="username" readOnly hidden />
              <Field label="Contraseña nueva">
                <Input placeholder="Mínimo 8 caracteres"
                  type="password"
                  value={nueva}
                  onChange={(e) => setNueva(e.target.value)}
                  autoComplete="new-password"
                  minLength={8}
                  autoFocus
                  required
                />
              </Field>
              <Field label="Repítela">
                <Input placeholder="Escríbela de nuevo"
                  type="password"
                  value={repetida}
                  onChange={(e) => setRepetida(e.target.value)}
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </Field>
            </>
          )}

          <ErrorBanner error={error} onCerrar={() => setError(null)} />

          <Button
            type="submit"
            variante="primario"
            icon={{ entrar: LogIn, pedir: Mail, codigo: ShieldCheck, nueva: KeyRound }[paso]}
            cargando={enviando}
            className="w-full"
            disabled={!djangoConfigurado || (paso === 'entrar' && vencida) || (paso === 'codigo' && codigo.length !== 6)}
          >
            {{
              entrar: 'Entrar',
              pedir: 'Mandarme el código',
              codigo: 'Verificar código',
              nueva: 'Guardar contraseña nueva',
            }[paso]}
          </Button>

          {paso === 'codigo' && (
            <div className="flex justify-between gap-3 pt-1 text-xs">
              <button type="button" onClick={() => irA('pedir')} className="text-sky-400 hover:text-sky-300">
                Usar otro correo
              </button>
              <button
                type="button"
                onClick={() => pedirCodigo()}
                disabled={enviando}
                className="text-sky-400 hover:text-sky-300 disabled:opacity-50"
              >
                Reenviar código
              </button>
            </div>
          )}

          {/* El enlace para recuperar. Va debajo del botón y no arriba: lo
              busca quien ya falló, no quien está por escribir su clave. */}
          <button
            type="button"
            onClick={() => irA(paso === 'entrar' ? 'pedir' : 'entrar')}
            className="block w-full pt-1 text-center text-xs text-sky-400 hover:text-sky-300"
          >
            {paso === 'entrar' ? '¿Olvidaste tu contraseña?' : 'Volver a entrar con mi contraseña'}
          </button>

          {/* Se puede activar sin entrar: si la licencia venció, exigir sesión
              para renovarla sería cerrar la puerta con la llave adentro. */}
          {vencida && (
            <a
              href="/licencia"
              className="block pt-1 text-center text-xs text-sky-400 hover:text-sky-300"
            >
              Ya tengo el código de licencia — activarlo
            </a>
          )}
        </form>
      </div>
    </div>
  )
}
