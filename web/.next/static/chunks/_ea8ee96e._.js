(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/crm-pages/tecnico/RedPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
/**
 * El estado de la red, completo — y de solo lectura.
 *
 * ── Qué NO tiene esta pantalla, y es lo importante ──
 *
 * Ni un botón que toque un equipo. No hay reiniciar, no hay sondear, no hay
 * configurar. Y no es que estén escondidos: los datos vienen de `v_estado_red`,
 * que no trae la IP ni el router ni la comunidad SNMP, y el middleware rechaza
 * cualquier acción de red sin el permiso correspondiente.
 *
 * Ocultar el botón habría sido lo fácil. Cualquiera que abra la consola del
 * navegador encuentra en un minuto lo que la pantalla no muestra; lo que no
 * puede encontrar es lo que el servidor no le manda.
 *
 * ── Para qué le sirve al técnico ──
 *
 * Para una sola pregunta, y vale la pantalla entera: ¿el problema de este
 * cliente es del domicilio o es de la zona? Si la torre está caída, no hay nada
 * que revisar en la casa.
 */ const FILTROS = [
    {
        clave: 'todos',
        label: 'Todos',
        tipos: null
    },
    {
        clave: 'torres',
        label: 'Torres',
        tipos: [
            'rb_torre',
            'ptmp'
        ]
    },
    {
        clave: 'olt',
        label: 'OLT',
        tipos: [
            'olt'
        ]
    },
    {
        clave: 'enlaces',
        label: 'Enlaces',
        tipos: [
            'ptp'
        ]
    },
    {
        clave: 'otros',
        label: 'Otros',
        tipos: [
            'switch',
            'energia',
            'otro'
        ]
    }
];
const TONO = {
    up: {
        punto: 'bg-emerald-500',
        texto: 'text-emerald-400',
        label: 'Operativo'
    },
    warning: {
        punto: 'bg-amber-500',
        texto: 'text-amber-400',
        label: 'Degradado'
    },
    down: {
        punto: 'bg-rose-500',
        texto: 'text-rose-400',
        label: 'Sin conexión'
    },
    desconocido: {
        punto: 'bg-slate-600',
        texto: 'text-slate-500',
        label: 'Sin datos'
    }
};
function RedPage() {
    _s();
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [nodos, setNodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [novedades, setNovedades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filtro, setFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('todos');
    // El nodo abierto viaja en la URL: así el enlace del dashboard —"ver esta
    // incidencia"— abre directamente en ella, y el botón de atrás del teléfono
    // vuelve a la lista en vez de salir de la pantalla.
    const abierto = params.get('nodo');
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RedPage.useCallback[recargar]": async ()=>{
            const [r, n] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_estado_red').select('*').order('estado').order('nombre'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_novedades_red').select('*').order('momento', {
                    ascending: false
                }).limit(30)
            ]);
            var _r_error;
            setError((_r_error = r.error) !== null && _r_error !== void 0 ? _r_error : null);
            var _r_data;
            setNodos((_r_data = r.data) !== null && _r_data !== void 0 ? _r_data : []);
            var _n_data;
            setNovedades((_n_data = n.data) !== null && _n_data !== void 0 ? _n_data : []);
            setCargando(false);
        }
    }["RedPage.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RedPage.useEffect": ()=>{
            recargar();
            const t = setInterval(recargar, 120000);
            return ({
                "RedPage.useEffect": ()=>clearInterval(t)
            })["RedPage.useEffect"];
        }
    }["RedPage.useEffect"], [
        recargar
    ]);
    const visibles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RedPage.useMemo[visibles]": ()=>{
            const f = FILTROS.find({
                "RedPage.useMemo[visibles].f": (x)=>x.clave === filtro
            }["RedPage.useMemo[visibles].f"]);
            const lista = (f === null || f === void 0 ? void 0 : f.tipos) ? nodos.filter({
                "RedPage.useMemo[visibles]": (n)=>f.tipos.includes(n.tipo)
            }["RedPage.useMemo[visibles]"]) : nodos;
            // Lo que anda mal, arriba. Es el orden en que se mira esta pantalla.
            const peso = {
                down: 0,
                warning: 1,
                desconocido: 2,
                up: 3
            };
            return [
                ...lista
            ].sort({
                "RedPage.useMemo[visibles]": (a, b)=>peso[a.estado] - peso[b.estado] || a.nombre.localeCompare(b.nombre)
            }["RedPage.useMemo[visibles]"]);
        }
    }["RedPage.useMemo[visibles]"], [
        nodos,
        filtro
    ]);
    const nodo = nodos.find((n)=>n.id === abierto);
    if (cargando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                0,
                1,
                2,
                3
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 animate-pulse rounded-xl bg-[#F6F8FB]"
                }, i, false, {
                    fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
            lineNumber: 84,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[14px] text-rose-200",
                    children: "No se pudo leer el estado de la red."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 font-mono text-[11px] text-rose-300/70",
                    children: error.message
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    if (!nodos.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                    size: 28,
                    className: "mx-auto mb-2 text-slate-700"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400",
                    children: "No hay equipos monitoreados."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-[12px] text-slate-600",
                    children: "Cuando la oficina cargue los nodos de red, aparecen acá."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
            lineNumber: 103,
            columnNumber: 7
        }, this);
    }
    /* ── El detalle de un equipo ── */ if (nodo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detalle, {
            nodo: nodo,
            novedades: novedades,
            onVolver: ()=>setParams({})
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
            lineNumber: 115,
            columnNumber: 12
        }, this);
    }
    const up = nodos.filter((n)=>n.estado === 'up').length;
    const warn = nodos.filter((n)=>n.estado === 'warning').length;
    const down = nodos.filter((n)=>n.estado === 'down').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cifra, {
                        n: up,
                        label: "en línea",
                        color: "text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cifra, {
                        n: warn,
                        label: "en alerta",
                        color: "text-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cifra, {
                        n: down,
                        label: "caídos",
                        color: "text-rose-400"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "-mx-3 flex gap-1.5 overflow-x-auto px-3 pb-1",
                children: FILTROS.map((f)=>{
                    const n = f.tipos ? nodos.filter((x)=>f.tipos.includes(x.tipo)).length : nodos.length;
                    if (n === 0 && f.tipos) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setFiltro(f.clave),
                        className: "shrink-0 rounded-full border px-3 py-1.5 text-[12px] ".concat(filtro === f.clave ? 'border-slate-500 bg-slate-800 text-slate-100' : 'border-slate-800 text-slate-400'),
                        children: [
                            f.label,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: n
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 147,
                                columnNumber: 25
                            }, this)
                        ]
                    }, f.clave, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 md:grid-cols-2",
                children: visibles.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fila, {
                        n: n,
                        onAbrir: ()=>setParams({
                                nodo: n.id
                            })
                    }, n.id, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(RedPage, "N6CUi9+7jluX4HX6oN57wxNUIe4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = RedPage;
/* ────────────────────────────────────────────────────────────────────────── */ const Cifra = (param)=>{
    let { n, label, color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "t-card py-3 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl font-semibold tabular-nums ".concat(color),
                children: n
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 166,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-wide text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 167,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
        lineNumber: 165,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Cifra;
function Fila(param) {
    let { n, onAbrir } = param;
    var _TONO_n_estado;
    const t = (_TONO_n_estado = TONO[n.estado]) !== null && _TONO_n_estado !== void 0 ? _TONO_n_estado : TONO.desconocido;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onAbrir,
        className: "w-full t-card p-3 text-left active:bg-slate-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2.5 w-2.5 shrink-0 rounded-full ".concat(t.punto)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0 flex-1 truncate text-[14px] font-medium text-slate-100",
                        children: n.nombre
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 text-[11px] ".concat(t.texto),
                        children: t.label
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 flex flex-wrap gap-x-3 pl-4.5 text-[11px] text-slate-500",
                children: [
                    n.estado === 'up' && n.latencia_ms != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Ping ",
                            n.latencia_ms,
                            " ms"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 187,
                        columnNumber: 56
                    }, this),
                    n.estado !== 'up' && n.minutos_asi != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Hace ",
                            duracion(n.minutos_asi)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 188,
                        columnNumber: 56
                    }, this),
                    n.perdida_pct > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Pérdida ",
                            n.perdida_pct,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 189,
                        columnNumber: 31
                    }, this),
                    n.clientes_afectados > 0 && n.estado !== 'up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-300",
                        children: [
                            n.clientes_afectados,
                            " clientes"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this),
                    n.por_el_padre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "por ",
                            n.depende_de
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 193,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_c2 = Fila;
function Detalle(param) {
    let { nodo, novedades, onVolver } = param;
    var _TONO_nodo_estado;
    const t = (_TONO_nodo_estado = TONO[nodo.estado]) !== null && _TONO_nodo_estado !== void 0 ? _TONO_nodo_estado : TONO.desconocido;
    const suyas = novedades.filter((e)=>e.nodo_id === nodo.id);
    var _TIPO_nodo_tipo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onVolver,
                className: "flex items-center gap-1.5 text-[13px] text-slate-400 active:text-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    " Estado de la red"
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "t-card p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            nodo.estado === 'up' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                size: 20,
                                className: t.texto
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                size: 20,
                                className: t.texto
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[17px] font-semibold text-slate-100",
                                        children: nodo.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] ".concat(t.texto),
                                        children: t.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-1.5 text-[13px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: "Tipo",
                                valor: (_TIPO_nodo_tipo = TIPO[nodo.tipo]) !== null && _TIPO_nodo_tipo !== void 0 ? _TIPO_nodo_tipo : nodo.tipo
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            nodo.punto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: "Ubicación",
                                valor: nodo.punto,
                                icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 228,
                                columnNumber: 26
                            }, this),
                            nodo.estado !== 'up' && nodo.minutos_asi != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: "Así desde hace",
                                valor: duracion(nodo.minutos_asi)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            nodo.desde && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: nodo.estado === 'up' ? 'Operativo desde' : 'Última respuesta',
                                valor: new Date(nodo.desde).toLocaleString('es-EC', {
                                    day: '2-digit',
                                    month: 'short',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            nodo.latencia_ms != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: "Ping",
                                valor: "".concat(nodo.latencia_ms, " ms")
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 243,
                                columnNumber: 40
                            }, this),
                            nodo.perdida_pct != null && nodo.perdida_pct > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: "Pérdida de paquetes",
                                valor: "".concat(nodo.perdida_pct, " %")
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            nodo.clientes_afectados > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: "Clientes que dependen",
                                valor: String(nodo.clientes_afectados),
                                icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            nodo.hijos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: "Equipos que cuelgan",
                                valor: String(nodo.hijos)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 254,
                                columnNumber: 30
                            }, this),
                            nodo.depende_de && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                label: "Depende de",
                                valor: nodo.depende_de
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 255,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    nodo.por_el_padre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-[12px] text-amber-200",
                        children: [
                            "Este equipo está caído porque ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: nodo.depende_de
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 262,
                                columnNumber: 43
                            }, this),
                            " no responde. Arreglar esto empieza por ahí."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 border-t border-slate-800 pt-2 text-[11px] text-slate-600",
                        children: "Solo consulta. Para operar este equipo, avisá a la oficina."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            suyas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "t-card p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 flex items-center gap-1.5 px-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            " Historial reciente"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: suyas.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 text-[12px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 tabular-nums text-slate-500",
                                        children: new Date(e.momento).toLocaleString('es-EC', {
                                            day: '2-digit',
                                            month: 'short',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-300",
                                        children: [
                                            e.clase === 'caida' ? 'perdió comunicación' : e.clase === 'recuperado' ? 'recuperado' : 'degradado',
                                            e.duracion_min != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500",
                                                children: [
                                                    " · duró ",
                                                    duracion(e.duracion_min)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                                lineNumber: 298,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "".concat(e.id, "-").concat(e.clase, "-").concat(i), true, {
                                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 276,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_c3 = Detalle;
const Dato = (param)=>{
    let { label, valor, icono: Icono } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 t-panel px-3 py-2",
        children: [
            Icono && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                size: 13,
                className: "shrink-0 text-slate-600"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 312,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 313,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-auto text-right text-slate-200",
                children: valor
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
                lineNumber: 314,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/RedPage.jsx",
        lineNumber: 311,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = Dato;
const TIPO = {
    rb_torre: 'Torre',
    ptmp: 'Antena sectorial',
    ptp: 'Radioenlace',
    olt: 'OLT',
    switch: 'Switch',
    energia: 'Energía',
    otro: 'Otro'
};
/** "3h 27m". Sin segundos y sin días sueltos: es lo que se dice en voz alta. */ function duracion(minutos) {
    if (minutos == null) return '—';
    // Un negativo significa que el reloj del servidor y el del evento no
    // coinciden —o que alguien cargó una fecha futura—. "hace -5h" no le dice
    // nada a nadie; "recién" es lo más cercano a la verdad que se puede afirmar.
    if (minutos < 0) return 'recién';
    if (minutos < 60) return "".concat(minutos, "m");
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    if (h < 48) return m ? "".concat(h, "h ").concat(m, "m") : "".concat(h, "h");
    return "".concat(Math.floor(h / 24), "d ").concat(h % 24, "h");
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "RedPage");
__turbopack_context__.k.register(_c1, "Cifra");
__turbopack_context__.k.register(_c2, "Fila");
__turbopack_context__.k.register(_c3, "Detalle");
__turbopack_context__.k.register(_c4, "Dato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/campo/red/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$tecnico$2f$RedPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/tecnico/RedPage.jsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$tecnico$2f$RedPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/campo/red/page.jsx",
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
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
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
"[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Wifi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Wifi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Wifi", [
    [
        "path",
        {
            d: "M12 20h.01",
            key: "zekei9"
        }
    ],
    [
        "path",
        {
            d: "M2 8.82a15 15 0 0 1 20 0",
            key: "dnpr2z"
        }
    ],
    [
        "path",
        {
            d: "M5 12.859a10 10 0 0 1 14 0",
            key: "1x1e6c"
        }
    ],
    [
        "path",
        {
            d: "M8.5 16.429a5 5 0 0 1 7 0",
            key: "1bycff"
        }
    ]
]);
;
 //# sourceMappingURL=wifi.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wifi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_ea8ee96e._.js.map