(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mapaPreferido.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APPS_MAPA",
    ()=>APPS_MAPA,
    "mapaPreferido",
    ()=>mapaPreferido,
    "useMapaPreferido",
    ()=>useMapaPreferido
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
/**
 * Con qué aplicación abre el técnico las direcciones.
 *
 * ── Por qué una preferencia y no un menú cada vez ──
 *
 * Porque "Llegar" es el botón que más se aprieta en el día: una vez por parada,
 * más las que se vuelve a mirar en el camino. Agregarle un menú de dos opciones
 * a la acción más repetida son cuarenta toques por semana para elegir siempre
 * lo mismo.
 *
 * Se elige una vez, en Perfil, y todos los botones del sistema lo respetan.
 *
 * ── Por qué se guarda en el dispositivo y no en el legajo ──
 *
 * Es el mismo razonamiento que el tema de campo, y está escrito allá:
 *
 *     "El contexto no es la persona: es el aparato y dónde está parado."
 *
 * El técnico puede tener Waze en su celular y no tenerlo en la tablet de la
 * oficina. Una preferencia que viajara con la persona le abriría en la tablet
 * una aplicación que no está instalada, y ahí el botón no hace nada.
 */ const CLAVE = 'mapa-preferido';
const APPS_MAPA = [
    {
        clave: 'google',
        label: 'Google Maps',
        nota: 'Abre igual aunque no la tengas instalada.'
    },
    {
        clave: 'waze',
        label: 'Waze'
    },
    {
        clave: 'sistema',
        label: 'La que yo elija en el teléfono',
        nota: 'Te muestra todas las que tengas: maps.me, OsmAnd, la que uses. Si tocas «Siempre», deja de preguntar.',
        soloAndroid: true
    }
];
const VALIDAS = APPS_MAPA.map(_c = (a)=>a.clave);
_c1 = VALIDAS;
/**
 * Arranca en Google Maps.
 *
 * No se deduce de lo que el teléfono tenga instalado: el navegador no puede
 * saberlo, y probar a abrir para ver si funciona deja al técnico mirando una
 * pantalla en blanco cuando no está. Google Maps abre en el navegador aunque la
 * aplicación no esté, así que es la única que nunca falla.
 */ function inicial() {
    try {
        const g = localStorage.getItem(CLAVE);
        return VALIDAS.includes(g) ? g : 'google';
    } catch (e) {
        // Modo privado en algunos navegadores tira al leer. No es motivo para que
        // la pantalla no cargue.
        return 'google';
    }
}
function useMapaPreferido() {
    _s();
    const [app, setAppEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(inicial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMapaPreferido.useEffect": ()=>{
            try {
                localStorage.setItem(CLAVE, app);
            } catch (e) {
            /* si no se puede guardar, la elección vale para esta sesión igual */ }
        }
    }["useMapaPreferido.useEffect"], [
        app
    ]);
    const setApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMapaPreferido.useCallback[setApp]": (v)=>{
            if (VALIDAS.includes(v)) setAppEstado(v);
        }
    }["useMapaPreferido.useCallback[setApp]"], []);
    return {
        app,
        setApp
    };
}
_s(useMapaPreferido, "okOoFzXWKfBkKdeE/Sz/Ourw8s8=");
const mapaPreferido = ()=>inicial();
var _c, _c1;
__turbopack_context__.k.register(_c, "VALIDAS$APPS_MAPA.map");
__turbopack_context__.k.register(_c1, "VALIDAS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoporteCampoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mapaPreferido$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mapaPreferido.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cacheLocal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
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
/**
 * Los tickets del técnico, en formato de campo.
 *
 * ── Por qué no se reutiliza `SoportePage` ──
 *
 * Se evaluó. `SoportePage` es una bandeja con filtros por estado, prioridad,
 * técnico y fecha, pensada para quien reparte el trabajo: necesita comparar y
 * decidir a quién le toca qué.
 *
 * El técnico no reparte nada. Ya sabe cuáles son suyos —RLS no le muestra
 * otros— y lo único que decide es a cuál va primero. Los filtros no le sirven y
 * le ocupan la mitad de una pantalla que ya es chica.
 *
 * La ficha del ticket sí se reutiliza: es la misma pantalla y ahí sí hace
 * exactamente lo mismo que cualquiera.
 */ /**
 * Los tres grupos, y por qué no son los tres nombres obvios.
 *
 * Lo natural sería "Asignados / Sin resolver / Resueltos". No funciona: "sin
 * resolver" INCLUYE a los asignados —también a los que van en camino y a los
 * que se están trabajando— así que un ticket recién asignado aparecería en dos
 * pestañas a la vez. Eso es la misma mezcla que se venía a arreglar, con más
 * pasos.
 *
 * Los tres grupos de acá no se pisan, y el corte es el que el técnico hace en
 * la cabeza: lo que todavía no arrancó, lo que tiene entre manos, y lo que ya
 * terminó.
 */ const GRUPOS = [
    {
        clave: 'asignados',
        label: 'Asignados',
        ayuda: 'Te los asignaron y todavía no saliste.',
        estados: [
            'asignado'
        ],
        tono: 'text-sky-300'
    },
    {
        clave: 'curso',
        label: 'En curso',
        ayuda: 'Ya saliste o estás trabajando en el lugar.',
        estados: [
            'en_ruta',
            'en_proceso'
        ],
        tono: 'text-amber-300'
    },
    {
        clave: 'cerrados',
        label: 'Cerrados',
        ayuda: 'Resueltos y cancelados.',
        estados: [
            'resuelto',
            'cancelado'
        ],
        tono: 'text-emerald-300'
    }
];
function SoporteCampoPage() {
    var _GRUPOS_find;
    _s();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [tickets, setTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deCache, setDeCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SoporteCampoPage.useCallback[recargar]": async ()=>{
            // Sin filtro por técnico: RLS ya devuelve solo los suyos. Ver el comentario
            // de OrdenesPage — la seguridad no vive en la pantalla.
            try {
                var _perfil_id;
                const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conCache"])("tickets:".concat((_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : 'anonimo'), {
                    "SoporteCampoPage.useCallback[recargar]": async ()=>{
                        const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tickets').select('*').order('created_at', {
                            ascending: false
                        }).limit(60);
                        // El error se propaga. La primera versión lo descartaba y ordenaba por
                        // una columna inexistente: la consulta fallaba entera y la pantalla
                        // decía "no tenés tickets asignados" con el ticket ahí, asignado. Un
                        // error que se ve como un hecho es peor que un error.
                        if (err) throw err;
                        return data !== null && data !== void 0 ? data : [];
                    }
                }["SoporteCampoPage.useCallback[recargar]"]);
                setTickets(r.datos);
                setDeCache(r.deCache ? r.minutos : null);
                setError(null);
            } catch (err) {
                setError(err);
            } finally{
                setCargando(false);
            }
        }
    }["SoporteCampoPage.useCallback[recargar]"], [
        perfil === null || perfil === void 0 ? void 0 : perfil.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoporteCampoPage.useEffect": ()=>{
            recargar();
        }
    }["SoporteCampoPage.useEffect"], [
        recargar
    ]);
    const porGrupo = Object.fromEntries(GRUPOS.map((g)=>[
            g.clave,
            tickets.filter((t)=>g.estados.includes(t.estado))
        ]));
    var _ref;
    /**
   * Qué pestaña abre.
   *
   * La primera que tenga algo, en orden de urgencia: lo que está en curso
   * primero —si el técnico dejó un trabajo a medias, eso es lo que busca—,
   * después lo asignado, y recién al final los cerrados.
   *
   * Abrir siempre en "Asignados" sería más previsible, y le mostraría una lista
   * vacía justo al que está en medio de una reparación.
   *
   * Se calcula, no se guarda en estado, hasta que el técnico elige: así la
   * pestaña sigue al trabajo mientras él no opine, y deja de moverse en cuanto
   * opina.
   */ const activa = (_ref = tab !== null && tab !== void 0 ? tab : (_GRUPOS_find = GRUPOS.find((g)=>{
        var _porGrupo_g_clave;
        return (_porGrupo_g_clave = porGrupo[g.clave]) === null || _porGrupo_g_clave === void 0 ? void 0 : _porGrupo_g_clave.length;
    })) === null || _GRUPOS_find === void 0 ? void 0 : _GRUPOS_find.clave) !== null && _ref !== void 0 ? _ref : 'asignados';
    const grupo = GRUPOS.find((g)=>g.clave === activa);
    var _porGrupo_activa;
    const lista = (_porGrupo_activa = porGrupo[activa]) !== null && _porGrupo_activa !== void 0 ? _porGrupo_activa : [];
    if (cargando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                0,
                1,
                2
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-20 animate-pulse rounded-xl bg-[#F6F8FB]"
                }, i, false, {
                    fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[14px] text-rose-200",
                    children: "No se pudieron cargar los tickets."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 font-mono text-[11px] text-rose-300/70",
                    children: error.message
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
            lineNumber: 138,
            columnNumber: 7
        }, this);
    }
    if (!tickets.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                    size: 28,
                    className: "mx-auto mb-2 text-slate-700"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400",
                    children: "No tienes tickets asignados."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
            lineNumber: 147,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            deCache != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-[12px] text-amber-300",
                children: [
                    "Sin conexión. Estás viendo lo guardado hace",
                    ' ',
                    deCache < 60 ? "".concat(deCache, " min") : "".concat(Math.floor(deCache / 60), " h"),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1.5",
                children: GRUPOS.map((g)=>{
                    var _porGrupo_g_clave;
                    var _porGrupo_g_clave_length;
                    const n = (_porGrupo_g_clave_length = (_porGrupo_g_clave = porGrupo[g.clave]) === null || _porGrupo_g_clave === void 0 ? void 0 : _porGrupo_g_clave.length) !== null && _porGrupo_g_clave_length !== void 0 ? _porGrupo_g_clave_length : 0;
                    const sel = g.clave === activa;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setTab(g.clave),
                        className: "flex-1 rounded-xl border px-2 py-2.5 text-center transition ".concat(sel ? 'border-slate-600 bg-slate-800' : 'border-slate-800 bg-[#F6F8FB] active:bg-slate-800/60'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-lg font-semibold tabular-nums ".concat(n === 0 ? 'text-slate-600' : sel ? g.tono : 'text-slate-300'),
                                children: n
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-[11px] ".concat(sel ? 'text-slate-200' : 'text-slate-500'),
                                children: g.label
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this)
                        ]
                    }, g.clave, true, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-1 text-[11px] text-slate-500",
                children: grupo === null || grupo === void 0 ? void 0 : grupo.ayuda
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            lista.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                        size: 24,
                        className: "mx-auto mb-2 text-slate-700"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] text-slate-500",
                        children: activa === 'asignados' ? 'No tienes trabajos esperando.' : activa === 'curso' ? 'No tienes nada empezado.' : 'Todavía no cerraste ninguno.'
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                lineNumber: 203,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 md:grid-cols-2",
                children: lista.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tarjeta, {
                        t: t
                    }, t.id, false, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                lineNumber: 214,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(SoporteCampoPage, "cBZdQ7FFXG7bmcV1lhtWXrD4vgQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = SoporteCampoPage;
function Tarjeta(param) {
    let { t } = param;
    const cerrado = [
        'resuelto',
        'cancelado'
    ].includes(t.estado);
    var _PRIORIDADES_t_prioridad;
    const p = (_PRIORIDADES_t_prioridad = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORIDADES"][t.prioridad]) !== null && _PRIORIDADES_t_prioridad !== void 0 ? _PRIORIDADES_t_prioridad : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORIDADES"].media;
    const est = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][t.estado];
    var _t_nombre, _enlaceMapa;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "t-card p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-[14px] font-medium ".concat(cerrado ? 'text-slate-500' : 'text-slate-100'),
                                children: (_t_nombre = t.nombre) !== null && _t_nombre !== void 0 ? _t_nombre : 'Sin nombre'
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[12px] text-slate-400",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["etiquetaIncidencia"])(t.tipo_incidencia)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-600",
                                children: [
                                    "#",
                                    t.numero,
                                    est ? " · ".concat(est.label) : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    !cerrado && t.prioridad && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 rounded-full border px-2 py-0.5 text-[10px] ".concat(p.clase),
                        children: p.label
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            t.direccion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 flex items-start gap-1 text-[12px] text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        size: 12,
                        className: "mt-0.5 shrink-0 text-slate-600"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "line-clamp-2",
                        children: t.direccion
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                lineNumber: 253,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (_enlaceMapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mapaPreferido$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapaPreferido"])())) !== null && _enlaceMapa !== void 0 ? _enlaceMapa : undefined,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-700 py-2 text-[12px] text-slate-300 active:bg-slate-800 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mapaPreferido$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapaPreferido"])()) ? '' : 'pointer-events-none opacity-30'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            " Llegar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/campo/soporte/".concat(t.id),
                        className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-sky-600 py-2 text-[12px] font-medium text-white active:bg-sky-700",
                        children: [
                            "Abrir ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                                lineNumber: 274,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c1 = Tarjeta;
var _c, _c1;
__turbopack_context__.k.register(_c, "SoporteCampoPage");
__turbopack_context__.k.register(_c1, "Tarjeta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/campo/soporte/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$tecnico$2f$SoporteCampoPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/tecnico/SoporteCampoPage.jsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$tecnico$2f$SoporteCampoPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/campo/soporte/page.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowRight", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>MapPin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Navigation", [
    [
        "polygon",
        {
            points: "3 11 22 2 13 21 11 13 3 11",
            key: "1ltx0t"
        }
    ]
]);
;
 //# sourceMappingURL=navigation.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Ticket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Ticket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Ticket", [
    [
        "path",
        {
            d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
            key: "qn84l0"
        }
    ],
    [
        "path",
        {
            d: "M13 5v2",
            key: "dyzc3o"
        }
    ],
    [
        "path",
        {
            d: "M13 17v2",
            key: "1ont0d"
        }
    ],
    [
        "path",
        {
            d: "M13 11v2",
            key: "1wjjxi"
        }
    ]
]);
;
 //# sourceMappingURL=ticket.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ticket",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_50a6b4fd._.js.map