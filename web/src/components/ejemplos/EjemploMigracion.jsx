/**
 * Componente de ejemplo que muestra cómo usar djangoClient
 * Compatible con la API de Supabase - migración transparente
 */

'use client'

import { useState, useEffect } from 'react'
import { django } from '@/lib/djangoClient'
import { useTablaDjango } from '@/lib/useTablaDjango'

export default function EjemploMigracion() {
  const [modo, setModo] = useState('hook') // 'hook' | 'manual'
  
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Ejemplo de Migración Supabase → Django</h1>
      
      <div className="flex gap-4">
        <button
          onClick={() => setModo('hook')}
          className={`px-4 py-2 rounded ${
            modo === 'hook' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Usando Hook useTabla
        </button>
        <button
          onClick={() => setModo('manual')}
          className={`px-4 py-2 rounded ${
            modo === 'manual' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Usando django.from() manual
        </button>
      </div>

      {modo === 'hook' ? <EjemploConHook /> : <EjemploManual />}
    </div>
  )
}

/**
 * Ejemplo 1: Usando el hook useTabla (más simple)
 */
function EjemploConHook() {
  const { filas, cargando, error, insertar, actualizar, eliminar } = useTablaDjango('clientes', {
    orderBy: 'nombre',
    ascending: true,
  })

  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    cedula: '',
  })

  const handleInsertar = async (e) => {
    e.preventDefault()
    try {
      await insertar(nuevoCliente)
      alert('Cliente creado correctamente')
      setNuevoCliente({ nombre: '', apellido: '', email: '', telefono: '', cedula: '' })
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const handleActualizar = async (id) => {
    try {
      await actualizar(id, { estado: 'suspendido' })
      alert('Cliente actualizado')
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const handleEliminar = async (id) => {
    if (!confirm('¿Eliminar este cliente?')) return
    try {
      await eliminar(id)
      alert('Cliente eliminado')
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  if (cargando) {
    return <div className="p-4 bg-blue-100 rounded">Cargando clientes...</div>
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 rounded">
        <p className="font-bold">Error:</p>
        <p>{error.message}</p>
        {error.hint && <p className="text-sm mt-2">Hint: {error.hint}</p>}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">✅ Usando Hook useTabla</h2>
        <p className="text-sm text-gray-600">
          Esta es la forma más simple. El hook maneja el estado, loading y errores automáticamente.
        </p>
      </div>

      {/* Formulario de creación */}
      <form onSubmit={handleInsertar} className="bg-white p-4 rounded shadow space-y-3">
        <h3 className="font-bold">Crear Nuevo Cliente</h3>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Nombre"
            value={nuevoCliente.nombre}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={nuevoCliente.apellido}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, apellido: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={nuevoCliente.email}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, email: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={nuevoCliente.telefono}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Cédula"
            value={nuevoCliente.cedula}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, cedula: e.target.value })}
            className="border p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Crear Cliente
        </button>
      </form>

      {/* Lista de clientes */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold mb-3">Lista de Clientes ({filas.length})</h3>
        {filas.length === 0 ? (
          <p className="text-gray-500">No hay clientes registrados</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Nombre</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Teléfono</th>
                <th className="p-2 text-left">Estado</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((cliente) => (
                <tr key={cliente.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">
                    {cliente.nombre} {cliente.apellido}
                  </td>
                  <td className="p-2">{cliente.email}</td>
                  <td className="p-2">{cliente.telefono}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        cliente.estado === 'activo'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {cliente.estado || 'activo'}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleActualizar(cliente.id)}
                      className="text-blue-600 hover:underline mr-2"
                    >
                      Suspender
                    </button>
                    <button
                      onClick={() => handleEliminar(cliente.id)}
                      className="text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

/**
 * Ejemplo 2: Usando django.from() manual (más control)
 */
function EjemploManual() {
  const [clientes, setClientes] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  // Cargar clientes
  useEffect(() => {
    cargarClientes()
  }, [])

  const cargarClientes = async () => {
    setCargando(true)
    setError(null)
    try {
      const { data, error: err } = await django
        .from('clientes')
        .select('*')
        .eq('estado', 'activo')
        .order('created_at', { ascending: false })
        .limit(10)

      if (err) throw err
      setClientes(data || [])
    } catch (err) {
      setError(err)
    } finally {
      setCargando(false)
    }
  }

  const buscarPorEmail = async (email) => {
    setCargando(true)
    try {
      const { data, error: err } = await django
        .from('clientes')
        .select('*')
        .like('email', `*${email}*`)

      if (err) throw err
      setClientes(data || [])
    } catch (err) {
      setError(err)
    } finally {
      setCargando(false)
    }
  }

  const llamarRPC = async () => {
    try {
      const { data, error: err } = await django.rpc('clientes_estadisticas_basicas')
      if (err) throw err
      alert(JSON.stringify(data, null, 2))
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">🔧 Usando django.from() Manual</h2>
        <p className="text-sm text-gray-600">
          Más control sobre las queries. Útil para filtros complejos o lógica personalizada.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={cargarClientes}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Recargar Clientes Activos
        </button>
        <button
          onClick={() => {
            const email = prompt('Buscar por email:')
            if (email) buscarPorEmail(email)
          }}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Buscar por Email
        </button>
        <button
          onClick={llamarRPC}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Llamar RPC (Estadísticas)
        </button>
      </div>

      {cargando && <div className="p-4 bg-blue-100 rounded">Cargando...</div>}

      {error && (
        <div className="p-4 bg-red-100 rounded">
          <p className="font-bold">Error:</p>
          <p>{error.message}</p>
        </div>
      )}

      {!cargando && !error && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-3">Resultados ({clientes.length})</h3>
          {clientes.length === 0 ? (
            <p className="text-gray-500">No se encontraron clientes</p>
          ) : (
            <ul className="space-y-2">
              {clientes.map((cliente) => (
                <li key={cliente.id} className="p-3 border rounded hover:bg-gray-50">
                  <div className="font-bold">
                    {cliente.nombre} {cliente.apellido}
                  </div>
                  <div className="text-sm text-gray-600">{cliente.email}</div>
                  <div className="text-sm text-gray-600">{cliente.telefono}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Código de ejemplo */}
      <div className="bg-gray-900 text-white p-4 rounded">
        <h3 className="font-bold mb-2">💻 Código:</h3>
        <pre className="text-xs overflow-x-auto">
          {`// Cargar todos los clientes activos
const { data } = await django
  .from('clientes')
  .select('*')
  .eq('estado', 'activo')
  .order('created_at', { ascending: false })
  .limit(10)

// Buscar por email (LIKE)
const { data } = await django
  .from('clientes')
  .select('*')
  .like('email', '*@gmail.com*')

// Llamar función RPC
const { data } = await django.rpc('clientes_estadisticas_basicas')
`}
        </pre>
      </div>
    </div>
  )
}
