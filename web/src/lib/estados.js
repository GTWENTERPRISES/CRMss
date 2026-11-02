/**
 * Un solo mapa de colores de estado para todo el sistema.
 *
 * Verde = funciona / al día, ámbar = hay que mirarlo, rojo = hay que actuar,
 * azul = en trámite, gris = cerrado o sin datos. Si cada pantalla elige los
 * suyos, "rojo" deja de significar lo mismo de una a otra, y el color se
 * vuelve decoración. Los nombres de color son los de <Badge> (components/ui).
 */
import { ArrowLeftRight, Banknote, CircleDollarSign, CreditCard, Landmark, Smartphone } from 'lucide-react'

export const COLOR_ESTADO = {
  abonado: { activo: 'verde', cortado: 'rojo', suspendido: 'ambar', baja: 'gris' },
  factura: { pagada: 'verde', pendiente: 'ambar', vencida: 'rojo', anulada: 'gris' },
  // Comprobante electrónico del SRI.
  comprobante: {
    BORRADOR: 'gris', FIRMADO: 'azul', ENVIADO: 'ambar', AUTORIZADO: 'verde', NO_AUTORIZADO: 'rojo', ANULADO: 'rojo',
  },
  instalacion: { prospecto: 'gris', agendada: 'azul', en_curso: 'ambar', hecha: 'verde', cancelada: 'gris' },
  contrato: { vigente: 'verde', terminado: 'gris', anulado: 'rojo', suspendido: 'ambar' },
}

/** El mismo color en hexadecimal, para lo que no usa <Badge> (mapas, gráficos). */
export const HEX = { verde: '#10b981', rojo: '#ef4444', ambar: '#f59e0b', azul: '#0ea5e9', gris: '#64748b' }

export const ETIQUETA_ESTADO_ABONADO = {
  activo: 'Activo', cortado: 'Cortado', suspendido: 'Suspendido', baja: 'Retirado',
}

/** Formas de pago: el nombre que se muestra y su ícono. */
export const FORMAS_PAGO = {
  efectivo: { label: 'Efectivo', icono: Banknote },
  transferencia: { label: 'Transferencia', icono: ArrowLeftRight },
  deposito: { label: 'Depósito', icono: Landmark },
  tarjeta: { label: 'Tarjeta', icono: CreditCard },
  billetera: { label: 'Billetera digital', icono: Smartphone },
  otro: { label: 'Otro', icono: CircleDollarSign },
}

export const formaDePago = (valor) =>
  FORMAS_PAGO[valor] ?? { label: valor ? valor.charAt(0).toUpperCase() + valor.slice(1) : '—', icono: CircleDollarSign }
