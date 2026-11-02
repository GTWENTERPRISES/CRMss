(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ventas/BotonTema.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BotonTema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
;
;
function BotonTema(param) {
    let { tema, onAlternar } = param;
    const aClaro = tema === 'oscuro';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onAlternar,
        className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg campo-suave transition hover:campo-txt",
        title: aClaro ? 'Cambiar a claro — se lee mejor al sol' : 'Cambiar a oscuro',
        "aria-label": aClaro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro',
        children: aClaro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/src/components/ventas/BotonTema.jsx",
            lineNumber: 25,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/src/components/ventas/BotonTema.jsx",
            lineNumber: 25,
            columnNumber: 37
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ventas/BotonTema.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = BotonTema;
var _c;
__turbopack_context__.k.register(_c, "BotonTema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/temaCampo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTemaCampo",
    ()=>useTemaCampo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
/**
 * El tema de las pantallas de campo: claro para el sol, oscuro para el resto.
 *
 * ── Por qué se guarda en el dispositivo y no en el usuario ──
 *
 * La primera idea fue guardarlo en el legajo, para que "siga a la persona". Es
 * la respuesta equivocada: el mismo vendedor usa el celular en la vereda al
 * mediodía y la computadora en la oficina a las siete. Si la preferencia
 * viajara con él, poner el teléfono en claro le pondría también la pantalla del
 * escritorio en blanco — que es justo donde no hace falta y donde molesta.
 *
 * El contexto no es la persona: es el aparato y dónde está parado. Por eso vive
 * en `localStorage`, y cada dispositivo recuerda el suyo.
 *
 * Efecto secundario útil: no hay ida y vuelta al servidor, así que el cambio es
 * instantáneo. Alguien que sale al sol y no ve nada aprieta el botón y ve —no
 * espera a que responda una API con la pantalla en negro.
 */ const CLAVE = 'tema-campo';
/**
 * Arranca en oscuro.
 *
 * Se evaluó deducirlo de `prefers-color-scheme` del sistema. Se descartó: esa
 * preferencia dice si a la persona le gusta el modo oscuro, no si está bajo el
 * sol. Un teléfono en modo oscuro al mediodía necesita la pantalla clara igual,
 * y adivinarlo mal en el arranque es peor que dejar que lo elija.
 */ /**
 * ...salvo que la pantalla diga otra cosa.
 *
 * El tablero del técnico arranca en claro: se usa afuera, y una pantalla oscura
 * al sol del mediodía no se lee. El del vendedor sigue arrancando en oscuro,
 * que es como se diseñó.
 *
 * Lo guardado siempre gana sobre el valor de arranque: en cuanto alguien elige,
 * su elección vale para todas las pantallas de campo de ese dispositivo. El
 * parámetro solo decide qué mostrar la primera vez.
 */ const inicial = (porDefecto)=>{
    try {
        const guardado = localStorage.getItem(CLAVE);
        if (guardado === 'claro' || guardado === 'oscuro') return guardado;
        return porDefecto;
    } catch (e) {
        // Modo privado en algunos navegadores tira al leer. No es motivo para que
        // la pantalla no cargue.
        return porDefecto;
    }
};
function useTemaCampo() {
    let porDefecto = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'oscuro';
    _s();
    const [tema, setTema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useTemaCampo.useState": ()=>inicial(porDefecto)
    }["useTemaCampo.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTemaCampo.useEffect": ()=>{
            try {
                localStorage.setItem(CLAVE, tema);
            } catch (e) {
            /* si no se puede guardar, la elección vale para esta sesión igual */ }
        }
    }["useTemaCampo.useEffect"], [
        tema
    ]);
    const alternar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTemaCampo.useCallback[alternar]": ()=>setTema({
                "useTemaCampo.useCallback[alternar]": (t)=>t === 'claro' ? 'oscuro' : 'claro'
            }["useTemaCampo.useCallback[alternar]"])
    }["useTemaCampo.useCallback[alternar]"], []);
    return {
        tema,
        alternar,
        esClaro: tema === 'claro'
    };
}
_s(useTemaCampo, "m9fXXHbt6AkFMZW/90VlrxgSOuE=");
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
"[project]/src/crm-pages/ventas/InteligenciaPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteligenciaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ventas$2f$BotonTema$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ventas/BotonTema.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$temaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/temaCampo.js [app-client] (ecmascript)");
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
;
;
/**
 * Inteligencia comercial.
 *
 * ── La pregunta que contesta ──
 *
 * Dónde te están pidiendo servicio y no llegás.
 *
 * Cada verificación de cobertura que da negativo queda guardada con su sector y
 * sus coordenadas. Ese registro se viene acumulando y nadie lo consultaba.
 * Agrupado, deja de ser un historial y pasa a ser un mapa de demanda
 * comprobada: no "creemos que en ese barrio hay mercado", sino "doce personas de
 * ahí preguntaron y les dijimos que no".
 *
 * Es la diferencia entre decidir dónde tender red por intuición y decidirlo por
 * pedidos que ya llegaron.
 *
 * ── Lo que esta pantalla NO hace ──
 *
 * No estima cuánta plata se pierde en las consultas anónimas. Cuando alguien
 * pregunta y no queda cargado como prospecto, no se sabe qué plan habría
 * contratado, y multiplicarlo por un precio promedio daría un número grande y
 * falso. Se cuentan las consultas —que es un hecho— y aparte se suma el valor
 * REAL de los prospectos que sí se cargaron y se perdieron por cobertura.
 */ const CENTRO_POR_DEFECTO = [
    -0.9376,
    -79.227
];
function InteligenciaPage() {
    _s();
    const { tema, alternar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$temaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemaCampo"])();
    const C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$comercial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paleta"])(tema);
    const contenedor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const capa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [datos, setDatos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sectores: [],
        puntos: [],
        origenes: [],
        perdidos: [],
        cajas: [],
        naps: []
    });
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InteligenciaPage.useCallback[recargar]": async ()=>{
            setCargando(true);
            try {
                const [sectores, puntos, origenes, perdidos, cajas, naps] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_demanda_por_sector').select('*').order('prioridad', {
                        ascending: false
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_puntos_sin_cobertura').select('*').limit(500),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_cierre_por_origen').select('*').order('total', {
                        ascending: false
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_perdidos_recientes').select('*').limit(20),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_cajas_al_limite').select('*'),
                    // Las cajas que sí tienen lugar, para que el mapa muestre el contraste
                    // entre dónde llegamos y dónde nos piden.
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_cajas_nap').select('nombre, latitud, longitud, libres, llena').not('latitud', 'is', null)
                ]);
                if (sectores.error) throw sectores.error;
                var _sectores_data, _puntos_data, _origenes_data, _perdidos_data, _cajas_data, _naps_data;
                setDatos({
                    sectores: (_sectores_data = sectores.data) !== null && _sectores_data !== void 0 ? _sectores_data : [],
                    puntos: (_puntos_data = puntos.data) !== null && _puntos_data !== void 0 ? _puntos_data : [],
                    origenes: (_origenes_data = origenes.data) !== null && _origenes_data !== void 0 ? _origenes_data : [],
                    perdidos: (_perdidos_data = perdidos.data) !== null && _perdidos_data !== void 0 ? _perdidos_data : [],
                    cajas: (_cajas_data = cajas.data) !== null && _cajas_data !== void 0 ? _cajas_data : [],
                    naps: (_naps_data = naps.data) !== null && _naps_data !== void 0 ? _naps_data : []
                });
                setError(null);
            } catch (err) {
                setError(err);
            } finally{
                setCargando(false);
            }
        }
    }["InteligenciaPage.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteligenciaPage.useEffect": ()=>{
            recargar();
        }
    }["InteligenciaPage.useEffect"], [
        recargar
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteligenciaPage.useEffect": ()=>{
            if (mapa.current || !contenedor.current) return;
            mapa.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(contenedor.current).setView(CENTRO_POR_DEFECTO, 13);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap',
                maxZoom: 19
            }).addTo(mapa.current);
            capa.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layerGroup().addTo(mapa.current);
        }
    }["InteligenciaPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteligenciaPage.useEffect": ()=>{
            if (!capa.current) return;
            capa.current.clearLayers();
            const bordes = [];
            // La red que ya existe, en gris: es el telón de fondo contra el que se lee
            // la demanda. Sin ella, un racimo de puntos rojos no dice si está a una
            // cuadra de la red o a diez kilómetros.
            datos.naps.forEach({
                "InteligenciaPage.useEffect": (n)=>{
                    const p = [
                        Number(n.latitud),
                        Number(n.longitud)
                    ];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker(p, {
                        radius: 5,
                        color: n.llena ? '#64748b' : '#0ca30c',
                        fillColor: n.llena ? '#64748b' : '#0ca30c',
                        fillOpacity: 0.5,
                        weight: 1
                    }).bindPopup("<b>".concat(n.nombre, "</b><br>").concat(n.llena ? 'llena' : "".concat(n.libres, " libres"))).addTo(capa.current);
                    bordes.push(p);
                }
            }["InteligenciaPage.useEffect"]);
            // La demanda, en rojo y más grande: es lo que se viene a mirar.
            datos.puntos.forEach({
                "InteligenciaPage.useEffect": (x)=>{
                    const p = [
                        Number(x.latitud),
                        Number(x.longitud)
                    ];
                    var _x_sector;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker(p, {
                        radius: 8,
                        color: x.resultado === 'sin_cobertura' ? '#d03b3b' : '#fab219',
                        fillColor: x.resultado === 'sin_cobertura' ? '#d03b3b' : '#fab219',
                        fillOpacity: 0.75,
                        weight: 2
                    }).bindPopup("<b>".concat(x.direccion, "</b><br>").concat((_x_sector = x.sector) !== null && _x_sector !== void 0 ? _x_sector : 'sin sector', "<br>") + "".concat(x.resultado === 'sin_cobertura' ? 'Sin cobertura' : 'Requiere obra') + "".concat(x.distancia_m ? " · lo más cerca a ".concat(x.distancia_m, " m") : '') + "".concat(x.prospecto ? "<br>Prospecto: ".concat(x.prospecto) : '')).addTo(capa.current);
                    bordes.push(p);
                }
            }["InteligenciaPage.useEffect"]);
            if (bordes.length) mapa.current.fitBounds(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(bordes).pad(0.2));
        }
    }["InteligenciaPage.useEffect"], [
        datos
    ]);
    const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InteligenciaPage.useMemo[total]": ()=>({
                consultas: datos.sectores.reduce({
                    "InteligenciaPage.useMemo[total]": (t, s)=>t + s.sin_cobertura + s.con_obra
                }["InteligenciaPage.useMemo[total]"], 0),
                perdidos: datos.sectores.reduce({
                    "InteligenciaPage.useMemo[total]": (t, s)=>t + s.prospectos_perdidos
                }["InteligenciaPage.useMemo[total]"], 0),
                valor: datos.sectores.reduce({
                    "InteligenciaPage.useMemo[total]": (t, s)=>t + Number(s.valor_mensual_perdido || 0)
                }["InteligenciaPage.useMemo[total]"], 0)
            })
    }["InteligenciaPage.useMemo[total]"], [
        datos.sectores
    ]);
    const sinDatos = !cargando && datos.sectores.length === 0 && datos.puntos.length === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campo campo-fondo -m-6 space-y-4 p-4 md:p-6",
        "data-tema": tema,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "campo-txt flex items-center gap-2 text-xl font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                        size: 20,
                                        style: {
                                            color: C.alerta
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    "Inteligencia comercial"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "campo-suave text-sm",
                                children: "Dónde te piden servicio y no llegas, y por dónde se te escapan las ventas."
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ventas$2f$BotonTema$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tema: tema,
                        onAlternar: alternar
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            sinDatos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: [
                    "Todavía no hay consultas de cobertura registradas. Cada vez que alguien use",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Verificar cobertura"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    " y dé negativo, ese pedido se guarda con su sector y aparece acá. Es información que se junta sola mientras se trabaja."
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 179,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metrica, {
                        titulo: "Consultas sin cobertura",
                        valor: total.consultas,
                        nota: "Gente que preguntó y se fue",
                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                        color: C.critico
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metrica, {
                        titulo: "Prospectos perdidos por cobertura",
                        valor: total.perdidos,
                        nota: "Llegaron a cargarse y no se pudo",
                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
                        color: C.alerta
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metrica, {
                        titulo: "Mensualidad que se perdió",
                        valor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(total.valor),
                        nota: "Solo de los prospectos cargados — las consultas anónimas no se estiman",
                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        color: C.etapas[0]
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex flex-wrap items-center gap-4 text-[12px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "campo-txt text-[13px] font-medium",
                                children: "Demanda contra red existente"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leyenda, {
                                        color: "#d03b3b",
                                        texto: "Sin cobertura"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leyenda, {
                                        color: "#fab219",
                                        texto: "Requiere obra"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leyenda, {
                                        color: "#0ca30c",
                                        texto: "Caja con lugar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leyenda, {
                                        color: "#64748b",
                                        texto: "Caja llena"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    cargando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {
                        texto: "Cargando la demanda…"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 222,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contenedor,
                        className: "h-[440px] w-full overflow-hidden rounded-xl border campo-borde"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "campo-tenue mt-2 text-[11px]",
                        children: "Un racimo rojo pegado a un punto verde es una ampliación de caja. Un racimo rojo lejos de todo es una decisión más grande: tender red nueva."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Dónde conviene tender",
                subtitle: "Ordenado por demanda comprobada. Un prospecto perdido pesa el triple que una consulta suelta: llegó a cargarse, o sea que alguien habló con esa persona.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Sector',
                        'Sin cobertura',
                        'Requiere obra',
                        'Prospectos perdidos',
                        'Mensualidad perdida',
                        'Última consulta'
                    ],
                    filas: datos.sectores,
                    vacio: "Sin demanda insatisfecha registrada.",
                    renderFila: (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-slate-800/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "campo-txt font-medium",
                                            children: s.sector
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, void 0),
                                        s.prioridad >= 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "rojo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-0",
                                                children: "prioridad"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 tabular-nums",
                                    style: {
                                        color: s.sin_cobertura ? C.critico : undefined
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: s.sin_cobertura ? '' : 'campo-tenue',
                                        children: s.sin_cobertura
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "campo-suave px-3 py-2 tabular-nums",
                                    children: s.con_obra
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "campo-suave px-3 py-2 tabular-nums",
                                    children: s.prospectos_perdidos
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "campo-txt px-3 py-2 tabular-nums",
                                    children: Number(s.valor_mensual_perdido) > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(s.valor_mensual_perdido) : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "campo-tenue px-3 py-2 text-[12px]",
                                    children: s.ultima_consulta ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(s.ultima_consulta) : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, s.sector, true, {
                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Qué canal cierra mejor",
                        subtitle: "Sobre los prospectos ya cerrados, no sobre el total: incluir los que están en proceso castiga al canal que trae gente nueva.",
                        children: datos.origenes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "campo-tenue py-6 text-center text-[13px]",
                            children: "Sin prospectos cargados."
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: datos.origenes.map((o, i)=>{
                                var _ORIGENES_o_origen, _o_tasa_cierre;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-1 flex items-center justify-between gap-2 text-[12px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "campo-suave truncate",
                                                    children: (_ORIGENES_o_origen = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ventas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGENES"][o.origen]) !== null && _ORIGENES_o_origen !== void 0 ? _ORIGENES_o_origen : o.origen
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "campo-txt shrink-0 tabular-nums",
                                                    children: [
                                                        o.tasa_cierre != null ? "".concat(o.tasa_cierre, "%") : 'sin cerrar aún',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "campo-tenue",
                                                            children: [
                                                                " · ",
                                                                o.ganados,
                                                                "/",
                                                                o.total
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                                            lineNumber: 284,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 280,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "campo-sup h-1.5 overflow-hidden rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-full",
                                                style: {
                                                    width: "".concat((_o_tasa_cierre = o.tasa_cierre) !== null && _o_tasa_cierre !== void 0 ? _o_tasa_cierre : 0, "%"),
                                                    background: C.etapas[i % C.etapas.length]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                                lineNumber: 288,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, o.origen, true, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Cajas por acabarse",
                        subtitle: "Dónde ampliar antes de que una venta se caiga por falta de boca. Es distinto de dónde no llegamos.",
                        children: datos.cajas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "campo-tenue py-6 text-center text-[13px]",
                            children: "Ninguna caja al límite — o falta cargarles la capacidad."
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: datos.cajas.map((c)=>{
                                var _c_direccion, _ref;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "campo-borde flex items-center justify-between gap-2 rounded-lg border p-2 text-[13px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "campo-txt truncate",
                                                    children: c.nombre
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                                    lineNumber: 319,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "campo-tenue truncate text-[11px]",
                                                    children: (_ref = (_c_direccion = c.direccion) !== null && _c_direccion !== void 0 ? _c_direccion : c.olt) !== null && _ref !== void 0 ? _ref : 'sin dirección'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 318,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0 tabular-nums",
                                            style: {
                                                color: c.llena ? C.critico : C.alerta
                                            },
                                            children: c.llena ? 'LLENA' : "".concat(c.libres, " de ").concat(c.capacidad)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 324,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 314,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Ventas perdidas, en palabras",
                subtitle: "Los motivos se escriben a mano, así que no se agrupan: 'precio', 'muy caro' y 'no le alcanzaba' son la misma cosa para una persona y tres categorías para una consulta.",
                children: datos.perdidos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "campo-tenue py-6 text-center text-[13px]",
                    children: "Todavía no se dio ninguna por perdida."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                    lineNumber: 343,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-72 space-y-1.5 overflow-y-auto",
                    children: datos.perdidos.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "campo-borde rounded-lg border p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "campo-txt text-[13px] font-medium",
                                            children: p.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 351,
                                            columnNumber: 19
                                        }, this),
                                        p.cobertura === 'no_factible' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "rojo",
                                            children: "sin cobertura"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 352,
                                            columnNumber: 53
                                        }, this),
                                        p.sector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "campo-tenue text-[11px]",
                                            children: p.sector
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 353,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "campo-tenue ml-auto text-[11px]",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(p.perdido_en)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                            lineNumber: 354,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 350,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "campo-suave mt-0.5 text-[12px]",
                                    children: p.motivo_perdida
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                                    lineNumber: 358,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                            lineNumber: 349,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                    lineNumber: 347,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 338,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(InteligenciaPage, "dudtBQnQ/edp+Zfi3SnAfqKN9SQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$temaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemaCampo"]
    ];
});
_c = InteligenciaPage;
// ---------------------------------------------------------------------------
function Metrica(param) {
    let { titulo, valor, nota, icono: Icono, color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campo-sup campo-borde rounded-xl border p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "campo-suave text-[12px]",
                        children: titulo
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
                        style: {
                            background: "".concat(color, "22"),
                            color
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campo-txt mt-1 text-2xl font-semibold tabular-nums",
                children: valor
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            nota && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-tenue mt-1 text-[11px] leading-tight",
                children: nota
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 383,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
_c1 = Metrica;
const Leyenda = (param)=>{
    let { color, texto } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "h-2.5 w-2.5 rounded-full",
                style: {
                    background: color
                }
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 390,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "campo-suave",
                children: texto
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
                lineNumber: 391,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ventas/InteligenciaPage.jsx",
        lineNumber: 389,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Leyenda;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "InteligenciaPage");
__turbopack_context__.k.register(_c1, "Metrica");
__turbopack_context__.k.register(_c2, "Leyenda");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/ventas/InteligenciaPage.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/crm-pages/ventas/InteligenciaPage.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_57468537._.js.map