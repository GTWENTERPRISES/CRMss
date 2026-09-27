import { useCallback, useEffect, useState } from 'react'
import { django } from './djangoClient'
import { modoDemo, demoDb } from './demo'

/**
 * CRUD sobre Django REST API (reemplazo de useTabla con Supabase).
 * Mantiene la misma interfaz para facilitar la migración.
 * 
 * Uso:
 * import { useTablaDjango as useTabla } from './useTablaDjango'
 * // o renombrar useTabla.js → useTablaDjango.js
 * 
 * const { filas, cargando, error, recargar, insertar, actualizar, eliminar } = useTabla('clientes')
 */
export function useTablaDjango(tabla, { select = '*', orderBy = 'created_at', ascending = false } = {}) {
  const [filas, setFilas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const recargar = useCallback(async () => {
    setCargando(true)
    setError(null)

    if (modoDemo) {
      setFilas(await demoDb.listar(tabla, { orderBy, ascending }))
      setCargando(false)
      return
    }

    const { data, error: err } = await django
      .from(tabla)
      .select(select)
      .order(orderBy, { ascending })
    
    if (err) setError(traducir(err, tabla))
    else setFilas(data ?? [])
    setCargando(false)
  }, [tabla, select, orderBy, ascending])

  useEffect(() => {
    recargar()
  }, [recargar])

  const insertar = useCallback(
    async (fila) => {
      if (modoDemo) {
        const nueva = await demoDb.insertar(tabla, fila)
        await recargar()
        return nueva
      }
      
      const { data, error: err } = await django.from(tabla).insert(fila).select().single()
      if (err) throw traducir(err, tabla)
      await recargar()
      return data
    },
    [tabla, recargar],
  )

  const actualizar = useCallback(
    async (id, cambios) {
      if (modoDemo) {
        await demoDb.actualizar(tabla, id, cambios)
      } else {
        const { error: err } = await django.from(tabla).update(cambios).eq('id', id)
        if (err) throw traducir(err, tabla)
      }
      await recargar()
    },
    [tabla, recargar],
  )

  const eliminar = useCallback(
    async (id) => {
      if (modoDemo) {
        await demoDb.eliminar(tabla, id)
      } else {
        const { error: err } = await django.from(tabla).delete().eq('id', id)
        if (err) throw traducir(err, tabla)
      }
      await recargar()
    },
    [tabla, recargar],
  )

  return { filas, cargando, error, recargar, insertar, actualizar, eliminar, setError }
}

/** Convierte los errores de Django REST en mensajes útiles. */
function traducir(err, tabla) {
  const e = new Error(err.message)
  e.hint = err.details?.hint || ''

  // Códigos HTTP comunes
  if (err.code === 404) {
    e.message = `La tabla "${tabla}" no existe o el registro no fue encontrado`
    e.hint = 'Verificá que el modelo Django esté creado y migrado.'
  } else if (err.code === 401 || err.code === 403) {
    e.message = `Sin permiso para operar sobre "${tabla}"`
    e.hint = 'Verificá que estés autenticado y que tu usuario tenga permisos sobre este recurso.'
  } else if (err.code === 400 && err.message.includes('unique')) {
    e.message = 'Ya existe un registro con esos datos'
    e.hint = err.details?.detail || 'Violación de constraint UNIQUE'
  } else if (err.code === 400 && err.message.includes('foreign key')) {
    e.message = 'El registro está referenciado por otro y no se puede borrar'
    e.hint = err.details?.detail || 'Violación de constraint FOREIGN KEY'
  } else if (err.code === 500) {
    e.message = 'Error del servidor'
    e.hint = 'Revisá los logs del backend Django para más detalles.'
  }

  return e
}

// Exportar también como useTabla para drop-in replacement
export { useTablaDjango as useTabla }
