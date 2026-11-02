(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/pdf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Abrir un PDF que viene del middleware.
 *
 * ── Por qué no alcanza con un enlace ──
 *
 * Porque esas rutas exigen el token de la sesión en la cabecera, y un `<a href>`
 * no lo manda: se abriría una pestaña con un 401. Hay que traerlo como blob y
 * abrirlo desde la memoria del navegador.
 *
 * La URL temporal se libera al minuto. Sin eso, cada acta que alguien mira deja
 * su archivo retenido hasta que cierre la pestaña.
 */ __turbopack_context__.s([
    "abrirPdf",
    ()=>abrirPdf,
    "descargar",
    ()=>descargar,
    "imprimirPdf",
    ()=>imprimirPdf
]);
async function abrirPdf(traer) {
    let nombre = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'documento.pdf';
    const blob = await traer();
    const url = URL.createObjectURL(blob);
    const pestana = window.open(url, '_blank', 'noopener');
    /**
   * Si el navegador bloqueó la pestaña, se baja el archivo.
   *
   * ── Por qué hace falta ──
   *
   * `window.open` después de un `await` cae fuera del gesto del usuario que
   * apretó el botón, y ahí el navegador lo bloquea. Lo peor es que lo bloquea
   * EN SILENCIO: devuelve `null`, no lanza nada. Desde afuera se ve como que el
   * sistema no hizo nada — el contrato se generó, el PDF viajó entero, y en la
   * pantalla no pasó nada.
   *
   * Es el mismo caso que ya estaba resuelto en `imprimirPdf` con un marco
   * escondido, pero acá no sirve: se quiere VER el documento, no imprimirlo.
   *
   * La descarga sí está permitida aunque el emergente esté bloqueado, porque no
   * abre ventana. El archivo termina en Descargas en vez de en una pestaña, que
   * es peor de leer pero infinitamente mejor que nada.
   *
   * No se intenta abrir la pestaña ANTES del `await` —que también funcionaría—
   * porque varios de los cuarenta y pico de llamadores ya vienen de un `await`
   * previo (recargar la orden, pedir el plan) y para cuando llegan acá el gesto
   * ya se perdió igual. Esto los cubre a todos sin tocar ninguno.
   */ if (!pestana) {
        const a = document.createElement('a');
        a.href = url;
        a.download = nombre;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
    setTimeout(()=>URL.revokeObjectURL(url), 60_000);
    // Para que quien llama pueda avisar "se descargó" en vez de "se abrió".
    return {
        abrioPestana: Boolean(pestana)
    };
}
async function descargar(traer, nombre) {
    const blob = await traer();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 60_000);
}
async function imprimirPdf(traer) {
    const blob = await traer();
    const url = URL.createObjectURL(blob);
    const marco = document.createElement('iframe');
    marco.setAttribute('aria-hidden', 'true');
    Object.assign(marco.style, {
        position: 'fixed',
        right: '0',
        bottom: '0',
        width: '0',
        height: '0',
        border: '0',
        visibility: 'hidden'
    });
    const listo = new Promise((resolver)=>{
        marco.onload = ()=>{
            try {
                marco.contentWindow.focus();
                marco.contentWindow.print();
                resolver(true);
            } catch (e) {
                /**
         * Algún navegador no deja imprimir desde un marco con un blob. Ahí se
         * abre en una pestaña: sigue siendo mejor que no mostrar nada, y quien
         * está cobrando imprime con Ctrl+P.
         */ window.open(url, '_blank', 'noopener');
                resolver(false);
            }
        };
        marco.onerror = ()=>resolver(false);
    });
    marco.src = url;
    document.body.appendChild(marco);
    await listo;
    /**
   * La limpieza va tarde a propósito.
   *
   * Quitar el marco mientras el diálogo de impresión sigue abierto cancela la
   * impresión, y el usuario ve el diálogo cerrarse solo sin haber tocado nada.
   */ setTimeout(()=>{
        marco.remove();
        URL.revokeObjectURL(url);
    }, 120_000);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pagos/BuscadorCliente.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLOR_ESTADO",
    ()=>COLOR_ESTADO,
    "default",
    ()=>BuscadorCliente
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
/**
 * Buscador de clientes para cobrar.
 *
 * En el mostrador el abonado dice cualquier cosa: su nombre, la cédula, el
 * número de la factura que trae en la mano o la IP que le anotaron. Por eso se
 * busca por todo a la vez y no con un campo por criterio.
 *
 * Los resultados se piden a Supabase mientras se escribe, con una espera corta:
 * una consulta por tecla satura la conexión y devuelve resultados de una
 * búsqueda vieja después de la nueva.
 */ const COLOR_ESTADO = {
    activo: 'verde',
    cortado: 'rojo',
    suspendido: 'ambar',
    baja: 'gris'
};
/** PostgREST separa los filtros con comas y paréntesis: hay que sacarlos. */ const limpiar = (texto)=>texto.replace(/[,()%*\\]/g, ' ').trim();
function BuscadorCliente(param) {
    let { onElegir, autoFocus = true } = param;
    _s();
    const [modo, setModo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('cliente');
    const [texto, setTexto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [resultados, setResultados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [buscando, setBuscando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Descarta la respuesta de una búsqueda que quedó vieja.
    const ultimaBusqueda = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuscadorCliente.useEffect": ()=>{
            const q = limpiar(texto);
            if (q.length < 2) {
                setResultados([]);
                return;
            }
            const id = ++ultimaBusqueda.current;
            const temporizador = setTimeout({
                "BuscadorCliente.useEffect.temporizador": async ()=>{
                    setBuscando(true);
                    setError(null);
                    try {
                        const filas = modo === 'cliente' ? await buscarClientes(q) : await buscarPorComprobante(q);
                        if (id === ultimaBusqueda.current) setResultados(filas);
                    } catch (err) {
                        if (id === ultimaBusqueda.current) setError(err);
                    } finally{
                        if (id === ultimaBusqueda.current) setBuscando(false);
                    }
                }
            }["BuscadorCliente.useEffect.temporizador"], 300);
            return ({
                "BuscadorCliente.useEffect": ()=>clearTimeout(temporizador)
            })["BuscadorCliente.useEffect"];
        }
    }["BuscadorCliente.useEffect"], [
        texto,
        modo
    ]);
    async function buscarClientes(q) {
        const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('clientes').select('*').or([
            "nombre.ilike.%".concat(q, "%"),
            "identificacion.ilike.%".concat(q, "%"),
            "ip.ilike.%".concat(q, "%"),
            "usuario_ppp.ilike.%".concat(q, "%")
        ].join(',')).order('nombre').limit(8);
        if (err) throw err;
        return data !== null && data !== void 0 ? data : [];
    }
    /** Buscar por el número que trae impreso la factura. */ async function buscarPorComprobante(q) {
        const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_facturas_por_cobrar').select('client_id, numero, importe_total, saldo, razon_social_comprador').ilike('numero', "%".concat(q, "%")).limit(8);
        if (err) throw err;
        if (!(data === null || data === void 0 ? void 0 : data.length)) return [];
        const ids = [
            ...new Set(data.map((f)=>f.client_id).filter(Boolean))
        ];
        if (!ids.length) return [];
        const { data: clientes, error: err2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('clientes').select('*').in('id', ids);
        if (err2) throw err2;
        return clientes !== null && clientes !== void 0 ? clientes : [];
    }
    function elegir(cliente) {
        setTexto('');
        setResultados([]);
        onElegir(cliente);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-5 text-sm",
                children: [
                    [
                        'cliente',
                        'Buscar cliente'
                    ],
                    [
                        'comprobante',
                        'Buscar N° comprobante'
                    ]
                ].map((param)=>{
                    let [valor, label] = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex cursor-pointer items-center gap-2 text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                checked: modo === valor,
                                onChange: ()=>{
                                    setModo(valor);
                                    setResultados([]);
                                },
                                className: "accent-sky-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            label
                        ]
                    }, valor, true, {
                        fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 16,
                        className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        value: texto,
                        onChange: (e)=>setTexto(e.target.value),
                        autoFocus: autoFocus,
                        className: "pl-9",
                        placeholder: modo === 'cliente' ? 'Nombre, cédula/RUC, IP o usuario PPPoE' : 'Número de comprobante, por ejemplo 001-001-000000008'
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    texto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setTexto(''),
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    (resultados.length > 0 || buscando || error || limpiar(texto).length >= 2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-20 mt-1 max-h-80 w-full overflow-y-auto t-card-sm shadow-xl",
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "px-3 py-2 text-xs text-red-300",
                                children: error.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                lineNumber: 167,
                                columnNumber: 23
                            }, this),
                            !error && buscando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "px-3 py-2 text-xs text-slate-500",
                                children: "Buscando…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                lineNumber: 169,
                                columnNumber: 36
                            }, this),
                            !error && !buscando && resultados.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "px-3 py-2 text-xs text-slate-500",
                                children: [
                                    "Nadie coincide con “",
                                    texto,
                                    "”."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this),
                            !error && !buscando && resultados.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-b border-[rgba(15,23,42,0.06)] px-3 py-1.5 text-[11px] text-slate-500",
                                children: [
                                    resultados.length,
                                    " coincidencias"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this),
                            resultados.map((c)=>{
                                var _c_referencia_servicio, _c_direccion, _c_identificacion, _COLOR_ESTADO_c_estado;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>elegir(c),
                                    className: "flex w-full items-start justify-between gap-3 px-3 py-2 text-left hover:bg-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-sm leading-snug text-slate-100",
                                                    children: c.nombre
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this),
                                                (c.referencia_servicio || c.direccion) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[11px] leading-snug text-sky-400",
                                                    children: [
                                                        (_c_referencia_servicio = c.referencia_servicio) !== null && _c_referencia_servicio !== void 0 ? _c_referencia_servicio : '',
                                                        c.referencia_servicio && c.direccion ? ' · ' : '',
                                                        (_c_direccion = c.direccion) !== null && _c_direccion !== void 0 ? _c_direccion : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[11px] leading-snug text-slate-500",
                                                    children: [
                                                        (_c_identificacion = c.identificacion) !== null && _c_identificacion !== void 0 ? _c_identificacion : 'sin identificación',
                                                        c.ip ? " · ".concat(c.ip) : '',
                                                        c.usuario_ppp ? " · ".concat(c.usuario_ppp) : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: (_COLOR_ESTADO_c_estado = COLOR_ESTADO[c.estado]) !== null && _COLOR_ESTADO_c_estado !== void 0 ? _COLOR_ESTADO_c_estado : 'gris',
                                            children: c.estado
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pagos/BuscadorCliente.jsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(BuscadorCliente, "etGsb0/aataHH7eSiVs6y9CEqHg=");
_c = BuscadorCliente;
;
var _c;
__turbopack_context__.k.register(_c, "BuscadorCliente");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pagos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorTransaccionRepetida",
    ()=>errorTransaccionRepetida
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
;
;
;
async function errorTransaccionRepetida(numero) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_pagos').select('numero, cliente, monto, fecha_pago, forma_pago').eq('n_transaccion', numero).eq('anulado', false).maybeSingle();
    if (!data) {
        return new Error("El N° de transacción ".concat(numero, " ya está registrado en otro cobro."));
    }
    const fecha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])("".concat(String(data.fecha_pago).slice(0, 10), "T12:00:00"));
    return new Error("El N° ".concat(numero, " ya está registrado: recibo N° ").concat(String(data.numero).padStart(6, '0'), " ") + "de ".concat(data.cliente, " por ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(data.monto), " (").concat(data.forma_pago, ", ").concat(fecha, "). ") + 'Una transferencia o un recibo se registran una sola vez.');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pagos/FormPago.jsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FORMAS_PAGO",
    ()=>FORMAS_PAGO,
    "cuentasPara",
    ()=>cuentasPara,
    "default",
    ()=>FormPago,
    "exigeCuenta",
    ()=>exigeCuenta,
    "fechaSugerida",
    ()=>fechaSugerida,
    "formasPara",
    ()=>formasPara
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pagos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pagos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
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
 * Registro de un cobro.
 *
 * Dos decisiones que explican la forma de este formulario:
 *
 * 1. Una factura no se marca como "pagada": el saldo se calcula sumando los
 *    pagos aplicados. Así un cobro parcial —lo normal cuando el abonado trae
 *    la mitad— deja el resto pendiente sin ningún estado intermedio que
 *    mantener a mano.
 * 2. El monto viene sugerido pero se puede editar. Obligar a pagar el total
 *    exacto haría que el cobrador registre mal el pago para poder cerrarlo.
 */ /**
 * Cómo pagó, y a qué clase de cuenta puede entrar esa plata.
 *
 * ── El error que esto corrige ──
 *
 * El selector ofrecía TODAS las cuentas sin mirar la forma de pago, así que al
 * cobrar en efectivo se elegía entre cuentas del banco. Esa plata no está en
 * ningún banco: está en la caja de la oficina, en la mano de quien cobró.
 *
 * No es un detalle cosmético. Un cobro en efectivo imputado a la cuenta del
 * Pichincha aparece después en la conciliación como "sin respaldo" —el banco no
 * lo tiene, obviamente— y manda a llamar a un abonado que pagó en ventanilla.
 *
 * `electronico` es lo que decide si la cuenta es obligatoria: el efectivo entra a
 * caja y el resto deja rastro en algún lado.
 */ const FORMAS_PAGO = [
    {
        valor: 'efectivo',
        label: 'Efectivo',
        tipos: [
            'efectivo'
        ],
        electronico: false
    },
    {
        valor: 'transferencia',
        label: 'Transferencia',
        tipos: [
            'banco'
        ],
        electronico: true
    },
    {
        valor: 'deposito',
        label: 'Depósito',
        tipos: [
            'banco'
        ],
        electronico: true
    },
    {
        valor: 'tarjeta',
        label: 'Tarjeta',
        tipos: [
            'banco'
        ],
        electronico: true
    },
    // La billetera digital (Deuna, PayPhone...) se acredita en cualquier cuenta.
    {
        valor: 'billetera',
        label: 'Billetera digital',
        tipos: null,
        electronico: true
    },
    // Cobros por convenio, cobros por convenio, lo que aparezca. Se ofrecen todas porque no
    // se sabe cuál corresponde, pero la cuenta se sigue pidiendo.
    {
        valor: 'otro',
        label: 'Otro',
        tipos: null,
        electronico: true
    }
];
function formasPara(puede) {
    return puede('pagos.otras_formas') ? FORMAS_PAGO : FORMAS_PAGO.filter((f)=>!f.electronico);
}
function cuentasPara() {
    let cuentas = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], formaPago = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'efectivo';
    const forma = FORMAS_PAGO.find((f)=>f.valor === formaPago);
    if (!(forma === null || forma === void 0 ? void 0 : forma.tipos)) return cuentas;
    return cuentas.filter((c)=>forma.tipos.includes(c.tipo));
}
function exigeCuenta() {
    let formaPago = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'efectivo';
    var _FORMAS_PAGO_find;
    var _FORMAS_PAGO_find_electronico;
    return (_FORMAS_PAGO_find_electronico = (_FORMAS_PAGO_find = FORMAS_PAGO.find((f)=>f.valor === formaPago)) === null || _FORMAS_PAGO_find === void 0 ? void 0 : _FORMAS_PAGO_find.electronico) !== null && _FORMAS_PAGO_find_electronico !== void 0 ? _FORMAS_PAGO_find_electronico : true;
}
/**
 * De dónde sale el número según cómo pagó.
 *
 * Todo cobro tiene un número único: el del comprobante del banco cuando pasó
 * por ahí, y el del recibo manual cuando fue en efectivo. Es lo que permite
 * detectar que la misma transferencia —o el mismo recibo— se cargó dos veces.
 */ const ORIGEN_NUMERO = {
    efectivo: 'Si usaste recibera, anota su número. Si imprimes el recibo, déjalo vacío.',
    transferencia: 'El N° del comprobante del banco',
    deposito: 'El N° del comprobante del depósito',
    tarjeta: 'El N° del voucher',
    billetera: 'El N° de la transacción en la billetera',
    otro: 'El número con el que identificas este cobro'
};
const hoy = ()=>new Date().toISOString().slice(0, 10);
/** Fecha a N días de hoy, en YYYY-MM-DD local. */ function enDias(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    const p = (x)=>String(x).padStart(2, '0');
    return "".concat(d.getFullYear(), "-").concat(p(d.getMonth() + 1), "-").concat(p(d.getDate()));
}
/** Días de gracia que se dan por sobre la fecha máxima de pago. */ const DIAS_DE_GRACIA = 5;
function fechaSugerida() {
    let diaMaximo = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 5, hoyIso = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    const p = (x)=>String(x).padStart(2, '0');
    const iso = (d)=>"".concat(d.getFullYear(), "-").concat(p(d.getMonth() + 1), "-").concat(p(d.getDate()));
    const ahora = hoyIso ? new Date("".concat(hoyIso, "T12:00:00")) : new Date();
    const dia = Math.min(Math.max(1, Number(diaMaximo) || 5), 28);
    const hoyMediodia = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), 12);
    const conGracia = new Date(ahora.getFullYear(), ahora.getMonth(), dia, 12);
    conGracia.setDate(conGracia.getDate() + DIAS_DE_GRACIA);
    if (conGracia >= hoyMediodia) return iso(conGracia);
    const desdeHoy = new Date(hoyMediodia);
    desdeHoy.setDate(desdeHoy.getDate() + DIAS_DE_GRACIA);
    return iso(desdeHoy);
}
/** Cuántos días faltan para una fecha. */ function diasHasta(iso) {
    if (!iso) return null;
    const hoyD = new Date("".concat(enDias(0), "T12:00:00"));
    const objetivo = new Date("".concat(iso, "T12:00:00"));
    return Math.round((objetivo - hoyD) / 86400000);
}
function FormPago(param) {
    let { cliente, onRegistrado, onCancelar, onError } = param;
    _s();
    const { puede } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    /**
   * Las formas que puede usar, resueltas una vez.
   *
   * Si le queda una sola, el formulario arranca con esa: dejar seleccionado
   * "efectivo" cuando es lo único posible evita un estado inicial que la pantalla
   * ya no ofrece.
   */ const formasPosibles = formasPara(puede);
    const [facturas, setFacturas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cuentas, setCuentas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [promesa, setPromesa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [repetida, setRepetida] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var _cliente_dia_facturacion;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        document_id: '',
        monto: '',
        comision: '0',
        forma_pago: 'efectivo',
        cuenta_id: '',
        n_transaccion: '',
        fecha_pago: hoy(),
        tipo: 'registrar',
        dia_pago: (_cliente_dia_facturacion = cliente.dia_facturacion) !== null && _cliente_dia_facturacion !== void 0 ? _cliente_dia_facturacion : '',
        notas: '',
        // Hasta cuándo se le habilita el servicio cuando en vez de pagar promete.
        // Se recalcula al cargar, con el día máximo de pago configurado.
        fecha_limite: fechaSugerida(),
        // Se le emite factura electrónica por este cobro. Arranca con lo que dice
        // la ficha del cliente, pero se decide cobro por cobro: el mismo abonado
        // puede pedir factura un mes y no pedirla al siguiente.
        facturar: cliente.factura_electronica !== false,
        // Cuando el cobro es parcial, el resto puede quedar prometido.
        promesa_saldo: false,
        fecha_saldo: fechaSugerida()
    });
    /** Día del mes hasta el que se puede pagar, de la configuración del emisor. */ const [diaMaximo, setDiaMaximo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const esPromesa = form.tipo === 'promesa';
    const diasFaltantes = diasHasta(form.fecha_limite);
    const set = (campo)=>(e)=>{
            const valor = e.target.value;
            /**
     * Cambiar la forma de pago cambia a qué cuentas puede entrar.
     *
     * Sin esto, quien elige "Efectivo" después de haber tenido "Transferencia"
     * se queda con la cuenta del banco seleccionada —ya no aparece en la lista,
     * pero sigue guardada— y el cobro en efectivo termina imputado al Pichincha.
     * Un valor que el usuario ya no puede ver es un valor que nadie corrige.
     */ if (campo === 'forma_pago') {
                setForm((f)=>{
                    const posibles = cuentasPara(cuentas, valor);
                    const sigueValiendo = posibles.some((c)=>c.id === f.cuenta_id);
                    return {
                        ...f,
                        forma_pago: valor,
                        // Si hay una sola, se elige sola: es el caso del efectivo, que casi
                        // siempre tiene una única caja.
                        cuenta_id: sigueValiendo ? f.cuenta_id : posibles.length === 1 ? posibles[0].id : ''
                    };
                });
                return;
            }
            setForm((f)=>({
                    ...f,
                    [campo]: valor
                }));
        };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormPago.useEffect": ()=>{
            let vigente = true;
            async function cargar() {
                setCargando(true);
                try {
                    var _cfg_data, _f_data;
                    const [f, c, p, cfg] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_facturas_por_cobrar').select('*').eq('client_id', cliente.id).order('fecha_emision'),
                        /**
           * Las cuentas que ESTE usuario puede usar, no todas.
           *
           * Cada cobrador tiene su caja: la vista devuelve las suyas —o las de la
           * oficina si no tiene ninguna— más todas las cuentas bancarias, que no
           * son de nadie en particular. Ofrecer la caja de otro hace que su arqueo
           * cierre mal y el propio bien, y nadie entiende por qué.
           */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_mis_cuentas_de_cobro').select('*').order('nombre'),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('promesas_pago').select('*').eq('client_id', cliente.id).eq('estado', 'activa').maybeSingle(),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('sri_config').select('dia_maximo_pago').limit(1).maybeSingle()
                    ]);
                    if (!vigente) return;
                    if (f.error) throw f.error;
                    if (c.error) throw c.error;
                    var _f_data1;
                    setFacturas((_f_data1 = f.data) !== null && _f_data1 !== void 0 ? _f_data1 : []);
                    var _c_data;
                    setCuentas((_c_data = c.data) !== null && _c_data !== void 0 ? _c_data : []);
                    var _p_data;
                    setPromesa((_p_data = p.data) !== null && _p_data !== void 0 ? _p_data : null);
                    var _cfg_data_dia_maximo_pago;
                    const dia = (_cfg_data_dia_maximo_pago = (_cfg_data = cfg.data) === null || _cfg_data === void 0 ? void 0 : _cfg_data.dia_maximo_pago) !== null && _cfg_data_dia_maximo_pago !== void 0 ? _cfg_data_dia_maximo_pago : 5;
                    setDiaMaximo(dia);
                    // La factura más vieja es la que se cobra primero, y su saldo es el
                    // monto que casi siempre corresponde.
                    const primera = (_f_data = f.data) === null || _f_data === void 0 ? void 0 : _f_data[0];
                    setForm({
                        "FormPago.useEffect.cargar": (prev)=>{
                            var _cuentasPara_;
                            var _primera_id, _c_data, _cuentasPara__id, _cliente_dia_facturacion;
                            return {
                                ...prev,
                                document_id: (_primera_id = primera === null || primera === void 0 ? void 0 : primera.id) !== null && _primera_id !== void 0 ? _primera_id : '',
                                monto: primera ? Number(primera.saldo).toFixed(2) : '',
                                /**
           * La cuenta que se propone tiene que servir para la forma de pago con
           * la que abre el formulario —efectivo—, no ser la primera de la lista.
           *
           * La primera alfabéticamente puede ser una cuenta del banco, y el
           * cajero que no toca ese campo termina imputando el efectivo al
           * Pichincha sin haber elegido nada.
           */ cuenta_id: (_cuentasPara__id = (_cuentasPara_ = cuentasPara((_c_data = c.data) !== null && _c_data !== void 0 ? _c_data : [], prev.forma_pago)[0]) === null || _cuentasPara_ === void 0 ? void 0 : _cuentasPara_.id) !== null && _cuentasPara__id !== void 0 ? _cuentasPara__id : '',
                                dia_pago: (_cliente_dia_facturacion = cliente.dia_facturacion) !== null && _cliente_dia_facturacion !== void 0 ? _cliente_dia_facturacion : '',
                                fecha_limite: fechaSugerida(dia),
                                fecha_saldo: fechaSugerida(dia)
                            };
                        }
                    }["FormPago.useEffect.cargar"]);
                } catch (err) {
                    if (vigente) onError === null || onError === void 0 ? void 0 : onError(err);
                } finally{
                    if (vigente) setCargando(false);
                }
            }
            cargar();
            return ({
                "FormPago.useEffect": ()=>{
                    vigente = false;
                }
            })["FormPago.useEffect"];
        }
    }["FormPago.useEffect"], [
        cliente.id,
        cliente.dia_facturacion,
        onError
    ]);
    /**
   * Lo que queda debiendo de la factura después de este cobro.
   *
   * Media unidad de centavo de tolerancia: el redondeo del IVA no puede dejar
   * un saldo de $0.00 ofreciendo una promesa por nada.
   */ const facturaElegida = facturas.find((f)=>f.id === form.document_id);
    // La deuda que el cobro va a saldar solo: los meses de servicio, más la
    // factura elegida si es de otro tipo. Los cables y la instalación no entran
    // acá —se cobran eligiéndolos— porque el pago del mes no puede irse en ellos y
    // dejar el servicio impago.
    const totalPendiente = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormPago.useMemo[totalPendiente]": ()=>{
            const cuentan = facturas.filter({
                "FormPago.useMemo[totalPendiente].cuentan": (f)=>f.tipo === 'servicios' || f.id === form.document_id
            }["FormPago.useMemo[totalPendiente].cuentan"]);
            return cuentan.reduce({
                "FormPago.useMemo[totalPendiente]": (s, f)=>{
                    var _f_saldo;
                    return s + Number((_f_saldo = f.saldo) !== null && _f_saldo !== void 0 ? _f_saldo : 0);
                }
            }["FormPago.useMemo[totalPendiente]"], 0);
        }
    }["FormPago.useMemo[totalPendiente]"], [
        facturas,
        form.document_id
    ]);
    const otrosConceptos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormPago.useMemo[otrosConceptos]": ()=>facturas.filter({
                "FormPago.useMemo[otrosConceptos]": (f)=>f.tipo !== 'servicios' && f.id !== form.document_id
            }["FormPago.useMemo[otrosConceptos]"])
    }["FormPago.useMemo[otrosConceptos]"], [
        facturas,
        form.document_id
    ]);
    const saldoRestante = Math.round((totalPendiente - Number(form.monto || 0)) * 100) / 100;
    const esCobroParcial = !esPromesa && saldoRestante > 0.005;
    // El otro lado: trae más de lo que debía y la diferencia le queda a favor.
    const excedente = !esPromesa ? Math.round(-saldoRestante * 100) / 100 : 0;
    const hayExcedente = excedente > 0.005;
    /**
   * Avisa si ese número de transacción ya se registró.
   *
   * La base lo rechaza igual, pero enterarse al salir del campo evita llenar
   * todo el formulario para descubrirlo al guardar.
   */ async function verificarTransaccion() {
        const numero = form.n_transaccion.trim();
        if (!numero) return setRepetida(null);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_pagos').select('numero, cliente, monto, fecha_pago').eq('n_transaccion', numero).eq('anulado', false).maybeSingle();
        setRepetida(data !== null && data !== void 0 ? data : null);
    }
    /** Al cambiar de comprobante, el monto sugerido es su saldo. */ function elegirComprobante(e) {
        const id = e.target.value;
        const f = facturas.find((x)=>x.id === id);
        setForm((prev)=>({
                ...prev,
                document_id: id,
                monto: f ? Number(f.saldo).toFixed(2) : prev.monto
            }));
    }
    /**
   * Quita al cliente del address-list de morosos.
   *
   * Es lo único de este formulario que toca la red, así que va por el
   * middleware. Que falle no invalida el cobro: la plata entró igual y el
   * pago ya quedó registrado — por eso se informa aparte en vez de abortar.
   */ async function activarServicio() {
        if (!cliente.router_id || !cliente.ip) {
            return {
                ok: false,
                nota: 'El cliente no tiene router o IP asignados: actívalo a mano.'
            };
        }
        try {
            const entradas = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].mikrotik.bloqueos(cliente.router_id);
            const entrada = entradas.find((e)=>e.address === cliente.ip || String(e.address).startsWith("".concat(cliente.ip, "/")));
            if (!entrada) return {
                ok: true,
                nota: 'No estaba bloqueado en el router.'
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].mikrotik.desbloquear(cliente.router_id, entrada.id);
            return {
                ok: true,
                nota: "Se quitó ".concat(cliente.ip, " del corte en el router.")
            };
        } catch (err) {
            return {
                ok: false,
                nota: "No se pudo desbloquear en el router: ".concat(err.message)
            };
        }
    }
    /**
   * Registra la promesa y habilita el servicio hasta la fecha acordada.
   *
   * El servicio se reactiva de verdad —el abonado navega—, así que queda
   * marcado en la promesa: quien corta necesita saber a quién volver a cortar
   * si la fecha pasa sin pago. Sin esa marca, prometer sería una forma de
   * quedarse conectado gratis.
   */ async function registrarPromesa() {
        var _sesion_user;
        const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.getUser();
        var _sesion_user_id;
        const { data: promesaNueva, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('promesas_pago').insert({
            client_id: cliente.id,
            factura_id: form.document_id || null,
            monto: form.monto === '' ? null : Number(form.monto),
            fecha_promesa: form.fecha_limite,
            nota: form.notas.trim() || null,
            activo_servicio: true,
            created_by: (_sesion_user_id = sesion === null || sesion === void 0 ? void 0 : (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id) !== null && _sesion_user_id !== void 0 ? _sesion_user_id : null
        }).select().single();
        if (error) {
            if (error.code === '23505') {
                throw new Error("".concat(cliente.nombre, " ya tiene una promesa activa. Ciérrala en la pestaña de promesas antes de registrar otra."));
            }
            throw error;
        }
        const pasos = [];
        const r = await activarServicio();
        pasos.push(r);
        if (r.ok) {
            const { error: errEstado } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('clientes').update({
                estado: 'activo'
            }).eq('id', cliente.id);
            if (errEstado) {
                pasos.push({
                    ok: false,
                    nota: "El servicio se habilitó pero el estado del cliente no se actualizó: ".concat(errEstado.message)
                });
            }
        }
        pasos.push({
            ok: true,
            nota: "Queda habilitado hasta el ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])("".concat(form.fecha_limite, "T12:00:00")), '. Si no paga, aparece en "Promesas" como vencida.')
        });
        return {
            promesa: promesaNueva,
            pasos
        };
    }
    async function registrar(e) {
        e.preventDefault();
        const monto = Number(form.monto);
        if (esPromesa) {
            if (!form.fecha_limite) return onError === null || onError === void 0 ? void 0 : onError(new Error('Elige hasta cuándo se le habilita el servicio'));
            if (form.fecha_limite < hoy()) {
                return onError === null || onError === void 0 ? void 0 : onError(new Error('La fecha límite no puede ser anterior a hoy'));
            }
        } else {
            if (!(monto > 0)) return onError === null || onError === void 0 ? void 0 : onError(new Error('El monto tiene que ser mayor que cero'));
            /**
       * Sin permiso de cobro parcial, el monto es el de la factura.
       *
       * El campo es de solo lectura, pero eso no alcanza: `readOnly` se saca desde
       * la consola en dos segundos, y el valor podría venir de un estado viejo. La
       * comprobación acá es la que decide, y la de la base —el disparador de la
       * 160— es la que decide de verdad.
       */ if (!puede('pagos.parcial')) {
                const factura = facturas.find((f)=>f.id === form.document_id);
                var _factura_saldo;
                const debido = Number((_factura_saldo = factura === null || factura === void 0 ? void 0 : factura.saldo) !== null && _factura_saldo !== void 0 ? _factura_saldo : 0);
                if (factura && Math.abs(monto - debido) > 0.01) {
                    return onError === null || onError === void 0 ? void 0 : onError(new Error("Se cobra el valor completo: esta factura debe ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(debido), ". ") + 'Si el abonado no trae todo, no se puede registrar acá.'));
                }
            }
            /**
       * La cuenta es obligatoria siempre, y el mensaje cambia según la forma.
       *
       * En un cobro electrónico es lo que después permite conciliar contra el
       * extracto: sin cuenta no se sabe en qué banco buscarlo, y con dos cuentas
       * del mismo banco la comparación da cruces que parecen buenos y no lo son.
       */ if (!form.cuenta_id) {
                return onError === null || onError === void 0 ? void 0 : onError(new Error(form.forma_pago === 'efectivo' ? 'Elige a qué caja entró el efectivo' : 'Elige a qué cuenta entró el pago: sin eso no se puede conciliar con el banco'));
            }
            /**
       * Y que sea una cuenta donde esa plata pueda estar de verdad.
       *
       * Un cobro en efectivo imputado a la cuenta del banco aparece después en la
       * conciliación como "sin respaldo" y manda a llamar a un abonado que pagó
       * en ventanilla.
       */ if (!cuentasPara(cuentas, form.forma_pago).some((c)=>c.id === form.cuenta_id)) {
                return onError === null || onError === void 0 ? void 0 : onError(new Error(form.forma_pago === 'efectivo' ? 'El efectivo entra a caja, no a una cuenta del banco' : 'Esa cuenta no corresponde a esta forma de pago'));
            }
        }
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        if (esPromesa) {
            try {
                onRegistrado === null || onRegistrado === void 0 ? void 0 : onRegistrado(await registrarPromesa());
            } catch (err) {
                onError === null || onError === void 0 ? void 0 : onError(err);
            } finally{
                setGuardando(false);
            }
            return;
        }
        try {
            var _sesion_user;
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.getUser();
            var _sesion_user_id;
            // Un cobro puede saldar varias facturas: el mes atrasado, el corriente y
            // los materiales que se llevó. La base lo reparte de la más vieja a la más
            // nueva —empezando por la que está en pantalla— y devuelve el detalle.
            // Repartirlo acá obligaría a varios viajes y dejaría el cobro a medias si
            // uno fallara.
            const { data: resultado, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('aplicar_cobro', {
                p_client_id: cliente.id,
                p_monto: monto,
                p_forma_pago: form.forma_pago,
                p_cuenta_id: form.cuenta_id,
                p_n_transaccion: form.n_transaccion.trim() || null,
                p_fecha_pago: form.fecha_pago,
                p_notas: form.notas.trim() || null,
                p_comision: Number(form.comision) || 0,
                p_factura_id: form.document_id || null,
                p_facturar: Boolean(form.facturar),
                p_activo_servicio: form.tipo === 'activar',
                p_created_by: (_sesion_user_id = sesion === null || sesion === void 0 ? void 0 : (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id) !== null && _sesion_user_id !== void 0 ? _sesion_user_id : null
            });
            if (error) throw error;
            // El recibo se imprime desde el cobro principal: es el que lleva el número
            // y el que suma lo que el abonado entregó.
            const { data: pago } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_pagos').select('*').eq('id', resultado.pago_id).maybeSingle();
            const pasos = [];
            var _resultado_facturas;
            const saldadas = (_resultado_facturas = resultado.facturas) !== null && _resultado_facturas !== void 0 ? _resultado_facturas : [];
            if (saldadas.length > 1) {
                pasos.push({
                    ok: true,
                    nota: "Se repartió entre ".concat(saldadas.length, " facturas: ").concat(saldadas.map((f)=>"N° ".concat(f.numero, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(f.monto))).join(', '), ".")
                });
            }
            if (Number(resultado.excedente) > 0.005) {
                pasos.push({
                    ok: true,
                    nota: saldadas.length ? "Quedan ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(resultado.excedente), " a favor del cliente: se aplican solos a la próxima factura.") : "No tenía facturas pendientes: los ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(resultado.excedente), " quedan a favor.")
                });
            }
            // La promesa la cierra la base, no esta pantalla: cumplida si saldó lo
            // que prometió, incumplida si trajo una parte. Se vuelve a leer solo
            // para poder contarlo en el resultado.
            if (promesa) {
                const { data: cerrada } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('promesas_pago').select('estado').eq('id', promesa.id).maybeSingle();
                pasos.push({
                    ok: (cerrada === null || cerrada === void 0 ? void 0 : cerrada.estado) === 'cumplida',
                    nota: (cerrada === null || cerrada === void 0 ? void 0 : cerrada.estado) === 'cumplida' ? 'Promesa cumplida: no le queda deuda de lo que prometió pagar.' : 'Promesa incumplida: pagó menos de lo prometido. Puedes anotarle un plazo nuevo.'
                });
            }
            // Lo que quedó debiendo, prometido para una fecha.
            //
            // Va después de que la base cerró la anterior: como pagar de menos la
            // deja incumplida, el lugar queda libre para anotar el plazo nuevo que el
            // abonado acaba de pedir.
            if (esCobroParcial && form.promesa_saldo) {
                var _sesion_user1;
                var _sesion_user_id1;
                const { error: errNueva } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('promesas_pago').insert({
                    client_id: cliente.id,
                    factura_id: form.document_id || null,
                    monto: saldoRestante,
                    fecha_promesa: form.fecha_saldo,
                    nota: "Saldo de ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(saldoRestante), " tras el pago de ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(monto), "."),
                    activo_servicio: form.tipo === 'activar',
                    created_by: (_sesion_user_id1 = sesion === null || sesion === void 0 ? void 0 : (_sesion_user1 = sesion.user) === null || _sesion_user1 === void 0 ? void 0 : _sesion_user1.id) !== null && _sesion_user_id1 !== void 0 ? _sesion_user_id1 : null
                });
                pasos.push({
                    ok: !errNueva,
                    nota: errNueva ? errNueva.code === '23505' ? 'El cobro se registró. La promesa por el saldo no se creó porque el cliente ya tiene una activa: revísala en Promesas.' : "El cobro se registró pero la promesa por el saldo no: ".concat(errNueva.message) : "Quedan ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(saldoRestante), " prometidos para el ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])("".concat(form.fecha_saldo, "T12:00:00")), ".")
                });
            } else if (esCobroParcial) {
                // Aunque no se prometa nada, el saldo tiene que quedar dicho: es la
                // diferencia entre "ya está" y "todavía debe".
                pasos.push({
                    ok: true,
                    nota: "Le quedan ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(saldoRestante), " pendientes.")
                });
            }
            // El día de pago pactado vive en la ficha del cliente, no en el cobro.
            const dia = form.dia_pago === '' ? null : Number(form.dia_pago);
            var _cliente_dia_facturacion;
            if (dia !== ((_cliente_dia_facturacion = cliente.dia_facturacion) !== null && _cliente_dia_facturacion !== void 0 ? _cliente_dia_facturacion : null)) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('clientes').update({
                    dia_facturacion: dia
                }).eq('id', cliente.id);
            }
            if (form.tipo === 'activar') {
                const r = await activarServicio();
                pasos.push(r);
                if (r.ok) {
                    const { error: errEstado } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('clientes').update({
                        estado: 'activo'
                    }).eq('id', cliente.id);
                    if (errEstado) pasos.push({
                        ok: false,
                        nota: "El servicio se activó en el router pero el estado del cliente no se actualizó: ".concat(errEstado.message)
                    });
                }
            }
            /**
       * El recibo sale solo, para entregárselo al cliente.
       *
       * Solo para quien tiene `pagos.recibo_automatico` —el punto de recaudación—:
       * en la ventanilla de la oficina no siempre se imprime, y abrir una pestaña
       * con un PDF en cada cobro sería molesto para quien cobra cincuenta.
       *
       * Va antes de avisar que terminó y sin `await` a propósito: que la
       * impresora falle no puede dejar el cobro pareciendo incompleto. El cobro
       * ya está registrado.
       *
       * `imprimirPdf` y no `abrirPdf`: abrir una pestaña después de un `await` lo
       * bloquea el navegador en silencio, y desde afuera se ve como que el
       * sistema no hizo nada. Con un marco escondido cae directo en el diálogo de
       * impresión, que es lo que hace falta con el cliente esperando el papel.
       */ if (puede('pagos.recibo_automatico') && (pago === null || pago === void 0 ? void 0 : pago.id)) {
                /**
         * Qué papel sale lo decide el servidor, no esta pantalla.
         *
         * Cuando el cobro saldó una factura se imprime la FACTURA SALDADA —la
         * misma hoja que va por correo, con la banda verde que dice PAGADO—; si no
         * hay factura, el recibo. La primera versión elegía acá, y los botones de
         * imprimir de las listas seguían sacando el recibo viejo: el mismo cobro
         * salía en dos papeles distintos según por dónde se lo pidiera.
         */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imprimirPdf"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].pagos.comprobante(pago.id)).catch(()=>{
                    onError === null || onError === void 0 ? void 0 : onError(new Error('El cobro se registró, pero no se pudo abrir el comprobante. ' + 'Imprímelo desde el listado de pagos.'));
                });
            }
            onRegistrado === null || onRegistrado === void 0 ? void 0 : onRegistrado({
                pago,
                pasos
            });
        } catch (err) {
            // 23505 = el número de transacción ya está registrado en otro cobro.
            onError === null || onError === void 0 ? void 0 : onError((err === null || err === void 0 ? void 0 : err.code) === '23505' ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pagos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorTransaccionRepetida"])(form.n_transaccion.trim()) : err);
        } finally{
            setGuardando(false);
        }
    }
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "p-4 text-sm text-slate-500",
        children: "Cargando la cuenta del cliente…"
    }, void 0, false, {
        fileName: "[project]/src/components/pagos/FormPago.jsx",
        lineNumber: 685,
        columnNumber: 24
    }, this);
    var _ORIGEN_NUMERO_form_forma_pago, _form_dia_pago;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: registrar,
        className: "space-y-4",
        children: [
            facturas.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: [
                    "El cliente tiene ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: facturas.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                        lineNumber: 691,
                        columnNumber: 28
                    }, this),
                    ' ',
                    facturas.length === 1 ? 'factura por cobrar' : 'facturas por cobrar',
                    " (total",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(totalPendiente)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                        lineNumber: 693,
                        columnNumber: 11
                    }, this),
                    ")."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pagos/FormPago.jsx",
                lineNumber: 690,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: "El cliente no tiene facturas pendientes. Lo que registres queda como abono a cuenta."
            }, void 0, false, {
                fileName: "[project]/src/components/pagos/FormPago.jsx",
                lineNumber: 696,
                columnNumber: 9
            }, this),
            promesa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        size: 14,
                        className: "mr-1 inline"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                        lineNumber: 703,
                        columnNumber: 11
                    }, this),
                    "Tiene una promesa de pago para el",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])("".concat(promesa.fecha_promesa, "T12:00:00"))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                        lineNumber: 705,
                        columnNumber: 11
                    }, this),
                    promesa.monto ? " por ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(promesa.monto)) : '',
                    ". Al registrar el cobro se cierra."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pagos/FormPago.jsx",
                lineNumber: 702,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-[1.4fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Comprobante a pagar",
                                hint: "Vacío = abono a cuenta, sin factura asociada",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: form.document_id,
                                    onChange: elegirComprobante,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— sin comprobante —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pagos/FormPago.jsx",
                                            lineNumber: 714,
                                            columnNumber: 15
                                        }, this),
                                        facturas.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: f.id,
                                                children: [
                                                    "N° ",
                                                    f.numero,
                                                    " — ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(f.saldo),
                                                    " pendiente de ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(f.importe_total),
                                                    " (",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(f.fecha_emision),
                                                    ")",
                                                    f.tipo !== 'servicios' ? " · ".concat(f.tipo) : ''
                                                ]
                                            }, f.id, true, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 716,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                    lineNumber: 713,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 712,
                                columnNumber: 11
                            }, this),
                            !esPromesa && otrosConceptos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-sky-500/40 bg-sky-500/10 p-3 text-sm text-sky-100",
                                children: [
                                    "Además debe",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(otrosConceptos.reduce((t, f)=>t + Number(f.saldo), 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 731,
                                        columnNumber: 15
                                    }, this),
                                    " por otros conceptos:",
                                    ' ',
                                    otrosConceptos.map((f)=>"N° ".concat(f.numero, " ").concat(f.concepto, " (").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(f.saldo), ")")).join(', '),
                                    ". Este cobro no los toca — para cobrarlos, elegilos arriba."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: [
                                    !esPromesa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                campo: "comision",
                                                label: "Comisión $",
                                                hint: "Lo que retiene el intermediario",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "Ej.: 0.50",
                                                    type: "number",
                                                    step: "0.01",
                                                    min: 0,
                                                    value: form.comision,
                                                    onChange: set('comision')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 744,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 743,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                campo: "n_transaccion",
                                                label: form.forma_pago === 'efectivo' ? 'N° de recibera (opcional)' : 'N° de transacción',
                                                hint: repetida ? "Ya registrado: recibo N° ".concat(String(repetida.numero).padStart(6, '0'), " de ").concat(repetida.cliente, " por ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(repetida.monto), ".") : (_ORIGEN_NUMERO_form_forma_pago = ORIGEN_NUMERO[form.forma_pago]) !== null && _ORIGEN_NUMERO_form_forma_pago !== void 0 ? _ORIGEN_NUMERO_form_forma_pago : 'No se puede repetir',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "Ej.: 123456789",
                                                    value: form.n_transaccion,
                                                    onChange: set('n_transaccion'),
                                                    onBlur: verificarTransaccion,
                                                    required: form.forma_pago !== 'efectivo',
                                                    className: repetida ? 'border-red-500' : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 778,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 766,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                hint: "Cómo pagó el cliente.",
                                                label: "Forma de pago",
                                                children: formasPosibles.length === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-9 items-center rounded-lg border border-slate-700 bg-slate-800/60 px-3 text-sm text-slate-300",
                                                    children: formasPosibles[0].label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 803,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: form.forma_pago,
                                                    onChange: set('forma_pago'),
                                                    children: formasPosibles.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: f.valor,
                                                            children: f.label
                                                        }, f.valor, false, {
                                                            fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                            lineNumber: 809,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 807,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 788,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                campo: "cuenta_id",
                                                label: form.forma_pago === 'efectivo' ? 'Caja' : 'Cuenta de destino',
                                                hint: form.forma_pago === 'efectivo' ? 'El efectivo entra a caja, no a una cuenta del banco' : 'A dónde entró la plata. Es lo que después permite conciliar con el banco.',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: form.cuenta_id,
                                                        onChange: set('cuenta_id'),
                                                        required: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "— elige una cuenta —"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                                lineNumber: 825,
                                                                columnNumber: 21
                                                            }, this),
                                                            cuentasPara(cuentas, form.forma_pago).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c.id,
                                                                    children: [
                                                                        c.nombre,
                                                                        c.numero ? " — ".concat(c.numero) : '',
                                                                        c.propia && c.tipo === 'efectivo' ? ' (tu caja)' : ''
                                                                    ]
                                                                }, c.id, true, {
                                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                                    lineNumber: 827,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                        lineNumber: 824,
                                                        columnNumber: 19
                                                    }, this),
                                                    !cuentasPara(cuentas, form.forma_pago).length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-xs text-amber-400",
                                                        children: form.forma_pago === 'efectivo' ? 'No tienes una caja asignada. Pídela en Ajustes → Cuentas de pago: sin caja propia no se puede cobrar en efectivo.' : 'No hay ninguna cuenta de este tipo cargada. Créala en Ajustes → Cuentas de pago.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                        lineNumber: 840,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 816,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "tipo",
                                        hint: "Registrar el pago, reconectar o dejar una promesa.",
                                        label: "Tipo de pago",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: form.tipo,
                                            onChange: set('tipo'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "registrar",
                                                    children: "Registrar pago"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 852,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "activar",
                                                    children: "Registrar pago y activar servicio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 853,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "promesa",
                                                    children: "Promesa de pago (habilitar sin cobrar)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 854,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pagos/FormPago.jsx",
                                            lineNumber: 851,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 850,
                                        columnNumber: 13
                                    }, this),
                                    esPromesa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "fecha_limite",
                                        label: "Fecha límite de pago",
                                        className: "sm:col-span-2",
                                        hint: form.fecha_limite === fechaSugerida(diaMaximo) ? "Sugerida: ".concat(DIAS_DE_GRACIA, " días más allá del ").concat(diaMaximo, " de cada mes, que es la fecha máxima de pago. Toca el campo para elegir otra.") : diasFaltantes > 30 ? "Son ".concat(diasFaltantes, " días de plazo: es mucho para una promesa.") : "El servicio queda habilitado ".concat(diasFaltantes <= 0 ? 'solo por hoy' : "".concat(diasFaltantes, " día(s) más"), "."),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "date",
                                            value: form.fecha_limite,
                                            onChange: set('fecha_limite'),
                                            onClick: (e)=>{
                                                try {
                                                    var _e_currentTarget_showPicker, _e_currentTarget;
                                                    (_e_currentTarget_showPicker = (_e_currentTarget = e.currentTarget).showPicker) === null || _e_currentTarget_showPicker === void 0 ? void 0 : _e_currentTarget_showPicker.call(_e_currentTarget);
                                                } catch (e) {
                                                // Navegador sin soporte: queda el calendario del iconito.
                                                }
                                            },
                                            min: hoy(),
                                            max: enDias(90),
                                            required: true,
                                            className: "cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pagos/FormPago.jsx",
                                            lineNumber: 874,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 859,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "dia_pago",
                                        label: "Día de pago",
                                        hint: "Día del mes en que se le factura",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: (_form_dia_pago = form.dia_pago) !== null && _form_dia_pago !== void 0 ? _form_dia_pago : '',
                                            onChange: set('dia_pago'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "— sin definir —"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 894,
                                                    columnNumber: 17
                                                }, this),
                                                Array.from({
                                                    length: 28
                                                }, (_, i)=>i + 1).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: d,
                                                        children: [
                                                            String(d).padStart(2, '0'),
                                                            " de cada mes"
                                                        ]
                                                    }, d, true, {
                                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                        lineNumber: 896,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pagos/FormPago.jsx",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 892,
                                        columnNumber: 13
                                    }, this),
                                    !esPromesa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "fecha_pago",
                                        hint: "El día en que pagó, no el de hoy si es otro.",
                                        label: "Fecha del pago",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "date",
                                            value: form.fecha_pago,
                                            onChange: set('fecha_pago'),
                                            max: hoy()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pagos/FormPago.jsx",
                                            lineNumber: 905,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 904,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 738,
                                columnNumber: 11
                            }, this),
                            !esPromesa && !form.document_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "t-panel p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex cursor-pointer items-center gap-2 text-sm text-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: Boolean(form.facturar),
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            facturar: e.target.checked
                                                        })),
                                                className: "accent-sky-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 915,
                                                columnNumber: 17
                                            }, this),
                                            "Emitirle factura electrónica por este cobro"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 914,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[11px] text-slate-500",
                                        children: [
                                            form.facturar ? 'Queda en Facturación → Por facturar. Se revisa y se envía al SRI al cierre de la jornada.' : 'Solo se le entrega el recibo del cobro.',
                                            cliente.factura_electronica === false && form.facturar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-400",
                                                children: [
                                                    ' ',
                                                    "La ficha de este cliente dice que no se le factura."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 928,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 923,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 913,
                                columnNumber: 13
                            }, this),
                            hayExcedente && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10 p-3 text-sm text-fuchsia-100",
                                children: [
                                    "Paga ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(excedente)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 939,
                                        columnNumber: 20
                                    }, this),
                                    " de más sobre los ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(totalPendiente),
                                    " que debe. Esa diferencia queda ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "a favor del cliente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 940,
                                        columnNumber: 42
                                    }, this),
                                    " y se aplica sola a la próxima factura."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 938,
                                columnNumber: 13
                            }, this),
                            esCobroParcial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-amber-100",
                                        children: [
                                            "Cobro parcial: de ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(totalPendiente),
                                            " que debe quedan",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(saldoRestante)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 949,
                                                columnNumber: 17
                                            }, this),
                                            " pendientes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 947,
                                        columnNumber: 15
                                    }, this),
                                    cliente.factura_electronica !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-amber-200/80",
                                        children: "No entra a la cola del SRI todavía: el comprobante se emite por el mes completo cuando termine de cancelarlo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 956,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex cursor-pointer items-center gap-2 text-sm text-amber-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: form.promesa_saldo,
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            promesa_saldo: e.target.checked
                                                        })),
                                                className: "accent-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 963,
                                                columnNumber: 17
                                            }, this),
                                            "Registrar promesa de pago por el saldo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 962,
                                        columnNumber: 15
                                    }, this),
                                    form.promesa_saldo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                campo: "fecha_saldo",
                                                label: "Se compromete a pagar el",
                                                hint: "Toca el campo para abrir el calendario",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "date",
                                                    value: form.fecha_saldo,
                                                    onChange: set('fecha_saldo'),
                                                    onClick: (e)=>{
                                                        try {
                                                            var _e_currentTarget_showPicker, _e_currentTarget;
                                                            (_e_currentTarget_showPicker = (_e_currentTarget = e.currentTarget).showPicker) === null || _e_currentTarget_showPicker === void 0 ? void 0 : _e_currentTarget_showPicker.call(_e_currentTarget);
                                                        } catch (e) {
                                                        // Navegador sin soporte: queda el calendario del iconito.
                                                        }
                                                    },
                                                    min: hoy(),
                                                    max: enDias(90),
                                                    className: "cursor-pointer",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 977,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 976,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                label: "Monto de la promesa",
                                                hint: "Es el saldo de la factura",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "t-panel px-3 py-2 text-sm text-slate-300",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(saldoRestante)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                    lineNumber: 995,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 994,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 975,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 946,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                campo: "monto",
                                label: esPromesa ? 'MONTO PROMETIDO' : 'TOTAL A PAGAR',
                                hint: esPromesa ? 'Opcional: cuánto se comprometió a pagar.' : esCobroParcial ? "Cobro parcial: quedarían ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(saldoRestante), " pendientes.") : hayExcedente ? "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(excedente), " quedan a favor del cliente.") : 'Editable: se puede cobrar de más (queda a favor) o de menos (queda pendiente).',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-400",
                                                children: "$"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 1017,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Ej.: 25.00",
                                                type: "number",
                                                step: "0.01",
                                                min: 0.01,
                                                value: form.monto,
                                                onChange: set('monto'),
                                                required: !esPromesa,
                                                /**
                 * ── Quién no puede cambiar el monto ──
                 *
                 * El punto de recaudación cobra el valor completo. Es la regla que
                 * más tienta a saltarse —el abonado dice "solo tengo veinte" y el
                 * del local lo carga igual con tal de no perder la venta— y deja
                 * una factura a medio pagar que el abonado cree cancelada, más un
                 * corte que llega igual.
                 *
                 * El permiso existía desde siempre y no lo aplicaba nadie.
                 */ readOnly: !puede('pagos.parcial') && !esPromesa,
                                                className: "text-lg font-semibold ".concat(esPromesa ? 'text-amber-300' : 'text-emerald-300', " ").concat(!puede('pagos.parcial') && !esPromesa ? 'cursor-not-allowed opacity-70' : '')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 1020,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1016,
                                        columnNumber: 13
                                    }, this),
                                    !puede('pagos.parcial') && !esPromesa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-slate-500",
                                        children: "Se cobra el valor completo de la factura."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1046,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 1004,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                        lineNumber: 711,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 lg:border-l lg:border-slate-800 lg:pl-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                campo: "notas",
                                label: "Notas",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    rows: 5,
                                    value: form.notas,
                                    onChange: set('notas'),
                                    placeholder: "Comentario del pago"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pagos/FormPago.jsx",
                                    lineNumber: 1055,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 1054,
                                columnNumber: 11
                            }, this),
                            esPromesa ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200",
                                children: [
                                    "No se registra ningún cobro. El servicio se habilita ahora y hasta el",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: form.fecha_limite ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])("".concat(form.fecha_limite, "T12:00:00")) : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1066,
                                        columnNumber: 15
                                    }, this),
                                    ". Si llega esa fecha sin pago, el cliente aparece en ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Promesas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1071,
                                        columnNumber: 68
                                    }, this),
                                    " como vencido para volver a cortarlo."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 1064,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "t-card-sm p-3 text-xs text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Cobrado al cliente"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 1077,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "text-slate-200",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(form.monto)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 1078,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1076,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Comisión"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 1081,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "− ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(form.comision)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 1082,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1080,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex justify-between border-t border-slate-800 pt-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Entra a la cuenta"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 1085,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "text-emerald-300",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(Number(form.monto || 0) - Number(form.comision || 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                                lineNumber: 1086,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1084,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 1075,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variante: "fantasma",
                                        onClick: onCancelar,
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1094,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        variante: "primario",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                                        cargando: guardando,
                                        children: esPromesa ? 'Registrar promesa y habilitar' : 'Registrar pago'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                                        lineNumber: 1097,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pagos/FormPago.jsx",
                                lineNumber: 1093,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pagos/FormPago.jsx",
                        lineNumber: 1053,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pagos/FormPago.jsx",
                lineNumber: 710,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pagos/FormPago.jsx",
        lineNumber: 688,
        columnNumber: 5
    }, this);
}
_s(FormPago, "ltsLO/Mv+B1Hv6c+1ReSd5YvOww=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = FormPago;
;
var _c;
__turbopack_context__.k.register(_c, "FormPago");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/recaudacion/InicioPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecaudacionInicioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagos$2f$BuscadorCliente$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pagos/BuscadorCliente.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagos$2f$FormPago$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/pagos/FormPago.jsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
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
function RecaudacionInicioPage() {
    _s();
    const [resumen, setResumen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cliente, setCliente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RecaudacionInicioPage.useCallback[recargar]": async ()=>{
            const { data, error: e } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_mi_recaudacion').select('*').maybeSingle();
            if (e) {
                setError(/does not exist/i.test(e.message) ? {
                    message: 'Falta la vista de recaudación',
                    hint: 'Ejecuta supabase/migracion-160-el-punto-de-recaudacion.sql'
                } : e);
            }
            setResumen(data !== null && data !== void 0 ? data : null);
        }
    }["RecaudacionInicioPage.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecaudacionInicioPage.useEffect": ()=>{
            recargar().finally({
                "RecaudacionInicioPage.useEffect": ()=>setCargando(false)
            }["RecaudacionInicioPage.useEffect"]);
        }
    }["RecaudacionInicioPage.useEffect"], [
        recargar
    ]);
    /** Mi reporte: lo mismo que ve el administrador, filtrado a lo mío. */ function miReporte() {
        const hoy = new Date().toISOString().slice(0, 10);
        const p = new URLSearchParams({
            desde: hoy,
            hasta: hoy
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abrirPdf"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].pagos.transaccionesPdf(p.toString())).catch(setError);
    }
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
        lineNumber: 65,
        columnNumber: 24
    }, this);
    var _cliente_identificacion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold text-slate-100",
                                children: "Recaudación"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "Busca al abonado por nombre, cédula o contrato y cóbrale."
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "secundario",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                        onClick: miReporte,
                        children: "Mi reporte de hoy"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            resumen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Caja, {
                        titulo: "Cobrado hoy",
                        valor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(resumen.hoy),
                        nota: "".concat(resumen.cobros_hoy, " cobro").concat(Number(resumen.cobros_hoy) === 1 ? '' : 's'),
                        destacado: true,
                        /* Lo anulado se dice siempre. Es la respuesta a "imprimí diez
               comprobantes y entrego el valor de nueve": sin ese número, la
               diferencia parece un faltante de caja. */ alerta: Number(resumen.anulados_hoy) > 0 ? "".concat(resumen.anulados_hoy, " anulado").concat(Number(resumen.anulados_hoy) === 1 ? '' : 's', " por ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(resumen.anulado_hoy)) : null
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Caja, {
                        titulo: "Cobrado en total",
                        valor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(resumen.total),
                        nota: resumen.desde ? "".concat(resumen.cobros_total, " cobros desde ").concat(resumen.desde) : "".concat(resumen.cobros_total, " cobros")
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            cliente ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: cliente.nombre,
                subtitle: (_cliente_identificacion = cliente.identificacion) !== null && _cliente_identificacion !== void 0 ? _cliente_identificacion : '',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagos$2f$FormPago$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        cliente: cliente,
                        onError: setError,
                        onCancelar: ()=>setCliente(null),
                        onRegistrado: ()=>{
                            setCliente(null);
                            // Los totales cambiaron: se vuelven a leer en vez de sumarlos acá,
                            // para que sigan saliendo de la misma cuenta que ve el
                            // administrador.
                            recargar();
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 116,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Cobrar",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
                subtitle: "Nombre, cédula o número de contrato",
                desbordable: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagos$2f$BuscadorCliente$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onElegir: setCliente
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(RecaudacionInicioPage, "9+tWyVySdgGgfDkjyPtSUHV7xKA=");
_c = RecaudacionInicioPage;
function Caja(param) {
    let { titulo, valor, nota, alerta = null, destacado = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border p-5 ".concat(destacado ? 'border-emerald-800/60 bg-[#ECFDF5]' : 'border-slate-800 bg-[#F6F8FB]'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                        size: 15,
                        className: destacado ? 'text-emerald-400' : 'text-slate-500'
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] uppercase tracking-wider text-slate-500",
                        children: titulo
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-3xl font-semibold tabular-nums ".concat(destacado ? 'text-emerald-300' : 'text-slate-100'),
                children: valor
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-xs text-slate-500",
                children: nota
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            alerta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-rose-400",
                children: alerta
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
                lineNumber: 167,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/recaudacion/InicioPage.jsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_c1 = Caja;
var _c, _c1;
__turbopack_context__.k.register(_c, "RecaudacionInicioPage");
__turbopack_context__.k.register(_c1, "Caja");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b2a8f5e3._.js.map