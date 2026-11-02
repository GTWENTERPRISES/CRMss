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
"[project]/src/components/tecnico/AvisoIncidencia.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvisoIncidencia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function AvisoIncidencia(param) {
    let { clientId } = param;
    _s();
    const [incidencias, setIncidencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvisoIncidencia.useEffect": ()=>{
            if (!clientId) return;
            let vivo = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_incidencia_de_cliente').select('*').eq('client_id', clientId).then({
                "AvisoIncidencia.useEffect": (param)=>{
                    let { data, error } = param;
                    // Si la consulta falla —la migración 86 sin correr, por ejemplo— no se
                    // muestra nada. Es un aviso extra: que falte no puede impedirle al
                    // técnico abrir el trabajo.
                    if (vivo && !error) setIncidencias(data !== null && data !== void 0 ? data : []);
                }
            }["AvisoIncidencia.useEffect"]);
            return ({
                "AvisoIncidencia.useEffect": ()=>{
                    vivo = false;
                }
            })["AvisoIncidencia.useEffect"];
        }
    }["AvisoIncidencia.useEffect"], [
        clientId
    ]);
    if (!incidencias.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: incidencias.map((i)=>{
            const caido = i.estado === 'down';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border p-3 ".concat(caido ? 'border-rose-500/40 bg-rose-500/10' : 'border-amber-500/40 bg-amber-500/10'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            size: 18,
                            className: "mt-0.5 shrink-0 ".concat(caido ? 'text-rose-400' : 'text-amber-400')
                        }, void 0, false, {
                            fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-semibold ".concat(caido ? 'text-rose-200' : 'text-amber-200'),
                                    children: caido ? 'Atención: la zona está caída' : 'Atención: la zona viene con problemas'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[13px] text-slate-300",
                                    children: [
                                        "Este cliente está conectado a ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: i.nodo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                                            lineNumber: 75,
                                            columnNumber: 49
                                        }, this),
                                        ", que",
                                        ' ',
                                        caido ? 'no responde' : 'está degradado',
                                        " desde hace ",
                                        duracion(i.minutos_asi),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[12px] text-slate-400",
                                    children: [
                                        i.clientes_afectados > 1 ? "Hay ".concat(i.clientes_afectados, " clientes en la misma situación. ") : '',
                                        "Lo que le pasa al abonado puede ser por esto y no por su instalación."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: "/campo/red?nodo=".concat(i.nodo_id),
                                    className: "mt-2 inline-flex items-center gap-1.5 rounded-lg border border-slate-600/60 px-2.5 py-1.5 text-[12px] text-slate-200 active:bg-slate-800",
                                    children: [
                                        "Ver la incidencia ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                                            lineNumber: 89,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                    lineNumber: 65,
                    columnNumber: 13
                }, this)
            }, i.nodo_id, false, {
                fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                lineNumber: 57,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(AvisoIncidencia, "KJfbNdjQOLSZkq1cQT307SVq418=");
_c = AvisoIncidencia;
function duracion(minutos) {
    if (minutos == null) return '—';
    if (minutos < 0) return 'unos minutos';
    if (minutos < 60) return "".concat(minutos, " minutos");
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    return m ? "".concat(h, "h ").concat(m, "m") : "".concat(h, " horas");
}
var _c;
__turbopack_context__.k.register(_c, "AvisoIncidencia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/soporte/FirmaDigital.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FirmaDigital
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript) <export default as Eraser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function FirmaDigital(param) {
    let { valor, onCambio, alto = 180 } = param;
    _s();
    const lienzoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dibujando = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [vacio, setVacio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!valor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FirmaDigital.useEffect": ()=>{
            const lienzo = lienzoRef.current;
            if (!lienzo) return;
            const dpr = window.devicePixelRatio || 1;
            const ancho = lienzo.parentElement.clientWidth;
            lienzo.width = ancho * dpr;
            lienzo.height = alto * dpr;
            lienzo.style.width = "".concat(ancho, "px");
            lienzo.style.height = "".concat(alto, "px");
            const ctx = lienzo.getContext('2d');
            ctx.scale(dpr, dpr);
            ctx.lineWidth = 2.2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = '#0f172a';
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, ancho, alto);
            // Una firma ya guardada se vuelve a pintar: al reabrir el ticket tiene que
            // estar, no un recuadro en blanco que invite a firmar de nuevo.
            if (valor) {
                const img = new Image();
                img.onload = ({
                    "FirmaDigital.useEffect": ()=>ctx.drawImage(img, 0, 0, ancho, alto)
                })["FirmaDigital.useEffect"];
                img.src = valor;
                setVacio(false);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FirmaDigital.useEffect"], [
        alto
    ]);
    const punto = (e)=>{
        var _e_touches;
        const r = lienzoRef.current.getBoundingClientRect();
        var _e_touches_;
        const t = (_e_touches_ = (_e_touches = e.touches) === null || _e_touches === void 0 ? void 0 : _e_touches[0]) !== null && _e_touches_ !== void 0 ? _e_touches_ : e;
        return {
            x: t.clientX - r.left,
            y: t.clientY - r.top
        };
    };
    function empezar(e) {
        e.preventDefault();
        dibujando.current = true;
        const ctx = lienzoRef.current.getContext('2d');
        const { x, y } = punto(e);
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    function mover(e) {
        if (!dibujando.current) return;
        e.preventDefault();
        const ctx = lienzoRef.current.getContext('2d');
        const { x, y } = punto(e);
        ctx.lineTo(x, y);
        ctx.stroke();
        if (vacio) setVacio(false);
    }
    function terminar() {
        if (!dibujando.current) return;
        dibujando.current = false;
        // JPEG con fondo blanco: una firma en PNG con transparencia se pierde sobre
        // el papel oscuro del PDF, y pesa el triple.
        onCambio === null || onCambio === void 0 ? void 0 : onCambio(lienzoRef.current.toDataURL('image/jpeg', 0.8));
    }
    function borrar() {
        const lienzo = lienzoRef.current;
        const ctx = lienzo.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, lienzo.width / dpr, lienzo.height / dpr);
        setVacio(true);
        onCambio === null || onCambio === void 0 ? void 0 : onCambio(null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-lg border border-slate-600 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: lienzoRef,
                        className: "block w-full touch-none",
                        onMouseDown: empezar,
                        onMouseMove: mover,
                        onMouseUp: terminar,
                        onMouseLeave: terminar,
                        onTouchStart: empezar,
                        onTouchMove: mover,
                        onTouchEnd: terminar
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/FirmaDigital.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    vacio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center gap-2 text-sm text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/FirmaDigital.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            " Firme con el dedo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/FirmaDigital.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/FirmaDigital.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variante: "fantasma",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__["Eraser"],
                    onClick: borrar,
                    disabled: vacio,
                    children: "Borrar y repetir"
                }, void 0, false, {
                    fileName: "[project]/src/components/soporte/FirmaDigital.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/FirmaDigital.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/soporte/FirmaDigital.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(FirmaDigital, "M0/e+2DW2GCZeFrYylJ2IxB7/Ng=");
_c = FirmaDigital;
var _c;
__turbopack_context__.k.register(_c, "FirmaDigital");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/telefono.js [app-client] (ecmascript) <export enlaceWhatsApp as enlaceWhatsapp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enlaceWhatsapp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enlaceWhatsApp"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-client] (ecmascript)");
}),
"[project]/src/components/soporte/TicketFicha.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketFicha
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$up$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerUpLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-up-left.js [app-client] (ecmascript) <export default as CornerUpLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/colaCampo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$AvisoIncidencia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/AvisoIncidencia.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$FirmaDigital$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/soporte/FirmaDigital.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-client] (ecmascript) <export enlaceWhatsApp as enlaceWhatsapp>");
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
/**
 * La orden de trabajo como la ve el técnico en la calle.
 *
 * Está pensada para un teléfono, con una mano, a veces sin buena señal y con
 * guantes. Por eso:
 *
 *  - Los tres botones que más se usan —llamar, WhatsApp, navegar— van arriba de
 *    todo y ocupan el ancho: son los que se aprietan antes de salir.
 *  - El estado se cambia con un botón grande, no con un desplegable.
 *  - El cierre está abajo, y hasta que no haya firma no se habilita: la firma es
 *    lo que respalda el trabajo, y si se pudiera cerrar sin ella nadie la
 *    pediría.
 */ const fecha = (f)=>f ? new Date("".concat(String(f).slice(0, 10), "T12:00:00")).toLocaleDateString() : '—';
const fechaHora = (f)=>f ? new Date(f).toLocaleString(undefined, {
        dateStyle: 'short',
        timeStyle: 'short'
    }) : '—';
function Dato(param) {
    let { etiqueta, valor, mono = false } = param;
    if (valor === null || valor === undefined || valor === '') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "text-[11px] uppercase tracking-wide text-slate-500",
                children: etiqueta
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: "truncate text-sm text-slate-200 ".concat(mono ? 'font-mono' : ''),
                children: valor
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c = Dato;
function TicketFicha(param) {
    let { ticket, onCambio, onError } = param;
    var _PRIORIDADES_t_prioridad, _PRIORIDADES_t_prioridad1, _TRANSICIONES_t_estado;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [t, setT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ticket);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [eventos, setEventos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adjuntos, setAdjuntos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [urls, setUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [subiendo, setSubiendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cierre, setCierre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        solucion: '',
        material_usado: '',
        firmante_nombre: '',
        firmante_cedula: '',
        firma_b64: null,
        checklist: {}
    });
    const archivoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ubicando, setUbicando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TicketFicha.useEffect": ()=>setT(ticket)
    }["TicketFicha.useEffect"], [
        ticket
    ]);
    var _CHECKLIST_t_tecnologia;
    const puntos = (_CHECKLIST_t_tecnologia = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CHECKLIST"][t.tecnologia]) !== null && _CHECKLIST_t_tecnologia !== void 0 ? _CHECKLIST_t_tecnologia : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CHECKLIST"].ftth;
    var _ESTADOS_t_estado;
    const estado = (_ESTADOS_t_estado = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][t.estado]) !== null && _ESTADOS_t_estado !== void 0 ? _ESTADOS_t_estado : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"].abierto;
    const cerrado = t.estado === 'resuelto' || t.estado === 'cancelado';
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TicketFicha.useCallback[recargar]": async ()=>{
            const [ev, ad] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ticket_eventos').select('*').eq('ticket_id', t.id).order('created_at', {
                    ascending: false
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ticket_adjuntos').select('*').eq('ticket_id', t.id).order('created_at')
            ]);
            var _ev_data;
            setEventos((_ev_data = ev.data) !== null && _ev_data !== void 0 ? _ev_data : []);
            var _ad_data;
            setAdjuntos((_ad_data = ad.data) !== null && _ad_data !== void 0 ? _ad_data : []);
            // El bucket es privado: cada foto necesita una URL firmada para poder verse.
            // Duran una hora, que es más de lo que dura abierta esta pantalla.
            const mapa = {};
            var _ad_data1;
            for (const a of (_ad_data1 = ad.data) !== null && _ad_data1 !== void 0 ? _ad_data1 : []){
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].storage.from('tickets').createSignedUrl(a.ruta, 3600);
                if (data === null || data === void 0 ? void 0 : data.signedUrl) mapa[a.id] = data.signedUrl;
            }
            setUrls(mapa);
        }
    }["TicketFicha.useCallback[recargar]"], [
        t.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TicketFicha.useEffect": ()=>{
            recargar();
        }
    }["TicketFicha.useEffect"], [
        recargar
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TicketFicha.useEffect": ()=>{
            setCierre({
                "TicketFicha.useEffect": (c)=>{
                    var _t_solucion, _t_material_usado, _t_firmante_nombre, _ref, _t_firmante_cedula, _ref1, _t_firma_b64, _t_checklist;
                    return {
                        ...c,
                        solucion: (_t_solucion = t.solucion) !== null && _t_solucion !== void 0 ? _t_solucion : '',
                        material_usado: (_t_material_usado = t.material_usado) !== null && _t_material_usado !== void 0 ? _t_material_usado : '',
                        firmante_nombre: (_ref = (_t_firmante_nombre = t.firmante_nombre) !== null && _t_firmante_nombre !== void 0 ? _t_firmante_nombre : t.nombre) !== null && _ref !== void 0 ? _ref : '',
                        firmante_cedula: (_ref1 = (_t_firmante_cedula = t.firmante_cedula) !== null && _t_firmante_cedula !== void 0 ? _t_firmante_cedula : t.identificacion) !== null && _ref1 !== void 0 ? _ref1 : '',
                        firma_b64: (_t_firma_b64 = t.firma_b64) !== null && _t_firma_b64 !== void 0 ? _t_firma_b64 : null,
                        checklist: (_t_checklist = t.checklist) !== null && _t_checklist !== void 0 ? _t_checklist : {}
                    };
                }
            }["TicketFicha.useEffect"]);
        }
    }["TicketFicha.useEffect"], [
        t
    ]);
    var _t_nombre;
    const wa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__["enlaceWhatsapp"])(t.telefono_whatsapp || t.telefono, "Hola ".concat(String((_t_nombre = t.nombre) !== null && _t_nombre !== void 0 ? _t_nombre : '').split(' ')[0], ", le escribimos por su reporte N° ").concat(t.codigo, "."));
    async function cambiarEstado(nuevo) {
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            var _data_user, _data;
            var _data_user_id;
            // `cerrado_por` solo cuando de verdad se está cerrando. Ponerlo en cada
            // cambio de estado hacía figurar como "cerrado por" a quien apenas salió
            // hacia el domicilio.
            const campos = {
                estado: nuevo,
                ...nuevo === 'resuelto' || nuevo === 'cancelado' ? {
                    cerrado_por: (_data_user_id = (_data = (await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getUser()).data) === null || _data === void 0 ? void 0 : (_data_user = _data.user) === null || _data_user === void 0 ? void 0 : _data_user.id) !== null && _data_user_id !== void 0 ? _data_user_id : null
                } : {},
                ...nuevo === 'en_ruta' ? {
                    salida_at: new Date().toISOString()
                } : {}
            };
            // Por la cola: "salgo para allá" se toca en la puerta del taller y
            // "llegué" en la vereda del cliente. Los dos son lugares donde la señal
            // falta seguido, y son las marcas de tiempo con las que después se mide
            // cuánto tardó una visita.
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campoApi"].actualizarTicket(t.id, campos);
            setT((v)=>({
                    ...v,
                    ...campos
                }));
            if (r.encolado) return;
            await recargar();
            await (onCambio === null || onCambio === void 0 ? void 0 : onCambio());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    /**
   * Sale hacia el domicilio.
   *
   * Abre el navegador antes de tocar la base: si se hiciera al revés, un
   * problema de red dejaría al técnico mirando una pantalla que no reacciona
   * cuando lo que quiere es arrancar.
   */ async function irAlDomicilio() {
        const mapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t);
        if (mapa) window.open(mapa, '_blank', 'noopener');
        await cambiarEstado('en_ruta');
    }
    /**
   * Llegó: se confirma con la ubicación del momento.
   *
   * La distancia no bloquea nada. La coordenada del abonado muchas veces se
   * cargó desde la vereda y un GPS bajo techo se va cincuenta metros: negarle
   * iniciar el trabajo a quien está parado en la puerta sería peor que
   * registrar un número raro. Si está lejos se pide confirmación y queda
   * asentado desde dónde marcó.
   */ async function iniciarTrabajo() {
        setUbicando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            const pos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ubicacionActual"])();
            const metros = pos && t.latitud && t.longitud ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["distanciaEnMetros"])({
                lat: Number(t.latitud),
                lng: Number(t.longitud)
            }, {
                lat: pos.lat,
                lng: pos.lng
            }) : null;
            if (metros != null && metros > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RADIO_LLEGADA_M"]) {
                const seguir = await confirmar("Estás a ".concat(metros, " m del domicilio del ticket.\n\n") + 'Puede ser que la coordenada del abonado esté mal cargada. ' + '¿Iniciar el trabajo igual? Queda registrado desde dónde marcaste.');
                if (!seguir) return;
            }
            if (!pos) {
                const seguir = await confirmar('No se pudo tomar la ubicación del dispositivo.\n\n' + '¿Iniciar el trabajo igual? El ticket va a quedar sin confirmación de llegada.');
                if (!seguir) return;
            }
            var _pos_lat, _pos_lng;
            const campos = {
                estado: 'en_proceso',
                llegada_at: new Date().toISOString(),
                llegada_lat: (_pos_lat = pos === null || pos === void 0 ? void 0 : pos.lat) !== null && _pos_lat !== void 0 ? _pos_lat : null,
                llegada_lng: (_pos_lng = pos === null || pos === void 0 ? void 0 : pos.lng) !== null && _pos_lng !== void 0 ? _pos_lng : null,
                llegada_precision_m: (pos === null || pos === void 0 ? void 0 : pos.precision) ? Math.round(pos.precision) : null
            };
            // Pasa por la cola: llegar al domicilio es justo donde suele no haber
            // señal, y perder la marca de llegada obliga a rehacerla desde la
            // memoria — que es como se llena de horarios inventados.
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campoApi"].actualizarTicket(t.id, campos);
            setT((v)=>({
                    ...v,
                    ...campos
                }));
            if (r.encolado) return;
            await recargar();
            await (onCambio === null || onCambio === void 0 ? void 0 : onCambio());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setUbicando(false);
        }
    }
    async function subirFotos(e) {
        var _e_target_files;
        const archivos = Array.from((_e_target_files = e.target.files) !== null && _e_target_files !== void 0 ? _e_target_files : []);
        if (!archivos.length) return;
        setSubiendo(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getUser();
            for (const archivo of archivos){
                var _sesion_user;
                // Se achica antes de subir: el técnico está con datos móviles y una foto
                // de 4 MB del celular a veces no llega.
                const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["comprimirImagen"])(archivo);
                const ruta = "".concat(t.id, "/").concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 8), ".jpg");
                const { error: errSubida } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].storage.from('tickets').upload(ruta, blob, {
                    contentType: 'image/jpeg'
                });
                if (errSubida) throw errSubida;
                var _sesion_user_id;
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ticket_adjuntos').insert({
                    ticket_id: t.id,
                    tipo: 'foto',
                    ruta,
                    created_by: (_sesion_user_id = sesion === null || sesion === void 0 ? void 0 : (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id) !== null && _sesion_user_id !== void 0 ? _sesion_user_id : null
                });
                if (error) throw error;
            }
            await recargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setSubiendo(false);
            if (archivoRef.current) archivoRef.current.value = '';
        }
    }
    async function borrarFoto(a) {
        if (!await confirmar('¿Borrar esta foto?')) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].storage.from('tickets').remove([
            a.ruta
        ]);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ticket_adjuntos').delete().eq('id', a.id);
        await recargar();
    }
    async function cerrarTicket(e) {
        e.preventDefault();
        if (!cierre.firma_b64) {
            return onError === null || onError === void 0 ? void 0 : onError(new Error('Falta la firma de conformidad del abonado'));
        }
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            var _cierre_solucion, _cierre_material_usado, _cierre_firmante_nombre, _cierre_firmante_cedula, _sesion_user;
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getUser();
            var _sesion_user_id;
            // Un solo botón, con o sin señal. Sin conexión el cierre queda en la cola
            // y sale solo; la franja de arriba dice que falta enviarlo.
            //
            // Es seguro reintentarlo: el historial del ticket lo escribe un
            // disparador guardado por `IF NEW.estado IS DISTINCT FROM OLD.estado`, así
            // que cerrar dos veces no deja dos renglones de cierre.
            const campos = {
                estado: 'resuelto',
                solucion: ((_cierre_solucion = cierre.solucion) === null || _cierre_solucion === void 0 ? void 0 : _cierre_solucion.trim()) || null,
                material_usado: ((_cierre_material_usado = cierre.material_usado) === null || _cierre_material_usado === void 0 ? void 0 : _cierre_material_usado.trim()) || null,
                checklist: cierre.checklist,
                firma_b64: cierre.firma_b64,
                firmante_nombre: ((_cierre_firmante_nombre = cierre.firmante_nombre) === null || _cierre_firmante_nombre === void 0 ? void 0 : _cierre_firmante_nombre.trim()) || null,
                firmante_cedula: ((_cierre_firmante_cedula = cierre.firmante_cedula) === null || _cierre_firmante_cedula === void 0 ? void 0 : _cierre_firmante_cedula.trim()) || null,
                cerrado_at: new Date().toISOString(),
                cerrado_por: (_sesion_user_id = sesion === null || sesion === void 0 ? void 0 : (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id) !== null && _sesion_user_id !== void 0 ? _sesion_user_id : null
            };
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campoApi"].actualizarTicket(t.id, campos);
            // La pantalla refleja el cierre en los dos casos: para el técnico el
            // trabajo terminó. Lo que distingue "enviado" de "falta enviar" es la
            // franja de arriba, que no se puede cerrar mientras haya pendientes.
            setT((v)=>({
                    ...v,
                    ...campos
                }));
            if (r.encolado) return;
            await recargar();
            await (onCambio === null || onCambio === void 0 ? void 0 : onCambio());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    const faltan = puntos.filter((p)=>!cierre.checklist[p.clave]).length;
    var _PRIORIDADES_t_prioridad_clase, _PRIORIDADES_t_prioridad_label, _enlaceMapa, _t_tecnico;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$AvisoIncidencia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                clientId: t.client_id
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border p-4 ".concat(estado.clase),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-xs opacity-80",
                                        children: [
                                            "TICKET N° ",
                                            t.codigo
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "truncate text-xl font-bold",
                                        children: t.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm opacity-90",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["etiquetaIncidencia"])(t.tipo_incidencia)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 flex-col items-end gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-black/20 px-3 py-1 text-xs font-bold uppercase",
                                        children: estado.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full border px-2 py-0.5 text-[11px] ".concat((_PRIORIDADES_t_prioridad_clase = (_PRIORIDADES_t_prioridad = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORIDADES"][t.prioridad]) === null || _PRIORIDADES_t_prioridad === void 0 ? void 0 : _PRIORIDADES_t_prioridad.clase) !== null && _PRIORIDADES_t_prioridad_clase !== void 0 ? _PRIORIDADES_t_prioridad_clase : ''),
                                        children: [
                                            "Prioridad ",
                                            (_PRIORIDADES_t_prioridad_label = (_PRIORIDADES_t_prioridad1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORIDADES"][t.prioridad]) === null || _PRIORIDADES_t_prioridad1 === void 0 ? void 0 : _PRIORIDADES_t_prioridad1.label) !== null && _PRIORIDADES_t_prioridad_label !== void 0 ? _PRIORIDADES_t_prioridad_label : t.prioridad
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] uppercase opacity-75",
                                        children: t.tecnologia === 'ftth' ? 'FTTH · Fibra' : 'Wireless · Radio'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 flex items-center gap-2 text-xs opacity-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            "Abierto ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["haceCuanto"])(t.horas_abierto),
                            t.fecha_visita && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this),
                                    "Visita ",
                                    fecha(t.fecha_visita),
                                    t.franja && " · ".concat(t.franja === 'exacta' ? String(t.hora_visita).slice(0, 5) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FRANJAS"][t.franja])
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    t.visita_atrasada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 rounded-lg bg-[#FEF2F2] px-3 py-2 text-xs text-rose-200",
                        children: [
                            "La visita estaba para el ",
                            fecha(t.fecha_visita),
                            " y sigue sin resolverse."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: t.telefono ? "tel:".concat(t.telefono) : undefined,
                        className: "flex flex-col items-center gap-1 rounded-xl border p-3 text-xs transition ".concat(t.telefono ? 'border-sky-500/40 bg-sky-500/10 text-sky-200 active:bg-sky-500/20' : 'pointer-events-none border-slate-800 text-slate-600'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this),
                            "Llamar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: wa !== null && wa !== void 0 ? wa : undefined,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex flex-col items-center gap-1 rounded-xl border p-3 text-xs transition ".concat(wa ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200 active:bg-emerald-500/20' : 'pointer-events-none border-slate-800 text-slate-600'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this),
                            "WhatsApp"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (_enlaceMapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t)) !== null && _enlaceMapa !== void 0 ? _enlaceMapa : undefined,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex flex-col items-center gap-1 rounded-xl border p-3 text-xs transition ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t) ? 'border-violet-500/40 bg-violet-500/10 text-violet-200 active:bg-violet-500/20' : 'pointer-events-none border-slate-800 text-slate-600'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            "Navegar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t, 'waze') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t, 'waze'),
                target: "_blank",
                rel: "noreferrer",
                className: "block text-center text-[11px] text-slate-500 underline",
                children: "Abrir en Waze"
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 444,
                columnNumber: 9
            }, this),
            t.estado === 'asignado' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variante: "primario",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                onClick: irAlDomicilio,
                cargando: guardando,
                className: "w-full py-4 text-base",
                children: "Ir al domicilio"
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 459,
                columnNumber: 9
            }, this),
            t.estado === 'en_ruta' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variante: "primario",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"],
                onClick: iniciarTrabajo,
                cargando: ubicando || guardando,
                className: "w-full py-4 text-base",
                children: ubicando ? 'Confirmando llegada…' : 'Llegué — iniciar trabajo'
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 471,
                columnNumber: 9
            }, this),
            t.estado === 'en_ruta' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-[11px] text-slate-500",
                children: "Al iniciar se toma tu ubicación para dejar constancia de que llegaste."
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 483,
                columnNumber: 9
            }, this),
            ((_TRANSICIONES_t_estado = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TRANSICIONES"][t.estado]) === null || _TRANSICIONES_t_estado === void 0 ? void 0 : _TRANSICIONES_t_estado.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TRANSICIONES"][t.estado].filter((e)=>!(t.estado === 'asignado' && e === 'en_ruta')).filter((e)=>!(t.estado === 'en_ruta' && e === 'en_proceso')).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "fantasma",
                        icon: e === 'cancelado' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$up$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerUpLeft$3e$__["CornerUpLeft"],
                        onClick: ()=>cambiarEstado(e),
                        cargando: guardando,
                        className: "text-xs",
                        children: e === 'cancelado' ? 'Cancelar ticket' : "Volver a ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][e].label.toLowerCase())
                    }, e, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 496,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 491,
                columnNumber: 9
            }, this),
            (t.salida_at || t.llegada_at) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-card-sm p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "grid grid-cols-2 gap-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Salió"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 515,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-slate-200",
                                        children: fechaHora(t.salida_at)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 514,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Llegó"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-slate-200",
                                        children: t.llegada_at ? fechaHora(t.llegada_at) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400",
                                            children: "en camino"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 521,
                                            columnNumber: 59
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 520,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this),
                            t.minutos_en_ruta != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Viaje"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 526,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-slate-200",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["duracion"])(t.minutos_en_ruta)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 527,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 525,
                                columnNumber: 15
                            }, this),
                            t.llegada_at && t.minutos_en_sitio != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "En el lugar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 532,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-slate-200",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["duracion"])(t.minutos_en_sitio)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 533,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 531,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 513,
                        columnNumber: 11
                    }, this),
                    t.llegada_at && (t.llegada_distancia_m == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] text-slate-500",
                        children: "Sin confirmación de ubicación: el dispositivo no dio el GPS o el ticket no tiene coordenadas cargadas."
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 540,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] ".concat(Number(t.llegada_distancia_m) <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RADIO_LLEGADA_M"] ? 'text-emerald-400' : 'text-amber-400'),
                        children: [
                            Number(t.llegada_distancia_m) <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RADIO_LLEGADA_M"] ? "Llegada confirmada a ".concat(t.llegada_distancia_m, " m del domicilio") : "Inició el trabajo a ".concat(t.llegada_distancia_m, " m del domicilio"),
                            t.llegada_precision_m ? " · GPS ±".concat(t.llegada_precision_m, " m") : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 545,
                        columnNumber: 15
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 512,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Lo que reporta el abonado",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "whitespace-pre-wrap text-sm text-slate-200",
                    children: t.descripcion || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500",
                        children: "Sin descripción."
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 564,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 563,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 562,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Ubicación y contacto",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Dirección",
                            valor: t.direccion
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 571,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Sector / cantón",
                            valor: [
                                t.sector,
                                t.canton
                            ].filter(Boolean).join(' · ')
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Referencia",
                            valor: t.referencia
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 573,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Cédula / RUC",
                            valor: t.identificacion,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 574,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Teléfono",
                            valor: t.telefono,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "WhatsApp",
                            valor: t.telefono_whatsapp,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 576,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Coordenadas",
                            valor: t.latitud && t.longitud ? "".concat(t.latitud, ", ").concat(t.longitud) : null,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 577,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Asignado a",
                            valor: (_t_tecnico = t.tecnico) !== null && _t_tecnico !== void 0 ? _t_tecnico : t.cuadrilla
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 570,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: t.tecnologia === 'ftth' ? 'Servicio FTTH' : 'Servicio Wireless',
                icon: t.tecnologia === 'ftth' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: t.tecnologia === 'ftth' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Caja NAP",
                                valor: t.nap
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 594,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Puerto",
                                valor: t.puerto_nap,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 595,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Modelo ONT",
                                valor: t.ont_modelo
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 596,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Serie ONT",
                                valor: t.ont_serie,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 597,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Potencia reportada",
                                valor: t.potencia_dbm != null ? "".concat(t.potencia_dbm, " dBm") : null,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 598,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Nodo / torre",
                                valor: t.torre
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 606,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "IP del CPE",
                                valor: t.cpe_ip,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 607,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Frecuencia",
                                valor: t.frecuencia,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 608,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Señal reportada",
                                valor: t.senal_dbm != null ? "".concat(t.senal_dbm, " dBm") : null,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 609,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Antena",
                                valor: t.antena_modelo
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 614,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 591,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Fotos del trabajo",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
                subtitle: "Lectura de potencia, instalación, antes y después",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2 sm:grid-cols-4",
                        children: [
                            adjuntos.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative aspect-square overflow-hidden rounded-lg border border-slate-700",
                                    children: [
                                        urls[a.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: urls[a.id],
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: urls[a.id],
                                                alt: "",
                                                className: "h-full w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                                lineNumber: 631,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 630,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full w-full animate-pulse bg-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 634,
                                            columnNumber: 17
                                        }, this),
                                        !cerrado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>borrarFoto(a),
                                            className: "absolute right-1 top-1 rounded-md bg-black/60 p-1 text-rose-300 opacity-0 transition group-hover:opacity-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 637,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, a.id, true, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, this)),
                            !cerrado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    var _archivoRef_current;
                                    return (_archivoRef_current = archivoRef.current) === null || _archivoRef_current === void 0 ? void 0 : _archivoRef_current.click();
                                },
                                disabled: subiendo,
                                className: "flex aspect-square flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-slate-600 text-xs text-slate-400 transition hover:border-sky-500/60 hover:text-sky-300 disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this),
                                    subiendo ? 'Subiendo…' : 'Agregar'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: archivoRef,
                        type: "file",
                        accept: "image/*",
                        capture: "environment",
                        multiple: true,
                        onChange: subirFotos,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this),
                    adjuntos.length === 0 && cerrado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "Se cerró sin fotos."
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 672,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 621,
                columnNumber: 7
            }, this),
            t.estado === 'en_proceso' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Cerrar el ticket",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: cerrarTicket,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-wide text-slate-500",
                                    children: "Verificación antes de irse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 681,
                                    columnNumber: 15
                                }, this),
                                puntos.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 p-3 text-sm text-slate-200 transition active:bg-slate-800/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: Boolean(cierre.checklist[p.clave]),
                                                onChange: (e)=>setCierre((c)=>({
                                                            ...c,
                                                            checklist: {
                                                                ...c.checklist,
                                                                [p.clave]: e.target.checked
                                                            }
                                                        })),
                                                className: "mt-0.5 h-5 w-5 shrink-0 accent-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                                lineNumber: 689,
                                                columnNumber: 19
                                            }, this),
                                            p.label
                                        ]
                                    }, p.clave, true, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 685,
                                        columnNumber: 17
                                    }, this)),
                                faltan > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-amber-300",
                                    children: [
                                        "Quedan ",
                                        faltan,
                                        " sin marcar. Se puede cerrar igual, pero queda registrado así."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 705,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 680,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Qué se hizo",
                            hint: "Lo que el próximo técnico necesita saber",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                rows: 3,
                                value: cierre.solucion,
                                onChange: (e)=>setCierre((c)=>({
                                            ...c,
                                            solucion: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 712,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 711,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Material usado",
                            hint: "Metros de fibra, conectores, rosetas",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                rows: 2,
                                value: cierre.material_usado,
                                onChange: (e)=>setCierre((c)=>({
                                            ...c,
                                            material_usado: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 720,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 719,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Quién firma",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: cierre.firmante_nombre,
                                        onChange: (e)=>setCierre((c)=>({
                                                    ...c,
                                                    firmante_nombre: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 729,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 728,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Cédula de quien firma",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: cierre.firmante_cedula,
                                        onChange: (e)=>setCierre((c)=>({
                                                    ...c,
                                                    firmante_cedula: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 735,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 734,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 727,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-xs uppercase tracking-wide text-slate-500",
                                    children: "Firma de conformidad"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 743,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$FirmaDigital$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    valor: cierre.firma_b64,
                                    onCambio: (v)=>setCierre((c)=>({
                                                ...c,
                                                firma_b64: v
                                            }))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 742,
                            columnNumber: 13
                        }, this),
                        !cierre.firma_b64 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "Sin la firma del abonado el ticket no se cierra: es lo que respalda que el trabajo se hizo y que quedó conforme."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 753,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                            cargando: guardando,
                            disabled: !cierre.firma_b64,
                            className: "w-full",
                            children: "Cerrar como resuelto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 759,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 679,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 678,
                columnNumber: 9
            }, this),
            t.estado === 'resuelto' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Cierre",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Resuelto",
                                valor: fechaHora(t.cerrado_at)
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 777,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Firmó",
                                valor: [
                                    t.firmante_nombre,
                                    t.firmante_cedula
                                ].filter(Boolean).join(' · ')
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 778,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 776,
                        columnNumber: 11
                    }, this),
                    t.solucion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 whitespace-pre-wrap rounded-lg bg-[#F6F8FB] p-3 text-sm text-slate-200",
                        children: t.solucion
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 782,
                        columnNumber: 13
                    }, this),
                    t.material_usado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-slate-400",
                        children: [
                            "Material: ",
                            t.material_usado
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 788,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 space-y-1",
                        children: puntos.map((p)=>{
                            var _t_checklist, _t_checklist1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2 text-xs",
                                children: [
                                    ((_t_checklist = t.checklist) === null || _t_checklist === void 0 ? void 0 : _t_checklist[p.clave]) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 13,
                                        className: "text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 795,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 13,
                                        className: "text-slate-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 797,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: ((_t_checklist1 = t.checklist) === null || _t_checklist1 === void 0 ? void 0 : _t_checklist1[p.clave]) ? 'text-slate-300' : 'text-slate-600',
                                        children: p.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 799,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.clave, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 793,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 791,
                        columnNumber: 11
                    }, this),
                    t.firma_b64 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-1 text-[11px] uppercase tracking-wide text-slate-500",
                                children: "Conformidad del abonado"
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 808,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: t.firma_b64,
                                alt: "Firma del abonado",
                                className: "w-full max-w-xs rounded-lg border border-slate-700 bg-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 811,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 807,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 775,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Historial",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "space-y-2",
                    children: eventos.map((e)=>{
                        var _ESTADOS_e_estado_nuevo, _ESTADOS_e_estado_anterior;
                        var _ESTADOS_e_estado_nuevo_label;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1.5 h-2 w-2 shrink-0 rounded-full ".concat(e.estado_nuevo === 'resuelto' ? 'bg-emerald-400' : e.estado_nuevo === 'cancelado' ? 'bg-rose-400' : 'bg-sky-400')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 826,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-slate-200",
                                            children: (_ESTADOS_e_estado_nuevo_label = (_ESTADOS_e_estado_nuevo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][e.estado_nuevo]) === null || _ESTADOS_e_estado_nuevo === void 0 ? void 0 : _ESTADOS_e_estado_nuevo.label) !== null && _ESTADOS_e_estado_nuevo_label !== void 0 ? _ESTADOS_e_estado_nuevo_label : e.estado_nuevo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 836,
                                            columnNumber: 17
                                        }, this),
                                        e.estado_anterior && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-500",
                                            children: [
                                                " · venía de ",
                                                (_ESTADOS_e_estado_anterior = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][e.estado_anterior]) === null || _ESTADOS_e_estado_anterior === void 0 ? void 0 : _ESTADOS_e_estado_anterior.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 838,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[11px] text-slate-500",
                                            children: [
                                                fechaHora(e.created_at),
                                                e.nota ? " — ".concat(e.nota) : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 840,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 835,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, e.id, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 825,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 823,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 822,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
        lineNumber: 352,
        columnNumber: 5
    }, this);
}
_s(TicketFicha, "9esu5i4Ds1jDBy6fNaIM8fuxHNw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c1 = TicketFicha;
var _c, _c1;
__turbopack_context__.k.register(_c, "Dato");
__turbopack_context__.k.register(_c1, "TicketFicha");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/inventario.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIAS",
    ()=>CATEGORIAS,
    "ESTADOS_EQUIPO",
    ()=>ESTADOS_EQUIPO,
    "TIPOS_MOVIMIENTO",
    ()=>TIPOS_MOVIMIENTO,
    "UNIDADES",
    ()=>UNIDADES,
    "inventarioApi",
    ()=>inventarioApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/personal.js [app-client] (ecmascript)");
;
;
const CATEGORIAS = {
    ont: 'ONT / ONU',
    router: 'Router',
    antena: 'Antena',
    cable: 'Cable',
    conector: 'Conector',
    herramienta: 'Herramienta',
    material: 'Material',
    otro: 'Otro'
};
const UNIDADES = [
    'u',
    'm',
    'rollo',
    'caja',
    'par',
    'kg'
];
const TIPOS_MOVIMIENTO = {
    ingreso: {
        label: 'Ingreso',
        color: 'verde',
        ayuda: 'Entra material a un almacén.'
    },
    salida: {
        label: 'Salida',
        color: 'ambar',
        ayuda: 'Sale y no vuelve: baja, pérdida, venta.'
    },
    transferencia: {
        label: 'Transferencia',
        color: 'azul',
        ayuda: 'De un almacén a otro. Típico: bodega → técnico.'
    },
    consumo: {
        label: 'Consumo',
        color: 'azul',
        ayuda: 'Se usó en una instalación o un ticket.'
    },
    devolucion: {
        label: 'Devolución',
        color: 'verde',
        ayuda: 'El técnico devuelve lo que no usó.'
    },
    ajuste: {
        label: 'Ajuste',
        color: 'rojo',
        ayuda: 'Corrección tras un conteo. Lleva signo.'
    }
};
const ESTADOS_EQUIPO = {
    en_stock: {
        label: 'En stock',
        color: 'verde'
    },
    asignado: {
        label: 'Con el técnico',
        color: 'azul'
    },
    instalado: {
        label: 'Instalado',
        color: 'gris'
    },
    averiado: {
        label: 'Averiado',
        color: 'ambar'
    },
    baja: {
        label: 'De baja',
        color: 'rojo'
    }
};
const inventarioApi = {
    async catalogo () {
        const [articulos, almacenes] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_articulos').select('*').order('nombre'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('almacenes').select('*').eq('activo', true).order('tipo').order('nombre')
        ]);
        if (articulos.error) throw articulos.error;
        var _articulos_data, _almacenes_data;
        return {
            articulos: (_articulos_data = articulos.data) !== null && _articulos_data !== void 0 ? _articulos_data : [],
            almacenes: (_almacenes_data = almacenes.data) !== null && _almacenes_data !== void 0 ? _almacenes_data : []
        };
    },
    async existencias (almacenId) {
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_existencias').select('*').order('articulo');
        if (almacenId) q = q.eq('almacen_id', almacenId);
        const { data, error } = await q;
        if (error) throw error;
        // Las filas en cero son ruido: un artículo que alguna vez pasó por un
        // almacén deja su renglón para siempre, y con veinte almacenes la lista se
        // llena de ceros que tapan lo que sí hay.
        return (data !== null && data !== void 0 ? data : []).filter((e)=>Number(e.cantidad) !== 0);
    },
    /**
   * Lo que está en el mínimo o por debajo, almacén por almacén.
   *
   * Se pregunta por almacén y no por artículo porque es lo que hay que hacer
   * con la respuesta: el pedido de material es de una bodega o de la mochila de
   * un técnico. Un total sumado de todos lados no le dice a nadie qué cargar en
   * la camioneta.
   */ async stockBajo () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_stock_bajo').select('*')// Lo agotado primero: es la diferencia entre "hay que reponer" y "hoy no
        // se puede instalar".
        .order('agotado', {
            ascending: false
        }).order('falta', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * El mínimo de un artículo en un almacén concreto.
   *
   * Existe además del mínimo del artículo porque la bodega y la mochila del
   * técnico no se miden con la misma vara: la bodega avisa a las 20 ONTs, el
   * técnico a las 2. Con un solo número, o el técnico vive en alerta permanente
   * o el aviso de la bodega llega tarde.
   */ async guardarMinimo (param) {
        let { almacen_id, articulo_id, minimo, reponer } = param;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').upsert({
            almacen_id,
            articulo_id,
            minimo: Number(minimo),
            reponer: reponer === '' || reponer == null ? null : Number(reponer)
        }, {
            onConflict: 'almacen_id,articulo_id'
        }).select().single();
        if (error) throw error;
        return data;
    },
    /** Dejar de controlar ese artículo en ese almacén. */ async borrarMinimo (param) {
        let { almacen_id, articulo_id } = param;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').delete().eq('almacen_id', almacen_id).eq('articulo_id', articulo_id);
        if (error) throw error;
    },
    /** Los mínimos ya cargados, para poder editarlos. */ async minimos () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').select('*');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async guardarArticulo (articulo) {
        var _datos_codigo;
        const { id, ...datos } = articulo;
        const fila = {
            ...datos,
            codigo: ((_datos_codigo = datos.codigo) === null || _datos_codigo === void 0 ? void 0 : _datos_codigo.trim()) || null,
            tipo_ont_id: datos.tipo_ont_id || null,
            stock_minimo: datos.stock_minimo === '' ? null : Number(datos.stock_minimo)
        };
        const { data, error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').update(fila).eq('id', id).select().single() : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').insert(fila).select().single();
        if (error) throw error;
        return data;
    },
    async equipos () {
        let { almacenId, articuloId, busqueda } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_equipos').select('*').order('creado_en', {
            ascending: false
        }).limit(500);
        if (almacenId) q = q.eq('almacen_id', almacenId);
        if (articuloId) q = q.eq('articulo_id', articuloId);
        if (busqueda) q = q.or("serie.ilike.%".concat(busqueda, "%,mac.ilike.%").concat(busqueda, "%"));
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Registra un movimiento. Es la única forma de mover stock.
   *
   * Para artículos por serie inserta un movimiento por equipo, no uno con
   * cantidad 5: cada aparato tiene su propia historia de dónde estuvo, y un
   * renglón agrupado la pierde justo para los que más importa rastrear.
   */ async mover (param, perfil) {
        let { tipo, articuloId, cantidad, equipoIds = [], origen, destino, motivo, instalacionId, ticketId, costoUnit } = param;
        var _TIPOS_MOVIMIENTO_tipo;
        var _perfil_id, _perfil_apellido;
        const comun = {
            tipo,
            articulo_id: articuloId,
            almacen_origen_id: origen || null,
            almacen_destino_id: destino || null,
            instalacion_id: instalacionId || null,
            ticket_id: ticketId || null,
            costo_unit: costoUnit == null || costoUnit === '' ? null : Number(costoUnit),
            motivo: motivo || null,
            usuario_id: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null,
            usuario_nombre: perfil ? "".concat(perfil.nombre, " ").concat((_perfil_apellido = perfil.apellido) !== null && _perfil_apellido !== void 0 ? _perfil_apellido : '').trim() : null
        };
        const filas = equipoIds.length ? equipoIds.map((equipo_id)=>({
                ...comun,
                equipo_id,
                cantidad: 1
            })) : [
            {
                ...comun,
                cantidad: Number(cantidad)
            }
        ];
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(filas);
        if (error) throw error;
        var _TIPOS_MOVIMIENTO_tipo_label;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar("inventario.".concat(tipo), "".concat((_TIPOS_MOVIMIENTO_tipo_label = (_TIPOS_MOVIMIENTO_tipo = TIPOS_MOVIMIENTO[tipo]) === null || _TIPOS_MOVIMIENTO_tipo === void 0 ? void 0 : _TIPOS_MOVIMIENTO_tipo.label) !== null && _TIPOS_MOVIMIENTO_tipo_label !== void 0 ? _TIPOS_MOVIMIENTO_tipo_label : tipo, " de ").concat(filas.length > 1 ? "".concat(filas.length, " equipos") : "".concat(cantidad !== null && cantidad !== void 0 ? cantidad : 1)) + (motivo ? " — ".concat(motivo) : ''), {
            entidad: 'articulo',
            entidad_id: articuloId
        });
    },
    /** Da de alta equipos con serie. No mueve stock por sí solo: eso es el ingreso. */ async altaEquipos (param, perfil) {
        let { articuloId, almacenId, series, mac } = param;
        const limpias = [
            ...new Set(series.map((s)=>s.trim().toUpperCase()).filter(Boolean))
        ];
        if (!limpias.length) throw new Error('No hay ninguna serie para dar de alta');
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('equipos').insert(limpias.map((serie, i)=>({
                articulo_id: articuloId,
                serie,
                mac: limpias.length === 1 ? mac || null : null,
                almacen_id: almacenId,
                estado: 'en_stock'
            }))).select();
        if (error) {
            if (error.code === '23505') throw new Error('Alguna de esas series ya está cargada');
            throw error;
        }
        // El ingreso que los hace existir en el stock. Va después del alta porque
        // necesita los ids, y con el trigger de por medio el stock queda cuadrado
        // sin que nadie sume nada a mano.
        await this.mover({
            tipo: 'ingreso',
            articuloId,
            destino: almacenId,
            equipoIds: data.map((e)=>e.id),
            motivo: 'Alta de equipos con serie'
        }, perfil);
        return data;
    },
    async movimientos () {
        let { articuloId, almacenId, limite = 300 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_movimientos').select('*').order('creado_en', {
            ascending: false
        }).limit(limite);
        if (articuloId) q = q.eq('articulo_id', articuloId);
        if (almacenId) {
            q = q.or("almacen_origen_id.eq.".concat(almacenId, ",almacen_destino_id.eq.").concat(almacenId));
        }
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    // ── Proveedores y compras ──
    async proveedores () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').select('*').order('nombre');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async guardarProveedor (p) {
        const { id, ...datos } = p;
        const { error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').update(datos).eq('id', id) : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').insert(datos);
        if (error) throw error;
    },
    async compras () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').select('*, proveedores(nombre), compra_items(*, articulos(nombre, unidad, por_serie))').order('fecha', {
            ascending: false
        }).limit(200);
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async guardarCompra (param, perfil) {
        let { compra, items } = param;
        var _perfil_id;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').insert({
            ...compra,
            creado_por: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null
        }).select().single();
        if (error) throw error;
        if (items.length) {
            const { error: e2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compra_items').insert(items.map((i)=>({
                    ...i,
                    compra_id: data.id
                })));
            if (e2) throw e2;
        }
        return data;
    },
    /**
   * Recibe la compra: acá y solo acá entra el material al stock.
   *
   * Una compra en borrador es una intención. Sumar el stock al registrarla haría
   * que bodega prometa material que todavía está en el camión del proveedor —
   * que es de donde salen las instalaciones agendadas sin equipo.
   */ async recibirCompra (compra, perfil) {
        if (compra.estado === 'recibida') throw new Error('Esa compra ya fue recibida');
        var _compra_compra_items;
        for (const item of (_compra_compra_items = compra.compra_items) !== null && _compra_compra_items !== void 0 ? _compra_compra_items : []){
            var _item_articulos;
            const series = Array.isArray(item.series) ? item.series : [];
            if (((_item_articulos = item.articulos) === null || _item_articulos === void 0 ? void 0 : _item_articulos.por_serie) && series.length) {
                await this.altaEquipos({
                    articuloId: item.articulo_id,
                    almacenId: compra.almacen_id,
                    series
                }, perfil);
            } else {
                await this.mover({
                    tipo: 'ingreso',
                    articuloId: item.articulo_id,
                    cantidad: item.cantidad,
                    destino: compra.almacen_id,
                    costoUnit: item.costo_unit,
                    motivo: "Compra ".concat(String(compra.numero).padStart(5, '0'))
                }, perfil);
            }
            // El último costo sirve para valorizar el stock sin llevar un promedio
            // ponderado, que en un ISP chico nadie mantiene.
            if (Number(item.costo_unit) > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').update({
                    costo_ultimo: item.costo_unit
                }).eq('id', item.articulo_id);
            }
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').update({
            estado: 'recibida',
            recibida_en: new Date().toISOString()
        }).eq('id', compra.id);
        if (error) throw error;
    },
    /**
   * Lo que ya se descontó por esta instalación.
   *
   * El paso de materiales lo consulta al abrir. Sin esto, un técnico que vuelve
   * atrás en el asistente —o que recarga porque se le cortó la señal— vuelve a
   * cargar todo y descuenta el doble. En el asistente de campo eso no es
   * hipotético: pasa cada vez que hay mala cobertura.
   */ async consumosDeTrabajo (param) {
        let { instalacionId, ticketId } = param;
        if (!instalacionId && !ticketId) return [];
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_movimientos').select('*').eq('tipo', 'consumo').order('creado_en');
        q = instalacionId ? q.eq('instalacion_id', instalacionId) : q.eq('ticket_id', ticketId);
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Descuenta el material usado en una instalación.
   *
   * Un movimiento por línea, todos en un solo insert: si la señal se corta a la
   * mitad no puede quedar descontado el cable y no la ONT. Que la base lo
   * acepte o lo rechace entero es la única forma de que el técnico sepa qué
   * pasó sin tener que revisar el stock desde la vereda.
   */ async registrarConsumo (param, perfil) {
        let { instalacionId, ticketId, almacenId, lineas } = param;
        var _perfil_id, _perfil_apellido;
        const comun = {
            tipo: 'consumo',
            almacen_origen_id: almacenId,
            instalacion_id: instalacionId !== null && instalacionId !== void 0 ? instalacionId : null,
            ticket_id: ticketId !== null && ticketId !== void 0 ? ticketId : null,
            // El motivo dice de qué trabajo salió. Es lo que después separa "cuánto
            // material se fue en altas" de "cuánto se fue en garantías", que son dos
            // números muy distintos para quien mira los costos.
            motivo: instalacionId ? 'Usado en la instalación' : 'Usado en la reparación',
            usuario_id: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null,
            usuario_nombre: perfil ? "".concat(perfil.nombre, " ").concat((_perfil_apellido = perfil.apellido) !== null && _perfil_apellido !== void 0 ? _perfil_apellido : '').trim() : null
        };
        const filas = lineas.flatMap((l)=>{
            var _l_equipoIds;
            return ((_l_equipoIds = l.equipoIds) === null || _l_equipoIds === void 0 ? void 0 : _l_equipoIds.length) ? l.equipoIds.map((equipo_id)=>({
                    ...comun,
                    articulo_id: l.articuloId,
                    equipo_id,
                    cantidad: 1
                })) : [
                {
                    ...comun,
                    articulo_id: l.articuloId,
                    cantidad: Number(l.cantidad)
                }
            ];
        });
        if (!filas.length) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(filas);
        if (error) throw error;
    },
    /**
   * Ata los equipos consumidos al abonado recién creado.
   *
   * Corre después de finalizar el alta, y no antes, por una razón simple: el
   * cliente no existe hasta ese momento. Es lo que después responde "¿qué ONT
   * tiene Pérez?" cuando llama diciendo que no le anda, sin tener que buscar por
   * la instalación.
   */ async vincularEquiposACliente (instalacionId, clienteId) {
        if (!instalacionId || !clienteId) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('equipos').update({
            cliente_id: clienteId
        }).eq('instalacion_id', instalacionId);
        // No se propaga: el alta ya se completó y devolver un error acá haría que el
        // técnico crea que falló, y la repita.
        if (error) console.warn('[inventario] no se pudo vincular el equipo al cliente:', error.message);
    },
    /** El almacén del técnico que tiene la sesión abierta. */ async miAlmacen (tecnicoId) {
        if (!tecnicoId) return null;
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('almacenes').select('*').eq('tecnico_id', tecnicoId).maybeSingle();
        return data !== null && data !== void 0 ? data : null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/reemplazos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESTINOS",
    ()=>DESTINOS,
    "MOTIVOS",
    ()=>MOTIVOS,
    "reemplazosApi",
    ()=>reemplazosApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
;
;
const MOTIVOS = {
    quemado: 'Quemada (rayo / subida de tensión)',
    no_enciende: 'No enciende',
    sin_senal: 'No engancha con la OLT',
    wifi_falla: 'El WiFi falla',
    golpeado: 'Golpeada o rota',
    obsoleto: 'Se cambia por una mejor',
    robo_perdida: 'Robo o pérdida',
    otro: 'Otro'
};
const DESTINOS = {
    averiado: {
        label: 'Vuelve averiada',
        ayuda: 'La traigo para revisión o garantía.'
    },
    bodega: {
        label: 'Anda: vuelve a mi almacén',
        ayuda: 'Queda disponible para instalar de nuevo.'
    },
    baja: {
        label: 'Para dar de baja',
        ayuda: 'No se recupera.'
    },
    cliente: {
        label: 'Se la dejé al cliente',
        ayuda: 'El abonado se queda con el equipo viejo.'
    }
};
const reemplazosApi = {
    /**
   * Paso 1: el inventario. Devuelve el id del reemplazo.
   *
   * Los errores de la función salen tal cual: son mensajes escritos para que el
   * técnico los entienda parado en la vereda ("ese equipo no está en tu
   * almacén"), no códigos.
   */ async registrar (param) {
        let { clienteId, serieNueva, motivo, destino, detalle, ticketId, instalacionId } = param;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('reemplazar_equipo_cliente', {
            p_cliente: clienteId,
            p_serie_nueva: serieNueva,
            p_motivo: motivo,
            p_destino: destino !== null && destino !== void 0 ? destino : 'averiado',
            p_detalle: detalle || null,
            p_ticket: ticketId !== null && ticketId !== void 0 ? ticketId : null,
            p_instalacion: instalacionId !== null && instalacionId !== void 0 ? instalacionId : null
        });
        if (error) throw error;
        return data;
    },
    /** Paso 2: la OLT. Solo va el id — puerto, perfil y VLAN los copia el servidor. */ aprovisionar: (reemplazoId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].reemplazos.aprovisionar(reemplazoId),
    /** Lo que quedó a medias. Mientras esté acá, el abonado no tiene servicio. */ async pendientes () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_reemplazos_pendientes').select('*').order('creado_en');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /** El historial de un abonado: qué equipo tuvo antes y por qué se cambió. */ async delCliente (clienteId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('reemplazos_equipo').select('*').eq('cliente_id', clienteId).order('creado_en', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/soporte/CambioDeEquipo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CambioDeEquipo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/replace.js [app-client] (ecmascript) <export default as Replace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/inventario.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reemplazos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function CambioDeEquipo(param) {
    let { ticket, instalacionId, onCambio, onError } = param;
    var _resultado_ficha_manual_pppoe, _resultado_ficha_manual_pppoe1, _resultado_ficha_manual_wifi, _resultado_ficha_manual_wifi1, _DESTINOS_destino;
    _s();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [almacen, setAlmacen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serie, setSerie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [motivo, setMotivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('quemado');
    const [destino, setDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('averiado');
    const [detalle, setDetalle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paso, setPaso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null) // 'inventario' | 'olt'
    ;
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reemplazoId, setReemplazoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fallaOlt, setFallaOlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const enLinea = typeof navigator === 'undefined' || navigator.onLine;
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CambioDeEquipo.useCallback[cargar]": async ()=>{
            if (!(perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id)) return;
            setCargando(true);
            try {
                const mio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].miAlmacen(perfil.tecnico_id);
                setAlmacen(mio);
                if (mio) {
                    const eq = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].equipos({
                        almacenId: mio.id
                    });
                    // Solo ONTs, y solo las que de verdad se pueden instalar. Una averiada
                    // en el listado es un cambio de equipo que termina en otro reclamo.
                    setEquipos(eq.filter({
                        "CambioDeEquipo.useCallback[cargar]": (q)=>q.categoria === 'ont' && q.estado === 'en_stock'
                    }["CambioDeEquipo.useCallback[cargar]"]));
                }
            } catch (err) {
                onError === null || onError === void 0 ? void 0 : onError(err);
            } finally{
                setCargando(false);
            }
        }
    }["CambioDeEquipo.useCallback[cargar]"], [
        perfil,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CambioDeEquipo.useEffect": ()=>{
            if (abierto) cargar();
        }
    }["CambioDeEquipo.useEffect"], [
        abierto,
        cargar
    ]);
    const elegido = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CambioDeEquipo.useMemo[elegido]": ()=>{
            var _equipos_find;
            return (_equipos_find = equipos.find({
                "CambioDeEquipo.useMemo[elegido]": (q)=>String(q.serie) === serie
            }["CambioDeEquipo.useMemo[elegido]"])) !== null && _equipos_find !== void 0 ? _equipos_find : null;
        }
    }["CambioDeEquipo.useMemo[elegido]"], [
        equipos,
        serie
    ]);
    var _ticket_client_id;
    const clienteId = (_ticket_client_id = ticket === null || ticket === void 0 ? void 0 : ticket.client_id) !== null && _ticket_client_id !== void 0 ? _ticket_client_id : null;
    /** Paso 2, aislado: se reintenta solo, sin volver a mover inventario. */ const aprovisionar = async (id)=>{
        setPaso('olt');
        setFallaOlt(null);
        try {
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reemplazosApi"].aprovisionar(id);
            setResultado(r);
            onCambio === null || onCambio === void 0 ? void 0 : onCambio();
            return true;
        } catch (err) {
            setFallaOlt(err);
            return false;
        } finally{
            setPaso(null);
        }
    };
    const confirmar = async ()=>{
        if (!clienteId) {
            onError === null || onError === void 0 ? void 0 : onError(new Error('Este ticket no tiene abonado asociado, así que no se sabe a quién se le cambia el equipo.'));
            return;
        }
        setPaso('inventario');
        try {
            const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reemplazosApi"].registrar({
                clienteId,
                serieNueva: serie,
                motivo,
                destino,
                detalle,
                ticketId: ticket.id,
                instalacionId: instalacionId !== null && instalacionId !== void 0 ? instalacionId : null
            });
            setReemplazoId(id);
            setPaso(null);
            await aprovisionar(id);
        } catch (err) {
            setPaso(null);
            onError === null || onError === void 0 ? void 0 : onError(err);
        }
    };
    const cerrar = ()=>{
        setAbierto(false);
        setResultado(null);
        setFallaOlt(null);
        setReemplazoId(null);
        setSerie('');
        setDetalle('');
    };
    // Sin almacén propio esto no aplica: quien mira el ticket desde la oficina no
    // tiene equipos en la mano. Se dibuja igual el botón para el técnico que
    // todavía no está vinculado, porque el mensaje de por qué no puede es útil.
    if (!(perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id)) return null;
    var _resultado_slot, _resultado_ficha_manual_pppoe_usuario, _resultado_ficha_manual_pppoe_clave, _resultado_ficha_manual_wifi_ssid, _resultado_ficha_manual_wifi_clave;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variante: "secundario",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"],
                onClick: ()=>setAbierto(true),
                children: "Cambiar la ONT"
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: abierto,
                titulo: "Cambiar el equipo del abonado",
                onCerrar: cerrar,
                children: resultado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 18,
                                    className: "mt-0.5 shrink-0 text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-emerald-200",
                                            children: resultado.ya_estaba ? 'Ese cambio ya estaba aprovisionado.' : 'Equipo cambiado y ONT autorizada.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-slate-300",
                                            children: [
                                                "Quedó en el puerto ",
                                                resultado.puerto,
                                                " de la placa ",
                                                (_resultado_slot = resultado.slot) !== null && _resultado_slot !== void 0 ? _resultado_slot : 0,
                                                ", con el mismo perfil y la misma VLAN que tenía la anterior."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        resultado.ip_gestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-slate-400",
                                            children: [
                                                "Gestión: ",
                                                resultado.ip_gestion
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        resultado.aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: resultado.aviso
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 165,
                            columnNumber: 33
                        }, this),
                        resultado.ficha_manual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "t-card-sm p-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-slate-200",
                                    children: "Configurar a mano"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[13px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "VLAN"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "text-slate-200",
                                            children: resultado.ficha_manual.vlan
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "Usuario PPPoE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono text-slate-200",
                                            children: (_resultado_ficha_manual_pppoe_usuario = (_resultado_ficha_manual_pppoe = resultado.ficha_manual.pppoe) === null || _resultado_ficha_manual_pppoe === void 0 ? void 0 : _resultado_ficha_manual_pppoe.usuario) !== null && _resultado_ficha_manual_pppoe_usuario !== void 0 ? _resultado_ficha_manual_pppoe_usuario : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "Clave PPPoE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono text-slate-200",
                                            children: (_resultado_ficha_manual_pppoe_clave = (_resultado_ficha_manual_pppoe1 = resultado.ficha_manual.pppoe) === null || _resultado_ficha_manual_pppoe1 === void 0 ? void 0 : _resultado_ficha_manual_pppoe1.clave) !== null && _resultado_ficha_manual_pppoe_clave !== void 0 ? _resultado_ficha_manual_pppoe_clave : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "SSID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono text-slate-200",
                                            children: (_resultado_ficha_manual_wifi_ssid = (_resultado_ficha_manual_wifi = resultado.ficha_manual.wifi) === null || _resultado_ficha_manual_wifi === void 0 ? void 0 : _resultado_ficha_manual_wifi.ssid) !== null && _resultado_ficha_manual_wifi_ssid !== void 0 ? _resultado_ficha_manual_wifi_ssid : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "Clave WiFi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono text-slate-200",
                                            children: (_resultado_ficha_manual_wifi_clave = (_resultado_ficha_manual_wifi1 = resultado.ficha_manual.wifi) === null || _resultado_ficha_manual_wifi1 === void 0 ? void 0 : _resultado_ficha_manual_wifi1.clave) !== null && _resultado_ficha_manual_wifi_clave !== void 0 ? _resultado_ficha_manual_wifi_clave : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 170,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "primario",
                            onClick: cerrar,
                            className: "w-full",
                            children: "Listo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this) : fallaOlt ? /* Inventario sí, OLT no ---------------------------------------- */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2.5 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 18,
                                    className: "mt-0.5 shrink-0 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-amber-200",
                                            children: fallaOlt.sin_respuesta || fallaOlt.status === 503 ? 'El cambio quedó registrado, pero la OLT no contestó.' : 'El cambio quedó registrado, pero la OLT todavía no está.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-slate-300",
                                            children: fallaOlt.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        fallaOlt.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-slate-400",
                                            children: fallaOlt.hint
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 203,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-slate-400",
                                            children: [
                                                "El equipo ya figura instalado y descontado de tu almacén:",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "no vuelvas a cargar el cambio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                ", se descontaría una segunda ONT. Reintentá acá."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                                    cargando: paso === 'olt',
                                    onClick: ()=>aprovisionar(reemplazoId),
                                    className: "flex-1",
                                    children: "Reintentar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: cerrar,
                                    disabled: paso === 'olt',
                                    children: "Después"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12px] text-slate-500",
                            children: "Si te vas sin resolverlo, el abonado queda sin servicio y el cambio aparece en la cola de la oficina para que lo cierren desde la pantalla de la OLT."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this) : /* El formulario ------------------------------------------------ */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        !enLinea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "Esto necesita internet: hay que autorizar la ONT nueva en la OLT y no se puede dejar para después — el abonado queda sin servicio hasta que se haga."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 235,
                            columnNumber: 15
                        }, this),
                        !clienteId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "Este ticket no está asociado a ningún abonado, así que no se sabe a quién se le cambia el equipo."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, this),
                        cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500",
                            children: "Buscando ONTs en tu almacén…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this) : !almacen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "No tenés un almacén asignado. Pedí que te vinculen uno para poder descontar equipos."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 251,
                            columnNumber: 15
                        }, this) : !equipos.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                "No hay ONTs en stock en tu almacén (",
                                almacen.nombre,
                                "). Pedí la transferencia antes de instalar."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 256,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "ONT nueva",
                            hint: "De tu almacén: ".concat(almacen.nombre, ". Si el equipo que tenés en la mano no está acá, todavía no te lo transfirieron."),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: serie,
                                onChange: (e)=>setSerie(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Elegí la serie…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                        lineNumber: 266,
                                        columnNumber: 19
                                    }, this),
                                    equipos.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: q.serie,
                                            children: [
                                                q.serie,
                                                " — ",
                                                q.articulo
                                            ]
                                        }, q.id, true, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 268,
                                            columnNumber: 21
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                lineNumber: 265,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 261,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Qué le pasó a la anterior",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: motivo,
                                onChange: (e)=>setMotivo(e.target.value),
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOTIVOS"]).map((param)=>{
                                    let [k, v] = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: k,
                                        children: v
                                    }, k, false, {
                                        fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                        lineNumber: 279,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Qué hacés con la anterior",
                            hint: (_DESTINOS_destino = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESTINOS"][destino]) === null || _DESTINOS_destino === void 0 ? void 0 : _DESTINOS_destino.ayuda,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: destino,
                                onChange: (e)=>setDestino(e.target.value),
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESTINOS"]).map((param)=>{
                                    let [k, v] = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: k,
                                        children: v.label
                                    }, k, false, {
                                        fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                        lineNumber: 289,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Detalle",
                            hint: "Opcional. Lo que un compañero necesitaría saber si vuelve a este domicilio.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                rows: 2,
                                value: detalle,
                                onChange: (e)=>setDetalle(e.target.value),
                                placeholder: "Ej: la casa ya tuvo dos equipos quemados, no hay descargador"
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "t-card-sm p-2.5 text-[12px] text-slate-400",
                            children: "La ONT nueva se autoriza en el mismo puerto y con el mismo perfil que tenía la anterior. No hay nada de red que elegir acá."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"],
                                    cargando: !!paso,
                                    onClick: confirmar,
                                    disabled: !serie || !clienteId || !enLinea,
                                    className: "flex-1",
                                    children: paso === 'inventario' ? 'Registrando el cambio…' : paso === 'olt' ? 'Autorizando en la OLT…' : 'Cambiar el equipo'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: cerrar,
                                    disabled: !!paso,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this),
                        elegido && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-[12px] text-slate-500",
                            children: [
                                "Se va a descontar ",
                                elegido.articulo,
                                " · ",
                                elegido.serie
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 331,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CambioDeEquipo, "hRzHzTfjPZ7RoTrEZQVh+qLVPVE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = CambioDeEquipo;
var _c;
__turbopack_context__.k.register(_c, "CambioDeEquipo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/inventario/MaterialUsado.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MaterialUsado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/inventario.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function MaterialUsado(param) {
    let { instalacionId, ticketId, serieSugerida, onError, onRegistrado, compacto = false } = param;
    _s();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [almacen, setAlmacen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [existencias, setExistencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [yaConsumido, setYaConsumido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lineas, setLineas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MaterialUsado.useCallback[recargar]": async ()=>{
            setCargando(true);
            try {
                // Lo ya descontado por este trabajo. Sin esto, un técnico que recarga
                // porque se le cortó la señal vuelve a cargar todo y descuenta el doble.
                // En el celular, en la calle, eso no es hipotético.
                setYaConsumido(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].consumosDeTrabajo({
                    instalacionId,
                    ticketId
                }));
                const mio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].miAlmacen(perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id);
                setAlmacen(mio);
                if (mio) {
                    const [ex, eq] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].existencias(mio.id),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].equipos({
                            almacenId: mio.id
                        })
                    ]);
                    setExistencias(ex);
                    setEquipos(eq.filter({
                        "MaterialUsado.useCallback[recargar]": (q)=>[
                                'en_stock',
                                'asignado'
                            ].includes(q.estado)
                    }["MaterialUsado.useCallback[recargar]"]));
                }
            } catch (err) {
                onError === null || onError === void 0 ? void 0 : onError(err);
            } finally{
                setCargando(false);
            }
        }
    }["MaterialUsado.useCallback[recargar]"], [
        instalacionId,
        ticketId,
        perfil,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MaterialUsado.useEffect": ()=>{
            recargar();
        }
    }["MaterialUsado.useEffect"], [
        recargar
    ]);
    /**
   * Si el equipo leído en el trabajo está en su almacén, se propone solo.
   *
   * Es el olvido más caro: la ONT queda descontada del stock del técnico para
   * siempre y nadie sabe en qué casa terminó.
   */ const sugerido = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MaterialUsado.useMemo[sugerido]": ()=>{
            if (!serieSugerida) return null;
            const sn = String(serieSugerida).trim().toUpperCase();
            var _equipos_find;
            return (_equipos_find = equipos.find({
                "MaterialUsado.useMemo[sugerido]": (q)=>String(q.serie).toUpperCase() === sn
            }["MaterialUsado.useMemo[sugerido]"])) !== null && _equipos_find !== void 0 ? _equipos_find : null;
        }
    }["MaterialUsado.useMemo[sugerido]"], [
        serieSugerida,
        equipos
    ]);
    const yaEnLista = (id)=>lineas.some((l)=>{
            var _l_equipoIds;
            return (_l_equipoIds = l.equipoIds) === null || _l_equipoIds === void 0 ? void 0 : _l_equipoIds.includes(id);
        });
    const yaDescontado = (id)=>yaConsumido.some((c)=>c.equipo_id === id);
    const agregarEquipo = (q)=>setLineas((ls)=>[
                ...ls,
                {
                    clave: "eq-".concat(q.id),
                    articuloId: q.articulo_id,
                    etiqueta: "".concat(q.articulo, " · ").concat(q.serie),
                    equipoIds: [
                        q.id
                    ]
                }
            ]);
    const agregarMaterial = (e)=>setLineas((ls)=>[
                ...ls,
                {
                    clave: "mat-".concat(e.articulo_id),
                    articuloId: e.articulo_id,
                    etiqueta: e.articulo,
                    unidad: e.unidad,
                    disponible: Number(e.cantidad),
                    cantidad: 1
                }
            ]);
    const registrar = async ()=>{
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].registrarConsumo({
                instalacionId,
                ticketId,
                almacenId: almacen.id,
                lineas
            }, perfil);
            setLineas([]);
            await recargar();
            await (onRegistrado === null || onRegistrado === void 0 ? void 0 : onRegistrado());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    };
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {
        texto: "Cargando tu almacén…"
    }, void 0, false, {
        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
        lineNumber: 131,
        columnNumber: 24
    }, this);
    if (!almacen) {
        // En el ticket esto sería ruido: la mayoría de quienes lo abren no son
        // técnicos, y no tiene sentido explicarles cómo vincularse a uno.
        if (compacto) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
            tipo: "alerta",
            children: [
                "Tu usuario no tiene un almacén asignado, así que el material no se puede descontar solo. Podés seguir; el consumo lo va a tener que cargar bodega a mano. Para que se descuente solo, pedile a un administrador que te vincule a un técnico en",
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "Ajustes → Gestión de personal"
                }, void 0, false, {
                    fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                "."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
            lineNumber: 138,
            columnNumber: 7
        }, this);
    }
    const disponiblesMaterial = existencias.filter((e)=>!lineas.some((l)=>l.articuloId === e.articulo_id && !l.equipoIds));
    const disponiblesEquipo = equipos.filter((q)=>!yaEnLista(q.id) && !yaDescontado(q.id));
    const excedido = lineas.some((l)=>{
        var _l_disponible;
        return !l.equipoIds && Number(l.cantidad) > ((_l_disponible = l.disponible) !== null && _l_disponible !== void 0 ? _l_disponible : 0);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            yaConsumido.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center gap-2 text-[13px] font-medium text-emerald-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            " Ya descontado de tu almacén"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: yaConsumido.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[13px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-300",
                                        children: [
                                            c.articulo,
                                            c.serie ? " · ".concat(c.serie) : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tabular-nums text-slate-400",
                                        children: [
                                            Number(c.cantidad).toLocaleString('es-EC'),
                                            " ",
                                            c.unidad
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] text-slate-500",
                        children: "Esto ya salió de tu stock. Si te equivocaste, no lo cargues de nuevo: avisale a bodega para que haga el ajuste."
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            sugerido && !yaEnLista(sugerido.id) && !yaDescontado(sugerido.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: [
                    "El equipo que leíste (",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: sugerido.serie
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 184,
                        columnNumber: 33
                    }, this),
                    ") está en tu almacén.",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "font-medium text-sky-300 underline",
                        onClick: ()=>agregarEquipo(sugerido),
                        children: "Agregarlo al consumo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 183,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    !compacto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-2 text-sm font-medium text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            " Material usado"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    lineas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "rounded-lg border border-dashed border-slate-800 py-5 text-center text-[13px] text-slate-500",
                        children: yaConsumido.length ? 'Agregá más si usaste otra cosa.' : 'Si no usaste material, dejalo vacío.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: lineas.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 t-card-sm p-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "truncate text-[13px] text-slate-100",
                                                children: l.etiqueta
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this),
                                            l.disponible != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-slate-500",
                                                children: [
                                                    "tenés ",
                                                    l.disponible,
                                                    " ",
                                                    l.unidad
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 218,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    l.equipoIds ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: "azul",
                                        children: "1 equipo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 225,
                                        columnNumber: 19
                                    }, this) : // Botones grandes y no solo un campo: esto se usa en la calle,
                                    // con guantes, y el teclado numérico del celular tapa media
                                    // pantalla.
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variante: "fantasma",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"],
                                                onClick: ()=>{
                                                    const ls = [
                                                        ...lineas
                                                    ];
                                                    ls[i] = {
                                                        ...l,
                                                        cantidad: Math.max(1, Number(l.cantidad) - 1)
                                                    };
                                                    setLineas(ls);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: l.cantidad,
                                                onChange: (e)=>{
                                                    const ls = [
                                                        ...lineas
                                                    ];
                                                    ls[i] = {
                                                        ...l,
                                                        cantidad: e.target.value
                                                    };
                                                    setLineas(ls);
                                                },
                                                inputMode: "decimal",
                                                className: "w-16 t-card-sm px-2 py-1.5 text-center text-sm text-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variante: "fantasma",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                                                onClick: ()=>{
                                                    const ls = [
                                                        ...lineas
                                                    ];
                                                    ls[i] = {
                                                        ...l,
                                                        cantidad: Number(l.cantidad) + 1
                                                    };
                                                    setLineas(ls);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 250,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 text-[12px] text-slate-500",
                                                children: l.unidad
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 259,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 230,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variante: "fantasma",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                        onClick: ()=>setLineas(lineas.filter((_, x)=>x !== i))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l.clave, true, {
                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Agregar equipo con serie",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: "",
                            onChange: (e)=>{
                                const q = equipos.find((x)=>x.id === e.target.value);
                                if (q) agregarEquipo(q);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: disponiblesEquipo.length ? '— elegí el equipo —' : 'No te queda ninguno'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                disponiblesEquipo.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: q.id,
                                        children: [
                                            q.articulo,
                                            " · ",
                                            q.serie
                                        ]
                                    }, q.id, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Agregar material",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: "",
                            onChange: (e)=>{
                                const ex = existencias.find((x)=>x.articulo_id === e.target.value);
                                if (ex) agregarMaterial(ex);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: disponiblesMaterial.length ? '— elegí el material —' : 'No te queda material'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                disponiblesMaterial.map((ex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: ex.articulo_id,
                                        children: [
                                            ex.articulo,
                                            " (",
                                            ex.cantidad,
                                            " ",
                                            ex.unidad,
                                            ")"
                                        ]
                                    }, ex.articulo_id, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            excedido && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: "Estás cargando más cantidad de la que tenés asignada. Corregí el número, o pedile a bodega que te transfiera lo que falta."
            }, void 0, false, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 317,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variante: "primario",
                className: "w-full",
                cargando: guardando,
                disabled: guardando || lineas.length === 0 || excedido || lineas.some((l)=>!l.equipoIds && !(Number(l.cantidad) > 0)),
                onClick: registrar,
                children: "Descontar de mi almacén"
            }, void 0, false, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(MaterialUsado, "46VESDmipvknehXww2Sy0ls18qU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = MaterialUsado;
var _c;
__turbopack_context__.k.register(_c, "MaterialUsado");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/crm-pages/TicketPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$TicketFicha$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/soporte/TicketFicha.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$CambioDeEquipo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/soporte/CambioDeEquipo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventario$2f$MaterialUsado$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventario/MaterialUsado.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ConPermiso.jsx [app-client] (ecmascript)");
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
function TicketPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    /**
   * La misma pantalla vive en dos lados.
   *
   * Desde el escritorio se entra por `/soporte/:id`; desde la app de campo, por
   * `/campo/soporte/:id`, que la dibuja dentro del marco del técnico —barra
   * abajo, sin menú lateral—.
   *
   * El componente es el mismo; lo único que cambia es a dónde vuelve el botón
   * de atrás. Sin esto, el técnico tocaba "Tickets" y caía en la bandeja de
   * escritorio, fuera de su app y con todo descuadrado.
   */ const enCampo = pathname.startsWith('/campo');
    const [ticket, setTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TicketPage.useCallback[cargar]": async ()=>{
            const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_tickets').select('*').eq('id', id).maybeSingle();
            if (err) setError(err);
            setTicket(data !== null && data !== void 0 ? data : null);
            setCargando(false);
        }
    }["TicketPage.useCallback[cargar]"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TicketPage.useEffect": ()=>{
            cargar();
        }
    }["TicketPage.useEffect"], [
        cargar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: enCampo ? "/campo/soporte" : "/soporte",
                        className: "inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            " Tickets"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/TicketPage.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            ticket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abrirPdf"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].documentos.ticket(ticket.id)).catch(setError),
                                className: "inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/TicketPage.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    " Imprimir"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            (ticket === null || ticket === void 0 ? void 0 : ticket.client_id) && !enCampo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: "/clientes/".concat(ticket.client_id),
                                className: "inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300",
                                children: [
                                    "Ficha del abonado ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/TicketPage.jsx",
                                        lineNumber: 87,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/TicketPage.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "p-4 text-sm text-slate-500",
                children: "Cargando el ticket…"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                lineNumber: 96,
                columnNumber: 9
            }, this) : !ticket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "p-4 text-sm text-slate-500",
                children: "No existe ese ticket."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                lineNumber: 98,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$TicketFicha$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ticket: ticket,
                        onCambio: cargar,
                        onError: setError
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/TicketPage.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        permiso: "inventario.almacen_propio",
                        envezDe: null,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$CambioDeEquipo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ticket: ticket,
                            onCambio: cargar,
                            onError: setError
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/TicketPage.jsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/TicketPage.jsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        permiso: "inventario.almacen_propio",
                        envezDe: null,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            title: "Material usado en esta reparación",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
                            subtitle: "Sale de tu almacén. Descontarlo acá es lo que evita que a fin de mes el stock no cuadre.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventario$2f$MaterialUsado$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ticketId: ticket.id,
                                onError: setError,
                                compacto: true
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/TicketPage.jsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/TicketPage.jsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/TicketPage.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(TicketPage, "efREKvQ81cY0iFm3uZXwGJ+tY+o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
_c = TicketPage;
var _c;
__turbopack_context__.k.register(_c, "TicketPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/campo/soporte/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$TicketPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/TicketPage.jsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$TicketPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/campo/soporte/[id]/page.jsx",
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
]);

//# sourceMappingURL=_7d41152d._.js.map