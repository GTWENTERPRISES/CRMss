import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Une clases de Tailwind sin duplicados (la utilidad estándar de shadcn/ui). */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
