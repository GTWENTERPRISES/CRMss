(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/ConPermiso.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConPermiso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SinPermiso.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function ConPermiso(param) {
    let { permiso, children, envezDe, que } = param;
    _s();
    const { puede, perfil, cargandoPerfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    // Mientras no se sabe quién entró no se decide — ni se muestra el contenido
    // ni el cartel de "no tenés acceso". `puede()` dice que no durante la carga, y
    // sin esta línea eso se leería como una negativa: a quien sí tiene el permiso
    // le aparecería el cartel por medio segundo en cada recarga.
    //
    // Devolvía `null`, y eso dejaba la PANTALLA EN BLANCO cuando la carga no
    // terminaba nunca — que es lo que pasaba sin señal, porque la consulta del
    // legajo no tenía tiempo límite. Un rectángulo que late dice "esperá"; una
    // pantalla vacía dice "se rompió".
    // Y solo la PRIMERA vez: con un perfil ya cargado, una recarga en segundo
    // plano —el token que Supabase renueva al volver a la pestaña— no puede
    // reemplazar el contenido por un cartel de espera. Hacerlo desmonta lo que
    // haya adentro y le borra el estado: un formulario a medio llenar, la sección
    // en la que estaba parado.
    if (cargandoPerfil && !perfil) {
        return envezDe !== undefined ? envezDe : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
            fileName: "[project]/src/components/layout/ConPermiso.jsx",
            lineNumber: 35,
            columnNumber: 46
        }, this);
    }
    const claves = Array.isArray(permiso) ? permiso : [
        permiso
    ];
    const habilitado = !permiso || claves.some((p)=>puede(p));
    // El fragmento no es adorno: `children` puede ser varios elementos —dos
    // botones de una fila, por ejemplo— y devolverlos como arreglo suelto hace
    // que React pida claves para algo que nunca se reordena.
    if (habilitado) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    return envezDe !== undefined ? envezDe : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        que: que
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ConPermiso.jsx",
        lineNumber: 45,
        columnNumber: 44
    }, this);
}
_s(ConPermiso, "+tTz9rzG0g/03IvF49j81q2Uc7Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = ConPermiso;
var _c;
__turbopack_context__.k.register(_c, "ConPermiso");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/crm-pages/ventas/CoberturaPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESULTADOS",
    ()=>RESULTADOS,
    "default",
    ()=>CoberturaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ConPermiso.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$comercial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/comercial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ventas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
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
;
/**
 * Verificación de cobertura.
 *
 * ── De dónde sale la respuesta ──
 *
 * No de una estimación ni de un dibujo: de `cobertura_cercana`, la función que
 * existe desde la migración 31 y que recorre las cajas y torres reales
 * calculando distancia y puertos libres. Y descuenta los puertos que ya
 * reservaron instalaciones agendadas — sin ese descuento, dos ventas del mismo
 * día se prometen sobre la misma caja y la segunda se entera en la vereda.
 *
 * ── Por qué se guarda cada consulta ──
 *
 * La misma dirección puede dar "sin cobertura" en marzo y "disponible" en julio
 * porque se tendió la manzana. El historial es lo que permite volver a llamar a
 * los que se les dijo que no: es una lista de ventas que ya preguntaron.
 */ const CENTRO_POR_DEFECTO = [
    -0.9376,
    -79.227
];
const RESULTADOS = {
    disponible: {
        label: 'DISPONIBLE',
        color: 'verde',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        ayuda: 'Hay caja cerca con puerto libre. Se instala esta semana.'
    },
    con_obra: {
        label: 'DISPONIBLE CON OBRA',
        color: 'ambar',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
        ayuda: 'Llega, pero hay que tender. Lo aprueba red, no ventas.'
    },
    requiere_verificacion: {
        label: 'REQUIERE VERIFICACIÓN',
        color: 'ambar',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
        ayuda: 'Hay red cerca pero sin lugar confirmado. Que lo mire alguien de red.'
    },
    sin_cobertura: {
        label: 'SIN COBERTURA',
        color: 'rojo',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
        ayuda: 'No hay nada al alcance desde este punto.'
    }
};
const VACIA = {
    nombre: '',
    telefono: '',
    direccion: '',
    sector: '',
    referencia: '',
    latitud: '',
    longitud: '',
    tecnologia: 'ftth',
    notas: ''
};
const ZONA_VACIA = {
    nombre: '',
    tipo: 'circulo',
    tecnologia: 'ftth',
    centro_lat: '',
    centro_lng: '',
    radio_m: 500,
    color: '#0ea5e9',
    activa: true,
    notas: ''
};
function CoberturaPage() {
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const contenedor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const marcador = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [consulta, setConsulta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...VACIA
    });
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [verificando, setVerificando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [historial, setHistorial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [zonas, setZonas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editandoZona, setEditandoZona] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CoberturaPage.useCallback[recargar]": async ()=>{
            try {
                const [h, c] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$comercial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comercialApi"].verificaciones(50),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ventasApi"].cobertura()
                ]);
                setHistorial(h);
                setZonas(c.zonas);
            } catch (err) {
                setError(err);
            }
        }
    }["CoberturaPage.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoberturaPage.useEffect": ()=>{
            recargar();
        }
    }["CoberturaPage.useEffect"], [
        recargar
    ]);
    // Un mapa chico solo para elegir el punto. Escribir coordenadas a mano es lo
    // que nadie hace: se pincha la casa y listo.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoberturaPage.useEffect": ()=>{
            if (mapa.current || !contenedor.current) return;
            mapa.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(contenedor.current).setView(CENTRO_POR_DEFECTO, 14);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap',
                maxZoom: 19
            }).addTo(mapa.current);
            mapa.current.on('click', {
                "CoberturaPage.useEffect": (e)=>{
                    const lat = e.latlng.lat.toFixed(7);
                    const lng = e.latlng.lng.toFixed(7);
                    setConsulta({
                        "CoberturaPage.useEffect": (c)=>({
                                ...c,
                                latitud: lat,
                                longitud: lng
                            })
                    }["CoberturaPage.useEffect"]);
                    setResultado(null);
                    if (marcador.current) marcador.current.remove();
                    marcador.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker(e.latlng, {
                        radius: 8,
                        color: '#3987e5',
                        fillColor: '#3987e5',
                        fillOpacity: 0.9,
                        weight: 2
                    }).addTo(mapa.current);
                }
            }["CoberturaPage.useEffect"]);
        }
    }["CoberturaPage.useEffect"], []);
    const verificar = async ()=>{
        if (!consulta.latitud || !consulta.longitud) {
            return setError(new Error('Marca el punto en el mapa o escribe las coordenadas'));
        }
        setVerificando(true);
        setError(null);
        try {
            setResultado(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$comercial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comercialApi"].verificar({
                lat: Number(consulta.latitud),
                lng: Number(consulta.longitud),
                tecnologia: consulta.tecnologia
            }));
        } catch (err) {
            setError(err);
        } finally{
            setVerificando(false);
        }
    };
    /**
   * De la verificación al prospecto, en un paso.
   *
   * Es el flujo real: alguien llama preguntando si le llega, se verifica, y si
   * llega hay que cargarlo antes de que corte. Sin esto había que ir a
   * Prospectos y reescribir a mano la dirección, el sector y —lo peor— las
   * coordenadas, que nadie transcribe. El resultado era un prospecto sin punto
   * en el mapa, o sea invisible justo en la pantalla que dice si está cerca de
   * una caja con lugar.
   *
   * El vocabulario de cobertura se traduce acá: la verificación habla en
   * DISPONIBLE / SIN COBERTURA y el prospecto en el de `instalaciones`, para que
   * al ganarse el valor pase sin traducir.
   */ const A_COBERTURA_PROSPECTO = {
        disponible: 'factible',
        con_obra: 'con_obra',
        requiere_verificacion: 'pendiente',
        sin_cobertura: 'no_factible'
    };
    const guardar = async function() {
        let { conProspecto = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!consulta.direccion.trim()) {
            return setError(new Error('Falta la dirección: sin ella la consulta no sirve para volver a llamar'));
        }
        try {
            const m = resultado === null || resultado === void 0 ? void 0 : resultado.mejor;
            // El prospecto primero, para poder dejarlo referenciado en la
            // verificación. Al revés habría que actualizarla después, y si eso falla
            // queda una consulta huérfana que nadie relaciona con la venta.
            let prospectoId = null;
            if (conProspecto) {
                // Sin nombre no se puede crear: un prospecto llamado como su propia
                // dirección es imposible de buscar y de saludar por teléfono.
                if (!consulta.nombre.trim()) {
                    return setError(new Error('Para crear el prospecto hace falta el nombre de quien consultó'));
                }
                var _A_COBERTURA_PROSPECTO_resultado_resultado, _m_id, _m_distancia_m, _perfil_id, _perfil_id1;
                const p = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ventasApi"].guardar({
                    nombre: consulta.nombre.trim(),
                    direccion: consulta.direccion.trim(),
                    telefono: consulta.telefono || null,
                    sector: consulta.sector || null,
                    referencia: consulta.referencia || null,
                    latitud: Number(consulta.latitud),
                    longitud: Number(consulta.longitud),
                    cobertura: (_A_COBERTURA_PROSPECTO_resultado_resultado = A_COBERTURA_PROSPECTO[resultado === null || resultado === void 0 ? void 0 : resultado.resultado]) !== null && _A_COBERTURA_PROSPECTO_resultado_resultado !== void 0 ? _A_COBERTURA_PROSPECTO_resultado_resultado : 'pendiente',
                    nap_id: (_m_id = m === null || m === void 0 ? void 0 : m.id) !== null && _m_id !== void 0 ? _m_id : null,
                    distancia_nodo_m: (_m_distancia_m = m === null || m === void 0 ? void 0 : m.distancia_m) !== null && _m_distancia_m !== void 0 ? _m_distancia_m : null,
                    origen: 'llamada',
                    estado: 'nuevo',
                    vendedor_id: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null,
                    creado_por: (_perfil_id1 = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id1 !== void 0 ? _perfil_id1 : null,
                    notas: consulta.notas || null
                });
                prospectoId = p.id;
            }
            var _resultado_resultado, _m_id1, _m_distancia_m1, _m_capacidad, _m_disponibles, _perfil_id2;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$comercial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comercialApi"].guardarVerificacion({
                prospecto_id: prospectoId,
                direccion: consulta.direccion.trim(),
                sector: consulta.sector || null,
                referencia: consulta.referencia || null,
                latitud: Number(consulta.latitud),
                longitud: Number(consulta.longitud),
                tecnologia: consulta.tecnologia,
                notas: consulta.notas || null,
                resultado: (_resultado_resultado = resultado === null || resultado === void 0 ? void 0 : resultado.resultado) !== null && _resultado_resultado !== void 0 ? _resultado_resultado : 'requiere_verificacion',
                nap_id: (_m_id1 = m === null || m === void 0 ? void 0 : m.id) !== null && _m_id1 !== void 0 ? _m_id1 : null,
                distancia_m: (_m_distancia_m1 = m === null || m === void 0 ? void 0 : m.distancia_m) !== null && _m_distancia_m1 !== void 0 ? _m_distancia_m1 : null,
                capacidad: (_m_capacidad = m === null || m === void 0 ? void 0 : m.capacidad) !== null && _m_capacidad !== void 0 ? _m_capacidad : null,
                disponibles: (_m_disponibles = m === null || m === void 0 ? void 0 : m.disponibles) !== null && _m_disponibles !== void 0 ? _m_disponibles : null,
                verificado_por: (_perfil_id2 = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id2 !== void 0 ? _perfil_id2 : null
            });
            setConsulta({
                ...VACIA
            });
            setResultado(null);
            if (marcador.current) marcador.current.remove();
            await recargar();
        } catch (err) {
            setError(err);
        }
    };
    const R = resultado ? RESULTADOS[resultado.resultado] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "flex items-center gap-2 text-xl font-semibold text-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                size: 20,
                                className: "text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            "Verificación de cobertura"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: "¿Llega el servicio a esta dirección? La respuesta sale de las cajas reales y sus puertos libres, no de una estimación."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Consultar una dirección",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            label: "Quién consulta",
                                            hint: "Hace falta solo si vas a cargarlo como prospecto.",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Ej.: Vecino de la calle Bolívar",
                                                value: consulta.nombre,
                                                onChange: (e)=>setConsulta({
                                                        ...consulta,
                                                        nombre: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            label: "Teléfono",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Ej.: 0991234567",
                                                value: consulta.telefono,
                                                onChange: (e)=>setConsulta({
                                                        ...consulta,
                                                        telefono: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Dirección",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: consulta.direccion,
                                        onChange: (e)=>setConsulta({
                                                ...consulta,
                                                direccion: e.target.value
                                            }),
                                        placeholder: "Av. 19 de Mayo y García Moreno"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            label: "Sector o barrio",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Ej.: Urdesa Central",
                                                value: consulta.sector,
                                                onChange: (e)=>setConsulta({
                                                        ...consulta,
                                                        sector: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            hint: "Fibra (FTTH) o radio.",
                                            label: "Tecnología",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: consulta.tecnologia,
                                                onChange: (e)=>{
                                                    setConsulta({
                                                        ...consulta,
                                                        tecnologia: e.target.value
                                                    });
                                                    setResultado(null);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ftth",
                                                        children: "Fibra"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "wireless",
                                                        children: "Radio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            label: "Latitud",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Ej.: -2.170998",
                                                value: consulta.latitud,
                                                onChange: (e)=>setConsulta({
                                                        ...consulta,
                                                        latitud: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            label: "Longitud",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Ej.: -79.922359",
                                                value: consulta.longitud,
                                                onChange: (e)=>setConsulta({
                                                        ...consulta,
                                                        longitud: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Referencia",
                                    hint: "Cómo llegar: es lo único que sirve donde no hay nomenclatura.",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: Casa esquinera, portón negro",
                                        value: consulta.referencia,
                                        onChange: (e)=>setConsulta({
                                                ...consulta,
                                                referencia: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    onClick: verificar,
                                    cargando: verificando,
                                    disabled: verificando,
                                    className: "w-full",
                                    children: "Verificar cobertura"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                R && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 t-card p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(R.icono, {
                                                    size: 20,
                                                    className: R.color === 'verde' ? 'text-emerald-400' : R.color === 'rojo' ? 'text-red-400' : 'text-amber-400'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                    lineNumber: 331,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] font-semibold text-slate-100",
                                                    children: R.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-slate-400",
                                            children: R.ayuda
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this),
                                        resultado.cercanas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] uppercase tracking-wider text-slate-500",
                                                    children: "Lo más cercano"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this),
                                                resultado.cercanas.slice(0, 3).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2 rounded-lg bg-[#F6F8FB] px-2 py-1.5 text-[12px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-200",
                                                                children: c.nombre
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                                lineNumber: 355,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tabular-nums text-slate-400",
                                                                children: [
                                                                    c.distancia_m,
                                                                    " m ·",
                                                                    ' ',
                                                                    c.disponibles == null ? 'capacidad sin cargar' : "".concat(c.disponibles, " libres")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                                lineNumber: 356,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, c.id, true, {
                                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                        lineNumber: 351,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            label: "Notas",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                placeholder: "Ej.: Llamar antes de ir",
                                                rows: 2,
                                                value: consulta.notas,
                                                onChange: (e)=>setConsulta({
                                                        ...consulta,
                                                        notas: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 366,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>guardar(),
                                                    children: "Solo guardar la consulta"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variante: "primario",
                                                    onClick: ()=>guardar({
                                                            conProspecto: true
                                                        }),
                                                    children: "Guardar y crear prospecto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Marca el punto",
                        subtitle: "Haz clic sobre la casa",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: contenedor,
                            className: "h-[440px] w-full overflow-hidden rounded-xl border border-slate-800"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 md:grid-cols-4",
                children: Object.entries(RESULTADOS).map((param)=>{
                    let [k, v] = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: v.label,
                        valor: historial.filter((h)=>h.resultado === k).length,
                        color: v.color === 'verde' ? 'text-emerald-400' : v.color === 'rojo' ? 'text-red-400' : 'text-amber-400'
                    }, k, false, {
                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Consultas anteriores",
                subtitle: "Los que dieron negativo hace meses pueden estar disponibles hoy: es una lista para volver a llamar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Fecha',
                        'Dirección',
                        'Sector',
                        'Resultado',
                        'Caja más cercana'
                    ],
                    filas: historial,
                    vacio: "Todavía no se verificó ninguna dirección.",
                    renderFila: (h)=>{
                        var _RESULTADOS_h_resultado, _RESULTADOS_h_resultado1;
                        var _h_sector, _RESULTADOS_h_resultado_color, _RESULTADOS_h_resultado_label;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-slate-800/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "whitespace-nowrap px-3 py-2 text-[12px] text-slate-400",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(h.creado_en)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-slate-200",
                                    children: h.direccion
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-[12px] text-slate-400",
                                    children: (_h_sector = h.sector) !== null && _h_sector !== void 0 ? _h_sector : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: (_RESULTADOS_h_resultado_color = (_RESULTADOS_h_resultado = RESULTADOS[h.resultado]) === null || _RESULTADOS_h_resultado === void 0 ? void 0 : _RESULTADOS_h_resultado.color) !== null && _RESULTADOS_h_resultado_color !== void 0 ? _RESULTADOS_h_resultado_color : 'gris',
                                        children: (_RESULTADOS_h_resultado_label = (_RESULTADOS_h_resultado1 = RESULTADOS[h.resultado]) === null || _RESULTADOS_h_resultado1 === void 0 ? void 0 : _RESULTADOS_h_resultado1.label) !== null && _RESULTADOS_h_resultado_label !== void 0 ? _RESULTADOS_h_resultado_label : h.resultado
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-[12px] tabular-nums text-slate-400",
                                    children: [
                                        h.distancia_m != null ? "".concat(h.distancia_m, " m") : '—',
                                        h.disponibles != null ? " · ".concat(h.disponibles, " libres") : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, h.id, true, {
                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                    lineNumber: 417,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Zonas de cobertura",
                subtitle: "Hasta dónde se vende. Las cajas dicen dónde hay puerto libre hoy; esto, hasta dónde se promete.",
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    permiso: "config.planes",
                    envezDe: null,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                        onClick: ()=>setEditandoZona({
                                ...ZONA_VACIA
                            }),
                        children: "Nueva zona"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                        lineNumber: 448,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                    lineNumber: 447,
                    columnNumber: 11
                }, void 0),
                children: zonas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-4 text-center text-sm text-slate-500",
                    children: "Sin zonas cargadas."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                    lineNumber: 455,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: zonas.map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-2 t-card-sm p-2 text-[13px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "inline-block h-3 w-3 rounded-full",
                                            style: {
                                                backgroundColor: z.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 464,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-200",
                                            children: z.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 468,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "gris",
                                            children: z.tecnologia
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 469,
                                            columnNumber: 19
                                        }, this),
                                        z.tipo === 'circulo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-slate-500",
                                            children: [
                                                "radio ",
                                                z.radio_m,
                                                " m"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                            lineNumber: 471,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 463,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    permiso: "config.planes",
                                    envezDe: null,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variante: "fantasma",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                        onClick: async ()=>{
                                            if (!await confirmar("¿Eliminar la zona ".concat(z.nombre, "?"))) return;
                                            try {
                                                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ventasApi"].eliminarZona(z.id);
                                                await recargar();
                                            } catch (err) {
                                                setError(err);
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                        lineNumber: 475,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 474,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, z.id, true, {
                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                            lineNumber: 459,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                    lineNumber: 457,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: !!editandoZona,
                titulo: "Nueva zona de cobertura",
                onCerrar: ()=>setEditandoZona(null),
                children: editandoZona && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: "Usa las coordenadas del punto que marcaste arriba, o escribe otras. El radio se dibuja en el mapa comercial."
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                            lineNumber: 502,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Nombre",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Ej.: Juan Pérez",
                                value: editandoZona.nombre,
                                onChange: (e)=>setEditandoZona({
                                        ...editandoZona,
                                        nombre: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                lineNumber: 507,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Latitud",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: -2.170998",
                                        value: editandoZona.centro_lat || consulta.latitud,
                                        onChange: (e)=>setEditandoZona({
                                                ...editandoZona,
                                                centro_lat: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                        lineNumber: 514,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 513,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Longitud",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: -79.922359",
                                        value: editandoZona.centro_lng || consulta.longitud,
                                        onChange: (e)=>setEditandoZona({
                                                ...editandoZona,
                                                centro_lng: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 519,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Radio (metros)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: 300",
                                        type: "number",
                                        value: editandoZona.radio_m,
                                        onChange: (e)=>setEditandoZona({
                                                ...editandoZona,
                                                radio_m: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                        lineNumber: 526,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 525,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    hint: "Fibra (FTTH) o radio.",
                                    label: "Tecnología",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: editandoZona.tecnologia,
                                        onChange: (e)=>setEditandoZona({
                                                ...editandoZona,
                                                tecnologia: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ftth",
                                                children: "Fibra"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 537,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "wireless",
                                                children: "Radio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 538,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ambas",
                                                children: "Las dos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                                lineNumber: 539,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                        lineNumber: 533,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                            lineNumber: 512,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    onClick: ()=>setEditandoZona(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 544,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: async ()=>{
                                        try {
                                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ventasApi"].guardarZona({
                                                ...editandoZona,
                                                centro_lat: Number(editandoZona.centro_lat || consulta.latitud),
                                                centro_lng: Number(editandoZona.centro_lng || consulta.longitud),
                                                radio_m: Number(editandoZona.radio_m)
                                            });
                                            setEditandoZona(null);
                                            await recargar();
                                        } catch (err) {
                                            setError(err);
                                        }
                                    },
                                    children: "Guardar zona"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                                    lineNumber: 547,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                            lineNumber: 543,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                    lineNumber: 501,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
                lineNumber: 495,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ventas/CoberturaPage.jsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_s(CoberturaPage, "dSZWgdTW/QmlaKxjbbjsNpfH7Q4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = CoberturaPage;
var _c;
__turbopack_context__.k.register(_c, "CoberturaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/ventas/CoberturaPage.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/crm-pages/ventas/CoberturaPage.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_e58cf140._.js.map