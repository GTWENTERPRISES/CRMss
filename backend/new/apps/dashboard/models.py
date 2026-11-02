"""
Los modelos de las tablas del dashboard que no tienen dueño en otra app.

Las columnas están en `columnas.py`. Las
tablas con dueño (clientes, olts, tickets...) heredan su clase de
`columnas.py` en su propia app.
"""
from . import columnas


class SriConfig(columnas.ColumnasSriConfig):
    class Meta(columnas.ColumnasSriConfig.Meta):
        db_table = 'sri_config'


class SriSequences(columnas.ColumnasSriSequences):
    class Meta(columnas.ColumnasSriSequences.Meta):
        db_table = 'sri_sequences'


class ElectronicDocuments(columnas.ColumnasElectronicDocuments):
    class Meta(columnas.ColumnasElectronicDocuments.Meta):
        db_table = 'electronic_documents'


class DocumentItems(columnas.ColumnasDocumentItems):
    class Meta(columnas.ColumnasDocumentItems.Meta):
        db_table = 'document_items'


class RetencionItems(columnas.ColumnasRetencionItems):
    class Meta(columnas.ColumnasRetencionItems.Meta):
        db_table = 'retencion_items'


class CuentasPago(columnas.ColumnasCuentasPago):
    class Meta(columnas.ColumnasCuentasPago.Meta):
        db_table = 'cuentas_pago'


class PromesasPago(columnas.ColumnasPromesasPago):
    class Meta(columnas.ColumnasPromesasPago.Meta):
        db_table = 'promesas_pago'


class PuntosRed(columnas.ColumnasPuntosRed):
    class Meta(columnas.ColumnasPuntosRed.Meta):
        db_table = 'puntos_red'


class SriSecuencialesLibres(columnas.ColumnasSriSecuencialesLibres):
    class Meta(columnas.ColumnasSriSecuencialesLibres.Meta):
        db_table = 'sri_secuenciales_libres'


class Cuadrillas(columnas.ColumnasCuadrillas):
    class Meta(columnas.ColumnasCuadrillas.Meta):
        db_table = 'cuadrillas'


class CuadrillaMiembros(columnas.ColumnasCuadrillaMiembros):
    class Meta(columnas.ColumnasCuadrillaMiembros.Meta):
        db_table = 'cuadrilla_miembros'


class TicketEventos(columnas.ColumnasTicketEventos):
    class Meta(columnas.ColumnasTicketEventos.Meta):
        db_table = 'ticket_eventos'


class TicketAdjuntos(columnas.ColumnasTicketAdjuntos):
    class Meta(columnas.ColumnasTicketAdjuntos.Meta):
        db_table = 'ticket_adjuntos'


class PlantillasMensaje(columnas.ColumnasPlantillasMensaje):
    class Meta(columnas.ColumnasPlantillasMensaje.Meta):
        db_table = 'plantillas_mensaje'


class Comunicaciones(columnas.ColumnasComunicaciones):
    class Meta(columnas.ColumnasComunicaciones.Meta):
        db_table = 'comunicaciones'


class Documentos(columnas.ColumnasDocumentos):
    class Meta(columnas.ColumnasDocumentos.Meta):
        db_table = 'documentos'


class EquiposCliente(columnas.ColumnasEquiposCliente):
    class Meta(columnas.ColumnasEquiposCliente.Meta):
        db_table = 'equipos_cliente'


class ConsumoDiario(columnas.ColumnasConsumoDiario):
    class Meta(columnas.ColumnasConsumoDiario.Meta):
        db_table = 'consumo_diario'


class SesionesConexion(columnas.ColumnasSesionesConexion):
    class Meta(columnas.ColumnasSesionesConexion.Meta):
        db_table = 'sesiones_conexion'


class ComandosEjecutados(columnas.ColumnasComandosEjecutados):
    class Meta(columnas.ColumnasComandosEjecutados.Meta):
        db_table = 'comandos_ejecutados'


class ConsumoContadores(columnas.ColumnasConsumoContadores):
    class Meta(columnas.ColumnasConsumoContadores.Meta):
        db_table = 'consumo_contadores'


class InstalacionFotos(columnas.ColumnasInstalacionFotos):
    class Meta(columnas.ColumnasInstalacionFotos.Meta):
        db_table = 'instalacion_fotos'


class Subredes(columnas.ColumnasSubredes):
    class Meta(columnas.ColumnasSubredes.Meta):
        db_table = 'subredes'


class NodosRed(columnas.ColumnasNodosRed):
    class Meta(columnas.ColumnasNodosRed.Meta):
        db_table = 'nodos_red'


class NodoEventos(columnas.ColumnasNodoEventos):
    class Meta(columnas.ColumnasNodoEventos.Meta):
        db_table = 'nodo_eventos'


class PlanRouters(columnas.ColumnasPlanRouters):
    class Meta(columnas.ColumnasPlanRouters.Meta):
        db_table = 'plan_routers'


class OltBackups(columnas.ColumnasOltBackups):
    class Meta(columnas.ColumnasOltBackups.Meta):
        db_table = 'olt_backups'


class OnuOpticaHistorial(columnas.ColumnasOnuOpticaHistorial):
    class Meta(columnas.ColumnasOnuOpticaHistorial.Meta):
        db_table = 'onu_optica_historial'


class AutorizacionPresets(columnas.ColumnasAutorizacionPresets):
    class Meta(columnas.ColumnasAutorizacionPresets.Meta):
        db_table = 'autorizacion_presets'


class OntsPreautorizadas(columnas.ColumnasOntsPreautorizadas):
    class Meta(columnas.ColumnasOntsPreautorizadas.Meta):
        db_table = 'onts_preautorizadas'


class VlansOlt(columnas.ColumnasVlansOlt):
    class Meta(columnas.ColumnasVlansOlt.Meta):
        db_table = 'vlans_olt'


class PuertosPon(columnas.ColumnasPuertosPon):
    class Meta(columnas.ColumnasPuertosPon.Meta):
        db_table = 'puertos_pon'


class Licencia(columnas.ColumnasLicencia):
    class Meta(columnas.ColumnasLicencia.Meta):
        db_table = 'licencia'


class ConfigMensajeria(columnas.ColumnasConfigMensajeria):
    class Meta(columnas.ColumnasConfigMensajeria.Meta):
        db_table = 'config_mensajeria'


class ConfigTareas(columnas.ColumnasConfigTareas):
    class Meta(columnas.ColumnasConfigTareas.Meta):
        db_table = 'config_tareas'


class ConfigGeneral(columnas.ColumnasConfigGeneral):
    class Meta(columnas.ColumnasConfigGeneral.Meta):
        db_table = 'config_general'


class PortalCodigos(columnas.ColumnasPortalCodigos):
    class Meta(columnas.ColumnasPortalCodigos.Meta):
        db_table = 'portal_codigos'


class PortalSesiones(columnas.ColumnasPortalSesiones):
    class Meta(columnas.ColumnasPortalSesiones.Meta):
        db_table = 'portal_sesiones'


class PortalSolicitudes(columnas.ColumnasPortalSolicitudes):
    class Meta(columnas.ColumnasPortalSolicitudes.Meta):
        db_table = 'portal_solicitudes'


class UsuariosSistema(columnas.ColumnasUsuariosSistema):
    class Meta(columnas.ColumnasUsuariosSistema.Meta):
        db_table = 'usuarios_sistema'


class AuditoriaSistema(columnas.ColumnasAuditoriaSistema):
    class Meta(columnas.ColumnasAuditoriaSistema.Meta):
        db_table = 'auditoria_sistema'


class Prospectos(columnas.ColumnasProspectos):
    class Meta(columnas.ColumnasProspectos.Meta):
        db_table = 'prospectos'


class ProspectoActividades(columnas.ColumnasProspectoActividades):
    class Meta(columnas.ColumnasProspectoActividades.Meta):
        db_table = 'prospecto_actividades'


class Cotizaciones(columnas.ColumnasCotizaciones):
    class Meta(columnas.ColumnasCotizaciones.Meta):
        db_table = 'cotizaciones'


class ZonasCobertura(columnas.ColumnasZonasCobertura):
    class Meta(columnas.ColumnasZonasCobertura.Meta):
        db_table = 'zonas_cobertura'


class VerificacionesCobertura(columnas.ColumnasVerificacionesCobertura):
    class Meta(columnas.ColumnasVerificacionesCobertura.Meta):
        db_table = 'verificaciones_cobertura'


class MetasVenta(columnas.ColumnasMetasVenta):
    class Meta(columnas.ColumnasMetasVenta.Meta):
        db_table = 'metas_venta'


class Almacenes(columnas.ColumnasAlmacenes):
    class Meta(columnas.ColumnasAlmacenes.Meta):
        db_table = 'almacenes'


class Articulos(columnas.ColumnasArticulos):
    class Meta(columnas.ColumnasArticulos.Meta):
        db_table = 'articulos'


class Equipos(columnas.ColumnasEquipos):
    class Meta(columnas.ColumnasEquipos.Meta):
        db_table = 'equipos'


class Proveedores(columnas.ColumnasProveedores):
    class Meta(columnas.ColumnasProveedores.Meta):
        db_table = 'proveedores'


class Compras(columnas.ColumnasCompras):
    class Meta(columnas.ColumnasCompras.Meta):
        db_table = 'compras'


class CompraItems(columnas.ColumnasCompraItems):
    class Meta(columnas.ColumnasCompraItems.Meta):
        db_table = 'compra_items'


class MovimientosInventario(columnas.ColumnasMovimientosInventario):
    class Meta(columnas.ColumnasMovimientosInventario.Meta):
        db_table = 'movimientos_inventario'


class Existencias(columnas.ColumnasExistencias):
    class Meta(columnas.ColumnasExistencias.Meta):
        db_table = 'existencias'


class ConfigCartera(columnas.ColumnasConfigCartera):
    class Meta(columnas.ColumnasConfigCartera.Meta):
        db_table = 'config_cartera'


class CobranzaAsignaciones(columnas.ColumnasCobranzaAsignaciones):
    class Meta(columnas.ColumnasCobranzaAsignaciones.Meta):
        db_table = 'cobranza_asignaciones'


class CobranzaGestiones(columnas.ColumnasCobranzaGestiones):
    class Meta(columnas.ColumnasCobranzaGestiones.Meta):
        db_table = 'cobranza_gestiones'


class Expedientes(columnas.ColumnasExpedientes):
    class Meta(columnas.ColumnasExpedientes.Meta):
        db_table = 'expedientes'


class ExpedienteDocumentos(columnas.ColumnasExpedienteDocumentos):
    class Meta(columnas.ColumnasExpedienteDocumentos.Meta):
        db_table = 'expediente_documentos'


class UsuarioDispositivos(columnas.ColumnasUsuarioDispositivos):
    class Meta(columnas.ColumnasUsuarioDispositivos.Meta):
        db_table = 'usuario_dispositivos'


class Notificaciones(columnas.ColumnasNotificaciones):
    class Meta(columnas.ColumnasNotificaciones.Meta):
        db_table = 'notificaciones'


class Promociones(columnas.ColumnasPromociones):
    class Meta(columnas.ColumnasPromociones.Meta):
        db_table = 'promociones'


class PromocionPlanes(columnas.ColumnasPromocionPlanes):
    class Meta(columnas.ColumnasPromocionPlanes.Meta):
        db_table = 'promocion_planes'


class MensajesComerciales(columnas.ColumnasMensajesComerciales):
    class Meta(columnas.ColumnasMensajesComerciales.Meta):
        db_table = 'mensajes_comerciales'


class ParametrosTecnicos(columnas.ColumnasParametrosTecnicos):
    class Meta(columnas.ColumnasParametrosTecnicos.Meta):
        db_table = 'parametros_tecnicos'


class Vehiculos(columnas.ColumnasVehiculos):
    class Meta(columnas.ColumnasVehiculos.Meta):
        db_table = 'vehiculos'


class Jornadas(columnas.ColumnasJornadas):
    class Meta(columnas.ColumnasJornadas.Meta):
        db_table = 'jornadas'


class CargasCombustible(columnas.ColumnasCargasCombustible):
    class Meta(columnas.ColumnasCargasCombustible.Meta):
        db_table = 'cargas_combustible'


class ReemplazosEquipo(columnas.ColumnasReemplazosEquipo):
    class Meta(columnas.ColumnasReemplazosEquipo.Meta):
        db_table = 'reemplazos_equipo'


class Traslados(columnas.ColumnasTraslados):
    class Meta(columnas.ColumnasTraslados.Meta):
        db_table = 'traslados'


class ComisionEsquemas(columnas.ColumnasComisionEsquemas):
    class Meta(columnas.ColumnasComisionEsquemas.Meta):
        db_table = 'comision_esquemas'


class ComisionBasesPlan(columnas.ColumnasComisionBasesPlan):
    class Meta(columnas.ColumnasComisionBasesPlan.Meta):
        db_table = 'comision_bases_plan'


class ComisionNiveles(columnas.ColumnasComisionNiveles):
    class Meta(columnas.ColumnasComisionNiveles.Meta):
        db_table = 'comision_niveles'


class ComisionBonosCalidad(columnas.ColumnasComisionBonosCalidad):
    class Meta(columnas.ColumnasComisionBonosCalidad.Meta):
        db_table = 'comision_bonos_calidad'


class ComisionReglas(columnas.ColumnasComisionReglas):
    class Meta(columnas.ColumnasComisionReglas.Meta):
        db_table = 'comision_reglas'


class MotivosBaja(columnas.ColumnasMotivosBaja):
    class Meta(columnas.ColumnasMotivosBaja.Meta):
        db_table = 'motivos_baja'


class ComisionVentas(columnas.ColumnasComisionVentas):
    class Meta(columnas.ColumnasComisionVentas.Meta):
        db_table = 'comision_ventas'


class SolicitudesValidacion(columnas.ColumnasSolicitudesValidacion):
    class Meta(columnas.ColumnasSolicitudesValidacion.Meta):
        db_table = 'solicitudes_validacion'


class ComisionPeriodos(columnas.ColumnasComisionPeriodos):
    class Meta(columnas.ColumnasComisionPeriodos.Meta):
        db_table = 'comision_periodos'


class ComisionCohortes(columnas.ColumnasComisionCohortes):
    class Meta(columnas.ColumnasComisionCohortes.Meta):
        db_table = 'comision_cohortes'


class RetirosEquipo(columnas.ColumnasRetirosEquipo):
    class Meta(columnas.ColumnasRetirosEquipo.Meta):
        db_table = 'retiros_equipo'


class RetiroIntentos(columnas.ColumnasRetiroIntentos):
    class Meta(columnas.ColumnasRetiroIntentos.Meta):
        db_table = 'retiro_intentos'


class Reactivaciones(columnas.ColumnasReactivaciones):
    class Meta(columnas.ColumnasReactivaciones.Meta):
        db_table = 'reactivaciones'


class EntregasInventario(columnas.ColumnasEntregasInventario):
    class Meta(columnas.ColumnasEntregasInventario.Meta):
        db_table = 'entregas_inventario'


class EntregaItems(columnas.ColumnasEntregaItems):
    class Meta(columnas.ColumnasEntregaItems.Meta):
        db_table = 'entrega_items'


class AlertaReglas(columnas.ColumnasAlertaReglas):
    class Meta(columnas.ColumnasAlertaReglas.Meta):
        db_table = 'alerta_reglas'


class AlertaDestinos(columnas.ColumnasAlertaDestinos):
    class Meta(columnas.ColumnasAlertaDestinos.Meta):
        db_table = 'alerta_destinos'


class AlertaEventos(columnas.ColumnasAlertaEventos):
    class Meta(columnas.ColumnasAlertaEventos.Meta):
        db_table = 'alerta_eventos'


class AlertaEnvios(columnas.ColumnasAlertaEnvios):
    class Meta(columnas.ColumnasAlertaEnvios.Meta):
        db_table = 'alerta_envios'


class RetiroCategorias(columnas.ColumnasRetiroCategorias):
    class Meta(columnas.ColumnasRetiroCategorias.Meta):
        db_table = 'retiro_categorias'


class StockMinimos(columnas.ColumnasStockMinimos):
    class Meta(columnas.ColumnasStockMinimos.Meta):
        db_table = 'stock_minimos'


class ConfigCorte(columnas.ColumnasConfigCorte):
    class Meta(columnas.ColumnasConfigCorte.Meta):
        db_table = 'config_corte'


class ConfigAvisosPago(columnas.ColumnasConfigAvisosPago):
    class Meta(columnas.ColumnasConfigAvisosPago.Meta):
        db_table = 'config_avisos_pago'


class ReconexionesPendientes(columnas.ColumnasReconexionesPendientes):
    class Meta(columnas.ColumnasReconexionesPendientes.Meta):
        db_table = 'reconexiones_pendientes'


class AvisosPendientes(columnas.ColumnasAvisosPendientes):
    class Meta(columnas.ColumnasAvisosPendientes.Meta):
        db_table = 'avisos_pendientes'


class Prestadores(columnas.ColumnasPrestadores):
    class Meta(columnas.ColumnasPrestadores.Meta):
        db_table = 'prestadores'


class ConfigFirma(columnas.ColumnasConfigFirma):
    class Meta(columnas.ColumnasConfigFirma.Meta):
        db_table = 'config_firma'


class FirmasContrato(columnas.ColumnasFirmasContrato):
    class Meta(columnas.ColumnasFirmasContrato.Meta):
        db_table = 'firmas_contrato'


class ClausulasContrato(columnas.ColumnasClausulasContrato):
    class Meta(columnas.ColumnasClausulasContrato.Meta):
        db_table = 'clausulas_contrato'


class PlanesVelocidadHistorico(columnas.ColumnasPlanesVelocidadHistorico):
    class Meta(columnas.ColumnasPlanesVelocidadHistorico.Meta):
        db_table = 'planes_velocidad_historico'


class ApiLlaves(columnas.ColumnasApiLlaves):
    class Meta(columnas.ColumnasApiLlaves.Meta):
        db_table = 'api_llaves'


class ApiLlamadas(columnas.ColumnasApiLlamadas):
    class Meta(columnas.ColumnasApiLlamadas.Meta):
        db_table = 'api_llamadas'


class PagosReportados(columnas.ColumnasPagosReportados):
    class Meta(columnas.ColumnasPagosReportados.Meta):
        db_table = 'pagos_reportados'


class IncidenciasMasivas(columnas.ColumnasIncidenciasMasivas):
    class Meta(columnas.ColumnasIncidenciasMasivas.Meta):
        db_table = 'incidencias_masivas'


class IncidenciaAvisos(columnas.ColumnasIncidenciaAvisos):
    class Meta(columnas.ColumnasIncidenciaAvisos.Meta):
        db_table = 'incidencia_avisos'


class PlantillasWhatsapp(columnas.ColumnasPlantillasWhatsapp):
    class Meta(columnas.ColumnasPlantillasWhatsapp.Meta):
        db_table = 'plantillas_whatsapp'


class VentanasWhatsapp(columnas.ColumnasVentanasWhatsapp):
    class Meta(columnas.ColumnasVentanasWhatsapp.Meta):
        db_table = 'ventanas_whatsapp'


class MantenimientoTipos(columnas.ColumnasMantenimientoTipos):
    class Meta(columnas.ColumnasMantenimientoTipos.Meta):
        db_table = 'mantenimiento_tipos'


class MantenimientoIntervalos(columnas.ColumnasMantenimientoIntervalos):
    class Meta(columnas.ColumnasMantenimientoIntervalos.Meta):
        db_table = 'mantenimiento_intervalos'


class Mantenimientos(columnas.ColumnasMantenimientos):
    class Meta(columnas.ColumnasMantenimientos.Meta):
        db_table = 'mantenimientos'


class CampoLlamadas(columnas.ColumnasCampoLlamadas):
    class Meta(columnas.ColumnasCampoLlamadas.Meta):
        db_table = 'campo_llamadas'


class CuadrillaReemplazos(columnas.ColumnasCuadrillaReemplazos):
    class Meta(columnas.ColumnasCuadrillaReemplazos.Meta):
        db_table = 'cuadrilla_reemplazos'


class FacturaProveedores(columnas.ColumnasFacturaProveedores):
    class Meta(columnas.ColumnasFacturaProveedores.Meta):
        db_table = 'factura_proveedores'


class FotosRoutersMensual(columnas.ColumnasFotosRoutersMensual):
    class Meta(columnas.ColumnasFotosRoutersMensual.Meta):
        db_table = 'fotos_routers_mensual'


class IngresosGrupales(columnas.ColumnasIngresosGrupales):
    class Meta(columnas.ColumnasIngresosGrupales.Meta):
        db_table = 'ingresos_grupales'


class ReparacionReportes(columnas.ColumnasReparacionReportes):
    class Meta(columnas.ColumnasReparacionReportes.Meta):
        db_table = 'reparacion_reportes'


class ReparacionesRed(columnas.ColumnasReparacionesRed):
    class Meta(columnas.ColumnasReparacionesRed.Meta):
        db_table = 'reparaciones_red'


class RutaCambios(columnas.ColumnasRutaCambios):
    class Meta(columnas.ColumnasRutaCambios.Meta):
        db_table = 'ruta_cambios'


class SalidasEmergencia(columnas.ColumnasSalidasEmergencia):
    class Meta(columnas.ColumnasSalidasEmergencia.Meta):
        db_table = 'salidas_emergencia'


class VisitasFallidas(columnas.ColumnasVisitasFallidas):
    class Meta(columnas.ColumnasVisitasFallidas.Meta):
        db_table = 'visitas_fallidas'
