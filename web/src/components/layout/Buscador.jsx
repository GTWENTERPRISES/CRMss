import { useEffect, useMemo, useRef, useState } from 'react'
import { FileText, LifeBuoy, Loader2, Search, User, CornerDownLeft } from 'lucide-react'
import { useNavigate } from '@/lib/nextNavigation'
import { usePermisos } from '../../lib/AuthContext'
import { puedeEntrar } from '../../lib/rutasPermisos'
import { django } from '../../lib/djangoClient'
import { pantallasDelMenu } from './Sidebar'
import { usePais } from '../../lib/pais'

const sinTildes = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
// Lo que se escribe va dentro de un filtro de PostgREST: sin comas ni paréntesis.
const limpio = (q) => q.replace(/[,()*%]/g, ' ').trim()

/**
 * Buscador global: Ctrl+K (o ⌘K) desde cualquier pantalla.
 *
 * Se escribe una cédula, un nombre, una IP, un número de factura o de ticket
 * —o el nombre de una pantalla— y Enter lleva directo. Es lo que más tiempo
 * ahorra en mostrador: el abonado dicta la cédula y se está en su ficha.
 *
 * Solo busca en lo que quien entró puede abrir: las pantallas salen del mismo
 * menú podado, y clientes, facturas y tickets solo si su pantalla es alcanzable.
 */
export default function Buscador() {
  const [abierto, setAbierto] = useState(false)
  const [texto, setTexto] = useState('')
  const [resultados, setResultados] = useState([])
  const [buscando, setBuscando] = useState(false)
  const [activo, setActivo] = useState(0)
  const navigate = useNavigate()
  const pais = usePais()
  const { puede } = usePermisos()
  const entrada = useRef(null)
  const ultima = useRef(0)

  const pantallas = useMemo(() => pantallasDelMenu(puede, pais), [puede, pais])

  // Ctrl+K / ⌘K abre; también el evento 'buscador:abrir' (botón de la barra).
  useEffect(() => {
    const tecla = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setAbierto((a) => !a)
      }
    }
    const abrir = () => setAbierto(true)
    window.addEventListener('keydown', tecla)
    window.addEventListener('buscador:abrir', abrir)
    return () => {
      window.removeEventListener('keydown', tecla)
      window.removeEventListener('buscador:abrir', abrir)
    }
  }, [])

  useEffect(() => {
    if (abierto) {
      setTexto('')
      setResultados([])
      setActivo(0)
      setTimeout(() => entrada.current?.focus(), 0)
    }
  }, [abierto])

  useEffect(() => {
    const q = limpio(texto)
    const deMenu = q
      ? pantallas
          .filter((p) => sinTildes(`${p.label} ${p.seccion}`).includes(sinTildes(q)))
          .slice(0, 5)
          .map((p) => ({ clave: `p:${p.to}`, tipo: 'Pantalla', icono: p.icon, titulo: p.label, detalle: p.seccion, ir: p.to }))
      : pantallas.slice(0, 6).map((p) => ({ clave: `p:${p.to}`, tipo: 'Pantalla', icono: p.icon, titulo: p.label, detalle: p.seccion, ir: p.to }))
    setResultados(deMenu)
    setActivo(0)
    if (q.length < 2) return setBuscando(false)

    const id = ++ultima.current
    setBuscando(true)
    const reloj = setTimeout(async () => {
      const pedidos = []
      if (puedeEntrar(puede, '/clientes')) {
        pedidos.push(
          django
            .from('clientes')
            .select('id, nombre, identificacion, ip, estado')
            .or([`nombre.ilike.%${q}%`, `identificacion.ilike.%${q}%`, `ip.ilike.%${q}%`, `codigo.ilike.%${q}%`].join(','))
            .order('nombre')
            .limit(6)
            .then(({ data }) =>
              (data ?? []).map((c) => ({
                clave: `c:${c.id}`, tipo: 'Cliente', icono: User, titulo: c.nombre,
                detalle: [c.identificacion, c.ip, c.estado].filter(Boolean).join(' · '), ir: `/clientes/${c.id}`,
              })),
            ),
        )
      }
      if (/^\d+$/.test(q) && puedeEntrar(puede, '/facturacion')) {
        pedidos.push(
          django
            .from('facturas')
            .select('id, numero, cliente_nombre, client_id')
            .eq('numero', Number(q))
            .limit(4)
            .then(({ data }) =>
              (data ?? []).map((f) => ({
                clave: `f:${f.id}`, tipo: 'Factura', icono: FileText, titulo: `Factura ${f.numero}`,
                detalle: f.cliente_nombre ?? '', ir: f.client_id ? `/clientes/${f.client_id}?ver=facturacion` : '/facturacion',
              })),
            ),
        )
      }
      if (puedeEntrar(puede, '/soporte')) {
        const porNumero = /^\d+$/.test(q) ? [`numero.eq.${q}`] : []
        pedidos.push(
          django
            .from('tickets')
            .select('id, numero, nombre, estado')
            .or([...porNumero, `nombre.ilike.%${q}%`, `identificacion.ilike.%${q}%`].join(','))
            .order('created_at', { ascending: false })
            .limit(4)
            .then(({ data }) =>
              (data ?? []).map((t) => ({
                clave: `t:${t.id}`, tipo: 'Ticket', icono: LifeBuoy, titulo: `Ticket #${t.numero ?? ''} · ${t.nombre ?? ''}`,
                detalle: t.estado ?? '', ir: `/soporte/${t.id}`,
              })),
            ),
        )
      }
      // Que falle una búsqueda no apaga las otras.
      const partes = await Promise.all(pedidos.map((p) => p.catch(() => [])))
      if (id !== ultima.current) return
      setResultados([...partes.flat(), ...deMenu])
      setBuscando(false)
    }, 250)
    return () => clearTimeout(reloj)
  }, [texto, pantallas, puede])

  const ir = (r) => {
    if (!r) return
    setAbierto(false)
    navigate(r.ir)
  }

  if (!abierto) return null
  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-[rgba(15,23,42,0.45)] p-4 pt-[12vh] backdrop-blur-[2px]"
      onClick={() => setAbierto(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Buscar"
        className="t-card w-full max-w-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[rgba(15,23,42,0.06)] px-4 py-3">
          {buscando ? <Loader2 size={18} className="animate-spin text-slate-500" /> : <Search size={18} className="text-slate-500" />}
          <input
            ref={entrada}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setAbierto(false)
              else if (e.key === 'ArrowDown') {
                e.preventDefault()
                setActivo((a) => Math.min(a + 1, resultados.length - 1))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setActivo((a) => Math.max(a - 1, 0))
              } else if (e.key === 'Enter') {
                e.preventDefault()
                ir(resultados[activo])
              }
            }}
            placeholder="Cédula, nombre, IP, N° de factura o ticket, o una pantalla…"
            aria-label="Buscar"
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-600"
          />
          <kbd className="t-dato hidden rounded border border-slate-700 px-1.5 py-0.5 text-[10px] text-slate-500 sm:inline">Esc</kbd>
        </div>
        <ul className="max-h-[55vh] overflow-y-auto py-1" role="listbox">
          {resultados.length === 0 && !buscando && (
            <li className="px-4 py-6 text-center text-sm text-slate-500">
              {limpio(texto).length < 2 ? 'Escribe al menos 2 letras o números.' : 'Nada coincide. Prueba con la cédula o la IP.'}
            </li>
          )}
          {resultados.map((r, i) => {
            const Icono = r.icono ?? Search
            return (
              <li key={r.clave} role="option" aria-selected={i === activo}>
                <button
                  type="button"
                  onMouseEnter={() => setActivo(i)}
                  onClick={() => ir(r)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm ${i === activo ? 'bg-sky-500/10' : ''}`}
                >
                  <Icono size={16} className="shrink-0 text-slate-500" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium text-slate-100">{r.titulo}</span>
                    {r.detalle && <span className="block truncate text-xs text-slate-500">{r.detalle}</span>}
                  </span>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-slate-500">{r.tipo}</span>
                  {i === activo && <CornerDownLeft size={13} className="shrink-0 text-slate-500" />}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="flex gap-4 border-t border-[rgba(15,23,42,0.06)] px-4 py-2 text-[11px] text-slate-500">
          <span>↑ ↓ para moverte</span>
          <span>Enter para abrir</span>
          <span className="ml-auto">Ctrl + K</span>
        </div>
      </div>
    </div>
  )
}
