(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/ventas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COBERTURAS",
    ()=>COBERTURAS,
    "ESTADOS",
    ()=>ESTADOS,
    "ESTADOS_ABIERTOS",
    ()=>ESTADOS_ABIERTOS,
    "ORIGENES",
    ()=>ORIGENES,
    "RESULTADOS",
    ()=>RESULTADOS,
    "TIPOS_ACTIVIDAD",
    ()=>TIPOS_ACTIVIDAD,
    "etiquetaEstado",
    ()=>etiquetaEstado,
    "seEstaEnfriando",
    ()=>seEstaEnfriando,
    "ventasApi",
    ()=>ventasApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/personal.js [app-client] (ecmascript)");
;
;
const ESTADOS = [
    {
        clave: 'nuevo',
        label: 'Nuevo',
        color: 'gris',
        ayuda: 'Entró y nadie lo llamó todavía.'
    },
    {
        clave: 'contactado',
        label: 'Contactado',
        color: 'azul',
        ayuda: 'Se habló y hay interés.'
    },
    {
        clave: 'cotizado',
        label: 'Cotizado',
        color: 'ambar',
        ayuda: 'Tiene el precio en la mano.'
    },
    {
        clave: 'negociacion',
        label: 'En negociación',
        color: 'ambar',
        ayuda: 'Discutiendo precio o fecha.'
    },
    {
        clave: 'ganado',
        label: 'Ganado',
        color: 'verde',
        ayuda: 'Aceptó. Se le crea la instalación.'
    },
    {
        clave: 'perdido',
        label: 'Perdido',
        color: 'rojo',
        ayuda: 'No va. Pide motivo, y por algo.'
    }
];
const ESTADOS_ABIERTOS = [
    'nuevo',
    'contactado',
    'cotizado',
    'negociacion'
];
const ORIGENES = {
    referido: 'Referido de un abonado',
    redes: 'Redes sociales',
    llamada: 'Llamó a la oficina',
    visita: 'Se acercó / puerta a puerta',
    local: 'Vino al local',
    web: 'Sitio web',
    otro: 'Otro'
};
const TIPOS_ACTIVIDAD = {
    llamada: 'Llamada',
    visita: 'Visita',
    whatsapp: 'WhatsApp',
    correo: 'Correo',
    nota: 'Nota interna'
};
const RESULTADOS = {
    contactado: 'Se lo contactó',
    no_contesta: 'No contesta',
    reagendar: 'Pidió que lo llamen después',
    interesado: 'Interesado',
    no_interesado: 'No le interesa'
};
const COBERTURAS = {
    pendiente: {
        label: 'Sin verificar',
        color: 'gris'
    },
    factible: {
        label: 'Factible',
        color: 'verde'
    },
    con_obra: {
        label: 'Llega con obra',
        color: 'ambar'
    },
    no_factible: {
        label: 'Fuera de alcance',
        color: 'rojo'
    }
};
const etiquetaEstado = (clave)=>{
    var _ESTADOS_find;
    return (_ESTADOS_find = ESTADOS.find((e)=>e.clave === clave)) !== null && _ESTADOS_find !== void 0 ? _ESTADOS_find : ESTADOS[0];
};
const seEstaEnfriando = (p)=>{
    var _p_dias_sin_contacto;
    return ESTADOS_ABIERTOS.includes(p.estado) && ((_p_dias_sin_contacto = p.dias_sin_contacto) !== null && _p_dias_sin_contacto !== void 0 ? _p_dias_sin_contacto : 0) >= 5;
};
const ventasApi = {
    async listar () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_prospectos').select('*').order('creado_en', {
            ascending: false
        }).limit(500);
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async guardar (prospecto) {
        const { id, ...datos } = prospecto;
        const fila = {
            ...datos,
            actualizado_en: new Date().toISOString()
        };
        const { data, error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospectos').update(fila).eq('id', id).select().single() : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospectos').insert(fila).select().single();
        if (error) throw error;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar(id ? 'prospecto.editar' : 'prospecto.crear', "".concat(id ? 'Editó' : 'Cargó', " el prospecto ").concat(data.nombre), {
            entidad: 'prospecto',
            entidad_id: data.id
        });
        return data;
    },
    async eliminar (p) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospectos').delete().eq('id', p.id);
        if (error) throw error;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar('prospecto.eliminar', "Eliminó el prospecto ".concat(p.nombre), {
            entidad: 'prospecto',
            entidad_id: p.id
        });
    },
    /**
   * Mueve el prospecto de etapa.
   *
   * Va aparte de `guardar` porque es la acción que más se repite y la que se
   * audita: "quién dio por perdida esta venta y por qué" es una pregunta que se
   * hace de verdad, y no se puede responder si el cambio viaja escondido dentro
   * de un guardado general.
   */ async cambiarEstado (p, estado, motivo) {
        const fila = {
            estado,
            actualizado_en: new Date().toISOString()
        };
        if (estado === 'perdido') fila.motivo_perdida = motivo;
        // Volver a abrir un prospecto tiene que limpiar el motivo: si no, queda
        // diciendo "no le alcanzaba" un prospecto que hoy está en negociación.
        if (estado !== 'perdido') fila.motivo_perdida = null;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospectos').update(fila).eq('id', p.id).select().single();
        if (error) throw error;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar('prospecto.estado', "".concat(p.nombre, ": ").concat(etiquetaEstado(p.estado).label, " → ").concat(etiquetaEstado(estado).label) + (motivo ? " (".concat(motivo, ")") : ''), {
            entidad: 'prospecto',
            entidad_id: p.id
        });
        return data;
    },
    async actividades (prospectoId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospecto_actividades').select('*').eq('prospecto_id', prospectoId).order('creado_en', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async registrarActividad (prospectoId, actividad, perfil) {
        var _perfil_id, _perfil_apellido;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospecto_actividades').insert({
            prospecto_id: prospectoId,
            ...actividad,
            usuario_id: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null,
            usuario_nombre: perfil ? "".concat(perfil.nombre, " ").concat((_perfil_apellido = perfil.apellido) !== null && _perfil_apellido !== void 0 ? _perfil_apellido : '').trim() : null
        });
        if (error) throw error;
    },
    /**
   * Agenda un seguimiento: lo que HAY que hacer, con fecha y hora.
   *
   * Es la misma tabla que el historial. Un seguimiento cumplido se marca
   * completado y pasa a ser historial sin moverse de lugar — separarlos en dos
   * tablas obligaría a cruzarlas para armar la línea de tiempo de un prospecto,
   * que es lo único que alguien quiere leer.
   */ async agendar (prospectoId, seguimiento, perfil) {
        var _perfil_id, _perfil_apellido;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospecto_actividades').insert({
            prospecto_id: prospectoId,
            estado: 'pendiente',
            ...seguimiento,
            usuario_id: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null,
            usuario_nombre: perfil ? "".concat(perfil.nombre, " ").concat((_perfil_apellido = perfil.apellido) !== null && _perfil_apellido !== void 0 ? _perfil_apellido : '').trim() : null
        });
        if (error) throw error;
        // La fecha del próximo contacto también vive en el prospecto, porque es por
        // donde se ordena la lista. Se copia acá para que no haya que consultar los
        // seguimientos de los 500 prospectos solo para ordenarlos.
        if (seguimiento.programado_para) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospectos').update({
                proxima_accion: seguimiento.programado_para.slice(0, 10)
            }).eq('id', prospectoId);
        }
    },
    /** Cierra un seguimiento: completado o cancelado. */ async cerrarSeguimiento (id, estado) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospecto_actividades').update({
            estado,
            completado_en: estado === 'completado' ? new Date().toISOString() : null
        }).eq('id', id);
        if (error) throw error;
    },
    async cotizaciones (prospectoId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('cotizaciones').select('*').eq('prospecto_id', prospectoId).order('creado_en', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async cotizar (prospectoId, cotizacion, perfil) {
        var _perfil_id;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('cotizaciones').insert({
            prospecto_id: prospectoId,
            ...cotizacion,
            creado_por: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null
        }).select().single();
        if (error) throw error;
        // Cotizar mueve el embudo solo. Dejarlo a mano significa que la mitad de los
        // prospectos con cotización siguen figurando como "contactado", y el tablero
        // deja de servir para saber dónde está cada venta.
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospectos').update({
            estado: 'cotizado',
            actualizado_en: new Date().toISOString()
        }).eq('id', prospectoId).in('estado', [
            'nuevo',
            'contactado'
        ]);
        // Y el plan cotizado queda como el del prospecto si todavía no tenía uno:
        // el expediente de venta lo pide, y sin esto el vendedor tenía que volver a
        // elegir en la ficha el mismo plan que acababa de cotizar.
        if (cotizacion.plan_id) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prospectos').update({
                plan_id: cotizacion.plan_id
            }).eq('id', prospectoId).is('plan_id', null);
        }
        return data;
    },
    /**
   * Los planes vigentes, para elegir qué pidió el cliente. Solo lectura.
   *
   * `precio` acá es el TOTAL con IVA — lo que el abonado paga. La columna
   * `precio` de la tabla es el neto, y usarla era el error: el vendedor decía
   * "veinte" y al mes llegaba una factura de veintitrés.
   *
   * El neto viaja aparte porque lo necesitan la comisión y la contabilidad. Lo
   * que no puede pasar es que alguien lea `precio` y no sepa cuál de los dos es.
   */ async planes () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_planes').select('id, nombre, precio_total, precio_sin_iva, iva_valor, iva_porcentaje, tipo_impuesto, bajada_kbps, subida_kbps, activo').eq('activo', true).order('bajada_kbps');
        if (error) throw error;
        return (data !== null && data !== void 0 ? data : []).map((p)=>({
                ...p,
                precio: p.precio_total
            }));
    },
    /** Las zonas dibujadas y las cajas con puerto libre: las dos capas del mapa. */ async cobertura () {
        const [zonas, cajas] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('zonas_cobertura').select('*').eq('activa', true),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_cajas_nap').select('id, nombre, tipo, latitud, longitud, capacidad, libres, llena, activo')
        ]);
        if (zonas.error) throw zonas.error;
        var _zonas_data, _cajas_data;
        return {
            zonas: (_zonas_data = zonas.data) !== null && _zonas_data !== void 0 ? _zonas_data : [],
            // Sin coordenadas no hay nada que dibujar, y una caja invisible en el mapa
            // se lee como "no hay cobertura ahí".
            cajas: ((_cajas_data = cajas.data) !== null && _cajas_data !== void 0 ? _cajas_data : []).filter((c)=>c.latitud != null && c.longitud != null)
        };
    },
    async guardarZona (zona) {
        const { id, ...datos } = zona;
        const { error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('zonas_cobertura').update(datos).eq('id', id) : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('zonas_cobertura').insert(datos);
        if (error) throw error;
    },
    async eliminarZona (id) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('zonas_cobertura').delete().eq('id', id);
        if (error) throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/expedientes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ESTADOS_FIRMA",
    ()=>ESTADOS_FIRMA,
    "PASOS",
    ()=>PASOS,
    "TIPOS_DOCUMENTO",
    ()=>TIPOS_DOCUMENTO,
    "expedientesApi",
    ()=>expedientesApi,
    "loQueFalta",
    ()=>loQueFalta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/personal.js [app-client] (ecmascript)");
;
;
;
const PASOS = [
    {
        n: 1,
        titulo: 'Datos del cliente',
        corto: 'Datos'
    },
    {
        n: 2,
        titulo: 'Cédula',
        corto: 'Cédula'
    },
    {
        n: 3,
        titulo: 'Fotos del domicilio',
        corto: 'Domicilio'
    },
    {
        n: 4,
        titulo: 'Ubicación',
        corto: 'Ubicación'
    },
    {
        n: 5,
        titulo: 'Contrato y firma',
        corto: 'Contrato'
    }
];
const TIPOS_DOCUMENTO = {
    cedula_frontal: 'Cédula — frente',
    cedula_posterior: 'Cédula — dorso',
    fachada: 'Fachada',
    referencia: 'Referencia para llegar',
    lugar_instalacion: 'Dónde va el equipo',
    otro: 'Otra'
};
const ESTADOS_FIRMA = {
    no_enviado: {
        label: 'Sin enviar',
        color: 'gris'
    },
    enviado: {
        label: 'Esperando firma',
        color: 'ambar'
    },
    firmado: {
        label: 'Firmado',
        color: 'verde'
    },
    rechazado: {
        label: 'Rechazado',
        color: 'rojo'
    },
    vencido: {
        label: 'Vencido',
        color: 'rojo'
    }
};
function loQueFalta(e) {
    if (!e) return [];
    return [
        !e.ok_datos && 'confirmar los datos',
        !e.ok_cedula_frontal && 'la cédula por el frente',
        !e.ok_cedula_posterior && 'la cédula por el dorso',
        !e.ok_fotos && 'al menos una foto del domicilio',
        !e.ok_ubicacion && 'la ubicación',
        !e.ok_plan && 'el plan',
        !e.ok_contrato && 'generar el contrato',
        !e.ok_firma && 'la firma del cliente'
    ].filter(Boolean);
}
const expedientesApi = {
    async listar () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_expedientes').select('*').order('creado_en', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async abrir (id) {
        const [exp, docs] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_expedientes').select('*').eq('id', id).maybeSingle(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('expediente_documentos').select('*').eq('expediente_id', id).order('subido_en')
        ]);
        if (exp.error) throw exp.error;
        var _docs_data;
        return {
            expediente: exp.data,
            documentos: (_docs_data = docs.data) !== null && _docs_data !== void 0 ? _docs_data : []
        };
    },
    /** El expediente de un prospecto, que es como se llega desde la lista. */ async porProspecto (prospectoId) {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_expedientes').select('*').eq('prospecto_id', prospectoId).maybeSingle();
        return data !== null && data !== void 0 ? data : null;
    },
    async guardar (id, cambios) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('expedientes').update({
            ...cambios,
            actualizado_en: new Date().toISOString()
        }).eq('id', id);
        if (error) throw error;
    },
    /**
   * Sube un documento del expediente.
   *
   * La ruta empieza por el id del expediente porque la política del bucket lee
   * esa primera carpeta para decidir quién puede abrirlo. Cambiar el orden de la
   * ruta rompería el permiso del archivo sin que nada avise.
   */ async subirDocumento (param) {
        let { expedienteId, tipo, archivo, perfil } = param;
        // Se comprime antes de subir: el vendedor está con datos móviles en la
        // vereda y una foto de 4 MB del celular muchas veces no llega. La cédula se
        // deja más grande que el resto — tiene que poder leerse el número.
        const esCedula = tipo.startsWith('cedula');
        const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["comprimirImagen"])(archivo, {
            max: esCedula ? 1600 : 1280,
            calidad: esCedula ? 0.82 : 0.7
        });
        const ruta = "".concat(expedienteId, "/").concat(tipo, "-").concat(Date.now(), ".jpg");
        const { error: errSubida } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].storage.from('expedientes').upload(ruta, blob, {
            contentType: 'image/jpeg'
        });
        if (errSubida) throw errSubida;
        // Reemplazar la cédula borrosa: se marca la anterior como rechazada en vez
        // de borrarla. El índice único deja una sola vigente, y el historial queda.
        if (esCedula) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('expediente_documentos').update({
                estado: 'rechazado',
                notas: 'Reemplazada por una foto nueva'
            }).eq('expediente_id', expedienteId).eq('tipo', tipo).neq('estado', 'rechazado');
        }
        var _perfil_id;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('expediente_documentos').insert({
            expediente_id: expedienteId,
            tipo,
            ruta,
            mime: 'image/jpeg',
            bytes: blob.size,
            subido_por: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null
        });
        if (error) throw error;
    },
    /** URL firmada y corta. Una cédula no puede quedar en un enlace que dura una hora. */ async verDocumento (ruta) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].storage.from('expedientes').createSignedUrl(ruta, 300);
        if (error) throw error;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar('expediente.ver_documento', "Abrió el documento ".concat(ruta), {
            entidad: 'expediente_documento',
            entidad_id: ruta
        });
        return data.signedUrl;
    },
    async borrarDocumento (doc) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].storage.from('expedientes').remove([
            doc.ruta
        ]);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('expediente_documentos').delete().eq('id', doc.id);
        if (error) throw error;
    },
    /**
   * Guarda la ubicación capturada.
   *
   * `origen` no es decorativo: la base tiene un CHECK que rechaza `gps` sin
   * precisión, porque la API del navegador siempre la devuelve y un formulario
   * manual no. Mandar 'gps' con una coordenada tipeada falla, que es el punto.
   */ async guardarUbicacion (param) {
        let { expedienteId, latitud, longitud, precision, origen, perfil } = param;
        var _perfil_id;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('expedientes').update({
            latitud,
            longitud,
            precision_m: origen === 'gps' ? precision : null,
            ubicacion_origen: origen,
            ubicacion_en: new Date().toISOString(),
            ubicacion_por: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null,
            actualizado_en: new Date().toISOString()
        }).eq('id', expedienteId);
        if (error) throw error;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar('expediente.ubicacion', "Registró la ubicación (".concat(origen).concat(origen === 'gps' ? ", ±".concat(Math.round(precision), " m") : '', ")"), {
            entidad: 'expediente',
            entidad_id: expedienteId
        });
    },
    /** Crea el contrato reutilizando el módulo que ya existe. */ async generarContrato (param) {
        let { expediente, perfil } = param;
        var _expediente_plan_precio;
        const { data: contrato, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('contratos').insert({
            client_id: null,
            plan_id: expediente.plan_id,
            precio_mensual: (_expediente_plan_precio = expediente.plan_precio) !== null && _expediente_plan_precio !== void 0 ? _expediente_plan_precio : 0,
            estado: 'vigente',
            firma_estado: 'no_enviado',
            notas: "Generado desde el expediente de venta de ".concat(expediente.cliente)
        }).select().single();
        if (error) throw error;
        await this.guardar(expediente.id, {
            contrato_id: contrato.id
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar('contrato.generar', "Generó el contrato de ".concat(expediente.cliente), {
            entidad: 'contrato',
            entidad_id: contrato.id
        });
        return contrato;
    },
    /**
   * Manda el expediente al backoffice.
   *
   * Llama a la función del servidor, que revalida el checklist entero. Si algo
   * falta, el mensaje que vuelve dice exactamente qué — y viene de la base, no
   * de una validación del navegador que se puede saltear.
   */ async enviar (expedienteId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('enviar_expediente_a_instalaciones', {
            p_expediente: expedienteId
        });
        if (error) throw new Error(error.message.replace(/^.*?:\s*/, ''));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar('expediente.enviar', 'Envió el expediente a instalaciones', {
            entidad: 'expediente',
            entidad_id: expedienteId
        });
        return data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/comercial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLORES",
    ()=>COLORES,
    "avatar",
    ()=>avatar,
    "comercialApi",
    ()=>comercialApi,
    "loQueHayQueHacer",
    ()=>loQueHayQueHacer,
    "logros",
    ()=>logros,
    "paleta",
    ()=>paleta,
    "proyeccionDelMes",
    ()=>proyeccionDelMes,
    "saludo",
    ()=>saludo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ventas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$expedientes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/expedientes.js [app-client] (ecmascript)");
;
;
;
/**
 * El dashboard comercial: los datos que responden "qué hago hoy".
 *
 * ── Todo sale de lo que ya está cargado ──
 *
 * No hay ninguna métrica estimada ni ningún número de ejemplo. El puntaje de
 * conversión lo calcula la vista `v_prospectos` con cinco señales observables, y
 * llega con sus motivos: si la pantalla dice que hay que llamar a alguien, se
 * puede ver por qué. Un tablero que no explica sus números no se usa dos veces.
 *
 * ── Por qué el vendedor ve solo lo suyo ──
 *
 * `alcance` recorta por vendedor salvo que quien mira tenga `ventas.equipo`.
 * Esto es comodidad, no seguridad: lo que impide de verdad que un vendedor lea
 * la cartera de otro es RLS. Acá es para que el tablero le hable a él.
 */ /**
 * Las paletas del tablero, una por tema.
 *
 * Las dos están validadas contra la superficie sobre la que se dibujan —#0f172a
 * en oscuro, #f1f5f9 en claro— y pasan banda de luminosidad, piso de croma,
 * separación para daltonismo y contraste.
 *
 * La versión clara arrastra un aviso de contraste en cuatro tonos: sobre fondo
 * claro no llegan a 3:1. Es aceptable acá y solo acá porque ninguna marca de
 * color va sola: cada etapa del embudo lleva su nombre y su número escritos, así
 * que el color acompaña la lectura, nunca la carga. Si alguna vez se usa uno de
 * estos tonos sin etiqueta al lado, hay que volver a elegirlo.
 */ const PALETA = {
    oscuro: {
        serie: '#3987e5',
        // Fijo y en este orden. No se cicla ni se genera: una etapa nueva toma el
        // siguiente slot, no un color inventado.
        etapas: [
            '#3987e5',
            '#d95926',
            '#199e70',
            '#c98500',
            '#d55181',
            '#9085e9'
        ],
        embudo: [
            '#b7d3f6',
            '#6da7ec',
            '#2a78d6',
            '#184f95'
        ],
        eje: '#64748b',
        grilla: '#1e293b'
    },
    claro: {
        serie: '#2a78d6',
        etapas: [
            '#2a78d6',
            '#eb6834',
            '#1baf7a',
            '#eda100',
            '#e87ba4',
            '#4a3aa7'
        ],
        embudo: [
            '#b7d3f6',
            '#6da7ec',
            '#2a78d6',
            '#184f95'
        ],
        eje: '#64748b',
        grilla: '#e2e8f0'
    }
};
/** Los colores de estado NO cambian con el tema: significan lo mismo siempre. */ const ESTADO = {
    bien: '#0ca30c',
    alerta: '#fab219',
    critico: '#d03b3b',
    caliente: '#ea580c'
};
const paleta = (tema)=>({
        ...PALETA[tema === 'claro' ? 'claro' : 'oscuro'],
        ...ESTADO
    });
const COLORES = {
    ...PALETA.oscuro,
    ...ESTADO
};
function avatar(nombre) {
    let tema = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'oscuro';
    var _partes_, _partes_1;
    const limpio = String(nombre !== null && nombre !== void 0 ? nombre : '?').trim();
    const partes = limpio.split(/\s+/).filter(Boolean);
    var _partes__, _partes__1;
    const iniciales = ((_partes__ = (_partes_ = partes[0]) === null || _partes_ === void 0 ? void 0 : _partes_[0]) !== null && _partes__ !== void 0 ? _partes__ : '?') + ((_partes__1 = (_partes_1 = partes[1]) === null || _partes_1 === void 0 ? void 0 : _partes_1[0]) !== null && _partes__1 !== void 0 ? _partes__1 : '');
    let suma = 0;
    for(let i = 0; i < limpio.length; i++)suma += limpio.charCodeAt(i);
    const colores = PALETA[tema === 'claro' ? 'claro' : 'oscuro'].etapas;
    return {
        iniciales: iniciales.toUpperCase(),
        color: colores[suma % colores.length]
    };
}
function proyeccionDelMes(altas) {
    const hoy = new Date();
    const diasTranscurridos = hoy.getDate();
    const diasDelMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const restantes = diasDelMes - diasTranscurridos;
    const ritmo = diasTranscurridos > 0 ? altas / diasTranscurridos : 0;
    return {
        ritmo,
        restantes,
        // Se redondea hacia abajo: prometer de más en un tablero de metas es peor
        // que quedarse corto.
        proyectado: Math.floor(altas + ritmo * restantes)
    };
}
function logros(param) {
    let { altas, meta, racha, prospectosDelMes } = param;
    return [
        {
            clave: 'primera',
            nombre: 'Primera venta',
            logrado: altas >= 1,
            ayuda: altas >= 1 ? 'Ya cerraste tu primera del mes' : 'Cierra tu primera venta del mes',
            color: '#3987e5'
        },
        {
            clave: 'racha',
            nombre: racha >= 3 ? "".concat(racha, " en racha") : '3 en racha',
            logrado: racha >= 3,
            ayuda: racha >= 3 ? "".concat(racha, " días seguidos vendiendo") : "Llevas ".concat(racha, " ").concat(racha === 1 ? 'día' : 'días', " — hacen falta 3"),
            color: '#c98500'
        },
        {
            clave: 'cazador',
            nombre: 'Cazador',
            logrado: prospectosDelMes >= 10,
            ayuda: prospectosDelMes >= 10 ? "".concat(prospectosDelMes, " prospectos cargados este mes") : "".concat(prospectosDelMes, " de 10 prospectos cargados"),
            color: '#d55181'
        },
        {
            clave: 'meta',
            nombre: meta > 0 && altas >= meta ? 'Meta cumplida' : 'Meta 50%',
            logrado: meta > 0 && altas >= meta / 2,
            ayuda: meta > 0 ? "".concat(Math.round(altas / meta * 100), "% de la meta") : 'Sin meta fijada este mes',
            color: '#199e70'
        }
    ];
}
function saludo(nombre) {
    const h = new Date().getHours();
    const momento = h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches';
    return "¡".concat(momento, ", ").concat(String(nombre !== null && nombre !== void 0 ? nombre : '').split(' ')[0] || 'equipo', "!");
}
const mesActual = ()=>{
    const hoy = new Date();
    return {
        anio: hoy.getFullYear(),
        mes: hoy.getMonth() + 1
    };
};
const comercialApi = {
    /**
   * Todo el tablero en una carga.
   *
   * Va junto y no en cinco llamadas separadas porque las cinco tarjetas se leen
   * de un vistazo: mostrarlas apareciendo de a una hace que el número que ya
   * estabas mirando salte de lugar.
   */ async tablero () {
        let { vendedorId } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_prospectos').select('*').limit(1000);
        if (vendedorId) q = q.eq('vendedor_id', vendedorId);
        let qs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_seguimientos').select('*').neq('estado', 'cancelado').not('programado_para', 'is', null).order('programado_para').limit(300);
        if (vendedorId) qs = qs.eq('vendedor_id', vendedorId);
        const [prospectos, seguimientos, equipo, cobros, expedientes] = await Promise.all([
            q,
            qs,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_comercial_vendedor').select('*'),
            // La bandeja ya viene filtrada por vendedor desde la propia vista, así que
            // acá no hace falta volver a acotarla — ni se puede: la vista corre con
            // privilegio y decide adentro.
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_cobros_por_gestionar').select('*'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_expedientes').select('*').eq('estado', 'abierto')
        ]);
        if (prospectos.error) throw prospectos.error;
        // La racha se calcula en la base: contarla acá exigiría traer todas las
        // ventas del año para mirar hacia atrás día por día.
        let racha = 0;
        if (vendedorId) {
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('racha_de_ventas', {
                p_vendedor: vendedorId
            });
            racha = data !== null && data !== void 0 ? data : 0;
        }
        var _prospectos_data, _seguimientos_data, _equipo_data, _cobros_data, _expedientes_data;
        return {
            prospectos: (_prospectos_data = prospectos.data) !== null && _prospectos_data !== void 0 ? _prospectos_data : [],
            seguimientos: ((_seguimientos_data = seguimientos.data) !== null && _seguimientos_data !== void 0 ? _seguimientos_data : []).filter((s)=>s.estado === 'pendiente'),
            equipo: (_equipo_data = equipo.data) !== null && _equipo_data !== void 0 ? _equipo_data : [],
            cobros: (_cobros_data = cobros.data) !== null && _cobros_data !== void 0 ? _cobros_data : [],
            expedientes: (_expedientes_data = expedientes.data) !== null && _expedientes_data !== void 0 ? _expedientes_data : [],
            racha
        };
    },
    /**
   * Fija la meta del mes en curso. `vendedorId` null = la del equipo.
   *
   * Busca primero y después inserta o actualiza, en vez de un upsert: el índice
   * que hace única la meta está sobre `COALESCE(vendedor_id, ...)` —porque en
   * SQL un NULL nunca choca con otro NULL— y un upsert no puede apuntar a un
   * índice sobre una expresión.
   */ async guardarMeta (param) {
        let { vendedorId, meta_altas, meta_monto } = param;
        const { anio, mes } = mesActual();
        let busca = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('metas_venta').select('id').eq('anio', anio).eq('mes', mes);
        busca = vendedorId ? busca.eq('vendedor_id', vendedorId) : busca.is('vendedor_id', null);
        const { data: existente } = await busca.maybeSingle();
        const fila = {
            vendedor_id: vendedorId !== null && vendedorId !== void 0 ? vendedorId : null,
            anio,
            mes,
            meta_altas: Number(meta_altas) || 0,
            meta_monto: Number(meta_monto) || 0
        };
        const { error } = existente ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('metas_venta').update(fila).eq('id', existente.id) : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('metas_venta').insert(fila);
        if (error) throw error;
    },
    /**
   * Verifica la cobertura de un punto.
   *
   * Le pregunta a `cobertura_cercana`, que existe desde la migración 31 y ya
   * descuenta los puertos que reservaron instalaciones agendadas. Sin ese
   * descuento, dos ventas del mismo día se prometen sobre la misma caja llena.
   */ async verificar (param) {
        let { lat, lng, tecnologia = 'ftth' } = param;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('cobertura_cercana', {
            p_lat: lat,
            p_lng: lng,
            p_tecnologia: tecnologia,
            p_limite: 5
        });
        if (error) throw error;
        const cercanas = data !== null && data !== void 0 ? data : [];
        var _cercanas_;
        const mejor = (_cercanas_ = cercanas[0]) !== null && _cercanas_ !== void 0 ? _cercanas_ : null;
        // La regla de decisión, escrita una sola vez:
        //
        //   Sin nada cerca o a más de 300 m → no llega.
        //   Caja con puertos libres         → se vende hoy.
        //   Caja llena, o sin capacidad cargada, o entre 300 y 300 m con obra
        //                                   → que lo confirme alguien de red.
        //
        // El umbral de 300 m es el largo razonable de una bajada de fibra desde la
        // caja. Más que eso no es "sin cobertura": es una obra, y quien la aprueba
        // no es el vendedor.
        let resultado = 'sin_cobertura';
        if (mejor) {
            if (mejor.distancia_m <= 300 && mejor.disponibles > 0) resultado = 'disponible';
            else if (mejor.distancia_m <= 300) resultado = 'requiere_verificacion';
            else if (mejor.distancia_m <= 800) resultado = 'con_obra';
        }
        return {
            resultado,
            cercanas,
            mejor
        };
    },
    async guardarVerificacion (v) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('verificaciones_cobertura').insert(v).select().single();
        if (error) throw error;
        return data;
    },
    async verificaciones () {
        let limite = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('verificaciones_cobertura').select('*').order('creado_en', {
            ascending: false
        }).limit(limite);
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /** Las capas del mapa comercial. Cada una se pide entera y se filtra en pantalla. */ async mapa () {
        const [prospectos, clientes, cajas, zonas, instalaciones] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_prospectos').select('id, nombre, sector, estado, puntaje, latitud, longitud, vendedor, vendedor_id, telefono, plan, valor_mensual').not('latitud', 'is', null),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_clientes_ficha').select('id, nombre, estado, latitud, longitud, plan').not('latitud', 'is', null),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_cajas_nap').select('id, nombre, latitud, longitud, capacidad, libres, llena, activo').not('latitud', 'is', null),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('zonas_cobertura').select('*').eq('activa', true),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_instalaciones').select('id, titular, estado, latitud, longitud, fecha').in('estado', [
                'prospecto',
                'agendada',
                'en_curso'
            ]).not('latitud', 'is', null)
        ]);
        var _prospectos_data, _clientes_data, _cajas_data, _zonas_data, _instalaciones_data;
        // Cada capa se degrada sola: que falte la vista de instalaciones en una
        // instalación vieja no puede dejar el mapa entero en blanco.
        return {
            prospectos: (_prospectos_data = prospectos.data) !== null && _prospectos_data !== void 0 ? _prospectos_data : [],
            clientes: (_clientes_data = clientes.data) !== null && _clientes_data !== void 0 ? _clientes_data : [],
            cajas: (_cajas_data = cajas.data) !== null && _cajas_data !== void 0 ? _cajas_data : [],
            zonas: (_zonas_data = zonas.data) !== null && _zonas_data !== void 0 ? _zonas_data : [],
            instalaciones: (_instalaciones_data = instalaciones.data) !== null && _instalaciones_data !== void 0 ? _instalaciones_data : []
        };
    }
};
function loQueHayQueHacer(prospectos, seguimientos) {
    let cobros = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], expedientes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    const ahora = Date.now();
    const hoy = new Date().toISOString().slice(0, 10);
    const acciones = [];
    // ── Cobros vencidos ──
    // Primero de todo, antes incluso que los seguimientos: un cliente con 20 días
    // de atraso está por cortarse, y un corte cuesta la reconexión, la llamada de
    // queja y a veces al cliente entero.
    cobros.filter((c)=>{
        var _c_dias_atraso;
        return ((_c_dias_atraso = c.dias_atraso) !== null && _c_dias_atraso !== void 0 ? _c_dias_atraso : 0) >= 15;
    }).forEach((c)=>acciones.push({
            clave: "cob-".concat(c.asignacion_id),
            urgencia: 0,
            tipo: 'Cobro vencido',
            titulo: c.cliente,
            detalle: "Debe ".concat((Number(c.saldo_pendiente) || 0).toFixed(2), " · ").concat(c.dias_atraso, " días"),
            telefono: c.telefono,
            a: '/ventas/cobranza'
        }));
    // ── Promesas que vencen hoy ──
    // El día que prometió pagar es el único día en que llamar sirve. Mañana ya es
    // un incumplimiento y la conversación es otra.
    cobros.filter((c)=>c.promesa_fecha === hoy).forEach((c)=>{
        var _c_promesa_monto;
        return acciones.push({
            clave: "pro-hoy-".concat(c.asignacion_id),
            urgencia: 0,
            tipo: 'Promesa vence hoy',
            titulo: c.cliente,
            detalle: "Prometió pagar ".concat((Number((_c_promesa_monto = c.promesa_monto) !== null && _c_promesa_monto !== void 0 ? _c_promesa_monto : c.saldo_pendiente) || 0).toFixed(2)),
            telefono: c.telefono,
            a: '/ventas/cobranza'
        });
    });
    // ── Expedientes a medio hacer ──
    // Una venta ganada que no se documenta no es una venta: no llega a
    // instalaciones y el cliente sigue esperando sin que nadie se entere.
    expedientes.filter((e)=>e.estado === 'abierto').forEach((e)=>acciones.push({
            clave: "exp-".concat(e.id),
            urgencia: e.completo ? 1 : 1,
            tipo: e.completo ? 'Listo para enviar' : e.ok_contrato ? 'Falta la firma' : 'Expediente incompleto',
            titulo: e.cliente,
            detalle: e.completo ? 'Todo cargado — envíalo a instalaciones' : "Falta: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$expedientes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loQueFalta"])(e).slice(0, 2).join(', ')),
            a: "/ventas/expediente/".concat(e.id)
        }));
    seguimientos.forEach((s)=>{
        // Sin fecha no es un seguimiento agendado, es una nota. Saltearlo importa
        // porque `new Date(null)` da el epoch, que siempre es menor que ahora: sin
        // esta línea, cada nota suelta aparecería como vencida y en lo más urgente
        // de la lista. La consulta del tablero ya las filtra, pero esta función se
        // exporta y no puede depender de que quien la llame lo haya hecho.
        if (!s.programado_para) return;
        const cuando = new Date(s.programado_para).getTime();
        const vencido = cuando < ahora;
        const hoy = new Date(s.programado_para).toDateString() === new Date().toDateString();
        if (!vencido && !hoy) return;
        acciones.push({
            clave: "seg-".concat(s.id),
            urgencia: vencido ? 0 : 1,
            tipo: vencido ? 'Vencido' : 'Hoy',
            titulo: s.prospecto,
            detalle: s.proxima_accion || s.detalle || "".concat(s.tipo, " pendiente"),
            telefono: s.telefono || s.telefono_whatsapp,
            prospectoId: s.prospecto_id,
            cuando: s.programado_para
        });
    });
    // Los calientes sin nada agendado. Se corta en 60 porque debajo de ahí el
    // "urgente" deja de serlo y la lista se vuelve un segundo listado completo,
    // que es justo lo que este panel viene a evitar.
    //
    // Acá NO se recorta la cantidad. Antes cortaba en los ocho primeros, y esa
    // decisión estaba en el lugar equivocado: si había treinta prospectos
    // calientes desatendidos, veintidós desaparecían sin que nada lo dijera, y la
    // pantalla se leía como "esto es todo lo que hay". Cuántos mostrar es una
    // decisión de la pantalla, y tiene que ser visible; acá se devuelven todos.
    const conSeguimiento = new Set(seguimientos.map((s)=>s.prospecto_id));
    prospectos.filter((p)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTADOS_ABIERTOS"].includes(p.estado) && p.puntaje >= 60 && !conSeguimiento.has(p.id)).sort((a, b)=>b.puntaje - a.puntaje).forEach((p)=>{
        var _p_motivos_puntaje;
        acciones.push({
            clave: "pro-".concat(p.id),
            urgencia: 2,
            tipo: 'Sin agendar',
            titulo: p.nombre,
            detalle: ((_p_motivos_puntaje = p.motivos_puntaje) !== null && _p_motivos_puntaje !== void 0 ? _p_motivos_puntaje : []).slice(0, 2).join(' · ') || 'Prospecto con alta chance',
            telefono: p.telefono,
            prospectoId: p.id,
            puntaje: p.puntaje
        });
    });
    return acciones.sort((a, b)=>{
        var _b_puntaje, _a_puntaje;
        return a.urgencia - b.urgencia || ((_b_puntaje = b.puntaje) !== null && _b_puntaje !== void 0 ? _b_puntaje : 0) - ((_a_puntaje = a.puntaje) !== null && _a_puntaje !== void 0 ? _a_puntaje : 0);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/ventas/MapaComercialPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapaComercialPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$comercial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/comercial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ventas.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
/**
 * Mapa comercial.
 *
 * ── Qué pregunta contesta que ninguna lista contesta ──
 *
 * Dónde está la venta respecto de la red. Un prospecto a cuarenta metros de una
 * caja con puertos libres y otro a dos kilómetros de todo se ven idénticos en
 * una tabla, y son dos negocios completamente distintos. Puestos sobre el mismo
 * plano al lado de las cajas, la diferencia se ve sin leer un solo número.
 *
 * También muestra dónde NO hay que gastar esfuerzo: un sector lleno de puntos
 * rojos —cajas llenas— es donde el vendedor está prometiendo instalaciones que
 * después se traban tres semanas.
 *
 * ── Las capas ──
 *
 * Seis, y cada una se puede apagar. Todas juntas son ilegibles y esa es la
 * razón de los interruptores: se prende la pregunta que se está haciendo hoy.
 * Los prospectos calientes van aparte de los tibios porque son la capa que se
 * mira sola la mayoría de las veces.
 */ const CENTRO_POR_DEFECTO = [
    -0.9376,
    -79.227
];
// Los colores de las capas. Los de estado —cajas llenas, prospecto caliente—
// salen de la paleta de estado y no de la de series: nunca son "una capa más".
const COLOR = {
    caliente: '#d03b3b',
    prospecto: '#3987e5',
    cliente: '#199e70',
    instalacion: '#fab219',
    cajaLibre: '#0ca30c',
    cajaJusta: '#fab219',
    cajaLlena: '#d03b3b'
};
const CAPAS = [
    {
        clave: 'calientes',
        label: 'Prospectos calientes',
        color: COLOR.caliente
    },
    {
        clave: 'prospectos',
        label: 'Prospectos',
        color: COLOR.prospecto
    },
    {
        clave: 'clientes',
        label: 'Clientes',
        color: COLOR.cliente
    },
    {
        clave: 'instalaciones',
        label: 'Instalaciones pendientes',
        color: COLOR.instalacion
    },
    {
        clave: 'cajas',
        label: 'Cajas NAP',
        color: COLOR.cajaLibre
    },
    {
        clave: 'zonas',
        label: 'Zonas de cobertura',
        color: '#0ea5e9'
    }
];
const colorCaja = (c)=>{
    if (!c.activo) return '#64748b';
    if (c.llena) return COLOR.cajaLlena;
    if (c.libres != null && c.libres <= 2) return COLOR.cajaJusta;
    return COLOR.cajaLibre;
};
function MapaComercialPage() {
    _s();
    const { puede } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const contenedor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const capa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [datos, setDatos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        prospectos: [],
        clientes: [],
        cajas: [],
        zonas: [],
        instalaciones: []
    });
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibles, setVisibles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Object.fromEntries(CAPAS.map({
        "MapaComercialPage.useState": (c)=>[
                c.clave,
                true
            ]
    }["MapaComercialPage.useState"])));
    const [filtroVendedor, setFiltroVendedor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filtroSector, setFiltroSector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filtroEstado, setFiltroEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapaComercialPage.useCallback[recargar]": async ()=>{
            setCargando(true);
            try {
                setDatos(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$comercial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comercialApi"].mapa());
                setError(null);
            } catch (err) {
                setError(err);
            } finally{
                setCargando(false);
            }
        }
    }["MapaComercialPage.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapaComercialPage.useEffect": ()=>{
            recargar();
        }
    }["MapaComercialPage.useEffect"], [
        recargar
    ]);
    // Los desplegables salen de lo que hay cargado, no de una lista fija: filtrar
    // por un sector que nadie usa es un callejón sin salida.
    const vendedores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapaComercialPage.useMemo[vendedores]": ()=>[
                ...new Map(datos.prospectos.filter({
                    "MapaComercialPage.useMemo[vendedores]": (p)=>p.vendedor
                }["MapaComercialPage.useMemo[vendedores]"]).map({
                    "MapaComercialPage.useMemo[vendedores]": (p)=>[
                            p.vendedor_id,
                            p.vendedor
                        ]
                }["MapaComercialPage.useMemo[vendedores]"])).entries()
            ]
    }["MapaComercialPage.useMemo[vendedores]"], [
        datos.prospectos
    ]);
    const sectores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapaComercialPage.useMemo[sectores]": ()=>[
                ...new Set(datos.prospectos.map({
                    "MapaComercialPage.useMemo[sectores]": (p)=>p.sector
                }["MapaComercialPage.useMemo[sectores]"]).filter(Boolean))
            ].sort()
    }["MapaComercialPage.useMemo[sectores]"], [
        datos.prospectos
    ]);
    const prospectosFiltrados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapaComercialPage.useMemo[prospectosFiltrados]": ()=>datos.prospectos.filter({
                "MapaComercialPage.useMemo[prospectosFiltrados]": (p)=>{
                    if (filtroVendedor && p.vendedor_id !== filtroVendedor) return false;
                    if (filtroSector && p.sector !== filtroSector) return false;
                    if (filtroEstado === 'abiertos' && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTADOS_ABIERTOS"].includes(p.estado)) return false;
                    if (filtroEstado && filtroEstado !== 'abiertos' && p.estado !== filtroEstado) return false;
                    return true;
                }
            }["MapaComercialPage.useMemo[prospectosFiltrados]"])
    }["MapaComercialPage.useMemo[prospectosFiltrados]"], [
        datos.prospectos,
        filtroVendedor,
        filtroSector,
        filtroEstado
    ]);
    // El mapa se monta una vez. Reconstruirlo en cada render perdería el zoom
    // cada vez que alguien toca un filtro, que es todo el tiempo.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapaComercialPage.useEffect": ()=>{
            if (mapa.current || !contenedor.current) return;
            mapa.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(contenedor.current).setView(CENTRO_POR_DEFECTO, 13);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap',
                maxZoom: 19
            }).addTo(mapa.current);
            capa.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layerGroup().addTo(mapa.current);
        }
    }["MapaComercialPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapaComercialPage.useEffect": ()=>{
            if (!capa.current) return;
            capa.current.clearLayers();
            const puntos = [];
            const marcar = {
                "MapaComercialPage.useEffect.marcar": function(lat, lng, color, popup) {
                    let radio = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 6;
                    const punto = [
                        Number(lat),
                        Number(lng)
                    ];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker(punto, {
                        radius: radio,
                        color,
                        fillColor: color,
                        fillOpacity: 0.85,
                        // El anillo de 2 px sobre la superficie separa marcas que se pisan: sin
                        // él, dos prospectos en la misma manzana se leen como uno más grande.
                        weight: 2
                    }).bindPopup(popup).addTo(capa.current);
                    puntos.push(punto);
                }
            }["MapaComercialPage.useEffect.marcar"];
            if (visibles.zonas) {
                datos.zonas.forEach({
                    "MapaComercialPage.useEffect": (z)=>{
                        if (z.tipo === 'circulo' && z.centro_lat != null) {
                            const centro = [
                                Number(z.centro_lat),
                                Number(z.centro_lng)
                            ];
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circle(centro, {
                                radius: Number(z.radio_m),
                                color: z.color,
                                fillColor: z.color,
                                fillOpacity: 0.1,
                                weight: 2
                            }).bindPopup("<b>".concat(z.nombre, "</b><br>").concat(z.tecnologia)).addTo(capa.current);
                            puntos.push(centro);
                        } else if (z.tipo === 'poligono' && Array.isArray(z.poligono)) {
                            const vertices = z.poligono.map({
                                "MapaComercialPage.useEffect.vertices": (v)=>[
                                        Number(v[0]),
                                        Number(v[1])
                                    ]
                            }["MapaComercialPage.useEffect.vertices"]);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polygon(vertices, {
                                color: z.color,
                                fillColor: z.color,
                                fillOpacity: 0.1,
                                weight: 2
                            }).bindPopup("<b>".concat(z.nombre, "</b>")).addTo(capa.current);
                            puntos.push(...vertices);
                        }
                    }
                }["MapaComercialPage.useEffect"]);
            }
            if (visibles.cajas) {
                datos.cajas.forEach({
                    "MapaComercialPage.useEffect": (c)=>marcar(c.latitud, c.longitud, colorCaja(c), "<b>".concat(c.nombre, "</b><br>").concat(c.capacidad == null ? 'capacidad sin cargar' : "".concat(c.libres, " de ").concat(c.capacidad, " libres")), 5)
                }["MapaComercialPage.useEffect"]);
            }
            if (visibles.clientes) {
                datos.clientes.forEach({
                    "MapaComercialPage.useEffect": (c)=>{
                        var _c_plan;
                        return marcar(c.latitud, c.longitud, COLOR.cliente, "<b>".concat(c.nombre, "</b><br>").concat((_c_plan = c.plan) !== null && _c_plan !== void 0 ? _c_plan : ''), 4);
                    }
                }["MapaComercialPage.useEffect"]);
            }
            if (visibles.instalaciones) {
                datos.instalaciones.forEach({
                    "MapaComercialPage.useEffect": (i)=>marcar(i.latitud, i.longitud, COLOR.instalacion, "<b>".concat(i.titular, "</b><br>Instalación ").concat(i.estado).concat(i.fecha ? " · ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(i.fecha)) : ''))
                }["MapaComercialPage.useEffect"]);
            }
            prospectosFiltrados.forEach({
                "MapaComercialPage.useEffect": (p)=>{
                    const caliente = p.puntaje >= 60 && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTADOS_ABIERTOS"].includes(p.estado);
                    if (caliente && !visibles.calientes) return;
                    if (!caliente && !visibles.prospectos) return;
                    marcar(p.latitud, p.longitud, caliente ? COLOR.caliente : COLOR.prospecto, "<b>".concat(p.nombre, "</b><br>").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["etiquetaEstado"])(p.estado).label, " · ").concat(p.puntaje, "/100") + "".concat(p.plan ? "<br>".concat(p.plan) : '').concat(p.vendedor ? "<br>".concat(p.vendedor) : ''), caliente ? 8 : 6);
                }
            }["MapaComercialPage.useEffect"]);
            if (puntos.length) mapa.current.fitBounds(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(puntos).pad(0.15));
        }
    }["MapaComercialPage.useEffect"], [
        datos,
        visibles,
        prospectosFiltrados
    ]);
    const calientes = prospectosFiltrados.filter((p)=>p.puntaje >= 60 && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTADOS_ABIERTOS"].includes(p.estado)).length;
    const enJuego = prospectosFiltrados.filter((p)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTADOS_ABIERTOS"].includes(p.estado)).reduce((t, p)=>t + Number(p.valor_mensual || 0), 0);
    const sinUbicar = datos.prospectos.length === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "flex items-center gap-2 text-xl font-semibold text-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                size: 20,
                                className: "text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            "Mapa comercial"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: "Dónde está cada venta respecto de la red: prospectos, cajas con lugar y trabajos ya agendados sobre el mismo plano."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-kpis",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Prospectos en el mapa",
                        valor: prospectosFiltrados.length
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Calientes",
                        valor: calientes,
                        color: "text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "En juego",
                        valor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(enJuego),
                        color: "text-sky-400"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Cajas con lugar",
                        valor: datos.cajas.filter((c)=>c.activo && !c.llena).length,
                        color: "text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            sinUbicar && !cargando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: "Ningún prospecto tiene coordenadas todavía. Cargalas al dar de alta el prospecto o desde la verificación de cobertura, y van a empezar a aparecer acá."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                lineNumber: 273,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex flex-wrap gap-2",
                        children: [
                            puede('ventas.equipo') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: filtroVendedor,
                                onChange: (e)=>setFiltroVendedor(e.target.value),
                                className: "w-44",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Todos los vendedores"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    vendedores.map((param)=>{
                                        let [id, nombre] = param;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: id,
                                            children: nombre
                                        }, id, false, {
                                            fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: filtroSector,
                                onChange: (e)=>setFiltroSector(e.target.value),
                                className: "w-44",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Todos los sectores"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    sectores.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: s,
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: filtroEstado,
                                onChange: (e)=>setFiltroEstado(e.target.value),
                                className: "w-44",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Cualquier estado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "abiertos",
                                        children: "Solo los abiertos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        'nuevo',
                                        'contactado',
                                        'cotizado',
                                        'negociacion',
                                        'ganado',
                                        'perdido'
                                    ].map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: e,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["etiquetaEstado"])(e).label
                                        }, e, false, {
                                            fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-800 pt-3",
                        children: CAPAS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex cursor-pointer items-center gap-2 text-[12px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: visibles[c.clave],
                                        onChange: (e)=>setVisibles({
                                                ...visibles,
                                                [c.clave]: e.target.checked
                                            }),
                                        className: "h-3.5 w-3.5 rounded border-slate-600 bg-slate-900 text-sky-500 focus:ring-sky-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "inline-block h-2.5 w-2.5 shrink-0 rounded-full",
                                        style: {
                                            backgroundColor: c.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-300",
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.clave, true, {
                                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    cargando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {
                        texto: "Cargando el mapa…"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 343,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contenedor,
                        className: "h-[560px] w-full overflow-hidden rounded-xl border border-slate-800"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] text-slate-500",
                        children: "Las cajas NAP se pintan por ocupación: verde con lugar, ámbar quedan pocas, rojo llena. Prometer sobre una roja es lo que traba una instalación tres semanas."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ventas/MapaComercialPage.jsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_s(MapaComercialPage, "0fiOUOzKpwVnxmhyn1os18J13dk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = MapaComercialPage;
var _c;
__turbopack_context__.k.register(_c, "MapaComercialPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/ventas/MapaComercialPage.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/crm-pages/ventas/MapaComercialPage.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_b3b5cb96._.js.map