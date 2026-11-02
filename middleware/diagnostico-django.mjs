/**
 * PRUEBA del cliente de datos del middleware contra Django.
 *
 * Se corre con Django levantado (puerto 8000) y el usuario de servicio ya
 * creado (python manage.py sincronizar_personal):
 *
 *   cd middleware && node diagnostico-django.mjs
 *
 * Usa la tabla tecnicos, que existe en cualquier base migrada (en SQLite de
 * desarrollo también). Verifica: login de servicio, listado con conteo,
 * maybeSingle y upsert.
 */
import 'dotenv/config'
import { db } from './src/lib/djangoDb.js'

const mostrar = (etiqueta, { data, error, count }) => {
  if (error) {
    console.log(`✗ ${etiqueta}: ${error.message} (code ${error.code})`)
    process.exitCode = 1
    return null
  }
  console.log(`✔ ${etiqueta}${count !== undefined && count !== null ? ` · total ${count}` : ''}`)
  return data
}

// 1. Listado con conteo — el login del servicio es transparente.
const filas = mostrar('listado con count=exact', await db().from('tecnicos').select('*', { count: 'exact' }))
console.log(`  filas: ${filas?.length ?? 0}`)

// 2. maybeSingle + orden + límite.
const primero = mostrar(
  'primero por nombre (maybeSingle)',
  await db().from('tecnicos').select('id, nombre').order('nombre', { ascending: true }).limit(1).maybeSingle(),
)
console.log(`  nombre: ${primero?.nombre ?? '—'}`)

// 3. Insert → upsert por id → delete (una vuelta completa de escritura).
const { data: nuevo, error: errInsert } = await db()
  .from('tecnicos')
  .insert({ nombre: 'PRUEBA djangoDb', telefono: '0999999999', activo: true })
  .select()
  .single()
if (errInsert) {
  console.log(`✗ insert: ${errInsert.message}`)
  process.exit(1)
}
console.log(`✔ insert · id ${nuevo.id}`)

const { error: errUpsert } = await db()
  .from('tecnicos')
  .upsert({ id: nuevo.id, nombre: 'PRUEBA djangoDb 2', activo: false }, { onConflict: 'id' })
if (errUpsert) {
  console.log(`✗ upsert: ${errUpsert.message}`)
  process.exit(1)
}
console.log('✔ upsert por id')

const { data: editado } = await db().from('tecnicos').select('nombre, activo').eq('id', nuevo.id).single()
console.log(`✔ lectura del upsert · nombre "${editado.nombre}" activo ${editado.activo}`)

const { error: errBorrar } = await db().from('tecnicos').delete().eq('id', nuevo.id)
if (errBorrar) {
  console.log(`✗ delete: ${errBorrar.message}`)
  process.exit(1)
}
console.log('✔ delete — prueba completa OK')
