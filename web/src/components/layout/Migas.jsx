import { useMemo } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from '@/lib/nextNavigation'
import { usePermisos } from '../../lib/AuthContext'
import { useMigaActual } from '../../lib/migas'
import { pantallasDelMenu } from './Sidebar'
import { usePais } from '../../lib/pais'

/**
 * Ruta de navegación arriba del contenido: dice dónde se está y permite volver
 * con un clic (de la ficha de un cliente al listado, sin el botón "atrás").
 *
 * Sale del mismo menú podado (las mismas etiquetas que se ven a la izquierda);
 * la pantalla de detalle agrega el nombre del registro con useMiga().
 */
export default function Migas() {
  const { pathname } = useLocation()
  const { puede } = usePermisos()
  const pais = usePais()
  const extra = useMigaActual()
  const pantallas = useMemo(() => pantallasDelMenu(puede, pais), [puede, pais])

  if (pathname === '/') return null
  const pantalla = pantallas
    .filter((x) => x.to !== '/' && (pathname === x.to || pathname.startsWith(`${x.to}/`)))
    .sort((a, b) => b.to.length - a.to.length)[0]
  if (!pantalla) return null

  const enDetalle = pathname !== pantalla.to
  const migas = [
    { label: 'Panel', to: '/' },
    ...(pantalla.seccion && pantalla.seccion !== pantalla.label ? [{ label: pantalla.seccion }] : []),
    { label: pantalla.label, to: enDetalle ? pantalla.to : null },
    ...(enDetalle ? [{ label: extra || 'Detalle' }] : []),
  ]

  return (
    <nav aria-label="Ruta de navegación" className="mb-4 flex min-w-0 flex-wrap items-center gap-1 text-[13px] text-muted-foreground">
      {migas.map((m, i) => (
        <span key={i} className="flex min-w-0 items-center gap-1">
          {i > 0 && <ChevronRight size={13} className="shrink-0 opacity-60" aria-hidden="true" />}
          {m.to ? (
            <Link to={m.to} className="truncate transition hover:text-foreground">
              {m.label}
            </Link>
          ) : (
            <span className={`truncate ${i === migas.length - 1 ? 'font-medium text-foreground' : ''}`} aria-current={i === migas.length - 1 ? 'page' : undefined}>
              {m.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
