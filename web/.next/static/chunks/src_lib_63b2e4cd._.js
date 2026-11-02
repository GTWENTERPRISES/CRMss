(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "NavLink",
    ()=>NavLink,
    "Navigate",
    ()=>Navigate,
    "Outlet",
    ()=>Outlet,
    "useLocation",
    ()=>useLocation,
    "useNavigate",
    ()=>useNavigate,
    "useOutletContext",
    ()=>useOutletContext,
    "useParams",
    ()=>useParams,
    "useSearchParams",
    ()=>useSearchParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
'use client';
;
;
;
const OutletContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const OutletData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function Link(param) {
    let { to, href, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href !== null && href !== void 0 ? href : to,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/lib/nextNavigation.jsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c = Link;
function NavLink(param) {
    let { to, href, className, children, end, ...props } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const target = href !== null && href !== void 0 ? href : to;
    const active = end ? pathname === target : pathname === target || pathname.startsWith("".concat(target, "/"));
    const classes = typeof className === 'function' ? className({
        isActive: active
    }) : className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: target,
        className: classes,
        ...props,
        children: typeof children === 'function' ? children({
            isActive: active
        }) : children
    }, void 0, false, {
        fileName: "[project]/src/lib/nextNavigation.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(NavLink, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = NavLink;
function useNavigate() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return function(href) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (options.replace) router.replace(href);
        else router.push(href);
    };
}
_s1(useNavigate, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
function useLocation() {
    _s2();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLocation.useMemo": ()=>({
                pathname,
                search: "?".concat(search.toString()),
                hash: '',
                state: null,
                key: pathname
            })
    }["useLocation.useMemo"], [
        pathname,
        search
    ]);
}
_s2(useLocation, "nsE3aHU4b7QVexbg/agjGfHMjEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
function useParams() {
    _s3();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const nextParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])() || {};
    const last = pathname.split('/').filter(Boolean).at(-1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useParams.useMemo": ()=>({
                ...nextParams,
                ...last ? {
                    id: last,
                    slug: last
                } : {}
            })
    }["useParams.useMemo"], [
        last,
        nextParams
    ]);
}
_s3(useParams, "J3qEH/1HecxWVVn2qe6pFthUr5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
function useSearchParams() {
    _s4();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSearchParams.useMemo[params]": ()=>new URLSearchParams(current.toString())
    }["useSearchParams.useMemo[params]"], [
        current
    ]);
    // Como el de react-router: acepta los parámetros nuevos o una función que los
    // calcula desde los actuales, y `{ replace: true }` para no sumar historial.
    const setParams = function(next) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const calculado = typeof next === 'function' ? next(new URLSearchParams(current.toString())) : next;
        const value = calculado instanceof URLSearchParams ? calculado : new URLSearchParams(calculado !== null && calculado !== void 0 ? calculado : '');
        const query = value.toString();
        const destino = query ? "".concat(pathname, "?").concat(query) : pathname;
        if (options.replace) router.replace(destino, {
            scroll: false
        });
        else router.push(destino, {
            scroll: false
        });
    };
    return [
        params,
        setParams
    ];
}
_s4(useSearchParams, "bSmBLEWLvrRXb9EiVvJhtD1O5AU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
function useOutletContext() {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OutletData);
}
_s5(useOutletContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function Outlet(param) {
    let { context } = param;
    _s6();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OutletContent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OutletData.Provider, {
        value: context,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/lib/nextNavigation.jsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
_s6(Outlet, "irGup2l6mIO646yi5VvmRZTDvqo=");
_c2 = Outlet;
function Navigate(param) {
    let { to, replace = false } = param;
    _s7();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigate.useEffect": ()=>{
            if (replace) router.replace(to);
            else router.push(to);
        }
    }["Navigate.useEffect"], [
        replace,
        router,
        to
    ]);
    return null;
}
_s7(Navigate, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = Navigate;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Link");
__turbopack_context__.k.register(_c1, "NavLink");
__turbopack_context__.k.register(_c2, "Outlet");
__turbopack_context__.k.register(_c3, "Navigate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/formato.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * El formato del dinero, en un solo lugar.
 *
 * Estaba repetido en una docena de archivos, cada uno con su `$` escrito a
 * mano. Mientras el sistema fuera de un solo ISP en Ecuador eso no molestaba;
 * ahora se vende, y un ISP de otro país no puede necesitar que le editen doce
 * archivos para que diga S/ en vez de $.
 *
 * No es un hook ni un contexto a propósito. La moneda no cambia mientras
 * alguien usa el sistema: se lee una vez al arrancar y listo. Un contexto
 * obligaría a convertir en componente cada función que hoy formatea un monto,
 * a cambio de nada.
 */ __turbopack_context__.s([
    "aFecha",
    ()=>aFecha,
    "configurarMoneda",
    ()=>configurarMoneda,
    "dinero",
    ()=>dinero,
    "dineroCero",
    ()=>dineroCero,
    "fecha",
    ()=>fecha,
    "fechaHora",
    ()=>fechaHora,
    "hora",
    ()=>hora,
    "numero",
    ()=>numero,
    "simboloMoneda",
    ()=>simboloMoneda
]);
let simbolo = '$';
function configurarMoneda(nuevoSimbolo) {
    if (nuevoSimbolo) simbolo = nuevoSimbolo;
}
const simboloMoneda = ()=>simbolo;
const dinero = (n)=>n == null ? '—' : dineroCero(n);
const dineroCero = (n)=>{
    const valor = Number(n) || 0;
    const texto = Math.abs(valor).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return "".concat(valor < 0 ? '-' : '').concat(simbolo).concat(texto);
};
const numero = (n, decimales)=>n == null || n === '' || Number.isNaN(Number(n)) ? '—' : Number(n).toLocaleString('en-US', {
        // Sin decimales pedidos: los que tenga, hasta dos (12.5 m de fibra).
        minimumFractionDigits: decimales !== null && decimales !== void 0 ? decimales : 0,
        maximumFractionDigits: decimales !== null && decimales !== void 0 ? decimales : 2
    });
// ── Fechas ──────────────────────────────────────────────────────────────────
//
// Una sola forma de mostrar fechas en todo el sistema: "14 oct 2026" y
// "14 oct 2026, 14:19". Antes convivían "24/9/2026", "14/10/26, 14:19" y
// "2026-10-14", y muchas pantallas usaban el idioma del navegador.
const ZONA = 'America/Guayaquil';
const FMT_FECHA = new Intl.DateTimeFormat('es-EC', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: ZONA
});
const FMT_FECHA_HORA = new Intl.DateTimeFormat('es-EC', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: ZONA
});
const FMT_HORA = new Intl.DateTimeFormat('es-EC', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: ZONA
});
function aFecha(v) {
    if (v == null || v === '') return null;
    if (v instanceof Date) return Number.isNaN(v.getTime()) ? null : v;
    const texto = String(v);
    const solo = /^(\d{4})-(\d{2})-(\d{2})$/.exec(texto);
    const d = solo ? new Date("".concat(texto, "T12:00:00-05:00")) : new Date(v);
    return Number.isNaN(d.getTime()) ? null : d;
}
const limpiar = (s)=>s.replace(/\./g, '');
const fecha = (v)=>{
    const d = aFecha(v);
    return d ? limpiar(FMT_FECHA.format(d)) : '—';
};
const fechaHora = (v)=>{
    const d = aFecha(v);
    return d ? limpiar(FMT_FECHA_HORA.format(d)) : '—';
};
const hora = (v)=>{
    const d = aFecha(v);
    return d ? FMT_HORA.format(d) : '—';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/apiNetwork.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-client] (ecmascript)");
;
;
/**
 * Cliente del módulo de red: OLTs, MikroTik, TR-069, SRI, documentos, portal…
 *
 * Todo pasa por Django, que es el único backend expuesto: el navegador llama a
 * /api/v1/red/api/... y Django reenvía al servicio interno de red (el proceso
 * middleware/), que ya no se le da al navegador. La sesión que viaja es la de
 * Django — la misma del resto del sistema — y con ella el proxy identifica a
 * quién pide, para que la auditoría siga diciendo quién hizo qué.
 */ const DJANGO = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || 'http://localhost:8000/api/v1').replace(/\/$/, '');
const BASE = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1/red") || "".concat(DJANGO, "/red")).replace(/\/$/, '');
class ApiError extends Error {
    constructor(message, { status, hint, detalle, ...extra } = {}){
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.hint = hint;
        this.detalle = detalle;
        // Lo que el middleware haya adjuntado al error: la lista de OLTs para poder
        // elegir una, la foto de una ONT que quedó a medias. Descartarlo hacía
        // falsos los mensajes que dicen "está en la respuesta".
        Object.assign(this, extra);
    }
}
async function request(metodo, ruta, body) {
    var _data_session;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) {
        const respuesta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoApi"])(metodo, ruta, body);
        if (respuesta === undefined) {
            throw new ApiError("El modo demo no simula ".concat(metodo, " ").concat(ruta), {
                hint: 'Sal del modo demo (NEXT_PUBLIC_DEMO_MODE) y levanta Django con el servicio de red para usar esta función de verdad.'
            });
        }
        return respuesta;
    }
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getSession();
    const token = data === null || data === void 0 ? void 0 : (_data_session = data.session) === null || _data_session === void 0 ? void 0 : _data_session.access_token;
    let res;
    try {
        res = await fetch("".concat(BASE).concat(ruta), {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {}
            },
            body: body ? JSON.stringify(body) : undefined
        });
    } catch (e) {
        throw new ApiError("No se puede contactar al backend en ".concat(BASE), {
            hint: 'Verifica que Django esté corriendo (puerto 8000) y con él el servicio de red (middleware/): el navegador habla con /api/v1/red/...'
        });
    }
    const texto = await res.text();
    let json = null;
    try {
        json = texto ? JSON.parse(texto) : null;
    } catch (e) {
        throw new ApiError('El middleware devolvió una respuesta que no es JSON', {
            status: res.status,
            detalle: texto.slice(0, 200)
        });
    }
    if (!res.ok) {
        const { error: _e, ...resto } = json !== null && json !== void 0 ? json : {};
        // `mensaje` además de `error`: algunas rutas contestan un estado del trabajo
        // —"la OLT no ve la ONT"— con `res.status(409).json({ mensaje })` en vez de
        // lanzar. Sin este segundo intento, al técnico le llegaba "Error 409" y el
        // texto que explicaba qué hacer se perdía en el camino.
        throw new ApiError((json === null || json === void 0 ? void 0 : json.error) || (json === null || json === void 0 ? void 0 : json.mensaje) || "Error ".concat(res.status), {
            ...resto,
            status: res.status
        });
    }
    return json;
}
/**
 * Descarga binaria — el RIDE en PDF.
 *
 * No se puede resolver con un `<a href>`: la ruta pasa por Django y exige el
 * token de la sesión en la cabecera, y un enlace común no la manda. Se trae como
 * blob y la página decide si lo abre o lo baja.
 */ async function archivo(ruta, body) {
    var _data_session;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) {
        throw new ApiError('El modo demo no genera archivos', {
            hint: 'Sal del modo demo (NEXT_PUBLIC_DEMO_MODE) y levanta Django con el servicio de red para descargar el RIDE.'
        });
    }
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getSession();
    const token = data === null || data === void 0 ? void 0 : (_data_session = data.session) === null || _data_session === void 0 ? void 0 : _data_session.access_token;
    let res;
    try {
        // Con cuerpo va por POST: la plantilla del padrón se arma a partir de lo que
        // se acaba de elegir, y eso no entra cómodo en una URL.
        res = await fetch("".concat(BASE).concat(ruta), {
            method: body ? 'POST' : 'GET',
            headers: {
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {},
                ...body ? {
                    'Content-Type': 'application/json'
                } : {}
            },
            ...body ? {
                body: JSON.stringify(body)
            } : {}
        });
    } catch (e) {
        throw new ApiError("No se puede contactar al backend en ".concat(BASE), {
            hint: 'Verifica que Django esté corriendo (puerto 8000) y con él el servicio de red (middleware/).'
        });
    }
    if (!res.ok) {
        // Los errores sí vienen en JSON: el PDF solo sale cuando todo salió bien.
        let json = null;
        try {
            json = JSON.parse(await res.text());
        } catch (e) {
        // Se queda con el mensaje genérico de abajo.
        }
        throw new ApiError((json === null || json === void 0 ? void 0 : json.error) || "Error ".concat(res.status), {
            status: res.status,
            hint: json === null || json === void 0 ? void 0 : json.hint,
            detalle: json === null || json === void 0 ? void 0 : json.detalle
        });
    }
    return res.blob();
}
const get = (ruta)=>request('GET', ruta);
const post = (ruta, body)=>request('POST', ruta, body);
const del = (ruta)=>request('DELETE', ruta);
const put = (ruta, body)=>request('PUT', ruta, body);
const qs = (params)=>{
    const limpio = Object.entries(params).filter((param)=>{
        let [, v] = param;
        return v !== undefined && v !== null && v !== '';
    });
    return limpio.length ? "?".concat(new URLSearchParams(limpio)) : '';
};
const api = {
    health: ()=>get('/api/health'),
    /**
   * La licencia de esta instalación.
   *
   * Se puede consultar y activar sin sesión: el que quedó bloqueado tiene que
   * poder pegar el código nuevo sin poder entrar primero.
   */ licencia: {
        estado: ()=>get('/api/licencia/estado'),
        activar: (token)=>post('/api/licencia/activar', {
                token
            }),
        renovar: ()=>post('/api/licencia/renovar')
    },
    /** Traer la base de abonados de otro sistema. Siempre revisar antes de importar. */ migracion: {
        opciones: ()=>get('/api/migracion/abonados/opciones'),
        // La plantilla lleva adentro el router al que pertenecen estos abonados.
        plantilla: (datos)=>archivo('/api/migracion/abonados/plantilla', datos),
        revisarAbonados: (datos)=>post('/api/migracion/abonados/revisar', datos),
        importarAbonados: (datos)=>post('/api/migracion/abonados/importar', datos)
    },
    /**
   * Tipos de ONU — el catálogo de modelos.
   *
   * Fuera de /api/olt/:id a propósito: un modelo es el mismo en todas las OLTs.
   */ tiposOnu: {
        listar: ()=>get('/api/tipos-onu'),
        crear: (datos)=>post('/api/tipos-onu', datos),
        editar: (id, datos)=>put("/api/tipos-onu/".concat(id), datos),
        borrar: (id, forzar)=>del("/api/tipos-onu/".concat(id).concat(qs({
                forzar: forzar ? 'true' : ''
            }))),
        importar: (datos)=>post('/api/tipos-onu/importar', datos)
    },
    /** Cifra una contraseña de equipo antes de guardarla en la base. */ cifrar: (password)=>post('/api/crypto/encrypt', {
            password
        }),
    /**
   * TR-069 de TODAS las OLTs.
   *
   * Fuera de /api/olt/:id a propósito, igual que los tipos de ONU: un ACS sirve
   * al padrón entero. Definir el mismo perfil equipo por equipo es cómo se llega
   * a que una OLT apunte a una dirección y otra a una que quedó vieja.
   */ tr069: {
        perfiles: ()=>get('/api/tr069/perfiles'),
        crearPerfil: (datos)=>post('/api/tr069/perfiles', datos),
        estado: ()=>get('/api/tr069/estado'),
        ont: (param)=>{
            let { oltId, frame, slot, puerto, onuId } = param;
            return get("/api/tr069/ont".concat(qs({
                oltId,
                frame,
                slot,
                puerto,
                onuId
            })));
        },
        asignar: (datos)=>post('/api/tr069/ont', datos)
    },
    mikrotik: {
        test: (id)=>get("/api/mikrotik/".concat(id, "/test")),
        pools: (id)=>get("/api/mikrotik/".concat(id, "/pools")),
        crearPool: (id, datos)=>post("/api/mikrotik/".concat(id, "/pools"), datos),
        borrarPool: (id, poolId)=>del("/api/mikrotik/".concat(id, "/pools/").concat(encodeURIComponent(poolId))),
        interfaces: (id)=>get("/api/mikrotik/".concat(id, "/interfaces")),
        addresses: (id)=>get("/api/mikrotik/".concat(id, "/addresses")),
        crearAddress: (id, datos)=>post("/api/mikrotik/".concat(id, "/addresses"), datos),
        borrarAddress: (id, addrId)=>del("/api/mikrotik/".concat(id, "/addresses/").concat(encodeURIComponent(addrId))),
        bloqueos: (id)=>get("/api/mikrotik/".concat(id, "/bloqueos")),
        bloquear: (id, datos)=>post("/api/mikrotik/".concat(id, "/bloqueos"), datos),
        desbloquear: (id, entradaId)=>del("/api/mikrotik/".concat(id, "/bloqueos/").concat(encodeURIComponent(entradaId))),
        redireccionPago: (id, datos)=>post("/api/mikrotik/".concat(id, "/redireccion-pago"), datos),
        filter: (id)=>get("/api/mikrotik/".concat(id, "/firewall/filter")),
        nat: (id)=>get("/api/mikrotik/".concat(id, "/firewall/nat")),
        queues: (id)=>get("/api/mikrotik/".concat(id, "/queues")),
        crearQueue: (id, datos)=>post("/api/mikrotik/".concat(id, "/queues"), datos),
        /** Los perfiles PPP del equipo: en PPPoE son los que aplican la velocidad. */ perfilesPpp: (id)=>get("/api/mikrotik/".concat(id, "/ppp-profiles")),
        // Clientes: importar del router, exportar hacia él, sincronizar cortes
        // Deja el router igual a lo que dice el sistema: secrets que faltan, IPs
        // que no coinciden, y morosos que ya pagaron y siguen bloqueados.
        // IPv6: revisar qué falta, dejarlo puesto, y apagar su uso sin tocar el equipo.
        revisarIpv6: (id)=>get("/api/mikrotik/".concat(id, "/ipv6")),
        prepararIpv6: (id, datos)=>post("/api/mikrotik/".concat(id, "/ipv6"), datos),
        apagarIpv6: (id)=>del("/api/mikrotik/".concat(id, "/ipv6")),
        // Dejar un equipo nuevo listo para operar. `revisar` no toca nada.
        revisarConfiguracion: (id, red)=>get("/api/mikrotik/".concat(id, "/configurar").concat(red ? "?red=".concat(encodeURIComponent(red)) : '')),
        configurar: (id, datos)=>post("/api/mikrotik/".concat(id, "/configurar"), datos),
        revisarReparacion: (id)=>get("/api/mikrotik/".concat(id, "/reparar")),
        reparar: (id, datos)=>post("/api/mikrotik/".concat(id, "/reparar"), datos),
        escaneo: function(id) {
            let { lista, fuentes } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return get("/api/mikrotik/".concat(id, "/escaneo").concat(qs({
                lista,
                fuentes: fuentes === null || fuentes === void 0 ? void 0 : fuentes.join(',')
            })));
        },
        importar: (id, clientes)=>post("/api/mikrotik/".concat(id, "/importar"), {
                clientes
            }),
        exportar: (id, datos)=>post("/api/mikrotik/".concat(id, "/exportar"), datos),
        migrarLista: (id, datos)=>post("/api/mikrotik/".concat(id, "/migrar-lista"), datos),
        sincronizarMorosos: (id, datos)=>post("/api/mikrotik/".concat(id, "/sincronizar-morosos"), datos)
    },
    /**
   * Herramientas técnicas sobre un abonado.
   *
   * Reciben el id del CLIENTE, no el del router: el objetivo lo deduce el
   * middleware leyendo su ficha. Mandar la IP desde acá haría que un id
   * equivocado le reinicie el equipo al vecino.
   */ herramientas: {
        ping: function(clientId) {
            let datos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return post("/api/herramientas/".concat(clientId, "/ping"), datos);
        },
        traceroute: function(clientId) {
            let datos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return post("/api/herramientas/".concat(clientId, "/traceroute"), datos);
        },
        senal: (clientId)=>post("/api/herramientas/".concat(clientId, "/senal"), {}),
        testVelocidad: function(clientId) {
            let datos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return post("/api/herramientas/".concat(clientId, "/test-velocidad"), datos);
        },
        reiniciar: (clientId)=>post("/api/herramientas/".concat(clientId, "/reiniciar"), {
                confirmar: true
            }),
        kickPpp: (clientId)=>post("/api/herramientas/".concat(clientId, "/kick-ppp"), {}),
        wifi: (clientId, datos)=>post("/api/herramientas/".concat(clientId, "/wifi"), datos),
        dispositivos: (clientId)=>get("/api/herramientas/".concat(clientId, "/dispositivos"))
    },
    /**
   * Alta autónoma del técnico en campo.
   *
   * Reciben el id de la INSTALACIÓN, no el del equipo: a qué OLT preguntarle y
   * en qué router escribir sale de la orden de trabajo. Mandarlo desde el
   * celular haría que un alta con el nodo mal elegido escriba configuración
   * sobre los abonados de otro sector.
   */ instalaciones: {
        /** Le pregunta a la OLT o a la radio cómo llegó la señal. */ /**
     * Le pregunta al equipo cómo llegó la señal.
     *
     * `donde` lleva la OLT cuando la orden no la trae —el técnico la elige en el
     * momento— y queda guardada para no volver a preguntarla.
     */ lectura: function(id) {
            let donde = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return post("/api/instalaciones/".concat(id, "/lectura"), donde);
        },
        /**
     * Qué segmento de red le toca a la instalación según dónde apareció la ONT.
     * Sale de la cadena puerto PON → VLAN → subred, sin preguntarle al técnico.
     */ segmentoSugerido: (id)=>get("/api/instalaciones/".concat(id, "/segmento-sugerido")),
        /**
     * Autoriza la ONT desde el campo, con los datos de la orden de trabajo.
     * Es lo único que le falta al técnico cuando la fibra ya llegó.
     */ autorizar: (id, datos)=>post("/api/instalaciones/".concat(id, "/autorizar"), datos),
        /** La siguiente dirección libre del pool o del segmento del nodo. */ // Todos los segmentos entre los que el técnico puede elegir, con su torre.
        segmentos: (id)=>get("/api/instalaciones/".concat(id, "/segmentos")),
        ipLibre: function(id) {
            let { pool, red, router_id } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return get("/api/instalaciones/".concat(id, "/ip-libre").concat(qs({
                pool,
                red,
                router_id
            })));
        },
        /** Deja al abonado configurado en el router: secret PPPoE o reserva DHCP. */ aprovisionar: (id, datos)=>post("/api/instalaciones/".concat(id, "/aprovisionar"), datos),
        /** Ping y test de ancho de banda contra el equipo recién instalado. */ pruebas: function(id) {
            let datos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return post("/api/instalaciones/".concat(id, "/pruebas"), datos);
        }
    },
    /**
   * Cambio de ONT: el paso de la OLT.
   *
   * Va solo el id del reemplazo. El puerto, el perfil y la VLAN los lee el
   * servidor de la ONU anterior — el técnico no elige ninguno, que es lo que
   * separa "cambiar un equipo" de "configurar la OLT desde el celular".
   */ reemplazos: {
        aprovisionar: (id)=>post("/api/reemplazos/".concat(id, "/aprovisionar"), {})
    },
    /**
   * Aplicar un plan a los abonados que ya lo tienen.
   *
   * Cambiar la velocidad en la base no le cambia nada a nadie: eso vive en los
   * equipos, y llega distinto según cómo se conecte cada abonado.
   */ planes: {
        /** A cuántos afectaría y en qué equipos. No toca nada. */ impacto: (id)=>get("/api/planes/".concat(id, "/impacto")),
        /** Reescribe la Simple Queue de cada abonado del plan. */ sincronizar: (id)=>post("/api/planes/".concat(id, "/sincronizar"), {}),
        /** En qué routers está disponible el plan y cómo quedó su perfil. */ routers: (id)=>get("/api/planes/".concat(id, "/routers")),
        /**
     * Crea o corrige el perfil PPP del plan en los routers asignados.
     *
     * El perfil queda SIN rate-limit a propósito: en fibra el caudal lo pone la
     * traffic table de la OLT.
     */ aprovisionar: (id)=>post("/api/planes/".concat(id, "/aprovisionar"), {})
    },
    /**
   * IPAM: qué direcciones existen y quién ocupa cada una.
   *
   * `sincronizar` trae lo que el router tiene CONFIGURADO; `escanear` averigua
   * qué hay CONECTADO. La diferencia entre las dos listas es la auditoría.
   */ ipam: {
        // Deja el pool del router igual al rango declarado en el bloque. El rango
        // vive en los dos lados y el que manda es el router.
        sincronizarPool: (subredId)=>post("/api/ipam/subredes/".concat(subredId, "/sincronizar-pool")),
        // Reconstruye los bloques leyendo los pools del router. Es lo que evita
        // cargar a mano la red de un ISP que llega con todo armado.
        importarBloques: (routerId, datos)=>post("/api/ipam/routers/".concat(routerId, "/importar-bloques"), datos),
        sincronizar: (subredId)=>post("/api/ipam/subredes/".concat(subredId, "/sincronizar"), {}),
        escanear: function(subredId) {
            let datos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return post("/api/ipam/subredes/".concat(subredId, "/escanear"), datos);
        },
        libre: (subredId)=>get("/api/ipam/subredes/".concat(subredId, "/libre")),
        /**
     * ¿Está libre esta IP?
     *
     * Contesta con el NOMBRE de quien la tiene, no con un sí o un no: "está
     * ocupada" obliga a ir a buscar por quién, y el que está dando de alta a un
     * abonado con el técnico esperando en el poste no va a ir a buscar nada.
     */ verificarIp: function(ip) {
            let { router, excluir } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return get("/api/ipam/ips/".concat(encodeURIComponent(ip)).concat(qs({
                router,
                excluir
            })));
        },
        /**
     * Comparar las IPs del sistema con las del router.
     *
     * Se corre después de migrar un padrón: el sistema cree saber qué IP tiene
     * cada abonado —la que decía el archivo— y el router sabe otra cosa.
     */ conciliarIps: (routerId)=>get("/api/ipam/routers/".concat(routerId, "/conciliar-ips")),
        /**
     * Hacerse cargo del corte que ya existe en el router.
     *
     * Va en dos pasos siempre: `planCorte` mira y no toca nada, `adoptarCorte`
     * ejecuta. Lo que está del otro lado es el firewall de un equipo con
     * abonados conectados.
     */ planCorte: (routerId)=>get("/api/ipam/routers/".concat(routerId, "/corte")),
        adoptarCorte: (routerId, datos)=>post("/api/ipam/routers/".concat(routerId, "/corte"), datos),
        /** Estado de cada CCR con su carga de CPU y memoria. */ saludRouters: ()=>get('/api/ipam/routers/salud')
    },
    /** Monitoreo de la red en vivo. */ nms: {
        estado: ()=>get('/api/nms/estado'),
        sondear: ()=>post('/api/nms/sondear', {}),
        /** Prueba suelta de un nodo: no registra nada en el historial. */ probar: (nodoId)=>post("/api/nms/nodos/".concat(nodoId, "/probar"), {})
    },
    /** Mensajes al abonado. El envío necesita credenciales que no van al navegador. */ /** El portal del abonado, administrado desde la oficina. */ /**
   * Las plantillas aprobadas de WhatsApp.
   *
   * `revisar` contesta si Meta la va a rechazar, sin guardarla: es lo que evita
   * la vuelta entera de pegar el texto en el Administrador de WhatsApp y esperar.
   */ plantillasWhatsapp: {
        listar: ()=>get('/api/plantillas-whatsapp'),
        revisar: (cuerpo_meta, variables)=>post('/api/plantillas-whatsapp/revisar', {
                cuerpo_meta,
                variables
            }),
        guardar: (id, datos)=>put("/api/plantillas-whatsapp/".concat(id), datos)
    },
    /**
   * Cortes masivos y mantenimientos programados.
   *
   * `previsualizar` es la llamada importante: dice a cuántos abonados alcanzaría
   * un alcance ANTES de que exista algo que se pueda abrir de un clic.
   */ incidencias: {
        listar: function() {
            let estado = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'abierta';
            return get("/api/incidencias".concat(qs({
                estado
            })));
        },
        previsualizar: (alcance)=>post('/api/incidencias/previsualizar', alcance),
        crear: (datos)=>post('/api/incidencias', datos),
        abrir: (id)=>post("/api/incidencias/".concat(id, "/abrir"), {}),
        resolver: (id)=>post("/api/incidencias/".concat(id, "/resolver"), {}),
        cancelar: (id, motivo)=>post("/api/incidencias/".concat(id, "/cancelar"), {
                motivo
            }),
        avisos: (id)=>get("/api/incidencias/".concat(id, "/avisos")),
        enviarPendientes: function() {
            let lote = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 40;
            return post('/api/incidencias/enviar-pendientes', {
                lote
            });
        }
    },
    /**
   * Las llaves con las que entran los sistemas externos, y la bandeja de pagos
   * que reportaron.
   *
   * Ojo con `crear`: la respuesta trae la llave EN CLARO y es la única vez. No
   * se guarda en ningún lado — quien la reciba tiene que copiarla ahí mismo.
   */ integraciones: {
        llaves: ()=>get('/api/integracion-admin/llaves'),
        crear: (datos)=>post('/api/integracion-admin/llaves', datos),
        /**
     * Genera una llave copiando los permisos de un usuario del personal.
     *
     * Es una FOTO: cambiarle después los permisos a esa persona no cambia
     * los de la llave, y desactivar su usuario no la apaga.
     */ crearDesdeUsuario: (datos)=>post('/api/integracion-admin/llaves/desde-usuario', datos),
        guardar: (id, datos)=>put("/api/integracion-admin/llaves/".concat(id), datos),
        revocar: function(id) {
            let motivo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            return request('DELETE', "/api/integracion-admin/llaves/".concat(id), {
                motivo
            });
        },
        llamadas: function() {
            let filtros = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return get("/api/integracion-admin/llamadas".concat(qs(filtros)));
        },
        reportados: function() {
            let estado = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'pendiente';
            return get("/api/integracion-admin/pagos-reportados".concat(qs({
                estado
            })));
        },
        confirmar: function(id) {
            let datos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return post("/api/integracion-admin/pagos-reportados/".concat(id, "/confirmar"), datos);
        },
        rechazar: (id, motivo)=>post("/api/integracion-admin/pagos-reportados/".concat(id, "/rechazar"), {
                motivo
            })
    },
    portalAdmin: {
        resumen: ()=>get('/api/portal-admin/resumen'),
        buscar: (q)=>get("/api/portal-admin/buscar?q=".concat(encodeURIComponent(q))),
        resetear: (id)=>post("/api/portal-admin/abonados/".concat(id, "/resetear")),
        // Genera una clave y la deja legible en la ficha, para dictarla por teléfono.
        fijarClave: (id)=>post("/api/portal-admin/abonados/".concat(id, "/clave")),
        cerrarSesiones: (id)=>post("/api/portal-admin/abonados/".concat(id, "/cerrar-sesiones")),
        solicitudes: function() {
            let estado = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'pendiente';
            return get("/api/portal-admin/solicitudes?estado=".concat(estado));
        },
        marcarSolicitud: (id, estado)=>post("/api/portal-admin/solicitudes/".concat(id), {
                estado
            })
    },
    /** La marca del sistema. Se lee sin sesión: el login la necesita. */ general: {
        config: ()=>get('/api/general'),
        guardar: (datos)=>put('/api/general', datos)
    },
    /** Los automatismos. Guardar reprograma: no hace falta reiniciar. */ tareas: {
        estado: ()=>get('/api/tareas'),
        guardar: (datos)=>put('/api/tareas', datos),
        /**
     * Los avisos de pago, antes de mandarlos.
     *
     * Un aviso mal redactado sale para todos los abonados a la vez y no se puede
     * desenviar. Estas dos contestan "¿a quién le llegaría hoy?" sin escribirle
     * a nadie.
     */ simularAvisosPago: ()=>post('/api/tareas/avisos-pago/simular'),
        avisosPagoPendientes: ()=>get('/api/tareas/avisos-pago/pendientes'),
        /** El corte por mora, sin tocar el router. Es la que deja gente sin internet. */ simularMora: ()=>post('/api/tareas/mora/simular')
    },
    /**
   * Las actas firmadas, en PDF.
   *
   * Vienen como blob y no como enlace: la ruta exige el token de la sesión, y
   * un `<a href>` no lo manda. Es el mismo camino que el RIDE y el recibo.
   */ actas: {
        retiro: (id)=>archivo("/api/actas/retiro/".concat(id)),
        entrega: (id)=>archivo("/api/actas/entrega/".concat(id))
    },
    /**
   * Los documentos que el ISP escribe en el editor de plantillas.
   *
   * `?texto=1` devuelve el texto ya reemplazado en vez del PDF: es la vista
   * previa del editor, y va por `get` porque es JSON, no un archivo.
   */ documentos: {
        /**
     * `contratoId` sirve para reimprimir uno viejo: sale con las condiciones
     * que tenía cuando se firmó, no con las de hoy. Sin él se imprime el
     * vigente.
     */ contrato: function(clienteId) {
            let { contratoId = null, descargar = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return archivo("/api/documentos/contrato/".concat(clienteId).concat(qs({
                contrato: contratoId,
                descargar: descargar ? '1' : null
            })));
        },
        /**
     * El contrato de adhesión de la ARCOTEL, con sus cuatro anexos.
     *
     * `origen` es 'cliente' o 'orden': el contrato se firma ANTES del alta, así
     * que tiene que poder salir de una orden de trabajo — de alguien que
     * todavía no es abonado— con los datos que cargó el vendedor.
     */ contratoArcotel: function(id) {
            let { origen = 'cliente', contratoId = null, descargar = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return archivo("/api/documentos/contrato-arcotel/".concat(origen === 'orden' ? 'orden/' : '').concat(id).concat(qs({
                contrato: contratoId,
                descargar: descargar ? '1' : null
            })));
        },
        /** Qué quedaría en blanco, para avisarlo ANTES de imprimir las nueve hojas. */ revisarContrato: function(id) {
            let origen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'cliente';
            return get("/api/documentos/contrato-arcotel/".concat(origen === 'orden' ? 'orden/' : '').concat(id, "?revisar=1"));
        },
        instalacion: function(id) {
            let descargar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            return archivo("/api/documentos/instalacion/".concat(id).concat(descargar ? '?descargar=1' : ''));
        },
        ticket: function(id) {
            let descargar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            return archivo("/api/documentos/ticket/".concat(id).concat(descargar ? '?descargar=1' : ''));
        },
        recibo: function(pagoId) {
            let descargar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            return archivo("/api/documentos/recibo/".concat(pagoId).concat(descargar ? '?descargar=1' : ''));
        },
        /**
     * El recibo para la térmica: llega como TEXTO, no como PDF.
     *
     * Una tirilla de 58 mm no se pagina; mandarle un PDF abriría el diálogo de
     * impresión con márgenes de hoja A4, que es lo que estorba en el mostrador.
     */ reciboPos: function(pagoId) {
            let ancho = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 32;
            return archivo("/api/documentos/recibo-pos/".concat(pagoId, "?ancho=").concat(ancho)).then((b)=>b.text());
        },
        /** La vista previa del editor, con datos reales de ese abonado o ese cobro. */ previa: (tipo, id)=>get("/api/documentos/".concat(tipo, "/").concat(id, "?texto=1"))
    },
    /**
   * La firma del contrato: electrónica por API, o en papel.
   *
   * `solicitar` NO falla cuando el proveedor no responde: devuelve el trámite
   * con `hay_que_firmar_en_papel` en true y el motivo. Es a propósito — el que
   * vende está con el cliente delante y lo que necesita es seguir, no un error.
   */ firmas: {
        config: ()=>get('/api/firmas/config'),
        guardarConfig: (datos)=>put('/api/firmas/config', datos),
        /** Prueba la conexión sin crear ningún trámite. */ probar: function() {
            let api_url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            return post('/api/firmas/probar', {
                api_url
            });
        },
        de: function() {
            let { instalacionId = null, clienteId = null } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return get("/api/firmas".concat(qs({
                instalacion: instalacionId,
                cliente: clienteId
            })));
        },
        solicitar: (datos)=>post('/api/firmas/solicitar', datos),
        autorizarManual: function(id) {
            let motivo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            return post("/api/firmas/".concat(id, "/autorizar-manual"), {
                motivo
            });
        },
        registrarManual: (id, datos)=>post("/api/firmas/".concat(id, "/registrar-manual"), datos),
        vencer: ()=>post('/api/firmas/vencer', {})
    },
    /** Las alertas en tiempo real: estado del canal y prueba de destinos. */ alertas: {
        estado: ()=>get('/api/alertas/estado'),
        probar: (id)=>post("/api/alertas/destinos/".concat(id, "/probar"), {}),
        correr: ()=>post('/api/alertas/correr', {})
    },
    comunicaciones: {
        canales: ()=>get('/api/comunicaciones/canales'),
        config: ()=>get('/api/comunicaciones/config'),
        guardarConfig: (datos)=>put('/api/comunicaciones/config', datos),
        probar: (canal, destino)=>post('/api/comunicaciones/probar', {
                canal,
                destino
            }),
        vistaPrevia: (datos)=>post('/api/comunicaciones/vista-previa', datos),
        /**
     * El correo entero como va a salir: tarjeta, logo, cuentas y botón.
     *
     * La otra previa devuelve solo el texto con los marcadores reemplazados, que
     * no alcanza para saber si el mensaje quedó bien: el párrafo puede leerse
     * perfecto y repetir un dato que la tabla ya muestra.
     */ vistaPreviaCorreo: (datos)=>post('/api/comunicaciones/vista-previa-correo', datos),
        enviar: (datos)=>post('/api/comunicaciones/enviar', datos),
        marcarEnviado: (id)=>post("/api/comunicaciones/".concat(id, "/marcar-enviado"), {})
    },
    /** Consumo medido de los abonados. */ consumo: {
        estado: ()=>get('/api/consumo/estado'),
        recolectar: function() {
            let datos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return post('/api/consumo/recolectar', datos);
        },
        sincronizarSesiones: ()=>post('/api/consumo/sesiones/sincronizar', {}),
        reporte: function(clientId, mes) {
            let descargar = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            return archivo("/api/consumo/".concat(clientId, "/reporte?mes=").concat(mes).concat(descargar ? '&descargar=1' : ''));
        }
    },
    sri: {
        config: ()=>get('/api/sri/config'),
        guardarConfig: (datos)=>request('PUT', '/api/sri/config', datos),
        catalogos: ()=>get('/api/sri/catalogos'),
        preview: (detalles)=>post('/api/sri/preview', {
                detalles
            }),
        emitirFactura: (datos)=>post('/api/sri/facturas', datos),
        xml: (id)=>get("/api/sri/documentos/".concat(id, "/xml")),
        /** RIDE en PDF: lo que se le entrega al abonado. */ ride: (id)=>archivo("/api/sri/documentos/".concat(id, "/ride")),
        /** Emite las facturas de los cobros del cierre y las manda al SRI. */ facturarLote: (datos)=>post('/api/sri/facturar-lote', datos),
        /** Devuelve el número de un comprobante que nunca salió, para reutilizarlo. */ liberarNumero: (id, datos)=>post("/api/sri/documentos/".concat(id, "/liberar-numero"), datos),
        /** Generación mensual de las facturas del sistema. */ facturasDelMes: ()=>get('/api/sri/facturas-mes'),
        generarFacturasDelMes: (datos)=>post('/api/sri/facturas-mes', datos),
        certificado: ()=>get('/api/sri/certificado'),
        subirCertificado: (datos)=>post('/api/sri/certificado', datos),
        borrarCertificado: ()=>del('/api/sri/certificado'),
        probarFirma: ()=>post('/api/sri/probar-firma'),
        firmar: (id)=>post("/api/sri/documentos/".concat(id, "/firmar")),
        enviar: (id)=>post("/api/sri/documentos/".concat(id, "/enviar")),
        autorizacion: (id)=>post("/api/sri/documentos/".concat(id, "/autorizacion")),
        procesar: (id, opciones)=>post("/api/sri/documentos/".concat(id, "/procesar"), opciones),
        /** Manda el XML autorizado y el RIDE al comprador. */ email: (id, datos)=>post("/api/sri/documentos/".concat(id, "/email"), datos),
        probarSmtp: (datos)=>post('/api/sri/probar-smtp', datos)
    },
    pagos: {
        /**
     * El comprobante que se le entrega al cliente por un cobro.
     *
     * Qué papel sale lo decide el servidor según el cobro: la factura saldada
     * —con la banda que dice PAGADO— cuando saldó una, y el recibo cuando no hay
     * factura que mostrar. Elegirlo en cada pantalla hacía que el mismo cobro
     * saliera distinto según por dónde se lo pidiera.
     */ comprobante: (id)=>archivo("/api/pagos/".concat(id, "/comprobante")),
        /** El recibo de cobro pelado, para cuando se lo quiere sí o sí. */ recibo: (id)=>archivo("/api/pagos/".concat(id, "/recibo")),
        /** Estado de cuenta de una factura: sus pagos, excedentes y saldo. */ facturaPdf: (id)=>archivo("/api/pagos/facturas/".concat(id, "/pdf")),
        /**
     * El cierre de caja: todo lo cobrado con estos filtros, con sus totales.
     *
     * Los filtros viajan como texto de query y el filtrado se rehace del lado del
     * servidor. Mandar las filas que se ven en pantalla haría un cierre de quince
     * cobros con un total que parece correcto.
     */ transaccionesPdf: function() {
            let query = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
            return archivo("/api/pagos/transacciones/pdf".concat(query ? "?".concat(query) : ''));
        },
        /**
     * Conciliación bancaria: el extracto contra lo cobrado.
     *
     * El archivo va en base64 dentro del cuerpo, como el certificado de firma. El
     * middleware lo lee, lo cruza con los cobros del período que trae el propio
     * extracto y devuelve las tres listas.
     */ conciliar: (datos)=>post('/api/pagos/conciliacion', datos),
        /**
     * El mismo informe en PDF, para archivar y para salir a llamar.
     *
     * Se manda el archivo de nuevo y no el resultado: el papel se vuelve a armar
     * del lado del servidor, así que no puede decir algo distinto de la pantalla
     * porque el navegador haya tocado la respuesta.
     */ conciliacionPdf: (datos)=>archivo('/api/pagos/conciliacion/pdf', datos),
        /**
     * El reporte de ARCOTEL, en Excel o en PDF.
     *
     * El formato viaja en la query y no en dos funciones distintas: los dos
     * papeles salen de la misma consulta y de la misma lista de columnas del lado
     * del servidor, así que separarlos acá sugeriría que pueden diferir.
     */ arcotel: function() {
            let query = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
            return archivo("/api/pagos/arcotel".concat(query ? "?".concat(query) : ''));
        },
        /** Estado del corte automático y a quién cortaría si corriera ahora. */ cortes: ()=>get('/api/pagos/cortes'),
        ejecutarCortes: (datos)=>post('/api/pagos/cortes/ejecutar', datos)
    },
    olt: {
        test: (id)=>get("/api/olt/".concat(id, "/test")),
        /**
     * Estado del equipo: temperatura, placas, consumo y puertos PON.
     *
     * Se lee en vivo y tarda —son varios comandos contra la CLI— así que la
     * pantalla no lo pide sola: lo trae cuando alguien abre el panel.
     */ salud: (id)=>get("/api/olt/".concat(id, "/salud")),
        onus: (id, param)=>{
            let { frame, slot, puerto } = param;
            return get("/api/olt/".concat(id, "/onus").concat(qs({
                frame,
                slot,
                puerto
            })));
        },
        autofind: (id, param)=>{
            let { frame, slot, puerto, puertos } = param;
            return get("/api/olt/".concat(id, "/autofind").concat(qs({
                frame,
                slot,
                puerto,
                puertos
            })));
        },
        registrar: (id, datos)=>post("/api/olt/".concat(id, "/onus"), datos),
        configurarServicio: (id, datos)=>post("/api/olt/".concat(id, "/onus/servicio"), datos),
        eliminar: (id, onuId, param)=>{
            let { frame, slot, puerto } = param;
            return del("/api/olt/".concat(id, "/onus/").concat(onuId).concat(qs({
                frame,
                slot,
                puerto
            })));
        },
        metricas: (id, onuId, param)=>{
            let { frame, slot, puerto } = param;
            return get("/api/olt/".concat(id, "/onus/").concat(onuId, "/metricas").concat(qs({
                frame,
                slot,
                puerto
            })));
        },
        crearLineProfile: (id, datos)=>post("/api/olt/".concat(id, "/line-profiles"), datos),
        aplicarPlan: (id, datos)=>post("/api/olt/".concat(id, "/traffic-tables"), datos),
        cli: (id, comandos)=>post("/api/olt/".concat(id, "/cli"), {
                comandos
            }),
        // --- Ficha del equipo ---------------------------------------------------
        /**
     * Alcance. Es un TCP contra el puerto de gestión, no una sesión CLI: el
     * listado necesita saber si el equipo contesta, no hablar con él.
     */ estado: (id)=>get("/api/olt/".concat(id, "/estado")),
        estados: ()=>post('/api/olt/estados'),
        /** Lee modelo y firmware del equipo y los deja guardados en la ficha. */ versiones: (id)=>post("/api/olt/".concat(id, "/versiones")),
        placas: (id)=>get("/api/olt/".concat(id, "/cards")),
        puertosPon: function(id) {
            let { slot } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return get("/api/olt/".concat(id, "/pon-ports").concat(qs({
                slot
            })));
        },
        /**
     * Estado detallado por puerto: potencia Tx del módulo de la OLT, su
     * temperatura, ONU rogue y cuándo se cayó por última vez.
     *
     * Es un comando por puerto, así que va bajo demanda.
     */ /**
     * Puertos de subida con las VLANs que pasan por cada uno. Un comando por
     * placa más uno por puerto, así que va bajo demanda.
     */ uplinks: function(id) {
            let { slots } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return get("/api/olt/".concat(id, "/uplinks").concat(qs({
                slots
            })));
        },
        /**
     * Agrega o quita VLANs de un troncal.
     *
     * Quitar una VLAN con abonados los deja sin salida a todos a la vez: el
     * middleware se niega salvo que se insista con `forzar`, y devuelve cuántos
     * son para que la pantalla lo pueda decir.
     */ cambiarVlansUplink: (id, datos)=>post("/api/olt/".concat(id, "/uplinks/vlans"), {
                confirmar: true,
                ...datos
            }),
        estadoPuertos: function(id) {
            let { slot, puertos } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return get("/api/olt/".concat(id, "/pon-ports/estado").concat(qs({
                slot,
                puertos
            })));
        },
        /**
     * Acciones masivas sobre todos los puertos de una placa.
     * `accion`: encender · apagar · autofind_on · autofind_off · reiniciar_onts
     */ accionPuertos: (id, param)=>{
            let { slot, accion, puertos } = param;
            return post("/api/olt/".concat(id, "/pon-ports/acciones"), {
                confirmar: true,
                slot,
                accion,
                puertos
            });
        },
        /** Reinicia las ONTs de un puerto. Corta el servicio de sus abonados. */ reiniciarPuerto: (id, param)=>{
            let { slot, puerto, graceful = true } = param;
            return post("/api/olt/".concat(id, "/pon-ports/").concat(slot, "/").concat(puerto, "/reiniciar"), {
                confirmar: true,
                graceful
            });
        },
        /**
     * Le pregunta al equipo qué comandos entiende de un área y devuelve la
     * salida cruda. Es el paso previo a escribir el parser, no su reemplazo.
     */ relevar: (id, area)=>post("/api/olt/".concat(id, "/relevar/").concat(area)),
        areas: ()=>get('/api/olt/areas'),
        historial: function(id) {
            let { limite } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return get("/api/olt/".concat(id, "/historial").concat(qs({
                limite
            })));
        },
        backups: (id)=>get("/api/olt/".concat(id, "/backups")),
        respaldar: (id, datos)=>post("/api/olt/".concat(id, "/backups"), datos !== null && datos !== void 0 ? datos : {}),
        verBackup: (id, backupId)=>get("/api/olt/".concat(id, "/backups/").concat(backupId)),
        borrarBackup: (id, backupId)=>del("/api/olt/".concat(id, "/backups/").concat(backupId)),
        // --- SNMP: lectura masiva -----------------------------------------------
        /**
     * Le pregunta la comunidad SNMP al equipo y la guarda cifrada. Nunca
     * devuelve el valor, solo cuántos caracteres tiene.
     */ detectarComunidad: (id)=>post("/api/olt/".concat(id, "/snmp/detectar")),
        /**
     * Potencia óptica de todas las ONTs de una sola vez.
     *
     * Por defecto solo la RX, que es la que dispara alertas. `completo` agrega
     * temperatura, voltaje y corriente del láser, pero cuesta cinco recorridos
     * en vez de uno.
     */ potencias: function(id) {
            let { guardar, completo } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return get("/api/olt/".concat(id, "/potencias").concat(qs({
                guardar: guardar ? 1 : undefined,
                completo: completo ? 1 : undefined
            })));
        },
        /**
     * ONTs conectadas que nadie autorizó todavía. Va bajo demanda: son varios
     * comandos por la CLI y consumen la sesión del equipo.
     */ esperando: (id)=>get("/api/olt/".concat(id, "/esperando")),
        /**
     * Dispara el barrido de todas las OLTs y lo deja guardado. La pantalla lee
     * el resultado de la base, no de acá: así abrir el tablero es instantáneo.
     */ escanearEsperando: ()=>post('/api/olt/esperando/escanear'),
        /**
     * Ficha completa de una ONU: lo guardado y lo que dice el equipo ahora, en
     * bloques separados. Cuesta una sesión SSH, por eso va a pedido.
     */ fichaOnu: (oltId, onuId)=>get("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/ficha")),
        /**
     * Relee del equipo y corrige NUESTRA copia. No le manda nada a la ONT.
     * La que sí le escribe es reprovisionarOnu.
     */ actualizarFichaOnu: (oltId, onuId)=>post("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/actualizar-ficha")),
        /**
     * Le vuelve a ENVIAR la configuración a la ONT.
     * Para cuando el TR069 no la aplicó y el abonado quedó sin servicio.
     */ reprovisionarOnu: (oltId, onuId)=>post("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/reprovisionar"), {
                confirmar: true
            }),
        /**
     * Cambia el perfil de servicio o el de línea de una ONT ya autorizada.
     * Es el equivalente al "Change ONU type": corrige el perfil sin dar de baja
     * al abonado ni cambiarle el ONT-ID.
     */ /**
     * Perfil TR-069 y/o IP de gestión de una ONT ya autorizada.
     * Las dos partes son opcionales, pero de a una sirven poco: un perfil sin
     * IP no llega al ACS, y una IP sin perfil deja a la ONT sin quién la
     * configure.
     */ /**
     * Los perfiles TR-069 de UNA OLT.
     *
     * Distinto de `api.tr069.perfiles()` —que pregunta a todas y agrupa por ACS—
     * y del resumen `/:id/tr069`, que corre tres `display current-configuration`
     * para contar ONTs. Acá se corre uno solo: el desplegable necesita los
     * nombres y los ids, no las estadísticas.
     */ tr069DeLaOlt: (oltId)=>get("/api/olt/".concat(oltId, "/tr069/perfiles")),
        /** Cómo sale a internet una ONT, y los perfiles de WAN de su OLT. */ wanOnu: (oltId, onuId)=>get("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/wan")),
        /** Configura o saca la WAN. Cambia el servicio del abonado. */ configurarWanOnu: (oltId, onuId, datos)=>post("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/wan"), {
                confirmar: true,
                ...datos
            }),
        /**
     * La dirección, el PPPoE o el DHCP de la WAN, por TR-069.
     *
     * Es lo que el perfil de la OLT no guarda: `wanOnu` ya trae esto en
     * `datos.tr069` para mostrarlo, y esto es el pedido de cambiarlo.
     */ configurarWanTr069Onu: (oltId, onuId, datos)=>post("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/wan/tr069"), {
                confirmar: true,
                ...datos
            }),
        gestionOnu: (oltId, onuId, datos)=>post("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/gestion"), datos),
        cambiarPerfilesOnu: (oltId, onuId, param)=>{
            let { srv_profile_id, line_profile_id } = param;
            return post("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/perfiles"), {
                confirmar: true,
                srv_profile_id,
                line_profile_id
            });
        },
        /** Devuelve la ONT a fábrica: borra el wifi y todo lo del abonado. */ restaurarFabricaOnu: function(oltId, onuId) {
            let completamente = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            return post("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/restaurar-fabrica"), {
                confirmar: true,
                completamente
            });
        },
        /** La configuración que el equipo tiene en ejecución para esa ONT. */ configActivaOnu: (oltId, onuId)=>get("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/config-activa")),
        /** Los puertos de adentro de la ONT: ethernet de la casa y teléfono. */ puertosOnu: (oltId, onuId)=>get("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/puertos")),
        /** Modelo, firmware y fabricante, en vivo. */ softwareOnu: (oltId, onuId)=>get("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/software")),
        /**
     * Velocidad en vivo. Se consulta repetidamente: la primera respuesta no
     * trae Mbps porque hacen falta dos lecturas para restar.
     */ traficoOnu: (oltId, onuId)=>get("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/trafico")),
        /** Reinicia UNA ONT. Corta el servicio un par de minutos. */ reiniciarOnu: (oltId, onuId)=>post("/api/olt/".concat(oltId, "/onus/").concat(onuId, "/reiniciar"), {
                confirmar: true
            }),
        /**
     * Cajas NAP. `proponerNaps` devuelve candidatas para revisar, no un mapa:
     * la OLT no puede saber de qué caja cuelga un abonado.
     */ naps: (oltId)=>get("/api/olt/naps".concat(qs({
                olt_id: oltId
            }))),
        proponerNaps: (oltId)=>get("/api/olt/".concat(oltId, "/naps/proponer")),
        crearNap: (oltId, datos)=>post("/api/olt/".concat(oltId, "/naps"), datos),
        borrarNap: (napId)=>del("/api/olt/naps/".concat(napId)),
        asignarANap: function(napId, onu_ids) {
            let verificada = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            return post("/api/olt/naps/".concat(napId, "/onus"), {
                onu_ids,
                verificada
            });
        },
        /** Relee del equipo la ficha de TODAS las ONUs. Arranca y contesta ya. */ resyncMasivo: function(oltId) {
            let todas = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            return post("/api/olt/".concat(oltId, "/resync-masivo"), {
                todas
            });
        },
        estadoResyncMasivo: ()=>get('/api/olt/resync-masivo/estado'),
        detenerResyncMasivo: ()=>post('/api/olt/resync-masivo/detener'),
        /**
     * Perfiles de velocidad (traffic tables) de varias OLTs a la vez.
     *
     * El índice es de cada equipo: el 12 de una OLT no tiene por qué ser la
     * misma velocidad que el 12 de otra. Por eso se listan por equipo.
     */ velocidades: (oltIds)=>get("/api/olt/velocidades".concat(qs({
                olt_ids: (oltIds !== null && oltIds !== void 0 ? oltIds : []).join(',')
            }))),
        crearVelocidad: (datos)=>post('/api/olt/velocidades', datos),
        /**
     * Crea un plan comercial a partir de un par de tablas que ya existe.
     *
     * Es el camino inverso al del formulario de planes, y el que sirve en una
     * red que ya está andando: las tablas están desde hace años y lo único que
     * falta es el nombre comercial y el precio.
     */ crearPlanDesdeTablas: (oltId, datos)=>post("/api/olt/".concat(oltId, "/velocidades/plan"), datos),
        borrarVelocidad: (index, oltIds)=>del("/api/olt/velocidades/".concat(index).concat(qs({
                olt_ids: (oltIds !== null && oltIds !== void 0 ? oltIds : []).join(',')
            }))),
        /**
     * Las VLANs de la OLT: las del equipo más lo que sabemos de ellas.
     *
     * Lo que el equipo no puede decir —para qué se usa cada una y de qué puerto
     * PON es la predeterminada— es lo que después permite que una instalación
     * elija sola su segmento de red.
     */ vlans: (oltId)=>get("/api/olt/".concat(oltId, "/vlans")),
        // La misma información al revés: los puertos de cada placa con su VLAN. Es
        // la vista con la que se configura, porque muestra también los puertos
        // vacíos — que son justamente los que falta configurar.
        vlansPorPuerto: (oltId)=>get("/api/olt/".concat(oltId, "/vlans/puertos")),
        // Pools de IP para las ONUs: las de gestión (TR069) y las WAN estáticas.
        // No tocan el equipo: son el registro de qué direcciones hay y cuáles
        // están libres, que hoy se resuelve mirando la OLT a mano.
        poolsIp: (oltId, proposito)=>get("/api/olt/".concat(oltId, "/pools-ip").concat(qs({
                proposito
            }))),
        poolIps: function(oltId, subredId) {
            let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return get("/api/olt/".concat(oltId, "/pools-ip/").concat(subredId, "/ips").concat(qs(params)));
        },
        revisarPoolIp: (oltId, datos)=>post("/api/olt/".concat(oltId, "/pools-ip/revisar"), datos),
        crearPoolIp: (oltId, datos)=>post("/api/olt/".concat(oltId, "/pools-ip"), datos),
        editarPoolIp: (oltId, subredId, datos)=>put("/api/olt/".concat(oltId, "/pools-ip/").concat(subredId), datos),
        ampliarPoolIp: (oltId, subredId, datos)=>post("/api/olt/".concat(oltId, "/pools-ip/").concat(subredId, "/ampliar"), datos),
        borrarPoolIp: (oltId, subredId, forzar)=>del("/api/olt/".concat(oltId, "/pools-ip/").concat(subredId).concat(qs({
                forzar: forzar ? 'true' : ''
            }))),
        siguienteIpPool: (oltId, subredId)=>get("/api/olt/".concat(oltId, "/pools-ip/").concat(subredId, "/siguiente")),
        // Trae las IPs de gestión que las ONTs ya tienen puestas. Es el paso de una
        // migración: sin esto el primer alta entrega una dirección repetida.
        importarIpsGestion: (oltId, datos)=>post("/api/olt/".concat(oltId, "/pools-ip/importar"), datos),
        // Lo caro: preguntarle al equipo cómo está armado. Es un botón aparte
        // porque tarda ~30 s y casi todo es hardware que no cambia.
        relevarPuertos: (oltId)=>post("/api/olt/".concat(oltId, "/vlans/puertos/relevar")),
        // Traer al sistema lo que el equipo ya tiene. No escribe en la OLT: lo
        // único que toca son nuestras anotaciones.
        importarVlans: (oltId, datos)=>post("/api/olt/".concat(oltId, "/vlans/importar"), datos),
        // La VLAN de un puerto vive aparte de la VLAN en sí: varios puertos pueden
        // compartir una, y con la clave puesta en la VLAN solo entraba uno.
        asignarPuerto: (oltId, slot, puerto, datos)=>put("/api/olt/".concat(oltId, "/puertos/").concat(slot, "/").concat(puerto), datos),
        desasignarPuerto: (oltId, slot, puerto)=>del("/api/olt/".concat(oltId, "/puertos/").concat(slot, "/").concat(puerto)),
        crearVlans: (oltId, datos)=>post("/api/olt/".concat(oltId, "/vlans"), datos),
        borrarVlans: (oltId, datos)=>post("/api/olt/".concat(oltId, "/vlans/borrar"), datos),
        anotarVlan: (oltId, vlan, datos)=>put("/api/olt/".concat(oltId, "/vlans/").concat(vlan), datos),
        vlansCorrelativas: (oltId, datos)=>post("/api/olt/".concat(oltId, "/vlans/correlativas"), datos),
        // El esquema por puerto va en dos pasos: primero se calcula y se contrasta
        // con lo que ya existe sin tocar nada, y recién después se crea. Dieciséis
        // subredes salidas de un solo botón son demasiadas para no verlas antes.
        esquemaSimular: (oltId, datos)=>post("/api/olt/".concat(oltId, "/vlans/esquema/simular"), datos),
        esquemaAplicar: (oltId, datos)=>post("/api/olt/".concat(oltId, "/vlans/esquema/aplicar"), datos),
        // Deshacer: el bloque, el pool y la VLAN del puerto, de una. Crear son tres
        // cosas y deshacerlas eran tres pantallas distintas.
        esquemaDeshacer: (oltId, datos)=>post("/api/olt/".concat(oltId, "/vlans/esquema/deshacer"), datos),
        // Un perfil PPP por VLAN, con el gateway de cada bloque.
        perfilesPorVlan: (oltId, datos)=>post("/api/olt/".concat(oltId, "/perfiles-por-vlan"), datos),
        /** Las traffic tables de UNA OLT, para elegir desde un plan. */ trafficTables: (oltId)=>get("/api/olt/".concat(oltId, "/traffic-tables")),
        /** Comprueba los planes contra las tablas que el equipo tiene de verdad. */ verificarPlanes: function(oltId) {
            let guardar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            return get("/api/olt/".concat(oltId, "/planes/verificar").concat(guardar ? '?guardar=1' : ''));
        },
        /** Perfiles de línea y de servicio que tiene cargados el equipo. */ perfilesOnt: (id)=>get("/api/olt/".concat(id, "/perfiles")),
        /**
     * Plantillas de autorización: el juego de datos que se repite en todas las
     * altas de una zona.
     */ presets: (oltId)=>get("/api/olt/presets".concat(qs({
                olt_id: oltId
            }))),
        guardarPreset: (datos)=>post('/api/olt/presets', datos),
        borrarPreset: (id)=>del("/api/olt/presets/".concat(id)),
        /** ONTs cargadas antes de estar conectadas. */ preautorizadas: (filtros)=>get("/api/olt/preautorizadas".concat(qs(filtros !== null && filtros !== void 0 ? filtros : {}))),
        cargarPreautorizada: (oltId, datos)=>post("/api/olt/".concat(oltId, "/preautorizar"), datos),
        borrarPreautorizada: (id)=>del("/api/olt/preautorizadas/".concat(id)),
        reactivarPreautorizada: (id)=>post("/api/olt/preautorizadas/".concat(id, "/reactivar")),
        /**
     * Ficha de una ONT que espera autorización: quién es, desde cuándo está y
     * si esa serie ya figura en una orden de instalación o en otra OLT.
     */ verEsperando: (id, sn)=>get("/api/olt/".concat(id, "/esperando/").concat(encodeURIComponent(sn))),
        /**
     * Vuelve a preguntarle al equipo por UNA ONT. Puede sacarla de la cola si el
     * equipo ya no la ve, por eso es POST.
     */ resyncEsperando: (id, sn)=>post("/api/olt/".concat(id, "/esperando/").concat(encodeURIComponent(sn), "/resync")),
        /**
     * Todo lo que hace falta para llenar el formulario de autorización: la
     * orden de instalación que coincide con esa serie, los perfiles del equipo,
     * los planes y qué proponer en cada campo.
     */ datosAutorizacion: (id, sn)=>get("/api/olt/".concat(id, "/autorizar/datos").concat(qs({
                sn
            }))),
        /** Registra la ONT en la OLT y le crea su service-port. */ autorizar: (id, datos)=>post("/api/olt/".concat(id, "/autorizar"), datos),
        /** Vista previa de la importación: no escribe nada. */ inventario: (id)=>get("/api/olt/".concat(id, "/inventario")),
        importarOnus: (id)=>post("/api/olt/".concat(id, "/inventario")),
        /** Enlace ONT↔abonado. `crear` da de alta las fichas que faltan. */ abonados: (id)=>get("/api/olt/".concat(id, "/abonados")),
        enlazarAbonados: function(id) {
            let { crear } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return post("/api/olt/".concat(id, "/abonados"), {
                crear: Boolean(crear)
            });
        },
        // --- Operaciones sobre una ONT instalada --------------------------------
        /** Cambia la velocidad. No corta el servicio. */ cambiarPlanOnu: (id, onuId, planId)=>post("/api/olt/".concat(id, "/onus/").concat(onuId, "/plan"), {
                plan_id: planId
            }),
        /** Suspende o reactiva. Reversible: la configuración queda intacta. */ suspenderOnu: (id, onuId, activar)=>post("/api/olt/".concat(id, "/onus/").concat(onuId, "/suspender"), {
                activar
            }),
        /** Cómo está configurada la ONT en el equipo, tal cual. */ configOnu: (id, onuId)=>get("/api/olt/".concat(id, "/onus/").concat(onuId, "/config")),
        /** Mueve la ONT a otro puerto. Es borrar y recrear: corta el servicio. */ moverOnu: (id, onuId, param)=>{
            let { slot, puerto } = param;
            return post("/api/olt/".concat(id, "/onus/").concat(onuId, "/mover"), {
                confirmar: true,
                slot,
                puerto
            });
        },
        /** Baja definitiva: borra la ONT del equipo y de la base. */ darDeBajaOnu: (id, onuId)=>del("/api/olt/".concat(id, "/onus/").concat(onuId, "/baja?confirmar=true")),
        /** Coherencia entre lo que dice la base y lo que hay configurado. */ inconsistencias: function() {
            let { profundo } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return get("/api/olt/inconsistencias".concat(qs({
                profundo: profundo ? 1 : undefined
            })));
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/abonados.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * El listado de abonados: filtrar, medir antigüedad y exportar.
 *
 * Sin imports a propósito, igual que `comisionesCalculo.js`: son decisiones que
 * conviene poder probar sin levantar un navegador ni una base. La pantalla se
 * queda con lo que es de la pantalla —pintar y descargar— y acá vive lo que hay
 * que poder demostrar que está bien.
 *
 * ── Para qué existe el export ──
 *
 * Para contestar "¿a quién voy a visitar esta semana?". Un abonado suspendido
 * hace dos meses no se recupera solo: o se lo llama, o se le retira el equipo
 * antes de que se pase a la competencia con el equipo puesto. La lista tiene
 * que salir en un archivo que se abra en Excel y se reparta.
 */ /** 132 → 000132. Se lee y se dicta igual que en el sistema anterior. */ __turbopack_context__.s([
    "CAMPOS_FILTRO",
    ()=>CAMPOS_FILTRO,
    "COLUMNAS_ABONADOS",
    ()=>COLUMNAS_ABONADOS,
    "COLUMNAS_EXPORT",
    ()=>COLUMNAS_EXPORT,
    "COLUMNAS_POR_DEFECTO",
    ()=>COLUMNAS_POR_DEFECTO,
    "aCSV",
    ()=>aCSV,
    "antiguedad",
    ()=>antiguedad,
    "clientesConVencido",
    ()=>clientesConVencido,
    "codigoLargo",
    ()=>codigoLargo,
    "columnasPorDefecto",
    ()=>columnasPorDefecto,
    "diasDesde",
    ()=>diasDesde,
    "enlace",
    ()=>enlace,
    "fechaLocal",
    ()=>fechaLocal,
    "filtrarAbonados",
    ()=>filtrarAbonados,
    "filtrarPorCampo",
    ()=>filtrarPorCampo,
    "filtrarPorColumnas",
    ()=>filtrarPorColumnas,
    "filtrosActivos",
    ()=>filtrosActivos,
    "mesesDesde",
    ()=>mesesDesde,
    "necesitaCuentas",
    ()=>necesitaCuentas,
    "nombreArchivo",
    ()=>nombreArchivo,
    "resumirCuentas",
    ()=>resumirCuentas,
    "seleccionarParaExportar",
    ()=>seleccionarParaExportar
]);
const codigoLargo = (n)=>n == null ? '' : String(n).padStart(6, '0');
function mesesDesde(fecha) {
    let ahora = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Date();
    if (!fecha) return null;
    const d = new Date(fecha);
    if (Number.isNaN(d.getTime())) return null;
    let meses = (ahora.getFullYear() - d.getFullYear()) * 12 + (ahora.getMonth() - d.getMonth());
    if (ahora.getDate() < d.getDate()) meses -= 1;
    return Math.max(0, meses);
}
function diasDesde(fecha) {
    let ahora = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Date();
    if (!fecha) return null;
    const d = new Date(fecha);
    if (Number.isNaN(d.getTime())) return null;
    return Math.max(0, Math.floor((ahora - d) / 86400000));
}
function antiguedad(fecha) {
    let ahora = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Date();
    const meses = mesesDesde(fecha, ahora);
    if (meses == null) return '—';
    if (meses >= 1) return "".concat(meses, " ").concat(meses === 1 ? 'mes' : 'meses');
    const dias = diasDesde(fecha, ahora);
    if (dias === 0) return 'hoy';
    return "".concat(dias, " ").concat(dias === 1 ? 'día' : 'días');
}
function enlace(cliente) {
    const e = cliente === null || cliente === void 0 ? void 0 : cliente.onu_estado;
    if (!e) return null;
    if (e === 'online') return {
        texto: 'online',
        color: 'verde'
    };
    if (e === 'offline') return {
        texto: 'offline',
        color: 'rojo'
    };
    return {
        texto: e,
        color: 'gris'
    };
}
function fechaLocal() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Date();
    return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'), "-").concat(String(d.getDate()).padStart(2, '0'));
}
function clientesConVencido(facturas) {
    let hoy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fechaLocal();
    return new Set((facturas !== null && facturas !== void 0 ? facturas : []).filter((f)=>{
        var _f_saldo;
        return Number((_f_saldo = f.saldo) !== null && _f_saldo !== void 0 ? _f_saldo : 0) > 0 && f.fecha_vencimiento && f.fecha_vencimiento < hoy;
    }).map((f)=>f.client_id));
}
function filtrarAbonados(filas) {
    let { busqueda = '', estado = '', router = '', zona = '', plan = '', vencidos = null } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const q = String(busqueda).trim().toLowerCase();
    return (filas !== null && filas !== void 0 ? filas : []).filter((c)=>{
        if (estado && c.estado !== estado) return false;
        if (vencidos && !vencidos.has(c.id)) return false;
        if (router && String(c.router_id) !== String(router)) return false;
        var _c_zona;
        if (zona && ((_c_zona = c.zona) !== null && _c_zona !== void 0 ? _c_zona : '') !== zona) return false;
        if (plan && String(c.plan_id) !== String(plan)) return false;
        if (!q) return true;
        var _c_codigo;
        // Se busca por lo que la gente tiene a mano cuando llama: el nombre, la
        // cédula, el número de abonado, su IP o su teléfono.
        return [
            c.nombre,
            c.identificacion,
            c.ip,
            c.mac_address,
            c.telefono,
            c.telefono_movil,
            c.direccion,
            c.zona,
            codigoLargo(c.codigo),
            String((_c_codigo = c.codigo) !== null && _c_codigo !== void 0 ? _c_codigo : '')
        ].filter(Boolean).some((v)=>String(v).toLowerCase().includes(q));
    });
}
function seleccionarParaExportar(filas) {
    let { modo = 'antiguedad', estado = 'suspendido', meses = 2, desde = '', hasta = '' } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ahora = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new Date();
    const conEstado = (filas !== null && filas !== void 0 ? filas : []).filter((c)=>!estado || c.estado === estado);
    if (modo === 'rango') {
        // Las fechas vienen del <input type="date">: 'YYYY-MM-DD'. Se comparan como
        // texto contra los diez primeros caracteres del timestamp para no arrastrar
        // la zona horaria — un corte de las 23:40 no puede caer en el día siguiente
        // solo porque el navegador esté en otro huso.
        const d = String(desde !== null && desde !== void 0 ? desde : '').slice(0, 10);
        const h = String(hasta !== null && hasta !== void 0 ? hasta : '').slice(0, 10);
        return conEstado.filter((c)=>{
            var _c_estado_desde;
            const f = String((_c_estado_desde = c.estado_desde) !== null && _c_estado_desde !== void 0 ? _c_estado_desde : '').slice(0, 10);
            if (!f) return false;
            if (d && f < d) return false;
            if (h && f > h) return false;
            return true;
        }).sort((a, b)=>String(a.estado_desde).localeCompare(String(b.estado_desde)));
    }
    const minimo = Number(meses) || 0;
    return conEstado.filter((c)=>{
        const m = mesesDesde(c.estado_desde, ahora);
        return m != null && m >= minimo;
    })// Del más viejo al más nuevo: el que más tiempo lleva es al que más urge ir.
    .sort((a, b)=>String(a.estado_desde).localeCompare(String(b.estado_desde)));
}
const COLUMNAS_ABONADOS = [
    // ── Las de siempre ──────────────────────────────────────────────────────
    {
        clave: 'codigo',
        titulo: 'ID',
        grupo: 'principal',
        mono: true,
        texto: (c)=>codigoLargo(c.codigo)
    },
    {
        clave: 'nombre',
        titulo: 'Nombre',
        grupo: 'principal',
        fija: true,
        texto: (c)=>{
            var _c_nombre;
            return (_c_nombre = c.nombre) !== null && _c_nombre !== void 0 ? _c_nombre : '';
        }
    },
    {
        clave: 'direccion',
        titulo: 'Dirección principal',
        grupo: 'principal',
        ancho: true,
        texto: (c)=>{
            var _c_direccion;
            return (_c_direccion = c.direccion) !== null && _c_direccion !== void 0 ? _c_direccion : '';
        }
    },
    // Para qué es el servicio cuando una persona tiene más de uno. Uso interno:
    // el nombre y la dirección son lo que sale impreso, esto no.
    {
        clave: 'referencia_servicio',
        titulo: 'Servicio',
        grupo: 'principal',
        texto: (c)=>{
            var _c_referencia_servicio;
            return (_c_referencia_servicio = c.referencia_servicio) !== null && _c_referencia_servicio !== void 0 ? _c_referencia_servicio : '';
        }
    },
    {
        clave: 'ip',
        tecnica: true,
        titulo: 'IP',
        grupo: 'principal',
        mono: true,
        texto: (c)=>{
            var _c_ip;
            return (_c_ip = c.ip) !== null && _c_ip !== void 0 ? _c_ip : '';
        }
    },
    {
        clave: 'mac',
        tecnica: true,
        titulo: 'MAC',
        grupo: 'principal',
        mono: true,
        texto: (c)=>{
            var _c_mac_address;
            return (_c_mac_address = c.mac_address) !== null && _c_mac_address !== void 0 ? _c_mac_address : '';
        }
    },
    // `exacto` porque es un número corto: filtrar "5" por partes traería también
    // al que paga el 15 y al que paga el 25, y la lista del día 5 saldría mal.
    {
        clave: 'dia_pago',
        titulo: 'Día pago',
        grupo: 'principal',
        centro: true,
        exacto: true,
        texto: (c)=>c.dia_facturacion == null ? '' : String(c.dia_facturacion)
    },
    {
        clave: 'deuda',
        titulo: 'Deuda actual',
        grupo: 'principal',
        derecha: true,
        texto: (c)=>dosDecimales(c.saldo)
    },
    {
        clave: 'correo',
        titulo: 'Correo',
        grupo: 'principal',
        texto: (c)=>{
            var _c_email;
            return (_c_email = c.email) !== null && _c_email !== void 0 ? _c_email : '';
        }
    },
    {
        clave: 'plan',
        titulo: 'Plan',
        grupo: 'principal',
        texto: (c)=>{
            var _c_plan;
            return (_c_plan = c.plan) !== null && _c_plan !== void 0 ? _c_plan : '';
        }
    },
    {
        clave: 'movil',
        titulo: 'Teléfono móvil',
        grupo: 'principal',
        mono: true,
        texto: (c)=>{
            var _c_telefono_movil;
            return (_c_telefono_movil = c.telefono_movil) !== null && _c_telefono_movil !== void 0 ? _c_telefono_movil : '';
        }
    },
    {
        clave: 'router',
        tecnica: true,
        titulo: 'Router',
        grupo: 'principal',
        texto: (c)=>{
            var _c_router;
            return (_c_router = c.router) !== null && _c_router !== void 0 ? _c_router : '';
        }
    },
    {
        clave: 'cedula',
        titulo: 'Cédula',
        grupo: 'principal',
        mono: true,
        texto: (c)=>{
            var _c_identificacion;
            return (_c_identificacion = c.identificacion) !== null && _c_identificacion !== void 0 ? _c_identificacion : '';
        }
    },
    {
        clave: 'zona',
        titulo: 'Zona',
        grupo: 'principal',
        texto: (c)=>{
            var _c_zona;
            return (_c_zona = c.zona) !== null && _c_zona !== void 0 ? _c_zona : '';
        }
    },
    {
        clave: 'estatus',
        titulo: 'Estatus',
        grupo: 'principal',
        texto: (c)=>{
            var _enlace;
            var _enlace_texto;
            return (_enlace_texto = (_enlace = enlace(c)) === null || _enlace === void 0 ? void 0 : _enlace.texto) !== null && _enlace_texto !== void 0 ? _enlace_texto : '';
        }
    },
    // ── Las que se encienden cuando hacen falta ──────────────────────────────
    {
        clave: 'telefono',
        titulo: 'Teléfono fijo',
        grupo: 'extra',
        mono: true,
        texto: (c)=>{
            var _c_telefono;
            return (_c_telefono = c.telefono) !== null && _c_telefono !== void 0 ? _c_telefono : '';
        }
    },
    {
        clave: 'ip_receptor',
        tecnica: true,
        titulo: 'IP receptor',
        grupo: 'extra',
        mono: true,
        texto: (c)=>{
            var _c_ip_administracion;
            return (_c_ip_administracion = c.ip_administracion) !== null && _c_ip_administracion !== void 0 ? _c_ip_administracion : '';
        }
    },
    {
        clave: 'pppuser',
        tecnica: true,
        titulo: 'Usuario PPPoE',
        grupo: 'extra',
        mono: true,
        texto: (c)=>{
            var _c_usuario_ppp;
            return (_c_usuario_ppp = c.usuario_ppp) !== null && _c_usuario_ppp !== void 0 ? _c_usuario_ppp : '';
        }
    },
    // Los dos de dónde cuelga el abonado. Son excluyentes en la práctica: el de
    // fibra tiene caja NAP y el de radio tiene emisor, y por eso van seguidos —
    // quien mira la red enciende los dos y lee el que corresponda.
    {
        clave: 'caja_nap',
        titulo: 'Caja NAP',
        grupo: 'extra',
        texto: (c)=>[
                c.nap,
                c.puerto_nap
            ].filter(Boolean).join(' / ')
    },
    {
        clave: 'emisor',
        titulo: 'Emisor (AP)',
        grupo: 'extra',
        texto: (c)=>{
            var _c_conectado_a;
            return (_c_conectado_a = c.conectado_a) !== null && _c_conectado_a !== void 0 ? _c_conectado_a : '';
        }
    },
    {
        clave: 'tipo_antena',
        titulo: 'Antena',
        grupo: 'extra',
        texto: (c)=>{
            var _c_tipo_antena;
            return (_c_tipo_antena = c.tipo_antena) !== null && _c_tipo_antena !== void 0 ? _c_tipo_antena : '';
        }
    },
    {
        clave: 'onu',
        titulo: 'ONU',
        grupo: 'extra',
        mono: true,
        texto: (c)=>{
            var _c_onu_serial;
            return (_c_onu_serial = c.onu_serial) !== null && _c_onu_serial !== void 0 ? _c_onu_serial : '';
        }
    },
    {
        clave: 'instalado',
        titulo: 'Instalado',
        grupo: 'extra',
        texto: (c)=>soloFecha(c.fecha_instalacion)
    },
    {
        clave: 'coordenadas',
        titulo: 'Coordenadas',
        grupo: 'extra',
        mono: true,
        texto: (c)=>c.latitud && c.longitud ? "".concat(c.latitud, ", ").concat(c.longitud) : ''
    },
    {
        clave: 'pasarela',
        titulo: 'Pasarela',
        grupo: 'extra',
        texto: (c)=>{
            var _c_pasarela;
            return (_c_pasarela = c.pasarela) !== null && _c_pasarela !== void 0 ? _c_pasarela : '';
        }
    },
    {
        clave: 'codigo_pago',
        titulo: 'Código de pago',
        grupo: 'extra',
        mono: true,
        texto: (c)=>{
            var _c_codigo_pago;
            return (_c_codigo_pago = c.codigo_pago) !== null && _c_codigo_pago !== void 0 ? _c_codigo_pago : '';
        }
    },
    {
        clave: 'factura_electronica',
        titulo: 'Emite factura',
        grupo: 'extra',
        centro: true,
        texto: (c)=>c.factura_electronica ? 'sí' : 'no'
    },
    {
        clave: 'modalidad',
        titulo: 'Modalidad',
        grupo: 'extra',
        texto: (c)=>{
            var _c_modalidad_pago;
            return (_c_modalidad_pago = c.modalidad_pago) !== null && _c_modalidad_pago !== void 0 ? _c_modalidad_pago : '';
        }
    },
    {
        clave: 'fecha_suspendido',
        titulo: 'Fecha suspendido',
        grupo: 'extra',
        texto: (c)=>[
                'suspendido',
                'cortado'
            ].includes(c.estado) ? soloFecha(c.estado_desde) : ''
    },
    {
        clave: 'fecha_retirado',
        titulo: 'Fecha retirado',
        grupo: 'extra',
        texto: (c)=>{
            var _c_baja_en;
            return c.estado === 'baja' ? soloFecha((_c_baja_en = c.baja_en) !== null && _c_baja_en !== void 0 ? _c_baja_en : c.estado_desde) : '';
        }
    },
    {
        clave: 'antiguedad',
        titulo: 'Tiempo en el estado',
        grupo: 'extra',
        texto: (c, ctx)=>antiguedad(c.estado_desde, ctx === null || ctx === void 0 ? void 0 : ctx.ahora)
    },
    // ── Las de facturación: piden datos que la ficha no trae ────────────────
    {
        clave: 'ultimo_pago',
        titulo: 'Último pago',
        grupo: 'extra',
        texto: (c)=>soloFecha(c.ultimo_pago)
    },
    {
        clave: 'ultimo_vencimiento',
        titulo: 'Último vencimiento',
        grupo: 'extra',
        extra: true,
        texto: (c, ctx)=>soloFecha(cuenta(ctx, c).ultimo_vencimiento)
    },
    {
        clave: 'proximo_pago',
        titulo: 'Próximo pago',
        grupo: 'extra',
        extra: true,
        texto: (c, ctx)=>soloFecha(cuenta(ctx, c).proximo_vencimiento)
    },
    {
        clave: 'saldo_favor',
        titulo: 'Saldo a favor',
        grupo: 'extra',
        extra: true,
        derecha: true,
        texto: (c, ctx)=>dosDecimales(cuenta(ctx, c).a_favor)
    },
    {
        clave: 'total_cobrar',
        titulo: 'Total a cobrar',
        grupo: 'extra',
        extra: true,
        derecha: true,
        texto: (c, ctx)=>{
            var _c_saldo, _cuenta_a_favor;
            return dosDecimales(Math.max(0, Number((_c_saldo = c.saldo) !== null && _c_saldo !== void 0 ? _c_saldo : 0) - Number((_cuenta_a_favor = cuenta(ctx, c).a_favor) !== null && _cuenta_a_favor !== void 0 ? _cuenta_a_favor : 0)));
        }
    }
];
const dosDecimales = (n)=>n == null || n === '' ? '' : Number(n).toFixed(2);
const soloFecha = (f)=>f ? String(f).slice(0, 10) : '';
const cuenta = (ctx, c)=>{
    var _ctx_cuentas;
    var _ctx_cuentas_c_id;
    return (_ctx_cuentas_c_id = ctx === null || ctx === void 0 ? void 0 : (_ctx_cuentas = ctx.cuentas) === null || _ctx_cuentas === void 0 ? void 0 : _ctx_cuentas[c.id]) !== null && _ctx_cuentas_c_id !== void 0 ? _ctx_cuentas_c_id : {};
};
const CAMPOS_FILTRO = COLUMNAS_ABONADOS.filter(_c = (c)=>c.grupo === 'principal');
_c1 = CAMPOS_FILTRO;
function filtrarPorCampo(filas) {
    let { campo = '', valor = '' } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ctx = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return filtrarPorColumnas(filas, campo ? {
        [campo]: valor
    } : {}, ctx);
}
function filtrarPorColumnas(filas) {
    let filtros = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ctx = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const activos = Object.entries(filtros !== null && filtros !== void 0 ? filtros : {}).map((param)=>{
        let [clave, valor] = param;
        return [
            COLUMNAS_ABONADOS.find((c)=>c.clave === clave),
            String(valor !== null && valor !== void 0 ? valor : '').trim().toLowerCase()
        ];
    }).filter((param)=>{
        let [col, q] = param;
        return col && q;
    });
    if (!activos.length) return filas !== null && filas !== void 0 ? filas : [];
    return (filas !== null && filas !== void 0 ? filas : []).filter((c)=>activos.every((param)=>{
            let [col, q] = param;
            var _col_texto;
            const texto = String((_col_texto = col.texto(c, ctx)) !== null && _col_texto !== void 0 ? _col_texto : '').toLowerCase();
            return col.exacto ? texto === q : texto.includes(q);
        }));
}
const filtrosActivos = function() {
    let filtros = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, visibles = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return Object.entries(filtros !== null && filtros !== void 0 ? filtros : {}).filter((param)=>{
        let [clave, valor] = param;
        return visibles.includes(clave) && String(valor !== null && valor !== void 0 ? valor : '').trim();
    }).length;
};
const COLUMNAS_POR_DEFECTO = COLUMNAS_ABONADOS.filter((c)=>c.grupo === 'principal').map(_c2 = (c)=>c.clave);
_c3 = COLUMNAS_POR_DEFECTO;
const columnasPorDefecto = (esTecnico)=>COLUMNAS_ABONADOS.filter((c)=>c.grupo === 'principal' && (esTecnico || !c.tecnica)).map((c)=>c.clave);
const necesitaCuentas = (visibles)=>COLUMNAS_ABONADOS.some((c)=>c.extra && visibles.includes(c.clave));
function resumirCuentas() {
    let { facturas = [], cobrosSinImputar = [] } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const out = {};
    for (const f of facturas){
        var _out, _f_client_id;
        var _;
        const c = (_ = (_out = out)[_f_client_id = f.client_id]) !== null && _ !== void 0 ? _ : _out[_f_client_id] = {
            a_favor: 0
        };
        var _f_fecha_vencimiento;
        const v = String((_f_fecha_vencimiento = f.fecha_vencimiento) !== null && _f_fecha_vencimiento !== void 0 ? _f_fecha_vencimiento : '').slice(0, 10);
        if (!v) continue;
        if (!c.ultimo_vencimiento || v > c.ultimo_vencimiento) c.ultimo_vencimiento = v;
        if (!c.proximo_vencimiento || v < c.proximo_vencimiento) c.proximo_vencimiento = v;
    }
    for (const p of cobrosSinImputar){
        var _out1, _p_client_id;
        var _1;
        const c = (_1 = (_out1 = out)[_p_client_id = p.client_id]) !== null && _1 !== void 0 ? _1 : _out1[_p_client_id] = {
            a_favor: 0
        };
        var _p_monto;
        c.a_favor = Math.round((c.a_favor + Number((_p_monto = p.monto) !== null && _p_monto !== void 0 ? _p_monto : 0)) * 100) / 100;
    }
    return out;
}
const COLUMNAS_EXPORT = [
    {
        titulo: 'ID',
        valor: (c)=>codigoLargo(c.codigo)
    },
    {
        titulo: 'Nombre',
        valor: (c)=>c.nombre
    },
    {
        titulo: 'Cédula',
        valor: (c)=>c.identificacion
    },
    {
        titulo: 'Dirección',
        valor: (c)=>c.direccion
    },
    {
        titulo: 'Zona',
        valor: (c)=>c.zona
    },
    {
        titulo: 'Teléfono',
        valor: (c)=>c.telefono
    },
    {
        titulo: 'Móvil',
        valor: (c)=>c.telefono_movil
    },
    {
        titulo: 'Plan',
        valor: (c)=>c.plan
    },
    {
        titulo: 'Router',
        valor: (c)=>c.router
    },
    {
        titulo: 'IP',
        valor: (c)=>c.ip
    },
    {
        titulo: 'MAC',
        valor: (c)=>c.mac_address
    },
    {
        titulo: 'ONU',
        valor: (c)=>c.onu_serial
    },
    {
        titulo: 'Estado',
        valor: (c)=>c.estado
    },
    {
        titulo: 'Desde',
        valor: (c)=>{
            var _c_estado_desde;
            return String((_c_estado_desde = c.estado_desde) !== null && _c_estado_desde !== void 0 ? _c_estado_desde : '').slice(0, 10);
        }
    },
    {
        titulo: 'Tiempo en el estado',
        valor: (c, ahora)=>antiguedad(c.estado_desde, ahora)
    },
    {
        titulo: 'Deuda',
        valor: (c)=>{
            var _c_saldo;
            return Number((_c_saldo = c.saldo) !== null && _c_saldo !== void 0 ? _c_saldo : 0).toFixed(2);
        }
    },
    {
        titulo: 'Día de pago',
        valor: (c)=>c.dia_facturacion
    }
];
function aCSV(filas) {
    let ahora = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Date(), columnas = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : COLUMNAS_EXPORT;
    const escapar = (v)=>{
        const s = String(v !== null && v !== void 0 ? v : '');
        return /[",;\n]/.test(s) ? '"'.concat(s.replace(/"/g, '""'), '"') : s;
    };
    return [
        columnas.map((c)=>escapar(c.titulo)).join(';'),
        ...filas.map((f)=>columnas.map((c)=>escapar(c.valor(f, ahora))).join(';'))
    ].join('\n');
}
function nombreArchivo(param) {
    let { modo, estado, meses, desde, hasta } = param, ahora = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Date();
    const hoy = ahora.toISOString().slice(0, 10);
    if (modo === 'rango') {
        return "abonados-".concat(estado, "-").concat(String(desde).slice(0, 10) || 'inicio', "-a-").concat(String(hasta).slice(0, 10) || hoy, ".csv");
    }
    return "abonados-".concat(estado, "-").concat(meses, "-meses-o-mas-").concat(hoy, ".csv");
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CAMPOS_FILTRO$COLUMNAS_ABONADOS.filter");
__turbopack_context__.k.register(_c1, "CAMPOS_FILTRO");
__turbopack_context__.k.register(_c2, "COLUMNAS_POR_DEFECTO$COLUMNAS_ABONADOS.filter((c) => c.grupo === 'principal').map");
__turbopack_context__.k.register(_c3, "COLUMNAS_POR_DEFECTO");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cartera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOTIVOS_RETIRO",
    ()=>MOTIVOS_RETIRO,
    "RESULTADOS_INTENTO",
    ()=>RESULTADOS_INTENTO,
    "SITUACIONES",
    ()=>SITUACIONES,
    "carteraApi",
    ()=>carteraApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
;
const SITUACIONES = {
    sin_renovar: {
        label: 'No renovó',
        tono: 'ambar',
        ayuda: 'Se le pasó el período. Todavía es recuperable con una llamada.'
    },
    por_retirar: {
        label: 'Por retirar',
        tono: 'rojo',
        ayuda: 'Llegó a la condición de retiro de equipo. La orden se genera sola.'
    },
    retiro: {
        label: 'Retiro en curso',
        tono: 'rojo',
        ayuda: 'Hay una orden abierta para recuperar el equipo.'
    },
    baja: {
        label: 'Dado de baja',
        tono: 'gris',
        ayuda: 'Ya no es abonado.'
    }
};
const MOTIVOS_RETIRO = [
    {
        clave: 'no_ubicado',
        label: 'No vive más ahí'
    },
    {
        clave: 'se_niega',
        label: 'Se niega a entregarlo'
    },
    {
        clave: 'no_estaba',
        label: 'Nunca se lo encontró'
    },
    {
        clave: 'equipo_roto',
        label: 'El equipo está roto'
    },
    {
        clave: 'equipo_robado',
        label: 'Robo o pérdida'
    },
    {
        clave: 'zona_insegura',
        label: 'Zona insegura'
    },
    {
        clave: 'cliente_volvio',
        label: 'El abonado volvió'
    },
    {
        clave: 'otro',
        label: 'Otro'
    }
];
const RESULTADOS_INTENTO = [
    {
        clave: 'no_estaba',
        label: 'No había nadie'
    },
    {
        clave: 'se_niega',
        label: 'Se niega a entregarlo'
    },
    {
        clave: 'no_ubicado',
        label: 'No vive más ahí'
    },
    {
        clave: 'reprogramado',
        label: 'Reprogramado'
    },
    {
        clave: 'recuperado',
        label: 'Equipo recuperado'
    },
    {
        clave: 'otro',
        label: 'Otro'
    }
];
const carteraApi = {
    /** Los clientes propios que dejaron de renovar. */ async enRiesgo () {
        let { vendedor } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_cartera_en_riesgo').select('*').order('meses_sin_pago', {
            ascending: false
        });
        if (vendedor) q = q.eq('vendedor_id', vendedor);
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Abre la gestión de recuperación y devuelve la asignación.
   *
   * La pantalla la necesita para registrar el contacto con la función de
   * cobranza, que trabaja sobre la asignación y no sobre el cliente.
   */ async abrirGestion (clienteId) {
        let dias = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 30;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('abrir_gestion_recuperacion', {
            p_cliente: clienteId,
            p_dias: dias
        });
        if (error) throw error;
        return data;
    },
    // ── Retiros de equipo ──────────────────────────────────────────────────────
    async retiros () {
        let { estados, tecnico } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_retiros_equipo').select('*').order('creado_en', {
            ascending: false
        });
        if (estados === null || estados === void 0 ? void 0 : estados.length) q = q.in('estado', estados);
        if (tecnico) q = q.eq('tecnico_id', tecnico);
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Cada visita a esa orden, con lo que dijo el abonado.
   *
   * Se trae el nombre del técnico junto con el intento: quien después tiene que
   * explicarle a un vendedor por qué se dio de baja a su cliente necesita poder
   * decir quién fue y qué encontró, no solo qué día.
   */ async intentos (retiroId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('retiro_intentos').select('*, tecnicos(nombre), usuarios_sistema(nombre, apellido)').eq('retiro_id', retiroId).order('creado_en', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /** Los números del punto 13. La fila sin vendedor es el total. */ async resumen () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_retiros_resumen').select('*');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Las órdenes de quien las tiene que trabajar.
   *
   * Sin filtro por técnico ni por responsable: la vista ya devuelve solo las
   * suyas —lo hace la política de RLS— y filtrar de nuevo en la pantalla sería
   * repetir la seguridad en el lugar equivocado.
   */ async misRetiros () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_retiros_equipo').select('*').in('estado', [
            'pendiente',
            'asignado'
        ])// Primero lo que tiene hora, y de eso lo más cercano. Lo que no tiene
        // cita va después, por antigüedad: es el orden del día de trabajo.
        .order('agendado_para', {
            ascending: true,
            nullsFirst: false
        }).order('meses_sin_pago', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /** Asigna una orden a una persona del sistema, sea técnico o no. */ async asignar (retiroId, usuarioId) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('asignar_retiro_a', {
            p_retiro: retiroId,
            p_usuario: usuarioId
        });
        if (error) throw error;
    },
    /** Lo mismo para un recorrido entero. Devuelve cuántas entraron y cuántas no. */ async asignarLote (retiroIds, usuarioId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('asignar_retiros_equipo', {
            p_retiros: retiroIds,
            p_usuario: usuarioId
        });
        if (error) throw error;
        var _data_;
        return (_data_ = data === null || data === void 0 ? void 0 : data[0]) !== null && _data_ !== void 0 ? _data_ : {
            asignadas: 0,
            salteadas: 0
        };
    },
    /**
   * Anota la cita que pidió el abonado.
   *
   * `cuando` es un ISO completo. La nota es lo que dijo con sus palabras, que
   * es lo que evita el viaje al pedo: "después de las 6", "el sábado", "avisá
   * antes de venir".
   */ async agendar (retiroId) {
        let { cuando, nota } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('agendar_retiro_equipo', {
            p_retiro: retiroId,
            p_cuando: cuando,
            p_nota: nota || null
        });
        if (error) throw error;
    },
    /**
   * Borra la deuda del equipo que no volvió.
   *
   * Pasa más de lo que uno cree: el abonado aparece meses después con la ONT en
   * la mano, o la paga para poder volver a contratar. Queda en la auditoría
   * porque es plata: alguien decidió borrar una deuda.
   */ async saldarDeudaEquipo (clienteId, nota) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('saldar_deuda_equipo', {
            p_cliente: clienteId,
            p_nota: nota || null
        });
        if (error) throw error;
        return data;
    },
    /** Cada contacto con el abonado y lo que dijo. Es lo que se baja al archivo. */ async gestiones () {
        let { estados } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_retiro_gestiones').select('*').order('contacto_en', {
            ascending: false,
            nullsFirst: false
        });
        if (estados === null || estados === void 0 ? void 0 : estados.length) q = q.in('estado_orden', estados);
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async registrarIntento (retiroId, param) {
        let { resultado, observacion, foto } = param;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('registrar_intento_retiro', {
            p_retiro: retiroId,
            p_resultado: resultado,
            p_observacion: observacion || null,
            p_foto: foto || null
        });
        if (error) throw error;
    },
    /**
   * Cierra la orden.
   *
   * La serie es opcional y se manda cuando el técnico la escribió a mano: es el
   * caso del abonado viejo cuyo equipo nunca entró al inventario, y el del
   * equipo que resultó ser otro distinto al que decía la ficha.
   */ async cerrar (retiroId) {
        let { recuperado, motivo, observacion, serie, almacen, firma, firmante } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('cerrar_retiro_equipo', {
            p_retiro: retiroId,
            p_recuperado: Boolean(recuperado),
            p_motivo: motivo || null,
            p_observacion: observacion || null,
            p_serie: serie || null,
            p_almacen: almacen || null,
            p_firma: firma || null,
            p_firmante: firmante || null
        });
        if (error) throw error;
    },
    /**
   * Por qué no se recuperó, en categorías.
   *
   * Salen de la base y no de una lista escrita acá: cada una lleva reglas
   * —si cuenta como pérdida, si se puede reclamar— y el día que aparezca un
   * caso nuevo se agrega una fila, no una versión de la app.
   */ async categorias () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('retiro_categorias').select('*').eq('activa', true).order('orden');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    // ── El pendiente que queda después ────────────────────────────────────────
    /** Abonados sin equipo que siguen figurando como activos. */ async fichasPorCerrar () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_fichas_por_cerrar').select('*').order('cerrado_en', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async motivosBaja () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('motivos_baja').select('id, nombre, afecta_calidad').eq('activo', true).order('orden');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Marca al abonado como retirado.
   *
   * No borra la ficha: los pagos, las facturas del SRI y las comisiones pagadas
   * apuntan a ella, y el que se fue vuelve. Se marca y se guarda por qué.
   */ async cerrarFicha (clienteId) {
        let { motivo, nota } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('cerrar_ficha_por_retiro', {
            p_cliente: clienteId,
            p_motivo: motivo || null,
            p_nota: nota || null
        });
        if (error) throw error;
        return data;
    },
    // ── Reactivaciones ─────────────────────────────────────────────────────────
    /**
   * Quiénes volvieron.
   *
   * No generan comisión y no hay nada acá que las convierta en una: es registro
   * para el día que exista el incentivo de recuperación.
   */ async reactivaciones () {
        let { desde, vendedor } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_reactivaciones').select('*').order('reactivado_el', {
            ascending: false
        });
        if (desde) q = q.gte('reactivado_el', desde);
        if (vendedor) q = q.eq('vendedor_id', vendedor);
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/estados.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Un solo mapa de colores de estado para todo el sistema.
 *
 * Verde = funciona / al día, ámbar = hay que mirarlo, rojo = hay que actuar,
 * azul = en trámite, gris = cerrado o sin datos. Si cada pantalla elige los
 * suyos, "rojo" deja de significar lo mismo de una a otra, y el color se
 * vuelve decoración. Los nombres de color son los de <Badge> (components/ui).
 */ __turbopack_context__.s([
    "COLOR_ESTADO",
    ()=>COLOR_ESTADO,
    "ETIQUETA_ESTADO_ABONADO",
    ()=>ETIQUETA_ESTADO_ABONADO,
    "FORMAS_PAGO",
    ()=>FORMAS_PAGO,
    "HEX",
    ()=>HEX,
    "formaDePago",
    ()=>formaDePago
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-client] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-client] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
;
const COLOR_ESTADO = {
    abonado: {
        activo: 'verde',
        cortado: 'rojo',
        suspendido: 'ambar',
        baja: 'gris'
    },
    factura: {
        pagada: 'verde',
        pendiente: 'ambar',
        vencida: 'rojo',
        anulada: 'gris'
    },
    // Comprobante electrónico del SRI.
    comprobante: {
        BORRADOR: 'gris',
        FIRMADO: 'azul',
        ENVIADO: 'ambar',
        AUTORIZADO: 'verde',
        NO_AUTORIZADO: 'rojo',
        ANULADO: 'rojo'
    },
    instalacion: {
        prospecto: 'gris',
        agendada: 'azul',
        en_curso: 'ambar',
        hecha: 'verde',
        cancelada: 'gris'
    },
    contrato: {
        vigente: 'verde',
        terminado: 'gris',
        anulado: 'rojo',
        suspendido: 'ambar'
    }
};
const HEX = {
    verde: '#10b981',
    rojo: '#ef4444',
    ambar: '#f59e0b',
    azul: '#0ea5e9',
    gris: '#64748b'
};
const ETIQUETA_ESTADO_ABONADO = {
    activo: 'Activo',
    cortado: 'Cortado',
    suspendido: 'Suspendido',
    baja: 'Retirado'
};
const FORMAS_PAGO = {
    efectivo: {
        label: 'Efectivo',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"]
    },
    transferencia: {
        label: 'Transferencia',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"]
    },
    deposito: {
        label: 'Depósito',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
    },
    tarjeta: {
        label: 'Tarjeta',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
    },
    billetera: {
        label: 'Billetera digital',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
    },
    otro: {
        label: 'Otro',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"]
    }
};
const formaDePago = (valor)=>{
    var _FORMAS_PAGO_valor;
    return (_FORMAS_PAGO_valor = FORMAS_PAGO[valor]) !== null && _FORMAS_PAGO_valor !== void 0 ? _FORMAS_PAGO_valor : {
        label: valor ? valor.charAt(0).toUpperCase() + valor.slice(1) : '—',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"]
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useTabla.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTabla",
    ()=>useTabla
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useTabla(tabla) {
    let { select = '*', orderBy = 'created_at', ascending = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _s();
    const [filas, setFilas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTabla.useCallback[recargar]": async ()=>{
            setCargando(true);
            setError(null);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) {
                setFilas(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoDb"].listar(tabla, {
                    orderBy,
                    ascending
                }));
                setCargando(false);
                return;
            }
            const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from(tabla).select(select).order(orderBy, {
                ascending
            });
            if (err) setError(traducir(err, tabla));
            else setFilas(data !== null && data !== void 0 ? data : []);
            setCargando(false);
        }
    }["useTabla.useCallback[recargar]"], [
        tabla,
        select,
        orderBy,
        ascending
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTabla.useEffect": ()=>{
            recargar();
        }
    }["useTabla.useEffect"], [
        recargar
    ]);
    const insertar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTabla.useCallback[insertar]": async (fila)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) {
                const nueva = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoDb"].insertar(tabla, fila);
                await recargar();
                return nueva;
            }
            const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from(tabla).insert(fila).select().single();
            if (err) throw traducir(err, tabla);
            await recargar();
            return data;
        }
    }["useTabla.useCallback[insertar]"], [
        tabla,
        recargar
    ]);
    const actualizar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTabla.useCallback[actualizar]": async (id, cambios)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoDb"].actualizar(tabla, id, cambios);
            } else {
                const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from(tabla).update(cambios).eq('id', id);
                if (err) throw traducir(err, tabla);
            }
            await recargar();
        }
    }["useTabla.useCallback[actualizar]"], [
        tabla,
        recargar
    ]);
    const eliminar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTabla.useCallback[eliminar]": async (id)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoDb"].eliminar(tabla, id);
            } else {
                const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from(tabla).delete().eq('id', id);
                if (err) throw traducir(err, tabla);
            }
            await recargar();
        }
    }["useTabla.useCallback[eliminar]"], [
        tabla,
        recargar
    ]);
    return {
        filas,
        cargando,
        error,
        recargar,
        insertar,
        actualizar,
        eliminar,
        setError
    };
}
_s(useTabla, "6V/dSu76yi00LvlUEedjpL092+I=");
/** Convierte errores de Django/PostgreSQL en mensajes legibles. */ function traducir(err, tabla) {
    const e = new Error(err.message);
    e.hint = err.hint;
    if (err.code === 404 || /not found/i.test(err.message)) {
        e.message = 'La tabla "'.concat(tabla, '" no existe en Django');
        e.hint = 'Verifica que la tabla esté registrada en views_generic.py o exista en PostgreSQL.';
    } else if (err.code === 401 || err.code === 403) {
        e.message = 'Sin permiso para operar sobre "'.concat(tabla, '"');
        e.hint = 'El token JWT expiró o no existe. Vuelve a iniciar sesión.';
    } else if (err.code === 'NETWORK_ERROR') {
        e.message = 'No se puede conectar con el backend Django';
        e.hint = 'Verifica que Django esté corriendo en http://localhost:8000';
    } else if (/unique/i.test(err.message)) {
        e.message = 'Ya existe un registro con esos datos';
        e.hint = err.details;
    } else if (/foreign key/i.test(err.message)) {
        e.message = 'El registro está referenciado por otro y no se puede borrar';
        e.hint = err.details;
    }
    return e;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/ip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Aritmética de IPv4 para el navegador.
 *
 * ── Por qué está duplicada ──
 *
 * El middleware tiene su propia versión en `middleware/src/lib/ip.js`, más
 * completa —maneja pools de RouterOS y rangos sueltos—. No se puede importar
 * desde acá porque arrastra `errors.js`, que es del servidor.
 *
 * Lo que sigue son veinte líneas de aritmética pura: entra un CIDR, salen
 * números. Duplicar eso es preferible a que el formulario de alta dependa de
 * que el middleware esté vivo — y ya vimos que puede no estarlo.
 *
 * Si algún día hay que tocar la cuenta, son los dos archivos.
 */ /** 10.0.0.1 → 167772161. `null` si no es una IPv4 válida. */ __turbopack_context__.s([
    "aEntero",
    ()=>aEntero,
    "aIp",
    ()=>aIp,
    "libresDe",
    ()=>libresDe,
    "perteneceA",
    ()=>perteneceA,
    "rangoDeCidr",
    ()=>rangoDeCidr
]);
function aEntero(ip) {
    const partes = String(ip !== null && ip !== void 0 ? ip : '').trim().split('.');
    if (partes.length !== 4) return null;
    let n = 0;
    for (const p of partes){
        if (!/^\d{1,3}$/.test(p)) return null;
        const b = Number(p);
        if (b > 255) return null;
        n = n * 256 + b;
    }
    return n >>> 0;
}
const aIp = (n)=>[
        n >>> 24 & 255,
        n >>> 16 & 255,
        n >>> 8 & 255,
        n & 255
    ].join('.');
function rangoDeCidr(cidr) {
    const [dir, bitsTexto] = String(cidr !== null && cidr !== void 0 ? cidr : '').trim().split('/');
    const base = aEntero(dir);
    const bits = Number(bitsTexto);
    if (base == null || !Number.isInteger(bits) || bits < 0 || bits > 32) return null;
    const mascara = bits === 0 ? 0 : 0xffffffff << 32 - bits >>> 0;
    const red = (base & mascara) >>> 0;
    const broadcast = (red | ~mascara >>> 0) >>> 0;
    // En /31 y /32 no hay direcciones de red ni de broadcast que reservar.
    if (bits >= 31) return {
        desde: red,
        hasta: broadcast
    };
    return {
        desde: red + 1,
        hasta: broadcast - 1
    };
}
function perteneceA(ip, cidr) {
    const r = rangoDeCidr(cidr);
    const n = aEntero(ip);
    if (!r || n == null) return null;
    return n >= r.desde && n <= r.hasta;
}
function libresDe(cidr) {
    let ocupadas = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], tope = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 250;
    const r = rangoDeCidr(cidr);
    if (!r) return [];
    const usadas = new Set();
    for (const o of ocupadas){
        // "10.0.0.5/24" y "10.0.0.5" son la misma dirección ocupada.
        const n = aEntero(String(o !== null && o !== void 0 ? o : '').split('/')[0]);
        if (n != null) usadas.add(n);
    }
    const libres = [];
    for(let n = r.desde; n <= r.hasta && libres.length < tope; n++){
        if (!usadas.has(n)) libres.push(aIp(n));
    }
    return libres;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/traslados.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trasladosApi",
    ()=>trasladosApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
;
const trasladosApi = {
    /** Abre el traslado y agenda la visita. Devuelve el id del traslado. */ async iniciar (param) {
        let { clienteId, direccion, latitud, longitud, fecha, motivo, tecnicoId, referencia } = param;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('iniciar_traslado', {
            p_cliente: clienteId,
            p_direccion: direccion,
            p_latitud: latitud === '' || latitud == null ? null : Number(latitud),
            p_longitud: longitud === '' || longitud == null ? null : Number(longitud),
            p_fecha: fecha || null,
            p_motivo: motivo || null,
            p_tecnico: tecnicoId || null,
            p_referencia: referencia || null
        });
        if (error) throw error;
        return data;
    },
    /** Los que tienen la ONT vieja todavía viva en su OLT de origen. */ async pendientes () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_traslados_pendientes').select('*').order('creado_en');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /** El historial de mudanzas de un abonado. */ async delCliente (clienteId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_traslados').select('*').eq('cliente_id', clienteId).order('creado_en', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /** El que está abierto ahora, si hay. Solo puede haber uno. */ async abierto (clienteId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_traslados').select('*').eq('cliente_id', clienteId).eq('estado', 'abierto').maybeSingle();
        if (error) throw error;
        return data !== null && data !== void 0 ? data : null;
    },
    /**
   * Marca la ONT vieja como dada de baja.
   *
   * Es para cuando se resolvió a mano desde la pantalla de la OLT. No borra
   * nada en el equipo: solo deja de reclamar algo que ya se hizo. Por eso pide
   * un detalle — "la borré yo el martes" es lo que después explica el hueco.
   */ async marcarBaja (id, detalle) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('traslados').update({
            pendiente_baja: false,
            baja_at: new Date().toISOString(),
            baja_detalle: detalle || 'Dada de baja a mano desde la OLT'
        }).eq('id', id);
        if (error) throw error;
    },
    /** Cierra el traslado. La base no deja cerrarlo con la ONT vieja viva. */ async cerrar (id) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('traslados').update({
            estado: 'hecho',
            cerrado_en: new Date().toISOString()
        }).eq('id', id);
        if (error) throw error;
    },
    async cancelar (id) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('traslados').update({
            estado: 'cancelado',
            cerrado_en: new Date().toISOString()
        }).eq('id', id);
        if (error) throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/telefono.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Los teléfonos, en un solo lugar.
 *
 * ── Por qué esto es un archivo ──
 *
 * La misma conversión estaba escrita cuatro veces —cobranza, soporte, el
 * tablero comercial y el cotizador— y no eran iguales. Tres hacían:
 *
 *     tel.startsWith('0') ? '593' + tel.slice(1) : tel
 *
 * O sea: si el número venía sin el 0 adelante —`990032123`, que es como lo
 * escribe media Ecuador— lo dejaban tal cual y WhatsApp abría un chat con un
 * número de nueve dígitos que no existe. El vendedor veía "este contacto no
 * está en WhatsApp" y culpaba al cliente por darle mal el número.
 *
 * No se arregla en cuatro lugares: se arregla acá y los cuatro importan.
 */ // Ecuador. Es lo único de este archivo que asume un país, y está acá suelto
// para que el día que el sistema se venda afuera haya un solo lugar donde
// buscarlo. No se saca a configuración todavía porque no existe esa
// configuración, e inventarla vacía es peor que dejarlo a la vista.
__turbopack_context__.s([
    "aWhatsApp",
    ()=>aWhatsApp,
    "enlaceWhatsApp",
    ()=>enlaceWhatsApp
]);
const PAIS = '593';
function aWhatsApp(telefono) {
    const limpio = String(telefono !== null && telefono !== void 0 ? telefono : '').replace(/\D/g, '');
    if (!limpio) return null;
    if (limpio.startsWith(PAIS)) return limpio;
    return "".concat(PAIS).concat(limpio.replace(/^0+/, ''));
}
function enlaceWhatsApp(telefono) {
    let texto = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const n = aWhatsApp(telefono);
    if (!n) return null;
    return "https://wa.me/".concat(n).concat(texto ? "?text=".concat(encodeURIComponent(texto)) : '');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Reglas del ciclo de vida de un ticket.
 *
 * Viven acá y no dentro de un componente porque las usan tres pantallas —el
 * listado, la ficha del técnico y el formulario— y porque el orden de los
 * estados es una regla del negocio, no una decisión de diseño: un ticket no
 * puede pasar de "abierto" a "resuelto" sin que nadie haya ido.
 */ __turbopack_context__.s([
    "CHECKLIST",
    ()=>CHECKLIST,
    "ESTADOS",
    ()=>ESTADOS,
    "FRANJAS",
    ()=>FRANJAS,
    "INCIDENCIAS",
    ()=>INCIDENCIAS,
    "PRIORIDADES",
    ()=>PRIORIDADES,
    "RADIO_LLEGADA_M",
    ()=>RADIO_LLEGADA_M,
    "TRANSICIONES",
    ()=>TRANSICIONES,
    "comprimirImagen",
    ()=>comprimirImagen,
    "distanciaEnMetros",
    ()=>distanciaEnMetros,
    "duracion",
    ()=>duracion,
    "enlaceMapa",
    ()=>enlaceMapa,
    "etiquetaIncidencia",
    ()=>etiquetaIncidencia,
    "haceCuanto",
    ()=>haceCuanto,
    "ubicacionActual",
    ()=>ubicacionActual
]);
// La conversión del número se mudó a `telefono.js`: estaba escrita cuatro veces
// y solo esta la hacía bien. Se reexporta con el nombre viejo para no tocar las
// pantallas de soporte, que ya la importan así.
// La extensión va explícita para que este archivo se pueda importar desde el
// runner de node, que a diferencia de Next.js no resuelve rutas sin extensión.
// Es lo que permite probar la regla de la ruta sin montar un navegador.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-client] (ecmascript)");
const ESTADOS = {
    abierto: {
        label: 'Abierto',
        color: 'gris',
        clase: 'bg-slate-500/15 text-slate-300 border-slate-500/40',
        ayuda: 'Entró el reclamo. Falta decidir quién va.'
    },
    asignado: {
        label: 'Asignado',
        color: 'azul',
        clase: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
        ayuda: 'Tiene técnico y fecha. Todavía no salió.'
    },
    en_ruta: {
        label: 'En ruta',
        color: 'ambar',
        clase: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
        ayuda: 'El técnico va camino al domicilio.'
    },
    en_proceso: {
        label: 'En proceso',
        color: 'violeta',
        clase: 'bg-violet-500/15 text-violet-300 border-violet-500/40',
        ayuda: 'Está trabajando en el lugar.'
    },
    resuelto: {
        label: 'Resuelto',
        color: 'verde',
        clase: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
        ayuda: 'Se solucionó y el abonado firmó conforme.'
    },
    cancelado: {
        label: 'Cancelado',
        color: 'rojo',
        clase: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
        ayuda: 'No se hizo: nadie en casa, el abonado desistió, se duplicó.'
    }
};
const TRANSICIONES = {
    abierto: [
        'asignado',
        'cancelado'
    ],
    asignado: [
        'en_ruta',
        'en_proceso',
        'abierto',
        'cancelado'
    ],
    en_ruta: [
        'en_proceso',
        'asignado',
        'cancelado'
    ],
    en_proceso: [
        'resuelto',
        'en_ruta',
        'cancelado'
    ],
    resuelto: [],
    cancelado: [
        'abierto'
    ]
};
const PRIORIDADES = {
    alta: {
        label: 'Alta',
        clase: 'bg-rose-500/15 text-rose-300 border-rose-500/40'
    },
    media: {
        label: 'Media',
        clase: 'bg-amber-500/15 text-amber-300 border-amber-500/40'
    },
    baja: {
        label: 'Baja',
        clase: 'bg-slate-500/15 text-slate-300 border-slate-500/40'
    }
};
const INCIDENCIAS = [
    {
        valor: 'sin_internet',
        label: 'Sin internet',
        tecnologia: null
    },
    {
        valor: 'lentitud',
        label: 'Lentitud',
        tecnologia: null
    },
    {
        valor: 'intermitencia',
        label: 'Intermitencia / se corta',
        tecnologia: null
    },
    {
        valor: 'fibra_cortada',
        label: 'Fibra cortada',
        tecnologia: 'ftth'
    },
    {
        valor: 'potencia_baja',
        label: 'Potencia baja',
        tecnologia: 'ftth'
    },
    {
        valor: 'senal_baja',
        label: 'Señal baja',
        tecnologia: 'wireless'
    },
    {
        valor: 'equipo_danado',
        label: 'Equipo dañado',
        tecnologia: null
    },
    {
        valor: 'cambio_clave',
        label: 'Cambio de clave WiFi',
        tecnologia: null
    },
    {
        valor: 'traslado',
        label: 'Traslado de domicilio',
        tecnologia: null
    },
    {
        valor: 'instalacion',
        label: 'Instalación nueva',
        tecnologia: null
    },
    {
        valor: 'retiro',
        label: 'Retiro de equipos',
        tecnologia: null
    },
    {
        valor: 'otro',
        label: 'Otro',
        tecnologia: null
    }
];
const etiquetaIncidencia = (v)=>{
    var _INCIDENCIAS_find;
    var _INCIDENCIAS_find_label, _ref;
    return (_ref = (_INCIDENCIAS_find_label = (_INCIDENCIAS_find = INCIDENCIAS.find((i)=>i.valor === v)) === null || _INCIDENCIAS_find === void 0 ? void 0 : _INCIDENCIAS_find.label) !== null && _INCIDENCIAS_find_label !== void 0 ? _INCIDENCIAS_find_label : v) !== null && _ref !== void 0 ? _ref : '—';
};
const FRANJAS = {
    manana: 'Mañana (08:00 – 12:00)',
    tarde: 'Tarde (13:00 – 18:00)',
    exacta: 'Hora exacta'
};
const CHECKLIST = {
    ftth: [
        {
            clave: 'potencia_ok',
            label: 'Potencia óptica dentro de rango (-8 a -27 dBm)'
        },
        {
            clave: 'conectores',
            label: 'Conectores limpios y bien insertados'
        },
        {
            clave: 'navegacion',
            label: 'Navegación probada en el equipo del abonado'
        },
        {
            clave: 'wifi',
            label: 'WiFi configurado y probado'
        },
        {
            clave: 'orden',
            label: 'Cableado ordenado y sujetado'
        },
        {
            clave: 'capacitacion',
            label: 'Se le explicó al abonado cómo reiniciar el equipo'
        }
    ],
    wireless: [
        {
            clave: 'senal_ok',
            label: 'Señal dentro de rango (mejor que -70 dBm)'
        },
        {
            clave: 'alineacion',
            label: 'Antena alineada y ajustada'
        },
        {
            clave: 'aterrizaje',
            label: 'Aterrizaje / protección contra descargas'
        },
        {
            clave: 'navegacion',
            label: 'Navegación probada en el equipo del abonado'
        },
        {
            clave: 'wifi',
            label: 'WiFi configurado y probado'
        },
        {
            clave: 'capacitacion',
            label: 'Se le explicó al abonado cómo reiniciar el equipo'
        }
    ]
};
;
function enlaceMapa(ticket) {
    let app = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'google';
    const { latitud, longitud, direccion, sector, canton } = ticket !== null && ticket !== void 0 ? ticket : {};
    if (latitud && longitud) {
        /**
     * `geo:` deja que el teléfono elija.
     *
     * En Android abre el selector del sistema con las aplicaciones de mapas
     * instaladas, que es lo que pidió quien usa dos. iOS lo ignora — por eso
     * esta opción no es la de fábrica y la pantalla donde se elige lo aclara.
     *
     * El `?q=` repetido no es un error: sin él, varias aplicaciones abren el
     * mapa centrado en el punto pero sin marcador ni destino cargado.
     */ if (app === 'sistema') return "geo:".concat(latitud, ",").concat(longitud, "?q=").concat(latitud, ",").concat(longitud);
        return app === 'waze' ? "https://waze.com/ul?ll=".concat(latitud, ",").concat(longitud, "&navigate=yes") : "https://www.google.com/maps/dir/?api=1&destination=".concat(latitud, ",").concat(longitud);
    }
    const texto = [
        direccion,
        sector,
        canton
    ].filter(Boolean).join(', ');
    if (!texto) return null;
    // Sin coordenadas solo queda buscar por texto, y `geo:` no sabe hacerlo:
    // ahí cae a Google, que es el que resuelve una dirección escrita.
    return app === 'waze' ? "https://waze.com/ul?q=".concat(encodeURIComponent(texto)) : "https://www.google.com/maps/dir/?api=1&destination=".concat(encodeURIComponent(texto));
}
async function comprimirImagen(archivo) {
    let { max = 1280, calidad = 0.7 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _bitmap_close;
    const bitmap = await createImageBitmap(archivo);
    const escala = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
    const lienzo = document.createElement('canvas');
    lienzo.width = Math.round(bitmap.width * escala);
    lienzo.height = Math.round(bitmap.height * escala);
    lienzo.getContext('2d').drawImage(bitmap, 0, 0, lienzo.width, lienzo.height);
    const blob = await new Promise((r)=>lienzo.toBlob(r, 'image/jpeg', calidad));
    (_bitmap_close = bitmap.close) === null || _bitmap_close === void 0 ? void 0 : _bitmap_close.call(bitmap);
    return blob !== null && blob !== void 0 ? blob : archivo;
}
function distanciaEnMetros(a, b) {
    if (!(a === null || a === void 0 ? void 0 : a.lat) || !(a === null || a === void 0 ? void 0 : a.lng) || !(b === null || b === void 0 ? void 0 : b.lat) || !(b === null || b === void 0 ? void 0 : b.lng)) return null;
    const rad = (g)=>Number(g) * Math.PI / 180;
    const dLat = rad(b.lat - a.lat);
    const dLng = rad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return Math.round(6371000 * 2 * Math.asin(Math.sqrt(h)));
}
const RADIO_LLEGADA_M = 250;
function ubicacionActual() {
    let { timeout = 12_000 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new Promise((resolve)=>{
        if (!navigator.geolocation) return resolve(null);
        navigator.geolocation.getCurrentPosition((pos)=>resolve({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
                precision: pos.coords.accuracy
            }), // No se rechaza: que el GPS falle no puede impedir que el técnico
        // empiece a trabajar. Queda registrado que no hubo confirmación.
        ()=>resolve(null), {
            enableHighAccuracy: true,
            timeout,
            maximumAge: 30_000
        });
    });
}
function duracion(minutos) {
    const m = Math.round(Number(minutos) || 0);
    if (m < 1) return 'menos de 1 min';
    if (m < 60) return "".concat(m, " min");
    const h = Math.floor(m / 60);
    return "".concat(h, " h ").concat(m % 60, " min");
}
function haceCuanto(horas) {
    const h = Number(horas) || 0;
    if (h < 1) return "hace ".concat(Math.max(1, Math.round(h * 60)), " min");
    if (h < 24) return "hace ".concat(Math.round(h), " h");
    const d = Math.floor(h / 24);
    return "hace ".concat(d, " ").concat(d === 1 ? 'día' : 'días');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/ruta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * El orden en que conviene recorrer el día.
 *
 * ── Qué problema resuelve ──
 *
 * Hasta ahora la ruta se ordenaba solo por hora, y las órdenes sin hora
 * quedaban todas al final. Eso hace que un día con tres trabajos sueltos en el
 * norte y uno agendado en el sur salga: sur → norte → norte → norte, o peor,
 * que los tres del norte queden después de cruzar la ciudad dos veces.
 *
 * ── Lo que NO hace, y hay que decirlo ──
 *
 * Mide en LÍNEA RECTA, no por calle. El propio sistema ya lo dice en la
 * pantalla de jornada, explicando por qué el kilometraje se pide a mano:
 *
 *     "son líneas rectas —el camino real entre dos casas no lo es— e ignora
 *      todo lo que no es una parada registrada"
 *
 * Eso vale igual acá. Sirve para decidir el ORDEN de las paradas, que es una
 * comparación entre alternativas y no un número absoluto. No sirve para
 * prometer cuántos kilómetros se ahorran: un río, una vía de una sola mano o
 * un puente cortado cambian el resultado y este cálculo no los ve.
 *
 * ── Tampoco sabe cuánto dura cada trabajo ──
 *
 * Y eso limita lo que puede garantizar. Meter un trabajo suelto entre el de
 * las 9:00 y el de las 10:00 es lo más corto en distancia, pero si el suelto
 * lleva una hora, llega tarde al segundo. El sistema no tiene la duración de
 * cada tipo de trabajo, así que no puede decidirlo — por eso las órdenes con
 * hora quedan SIEMPRE en su orden y bien marcadas, y el técnico sigue
 * decidiendo. Esto propone un orden, no lo impone.
 */ __turbopack_context__.s([
    "largoDeRuta",
    ()=>largoDeRuta,
    "ordenarPorCercania",
    ()=>ordenarPorCercania
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
;
/** La coordenada de una orden, o null si no tiene. */ const punto = (o)=>(o === null || o === void 0 ? void 0 : o.latitud) != null && (o === null || o === void 0 ? void 0 : o.longitud) != null ? {
        lat: Number(o.latitud),
        lng: Number(o.longitud)
    } : null;
/** Metros entre dos paradas. `null` si a alguna le falta la coordenada. */ function entre(a, b) {
    if (!a || !b) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["distanciaEnMetros"])(a, b);
}
/**
 * Cuánto se alarga el recorrido al meter `o` en la posición `i`.
 *
 * Es la cuenta clásica de inserción más barata: lo que cuesta ir del anterior
 * a la nueva parada, más de la nueva a la siguiente, menos el tramo que se
 * dejó de hacer directo.
 *
 * Devuelve `null` cuando no se puede calcular —faltan coordenadas alrededor—,
 * que es distinto de un costo cero.
 */ function costoDeInsertar(ruta, i, o, desde) {
    const nuevo = punto(o);
    if (!nuevo) return null;
    const antes = i === 0 ? desde : punto(ruta[i - 1]);
    const despues = i < ruta.length ? punto(ruta[i]) : null;
    const ida = entre(antes, nuevo);
    const vuelta = entre(nuevo, despues);
    const directo = entre(antes, despues);
    // En el medio del recorrido: el desvío real.
    if (ida != null && vuelta != null) return ida + vuelta - (directo !== null && directo !== void 0 ? directo : 0);
    // Al final, o arrancando: solo el tramo que se agrega.
    if (ida != null) return ida;
    if (vuelta != null) return vuelta;
    return null;
}
function ordenarPorCercania(ordenes) {
    let { desde = null } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const lista = [
        ...ordenes !== null && ordenes !== void 0 ? ordenes : []
    ];
    // El esqueleto: lo comprometido, en su orden.
    const ruta = lista.filter((o)=>o.hora).sort((a, b)=>String(a.hora).localeCompare(String(b.hora)));
    const libres = lista.filter((o)=>!o.hora);
    const sinCoordenada = libres.filter((o)=>!punto(o));
    /**
   * Las libres se procesan de la más lejana a la más cercana al arranque.
   *
   * No es un capricho: insertar primero la que está lejos le deja al algoritmo
   * la posibilidad de armar el desvío largo una sola vez y colgarle las
   * cercanas de camino. Al revés —cercanas primero— cada lejana se termina
   * agregando al final, que es justo el zigzag que esto viene a evitar.
   */ const conCoordenada = libres.filter((o)=>punto(o)).sort((a, b)=>{
        var _entre, _entre1;
        return ((_entre = entre(desde, punto(b))) !== null && _entre !== void 0 ? _entre : 0) - ((_entre1 = entre(desde, punto(a))) !== null && _entre1 !== void 0 ? _entre1 : 0);
    });
    for (const o of conCoordenada){
        let mejorPos = ruta.length;
        let mejorCosto = Infinity;
        for(let i = 0; i <= ruta.length; i++){
            const c = costoDeInsertar(ruta, i, o, desde);
            if (c != null && c < mejorCosto) {
                mejorCosto = c;
                mejorPos = i;
            }
        }
        ruta.splice(mejorPos, 0, o);
    }
    // Las que nadie ubicó van al final: no se pueden comparar con nada, y
    // meterlas en el medio sería inventar una posición.
    return [
        ...ruta,
        ...sinCoordenada
    ];
}
function largoDeRuta(ruta) {
    let { desde = null } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let metros = 0;
    let medidos = 0;
    let anterior = desde;
    for (const o of ruta !== null && ruta !== void 0 ? ruta : []){
        const p = punto(o);
        if (!p) continue;
        const d = entre(anterior, p);
        if (d != null) {
            metros += d;
            medidos++;
        }
        anterior = p;
    }
    return {
        metros,
        tramosMedidos: medidos
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/campo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HORA",
    ()=>HORA,
    "faltaPara",
    ()=>faltaPara,
    "hoyISO",
    ()=>hoyISO,
    "saludo",
    ()=>saludo,
    "semaforoOrden",
    ()=>semaforoOrden,
    "tableroDelDia",
    ()=>tableroDelDia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ruta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ruta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/instalaciones.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cacheLocal.js [app-client] (ecmascript)");
;
;
;
;
const hoyISO = ()=>{
    const d = new Date();
    const dosDigitos = (n)=>String(n).padStart(2, '0');
    return "".concat(d.getFullYear(), "-").concat(dosDigitos(d.getMonth() + 1), "-").concat(dosDigitos(d.getDate()));
};
/** La fecha local de un instante cualquiera. Mismo motivo que arriba. */ const fechaLocalDe = (valor)=>{
    if (!valor) return null;
    const d = new Date(valor);
    if (Number.isNaN(d.getTime())) return null;
    const dosDigitos = (n)=>String(n).padStart(2, '0');
    return "".concat(d.getFullYear(), "-").concat(dosDigitos(d.getMonth() + 1), "-").concat(dosDigitos(d.getDate()));
};
/**
 * Todo lo del inicio, en un viaje.
 *
 * Cada bloque falla por separado a propósito: que el estado de la red no
 * responda no puede dejar al técnico sin ver su ruta. Lo que falla queda en
 * `null` y la pantalla lo dice, en vez de mostrar un error que tapa todo.
 */ async function leerTablero(perfil) {
    var _perfil_tecnico_id;
    const tecnicoId = (_perfil_tecnico_id = perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id) !== null && _perfil_tecnico_id !== void 0 ? _perfil_tecnico_id : null;
    const hoy = hoyISO();
    const [ordenes, tickets, red, notificaciones, novedades, retiros, material] = await Promise.all([
        // Las instalaciones ya vienen filtradas por RLS: `instalaciones_lectura`
        // solo devuelve las de su `tecnico_id`. El filtro de acá abajo es para el
        // día, no para la seguridad — si fuera para la seguridad estaría en el
        // lugar equivocado.
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_instalaciones').select('*').in('estado', [
            'agendada',
            'en_ruta',
            'en_curso',
            'reprogramada'
        ]).order('fecha').order('hora', {
            nullsFirst: false
        }).limit(40).then((param)=>{
            let { data, error } = param;
            if (error) throw error;
            return data !== null && data !== void 0 ? data : [];
        }),
        /**
     * Los tickets abiertos del técnico.
     *
     * ── Las columnas son las reales, y eso costó un bug ──
     *
     * La primera versión pedía `titulo`, `cliente_nombre` y `creado_en`. Ninguna
     * de las tres existe: la tabla tiene `tipo_incidencia`, `nombre` y
     * `created_at`. La consulta fallaba entera y —como el error se descartaba—
     * la pantalla decía "no tenés tickets asignados" con el ticket ahí,
     * correctamente asignado.
     *
     * Esa es la peor forma de fallar: no parece un error, parece un hecho.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tickets').select('id, numero, nombre, tipo_incidencia, descripcion, estado, prioridad, direccion, fecha_visita, franja, created_at, salida_at, llegada_at, cerrado_at').order('created_at', {
            ascending: false
        }).limit(30).then((param)=>{
            let { data, error } = param;
            // El error se propaga en vez de convertirse en una lista vacía. Una
            // lista vacía es una afirmación —"no hay nada"— y esta pantalla no
            // puede afirmar eso cuando lo que pasó es que no pudo preguntar.
            if (error) throw error;
            return data !== null && data !== void 0 ? data : [];
        }),
        // Va por la vista y no por el middleware: son datos que ya están en la base
        // y una llamada HTTP más es una espera más en una conexión de celular.
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_estado_red').select('*').eq('monitorear', true)// Esta sí puede fallar sin romper nada: la 85 puede no estar corrida
        // todavía, y sin estado de red el técnico igual tiene que ver su día.
        // Devuelve `null`, que la pantalla lee como "no se sabe" y oculta la
        // tarjeta — distinto de `[]`, que diría "no hay nodos".
        .then((param)=>{
            let { data, error } = param;
            return error ? null : data !== null && data !== void 0 ? data : [];
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_notificaciones').select('*').eq('leida', false).order('creado_en', {
            ascending: false
        }).limit(10).then((param)=>{
            let { data, error } = param;
            return error ? [] : data !== null && data !== void 0 ? data : [];
        }),
        /**
     * Qué pasó en la red mientras no estaba.
     *
     * ── Por qué NO se filtra por el último ingreso ──
     *
     * El pedido decía "desde su último ingreso". Hacerlo literal deja la
     * sección vacía casi siempre: `ultimo_acceso` se sella en CADA carga de la
     * app, así que a los diez segundos de abrir, "desde tu último ingreso" son
     * diez segundos y no pasó nada.
     *
     * Se resuelve como una bandeja de entrada: se trae el historial y se MARCA
     * lo nuevo. El técnico ve qué pasó anoche y, arriba, cuántas de esas cosas
     * no había visto. Esconder el resto para cumplir la letra habría cumplido
     * peor la intención.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_novedades_red').select('*').order('momento', {
            ascending: false
        }).limit(12).then((param)=>{
            let { data, error } = param;
            return error ? [] : data !== null && data !== void 0 ? data : [];
        }),
        /**
     * Los equipos que tiene que ir a buscar.
     *
     * Igual que las instalaciones: ya vienen filtradas por RLS, que devuelve
     * solo las del técnico asignado o las de quien figura como responsable. El
     * orden es el del día de trabajo — primero lo que tiene hora.
     *
     * Falla en silencio a `[]` a propósito: que la cartera no responda no puede
     * dejar al técnico sin ver su ruta de instalaciones.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_retiros_equipo').select('id, cliente, telefono, direccion, zona, serie, modelo, estado, agendado_para, agenda_nota, meses_sin_pago, intentos').in('estado', [
            'pendiente',
            'asignado'
        ]).order('agendado_para', {
            ascending: true,
            nullsFirst: false
        }).limit(20).then((param)=>{
            let { data, error } = param;
            return error ? [] : data !== null && data !== void 0 ? data : [];
        }),
        /**
     * El material que se le está acabando.
     *
     * Va en el tablero y no solo en una notificación porque el aviso sirve en un
     * momento muy preciso: cuando todavía está por pasar por la bodega. Una
     * notificación se lee y se cierra; esto sigue estando arriba mientras el
     * problema exista, que es hasta que alguien le cargue el material.
     *
     * RLS no filtra esta vista por técnico —es un cruce de almacenes y
     * artículos—, así que el filtro va acá. Sin él, el técnico vería lo que le
     * falta a la bodega central, que no es asunto suyo y le taparía lo propio.
     *
     * Falla en silencio a `[]`: que la 123 no esté corrida no puede dejarlo sin
     * ver su ruta.
     */ tecnicoId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_stock_bajo').select('articulo, cantidad, unidad, minimo, sugerido, agotado').eq('tecnico_id', tecnicoId).order('agotado', {
            ascending: false
        }).limit(15).then((param)=>{
            let { data, error } = param;
            return error ? [] : data !== null && data !== void 0 ? data : [];
        }) : Promise.resolve([])
    ]);
    const delDia = (ordenes !== null && ordenes !== void 0 ? ordenes : []).filter((o)=>o.fecha === hoy);
    /**
   * Desde dónde arranca el recorrido.
   *
   * Es donde el técnico marcó su ingreso, que ya se guarda en la jornada. No
   * se le vuelve a pedir el GPS: pedirlo otra vez para calcular un orden sería
   * gastarle batería y hacerlo esperar por algo que el sistema ya sabe.
   *
   * Sin jornada abierta o sin ubicación al marcar queda en null, y el orden se
   * arma igual — solo pierde el ancla del primer tramo.
   */ let partida = null;
    if (perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id) {
        const { data: j } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('jornadas').select('lat_ingreso, lng_ingreso').eq('tecnico_id', perfil.tecnico_id).eq('fecha', hoy).maybeSingle();
        if ((j === null || j === void 0 ? void 0 : j.lat_ingreso) != null && (j === null || j === void 0 ? void 0 : j.lng_ingreso) != null) {
            partida = {
                lat: Number(j.lat_ingreso),
                lng: Number(j.lng_ingreso)
            };
        }
    }
    const ruta = rutaDe(delDia, partida);
    const atrasadas = (ordenes !== null && ordenes !== void 0 ? ordenes : []).filter((o)=>o.fecha && o.fecha < hoy);
    // Los tickets abiertos son los que cuentan como trabajo pendiente; los
    // cerrados vienen igual porque alimentan "recientes" y el resumen del día.
    const ticketsAbiertos = (tickets !== null && tickets !== void 0 ? tickets : []).filter((t)=>![
            'resuelto',
            'cancelado'
        ].includes(t.estado));
    /**
   * Cuáles no había visto.
   *
   * `perfil.ultimo_acceso` vale porque el legajo se lee ANTES de sellar el
   * acceso nuevo: durante toda la sesión guarda el ingreso ANTERIOR, que es
   * justamente el corte que se busca.
   */ const desde = (perfil === null || perfil === void 0 ? void 0 : perfil.ultimo_acceso) ? new Date(perfil.ultimo_acceso).getTime() : null;
    const novedadesMarcadas = (novedades !== null && novedades !== void 0 ? novedades : []).map((e)=>({
            ...e,
            nueva: desde ? new Date(e.momento).getTime() > desde : false
        }));
    var _perfil_ultimo_acceso, _ruta_find;
    return {
        tecnicoId,
        ordenes: ordenes !== null && ordenes !== void 0 ? ordenes : [],
        tickets: ticketsAbiertos,
        todosLosTickets: tickets !== null && tickets !== void 0 ? tickets : [],
        notificaciones: notificaciones !== null && notificaciones !== void 0 ? notificaciones : [],
        novedades: novedadesMarcadas,
        novedadesNuevas: novedadesMarcadas.filter((e)=>e.nueva).length,
        desdeUltimoIngreso: (_perfil_ultimo_acceso = perfil === null || perfil === void 0 ? void 0 : perfil.ultimo_acceso) !== null && _perfil_ultimo_acceso !== void 0 ? _perfil_ultimo_acceso : null,
        red: red === null ? null : resumirRed(red, novedades !== null && novedades !== void 0 ? novedades : []),
        jornada: jornadaDe(delDia, atrasadas, ticketsAbiertos),
        resumen: resumenDelDia(delDia, tickets !== null && tickets !== void 0 ? tickets : []),
        recientes: recientesDe(ordenes !== null && ordenes !== void 0 ? ordenes : [], tickets !== null && tickets !== void 0 ? tickets : []),
        retiros: retiros !== null && retiros !== void 0 ? retiros : [],
        material: material !== null && material !== void 0 ? material : [],
        materialAgotado: (material !== null && material !== void 0 ? material : []).filter((m)=>m.agotado).length,
        // Los que tienen cita y ya se pasó la hora: es lo único de este bloque que
        // el técnico tiene que ver sin buscarlo.
        retirosVencidos: (retiros !== null && retiros !== void 0 ? retiros : []).filter((r)=>r.agendado_para && new Date(r.agendado_para) < new Date()).length,
        ruta,
        // La próxima es la primera de la ruta que todavía no se hizo. Sale aparte
        // porque es lo único que el técnico necesita mirar sin pensar.
        // La próxima sale de la MISMA ruta y no de otro cálculo: si se ordenaran
        // por separado, la pantalla podría anunciar una próxima parada que no es la
        // que encabeza la lista de abajo.
        proxima: (_ruta_find = ruta.find((o)=>o.estado !== 'hecha')) !== null && _ruta_find !== void 0 ? _ruta_find : null,
        atrasadas
    };
}
async function tableroDelDia(perfil) {
    var _perfil_id;
    const clave = "tablero:".concat((_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : 'anonimo');
    const { datos, deCache, minutos } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conCache"])(clave, ()=>leerTablero(perfil));
    return {
        ...datos,
        deCache,
        minutosDeCache: minutos
    };
}
/**
 * El resumen del día.
 *
 * ── Qué NO trae, y por qué ──
 *
 * La distancia recorrida. Para saberla habría que seguir al técnico por GPS
 * durante toda la jornada, y este sistema solo toma una coordenada puntual: la
 * de llegada a cada trabajo. Sumar las distancias entre esas coordenadas daría
 * un número que parece kilómetros recorridos y no lo es —ignora el camino real,
 * las vueltas y el regreso—. Un dato inventado que se ve exacto es peor que un
 * dato ausente.
 */ function resumenDelDia(delDia, tickets) {
    const hoy = hoyISO();
    // Por fecha LOCAL: `salida_at` y `cerrado_at` son instantes con zona, y
    // cortarlos con `slice(0,10)` los agrupaba por día UTC.
    const deHoy = (f)=>fechaLocalDe(f) === hoy;
    // El inicio de jornada sale de la primera marca real: salir hacia un trabajo
    // o llegar a uno. No se usa el último acceso al sistema porque abrir la app
    // desde la cama no es empezar a trabajar.
    const marcas = tickets.flatMap((t)=>[
            t.salida_at,
            t.llegada_at
        ]).filter((m)=>deHoy(m)).sort();
    var _marcas_;
    const inicio = (_marcas_ = marcas[0]) !== null && _marcas_ !== void 0 ? _marcas_ : null;
    const cerradosHoy = tickets.filter((t)=>t.estado === 'resuelto' && deHoy(t.cerrado_at)).length;
    return {
        inicio,
        // Desde la primera marca hasta ahora. No es "tiempo facturable": es cuánto
        // hace que arrancó, que es lo que el técnico quiere ver de un vistazo.
        minutosDesdeInicio: inicio ? Math.round((Date.now() - new Date(inicio)) / 60000) : null,
        instalacionesHechas: delDia.filter((o)=>o.estado === 'hecha').length,
        ticketsCerrados: cerradosHoy
    };
}
/**
 * Los últimos trabajos, instalaciones y tickets mezclados.
 *
 * Van juntos porque para el técnico son lo mismo —una salida a un domicilio— y
 * separarlos en dos listas obliga a mirar dos lugares para responder "¿qué hice
 * hoy?".
 */ function recientesDe(ordenes, tickets) {
    const deInstalacion = ordenes.map((o)=>{
        var _o_cliente, _o_hora;
        return {
            id: o.id,
            numero: o.numero,
            tipo: o.tipo === 'nueva' ? 'Instalación' : 'Visita',
            cliente: (_o_cliente = o.cliente) !== null && _o_cliente !== void 0 ? _o_cliente : o.nombre,
            cuando: o.fecha ? "".concat(o.fecha, "T").concat((_o_hora = o.hora) !== null && _o_hora !== void 0 ? _o_hora : '00:00:00') : o.created_at,
            hora: o.hora,
            estado: o.estado,
            a: "/instalaciones/".concat(o.id, "/alta")
        };
    });
    const deTicket = tickets.map((t)=>({
            id: t.id,
            numero: t.numero,
            tipo: 'Soporte',
            cliente: t.nombre,
            cuando: t.created_at,
            hora: null,
            estado: t.estado,
            a: "/campo/soporte/".concat(t.id)
        }));
    return [
        ...deInstalacion,
        ...deTicket
    ].sort((a, b)=>String(b.cuando).localeCompare(String(a.cuando))).slice(0, 6);
}
/**
 * El estado de la red, resumido en algo accionable.
 *
 * ── Por qué los nodos "por el padre" se cuentan aparte ──
 *
 * Un corte de fibra en cabecera tira veinte nodos. Contarlos como veinte
 * incidencias hace que la pantalla grite lo mismo por un problema que por
 * veinte, y el técnico aprende a ignorar el rojo. Lo que hay que mostrar es la
 * causa, no las consecuencias.
 */ function resumirRed(nodos) {
    let novedades = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    const hoy = hoyISO();
    // "Recuperados hoy" no sale del estado actual —un nodo que volvió está `up`,
    // igual que uno que nunca se cayó— sino del historial. Es la cuarta tarjeta
    // del tablero y la única que mira hacia atrás.
    const recuperadosHoy = novedades.filter((e)=>e.clase === 'recuperado' && fechaLocalDe(e.momento) === hoy).length;
    return {
        ...resumirEstado(nodos),
        recuperadosHoy
    };
}
function resumirEstado(nodos) {
    const caidos = nodos.filter((n)=>n.estado === 'down');
    const raiz = caidos.filter((n)=>!n.por_el_padre);
    const arrastrados = caidos.filter((n)=>n.por_el_padre);
    const alerta = nodos.filter((n)=>n.estado === 'warning');
    return {
        total: nodos.length,
        up: nodos.filter((n)=>n.estado === 'up').length,
        warning: alerta.length,
        down: caidos.length,
        // Lo que de verdad hay que mirar: las caídas que no son consecuencia de
        // otra.
        //
        // Primero por gravedad y después por antigüedad, en ese orden y no al
        // revés. Ordenando solo por antigüedad, un enlace degradado desde hace seis
        // horas —que ya es paisaje— quedaba arriba de una OLT que se acababa de
        // caer. La antigüedad no es la urgencia: lo que recién se rompió es lo que
        // explica por qué el trabajo de hoy no se puede hacer.
        incidencias: [
            ...raiz,
            ...alerta
        ].sort((a, b)=>{
            var _b_minutos_asi, _a_minutos_asi;
            return (a.estado === 'down' ? 0 : 1) - (b.estado === 'down' ? 0 : 1) || ((_b_minutos_asi = b.minutos_asi) !== null && _b_minutos_asi !== void 0 ? _b_minutos_asi : 0) - ((_a_minutos_asi = a.minutos_asi) !== null && _a_minutos_asi !== void 0 ? _a_minutos_asi : 0);
        }),
        arrastrados: arrastrados.length,
        estado: raiz.length ? 'critico' : alerta.length ? 'alerta' : 'ok'
    };
}
/**
 * Cómo viene el día, en las cuatro cifras que pediste.
 *
 * ── Por qué "pendientes" excluye lo que ya arrancó ──
 *
 * La cuenta obvia es "todo lo que no está hecho". Pero entonces el trabajo que
 * el técnico tiene abierto en ese momento aparece en dos tarjetas a la vez, y
 * la suma de las cuatro da más que el total del día. Es el mismo problema que
 * las pestañas de Soporte: los grupos tienen que cortar, no superponerse.
 *
 * Acá: pendiente = agendada y sin arrancar. En proceso = ya salió o está en el
 * domicilio. Las cuatro suman exactamente el día.
 */ function jornadaDe(delDia, atrasadas, tickets) {
    const cuenta = function() {
        for(var _len = arguments.length, estados = new Array(_len), _key = 0; _key < _len; _key++){
            estados[_key] = arguments[_key];
        }
        return delDia.filter((o)=>estados.includes(o.estado)).length;
    };
    const hechas = cuenta('hecha');
    const enProceso = cuenta('en_ruta', 'en_curso');
    const reagendadas = cuenta('reprogramada');
    const pendientes = cuenta('agendada');
    return {
        total: delDia.length,
        pendientes,
        enProceso,
        hechas,
        reagendadas,
        atrasadas: atrasadas.length,
        tickets: tickets.length,
        // Sin trabajos no es 0%: es "no hay nada", que se muestra distinto. Un 0%
        // en un día sin órdenes se lee como que se está atrasado.
        avance: delDia.length ? Math.round(hechas / delDia.length * 100) : null
    };
}
/**
 * La ruta del día, en el orden en que se recorre.
 *
 * Por hora, y las sin hora al final: una orden sin horario acordado es la que
 * se hace cuando se puede, no la primera.
 */ function rutaDe(delDia) {
    let desde = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    /**
   * Antes esto ordenaba solo por hora y mandaba las sueltas al final.
   *
   * El problema no era el criterio sino lo que dejaba afuera: una orden sin
   * hora no tiene compromiso horario, así que ponerla última es tan arbitrario
   * como ponerla primera — y la que estaba de paso terminaba obligando a
   * cruzar la ciudad de vuelta.
   *
   * `ordenarPorCercania` conserva las horas en su orden y acomoda las sueltas
   * donde menos alarguen el recorrido. Vive en `lib/ruta.js`, sin depender de
   * nada del navegador, para poder probarla con el runner de node.
   */ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ruta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ordenarPorCercania"])(delDia, {
        desde
    });
}
const semaforoOrden = (o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semaforoDe"])(o);
function faltaPara(o) {
    const falta = [];
    if (!o.tiene_equipo) falta.push('leer el equipo');
    if (!o.tiene_lectura) falta.push('medir la señal');
    if (!o.tiene_red) falta.push('parámetros de red');
    if (!o.tiene_pruebas) falta.push('test de salida');
    if (!o.tiene_firma) falta.push('firma del cliente');
    return falta;
}
const HORA = (h)=>h ? String(h).slice(0, 5) : null;
_c = HORA;
function saludo(nombre) {
    const h = new Date().getHours();
    const momento = h < 12 ? 'Buen día' : h < 19 ? 'Buenas tardes' : 'Buenas noches';
    return nombre ? "".concat(momento, ", ").concat(String(nombre).split(' ')[0]) : momento;
}
var _c;
__turbopack_context__.k.register(_c, "HORA");
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
"[project]/src/lib/avisos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cuándo se le manda cada aviso de pago.
 *
 * ── Por qué es una lista para elegir y no un campo para escribir ──
 *
 * Porque el número es en días RESPECTO DEL VENCIMIENTO y el signo lo cambia
 * todo: `-1` es un día antes de vencer y `1` es un día después. Escribiendo, un
 * signo de menos que falta convierte "avisale un día antes" en "avisale un día
 * tarde", y eso no se ve revisando la ficha — se ve cuando el abonado llama
 * diciendo que le cortaron sin avisar.
 *
 * Eligiendo de una lista que dice "1 día antes de vencer" no hay signo que
 * poner ni interpretación que hacer.
 */ /**
 * Los días que se ofrecen.
 *
 * No es una lista infinita a propósito: son los que un ISP usa de verdad. Los
 * valores intermedios que faltan —4, 6, 8 días— no cambian nada en la práctica y
 * alargarían el desplegable hasta volverlo incómodo.
 */ __turbopack_context__.s([
    "COMBINACIONES_FACTURA",
    ()=>COMBINACIONES_FACTURA,
    "OPCIONES_DIAS",
    ()=>OPCIONES_DIAS,
    "OPCIONES_PANTALLA",
    ()=>OPCIONES_PANTALLA,
    "avisosEnOrden",
    ()=>avisosEnOrden,
    "canalesDeCombinacion",
    ()=>canalesDeCombinacion,
    "combinacionDe",
    ()=>combinacionDe,
    "describirDias",
    ()=>describirDias
]);
const OPCIONES_DIAS = [
    {
        valor: '',
        titulo: 'Usar el valor general'
    },
    {
        valor: -10,
        titulo: '10 días antes de vencer'
    },
    {
        valor: -7,
        titulo: '7 días antes de vencer'
    },
    {
        valor: -5,
        titulo: '5 días antes de vencer'
    },
    {
        valor: -3,
        titulo: '3 días antes de vencer'
    },
    {
        valor: -2,
        titulo: '2 días antes de vencer'
    },
    {
        valor: -1,
        titulo: '1 día antes de vencer'
    },
    {
        valor: 0,
        titulo: 'El mismo día del vencimiento'
    },
    {
        valor: 1,
        titulo: '1 día después de vencer'
    },
    {
        valor: 2,
        titulo: '2 días después de vencer'
    },
    {
        valor: 3,
        titulo: '3 días después de vencer'
    },
    {
        valor: 5,
        titulo: '5 días después de vencer'
    },
    {
        valor: 7,
        titulo: '7 días después de vencer'
    },
    {
        valor: 10,
        titulo: '10 días después de vencer'
    },
    {
        valor: 15,
        titulo: '15 días después de vencer'
    },
    {
        valor: 20,
        titulo: '20 días después de vencer'
    },
    {
        valor: 30,
        titulo: '30 días después de vencer'
    }
];
const COMBINACIONES_FACTURA = [
    {
        valor: null,
        titulo: 'Por donde se pueda (recomendado)',
        canales: null
    },
    {
        valor: 'email',
        titulo: 'Correo',
        canales: [
            'email'
        ]
    },
    {
        valor: 'sms',
        titulo: 'SMS',
        canales: [
            'sms'
        ]
    },
    {
        valor: 'whatsapp',
        titulo: 'WhatsApp',
        canales: [
            'whatsapp'
        ]
    },
    {
        valor: 'telegram',
        titulo: 'Telegram',
        canales: [
            'telegram'
        ]
    },
    {
        valor: 'email+telegram',
        titulo: 'Correo + Telegram',
        canales: [
            'email',
            'telegram'
        ]
    },
    {
        valor: 'email+sms',
        titulo: 'Correo + SMS',
        canales: [
            'email',
            'sms'
        ]
    },
    {
        valor: 'email+whatsapp',
        titulo: 'Correo + WhatsApp',
        canales: [
            'email',
            'whatsapp'
        ]
    },
    {
        valor: 'telegram+sms',
        titulo: 'Telegram + SMS',
        canales: [
            'telegram',
            'sms'
        ]
    },
    // Va última y se nombra sin ambigüedad: es la excepción, no una opción más.
    {
        valor: 'ninguno',
        titulo: 'Desactivado — lo pidió el abonado',
        canales: []
    }
];
function combinacionDe(canales) {
    if (canales == null) return null;
    if (!canales.length) return 'ninguno';
    const buscada = [
        ...canales
    ].sort().join('+');
    const encontrada = COMBINACIONES_FACTURA.find((c)=>{
        var _c_canales;
        return ((_c_canales = c.canales) === null || _c_canales === void 0 ? void 0 : _c_canales.length) && [
            ...c.canales
        ].sort().join('+') === buscada;
    });
    var _encontrada_valor;
    // Una combinación cargada a mano que no está en la lista no se pierde ni se
    // reescribe: se muestra como "por donde se pueda" solo si no se reconoce.
    return (_encontrada_valor = encontrada === null || encontrada === void 0 ? void 0 : encontrada.valor) !== null && _encontrada_valor !== void 0 ? _encontrada_valor : null;
}
function canalesDeCombinacion(valor) {
    var _COMBINACIONES_FACTURA_find;
    if (valor === null || valor === '') return null;
    var _COMBINACIONES_FACTURA_find_canales;
    return (_COMBINACIONES_FACTURA_find_canales = (_COMBINACIONES_FACTURA_find = COMBINACIONES_FACTURA.find((c)=>c.valor === valor)) === null || _COMBINACIONES_FACTURA_find === void 0 ? void 0 : _COMBINACIONES_FACTURA_find.canales) !== null && _COMBINACIONES_FACTURA_find_canales !== void 0 ? _COMBINACIONES_FACTURA_find_canales : null;
}
const OPCIONES_PANTALLA = [
    {
        valor: '',
        titulo: 'No mostrarle nada antes del corte'
    },
    {
        valor: -10,
        titulo: 'Desde 10 días antes de vencer'
    },
    {
        valor: -7,
        titulo: 'Desde 7 días antes de vencer'
    },
    {
        valor: -5,
        titulo: 'Desde 5 días antes de vencer'
    },
    {
        valor: -3,
        titulo: 'Desde 3 días antes de vencer'
    },
    {
        valor: -2,
        titulo: 'Desde 2 días antes de vencer'
    },
    {
        valor: -1,
        titulo: 'Desde 1 día antes de vencer'
    },
    {
        valor: 0,
        titulo: 'Desde el día del vencimiento'
    }
];
function describirDias(n) {
    if (n === '' || n == null) return 'usa el valor general';
    const d = Number(n);
    if (!Number.isFinite(d)) return 'sin definir';
    if (d === 0) return 'el mismo día del vencimiento';
    const cuantos = Math.abs(d);
    const plural = cuantos === 1 ? 'día' : 'días';
    return d < 0 ? "".concat(cuantos, " ").concat(plural, " antes de vencer") : "".concat(cuantos, " ").concat(plural, " después de vencer");
}
function avisosEnOrden(param) {
    let { dias1, dias2, dias3 } = param;
    const problemas = [];
    const n = (v)=>v === '' || v == null ? null : Number(v);
    const d1 = n(dias1);
    const d2 = n(dias2);
    const d3 = n(dias3);
    if (d1 != null && d2 != null && d1 >= d2) {
        problemas.push('El segundo aviso tiene que ir después del primero. Como están, el segundo no se va a mandar nunca.');
    }
    if (d2 != null && d3 != null && d2 >= d3) {
        problemas.push('El último aviso tiene que ir después del segundo. Como están, el segundo no se va a mandar nunca.');
    }
    if (d1 != null && d3 != null && d1 >= d3) {
        problemas.push('El último aviso tiene que ir después del primero. Como están, el primero no se va a mandar nunca.');
    }
    return problemas;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/tirilla.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Imprimir un recibo en la impresora térmica del mostrador.
 *
 * ── Por qué una ventana con texto y no un PDF ──
 *
 * Porque una térmica de 58 mm no pagina: recibe líneas y las escupe. Un PDF
 * abriría el visor con márgenes de hoja A4 y saldría un recibo centrado en el
 * medio de una tirilla, con el papel desperdiciado arriba y abajo.
 *
 * El texto ya viene cortado al ancho por el middleware —él sabe cuántos
 * caracteres entran—; acá solo se le da un tipo monoespaciado y el ancho de
 * papel, que es lo que el navegador necesita para no reacomodar nada.
 */ /** Ancho del papel en milímetros, según el rollo que tenga la impresora. */ __turbopack_context__.s([
    "imprimirTirilla",
    ()=>imprimirTirilla
]);
const PAPEL = {
    32: '58mm',
    48: '80mm'
};
function imprimirTirilla(texto) {
    let ancho = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 32;
    const ventana = window.open('', '_blank', 'width=380,height=640');
    // El navegador puede bloquear la ventana emergente. Decirlo es mejor que
    // dejar a quien cobra apretando un botón que no hace nada.
    if (!ventana) {
        throw new Error('El navegador bloqueó la ventana de impresión. Permítela para este sitio y vuelve a intentar.');
    }
    const escapado = String(texto !== null && texto !== void 0 ? texto : '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var _PAPEL_ancho;
    ventana.document.write('<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<title>Recibo</title>\n<style>\n  /* Sin márgenes: cada milímetro de la tirilla es papel que se paga. */\n  @page { size: '.concat((_PAPEL_ancho = PAPEL[ancho]) !== null && _PAPEL_ancho !== void 0 ? _PAPEL_ancho : '58mm', ' auto; margin: 0; }\n  body { margin: 0; padding: 4mm 3mm; background: #fff; }\n  pre {\n    margin: 0;\n    font-family: "Courier New", monospace;\n    font-size: 11px;\n    line-height: 1.32;\n    /* Ya viene cortado al ancho justo: si el navegador lo reacomodara,\n       las líneas de guiones y las columnas quedarían torcidas. */\n    white-space: pre;\n    color: #000;\n  }\n</style>\n</head>\n<body><pre>').concat(escapado, "</pre></body>\n</html>"));
    ventana.document.close();
    // `onload` y no un temporizador: imprimir antes de que la fuente monoespaciada
    // esté aplicada saca la tirilla con el ancho equivocado.
    ventana.onload = ()=>{
        ventana.focus();
        ventana.print();
    };
}
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
"[project]/src/lib/migas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * La última miga de la ruta de navegación ("Clientes › Usuarios › María García").
 *
 * Las migas salen solas del menú; lo único que el menú no sabe es el nombre del
 * registro abierto (el cliente, el ticket). La pantalla de detalle lo dice con
 * `useMiga(cliente?.nombre)` y lo borra al salir.
 */ __turbopack_context__.s([
    "useMiga",
    ()=>useMiga,
    "useMigaActual",
    ()=>useMigaActual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
let actual = null;
const oyentes = new Set();
const emitir = ()=>oyentes.forEach((f)=>f());
function useMiga(texto) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMiga.useEffect": ()=>{
            if (!texto) return undefined;
            actual = texto;
            emitir();
            return ({
                "useMiga.useEffect": ()=>{
                    if (actual === texto) {
                        actual = null;
                        emitir();
                    }
                }
            })["useMiga.useEffect"];
        }
    }["useMiga.useEffect"], [
        texto
    ]);
}
_s(useMiga, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function useMigaActual() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useMigaActual.useSyncExternalStore": (f)=>{
            oyentes.add(f);
            return ({
                "useMigaActual.useSyncExternalStore": ()=>oyentes.delete(f)
            })["useMigaActual.useSyncExternalStore"];
        }
    }["useMigaActual.useSyncExternalStore"], {
        "useMigaActual.useSyncExternalStore": ()=>actual
    }["useMigaActual.useSyncExternalStore"], {
        "useMigaActual.useSyncExternalStore": ()=>null
    }["useMigaActual.useSyncExternalStore"]);
}
_s1(useMigaActual, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useMarca.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMarca",
    ()=>useMarca
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
/**
 * El nombre, el logo y la moneda del sistema.
 *
 * Se pide una sola vez y se guarda acá: la marca no cambia mientras alguien usa
 * el sistema, y pedirla en cada pantalla sería una consulta por navegación para
 * traer siempre lo mismo.
 *
 * Si no se puede leer —Django está apagado, no hay red— se usan los valores
 * por defecto en vez de dejar la pantalla en blanco. Alguien que no puede
 * entrar tiene que ver el formulario de entrada, no un cartel de error sobre
 * el nombre del sistema.
 *
 * Usa `fetch` pelado y NO el cliente del sistema: el cliente arrastra toda la
 * sesión, y el portal del abonado no la necesita — solo saber cómo se llama
 * el ISP. El abonado entra desde el celular con datos móviles.
 */ const DJANGO = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || 'http://localhost:8000/api/v1').replace(/\/$/, '');
const BASE = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1/red") || "".concat(DJANGO, "/red")).replace(/\/$/, '');
const POR_DEFECTO = {
    nombre_sistema: 'Taller SmartOLT',
    lema: 'Gestión de OLTs y MikroTik',
    logo_b64: null,
    moneda_simbolo: '$'
};
let cache = null;
let pedido = null;
function traer() {
    if (cache) return Promise.resolve(cache);
    pedido !== null && pedido !== void 0 ? pedido : pedido = fetch("".concat(BASE, "/api/general")).then((r)=>r.ok ? r.json() : POR_DEFECTO).catch(()=>POR_DEFECTO).then((m)=>{
        cache = m;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configurarMoneda"])(m.moneda_simbolo);
        // La pestaña del navegador: es cómo se distingue esta instalación de las
        // otras diez que alguien puede tener abiertas.
        document.title = m.lema ? "".concat(m.nombre_sistema, " — ").concat(m.lema) : m.nombre_sistema;
        return m;
    });
    return pedido;
}
function useMarca() {
    _s();
    const [marca, setMarca] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cache !== null && cache !== void 0 ? cache : POR_DEFECTO);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarca.useEffect": ()=>{
            let vivo = true;
            traer().then({
                "useMarca.useEffect": (m)=>vivo && setMarca(m)
            }["useMarca.useEffect"]);
            return ({
                "useMarca.useEffect": ()=>{
                    vivo = false;
                }
            })["useMarca.useEffect"];
        }
    }["useMarca.useEffect"], []);
    return marca;
}
_s(useMarca, "oQZU8a+BZeD/HPc3hP0pyfDPS6M=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/rutasPermisos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Qué permiso hace falta para entrar a cada pantalla.
 *
 * ── Por qué un mapa y no un prop en cada ruta ──
 *
 * La alternativa era envolver las cincuenta rutas de App.jsx en un guardián,
 * una por una. Se descartó por lo que pasa después: cuando alguien agrega la
 * ruta cincuenta y uno, se olvida del envoltorio, y la pantalla nueva queda
 * abierta para todos sin que nada avise. Acá el olvido tiene el efecto opuesto
 * y visible — la ruta no figura en el mapa, cae en el caso por defecto y la
 * decisión de dejarla abierta queda escrita.
 *
 * ── Esto no es la seguridad, es la cortesía ──
 *
 * Ocultar una pantalla no protege el dato: quien sabe escribir la URL igual la
 * pide, y quien abre la consola pide la fila directo. Lo que protege es la
 * autorización de Django y la verificación del servicio de red. Esto evita
 * ofrecerle a alguien lo que no va a poder usar, que es un problema distinto y
 * también real.
 */ /**
 * Cada entrada es `[prefijo, permiso]`. El permiso puede ser un arreglo, y ahí
 * alcanza con tener uno: el técnico entra a Instalaciones con
 * `instalaciones.asignadas` aunque no tenga `instalaciones.ver`, porque adentro
 * la pantalla ya le muestra solo lo suyo.
 *
 * `null` es "abierta a cualquiera con sesión".
 */ __turbopack_context__.s([
    "permisoDeRuta",
    ()=>permisoDeRuta,
    "puedeEntrar",
    ()=>puedeEntrar
]);
const RUTAS = [
    [
        '/',
        null
    ],
    // Clientes. Las rutas específicas van antes que /clientes porque el mapa
    // resuelve por prefijo más largo, y /clientes/mapa no exige ver la cartera.
    [
        '/clientes/importar',
        'clientes.importar'
    ],
    // El mapa de abonados pide ver la cartera, no ver una ubicación.
    //
    // Estaba pedido con `clientes.ver_ubicacion` y era el mismo agujero que el
    // catálogo de planes tenía para el vendedor: ese permiso existe para que el
    // técnico vea el GPS del cliente al que va, y el cobrador el del moroso que
    // visita — un punto, dentro de una ficha a la que ya tenían derecho. El mapa
    // global es otra cosa: es la base comercial entera, con nombre y estado de
    // cada abonado, exportable de un vistazo.
    [
        '/clientes/mapa',
        'clientes.ver'
    ],
    [
        '/clientes/instalaciones',
        [
            'instalaciones.ver',
            'instalaciones.asignadas'
        ]
    ],
    [
        '/clientes/contratos',
        'clientes.contratos'
    ],
    [
        '/clientes',
        'clientes.ver'
    ],
    // La bandeja del backoffice va ANTES que /instalaciones: si no, el prefijo
    // más corto la capturaría y se la abriría al técnico.
    [
        '/instalaciones/nuevas',
        'instalaciones.backoffice'
    ],
    // El alta en campo: es lo que hace el técnico parado en la vereda.
    [
        '/instalaciones',
        [
            'instalaciones.completar',
            'instalaciones.asignadas'
        ]
    ],
    // El inicio del técnico de campo.
    //
    // Tiene que estar acá aunque viva fuera del layout. `PantallaInicial` decide
    // a dónde mandar a cada rol recorriendo esta misma tabla, y una ruta que no
    // figura cae en el comodín de "/" —que no pide permiso— así que mandaba al
    // vendedor y al cajero a la pantalla del técnico, donde rebotaban contra el
    // ConPermiso. El menú y el guardián tienen que leer la misma tabla; en cuanto
    // uno mira otra cosa, aparecen destinos que nadie puede abrir.
    [
        '/campo',
        [
            'instalaciones.asignadas',
            'soporte.asignados'
        ]
    ],
    // Ventas
    [
        '/ventas/tablero',
        'ventas.dashboard'
    ],
    [
        '/ventas/prospectos',
        'ventas.prospectos'
    ],
    [
        '/ventas/cobertura',
        'ventas.cobertura'
    ],
    [
        '/ventas/mapa',
        'ventas.cobertura'
    ],
    // La cobranza usa el permiso de pagos, no uno de ventas: es cobrar, aunque lo
    // haga quien vendió.
    [
        '/ventas/cobranza',
        'pagos.observaciones'
    ],
    // "Mi comisión" es la pantalla del vendedor sobre lo suyo. Quien tiene
    // `comisiones.ver_todas` también entra —necesita poder ver lo que ve su
    // equipo— pero adentro la pantalla filtra por el legajo de quien mira: no es
    // la comparación del equipo, que vive en Inteligencia comercial.
    [
        '/ventas/mi-comision',
        [
            'comisiones.ver_propias',
            'comisiones.ver_todas'
        ]
    ],
    // La inteligencia de comisiones es la planilla del canal comercial entero:
    // cuánto cobra cada uno y qué calidad trae. Pide ver todas las comisiones, y
    // va ANTES que '/ventas' para que el prefijo corto no la capture.
    [
        '/ventas/comisiones',
        'comisiones.ver_todas'
    ],
    [
        '/ventas/cotizador',
        'ventas.cotizaciones'
    ],
    // Promociones abre con el permiso de cotizar porque es lo mismo que consultar
    // un precio. Crearlas y editarlas pide `config.planes`, y eso lo resuelve la
    // pantalla adentro: una promo es un precio con fecha, así que la puede definir
    // quien puede tocar los precios.
    [
        '/ventas/promociones',
        [
            'ventas.cotizaciones',
            'config.planes'
        ]
    ],
    [
        '/ventas/inteligencia',
        'ventas.inteligencia'
    ],
    // Los reportes son agregados, no listas de clientes: alcanza con el permiso
    // de reportes que ya existe.
    [
        '/ventas/reportes',
        'reportes.ver'
    ],
    [
        '/ventas',
        [
            'ventas.dashboard',
            'ventas.prospectos',
            'ventas.cobertura',
            'pagos.observaciones'
        ]
    ],
    // Inventario. "Mi almacén" pide el permiso del técnico, no el de bodega: es
    // lo único del módulo que ve alguien que no trabaja en el depósito.
    [
        '/inventario/mi-almacen',
        'inventario.almacen_propio'
    ],
    // Los retiros piden el permiso propio o el de despachar material: quien
    // transfiere equipos a los técnicos es quien recibe los que vuelven. El
    // vendedor no entra acá aunque vea sus propias órdenes desde su cartera.
    [
        '/inventario/retiros',
        [
            'retiros.gestionar',
            'inventario.transferir'
        ]
    ],
    // Recibir material que devuelve un técnico es lo mismo que despachárselo:
    // quien tiene una cosa tiene la otra.
    [
        '/inventario/entregas',
        [
            'retiros.gestionar',
            'inventario.transferir'
        ]
    ],
    // Las alertas las configura quien administra: define a qué números sale
    // información de la red y de los abonados.
    [
        '/ajustes/alertas',
        [
            'ajustes.editar',
            'nms.ver'
        ]
    ],
    [
        '/ajustes/pagina-corte',
        [
            'ajustes.editar'
        ]
    ],
    [
        '/ajustes/plantillas',
        [
            'ajustes.editar'
        ]
    ],
    // El prestador define con qué datos se firman los contratos: mismo nivel que
    // las plantillas y la página de corte.
    [
        '/ajustes/prestador',
        [
            'ajustes.editar'
        ]
    ],
    // Y la firma decide si se pide biometría o alcanza el papel.
    [
        '/ajustes/firma',
        [
            'ajustes.editar'
        ]
    ],
    [
        '/inventario/movimientos',
        'inventario.movimientos'
    ],
    [
        '/inventario/compras',
        [
            'inventario.compras',
            'inventario.proveedores'
        ]
    ],
    [
        '/inventario/stock',
        'inventario.ver'
    ],
    [
        '/inventario',
        'inventario.ver'
    ],
    // Servicios. Los dos hijos se separan a propósito: el vendedor consulta el
    // catálogo para saber qué ofrecer, pero los perfiles de velocidad son las
    // traffic tables de las OLTs y los perfiles PPP de los routers — configuración
    // de red que no tiene nada que hacer en manos de quien vende.
    [
        '/servicios/velocidades',
        'config.planes'
    ],
    [
        '/servicios/planes',
        [
            'ventas.planes',
            'config.planes'
        ]
    ],
    [
        '/servicios',
        [
            'ventas.planes',
            'config.planes'
        ]
    ],
    // Finanzas
    [
        '/pagos',
        [
            'pagos.ver',
            'pagos.registrar'
        ]
    ],
    /**
   * Transacciones es el cierre de caja del ISP ENTERO.
   *
   * Pedía `pagos.ver`, que lo tiene cualquiera que cobre: un punto de recaudación
   * entraba y veía lo que cobraron todos los demás. Lo encontró una prueba desde
   * ese perfil, no una revisión del mapa.
   *
   * Ahora pide el permiso de consolidar. Quien solo cobra tiene su propio resumen
   * en su pantalla de inicio, con lo suyo.
   */ [
        '/transacciones',
        [
            'finanzas.ver_todos',
            'finanzas.transferencias'
        ]
    ],
    /**
   * Estas dos no figuraban en el mapa, y eso las dejaba abiertas a cualquiera con
   * sesión — el caso por defecto. Es exactamente el olvido que este archivo
   * describe en su encabezado, cometido dos veces seguidas.
   */ /**
   * El tablero de quien recauda: lo suyo y nada más.
   *
   * Lo puede abrir cualquiera que cobre —incluido el cajero, que también quiere
   * ver cuánto lleva hoy—. No muestra plata de otros: la vista que lo alimenta
   * filtra por quien está mirando.
   */ [
        '/recaudacion',
        'pagos.registrar'
    ],
    [
        '/conciliacion',
        'finanzas.conciliacion'
    ],
    [
        '/arcotel',
        'finanzas.reporte_arcotel'
    ],
    [
        '/estadisticas',
        [
            'reportes.ver',
            'finanzas.reportes'
        ]
    ],
    [
        '/facturacion',
        'facturacion.ver'
    ],
    // Soporte. Técnicos y cuadrillas es gestión de gente, no de tickets: quien
    // decide quién recibe una orden de trabajo está administrando personal.
    [
        '/soporte/tecnicos',
        'usuarios.ver'
    ],
    // La comparación de desempeño la ve quien dirige el campo: quien ve TODAS las
    // instalaciones. Va ANTES que '/soporte' porque el mapa resuelve por prefijo
    // más largo — sin esta línea caería en el permiso de la bandeja de tickets y
    // se le ofrecería al técnico.
    //
    // Aunque escribiera la URL a mano no vería nada ajeno: `v_desempeno_tecnico`
    // lleva `security_invoker`, así que le devuelve solo sus propias filas. Esto
    // es para que el menú no ofrezca lo que no le corresponde.
    [
        '/soporte/desempeno',
        'instalaciones.ver'
    ],
    // Los ingresos del día piden lo mismo que el desempeño: las dos son la
    // pantalla de quien dirige el equipo, no la del técnico sobre lo suyo.
    [
        '/soporte/jornadas',
        'instalaciones.ver'
    ],
    // Los vehículos los administra quien maneja el campo. El técnico los ve desde
    // su jornada, para elegir con cuál sale, pero no los da de alta.
    [
        '/soporte/vehiculos',
        'instalaciones.ver'
    ],
    [
        '/soporte',
        [
            'soporte.ver',
            'soporte.asignados'
        ]
    ],
    // OLT / GPON
    [
        '/gpon',
        'red.olts_ver'
    ],
    [
        '/olts',
        'red.olts_ver'
    ],
    // El catálogo de modelos de ONT no tiene datos de nadie: es útil para el
    // técnico y no revela nada.
    // El catálogo de modelos de ONT no es una pantalla de consulta: crea y borra
    // tipos. Estaba pedido con `red.onus_ver` —un permiso de LECTURA— y por eso le
    // aparecía al técnico, que podía borrar un modelo del catálogo desde su menú.
    //
    // Va con el permiso de aprovisionar porque es quien de verdad lo usa: el
    // catálogo existe para autorizar una ONU, no para mirarlo.
    [
        '/onu-types',
        [
            'red.onus_aprovisionar',
            'red.olts_gestionar'
        ]
    ],
    [
        '/onus/aprovisionar',
        'red.onus_aprovisionar'
    ],
    // El listado global de ONUs y las métricas ópticas traen el nombre del
    // abonado de cada equipo: son la cartera por otro camino. Piden ver la red
    // completa, que es lo que el técnico no tiene — él ve la ONT de su trabajo
    // desde la ficha del cliente del ticket.
    [
        '/onus',
        'red.olts_ver'
    ],
    [
        '/naps',
        'red.olts_ver'
    ],
    [
        '/perfiles',
        'red.olts_gestionar'
    ],
    [
        '/tr069',
        'red.olts_ver'
    ],
    [
        '/metricas',
        'red.olts_ver'
    ],
    // Infraestructura
    [
        '/red/routers',
        'red.routers'
    ],
    [
        '/red',
        'red.ipam'
    ],
    [
        '/mikrotik',
        'red.routers'
    ],
    // Va ANTES que '/monitoreo' porque el mapa resuelve por prefijo más largo.
    // Ver la lista de averías alcanza con poder ver el monitoreo; abrirlas —que le
    // escribe a cientos de abonados— lo decide `red.incidencias` adentro.
    [
        '/monitoreo/incidencias',
        [
            'red.monitoreo_ver',
            'red.incidencias'
        ]
    ],
    [
        '/monitoreo',
        'red.monitoreo'
    ],
    [
        '/bloqueos',
        'red.cortes'
    ],
    // Ajustes. La entrada genérica va última: cualquier sección que no esté
    // listada arriba exige al menos poder tocar la configuración general.
    [
        '/ajustes/personal',
        'usuarios.ver'
    ],
    // Ver el esquema alcanza para entrar; editarlo pide `comisiones.configurar` y
    // lo resuelve la pantalla adentro. Quien aprueba comisiones necesita poder
    // mirar con qué reglas se calcularon.
    // El simulador va ANTES que la configuración porque pide otro permiso: probar
    // escenarios no es definir lo que se paga. Aplicar sí lo es, y ese botón exige
    // `comisiones.configurar` adentro de la pantalla.
    [
        '/ajustes/comisiones/simulador',
        [
            'comisiones.simular',
            'comisiones.configurar'
        ]
    ],
    [
        '/ajustes/comisiones',
        [
            'comisiones.configurar',
            'comisiones.ver_todas'
        ]
    ],
    [
        '/ajustes/licencia',
        'config.licencia'
    ],
    // Emitir una llave de API es darle a un sistema de afuera permiso para
    // consultar abonados y, si se marca, para cobrar. Va con su propio permiso y
    // no con `config.general`: quien configura el nombre de la empresa no tiene
    // por qué poder abrirle la puerta al proveedor del CRM.
    [
        '/ajustes/integraciones',
        'config.integraciones'
    ],
    [
        '/ajustes/crontab',
        'config.tareas'
    ],
    // Va ANTES de '/ajustes' por el prefijo más largo. Mismo permiso que la
    // mensajería: una plantilla sin aprobar no manda un mensaje feo, no manda
    // nada, y el abonado no se entera de que le van a cortar.
    [
        '/ajustes/plantillas-whatsapp',
        'config.mensajeria'
    ],
    [
        '/ajustes/mensajeria',
        'config.mensajeria'
    ],
    [
        '/ajustes/correo',
        'config.mensajeria'
    ],
    [
        '/ajustes',
        'config.general'
    ]
];
// Del prefijo más largo al más corto, una vez y no en cada navegación. Sin este
// orden "/clientes" ganaría sobre "/clientes/mapa" y el cobrador —que puede ver
// la ubicación pero no la cartera— se quedaría sin el mapa.
const ORDENADAS = [
    ...RUTAS
].sort(_c = (a, b)=>b[0].length - a[0].length);
_c1 = ORDENADAS;
const coincide = (ruta, prefijo)=>prefijo === '/' ? ruta === '/' : ruta === prefijo || ruta.startsWith("".concat(prefijo, "/"));
function permisoDeRuta(ruta) {
    const entrada = ORDENADAS.find((param)=>{
        let [prefijo] = param;
        return coincide(ruta, prefijo);
    });
    return entrada ? entrada[1] : null;
}
function puedeEntrar(puede, ruta) {
    const permiso = permisoDeRuta(ruta);
    if (!permiso) return true;
    return Array.isArray(permiso) ? permiso.some((p)=>puede(p)) : puede(permiso);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ORDENADAS$[...RUTAS].sort");
__turbopack_context__.k.register(_c1, "ORDENADAS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cola.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alCambiar",
    ()=>alCambiar,
    "arrancarCola",
    ()=>arrancarCola,
    "contarPendientes",
    ()=>contarPendientes,
    "descartar",
    ()=>descartar,
    "despachar",
    ()=>despachar,
    "encolar",
    ()=>encolar,
    "pendientes",
    ()=>pendientes,
    "registrarTipo",
    ()=>registrarTipo,
    "reintentar",
    ()=>reintentar,
    "trabados",
    ()=>trabados
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-client] (ecmascript)");
;
/**
 * La cola de trabajo sin conexión.
 *
 * ── Qué problema resuelve, exactamente ──
 *
 * El técnico pierde señal en medio de una instalación. Hoy eso significa que lo
 * que cargó se pierde y tiene que rehacerlo cuando vuelve la cobertura — o, más
 * común, que no lo rehace y la orden queda a medias en el sistema.
 *
 * ── El caso peligroso NO es "no se envió" ──
 *
 * Es "se envió, el servidor lo guardó, y la respuesta no volvió". Desde el
 * teléfono eso es indistinguible de un fallo, así que reintenta. Sin protección,
 * el material se descuenta dos veces y a fin de mes el inventario no cuadra por
 * un margen que nadie puede explicar.
 *
 * Por eso cada operación lleva una `clave_idempotencia` generada ACÁ, antes del
 * primer intento, y que no cambia entre reintentos. La migración 84 puso un
 * índice único sobre esa columna: el segundo intento rebota con el código 23505
 * y eso significa "ya estaba", no "falló".
 *
 * ── Lo que esta cola NO promete ──
 *
 * No promete que el trabajo esté hecho. Mientras hay operaciones pendientes, la
 * pantalla dice "falta enviar" y no "listo". Decir "listo" sería cómodo y sería
 * mentira, y el día que el teléfono se pierda con la cola adentro, el técnico
 * habría jurado que cerró una orden que nadie recibió.
 */ const BASE = 'taller-campo';
const TIENDA = 'pendientes';
let db;
async function abrir() {
    if (db) return db;
    db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])(BASE, 1, {
        upgrade (d) {
            const t = d.createObjectStore(TIENDA, {
                keyPath: 'id'
            });
            t.createIndex('creado', 'creado');
            t.createIndex('estado', 'estado');
        }
    });
    return db;
}
/** Un id que sobrevive al reintento. `crypto.randomUUID` está en todo navegador que soporte service workers. */ const nuevoId = ()=>crypto.randomUUID();
async function encolar(tipo, datos) {
    const d = await abrir();
    const op = {
        id: nuevoId(),
        tipo,
        datos,
        // La clave viaja al servidor. Es la que hace que reintentar sea seguro.
        clave: nuevoId(),
        estado: 'pendiente',
        intentos: 0,
        error: null,
        creado: Date.now()
    };
    await d.put(TIENDA, op);
    avisar();
    return op;
}
async function pendientes() {
    const d = await abrir();
    const todo = await d.getAll(TIENDA);
    return todo.filter((o)=>o.estado !== 'listo').sort((a, b)=>a.creado - b.creado);
}
async function contarPendientes() {
    return (await pendientes()).length;
}
async function trabados() {
    return (await pendientes()).filter((o)=>o.estado === 'trabado');
}
async function guardar(op) {
    const d = await abrir();
    await d.put(TIENDA, op);
    avisar();
}
async function borrar(id) {
    const d = await abrir();
    await d.delete(TIENDA, id);
    avisar();
}
/* ── Aviso a las pantallas ─────────────────────────────────────────────────
 *
 * Un evento y no un estado de React: la cola se toca desde varias pantallas y
 * desde el despachador, que no es un componente. Con un evento, cualquiera que
 * quiera enterarse escucha, y nadie tiene que pasar props tres niveles abajo.
 */ const EVENTO = 'cola-cambio';
const avisar = ()=>window.dispatchEvent(new CustomEvent(EVENTO));
const alCambiar = (fn)=>{
    window.addEventListener(EVENTO, fn);
    return ()=>window.removeEventListener(EVENTO, fn);
};
/* ── El despacho ─────────────────────────────────────────────────────────── */ /**
 * Qué sabe hacer la cola.
 *
 * Se registran desde afuera —`registrarTipo`— en vez de importar acá el módulo
 * de instalaciones, el de inventario y el de tickets. Si los importara, este
 * archivo dependería de medio sistema y el service worker terminaría cargando
 * pantallas enteras para mandar una fila.
 *
 * Cada manejador recibe `(datos, clave)` y tiene que:
 *   · usar `clave` como `clave_idempotencia` en lo que escriba,
 *   · lanzar si el fallo es transitorio (sin red, 5xx) → se reintenta,
 *   · lanzar un error con `.definitivo = true` si no tiene sentido reintentar.
 */ const MANEJADORES = new Map();
function registrarTipo(tipo, manejador) {
    MANEJADORES.set(tipo, manejador);
}
/**
 * ¿Este error se arregla reintentando?
 *
 * La distinción importa más de lo que parece. Reintentar para siempre algo que
 * el servidor rechaza por reglas —falta la firma, el plan no existe— convierte
 * la cola en un bucle que nunca se vacía, y el técnico ve "1 pendiente" durante
 * semanas hasta que deja de mirarlo.
 */ function esDefinitivo(err) {
    if (err === null || err === void 0 ? void 0 : err.definitivo) return true;
    var _err_code;
    const code = (_err_code = err === null || err === void 0 ? void 0 : err.code) !== null && _err_code !== void 0 ? _err_code : '';
    // 23505 = clave duplicada. Es el caso bueno: ya estaba guardado.
    if (code === '23505') return false;
    // 42501 = RLS lo rechazó. Reintentar no va a cambiar quién es.
    if (code === '42501') return true;
    // Los errores de restricción son del dato, no de la conexión.
    if (/^23/.test(code)) return true;
    return false;
}
/**
 * ¿Falló porque la sesión venció?
 *
 * ── El caso que esto evita ──
 *
 * El técnico trabaja toda la mañana sin señal. Cuando vuelve la cobertura, el
 * token de Supabase ya venció y hay que renovarlo. Durante esos segundos —o
 * hasta que vuelva a entrar, si el refresh también venció— las escrituras
 * fallan con un error de autenticación.
 *
 * Sin esta comprobación, el despachador corre cada minuto, quema los ocho
 * intentos en ocho minutos y marca como TRABADO el trabajo de toda la mañana.
 * El técnico ve "8 cosas no se pudieron enviar" y la única salida sería
 * descartarlas.
 *
 * Un token vencido no es un fallo de la operación: es que todavía no se pudo
 * intentar. No cuenta como intento y detiene la ronda — si la sesión no sirve
 * para la primera, no va a servir para las otras seis.
 */ const esDeSesion = (err)=>{
    var _err_code;
    const code = (_err_code = err === null || err === void 0 ? void 0 : err.code) !== null && _err_code !== void 0 ? _err_code : '';
    if (code === 'PGRST301' || (err === null || err === void 0 ? void 0 : err.status) === 401) return true;
    var _err_message;
    return /jwt|token|expired|refresh/i.test((_err_message = err === null || err === void 0 ? void 0 : err.message) !== null && _err_message !== void 0 ? _err_message : '');
};
let despachando = false;
async function despachar() {
    if (despachando || !navigator.onLine) return {
        enviadas: 0,
        quedan: await contarPendientes()
    };
    despachando = true;
    let enviadas = 0;
    try {
        for (const op of (await pendientes())){
            if (op.estado === 'trabado') continue;
            const manejador = MANEJADORES.get(op.tipo);
            if (!manejador) {
                // Una operación de una versión anterior de la app, con un tipo que ya
                // no existe. No se borra en silencio: se marca para que alguien la vea.
                await guardar({
                    ...op,
                    estado: 'trabado',
                    error: "Tipo desconocido: ".concat(op.tipo)
                });
                continue;
            }
            try {
                await manejador(op.datos, op.clave);
                await borrar(op.id);
                enviadas++;
            } catch (err) {
                // 23505 significa que el servidor ya lo tenía. Es éxito, no error.
                if ((err === null || err === void 0 ? void 0 : err.code) === '23505') {
                    await borrar(op.id);
                    enviadas++;
                    continue;
                }
                // La sesión vencida no cuenta como intento: no se llegó a intentar
                // nada. Y corta la ronda, porque las demás van a fallar igual.
                if (esDeSesion(err)) {
                    await guardar({
                        ...op,
                        error: 'Esperando que se renueve la sesión'
                    });
                    break;
                }
                const intentos = op.intentos + 1;
                // Ocho intentos y para. Con reintento al recuperar la señal y cada vez
                // que se abre la app, ocho fallos seguidos ya no son la conexión.
                const trabado = esDefinitivo(err) || intentos >= 8;
                var _err_message;
                await guardar({
                    ...op,
                    intentos,
                    estado: trabado ? 'trabado' : 'pendiente',
                    error: (_err_message = err === null || err === void 0 ? void 0 : err.message) !== null && _err_message !== void 0 ? _err_message : String(err)
                });
                // Si fue por conexión, no tiene sentido seguir con las demás.
                if (!navigator.onLine) break;
            }
        }
    } finally{
        despachando = false;
    }
    return {
        enviadas,
        quedan: await contarPendientes()
    };
}
async function reintentar(id) {
    const d = await abrir();
    const op = await d.get(TIENDA, id);
    if (!op) return;
    await guardar({
        ...op,
        estado: 'pendiente',
        intentos: 0,
        error: null
    });
    return despachar();
}
const descartar = (id)=>borrar(id);
function arrancarCola() {
    const intentar = ()=>despachar().catch(()=>{});
    window.addEventListener('online', intentar);
    document.addEventListener('visibilitychange', ()=>{
        if (document.visibilityState === 'visible') intentar();
    });
    const t = setInterval(intentar, 60000);
    intentar();
    return ()=>{
        window.removeEventListener('online', intentar);
        clearInterval(t);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/colaCampo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campoApi",
    ()=>campoApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cola.js [app-client] (ecmascript)");
;
;
/**
 * Qué puede hacer el técnico sin señal.
 *
 * Este archivo es el puente entre la cola —que no sabe nada del negocio— y las
 * tablas. Cada tipo registrado acá es una operación que se puede reintentar sin
 * consecuencias, y esa propiedad hay que comprobarla una por una, no suponerla.
 *
 * ── Qué NO está acá, y por qué ──
 *
 * Las fotos. Una foto de un celular moderno son 3–5 MB, y una instalación lleva
 * seis. Guardar treinta megas por orden en IndexedDB funciona hasta que el
 * navegador decide que la app usa demasiado y borra TODO el almacenamiento —
 * incluida la cola de texto, que es la que importa.
 *
 * Las fotos se suben cuando hay señal. Es una limitación real y la pantalla la
 * dice; fingir que se guardaron y perderlas después es peor que no ofrecerlo.
 */ /* ── 1. Guardar el avance de una orden ──────────────────────────────────────
 *
 * Es un UPDATE sobre una fila que ya existe, con los campos que el técnico
 * acaba de cargar. Reintentarlo escribe los mismos valores otra vez: no hace
 * falta clave de idempotencia porque escribir dos veces lo mismo no duplica
 * nada.
 *
 * Sí importa el ORDEN — por eso la cola despacha en serie. Dos guardados de la
 * misma orden aplicados al revés dejarían los valores viejos encima.
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrarTipo"])('instalacion.guardar', async (param)=>{
    let { id, campos } = param;
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('instalaciones').update(campos).eq('id', id);
    if (error) throw error;
});
/* ── 2. Descontar material ──────────────────────────────────────────────────
 *
 * Acá la clave es imprescindible: es la operación que, reintentada, deja el
 * inventario mintiendo. El índice único de la migración 84 la rechaza con 23505
 * y la cola lee ese código como "ya estaba".
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrarTipo"])('material.consumir', async (param, clave)=>{
    let { movimientos } = param;
    // Varias líneas del mismo consumo comparten la clave base con un sufijo:
    // cada fila necesita su propia clave única, pero todas tienen que ser
    // estables entre reintentos.
    const filas = movimientos.map((m, i)=>({
            ...m,
            clave_idempotencia: derivar(clave, i)
        }));
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(filas);
    if (error) throw error;
});
/* ── 3. Cerrar la instalación ───────────────────────────────────────────────
 *
 * La función de la base ya es idempotente: si la instalación tiene `client_id`,
 * devuelve ese mismo id sin crear otro abonado, y el `FOR UPDATE` serializa dos
 * llamadas a la vez. Se comprobó antes de permitir encolarla — es lo que hace
 * posible que el botón sea uno solo.
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrarTipo"])('instalacion.finalizar', async (param)=>{
    let { id } = param;
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('finalizar_alta_instalacion', {
        p_instalacion_id: id
    });
    if (error) throw error;
});
/* ── 4. Tocar un ticket: cambiar su estado, o cerrarlo ──────────────────────
 *
 * Un solo tipo para las dos cosas porque son la misma escritura con distintos
 * campos, y porque así el orden entre ellas se respeta solo: "en ruta" y
 * después "resuelto" salen en ese orden de la cola.
 *
 * ── Por qué NO lleva clave de idempotencia ──
 *
 * Se comprobó, no se supuso. El historial del ticket lo escribe un disparador
 * de la base, y está guardado así:
 *
 *     IF NEW.estado IS DISTINCT FROM OLD.estado THEN ... END IF;
 *
 * O sea que reintentar un cierre sobre un ticket ya cerrado no deja un segundo
 * renglón: el estado no cambió, el disparador no dispara. Agregar una clave acá
 * sería protegerse de algo que la base ya impide.
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrarTipo"])('ticket.actualizar', async (param)=>{
    let { id, campos } = param;
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tickets').update(campos).eq('id', id);
    if (error) throw error;
});
/**
 * Una clave por línea, derivada de la de la operación.
 *
 * Tiene que ser estable —el mismo índice da siempre la misma clave— y con
 * formato de UUID, porque la columna es UUID. Se reemplazan los últimos dígitos
 * en vez de generar una nueva: así se ve a simple vista que las cinco líneas
 * salieron del mismo consumo.
 */ function derivar(clave, i) {
    const sufijo = String(i).padStart(4, '0');
    return clave.slice(0, -4) + sufijo;
}
/* ── La API que usan las pantallas ─────────────────────────────────────────
 *
 * Cada función intenta directo si hay señal y encola si no. Las pantallas no
 * preguntan si hay conexión ni eligen entre dos caminos: llaman a una función y
 * listo.
 *
 * Ese es el punto de todo esto. Un botón "guardar" y otro "guardar sin
 * conexión" obligarían al técnico a decidir algo que el sistema sabe mejor que
 * él, y a equivocarse justo cuando está apurado.
 */ async function intentarOEncolar(tipo, datos, ejecutar) {
    if (navigator.onLine) {
        try {
            return {
                enviado: true,
                data: await ejecutar()
            };
        } catch (err) {
            // Si el fallo es de la conexión, va a la cola. Si es de reglas —falta un
            // dato, RLS lo rechaza— se devuelve al que llamó: encolar un rechazo
            // haría que el técnico se entere del problema mañana.
            if (!esDeConexion(err)) throw err;
        }
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encolar"])(tipo, datos);
    return {
        enviado: false,
        encolado: true
    };
}
/**
 * ¿Falló por la red?
 *
 * supabase-js devuelve `TypeError: Failed to fetch` cuando no hay salida, y un
 * objeto con `code` cuando el servidor contestó. Un error sin `code` es, casi
 * siempre, que nunca llegó.
 */ const esDeConexion = (err)=>{
    var _err_message, _err_message1;
    return !navigator.onLine || !(err === null || err === void 0 ? void 0 : err.code) || ((_err_message = err.message) === null || _err_message === void 0 ? void 0 : _err_message.includes('fetch')) || ((_err_message1 = err.message) === null || _err_message1 === void 0 ? void 0 : _err_message1.includes('network'));
};
const campoApi = {
    guardarOrden: (id, campos)=>intentarOEncolar('instalacion.guardar', {
            id,
            campos
        }, async ()=>{
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('instalaciones').update(campos).eq('id', id);
            if (error) throw error;
        }),
    // Devuelve el id del cliente en `data` cuando se ejecutó de verdad. Encolada
    // no puede devolverlo —el cliente todavía no existe— y quien llama tiene que
    // mirar `encolado` antes de usarlo.
    finalizarOrden: (id)=>intentarOEncolar('instalacion.finalizar', {
            id
        }, async ()=>{
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('finalizar_alta_instalacion', {
                p_instalacion_id: id
            });
            if (error) throw error;
            return data;
        }),
    /** Cerrar el ticket, marcarlo en ruta, cambiarle el estado: es lo mismo. */ actualizarTicket: (id, campos)=>intentarOEncolar('ticket.actualizar', {
            id,
            campos
        }, async ()=>{
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tickets').update(campos).eq('id', id);
            if (error) throw error;
        }),
    consumirMaterial: (movimientos)=>intentarOEncolar('material.consumir', {
            movimientos
        }, async ()=>{
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(movimientos);
            if (error) throw error;
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_63b2e4cd._.js.map