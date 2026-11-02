import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { django } from '../lib/djangoClient'
import { modoDemo } from '../lib/demo'
import { Aviso, Button, ErrorBanner, Field, Input } from './ui'

/**
 * Cambiar la propia contraseña.
 *
 * Vive aparte porque lo necesitan dos pantallas con marcos distintos: "Mi
 * perfil" del sistema de escritorio y el perfil de la app de campo. Son la
 * misma operación y las mismas trampas; tenerla duplicada garantizaba que una
 * de las dos se quedara sin alguna comprobación.
 *
 * ── Por qué se pide la contraseña actual ──
 *
 * Django no la exige: con la sesión abierta alcanza para cambiarla. Se pide
 * igual, y se comprueba entrando con ella.
 *
 * El motivo es concreto, y en la app de campo todavía más: el teléfono del
 * técnico queda sobre el mostrador, o en la camioneta, con la sesión abierta
 * porque la app está hecha para no tener que entrar cada mañana. Sin pedir la
 * actual, cualquiera que agarre ese teléfono se queda con la cuenta.
 */

const MINIMO = 8

export default function CambiarMiClave({ compacto = false }) {

  const [actual, setActual] = useState('')
  const [nueva, setNueva] = useState('')
  const [repetida, setRepetida] = useState('')
  const [guardando, setGuardando] = useState(false)
  const [listo, setListo] = useState(false)
  const [error, setError] = useState(null)

  const corta = nueva.length > 0 && nueva.length < MINIMO
  const distinta = repetida.length > 0 && nueva !== repetida
  const igualALaActual = nueva.length > 0 && nueva === actual
  const puedeGuardar =
    actual.length > 0 && nueva.length >= MINIMO && nueva === repetida && !igualALaActual

  async function cambiar(e) {
    e.preventDefault()
    if (!puedeGuardar || guardando) return

    setGuardando(true)
    setError(null)
    setListo(false)

    try {
      if (modoDemo) throw new Error('En modo demo no se cambian contraseñas.')

      /*
        El servidor comprueba la actual y guarda la nueva en un solo paso
        (/auth/change-password). Antes se comprobaba "entrando" con el correo
        de la sesión, que el token no trae: fallaba siempre con "la contraseña
        actual no es correcta", aunque lo fuera.
      */
      const { error: errCambio } = await django.auth.cambiarMiClave(actual, nueva)
      if (errCambio) throw Object.assign(new Error(errCambio.message), { hint: errCambio.hint })

      setListo(true)
      setActual('')
      setNueva('')
      setRepetida('')
    } catch (err) {
      setError(err)
    } finally {
      setGuardando(false)
    }
  }

  return (
    <form onSubmit={cambiar} className="space-y-4">
      <ErrorBanner error={error} onCerrar={() => setError(null)} />

      {listo && (
        <Aviso tipo="exito">Contraseña cambiada. La próxima vez que entres, usa la nueva.</Aviso>
      )}

      <Field
        label="Contraseña actual"
        hint="Se pide para confirmar que eres tú, no solo que la sesión está abierta."
      >
        <Input placeholder="Tu contraseña de hoy"
          type="password"
          value={actual}
          onChange={(e) => setActual(e.target.value)}
          autoComplete="current-password"
        />
      </Field>

      <div className={compacto ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <Field label="Contraseña nueva" hint={`Mínimo ${MINIMO} caracteres.`}>
          <Input placeholder="Mínimo 8 caracteres"
            type="password"
            value={nueva}
            onChange={(e) => setNueva(e.target.value)}
            autoComplete="new-password"
          />
        </Field>

        <Field label="Repítela">
          <Input placeholder="Escríbela de nuevo"
            type="password"
            value={repetida}
            onChange={(e) => setRepetida(e.target.value)}
            autoComplete="new-password"
          />
        </Field>
      </div>

      {corta && <Aviso tipo="alerta">La contraseña necesita al menos {MINIMO} caracteres.</Aviso>}
      {distinta && <Aviso tipo="alerta">Las dos contraseñas no coinciden.</Aviso>}
      {igualALaActual && (
        <Aviso tipo="alerta">La nueva es igual a la actual. Pon una distinta.</Aviso>
      )}

      <Button
        type="submit"
        variante="primario"
        icon={ShieldCheck}
        cargando={guardando}
        disabled={!puedeGuardar}
        className={compacto ? 'w-full' : ''}
      >
        Cambiar mi contraseña
      </Button>

      <p className="text-xs leading-snug text-slate-500">
        Nadie más va a poder verla, tampoco quien administra el sistema: solo se guarda su huella.
        Si la olvidas, pide el enlace desde <b>¿Olvidaste tu contraseña?</b> en la pantalla de
        entrada.
      </p>
    </form>
  )
}
