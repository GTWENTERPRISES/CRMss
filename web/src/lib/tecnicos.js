import { django } from './djangoClient'

/**
 * API de Técnicos - Django REST Framework
 * 
 * Funciones para gestionar técnicos del sistema
 */

export const tecnicosApi = {
  /**
   * Listar todos los técnicos
   * @param {Object} filtros - Filtros opcionales
   * @returns {Promise<Array>}
   */
  async listar(filtros = {}) {
    let query = django.from('tecnicos').select('*').order('nombre')
    
    // Aplicar filtros
    if (filtros.activo !== undefined) {
      query = query.eq('activo', filtros.activo)
    }
    if (filtros.especialidad) {
      query = query.eq('especialidad', filtros.especialidad)
    }
    
    const { data, error } = await query
    if (error) throw error
    return data || []
  },

  /**
   * Listar técnicos activos (shortcut común)
   * @returns {Promise<Array>}
   */
  async listarActivos() {
    const { data, error } = await django
      .from('tecnicos')
      .select('id, nombre, especialidad, telefono, email')
      .eq('activo', true)
      .order('nombre')
    
    if (error) throw error
    return data || []
  },

  /**
   * Obtener un técnico por ID
   * @param {string} id - UUID del técnico
   * @returns {Promise<Object>}
   */
  async obtener(id) {
    const { data, error } = await django
      .from('tecnicos')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Crear un nuevo técnico
   * @param {Object} datos - Datos del técnico
   * @returns {Promise<Object>}
   */
  async crear(datos) {
    const { data, error } = await django
      .from('tecnicos')
      .insert(datos)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Actualizar un técnico existente
   * @param {string} id - UUID del técnico
   * @param {Object} datos - Datos a actualizar
   * @returns {Promise<Object>}
   */
  async actualizar(id, datos) {
    const { data, error } = await django
      .from('tecnicos')
      .update(datos)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  /**
   * Eliminar (desactivar) un técnico
   * @param {string} id - UUID del técnico
   * @returns {Promise<void>}
   */
  async eliminar(id) {
    const { error } = await django
      .from('tecnicos')
      .update({ activo: false })
      .eq('id', id)
    
    if (error) throw error
  },

  /**
   * Guardar técnico (crear o actualizar)
   * @param {Object} tecnico - Datos del técnico (con o sin id)
   * @returns {Promise<Object>}
   */
  async guardar(tecnico) {
    const { id, ...datos } = tecnico
    
    if (id) {
      return await this.actualizar(id, datos)
    } else {
      return await this.crear(datos)
    }
  },

  /**
   * Listar técnicos por especialidad
   * @param {string} especialidad - instalacion, soporte, redes, general
   * @returns {Promise<Array>}
   */
  async porEspecialidad(especialidad) {
    const { data, error } = await django
      .from('tecnicos')
      .select('*')
      .eq('especialidad', especialidad)
      .eq('activo', true)
      .order('nombre')
    
    if (error) throw error
    return data || []
  },

  /**
   * Buscar técnicos por nombre
   * @param {string} termino - Término de búsqueda
   * @returns {Promise<Array>}
   */
  async buscar(termino) {
    const { data, error } = await django
      .from('tecnicos')
      .select('*')
      .ilike('nombre', `%${termino}%`)
      .eq('activo', true)
      .order('nombre')
    
    if (error) throw error
    return data || []
  },
}

/**
 * Hook de React para usar técnicos
 * @returns {Object}
 */
export function useTecnicos() {
  const [tecnicos, setTecnicos] = React.useState([])
  const [cargando, setCargando] = React.useState(false)
  const [error, setError] = React.useState(null)

  const cargar = async (filtros = {}) => {
    setCargando(true)
    setError(null)
    try {
      const data = await tecnicosApi.listar(filtros)
      setTecnicos(data)
    } catch (err) {
      setError(err)
      console.error('Error cargando técnicos:', err)
    } finally {
      setCargando(false)
    }
  }

  return {
    tecnicos,
    cargando,
    error,
    cargar,
    refrescar: cargar,
  }
}

// Constantes
export const ESPECIALIDADES = {
  INSTALACION: 'instalacion',
  SOPORTE: 'soporte',
  REDES: 'redes',
  GENERAL: 'general',
}

export const ESPECIALIDADES_LABELS = {
  instalacion: 'Instalación',
  soporte: 'Soporte',
  redes: 'Redes',
  general: 'General',
}
