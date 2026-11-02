(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/entregas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entregasApi",
    ()=>entregasApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
;
const entregasApi = {
    /** Lo que tiene en su almacén quien pregunta. */ async miAlmacen () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_mi_almacen_equipos').select('*').order('recuperado_en', {
            ascending: false,
            nullsFirst: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /** Las actas que le tocan: las que entregó o las que recibió. */ async mias () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_entregas_inventario').select('*').order('creado_en', {
            ascending: false
        }).limit(50);
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /** Solo las que esperan firma. Es la bandeja de la oficina. */ async pendientes () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_entregas_inventario').select('*').eq('estado', 'pendiente').order('creado_en');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async items (entregaId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('entrega_items').select('*').eq('entrega_id', entregaId);
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Arma el acta y la firma de este lado.
   *
   * La firma va acá y no en un paso aparte porque es el mismo acto: armar la
   * lista de lo que se entrega ES entregarlo. Separarlos dejaría actas a medio
   * firmar dando vueltas.
   */ async crear (equipos, notas, firma) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('crear_entrega_inventario', {
            p_equipos: equipos,
            p_notas: notas || null,
            p_firma: firma || null
        });
        if (error) throw error;
        return data;
    },
    /**
   * Firma la recepción.
   *
   * La firma es la imagen del trazo. Sin ella la función rechaza: un acta
   * recibida sin firma no distingue "me lo entregaron" de "alguien apretó un
   * botón".
   */ async recibir (entregaId) {
        let { firma, almacen, notas } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('recibir_entrega_inventario', {
            p_entrega: entregaId,
            p_firma: firma,
            p_almacen: almacen || null,
            p_notas: notas || null
        });
        if (error) throw error;
        return data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/crm-pages/campo/EntregarEquiposPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntregarEquiposPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-client] (ecmascript) <export default as FileSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-check.js [app-client] (ecmascript) <export default as PackageCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$entregas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/entregas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$FirmaDigital$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/soporte/FirmaDigital.jsx [app-client] (ecmascript)");
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
function EntregarEquiposPage() {
    _s();
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [actas, setActas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [elegidos, setElegidos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EntregarEquiposPage.useState": ()=>new Set()
    }["EntregarEquiposPage.useState"]);
    const [notas, setNotas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [creando, setCreando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hecha, setHecha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [firma, setFirma] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntregarEquiposPage.useCallback[recargar]": async ()=>{
            setCargando(true);
            try {
                const [eq, ac] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$entregas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entregasApi"].miAlmacen(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$entregas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entregasApi"].mias()
                ]);
                setEquipos(eq);
                setActas(ac);
            } catch (err) {
                setError(err);
            } finally{
                setCargando(false);
            }
        }
    }["EntregarEquiposPage.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntregarEquiposPage.useEffect": ()=>{
            recargar();
        }
    }["EntregarEquiposPage.useEffect"], [
        recargar
    ]);
    const alternar = (id)=>setElegidos((s)=>{
            const n = new Set(s);
            n.has(id) ? n.delete(id) : n.add(id);
            return n;
        });
    async function crear() {
        setCreando(true);
        setError(null);
        try {
            const acta = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$entregas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entregasApi"].crear([
                ...elegidos
            ], notas, firma);
            setElegidos(new Set());
            setNotas('');
            setFirma(null);
            setHecha(acta);
            await recargar();
        } catch (err) {
            setError(err);
        } finally{
            setCreando(false);
        }
    }
    const disponibles = equipos.filter((e)=>!e.en_acta);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl space-y-4 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/campo",
                        className: "rounded-lg p-2 text-slate-400 hover:bg-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "flex items-center gap-2 text-base font-semibold text-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                        size: 18,
                                        className: "text-sky-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    "Entregar equipos a la oficina"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: disponibles.length === 0 ? 'No tenés equipos para entregar' : "".concat(disponibles.length, " en tu poder")
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            hecha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: [
                    "Acta ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: [
                            "N° ",
                            hecha.numero
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                        lineNumber: 99,
                        columnNumber: 16
                    }, this),
                    " generada. Mostrala en la oficina: quien la reciba tiene que firmarla, y recién ahí los equipos salen de tu inventario."
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                lineNumber: 105,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Lo que tenés",
                        children: [
                            disponibles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Tu almacén está vacío. Los equipos que recuperes de un abonado aparecen acá hasta que los entregues."
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: disponibles.map((e)=>{
                                    var _e_serie;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex cursor-pointer items-start gap-2 t-panel p-2 transition hover:border-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: elegidos.has(e.id),
                                                onChange: ()=>alternar(e.id),
                                                className: "mt-0.5 accent-sky-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-xs text-slate-100",
                                                                children: (_e_serie = e.serie) !== null && _e_serie !== void 0 ? _e_serie : 'sin serie'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                                lineNumber: 129,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-500",
                                                                children: e.articulo
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                                lineNumber: 130,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 23
                                                    }, this),
                                                    e.recuperado_de && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500",
                                                        children: [
                                                            "Recuperado de ",
                                                            e.recuperado_de,
                                                            e.recuperado_en ? " · ".concat(String(e.recuperado_en).slice(0, 10)) : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                        lineNumber: 133,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, e.id, true, {
                                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            equipos.some((e)=>e.en_acta) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[11px] text-slate-500",
                                children: [
                                    equipos.filter((e)=>e.en_acta).length,
                                    " equipo(s) ya están en un acta esperando firma y no se pueden volver a entregar."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this),
                            elegidos.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 space-y-3 border-t border-slate-800 pt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                        rows: 2,
                                        value: notas,
                                        onChange: (e)=>setNotas(e.target.value),
                                        placeholder: "Notas para quien recibe (opcional)",
                                        className: "text-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-1 text-xs text-slate-400",
                                                children: "Tu firma"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$FirmaDigital$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                valor: firma,
                                                onCambio: setFirma,
                                                alto: 140
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variante: "primario",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__["FileSignature"],
                                        cargando: creando,
                                        onClick: crear,
                                        disabled: !firma,
                                        className: "w-full",
                                        children: firma ? "Generar acta con ".concat(elegidos.size, " ").concat(elegidos.size === 1 ? 'equipo' : 'equipos') : 'Firmá para generar el acta'
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    actas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Mis actas",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: actas.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2 t-panel px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-200",
                                                    children: [
                                                        "Acta N° ",
                                                        a.numero,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-[11px] text-slate-500",
                                                            children: [
                                                                a.equipos,
                                                                " ",
                                                                a.equipos === 1 ? 'equipo' : 'equipos'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                            lineNumber: 197,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: [
                                                        new Date(a.creado_en).toLocaleString('es-EC'),
                                                        a.recibe ? " · recibió ".concat(a.recibe) : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                            lineNumber: 194,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex shrink-0 items-center gap-1.5",
                                            children: [
                                                a.firmada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    color: "verde",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 11,
                                                            className: "mr-1 inline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                            lineNumber: 209,
                                                            columnNumber: 27
                                                        }, this),
                                                        "firmada por los dos"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    color: "ambar",
                                                    children: "esperando la oficina"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                    lineNumber: 213,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variante: "fantasma",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                                    title: "Ver el acta en PDF",
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abrirPdf"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].actas.entrega(a.id))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                            lineNumber: 206,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, a.id, true, {
                                    fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                    lineNumber: 190,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                            lineNumber: 188,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[11px] text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__["PackageCheck"], {
                                size: 12,
                                className: "mr-1 inline"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            "Los equipos salen de tu inventario recién cuando alguien de la oficina firma el acta."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/campo/EntregarEquiposPage.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(EntregarEquiposPage, "EWCZ2VKwM9B/RNlTaqQcDZDXEoY=");
_c = EntregarEquiposPage;
var _c;
__turbopack_context__.k.register(_c, "EntregarEquiposPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/campo/entregar/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$campo$2f$EntregarEquiposPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/campo/EntregarEquiposPage.jsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$campo$2f$EntregarEquiposPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/campo/entregar/page.jsx",
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
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>FileText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("FileText", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
]);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>PackageCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const PackageCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("PackageCheck", [
    [
        "path",
        {
            d: "m16 16 2 2 4-4",
            key: "gfu2re"
        }
    ],
    [
        "path",
        {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }
    ],
    [
        "path",
        {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "12",
            key: "a4e8g8"
        }
    ]
]);
;
 //# sourceMappingURL=package-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package-check.js [app-client] (ecmascript) <export default as PackageCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PackageCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Eraser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Eraser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Eraser", [
    [
        "path",
        {
            d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
            key: "182aya"
        }
    ],
    [
        "path",
        {
            d: "M22 21H7",
            key: "t4ddhn"
        }
    ],
    [
        "path",
        {
            d: "m5 11 9 9",
            key: "1mo9qw"
        }
    ]
]);
;
 //# sourceMappingURL=eraser.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript) <export default as Eraser>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eraser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>PenLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const PenLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("PenLine", [
    [
        "path",
        {
            d: "M12 20h9",
            key: "t2du7b"
        }
    ],
    [
        "path",
        {
            d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
            key: "1ykcvy"
        }
    ]
]);
;
 //# sourceMappingURL=pen-line.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PenLine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e3970d63._.js.map