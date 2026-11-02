(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/clientes/IdentidadCliente.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdentidadCliente
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-check.js [app-client] (ecmascript) <export default as PackageCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/router.js [app-client] (ecmascript) <export default as Router>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/abonados.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cartera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cartera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ConPermiso.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/estados.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
 * Quién es este abonado para el sistema, arriba de todo.
 *
 * Son los cuatro datos que se piden por teléfono antes que cualquier otro: en
 * qué estado está y desde cuándo, por qué router sale, con qué número figura en
 * el contrato y con qué clave entra al portal. Ninguno se edita escribiendo —el
 * estado lo mueven los cortes, el router la instalación, el número lo puso la
 * base y la clave se genera—, y por eso van en un bloque de lectura y no como
 * campos del formulario.
 *
 * La fecha del estado es la que contesta "¿desde cuándo está cortado?", que es
 * lo que decide si al abonado se lo llama o se le va a retirar el equipo.
 */ const COLOR = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_ESTADO"].abonado // lib/estados
;
/**
 * Una fecha SIN hora, como la escribe la base: "2026-09-22".
 *
 * Se parsea con mediodía a propósito. `new Date('2026-09-22')` se interpreta
 * como medianoche UTC, y en Ecuador —cinco horas atrás— eso cae el día
 * anterior: la pausa que vence el 22 se mostraría vencida el 21. Con el
 * mediodía, ningún huso del continente cambia el día.
 */ const soloDia = (f)=>{
    if (!f) return null;
    const d = new Date("".concat(String(f).slice(0, 10), "T12:00:00"));
    if (Number.isNaN(d.getTime())) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(d);
};
const fechaHora = (f)=>{
    if (!f) return null;
    const d = new Date(f);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleString('es-EC', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
function IdentidadCliente(param) {
    let { cliente, promesa, onGuardado, onError } = param;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [verClave, setVerClave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generando, setGenerando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiado, setCopiado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saldarAbierto, setSaldarAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const desde = fechaHora(cliente.estado_desde);
    async function generar() {
        if (cliente.portal_clave && !await confirmar("".concat(cliente.nombre, " ya tiene una contraseña. Generar otra deja la anterior sin efecto: si la está usando, deja de entrar hasta que le dictes la nueva.\n\n¿Generar una nueva?"))) {
            return;
        }
        setGenerando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].portalAdmin.fijarClave(cliente.id);
            setVerClave(true);
            await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
            return r;
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGenerando(false);
        }
    }
    async function copiar() {
        try {
            await navigator.clipboard.writeText(cliente.portal_clave);
            setCopiado(true);
            setTimeout(()=>setCopiado(false), 1500);
        } catch (e) {
            // Sin portapapeles —pasa en http sin certificado— la clave igual se ve.
            setVerClave(true);
        }
    }
    var _COLOR_cliente_estado, _cliente_router;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 grid gap-x-6 gap-y-3 t-panel p-3 sm:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                etiqueta: "Estado",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                color: (_COLOR_cliente_estado = COLOR[cliente.estado]) !== null && _COLOR_cliente_estado !== void 0 ? _COLOR_cliente_estado : 'gris',
                                children: cliente.estado
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            (promesa === null || promesa === void 0 ? void 0 : promesa.estado) === 'activa' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                color: "azul",
                                children: "promesa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 118,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    desde && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-[11px] text-slate-500",
                        children: [
                            cliente.estado === 'activo' ? 'Activo desde' : "".concat(cliente.estado, " desde"),
                            " el ",
                            desde
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    cliente.estado === 'baja' && (cliente.baja_nota || cliente.baja_en) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 t-panel p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-medium text-slate-400",
                                children: [
                                    "Retirado",
                                    cliente.baja_en ? " el ".concat(fechaHora(cliente.baja_en)) : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            cliente.baja_nota && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[11px] leading-snug text-slate-300",
                                children: cliente.baja_nota
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            Number(cliente.deuda_equipo) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-amber-500/40 bg-amber-500/10 p-2 sm:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-amber-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Quedó con un equipo sin devolver"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    " por ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(cliente.deuda_equipo)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                permiso: "clientes.editar",
                                envezDe: null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "secundario",
                                    onClick: ()=>setSaldarAbierto(true),
                                    className: "py-1 text-xs",
                                    children: "Devolvió o pagó"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[11px] text-amber-400/80",
                        children: "No se le factura ni entra a cobranza. Se avisa cuando esta cédula vuelva a aparecer en un prospecto."
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 150,
                columnNumber: 9
            }, this),
            cliente.estado === 'suspendido' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                etiqueta: "Pausado",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-200",
                        children: cliente.suspendido_motivo || 'sin motivo anotado'
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    cliente.suspendido_hasta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-0.5 text-[11px] text-slate-500",
                        children: [
                            "hasta el ",
                            soloDia(cliente.suspendido_hasta)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                etiqueta: "Conectado al router",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 text-sm text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__["Router"], {
                                size: 14,
                                className: "shrink-0 text-slate-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            (_cliente_router = cliente.router) !== null && _cliente_router !== void 0 ? _cliente_router : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: "sin router asignado"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 194,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    cliente.ip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 font-mono text-[11px] text-slate-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnlaceIp"], {
                            ip: cliente.ip
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                etiqueta: "ID",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-mono text-sm text-slate-100",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codigoLargo"])(cliente.codigo) || '—'
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-[11px] text-slate-500",
                        children: cliente.numero_orden ? "El del contrato. Vino de la orden N° ".concat(cliente.numero_orden, ".") : 'El del contrato. No cambia nunca.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                etiqueta: "Contraseña",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    permiso: "clientes.editar",
                    envezDe: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-slate-500",
                        children: "Sin permiso para verla."
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 217,
                        columnNumber: 20
                    }, void 0),
                    children: cliente.portal_clave ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded bg-slate-900 px-2 py-1 font-mono text-sm text-slate-100",
                                children: verClave ? cliente.portal_clave : '••••••••••'
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                icon: verClave ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
                                title: verClave ? 'Ocultar' : 'Ver la contraseña',
                                onClick: ()=>setVerClave((v)=>!v)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"],
                                title: copiado ? 'Copiada' : 'Copiar',
                                onClick: copiar
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"],
                                title: "Generar otra",
                                cargando: generando,
                                onClick: generar
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "secundario",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"],
                                cargando: generando,
                                onClick: generar,
                                className: "py-1 text-xs",
                                children: "Generar contraseña"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-slate-500",
                                children: cliente.portal_clave_puesta ? 'La cambió él desde el portal: solo la sabe él.' : 'Todavía no tiene. Se genera y se le dicta.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                        lineNumber: 245,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SaldarDeuda, {
                abierto: saldarAbierto,
                cliente: cliente,
                onCerrar: ()=>setSaldarAbierto(false),
                onListo: onGuardado,
                onError: onError
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(IdentidadCliente, "I1sJw8tfxgP1UM/DhtF7xbRUXrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c = IdentidadCliente;
// ---------------------------------------------------------------------------
/**
 * Saldar la deuda del equipo que no volvió.
 *
 * ── Por qué pregunta QUÉ pasó y no solo confirma ──
 *
 * Porque son dos hechos distintos con consecuencias distintas. Si el abonado
 * trajo la ONT, hay un aparato que tiene que entrar al inventario y alguien
 * debería revisarlo. Si la pagó, entró plata y no hay equipo. Y si es un
 * arreglo comercial —se le perdona para que vuelva a contratar— eso es una
 * decisión de alguien, con nombre.
 *
 * Guardar solo "saldada" haría que dentro de un año las tres se lean igual.
 */ const MOTIVOS_SALDO = [
    {
        clave: 'devolvio',
        label: 'Devolvió el equipo',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__["PackageCheck"],
        nota: 'Lo trajo a la oficina.',
        aviso: 'El equipo hay que darlo de alta en el inventario aparte: esto solo borra la deuda.'
    },
    {
        clave: 'pago',
        label: 'Pagó el valor',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        nota: 'En efectivo, en la oficina.',
        aviso: 'El cobro se registra en Pagos como cualquier otro: esto solo borra la deuda.'
    },
    {
        clave: 'otro',
        label: 'Otro arreglo',
        icono: null,
        nota: '',
        aviso: 'Escribe qué se acordó y con quién. Es lo que va a explicar esta decisión más adelante.'
    }
];
function SaldarDeuda(param) {
    let { abierto, cliente, onCerrar, onListo, onError } = param;
    _s1();
    const [motivo, setMotivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('devolvio');
    const [nota, setNota] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOTIVOS_SALDO[0].nota);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SaldarDeuda.useEffect": ()=>{
            if (abierto) {
                setMotivo('devolvio');
                setNota(MOTIVOS_SALDO[0].nota);
            }
        }
    }["SaldarDeuda.useEffect"], [
        abierto
    ]);
    const elegir = (m)=>{
        setMotivo(m.clave);
        // Se reemplaza la nota solo si era la sugerida: lo que la persona escribió
        // no se pisa por tocar otro botón.
        setNota((n)=>MOTIVOS_SALDO.some((x)=>x.nota === n) || !n.trim() ? m.nota : n);
    };
    const elegido = MOTIVOS_SALDO.find((m)=>m.clave === motivo);
    async function guardar() {
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cartera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carteraApi"].saldarDeudaEquipo(cliente.id, "".concat(elegido.label, ": ").concat(nota).trim());
            onCerrar();
            await (onListo === null || onListo === void 0 ? void 0 : onListo());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        abierto: abierto,
        titulo: "Saldar la deuda del equipo",
        onCerrar: onCerrar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "t-panel p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-400",
                            children: cliente.nombre
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-0.5 text-2xl font-semibold text-amber-400",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(cliente.deuda_equipo)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] text-slate-500",
                            children: "Es el valor del equipo que no volvió. Al saldarla, deja de avisarse cuando esta cédula aparezca en un prospecto nuevo."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-1.5 text-xs text-slate-400",
                            children: "¿Qué pasó?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1.5 sm:grid-cols-3",
                            children: MOTIVOS_SALDO.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>elegir(m),
                                    className: "flex items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs transition ".concat(motivo === m.clave ? 'bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30' : 'bg-slate-800 text-slate-400 hover:text-slate-200'),
                                    children: [
                                        m.icono && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icono, {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                            lineNumber: 378,
                                            columnNumber: 29
                                        }, this),
                                        m.label
                                    ]
                                }, m.clave, true, {
                                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-xs text-slate-400",
                    children: [
                        "Detalle",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            rows: 2,
                            value: nota,
                            onChange: (e)=>setNota(e.target.value),
                            placeholder: "Quién lo trajo, con quién se acordó…",
                            className: "mt-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this),
                (elegido === null || elegido === void 0 ? void 0 : elegido.aviso) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: elegido.aviso
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                    lineNumber: 396,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] text-slate-500",
                    children: "Queda registrado en la auditoría con tu nombre y la fecha: es plata, y alguien decidió borrarla."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "secundario",
                            onClick: onCerrar,
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "primario",
                            onClick: guardar,
                            cargando: guardando,
                            disabled: !nota.trim(),
                            children: [
                                "Saldar ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(cliente.deuda_equipo)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
            lineNumber: 352,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
        lineNumber: 351,
        columnNumber: 5
    }, this);
}
_s1(SaldarDeuda, "jHCuD8RTu7aXiitvmcutqBTqh1k=");
_c1 = SaldarDeuda;
const Dato = (param)=>{
    let { etiqueta, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[11px] uppercase tracking-wide text-slate-500",
                children: etiqueta
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 423,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-0.5",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
                lineNumber: 424,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/IdentidadCliente.jsx",
        lineNumber: 422,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Dato;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "IdentidadCliente");
__turbopack_context__.k.register(_c1, "SaldarDeuda");
__turbopack_context__.k.register(_c2, "Dato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/FichaResumen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FichaResumen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-client] (ecmascript) <export default as PiggyBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$IdentidadCliente$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/clientes/IdentidadCliente.jsx [app-client] (ecmascript)");
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
/**
 * Datos del cliente y su situación de cuenta.
 *
 * Es la pantalla que se abre cuando alguien llama: a la izquierda lo que hay
 * que corregir o dictar, a la derecha lo que hay que contestar —cuánto debe,
 * cuándo paga, si está por cortarse—.
 */ const fecha = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])("".concat(String(f).slice(0, 10), "T12:00:00")) : '—';
/** Campos que se pueden editar desde acá. El resto vive en su propia pantalla. */ const EDITABLES = [
    'nombre',
    'tipo_identificacion',
    'identificacion',
    'direccion',
    'referencia_servicio',
    'zona',
    'telefono',
    'telefono_movil',
    'email',
    'pasarela',
    'codigo_pago',
    'factura_electronica',
    // El estado y el precio no se editan acá: el estado lo mueven los cortes y
    // las instalaciones, y el precio vive en la pestaña Servicio junto al plan
    // que lo determina. Tenerlos en dos lugares llevaba a que se pisaran.
    'dia_facturacion',
    'latitud',
    'longitud',
    'notas'
];
function FichaResumen(param) {
    let { cliente, onGuardado, onError } = param;
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FichaResumen.useState": ()=>Object.fromEntries(EDITABLES.map({
                "FichaResumen.useState": (c)=>{
                    var _cliente_c;
                    return [
                        c,
                        (_cliente_c = cliente[c]) !== null && _cliente_c !== void 0 ? _cliente_c : ''
                    ];
                }
            }["FichaResumen.useState"]))
    }["FichaResumen.useState"]);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guardado, setGuardado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Lo que necesitan las tarjetas del resumen y no viene en la ficha.
    const [diaMaximo, setDiaMaximo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [promesa, setPromesa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aFavor, setAFavor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FichaResumen.useEffect": ()=>{
            let vigente = true;
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('sri_config').select('dia_maximo_pago').limit(1).maybeSingle(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('promesas_pago').select('*').eq('client_id', cliente.id).eq('estado', 'activa').maybeSingle(),
                // Cobros que no se aplicaron a ninguna factura: plata del abonado que
                // está a su favor hasta que se le impute a una.
                //
                // Se mira `factura_id`, no `document_id`: este último es el comprobante
                // del SRI, y un cobro imputado a una factura sin comprobante fiscal —lo
                // normal en quien no pide factura— no es un saldo a favor.
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('pagos').select('monto').eq('client_id', cliente.id).is('factura_id', null).eq('anulado', false),
                // Y lo que pagó de más sobre facturas que ya estaban cubiertas: si trae
                // $50 por una factura de $34.50, esos $15.50 también son suyos.
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_facturas').select('saldo').eq('client_id', cliente.id)
            ]).then({
                "FichaResumen.useEffect": (param)=>{
                    let [cfg, prom, abonos, facturas] = param;
                    var _cfg_data;
                    if (!vigente) return;
                    var _cfg_data_dia_maximo_pago;
                    setDiaMaximo((_cfg_data_dia_maximo_pago = (_cfg_data = cfg.data) === null || _cfg_data === void 0 ? void 0 : _cfg_data.dia_maximo_pago) !== null && _cfg_data_dia_maximo_pago !== void 0 ? _cfg_data_dia_maximo_pago : 5);
                    var _prom_data;
                    setPromesa((_prom_data = prom.data) !== null && _prom_data !== void 0 ? _prom_data : null);
                    var _abonos_data;
                    const sinImputar = ((_abonos_data = abonos.data) !== null && _abonos_data !== void 0 ? _abonos_data : []).reduce({
                        "FichaResumen.useEffect.sinImputar": (s, p)=>{
                            var _p_monto;
                            return s + Number((_p_monto = p.monto) !== null && _p_monto !== void 0 ? _p_monto : 0);
                        }
                    }["FichaResumen.useEffect.sinImputar"], 0);
                    var _facturas_data;
                    const sobrepagos = ((_facturas_data = facturas.data) !== null && _facturas_data !== void 0 ? _facturas_data : []).reduce({
                        "FichaResumen.useEffect.sobrepagos": (s, f)=>{
                            var _f_saldo;
                            return s + Math.max(0, -Number((_f_saldo = f.saldo) !== null && _f_saldo !== void 0 ? _f_saldo : 0));
                        }
                    }["FichaResumen.useEffect.sobrepagos"], 0);
                    setAFavor(Math.round((sinImputar + sobrepagos) * 100) / 100);
                }
            }["FichaResumen.useEffect"]);
            return ({
                "FichaResumen.useEffect": ()=>{
                    vigente = false;
                }
            })["FichaResumen.useEffect"];
        }
    }["FichaResumen.useEffect"], [
        cliente.id
    ]);
    const set = (campo)=>(e)=>{
            setGuardado(false);
            setForm((f)=>({
                    ...f,
                    [campo]: e.target.value
                }));
        };
    async function guardar(e) {
        e.preventDefault();
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            // Los numéricos vacíos van como NULL: '' rompe una columna numérica.
            //
            // Solo se tocan los que este formulario edita. Convertir uno que no está
            // en el formulario daría NaN, que viaja como null y borraría el dato —el
            // precio mensual, por ejemplo, que ahora se edita en Servicio—.
            const cambios = {
                ...form
            };
            for (const campo of [
                'dia_facturacion',
                'latitud',
                'longitud'
            ]){
                if (!(campo in cambios)) continue;
                cambios[campo] = cambios[campo] === '' ? null : Number(cambios[campo]);
            }
            for (const campo of EDITABLES){
                if (cambios[campo] === '') cambios[campo] = null;
            }
            // El interruptor es booleano: false no es "vacío".
            cambios.factura_electronica = Boolean(form.factura_electronica);
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('clientes').update(cambios).eq('id', cliente.id);
            if (error) throw error;
            setGuardado(true);
            await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    /** Toma la ubicación del navegador: más rápido que buscar las coordenadas. */ function ubicacionActual() {
        if (!navigator.geolocation) {
            return onError === null || onError === void 0 ? void 0 : onError(new Error('Este navegador no puede dar la ubicación.'));
        }
        navigator.geolocation.getCurrentPosition((pos)=>setForm((f)=>({
                    ...f,
                    latitud: pos.coords.latitude.toFixed(7),
                    longitud: pos.coords.longitude.toFixed(7)
                })), (err)=>onError === null || onError === void 0 ? void 0 : onError(new Error("No se pudo obtener la ubicación: ".concat(err.message))));
    }
    var _form_referencia_servicio, _form_dia_facturacion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 lg:grid-cols-[1.6fr_1fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Datos del cliente",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$IdentidadCliente$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        cliente: cliente,
                        promesa: promesa,
                        onGuardado: onGuardado,
                        onError: onError
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: guardar,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "nombre",
                                        label: "Cliente",
                                        className: "sm:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ej.: Juan Pérez",
                                            value: form.nombre,
                                            onChange: set('nombre'),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "tipo_identificacion",
                                        hint: "Cédula, RUC o pasaporte; define cómo sale la factura.",
                                        label: "Tipo de identificación",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: form.tipo_identificacion || '05',
                                            onChange: set('tipo_identificacion'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "05",
                                                    children: "Cédula"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "04",
                                                    children: "RUC"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "06",
                                                    children: "Pasaporte"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "07",
                                                    children: "Consumidor final"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "08",
                                                    children: "Identificación del exterior"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "identificacion",
                                        label: "N° de identificación",
                                        hint: "Sin esto no se le puede facturar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ej.: 0912345678",
                                            value: form.identificacion,
                                            onChange: set('identificacion')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "direccion",
                                        label: "Dirección principal",
                                        className: "sm:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ej.: Av. 9 de Octubre 123 y Boyacá",
                                            value: form.direccion,
                                            onChange: set('direccion')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "referencia_servicio",
                                        label: "Referencia del servicio",
                                        hint: "Casa, Local, Bodega. Para distinguirlo por dentro: no sale en la factura.",
                                        className: "sm:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: (_form_referencia_servicio = form.referencia_servicio) !== null && _form_referencia_servicio !== void 0 ? _form_referencia_servicio : '',
                                            onChange: set('referencia_servicio'),
                                            placeholder: "Casa",
                                            maxLength: 40
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "zona",
                                        label: "Zona",
                                        hint: "Con la que se filtra el listado y se arman las visitas",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: form.zona,
                                            onChange: set('zona'),
                                            placeholder: "La Maná, Centro…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "telefono",
                                        label: "Teléfono fijo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ej.: 042345678",
                                            value: form.telefono,
                                            onChange: set('telefono')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "telefono_movil",
                                        label: "Teléfono móvil",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ej.: 0991234567",
                                            value: form.telefono_movil,
                                            onChange: set('telefono_movil')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "email",
                                        label: "E-mail",
                                        hint: "Ahí llegan la factura y el RIDE",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ej.: cliente@correo.com",
                                            type: "email",
                                            value: form.email,
                                            onChange: set('email')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "pasarela",
                                        label: "Pasarela de cobro",
                                        hint: "Dónde paga",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: form.pasarela,
                                                onChange: set('pasarela'),
                                                list: "pasarelas-conocidas",
                                                placeholder: "Cuentadigital, ventanilla…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                id: "pasarelas-conocidas",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cuentadigital"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 251,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cobro Digital"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "PayPhone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 253,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Datafast"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Payu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 255,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Deuna"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Transferencia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Ventanilla"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 258,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "codigo_pago",
                                        label: "N° de código de pago",
                                        hint: "El que usa para pagar ahí",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ej.: 000123",
                                            value: form.codigo_pago,
                                            onChange: set('codigo_pago')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "dia_facturacion",
                                        label: "Día de facturación",
                                        hint: "Día del mes en que se le emite",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: (_form_dia_facturacion = form.dia_facturacion) !== null && _form_dia_facturacion !== void 0 ? _form_dia_facturacion : '',
                                            onChange: set('dia_facturacion'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "— sin definir —"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 267,
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
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 269,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        label: "Ubicación",
                                        hint: "Latitud y longitud: es lo que lo pone en el mapa",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: form.latitud,
                                                    onChange: set('latitud'),
                                                    placeholder: "-0.9376",
                                                    className: "min-w-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: form.longitud,
                                                    onChange: set('longitud'),
                                                    placeholder: "-79.2270",
                                                    className: "min-w-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variante: "secundario",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                                    onClick: ubicacionActual,
                                                    title: "Usar la ubicación de este dispositivo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:col-span-2 t-panel p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex cursor-pointer items-center gap-2 text-sm text-slate-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: Boolean(form.factura_electronica),
                                                        onChange: (e)=>{
                                                            setGuardado(false);
                                                            setForm((f)=>({
                                                                    ...f,
                                                                    factura_electronica: e.target.checked
                                                                }));
                                                        },
                                                        className: "accent-sky-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Emitirle factura electrónica"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[11px] text-slate-500",
                                                children: form.factura_electronica ? 'Cada cobro suyo entra a Facturación → Por facturar, para revisarlo y enviarlo al SRI al cierre.' : 'Solo se le entrega el recibo del cobro. No se le emite comprobante electrónico.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this),
                                            form.factura_electronica && !form.identificacion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[11px] text-amber-400",
                                                children: "Falta la identificación: el SRI no acepta el comprobante sin cédula o RUC."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "notas",
                                        label: "Notas",
                                        className: "sm:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            placeholder: "Ej.: Llamar antes de ir",
                                            rows: 3,
                                            value: form.notas,
                                            onChange: set('notas')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            guardado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                                children: "Datos guardados."
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                lineNumber: 333,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
                                    cargando: guardando,
                                    children: "Guardar datos"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResumenCuenta, {
                cliente: cliente,
                diaMaximo: diaMaximo,
                promesa: promesa,
                aFavor: aFavor
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                lineNumber: 343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(FichaResumen, "zeLyvFBy8O9N6E7uX3y9i7dP4t8=");
_c = FichaResumen;
// ---------------------------------------------------------------------------
/**
 * Fecha de corte de un mes.
 *
 * Es el día máximo de pago configurado, corrido tantos meses como haga falta.
 * `mes + n` con día fijo lo resuelve Date sin tablas de días por mes.
 */ function fechaCorte(diaMaximo) {
    let mesesDesplazado = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, hoy = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new Date();
    return new Date(hoy.getFullYear(), hoy.getMonth() + mesesDesplazado, diaMaximo, 12);
}
/** Lo que hay que poder contestar sin buscar en otra pantalla. */ function ResumenCuenta(param) {
    let { cliente, diaMaximo, promesa, aFavor } = param;
    const debe = Number(cliente.saldo) > 0;
    const hoy = new Date();
    // El último corte que ya pasó y el próximo que viene. Si hoy todavía no
    // llegó al día de corte de este mes, el vencido es el del mes anterior.
    const corteDeEsteMes = fechaCorte(diaMaximo, 0, hoy);
    const yaPaso = hoy > corteDeEsteMes;
    const vencido = yaPaso ? corteDeEsteMes : fechaCorte(diaMaximo, -1, hoy);
    const proximo = yaPaso ? fechaCorte(diaMaximo, 1, hoy) : corteDeEsteMes;
    // Una promesa activa corre el corte hasta la fecha acordada.
    const conPromesa = promesa && promesa.estado === 'activa';
    const tarjetas = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
            color: 'bg-sky-600',
            titulo: cliente.dia_facturacion ? "".concat(String(cliente.dia_facturacion).padStart(2, '0'), " de cada mes") : 'Sin definir',
            sub: 'Día de pago'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            color: debe ? 'bg-red-600' : 'bg-emerald-600',
            titulo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(cliente.saldo),
            sub: debe ? "Deuda actual · ".concat(cliente.facturas_pendientes, " factura(s)") : 'Sin deuda pendiente'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"],
            color: aFavor > 0 ? 'bg-fuchsia-600' : 'bg-slate-700',
            titulo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(aFavor),
            sub: aFavor > 0 ? 'Saldos a favor · abonos sin factura' : 'Saldos'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
            color: 'bg-slate-700',
            titulo: fecha(cliente.ultimo_pago),
            sub: 'Último pago'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            color: 'bg-violet-600',
            titulo: fecha(proximo.toISOString().slice(0, 10)),
            // No hay módulo de SMS: decir la fecha sin aclararlo haría creer que el
            // aviso salió.
            sub: 'Aviso SMS · sin configurar'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"],
            color: debe && yaPaso ? 'bg-red-600' : 'bg-slate-700',
            titulo: fecha(vencido.toISOString().slice(0, 10)),
            sub: debe && yaPaso ? 'Corte de servicio · mes vencido' : 'Corte de servicio / mes vencido'
        },
        {
            icon: conPromesa ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"],
            color: conPromesa ? 'bg-amber-600' : 'bg-orange-600',
            titulo: conPromesa ? fecha(promesa.fecha_promesa) : fecha(proximo.toISOString().slice(0, 10)),
            sub: conPromesa ? "Próximo corte · prorrogado por promesa".concat(promesa.monto ? " de ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(promesa.monto)) : '') : 'Próximo corte de servicio'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
            color: cliente.estado === 'activo' ? 'bg-emerald-600' : 'bg-amber-600',
            titulo: cliente.estado,
            sub: 'Estado del servicio'
        }
    ];
    var _cliente_contrato_numero;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Resumen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: tarjetas.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 rounded-lg ".concat(t.color, " px-3 py-2.5 text-white"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(t.icon, {
                                    size: 20,
                                    className: "shrink-0 opacity-90"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                    lineNumber: 445,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "truncate text-sm font-semibold capitalize",
                                            children: t.titulo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "truncate text-[11px] opacity-80",
                                            children: t.sub
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                            lineNumber: 441,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Contrato vigente",
                children: cliente.contrato_id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1 text-sm text-slate-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "N° ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "text-slate-100",
                                    children: (_cliente_contrato_numero = cliente.contrato_numero) !== null && _cliente_contrato_numero !== void 0 ? _cliente_contrato_numero : 'sin número'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                    lineNumber: 459,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Precio pactado:",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "text-slate-100",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(cliente.contrato_precio)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this),
                                " por mes"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                    lineNumber: 457,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: [
                        "No tiene contrato cargado. Se crea desde la pestaña ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Contratos"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                            lineNumber: 468,
                            columnNumber: 65
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                    lineNumber: 467,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaResumen.jsx",
                lineNumber: 455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaResumen.jsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
}
_c1 = ResumenCuenta;
var _c, _c1;
__turbopack_context__.k.register(_c, "FichaResumen");
__turbopack_context__.k.register(_c1, "ResumenCuenta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/Trasladar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Trasladar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traslados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/traslados.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/campo.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function Trasladar(param) {
    let { cliente, onError, onGuardado } = param;
    _s();
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [enCurso, setEnCurso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tecnicos, setTecnicos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hecho, setHecho] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        direccion: '',
        referencia: '',
        latitud: '',
        longitud: '',
        fecha: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoyISO"])(),
        motivo: '',
        tecnicoId: ''
    });
    const set = (k)=>(e)=>setForm((f)=>({
                    ...f,
                    [k]: e.target.value
                }));
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Trasladar.useCallback[cargar]": async ()=>{
            try {
                const [t, tec] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traslados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trasladosApi"].abierto(cliente.id),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('tecnicos').select('id, nombre').eq('activo', true).order('nombre')
                ]);
                setEnCurso(t);
                var _tec_data;
                setTecnicos((_tec_data = tec.data) !== null && _tec_data !== void 0 ? _tec_data : []);
            } catch (err) {
                // Que falte la migración 94 no puede romper la ficha del abonado.
                if ((err === null || err === void 0 ? void 0 : err.code) !== '42P01') onError === null || onError === void 0 ? void 0 : onError(err);
            }
        }
    }["Trasladar.useCallback[cargar]"], [
        cliente.id,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Trasladar.useEffect": ()=>{
            cargar();
        }
    }["Trasladar.useEffect"], [
        cargar
    ]);
    const ubicarme = ()=>{
        if (!navigator.geolocation) {
            onError === null || onError === void 0 ? void 0 : onError(new Error('Este dispositivo no da ubicación.'));
            return;
        }
        navigator.geolocation.getCurrentPosition((p)=>setForm((f)=>({
                    ...f,
                    latitud: p.coords.latitude.toFixed(7),
                    longitud: p.coords.longitude.toFixed(7)
                })), // Nunca se inventa una coordenada: si el navegador no la da, se dice.
        (err)=>onError === null || onError === void 0 ? void 0 : onError(new Error("No se pudo tomar la ubicación: ".concat(err.message))), {
            enableHighAccuracy: true,
            timeout: 10000
        });
    };
    const confirmar = async ()=>{
        setGuardando(true);
        try {
            const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traslados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trasladosApi"].iniciar({
                clienteId: cliente.id,
                ...form
            });
            const abiertoAhora = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traslados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trasladosApi"].abierto(cliente.id);
            setEnCurso(abiertoAhora);
            setHecho(abiertoAhora !== null && abiertoAhora !== void 0 ? abiertoAhora : {
                id
            });
            await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    };
    const cerrar = ()=>{
        setAbierto(false);
        setHecho(null);
        setForm((f)=>({
                ...f,
                direccion: '',
                referencia: '',
                latitud: '',
                longitud: '',
                motivo: ''
            }));
    };
    var _hecho_olt_anterior, _cliente_direccion, _cliente_ip;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            enCurso ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                to: enCurso.instalacion_id ? "/clientes/instalaciones/".concat(enCurso.instalacion_id) : "/clientes/instalaciones",
                className: "inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-200 hover:bg-amber-500/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    " Traslado en curso",
                    enCurso.orden_numero ? " · orden #".concat(enCurso.orden_numero) : '',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                lineNumber: 112,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variante: "secundario",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                onClick: ()=>setAbierto(true),
                children: "Trasladar"
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: abierto,
                titulo: "Trasladar el servicio a otro domicilio",
                onCerrar: cerrar,
                children: hecho ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: [
                                "Traslado abierto y visita agendada",
                                hecho.orden_numero ? " con la orden #".concat(hecho.orden_numero) : '',
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        hecho.sn_anterior ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 17,
                                        className: "mt-0.5 shrink-0 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-amber-200",
                                                children: "Queda una ONT por dar de baja"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-slate-300",
                                                children: [
                                                    "La ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: hecho.sn_anterior
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                                        lineNumber: 145,
                                                        columnNumber: 26
                                                    }, this),
                                                    " sigue autorizada en ",
                                                    (_hecho_olt_anterior = hecho.olt_anterior) !== null && _hecho_olt_anterior !== void 0 ? _hecho_olt_anterior : 'su OLT',
                                                    hecho.puerto_anterior != null ? ", puerto ".concat(hecho.puerto_anterior) : '',
                                                    hecho.vlan_anterior != null ? ", VLAN ".concat(hecho.vlan_anterior) : '',
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-slate-400",
                                                children: "Si el abonado se lleva el mismo equipo, no se va a poder autorizar en el domicilio nuevo hasta que se dé de baja esta. Ya quedó en la cola del tablero GPON: nadie tiene que avisar por teléfono."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                                lineNumber: 149,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                lineNumber: 140,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 139,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-400",
                            children: "Este abonado no tiene ninguna ONT enlazada, así que no hay nada que dar de baja."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 158,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "primario",
                            onClick: cerrar,
                            className: "w-full",
                            children: "Listo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-400",
                            children: [
                                "Se agenda la visita al domicilio nuevo y se guarda dónde está conectado hoy. El servicio ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "no se corta"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                    lineNumber: 171,
                                    columnNumber: 24
                                }, this),
                                ": sigue andando en ",
                                (_cliente_direccion = cliente.direccion) !== null && _cliente_direccion !== void 0 ? _cliente_direccion : 'la dirección actual',
                                ' ',
                                "hasta que se haga la mudanza."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "direccion",
                            label: "Dirección nueva",
                            hint: "A dónde va el técnico.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: form.direccion,
                                onChange: set('direccion'),
                                placeholder: "Av. Amazonas 456 y Segunda"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "referencia",
                            label: "Referencia",
                            hint: "Opcional. Lo que evita la llamada de '¿dónde es?'.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: form.referencia,
                                onChange: set('referencia'),
                                placeholder: "Casa verde, frente a la escuela"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "latitud",
                                    label: "Latitud",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: form.latitud,
                                        onChange: set('latitud'),
                                        placeholder: "-0.9345"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "longitud",
                                    label: "Longitud",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: form.longitud,
                                        onChange: set('longitud'),
                                        placeholder: "-79.2210"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "fantasma",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                            onClick: ubicarme,
                            children: "Usar la ubicación de este dispositivo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "fecha",
                                    hint: "Cuándo va el técnico.",
                                    label: "Fecha de la visita",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "date",
                                        value: form.fecha,
                                        onChange: set('fecha')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Técnico",
                                    hint: "Se puede asignar después.",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: form.tecnicoId,
                                        onChange: set('tecnicoId'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— sin asignar —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this),
                                            tecnicos.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: t.id,
                                                    children: t.nombre
                                                }, t.id, false, {
                                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "motivo",
                            label: "Motivo",
                            hint: "Opcional.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                rows: 2,
                                value: form.motivo,
                                onChange: set('motivo'),
                                placeholder: "Se muda por trabajo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "t-card-sm p-2.5 text-[12px] text-slate-400",
                            children: "No se pregunta puerto PON, VLAN ni segmento: salen solos de dónde aparezca la ONT cuando el técnico mida en el domicilio nuevo. Vale igual si el sector nuevo cuelga de otra OLT."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this),
                        cliente.tipo_ip === 'fija' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                "Este abonado tiene ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "IP fija"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                    lineNumber: 239,
                                    columnNumber: 36
                                }, this),
                                " (",
                                (_cliente_ip = cliente.ip) !== null && _cliente_ip !== void 0 ? _cliente_ip : 'sin dirección cargada',
                                "). Esa dirección es de la subred del sector actual y no se muda con él: en el domicilio nuevo hay que asignarle una del segmento que le toque. El asistente la propone en el paso de red, y sin eso no va a dejar cerrar la orden."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 238,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                                    cargando: guardando,
                                    disabled: !form.direccion.trim(),
                                    onClick: confirmar,
                                    className: "flex-1",
                                    children: "Abrir el traslado"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: cerrar,
                                    disabled: guardando,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/Trasladar.jsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/Trasladar.jsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/Trasladar.jsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Trasladar, "csK4uDKpD3rPk7xhz3CjQpwQfKQ=");
_c = Trasladar;
var _c;
__turbopack_context__.k.register(_c, "Trasladar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/ResumenServicio.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ESTADO_ONU",
    ()=>ESTADO_ONU,
    "UMBRAL_RX",
    ()=>UMBRAL_RX,
    "default",
    ()=>ResumenServicio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$Trasladar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/clientes/Trasladar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tecnico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tecnico.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Lo que se ve al entrar a Servicio: el servicio en una fila y el estado de la
 * fibra.
 *
 * El formulario completo aparece recién al tocar Editar. Entrar a la ficha de
 * un abonado para mirar su IP no debería enfrentar a veinte campos editables,
 * donde cualquier tecla suelta cambia un dato de la red.
 */ const mbps = (kbps)=>kbps ? "".concat((kbps / 1000).toFixed(kbps % 1000 === 0 ? 0 : 1), " Mbps") : '—';
const fecha = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])("".concat(String(f).slice(0, 10), "T12:00:00")) : '—';
const UMBRAL_RX = -27;
const ESTADO_ONU = {
    online: {
        label: 'Online',
        corto: 'Online',
        color: 'verde'
    },
    offline: {
        label: 'Offline · sin conexión',
        corto: 'Offline',
        color: 'gris'
    },
    los: {
        label: 'LOS · sin señal en la fibra',
        corto: 'LOS',
        color: 'rojo'
    },
    power_off: {
        label: 'Sin energía en el domicilio',
        corto: 'Sin energía',
        color: 'ambar'
    },
    unknown: {
        label: 'Desconocido · nunca se midió',
        corto: 'Desconocido',
        color: 'gris'
    }
};
/** Qué hacer con cada causa, dicho para quien atiende el reclamo. */ const QUE_HACER = {
    power_off: 'Se le fue la luz: la ONU avisó antes de apagarse. No hace falta ir.',
    los: 'Sin señal óptica: hay que revisar la fibra o el empalme.',
    desactivada: 'La dieron de baja desde la OLT.',
    reinicio: 'La ONU se reinició.',
    otra: 'Causa no reconocida: mira el texto que devolvió la OLT.'
};
function ResumenServicio(param) {
    let { cliente, onu, midiendo, onMedir, onEditar, onEliminar, onError, onGuardado } = param;
    var _onu_estado, _ESTADO_ONU_;
    const estado = (_ESTADO_ONU_ = ESTADO_ONU[(_onu_estado = onu === null || onu === void 0 ? void 0 : onu.estado) !== null && _onu_estado !== void 0 ? _onu_estado : cliente.onu_estado]) !== null && _ESTADO_ONU_ !== void 0 ? _ESTADO_ONU_ : ESTADO_ONU.unknown;
    var _onu_rx_power_dbm;
    const rx = (_onu_rx_power_dbm = onu === null || onu === void 0 ? void 0 : onu.rx_power_dbm) !== null && _onu_rx_power_dbm !== void 0 ? _onu_rx_power_dbm : cliente.rx_power_dbm;
    const tx = onu === null || onu === void 0 ? void 0 : onu.tx_power_dbm;
    const rxBajo = rx != null && Number(rx) < UMBRAL_RX;
    var _cliente_plan, _ref, _cliente_precio_mensual, _cliente_router, _cliente_direccion, _cliente_nap, _cliente_conectado_a, _cliente_ip_administracion, _QUE_HACER_onu_causa_caida, _onu_sn, _ref1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Servicio de internet",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$Trasladar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            cliente: cliente,
                            onError: onError,
                            onGuardado: onGuardado
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
                            onClick: onEditar,
                            title: "Editar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "fantasma",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                            title: "Quitar el servicio de este abonado",
                            onClick: onEliminar
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, void 0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-slate-800 text-left text-[11px] uppercase tracking-wide text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2",
                                                children: "Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2",
                                                children: "Costo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2",
                                                children: "IP"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2",
                                                children: "Router"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2",
                                                children: "Instalado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2",
                                                children: "Dirección"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2",
                                                children: "Estado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2 font-medium text-slate-100",
                                                children: [
                                                    (_ref = (_cliente_plan = cliente.plan) !== null && _cliente_plan !== void 0 ? _cliente_plan : cliente.velocidad_cruda) !== null && _ref !== void 0 ? _ref : '—',
                                                    cliente.bajada_kbps ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[11px] font-normal text-slate-500",
                                                        children: [
                                                            mbps(cliente.bajada_kbps),
                                                            " / ",
                                                            mbps(cliente.subida_kbps)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dinero"])((_cliente_precio_mensual = cliente.precio_mensual) !== null && _cliente_precio_mensual !== void 0 ? _cliente_precio_mensual : cliente.plan_precio)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2 font-mono text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnlaceIp"], {
                                                        ip: cliente.ip
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    cliente.tipo_conexion && cliente.tipo_conexion !== 'ip' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[11px] uppercase text-sky-400",
                                                        children: cliente.tipo_conexion
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2 text-xs",
                                                children: (_cliente_router = cliente.router) !== null && _cliente_router !== void 0 ? _cliente_router : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2 text-xs",
                                                children: fecha(cliente.fecha_instalacion)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2 text-xs",
                                                children: (_cliente_direccion = cliente.direccion) !== null && _cliente_direccion !== void 0 ? _cliente_direccion : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    color: estado.color,
                                                    children: estado.corto
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid gap-2 text-xs text-slate-400 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Caja NAP: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-200",
                                        children: (_cliente_nap = cliente.nap) !== null && _cliente_nap !== void 0 ? _cliente_nap : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                        lineNumber: 136,
                                        columnNumber: 23
                                    }, this),
                                    cliente.puerto_nap ? " · puerto ".concat(cliente.puerto_nap) : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Conectado a: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-200",
                                        children: (_cliente_conectado_a = cliente.conectado_a) !== null && _cliente_conectado_a !== void 0 ? _cliente_conectado_a : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                        lineNumber: 140,
                                        columnNumber: 26
                                    }, this),
                                    cliente.tipo_antena ? " · ".concat(cliente.tipo_antena) : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tecnico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoloTecnico"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "IP de administración:",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-slate-200",
                                            children: (_cliente_ip_administracion = cliente.ip_administracion) !== null && _cliente_ip_administracion !== void 0 ? _cliente_ip_administracion : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Estado de la ONU",
                subtitle: "Potencia óptica y señal",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
                actions: (onu === null || onu === void 0 ? void 0 : onu.olt_id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tecnico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoloTecnico"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "secundario",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                        cargando: midiendo,
                        onClick: onMedir,
                        children: "Medir ahora"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                        lineNumber: 159,
                        columnNumber: 15
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                    lineNumber: 158,
                    columnNumber: 13
                }, void 0) : null,
                children: cliente.onu_serial || onu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "t-panel p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-500",
                                            children: "Estado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                color: estado.color,
                                                children: estado.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        (onu === null || onu === void 0 ? void 0 : onu.causa_caida) && onu.estado !== 'online' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[11px] text-slate-400",
                                            children: (_QUE_HACER_onu_causa_caida = QUE_HACER[onu.causa_caida]) !== null && _QUE_HACER_onu_causa_caida !== void 0 ? _QUE_HACER_onu_causa_caida : ''
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tecnico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoloTecnico"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "t-panel p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: "Rx de la ONU"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-lg font-semibold ".concat(rxBajo ? 'text-red-400' : 'text-emerald-400'),
                                                    children: rx != null ? "".concat(Number(rx).toFixed(2), " dBm") : '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: "lo que le llega al abonado"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "t-panel p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: "Tx de la ONU"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-lg font-semibold text-slate-200",
                                                    children: tx != null ? "".concat(Number(tx).toFixed(2), " dBm") : '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: "lo que recibe la OLT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "t-panel p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: "Serial / distancia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 break-all font-mono text-xs text-slate-200",
                                                    children: (_ref1 = (_onu_sn = onu === null || onu === void 0 ? void 0 : onu.sn) !== null && _onu_sn !== void 0 ? _onu_sn : cliente.onu_serial) !== null && _ref1 !== void 0 ? _ref1 : '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: (onu === null || onu === void 0 ? void 0 : onu.distancia_m) != null ? "".concat(onu.distancia_m, " m") : 'sin medir'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this),
                        rxBajo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                "La potencia está por debajo de ",
                                UMBRAL_RX,
                                " dBm: la fibra trabaja al límite y el servicio se va a cortar solo. Conviene revisar el empalme antes de que el abonado llame."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-500",
                            children: [
                                "Última lectura:",
                                ' ',
                                (onu === null || onu === void 0 ? void 0 : onu.ultima_lectura) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(onu.ultima_lectura) : 'nunca',
                                (onu === null || onu === void 0 ? void 0 : onu.puerto) != null ? " · puerto ".concat(onu.frame, "/").concat(onu.slot, "/").concat(onu.puerto, ", ONT ").concat(onu.onu_index) : '',
                                (onu === null || onu === void 0 ? void 0 : onu.ultima_caida) ? " · última caída ".concat(onu.ultima_caida) : '',
                                (onu === null || onu === void 0 ? void 0 : onu.causa_caida_cruda) ? " (".concat(onu.causa_caida_cruda, ")") : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: [
                        "No tiene ONU asociada. Si es un abonado de fibra, se vincula al registrarla desde",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/onus",
                            className: "text-sky-400 hover:underline",
                            children: "ONUs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                    lineNumber: 235,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/ResumenServicio.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = ResumenServicio;
var _c;
__turbopack_context__.k.register(_c, "ResumenServicio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/ConfigFacturacion.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfigFacturacion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/accessibility.js [app-client] (ecmascript) <export default as Accessibility>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandCoins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand-coins.js [app-client] (ecmascript) <export default as HandCoins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
/**
 * Cómo se le factura a este abonado.
 *
 * Son las reglas que usa la generación mensual y el corte por mora. Viven en el
 * cliente y no en un ajuste global porque conviven modalidades distintas: el
 * que paga adelantado, el institucional que paga a mes vencido y el que tiene
 * un acuerdo de más días de gracia.
 */ const CAMPOS = [
    'modalidad_pago',
    'dia_facturacion',
    'dia_generar_factura',
    'tipo_impuesto',
    'dias_gracia',
    'aplicar_corte',
    'cortar_tras_meses',
    'descuento_tipo',
    'descuento_porcentaje',
    'descuento_documento',
    'promo_porcentaje',
    'promo_meses',
    'promo_desde',
    'descuento_fijo',
    'descuento_fijo_motivo'
];
/**
 * El día del mes en que le corresponde el corte.
 *
 * Es el día de facturación —que también es el vencimiento— más los días de
 * gracia. Se muestra al lado del campo porque "3 días de gracia" no le dice a
 * nadie cuándo se corta, y "se corta el 9" sí.
 *
 * Cuando la suma se pasa del mes se dice así, en vez de mostrar un día 38: el
 * mes siguiente no tiene el mismo largo todos los meses y prometer una fecha
 * exacta sería mentir.
 */ function diaDeCorte(param) {
    let { dia_facturacion: dia, dias_gracia: gracia } = param;
    const d = Number(dia) || 1;
    const g = Number(gracia) || 0;
    if (g === 0) return "".concat(d, ", el mismo día");
    const suma = d + g;
    return suma <= 28 ? String(suma) : "".concat(g, " días después");
}
const hoy = ()=>new Date().toISOString().slice(0, 10);
/** Cuando termina la promocion: la fecha de inicio mas los meses pactados. */ function finDePromo(desde, meses) {
    if (!desde || !(Number(meses) > 0)) return null;
    const d = new Date("".concat(String(desde).slice(0, 10), "T12:00:00"));
    d.setMonth(d.getMonth() + Number(meses));
    return d;
}
const fechaLarga = (d)=>d === null || d === void 0 ? void 0 : d.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
function ConfigFacturacion(param) {
    let { cliente, onGuardado, onError } = param;
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ConfigFacturacion.useState": ()=>Object.fromEntries(CAMPOS.map({
                "ConfigFacturacion.useState": (c)=>{
                    var _cliente_c;
                    return [
                        c,
                        (_cliente_c = cliente[c]) !== null && _cliente_c !== void 0 ? _cliente_c : ''
                    ];
                }
            }["ConfigFacturacion.useState"]))
    }["ConfigFacturacion.useState"]);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guardado, setGuardado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const set = (campo)=>(e)=>{
            setGuardado(false);
            const valor = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
            setForm((f)=>({
                    ...f,
                    [campo]: valor
                }));
        };
    async function guardar(e) {
        e.preventDefault();
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            var _form_descuento_documento, _form_descuento_fijo_motivo;
            var _form_cortar_tras_meses;
            const cambios = {
                modalidad_pago: form.modalidad_pago || 'prepago',
                tipo_impuesto: form.tipo_impuesto || 'incluido',
                dia_facturacion: form.dia_facturacion === '' ? null : Number(form.dia_facturacion),
                dia_generar_factura: form.dia_generar_factura === '' ? null : Number(form.dia_generar_factura),
                dias_gracia: Number(form.dias_gracia) || 0,
                cortar_tras_meses: Number((_form_cortar_tras_meses = form.cortar_tras_meses) !== null && _form_cortar_tras_meses !== void 0 ? _form_cortar_tras_meses : 1),
                descuento_tipo: form.descuento_tipo || null,
                descuento_porcentaje: form.descuento_tipo ? Number(form.descuento_porcentaje) || 50 : null,
                descuento_documento: form.descuento_tipo ? ((_form_descuento_documento = form.descuento_documento) === null || _form_descuento_documento === void 0 ? void 0 : _form_descuento_documento.trim()) || null : null,
                // El de ley manda: cargar los dos dejaria en duda cual se aplica.
                promo_porcentaje: form.descuento_tipo ? null : Number(form.promo_porcentaje) || null,
                promo_meses: form.descuento_tipo ? null : Number(form.promo_meses) || null,
                promo_desde: form.descuento_tipo ? null : form.promo_desde || null,
                // Mismo criterio: si tiene el de ley, el acuerdo en plata no se guarda.
                descuento_fijo: form.descuento_tipo ? null : Number(form.descuento_fijo) || null,
                descuento_fijo_motivo: form.descuento_tipo || !Number(form.descuento_fijo) ? null : ((_form_descuento_fijo_motivo = form.descuento_fijo_motivo) === null || _form_descuento_fijo_motivo === void 0 ? void 0 : _form_descuento_fijo_motivo.trim()) || null
            };
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('clientes').update(cambios).eq('id', cliente.id);
            if (error) throw error;
            setGuardado(true);
            await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    const dias = Array.from({
        length: 28
    }, (_, i)=>i + 1);
    var _cliente_precio_mensual, _ref;
    const precio = Number((_ref = (_cliente_precio_mensual = cliente.precio_mensual) !== null && _cliente_precio_mensual !== void 0 ? _cliente_precio_mensual : cliente.plan_precio) !== null && _ref !== void 0 ? _ref : 0);
    const conDescuento = (pct)=>precio * (1 - (Number(pct) || 0) / 100);
    const fin = finDePromo(form.promo_desde, form.promo_meses);
    const vencida = fin ? new Date() >= fin : false;
    var _form_dia_facturacion, _form_dia_generar_factura, _form_dias_gracia, _form_cortar_tras_meses, _form_descuento_tipo, _form_descuento_porcentaje, _form_descuento_documento, _form_promo_porcentaje, _form_promo_meses, _form_promo_desde, _form_descuento_fijo, _form_descuento_fijo_motivo, _form_cortar_tras_meses1, _form_cortar_tras_meses2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        title: "Configuración de facturación",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: guardar,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "modalidad_pago",
                            label: "Modalidad",
                            hint: form.modalidad_pago === 'postpago' ? 'Se cobra el mes ya consumido.' : 'Se cobra el mes por adelantado.',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: form.modalidad_pago || 'prepago',
                                onChange: set('modalidad_pago'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "prepago",
                                        children: "Prepago (adelantado)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "postpago",
                                        children: "Postpago (mes vencido)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "dia_facturacion",
                            label: "Día de pago",
                            hint: "Vencimiento de la factura",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: (_form_dia_facturacion = form.dia_facturacion) !== null && _form_dia_facturacion !== void 0 ? _form_dia_facturacion : '',
                                onChange: set('dia_facturacion'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "— sin definir —"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    dias.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: d,
                                            children: [
                                                String(d).padStart(2, '0'),
                                                " de cada mes"
                                            ]
                                        }, d, true, {
                                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "dia_generar_factura",
                            label: "Día de crear la factura",
                            hint: "Antes del día de pago, para que llegue con tiempo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: (_form_dia_generar_factura = form.dia_generar_factura) !== null && _form_dia_generar_factura !== void 0 ? _form_dia_generar_factura : '',
                                onChange: set('dia_generar_factura'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "— el mismo día de pago —"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    dias.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: d,
                                            children: [
                                                String(d).padStart(2, '0'),
                                                " de cada mes"
                                            ]
                                        }, d, true, {
                                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "tipo_impuesto",
                            label: "Tipo de impuesto",
                            hint: form.tipo_impuesto === 'mas' ? 'Al precio del servicio se le suma el IVA.' : form.tipo_impuesto === 'ninguno' ? 'No se le calcula impuesto.' : 'El precio del servicio ya incluye el IVA.',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: form.tipo_impuesto || 'incluido',
                                onChange: set('tipo_impuesto'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "incluido",
                                        children: "Impuesto incluido"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "mas",
                                        children: "Más impuestos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ninguno",
                                        children: "Ninguno"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "dias_gracia",
                            label: "Días de gracia",
                            hint: form.dia_facturacion ? "Vence el ".concat(form.dia_facturacion, " · se corta el ").concat(diaDeCorte(form)) : 'Después del vencimiento, antes de cortar',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Ej.: 3",
                                type: "number",
                                min: 0,
                                // Un año. Es donde vive el plazo del que paga cada varios meses,
                                // desde que los meses dejaron de decidir el momento del corte.
                                max: 365,
                                value: (_form_dias_gracia = form.dias_gracia) !== null && _form_dias_gracia !== void 0 ? _form_dias_gracia : 0,
                                onChange: set('dias_gracia')
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Se le corta por mora",
                            hint: "El que no se corta nunca: gratis, institucional",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: ((_form_cortar_tras_meses = form.cortar_tras_meses) !== null && _form_cortar_tras_meses !== void 0 ? _form_cortar_tras_meses : 1) > 0 ? 'si' : 'no',
                                onChange: (e)=>{
                                    setGuardado(false);
                                    setForm((f)=>({
                                            ...f,
                                            cortar_tras_meses: e.target.value === 'si' ? 1 : 0
                                        }));
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "si",
                                        children: "Sí, en su fecha de corte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "no",
                                        children: "No se corta nunca"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-3 t-card-sm p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "flex items-center gap-2 text-sm font-semibold text-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__["Accessibility"], {
                                    size: 16,
                                    className: "text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                "Descuento por grupo prioritario"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-400",
                            children: "Tercera edad y discapacidad tienen derecho por ley al 50% sobre el servicio. No vence: se aplica a cada factura mientras esté cargado."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "descuento_tipo",
                                    hint: "Grupo prioritario con descuento de ley (tercera edad, discapacidad).",
                                    label: "Grupo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: (_form_descuento_tipo = form.descuento_tipo) !== null && _form_descuento_tipo !== void 0 ? _form_descuento_tipo : '',
                                        onChange: (e)=>{
                                            const tipo = e.target.value;
                                            setGuardado(false);
                                            setForm((f)=>({
                                                    ...f,
                                                    descuento_tipo: tipo,
                                                    // Es el porcentaje de la norma: se propone y se puede cambiar.
                                                    descuento_porcentaje: tipo && !f.descuento_porcentaje ? 50 : f.descuento_porcentaje
                                                }));
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— no aplica —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "tercera_edad",
                                                children: "Tercera edad"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "discapacidad",
                                                children: "Discapacidad"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "descuento_porcentaje",
                                    label: "Porcentaje %",
                                    hint: "Por norma, 50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: 50",
                                        type: "number",
                                        min: 0,
                                        max: 100,
                                        step: "0.01",
                                        value: (_form_descuento_porcentaje = form.descuento_porcentaje) !== null && _form_descuento_porcentaje !== void 0 ? _form_descuento_porcentaje : '',
                                        onChange: set('descuento_porcentaje'),
                                        disabled: !form.descuento_tipo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "descuento_documento",
                                    label: "Documento de respaldo",
                                    hint: "Carnet del CONADIS, cédula",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: (_form_descuento_documento = form.descuento_documento) !== null && _form_descuento_documento !== void 0 ? _form_descuento_documento : '',
                                        onChange: set('descuento_documento'),
                                        disabled: !form.descuento_tipo,
                                        placeholder: "N° del documento"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        form.descuento_tipo && precio > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: [
                                "Se le factura ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(conDescuento(form.descuento_porcentaje))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 294,
                                    columnNumber: 29
                                }, this),
                                " en vez de",
                                ' ',
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(precio),
                                " — ",
                                Number(form.descuento_porcentaje) || 0,
                                "% de descuento, sin vencimiento."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-3 t-card-sm p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "flex items-center gap-2 text-sm font-semibold text-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                    size: 16,
                                    className: "text-fuchsia-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                "Promoción por tiempo limitado"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-400",
                            children: "Para el abonado que no pertenece a ningún grupo prioritario. Al cumplirse los meses pactados vuelve solo al precio de lista, sin que nadie tenga que acordarse."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "promo_porcentaje",
                                    label: "Descuento %",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: 10",
                                        type: "number",
                                        min: 0,
                                        max: 100,
                                        step: "0.01",
                                        value: (_form_promo_porcentaje = form.promo_porcentaje) !== null && _form_promo_porcentaje !== void 0 ? _form_promo_porcentaje : '',
                                        onChange: (e)=>{
                                            setGuardado(false);
                                            const v = e.target.value;
                                            setForm((f)=>({
                                                    ...f,
                                                    promo_porcentaje: v,
                                                    // Sin fecha de inicio la promoción no corre: se propone hoy.
                                                    promo_desde: v && !f.promo_desde ? hoy() : f.promo_desde,
                                                    promo_meses: v && !f.promo_meses ? 3 : f.promo_meses
                                                }));
                                        },
                                        disabled: Boolean(form.descuento_tipo)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "promo_meses",
                                    label: "Meses que dura",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: 3",
                                        type: "number",
                                        min: 1,
                                        max: 36,
                                        value: (_form_promo_meses = form.promo_meses) !== null && _form_promo_meses !== void 0 ? _form_promo_meses : '',
                                        onChange: set('promo_meses'),
                                        disabled: Boolean(form.descuento_tipo)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "promo_desde",
                                    label: "Desde",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "date",
                                        value: String((_form_promo_desde = form.promo_desde) !== null && _form_promo_desde !== void 0 ? _form_promo_desde : '').slice(0, 10),
                                        onChange: set('promo_desde'),
                                        disabled: Boolean(form.descuento_tipo)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        form.descuento_tipo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                "No se acumula con el descuento de ley. Este abonado ya tiene el de",
                                ' ',
                                form.descuento_tipo === 'tercera_edad' ? 'tercera edad' : 'discapacidad',
                                ", que es el que se le aplica."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this) : fin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: vencida ? 'alerta' : 'info',
                            children: vencida ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "La promoción terminó el ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: fechaLarga(fin)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 367,
                                        columnNumber: 45
                                    }, this),
                                    ": se está facturando el precio de lista, ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(precio),
                                    "."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Paga ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(conDescuento(form.promo_porcentaje))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 372,
                                        columnNumber: 26
                                    }, this),
                                    " en vez de",
                                    ' ',
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(precio),
                                    " hasta el ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: fechaLarga(fin)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 373,
                                        columnNumber: 47
                                    }, this),
                                    ". Desde esa fecha se le factura ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(precio),
                                    "."
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 364,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-3 t-card-sm p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "flex items-center gap-2 text-sm font-semibold text-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandCoins$3e$__["HandCoins"], {
                                    size: 16,
                                    className: "text-sky-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, this),
                                "Descuento acordado, en dólares"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-400",
                            children: [
                                "Para el acuerdo puntual: el abonado que vuelve y pide que se le respete lo que pagaba antes. Se carga ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "cuánto se le baja del total"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 390,
                                    columnNumber: 29
                                }, this),
                                " —con IVA ya incluido— y se le factura así ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "todos los meses"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 391,
                                    columnNumber: 25
                                }, this),
                                ", sin fecha de fin, hasta que alguien lo saque."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "descuento_fijo",
                                    label: "Se le baja $",
                                    hint: "Del total, IVA incluido",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 0,
                                        step: "0.01",
                                        placeholder: "0.10",
                                        value: (_form_descuento_fijo = form.descuento_fijo) !== null && _form_descuento_fijo !== void 0 ? _form_descuento_fijo : '',
                                        onChange: set('descuento_fijo'),
                                        disabled: Boolean(form.descuento_tipo)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "descuento_fijo_motivo",
                                    className: "sm:col-span-2",
                                    label: "Por qué",
                                    hint: "Dentro de seis meses es lo único que lo justifica",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Cliente que regresa, se le respeta el precio anterior",
                                        maxLength: 160,
                                        value: (_form_descuento_fijo_motivo = form.descuento_fijo_motivo) !== null && _form_descuento_fijo_motivo !== void 0 ? _form_descuento_fijo_motivo : '',
                                        onChange: set('descuento_fijo_motivo'),
                                        disabled: Boolean(form.descuento_tipo)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 394,
                            columnNumber: 11
                        }, this),
                        form.descuento_tipo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                "No se acumula con el descuento de ley. Este abonado ya tiene el de",
                                ' ',
                                form.descuento_tipo === 'tercera_edad' ? 'tercera edad' : 'discapacidad',
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, this) : Number(form.descuento_fijo) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "info",
                            children: [
                                "Se le factura ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(precio - Number(form.descuento_fijo))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 429,
                                    columnNumber: 29
                                }, this),
                                " en vez de",
                                ' ',
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(precio),
                                ", con IVA y descuento incluidos. Son",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(Number(form.descuento_fijo) * 12)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this),
                                " al año que se dejan de facturar.",
                                Number(form.promo_porcentaje) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Manda sobre la promoción:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                                            lineNumber: 435,
                                            columnNumber: 19
                                        }, this),
                                        " mientras esté cargado, es este el que se aplica."
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                            lineNumber: 428,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                Number((_form_cortar_tras_meses1 = form.cortar_tras_meses) !== null && _form_cortar_tras_meses1 !== void 0 ? _form_cortar_tras_meses1 : 1) === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    tipo: "alerta",
                    children: "Este abonado queda fuera de los cortes automáticos: va a seguir conectado aunque deba. Es lo correcto para el servicio gratis o el institucional."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                    lineNumber: 443,
                    columnNumber: 11
                }, this),
                Number((_form_cortar_tras_meses2 = form.cortar_tras_meses) !== null && _form_cortar_tras_meses2 !== void 0 ? _form_cortar_tras_meses2 : 1) > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: [
                        "Se le corta recién a los ",
                        form.cortar_tras_meses,
                        " meses de atraso. Hasta entonces sigue conectado debiendo, que es lo que corresponde a quien paga cada varios meses."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                    lineNumber: 450,
                    columnNumber: 11
                }, this),
                guardado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: "Configuración guardada."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                    lineNumber: 456,
                    columnNumber: 22
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        variante: "primario",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
                        cargando: guardando,
                        children: "Guardar configuración"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/clientes/ConfigFacturacion.jsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(ConfigFacturacion, "Vsg4QwbG3/4F1NyWW3Votnxc5x4=");
_c = ConfigFacturacion;
var _c;
__turbopack_context__.k.register(_c, "ConfigFacturacion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/ConfigAvisos.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfigAvisos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell-off.js [app-client] (ecmascript) <export default as BellOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/avisos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
/**
 * Qué avisos quiere recibir este abonado.
 *
 * ── Por qué esto vive en el abonado y no en un ajuste general ──
 *
 * Porque las molestias son personales. Hay quien agradece el recordatorio y hay
 * quien lo vive como acoso; hay quien quiere que le escriban solo por WhatsApp,
 * y hay quien pide el último aviso un día antes del corte y no cinco días
 * después de vencer.
 *
 * Un ISP que no puede respetar eso termina con abonados pidiendo que los saquen
 * de todo — y ahí pierde también el aviso que sí servía.
 *
 * ── Lo que estas opciones NO cambian ──
 *
 * El corte. Apagar los avisos es dejar de molestar, no dejar de cobrar. Está
 * dicho en la pantalla porque es exactamente lo que alguien podría entender mal
 * al desactivarlos.
 */ const CANALES = [
    {
        valor: 'whatsapp',
        titulo: 'WhatsApp',
        campo: 'telefono_movil'
    },
    {
        valor: 'sms',
        titulo: 'SMS',
        campo: 'telefono_movil'
    },
    {
        valor: 'email',
        titulo: 'Correo',
        campo: 'email'
    },
    {
        valor: 'telegram',
        titulo: 'Telegram',
        campo: 'telegram_chat_id'
    }
];
const AVISOS = [
    {
        campo: 'aviso_dias_1',
        titulo: 'Primer aviso',
        para: 'Antes de que venza. Todavía no debe nada.'
    },
    {
        campo: 'aviso_dias_2',
        titulo: 'Segundo aviso',
        para: 'Ya vencido, con saldo pendiente.'
    },
    {
        campo: 'aviso_dias_3',
        titulo: 'Último aviso',
        para: 'El de antes del corte. Pon un día antes si quieres que le llegue justo a tiempo.'
    }
];
function ConfigAvisos(param) {
    let { cliente, onGuardado, onError } = param;
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ConfigAvisos.useState": ()=>{
            var _cliente_avisos_canales, _cliente_aviso_factura_canales, _cliente_aviso_pantalla_dias, _cliente_aviso_dias_1, _cliente_aviso_dias_2, _cliente_aviso_dias_3;
            return {
                avisos_activos: cliente.avisos_activos !== false,
                avisos_pantalla: cliente.avisos_pantalla !== false,
                // `null` es "por los que se pueda". Se conserva la diferencia con la lista
                // vacía, que es "por ninguno".
                avisos_canales: (_cliente_avisos_canales = cliente.avisos_canales) !== null && _cliente_avisos_canales !== void 0 ? _cliente_avisos_canales : null,
                aviso_factura: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinacionDe"])((_cliente_aviso_factura_canales = cliente.aviso_factura_canales) !== null && _cliente_aviso_factura_canales !== void 0 ? _cliente_aviso_factura_canales : null),
                aviso_pantalla_dias: (_cliente_aviso_pantalla_dias = cliente.aviso_pantalla_dias) !== null && _cliente_aviso_pantalla_dias !== void 0 ? _cliente_aviso_pantalla_dias : '',
                aviso_dias_1: (_cliente_aviso_dias_1 = cliente.aviso_dias_1) !== null && _cliente_aviso_dias_1 !== void 0 ? _cliente_aviso_dias_1 : '',
                aviso_dias_2: (_cliente_aviso_dias_2 = cliente.aviso_dias_2) !== null && _cliente_aviso_dias_2 !== void 0 ? _cliente_aviso_dias_2 : '',
                aviso_dias_3: (_cliente_aviso_dias_3 = cliente.aviso_dias_3) !== null && _cliente_aviso_dias_3 !== void 0 ? _cliente_aviso_dias_3 : ''
            };
        }
    }["ConfigAvisos.useState"]);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guardado, setGuardado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /**
   * Los días generales, para poder decir a qué equivale "usar el valor general".
   *
   * Sin esto, esa opción es una incógnita: alguien la elige sin saber si son
   * tres días antes o cinco después, que es justo lo que se está decidiendo.
   */ const [generales, setGenerales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfigAvisos.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('config_avisos_pago').select('dias_aviso_1, dias_aviso_2, dias_aviso_3').eq('id', 1).maybeSingle().then({
                "ConfigAvisos.useEffect": (param)=>{
                    let { data } = param;
                    return setGenerales({
                        aviso_dias_1: data === null || data === void 0 ? void 0 : data.dias_aviso_1,
                        aviso_dias_2: data === null || data === void 0 ? void 0 : data.dias_aviso_2,
                        aviso_dias_3: data === null || data === void 0 ? void 0 : data.dias_aviso_3
                    });
                }
            }["ConfigAvisos.useEffect"]);
        }
    }["ConfigAvisos.useEffect"], []);
    const set = (campo, v)=>{
        setGuardado(false);
        setForm((f)=>({
                ...f,
                [campo]: v
            }));
    };
    /** Marcar o desmarcar un canal, respetando que `null` significa "todos". */ const alternarCanal = (canal)=>{
        var _form_avisos_canales;
        const actuales = (_form_avisos_canales = form.avisos_canales) !== null && _form_avisos_canales !== void 0 ? _form_avisos_canales : CANALES.map((c)=>c.valor);
        const nuevos = actuales.includes(canal) ? actuales.filter((c)=>c !== canal) : [
            ...actuales,
            canal
        ];
        // Si quedaron todos marcados, vuelve a `null`: es más honesto guardar "los
        // que se pueda" que una lista congelada que no incluiría un canal futuro.
        set('avisos_canales', nuevos.length === CANALES.length ? null : nuevos);
    };
    const marcado = (canal)=>!form.avisos_canales || form.avisos_canales.includes(canal);
    /** Si el abonado tiene cargado el dato que ese canal necesita. */ const alcanzable = (c)=>!!cliente[c.campo];
    async function guardar(e) {
        e.preventDefault();
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            const numero = (v)=>v === '' || v == null ? null : Number(v);
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('clientes').update({
                avisos_activos: form.avisos_activos,
                avisos_pantalla: form.avisos_pantalla,
                avisos_canales: form.avisos_canales,
                aviso_factura_canales: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canalesDeCombinacion"])(form.aviso_factura),
                aviso_pantalla_dias: numero(form.aviso_pantalla_dias),
                aviso_dias_1: numero(form.aviso_dias_1),
                aviso_dias_2: numero(form.aviso_dias_2),
                aviso_dias_3: numero(form.aviso_dias_3)
            }).eq('id', cliente.id);
            if (error) throw error;
            setGuardado(true);
            onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    const canalesElegidos = CANALES.filter((c)=>marcado(c.valor) && alcanzable(c));
    const sinSalida = form.avisos_activos && canalesElegidos.length === 0;
    /**
   * El orden se juzga sobre los días EFECTIVOS.
   *
   * El problema es del resultado, no de dónde salió cada número: dejar el
   * primero en "general" y adelantar el último igual puede dejarlos cruzados.
   */ const efectivo = (campo)=>form[campo] === '' || form[campo] == null ? generales[campo] : form[campo];
    const desordenados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisosEnOrden"])({
        dias1: efectivo('aviso_dias_1'),
        dias2: efectivo('aviso_dias_2'),
        dias3: efectivo('aviso_dias_3')
    });
    var _form_aviso_factura;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        title: "Avisos",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
        subtitle: "Qué le mandamos a este abonado, y por dónde.",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: guardar,
            className: "space-y-4 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-start gap-2 text-sm text-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: form.avisos_activos,
                            onChange: (e)=>set('avisos_activos', e.target.checked),
                            className: "mt-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Recibe avisos automáticos",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[11px] leading-snug text-slate-500",
                                    children: "Apagado, no se le manda ningún recordatorio de pago. Para el que pidió que no lo molesten."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                !form.avisos_activos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    tipo: "alerta",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOff$3e$__["BellOff"], {
                            size: 13,
                            className: "mr-1 inline"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        "Apagar los avisos no impide el corte: si no paga, se le corta igual, solo que sin recordatorios previos. Y el corte sin aviso genera justamente la llamada que los avisos evitan."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this),
                form.avisos_activos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1.5 text-xs font-medium text-slate-300",
                                    children: "Por dónde"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: CANALES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-1.5 text-xs ".concat(alcanzable(c) ? 'text-slate-300' : 'text-slate-600'),
                                            title: alcanzable(c) ? undefined : "Este abonado no tiene ".concat(c.campo.replace('_', ' '), " cargado"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: marcado(c.valor),
                                                    onChange: ()=>alternarCanal(c.valor)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, this),
                                                c.titulo,
                                                !alcanzable(c) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px]",
                                                    children: "(sin dato)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                                    lineNumber: 214,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, c.valor, true, {
                                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] text-slate-500",
                                    children: "Se usa el primero que se pueda, empezando por el preferido de su ficha."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this),
                        sinSalida && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 13,
                                    className: "mr-1 inline"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this),
                                "No hay ningún canal utilizable: o están todos desmarcados, o de los marcados no tenemos el dato de contacto. Este abonado no va a recibir ningún aviso."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 226,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "aviso_factura",
                            label: "Aviso de nueva factura",
                            hint: "Se manda a todos cuando se crea la factura. No tiene que ver con la factura electrónica del SRI.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: (_form_aviso_factura = form.aviso_factura) !== null && _form_aviso_factura !== void 0 ? _form_aviso_factura : '',
                                onChange: (e)=>set('aviso_factura', e.target.value || null),
                                className: "max-w-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMBINACIONES_FACTURA"].map((c)=>{
                                    var _c_valor;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: (_c_valor = c.valor) !== null && _c_valor !== void 0 ? _c_valor : '',
                                        children: c.titulo
                                    }, String(c.valor), false, {
                                        fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                        lineNumber: 247,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-start gap-2 text-sm text-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: form.avisos_pantalla,
                                    onChange: (e)=>set('avisos_pantalla', e.target.checked),
                                    className: "mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Ve las pantallas de aviso y de corte en el navegador",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[11px] leading-snug text-slate-500",
                                            children: "Apagado, cuando esté cortado ve el error de conexión de siempre en vez de la página que le explica cuánto debe y dónde pagar. Se corta igual."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this),
                        form.avisos_pantalla && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "aviso_pantalla_dias",
                            label: "Pantalla de aviso antes del corte",
                            hint: "Mientras todavía tiene servicio, para que se entere antes de quedarse sin internet.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: form.aviso_pantalla_dias,
                                onChange: (e)=>set('aviso_pantalla_dias', e.target.value === '' ? '' : Number(e.target.value)),
                                className: "max-w-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPCIONES_PANTALLA"].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: o.valor,
                                        children: o.titulo
                                    }, String(o.valor), false, {
                                        fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                        lineNumber: 286,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                lineNumber: 278,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 274,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1.5 text-xs font-medium text-slate-300",
                                    children: "Cuándo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: AVISOS.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                            label: a.titulo,
                                            hint: a.para,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: form[a.campo],
                                                onChange: (e)=>set(a.campo, e.target.value === '' ? '' : Number(e.target.value)),
                                                className: "max-w-xs",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPCIONES_DIAS"].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: o.valor,
                                                        children: [
                                                            o.titulo,
                                                            o.valor === '' && generales[a.campo] != null ? " (".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$avisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describirDias"])(generales[a.campo]), ")") : ''
                                                        ]
                                                    }, String(o.valor), true, {
                                                        fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                                        lineNumber: 313,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                                lineNumber: 305,
                                                columnNumber: 21
                                            }, this)
                                        }, a.campo, false, {
                                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                            lineNumber: 298,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this),
                                desordenados.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                                    tipo: "alerta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            size: 13,
                                            className: "mr-1 inline"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this),
                                        desordenados.join(' ')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                                    lineNumber: 329,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 border-t border-slate-800 pt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
                            cargando: guardando,
                            children: "Guardar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        guardado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-emerald-400",
                            children: "Guardado"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                            lineNumber: 342,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/clientes/ConfigAvisos.jsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(ConfigAvisos, "s8wxa8kP1y+wxYGs83STn9lwVlg=");
_c = ConfigAvisos;
var _c;
__turbopack_context__.k.register(_c, "ConfigAvisos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/FichaFacturacion.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FichaFacturacion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$FacturasCliente$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/clientes/FacturasCliente.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$ConfigFacturacion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/clientes/ConfigFacturacion.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$ConfigAvisos$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/clientes/ConfigAvisos.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/estados.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
 * Facturación del abonado, en tres secciones.
 *
 * `Facturas` es lo que el negocio le cobra —exista o no comprobante fiscal—;
 * `Facturas SRI` son los comprobantes electrónicos; `Configuración` son las
 * reglas con las que se le factura. Separarlas evita la confusión de mirar una
 * lista de comprobantes buscando una deuda que quizá nunca se facturó.
 */ const SECCIONES = [
    {
        id: 'facturas',
        label: 'Facturas',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        id: 'sri',
        label: 'Facturas SRI',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
    },
    {
        id: 'config',
        label: 'Configuración',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
function FichaFacturacion(param) {
    let { cliente, onError, onGuardado } = param;
    _s();
    const [seccion, setSeccion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('facturas');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1",
                children: SECCIONES.map((param)=>{
                    let { id, label, icon: Icon } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSeccion(id),
                        className: "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition ".concat(seccion === id ? 'bg-sky-600/15 font-medium text-sky-300' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            label
                        ]
                    }, id, true, {
                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            seccion === 'facturas' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$FacturasCliente$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cliente: cliente,
                onError: onError,
                onGuardado: onGuardado
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            seccion === 'sri' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FacturasSri, {
                cliente: cliente,
                onError: onError
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                lineNumber: 54,
                columnNumber: 29
            }, this),
            seccion === 'config' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$ConfigFacturacion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        cliente: cliente,
                        onError: onError,
                        onGuardado: onGuardado
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$ConfigAvisos$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        cliente: cliente,
                        onError: onError,
                        onGuardado: onGuardado
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(FichaFacturacion, "druQnAn6thtIdYE5esRh6W7BqI0=");
_c = FichaFacturacion;
/** Comprobantes emitidos al abonado, con lo que quedó pendiente de cada uno. */ // Colores de estado: los mismos en todo el sistema (lib/estados).
const COLOR_ESTADO = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_ESTADO"].comprobante;
/** Abre un PDF que llega como blob: el pedido lleva el token en la cabecera. */ async function abrirPdf(descargar) {
    const blob = await descargar();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank', 'noopener');
    setTimeout(()=>URL.revokeObjectURL(url), 60_000);
}
/** Los comprobantes electrónicos emitidos ante el SRI. */ function FacturasSri(param) {
    let { cliente, onError } = param;
    _s1();
    const [docs, setDocs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saldos, setSaldos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FacturasSri.useEffect": ()=>{
            let vigente = true;
            async function cargar() {
                const [d, f] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_electronic_documents').select('*').eq('client_id', cliente.id).order('fecha_emision', {
                        ascending: false
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_facturas_por_cobrar').select('id, saldo').eq('client_id', cliente.id)
                ]);
                if (!vigente) return;
                if (d.error) onError === null || onError === void 0 ? void 0 : onError(d.error);
                var _d_data;
                setDocs((_d_data = d.data) !== null && _d_data !== void 0 ? _d_data : []);
                var _f_data;
                setSaldos(Object.fromEntries(((_f_data = f.data) !== null && _f_data !== void 0 ? _f_data : []).map({
                    "FacturasSri.useEffect.cargar": (x)=>[
                            x.id,
                            Number(x.saldo)
                        ]
                }["FacturasSri.useEffect.cargar"])));
                setCargando(false);
            }
            cargar();
            return ({
                "FacturasSri.useEffect": ()=>{
                    vigente = false;
                }
            })["FacturasSri.useEffect"];
        }
    }["FacturasSri.useEffect"], [
        cliente.id,
        onError
    ]);
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
        lineNumber: 115,
        columnNumber: 24
    }, this);
    const total = docs.reduce((s, d)=>{
        var _d_importe_total;
        return s + Number((_d_importe_total = d.importe_total) !== null && _d_importe_total !== void 0 ? _d_importe_total : 0);
    }, 0);
    const autorizadas = docs.filter((d)=>d.estado === 'AUTORIZADO').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-kpis",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Comprobantes",
                        valor: docs.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Autorizados",
                        valor: autorizadas,
                        color: "text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Facturado",
                        valor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(total)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Pendiente de cobro",
                        valor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(cliente.saldo),
                        color: Number(cliente.saldo) > 0 ? 'text-red-400' : 'text-emerald-400'
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Comprobantes emitidos",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    to: "/facturacion",
                    className: "text-xs text-sky-400 hover:underline",
                    children: "Emitir una factura →"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, void 0),
                children: docs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: [
                        "Todavía no se le emitió ningún comprobante. Se hace desde ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Facturación → Nueva factura"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                            lineNumber: 144,
                            columnNumber: 71
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Número',
                        'Fecha',
                        'Total',
                        'Pendiente',
                        'Estado',
                        ''
                    ],
                    filas: docs,
                    renderFila: (d)=>{
                        var _COLOR_ESTADO_d_estado;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "text-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-xs text-slate-100",
                                    children: d.numero_comprobante
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(d.fecha_emision)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(d.importe_total)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: saldos[d.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "text-red-300",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(saldos[d.id])
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                        lineNumber: 160,
                                        columnNumber: 21
                                    }, void 0) : d.estado === 'AUTORIZADO' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-400",
                                        children: "pagada"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                        lineNumber: 162,
                                        columnNumber: 21
                                    }, void 0) : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: (_COLOR_ESTADO_d_estado = COLOR_ESTADO[d.estado]) !== null && _COLOR_ESTADO_d_estado !== void 0 ? _COLOR_ESTADO_d_estado : 'gris',
                                        children: d.estado
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variante: "fantasma",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"],
                                                title: "Representación impresa",
                                                onClick: ()=>abrirPdf(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].sri.ride(d.id)).catch(onError),
                                                children: "RIDE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variante: "fantasma",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                                title: "Ver el XML",
                                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].sri.xml(d.id).then((r)=>{
                                                        const w = window.open('', '_blank', 'noopener');
                                                        if (w) w.document.write("<pre>".concat(r.xml.replace(/</g, '&lt;'), "</pre>"));
                                                    }).catch(onError)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, void 0)
                            ]
                        }, d.id, true, {
                            fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                            lineNumber: 152,
                            columnNumber: 15
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaFacturacion.jsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s1(FacturasSri, "eMG3HbnIbLbuLf5QJD9TwAW44Tk=");
_c1 = FacturasSri;
var _c, _c1;
__turbopack_context__.k.register(_c, "FichaFacturacion");
__turbopack_context__.k.register(_c1, "FacturasSri");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/FichaCobros.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FichaCobros
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tirilla$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tirilla.js [app-client] (ecmascript)");
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
/** Lo que el abonado pagó y lo que prometió pagar. */ const fecha = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])("".concat(String(f).slice(0, 10), "T12:00:00")) : '—';
const COLOR_PROMESA = {
    activa: 'azul',
    cumplida: 'verde',
    incumplida: 'rojo',
    anulada: 'gris'
};
async function abrirPdf(descargar) {
    const blob = await descargar();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank', 'noopener');
    setTimeout(()=>URL.revokeObjectURL(url), 60_000);
}
function FichaCobros(param) {
    let { cliente, onError } = param;
    _s();
    const [pagos, setPagos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [promesas, setPromesas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FichaCobros.useEffect": ()=>{
            let vigente = true;
            async function cargar() {
                const [pg, pr] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_pagos').select('*').eq('client_id', cliente.id).order('fecha_pago', {
                        ascending: false
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_promesas_pago').select('*').eq('client_id', cliente.id).order('fecha_promesa', {
                        ascending: false
                    })
                ]);
                if (!vigente) return;
                if (pg.error) onError === null || onError === void 0 ? void 0 : onError(pg.error);
                var _pg_data;
                setPagos((_pg_data = pg.data) !== null && _pg_data !== void 0 ? _pg_data : []);
                var _pr_data;
                setPromesas((_pr_data = pr.data) !== null && _pr_data !== void 0 ? _pr_data : []);
                setCargando(false);
            }
            cargar();
            return ({
                "FichaCobros.useEffect": ()=>{
                    vigente = false;
                }
            })["FichaCobros.useEffect"];
        }
    }["FichaCobros.useEffect"], [
        cliente.id,
        onError
    ]);
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
        lineNumber: 60,
        columnNumber: 24
    }, this);
    const validos = pagos.filter((p)=>!p.anulado);
    const total = validos.reduce((s, p)=>s + Number(p.monto), 0);
    const incumplidas = promesas.filter((p)=>p.estado === 'incumplida').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-kpis",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Pagos registrados",
                        valor: validos.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Total pagado",
                        valor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(total),
                        color: "text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Último pago",
                        valor: fecha(cliente.ultimo_pago)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Promesas incumplidas",
                        valor: incumplidas,
                        color: incumplidas ? 'text-red-400' : 'text-slate-400'
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Pagos",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    to: "/pagos",
                    className: "text-xs text-sky-400 hover:underline",
                    children: "Registrar un pago →"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, void 0),
                children: pagos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: "Todavía no se le registró ningún pago."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Recibo',
                        'Fecha',
                        'Comprobante',
                        'Forma',
                        'Cuenta',
                        'Monto',
                        ''
                    ],
                    filas: pagos,
                    renderFila: (p)=>{
                        var _p_numero, _p_numero_comprobante, _p_cuenta, _p_motivo_anulacion;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "text-slate-300 ".concat(p.anulado ? 'opacity-50' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-xs text-slate-100",
                                    children: String((_p_numero = p.numero) !== null && _p_numero !== void 0 ? _p_numero : '').padStart(6, '0')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: fecha(p.fecha_pago)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-[11px]",
                                    children: (_p_numero_comprobante = p.numero_comprobante) !== null && _p_numero_comprobante !== void 0 ? _p_numero_comprobante : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs capitalize",
                                    children: p.forma_pago
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: (_p_cuenta = p.cuenta) !== null && _p_cuenta !== void 0 ? _p_cuenta : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: p.anulado ? 'line-through' : 'text-emerald-300',
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(p.monto)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-end gap-2",
                                        children: [
                                            p.anulado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-[11px] text-red-300",
                                                title: (_p_motivo_anulacion = p.motivo_anulacion) !== null && _p_motivo_anulacion !== void 0 ? _p_motivo_anulacion : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 25
                                                    }, void 0),
                                                    " anulado"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                                lineNumber: 111,
                                                columnNumber: 23
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variante: "fantasma",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"],
                                                title: "Recibo del cobro",
                                                onClick: ()=>abrirPdf(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].pagos.comprobante(p.id)).catch(onError),
                                                children: "Recibo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variante: "fantasma",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
                                                title: "Imprimir en la térmica del mostrador",
                                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].documentos.reciboPos(p.id).then((texto)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tirilla$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imprimirTirilla"])(texto)).catch(onError),
                                                children: "Tirilla"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, void 0)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Promesas de pago",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"],
                children: promesas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: "Nunca pidió plazo."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Se comprometió a',
                        'Monto',
                        'Comprobante',
                        'Estado',
                        ''
                    ],
                    filas: promesas,
                    renderFila: (p)=>{
                        var _p_numero_comprobante, _COLOR_PROMESA_p_estado;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "text-slate-300 ".concat(p.vencida ? 'bg-red-500/5' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: [
                                        fecha(p.fecha_promesa),
                                        p.vencida && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-red-400",
                                            children: "vencida"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                            lineNumber: 160,
                                            columnNumber: 33
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: p.monto == null ? '—' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(p.monto)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-[11px]",
                                    children: (_p_numero_comprobante = p.numero_comprobante) !== null && _p_numero_comprobante !== void 0 ? _p_numero_comprobante : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: (_COLOR_PROMESA_p_estado = COLOR_PROMESA[p.estado]) !== null && _COLOR_PROMESA_p_estado !== void 0 ? _COLOR_PROMESA_p_estado : 'gris',
                                        children: p.estado
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-right text-[11px] text-slate-500",
                                    children: p.activo_servicio ? 'habilitó el servicio' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, void 0)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                            lineNumber: 157,
                            columnNumber: 15
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaCobros.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaCobros.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(FichaCobros, "qTdX1WZxwQ2yzGjAsAHCr6Tu3d4=");
_c = FichaCobros;
var _c;
__turbopack_context__.k.register(_c, "FichaCobros");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/FichaSoporte.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FichaSoporte
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-client] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$TicketForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/soporte/TicketForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
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
/**
 * Los tickets de este abonado, dentro de su ficha.
 *
 * Es la pregunta que se hace en el mostrador: "¿este ya reclamó antes?". Un
 * abonado que llamó tres veces por lo mismo en un mes no necesita otra visita
 * igual, necesita que alguien mire el historial.
 */ const fecha = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(f) : '—';
function FichaSoporte(param) {
    let { cliente, onError } = param;
    _s();
    const [tickets, setTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [creando, setCreando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FichaSoporte.useCallback[recargar]": async ()=>{
            setCargando(true);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_tickets').select('*').eq('client_id', cliente.id).order('created_at', {
                ascending: false
            });
            if (error) onError === null || onError === void 0 ? void 0 : onError(error);
            setTickets(data !== null && data !== void 0 ? data : []);
            setCargando(false);
        }
    }["FichaSoporte.useCallback[recargar]"], [
        cliente.id,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FichaSoporte.useEffect": ()=>{
            recargar();
        }
    }["FichaSoporte.useEffect"], [
        recargar
    ]);
    const abiertos = tickets.filter((t)=>![
            'resuelto',
            'cancelado'
        ].includes(t.estado));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        title: "Tickets de soporte",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"],
        subtitle: tickets.length ? "".concat(tickets.length, " en total · ").concat(abiertos.length, " sin resolver") : 'Nunca reportó una falla',
        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variante: "primario",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
            onClick: ()=>setCreando(true),
            children: "Nuevo ticket"
        }, void 0, false, {
            fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
            lineNumber: 54,
            columnNumber: 9
        }, void 0),
        children: [
            cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-500",
                children: "Cargando…"
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : tickets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "py-6 text-center text-sm text-slate-500",
                children: "Este abonado no tiene reclamos registrados."
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                lineNumber: 62,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "divide-y divide-slate-800",
                children: tickets.map((t)=>{
                    var _PRIORIDADES_t_prioridad, _PRIORIDADES_t_prioridad1;
                    var _ESTADOS_t_estado;
                    const estado = (_ESTADOS_t_estado = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][t.estado]) !== null && _ESTADOS_t_estado !== void 0 ? _ESTADOS_t_estado : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"].abierto;
                    var _PRIORIDADES_t_prioridad_clase, _t_tecnico;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/soporte/".concat(t.id),
                            className: "flex items-center gap-3 py-3 transition hover:bg-slate-800/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "font-mono text-[11px] text-slate-500",
                                                    children: [
                                                        "N° ",
                                                        t.codigo
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border px-2 py-0.5 text-[10px] ".concat(estado.clase),
                                                    children: estado.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                                                    lineNumber: 78,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border px-2 py-0.5 text-[10px] ".concat((_PRIORIDADES_t_prioridad_clase = (_PRIORIDADES_t_prioridad = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORIDADES"][t.prioridad]) === null || _PRIORIDADES_t_prioridad === void 0 ? void 0 : _PRIORIDADES_t_prioridad.clase) !== null && _PRIORIDADES_t_prioridad_clase !== void 0 ? _PRIORIDADES_t_prioridad_clase : ''),
                                                    children: (_PRIORIDADES_t_prioridad1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORIDADES"][t.prioridad]) === null || _PRIORIDADES_t_prioridad1 === void 0 ? void 0 : _PRIORIDADES_t_prioridad1.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                                            lineNumber: 76,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block truncate text-sm text-slate-200",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["etiquetaIncidencia"])(t.tipo_incidencia)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                                            lineNumber: 87,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[11px] text-slate-500",
                                            children: [
                                                fecha(t.created_at),
                                                " · ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["haceCuanto"])(t.horas_abierto),
                                                t.tecnico || t.cuadrilla ? " · ".concat((_t_tecnico = t.tecnico) !== null && _t_tecnico !== void 0 ? _t_tecnico : t.cuadrilla) : ' · sin asignar'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 16,
                                    className: "shrink-0 text-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                                    lineNumber: 95,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                            lineNumber: 71,
                            columnNumber: 17
                        }, this)
                    }, t.id, false, {
                        fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                        lineNumber: 70,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: creando,
                titulo: "Nuevo ticket · ".concat(cliente.nombre),
                onCerrar: ()=>setCreando(false),
                ancho: "max-w-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$TicketForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    clienteInicial: cliente,
                    onError: onError,
                    onCancelar: ()=>setCreando(false),
                    onCreado: ()=>{
                        setCreando(false);
                        recargar();
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaSoporte.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(FichaSoporte, "bfQYNfVeQVDsMBYXossTWtu08UQ=");
_c = FichaSoporte;
var _c;
__turbopack_context__.k.register(_c, "FichaSoporte");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/HerramientasTecnicas.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HerramientasTecnicas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notificaciones.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-client] (ecmascript) <export default as PauseCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/power.js [app-client] (ecmascript) <export default as Power>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PowerOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/power-off.js [app-client] (ecmascript) <export default as PowerOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/signal.js [app-client] (ecmascript) <export default as Signal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$unplug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unplug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/unplug.js [app-client] (ecmascript) <export default as Unplug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
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
/**
 * Las herramientas que hoy se usan entrando al Winbox, en la ficha del abonado.
 *
 * El valor no está en los comandos —eso ya se podía hacer— sino en que el
 * objetivo lo deduce el sistema de la ficha del cliente. Buscar la IP a mano y
 * pegarla en otra ventana es exactamente donde se cuela el error de reiniciarle
 * el equipo al vecino.
 *
 * Tres grupos, en el orden en que se usan durante un reclamo: primero se mira
 * (diagnóstico), después se toca el equipo, y al final se decide sobre el
 * servicio. Lo que corta o da de baja va en rojo y siempre pide confirmación.
 */ const fmtBytes = (b)=>{
    const n = Number(b) || 0;
    if (n > 1e9) return "".concat((n / 1e9).toFixed(2), " Gbps");
    if (n > 1e6) return "".concat((n / 1e6).toFixed(1), " Mbps");
    if (n > 1e3) return "".concat((n / 1e3).toFixed(0), " Kbps");
    return "".concat(n, " bps");
};
/** Un botón de la barra: icono arriba, nombre abajo, apretable con el pulgar. */ function Herramienta(param) {
    let { icon: Icon, label, onClick, cargando, tono = 'neutro', disabled } = param;
    const tonos = {
        neutro: 'border-slate-700 text-slate-300 hover:border-sky-500/60 hover:text-sky-300',
        ok: 'border-emerald-600/40 text-emerald-300 hover:bg-emerald-500/10',
        alerta: 'border-amber-600/40 text-amber-300 hover:bg-amber-500/10',
        peligro: 'border-rose-600/40 text-rose-300 hover:bg-rose-500/10'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        disabled: disabled || cargando,
        className: "flex flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-[11px] leading-tight transition disabled:cursor-not-allowed disabled:opacity-40 ".concat(tonos[tono]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 20,
                className: cargando ? 'animate-spin' : ''
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-center",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = Herramienta;
function HerramientasTecnicas(param) {
    let { cliente, onError, onGuardado } = param;
    var _cliente_nombre, _wifi_ssid, _wifi_clave;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [corriendo, setCorriendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consola, setConsola] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [wifi, setWifi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [promesa, setPromesa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [baja, setBaja] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [motivos, setMotivos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pausa, setPausa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * El catálogo de motivos de baja, que se carga recién al abrir el diálogo.
   *
   * Traerlo al montar la ficha sería una consulta más en cada abonado que
   * alguien mira, para una lista que se usa en el 1 % de las visitas.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HerramientasTecnicas.useEffect": ()=>{
            if (!baja || motivos.length) return;
            let vivo = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('motivos_baja').select('id, nombre, afecta_calidad').eq('activo', true).order('afecta_calidad').order('orden').then({
                "HerramientasTecnicas.useEffect": (param)=>{
                    let { data } = param;
                    if (vivo) setMotivos(data !== null && data !== void 0 ? data : []);
                }
            }["HerramientasTecnicas.useEffect"]);
            return ({
                "HerramientasTecnicas.useEffect": ()=>{
                    vivo = false;
                }
            })["HerramientasTecnicas.useEffect"];
        }
    }["HerramientasTecnicas.useEffect"], [
        baja,
        motivos.length
    ]);
    /** Corre una herramienta y muestra el resultado en la consola modal. */ // El parámetro se llama `aviso` y no `confirmar`: con ese nombre tapaba al
    // `confirmar` del hook, y la llamada terminaba invocando el texto como si
    // fuera una función.
    async function correr(clave, titulo, fn) {
        let { aviso } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        if (aviso && !await confirmar(aviso)) return;
        setCorriendo(clave);
        onError === null || onError === void 0 ? void 0 : onError(null);
        setConsola({
            titulo,
            cargando: true
        });
        try {
            const r = await fn();
            setConsola({
                titulo,
                resultado: r
            });
        } catch (err) {
            setConsola({
                titulo,
                error: err.message,
                hint: err.hint
            });
        } finally{
            setCorriendo(null);
        }
    }
    // --- Acciones sobre el servicio, que van a la base y no a la red ----------
    /**
   * Suspender y activar, en el sistema Y en el router.
   *
   * ── Lo que hacía antes ──
   *
   * Solo cambiaba el estado en la base. El abonado quedaba marcado como cortado
   * y seguía navegando, porque su IP nunca entraba a la lista del router. El
   * aviso de "activar" incluso decía "recordá quitarlo de la lista", que es
   * pedirle a una persona que se acuerde de lo que la máquina no hizo.
   *
   * En el piloto se suspendieron ocho abonados a mano y los ocho siguieron con
   * internet. Nadie lo notó hasta que Reparar lo mostró.
   *
   * ── Por qué el estado se guarda igual si el router falla ──
   *
   * Porque la decisión comercial ya se tomó, y perderla obligaría a repetirla.
   * Lo que no se puede es ocultarlo: si el router no respondió, se dice con
   * todas las letras y queda para que "Reparar el router" lo corrija después.
   * Esa reconciliación existe justamente para este momento.
   */ async function cambiarEstado(estado, aviso) {
        if (!await confirmar(aviso)) return;
        // Cortar o suspender espera unos segundos con "Deshacer" (lib/notificaciones):
        // un clic en el abonado equivocado deja a alguien sin internet. Reactivar
        // va directo: nadie se arrepiente de devolver el servicio.
        if (estado === 'activo') return aplicarEstado(estado);
        const que = estado === 'cortado' ? 'Servicio cortado' : "Servicio ".concat(estado);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conDeshacer"])("".concat(que, ": ").concat(cliente.nombre), ()=>aplicarEstado(estado)).catch(()=>{});
    }
    async function aplicarEstado(estado) {
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            // Al reactivar se limpia la pausa: dejar el motivo viejo haría que la
            // ficha siga diciendo "de viaje" sobre alguien que ya volvió.
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('clientes').update(estado === 'activo' ? {
                estado,
                suspendido_motivo: null,
                suspendido_hasta: null
            } : {
                estado
            }).eq('id', cliente.id);
            if (error) throw error;
            const enElRouter = await aplicarEnRouter(estado);
            await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
            if (!enElRouter.ok) {
                onError === null || onError === void 0 ? void 0 : onError(new Error('El abonado quedó como "'.concat(estado, '" en el sistema, pero el router no se actualizó: ') + "".concat(enElRouter.nota, ' Corrígelo con "Reparar el router".')));
            }
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    /**
   * Pausar el servicio a pedido del abonado.
   *
   * Distinto de suspender por mora: acá no debe nada, avisó que se iba, y
   * mientras esté pausado NO se le factura. Por eso el motivo no es opcional en
   * la práctica —dentro de dos meses nadie se acuerda de por qué está parado ni
   * si corresponde cobrarle— aunque el campo lo permita vacío.
   *
   * La fecha es informativa: la reactivación es a mano. Un abonado que vuelve
   * antes de tiempo, o que estira el viaje, es más frecuente que uno que vuelve
   * justo el día que dijo.
   */ async function pausar(e) {
        e.preventDefault();
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('clientes').update({
                estado: 'suspendido',
                suspendido_motivo: pausa.motivo || null,
                suspendido_hasta: pausa.hasta || null
            }).eq('id', cliente.id);
            if (error) throw error;
            const enElRouter = await aplicarEnRouter('suspendido');
            setPausa(null);
            await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
            if (!enElRouter.ok) {
                onError === null || onError === void 0 ? void 0 : onError(new Error("El abonado quedó pausado en el sistema, pero el router no se actualizó: " + "".concat(enElRouter.nota, ' Corrígelo con "Reparar el router".')));
            }
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    /** Agrega o quita la IP de la lista de cortados, según el estado nuevo. */ async function aplicarEnRouter(estado) {
        // `suspendido` bloquea igual que `cortado`: el que pidió parar tampoco
        // tiene que seguir navegando.
        if (![
            'cortado',
            'suspendido',
            'activo'
        ].includes(estado)) return {
            ok: true,
            nota: ''
        };
        if (!cliente.router_id || !cliente.ip) {
            return {
                ok: false,
                nota: 'No tiene router o IP cargados.'
            };
        }
        try {
            const entradas = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].mikrotik.bloqueos(cliente.router_id);
            const entrada = entradas.find((e)=>e.address === cliente.ip || String(e.address).startsWith("".concat(cliente.ip, "/")));
            if (estado !== 'activo') {
                if (entrada) return {
                    ok: true,
                    nota: 'Ya estaba bloqueado.'
                };
                // El endpoint asegura además la regla de corte: sin ella, la lista se
                // llena y el tráfico sigue pasando.
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].mikrotik.bloquear(cliente.router_id, {
                    address: cliente.ip,
                    comment: cliente.nombre
                });
                return {
                    ok: true,
                    nota: ''
                };
            }
            if (!entrada) return {
                ok: true,
                nota: ''
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].mikrotik.desbloquear(cliente.router_id, entrada.id);
            return {
                ok: true,
                nota: ''
            };
        } catch (err) {
            return {
                ok: false,
                nota: err.message
            };
        }
    }
    /**
   * Da de baja dejando dicho por qué.
   *
   * El motivo no es burocracia: decide si esa pérdida le cuenta o no al vendedor
   * en la calidad de su cohorte. Una mudanza fuera de cobertura y un abandono a
   * los dos meses son la misma baja para la red y cosas opuestas para quien
   * vendió.
   */ async function darDeBaja(e) {
        var _baja_nota;
        e.preventDefault();
        const datos = {
            p_cliente: cliente.id,
            p_motivo: baja.motivo || null,
            p_nota: ((_baja_nota = baja.nota) === null || _baja_nota === void 0 ? void 0 : _baja_nota.trim()) || null
        };
        // La ventana se cierra ya; la baja sale a los segundos si no se deshace.
        setBaja(null);
        onError === null || onError === void 0 ? void 0 : onError(null);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conDeshacer"])("Baja de ".concat(cliente.nombre), async ()=>{
            setGuardando(true);
            try {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('dar_de_baja_cliente', datos);
                if (error) throw error;
                await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
            } catch (err) {
                onError === null || onError === void 0 ? void 0 : onError(err);
            } finally{
                setGuardando(false);
            }
        }).catch(()=>{});
    }
    async function crearPromesa(e) {
        e.preventDefault();
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            var _promesa_nota, _sesion_user;
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.getUser();
            var _sesion_user_id;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('promesas_pago').insert({
                client_id: cliente.id,
                monto: Number(promesa.monto) || null,
                fecha_promesa: promesa.fecha,
                nota: ((_promesa_nota = promesa.nota) === null || _promesa_nota === void 0 ? void 0 : _promesa_nota.trim()) || null,
                // Habilitar el servicio es la razón de ser de la promesa: el abonado
                // pide unos días y a cambio se le devuelve la conexión.
                activo_servicio: true,
                created_by: (_sesion_user_id = sesion === null || sesion === void 0 ? void 0 : (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id) !== null && _sesion_user_id !== void 0 ? _sesion_user_id : null
            });
            if (error) throw error;
            setPromesa(null);
            await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError((err === null || err === void 0 ? void 0 : err.code) === '23505' ? new Error("".concat(cliente.nombre, " ya tiene una promesa activa. Ciérrala antes de crear otra.")) : err);
        } finally{
            setGuardando(false);
        }
    }
    async function guardarWifi(e) {
        e.preventDefault();
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            var _wifi_ssid, _wifi_clave;
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].herramientas.wifi(cliente.id, {
                ssid: ((_wifi_ssid = wifi.ssid) === null || _wifi_ssid === void 0 ? void 0 : _wifi_ssid.trim()) || undefined,
                clave: ((_wifi_clave = wifi.clave) === null || _wifi_clave === void 0 ? void 0 : _wifi_clave.trim()) || undefined
            });
            setWifi(null);
            setConsola({
                titulo: 'Cambio de WiFi',
                resultado: r
            });
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    const sinRouter = !cliente.router_id;
    var _consola_titulo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Herramientas técnicas",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
                subtitle: "Diagnóstico y control sobre el equipo del abonado",
                children: [
                    sinRouter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        tipo: "alerta",
                        children: [
                            "Este abonado no tiene router MikroTik asignado en su ficha, así que las herramientas de red no pueden saber a qué equipo hablarle. Asígnalo en la pestaña ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Servicio"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 360,
                                columnNumber: 79
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Diagnóstico y red"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                                label: "Haz ping",
                                                disabled: sinRouter,
                                                cargando: corriendo === 'ping',
                                                onClick: ()=>{
                                                    var _cliente_ip;
                                                    return correr('ping', "Ping a ".concat((_cliente_ip = cliente.ip) !== null && _cliente_ip !== void 0 ? _cliente_ip : 'el abonado'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].herramientas.ping(cliente.id));
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 370,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"],
                                                label: "Traceroute",
                                                disabled: sinRouter,
                                                cargando: corriendo === 'trace',
                                                onClick: ()=>correr('trace', 'Traceroute', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].herramientas.traceroute(cliente.id))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"],
                                                label: "Señal / potencia",
                                                cargando: corriendo === 'senal',
                                                onClick: ()=>correr('senal', 'Señal del abonado', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].herramientas.senal(cliente.id))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 390,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
                                                label: "Test de velocidad",
                                                disabled: sinRouter,
                                                cargando: corriendo === 'velocidad',
                                                onClick: ()=>correr('velocidad', 'Test de velocidad interno', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].herramientas.testVelocidad(cliente.id), {
                                                        aviso: 'El test satura el enlace del abonado unos segundos. ¿Continuar?'
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Control de equipos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                                                label: "Reiniciar router",
                                                tono: "alerta",
                                                disabled: sinRouter,
                                                cargando: corriendo === 'reiniciar',
                                                onClick: ()=>correr('reiniciar', 'Reinicio del equipo', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].herramientas.reiniciar(cliente.id), {
                                                        aviso: 'Reiniciar el equipo corta el servicio mientras arranca (30 a 90 segundos). ¿Continuar?'
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 423,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
                                                label: "Cambiar WiFi",
                                                disabled: sinRouter,
                                                onClick: ()=>setWifi({
                                                        ssid: '',
                                                        clave: ''
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$unplug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unplug$3e$__["Unplug"],
                                                label: "Kick PPPoE",
                                                tono: "alerta",
                                                disabled: sinRouter || !cliente.usuario_ppp,
                                                cargando: corriendo === 'kick',
                                                onClick: ()=>correr('kick', 'Sesión PPPoE', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].herramientas.kickPpp(cliente.id), {
                                                        aviso: 'Se baja la sesión del abonado y reconecta en unos segundos. ¿Continuar?'
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 447,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
                                                label: "Dispositivos en casa",
                                                disabled: sinRouter,
                                                cargando: corriendo === 'dispositivos',
                                                onClick: ()=>correr('dispositivos', 'Dispositivos conectados', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].herramientas.dispositivos(cliente.id))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Estado del servicio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 480,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"],
                                                label: "Activar servicio",
                                                tono: "ok",
                                                disabled: cliente.estado === 'activo' || guardando,
                                                onClick: ()=>cambiarEstado('activo', "¿Marcar a ".concat(cliente.nombre, " como activo? Se le quita el bloqueo en el router."))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 484,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__["PauseCircle"],
                                                label: "Pausar el servicio",
                                                disabled: cliente.estado === 'suspendido' || guardando,
                                                onClick: ()=>setPausa({
                                                        motivo: '',
                                                        hasta: ''
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Herramienta, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                                                label: "Conceder promesa",
                                                tono: "ok",
                                                onClick: ()=>setPromesa({
                                                        dias: 3,
                                                        fecha: enDiasHabiles(3),
                                                        monto: Number(cliente.saldo) > 0 ? Number(cliente.saldo).toFixed(2) : '',
                                                        nota: ''
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                                lineNumber: 512,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 483,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuAcciones"], {
                                            texto: "Suspender o dar de baja",
                                            acciones: [
                                                cliente.estado !== 'cortado' && !guardando && {
                                                    label: 'Suspender el servicio',
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PowerOff$3e$__["PowerOff"],
                                                    peligro: true,
                                                    onClick: ()=>cambiarEstado('cortado', "¿Suspender el servicio de ".concat(cliente.nombre, "? Se le corta el internet en el router."))
                                                },
                                                cliente.estado !== 'baja' && !guardando && {
                                                    label: 'Dar de baja',
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                                    peligro: true,
                                                    onClick: ()=>setBaja({
                                                            motivo: '',
                                                            nota: ''
                                                        })
                                                }
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 479,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[11px] text-slate-500",
                        children: "Cada ejecución queda registrada con quién la hizo, desde qué IP y qué contestó el equipo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: Boolean(consola),
                titulo: (_consola_titulo = consola === null || consola === void 0 ? void 0 : consola.titulo) !== null && _consola_titulo !== void 0 ? _consola_titulo : 'Resultado',
                onCerrar: ()=>setConsola(null),
                ancho: "max-w-2xl",
                children: (consola === null || consola === void 0 ? void 0 : consola.cargando) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-8 text-center text-sm text-slate-400",
                    children: "Ejecutando en el equipo…"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 567,
                    columnNumber: 11
                }, this) : (consola === null || consola === void 0 ? void 0 : consola.error) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: consola.error
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 570,
                            columnNumber: 13
                        }, this),
                        consola.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500",
                            children: consola.hint
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 571,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 569,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultadoComando, {
                    datos: consola === null || consola === void 0 ? void 0 : consola.resultado
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 574,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                lineNumber: 560,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: Boolean(wifi),
                titulo: "Cambiar red WiFi",
                onCerrar: ()=>setWifi(null),
                children: wifi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: guardarWifi,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Nombre de la red (SSID)",
                            hint: "Déjalo vacío para no cambiarlo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: wifi.ssid,
                                onChange: (e)=>setWifi((w)=>({
                                            ...w,
                                            ssid: e.target.value
                                        })),
                                placeholder: (_cliente_nombre = cliente.nombre) === null || _cliente_nombre === void 0 ? void 0 : _cliente_nombre.split(' ')[0]
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 583,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 582,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Clave",
                            hint: "Mínimo 8 caracteres. Vacío = no se cambia",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Mínimo 8 caracteres",
                                value: wifi.clave,
                                onChange: (e)=>setWifi((w)=>({
                                            ...w,
                                            clave: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 591,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 590,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "Al cambiarla, todos los aparatos de la casa se desconectan y hay que reconectarlos con la clave nueva. Avísale al abonado antes de aplicar."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 597,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    type: "button",
                                    onClick: ()=>setWifi(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 603,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    type: "submit",
                                    cargando: guardando,
                                    disabled: !((_wifi_ssid = wifi.ssid) === null || _wifi_ssid === void 0 ? void 0 : _wifi_ssid.trim()) && !((_wifi_clave = wifi.clave) === null || _wifi_clave === void 0 ? void 0 : _wifi_clave.trim()),
                                    children: "Aplicar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 606,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 602,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 581,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: Boolean(promesa),
                titulo: "Conceder promesa de pago",
                onCerrar: ()=>setPromesa(null),
                children: promesa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: crearPromesa,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Días hábiles",
                            hint: "No cuenta sábados ni domingos",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: promesa.dias,
                                onChange: (e)=>{
                                    const dias = Number(e.target.value);
                                    setPromesa((p)=>({
                                            ...p,
                                            dias,
                                            fecha: enDiasHabiles(dias)
                                        }));
                                },
                                children: [
                                    1,
                                    2,
                                    3,
                                    5,
                                    7,
                                    10
                                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: d,
                                        children: [
                                            d,
                                            " ",
                                            d === 1 ? 'día hábil' : 'días hábiles'
                                        ]
                                    }, d, true, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 636,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 628,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 627,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    hint: "Después de esta fecha queda vencida.",
                                    label: "Vence el",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "date",
                                        value: promesa.fecha,
                                        onChange: (e)=>setPromesa((p)=>({
                                                    ...p,
                                                    fecha: e.target.value
                                                })),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 645,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Monto prometido",
                                    hint: "Lo que debe hoy",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: 25.00",
                                        type: "number",
                                        step: "0.01",
                                        value: promesa.monto,
                                        onChange: (e)=>setPromesa((p)=>({
                                                    ...p,
                                                    monto: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 653,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 652,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Nota",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: promesa.nota,
                                onChange: (e)=>setPromesa((p)=>({
                                            ...p,
                                            nota: e.target.value
                                        })),
                                placeholder: "Pidió plazo hasta que le paguen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 663,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 662,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: "Al vencer sin que pague, el corte automático lo vuelve a dejar sin servicio."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 670,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    type: "button",
                                    onClick: ()=>setPromesa(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 675,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    type: "submit",
                                    cargando: guardando,
                                    children: "Conceder"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 678,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 674,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 626,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                lineNumber: 620,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: Boolean(baja),
                titulo: "Dar de baja el servicio",
                onCerrar: ()=>setBaja(null),
                avisoAlGuardar: false,
                children: baja && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: darDeBaja,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-300",
                            children: [
                                cliente.nombre,
                                " queda fuera de la facturación mensual y de los cortes. Su historial de facturas y pagos se conserva."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 692,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Motivo",
                            hint: "Decide si la pérdida le cuenta al vendedor en la calidad de su cartera",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: baja.motivo,
                                onChange: (e)=>setBaja((b)=>({
                                            ...b,
                                            motivo: e.target.value
                                        })),
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Elige un motivo…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                        lineNumber: 706,
                                        columnNumber: 17
                                    }, this),
                                    motivos.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: m.id,
                                            children: [
                                                m.nombre,
                                                m.afecta_calidad ? '' : ' — no afecta al vendedor'
                                            ]
                                        }, m.id, true, {
                                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                            lineNumber: 708,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 701,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 697,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Nota",
                            hint: "Opcional, para el que lea esto dentro de un año",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: baja.nota,
                                onChange: (e)=>setBaja((b)=>({
                                            ...b,
                                            nota: e.target.value
                                        })),
                                placeholder: "Se mudó a una zona sin cobertura"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 717,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 716,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "Elegir bien el motivo importa: los que no son responsabilidad del vendedor salen del cálculo de calidad en lugar de restarle."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 724,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    type: "button",
                                    onClick: ()=>setBaja(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "peligro",
                                    type: "submit",
                                    cargando: guardando,
                                    disabled: !baja.motivo,
                                    children: "Dar de baja"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 729,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 691,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                lineNumber: 687,
                columnNumber: 7
            }, this),
            pausa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: true,
                titulo: "Pausar el servicio",
                onCerrar: ()=>setPausa(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: pausar,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: "Mientras esté pausado no se le factura y queda sin internet. Al reactivarlo vuelve todo como estaba."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 749,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Motivo",
                            hint: "Lo que el abonado dijo. Sirve para acordarse dentro de dos meses por qué está parado.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: pausa.motivo,
                                onChange: (e)=>setPausa((p)=>({
                                            ...p,
                                            motivo: e.target.value
                                        })),
                                placeholder: "Vacaciones de los chicos / viaje / asunto personal",
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 755,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 754,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Hasta",
                            hint: "Informativo: la reactivación se hace a mano.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "date",
                                value: pausa.hasta,
                                onChange: (e)=>setPausa((p)=>({
                                            ...p,
                                            hasta: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                lineNumber: 764,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 763,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variante: "fantasma",
                                    onClick: ()=>setPausa(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 772,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    variante: "primario",
                                    cargando: guardando,
                                    children: "Pausar el servicio"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 775,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 771,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 748,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                lineNumber: 747,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(HerramientasTecnicas, "AKw42f7nXF3VFnQVmsDkttPdfHo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c1 = HerramientasTecnicas;
/**
 * El día hábil número N contando desde mañana.
 *
 * Una promesa que vence un domingo no sirve: el abonado no tiene dónde pagar y
 * el corte del lunes lo agarra sin haber tenido la oportunidad.
 */ function enDiasHabiles(dias) {
    const d = new Date();
    let contados = 0;
    while(contados < dias){
        d.setDate(d.getDate() + 1);
        if (d.getDay() !== 0 && d.getDay() !== 6) contados++;
    }
    return d.toISOString().slice(0, 10);
}
/** Muestra el resultado según qué comando fue, en vez de un JSON crudo. */ function ResultadoComando(param) {
    let { datos } = param;
    if (!datos) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-slate-500",
        children: "Sin respuesta."
    }, void 0, false, {
        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
        lineNumber: 804,
        columnNumber: 22
    }, this);
    // Ping
    if (datos.enviados !== undefined) {
        const perdido = Number(datos.perdida) > 0;
        var _datos_perdida;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border p-4 text-center ".concat(datos.recibidos === 0 ? 'border-rose-500/40 bg-rose-500/10 text-rose-200' : perdido ? 'border-amber-500/40 bg-amber-500/10 text-amber-200' : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-sm",
                            children: datos.destino
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 820,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-2xl font-bold",
                            children: datos.recibidos === 0 ? 'No responde' : "".concat(datos.ms_promedio, " ms")
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 821,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs opacity-80",
                            children: [
                                datos.recibidos,
                                " de ",
                                datos.enviados,
                                " paquetes · ",
                                (_datos_perdida = datos.perdida) !== null && _datos_perdida !== void 0 ? _datos_perdida : 0,
                                "% de pérdida"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 824,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 811,
                    columnNumber: 9
                }, this),
                datos.recibidos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs text-slate-500",
                    children: [
                        "mínimo ",
                        datos.ms_min,
                        " ms · máximo ",
                        datos.ms_max,
                        " ms"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 830,
                    columnNumber: 11
                }, this),
                datos.recibidos === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    tipo: "alerta",
                    children: "El equipo no contesta. Puede estar apagado, sin energía o con el cable cortado — la potencia óptica dice cuál de las tres."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 836,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
            lineNumber: 810,
            columnNumber: 7
        }, this);
    }
    // Traceroute
    if (datos.saltos) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "space-y-1",
            children: datos.saltos.map((s)=>{
                var _s_ms;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center gap-3 rounded border border-slate-800 px-3 py-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-6 text-right font-mono text-xs text-slate-500",
                            children: s.salto
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 854,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1 font-mono text-slate-200",
                            children: s.direccion
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 855,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-400",
                            children: [
                                (_s_ms = s.ms) !== null && _s_ms !== void 0 ? _s_ms : '—',
                                " ms"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 856,
                            columnNumber: 13
                        }, this)
                    ]
                }, s.salto, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 850,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
            lineNumber: 848,
            columnNumber: 7
        }, this);
    }
    // Señal óptica o de radio
    if (datos.tipo === 'optica' || datos.tipo === 'radio') {
        var _datos_rx_power_dbm, _ref;
        const rx = Number((_ref = (_datos_rx_power_dbm = datos.rx_power_dbm) !== null && _datos_rx_power_dbm !== void 0 ? _datos_rx_power_dbm : datos.rx) !== null && _ref !== void 0 ? _ref : NaN);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                Number.isFinite(rx) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border p-4 text-center ".concat(rx > -8 || rx < -27 ? 'border-rose-500/40 bg-rose-500/10 text-rose-200' : rx < -24 ? 'border-amber-500/40 bg-amber-500/10 text-amber-200' : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-3xl font-bold",
                            children: [
                                rx,
                                " dBm"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 878,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs opacity-80",
                            children: rx < -27 ? 'Fuera de rango: revisar la fibra' : rx < -24 ? 'Al límite' : 'Dentro de rango'
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 879,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 869,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-300",
                    children: datos.alcanzable ? 'El equipo responde.' : 'El equipo no responde.'
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 884,
                    columnNumber: 11
                }, this),
                datos.aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500",
                    children: datos.aviso
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 888,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
            lineNumber: 867,
            columnNumber: 7
        }, this);
    }
    // Dispositivos conectados
    if (datos.dispositivos) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: datos.total
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 898,
                            columnNumber: 11
                        }, this),
                        " ",
                        datos.total === 1 ? 'equipo conectado' : 'equipos conectados'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 897,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "divide-y divide-slate-800 rounded-lg border border-slate-800",
                    children: datos.dispositivos.map((d)=>{
                        var _d_mac;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center justify-between px-3 py-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-slate-200",
                                    children: d.ip
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-xs text-slate-500",
                                    children: d.mac
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 904,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, (_d_mac = d.mac) !== null && _d_mac !== void 0 ? _d_mac : d.ip, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 902,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 900,
                    columnNumber: 9
                }, this),
                datos.aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-amber-400",
                    children: datos.aviso
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 908,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
            lineNumber: 896,
            columnNumber: 7
        }, this);
    }
    // Test de velocidad
    if (datos.subida !== undefined || datos.bajada !== undefined) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-slate-700 p-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] uppercase text-slate-500",
                                    children: "Bajada"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 919,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-bold text-sky-300",
                                    children: fmtBytes(datos.bajada)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 920,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 918,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-slate-700 p-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] uppercase text-slate-500",
                                    children: "Subida"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 923,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-bold text-violet-300",
                                    children: fmtBytes(datos.subida)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                                    lineNumber: 924,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                            lineNumber: 922,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 917,
                    columnNumber: 9
                }, this),
                datos.aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500",
                    children: datos.aviso
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 927,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
            lineNumber: 916,
            columnNumber: 7
        }, this);
    }
    // Reinicio, kick, wifi: un mensaje y listo.
    if (datos.mensaje) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: datos.mensaje
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 936,
                    columnNumber: 9
                }, this),
                datos.aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500",
                    children: datos.aviso
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
                    lineNumber: 937,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
            lineNumber: 935,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
        className: "max-h-80 overflow-auto t-panel p-3 font-mono text-[11px] text-slate-300",
        children: JSON.stringify(datos, null, 2)
    }, void 0, false, {
        fileName: "[project]/src/components/clientes/HerramientasTecnicas.jsx",
        lineNumber: 943,
        columnNumber: 5
    }, this);
}
_c2 = ResultadoComando;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Herramienta");
__turbopack_context__.k.register(_c1, "HerramientasTecnicas");
__turbopack_context__.k.register(_c2, "ResultadoComando");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/FichaConsumo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FichaConsumo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-client] (ecmascript) <export enlaceWhatsApp as enlaceWhatsapp>");
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
/**
 * Consumo del abonado, mes a mes.
 *
 * Sirve para dos conversaciones distintas y por eso muestra las dos cosas:
 *
 *  - "No me anduvo tal día": el color de cada barra dice cómo estuvo el
 *    servicio —activo, con compromiso de pago, suspendido—, y eso se contesta
 *    mirando el gráfico, sin buscar en ningún lado.
 *  - "Yo no consumí tanto": el detalle día por día es lo que se puede discutir.
 *    Un total suelto no se verifica ni se refuta.
 */ const MESES = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
];
// Azul y naranja son las dos series —bajada y subida—; verde y rojo son estado
// del servicio, no series. Mezclarlos haría que un día suspendido parezca otra
// medición en vez de otra situación.
const COLOR = {
    bajada: '#3987e5',
    subida: '#d95926',
    activo: '#3987e5',
    promesa: '#047857',
    cortado: '#dc2626',
    suspendido: '#64748b'
};
const ETIQUETA_ESTADO = {
    activo: 'Servicio activo',
    promesa: 'Con compromiso de pago',
    cortado: 'Suspendido por deuda',
    suspendido: 'Suspendido'
};
function enGigas(bytes) {
    const b = Number(bytes) || 0;
    const gb = b / 1024 ** 3;
    if (gb >= 1) return "".concat(gb.toFixed(2), " GB");
    const mb = b / 1024 ** 2;
    if (mb >= 1) return "".concat(mb.toFixed(1), " MB");
    return "".concat((b / 1024).toFixed(0), " KB");
}
const aGigas = (bytes)=>Number(((Number(bytes) || 0) / 1024 ** 3).toFixed(3));
function FichaConsumo(param) {
    let { cliente, onError } = param;
    _s();
    const hoy = new Date();
    const [anio, setAnio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(hoy.getFullYear());
    const [mes, setMes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(hoy.getMonth() + 1);
    const [dias, setDias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sesiones, setSesiones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [midiendo, setMidiendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aviso, setAviso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clave = "".concat(anio, "-").concat(String(mes).padStart(2, '0'));
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FichaConsumo.useCallback[recargar]": async ()=>{
            setCargando(true);
            const ultimo = new Date(anio, mes, 0).getDate();
            const desde = "".concat(clave, "-01");
            const hasta = "".concat(clave, "-").concat(String(ultimo).padStart(2, '0'));
            const [c, s] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('consumo_diario').select('*').eq('client_id', cliente.id).gte('fecha', desde).lte('fecha', hasta).order('fecha'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('sesiones_conexion').select('*').eq('client_id', cliente.id).gte('inicio', "".concat(desde, "T00:00:00")).order('inicio', {
                    ascending: false
                }).limit(50)
            ]);
            if (c.error) onError === null || onError === void 0 ? void 0 : onError(c.error);
            var _c_data;
            setDias((_c_data = c.data) !== null && _c_data !== void 0 ? _c_data : []);
            var _s_data;
            setSesiones((_s_data = s.data) !== null && _s_data !== void 0 ? _s_data : []);
            setCargando(false);
        }
    }["FichaConsumo.useCallback[recargar]"], [
        cliente.id,
        anio,
        mes,
        clave,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FichaConsumo.useEffect": ()=>{
            recargar();
        }
    }["FichaConsumo.useEffect"], [
        recargar
    ]);
    // Un punto por día del mes, con los que no tienen medición en cero: si se
    // dibujaran solo los días medidos, un mes con tres registros se vería como un
    // mes completo y ocultaría que faltan mediciones.
    const datos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FichaConsumo.useMemo[datos]": ()=>{
            const ultimo = new Date(anio, mes, 0).getDate();
            const porDia = Object.fromEntries(dias.map({
                "FichaConsumo.useMemo[datos].porDia": (d)=>[
                        Number(String(d.fecha).slice(8, 10)),
                        d
                    ]
            }["FichaConsumo.useMemo[datos].porDia"]));
            return Array.from({
                length: ultimo
            }, {
                "FichaConsumo.useMemo[datos]": (_, i)=>{
                    const d = porDia[i + 1];
                    var _d_estado_servicio;
                    return {
                        dia: i + 1,
                        bajada: aGigas(d === null || d === void 0 ? void 0 : d.bajada_bytes),
                        subida: aGigas(d === null || d === void 0 ? void 0 : d.subida_bytes),
                        estado: (_d_estado_servicio = d === null || d === void 0 ? void 0 : d.estado_servicio) !== null && _d_estado_servicio !== void 0 ? _d_estado_servicio : null,
                        medido: Boolean(d)
                    };
                }
            }["FichaConsumo.useMemo[datos]"]);
        }
    }["FichaConsumo.useMemo[datos]"], [
        dias,
        anio,
        mes
    ]);
    const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FichaConsumo.useMemo[total]": ()=>dias.reduce({
                "FichaConsumo.useMemo[total]": (a, d)=>({
                        subida: a.subida + Number(d.subida_bytes),
                        bajada: a.bajada + Number(d.bajada_bytes)
                    })
            }["FichaConsumo.useMemo[total]"], {
                subida: 0,
                bajada: 0
            })
    }["FichaConsumo.useMemo[total]"], [
        dias
    ]);
    const cortados = dias.filter((d)=>d.estado_servicio === 'cortado').length;
    const conPromesa = dias.filter((d)=>d.estado_servicio === 'promesa').length;
    async function medirAhora() {
        setMidiendo(true);
        setAviso(null);
        try {
            var _r_fallidos;
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].consumo.recolectar();
            setAviso("Se midieron ".concat(r.medidos, " abonados.") + (((_r_fallidos = r.fallidos) === null || _r_fallidos === void 0 ? void 0 : _r_fallidos.length) ? " ".concat(r.fallidos.length, " con error.") : ''));
            await recargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setMidiendo(false);
        }
    }
    async function verReporte() {
        let descargar = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        try {
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].consumo.reporte(cliente.id, clave, descargar);
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank', 'noopener');
            setTimeout(()=>URL.revokeObjectURL(url), 60_000);
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        }
    }
    var _cliente_nombre;
    // Por WhatsApp va el resumen escrito, no el PDF: un enlace wa.me no puede
    // adjuntar archivos. El abonado recibe el número y, si lo discute, se le
    // manda el PDF por correo.
    const waResumen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__["enlaceWhatsapp"])(cliente.telefono_movil || cliente.telefono, "Hola ".concat(String((_cliente_nombre = cliente.nombre) !== null && _cliente_nombre !== void 0 ? _cliente_nombre : '').split(' ')[0], ", su consumo de ").concat(MESES[mes - 1], " de ").concat(anio, ": ") + "descarga ".concat(enGigas(total.bajada), ", subida ").concat(enGigas(total.subida), ", ") + "total ".concat(enGigas(total.bajada + total.subida), "."));
    const anios = Array.from({
        length: 4
    }, (_, i)=>hoy.getFullYear() - i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Consumo y auditoría",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variante: "secundario",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                    onClick: medirAhora,
                    cargando: midiendo,
                    children: "Medir ahora"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, void 0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Año",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: anio,
                                    onChange: (e)=>setAnio(Number(e.target.value)),
                                    children: anios.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: a,
                                            children: a
                                        }, a, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Mes",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: mes,
                                    onChange: (e)=>setMes(Number(e.target.value)),
                                    children: MESES.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: i + 1,
                                            children: m
                                        }, m, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: aviso
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-kpis",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Descarga",
                        valor: enGigas(total.bajada),
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                        color: "text-sky-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Subida",
                        valor: enGigas(total.subida),
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"],
                        color: "text-orange-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        cargando: cargando,
                        label: "Total del mes",
                        valor: enGigas(total.bajada + total.subida),
                        sub: "".concat(dias.length, " ").concat(dias.length === 1 ? 'día medido' : 'días medidos'),
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Consumo diario · ".concat(MESES[mes - 1], " de ").concat(anio),
                children: cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-10 text-center text-sm text-slate-500",
                    children: "Cargando…"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                    lineNumber: 239,
                    columnNumber: 11
                }, this) : !dias.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-slate-500",
                            children: "No hay mediciones de este mes."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: [
                                "La medición se toma de los contadores del router. Encendela con",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "rounded bg-slate-800 px-1",
                                    children: "CONSUMO_AUTOMATICO=true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                " en el middleware, o prueba con ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Medir ahora"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 248,
                                    columnNumber: 40
                                }, this),
                                " para ver si las colas del router se emparejan con este abonado."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                    lineNumber: 241,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: datos,
                                    margin: {
                                        top: 8,
                                        right: 8,
                                        left: 0,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "2 4",
                                            stroke: "#1e293b",
                                            vertical: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "dia",
                                            stroke: "#64748b",
                                            fontSize: 11,
                                            tickLine: false,
                                            axisLine: {
                                                stroke: '#1e293b'
                                            },
                                            interval: 4
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            stroke: "#64748b",
                                            fontSize: 11,
                                            tickLine: false,
                                            axisLine: false,
                                            width: 48,
                                            tickFormatter: (v)=>"".concat(v, " GB")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 266,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                background: '#0f172a',
                                                border: '1px solid #334155',
                                                borderRadius: 8,
                                                fontSize: 12
                                            },
                                            labelFormatter: (d)=>"".concat(d, " de ").concat(MESES[mes - 1]),
                                            formatter: (v, n, param)=>{
                                                let { payload } = param;
                                                return [
                                                    "".concat(v, " GB"),
                                                    n === 'bajada' ? 'Descarga' : 'Subida',
                                                    payload
                                                ];
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 274,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "bajada",
                                            stackId: "c",
                                            radius: [
                                                0,
                                                0,
                                                0,
                                                0
                                            ],
                                            children: datos.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: d.estado && d.estado !== 'activo' ? COLOR[d.estado] : COLOR.bajada
                                                }, d.dia, false, {
                                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 290,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "subida",
                                            stackId: "c",
                                            radius: [
                                                3,
                                                3,
                                                0,
                                                0
                                            ],
                                            children: datos.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: d.estado && d.estado !== 'activo' ? COLOR[d.estado] : COLOR.subida,
                                                    fillOpacity: d.estado && d.estado !== 'activo' ? 0.55 : 1
                                                }, d.dia, false, {
                                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                                    lineNumber: 300,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 298,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 256,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-slate-400",
                            children: [
                                [
                                    'bajada',
                                    'Descarga'
                                ],
                                [
                                    'subida',
                                    'Subida'
                                ],
                                [
                                    'promesa',
                                    'Con compromiso de pago'
                                ],
                                [
                                    'cortado',
                                    'Suspendido'
                                ]
                            ].map((param)=>{
                                let [k, label] = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2.5 w-2.5 rounded-sm",
                                            style: {
                                                background: COLOR[k]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 321,
                                            columnNumber: 19
                                        }, this),
                                        label
                                    ]
                                }, k, true, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 320,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this),
                        (cortados > 0 || conPromesa > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-xs text-slate-400",
                            children: [
                                cortados > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-rose-300",
                                            children: cortados
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 331,
                                            columnNumber: 21
                                        }, this),
                                        ' ',
                                        cortados === 1 ? 'día suspendido' : 'días suspendidos'
                                    ]
                                }, void 0, true),
                                cortados > 0 && conPromesa > 0 && ' · ',
                                conPromesa > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-emerald-300",
                                            children: conPromesa
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 338,
                                            columnNumber: 21
                                        }, this),
                                        ' ',
                                        conPromesa === 1 ? 'día' : 'días',
                                        " conectado por compromiso de pago"
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                            lineNumber: 328,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                    onClick: ()=>verReporte(false),
                                    children: "Reporte en PDF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "secundario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                                    onClick: ()=>verReporte(true),
                                    title: "Descargar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this),
                                waResumen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: waResumen,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center gap-2 rounded-lg border border-emerald-600/40 px-3 py-2 text-sm text-emerald-300 transition hover:bg-emerald-500/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                            lineNumber: 357,
                                            columnNumber: 19
                                        }, this),
                                        " Enviar resumen por WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Sesiones de conexión",
                subtitle: "Registros del router / RADIUS",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Inicio',
                        'Fin',
                        'IP',
                        'MAC',
                        'Equipo',
                        'Motivo'
                    ],
                    filas: sesiones,
                    vacio: "Sin sesiones registradas. Este abonado usa IP fija, no PPPoE, o todavía no se sincronizaron.",
                    renderFila: (s)=>{
                        var _s_ip, _s_mac, _s_nas, _s_motivo_desconexion;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-t border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(s.inicio)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: s.fin ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(s.fin) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-400",
                                        children: "conectado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                        lineNumber: 380,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-xs",
                                    children: (_s_ip = s.ip) !== null && _s_ip !== void 0 ? _s_ip : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-xs",
                                    children: (_s_mac = s.mac) !== null && _s_mac !== void 0 ? _s_mac : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: (_s_nas = s.nas) !== null && _s_nas !== void 0 ? _s_nas : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs text-slate-500",
                                    children: (_s_motivo_desconexion = s.motivo_desconexion) !== null && _s_motivo_desconexion !== void 0 ? _s_motivo_desconexion : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, s.id, true, {
                            fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
                lineNumber: 365,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaConsumo.jsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(FichaConsumo, "CENSQb+aYD/Ff0OWaq2vMjSTAC4=");
_c = FichaConsumo;
var _c;
__turbopack_context__.k.register(_c, "FichaConsumo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/FichaComunicaciones.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FichaComunicaciones
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
/**
 * Todo lo que se le dijo al abonado, por el canal que sea.
 *
 * Un solo historial para los cuatro canales porque la pregunta que se hace en
 * el mostrador es una sola: "¿a este se le avisó?". Tener que mirar en cuatro
 * lugares para contestarla es la forma de que nadie la conteste.
 *
 * Los estados dicen la verdad de cada canal y no lo que quedaría lindo: el
 * correo confirma que el servidor lo aceptó, no que lo leyeron; un WhatsApp sin
 * API configurada queda en "pendiente" hasta que una persona confirme que lo
 * mandó. Marcar como entregado algo que nadie mandó le daría al ISP una prueba
 * falsa frente a un reclamo.
 */ const CANALES = {
    email: {
        label: 'Email',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        color: 'text-sky-400'
    },
    whatsapp: {
        label: 'WhatsApp',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
        color: 'text-emerald-400'
    },
    telegram: {
        label: 'Telegram',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
        color: 'text-cyan-400'
    },
    sms: {
        label: 'SMS',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        color: 'text-violet-400'
    }
};
const ESTADOS = {
    pendiente: {
        label: 'Pendiente de envío',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        clase: 'text-amber-400'
    },
    enviado: {
        label: 'Enviado',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        clase: 'text-sky-400'
    },
    entregado: {
        label: 'Entregado',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"],
        clase: 'text-emerald-400'
    },
    leido: {
        label: 'Leído',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"],
        clase: 'text-emerald-300'
    },
    fallido: {
        label: 'Falló',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
        clase: 'text-rose-400'
    }
};
const fechaHora = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(f) : '—';
function FichaComunicaciones(param) {
    let { cliente, onError } = param;
    var _CANALES_redactando_canal, _redactando_cuerpo;
    _s();
    const [mensajes, setMensajes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [plantillas, setPlantillas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [canales, setCanales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [redactando, setRedactando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [enviando, setEnviando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aviso, setAviso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FichaComunicaciones.useCallback[recargar]": async ()=>{
            setCargando(true);
            const [m, p] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('comunicaciones').select('*').eq('client_id', cliente.id).order('created_at', {
                    ascending: false
                }).limit(100),
                // Solo las que se mandan por un canal: las 'web' (la pantalla de aviso
                // antes del corte) y las 'documento' (contrato, actas) no son mensajes.
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('plantillas_mensaje').select('*').eq('activa', true).in('canal', [
                    ...Object.keys(CANALES),
                    'cualquiera'
                ]).order('nombre')
            ]);
            if (m.error) onError === null || onError === void 0 ? void 0 : onError(m.error);
            var _m_data;
            setMensajes((_m_data = m.data) !== null && _m_data !== void 0 ? _m_data : []);
            var _p_data;
            setPlantillas((_p_data = p.data) !== null && _p_data !== void 0 ? _p_data : []);
            setCargando(false);
            // Qué canales están configurados hoy. Si el middleware no responde, la
            // pantalla sigue sirviendo para leer el historial.
            try {
                setCanales(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].comunicaciones.canales());
            } catch (e) {
                setCanales({});
            }
        }
    }["FichaComunicaciones.useCallback[recargar]"], [
        cliente.id,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FichaComunicaciones.useEffect": ()=>{
            recargar();
        }
    }["FichaComunicaciones.useEffect"], [
        recargar
    ]);
    function abrir(canal) {
        setAviso(null);
        setRedactando({
            canal,
            asunto: '',
            cuerpo: '',
            plantilla_id: ''
        });
    }
    function usarPlantilla(id) {
        const p = plantillas.find((x)=>x.id === id);
        setRedactando((r)=>{
            var _p_asunto, _p_cuerpo;
            return {
                ...r,
                plantilla_id: id,
                asunto: (_p_asunto = p === null || p === void 0 ? void 0 : p.asunto) !== null && _p_asunto !== void 0 ? _p_asunto : r.asunto,
                cuerpo: (_p_cuerpo = p === null || p === void 0 ? void 0 : p.cuerpo) !== null && _p_cuerpo !== void 0 ? _p_cuerpo : r.cuerpo
            };
        });
    }
    async function enviar(e) {
        e.preventDefault();
        setEnviando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            var _redactando_asunto;
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].comunicaciones.enviar({
                client_id: cliente.id,
                canal: redactando.canal,
                asunto: ((_redactando_asunto = redactando.asunto) === null || _redactando_asunto === void 0 ? void 0 : _redactando_asunto.trim()) || null,
                cuerpo: redactando.cuerpo,
                plantilla_id: redactando.plantilla_id || null
            });
            // WhatsApp sin API: el sistema preparó el texto, lo manda una persona.
            if (r.enlace) {
                window.open(r.enlace, '_blank', 'noopener');
                setAviso('Se abrió WhatsApp con el mensaje listo. Cuando lo mandes, márcalo como enviado en el historial.');
            } else {
                setAviso('Mensaje enviado.');
            }
            setRedactando(null);
            await recargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
            // Aunque falle, el intento quedó escrito: recargar lo muestra.
            await recargar();
        } finally{
            setEnviando(false);
        }
    }
    async function marcarEnviado(m) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].comunicaciones.marcarEnviado(m.id);
            await recargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        }
    }
    const disponibles = Object.entries(CANALES);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Centro de envíos",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                        children: disponibles.map((param)=>{
                            let [clave, c] = param;
                            const estado = canales[clave];
                            const Icon = c.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>abrir(clave),
                                className: "flex flex-col items-center gap-1.5 rounded-xl border border-slate-700 p-3 text-xs text-slate-300 transition hover:border-sky-500/60 hover:text-sky-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 20,
                                        className: c.color
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    c.label,
                                    estado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] ".concat(estado.listo ? 'text-emerald-400' : estado.manual ? 'text-amber-400' : 'text-slate-500'),
                                        children: estado.listo ? 'listo' : estado.manual ? 'manual' : 'sin configurar'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                        lineNumber: 177,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, clave, true, {
                                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: aviso
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this),
                    plantillas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                                children: "Plantillas rápidas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: plantillas.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            const canal = p.canal === 'cualquiera' ? cliente.canal_preferido || 'whatsapp' : p.canal;
                                            var _p_asunto;
                                            setRedactando({
                                                canal,
                                                asunto: (_p_asunto = p.asunto) !== null && _p_asunto !== void 0 ? _p_asunto : '',
                                                cuerpo: p.cuerpo,
                                                plantilla_id: p.id
                                            });
                                        },
                                        className: "flex items-center gap-1.5 rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300 transition hover:border-sky-500/60 hover:text-sky-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            p.nombre
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Historial",
                subtitle: mensajes.length ? "".concat(mensajes.length, " ").concat(mensajes.length === 1 ? 'mensaje' : 'mensajes') : 'Todavía no se le escribió',
                children: cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500",
                    children: "Cargando…"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                    lineNumber: 235,
                    columnNumber: 11
                }, this) : !mensajes.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-6 text-center text-sm text-slate-500",
                    children: "No hay mensajes registrados para este abonado."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "space-y-3",
                    children: mensajes.map((m)=>{
                        var _CANALES_m_canal;
                        const canal = (_CANALES_m_canal = CANALES[m.canal]) !== null && _CANALES_m_canal !== void 0 ? _CANALES_m_canal : CANALES.email;
                        var _ESTADOS_m_estado;
                        const estado = (_ESTADOS_m_estado = ESTADOS[m.estado]) !== null && _ESTADOS_m_estado !== void 0 ? _ESTADOS_m_estado : ESTADOS.pendiente;
                        const Icon = canal.icon;
                        const IconEstado = estado.icon;
                        var _m_destino;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "t-card-sm p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 14,
                                            className: canal.color
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 254,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-slate-300",
                                            children: canal.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 255,
                                            columnNumber: 21
                                        }, this),
                                        m.automatico && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-slate-700 px-1.5 py-0.5 text-[10px] text-slate-500",
                                            children: "automático"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 257,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-500",
                                            children: [
                                                "→ ",
                                                (_m_destino = m.destino) !== null && _m_destino !== void 0 ? _m_destino : 'sin destino'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 261,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-auto flex items-center gap-1 text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEstado, {
                                                    size: 13,
                                                    className: estado.clase
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: estado.clase,
                                                    children: estado.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 262,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 253,
                                    columnNumber: 19
                                }, this),
                                m.asunto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm font-medium text-slate-200",
                                    children: m.asunto
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 268,
                                    columnNumber: 32
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 whitespace-pre-wrap text-sm text-slate-300",
                                    children: m.cuerpo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 269,
                                    columnNumber: 19
                                }, this),
                                m.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 rounded bg-rose-500/10 px-2 py-1 text-[11px] text-rose-300",
                                    children: m.error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 272,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: fechaHora(m.created_at)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 278,
                                            columnNumber: 21
                                        }, this),
                                        m.enviado_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "enviado ",
                                                fechaHora(m.enviado_at)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 279,
                                            columnNumber: 38
                                        }, this),
                                        m.entregado_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "entregado ",
                                                fechaHora(m.entregado_at)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 280,
                                            columnNumber: 40
                                        }, this),
                                        m.estado === 'pendiente' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>marcarEnviado(m),
                                            className: "ml-auto text-sky-400 underline",
                                            children: "Ya lo mandé"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                            lineNumber: 283,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 277,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, m.id, true, {
                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                            lineNumber: 249,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                    lineNumber: 241,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: Boolean(redactando),
                titulo: redactando ? "Nuevo ".concat((_CANALES_redactando_canal = CANALES[redactando.canal]) === null || _CANALES_redactando_canal === void 0 ? void 0 : _CANALES_redactando_canal.label) : '',
                onCerrar: ()=>setRedactando(null),
                ancho: "max-w-xl",
                children: redactando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: enviar,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    hint: "Por dónde se le manda el mensaje.",
                                    label: "Canal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: redactando.canal,
                                        onChange: (e)=>setRedactando((r)=>({
                                                    ...r,
                                                    canal: e.target.value
                                                })),
                                        children: disponibles.map((param)=>{
                                            let [clave, c] = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: clave,
                                                children: c.label
                                            }, clave, false, {
                                                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                                lineNumber: 315,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    hint: "Un texto ya armado para no escribirlo cada vez.",
                                    label: "Plantilla",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: redactando.plantilla_id,
                                        onChange: (e)=>usarPlantilla(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— escribir a mano —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                                lineNumber: 327,
                                                columnNumber: 19
                                            }, this),
                                            plantillas.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: p.id,
                                                    children: p.nombre
                                                }, p.id, false, {
                                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this),
                        canales[redactando.canal] && !canales[redactando.canal].listo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: canales[redactando.canal].nota
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                            lineNumber: 338,
                            columnNumber: 15
                        }, this),
                        redactando.canal === 'email' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Asunto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Ej.: Tu factura de octubre",
                                value: redactando.asunto,
                                onChange: (e)=>setRedactando((r)=>({
                                            ...r,
                                            asunto: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                lineNumber: 343,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                            lineNumber: 342,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Mensaje",
                            hint: "Acepta {{nombre}}, {{primer_nombre}}, {{saldo}}, {{plan}}, {{fecha}}",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                placeholder: "Ej.: Hola {{primer_nombre}}, tu factura vence el {{fecha}}",
                                rows: 6,
                                value: redactando.cuerpo,
                                onChange: (e)=>setRedactando((r)=>({
                                            ...r,
                                            cuerpo: e.target.value
                                        })),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                lineNumber: 354,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-500",
                            children: [
                                "Va a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: destinoVisible(redactando.canal, cliente)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 363,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    type: "button",
                                    onClick: ()=>setRedactando(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    type: "submit",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
                                    cargando: enviando,
                                    disabled: !((_redactando_cuerpo = redactando.cuerpo) === null || _redactando_cuerpo === void 0 ? void 0 : _redactando_cuerpo.trim()),
                                    children: "Enviar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                                    lineNumber: 370,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                            lineNumber: 366,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaComunicaciones.jsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(FichaComunicaciones, "GqDs3o6lanb+5xJrZ0LyHvfLLXc=");
_c = FichaComunicaciones;
/** A dónde va el mensaje según el canal, para decirlo antes de mandarlo. */ function destinoVisible(canal, cliente) {
    if (canal === 'email') return cliente.email || 'sin correo cargado';
    if (canal === 'telegram') return cliente.telegram_chat_id || 'sin chat de Telegram';
    return cliente.telefono_movil || cliente.telefono || 'sin teléfono cargado';
}
var _c;
__turbopack_context__.k.register(_c, "FichaComunicaciones");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/DatosContrato.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DatosContrato
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-client] (ecmascript) <export default as FileSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
/**
 * Lo que falta para que el contrato de adhesión salga completo.
 *
 * ── Por qué un formulario y no una lista de reproches ──
 *
 * Porque antes se avisaba qué faltaba y el que imprimía tenía que ir a buscar
 * cada campo a una pantalla distinta —la provincia a la ficha, la compartición a
 * los planes— y volver. En la práctica eso significa imprimirlo con los huecos.
 *
 * Acá se completa y se genera en el mismo paso.
 *
 * ── Lo que este formulario NO hace ──
 *
 * Inventar respuestas. "Sin responder" es una opción y es la que viene marcada:
 * el contrato imprime las dos casillas vacías, que es lo correcto cuando nadie
 * le preguntó nada al abonado.
 */ /**
 * Los niveles de compartición, tal como los enumera el anexo 1f.
 *
 * Dice "(1:1, 2:1, 4:1, 8:4)" —el último con un 4, no con un 1—. Se respeta lo
 * que dice el formulario inscrito aunque parezca un error de tipeo: quien lo
 * compare contra el modelo va a buscar exactamente eso.
 *
 * Y se puede escribir otro, porque la lista del formulario es un ejemplo y hay
 * ISP que declaran valores distintos.
 */ const COMPARTICION = [
    '1:1',
    '2:1',
    '4:1',
    '8:4'
];
/**
 * Las cinco redes de acceso y los cuatro tipos de cuenta del anexo 1f.
 *
 * El vacío no es "ninguno": es "que lo deduzca el sistema", que es lo que venía
 * haciendo y acierta en casi todos los casos. Lo que la deducción no puede
 * distinguir es coaxial de par de cobre, ni un cibercafé de una casa.
 */ const REDES = [
    [
        '',
        '— se deduce —'
    ],
    [
        'fibra',
        'Fibra óptica'
    ],
    [
        'inalambrico',
        'Inalámbrico'
    ],
    [
        'par_cobre',
        'Par de cobre'
    ],
    [
        'coaxial',
        'Coaxial'
    ],
    [
        'otros',
        'Otros'
    ]
];
const CUENTAS = [
    [
        '',
        '— se deduce del plan —'
    ],
    [
        'residencial',
        'Residencial'
    ],
    [
        'corporativo',
        'Corporativo'
    ],
    [
        'cibercafe',
        'Cibercafé'
    ],
    [
        'otros',
        'Otros tipos'
    ]
];
/**
 * Cómo se pactó la instalación, que es lo que determina la permanencia.
 *
 * ── Por qué van juntas y no como dos campos sueltos ──
 *
 * Porque son las dos caras del mismo trato: la permanencia es la contrapartida
 * de la instalación gratis. Quien paga la instalación ya puso el dinero y no
 * debería atarse a nada; quien no la paga se acoge a la permanencia a cambio.
 *
 * Elegirlas por separado permite armar el contrato que cobra dos veces lo mismo
 * —instalación pagada Y dos años de permanencia—, que es justo lo que un abonado
 * puede impugnar. Con estos tres tratos eso no pasa por descuido; y si hace
 * falta otra combinación, está "A medida".
 */ const TRATOS = [
    {
        clave: 'paga',
        label: 'Paga la instalación — sin permanencia',
        ayuda: 'Ya puso el dinero: no se ata a ningún plazo',
        permanencia: 0,
        // `null` = se le cobra lo que el prestador tenga configurado.
        instalacion: null
    },
    /**
   * Los dos tratos con instalación gratis dejan la TARIFA, no un cero.
   *
   * ── Por qué no va cero acá ──
   *
   * Porque el campo no es "lo que se le cobró": es el renglón "Valor
   * instalación/configuración" del anexo 1f, y ahí va la tarifa. La cláusula de
   * permanencia manda a buscarla justamente ahí —"pagará el costo de instalación
   * (se detalla en Tarifas)"— así que poniendo cero el contrato terminaba
   * remitiendo a un importe de 0.00 y la penalidad quedaba sin cifra.
   *
   * Que la instalación vaya de regalo mientras cumpla se dice en su propio
   * renglón, "Beneficios por permanencia mínima: INSTALACIÓN GRATIS". Son dos
   * casillas distintas del formulario y cada una dice lo suyo.
   */ {
        clave: 'gratis_24',
        label: 'Instalación gratis — 24 meses',
        ayuda: 'La permanencia es la contrapartida de no cobrarle la instalación',
        permanencia: 24,
        instalacion: null
    },
    {
        clave: 'comercial_12',
        label: 'Comercial: instalación gratis — 12 meses',
        ayuda: 'Un año, como se pacta con los locales',
        permanencia: 12,
        instalacion: null
    },
    {
        clave: 'medida',
        label: 'A medida',
        ayuda: 'Se escriben los dos valores'
    }
];
/** Con qué trato coincide lo que hay guardado. */ function tratoDe(permanencia, instalacion) {
    if (permanencia == null) return 'medida';
    const t = TRATOS.find((x)=>x.clave !== 'medida' && x.permanencia === Number(permanencia) && (x.instalacion === null ? instalacion == null : Number(instalacion) === x.instalacion));
    var _t_clave;
    return (_t_clave = t === null || t === void 0 ? void 0 : t.clave) !== null && _t_clave !== void 0 ? _t_clave : 'medida';
}
/**
 * Por qué le corresponde tarifa preferencial.
 *
 * El formulario de la ARCOTEL junta las dos en una sola casilla —"¿es adulto
 * mayor o discapacitado?"— y eso es lo que se imprime. Pero la oficina necesita
 * saber cuál: los descuentos que fija la ley no son los mismos, y la
 * discapacidad necesita carné mientras que la edad se ve en la cédula.
 */ const CONDICIONES = [
    [
        'ninguna',
        'Ninguna'
    ],
    [
        'tercera_edad',
        'Tercera edad'
    ],
    [
        'discapacidad',
        'Discapacidad'
    ],
    [
        'ambas',
        'Tercera edad y discapacidad'
    ]
];
/** Sí / No / sin responder. El vacío es "todavía no se preguntó". */ function SiNo(param) {
    let { label, hint, valor, onChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
        label: label,
        hint: hint,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: valor === null || valor === undefined ? '' : String(valor),
            onChange: (e)=>onChange(e.target.value === '' ? null : e.target.value === 'true'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "— sin responder —"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "true",
                    children: "SÍ"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "false",
                    children: "NO"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c = SiNo;
function DatosContrato(param) {
    let { cliente, plan: planInicial, planes = [], tabla = 'clientes', arbitrajePorDefecto = null, abierto, onCerrar, onListo, onError } = param;
    var _TRATOS_find;
    _s();
    var _cliente_provincia, _cliente_canton, _cliente_ciudad, _cliente_parroquia, _cliente_condicion_especial, _cliente_tarifa_preferencial, _cliente_acepta_arbitraje, _ref, _cliente_acepta_datos_personales, _cliente_equipo_modalidad, _cliente_red_acceso, _cliente_tipo_cuenta, _cliente_permanencia_meses, _cliente_valor_instalacion, _planInicial_id, _ref1, _planInicial_comparticion, _planInicial_minima_bajada_kbps, _planInicial_minima_subida_kbps;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        provincia: (_cliente_provincia = cliente === null || cliente === void 0 ? void 0 : cliente.provincia) !== null && _cliente_provincia !== void 0 ? _cliente_provincia : '',
        canton: (_cliente_canton = cliente === null || cliente === void 0 ? void 0 : cliente.canton) !== null && _cliente_canton !== void 0 ? _cliente_canton : '',
        ciudad: (_cliente_ciudad = cliente === null || cliente === void 0 ? void 0 : cliente.ciudad) !== null && _cliente_ciudad !== void 0 ? _cliente_ciudad : '',
        parroquia: (_cliente_parroquia = cliente === null || cliente === void 0 ? void 0 : cliente.parroquia) !== null && _cliente_parroquia !== void 0 ? _cliente_parroquia : '',
        condicion_especial: (_cliente_condicion_especial = cliente === null || cliente === void 0 ? void 0 : cliente.condicion_especial) !== null && _cliente_condicion_especial !== void 0 ? _cliente_condicion_especial : 'ninguna',
        tarifa_preferencial: (_cliente_tarifa_preferencial = cliente === null || cliente === void 0 ? void 0 : cliente.tarifa_preferencial) !== null && _cliente_tarifa_preferencial !== void 0 ? _cliente_tarifa_preferencial : null,
        // `??` en cadena: manda lo que ya se respondió; si nadie respondió, lo que
        // el ISP propone; y si el ISP no dijo nada, sin responder.
        acepta_arbitraje: (_ref = (_cliente_acepta_arbitraje = cliente === null || cliente === void 0 ? void 0 : cliente.acepta_arbitraje) !== null && _cliente_acepta_arbitraje !== void 0 ? _cliente_acepta_arbitraje : arbitrajePorDefecto) !== null && _ref !== void 0 ? _ref : null,
        // Sin valor por defecto, a diferencia del arbitraje: es un consentimiento
        // para uso comercial de los datos y consulta a burós de crédito. Que el
        // ISP lo proponga marcado sería registrar un permiso que nadie dio.
        acepta_datos_personales: (_cliente_acepta_datos_personales = cliente === null || cliente === void 0 ? void 0 : cliente.acepta_datos_personales) !== null && _cliente_acepta_datos_personales !== void 0 ? _cliente_acepta_datos_personales : null,
        equipo_modalidad: (_cliente_equipo_modalidad = cliente === null || cliente === void 0 ? void 0 : cliente.equipo_modalidad) !== null && _cliente_equipo_modalidad !== void 0 ? _cliente_equipo_modalidad : 'arrendamiento',
        red_acceso: (_cliente_red_acceso = cliente === null || cliente === void 0 ? void 0 : cliente.red_acceso) !== null && _cliente_red_acceso !== void 0 ? _cliente_red_acceso : '',
        tipo_cuenta: (_cliente_tipo_cuenta = cliente === null || cliente === void 0 ? void 0 : cliente.tipo_cuenta) !== null && _cliente_tipo_cuenta !== void 0 ? _cliente_tipo_cuenta : '',
        permanencia_meses: (_cliente_permanencia_meses = cliente === null || cliente === void 0 ? void 0 : cliente.permanencia_meses) !== null && _cliente_permanencia_meses !== void 0 ? _cliente_permanencia_meses : '',
        valor_instalacion: (_cliente_valor_instalacion = cliente === null || cliente === void 0 ? void 0 : cliente.valor_instalacion) !== null && _cliente_valor_instalacion !== void 0 ? _cliente_valor_instalacion : '',
        plan_id: (_ref1 = (_planInicial_id = planInicial === null || planInicial === void 0 ? void 0 : planInicial.id) !== null && _planInicial_id !== void 0 ? _planInicial_id : cliente === null || cliente === void 0 ? void 0 : cliente.plan_id) !== null && _ref1 !== void 0 ? _ref1 : '',
        comparticion: (_planInicial_comparticion = planInicial === null || planInicial === void 0 ? void 0 : planInicial.comparticion) !== null && _planInicial_comparticion !== void 0 ? _planInicial_comparticion : '',
        minima_bajada_kbps: (_planInicial_minima_bajada_kbps = planInicial === null || planInicial === void 0 ? void 0 : planInicial.minima_bajada_kbps) !== null && _planInicial_minima_bajada_kbps !== void 0 ? _planInicial_minima_bajada_kbps : '',
        minima_subida_kbps: (_planInicial_minima_subida_kbps = planInicial === null || planInicial === void 0 ? void 0 : planInicial.minima_subida_kbps) !== null && _planInicial_minima_subida_kbps !== void 0 ? _planInicial_minima_subida_kbps : ''
    });
    var _planes_find, _ref2;
    /**
   * El plan que rige, que ahora se puede cambiar acá mismo.
   *
   * ── Por qué hacía falta elegirlo ──
   *
   * Las condiciones técnicas del anexo 1f —compartición y velocidades mínimas—
   * salen del plan, y el bloque que las muestra solo aparecía si el plan YA
   * estaba elegido. En una orden de venta sin plan cargado, el vendedor no veía
   * ese bloque y el contrato salía sin compartición: un dato que la ARCOTEL
   * exige. Tenía que ir a otra pantalla, elegir el plan, y volver.
   */ const plan = (_ref2 = (_planes_find = planes.find((p)=>p.id === form.plan_id)) !== null && _planes_find !== void 0 ? _planes_find : planInicial) !== null && _ref2 !== void 0 ? _ref2 : null;
    const [trato, setTrato] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DatosContrato.useState": ()=>tratoDe(cliente === null || cliente === void 0 ? void 0 : cliente.permanencia_meses, cliente === null || cliente === void 0 ? void 0 : cliente.valor_instalacion)
    }["DatosContrato.useState"]);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const set = (campo)=>(e)=>setForm((f)=>({
                    ...f,
                    [campo]: e.target.value
                }));
    const setValor = (campo)=>(v)=>setForm((f)=>({
                    ...f,
                    [campo]: v
                }));
    /** Elegir un trato completa los dos campos; "A medida" los deja como estén. */ function elegirTrato(clave) {
        setTrato(clave);
        const t = TRATOS.find((x)=>x.clave === clave);
        if (!t || clave === 'medida') return;
        setForm((f)=>({
                ...f,
                permanencia_meses: String(t.permanencia),
                valor_instalacion: t.instalacion === null ? '' : String(t.instalacion)
            }));
    }
    // La compartición se elige de la lista o se escribe. `otro` es el estado en
    // que el campo de texto queda visible aunque todavía esté vacío.
    const escrita = form.comparticion && !COMPARTICION.includes(form.comparticion);
    const [otroNivel, setOtroNivel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(escrita);
    async function guardarYGenerar(e) {
        e.preventDefault();
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            /**
       * La misma pantalla guarda en la ficha o en la orden.
       *
       * Las columnas se llaman igual en las dos tablas justamente para esto: el
       * vendedor anota en la calle sobre la orden, y al dar de alta esos datos
       * viajan solos a la ficha.
       *
       * `tarifa_preferencial` no se manda cuando hay una condición elegida: la
       * base la resuelve sola a partir de `condicion_especial`, y mandar las dos
       * abriría la puerta a que se contradigan.
       */ const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from(tabla).update({
                provincia: form.provincia.trim() || null,
                canton: form.canton.trim() || null,
                ciudad: form.ciudad.trim() || null,
                parroquia: form.parroquia.trim() || null,
                condicion_especial: form.condicion_especial,
                ...form.condicion_especial === 'ninguna' ? {
                    tarifa_preferencial: form.tarifa_preferencial
                } : {},
                acepta_arbitraje: form.acepta_arbitraje,
                acepta_datos_personales: form.acepta_datos_personales,
                equipo_modalidad: form.equipo_modalidad,
                // Vacío va como NULL: quiere decir "deducilo", no "ninguno".
                red_acceso: form.red_acceso || null,
                tipo_cuenta: form.tipo_cuenta || null,
                // Y acá el vacío quiere decir "lo que diga el prestador". Un CERO es
                // otra cosa: se pactó expresamente que no hay permanencia, o que la
                // instalación no se cobra.
                permanencia_meses: form.permanencia_meses === '' ? null : Number(form.permanencia_meses),
                valor_instalacion: form.valor_instalacion === '' ? null : Number(form.valor_instalacion),
                /**
           * El plan solo se pisa si acá se eligió uno.
           *
           * El desplegable arranca con el que ya tenía; mandar siempre su valor
           * sería inofensivo, pero si alguien abre el formulario de una orden
           * sin plan y lo guarda sin tocarlo, un `null` borraría el plan que
           * otra pantalla pudo haber puesto mientras tanto.
           */ ...form.plan_id ? {
                    plan_id: form.plan_id
                } : {}
            }).eq('id', cliente.id);
            if (error) throw error;
            /**
       * Lo del plan se guarda aparte porque afecta a MÁS DE UN ABONADO.
       *
       * La compartición y la velocidad mínima efectiva son del plan: tocarlas
       * acá cambia lo que dirá el contrato de todos los que tengan ese plan. Por
       * eso el formulario lo dice y por eso solo se escribe si el usuario
       * realmente puso algo.
       */ if (plan === null || plan === void 0 ? void 0 : plan.id) {
                const cambios = {};
                if (form.comparticion.trim()) cambios.comparticion = form.comparticion.trim();
                if (form.minima_bajada_kbps !== '') cambios.minima_bajada_kbps = Number(form.minima_bajada_kbps);
                if (form.minima_subida_kbps !== '') cambios.minima_subida_kbps = Number(form.minima_subida_kbps);
                if (Object.keys(cambios).length) {
                    const { error: errPlan } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('planes_velocidad').update(cambios).eq('id', plan.id);
                    if (errPlan) throw errPlan;
                }
            }
            await (onListo === null || onListo === void 0 ? void 0 : onListo());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        abierto: abierto,
        titulo: "Datos para el contrato de adhesión",
        onCerrar: onCerrar,
        ancho: "max-w-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: guardarYGenerar,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: "Lo que quede sin responder se imprime en blanco y se llena a mano el día de la firma."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Domicilio del abonado"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "provincia",
                                    label: "Provincia",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: form.provincia,
                                        onChange: set('provincia'),
                                        placeholder: "Cotopaxi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "canton",
                                    label: "Cantón",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: form.canton,
                                        onChange: set('canton'),
                                        placeholder: "La Maná"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "ciudad",
                                    label: "Ciudad",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: form.ciudad,
                                        onChange: set('ciudad'),
                                        placeholder: "La Maná"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "parroquia",
                                    label: "Parroquia",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: form.parroquia,
                                        onChange: set('parroquia'),
                                        placeholder: "El Carmen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Lo que responde el abonado"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "condicion_especial",
                                    label: "Condición del abonado",
                                    hint: form.condicion_especial === 'ninguna' ? 'Si eliges una, el contrato marca la tarifa preferencial' : 'El contrato va a marcar SÍ en tarifa preferencial',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: form.condicion_especial,
                                        onChange: set('condicion_especial'),
                                        children: CONDICIONES.map((param)=>{
                                            let [valor, texto] = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: valor,
                                                children: texto
                                            }, valor, false, {
                                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                lineNumber: 375,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                form.condicion_especial === 'ninguna' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiNo, {
                                    label: "¿Aplica tarifa preferencial igual?",
                                    hint: "Por un motivo fuera del catálogo",
                                    valor: form.tarifa_preferencial,
                                    onChange: setValor('tarifa_preferencial')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiNo, {
                                    label: "¿Acepta someterse a arbitraje?",
                                    hint: "Puede significar costos para el abonado",
                                    valor: form.acepta_arbitraje,
                                    onChange: setValor('acepta_arbitraje')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiNo, {
                                    label: "¿Acepta el uso de sus datos personales?",
                                    hint: "Anexo 2 · publicidad y consulta a burós de crédito",
                                    valor: form.acepta_datos_personales,
                                    onChange: setValor('acepta_datos_personales')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "equipo_modalidad",
                                    label: "Equipo",
                                    hint: "Anexo 3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: form.equipo_modalidad,
                                        onChange: set('equipo_modalidad'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "arrendamiento",
                                                children: "Arrendamiento"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "compra",
                                                children: "Compra"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Instalación y permanencia · cláusula quinta y anexo 1f"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Cómo se pactó",
                                    hint: (_TRATOS_find = TRATOS.find((t)=>t.clave === trato)) === null || _TRATOS_find === void 0 ? void 0 : _TRATOS_find.ayuda,
                                    className: "sm:col-span-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: trato,
                                        onChange: (e)=>elegirTrato(e.target.value),
                                        children: TRATOS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: t.clave,
                                                children: t.label
                                            }, t.clave, false, {
                                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                lineNumber: 433,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Permanencia (meses)",
                                    hint: "0 = sin permanencia · vacío = la del prestador",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 0,
                                        value: form.permanencia_meses,
                                        onChange: (e)=>{
                                            set('permanencia_meses')(e);
                                            setTrato('medida');
                                        },
                                        placeholder: "la del prestador"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Valor instalación/configuración (USD)",
                                    hint: "La tarifa que se detalla en Tarifas · vacío = la del prestador",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        step: "0.01",
                                        min: 0,
                                        value: form.valor_instalacion,
                                        onChange: (e)=>{
                                            set('valor_instalacion')(e);
                                            setTrato('medida');
                                        },
                                        placeholder: "la del prestador"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this),
                        Number(form.permanencia_meses) > 0 && Number(form.valor_instalacion) === 0 && form.valor_instalacion !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/5 px-3 py-2 text-xs text-amber-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 14,
                                    className: "mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Lo atas ",
                                        form.permanencia_meses,
                                        " meses, pero la tarifa de instalación queda en",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: " 0.00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                            lineNumber: 491,
                                            columnNumber: 17
                                        }, this),
                                        ". La cláusula de permanencia remite a ese renglón, así que el contrato va a decir que quien se va antes paga cero. Pon acá la tarifa real; que sea gratis mientras cumpla ya lo dice el renglón de beneficios."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 487,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Condiciones del servicio · anexo 1f"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "red_acceso",
                                    hint: "Fibra, radio o cable.",
                                    label: "Red de acceso",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: form.red_acceso,
                                        onChange: set('red_acceso'),
                                        children: REDES.map((param)=>{
                                            let [valor, texto] = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: valor,
                                                children: texto
                                            }, valor, false, {
                                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                lineNumber: 507,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "tipo_cuenta",
                                    hint: "Hogar o empresa.",
                                    label: "Tipo de cuenta",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: form.tipo_cuenta,
                                        onChange: set('tipo_cuenta'),
                                        children: CUENTAS.map((param)=>{
                                            let [valor, texto] = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: valor,
                                                children: texto
                                            }, valor, false, {
                                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                lineNumber: 516,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 514,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 499,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Plan contratado · anexo 1f"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            campo: "plan_id",
                            label: "Plan",
                            hint: planes.length ? 'De acá salen la compartición y las velocidades del anexo' : 'No se pudieron cargar los planes: se usa el que ya tenía',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: form.plan_id,
                                onChange: (e)=>{
                                    const elegido = planes.find((p)=>p.id === e.target.value);
                                    // Al cambiar de plan, las condiciones técnicas se traen del
                                    // nuevo: dejar las del anterior imprimiría la compartición
                                    // equivocada sin que nadie lo note.
                                    setForm((f)=>{
                                        var _elegido_comparticion, _elegido_minima_bajada_kbps, _elegido_minima_subida_kbps;
                                        return {
                                            ...f,
                                            plan_id: e.target.value,
                                            comparticion: (_elegido_comparticion = elegido === null || elegido === void 0 ? void 0 : elegido.comparticion) !== null && _elegido_comparticion !== void 0 ? _elegido_comparticion : '',
                                            minima_bajada_kbps: (_elegido_minima_bajada_kbps = elegido === null || elegido === void 0 ? void 0 : elegido.minima_bajada_kbps) !== null && _elegido_minima_bajada_kbps !== void 0 ? _elegido_minima_bajada_kbps : '',
                                            minima_subida_kbps: (_elegido_minima_subida_kbps = elegido === null || elegido === void 0 ? void 0 : elegido.minima_subida_kbps) !== null && _elegido_minima_subida_kbps !== void 0 ? _elegido_minima_subida_kbps : ''
                                        };
                                    });
                                    setOtroNivel(false);
                                },
                                disabled: !planes.length,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "— sin elegir —"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this),
                                    (planes.length ? planes : [
                                        planInicial
                                    ].filter(Boolean)).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: [
                                                p.nombre,
                                                p.precio != null ? " · ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dineroCero"])(p.precio)) : ''
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                            lineNumber: 557,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                lineNumber: 537,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this),
                        !form.plan_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/5 px-3 py-2 text-xs text-amber-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 14,
                                    className: "mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Sin plan elegido, el contrato sale sin nivel de compartición ni velocidades mínimas, que el anexo 1f exige declarar."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 566,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this),
                plan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                            children: [
                                "Condiciones técnicas del plan ",
                                plan.nombre,
                                " · anexo 1f"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 578,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/5 px-3 py-2 text-xs text-amber-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 14,
                                    className: "mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Estos dos valores son del plan, no de este abonado: se van a usar en el contrato de todos los que tengan ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: plan.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                            lineNumber: 591,
                                            columnNumber: 38
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 587,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "comparticion",
                                    label: "Nivel de compartición",
                                    children: otroNivel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: form.comparticion,
                                        onChange: set('comparticion'),
                                        placeholder: "16:1",
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 598,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: form.comparticion,
                                        onChange: (e)=>{
                                            if (e.target.value === '__otro') {
                                                setOtroNivel(true);
                                                setForm((f)=>({
                                                        ...f,
                                                        comparticion: ''
                                                    }));
                                            } else {
                                                setForm((f)=>({
                                                        ...f,
                                                        comparticion: e.target.value
                                                    }));
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— sin declarar —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                lineNumber: 616,
                                                columnNumber: 21
                                            }, this),
                                            COMPARTICION.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c,
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                    lineNumber: 618,
                                                    columnNumber: 23
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "__otro",
                                                children: "Otro (escribir)…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                                lineNumber: 622,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 605,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "minima_bajada_kbps",
                                    label: "Mínima efectiva de bajada",
                                    hint: "En kbps, como pide el anexo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 0,
                                        value: form.minima_bajada_kbps,
                                        onChange: set('minima_bajada_kbps'),
                                        placeholder: plan.bajada_kbps ? String(plan.bajada_kbps) : '120000'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 628,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 627,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    campo: "minima_subida_kbps",
                                    label: "Mínima efectiva de subida",
                                    hint: "En kbps",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 0,
                                        value: form.minima_subida_kbps,
                                        onChange: set('minima_subida_kbps'),
                                        placeholder: plan.subida_kbps ? String(plan.subida_kbps) : '120000'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                        lineNumber: 637,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                                    lineNumber: 636,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 595,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 577,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 border-t border-slate-800 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: onCerrar,
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 650,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__["FileSignature"],
                            cargando: guardando,
                            children: "Guardar y generar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/DatosContrato.jsx",
                    lineNumber: 649,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/clientes/DatosContrato.jsx",
            lineNumber: 329,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/clientes/DatosContrato.jsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
_s(DatosContrato, "u0yFx+ySs0l+zb52tMfBDbx3aks=");
_c1 = DatosContrato;
var _c, _c1;
__turbopack_context__.k.register(_c, "SiNo");
__turbopack_context__.k.register(_c1, "DatosContrato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/FichaDocumentos.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FichaDocumentos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-client] (ecmascript) <export default as FileSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-client] (ecmascript) <export enlaceWhatsApp as enlaceWhatsapp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$DatosContrato$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/clientes/DatosContrato.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$contratos$2f$FirmaContrato$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/contratos/FirmaContrato.jsx [app-client] (ecmascript)");
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
/**
 * Papeles del abonado: cédula, contrato, acta de entrega y el inventario de lo
 * que se le dejó instalado.
 *
 * Dos cosas que no son detalles:
 *
 *  - Todo entra como **interno** por defecto. Una cédula no se le muestra a
 *    nadie ni se comparte por WhatsApp sin querer: son datos personales, y el
 *    valor por defecto es lo que decide qué pasa cuando alguien va con prisa.
 *  - Los enlaces para compartir **vencen en una hora**. Un enlace eterno a una
 *    cédula es una filtración esperando a que alguien reenvíe la conversación.
 */ /**
 * Los papeles del abonado, con qué es cada uno.
 *
 * La ayuda no es decorativa: sin ella nadie sabe qué va en "planilla de
 * servicio" ni por qué existe "autorización", y las categorías terminan todas
 * en "otro".
 */ const CATEGORIAS = {
    cedula_frontal: {
        label: 'Cédula (frontal)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        ayuda: 'Del titular'
    },
    cedula_reverso: {
        label: 'Cédula (reverso)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        ayuda: 'La cara con la firma'
    },
    contrato: {
        label: 'Contrato',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        ayuda: 'El generado y el escaneo del firmado'
    },
    acta_entrega: {
        label: 'Acta de entrega',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        ayuda: 'Lo que firma al recibir el equipo: respalda el reclamo en una baja'
    },
    planilla_servicio: {
        label: 'Planilla de servicio',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        ayuda: 'Luz o agua a nombre del titular: confirma el domicilio'
    },
    foto_instalacion: {
        label: 'Fotos de la instalación',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        ayuda: 'Las que tomó el técnico. Se administran desde la orden de trabajo'
    },
    autorizacion: {
        label: 'Autorización',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        ayuda: 'Cuando quien firma no es el titular'
    },
    ruc: {
        label: 'RUC',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        ayuda: 'Del abonado empresa'
    },
    cedula_representante: {
        label: 'Cédula del representante',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        ayuda: 'De quien firma por la empresa'
    },
    otro: {
        label: 'Otro',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        ayuda: ''
    }
};
const TIPOS_EQUIPO = {
    ont: 'ONT / módem óptico',
    router: 'Router',
    antena: 'Antena',
    cpe: 'CPE',
    switch: 'Switch',
    otro: 'Otro'
};
const EQUIPO_VACIO = {
    tipo: 'ont',
    marca: '',
    modelo: '',
    serie: '',
    mac: '',
    propiedad: 'isp',
    estado: 'entregado',
    notas: ''
};
const peso = (b)=>{
    const n = Number(b) || 0;
    if (n > 1024 * 1024) return "".concat((n / 1024 / 1024).toFixed(1), " MB");
    return "".concat(Math.round(n / 1024), " KB");
};
const fecha = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(f) : '—';
function FichaDocumentos(param) {
    let { cliente, onError } = param;
    var _CATEGORIAS_viendo_categoria, _CATEGORIAS_viendo_categoria1;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [documentos, setDocumentos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [urls, setUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [subiendo, setSubiendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viendo, setViendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [equipo, setEquipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // `null` = el formulario del contrato está cerrado. Cuando se abre lleva el
    // plan del abonado, que es de donde salen las condiciones técnicas del anexo.
    const [contrato, setContrato] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const archivoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FichaDocumentos.useCallback[recargar]": async ()=>{
            setCargando(true);
            /**
     * De la VISTA y no de la tabla.
     *
     * Trae también las fotos que tomó el técnico en la instalación, que viven en
     * otro bucket y no se copian acá: se muestran desde donde están. Por eso
     * cada fila dice de qué bucket es y si se puede borrar desde esta pantalla.
     */ const [d, e] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_documentos_abonado').select('*').eq('client_id', cliente.id).order('created_at'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('equipos_cliente').select('*').eq('client_id', cliente.id).order('created_at')
            ]);
            if (d.error) onError === null || onError === void 0 ? void 0 : onError(d.error);
            var _d_data;
            setDocumentos((_d_data = d.data) !== null && _d_data !== void 0 ? _d_data : []);
            var _e_data;
            setEquipos((_e_data = e.data) !== null && _e_data !== void 0 ? _e_data : []);
            // El bucket es privado: cada archivo necesita su enlace firmado. Una hora
            // alcanza para mirarlos y es poco para que un enlace filtrado sirva.
            const mapa = {};
            var _d_data1;
            for (const doc of (_d_data1 = d.data) !== null && _d_data1 !== void 0 ? _d_data1 : []){
                var _doc_bucket;
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].storage.from((_doc_bucket = doc.bucket) !== null && _doc_bucket !== void 0 ? _doc_bucket : 'documentos').createSignedUrl(doc.ruta, 3600);
                if (data === null || data === void 0 ? void 0 : data.signedUrl) mapa[doc.id] = data.signedUrl;
            }
            setUrls(mapa);
            setCargando(false);
        }
    }["FichaDocumentos.useCallback[recargar]"], [
        cliente.id,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FichaDocumentos.useEffect": ()=>{
            recargar();
        }
    }["FichaDocumentos.useEffect"], [
        recargar
    ]);
    function elegirArchivo(categoria) {
        setSubiendo({
            categoria
        });
        // El input se dispara en el siguiente ciclo, cuando ya sabe qué categoría es.
        setTimeout(()=>{
            var _archivoRef_current;
            return (_archivoRef_current = archivoRef.current) === null || _archivoRef_current === void 0 ? void 0 : _archivoRef_current.click();
        }, 0);
    }
    async function subir(e) {
        var _e_target_files;
        const archivo = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!archivo || !subiendo) return;
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            var _sesion_user;
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.getUser();
            const esImagen = archivo.type.startsWith('image/');
            // Las fotos se achican; un PDF firmado va tal cual, que alterarlo le
            // quitaría validez.
            const contenido = esImagen ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["comprimirImagen"])(archivo, {
                max: 1600,
                calidad: 0.75
            }) : archivo;
            var _archivo_name_split_pop;
            const extension = esImagen ? 'jpg' : (_archivo_name_split_pop = archivo.name.split('.').pop()) !== null && _archivo_name_split_pop !== void 0 ? _archivo_name_split_pop : 'bin';
            const ruta = "".concat(cliente.id, "/").concat(subiendo.categoria, "-").concat(Date.now(), ".").concat(extension);
            const { error: errSubida } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].storage.from('documentos').upload(ruta, contenido, {
                contentType: esImagen ? 'image/jpeg' : archivo.type
            });
            if (errSubida) throw errSubida;
            var _contenido_size, _sesion_user_id;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('documentos').insert({
                client_id: cliente.id,
                categoria: subiendo.categoria,
                nombre: archivo.name,
                ruta,
                mime: esImagen ? 'image/jpeg' : archivo.type,
                tamano: (_contenido_size = contenido.size) !== null && _contenido_size !== void 0 ? _contenido_size : archivo.size,
                // Interno por defecto, sin excepción por categoría.
                visible_cliente: false,
                created_by: (_sesion_user_id = sesion === null || sesion === void 0 ? void 0 : (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id) !== null && _sesion_user_id !== void 0 ? _sesion_user_id : null
            });
            if (error) throw error;
            await recargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
            setSubiendo(null);
            if (archivoRef.current) archivoRef.current.value = '';
        }
    }
    async function cambiarVisibilidad(doc) {
        const visible = !doc.visible_cliente;
        if (visible && doc.categoria.startsWith('cedula')) {
            const seguir = await confirmar('Es una cédula. Marcarla como visible la deja al alcance del abonado en su portal.\n\n¿Continuar?');
            if (!seguir) return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('documentos').update({
            visible_cliente: visible
        }).eq('id', doc.id);
        if (error) return onError === null || onError === void 0 ? void 0 : onError(error);
        await recargar();
    }
    async function borrar(doc) {
        if (!await confirmar('¿Borrar "'.concat(doc.nombre, '"? No se puede deshacer.'))) return;
        // El archivo primero: borrar solo la fila dejaría el archivo huérfano en el
        // bucket, ocupando espacio y sin nada que lo referencie.
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].storage.from('documentos').remove([
            doc.ruta
        ]);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('documentos').delete().eq('id', doc.id);
        if (error) return onError === null || onError === void 0 ? void 0 : onError(error);
        await recargar();
    }
    async function guardarEquipo(e) {
        e.preventDefault();
        setGuardando(true);
        try {
            var _datos_marca, _datos_modelo, _datos_serie, _datos_mac, _datos_notas, _sesion_user;
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.getUser();
            const { id, ...datos } = equipo;
            var _sesion_user_id;
            const fila = {
                client_id: cliente.id,
                tipo: datos.tipo,
                marca: ((_datos_marca = datos.marca) === null || _datos_marca === void 0 ? void 0 : _datos_marca.trim()) || null,
                modelo: ((_datos_modelo = datos.modelo) === null || _datos_modelo === void 0 ? void 0 : _datos_modelo.trim()) || null,
                serie: ((_datos_serie = datos.serie) === null || _datos_serie === void 0 ? void 0 : _datos_serie.trim()) || null,
                mac: ((_datos_mac = datos.mac) === null || _datos_mac === void 0 ? void 0 : _datos_mac.trim()) || null,
                propiedad: datos.propiedad,
                estado: datos.estado,
                notas: ((_datos_notas = datos.notas) === null || _datos_notas === void 0 ? void 0 : _datos_notas.trim()) || null,
                devuelto_at: datos.estado === 'devuelto' ? new Date().toISOString() : null,
                created_by: (_sesion_user_id = sesion === null || sesion === void 0 ? void 0 : (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id) !== null && _sesion_user_id !== void 0 ? _sesion_user_id : null
            };
            const { error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('equipos_cliente').update(fila).eq('id', id) : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('equipos_cliente').insert(fila);
            if (error) throw error;
            setEquipo(null);
            await recargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    /**
   * Abre el formulario del contrato con lo que ya está cargado.
   *
   * Se trae el plan del abonado porque la compartición y la velocidad mínima
   * efectiva que pide el anexo 1f son del plan, no de la ficha — y el formulario
   * tiene que mostrar lo que ya vale antes de dejar cambiarlo.
   */ async function abrirFormularioContrato() {
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            // La lista completa, no solo el plan que ya tiene: el formulario deja
            // elegirlo, y de ahi salen la comparticion y las velocidades del anexo 1f.
            const [{ data: planes }, { data: prestador }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('planes_velocidad').select('id, nombre, precio, bajada_kbps, subida_kbps, comparticion, minima_bajada_kbps, minima_subida_kbps').eq('activo', true).order('precio'),
                // Con qué valor viene propuesta la casilla de arbitraje. Lo decide el
                // ISP en el prestador; el abonado la firma aparte.
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('prestadores').select('arbitraje_por_defecto').eq('predeterminado', true).maybeSingle()
            ]);
            var _find, _prestador_arbitraje_por_defecto;
            setContrato({
                planes: planes !== null && planes !== void 0 ? planes : [],
                plan: (_find = (planes !== null && planes !== void 0 ? planes : []).find((p)=>p.id === cliente.plan_id)) !== null && _find !== void 0 ? _find : null,
                arbitraje: (_prestador_arbitraje_por_defecto = prestador === null || prestador === void 0 ? void 0 : prestador.arbitraje_por_defecto) !== null && _prestador_arbitraje_por_defecto !== void 0 ? _prestador_arbitraje_por_defecto : null
            });
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        }
    }
    /**
   * Genera el contrato de adhesión, lo guarda y lo abre para imprimir.
   *
   * ── Por qué se guarda además de abrirse ──
   *
   * Porque el que se imprime y el que se firma tienen que ser el mismo papel.
   * El contrato se arma con los datos del momento —plan, precio, permanencia— y
   * esos cambian: si dentro de un año alguien reclama, generarlo de nuevo daría
   * otro documento. La copia guardada es la que se firmó.
   *
   * El escaneo con la firma se sube después, en esta misma pantalla.
   */ async function generarContrato() {
        setGuardando(true);
        onError === null || onError === void 0 ? void 0 : onError(null);
        try {
            var _sesion_user;
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].documentos.contratoArcotel(cliente.id);
            const ruta = "".concat(cliente.id, "/contrato-").concat(Date.now(), ".pdf");
            const { error: errSubida } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].storage.from('documentos').upload(ruta, blob, {
                contentType: 'application/pdf'
            });
            if (errSubida) throw errSubida;
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.getUser();
            var _sesion_user_id;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('documentos').insert({
                client_id: cliente.id,
                categoria: 'contrato',
                // El nombre dice que está SIN FIRMAR: en la lista va a convivir con el
                // escaneo del firmado, y confundirlos sería dar por firmado lo que no.
                nombre: "Contrato de adhesión (sin firmar) — ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(new Date()), ".pdf"),
                ruta,
                mime: 'application/pdf',
                tamano: blob.size,
                visible_cliente: false,
                created_by: (_sesion_user_id = sesion === null || sesion === void 0 ? void 0 : (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id) !== null && _sesion_user_id !== void 0 ? _sesion_user_id : null
            });
            if (error) throw error;
            // Y se abre para imprimirlo y llevarlo a firmar.
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank', 'noopener');
            setTimeout(()=>URL.revokeObjectURL(url), 60_000);
            await recargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    const porCategoria = (c)=>documentos.filter((d)=>d.categoria === c);
    var _viendo_nombre, _equipo_marca, _equipo_modelo, _equipo_serie, _equipo_mac, _equipo_notas;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$contratos$2f$FirmaContrato$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cliente: cliente,
                onError: onError
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Documentos",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"],
                subtitle: "Cédula, contrato y actas del abonado",
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variante: "primario",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__["FileSignature"],
                    cargando: guardando,
                    onClick: abrirFormularioContrato,
                    title: "Completa lo que falta, genera el contrato de adhesión con sus cuatro anexos, lo guarda acá y lo abre para imprimir",
                    children: "Generar contrato"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                    lineNumber: 377,
                    columnNumber: 11
                }, void 0),
                children: [
                    cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "Cargando…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: Object.entries(CATEGORIAS).map((param)=>{
                            let [clave, cat] = param;
                            const archivos = porCategoria(clave);
                            const Icon = cat.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "flex items-center gap-2 text-[11px] uppercase tracking-wide text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                lineNumber: 401,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            cat.label
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                        lineNumber: 400,
                                                        columnNumber: 23
                                                    }, this),
                                                    cat.ayuda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-600",
                                                        children: cat.ayuda
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                        lineNumber: 404,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                lineNumber: 399,
                                                columnNumber: 21
                                            }, this),
                                            clave !== 'foto_instalacion' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>elegirArchivo(clave),
                                                disabled: guardando,
                                                className: "flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 disabled:opacity-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                        lineNumber: 420,
                                                        columnNumber: 25
                                                    }, this),
                                                    " Subir"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                lineNumber: 414,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 398,
                                        columnNumber: 19
                                    }, this),
                                    archivos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rounded-lg border border-dashed border-slate-800 px-3 py-2 text-xs text-slate-600",
                                        children: "Sin archivos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 426,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "divide-y divide-slate-800 rounded-lg border border-slate-800",
                                        children: archivos.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3 px-3 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setViendo(d),
                                                        className: "min-w-0 flex-1 text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block truncate text-sm text-slate-200",
                                                                children: d.nombre
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                lineNumber: 438,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-500",
                                                                children: [
                                                                    peso(d.tamano),
                                                                    " · ",
                                                                    fecha(d.created_at)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                lineNumber: 439,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                        lineNumber: 433,
                                                        columnNumber: 27
                                                    }, this),
                                                    d.solo_lectura ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0 rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-500",
                                                        children: "de la orden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                        lineNumber: 452,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>cambiarVisibilidad(d),
                                                                title: d.visible_cliente ? 'Visible para el cliente' : 'Solo interno',
                                                                className: "shrink-0 rounded px-2 py-1 text-[10px] ".concat(d.visible_cliente ? 'bg-amber-500/15 text-amber-300' : 'bg-slate-800 text-slate-400'),
                                                                children: d.visible_cliente ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " Cliente"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                            lineNumber: 477,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " Interno"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                lineNumber: 457,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>borrar(d),
                                                                className: "shrink-0 text-slate-600 hover:text-rose-400",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                                lineNumber: 482,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, d.id, true, {
                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                lineNumber: 432,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 430,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, clave, true, {
                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                lineNumber: 397,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: archivoRef,
                        type: "file",
                        accept: "image/*,application/pdf",
                        onChange: subir,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Equipos entregados",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"],
                subtitle: "Lo que se reclama en una baja",
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variante: "primario",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                    onClick: ()=>setEquipo(EQUIPO_VACIO),
                    children: "Agregar"
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                    lineNumber: 509,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Equipo',
                        'Serie',
                        'MAC',
                        'Propiedad',
                        'Estado',
                        ''
                    ],
                    filas: equipos,
                    vacio: "No hay equipos registrados. Cargalos para poder reclamarlos si el abonado se da de baja.",
                    renderFila: (e)=>{
                        var _e_serie, _e_mac;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-t border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-sm text-slate-200",
                                    children: [
                                        TIPOS_EQUIPO[e.tipo],
                                        e.marca || e.modelo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[11px] text-slate-500",
                                            children: [
                                                e.marca,
                                                e.modelo
                                            ].filter(Boolean).join(' ')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                            lineNumber: 523,
                                            columnNumber: 19
                                        }, void 0) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-xs",
                                    children: (_e_serie = e.serie) !== null && _e_serie !== void 0 ? _e_serie : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 528,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-xs",
                                    children: (_e_mac = e.mac) !== null && _e_mac !== void 0 ? _e_mac : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: e.propiedad === 'isp' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sky-300",
                                        children: "Del ISP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 532,
                                        columnNumber: 19
                                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "Del cliente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 534,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 530,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: e.estado === 'entregado' ? 'text-emerald-400' : e.estado === 'devuelto' ? 'text-slate-400' : 'text-rose-400',
                                        children: e.estado
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 538,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 537,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setEquipo(e),
                                        className: "text-[11px] text-sky-400 hover:text-sky-300",
                                        children: "Editar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 551,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 550,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, e.id, true, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 519,
                            columnNumber: 13
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                    lineNumber: 514,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: Boolean(viendo),
                titulo: (_viendo_nombre = viendo === null || viendo === void 0 ? void 0 : viendo.nombre) !== null && _viendo_nombre !== void 0 ? _viendo_nombre : '',
                onCerrar: ()=>setViendo(null),
                ancho: "max-w-3xl",
                children: viendo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        String(viendo.mime).startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: urls[viendo.id],
                            alt: viendo.nombre,
                            className: "max-h-[60vh] w-full rounded-lg object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 574,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: urls[viendo.id],
                            title: viendo.nombre,
                            className: "h-[60vh] w-full rounded-lg border border-slate-700 bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 580,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: urls[viendo.id],
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800",
                                    children: "Abrir aparte"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__["enlaceWhatsapp"])(cliente.telefono_movil || cliente.telefono, "Le compartimos su ".concat((_CATEGORIAS_viendo_categoria = CATEGORIAS[viendo.categoria]) === null || _CATEGORIAS_viendo_categoria === void 0 ? void 0 : _CATEGORIAS_viendo_categoria.label.toLowerCase(), ": ").concat(urls[viendo.id])) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__["enlaceWhatsapp"])(cliente.telefono_movil || cliente.telefono, "Le compartimos su ".concat((_CATEGORIAS_viendo_categoria1 = CATEGORIAS[viendo.categoria]) === null || _CATEGORIAS_viendo_categoria1 === void 0 ? void 0 : _CATEGORIAS_viendo_categoria1.label.toLowerCase(), ": ").concat(urls[viendo.id])),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center gap-2 rounded-lg border border-emerald-600/40 px-3 py-2 text-sm text-emerald-300 hover:bg-emerald-500/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                            lineNumber: 610,
                                            columnNumber: 19
                                        }, this),
                                        " Compartir por WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 601,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 587,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "El enlace que se comparte vence en una hora. Después hay que volver a generarlo desde acá — un enlace eterno a una cédula queda dando vueltas en cualquier reenvío."
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 615,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                    lineNumber: 572,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: Boolean(equipo),
                titulo: (equipo === null || equipo === void 0 ? void 0 : equipo.id) ? 'Editar equipo' : 'Agregar equipo',
                onCerrar: ()=>setEquipo(null),
                children: equipo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: guardarEquipo,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Tipo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: equipo.tipo,
                                        onChange: (e)=>setEquipo((x)=>({
                                                    ...x,
                                                    tipo: e.target.value
                                                })),
                                        children: Object.entries(TIPOS_EQUIPO).map((param)=>{
                                            let [v, l] = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: v,
                                                children: l
                                            }, v, false, {
                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                lineNumber: 638,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 633,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 632,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Propiedad",
                                    hint: "Solo se reclama lo del ISP",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: equipo.propiedad,
                                        onChange: (e)=>setEquipo((x)=>({
                                                    ...x,
                                                    propiedad: e.target.value
                                                })),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "isp",
                                                children: "Del ISP (comodato)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                lineNumber: 649,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "cliente",
                                                children: "Del cliente"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                                lineNumber: 650,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 645,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Marca",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: Huawei",
                                        value: (_equipo_marca = equipo.marca) !== null && _equipo_marca !== void 0 ? _equipo_marca : '',
                                        onChange: (e)=>setEquipo((x)=>({
                                                    ...x,
                                                    marca: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 654,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Modelo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: HG8145V5",
                                        value: (_equipo_modelo = equipo.modelo) !== null && _equipo_modelo !== void 0 ? _equipo_modelo : '',
                                        onChange: (e)=>setEquipo((x)=>({
                                                    ...x,
                                                    modelo: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 660,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 659,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Serie",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: HWTC1A2B3C4D",
                                        value: (_equipo_serie = equipo.serie) !== null && _equipo_serie !== void 0 ? _equipo_serie : '',
                                        onChange: (e)=>setEquipo((x)=>({
                                                    ...x,
                                                    serie: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 666,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 665,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "MAC",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: (_equipo_mac = equipo.mac) !== null && _equipo_mac !== void 0 ? _equipo_mac : '',
                                        onChange: (e)=>setEquipo((x)=>({
                                                    ...x,
                                                    mac: e.target.value
                                                })),
                                        placeholder: "AA:BB:CC:DD:EE:FF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 672,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 671,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 631,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Estado",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: equipo.estado,
                                onChange: (e)=>setEquipo((x)=>({
                                            ...x,
                                            estado: e.target.value
                                        })),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "entregado",
                                        children: "Entregado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 685,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "devuelto",
                                        children: "Devuelto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 686,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "perdido",
                                        children: "Perdido"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 687,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "dañado",
                                        children: "Dañado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                        lineNumber: 688,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                lineNumber: 681,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 680,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Notas",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                placeholder: "Ej.: Llamar antes de ir",
                                rows: 2,
                                value: (_equipo_notas = equipo.notas) !== null && _equipo_notas !== void 0 ? _equipo_notas : '',
                                onChange: (e)=>setEquipo((x)=>({
                                            ...x,
                                            notas: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                lineNumber: 693,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 692,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    type: "button",
                                    onClick: ()=>setEquipo(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 701,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    type: "submit",
                                    cargando: guardando,
                                    children: "Guardar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                                    lineNumber: 704,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                    lineNumber: 630,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                lineNumber: 624,
                columnNumber: 7
            }, this),
            contrato && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$DatosContrato$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cliente: cliente,
                plan: contrato.plan,
                planes: contrato.planes,
                tabla: "clientes",
                arbitrajePorDefecto: contrato.arbitraje,
                abierto: true,
                onCerrar: ()=>setContrato(null),
                onError: onError,
                onListo: async ()=>{
                    setContrato(null);
                    await generarContrato();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
                lineNumber: 720,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaDocumentos.jsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
_s(FichaDocumentos, "9867e0eVFpQKhOrYVlIC6UWWspo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c = FichaDocumentos;
var _c;
__turbopack_context__.k.register(_c, "FichaDocumentos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/clientes/FichaAuditoria.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FichaAuditoria
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
/**
 * Qué se le hizo a este abonado y quién lo hizo.
 *
 * Es la pantalla que se abre cuando alguien dice "yo no autoricé ese cambio de
 * plan" o "a mí nadie me cortó". Muestra dos cosas juntas porque en el momento
 * del reclamo son la misma pregunta: los cambios de datos —que registran los
 * disparadores de la base— y los comandos que se dispararon contra sus equipos.
 *
 * Se lee y no se edita. Un registro de auditoría que se puede corregir no sirve
 * como registro de auditoría, y la política de la base solo permite leerlo.
 */ const ENTIDADES = {
    facturas: 'Factura',
    pagos: 'Cobro',
    promesas_pago: 'Promesa de pago',
    clientes: 'Ficha del cliente',
    comunicaciones: 'Mensaje',
    comandos_ejecutados: 'Comando',
    // Las acciones con nombre propio no son "un cambio de campo": son una
    // decisión que alguien tomó, y por eso se muestran con su frase entera.
    accion: 'Acción'
};
const ACCIONES = {
    crear: {
        label: 'Creó',
        clase: 'text-emerald-400'
    },
    modificar: {
        label: 'Modificó',
        clase: 'text-sky-400'
    },
    eliminar: {
        label: 'Eliminó',
        clase: 'text-rose-400'
    },
    accion: {
        label: '',
        clase: 'text-amber-400'
    }
};
// Los nombres técnicos no se le muestran a nadie: "plan_id" no dice nada en el
// mostrador, "Plan" sí.
const CAMPOS = {
    ip: 'IP',
    plan_id: 'Plan',
    estado: 'Estado',
    precio_mensual: 'Precio mensual',
    usuario_ppp: 'Usuario PPPoE',
    clave_ppp: 'Clave PPPoE',
    nap_id: 'Caja NAP',
    puerto_nap: 'Puerto',
    conectado_a_id: 'Conectado a',
    tipo_conexion: 'Tipo de conexión',
    modalidad_pago: 'Modalidad de pago',
    dia_facturacion: 'Día de pago',
    aplicar_corte: 'Aplicar corte',
    factura_electronica: 'Factura electrónica',
    descuento_tipo: 'Descuento de ley',
    descuento_porcentaje: 'Porcentaje de descuento',
    promo_porcentaje: 'Promoción',
    promo_meses: 'Meses de promoción',
    total: 'Total',
    monto: 'Monto',
    anulada: 'Anulada',
    anulado: 'Anulado',
    nombre: 'Nombre',
    identificacion: 'Cédula o RUC',
    tipo_identificacion: 'Tipo de identificación',
    telefono: 'Teléfono fijo',
    telefono_movil: 'Celular',
    email: 'Correo',
    direccion: 'Dirección',
    referencia_servicio: 'Referencia del servicio',
    zona: 'Zona',
    notas: 'Notas',
    latitud: 'Latitud',
    longitud: 'Longitud',
    router_id: 'Router',
    onu_id: 'ONU',
    mac_address: 'MAC',
    ip_administracion: 'IP de administración',
    ipv6: 'IPv6',
    ipv6_prefijo: 'Prefijo IPv6',
    ipv6_duid: 'DUID IPv6',
    red_ipv4: 'Red IPv4',
    red_acceso: 'Red de acceso',
    tipo_antena: 'Tipo de antena',
    fecha_instalacion: 'Fecha de instalación',
    estado_desde: 'Estado desde',
    suspendido_hasta: 'Suspendido hasta',
    suspendido_motivo: 'Motivo de la pausa',
    dias_gracia: 'Días de gracia',
    cortar_tras_meses: 'Cortar tras meses',
    dia_generar_factura: 'Día de crear la factura',
    tipo_impuesto: 'Tipo de impuesto',
    descuento_documento: 'Documento del descuento',
    descuento_fijo: 'Descuento fijo',
    descuento_fijo_motivo: 'Motivo del descuento',
    promo_desde: 'Promoción desde',
    permanencia_meses: 'Permanencia (meses)',
    valor_instalacion: 'Valor de instalación',
    pasarela: 'Pasarela de cobro',
    codigo_pago: 'Código de pago',
    aviso_dias_1: 'Primer aviso',
    aviso_dias_2: 'Segundo aviso',
    aviso_dias_3: 'Tercer aviso',
    aviso_dias_4: 'Cuarto aviso',
    avisos_canales: 'Canales de aviso',
    canal_preferido: 'Canal preferido',
    telegram_chat_id: 'Chat de Telegram',
    motivo_baja_id: 'Motivo de baja',
    prestador_id: 'Prestador',
    numero_orden: 'Número de orden',
    provincia: 'Provincia',
    canton: 'Cantón',
    parroquia: 'Parroquia',
    ciudad: 'Ciudad',
    portal_clave: 'Contraseña del portal',
    portal_clave_puesta: 'Contraseña del portal puesta el',
    tarifa_preferencial: 'Tarifa preferencial',
    tipo_cuenta: 'Tipo de cuenta',
    velocidad_cruda: 'Velocidad',
    rutas: 'Rutas'
};
// Lo que no le dice nada a quien mira la historia (marcas internas).
const OCULTOS = new Set([
    'updated_at',
    'created_at',
    'portal_clave_hash',
    'importado_at',
    'sistema_origen',
    'ultimo_pago_externo'
]);
// Se dice que cambió, nunca el valor: el historial lo ve más gente que la que
// puede ver una contraseña.
const SECRETOS = new Set([
    'clave_ppp',
    'portal_clave',
    'password',
    'password_encrypted'
]);
/** "fecha_instalacion" → "Fecha instalacion" para los campos que no están en la lista. */ const etiquetaCampo = (c)=>{
    var _CAMPOS_c;
    return (_CAMPOS_c = CAMPOS[c]) !== null && _CAMPOS_c !== void 0 ? _CAMPOS_c : c.replace(/_id$/, '').replace(/_/g, ' ').replace(/^./, (x)=>x.toUpperCase());
};
const fechaHora = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(f) : '—';
/** Un valor como se lee en el mostrador, no como lo guarda la base. */ function valor(v, campo) {
    if (v === null || v === undefined || v === '') return '—';
    if (SECRETOS.has(campo) || String(campo).endsWith('_encrypted')) return '•••';
    if (v === true) return 'sí';
    if (v === false) return 'no';
    if (Array.isArray(v)) return v.length ? v.join(', ') : '—';
    const s = String(v);
    // Correo y dirección se guardan cifrados: mostrar el texto cifrado no sirve.
    if (s.startsWith('enc::')) return '(dato protegido)';
    if (/^\d{4}-\d{2}-\d{2}([ T]\d{2}:\d{2})/.test(s)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(s);
    if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fecha"])(s);
    return s.length > 40 ? "".concat(s.slice(0, 40), "…") : s;
}
function FichaAuditoria(param) {
    let { cliente, onError } = param;
    _s();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [comandos, setComandos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [filtro, setFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('todo');
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FichaAuditoria.useCallback[recargar]": async ()=>{
            setCargando(true);
            /*
     * ── Por qué se leen DOS registros de auditoría ──
     *
     * Porque el sistema tiene dos y guardan cosas distintas:
     *
     *   `audit_logs`        los cambios de campo, que anotan los disparadores
     *                       de la base: cambió el plan, cambió la IP.
     *   `auditoria_sistema` las acciones con nombre propio: dio de baja al
     *                       abonado, saldó su deuda de equipo, aprobó un pago.
     *
     * Esta pestaña leía solo el primero, así que la baja de un abonado —con su
     * motivo— y el saldado de su deuda no aparecían en su propia ficha. Había
     * que ir a Ajustes → Personal a buscarlos, que es el lugar equivocado para
     * responderle a un vendedor que pregunta por SU cliente.
     */ const [a, c, sis] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_audit_logs').select('*').eq('client_id', cliente.id).order('created_at', {
                    ascending: false
                }).limit(200),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('comandos_ejecutados').select('*').eq('client_id', cliente.id).order('created_at', {
                    ascending: false
                }).limit(100),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('auditoria_sistema').select('*').eq('entidad', 'cliente').eq('entidad_id', cliente.id).order('creado_en', {
                    ascending: false
                }).limit(100)
            ]);
            if (a.error) onError === null || onError === void 0 ? void 0 : onError(a.error);
            var _sis_data;
            /*
     * Se normalizan al mismo molde y se ordenan juntos. Dos listas separadas
     * obligarían a leer dos veces y a cruzar las horas en la cabeza, que es
     * justo lo que no se puede hacer con un cliente enojado del otro lado.
     */ const acciones = ((_sis_data = sis.data) !== null && _sis_data !== void 0 ? _sis_data : []).map({
                "FichaAuditoria.useCallback[recargar].acciones": (x)=>({
                        id: "sis-".concat(x.id),
                        created_at: x.creado_en,
                        entidad: 'accion',
                        accion: 'accion',
                        titulo: x.descripcion,
                        actor_email: x.usuario_nombre,
                        actor_rol: x.usuario_rol,
                        ip: x.ip,
                        campos: []
                    })
            }["FichaAuditoria.useCallback[recargar].acciones"]);
            var _a_data;
            setLogs([
                ...(_a_data = a.data) !== null && _a_data !== void 0 ? _a_data : [],
                ...acciones
            ].sort({
                "FichaAuditoria.useCallback[recargar]": (x, y)=>new Date(y.created_at) - new Date(x.created_at)
            }["FichaAuditoria.useCallback[recargar]"]));
            var _c_data;
            setComandos((_c_data = c.data) !== null && _c_data !== void 0 ? _c_data : []);
            setCargando(false);
        }
    }["FichaAuditoria.useCallback[recargar]"], [
        cliente.id,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FichaAuditoria.useEffect": ()=>{
            recargar();
        }
    }["FichaAuditoria.useEffect"], [
        recargar
    ]);
    const visibles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FichaAuditoria.useMemo[visibles]": ()=>filtro === 'todo' ? logs : logs.filter({
                "FichaAuditoria.useMemo[visibles]": (l)=>l.entidad === filtro
            }["FichaAuditoria.useMemo[visibles]"])
    }["FichaAuditoria.useMemo[visibles]"], [
        logs,
        filtro
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Registro de actividad",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
                subtitle: "Quién cambió qué, cuándo y desde dónde",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 max-w-xs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Filtrar por",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: filtro,
                                onChange: (e)=>setFiltro(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "todo",
                                        children: "Todo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    Object.entries(ENTIDADES).map((param)=>{
                                        let [v, l] = param;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: v,
                                            children: l
                                        }, v, false, {
                                            fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "Cargando…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this) : !visibles.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "py-6 text-center text-sm text-slate-500",
                        children: [
                            "Sin movimientos registrados",
                            filtro !== 'todo' ? ' de ese tipo' : '',
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "space-y-2",
                        children: visibles.map((l)=>{
                            var _ACCIONES_l_accion;
                            const accion = (_ACCIONES_l_accion = ACCIONES[l.accion]) !== null && _ACCIONES_l_accion !== void 0 ? _ACCIONES_l_accion : ACCIONES.modificar;
                            var _l_campos;
                            // Sin los que no cambiaron de verdad: los registros anteriores al
                            // arreglo de la auditoría anotaban campos vacíos como "— → —".
                            const campos = ((_l_campos = l.campos) !== null && _l_campos !== void 0 ? _l_campos : []).filter((c)=>{
                                var _l_antes, _l_despues, _l_antes1, _l_despues1;
                                var _l_antes_c, _l_despues_c;
                                return !OCULTOS.has(c) && (SECRETOS.has(c) ? ((_l_antes_c = (_l_antes = l.antes) === null || _l_antes === void 0 ? void 0 : _l_antes[c]) !== null && _l_antes_c !== void 0 ? _l_antes_c : null) !== ((_l_despues_c = (_l_despues = l.despues) === null || _l_despues === void 0 ? void 0 : _l_despues[c]) !== null && _l_despues_c !== void 0 ? _l_despues_c : null) : valor((_l_antes1 = l.antes) === null || _l_antes1 === void 0 ? void 0 : _l_antes1[c], c) !== valor((_l_despues1 = l.despues) === null || _l_despues1 === void 0 ? void 0 : _l_despues1[c], c));
                            });
                            var _ENTIDADES_l_entidad;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "t-card-sm p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-baseline gap-2 text-sm",
                                        children: [
                                            l.titulo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-300",
                                                children: l.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                lineNumber: 279,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: accion.clase,
                                                        children: accion.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                        lineNumber: 282,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300",
                                                        children: (_ENTIDADES_l_entidad = ENTIDADES[l.entidad]) !== null && _ENTIDADES_l_entidad !== void 0 ? _ENTIDADES_l_entidad : l.entidad
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                        lineNumber: 283,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-auto text-[11px] text-slate-500",
                                                children: fechaHora(l.created_at)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                lineNumber: 288,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                        lineNumber: 277,
                                        columnNumber: 19
                                    }, this),
                                    l.accion === 'modificar' && campos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1",
                                        children: campos.map((c)=>{
                                            var _l_antes, _l_despues;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex flex-wrap items-baseline gap-2 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: [
                                                            etiquetaCampo(c),
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                        lineNumber: 299,
                                                        columnNumber: 27
                                                    }, this),
                                                    SECRETOS.has(c) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "cambió"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded bg-rose-500/10 px-1.5 py-0.5 text-rose-300 line-through",
                                                                children: valor((_l_antes = l.antes) === null || _l_antes === void 0 ? void 0 : _l_antes[c], c)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                                lineNumber: 304,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-600",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                                lineNumber: 307,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-300",
                                                                children: valor((_l_despues = l.despues) === null || _l_despues === void 0 ? void 0 : _l_despues[c], c)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                                lineNumber: 308,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, c, true, {
                                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                lineNumber: 298,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                        lineNumber: 296,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 flex flex-wrap gap-x-3 text-[11px] text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: l.actor_email ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "text-slate-400",
                                                    children: l.actor_email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-500",
                                                    children: "sistema"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                    lineNumber: 323,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                lineNumber: 319,
                                                columnNumber: 21
                                            }, this),
                                            l.ip_origen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "desde ",
                                                    l.ip_origen
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                                lineNumber: 326,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                        lineNumber: 318,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, l.id, true, {
                                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                lineNumber: 276,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Comandos ejecutados",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
                subtitle: "Lo que se disparó contra sus equipos",
                children: !comandos.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-6 text-center text-sm text-slate-500",
                    children: "No se ejecutó ningún comando sobre este abonado."
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                    lineNumber: 341,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: comandos.map((c)=>{
                        var _c_destino_nombre;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex flex-wrap items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 shrink-0 rounded-full ".concat(c.exito ? 'bg-emerald-400' : 'bg-rose-400')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "font-mono text-xs text-slate-200",
                                    children: c.comando
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                    lineNumber: 354,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-slate-500",
                                    children: (_c_destino_nombre = c.destino_nombre) !== null && _c_destino_nombre !== void 0 ? _c_destino_nombre : c.destino_tipo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                    lineNumber: 355,
                                    columnNumber: 17
                                }, this),
                                c.duracion_ms != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-slate-600",
                                    children: [
                                        c.duracion_ms,
                                        " ms"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                    lineNumber: 359,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-auto text-[11px] text-slate-500",
                                    children: fechaHora(c.created_at)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                    lineNumber: 361,
                                    columnNumber: 17
                                }, this),
                                c.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "w-full rounded bg-rose-500/10 px-2 py-1 text-[11px] text-rose-300",
                                    children: c.error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                                    lineNumber: 364,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, c.id, true, {
                            fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                            lineNumber: 347,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                    lineNumber: 345,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/FichaAuditoria.jsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_s(FichaAuditoria, "PaBPo9HoLXjyilj4HntXZ6daJB4=");
_c = FichaAuditoria;
var _c;
__turbopack_context__.k.register(_c, "FichaAuditoria");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_clientes_f9542b84._.js.map