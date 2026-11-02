import { useEffect, useState } from 'react'
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react'
import { cerrarAviso, suscribirAvisos } from '../../lib/notificaciones'

const ESTILO = {
  exito: { icono: CheckCircle2, color: 'text-emerald-600' },
  error: { icono: AlertTriangle, color: 'text-red-600' },
  info: { icono: Info, color: 'text-sky-600' },
}

/** Cuenta regresiva del "Deshacer": cuántos segundos quedan. */
function Cuenta({ desde, segundos }) {
  const [, tic] = useState(0)
  useEffect(() => {
    const t = setInterval(() => tic((n) => n + 1), 250)
    return () => clearInterval(t)
  }, [])
  const quedan = Math.max(0, Math.ceil(segundos - (Date.now() - desde) / 1000))
  return <span className="t-dato text-[11px] text-slate-500">{quedan}s</span>
}

/**
 * Los avisos breves, siempre en el mismo lugar: abajo a la derecha (abajo y a
 * lo ancho en el teléfono). Ver lib/notificaciones.js.
 */
export default function Avisos() {
  const [avisos, setAvisos] = useState([])
  useEffect(() => suscribirAvisos(setAvisos), [])

  if (!avisos.length) return null
  return (
    <div
      className="pointer-events-none fixed inset-x-4 bottom-4 z-[70] flex flex-col items-stretch gap-2 sm:inset-x-auto sm:right-6 sm:w-96"
      aria-live="polite"
      role="status"
    >
      {avisos.map((a) => {
        const { icono: Icono, color } = ESTILO[a.tipo] ?? ESTILO.info
        return (
          <div key={a.id} className="t-card pointer-events-auto flex items-center gap-3 px-4 py-3 text-sm shadow-xl">
            <Icono size={18} className={`shrink-0 ${color}`} />
            <p className="min-w-0 flex-1 font-medium text-slate-100">{a.mensaje}</p>
            {a.cuenta != null && <Cuenta desde={a.desde} segundos={a.cuenta} />}
            {a.accion && (
              <button
                type="button"
                onClick={a.accion.onClick}
                className="shrink-0 rounded-lg px-2 py-1 text-xs font-bold text-sky-600 hover:bg-sky-500/10"
              >
                {a.accion.label}
              </button>
            )}
            <button
              type="button"
              onClick={() => cerrarAviso(a.id)}
              aria-label="Cerrar aviso"
              className="shrink-0 rounded p-0.5 text-slate-500 hover:text-slate-200"
            >
              <X size={14} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
