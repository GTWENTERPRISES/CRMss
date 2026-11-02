import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from '@/lib/nextNavigation'
import { usePermisos } from '../lib/AuthContext'
import { Link, useNavigate, useParams } from '@/lib/nextNavigation'
import {
  ArrowLeft,
  CreditCard,
  Info,
  Activity,
  FolderOpen,
  History,
  LifeBuoy,
  Receipt,
  Send,
  Wifi,
  Wrench,
} from 'lucide-react'
import { django } from '../lib/djangoClient'
import { Badge, Cargando, ErrorBanner } from '../components/ui'
import FichaResumen from '../components/clientes/FichaResumen'
import FichaServicio from '../components/clientes/FichaServicio'
import FichaFacturacion from '../components/clientes/FichaFacturacion'
import FichaCobros from '../components/clientes/FichaCobros'
import FichaSoporte from '../components/clientes/FichaSoporte'
import HerramientasTecnicas from '../components/clientes/HerramientasTecnicas'
import FichaConsumo from '../components/clientes/FichaConsumo'
import FichaComunicaciones from '../components/clientes/FichaComunicaciones'
import FichaDocumentos from '../components/clientes/FichaDocumentos'
import FichaAuditoria from '../components/clientes/FichaAuditoria'
import { COLOR_ESTADO as COLORES } from '../lib/estados'
import { useMiga } from '../lib/migas'
import { ETIQUETA_ESTADO_ABONADO } from '../lib/estados'
import { dineroCero } from '@/lib/formato'

/**
 * Ficha del abonado.
 *
 * Todo lo que hay que saber de un cliente en una sola pantalla: sus datos, qué
 * servicio tiene, qué debe, qué pagó y qué se le instaló. Antes había que
 * recorrer cuatro secciones y cruzar los datos a mano.
 *
 * Las pestañas cargan bajo demanda: la ficha abre con el resumen y recién pide
 * las facturas cuando alguien entra a Facturación.
 */

// Colores de estado: los mismos en todo el sistema (lib/estados).
const COLOR_ESTADO = COLORES.abonado

/**
 * Las pestañas de la ficha, con el permiso que cada una pide.
 *
 * Acá es donde el recorte importa de verdad. El técnico llega a esta ficha
 * legítimamente —es el cliente del ticket que le asignaron— y en la misma
 * pantalla están la deuda, los pagos y el historial de facturación, que no son
 * asunto suyo. Sin este filtro, negarle el listado de clientes no sirve de
 * nada: entra por el ticket y ve lo mismo.
 */
const PESTANAS = [
  { id: 'resumen', label: 'Resumen', icon: Info },
  { id: 'servicio', label: 'Servicio', icon: Wifi },
  { id: 'facturacion', label: 'Facturación', icon: Receipt, permiso: 'facturacion.ver' },
  { id: 'cobros', label: 'Cobros', icon: CreditCard, permiso: ['pagos.ver', 'pagos.registrar'] },
  { id: 'soporte', label: 'Soporte', icon: LifeBuoy, permiso: ['soporte.ver', 'soporte.asignados'] },
  { id: 'herramientas', label: 'Herramientas', icon: Wrench, permiso: 'red.onus_ver' },
  { id: 'consumo', label: 'Consumo', icon: Activity, permiso: 'red.monitoreo' },
  { id: 'mensajes', label: 'Mensajes', icon: Send, permiso: 'config.mensajeria' },
  { id: 'documentos', label: 'Documentos', icon: FolderOpen },
  { id: 'actividad', label: 'Actividad', icon: History, permiso: 'auditoria.ver' },
]

/**
 * Las diez pestañas, en cuatro grupos de trabajo.
 *
 * Diez pestañas sueltas en una fila se leen como una lista de palabras: quien
 * busca "la deuda" tiene que recorrerlas todas. Agrupadas, primero se elige de
 * qué se trata (el servicio, la plata, un reclamo, el historial) y después el
 * detalle. La pestaña sigue en la URL (`?ver=`), así que los enlaces viejos
 * abren donde abrían.
 */
const GRUPOS = [
  { id: 'servicio', label: 'Servicio', icon: Wifi, pestanas: ['resumen', 'servicio', 'herramientas', 'consumo'] },
  { id: 'cobros', label: 'Cobros', icon: CreditCard, pestanas: ['facturacion', 'cobros'] },
  { id: 'soporte', label: 'Soporte', icon: LifeBuoy, pestanas: ['soporte', 'mensajes'] },
  { id: 'historial', label: 'Historial', icon: History, pestanas: ['documentos', 'actividad'] },
]

// Instalaciones y contratos no son pestañas de la ficha: viven en Clientes →
// Instalaciones y Clientes → Contratos, donde se ven los de todos los abonados
// juntos. Es como se trabajan de verdad —la agenda del día, los contratos por
// vencer— y no de a un cliente por vez.

export default function ClienteDetallePage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [cliente, setCliente] = useState(null)
  // La última miga de la ruta: "Clientes › Usuarios › <nombre>".
  useMiga(cliente?.nombre)

  // Desde cuándo debe: la factura impaga más vieja que ya venció.
  const [diasVencido, setDiasVencido] = useState(0)
  useEffect(() => {
    if (!id) return
    django
      .from('v_facturas_por_cobrar')
      .select('fecha_vencimiento, saldo')
      .eq('client_id', id)
      .order('fecha_vencimiento')
      .limit(20)
      .then(({ data }) => {
        const hoy = new Date().toISOString().slice(0, 10)
        const vieja = (data ?? []).find((f) => Number(f.saldo) > 0 && f.fecha_vencimiento && f.fecha_vencimiento < hoy)
        setDiasVencido(vieja ? Math.floor((Date.parse(hoy) - Date.parse(vieja.fecha_vencimiento)) / 86400000) : 0)
      })
  }, [id, cliente?.saldo])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  /**
   * La pestaña vive en la URL, no en el estado.
   *
   * ── Por qué ──
   *
   * Porque así sobrevive a todo lo que puede remontar la pantalla: volver de otra
   * pestaña del navegador, recargar con F5, o el botón de atrás. Antes era estado
   * local y cualquiera de esas tres devolvía al usuario a "Resumen" sin aviso.
   *
   * Y de yapa el enlace se puede compartir: `/clientes/<id>?ver=facturacion` abre
   * donde uno quiere, que es lo que se pega en un WhatsApp cuando alguien
   * pregunta por una factura.
   */
  const [params, setParams] = useSearchParams()
  const pestana = params.get('ver') ?? 'resumen'

  const setPestana = (id) => {
    // `replace` para no llenar el historial: quien recorre las seis secciones y
    // aprieta atrás quiere volver al listado, no repasarlas al revés.
    setParams((p) => {
      const nuevo = new URLSearchParams(p)
      if (id === 'resumen') nuevo.delete('ver')
      else nuevo.set('ver', id)
      return nuevo
    }, { replace: true })
  }
  const { puede } = usePermisos()
  // Sin `permiso` la pestaña es de todos: el resumen y los documentos los ve
  // cualquiera que haya llegado hasta la ficha.
  const pestanas = PESTANAS.filter(
    (p) => !p.permiso || [p.permiso].flat().some((clave) => puede(clave)),
  )
  const grupos = GRUPOS.map((g) => ({
    ...g,
    visibles: g.pestanas.map((id) => pestanas.find((p) => p.id === id)).filter(Boolean),
  })).filter((g) => g.visibles.length > 0)
  const grupoActivo = grupos.find((g) => g.visibles.some((p) => p.id === pestana)) ?? grupos[0]

  /**
   * Trae la ficha y la fila cruda del cliente, y las mezcla.
   *
   * La vista agrega lo que vive en otras tablas —plan, router, ONU, saldo—,
   * pero `SELECT c.*` congela sus columnas al crearse: un campo agregado
   * después no aparece hasta que alguien recrea la vista. Leer además la tabla
   * y dejar que gane la fila cruda hace que la ficha muestre siempre todos los
   * campos del cliente, aunque la vista haya quedado atrás.
   */
  const recargar = useCallback(async () => {
    setCargando(true)

    const [ficha, fila] = await Promise.all([
      django.from('v_clientes_ficha').select('*').eq('id', id).maybeSingle(),
      django.from('clientes').select('*').eq('id', id).maybeSingle(),
    ])

    if (ficha.error && fila.error) setError(fila.error)

    const datos = fila.data || ficha.data ? { ...(ficha.data ?? {}), ...(fila.data ?? {}) } : null

    setCliente(datos)
    setCargando(false)
  }, [id])

  useEffect(() => {
    recargar()
  }, [recargar])

  if (cargando) return <Cargando texto="Cargando la ficha…" />

  if (!cliente) {
    return (
      <div className="space-y-4">
        <ErrorBanner error={error} onCerrar={() => setError(null)} />
        <p className="text-sm text-slate-400">
          No existe ese cliente.{' '}
          <Link to="/clientes" className="text-sky-400 hover:underline">
            Volver al listado
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/clientes')}
            className="rounded-lg border border-slate-800 p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
            title="Volver al listado"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-slate-100">{cliente.nombre}</h1>
            {/* Su situación en una línea, sin abrir pestañas: es lo primero que
                pregunta quien atiende el teléfono. */}
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              {[
                cliente.plan && <span key="plan">{cliente.plan}</span>,
                Number(cliente.saldo) > 0 ? (
                  <span key="saldo" className="font-medium text-red-600">
                    Debe {dineroCero(cliente.saldo)}
                    {diasVencido > 0 && ` (vencido hace ${diasVencido} día${diasVencido === 1 ? '' : 's'})`}
                  </span>
                ) : (
                  <span key="saldo" className="font-medium text-emerald-600">Al día</span>
                ),
                cliente.router && <span key="router">{cliente.router}</span>,
                <span key="ced" className="t-dato text-xs">{cliente.identificacion ?? 'sin identificación'}</span>,
              ]
                .filter(Boolean)
                .flatMap((x, k) => (k ? [<span key={`s${k}`} aria-hidden="true">·</span>, x] : [x]))}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge color={COLOR_ESTADO[cliente.estado] ?? 'gris'}>{ETIQUETA_ESTADO_ABONADO[cliente.estado] ?? cliente.estado}</Badge>
        </div>
      </div>

      <ErrorBanner error={error} onCerrar={() => setError(null)} />

      {/* Primero el grupo, después la pestaña dentro del grupo. Un grupo sin
          ninguna pestaña permitida no se dibuja. */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1 border-b border-slate-800" role="tablist" aria-label="Secciones de la ficha">
          {grupos.map(({ id: g, label, icon: Icon, visibles }) => (
            <button
              key={g}
              role="tab"
              aria-selected={grupoActivo?.id === g}
              onClick={() => setPestana(visibles[0].id)}
              className={`flex items-center gap-2 rounded-t-lg px-4 py-2 text-sm font-semibold transition ${
                grupoActivo?.id === g
                  ? 'border-b-2 border-sky-500 bg-slate-900 text-slate-100'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>
        {grupoActivo && grupoActivo.visibles.length > 1 && (
          <div className="flex flex-wrap gap-1" role="tablist" aria-label={grupoActivo.label}>
            {grupoActivo.visibles.map(({ id: tab, label, icon: Icon }) => (
              <button
                key={tab}
                role="tab"
                aria-selected={pestana === tab}
                onClick={() => setPestana(tab)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${
                  pestana === tab ? 'bg-sky-500/15 text-sky-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {pestana === 'resumen' && (
        <FichaResumen cliente={cliente} onGuardado={recargar} onError={setError} />
      )}
      {pestana === 'servicio' && (
        <FichaServicio cliente={cliente} onError={setError} onGuardado={recargar} />
      )}
      {pestana === 'facturacion' && (
        <FichaFacturacion cliente={cliente} onError={setError} onGuardado={recargar} />
      )}
      {pestana === 'cobros' && <FichaCobros cliente={cliente} onError={setError} />}
      {pestana === 'soporte' && <FichaSoporte cliente={cliente} onError={setError} />}
      {pestana === 'consumo' && <FichaConsumo cliente={cliente} onError={setError} />}
      {pestana === 'mensajes' && <FichaComunicaciones cliente={cliente} onError={setError} />}
      {pestana === 'documentos' && <FichaDocumentos cliente={cliente} onError={setError} />}
      {pestana === 'actividad' && <FichaAuditoria cliente={cliente} onError={setError} />}
      {pestana === 'herramientas' && (
        <HerramientasTecnicas cliente={cliente} onError={setError} onGuardado={recargar} />
      )}
    </div>
  )
}
