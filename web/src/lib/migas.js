/**
 * La última miga de la ruta de navegación ("Clientes › Usuarios › María García").
 *
 * Las migas salen solas del menú; lo único que el menú no sabe es el nombre del
 * registro abierto (el cliente, el ticket). La pantalla de detalle lo dice con
 * `useMiga(cliente?.nombre)` y lo borra al salir.
 */
import { useEffect, useSyncExternalStore } from 'react'

let actual = null
const oyentes = new Set()
const emitir = () => oyentes.forEach((f) => f())

export function useMiga(texto) {
  useEffect(() => {
    if (!texto) return undefined
    actual = texto
    emitir()
    return () => {
      if (actual === texto) {
        actual = null
        emitir()
      }
    }
  }, [texto])
}

export function useMigaActual() {
  return useSyncExternalStore(
    (f) => {
      oyentes.add(f)
      return () => oyentes.delete(f)
    },
    () => actual,
    () => null,
  )
}
