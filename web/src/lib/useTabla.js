import { useCallback, useEffect, useState } from 'react'
import { django } from './djangoClient'
import { modoDemo, demoDb } from './demo'

/**
 * CRUD sobre una tabla via Django REST Framework.
 *
 * API idéntica al useTabla original.
 * El frontend habla con Django que a su vez habla con PostgreSQL.
 */
export function useTabla(tabla, { select = '*', orderBy = 'created_at', ascending = false } = {}) {
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
    async (id, cambios) => {
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

/** Convierte errores de Django/PostgreSQL en mensajes legibles. */
function traducir(err, tabla) {
  const e = new Error(err.message)
  e.hint = err.hint

  if (err.code === 404 || /not found/i.test(err.message)) {
    e.message = `La tabla "${tabla}" no existe en Django`
    e.hint = 'Verifica que la tabla esté registrada en views_generic.py o exista en PostgreSQL.'
  } else if (err.code === 401 || err.code === 403) {
    e.message = `Sin permiso para operar sobre "${tabla}"`
    e.hint = 'El token JWT expiró o no existe. Vuelve a iniciar sesión.'
  } else if (err.code === 'NETWORK_ERROR') {
    e.message = 'No se puede conectar con el backend Django'
    e.hint = 'Verifica que Django esté corriendo en http://localhost:8000'
  } else if (/unique/i.test(err.message)) {
    e.message = 'Ya existe un registro con esos datos'
    e.hint = err.details
  } else if (/foreign key/i.test(err.message)) {
    e.message = 'El registro está referenciado por otro y no se puede borrar'
    e.hint = err.details
  }

  return e
}
