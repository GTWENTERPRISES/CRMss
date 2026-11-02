import { createContext, useContext, useEffect, useId, useRef, useState } from 'react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'
import { Button as BotonShadcn } from '@/components/shadcn/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/shadcn/alert'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/shadcn/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import { AlertTriangle, Bookmark, Info, Inbox, Loader2, MoreHorizontal, X, CheckCircle2 } from 'lucide-react'
import { enfocarPrimero, errorParaCampo, EVENTO_ERRORES, reglaDelCampo, revisarCampo } from '../../lib/validacion/enVivo.js'
import { avisar } from '../../lib/notificaciones'

/**
 * Primitivas de UI compartidas. Tailwind puro, sin librería de componentes.
 *
 * ── Por qué este archivo es el primero del rediseño ──
 *
 * Lo usan casi las cuarenta pantallas del sistema. El remapeo de paleta de
 * `tema.css` ya dejó todo en claro, pero "claro" no es lo mismo que "con el
 * tema": la tarjeta blanca de radio 18 con su sombra de dos capas, el badge sin
 * borde, la franja de marca del KPI y el encabezado con barrita solo aparecen
 * si estos componentes los usan.
 *
 * Cambiar acá es lo que hace que el sistema entero se vea como el panel nuevo
 * sin tocar las pantallas una por una.
 *
 * Las APIs no cambiaron: mismos nombres, mismos props, mismos valores
 * aceptados. Lo único que se tocó es cómo se dibujan.
 */

/**
 * `desbordable` deja salir lo que flota por fuera de la tarjeta.
 *
 * El recorte existe por el radio: sin él, el encabezado con su línea inferior
 * se sale de las esquinas redondeadas. Pero recorta TODO, y una tarjeta que
 * contiene un buscador con panel de resultados lo corta justo en su borde de
 * abajo — se ve el encabezado del panel y ninguna de las filas.
 *
 * Por eso es una decisión de quien usa la tarjeta y no del tema: solo las
 * pocas que contienen algo flotante lo piden, y las demás conservan el recorte
 * que necesitan.
 */
export function Card({
  title,
  subtitle,
  icon: Icon,
  actions,
  children,
  className = '',
  desbordable = false,
}) {
  // La tarjeta de shadcn/ui (borde fino, sombra apenas marcada, radio 16px),
  // con la misma API que antes: título, subtítulo, ícono y acciones arriba.
  return (
    <section
      data-slot="card"
      className={cn(
        'flex flex-col rounded-xl border bg-card text-card-foreground shadow-xs',
        desbordable ? '' : 'overflow-hidden',
        className,
      )}
    >
      {(title || actions) && (
        <header className="flex items-start justify-between gap-4 border-b px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <h2 className="flex items-center gap-2 text-sm leading-none font-semibold text-foreground">
              {Icon && <Icon size={15} className="text-muted-foreground" />}
              {title}
            </h2>
            {subtitle && <p className="mt-1.5 text-xs text-muted-foreground">{subtitle}</p>}
          </div>
          {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
        </header>
      )}
      {/* 24 px por lado son casi el 14% de una pantalla de 360: en el teléfono
          ese relleno se le saca directamente al contenido. */}
      <div className="p-4 sm:p-6">{children}</div>
    </section>
  )
}

/**
 * El primario lleva el degradado de marca; el resto son neutros.
 *
 * Un solo color de marca para todo lo que no es un estado: si el botón de
 * guardar fuera verde y el de borrar rojo, el verde dejaría de significar "en
 * línea" y el rojo "crítico", que es lo que de verdad hay que poder leer de un
 * vistazo en una pantalla de red.
 *
 * `peligro` sí es rojo, y es la excepción correcta: ahí el color ES el estado
 * de lo que va a pasar.
 */
// Nuestras variantes, sobre las de shadcn/ui (src/components/shadcn/button).
const VARIANTES = {
  primario: { variant: 'default' },
  secundario: { variant: 'outline' },
  peligro: { variant: 'destructive' },
  fantasma: { variant: 'ghost' },
  exito: { variant: 'default', className: 'bg-emerald-600 text-white hover:bg-emerald-700' },
  alerta: { variant: 'default', className: 'bg-amber-500 text-slate-900 hover:bg-amber-600' },
}

export function Button({
  children,
  variante = 'secundario',
  icon: Icon,
  cargando = false,
  className = '',
  ...props
}) {
  const { variant, className: extra } = VARIANTES[variante] ?? VARIANTES.secundario
  const soloIcono = !children && props.title
  const { title, ...resto } = props
  const boton = (
    <BotonShadcn
      {...(soloIcono ? resto : props)}
      aria-label={soloIcono ? title : props['aria-label']}
      variant={variant}
      size={children ? 'default' : 'icon'}
      disabled={props.disabled || cargando}
      className={cn(extra, className)}
    >
      {cargando ? <Loader2 size={15} className="animate-spin" /> : Icon && <Icon size={15} />}
      {children}
    </BotonShadcn>
  )
  // Un botón de solo ícono dice qué hace al pasar el mouse (tooltip de shadcn,
  // no el globito tardío del navegador) y lo anuncia al lector de pantalla.
  if (!soloIcono) return boton
  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>{boton}</TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

/**
 * Un campo con su etiqueta, su ayuda y su validación en vivo.
 *
 * Se revisa al salir del campo (no letra por letra: un correo a medio escribir
 * no es un error) y, una vez marcado, en cada cambio, así el rojo se va apenas
 * el dato queda bien. Las reglas son las de Zod (lib/validacion): por `campo`
 * —la columna, ej. `campo="email"`— o, si no lo tiene, por la etiqueta.
 * `regla` fuerza una (`regla="telefono"`) o la apaga (`regla={false}`).
 *
 * Si un guardado vuelve con errores de validación, el campo de esa columna se
 * marca solo (evento de lib/validacion/enVivo.js).
 */
// Un control adentro de <Field> lo valida el Field; suelto, se valida solo.
const DentroDeField = createContext(false)

export function Field({ label, hint, children, className = '', campo, regla }) {
  const [error, setError] = useState(null)
  const marcado = useRef(false)
  const escrito = useRef(false)
  const ref = useRef(null)
  const idMensaje = useId()
  const [obligatorio, setObligatorio] = useState(false)
  const [dinero, setDinero] = useState(false)
  const etiqueta = () => ref.current?.querySelector('[data-etiqueta]')?.textContent ?? ''
  const control = () => ref.current?.querySelector('input:not([type=checkbox]):not([type=radio]):not([type=hidden]), select, textarea')

  /**
   * Lo que se deduce del control, después de dibujarlo:
   *  - el asterisco, si es obligatorio y la etiqueta no lo trae ya: todos los
   *    obligatorios marcados igual, y no enterarse recién al guardar;
   *  - el teclado del teléfono que corresponde (numérico, decimal, de teléfono);
   *  - el "$" adelante en los montos.
   */
  useEffect(() => {
    const el = control()
    const requerido = !!ref.current?.querySelector('[required]')
    setObligatorio(requerido && !etiqueta().includes('*'))
    if (!el || el.tagName !== 'INPUT') return setDinero(false)
    const nombre = regla === false ? null : regla || reglaDelCampo({ campo, etiqueta: etiqueta(), tipo: el.type })
    if (!el.hasAttribute('inputmode') && (el.type === 'text' || el.type === '' || el.type === 'tel')) {
      const modo = { telefono: 'tel', ruc: 'numeric', diaDelMes: 'numeric', vlan: 'numeric', puerto: 'numeric', noNegativo: 'decimal', cantidad: 'decimal', porcentaje: 'decimal', latitud: 'decimal', longitud: 'decimal' }[nombre]
      if (modo) el.setAttribute('inputmode', modo)
    }
    setDinero(nombre === 'noNegativo' && el.type !== 'date')
  })

  // El mensaje (error o ayuda) atado al control, para los lectores de pantalla.
  useEffect(() => {
    const el = control()
    if (!el) return
    if (error) el.setAttribute('aria-invalid', 'true')
    else el.removeAttribute('aria-invalid')
    if (error || hint) el.setAttribute('aria-describedby', idMensaje)
    else el.removeAttribute('aria-describedby')
  }, [error, hint, idMensaje])

  const revisar = (el) => {
    if (!(el instanceof Element) || !el.matches('input, select, textarea')) return
    setError(revisarCampo(el, { campo, regla, etiqueta: etiqueta(), escrito: escrito.current }))
  }

  useEffect(() => {
    const alGuardar = (e) => {
      const mensaje = errorParaCampo(e.detail, { campo, etiqueta: etiqueta() })
      if (mensaje) {
        marcado.current = true
        setError(mensaje)
      }
    }
    window.addEventListener(EVENTO_ERRORES, alGuardar)
    return () => window.removeEventListener(EVENTO_ERRORES, alGuardar)
  }, [campo])

  return (
    <label
      ref={ref}
      className={`block ${error ? 'campo-invalido' : ''} ${dinero ? 'campo-dinero' : ''} ${className}`}
      data-campo-invalido={error ? '1' : undefined}
      onBlurCapture={(e) => {
        marcado.current = true
        revisar(e.target)
      }}
      onChangeCapture={(e) => {
        escrito.current = true
        if (marcado.current) revisar(e.target)
      }}
      // Al enviar, lo que el navegador rechaza (required, min...) se muestra
      // igual que el resto, debajo del campo, en lugar del globo del navegador.
      onInvalidCapture={(e) => {
        e.preventDefault()
        marcado.current = true
        revisar(e.target)
        enfocarPrimero()
      }}
    >
      <span className="mb-1.5 block text-[13px] leading-none font-medium text-foreground">
        <span data-etiqueta>{label}</span>
        {obligatorio && (
          <span className="ml-0.5 text-red-500" title="Obligatorio">
            *<span className="sr-only"> (obligatorio)</span>
          </span>
        )}
      </span>
      <DentroDeField.Provider value={true}>{children}</DentroDeField.Provider>
      {error ? (
        <span id={idMensaje} role="alert" className="campo-error-texto mt-1.5 flex items-start gap-1 text-xs font-medium">
          <AlertTriangle size={12} className="mt-px shrink-0" />
          {error}
        </span>
      ) : (
        hint && <span id={idMensaje} className="mt-1.5 block text-xs text-muted-foreground">{hint}</span>
      )}
    </label>
  )
}

/* Fondo blanco y no gris: un campo de formulario tiene que parecer un hueco
   donde escribir, y sobre una tarjeta blanca eso se consigue con el borde, no
   con el relleno. */
const ESTILO_CAMPO =
  'flex min-h-9 w-full min-w-0 rounded-md border border-input bg-card px-3 py-1.5 text-sm text-foreground shadow-xs ' +
  'transition-[color,box-shadow] outline-none placeholder:text-muted-foreground ' +
  'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 ' +
  'disabled:cursor-not-allowed disabled:opacity-50 ' +
  'aria-invalid:border-destructive aria-invalid:ring-destructive/20 ' +
  'file:border-0 file:bg-transparent file:text-sm file:font-medium'


// Un campo de una línea o un desplegable no necesita más de ~450px: a lo ancho
// de una tarjeta de 1000px quedaba un desplegable de un router del ancho de la
// pantalla. Un `className` con otro max-w lo cambia; las áreas de texto, no.
/**
 * La validación en vivo de un control que no está adentro de un <Field>: las
 * celdas de una tabla editable (niveles de comisión, ítems de una compra), los
 * formularios compactos. Las mismas reglas que el Field —lo del navegador (min,
 * max, required, type) y la del nombre de la columna (`campo`)—, pero como no
 * hay lugar para un mensaje debajo, el error va en el borde rojo y en el
 * tooltip del control.
 */
function useValidacionSuelta({ campo, regla, onBlur, onChange, title }) {
  const enField = useContext(DentroDeField)
  const [error, setError] = useState(null)
  const marcado = useRef(false)
  const escrito = useRef(false)

  useEffect(() => {
    if (enField || !campo) return
    const alGuardar = (e) => {
      const mensaje = errorParaCampo(e.detail, { campo })
      if (mensaje) {
        marcado.current = true
        setError(mensaje)
      }
    }
    window.addEventListener(EVENTO_ERRORES, alGuardar)
    return () => window.removeEventListener(EVENTO_ERRORES, alGuardar)
  }, [enField, campo])

  if (enField) return { onBlur, onChange, title, error: null }
  const revisar = (el) => setError(revisarCampo(el, { campo, regla, etiqueta: el.getAttribute('aria-label') || '', escrito: escrito.current }))
  return {
    error,
    title: error || title,
    onBlur: (e) => {
      marcado.current = true
      revisar(e.target)
      onBlur?.(e)
    },
    onChange: (e) => {
      escrito.current = true
      if (marcado.current) revisar(e.target)
      onChange?.(e)
    },
  }
}

const ESTILO_INVALIDO = 'border-red-500 focus-visible:ring-red-500/30'

export const Input = ({ campo, regla, ...props }) => {
  const { error, ...manejo } = useValidacionSuelta({ campo, regla, onBlur: props.onBlur, onChange: props.onChange, title: props.title })
  return (
    <input
      {...props}
      {...manejo}
      aria-invalid={error ? true : props['aria-invalid']}
      className={cn(ESTILO_CAMPO, 'max-w-md', error && ESTILO_INVALIDO, props.className)}
    />
  )
}

export const Textarea = ({ campo, regla, ...props }) => {
  const { error, ...manejo } = useValidacionSuelta({ campo, regla, onBlur: props.onBlur, onChange: props.onChange, title: props.title })
  return (
    <textarea
      {...props}
      {...manejo}
      aria-invalid={error ? true : props['aria-invalid']}
      className={cn(ESTILO_CAMPO, 'min-h-16 py-2', error && ESTILO_INVALIDO, props.className)}
    />
  )
}

export const Select = ({ children, ...props }) => (
  <select {...props} className={cn(ESTILO_CAMPO, 'max-w-md pr-8', props.className)}>
    {children}
  </select>
)

/**
 * Badges sin borde: fondo suave y texto del color.
 *
 * El borde de la versión anterior servía sobre fondo oscuro, donde un relleno
 * al 15% casi no se distingue del panel. Sobre blanco sobra: el fondo suave ya
 * recorta la pastilla, y el borde solo agrega ruido cuando hay cinco en una
 * fila de tabla.
 *
 * Y siempre con texto, nunca solo color. Un estado que se distingue únicamente
 * por el color no existe para quien no distingue ese color —ni para nadie
 * mirando el celular al sol.
 */
const COLORES_BADGE = {
  verde: 't-badge-ok',
  rojo: 't-badge-critico',
  ambar: 't-badge-aviso',
  azul: 't-badge-marca',
  gris: 't-badge-neutro',
}

export const Badge = ({ color = 'gris', children }) => (
  <span className={`t-badge ${COLORES_BADGE[color]}`}>{children}</span>
)

/**
 * Una IP que se abre en el navegador.
 *
 * Entrar al equipo del abonado es de las cosas que más se repiten en el día, y
 * hasta ahora eran cuatro clics: abrir la ficha, ir a Servicio, leer la
 * dirección y tipearla en otra pestaña. Ahora es uno.
 *
 * Tres decisiones, todas por algo:
 *
 *   · Se abre en pestaña nueva. El equipo puede tardar o no responder, y no
 *     puede costar perder la pantalla donde se estaba trabajando.
 *   · `stopPropagation`, porque estas direcciones viven dentro de filas que a
 *     su vez llevan a la ficha del abonado. Sin esto, un clic haría las dos
 *     cosas y la pestaña nueva quedaría tapada por una navegación.
 *   · Si el texto no es una IPv4, se muestra igual pero sin enlace. Un enlace
 *     a "—" o a "pendiente" solo sirve para dar error.
 *
 * `rel="noopener"` no es decorativo: sin él, la página que se abre puede
 * manipular la que la abrió a través de `window.opener`.
 */
export function EnlaceIp({ ip, puerto, esquema = 'http', className = '' }) {
  const texto = String(ip ?? '').trim()
  const esIpv4 = /^\d{1,3}(\.\d{1,3}){3}$/.test(texto)

  if (!esIpv4) return <span className={className}>{ip ?? '—'}</span>

  const destino = `${esquema}://${texto}${puerto ? `:${puerto}` : ''}`

  return (
    <a
      href={destino}
      target="_blank"
      rel="noopener noreferrer"
      title={`Abrir ${destino} en una pestaña nueva`}
      onClick={(e) => e.stopPropagation()}
      className={`underline decoration-dotted underline-offset-2 hover:text-sky-400 ${className}`}
    >
      {texto}
    </a>
  )
}

/** Badge de estado de una ONU/ONT. */
export function EstadoBadge({ estado }) {
  const mapa = {
    online: ['verde', 'online'],
    offline: ['gris', 'offline'],
    los: ['rojo', 'LOS'],
  }
  const [color, texto] = mapa[String(estado).toLowerCase()] ?? ['gris', estado || 'desconocido']
  return <Badge color={color}>{texto}</Badge>
}

/**
 * Tabla de datos.
 *
 * En el teléfono (menos de 640 px) cada fila se dibuja como una tarjeta, con
 * el nombre de la columna al lado de cada dato: una tabla de seis columnas que
 * obliga a correr de costado no se puede leer con una mano. El nombre lo toma
 * de los encabezados, así que ninguna pantalla tiene que hacer nada.
 *
 * En la computadora el encabezado queda fijo al bajar por una lista larga.
 *
 * Vacía: el texto de `vacio` y, si se pasa `accionVacia` ({label, onClick}),
 * un botón para crear el primero — una pantalla vacía tiene que decir qué hacer.
 */
export function Table({ columnas, filas, vacio = 'Sin datos', renderFila, bajoEncabezado, accionVacia }) {
  const ref = useRef(null)

  // Etiqueta de cada celda = el texto de su encabezado (respeta colSpan).
  useEffect(() => {
    const tabla = ref.current
    if (!tabla) return
    const titulos = [...tabla.querySelectorAll('thead tr:first-child th')].flatMap((th) =>
      Array(th.colSpan || 1).fill(th.textContent.trim()),
    )
    for (const tr of tabla.querySelectorAll('tbody tr')) {
      let i = 0
      for (const td of tr.children) {
        td.setAttribute('data-label', td.colSpan > 1 ? '' : (titulos[i] ?? ''))
        i += td.colSpan || 1
      }
    }
  })

  return (
    <div className="overflow-x-auto sm:max-h-[75vh] sm:overflow-auto">
      <table ref={ref} className="t-tabla t-tabla-adaptable min-w-[600px]">
        <thead className="sticky top-0 z-[1] bg-card">
          <tr>
            {/* La clave va por posición: una columna puede ser JSX (un botón de
                ordenar) o venir vacía, y en los dos casos usarla como clave da
                duplicados. Las columnas no se reordenan, así que el índice es
                estable. */}
            {columnas.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
          {/* Una segunda fila de encabezado, para quien la necesite: la usa el
              listado de abonados para poner una casilla de búsqueda debajo de
              cada columna. Va acá y no como filas normales para que quede
              pegada al encabezado y no se mezcle con los datos. */}
          {bajoEncabezado && <tr className="bg-slate-800/40">{bajoEncabezado}</tr>}
        </thead>
        <tbody>
          {filas.length === 0 ? (
            <tr>
              <td colSpan={columnas.length} className="px-3 py-10 text-center text-slate-500">
                <div className="flex flex-col items-center gap-3">
                  <Inbox size={28} className="text-slate-600" aria-hidden="true" />
                  <span>{vacio}</span>
                  {accionVacia && (
                    <Button variante="secundario" icon={accionVacia.icon} onClick={accionVacia.onClick}>
                      {accionVacia.label}
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ) : (
            filas.map(renderFila)
          )}
        </tbody>
      </table>
    </div>
  )
}

/**
 * Banner de error. Muestra el `hint` del middleware, que es donde va la pista
 * accionable (REST API no habilitada, credenciales mal, equipo inalcanzable...).
 */
export function ErrorBanner({ error, onCerrar }) {
  if (!error) return null
  const mensaje = error.message || String(error)

  return (
    <Alert variant="destructive" className="border-[#fecaca] bg-[#fef2f2] pr-10">
      <AlertTriangle />
      <AlertTitle className="line-clamp-none">{mensaje}</AlertTitle>
      {(error.hint || error.detalle) && (
        <AlertDescription>
          {error.hint && <p>{error.hint}</p>}
          {error.detalle && (
            <pre className="t-dato mt-2 max-h-32 w-full overflow-auto rounded-md bg-white/70 p-2 text-[11px]">
              {error.detalle}
            </pre>
          )}
        </AlertDescription>
      )}
      {onCerrar && (
        <button onClick={onCerrar} aria-label="Cerrar" className="absolute top-3 right-3 text-[#b91c1c] opacity-70 hover:opacity-100">
          <X size={16} />
        </button>
      )}
    </Alert>
  )
}

export function Aviso({ children, tipo = 'info' }) {
  const estilos = {
    // Colores explícitos: tema.css reasigna sky/amber/emerald 100–400 (y sky-900)
    // para el fondo claro, y con esas clases el texto quedaba casi invisible.
    info: 'border-[#bae6fd] bg-[#f0f9ff] text-[#0c4a6e]',
    alerta: 'border-[#fde68a] bg-[#fffbeb] text-[#78350f]',
    exito: 'border-[#a7f3d0] bg-[#ecfdf5] text-[#064e3b]',
  }
  const Icono = { alerta: AlertTriangle, exito: CheckCircle2 }[tipo] ?? Info
  return (
    <Alert className={estilos[tipo]}>
      <Icono />
      <AlertDescription className="text-current">{children}</AlertDescription>
    </Alert>
  )
}

export const Cargando = ({ texto = 'Cargando…' }) => (
  <div className="flex items-center justify-center gap-2 py-8 text-sm text-slate-500">
    <Loader2 size={16} className="animate-spin" />
    {texto}
  </div>
)

/**
 * Ventana sobre la pantalla.
 *
 * Teclado: Esc la cierra (si ya escribiste algo, pide un segundo Esc para no
 * perderlo por un dedo) y Ctrl+Enter envía el formulario de adentro.
 *
 * Al guardar: si se envió el formulario y la ventana se cerró sola —sin tocar
 * Cancelar ni la X, y sin errores de validación—, avisa "Se guardó" en el
 * lugar de siempre (lib/notificaciones). `avisoAlGuardar={false}` lo apaga,
 * o un texto lo reemplaza.
 *
 * Los botones del pie del formulario quedan fijos abajo mientras se baja por
 * un formulario largo (estilo `.t-modal-cuerpo` en index.css).
 */
export function Modal({ abierto, ...props }) {
  if (!abierto) return null
  return <ModalAbierto {...props} />
}

function ModalAbierto({ titulo, onCerrar, children, ancho = 'max-w-lg', avisoAlGuardar = true }) {
  const cerrarRef = useRef(onCerrar)
  cerrarRef.current = onCerrar
  const caja = useRef(null)
  const estado = useRef({ enviado: 0, anulado: false, sucio: false, esc: 0 })

  useEffect(() => {
    const s = estado.current
    const alFallar = () => (s.anulado = true)
    // Esc lo maneja el Dialog de Radix (solo la ventana de arriba lo recibe);
    // acá solo Ctrl+Enter, y solo para la ventana de arriba.
    const tecla = (e) => {
      if (e.key !== 'Enter' || !(e.ctrlKey || e.metaKey)) return
      const abiertas = document.querySelectorAll('[data-slot="modal"]')
      if (abiertas[abiertas.length - 1] !== caja.current) return
      const form = caja.current?.querySelector('form')
      if (form) {
        e.preventDefault()
        form.requestSubmit()
      }
    }
    window.addEventListener('keydown', tecla)
    window.addEventListener(EVENTO_ERRORES, alFallar)
    return () => {
      window.removeEventListener('keydown', tecla)
      window.removeEventListener(EVENTO_ERRORES, alFallar)
      if (avisoAlGuardar && s.enviado && !s.anulado && Date.now() - s.enviado < 60000) {
        const texto = typeof avisoAlGuardar === 'string' ? avisoAlGuardar : 'Se guardó correctamente'
        avisar(typeof titulo === 'string' && avisoAlGuardar === true ? `${texto} · ${titulo}` : texto)
      }
    }
  }, [])

  const cerrar = () => {
    estado.current.anulado = true
    cerrarRef.current?.()
  }

  // El Dialog de shadcn/ui (Radix): atrapa el foco adentro, lo devuelve al
  // cerrar y anuncia la ventana a los lectores de pantalla. Va dentro del
  // Overlay para que un formulario largo se pueda desplazar entero.
  return (
    <DialogPrimitive.Root open onOpenChange={(abierto) => !abierto && cerrar()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4 pt-16 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=open]:fade-in-0">
          <DialogPrimitive.Content
            ref={caja}
            data-slot="modal"
            aria-describedby={undefined}
            className={cn(
              'w-full overflow-clip rounded-xl border bg-card text-card-foreground shadow-lg outline-none',
              'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
              ancho,
            )}
            onEscapeKeyDown={(e) => {
              // Con algo escrito, un segundo Esc: un dedo no borra un formulario.
              const s = estado.current
              if (s.sucio && Date.now() - s.esc > 2500) {
                e.preventDefault()
                s.esc = Date.now()
                avisar('Presiona Esc otra vez para cerrar sin guardar.', { tipo: 'info', duracion: 2500 })
              }
            }}
            onChangeCapture={() => (estado.current.sucio = true)}
            onSubmitCapture={() => Object.assign(estado.current, { enviado: Date.now(), anulado: false })}
            onClickCapture={(e) => {
              // Un botón que no envía (Cancelar, Volver...) después de enviar: si
              // la ventana se cierra, no fue por haber guardado.
              const b = e.target.closest?.('button')
              if (b && b.type !== 'submit' && estado.current.enviado) estado.current.anulado = true
            }}
          >
            <header className="flex items-center justify-between gap-4 border-b px-6 py-4">
              <DialogPrimitive.Title className="text-base leading-none font-semibold">{titulo}</DialogPrimitive.Title>
              <button
                type="button"
                onClick={cerrar}
                aria-label="Cerrar"
                className="rounded-md p-1 text-muted-foreground opacity-70 transition hover:bg-accent hover:opacity-100"
              >
                <X size={18} />
              </button>
            </header>
            <div className="t-modal-cuerpo p-6">{children}</div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

/**
 * Pedir el motivo antes de una acción que no se deshace.
 *
 * ── Por qué es un componente y no una ventana por pantalla ──
 *
 * Anular un cobro, rechazar un pago reportado, revocar una llave y cancelar una
 * incidencia son la misma conversación: mostrar qué se está por hacer, sobre
 * qué, y pedir por qué. Seis copias de esa ventana significan que el día que
 * haya que agregar un motivo frecuente o volver el campo obligatorio, hay que
 * acordarse de las seis — y la que se olvide queda distinta sin que nadie lo
 * note hasta que alguien la usa.
 *
 * ── Por qué el motivo se guarda acá adentro ──
 *
 * Para que quien la usa no tenga que llevar ese estado. Cada pantalla abre y
 * recibe el texto ya escrito; no necesita un `useState` para algo que solo vive
 * mientras la ventana está abierta.
 *
 * @param datos          pares [etiqueta, valor] con lo que hay que mirar antes de decidir
 * @param sugerencias    motivos frecuentes; se eligen con un clic y se pueden editar
 * @param advertencia    qué va a pasar de verdad, si no es obvio
 * @param onConfirmar    recibe el motivo ya recortado
 */
export function PedirMotivo({
  abierto,
  titulo,
  etiquetaAccion = 'Confirmar',
  variante = 'peligro',
  icon,
  datos = [],
  sugerencias = [],
  advertencia = null,
  ayuda = 'Queda guardado y es lo que se le contesta al abonado si pregunta.',
  cargando = false,
  onCancelar,
  onConfirmar,
  children = null,
}) {
  const [motivo, setMotivo] = useState('')

  // Se vacía al abrir y no al cerrar: si se limpiara al cerrar, un error de red
  // que deja la ventana abierta borraría lo que la persona acaba de escribir.
  useEffect(() => {
    if (abierto) setMotivo('')
  }, [abierto])

  const listo = motivo.trim().length > 0

  return (
    <Modal abierto={abierto} titulo={titulo} onCerrar={onCancelar} avisoAlGuardar={false}>
      <div className="space-y-4">
        {datos.length > 0 && <DatosEnFicha datos={datos} />}

        {advertencia && <Aviso tipo="alerta">{advertencia}</Aviso>}

        {children}

        {sugerencias.length > 0 && (
          <div>
            <span className="mb-2 block text-xs font-semibold text-slate-400">
              Motivos frecuentes
            </span>
            <div className="flex flex-wrap gap-2">
              {sugerencias.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMotivo(m)}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium transition ${
                    motivo === m
                      ? 'bg-[#F0F9FF] text-sky-400'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}

        <Field label="Motivo" hint={ayuda}>
          <Textarea
            rows={3}
            autoFocus
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            placeholder={
              sugerencias.length ? 'Elige uno de arriba o escribe el tuyo…' : 'Escribe el motivo…'
            }
          />
        </Field>

        <div className="flex justify-end gap-2 pt-1">
          <Button variante="fantasma" onClick={onCancelar}>
            Cancelar
          </Button>
          <Button
            variante={variante}
            icon={icon}
            // Sin motivo no se ejecuta. Un "Sin motivo indicado" guardado en la
            // base no le sirve a nadie dentro de tres meses.
            disabled={!listo}
            cargando={cargando}
            onClick={() => onConfirmar(motivo.trim())}
          >
            {etiquetaAccion}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

/** La ficha de datos de las ventanas de decisión: dos columnas, valor a la derecha. */
export function DatosEnFicha({ datos }) {
  return (
    <div className="rounded-xl bg-slate-800/60 p-3.5">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
        {datos.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-slate-500">{k}</dt>
            <dd className="t-dato text-right font-semibold text-slate-200">{v ?? '—'}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/**
 * Pestañas.
 *
 * `activa` y `onCambiar` viven afuera para que la pestaña abierta pueda
 * sincronizarse con la URL: al recargar o al compartir un link, la pantalla
 * tiene que abrir donde estabas y no volver a la primera.
 */
export function Tabs({ tabs, activa, onCambiar }) {
  return (
    <div className="overflow-x-auto">
      <nav role="tablist" className="inline-flex min-w-max items-center gap-1 rounded-lg bg-muted p-[3px] text-muted-foreground">
        {tabs.map((t) => {
          const esta = t.clave === activa
          return (
            <button
              key={t.clave}
              type="button"
              role="tab"
              aria-selected={esta}
              onClick={() => onCambiar(t.clave)}
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] font-medium whitespace-nowrap transition',
                esta ? 'bg-card text-foreground shadow-sm' : 'hover:text-foreground',
              )}
            >
              {t.icon && <t.icon size={14} />}
              {t.label}
              {t.contador != null && (
                <span className="t-dato rounded-full bg-muted-foreground/10 px-1.5 py-0.5 text-[10px]">{t.contador}</span>
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

/**
 * Esqueleto de carga.
 *
 * Se prefiere al spinner cuando ya se sabe qué forma va a tener el contenido:
 * dibuja el hueco del tamaño correcto y la pantalla no salta cuando llegan los
 * datos.
 */
export const Skeleton = ({ className = 'h-4 w-full' }) => (
  <div className={cn('animate-pulse rounded-md bg-muted', className)} />
)

export const SkeletonTabla = ({ filas = 5, columnas = 4 }) => (
  <div className="space-y-2">
    {Array.from({ length: filas }, (_, f) => (
      <div key={f} className="flex gap-3">
        {Array.from({ length: columnas }, (_, c) => (
          <Skeleton key={c} className={`h-8 ${c === 0 ? 'w-16' : 'flex-1'}`} />
        ))}
      </div>
    ))}
  </div>
)

/**
 * Punto de estado.
 *
 * Distingue tres cosas, no dos: "responde", "no responde" y "nadie preguntó
 * todavía". Pintar de rojo un equipo que simplemente no se consultó manda a
 * revisar una torre que está perfecta.
 */
export function Punto({ estado, titulo }) {
  const estilos = {
    online: 'bg-emerald-500',
    offline: 'bg-rose-500',
    desconocido: 'bg-slate-600',
  }
  return (
    <span
      title={titulo ?? estado}
      className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${estilos[estado] ?? estilos.desconocido}`}
    />
  )
}

/** ¿El valor mostrado es un cero? ("0", "$0.00", 0) — para atenuarlo. */
export const esCero = (v) => v === 0 || (typeof v === 'string' && /^\s*\$?\s*0([.,]0+)?\s*%?\s*$/.test(v))

/**
 * Tarjeta de métrica.
 *
 * Franja de 3px arriba y número grande con cifras tabulares (sin eso el ancho
 * del número cambia con cada actualización y la fila de KPIs se mueve sola).
 *
 * `tono` le da significado al color: 'critico' (hay que actuar), 'aviso' (hay
 * que mirarlo), 'ok' (en orden) o nada (dato neutro, color de marca). Un cero
 * se atenúa solo: "0 visitas hoy" no puede pesar lo mismo que "$782 vencidos".
 * `serie` (números, del más viejo al más nuevo) dibuja la tendencia y
 * `variacion` (en %) dice si se va mejor o peor; `mejorSiBaja` invierte el
 * color de la variación (menos tickets es bueno).
 */
export function Stat({ label, valor, sub, icon: Icon, color = 'text-sky-400', cargando = false, tono, serie, variacion, mejorSiBaja = false }) {
  // Mientras llega el primer dato, un hueco animado y no un "0": un cero que
  // después se vuelve 11 parece un dato real durante un segundo. Las recargas
  // siguientes dejan ver el número anterior.
  const yaCargo = useRef(false)
  if (!cargando) yaCargo.current = true
  const esperando = cargando && !yaCargo.current
  const cero = !esperando && esCero(valor)
  return (
    <div className={cn('t-kpi-card flex flex-col p-4 sm:p-5', tono && `t-tono-${tono}`, cero && 't-cero')}>
      <div className="flex items-center justify-between gap-2">
        <span className="min-w-0 truncate text-[13px] text-muted-foreground">{label}</span>
        {Icon && <Icon size={16} className={`shrink-0 ${cero ? 'text-slate-600' : color}`} />}
      </div>
      {/* El número abajo (mt-auto): en una tarjeta casi cuadrada, la etiqueta
          arriba y el dato abajo llenan el cuadrado sin un hueco al pie. */}
      {esperando ? (
        <Skeleton className="mt-auto h-8 w-20" />
      ) : (
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <p className={`t-kpi-valor ${String(valor ?? '').length > 7 ? 't-kpi-largo' : ''}`}>{valor}</p>
          {serie?.length > 1 && new Set(serie).size > 1 && <Tendencia serie={serie} />}
        </div>
      )}
      {!esperando && (sub || variacion != null) && (
        <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-[11px] text-slate-500">
          {variacion != null && <Variacion valor={variacion} mejorSiBaja={mejorSiBaja} />}
          {sub}
        </p>
      )}
    </div>
  )
}

/**
 * Línea de tendencia mínima (sparkline), en SVG y sin librería: para una línea
 * de 30 puntos no hace falta Recharts. Toma el color del texto (currentColor).
 */
export function Tendencia({ serie, ancho = 72, alto = 26, className = 'text-sky-500', fluido = false }) {
  // `fluido`: ocupa todo el ancho de su contenedor (se estira en horizontal).
  const max = Math.max(...serie)
  const min = Math.min(...serie)
  const rango = max - min || 1
  const puntos = serie.map((v, i) => [
    (i / (serie.length - 1)) * ancho,
    alto - 2 - ((v - min) / rango) * (alto - 4),
  ])
  const linea = puntos.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  return (
    <svg width={fluido ? '100%' : ancho} height={alto} viewBox={`0 0 ${ancho} ${alto}`} preserveAspectRatio={fluido ? 'none' : undefined}
      className={`shrink-0 ${className}`} aria-hidden="true">
      <path d={`${linea} L${ancho},${alto} L0,${alto} Z`} fill="currentColor" opacity="0.12" />
      <path d={linea} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

/** "+12%" verde o rojo según convenga; `mejorSiBaja` para lo que es bueno que baje. */
export function Variacion({ valor, mejorSiBaja = false, sufijo = 'vs. período anterior' }) {
  if (valor == null || !Number.isFinite(valor)) return null
  const redondo = Math.round(valor)
  if (redondo === 0) return <span className="font-semibold text-slate-500">= sin cambios</span>
  const bueno = mejorSiBaja ? redondo < 0 : redondo > 0
  return (
    <span className={`font-semibold ${bueno ? 'text-emerald-400' : 'text-red-400'}`} title={sufijo}>
      {redondo > 0 ? '▲' : '▼'} {Math.abs(redondo)}% <span className="font-normal text-slate-500">{sufijo}</span>
    </span>
  )
}

/**
 * Barra de proporciones: partes de un todo en una sola barra (al día / por
 * vencer / vencido). Se entiende de un vistazo qué porción pesa; la leyenda
 * lleva el número, porque el color solo no dice cuánto.
 * @param partes [{ nombre, valor, color (hex) }]
 */
export function BarraProporcion({ partes, alto = 'h-3' }) {
  const total = partes.reduce((s, p) => s + p.valor, 0)
  return (
    <div>
      <div className={`flex ${alto} w-full overflow-hidden rounded-full bg-slate-800`} role="img"
        aria-label={partes.map((p) => `${p.nombre}: ${p.valor}`).join(', ')}>
        {total > 0 && partes.filter((p) => p.valor > 0).map((p) => (
          <div key={p.nombre} style={{ width: `${(p.valor / total) * 100}%`, backgroundColor: p.color }} title={`${p.nombre}: ${p.valor}`} />
        ))}
      </div>
      <ul className="mt-3 space-y-2">
        {partes.map((p) => (
          <li key={p.nombre} className={`flex items-center gap-2.5 text-xs ${p.valor ? '' : 'opacity-60'}`}>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: p.color }} aria-hidden="true" />
            <span className="flex-1 truncate text-slate-400">{p.nombre}</span>
            <span className="t-dato font-bold text-slate-100">{p.valor}</span>
            <span className="t-dato w-10 text-right text-slate-500">{total ? Math.round((p.valor / total) * 100) : 0}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Filtros guardados con nombre ("Mis cortados del mes"), por pantalla.
 *
 * Se guardan en este navegador (localStorage): son una comodidad de quien
 * usa la pantalla, no un dato del sistema. Si el navegador no deja guardar
 * (modo privado), el botón sigue funcionando mientras la pestaña esté abierta.
 *
 * @param clave      nombre único de la pantalla, ej. 'clientes'
 * @param actual     los filtros de ahora, como objeto serializable
 * @param onAplicar  recibe el objeto guardado y lo pone en la pantalla
 */
export function FiltrosGuardados({ clave, actual, onAplicar }) {
  const llave = `filtros:${clave}`
  const [lista, setLista] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(llave) || '[]')
    } catch {
      return []
    }
  })
  const [abierto, setAbierto] = useState(false)
  const [nombre, setNombre] = useState('')
  const caja = useRef(null)

  const guardarLista = (nueva) => {
    setLista(nueva)
    try {
      localStorage.setItem(llave, JSON.stringify(nueva))
    } catch {
      /* sin almacenamiento: queda en memoria */
    }
  }

  useEffect(() => {
    if (!abierto) return
    const fuera = (e) => !caja.current?.contains(e.target) && setAbierto(false)
    document.addEventListener('mousedown', fuera)
    return () => document.removeEventListener('mousedown', fuera)
  }, [abierto])

  const guardar = () => {
    const n = nombre.trim()
    if (!n) return
    guardarLista([...lista.filter((f) => f.nombre !== n), { nombre: n, filtros: actual }])
    setNombre('')
    avisar(`Filtro «${n}» guardado`)
  }

  return (
    <div ref={caja} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setAbierto((a) => !a)}
        aria-expanded={abierto}
        title="Guardar este filtro o aplicar uno guardado"
        className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
      >
        <Bookmark size={14} />
        Filtros guardados{lista.length ? ` (${lista.length})` : ''}
      </button>
      {abierto && (
        <div className="t-card absolute right-0 z-30 mt-1 w-72 p-3 shadow-xl">
          {lista.length === 0 ? (
            <p className="mb-2 text-xs text-slate-500">Todavía no guardaste ningún filtro.</p>
          ) : (
            <ul className="mb-2 space-y-1">
              {lista.map((f) => (
                <li key={f.nombre} className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      onAplicar(f.filtros)
                      setAbierto(false)
                    }}
                    className="min-w-0 flex-1 truncate rounded-lg px-2 py-1.5 text-left text-sm text-slate-200 hover:bg-slate-800"
                  >
                    {f.nombre}
                  </button>
                  <button
                    type="button"
                    aria-label={`Quitar ${f.nombre}`}
                    onClick={() => guardarLista(lista.filter((x) => x.nombre !== f.nombre))}
                    className="rounded p-1 text-slate-500 hover:text-red-500"
                  >
                    <X size={13} />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="flex gap-2 border-t border-[rgba(15,23,42,0.06)] pt-2">
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), guardar())}
              placeholder="Ej.: Cortados con deuda"
              aria-label="Nombre del filtro"
              className={`${ESTILO_CAMPO} py-1.5 text-xs`}
            />
            <Button variante="primario" onClick={guardar} disabled={!nombre.trim()} className="py-1.5 text-xs">
              Guardar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Menú "⋯" de una fila: las acciones peligrosas (anular, borrar, dar de baja)
 * van acá y no como botón suelto al lado de "Imprimir", donde un clic de más
 * deshace plata cobrada. DropdownMenu de shadcn/ui.
 *
 * @param acciones [{ label, icon, onClick, peligro }] — los null se omiten
 */
export function MenuAcciones({ acciones, etiqueta = 'Más acciones', texto }) {
  const visibles = acciones.filter(Boolean)
  if (!visibles.length) return null
  return (
    // modal={false} y la acción en el siguiente turno: abrir una ventana
    // (PedirMotivo) desde el menú con los dos "modales" de Radix a la vez puede
    // dejar la página sin poder clickearse.
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        {texto ? (
          // En un encabezado: "Más ⋯" junto a la acción principal.
          <BotonShadcn variant="outline" aria-label={etiqueta}>
            {texto}
            <MoreHorizontal size={16} />
          </BotonShadcn>
        ) : (
          <BotonShadcn variant="ghost" size="icon" aria-label={etiqueta} title={etiqueta}>
            <MoreHorizontal size={16} />
          </BotonShadcn>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        {visibles.map((a, i) => (
          <span key={a.label}>
            {a.peligro && i > 0 && !visibles[i - 1].peligro && <DropdownMenuSeparator />}
            <DropdownMenuItem onSelect={() => setTimeout(a.onClick, 0)} variant={a.peligro ? 'destructive' : 'default'}>
              {a.icon && <a.icon size={15} />}
              {a.label}
            </DropdownMenuItem>
          </span>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
