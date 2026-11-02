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
"[project]/src/lib/optica.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Vocabulario de la señal óptica.
 *
 * El umbral del taller es −27 dBm: por debajo de ahí el enlace empieza a perder
 * paquetes y el abonado llama. Pero avisar recién al cruzarlo llega tarde —una
 * señal que viene bajando de a poco se arregla con una visita programada, y la
 * misma señal descubierta el día que corta se arregla con una urgencia.
 *
 * Por eso hay una franja intermedia: todavía funciona, pero ya hay que mirarla.
 */ __turbopack_context__.s([
    "NIVELES",
    ()=>NIVELES,
    "UMBRAL_DBM",
    ()=>UMBRAL_DBM,
    "dbm",
    ()=>dbm,
    "nivel",
    ()=>nivel,
    "nivelDe",
    ()=>nivelDe,
    "porPuerto",
    ()=>porPuerto
]);
const UMBRAL_DBM = -27;
const ATENCION_DBM = -24;
const NIVELES = {
    buena: {
        label: 'Buena',
        clase: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300',
        punto: 'bg-emerald-400',
        ayuda: 'Por encima de −24 dBm.'
    },
    atencion: {
        label: 'Para mirar',
        clase: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
        punto: 'bg-amber-400',
        ayuda: 'Entre −24 y −27 dBm: funciona, pero conviene revisarla antes de que corte.'
    },
    mala: {
        label: 'Baja',
        clase: 'border-rose-500/50 bg-rose-500/15 text-rose-300',
        punto: 'bg-rose-500',
        ayuda: 'Por debajo de −27 dBm: pérdida de paquetes y cortes.'
    },
    sin_dato: {
        label: 'Sin lectura',
        clase: 'border-slate-700 bg-slate-800/60 text-slate-500',
        punto: 'bg-slate-600',
        ayuda: 'La ONT no reportó su óptica: está apagada o desconectada.'
    }
};
function nivelDe(dbm) {
    if (dbm == null) return 'sin_dato';
    const n = Number(dbm);
    if (!Number.isFinite(n)) return 'sin_dato';
    if (n < UMBRAL_DBM) return 'mala';
    if (n < ATENCION_DBM) return 'atencion';
    return 'buena';
}
const nivel = (dbm)=>NIVELES[nivelDe(dbm)];
function porPuerto(onts) {
    const mapa = new Map();
    for (const o of onts){
        const clave = "".concat(o.slot, "/").concat(o.puerto);
        if (!mapa.has(clave)) mapa.set(clave, {
            slot: o.slot,
            puerto: o.puerto,
            clave,
            onts: []
        });
        mapa.get(clave).onts.push(o);
    }
    return [
        ...mapa.values()
    ].map((p)=>({
            ...p,
            onts: p.onts.sort((a, b)=>{
                var _a_ontId, _b_ontId;
                return ((_a_ontId = a.ontId) !== null && _a_ontId !== void 0 ? _a_ontId : a.onu_index) - ((_b_ontId = b.ontId) !== null && _b_ontId !== void 0 ? _b_ontId : b.onu_index);
            }),
            malas: p.onts.filter((o)=>{
                var _o_rx_dbm;
                return nivelDe((_o_rx_dbm = o.rx_dbm) !== null && _o_rx_dbm !== void 0 ? _o_rx_dbm : o.rx_power_dbm) === 'mala';
            }).length,
            sinDato: p.onts.filter((o)=>{
                var _o_rx_dbm;
                return ((_o_rx_dbm = o.rx_dbm) !== null && _o_rx_dbm !== void 0 ? _o_rx_dbm : o.rx_power_dbm) == null;
            }).length
        })).sort((a, b)=>a.slot - b.slot || a.puerto - b.puerto);
}
const dbm = (v)=>v == null ? '—' : "".concat(Number(v).toFixed(2), " dBm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/olts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAPACIDADES",
    ()=>CAPACIDADES,
    "TR069_INTERFACES",
    ()=>TR069_INTERFACES,
    "aCsv",
    ()=>aCsv,
    "capacidadesDe",
    ()=>capacidadesDe,
    "descargar",
    ()=>descargar,
    "eliminarOlt",
    ()=>eliminarOlt,
    "guardarOlt",
    ()=>guardarOlt,
    "hace",
    ()=>hace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
;
const TR069_INTERFACES = {
    mgmt_ip: {
        label: 'IP de gestión (recomendada)',
        ayuda: 'La ONU responde por su IP de administración.'
    },
    wan_ip: {
        label: 'IP del WAN',
        ayuda: 'Se usa la dirección del servicio, no la de gestión.'
    },
    loopback: {
        label: 'Loopback',
        ayuda: 'Interfaz virtual del equipo.'
    },
    ninguna: {
        label: 'Ninguna',
        ayuda: 'TR069 desactivado para las ONUs de esta OLT.'
    }
};
const CAPACIDADES = {
    Huawei: {
        salud: true,
        placas: true,
        puertosPon: true,
        nota: 'Relevado contra un MA5800-X7 con firmware R018.'
    },
    VSOL: {
        salud: false,
        placas: false,
        puertosPon: false,
        nota: 'Falta relevar los comandos contra el equipo. Usa la pestaña de cada área para preguntarle qué acepta.'
    }
};
const capacidadesDe = (marca)=>{
    var _CAPACIDADES_marca;
    return (_CAPACIDADES_marca = CAPACIDADES[marca]) !== null && _CAPACIDADES_marca !== void 0 ? _CAPACIDADES_marca : {
        salud: false,
        placas: false,
        puertosPon: false,
        nota: 'Marca sin relevar.'
    };
};
async function guardarOlt(id, cambios) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('olts').update(cambios).eq('id', id);
    if (error) throw traducir(error);
}
async function eliminarOlt(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('olts').delete().eq('id', id);
    if (error) throw traducir(error);
}
function traducir(err) {
    const e = new Error(err.message);
    var _err_hint;
    e.hint = (_err_hint = err.hint) !== null && _err_hint !== void 0 ? _err_hint : err.details;
    if (err.code === '23503') {
        e.message = 'La OLT tiene registros que dependen de ella';
        e.hint = 'Elimina o reasigna sus ONUs antes de borrarla.';
    }
    return e;
}
// --- Exportación -------------------------------------------------------------
const COLUMNAS_CSV = [
    [
        'numero',
        'ID'
    ],
    [
        'nombre',
        'Nombre'
    ],
    [
        'marca',
        'Marca'
    ],
    [
        'ip_host',
        'IP de gestion'
    ],
    [
        'puerto_ssh',
        'Puerto TCP'
    ],
    [
        'snmp_puerto',
        'Puerto SNMP UDP'
    ],
    [
        'usuario',
        'Usuario'
    ],
    [
        'hw_version',
        'Version de hardware'
    ],
    [
        'sw_version',
        'Version de software'
    ],
    [
        'pon_tipos',
        'Tipos PON'
    ],
    [
        'estado',
        'Estado'
    ],
    [
        'estado_latencia_ms',
        'Latencia ms'
    ],
    [
        'onus_total',
        'ONUs'
    ],
    [
        'onus_online',
        'ONUs online'
    ],
    [
        'via_vpn',
        'Por VPN'
    ],
    [
        'snmp_trap',
        'Escucha traps'
    ],
    [
        'iptv',
        'IPTV'
    ],
    [
        'ntp_servers',
        'Servidores NTP'
    ],
    [
        'tr069_perfil',
        'Perfil TR069'
    ],
    [
        'activo',
        'Activa'
    ]
];
function aCsv(filas) {
    const escapar = (v)=>{
        if (v == null) return '';
        const s = typeof v === 'boolean' ? v ? 'si' : 'no' : String(v);
        return /[";\n]/.test(s) ? '"'.concat(s.replace(/"/g, '""'), '"') : s;
    };
    const lineas = [
        COLUMNAS_CSV.map((param)=>{
            let [, titulo] = param;
            return titulo;
        }).join(';'),
        ...filas.map((f)=>COLUMNAS_CSV.map((param)=>{
                let [clave] = param;
                return escapar(f[clave]);
            }).join(';'))
    ];
    return "\uFEFF".concat(lineas.join('\r\n'));
}
function descargar(nombre, contenido) {
    let tipo = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'text/csv;charset=utf-8';
    const url = URL.createObjectURL(new Blob([
        contenido
    ], {
        type: tipo
    }));
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Sin esto el blob queda retenido en memoria hasta que se recargue la página.
    URL.revokeObjectURL(url);
}
function hace(segundos) {
    if (segundos == null) return 'nunca';
    if (segundos < 60) return 'recién';
    const min = Math.floor(segundos / 60);
    if (min < 60) return "hace ".concat(min, " min");
    const h = Math.floor(min / 60);
    if (h < 24) return "hace ".concat(h, " h");
    return "hace ".concat(Math.floor(h / 24), " d");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/AccionesOnu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccionesOnu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript) <export default as MoveRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-client] (ecmascript) <export default as PauseCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function AccionesOnu(param) {
    let { olt, onu, planes, onListo, onCerrar } = param;
    var _resultado_service_ports;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    var _onu_plan_id;
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_onu_plan_id = onu.plan_id) !== null && _onu_plan_id !== void 0 ? _onu_plan_id : '');
    const [trabajando, setTrabajando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [destino, setDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        slot: onu.slot,
        puerto: ''
    });
    var _onu_srv_profile_olt;
    const [srvPerfil, setSrvPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String((_onu_srv_profile_olt = onu.srv_profile_olt) !== null && _onu_srv_profile_olt !== void 0 ? _onu_srv_profile_olt : ''));
    var _onu_line_profile_olt;
    const [linePerfil, setLinePerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String((_onu_line_profile_olt = onu.line_profile_olt) !== null && _onu_line_profile_olt !== void 0 ? _onu_line_profile_olt : ''));
    /**
   * Los perfiles que tiene la OLT, leídos del equipo.
   *
   * No se guardan en la base a propósito: se crean y se borran desde la consola
   * del equipo, y una lista cacheada haría elegir uno que ya no existe. Son
   * veintidós y la consulta tarda menos de un segundo.
   */ const [perfiles, setPerfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccionesOnu.useEffect": ()=>{
            let vivo = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.perfilesOnt(olt.id).then({
                "AccionesOnu.useEffect": (p)=>vivo && setPerfiles(p)
            }["AccionesOnu.useEffect"])// Falla en silencio: no poder listar los perfiles no tiene por qué tapar
            // las otras acciones, que son las que se usan todos los días.
            .catch({
                "AccionesOnu.useEffect": ()=>vivo && setPerfiles({
                        srv: [],
                        line: []
                    })
            }["AccionesOnu.useEffect"]);
            return ({
                "AccionesOnu.useEffect": ()=>{
                    vivo = false;
                }
            })["AccionesOnu.useEffect"];
        }
    }["AccionesOnu.useEffect"], [
        olt.id
    ]);
    var _perfiles_srv;
    /** El perfil que le corresponde por su modelo, si la OLT lo tiene. */ const perfilDelModelo = onu.modelo ? ((_perfiles_srv = perfiles === null || perfiles === void 0 ? void 0 : perfiles.srv) !== null && _perfiles_srv !== void 0 ? _perfiles_srv : []).find((p)=>String(p.nombre).toUpperCase() === String(onu.modelo).toUpperCase()) : null;
    const esDelModelo = (p)=>perfilDelModelo && Number(p.id) === Number(perfilDelModelo.id);
    // Habilita el botón solo si de verdad hay algo distinto que aplicar: mandar
    // el mismo perfil corta el servicio unos segundos para nada.
    const hayCambioDePerfil = srvPerfil !== '' && Number(srvPerfil) !== Number(onu.srv_profile_olt) || linePerfil !== '' && Number(linePerfil) !== Number(onu.line_profile_olt);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const suspendida = onu.onu_estado === 'unknown';
    async function correr(clave, fn) {
        setTrabajando(clave);
        setError(null);
        setResultado(null);
        try {
            const r = await fn();
            setResultado(r);
            // Se avisa QUÉ acción fue y qué devolvió. La baja hace desaparecer la
            // ficha, y sin saber cuál corrió la pantalla no puede explicar por qué se
            // quedó sin datos.
            onListo === null || onListo === void 0 ? void 0 : onListo(clave, r);
        } catch (err) {
            setError(err);
        } finally{
            setTrabajando(null);
        }
    }
    const elegido = planes.find((p)=>p.id === plan);
    const sinIndice = elegido && elegido.traffic_table_index == null;
    var _resultado_service_ports_length, _onu_cliente, _ref, _perfiles_srv1, _perfiles_line;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            resultado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: [
                    resultado.desde ? "Movida de ".concat(resultado.desde, " a ").concat(resultado.hasta, ".") : resultado.plan ? "Plan cambiado a ".concat(resultado.plan, " (").concat(resultado.velocidad, ") en ").concat((_resultado_service_ports_length = (_resultado_service_ports = resultado.service_ports) === null || _resultado_service_ports === void 0 ? void 0 : _resultado_service_ports.length) !== null && _resultado_service_ports_length !== void 0 ? _resultado_service_ports_length : 0, " service-ports.") : resultado.activa === false ? resultado.aviso : resultado.activa === true ? resultado.aviso : "ONT ".concat(resultado.sn, " dada de baja de ").concat(resultado.donde, "."),
                    resultado.aviso && (resultado.plan || resultado.desde) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 block",
                        children: resultado.aviso
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 107,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-panel px-4 py-3 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-100",
                        children: (_ref = (_onu_cliente = onu.cliente) !== null && _onu_cliente !== void 0 ? _onu_cliente : onu.nombre_en_la_olt) !== null && _ref !== void 0 ? _ref : onu.sn
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-xs text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: onu.sn
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            " · placa ",
                            onu.slot,
                            " puerto ",
                            onu.puerto,
                            " · ONT",
                            ' ',
                            onu.onu_index,
                            onu.plan ? " · ".concat(onu.plan) : ' · sin plan'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-slate-800 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            "Tipo de ONU"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                hint: "Se crea en la OLT; define los puertos.",
                                label: "Perfil de servicio",
                                className: "min-w-[220px] flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: srvPerfil,
                                    onChange: (e)=>setSrvPerfil(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— sin cambiar —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        ((_perfiles_srv1 = perfiles === null || perfiles === void 0 ? void 0 : perfiles.srv) !== null && _perfiles_srv1 !== void 0 ? _perfiles_srv1 : []).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: [
                                                    p.nombre,
                                                    " (id ",
                                                    p.id,
                                                    ")",
                                                    esDelModelo(p) ? ' · el de este modelo' : ''
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                hint: "Se crea en la OLT; define el tráfico.",
                                label: "Perfil de línea",
                                className: "min-w-[220px] flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: linePerfil,
                                    onChange: (e)=>setLinePerfil(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— sin cambiar —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        ((_perfiles_line = perfiles === null || perfiles === void 0 ? void 0 : perfiles.line) !== null && _perfiles_line !== void 0 ? _perfiles_line : []).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: [
                                                    p.nombre,
                                                    " (id ",
                                                    p.id,
                                                    ")"
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "primario",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                                cargando: trabajando === 'perfiles',
                                disabled: !hayCambioDePerfil,
                                onClick: async ()=>{
                                    if (!await confirmar({
                                        titulo: 'Cambiar el tipo de ONU',
                                        mensaje: 'La ONT se reaprovisiona por OMCI y el abonado puede perder el servicio unos ' + 'segundos. Su ONT-ID no cambia y no hay que volver a instalarla.',
                                        etiquetaAccion: 'Cambiar el perfil'
                                    })) {
                                        return;
                                    }
                                    await correr('perfiles', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.cambiarPerfilesOnu(olt.id, onu.onu_id, {
                                            srv_profile_id: srvPerfil !== '' && Number(srvPerfil) !== onu.srv_profile_olt ? Number(srvPerfil) : undefined,
                                            line_profile_id: linePerfil !== '' && Number(linePerfil) !== onu.line_profile_olt ? Number(linePerfil) : undefined
                                        }));
                                },
                                children: "Cambiar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-[11px] text-slate-500",
                        children: onu.modelo ? perfilDelModelo ? Number(onu.srv_profile_olt) === Number(perfilDelModelo.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Ya tiene el perfil de su modelo (",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: onu.modelo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                    lineNumber: 197,
                                    columnNumber: 52
                                }, this),
                                ")."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-amber-400",
                            children: [
                                "La OLT tiene un perfil llamado ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: onu.modelo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                    lineNumber: 201,
                                    columnNumber: 50
                                }, this),
                                " (id ",
                                perfilDelModelo.id,
                                ") y esta ONT no lo está usando. Es el que le corresponde."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                            lineNumber: 200,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "La OLT no tiene un perfil llamado ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: onu.modelo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                    lineNumber: 207,
                                    columnNumber: 51
                                }, this),
                                ". Mientras no exista, conviene dejarla con uno genérico que le dé servicio."
                            ]
                        }, void 0, true) : 'No se conoce el modelo de esta ONT: resincroniza para traerlo del equipo.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-slate-800 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            "Cambiar plan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                hint: "El cambio de precio rige desde la próxima factura.",
                                label: "Nuevo plan",
                                className: "min-w-[240px] flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: plan,
                                    onChange: (e)=>setPlan(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— elige —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        planes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: [
                                                    p.nombre,
                                                    " (",
                                                    Math.round(p.bajada_kbps / 1000),
                                                    "/",
                                                    Math.round(p.subida_kbps / 1000),
                                                    " Mbps)",
                                                    p.traffic_table_index == null ? ' — sin índice' : ''
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "primario",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
                                cargando: trabajando === 'plan',
                                disabled: !plan || plan === onu.plan_id || sinIndice,
                                onClick: ()=>correr('plan', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.cambiarPlanOnu(olt.id, onu.onu_id, plan)),
                                children: "Aplicar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-[11px] text-slate-500",
                        children: sinIndice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-amber-400",
                            children: "Ese plan no tiene índice de traffic table: no se puede aplicar en la OLT. Se le asigna desde Servicios → Planes."
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this) : 'No corta el servicio: se modifican las traffic-tables de sus service-ports en vez de rehacerlos.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-slate-800 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                        children: [
                            suspendida ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 260,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__["PauseCircle"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 260,
                                columnNumber: 52
                            }, this),
                            suspendida ? 'Reactivar' : 'Suspender'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: suspendida ? 'exito' : 'alerta',
                                icon: suspendida ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__["PauseCircle"],
                                cargando: trabajando === 'susp',
                                onClick: ()=>correr('susp', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.suspenderOnu(olt.id, onu.onu_id, suspendida)),
                                children: suspendida ? 'Reactivar servicio' : 'Suspender servicio'
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex-1 text-[11px] leading-snug text-slate-500",
                                children: suspendida ? 'Vuelve a levantar en menos de un minuto.' : 'Es lo que corresponde para un corte por falta de pago: la configuración queda intacta y vuelve con un clic.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-slate-800 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            "Mover a otro puerto"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Placa",
                                className: "w-24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: GBA-1234",
                                    type: "number",
                                    value: destino.slot,
                                    onChange: (e)=>setDestino((d)=>({
                                                ...d,
                                                slot: e.target.value
                                            })),
                                    min: 0
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Puerto",
                                className: "w-24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 1",
                                    type: "number",
                                    value: destino.puerto,
                                    onChange: (e)=>setDestino((d)=>({
                                                ...d,
                                                puerto: e.target.value
                                            })),
                                    min: 0,
                                    max: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "alerta",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"],
                                cargando: trabajando === 'mover',
                                disabled: destino.puerto === '' || Number(destino.slot) === onu.slot && Number(destino.puerto) === onu.puerto,
                                onClick: async ()=>{
                                    if (!await confirmar("Mover la ONT de ".concat(onu.slot, "/").concat(onu.puerto, " a ").concat(destino.slot, "/").concat(destino.puerto, ".\n\n") + 'En Huawei no existe "mover": se borra y se vuelve a crear con la misma ' + 'configuración. El abonado queda sin servicio unos segundos.\n\n' + 'Y esto es solo la parte de software: si la fibra sigue en el puerto viejo, ' + 'la ONT no va a levantar.\n\n¿Continuar?')) {
                                        return;
                                    }
                                    correr('mover', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.moverOnu(olt.id, onu.onu_id, {
                                            slot: Number(destino.slot),
                                            puerto: Number(destino.puerto)
                                        }));
                                },
                                children: "Mover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-[11px] leading-snug text-slate-500",
                        children: "Se borra y se recrea con sus mismos perfiles, descripción, VLANs y velocidad. El ONT-ID puede cambiar: en el puerto nuevo se toma el primero libre."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-rose-500/30 bg-rose-500/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            "Dar de baja"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "peligro",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                cargando: trabajando === 'baja',
                                onClick: async ()=>{
                                    if (!await confirmar("Dar de baja la ONT ".concat(onu.sn).concat(onu.cliente ? " de ".concat(onu.cliente) : '', ".\n\n") + 'Se borran sus service-ports y la ONT del equipo. Es IRREVERSIBLE: para volver a ' + 'darle servicio hay que instalarla de nuevo.\n\n' + 'Si es un corte por falta de pago, usa Suspender.\n\n¿Continuar?')) {
                                        return;
                                    }
                                    correr('baja', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.darDeBajaOnu(olt.id, onu.onu_id));
                                },
                                children: "Dar de baja"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex-1 text-[11px] leading-snug text-rose-300/70",
                                children: [
                                    "Irreversible del lado del equipo. La ficha del abonado ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "no se toca"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                        lineNumber: 371,
                                        columnNumber: 68
                                    }, this),
                                    ": sigue existiendo sin ONU, con su historial de pagos y su contrato intactos."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            onCerrar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end border-t border-slate-800 pt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variante: "fantasma",
                    onClick: onCerrar,
                    children: "Cerrar"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                    lineNumber: 379,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/olt/AccionesOnu.jsx",
                lineNumber: 378,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/AccionesOnu.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(AccionesOnu, "u5ubdTe6oWY6h4PdP5p4XnNzO6k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c = AccionesOnu;
var _c;
__turbopack_context__.k.register(_c, "AccionesOnu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/GestionRemotaOnu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GestionRemotaOnu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
/**
 * La gestión remota de una ONT: perfil TR-069 e IP de gestión.
 *
 * ── Por qué las dos cosas en la misma ventana ──
 *
 * Porque no sirven por separado. El perfil dice CON QUÉ ACS habla la ONT; la IP
 * de gestión es POR DÓNDE llega hasta él. Un perfil sin IP no alcanza a nadie, y
 * una IP sin perfil deja la ONT accesible y sin quién la configure.
 *
 * En dos botones distintos, alguien hace la mitad y se va creyendo que terminó.
 *
 * ── Por qué se ve como SmartOLT y no como el resto del sistema ──
 *
 * Es a propósito: quien usa esto viene de mirar la misma ventana en SmartOLT
 * ("Update Management and VoIP IP") todos los días. Mismos campos, mismo
 * orden, mismos controles — para que no haya que aprender una pantalla nueva
 * encima de aprender un sistema nuevo. Los campos que SmartOLT ofrece y acá
 * todavía no se pueden tocar (interfaz por WAN, IP por DHCP, VoIP) se ven
 * IGUAL —el mismo botón de radio— pero bloqueados, con el motivo al lado: así
 * se sabe que no es un olvido, es que ese camino no está construido.
 *
 * ── Qué NO se pregunta ──
 *
 * La máscara, la puerta de enlace y los DNS de la IP de gestión. Salen de la
 * subred de gestión a la que pertenece la IP elegida, que el sistema ya tiene
 * cargada. Un gateway mal tipeado deja la ONT con IP y sin salida: se ve
 * configurada y no responde.
 */ /** Una fila de radio-botones, al estilo del panel de SmartOLT. */ function FilaRadio(param) {
    let { etiqueta, opciones, valor, onChange, nombre } = param;
    var _opciones_find;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 text-[13px] font-medium text-slate-700",
                children: etiqueta
            }, void 0, false, {
                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-x-6 gap-y-1.5",
                children: opciones.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-1.5 text-[13px] ".concat(o.disabled ? 'cursor-not-allowed text-slate-400' : 'cursor-pointer text-slate-700'),
                        title: o.motivo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: nombre,
                                checked: valor === o.valor,
                                disabled: o.disabled,
                                onChange: ()=>onChange === null || onChange === void 0 ? void 0 : onChange(o.valor),
                                className: "h-3.5 w-3.5 accent-sky-600 disabled:accent-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            o.label
                        ]
                    }, o.valor, true, {
                        fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            opciones.some((o)=>o.disabled && o.motivo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] text-slate-400",
                children: (_opciones_find = opciones.find((o)=>o.disabled && o.motivo)) === null || _opciones_find === void 0 ? void 0 : _opciones_find.motivo
            }, void 0, false, {
                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = FilaRadio;
/** Un desplegable, al estilo del panel de SmartOLT. */ function CampoSelect(param) {
    let { etiqueta, value, onChange, children, disabled, hint, obligatorio } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 text-[13px] font-medium text-slate-700",
                children: [
                    etiqueta,
                    obligatorio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-rose-600",
                        children: " *"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                        lineNumber: 77,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: onChange,
                disabled: disabled,
                className: "w-full rounded border border-slate-300 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 outline-none focus:border-sky-500 disabled:bg-slate-100 disabled:text-slate-400",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] text-slate-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                lineNumber: 87,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c1 = CampoSelect;
const TR069_INTERFAZ = [
    {
        valor: 'mgmt',
        label: 'via Mgmt IP'
    },
    {
        valor: 'wan',
        label: 'via WAN',
        disabled: true,
        motivo: 'No implementado en este sistema'
    }
];
const MGMT_IP_MODE = [
    {
        valor: 'inactive',
        label: 'Inactive'
    },
    {
        valor: 'static',
        label: 'Static IP'
    },
    {
        valor: 'dhcp',
        label: 'DHCP'
    }
];
const ACCESO_REMOTO = [
    {
        valor: 'no',
        label: 'No'
    },
    {
        valor: 'si',
        label: 'Sí, desde cualquier lado',
        disabled: true,
        motivo: 'No implementado'
    }
];
const VOIP = [
    {
        valor: 'off',
        label: 'Disabled'
    },
    {
        valor: 'on',
        label: 'Enabled (general switch)',
        disabled: true,
        motivo: 'VoIP no está implementado en este sistema'
    }
];
function GestionRemotaOnu(param) {
    let { olt, onu, actual, onListo, onCerrar } = param;
    var _resultado_ip;
    _s();
    const [perfiles, setPerfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pools, setPools] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [libres, setLibres] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [perfil, setPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((actual === null || actual === void 0 ? void 0 : actual.perfilId) != null ? String(actual.perfilId) : '');
    const [poolId, setPoolId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mgmtIpMode, setMgmtIpMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((actual === null || actual === void 0 ? void 0 : actual.ipConfigurada) ? 'static' : 'inactive');
    var _actual_ipConfigurada;
    const [ip, setIp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_actual_ipConfigurada = actual === null || actual === void 0 ? void 0 : actual.ipConfigurada) !== null && _actual_ipConfigurada !== void 0 ? _actual_ipConfigurada : '');
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * Los perfiles TR-069 de la OLT de la que cuelga esta ONT.
   *
   * ── Por qué de UNA sola OLT ──
   *
   * El panel general (`api.tr069.perfiles()`) le pregunta a TODAS y agrupa por
   * URL del ACS. Está bien para comparar equipos, pero cada consulta es una
   * sesión SSH de medio minuto: con tres OLTs, el desplegable de esta ventana
   * tardaba más de un minuto en habilitarse, y encima incluía una V-SOL que ni
   * siquiera sabe contestar eso.
   *
   * Acá interesa una sola cosa: qué perfiles tiene el equipo del que cuelga la
   * ONT. Ese número además es propio de cada OLT —el mismo GenieACS puede ser el
   * perfil 2 en una y el 5 en otra— así que preguntarle al equipo correcto no es
   * solo más rápido: es lo único que da el id que hay que mandar.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GestionRemotaOnu.useEffect": ()=>{
            let vivo = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.tr069DeLaOlt(olt.id).then({
                "GestionRemotaOnu.useEffect": (r)=>{
                    if (!vivo) return;
                    var _r_perfiles;
                    setPerfiles(((_r_perfiles = r === null || r === void 0 ? void 0 : r.perfiles) !== null && _r_perfiles !== void 0 ? _r_perfiles : []).map({
                        "GestionRemotaOnu.useEffect": (p)=>{
                            var _p_onts;
                            return {
                                nombre: p.nombre,
                                url: p.url,
                                profileId: p.id,
                                onts: (_p_onts = p.onts) !== null && _p_onts !== void 0 ? _p_onts : 0,
                                enEstaOlt: true
                            };
                        }
                    }["GestionRemotaOnu.useEffect"]));
                }
            }["GestionRemotaOnu.useEffect"]).catch({
                "GestionRemotaOnu.useEffect": ()=>vivo && setPerfiles([])
            }["GestionRemotaOnu.useEffect"]);
            return ({
                "GestionRemotaOnu.useEffect": ()=>{
                    vivo = false;
                }
            })["GestionRemotaOnu.useEffect"];
        }
    }["GestionRemotaOnu.useEffect"], [
        olt.id
    ]);
    /**
   * Los pools de gestión de ESTA OLT.
   *
   * Van por OLT porque cada una suele tener su propia VLAN de administración y
   * su propio bloque. Ofrecer los de otra dejaría la ONT con una dirección que
   * no enruta desde donde está colgada.
   *
   * Puede haber más de uno —una OLT con dos VLANs de gestión, por ejemplo— y
   * antes esta ventana solo miraba el primero sin dejar elegir. Se arranca en
   * el que ya tiene la VLAN configurada, si hay uno.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GestionRemotaOnu.useEffect": ()=>{
            let vivo = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_pools_onu').select('*').eq('olt_id', olt.id).then({
                "GestionRemotaOnu.useEffect": (param)=>{
                    let { data } = param;
                    if (!vivo) return;
                    const lista = data !== null && data !== void 0 ? data : [];
                    setPools(lista);
                    var _lista_find;
                    const elActual = (_lista_find = lista.find({
                        "GestionRemotaOnu.useEffect": (p)=>p.vlan === (actual === null || actual === void 0 ? void 0 : actual.vlanGestion)
                    }["GestionRemotaOnu.useEffect"])) !== null && _lista_find !== void 0 ? _lista_find : lista[0];
                    if (elActual) setPoolId(elActual.id);
                }
            }["GestionRemotaOnu.useEffect"]);
            return ({
                "GestionRemotaOnu.useEffect": ()=>{
                    vivo = false;
                }
            })["GestionRemotaOnu.useEffect"];
        }
    }["GestionRemotaOnu.useEffect"], [
        olt.id
    ]);
    var _pools_find, _ref;
    const pool = (_ref = (_pools_find = pools.find((p)=>p.id === poolId)) !== null && _pools_find !== void 0 ? _pools_find : pools[0]) !== null && _ref !== void 0 ? _ref : null;
    /**
   * Las direcciones libres del pool.
   *
   * Se muestran las libres MÁS la que la ONT ya tiene puesta: si solo se
   * listaran las libres, el desplegable arrancaría vacío para una ONT que sí
   * tiene IP, y parecería que hay que cambiársela.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GestionRemotaOnu.useEffect": ()=>{
            if (!(pool === null || pool === void 0 ? void 0 : pool.id)) return;
            let vivo = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ip_addresses').select('ip_address, estado')// `v_pools_onu.id` ES el id de la subred: la vista no renombra la clave.
            .eq('subred_id', pool.id).order('ip_address').then({
                "GestionRemotaOnu.useEffect": (param)=>{
                    let { data } = param;
                    if (!vivo) return;
                    const lista = (data !== null && data !== void 0 ? data : []).filter({
                        "GestionRemotaOnu.useEffect.lista": (d)=>d.estado === 'libre' || d.ip_address === (actual === null || actual === void 0 ? void 0 : actual.ipConfigurada)
                    }["GestionRemotaOnu.useEffect.lista"]).map({
                        "GestionRemotaOnu.useEffect.lista": (d)=>d.ip_address
                    }["GestionRemotaOnu.useEffect.lista"]);
                    setLibres(lista);
                }
            }["GestionRemotaOnu.useEffect"]);
            return ({
                "GestionRemotaOnu.useEffect": ()=>{
                    vivo = false;
                }
            })["GestionRemotaOnu.useEffect"];
        }
    }["GestionRemotaOnu.useEffect"], [
        pool === null || pool === void 0 ? void 0 : pool.id,
        actual === null || actual === void 0 ? void 0 : actual.ipConfigurada
    ]);
    const modoActual = (actual === null || actual === void 0 ? void 0 : actual.ipConfigurada) ? 'static' : 'inactive';
    const cambioPerfil = perfil !== '' && Number(perfil) !== Number(actual === null || actual === void 0 ? void 0 : actual.perfilId);
    const cambioModoIp = mgmtIpMode !== modoActual;
    const cambioIp = mgmtIpMode === 'static' && ip !== '' && ip !== (actual === null || actual === void 0 ? void 0 : actual.ipConfigurada);
    const puedeAplicarIp = mgmtIpMode === 'inactive' || mgmtIpMode === 'dhcp' || mgmtIpMode === 'static' && Boolean(ip);
    const hayCambio = cambioPerfil || (cambioModoIp || cambioIp) && puedeAplicarIp;
    async function guardar() {
        setGuardando(true);
        setError(null);
        setResultado(null);
        try {
            const cambiaIp = (cambioModoIp || cambioIp) && puedeAplicarIp;
            var _pool_vlan, _pool_vlan1;
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.gestionOnu(olt.id, onu.onu_id, {
                ...cambioPerfil ? {
                    profile_id: Number(perfil)
                } : {},
                ...cambiaIp && mgmtIpMode === 'static' ? {
                    ip,
                    vlan: (_pool_vlan = pool === null || pool === void 0 ? void 0 : pool.vlan) !== null && _pool_vlan !== void 0 ? _pool_vlan : undefined
                } : {},
                ...cambiaIp && mgmtIpMode === 'dhcp' ? {
                    modo: 'dhcp',
                    vlan: (_pool_vlan1 = pool === null || pool === void 0 ? void 0 : pool.vlan) !== null && _pool_vlan1 !== void 0 ? _pool_vlan1 : undefined
                } : {},
                ...cambiaIp && mgmtIpMode === 'inactive' ? {
                    modo: 'inactive'
                } : {}
            });
            setResultado(r);
            await (onListo === null || onListo === void 0 ? void 0 : onListo());
        } catch (err) {
            setError(err);
        } finally{
            setGuardando(false);
        }
    }
    var _pool_vlan, _pool_vlan1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        abierto: true,
        titulo: "Update Management and VoIP IP",
        onCerrar: onCerrar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "-m-5 rounded-b-xl bg-white p-5 text-slate-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                    error: error,
                    onCerrar: ()=>setError(null)
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 border-b border-slate-200 pb-1.5 text-[13px] font-semibold text-sky-700",
                    children: "TR069 Profile"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoSelect, {
                    etiqueta: "TR069 Profile",
                    value: perfil,
                    onChange: (e)=>setPerfil(e.target.value),
                    disabled: !perfiles,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: perfiles ? '— sin cambiar —' : 'consultando la OLT…'
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        (perfiles !== null && perfiles !== void 0 ? perfiles : []).map((p)=>{
                            var _p_profileId, _p_url;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: (_p_profileId = p.profileId) !== null && _p_profileId !== void 0 ? _p_profileId : '',
                                disabled: !p.enEstaOlt,
                                children: [
                                    p.nombre,
                                    p.url ? " · ".concat(p.url) : '',
                                    p.enEstaOlt ? " · perfil ".concat(p.profileId).concat(p.onts ? " · ".concat(p.onts, " ONTs") : '') : ' · no está creado en esta OLT'
                                ]
                            }, (_p_url = p.url) !== null && _p_url !== void 0 ? _p_url : p.nombre, true, {
                                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "Tr069 interface",
                    nombre: "tr069-interfaz",
                    opciones: TR069_INTERFAZ,
                    valor: "mgmt"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this),
                (perfiles === null || perfiles === void 0 ? void 0 : perfiles.length) === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 rounded border border-amber-300 bg-amber-50 px-3 py-2 text-[12px] text-amber-800",
                    children: "No hay ningún perfil TR-069 cargado. Se crea en Red → TR-069, apuntando al ACS —el GenieACS de ustedes, por ejemplo—. Sin perfil, la ONT queda alcanzable pero nadie la configura sola."
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 292,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 mt-4 border-b border-slate-200 pb-1.5 text-[13px] font-semibold text-sky-700",
                    children: "Mgmt IP"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "Mgmt IP mode",
                    nombre: "mgmt-ip-mode",
                    opciones: MGMT_IP_MODE,
                    valor: mgmtIpMode,
                    onChange: setMgmtIpMode
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "Allow remote access to Mgmt IP from everywhere",
                    nombre: "acceso-remoto",
                    opciones: ACCESO_REMOTO,
                    valor: "no"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this),
                mgmtIpMode === 'inactive' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 text-[11px] text-slate-400",
                    children: "La ONT queda sin IP de gestión: sigue dando servicio, pero nadie va a poder hablarle —ni el ACS, ni este sistema— hasta que se le vuelva a poner una."
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 319,
                    columnNumber: 11
                }, this),
                pools.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        pools.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoSelect, {
                            etiqueta: "Mgmt VLAN-ID",
                            value: poolId,
                            onChange: (e)=>setPoolId(e.target.value),
                            children: pools.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: p.id,
                                    children: [
                                        p.vlan,
                                        " · ",
                                        p.cidr
                                    ]
                                }, p.id, true, {
                                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                                    lineNumber: 339,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                            lineNumber: 333,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoSelect, {
                            etiqueta: "Mgmt VLAN-ID",
                            value: String((_pool_vlan = pool === null || pool === void 0 ? void 0 : pool.vlan) !== null && _pool_vlan !== void 0 ? _pool_vlan : ''),
                            disabled: true,
                            onChange: ()=>{},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: (_pool_vlan1 = pool === null || pool === void 0 ? void 0 : pool.vlan) !== null && _pool_vlan1 !== void 0 ? _pool_vlan1 : '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                                lineNumber: 346,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                            lineNumber: 345,
                            columnNumber: 15
                        }, this),
                        mgmtIpMode === 'static' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoSelect, {
                            etiqueta: "Management IP address",
                            value: ip,
                            onChange: (e)=>setIp(e.target.value),
                            disabled: !libres,
                            hint: libres ? "".concat(libres.length, " disponibles en ").concat(pool === null || pool === void 0 ? void 0 : pool.cidr) : 'buscando libres…',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— sin cambiar —"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                                    lineNumber: 358,
                                    columnNumber: 17
                                }, this),
                                (libres !== null && libres !== void 0 ? libres : []).map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: x,
                                        children: [
                                            x,
                                            x === (actual === null || actual === void 0 ? void 0 : actual.ipConfigurada) ? ' · la que tiene ahora' : ''
                                        ]
                                    }, x, true, {
                                        fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                                        lineNumber: 360,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                            lineNumber: 351,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 rounded border border-amber-300 bg-amber-50 px-3 py-2 text-[12px] text-amber-800",
                    children: "Esta OLT no tiene ningún pool de gestión cargado, así que no hay de dónde sacar una dirección. Se declara en Red → Redes IPv4, marcándolo como pool de gestión de ONUs."
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 369,
                    columnNumber: 11
                }, this),
                mgmtIpMode === 'static' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4 text-[11px] text-slate-400",
                    children: "La máscara, la puerta de enlace y los DNS salen del pool elegido arriba: no se piden acá para que nadie los tipee mal."
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 376,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 border-b border-slate-200 pb-1.5 text-[13px] font-semibold text-sky-700",
                    children: "VoIP service"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "VoIP service",
                    nombre: "voip",
                    opciones: VOIP,
                    valor: "off"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this),
                resultado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 rounded border border-sky-300 bg-sky-50 px-3 py-2 text-[12px] text-sky-800",
                    children: [
                        resultado.aviso,
                        ((_resultado_ip = resultado.ip) === null || _resultado_ip === void 0 ? void 0 : _resultado_ip.ip) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-1 block",
                            children: [
                                "Quedó en ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: resultado.ip.ip
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                                    lineNumber: 393,
                                    columnNumber: 26
                                }, this),
                                resultado.ip.vlan ? " · VLAN ".concat(resultado.ip.vlan) : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                            lineNumber: 392,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 389,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 border-t border-slate-200 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "fantasma",
                            onClick: onCerrar,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                            cargando: guardando,
                            disabled: !hayCambio,
                            onClick: guardar,
                            children: "Update"
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
            lineNumber: 258,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/olt/GestionRemotaOnu.jsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_s(GestionRemotaOnu, "U3xaMewk7XTYTIqArxlaUPG+Z6g=");
_c2 = GestionRemotaOnu;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FilaRadio");
__turbopack_context__.k.register(_c1, "CampoSelect");
__turbopack_context__.k.register(_c2, "GestionRemotaOnu");
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
"[project]/src/components/olt/ModoWanOnu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModoWanOnu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
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
 * Cómo sale a internet la ONT: el equivalente a "Update ONU mode" de SmartOLT.
 *
 * ── Lo que se configura acá y lo que NO ──
 *
 * En un MA5800 la WAN se arma con un PERFIL —`ont wan-profile`— que guarda dos
 * cosas y nada más: si la conexión es enrutada o puente, y si hace NAT. Después
 * ese perfil se le vincula a la ONT con `ont wan-config`.
 *
 * La dirección IP, la máscara, el gateway y los DNS de la WAN de servicio NO
 * están en el perfil. Se comprobó leyendo el que dejó otra herramienta:
 *
 *     Connection type : Route
 *     NAT switch      : Enable
 *
 * Esos datos se le mandan a la ONT por TR-069. Son dos transportes —SSH contra
 * la OLT, HTTP contra el ACS— con dos botones de Aplicar, uno para cada mitad:
 * mezclarlos en un solo click escondería cuál de los dos falló cuando algo no
 * aplica, que es información que a alguien parado en la escalera le importa.
 *
 * ── Por qué se ve como SmartOLT y no como el resto del sistema ──
 *
 * Es la misma ventana que "Update ONU mode": mismo orden, mismos campos, los
 * mismos botones de radio. Los que SmartOLT resuelve por OMCI y acá no se
 * pueden tocar —Config method, IP Protocol, WAN IP source, WAN remote
 * access— se ven bloqueados con el motivo al lado, no escondidos: para que se
 * sepa que es una limitación de hoy y no un campo que se perdió.
 *
 * ── Por qué el índice se elige ──
 *
 * Una ONT tiene varias WAN. La de gestión —la que usa TR-069— vive en su propio
 * índice, y pisarla la deja sin ACS: se ve online y no se la puede configurar
 * más. Por eso el índice se muestra y arranca en 1, que es la de servicio.
 */ const MODOS = [
    {
        valor: 'route',
        label: 'Routing'
    },
    {
        valor: 'bridge',
        label: 'Bridging'
    }
];
const MOTIVOS_TR069 = {
    sin_serie: 'Esta ONU no tiene número de serie cargado.',
    sin_acs: 'No hay servidor TR-069 configurado en este sistema.',
    acs_no_responde: 'El servidor TR-069 no respondió. Puede estar caído o sin camino de red.',
    equipo_desconocido: 'La ONT nunca se reportó al servidor TR-069: revisa el perfil, la IP de gestión, y si levantó la interfaz.'
};
const MODOS_WAN_TR069 = [
    {
        valor: 'dhcp',
        label: 'DHCP'
    },
    {
        valor: 'estatica',
        label: 'Static IP'
    },
    {
        valor: 'pppoe',
        label: 'PPPoE'
    }
];
const CONFIG_METHOD = [
    {
        valor: 'omci',
        label: 'OMCI',
        disabled: true,
        motivo: 'No implementado: hablar OMCI directo es un desarrollo aparte'
    },
    {
        valor: 'tr069',
        label: 'TR069'
    }
];
const IP_PROTOCOL = [
    {
        valor: 'ipv4',
        label: 'IPv4'
    },
    {
        valor: 'dual',
        label: 'Dual stack IPv4/IPv6',
        disabled: true,
        motivo: 'No implementado'
    }
];
const WAN_IP_SOURCE = [
    {
        valor: 'pool',
        label: 'From IP pool',
        disabled: true,
        motivo: 'No implementado: no hay pool de direcciones para la WAN de servicio'
    },
    {
        valor: 'manual',
        label: 'Manual IP'
    }
];
/** Una fila de radio-botones, al estilo del panel de SmartOLT. */ function FilaRadio(param) {
    let { etiqueta, opciones, valor, onChange, nombre } = param;
    var _opciones_find;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 text-[13px] font-medium text-slate-700",
                children: etiqueta
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-x-6 gap-y-1.5",
                children: opciones.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-1.5 text-[13px] ".concat(o.disabled ? 'cursor-not-allowed text-slate-400' : 'cursor-pointer text-slate-700'),
                        title: o.motivo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: nombre,
                                checked: valor === o.valor,
                                disabled: o.disabled,
                                onChange: ()=>onChange === null || onChange === void 0 ? void 0 : onChange(o.valor),
                                className: "h-3.5 w-3.5 accent-sky-600 disabled:accent-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            o.label
                        ]
                    }, o.valor, true, {
                        fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            opciones.some((o)=>o.disabled && o.motivo && valor !== o.valor) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] text-slate-400",
                children: (_opciones_find = opciones.find((o)=>o.disabled && o.motivo)) === null || _opciones_find === void 0 ? void 0 : _opciones_find.motivo
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c = FilaRadio;
/** Un desplegable, al estilo del panel de SmartOLT. */ function CampoSelect(param) {
    let { etiqueta, value, onChange, children, disabled, hint } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 text-[13px] font-medium text-slate-700",
                children: etiqueta
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: onChange,
                disabled: disabled,
                className: "w-full rounded border border-slate-300 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 outline-none focus:border-sky-500 disabled:bg-slate-100 disabled:text-slate-400",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] text-slate-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 125,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c1 = CampoSelect;
/** Un campo de texto, al estilo del panel de SmartOLT. */ const EJEMPLOS_WAN = {
    'Nombre del perfil': 'Ej.: INTERNET',
    NAT: 'Ej.: Activado',
    Username: 'Ej.: jperez01',
    Password: 'Clave PPPoE',
    'IPv4 Address': 'Ej.: 192.168.10.20',
    'Subnet Mask': 'Ej.: 255.255.255.0',
    'Default Gateway': 'Ej.: 192.168.10.1',
    'DNS 1': 'Ej.: 8.8.8.8',
    'DNS 2': 'Ej.: 1.1.1.1'
};
function CampoTexto(param) {
    let { etiqueta, value, onChange, type = 'text', hint } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 text-[13px] font-medium text-slate-700",
                children: etiqueta
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: onChange,
                placeholder: EJEMPLOS_WAN[etiqueta],
                className: "w-full rounded border border-slate-300 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 outline-none focus:border-sky-500"
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] text-slate-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                lineNumber: 148,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c2 = CampoTexto;
function ModoWanOnu(param) {
    let { olt, onu, onListo, onCerrar } = param;
    var _datos_tr069, _datos_conexiones, _datos_conexiones1, _datos_tr069_wan;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [datos, setDatos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- El formulario del modo/NAT (OLT) ---
    const [ipIndex, setIpIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [profileId, setProfileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [nuevo, setNuevo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [modo, setModo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('route');
    const [nat, setNat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    var _onu_vlan;
    const [vlan, setVlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_onu_vlan = onu.vlan) !== null && _onu_vlan !== void 0 ? _onu_vlan : '');
    // --- El formulario de TR-069 ---
    const [tr069Modo, setTr069Modo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dhcp');
    const [tr069Usuario, setTr069Usuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tr069Clave, setTr069Clave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tr069Ip, setTr069Ip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tr069Mascara, setTr069Mascara] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tr069Puerta, setTr069Puerta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tr069Dns1, setTr069Dns1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tr069Dns2, setTr069Dns2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [guardandoTr069, setGuardandoTr069] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorTr069, setErrorTr069] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resultadoTr069, setResultadoTr069] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModoWanOnu.useEffect": ()=>{
            let vivo = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.wanOnu(olt.id, onu.onu_id).then({
                "ModoWanOnu.useEffect": (r)=>{
                    var _r_tr069;
                    if (!vivo) return;
                    setDatos(r);
                    var _r_conexiones;
                    // Si ya tiene una WAN de servicio, se arranca sobre esa.
                    const servicio = ((_r_conexiones = r.conexiones) !== null && _r_conexiones !== void 0 ? _r_conexiones : []).find({
                        "ModoWanOnu.useEffect.servicio": (c)=>{
                            var _c_servicio;
                            return !/tr069/i.test((_c_servicio = c.servicio) !== null && _c_servicio !== void 0 ? _c_servicio : '');
                        }
                    }["ModoWanOnu.useEffect.servicio"]);
                    if ((servicio === null || servicio === void 0 ? void 0 : servicio.indice) != null) setIpIndex(servicio.indice);
                    // Lo que la ONT ya tiene puesto por TR-069, para no arrancar el
                    // formulario en blanco sobre un equipo que ya está configurado.
                    const wanTr069 = ((_r_tr069 = r.tr069) === null || _r_tr069 === void 0 ? void 0 : _r_tr069.gestionable) ? r.tr069.wan : null;
                    if (wanTr069 === null || wanTr069 === void 0 ? void 0 : wanTr069.modo) {
                        setTr069Modo(wanTr069.modo);
                        var _wanTr069_usuario;
                        setTr069Usuario((_wanTr069_usuario = wanTr069.usuario) !== null && _wanTr069_usuario !== void 0 ? _wanTr069_usuario : '');
                        var _wanTr069_ip;
                        setTr069Ip((_wanTr069_ip = wanTr069.ip) !== null && _wanTr069_ip !== void 0 ? _wanTr069_ip : '');
                        var _wanTr069_mascara;
                        setTr069Mascara((_wanTr069_mascara = wanTr069.mascara) !== null && _wanTr069_mascara !== void 0 ? _wanTr069_mascara : '');
                        var _wanTr069_puerta;
                        setTr069Puerta((_wanTr069_puerta = wanTr069.puerta) !== null && _wanTr069_puerta !== void 0 ? _wanTr069_puerta : '');
                        var _wanTr069_dns;
                        const [d1, d2] = String((_wanTr069_dns = wanTr069.dns) !== null && _wanTr069_dns !== void 0 ? _wanTr069_dns : '').split(',').map({
                            "ModoWanOnu.useEffect": (x)=>x.trim()
                        }["ModoWanOnu.useEffect"]);
                        setTr069Dns1(d1 !== null && d1 !== void 0 ? d1 : '');
                        setTr069Dns2(d2 !== null && d2 !== void 0 ? d2 : '');
                    }
                }
            }["ModoWanOnu.useEffect"]).catch({
                "ModoWanOnu.useEffect": (e)=>vivo && setError(e)
            }["ModoWanOnu.useEffect"]).finally({
                "ModoWanOnu.useEffect": ()=>vivo && setCargando(false)
            }["ModoWanOnu.useEffect"]);
            return ({
                "ModoWanOnu.useEffect": ()=>{
                    vivo = false;
                }
            })["ModoWanOnu.useEffect"];
        }
    }["ModoWanOnu.useEffect"], [
        olt.id,
        onu.onu_id
    ]);
    async function guardarTr069() {
        if (!await confirmar({
            titulo: 'Cambiar la WAN por TR-069',
            mensaje: "Se le escribe a la ONT ".concat(onu.sn, " su conexión de internet (").concat(tr069Modo, "). ") + 'El equipo puede quedarse sin salida unos segundos mientras aplica, y si el ACS no ' + 'tiene camino hasta él, el pedido queda guardado hasta que la ONT informe.',
            etiquetaAccion: 'Aplicar',
            variante: 'primario'
        })) {
            return;
        }
        setGuardandoTr069(true);
        setErrorTr069(null);
        setResultadoTr069(null);
        try {
            const dns = [
                tr069Dns1.trim(),
                tr069Dns2.trim()
            ].filter(Boolean).join(',');
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.configurarWanTr069Onu(olt.id, onu.onu_id, {
                modo: tr069Modo,
                usuario: tr069Modo === 'pppoe' ? tr069Usuario.trim() : undefined,
                clave: tr069Modo === 'pppoe' && tr069Clave ? tr069Clave : undefined,
                ip: tr069Modo === 'estatica' ? tr069Ip.trim() : undefined,
                mascara: tr069Modo === 'estatica' ? tr069Mascara.trim() : undefined,
                puerta: tr069Modo === 'estatica' ? tr069Puerta.trim() : undefined,
                dns: tr069Modo === 'estatica' ? dns : undefined,
                vlan: vlan || undefined
            });
            setTr069Clave('');
            setResultadoTr069(r);
        } catch (e) {
            setErrorTr069(e);
        } finally{
            setGuardandoTr069(false);
        }
    }
    var _datos_perfiles;
    const perfiles = (_datos_perfiles = datos === null || datos === void 0 ? void 0 : datos.perfiles) !== null && _datos_perfiles !== void 0 ? _datos_perfiles : [];
    const elegido = perfiles.find((p)=>String(p.id) === String(profileId));
    /** El primer número de perfil que no esté usado. */ const primeroLibre = ()=>{
        const usados = new Set(perfiles.map((p)=>p.id));
        for(let i = 0; i <= 255; i += 1)if (!usados.has(i)) return i;
        return null;
    };
    async function guardar() {
        const queda = nuevo ? "nuevo perfil ".concat(nombre || '(sin nombre)') : "perfil ".concat(profileId);
        if (!await confirmar({
            titulo: 'Cambiar cómo sale a internet esta ONT',
            mensaje: "La ONT ".concat(onu.sn, " va a quedar con ").concat(queda, ", en el índice ").concat(ipIndex, ".\n\n") + 'Esto cambia el servicio del abonado: si pasa de puente a enrutada deja de ' + 'entregar la IP que entregaba, y al revés.\n\n' + 'Puede quedarse sin internet unos minutos mientras se reconfigura.',
            etiquetaAccion: 'Aplicar',
            variante: 'primario'
        })) {
            return;
        }
        setGuardando(true);
        setError(null);
        setResultado(null);
        try {
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.configurarWanOnu(olt.id, onu.onu_id, {
                ip_index: Number(ipIndex),
                ...nuevo ? {
                    perfil: {
                        profileId: primeroLibre(),
                        nombre,
                        tipo: modo,
                        nat
                    }
                } : {
                    profile_id: Number(profileId)
                }
            });
            setResultado(r);
            await (onListo === null || onListo === void 0 ? void 0 : onListo());
        } catch (e) {
            setError(e);
        } finally{
            setGuardando(false);
        }
    }
    async function sacar() {
        if (!await confirmar({
            titulo: 'Sacarle la WAN a esta ONT',
            mensaje: "Se quita la configuración de WAN del índice ".concat(ipIndex, " en la OLT. El abonado puede ") + 'quedarse sin internet hasta que se le arme otra.',
            etiquetaAccion: 'Sacar la WAN',
            variante: 'peligro'
        })) {
            return;
        }
        setGuardando(true);
        setError(null);
        try {
            setResultado(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.configurarWanOnu(olt.id, onu.onu_id, {
                sacar: true,
                ip_index: Number(ipIndex)
            }));
            await (onListo === null || onListo === void 0 ? void 0 : onListo());
        } catch (e) {
            setError(e);
        } finally{
            setGuardando(false);
        }
    }
    const puedeAplicarTr069 = (datos === null || datos === void 0 ? void 0 : (_datos_tr069 = datos.tr069) === null || _datos_tr069 === void 0 ? void 0 : _datos_tr069.gestionable) && !(tr069Modo === 'pppoe' && (!tr069Usuario.trim() || !tr069Clave)) && !(tr069Modo === 'estatica' && (!tr069Ip.trim() || !tr069Mascara.trim() || !tr069Puerta.trim()));
    var _onu_modelo, _primeroLibre, _MOTIVOS_TR069_datos_tr069_motivo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        abierto: true,
        titulo: "Update ONU mode",
        onCerrar: onCerrar,
        ancho: "max-w-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "-m-5 rounded-b-xl bg-white p-5 text-slate-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                    error: error,
                    onCerrar: ()=>setError(null)
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this),
                cargando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] text-slate-500",
                    children: "Preguntándole al equipo…"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 342,
                    columnNumber: 22
                }, this),
                datos && !datos.soportado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4 rounded border border-amber-300 bg-amber-50 px-3 py-2 text-[12px] text-amber-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: (_onu_modelo = onu.modelo) !== null && _onu_modelo !== void 0 ? _onu_modelo : 'Este modelo'
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this),
                        " no declara sus interfaces IP por OMCI: desde la OLT no se le puede configurar la WAN. Se configura en la página web del equipo o por TR-069."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 345,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoSelect, {
                    etiqueta: "WAN VLAN-ID",
                    value: vlan,
                    disabled: true,
                    onChange: ()=>{},
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        children: vlan || '—'
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "-mt-2.5 mb-3.5 text-[11px] text-slate-400",
                    children: "Es la del puerto PON de esta ONT. Después de cambiarla revisa los puertos Ethernet."
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "ONU mode",
                    nombre: "onu-mode",
                    opciones: MODOS,
                    valor: modo,
                    onChange: setModo
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-1 rounded border border-slate-200 bg-slate-50 p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Perfil de la OLT que guarda el modo y el NAT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoSelect, {
                            etiqueta: "Perfil",
                            value: nuevo ? '__nuevo' : profileId,
                            onChange: (e)=>{
                                if (e.target.value === '__nuevo') {
                                    setNuevo(true);
                                    setNombre("wan_".concat(modo, "_vlan").concat(vlan || 'x'));
                                } else {
                                    setNuevo(false);
                                    setProfileId(e.target.value);
                                }
                            },
                            hint: (elegido === null || elegido === void 0 ? void 0 : elegido.vinculos) > 0 ? "Ese perfil ya lo usan ".concat(elegido.vinculos, " ONTs. Vincular esta no las toca, pero editarlo sí las cambiaría a todas.") : 'Guarda el modo y el NAT. Se comparte entre ONTs.',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— elige —"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                perfiles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p.id,
                                        children: [
                                            p.nombre,
                                            " (id ",
                                            p.id,
                                            ") · ",
                                            p.vinculos,
                                            " ONTs"
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "__nuevo",
                                    children: "Crear uno nuevo…"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this),
                        nuevo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoTexto, {
                                        etiqueta: "Nombre del perfil",
                                        value: nombre,
                                        onChange: (e)=>setNombre(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                        lineNumber: 400,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoSelect, {
                                    etiqueta: "NAT",
                                    value: nat ? 'si' : 'no',
                                    onChange: (e)=>setNat(e.target.value === 'si'),
                                    disabled: modo === 'bridge',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "si",
                                            children: "Habilitado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "no",
                                            children: "Deshabilitado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "self-end text-[11px] text-slate-400",
                                    children: [
                                        "Se va a crear con el número ",
                                        (_primeroLibre = primeroLibre()) !== null && _primeroLibre !== void 0 ? _primeroLibre : '—',
                                        ", el primero libre."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 398,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex flex-wrap justify-end gap-2",
                            children: [
                                (datos === null || datos === void 0 ? void 0 : (_datos_conexiones = datos.conexiones) === null || _datos_conexiones === void 0 ? void 0 : _datos_conexiones.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "peligro",
                                    cargando: guardando,
                                    onClick: sacar,
                                    children: "Sacar la WAN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                                    cargando: guardando,
                                    disabled: !nuevo && !profileId || (datos === null || datos === void 0 ? void 0 : datos.soportado) === false,
                                    onClick: guardar,
                                    children: "Aplicar modo/NAT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this),
                resultado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4 mt-2 rounded border border-sky-300 bg-sky-50 px-3 py-2 text-[12px] text-sky-800",
                    children: [
                        resultado.aviso,
                        resultado.comando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-1 block font-mono text-[11px] opacity-70",
                            children: resultado.comando
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 433,
                            columnNumber: 35
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 431,
                    columnNumber: 11
                }, this),
                (datos === null || datos === void 0 ? void 0 : (_datos_conexiones1 = datos.conexiones) === null || _datos_conexiones1 === void 0 ? void 0 : _datos_conexiones1.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: "cursor-pointer text-[11px] text-slate-400",
                            children: [
                                "Ver lo que tiene ahora (",
                                datos.conexiones.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 439,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-2",
                            children: datos.conexiones.map((c)=>{
                                var _c_servicio;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded border border-slate-200 bg-slate-50 p-2 text-[11px] text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: [
                                                        "índice ",
                                                        c.indice
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                                    lineNumber: 446,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: c.servicio
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                                    lineNumber: 447,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: [
                                                        c.tipoConexion,
                                                        " · VLAN ",
                                                        c.vlan,
                                                        " · NAT ",
                                                        c.nat
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                                    lineNumber: 448,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                            lineNumber: 445,
                                            columnNumber: 19
                                        }, this),
                                        c.ipv4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 font-mono",
                                            children: [
                                                c.accesoIpv4,
                                                " ",
                                                c.ipv4,
                                                " / ",
                                                c.mascara,
                                                " · gw ",
                                                c.gateway,
                                                c.dns1 ? " · dns ".concat(c.dns1).concat(c.dns2 ? ", ".concat(c.dns2) : '') : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                            lineNumber: 453,
                                            columnNumber: 21
                                        }, this),
                                        /tr069/i.test((_c_servicio = c.servicio) !== null && _c_servicio !== void 0 ? _c_servicio : '') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 flex items-start gap-1.5 text-amber-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    size: 12,
                                                    className: "mt-0.5 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                                    lineNumber: 460,
                                                    columnNumber: 23
                                                }, this),
                                                "Es la de gestión. Pisar este índice deja la ONT sin TR-069."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                            lineNumber: 459,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, c.indice, true, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 444,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 438,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "mb-4 border-slate-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 470,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "WAN mode",
                    nombre: "wan-mode-tr069",
                    opciones: MODOS_WAN_TR069,
                    valor: tr069Modo,
                    onChange: setTr069Modo
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 473,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "Config method",
                    nombre: "config-method",
                    opciones: CONFIG_METHOD,
                    valor: "tr069"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 481,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "IP Protocol",
                    nombre: "ip-protocol",
                    opciones: IP_PROTOCOL,
                    valor: "ipv4"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 482,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilaRadio, {
                    etiqueta: "WAN IP source",
                    nombre: "wan-ip-source",
                    opciones: WAN_IP_SOURCE,
                    valor: "manual"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 483,
                    columnNumber: 9
                }, this),
                !(datos === null || datos === void 0 ? void 0 : datos.tr069) ? null : !datos.tr069.gestionable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 rounded border border-amber-300 bg-amber-50 px-3 py-2 text-[12px] text-amber-800",
                    children: (_MOTIVOS_TR069_datos_tr069_motivo = MOTIVOS_TR069[datos.tr069.motivo]) !== null && _MOTIVOS_TR069_datos_tr069_motivo !== void 0 ? _MOTIVOS_TR069_datos_tr069_motivo : 'No se puede llegar a la ONT por TR-069.'
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 486,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        ((_datos_tr069_wan = datos.tr069.wan) === null || _datos_tr069_wan === void 0 ? void 0 : _datos_tr069_wan.estado) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-3 text-[11px] text-slate-400",
                            children: [
                                "Hoy: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-slate-600",
                                    children: datos.tr069.wan.modo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 493,
                                    columnNumber: 22
                                }, this),
                                ' · ',
                                datos.tr069.wan.estado,
                                datos.tr069.ultimo_contacto ? " · último contacto ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(datos.tr069.ultimo_contacto)) : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 492,
                            columnNumber: 15
                        }, this),
                        tr069Modo === 'pppoe' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoTexto, {
                                    etiqueta: "Username",
                                    value: tr069Usuario,
                                    onChange: (e)=>setTr069Usuario(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 504,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoTexto, {
                                    etiqueta: "Password",
                                    type: "password",
                                    value: tr069Clave,
                                    onChange: (e)=>setTr069Clave(e.target.value),
                                    hint: "El equipo nunca la devuelve: hay que volver a escribirla"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 505,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 503,
                            columnNumber: 15
                        }, this),
                        tr069Modo === 'estatica' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoTexto, {
                                    etiqueta: "IPv4 Address",
                                    value: tr069Ip,
                                    onChange: (e)=>setTr069Ip(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 517,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoTexto, {
                                    etiqueta: "Subnet Mask",
                                    value: tr069Mascara,
                                    onChange: (e)=>setTr069Mascara(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 518,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoTexto, {
                                    etiqueta: "Default Gateway",
                                    value: tr069Puerta,
                                    onChange: (e)=>setTr069Puerta(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 519,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 520,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoTexto, {
                                    etiqueta: "DNS 1",
                                    value: tr069Dns1,
                                    onChange: (e)=>setTr069Dns1(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 521,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoTexto, {
                                    etiqueta: "DNS 2",
                                    value: tr069Dns2,
                                    onChange: (e)=>setTr069Dns2(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                    lineNumber: 522,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 516,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampoSelect, {
                            etiqueta: "WAN remote access",
                            value: "no",
                            disabled: true,
                            onChange: ()=>{},
                            hint: "No implementado en este sistema",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "No disponible"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                                lineNumber: 527,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 526,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                            error: errorTr069,
                            onCerrar: ()=>setErrorTr069(null)
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 530,
                            columnNumber: 13
                        }, this),
                        resultadoTr069 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 rounded border px-3 py-2 text-[12px] ".concat(resultadoTr069.aplicado ? 'border-sky-300 bg-sky-50 text-sky-800' : 'border-amber-300 bg-amber-50 text-amber-800'),
                            children: resultadoTr069.aviso
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 533,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-end gap-2 border-t border-slate-200 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "fantasma",
                            onClick: onCerrar,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                            cargando: guardandoTr069,
                            disabled: !puedeAplicarTr069,
                            onClick: guardarTr069,
                            children: "Update"
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
                    lineNumber: 546,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
            lineNumber: 339,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/olt/ModoWanOnu.jsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_s(ModoWanOnu, "/nAFH3maz9b9hYgortMPy1p0fOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c3 = ModoWanOnu;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FilaRadio");
__turbopack_context__.k.register(_c1, "CampoSelect");
__turbopack_context__.k.register(_c2, "CampoTexto");
__turbopack_context__.k.register(_c3, "ModoWanOnu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/HistorialOptico.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HistorialOptico
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/optica.js [app-client] (ecmascript)");
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
 * Serie de potencia óptica de una ONT.
 *
 * Lo que se viene a mirar acá no es el número de hoy —ese ya está en la tabla—
 * sino la PENDIENTE. Una fibra que se degrada, un conector sucio o un empalme
 * soltándose bajan de a poco durante semanas antes de cortar. Con la lectura
 * suelta no se ven; con la línea, sí.
 *
 * Dibujado a mano en SVG en vez de traer una librería de gráficos: son cuatro
 * cálculos y una polilínea.
 */ const ALTO = 120;
const ANCHO = 520;
function HistorialOptico(param) {
    let { onuId, nombre } = param;
    _s();
    const [puntos, setPuntos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HistorialOptico.useCallback[cargar]": async ()=>{
            const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('onu_optica_historial').select('rx_dbm, tx_dbm, medida_at').eq('onu_id', onuId).not('rx_dbm', 'is', null).order('medida_at', {
                ascending: true
            }).limit(500);
            if (err) {
                setError(err.code === '42P01' ? {
                    message: 'Falta la tabla de historial óptico',
                    hint: 'Ejecuta la migración 41.'
                } : err);
                setPuntos([]);
                return;
            }
            setPuntos((data !== null && data !== void 0 ? data : []).map({
                "HistorialOptico.useCallback[cargar]": (d)=>({
                        rx: Number(d.rx_dbm),
                        at: new Date(d.medida_at)
                    })
            }["HistorialOptico.useCallback[cargar]"]));
        }
    }["HistorialOptico.useCallback[cargar]"], [
        onuId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HistorialOptico.useEffect": ()=>{
            cargar();
        }
    }["HistorialOptico.useEffect"], [
        cargar
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-3 text-xs text-amber-300",
            children: [
                error.message,
                error.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-500",
                    children: [
                        " — ",
                        error.hint
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                    lineNumber: 56,
                    columnNumber: 24
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/HistorialOptico.jsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    if (!puntos) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {
        texto: "Buscando el historial…"
    }, void 0, false, {
        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
        lineNumber: 60,
        columnNumber: 23
    }, this);
    if (puntos.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-3 text-xs leading-relaxed text-slate-500",
            children: "Todavía no hay historial de esta ONT. Se va llenando con cada lectura de óptica: se guarda un punto cuando la señal se mueve medio dB o cuando pasan seis horas, así la serie muestra los cambios sin llenarse de repeticiones."
        }, void 0, false, {
            fileName: "[project]/src/components/olt/HistorialOptico.jsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    if (puntos.length === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-3 text-xs leading-relaxed text-slate-500",
            children: [
                "Un solo punto: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    className: "text-slate-300",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(puntos[0].rx)
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                    lineNumber: 75,
                    columnNumber: 24
                }, this),
                " el",
                ' ',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(puntos[0].at),
                ". Hace falta al menos una lectura más para poder hablar de tendencia — con una sola no se puede saber si viene bajando."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/HistorialOptico.jsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    // Escala. Se deja siempre visible el umbral, aunque la ONT esté lejos: sin él
    // no se ve cuánto margen queda.
    const valores = puntos.map((p)=>p.rx);
    const min = Math.min(...valores, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"]) - 1;
    const max = Math.max(...valores, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"] + 2) + 1;
    const t0 = puntos[0].at.getTime();
    const t1 = puntos[puntos.length - 1].at.getTime();
    const rangoT = Math.max(t1 - t0, 1);
    const x = (p)=>(p.at.getTime() - t0) / rangoT * (ANCHO - 40) + 34;
    // Más negativo = peor = más abajo.
    const y = (v)=>ALTO - 18 - (v - min) / (max - min) * (ALTO - 34);
    const linea = puntos.map((p)=>"".concat(x(p).toFixed(1), ",").concat(y(p.rx).toFixed(1))).join(' ');
    const delta = puntos[puntos.length - 1].rx - puntos[0].rx;
    const dias = Math.max(Math.round(rangoT / 86400000), 1);
    const Icono = delta <= -1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"] : delta >= 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"];
    const colorDelta = delta <= -3 ? 'text-rose-400' : delta <= -1 ? 'text-amber-400' : 'text-slate-400';
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nivel"])(puntos[puntos.length - 1].rx);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-400",
                        children: [
                            nombre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: [
                                    nombre,
                                    " · "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                                lineNumber: 107,
                                columnNumber: 22
                            }, this),
                            puntos.length,
                            " lecturas en ",
                            dias,
                            " ",
                            dias === 1 ? 'día' : 'días'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 ".concat(colorDelta),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            delta > 0 ? '+' : '',
                            delta.toFixed(2),
                            " dB",
                            delta <= -3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "ml-1",
                                children: "— viene degradándose"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                                lineNumber: 114,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: n.punto === 'bg-rose-500' ? 'text-rose-300' : 'text-slate-400',
                        children: [
                            "ahora ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(puntos[puntos.length - 1].rx)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 ".concat(ANCHO, " ").concat(ALTO),
                className: "w-full t-panel",
                preserveAspectRatio: "none",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"] >= min && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"] <= max && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "34",
                                x2: ANCHO - 6,
                                y1: y(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"]),
                                y2: y(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"]),
                                stroke: "rgb(244 63 94 / 0.5)",
                                strokeDasharray: "4 3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "36",
                                y: y(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"]) - 3,
                                fill: "rgb(244 63 94 / 0.7)",
                                fontSize: "8",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"],
                                    " dBm"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "2",
                        y: y(max) + 8,
                        fill: "rgb(100 116 139)",
                        fontSize: "8",
                        children: max.toFixed(0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "2",
                        y: y(min),
                        fill: "rgb(100 116 139)",
                        fontSize: "8",
                        children: min.toFixed(0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: linea,
                        fill: "none",
                        stroke: "rgb(56 189 248)",
                        strokeWidth: "1.5",
                        vectorEffect: "non-scaling-stroke"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    puntos.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: x(p),
                            cy: y(p.rx),
                            r: "2",
                            fill: p.rx < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMBRAL_DBM"] ? 'rgb(244 63 94)' : 'rgb(56 189 248)',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(p.at), " — ").concat(p.rx.toFixed(2), " dBm")
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-[10px] text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: puntos[0].at.toLocaleDateString('es-EC')
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: puntos[puntos.length - 1].at.toLocaleDateString('es-EC')
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/HistorialOptico.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/HistorialOptico.jsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(HistorialOptico, "wMBmqmrNaaBFJ2eII9FmeFGBvwI=");
_c = HistorialOptico;
var _c;
__turbopack_context__.k.register(_c, "HistorialOptico");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/TraficoVivo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TraficoVivo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
/**
 * La velocidad del abonado, ahora.
 *
 * El equipo no informa velocidad: informa bytes acumulados desde que se creó el
 * service-port. La velocidad sale de restar dos lecturas, así que la primera
 * NUNCA puede dar un número — y eso se dice, en vez de dibujar un cero. Un
 * gráfico que arranca en cero se lee como "no está consumiendo nada", que es lo
 * contrario de "todavía no lo sé".
 *
 * Cada muestra cuesta una sesión SSH contra la OLT, así que arranca detenido y
 * se para solo al salir de la pantalla. Dejarlo corriendo olvidado consumiría
 * las pocas sesiones que tiene el equipo.
 */ const INTERVALO_MS = 5000;
const MUESTRAS = 40;
function TraficoVivo(param) {
    let { oltId, onuId } = param;
    var _ultimo_service_ports;
    _s();
    const [corriendo, setCorriendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serie, setSerie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ultimo, setUltimo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vivo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TraficoVivo.useEffect": ()=>{
            vivo.current = true;
            return ({
                "TraficoVivo.useEffect": ()=>{
                    vivo.current = false;
                    clearTimeout(timer.current);
                }
            })["TraficoVivo.useEffect"];
        }
    }["TraficoVivo.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TraficoVivo.useEffect": ()=>{
            if (!corriendo) {
                clearTimeout(timer.current);
                return;
            }
            let cancelado = false;
            const tomar = {
                "TraficoVivo.useEffect.tomar": async ()=>{
                    try {
                        const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.traficoOnu(oltId, onuId);
                        if (cancelado || !vivo.current) return;
                        setError(null);
                        setUltimo(r);
                        if (!r.primera_lectura) {
                            setSerie({
                                "TraficoVivo.useEffect.tomar": (s)=>[
                                        ...s,
                                        {
                                            at: r.at,
                                            subida: r.subida_mbps,
                                            bajada: r.bajada_mbps
                                        }
                                    ].slice(-MUESTRAS)
                            }["TraficoVivo.useEffect.tomar"]);
                        }
                    } catch (err) {
                        if (cancelado || !vivo.current) return;
                        setError(err);
                        setCorriendo(false);
                        return;
                    }
                    // Se encadena en vez de usar un intervalo fijo: si una lectura tarda ocho
                    // segundos, un setInterval de cinco largaría la siguiente antes de que
                    // vuelva la anterior y terminarían apilándose sesiones contra la OLT.
                    if (!cancelado && vivo.current) timer.current = setTimeout(tomar, INTERVALO_MS);
                }
            }["TraficoVivo.useEffect.tomar"];
            tomar();
            return ({
                "TraficoVivo.useEffect": ()=>{
                    cancelado = true;
                    clearTimeout(timer.current);
                }
            })["TraficoVivo.useEffect"];
        }
    }["TraficoVivo.useEffect"], [
        corriendo,
        oltId,
        onuId
    ]);
    const max = Math.max(1, ...serie.flatMap((p)=>{
        var _p_subida, _p_bajada;
        return [
            (_p_subida = p.subida) !== null && _p_subida !== void 0 ? _p_subida : 0,
            (_p_bajada = p.bajada) !== null && _p_bajada !== void 0 ? _p_bajada : 0
        ];
    }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            "Consumo en vivo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: corriendo ? 'alerta' : 'primario',
                        icon: corriendo ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"],
                        onClick: ()=>setCorriendo((c)=>!c),
                        children: corriendo ? 'Detener' : 'Ver en vivo'
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: error.message
            }, void 0, false, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 93,
                columnNumber: 17
            }, this),
            corriendo && (ultimo === null || ultimo === void 0 ? void 0 : ultimo.primera_lectura) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: "Primera lectura tomada. El equipo informa bytes acumulados, así que la velocidad aparece recién con la segunda — en unos segundos."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            ((ultimo === null || ultimo === void 0 ? void 0 : ultimo.bajada_mbps) != null || serie.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Medida, {
                        titulo: "Bajada",
                        valor: ultimo === null || ultimo === void 0 ? void 0 : ultimo.bajada_mbps,
                        color: "text-sky-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Medida, {
                        titulo: "Subida",
                        valor: ultimo === null || ultimo === void 0 ? void 0 : ultimo.subida_mbps,
                        color: "text-emerald-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 103,
                columnNumber: 9
            }, this),
            serie.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-panel p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 ".concat(MUESTRAS, " 40"),
                        preserveAspectRatio: "none",
                        className: "h-24 w-full",
                        children: [
                            'bajada',
                            'subida'
                        ].map((cual)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                fill: "none",
                                strokeWidth: "1",
                                vectorEffect: "non-scaling-stroke",
                                className: cual === 'bajada' ? 'stroke-sky-400' : 'stroke-emerald-400',
                                points: serie.map((p, i)=>{
                                    var _p_cual;
                                    return "".concat(i + (MUESTRAS - serie.length), ",").concat(40 - ((_p_cual = p[cual]) !== null && _p_cual !== void 0 ? _p_cual : 0) / max * 38);
                                }).join(' ')
                            }, cual, false, {
                                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-[10px] text-slate-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    serie.length,
                                    " muestras · cada ",
                                    INTERVALO_MS / 1000,
                                    " s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "pico ",
                                    max.toFixed(1),
                                    " Mbps"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 110,
                columnNumber: 9
            }, this),
            (ultimo === null || ultimo === void 0 ? void 0 : (_ultimo_service_ports = ultimo.service_ports) === null || _ultimo_service_ports === void 0 ? void 0 : _ultimo_service_ports.some((s)=>s.bajada_descartados > 0 || s.subida_descartados > 0)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] leading-snug text-slate-500",
                children: [
                    "El equipo también cuenta paquetes descartados:",
                    ' ',
                    ultimo.service_ports.map((s)=>{
                        var _s_bajada_descartados, _s_subida_descartados;
                        return "vlan ".concat(s.vlan, ": ").concat((_s_bajada_descartados = s.bajada_descartados) !== null && _s_bajada_descartados !== void 0 ? _s_bajada_descartados : 0, " bajada / ").concat((_s_subida_descartados = s.subida_descartados) !== null && _s_subida_descartados !== void 0 ? _s_subida_descartados : 0, " subida");
                    }).join(' · '),
                    ". Son acumulados desde el alta, no de ahora."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            !corriendo && serie.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] leading-snug text-slate-500",
                children: "Cada muestra es una consulta a la OLT, por eso no arranca solo. Se detiene al salir de esta pantalla."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 143,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/TraficoVivo.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(TraficoVivo, "FOjT8MGQKVn7125aHdOK0ANRlr4=");
_c = TraficoVivo;
function Medida(param) {
    let { titulo, valor, color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "t-panel px-3 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-slate-500",
                children: titulo
            }, void 0, false, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl font-semibold ".concat(color),
                children: valor == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-600",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                    lineNumber: 157,
                    columnNumber: 26
                }, this) : "".concat(valor.toFixed(2), " Mbps")
            }, void 0, false, {
                fileName: "[project]/src/components/olt/TraficoVivo.jsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/TraficoVivo.jsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c1 = Medida;
var _c, _c1;
__turbopack_context__.k.register(_c, "TraficoVivo");
__turbopack_context__.k.register(_c1, "Medida");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/PuertosOnt.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PuertosOnt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cable$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cable.js [app-client] (ecmascript) <export default as Cable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function PuertosOnt(param) {
    let { oltId, onuId } = param;
    var _r_con_bucle, _r_telefonos_con_problema, _datos_problemas;
    _s();
    const [datos, setDatos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [leyendo, setLeyendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function leer() {
        setLeyendo(true);
        setError(null);
        try {
            setDatos(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.puertosOnu(oltId, onuId));
        } catch (err) {
            setError(err);
        } finally{
            setLeyendo(false);
        }
    }
    const r = datos === null || datos === void 0 ? void 0 : datos.resumen;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            !datos ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cable$3e$__["Cable"],
                        cargando: leyendo,
                        onClick: leer,
                        children: "Ver los puertos de la ONT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-[11px] leading-snug text-slate-500",
                        children: "Se le pregunta al equipo en vivo. Con la ONT caída no puede contestar."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500",
                                children: [
                                    r.ethernet_conectados,
                                    " de ",
                                    r.ethernet_total,
                                    " puertos con algo enchufado",
                                    r.telefonos > 0 && " · ".concat(r.telefonos_registrados, " de ").concat(r.telefonos, " teléfonos registrados")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                cargando: leyendo,
                                onClick: leer,
                                children: "Volver a leer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    r.ninguno_conectado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        tipo: "alerta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "No hay nada enchufado en ningún puerto."
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            " Si el abonado reclama que no tiene internet, el problema está de su router para adentro — o usa solo wifi, que también es normal. En cualquier caso no hay nada que revisar en la red."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    ((_r_con_bucle = r.con_bucle) === null || _r_con_bucle === void 0 ? void 0 : _r_con_bucle.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        tipo: "alerta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Cable en bucle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this),
                            " en el puerto ",
                            r.con_bucle.join(', '),
                            ". Es un cable de la casa enchufado en dos bocas del mismo equipo: tira abajo la red del abonado y a veces satura el puerto PON entero."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this),
                    ((_r_telefonos_con_problema = r.telefonos_con_problema) === null || _r_telefonos_con_problema === void 0 ? void 0 : _r_telefonos_con_problema.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        tipo: "alerta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "El teléfono no está registrado."
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            ' ',
                            r.telefonos_con_problema.map((t)=>"puerto ".concat(t.puerto, ": ").concat(t.estado)).join(' · '),
                            ". Desde afuera se ve igual que uno que funciona: la ONT está online y el puerto existe, pero la línea no llegó a registrarse."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this),
                    ((_datos_problemas = datos.problemas) === null || _datos_problemas === void 0 ? void 0 : _datos_problemas.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        tipo: "alerta",
                        children: [
                            "No se pudo leer todo: ",
                            datos.problemas.join(' · ')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    datos.ethernet.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cable$3e$__["Cable"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    "Puertos ethernet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                columnas: [
                                    'Puerto',
                                    'Tipo',
                                    'Estado',
                                    'Velocidad',
                                    'Duplex',
                                    'Bucle'
                                ],
                                filas: datos.ethernet,
                                renderFila: (p)=>{
                                    var _p_duplex;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 font-mono text-xs",
                                                children: [
                                                    "eth ",
                                                    p.puerto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 text-xs",
                                                children: p.tipo
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    color: p.conectado ? 'verde' : 'gris',
                                                    children: p.conectado ? 'conectado' : 'sin nada'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 23
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 text-xs",
                                                children: p.velocidad_mbps == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-600",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 25
                                                }, void 0) : "".concat(p.velocidad_mbps, " Mbps")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 text-xs",
                                                children: (_p_duplex = p.duplex) !== null && _p_duplex !== void 0 ? _p_duplex : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-600",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 36
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 text-xs",
                                                children: p.bucle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1 text-rose-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                            lineNumber: 121,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        " ",
                                                        p.anillo
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 25
                                                }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-600",
                                                    children: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 25
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, void 0)
                                        ]
                                    }, p.puerto, true, {
                                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, void 0);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this),
                    datos.telefonia.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    "Teléfono"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                columnas: [
                                    'Puerto',
                                    'Físico',
                                    'Gancho',
                                    'Registro',
                                    'Códec'
                                ],
                                filas: datos.telefonia,
                                renderFila: (p)=>{
                                    var _p_gancho;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 font-mono text-xs",
                                                children: [
                                                    "pots ",
                                                    p.puerto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 text-xs",
                                                children: p.estado_fisico
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 text-xs",
                                                children: [
                                                    p.gancho,
                                                    /^offhook$/i.test((_p_gancho = p.gancho) !== null && _p_gancho !== void 0 ? _p_gancho : '') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1 text-[11px] text-amber-400",
                                                        children: "descolgado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 25
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 146,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    color: p.registrado ? 'verde' : 'rojo',
                                                    children: p.registro
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 154,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-1.5 text-xs",
                                                children: p.codec
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, void 0)
                                        ]
                                    }, p.puerto, true, {
                                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, void 0);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this),
                    datos.ethernet.length === 0 && datos.telefonia.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "py-4 text-center text-sm text-slate-500",
                        children: "El equipo no devolvió puertos. Suele pasar con la ONT caída: son consultas OMCI en vivo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/PuertosOnt.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(PuertosOnt, "OU+YtwAs3ciFJqL/sxqo8DlG/NQ=");
_c = PuertosOnt;
var _c;
__turbopack_context__.k.register(_c, "PuertosOnt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/olt/OnuDetallePage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnuDetallePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cable$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cable.js [app-client] (ecmascript) <export default as Cable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code-2.js [app-client] (ecmascript) <export default as FileCode2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.js [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/router.js [app-client] (ecmascript) <export default as Router>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/signal.js [app-client] (ecmascript) <export default as Signal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/optica.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/olts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$AccionesOnu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/AccionesOnu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$GestionRemotaOnu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/GestionRemotaOnu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$ModoWanOnu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/ModoWanOnu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$HistorialOptico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/HistorialOptico.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$TraficoVivo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/TraficoVivo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$PuertosOnt$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/PuertosOnt.jsx [app-client] (ecmascript)");
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
function OnuDetallePage() {
    var _wan_conexiones, _ficha_problemas, _equipo_servicePorts, _tr069_diagnostico;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [fila, setFila] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Las características del modelo, con su foto. Se resuelven por el texto que
    // reportó el equipo: el vínculo explícito casi nunca está puesto.
    const [tipo, setTipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Si la primera carga terminó. Sin esto no hay forma de distinguir "todavía no
    // llegó" de "ya no existe", y una ONU recién dada de baja dejaba la pantalla
    // diciendo "Cargando…" para siempre.
    const [cargado, setCargado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dadaDeBaja, setDadaDeBaja] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ficha, setFicha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [leyendo, setLeyendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trabajando, setTrabajando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [acciones, setAcciones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [planes, setPlanes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [configActiva, setConfigActiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [software, setSoftware] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tr069, setTr069] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [gestion, setGestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modoWan, setModoWan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wan, setWan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cargarBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OnuDetallePage.useCallback[cargarBase]": async ()=>{
            const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_onus_clientes').select('*').eq('onu_id', id).maybeSingle();
            setCargado(true);
            if (err) return setError(err);
            /**
     * Lo óptico que la vista no trae, leído de la tabla.
     *
     * `v_onus_clientes` enumera sus columnas una por una, así que agregar una a
     * `onus` NO la agrega a la vista: la migración corre, el middleware la
     * escribe, y la pantalla sigue leyendo `undefined`. Ya nos pasó con la
     * aceptación del anexo 2 en el contrato.
     *
     * Se lee de la tabla en vez de rehacer la vista —que además une con
     * clientes— porque es una consulta más contra tres campos, y recrear una
     * vista de casi cincuenta columnas para sumar dos es mucho más riesgoso.
     */ const { data: extra } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('onus').select('olt_rx_power_dbm, temperatura_c, distancia_m').eq('id', id).maybeSingle();
            setFila(extra ? {
                ...data,
                ...extra
            } : data);
            // Falla en silencio: no saber el modelo no tiene por qué romper la ficha.
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_onu_tipo').select('*').eq('onu_id', id).maybeSingle().then({
                "OnuDetallePage.useCallback[cargarBase]": (param)=>{
                    let { data: t } = param;
                    return setTipo((t === null || t === void 0 ? void 0 : t.tipo_id) ? t : null);
                }
            }["OnuDetallePage.useCallback[cargarBase]"]);
        }
    }["OnuDetallePage.useCallback[cargarBase]"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnuDetallePage.useEffect": ()=>{
            cargarBase();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('planes_velocidad').select('*').order('bajada_kbps').then({
                "OnuDetallePage.useEffect": (param)=>{
                    let { data } = param;
                    return setPlanes(data !== null && data !== void 0 ? data : []);
                }
            }["OnuDetallePage.useEffect"]);
        }
    }["OnuDetallePage.useEffect"], [
        cargarBase
    ]);
    /** Preguntarle al equipo cuesta una sesión SSH, así que va con su botón. */ async function preguntarAlEquipo() {
        if (!fila) return;
        setLeyendo(true);
        setError(null);
        try {
            setFicha(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.fichaOnu(fila.olt_id, id));
        } catch (err) {
            setError(err);
        } finally{
            setLeyendo(false);
        }
    }
    async function correr(clave, fn) {
        setTrabajando(clave);
        setError(null);
        setResultado(null);
        try {
            setResultado(await fn());
            await cargarBase();
        } catch (err) {
            setError(err);
        } finally{
            setTrabajando(null);
        }
    }
    if (!fila) {
        var _dadaDeBaja_service_ports_borrados;
        if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
            error: error
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
            lineNumber: 157,
            columnNumber: 23
        }, this);
        if (!cargado) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {
            texto: "Cargando la ONU…"
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
            lineNumber: 158,
            columnNumber: 26
        }, this);
        // La ficha ya no existe. El caso normal es que se acabe de dar de baja: se
        // muestra el resultado en vez de dejar la pantalla girando.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    to: "/olt/onus",
                    className: "inline-flex items-center gap-1 text-sm text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        " Volver a las ONUs"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-slate-100",
                                children: dadaDeBaja ? 'La ONU se dio de baja' : 'Esta ONU ya no existe'
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            dadaDeBaja ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400",
                                        children: [
                                            dadaDeBaja.sn,
                                            " · ",
                                            dadaDeBaja.donde,
                                            dadaDeBaja.nombre ? " · ".concat(dadaDeBaja.nombre) : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    ((_dadaDeBaja_service_ports_borrados = dadaDeBaja.service_ports_borrados) === null || _dadaDeBaja_service_ports_borrados === void 0 ? void 0 : _dadaDeBaja_service_ports_borrados.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: [
                                            "Se borraron ",
                                            dadaDeBaja.service_ports_borrados.length,
                                            " service-ports:",
                                            ' ',
                                            dadaDeBaja.service_ports_borrados.join(', ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 179,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400",
                                        children: dadaDeBaja.aviso
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400",
                                children: "La borró alguien más, o el enlace es viejo. La ficha del abonado, si la tenía, sigue existiendo."
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
            lineNumber: 163,
            columnNumber: 7
        }, this);
    }
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nivel"])(fila.rx_power_dbm);
    var _wan_conexiones1, _find;
    /**
   * La WAN de SERVICIO, que es la que le importa al abonado.
   *
   * Se descarta la de TR-069 —la de gestión— porque su IP es la del pool de
   * administración, no la que el cliente usa para navegar. Mostrarla en
   * "Dirección IPv4" haría que soporte le dicte al abonado una dirección de la
   * red de gestión.
   */ const wanServicio = (_find = ((_wan_conexiones1 = wan === null || wan === void 0 ? void 0 : wan.conexiones) !== null && _wan_conexiones1 !== void 0 ? _wan_conexiones1 : []).find((c)=>{
        var _c_servicio;
        return !/tr069/i.test((_c_servicio = c.servicio) !== null && _c_servicio !== void 0 ? _c_servicio : '');
    })) !== null && _find !== void 0 ? _find : null;
    const equipo = ficha === null || ficha === void 0 ? void 0 : ficha.equipo;
    const optica = ficha === null || ficha === void 0 ? void 0 : ficha.optica;
    var _fila_cliente, _ref, _resultado_aviso, _fila_modelo, _fila_bajada_kbps, _fila_subida_kbps, _tr069_perfilNombre, _wanServicio_tipoConexion, _wanServicio_vlan, _wanServicio_accesoIpv4, _fila_nombre_en_la_olt, _fila_bajada_kbps1, _fila_subida_kbps1, _fila_line_profile_olt, _fila_srv_profile_olt, _equipo_lineProfileNombre, _equipo_srvProfileNombre, _optica_causa_cruda, _fila_causa_caida_cruda;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: "/onus",
                                className: "mb-1 inline-flex items-center gap-1 text-xs text-slate-500 hover:text-sky-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    " ONUs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "truncate text-xl font-semibold text-slate-100",
                                children: (_ref = (_fila_cliente = fila.cliente) !== null && _fila_cliente !== void 0 ? _fila_cliente : fila.nombre_en_la_olt) !== null && _ref !== void 0 ? _ref : fila.sn
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 flex flex-wrap items-center gap-2 text-xs text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: fila.sn
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: fila.ruta_onu
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/olts/".concat(fila.olt_id),
                                        className: "hover:text-sky-300",
                                        children: fila.olt
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    fila.senal_baja && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: "rojo",
                                        children: "señal baja"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 231,
                                        columnNumber: 33
                                    }, this),
                                    fila.sin_abonado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: "azul",
                                        children: "sin ficha de abonado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 232,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"],
                                cargando: leyendo,
                                onClick: preguntarAlEquipo,
                                children: "Ver estado"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
                                cargando: trabajando === 'sw',
                                onClick: ()=>correr('sw', async ()=>{
                                        setSoftware(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.softwareOnu(fila.olt_id, id));
                                        return null;
                                    }),
                                children: "Software"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                                cargando: trabajando === 'wan',
                                disabled: fila.onu_index == null,
                                onClick: ()=>correr('wan', async ()=>{
                                        setWan(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.wanOnu(fila.olt_id, id));
                                        return null;
                                    }),
                                children: "WAN"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__["Router"],
                                cargando: trabajando === 'tr069',
                                disabled: fila.onu_index == null,
                                onClick: ()=>correr('tr069', async ()=>{
                                        var _fila_frame;
                                        setTr069(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].tr069.ont({
                                            oltId: fila.olt_id,
                                            frame: (_fila_frame = fila.frame) !== null && _fila_frame !== void 0 ? _fila_frame : 0,
                                            slot: fila.slot,
                                            puerto: fila.puerto,
                                            onuId: fila.onu_index
                                        }));
                                        return null;
                                    }),
                                children: "TR-069"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__["FileCode2"],
                                cargando: trabajando === 'cfg',
                                onClick: ()=>correr('cfg', async ()=>{
                                        setConfigActiva(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.configActivaOnu(fila.olt_id, id));
                                        return null;
                                    }),
                                children: "Configuración activa"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                                cargando: trabajando === 'ficha',
                                onClick: ()=>correr('ficha', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.actualizarFichaOnu(fila.olt_id, id)),
                                children: "Actualizar ficha"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "primario",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"],
                                onClick: ()=>setAcciones(true),
                                children: "Acciones"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 rounded-lg border border-amber-500/25 bg-amber-500/5 px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300/80",
                        children: "Sobre el equipo del abonado"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "alerta",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
                        cargando: trabajando === 'reprov',
                        onClick: async ()=>{
                            var _fila_cliente;
                            if (!await confirmar("Reenviarle la configuración a la ONT de ".concat((_fila_cliente = fila.cliente) !== null && _fila_cliente !== void 0 ? _fila_cliente : fila.sn, ".\n\n") + 'Sirve cuando la configuración por TR069 no llegó a aplicarse: la ONT figura ' + 'online pero al abonado le falta el servicio.\n\n' + 'La ONT se reasocia y pierde el servicio unos segundos.\n\n¿Continuar?')) {
                                return;
                            }
                            correr('reprov', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.reprovisionarOnu(fila.olt_id, id));
                        },
                        children: "Reenviar configuración"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "alerta",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"],
                        cargando: trabajando === 'reiniciar',
                        onClick: async ()=>{
                            var _fila_cliente;
                            if (!await confirmar("Reiniciar la ONT de ".concat((_fila_cliente = fila.cliente) !== null && _fila_cliente !== void 0 ? _fila_cliente : fila.sn, ".\n\n") + 'Es lo primero que se prueba cuando el equipo quedó inhibido o anda lento con ' + 'la señal óptica bien.\n\n' + 'Se queda sin servicio un par de minutos.\n\n¿Continuar?')) {
                                return;
                            }
                            correr('reiniciar', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.reiniciarOnu(fila.olt_id, id));
                        },
                        children: "Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "peligro",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"],
                        cargando: trabajando === 'fabrica',
                        onClick: async ()=>{
                            var _fila_cliente;
                            if (!await confirmar("Restaurar de fábrica la ONT de ".concat((_fila_cliente = fila.cliente) !== null && _fila_cliente !== void 0 ? _fila_cliente : fila.sn, ".\n\n") + 'BORRA todo lo que el abonado configuró adentro del equipo: el nombre y la ' + 'clave del wifi, los reenvíos de puertos, todo.\n\n' + 'El internet vuelve solo —la OLT le reaplica el servicio— pero el wifi queda ' + 'con la clave de fábrica y no se le va a conectar ningún teléfono de la casa ' + 'hasta que alguien lo reconfigure.\n\n¿Continuar?')) {
                                return;
                            }
                            correr('fabrica', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.restaurarFabricaOnu(fila.olt_id, id));
                        },
                        children: "Restaurar de fábrica"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "w-full text-[11px] leading-snug text-amber-300/60",
                        children: "Las tres cortan el servicio. Restaurar de fábrica además deja al abonado sin su wifi: el internet vuelve, su red de la casa no."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            resultado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: resultado.sin_cambios ? 'info' : 'alerta',
                children: resultado.diferencias ? resultado.sin_cambios ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Se releyó del equipo y ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "no cambió nada"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                            lineNumber: 401,
                            columnNumber: 40
                        }, this),
                        ": lo guardado coincide con lo que tiene configurado."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "El equipo tenía otra cosa."
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                            lineNumber: 406,
                            columnNumber: 17
                        }, this),
                        " Se actualizó:",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-1 space-y-0.5",
                            children: resultado.diferencias.map((d)=>{
                                var _d_antes;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-xs",
                                    children: [
                                        d.campo,
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-through opacity-60",
                                            children: String((_d_antes = d.antes) !== null && _d_antes !== void 0 ? _d_antes : '—')
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 410,
                                            columnNumber: 34
                                        }, this),
                                        ' ',
                                        "→ ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: String(d.ahora)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 411,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, d.campo, true, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 409,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                            lineNumber: 407,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true) : (_resultado_aviso = resultado.aviso) !== null && _resultado_aviso !== void 0 ? _resultado_aviso : 'Listo.'
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 397,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "La ONT",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-x-8 gap-y-1 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                            className: "divide-y divide-slate-800/70 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                    k: "OLT",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/olts/".concat(fila.olt_id),
                                        className: "text-sky-300 hover:text-sky-200",
                                        children: fila.olt
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                    k: "Placa / Puerto",
                                    children: fila.slot != null ? "".concat(fila.slot, " / ").concat(fila.puerto) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                    k: "ONU",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs",
                                        children: fila.ruta_onu
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                    k: "Serie",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs",
                                        children: fila.sn
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                    k: "Tipo de ONU",
                                    children: fila.modelo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setAcciones(true),
                                        className: "text-left text-sky-300 hover:text-sky-200",
                                        children: [
                                            fila.modelo,
                                            fila.srv_profile_olt != null ? " · perfil ".concat(fila.srv_profile_olt) : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                    k: "Nombre en la OLT",
                                    children: fila.nombre_en_la_olt
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                    k: "Dirección",
                                    children: fila.direccion
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                    k: "Autorizada",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(fila.autorizada_at)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                (tipo === null || tipo === void 0 ? void 0 : tipo.imagen_url) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: tipo.imagen_url,
                                        alt: (_fila_modelo = fila.modelo) !== null && _fila_modelo !== void 0 ? _fila_modelo : 'ONT',
                                        className: "h-28 max-w-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "divide-y divide-slate-800/70 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Estado",
                                            children: fila.onu_estado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block h-2 w-2 rounded-full ".concat(fila.onu_estado === 'online' ? 'bg-emerald-400' : 'bg-slate-600')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 496,
                                                        columnNumber: 21
                                                    }, this),
                                                    fila.onu_estado === 'online' ? 'En línea' : fila.onu_estado,
                                                    fila.ultima_lectura && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-slate-500",
                                                        children: [
                                                            "(",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hace"])(Math.floor((Date.now() - new Date(fila.ultima_lectura)) / 1000)),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 503,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 495,
                                                columnNumber: 19
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Señal ONU / OLT",
                                            children: fila.rx_power_dbm != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block h-2 w-2 rounded-full ".concat(n.punto)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 529,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(fila.rx_power_dbm),
                                                            ' / ',
                                                            fila.olt_rx_power_dbm != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(fila.olt_rx_power_dbm) : '—',
                                                            fila.distancia_m != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: [
                                                                    " (",
                                                                    fila.distancia_m,
                                                                    " m)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                lineNumber: 535,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 530,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 528,
                                                columnNumber: 19
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 526,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "VLAN",
                                            children: fila.vlan
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 541,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Perfil de línea",
                                            children: fila.line_profile_olt
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 542,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Plan",
                                            children: fila.plan ? "".concat(fila.plan, " (").concat(Math.round(((_fila_bajada_kbps = fila.bajada_kbps) !== null && _fila_bajada_kbps !== void 0 ? _fila_bajada_kbps : 0) / 1000), "/").concat(Math.round(((_fila_subida_kbps = fila.subida_kbps) !== null && _fila_subida_kbps !== void 0 ? _fila_subida_kbps : 0) / 1000), " Mbps)") : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Gestión remota",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setGestion(true),
                                                className: "text-left text-sky-300 hover:text-sky-200",
                                                children: tr069 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        (_tr069_perfilNombre = tr069.perfilNombre) !== null && _tr069_perfilNombre !== void 0 ? _tr069_perfilNombre : 'sin perfil',
                                                        tr069.ipConfigurada ? " · ".concat(tr069.ipConfigurada) : '',
                                                        tr069.vlanGestion ? " · VLAN ".concat(tr069.vlanGestion) : ''
                                                    ]
                                                }, void 0, true) : 'Configurar TR-069 e IP de gestión'
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 554,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Modo de la ONU",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setModoWan(true),
                                                className: "text-left text-sky-300 hover:text-sky-200",
                                                children: wanServicio ? "".concat(/bridge/i.test((_wanServicio_tipoConexion = wanServicio.tipoConexion) !== null && _wanServicio_tipoConexion !== void 0 ? _wanServicio_tipoConexion : '') ? 'Puente' : 'Enrutada', " · WAN VLAN ").concat((_wanServicio_vlan = wanServicio.vlan) !== null && _wanServicio_vlan !== void 0 ? _wanServicio_vlan : '—') : wan && !wan.soportado ? 'El modelo no lo informa · configurar' : 'Configurar cómo sale a internet'
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 581,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 580,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Modo de configuración",
                                            children: wanServicio ? "".concat((_wanServicio_accesoIpv4 = wanServicio.accesoIpv4) !== null && _wanServicio_accesoIpv4 !== void 0 ? _wanServicio_accesoIpv4 : '—').concat(wanServicio.servicio ? " (".concat(wanServicio.servicio, ")") : '') : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 593,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Dirección IPv4",
                                            children: (wanServicio === null || wanServicio === void 0 ? void 0 : wanServicio.ipv4) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs",
                                                children: wanServicio.ipv4
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 600,
                                                columnNumber: 19
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 598,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "VLANs de la ONT",
                                            children: (wan === null || wan === void 0 ? void 0 : (_wan_conexiones = wan.conexiones) === null || _wan_conexiones === void 0 ? void 0 : _wan_conexiones.length) ? [
                                                ...new Set(wan.conexiones.map((c)=>c.vlan).filter(Boolean))
                                            ].join(', ') : fila.vlan
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 603,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Lo que tenemos guardado",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "divide-y divide-slate-800/70 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Abonado",
                                            children: fila.client_id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: "/clientes/".concat(fila.client_id),
                                                className: "text-sky-300 hover:text-sky-200",
                                                children: fila.cliente
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 620,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400",
                                                children: [
                                                    (_fila_nombre_en_la_olt = fila.nombre_en_la_olt) !== null && _fila_nombre_en_la_olt !== void 0 ? _fila_nombre_en_la_olt : 'sin nombre',
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-amber-400",
                                                        children: "— no tiene ficha en el sistema: hay servicio dado y nadie a quien facturarle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 626,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 624,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 618,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Dirección",
                                            children: fila.direccion
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 632,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Contacto",
                                            children: fila.contacto
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 633,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Plan",
                                            children: fila.plan ? "".concat(fila.plan, " (").concat(Math.round(((_fila_bajada_kbps1 = fila.bajada_kbps) !== null && _fila_bajada_kbps1 !== void 0 ? _fila_bajada_kbps1 : 0) / 1000), "/").concat(Math.round(((_fila_subida_kbps1 = fila.subida_kbps) !== null && _fila_subida_kbps1 !== void 0 ? _fila_subida_kbps1 : 0) / 1000), " Mbps)") : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 634,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Zona",
                                            children: fila.zona
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 637,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Caja / ODB",
                                            children: fila.odb
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 638,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "VLAN",
                                            children: fila.vlan
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 639,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Modelo",
                                            children: fila.modelo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    (tipo === null || tipo === void 0 ? void 0 : tipo.imagen_url) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: tipo.imagen_url,
                                                        alt: fila.modelo,
                                                        className: "h-12 rounded border border-slate-800 bg-slate-900 object-contain px-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 647,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            fila.modelo,
                                                            tipo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-[11px] text-slate-500",
                                                                children: [
                                                                    tipo.marca,
                                                                    tipo.puertos_ethernet ? " · ".concat(tipo.puertos_ethernet, " Ethernet") : '',
                                                                    tipo.wifi_ssids ? " · ".concat(tipo.wifi_ssids, " WiFi") : ' · sin WiFi',
                                                                    tipo.puertos_fxs ? " · ".concat(tipo.puertos_fxs, " VoIP") : '',
                                                                    tipo.catv ? ' · CATV' : '',
                                                                    tipo.soporta_tr069 === false ? ' · se configura a mano' : ''
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                lineNumber: 656,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 653,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 645,
                                                columnNumber: 19
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 643,
                                            columnNumber: 15
                                        }, this),
                                        (fila.ssid || fila.clave_wifi) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "WiFi configurado",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-sm",
                                                    children: fila.ssid
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 674,
                                                    columnNumber: 19
                                                }, this),
                                                fila.clave_wifi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 font-mono text-sm text-slate-400",
                                                    children: fila.clave_wifi
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 676,
                                                    columnNumber: 21
                                                }, this),
                                                fila.configurada_por && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[11px] text-slate-500",
                                                    children: fila.configurada_por === 'tr069' ? 'configurado por el sistema' : 'cargado a mano por el técnico'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 679,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Perfiles",
                                            children: fila.line_profile_olt != null || fila.srv_profile_olt != null ? "línea ".concat((_fila_line_profile_olt = fila.line_profile_olt) !== null && _fila_line_profile_olt !== void 0 ? _fila_line_profile_olt : '—', " · servicio ").concat((_fila_srv_profile_olt = fila.srv_profile_olt) !== null && _fila_srv_profile_olt !== void 0 ? _fila_srv_profile_olt : '—').concat(fila.srv_profile_nombre ? " (".concat(fila.srv_profile_nombre, ")") : '') : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 687,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Fecha de alta",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(fila.autorizada_at)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 692,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Descripción en la OLT",
                                            children: fila.descripcion_olt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "break-all font-mono text-xs",
                                                children: fila.descripcion_olt
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 695,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 693,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Ficha leída",
                                            children: fila.ficha_leida_at ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(fila.ficha_leida_at),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-[11px] text-slate-600",
                                                        children: [
                                                            "hace ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hace"])(Math.round((Date.now() - new Date(fila.ficha_leida_at)) / 1000))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 702,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 700,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-400",
                                                children: "nunca — resincroniza para traer modelo, VLAN y perfiles del equipo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 707,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 617,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 616,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Lo que dice el equipo",
                                subtitle: "Se lee en vivo por SSH. No se guarda solo: para eso está Resincronizar.",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"],
                                children: !ficha ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "py-6 text-center text-sm text-slate-500",
                                    children: [
                                        "Todavía no se le preguntó.",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: preguntarAlEquipo,
                                            className: "text-sky-400 hover:text-sky-300",
                                            children: "Preguntarle ahora"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 724,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1 block text-[11px] text-slate-600",
                                            children: "Cuesta una sesión SSH contra la OLT, por eso no se hace al abrir."
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 731,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 722,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        ((_ficha_problemas = ficha.problemas) === null || _ficha_problemas === void 0 ? void 0 : _ficha_problemas.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                                            tipo: "alerta",
                                            children: [
                                                "No se pudo leer todo: ",
                                                ficha.problemas.join(' · ')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 738,
                                            columnNumber: 19
                                        }, this),
                                        equipo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            className: "divide-y divide-slate-800/70 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Estado",
                                                    children: equipo.estado
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 745,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Autenticación",
                                                    children: equipo.autenticacion
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 746,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Gestión",
                                                    children: equipo.gestion
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 747,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Perfil de línea",
                                                    children: equipo.lineProfileId != null ? "".concat(equipo.lineProfileId, " · ").concat((_equipo_lineProfileNombre = equipo.lineProfileNombre) !== null && _equipo_lineProfileNombre !== void 0 ? _equipo_lineProfileNombre : '') : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 748,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Perfil de servicio",
                                                    children: equipo.srvProfileId != null ? "".concat(equipo.srvProfileId, " · ").concat((_equipo_srvProfileNombre = equipo.srvProfileNombre) !== null && _equipo_srvProfileNombre !== void 0 ? _equipo_srvProfileNombre : '') : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 753,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Descripción",
                                                    children: equipo.descripcion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "break-all font-mono text-xs",
                                                        children: equipo.descripcion
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                        lineNumber: 760,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 758,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 744,
                                            columnNumber: 19
                                        }, this),
                                        (equipo === null || equipo === void 0 ? void 0 : (_equipo_servicePorts = equipo.servicePorts) === null || _equipo_servicePorts === void 0 ? void 0 : _equipo_servicePorts.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                            lineNumber: 769,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Service-ports"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 768,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                                    columnas: [
                                                        'Índice',
                                                        'VLAN',
                                                        'Gemport',
                                                        'Bajada',
                                                        'Subida',
                                                        'Estado'
                                                    ],
                                                    filas: equipo.servicePorts,
                                                    renderFila: (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-1.5 font-mono text-xs",
                                                                    children: s.indice
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                    lineNumber: 777,
                                                                    columnNumber: 27
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-1.5 font-mono text-xs",
                                                                    children: s.vlan
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                    lineNumber: 778,
                                                                    columnNumber: 27
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-1.5 font-mono text-xs",
                                                                    children: s.gemport
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                    lineNumber: 779,
                                                                    columnNumber: 27
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-1.5 text-xs",
                                                                    children: s.ttSalida == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-600",
                                                                        children: "sin límite"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                        lineNumber: 784,
                                                                        columnNumber: 31
                                                                    }, void 0) : "tabla ".concat(s.ttSalida)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                    lineNumber: 782,
                                                                    columnNumber: 27
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-1.5 text-xs",
                                                                    children: s.ttEntrada == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-600",
                                                                        children: "sin límite"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                        lineNumber: 791,
                                                                        columnNumber: 31
                                                                    }, void 0) : "tabla ".concat(s.ttEntrada)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 27
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-1.5 text-xs",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        color: s.estado === 'up' ? 'verde' : 'gris',
                                                                        children: s.estado
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                        lineNumber: 797,
                                                                        columnNumber: 29
                                                                    }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                                    lineNumber: 796,
                                                                    columnNumber: 27
                                                                }, void 0)
                                                            ]
                                                        }, s.indice, true, {
                                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                            lineNumber: 776,
                                                            columnNumber: 25
                                                        }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 772,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[11px] leading-snug text-slate-500",
                                                    children: "El de la VLAN 999 es el de gestión, igual para todos. El otro es el que le da internet al abonado."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 802,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 767,
                                            columnNumber: 19
                                        }, this),
                                        optica && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            className: "divide-y divide-slate-800/70 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Señal de bajada (RX)",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(optica.rx_power_dbm)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 811,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Señal de subida (TX)",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(optica.tx_power_dbm)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 812,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "La ve la OLT a",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(optica.olt_rx_power_dbm)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 813,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Distancia",
                                                    children: optica.distancia_m != null ? "".concat(optica.distancia_m, " m") : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 814,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Modelo",
                                                    children: optica.modelo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 815,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Versión de software",
                                                    children: optica.version_sw
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 816,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Última caída",
                                                    children: optica.ultima_caida
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 817,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                                    k: "Causa",
                                                    children: (_optica_causa_cruda = optica.causa_cruda) !== null && _optica_causa_cruda !== void 0 ? _optica_causa_cruda : optica.causa
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                    lineNumber: 818,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 810,
                                            columnNumber: 19
                                        }, this),
                                        ficha.optica === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] leading-snug text-slate-500",
                                            children: "Sin lectura óptica. Es una consulta OMCI en vivo: con la ONT caída, el equipo no la puede contestar. Eso no significa que la señal sea cero."
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 822,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 736,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 716,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Señal",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block h-2 w-2 rounded-full ".concat(n.punto)
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 836,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-semibold text-slate-100",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(fila.rx_power_dbm)
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                                lineNumber: 837,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 835,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[11px] text-slate-500",
                                        children: fila.ultima_lectura ? "Última lectura ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(fila.ultima_lectura)) : 'Nunca se le leyó la potencia'
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this),
                                    fila.rx_power_dbm != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$HistorialOptico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onuId: fila.onu_id
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 846,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                        lineNumber: 845,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 834,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Puertos de la ONT",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cable$3e$__["Cable"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$PuertosOnt$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    oltId: fila.olt_id,
                                    onuId: fila.onu_id
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 852,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 851,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Consumo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$TraficoVivo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    oltId: fila.olt_id,
                                    onuId: fila.onu_id
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 856,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 855,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Estado del enlace",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "divide-y divide-slate-800/70 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Estado",
                                            children: fila.onu_estado
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 861,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Causa de la caída",
                                            children: (_fila_causa_caida_cruda = fila.causa_caida_cruda) !== null && _fila_causa_caida_cruda !== void 0 ? _fila_causa_caida_cruda : fila.causa_caida
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 862,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Última caída",
                                            children: fila.ultima_caida
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 863,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                            k: "Distancia",
                                            children: fila.distancia_m != null ? "".concat(fila.distancia_m, " m") : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                            lineNumber: 864,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                    lineNumber: 860,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 859,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 613,
                columnNumber: 7
            }, this),
            tr069 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Gestión remota (TR-069)",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__["Router"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "divide-y divide-slate-800/70 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "Perfil",
                                children: tr069.perfilNombre ? "".concat(tr069.perfilNombre).concat(tr069.perfilId != null ? " (id ".concat(tr069.perfilId, ")") : '') : null
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 873,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "Gestión",
                                children: tr069.gestionHabilitada === true ? 'Habilitada' : tr069.gestionHabilitada === false ? 'Apagada' : null
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 878,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "IP de gestión",
                                children: tr069.ipConfigurada
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 885,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "IP que responde",
                                children: tr069.ipViva
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 886,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "VLAN de gestión",
                                children: tr069.vlanGestion
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 887,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "Puerta de enlace",
                                children: tr069.gateway
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 888,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "MACs en la VLAN de gestión",
                                children: tr069.macsEnGestion != null ? String(tr069.macsEnGestion) : null
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 889,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 872,
                        columnNumber: 11
                    }, this),
                    ((_tr069_diagnostico = tr069.diagnostico) === null || _tr069_diagnostico === void 0 ? void 0 : _tr069_diagnostico.motivo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: tr069.gestionHabilitada ? 'info' : 'alerta',
                            children: tr069.diagnostico.motivo
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                            lineNumber: 904,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 903,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 871,
                columnNumber: 9
            }, this),
            software && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Software y hardware de la ONT",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "divide-y divide-slate-800/70 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "Modelo",
                                children: software.modelo
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 915,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "Fabricante",
                                children: software.vendorId
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 916,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "Versión de hardware",
                                children: software.versionHardware
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 917,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "Versión de firmware",
                                children: software.versionSoftware
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 918,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "MAC",
                                children: software.mac
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 919,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(D, {
                                k: "Serie del fabricante",
                                children: software.equipoSn
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                                lineNumber: 920,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 914,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] text-slate-500",
                        children: "Leído en vivo por OMCI. Con la ONT caída el equipo no lo puede contestar."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 922,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 913,
                columnNumber: 9
            }, this),
            configActiva && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Configuración activa",
                subtitle: "Lo que el equipo tiene en ejecución para esta ONT, ahora mismo",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__["FileCode2"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "overflow-x-auto t-panel p-3 text-[11px] leading-relaxed text-slate-300",
                        children: configActiva.texto || 'El equipo no devolvió configuración para esta ONT.'
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 934,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] leading-snug text-slate-500",
                        children: "Es la configuración acotada a esta ONT, no la del equipo entero. Las contraseñas van tapadas: la línea del TR069 lleva la clave del servidor de gestión."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                        lineNumber: 937,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 929,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: acciones,
                titulo: "Acciones · ".concat(fila.sn),
                onCerrar: ()=>setAcciones(false),
                ancho: "max-w-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$AccionesOnu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    olt: {
                        id: fila.olt_id,
                        nombre: fila.olt
                    },
                    onu: fila,
                    planes: planes,
                    onListo: (accion, r)=>{
                        if (accion === 'baja') {
                            setDadaDeBaja(r);
                            setAcciones(false);
                        }
                        return cargarBase();
                    },
                    onCerrar: ()=>setAcciones(false)
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                    lineNumber: 950,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 944,
                columnNumber: 7
            }, this),
            gestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$GestionRemotaOnu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                olt: {
                    id: fila.olt_id,
                    nombre: fila.olt
                },
                onu: fila,
                actual: tr069,
                onListo: async ()=>{
                    var _fila_frame;
                    // Se relee del equipo en vez de confiar en lo que devolvió el
                    // cambio: si la OLT aplicó algo distinto, hay que verlo acá.
                    setTr069(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].tr069.ont({
                        oltId: fila.olt_id,
                        frame: (_fila_frame = fila.frame) !== null && _fila_frame !== void 0 ? _fila_frame : 0,
                        slot: fila.slot,
                        puerto: fila.puerto,
                        onuId: fila.onu_index
                    }).catch(()=>null));
                    return cargarBase();
                },
                onCerrar: ()=>setGestion(false)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 966,
                columnNumber: 9
            }, this),
            modoWan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$ModoWanOnu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                olt: {
                    id: fila.olt_id,
                    nombre: fila.olt
                },
                onu: fila,
                onListo: async ()=>{
                    // Se relee del equipo: lo que quedó manda sobre lo que se pidió.
                    setWan(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.wanOnu(fila.olt_id, id).catch(()=>null));
                    return cargarBase();
                },
                onCerrar: ()=>setModoWan(false)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 991,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_s(OnuDetallePage, "2lVtLXoDcfTjr6vRXckVjxWx1bM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = OnuDetallePage;
/** Una fila clave/valor. El hueco se muestra como hueco: no se inventa nada. */ function D(param) {
    let { k, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-baseline gap-x-3 py-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "w-44 shrink-0 text-xs text-slate-500",
                children: k
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 1010,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: "min-w-0 flex-1 text-slate-200",
                children: children || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-600",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                    lineNumber: 1012,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
                lineNumber: 1011,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/olt/OnuDetallePage.jsx",
        lineNumber: 1009,
        columnNumber: 5
    }, this);
}
_c1 = D;
var _c, _c1;
__turbopack_context__.k.register(_c, "OnuDetallePage");
__turbopack_context__.k.register(_c1, "D");
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
"[project]/src/components/layout/Sidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useMarca$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useMarca.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rutasPermisos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/backpack.js [app-client] (ecmascript) <export default as Backpack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-left.js [app-client] (ecmascript) <export default as ChevronsLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-client] (ecmascript) <export default as FileSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-client] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pinned.js [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-x.js [app-client] (ecmascript) <export default as PackageX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-client] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/router.js [app-client] (ecmascript) <export default as Router>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-search.js [app-client] (ecmascript) <export default as ScanSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
/**
 * Menú lateral.
 *
 * Los grupos con `hijos` se despliegan. Se abren solos cuando la página que
 * estás viendo es una de las de adentro: al recargar en "Contratos", el menú
 * tiene que mostrar dónde estás parado y no volver a cerrarse.
 *
 * ── Qué se ve y qué no ──
 *
 * Cada ítem se muestra solo si su ruta está permitida. El permiso no se declara
 * acá sino en `lib/rutasPermisos.js`, junto al que usa el guardián de acceso:
 * si vivieran en dos lados, el día que se separen habría ítems que llevan a una
 * pantalla que rebota, o pantallas alcanzables que el menú esconde. Las dos
 * versiones de ese error son confusas de distinta manera.
 *
 * Un grupo cuyos hijos quedaron todos fuera desaparece entero, y una sección
 * sin ítems no dibuja ni su título — un encabezado "OLT / GPON" sobre nada es
 * peor que no tenerlo.
 */ const SECCIONES = [
    {
        titulo: null,
        items: [
            // La única entrada con permiso propio, y por una razón: "/" no es una
            // pantalla, es un desvío — manda a cada uno a la suya. Su permiso no se
            // puede deducir del mapa de rutas porque ahí tiene que quedar abierta,
            // si no el guardián rechazaría a alguien antes de poder desviarlo.
            //
            // Pedía solo `red.olts_ver`, y por eso el técnico no tenía Dashboard: su
            // menú arrancaba en Clientes. Ahora también lo ve quien tiene tablero
            // propio — el suyo se dibuja en la misma URL, así que el enlace es el
            // mismo para todos y nadie tiene que saber a cuál le toca.
            {
                to: '/',
                label: 'Dashboard',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
                end: true,
                permiso: [
                    'red.olts_ver',
                    'instalaciones.asignadas',
                    'soporte.asignados'
                ]
            },
            // No hay ítem "Modo campo", y es a propósito.
            //
            // Lo hubo un rato. Dejó de tener sentido cuando la pantalla de inicio pasó
            // a elegir sola: en un teléfono manda a `/campo`, en un monitor dibuja el
            // tablero acá adentro. Con esa decisión automática, el ítem solo servía
            // para una cosa — abrir la app de celular a pantalla completa en una
            // computadora, que es justamente el problema que se vino a resolver.
            //
            // La ruta `/campo` sigue existiendo y se puede escribir a mano; lo que no
            // hay es un botón que invite a usarla donde no corresponde. El camino de
            // vuelta —del celular al escritorio— sí está, en Perfil, porque ahí es una
            // salida deliberada de una decisión automática y no un atajo a la vista
            // equivocada.
            {
                to: '/clientes',
                label: 'Clientes',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                hijos: [
                    {
                        to: '/clientes',
                        label: 'Usuarios',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        end: true
                    },
                    {
                        to: '/clientes/mapa',
                        label: 'Mapa de clientes',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
                    },
                    {
                        to: '/instalaciones/nuevas',
                        label: 'Nuevas instalaciones',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"],
                        contador: 'nuevas'
                    },
                    {
                        to: '/clientes/instalaciones',
                        label: 'Instalaciones',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"]
                    },
                    {
                        to: '/clientes/contratos',
                        label: 'Contratos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__["FileSignature"]
                    }
                ]
            },
            // Los planes van antes que Finanzas porque son su origen: de acá sale el
            // precio y el impuesto que después se factura.
            {
                to: '/servicios',
                label: 'Servicios',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
                hijos: [
                    {
                        to: '/servicios/planes',
                        label: 'Planes de internet',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"]
                    },
                    // Las traffic tables viven en las OLTs, no en la base: el plan solo
                    // apunta a una y le pone el precio. Por eso van al lado.
                    {
                        to: '/servicios/velocidades',
                        label: 'Perfiles de velocidad',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                    }
                ]
            },
            /**
       * Mi recaudación va ANTES de Finanzas y fuera del grupo.
       *
       * Para quien cobra es su pantalla, no un submenú: tiene que estar a la
       * vista sin desplegar nada. Y para quien no cobra, no aparece.
       */ {
                to: '/recaudacion',
                label: 'Mi recaudación',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
            },
            {
                to: '/finanzas',
                label: 'Finanzas',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
                hijos: [
                    {
                        to: '/pagos',
                        label: 'Pagos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
                    },
                    {
                        to: '/transacciones',
                        label: 'Transacciones',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"]
                    },
                    // Va pegada a Transacciones porque es su continuación: primero se mira
                    // lo cobrado, después se comprueba que haya entrado.
                    {
                        to: '/conciliacion',
                        label: 'Conciliación bancaria',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
                    },
                    // El reporte del regulador va en Finanzas y no en Ajustes: sale de las
                    // facturas, y quien lo arma es el mismo que mira la caja.
                    {
                        to: '/arcotel',
                        label: 'Reporte ARCOTEL',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
                    },
                    {
                        to: '/estadisticas',
                        label: 'Estadísticas',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                    },
                    {
                        to: '/facturacion',
                        label: 'Facturación',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
                    }
                ]
            },
            {
                to: '/soporte',
                label: 'Soporte',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"],
                hijos: [
                    {
                        to: '/soporte',
                        label: 'Tickets',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"],
                        end: true
                    },
                    {
                        to: '/soporte/tecnicos',
                        label: 'Técnicos y cuadrillas',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"]
                    },
                    {
                        to: '/soporte/desempeno',
                        label: 'Desempeño del equipo',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"]
                    },
                    {
                        to: '/soporte/jornadas',
                        label: 'Ingresos del día',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
                    },
                    {
                        to: '/soporte/vehiculos',
                        label: 'Vehículos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
                    }
                ]
            },
            {
                to: '/inventario',
                label: 'Inventario',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                hijos: [
                    {
                        to: '/inventario/stock',
                        label: 'Stock',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
                    },
                    {
                        to: '/inventario/compras',
                        label: 'Compras y proveedores',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"]
                    },
                    {
                        to: '/inventario/movimientos',
                        label: 'Movimientos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
                    },
                    // Los equipos que quedaron en casas que dejaron de pagar. Va en
                    // Inventario y no en Ventas porque el trabajo es logístico: alguien
                    // tiene que ir a buscarlos y devolverlos al stock.
                    {
                        to: '/inventario/retiros',
                        label: 'Retiros de equipo',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageX$3e$__["PackageX"]
                    },
                    {
                        to: '/inventario/entregas',
                        label: 'Recibir de técnicos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"]
                    },
                    // Última: es la del técnico, que no entra por acá sino desde su
                    // propia pantalla de inicio.
                    {
                        to: '/inventario/mi-almacen',
                        label: 'Mi almacén',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__["Backpack"]
                    }
                ]
            }
        ]
    },
    {
        // El módulo comercial se despliega en secciones propias en vez de esconderse
        // dentro de un grupo plegable.
        //
        // El motivo es concreto: al vendedor, el menú se le reducía a un solo
        // desplegable cerrado. Tenía que abrirlo para ver sus cinco pantallas —el
        // sistema entero, para él— mientras el resto de los roles ven las suyas de
        // entrada. Un menú que hay que abrir para descubrir qué tiene se usa menos.
        titulo: 'Comercial',
        items: [
            // Las tres primeras son la AGENDA PERSONAL de quien vende: su día, su
            // pipeline, sus seguimientos por enfriarse.
            //
            // `soloVendedor` las saca del menú de quien tiene la cartera completa.
            // Antes al administrador le aparecía el menú del vendedor entero, y las
            // tres primeras entradas eran la agenda de otra persona: nunca las iba a
            // abrir, y le empujaban hacia abajo lo que sí usa —Inteligencia y
            // Reportes—. Las rutas siguen existiendo y siguen siendo alcanzables
            // escribiéndolas; esto no es un permiso, es dejar de ofrecer lo que no
            // corresponde.
            {
                to: '/ventas/tablero',
                label: 'Mi día',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
                soloVendedor: true
            },
            // Va segunda, pegada a "Mi día": es la otra pregunta que el vendedor se
            // hace todas las mañanas, y tenerla escondida abajo la convierte en algo
            // que se consulta a fin de mes en vez de algo que orienta el día.
            {
                to: '/ventas/mi-comision',
                label: 'Mi comisión',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                soloVendedor: true
            },
            {
                to: '/ventas/prospectos',
                label: 'Prospectos',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
            },
            // Vistas preajustadas de la misma pantalla, no pantallas nuevas. Son los
            // dos cortes que un vendedor hace todo el tiempo, y llegar a ellos con un
            // clic en vez de tres es la diferencia entre usarlos y no.
            {
                to: '/ventas/prospectos?f=abiertos',
                label: 'Pipeline',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                soloVendedor: true
            },
            {
                to: '/ventas/prospectos?f=enfriando',
                label: 'Seguimientos',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
                contador: 'enfriando',
                soloVendedor: true
            },
            {
                to: '/ventas/cobertura',
                label: 'Verificar cobertura',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"]
            },
            {
                to: '/ventas/mapa',
                label: 'Mapa comercial',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"]
            },
            {
                to: '/ventas/cotizador',
                label: 'Cotizador',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
            },
            {
                to: '/ventas/promociones',
                label: 'Promociones',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
            }
        ]
    },
    {
        titulo: 'Reportes',
        items: [
            {
                to: '/ventas/reportes',
                label: 'Reportes comerciales',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
            },
            {
                to: '/ventas/inteligencia',
                label: 'Inteligencia comercial',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"]
            },
            // Aparte de Inteligencia comercial y no adentro: esa pantalla contesta
            // dónde nos piden servicio y no llegamos; esta, cuánto cuesta el canal y
            // qué calidad trae cada uno. Son dos preguntas distintas y juntarlas en
            // una sola pantalla no ayuda a ninguna de las dos.
            {
                to: '/ventas/comisiones',
                label: 'Comisiones del equipo',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
            }
        ]
    },
    {
        titulo: 'Cobranzas',
        items: [
            {
                to: '/ventas/cobranza',
                label: 'Cobros por gestionar',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
                contador: 'cobros'
            }
        ]
    },
    {
        titulo: 'OLT / GPON',
        items: [
            // El tablero va primero: es la pantalla desde la que se empieza el día.
            {
                to: '/gpon',
                label: 'Tablero GPON',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
            },
            {
                to: '/olts',
                label: 'OLTs',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"]
            },
            // Global y no por OLT: un modelo de ONT es el mismo cuelgue de donde
            // cuelgue, y tenerlo por equipo haría que las copias se contradigan.
            {
                to: '/onu-types',
                label: 'Tipos de ONU',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
            },
            {
                to: '/onus',
                label: 'ONUs',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"]
            },
            {
                to: '/naps',
                label: 'Cajas NAP',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
            },
            {
                to: '/perfiles',
                label: 'Perfiles y planes',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"]
            },
            // Global y no por OLT, por lo mismo que los tipos de ONU: un ACS sirve a
            // todas. Tenerlo por equipo es cómo se llega a que cada OLT apunte a una
            // dirección distinta sin que nadie lo note.
            {
                to: '/tr069',
                label: 'TR-069 / ACS',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"]
            },
            {
                to: '/metricas',
                label: 'Métricas ópticas',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"]
            }
        ]
    },
    {
        titulo: 'Infraestructura',
        // La importación y exportación de clientes viven dentro de la ficha del
        // router: son operaciones sobre un equipo concreto, no una sección aparte.
        items: [
            {
                to: '/red',
                label: 'Gestión de Red e IPAM',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                hijos: [
                    {
                        to: '/red/routers',
                        label: 'Routers MikroTik',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__["Router"]
                    },
                    {
                        to: '/red/redes',
                        label: 'Redes IPv4',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"]
                    },
                    {
                        to: '/red/auditoria',
                        label: 'Auditoría de subred',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__["ScanSearch"]
                    },
                    {
                        to: '/red/shaping',
                        label: 'Regla de shaping',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"]
                    },
                    // El tablero y el inventario son la misma pregunta hecha dos veces:
                    // se veía una caída y había que cambiar de pantalla para saber de qué
                    // torre colgaba. Van juntos y el menú tiene una sola entrada.
                    {
                        to: '/monitoreo',
                        label: 'Monitoreo de red',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                    },
                    // Aparte del monitoreo aunque salga de él: una cosa es enterarse de que
                    // se cayó la torre y otra es escribirle a los que cuelgan de ella. Quien
                    // hace lo segundo suele ser soporte, no quien mira el tablero.
                    {
                        to: '/monitoreo/incidencias',
                        label: 'Cortes masivos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
                    },
                    {
                        to: '/bloqueos',
                        label: 'Cortes / morosos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"]
                    }
                ]
            }
        ]
    },
    {
        // Último a propósito: es a donde se va una vez, no todos los días.
        titulo: 'Sistema',
        items: [
            {
                to: '/ajustes',
                label: 'Ajustes',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
            }
        ]
    }
];
/**
 * Los números que van al lado de algunos ítems del menú.
 *
 * ── Por qué solo tres ──
 *
 * Un contador en cada entrada convierte el menú en un tablero, y entonces no se
 * lee ninguno. Van los tres que exigen ir a esa pantalla hoy: cobros asignados,
 * prospectos enfriándose y órdenes esperando despacho.
 *
 * Cada consulta pide `head: true` y cuenta sin traer filas — el menú se dibuja
 * en cada navegación y traer trescientos prospectos para mostrar un "12" sería
 * pagar caro un número chico.
 */ function useContadores(puede) {
    _s();
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useContadores.useCallback[cargar]": async ()=>{
            const pedidos = {};
            if (puede('pagos.observaciones')) {
                pedidos.cobros = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_cobros_por_gestionar').select('asignacion_id', {
                    count: 'exact',
                    head: true
                });
            }
            if (puede('ventas.prospectos')) {
                // "Enfriándose" es la condición del embudo que se mira todos los días:
                // abierto y sin contacto hace cinco días o más.
                pedidos.enfriando = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_prospectos').select('id', {
                    count: 'exact',
                    head: true
                }).in('estado', [
                    'nuevo',
                    'contactado',
                    'cotizado',
                    'negociacion'
                ]).gte('dias_sin_contacto', 5);
            }
            if (puede('instalaciones.backoffice')) {
                pedidos.nuevas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('instalaciones').select('id', {
                    count: 'exact',
                    head: true
                }).in('estado', [
                    'nueva',
                    'revisando',
                    'lista_asignar'
                ]);
            }
            const claves = Object.keys(pedidos);
            if (!claves.length) return;
            const res = await Promise.all(Object.values(pedidos));
            // Un contador que falla no puede romper el menú: se omite y el ítem queda
            // sin número, que es exactamente como estaba antes.
            setN(Object.fromEntries(claves.map({
                "useContadores.useCallback[cargar]": (k, i)=>[
                        k,
                        res[i].error ? null : res[i].count
                    ]
            }["useContadores.useCallback[cargar]"])));
        }
    }["useContadores.useCallback[cargar]"], [
        puede
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContadores.useEffect": ()=>{
            cargar();
            // Dos minutos: son cifras que cambian por hora, no por segundo.
            const t = setInterval(cargar, 120000);
            return ({
                "useContadores.useEffect": ()=>clearInterval(t)
            })["useContadores.useEffect"];
        }
    }["useContadores.useEffect"], [
        cargar
    ]);
    return n;
}
_s(useContadores, "BDS4dK5ijDptryB3BQqt0jvIzLE=");
const CLASE_ITEM = (activo)=>"flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ".concat(activo ? 'bg-[#F0F9FF] font-semibold text-sky-400 shadow-[inset_3px_0_0_var(--marca)]' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200');
_c = CLASE_ITEM;
/**
 * El menú mientras se resuelve quién entró.
 *
 * Barras grises con la forma del menú, no el menú de verdad. Lo importante es
 * que ocupe el mismo lugar: si no dibujara nada, el contenido de la derecha se
 * correría al aparecer y la página saltaría en cada recarga.
 */ const MenuCargando = (param)=>{
    let { plegado } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 px-1",
        children: [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 animate-pulse rounded-lg bg-slate-800/50 ".concat(plegado ? 'w-10' : ''),
                // Largos distintos: todas iguales se leen como una tabla vacía, no como
                // algo que está por llegar.
                style: plegado ? undefined : {
                    width: "".concat(68 + i * 37 % 30, "%")
                }
            }, i, false, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 375,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Sidebar.jsx",
        lineNumber: 373,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = MenuCargando;
/** El número al lado de un ítem. Solo aparece si hay algo: un "0" es ruido. */ const Insignia = (param)=>{
    let { n } = param;
    return n > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "ml-auto grid h-5 min-w-5 place-items-center rounded-full bg-[#F0F9FF] px-1.5 text-[11px] font-semibold text-sky-400",
        children: n > 99 ? '99+' : n
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Sidebar.jsx",
        lineNumber: 389,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : null;
};
_c2 = Insignia;
function Grupo(param) {
    let { item, contadores, plegado } = param;
    _s1();
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    // El grupo está "dentro" si la ruta actual es la suya o la de alguno de sus
    // hijos: Finanzas agrupa rutas sueltas, no un prefijo común.
    const dentro = pathname === item.to || pathname.startsWith("".concat(item.to, "/")) || item.hijos.some((h)=>pathname === h.to || pathname.startsWith("".concat(h.to, "/")));
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dentro);
    const Icon = item.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setAbierto((a)=>!a),
                title: plegado ? item.label : undefined,
                className: "w-full ".concat(CLASE_ITEM(dentro && !abierto), " ").concat(plegado ? 'justify-center px-0' : 'justify-between'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            !plegado && item.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 14,
                        className: "transition-transform ".concat(abierto ? 'rotate-180' : '')
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            abierto && !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 space-y-0.5 border-l border-[rgba(15,23,42,0.08)] pl-3 ml-4",
                children: item.hijos.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: h.to,
                        end: h.end,
                        className: (param)=>{
                            let { isActive } = param;
                            return "flex items-center gap-2 rounded-xl px-3 py-1.5 text-[13px] transition ".concat(isActive ? 'bg-[#F0F9FF] font-semibold text-sky-400 shadow-[inset_3px_0_0_var(--marca)]' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200');
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(h.icon, {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this),
                            h.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Insignia, {
                                n: contadores === null || contadores === void 0 ? void 0 : contadores[h.contador]
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 445,
                                columnNumber: 15
                            }, this)
                        ]
                    }, h.to, true, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 431,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 429,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Sidebar.jsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
_s1(Grupo, "RKtFe/CMV3pwSOQt1R3fAXRYSr0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
_c3 = Grupo;
function Sidebar(param) {
    let { abierto = false, onCerrar = ()=>{} } = param;
    _s2();
    const { puede, perfil, cargandoPerfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const marca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useMarca$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarca"])();
    const contadores = useContadores(puede);
    // Plegado: en una pantalla de 13 pulgadas, 240 px de menú son el 20% del
    // ancho. Se recuerda por dispositivo, igual que el tema.
    const [plegado, setPlegado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Sidebar.useState": ()=>{
            try {
                return localStorage.getItem('menu-plegado') === 'si';
            } catch (e) {
                return false;
            }
        }
    }["Sidebar.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            try {
                localStorage.setItem('menu-plegado', plegado ? 'si' : 'no');
            } catch (e) {}
        }
    }["Sidebar.useEffect"], [
        plegado
    ]);
    /**
   * Poda el menú dejando solo lo alcanzable.
   *
   * Un grupo se queda si le sobrevive al menos un hijo, aunque su propia ruta
   * esté vedada: "/finanzas" no es una pantalla, es un cajón, y esconderlo
   * porque el cajón no tiene permiso propio dejaría afuera a los pagos que sí
   * lo tienen.
   */ const secciones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[secciones]": ()=>SECCIONES.map({
                "Sidebar.useMemo[secciones]": (seccion)=>({
                        ...seccion,
                        items: seccion.items.map({
                            "Sidebar.useMemo[secciones]": (item)=>{
                                // `permiso` explícito gana sobre el mapa de rutas. Es la excepción
                                // para "/" y está documentada ahí; cualquier otra entrada se sigue
                                // resolviendo sola, que es lo que evita que el menú y el guardián
                                // se contradigan.
                                //
                                // Acepta un arreglo, y ahí alcanza con tener uno — igual que el
                                // mapa de rutas y que `ConPermiso`. Que las tres formas de pedir un
                                // permiso se comporten distinto es cómo aparecen los ítems que se
                                // ven y no abren.
                                // La agenda personal del vendedor no se le ofrece a quien maneja
                                // la cartera: no es su trabajo diario. No es un permiso —puede
                                // entrar igual— es no ocuparle el menú con lo de otro.
                                if (item.soloVendedor && puede('clientes.cartera')) return null;
                                if (item.permiso && ![
                                    item.permiso
                                ].flat().some({
                                    "Sidebar.useMemo[secciones]": (p)=>puede(p)
                                }["Sidebar.useMemo[secciones]"])) return null;
                                if (!item.hijos) return item.permiso ? item : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, item.to) ? item : null;
                                const hijos = item.hijos.filter({
                                    "Sidebar.useMemo[secciones].hijos": (h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, h.to)
                                }["Sidebar.useMemo[secciones].hijos"]);
                                return hijos.length ? {
                                    ...item,
                                    hijos
                                } : null;
                            }
                        }["Sidebar.useMemo[secciones]"]).filter(Boolean)
                    })
            }["Sidebar.useMemo[secciones]"]).filter({
                "Sidebar.useMemo[secciones]": (s)=>s.items.length
            }["Sidebar.useMemo[secciones]"])
    }["Sidebar.useMemo[secciones]"], [
        puede
    ]);
    var _marca_nombre_sistema, _marca_nombre_sistema1, _marca_lema;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            abierto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Cerrar el menú",
                onClick: onCerrar,
                className: "fixed inset-0 z-30 bg-[rgba(15,23,42,0.45)] lg:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 513,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "z-40 flex shrink-0 flex-col border-r border-[rgba(15,23,42,0.06)] bg-white transition-transform lg:transition-[width] max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:w-64 ".concat(abierto ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full', " ").concat(plegado ? 'lg:w-16' : 'lg:w-60'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 border-b border-[rgba(15,23,42,0.06)] px-4 py-4",
                        children: [
                            (marca === null || marca === void 0 ? void 0 : marca.logo_b64) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: marca.logo_b64,
                                alt: "",
                                className: "h-8 w-auto max-w-28 shrink-0 rounded-lg object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 540,
                                columnNumber: 11
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-sky-700 to-sky-400 text-sm font-bold text-white",
                                children: ((_marca_nombre_sistema = marca === null || marca === void 0 ? void 0 : marca.nombre_sistema) !== null && _marca_nombre_sistema !== void 0 ? _marca_nombre_sistema : 'S').trim().charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this),
                            !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "t-titulo truncate text-sm font-bold text-slate-100",
                                        children: (_marca_nombre_sistema1 = marca === null || marca === void 0 ? void 0 : marca.nombre_sistema) !== null && _marca_nombre_sistema1 !== void 0 ? _marca_nombre_sistema1 : 'SmartOLT'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[11px] text-slate-500",
                                        children: (_marca_lema = marca === null || marca === void 0 ? void 0 : marca.lema) !== null && _marca_lema !== void 0 ? _marca_lema : ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 551,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 536,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 space-y-5 overflow-y-auto px-3 py-4",
                        children: cargandoPerfil && !perfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuCargando, {
                            plegado: plegado
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.jsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this) : secciones.map((seccion, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    seccion.titulo && (plegado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto mb-2 h-px w-6 bg-slate-800"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 577,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600",
                                        children: seccion.titulo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 579,
                                        columnNumber: 17
                                    }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: seccion.items.map((item)=>item.hijos ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grupo, {
                                                item: item,
                                                contadores: contadores,
                                                plegado: plegado
                                            }, item.to, false, {
                                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                                                to: item.to,
                                                end: item.end,
                                                // Plegado, el nombre pasa al tooltip del navegador: un menú
                                                // de solo íconos sin forma de saber qué es cada uno obliga a
                                                // probarlos.
                                                title: plegado ? item.label : undefined,
                                                className: (param)=>{
                                                    let { isActive } = param;
                                                    return "".concat(CLASE_ITEM(isActive), " ").concat(plegado ? 'justify-center px-0' : '');
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                                lineNumber: 601,
                                                                columnNumber: 23
                                                            }, this),
                                                            plegado && (contadores === null || contadores === void 0 ? void 0 : contadores[item.contador]) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute -right-1 -top-1 h-2 w-2 rounded-full bg-sky-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                                lineNumber: 605,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                        lineNumber: 600,
                                                        columnNumber: 21
                                                    }, this),
                                                    !plegado && item.label,
                                                    !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Insignia, {
                                                        n: contadores === null || contadores === void 0 ? void 0 : contadores[item.contador]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                        lineNumber: 609,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, item.to, true, {
                                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                lineNumber: 588,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 572,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 560,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setPlegado((v)=>!v),
                        className: "flex items-center gap-3 border-t border-[rgba(15,23,42,0.06)] px-4 py-3 text-[12px] text-slate-500 transition hover:text-slate-300",
                        title: plegado ? 'Mostrar el menú' : 'Ocultar el menú',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__["ChevronsLeft"], {
                                size: 16,
                                className: "transition-transform ".concat(plegado ? 'rotate-180' : '')
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 625,
                                columnNumber: 9
                            }, this),
                            !plegado && 'Ocultar menú'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 619,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 529,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(Sidebar, "6XgaX4yY3wWpxGnBVIb1iBc8x40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useMarca$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarca"],
        useContadores
    ];
});
_c4 = Sidebar;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CLASE_ITEM");
__turbopack_context__.k.register(_c1, "MenuCargando");
__turbopack_context__.k.register(_c2, "Insignia");
__turbopack_context__.k.register(_c3, "Grupo");
__turbopack_context__.k.register(_c4, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Campana.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Campana
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
/**
 * La campana de notificaciones.
 *
 * ── Por qué el contador cuenta solo lo urgente ──
 *
 * Si el número incluyera lo informativo —"tu venta fue enviada"— estaría
 * siempre en rojo y dejaría de significar algo. Cuenta lo que pide acción hoy:
 * expedientes a medio hacer, promesas que vencen, cobros vencidos, instalaciones
 * que fallaron. Lo demás está adentro, sin gritar.
 *
 * ── Por qué no hay tiempo real ──
 *
 * Se evaluó suscribirse a los cambios con Realtime. Se descartó por ahora: una
 * conexión abierta permanente en el celular del vendedor gasta batería y datos
 * todo el día para avisar de cosas que no son urgentes al minuto. Se refresca al
 * abrir la pantalla y cada dos minutos.
 */ const CADA = 120000;
function Campana() {
    _s();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [avisos, setAvisos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [abierta, setAbierta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const caja = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Campana.useCallback[recargar]": async ()=>{
            if (!(perfil === null || perfil === void 0 ? void 0 : perfil.id)) return;
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_notificaciones').select('*').order('urgencia').order('creado_en', {
                ascending: false
            }).limit(40);
            setAvisos(data !== null && data !== void 0 ? data : []);
        }
    }["Campana.useCallback[recargar]"], [
        perfil
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Campana.useEffect": ()=>{
            recargar();
            const t = setInterval(recargar, CADA);
            return ({
                "Campana.useEffect": ()=>clearInterval(t)
            })["Campana.useEffect"];
        }
    }["Campana.useEffect"], [
        recargar
    ]);
    // Cerrar al tocar afuera. En el celular, sin esto queda un panel tapando la
    // pantalla que solo se va tocando exactamente la campana otra vez.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Campana.useEffect": ()=>{
            if (!abierta) return;
            const fuera = {
                "Campana.useEffect.fuera": (e)=>{
                    if (caja.current && !caja.current.contains(e.target)) setAbierta(false);
                }
            }["Campana.useEffect.fuera"];
            document.addEventListener('mousedown', fuera);
            return ({
                "Campana.useEffect": ()=>document.removeEventListener('mousedown', fuera)
            })["Campana.useEffect"];
        }
    }["Campana.useEffect"], [
        abierta
    ]);
    const urgentes = avisos.filter((a)=>a.urgencia === 0 && !a.leida).length;
    const sinLeer = avisos.filter((a)=>!a.leida).length;
    const marcarLeida = async (a)=>{
        if (!a.se_puede_marcar) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('notificaciones').update({
            leida_en: new Date().toISOString()
        }).eq('id', a.clave);
        await recargar();
    };
    const marcarTodas = async ()=>{
        const ids = avisos.filter((a)=>a.se_puede_marcar && !a.leida).map((a)=>a.clave);
        if (!ids.length) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('notificaciones').update({
            leida_en: new Date().toISOString()
        }).in('id', ids);
        await recargar();
    };
    // Sin legajo no hay a quién notificar. No se dibuja nada en vez de una campana
    // que siempre está vacía.
    if (!(perfil === null || perfil === void 0 ? void 0 : perfil.id)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: caja,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setAbierta((a)=>!a),
                className: "relative grid h-10 w-10 place-items-center rounded-xl text-slate-400 transition hover:bg-slate-800 hover:text-slate-100",
                "aria-label": "Notificaciones".concat(sinLeer ? ": ".concat(sinLeer, " sin leer") : ''),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Campana.jsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    sinLeer > 0 && // El punto rojo solo si hay algo urgente. Lo informativo mueve el
                    // número pero no el color.
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full px-1 text-[10px] font-semibold text-white ".concat(urgentes > 0 ? 'bg-red-500' : 'bg-slate-600'),
                        children: sinLeer > 9 ? '9+' : sinLeer
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Campana.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Campana.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            abierta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 z-50 mt-2 max-h-[70vh] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto t-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[rgba(15,23,42,0.06)] px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px] font-medium text-slate-200",
                                children: "Notificaciones"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Campana.jsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            avisos.some((a)=>a.se_puede_marcar && !a.leida) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: marcarTodas,
                                className: "text-[12px] text-sky-400 hover:text-sky-300",
                                children: "Marcar leídas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Campana.jsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Campana.jsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    avisos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-3 py-8 text-center text-[13px] text-slate-500",
                        children: "Nada pendiente. Cuando falte algo en un expediente o venza una promesa, va a aparecer acá."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Campana.jsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-slate-800/70",
                        children: avisos.map((a)=>{
                            const Icono = a.urgencia === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"];
                            const cuerpo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2.5 px-3 py-2.5 transition hover:bg-slate-800/60 ".concat(a.leida ? 'opacity-50' : ''),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                                        size: 15,
                                        className: "mt-0.5 shrink-0 ".concat(a.urgencia === 0 ? 'text-amber-400' : 'text-sky-400')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Campana.jsx",
                                        lineNumber: 138,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] leading-snug text-slate-100",
                                                children: a.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Campana.jsx",
                                                lineNumber: 145,
                                                columnNumber: 23
                                            }, this),
                                            a.detalle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 truncate text-[11px] text-slate-500",
                                                children: a.detalle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Campana.jsx",
                                                lineNumber: 147,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Campana.jsx",
                                        lineNumber: 144,
                                        columnNumber: 21
                                    }, this),
                                    a.se_puede_marcar && !a.leida && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            marcarLeida(a);
                                        },
                                        className: "shrink-0 self-start rounded p-1 text-slate-500 hover:text-slate-200",
                                        "aria-label": "Marcar como leída",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Campana.jsx",
                                            lineNumber: 161,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Campana.jsx",
                                        lineNumber: 151,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Campana.jsx",
                                lineNumber: 133,
                                columnNumber: 19
                            }, this);
                            return a.ruta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: a.ruta,
                                onClick: ()=>setAbierta(false),
                                className: "block",
                                children: cuerpo
                            }, a.clave, false, {
                                fileName: "[project]/src/components/layout/Campana.jsx",
                                lineNumber: 168,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: cuerpo
                            }, a.clave, false, {
                                fileName: "[project]/src/components/layout/Campana.jsx",
                                lineNumber: 172,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Campana.jsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this),
                    avisos.some((a)=>!a.se_puede_marcar) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "border-t border-[rgba(15,23,42,0.06)] px-3 py-2 text-[11px] text-slate-500",
                        children: "Los avisos sin tilde desaparecen solos cuando resuelves lo que los causa."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Campana.jsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Campana.jsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Campana.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(Campana, "f8KCvq1e9/0TEO+dVZBg3kR6QqA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = Campana;
var _c;
__turbopack_context__.k.register(_c, "Campana");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server-cog.js [app-client] (ecmascript) <export default as ServerCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Campana$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Campana.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function Navbar(param) {
    let { onAbrirMenu = ()=>{} } = param;
    _s();
    const { puede } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const { usuario, cerrarSesion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [middleware, setMiddleware] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        estado: 'consultando'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            let vigente = true;
            const consultar = {
                "Navbar.useEffect.consultar": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].health().then({
                        "Navbar.useEffect.consultar": (r)=>{
                            var _r_configuracionFaltante;
                            if (!vigente) return;
                            setMiddleware(r.ok ? {
                                estado: 'ok'
                            } : {
                                estado: 'incompleto',
                                detalle: (_r_configuracionFaltante = r.configuracionFaltante) === null || _r_configuracionFaltante === void 0 ? void 0 : _r_configuracionFaltante.join(', ')
                            });
                        }
                    }["Navbar.useEffect.consultar"]).catch({
                        "Navbar.useEffect.consultar": ()=>vigente && setMiddleware({
                                estado: 'caido'
                            })
                    }["Navbar.useEffect.consultar"])
            }["Navbar.useEffect.consultar"];
            consultar();
            const t = setInterval(consultar, 30000);
            return ({
                "Navbar.useEffect": ()=>{
                    vigente = false;
                    clearInterval(t);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const indicador = {
        consultando: [
            'bg-slate-500',
            'consultando…'
        ],
        ok: [
            'bg-emerald-500',
            'middleware ok'
        ],
        incompleto: [
            'bg-amber-500',
            "middleware sin configurar: ".concat(middleware.detalle || '')
        ],
        caido: [
            'bg-red-500',
            'middleware no responde'
        ]
    }[middleware.estado];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center justify-between border-b border-[rgba(15,23,42,0.06)] bg-white px-3 py-2.5 sm:px-6 sm:py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-3 text-xs text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onAbrirMenu,
                        "aria-label": "Abrir el menú",
                        className: "-ml-1 shrink-0 rounded-lg p-1.5 text-slate-500 hover:bg-slate-800 hover:text-slate-200 lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-[#FFFBEB] px-2.5 py-0.5 font-semibold text-amber-300",
                        children: "MODO DEMO — datos de ejemplo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        title: indicador[1],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__["ServerCog"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full ".concat(indicador[0])
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: indicador[1]
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    puede('pagos.registrar') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: "/pagos",
                        title: "Registrar un pago",
                        className: (param)=>{
                            let { isActive } = param;
                            return "flex size-8 items-center justify-center rounded-xl border transition ".concat(isActive ? 'border-transparent bg-[#ECFDF5] text-emerald-400' : 'border-slate-700 text-emerald-400 hover:bg-slate-800');
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Campana$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: "/mi-perfil",
                        title: "Mi perfil y mi contraseña",
                        className: "hidden max-w-[16rem] truncate rounded-lg px-2 py-1 text-xs text-slate-400 hover:bg-slate-800 hover:text-slate-200 sm:inline-block",
                        children: usuario === null || usuario === void 0 ? void 0 : usuario.email
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: cerrarSesion,
                        className: "flex items-center gap-1.5 rounded-xl border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            "Salir"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Navbar, "TP/UThOCFWbEC6UIKrWmZHXDanQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/SinPermiso.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SinPermiso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permisos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function SinPermiso(param) {
    let { que = 'esta pantalla' } = param;
    _s();
    const { rol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-lg py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mb-4 grid h-14 w-14 place-items-center t-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                    size: 24,
                    className: "text-slate-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/SinPermiso.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SinPermiso.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "t-titulo text-lg font-bold text-slate-100",
                children: [
                    "No tienes acceso a ",
                    que
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SinPermiso.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-400",
                children: [
                    "Tu usuario entra como ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-200",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nombreRol"])(rol) || 'sin rol'
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SinPermiso.jsx",
                        lineNumber: 24,
                        columnNumber: 31
                    }, this),
                    " y ese rol no incluye esta sección. Si la necesitas para trabajar, pídele a un administrador que te la habilite en Ajustes → Gestión de personal."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SinPermiso.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/",
                className: "mt-5 inline-block rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-700",
                children: "Volver al inicio"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SinPermiso.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SinPermiso.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(SinPermiso, "9XLv7+xIQ5MtIMD+h4wup6946Pk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = SinPermiso;
var _c;
__turbopack_context__.k.register(_c, "SinPermiso");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Layout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SinPermiso.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rutasPermisos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function Layout(param) {
    let { children } = param;
    _s();
    const { puede, perfil, cargandoPerfil, errorPerfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    const permitido = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, pathname);
    /**
   * El menú, abierto o cerrado. Solo importa en pantallas chicas, donde la
   * barra lateral es un cajón; de `lg` para arriba está siempre a la vista y
   * este estado no la afecta.
   *
   * Se cierra al navegar. Sin eso, elegir una opción deja el menú tapando
   * justo la pantalla que se acaba de abrir, y hay que cerrarlo a mano cada
   * vez.
   */ const [menuAbierto, setMenuAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Layout.useEffect": ()=>setMenuAbierto(false)
    }["Layout.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                abierto: menuAbierto,
                onCerrar: ()=>setMenuAbierto(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onAbrirMenu: ()=>setMenuAbierto(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Layout.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto p-4 sm:p-6",
                        children: cargandoPerfil && !perfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cargando, {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this) : errorPerfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoSePudoVerificar, {
                            error: errorPerfil
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this) : permitido ? children !== null && children !== void 0 ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Layout.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Layout, "5Wp4qbe9VNeyJp9GyCfrg+ZoFps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
_c = Layout;
/**
 * El hueco mientras se resuelve quién entró.
 *
 * Es deliberadamente sobrio: dura menos de un segundo y lo que no puede hacer
 * es parecerse a un error ni a una pantalla vacía definitiva.
 */ /**
 * No se pudo averiguar quién entró.
 *
 * Es un estado raro —red caída, Supabase sin responder— pero tiene que existir
 * como pantalla. Antes no existía y el sistema resolvía solo: trataba el fallo
 * como "este usuario no tiene legajo", que es el caso de una instalación sin
 * migrar, y a ese caso se le abre todo para no dejar a nadie afuera. Un corte de
 * red de un segundo le daba a un vendedor el sistema entero.
 *
 * Decirlo y ofrecer recargar es peor experiencia que adivinar bien, y muchísimo
 * mejor que adivinar mal.
 */ const NoSePudoVerificar = (param)=>{
    let { error } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-md py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "t-titulo text-lg font-bold text-slate-100",
                children: "No se pudo verificar tu perfil"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-400",
                children: "El sistema no pudo leer quién eres, así que no muestra nada hasta saberlo. Suele ser la conexión."
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>window.location.reload(),
                className: "mt-5 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800",
                children: "Reintentar"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 font-mono text-[11px] text-slate-600",
                children: error.message
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.jsx",
        lineNumber: 87,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = NoSePudoVerificar;
const Cargando = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-7 w-48 animate-pulse rounded-lg bg-slate-800/60"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 108,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-72 animate-pulse rounded bg-slate-800/40"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 109,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-3 md:grid-cols-3",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-28 animate-pulse rounded-[18px] bg-slate-800/60"
                    }, i, false, {
                        fileName: "[project]/src/components/layout/Layout.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 110,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.jsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Cargando;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Layout");
__turbopack_context__.k.register(_c1, "NoSePudoVerificar");
__turbopack_context__.k.register(_c2, "Cargando");
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
"[project]/src/components/tecnico/BarraInferior.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESTINOS",
    ()=>DESTINOS,
    "NavEscritorio",
    ()=>NavEscritorio,
    "default",
    ()=>BarraInferior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-client] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
;
;
;
const DESTINOS = [
    {
        to: '/campo',
        label: 'Dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        end: true
    },
    {
        to: '/campo/ordenes',
        label: 'Órdenes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
    },
    {
        to: '/campo/soporte',
        label: 'Soporte',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"]
    },
    {
        to: '/campo/inventario',
        label: 'Inventario',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"]
    },
    {
        to: '/campo/perfil',
        label: 'Perfil',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    }
];
function NavEscritorio(param) {
    let { pendientes = {} } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden items-center gap-1 md:flex",
        children: DESTINOS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                to: d.to,
                end: d.end,
                className: (param)=>{
                    let { isActive } = param;
                    return "relative flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] transition ".concat(isActive ? 'bg-sky-600/15 font-medium text-sky-300' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200');
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(d.icon, {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    d.label,
                    pendientes[d.label.toLowerCase()] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "grid h-4 min-w-4 place-items-center rounded-full bg-rose-500/20 px-1 text-[10px] font-semibold text-rose-300",
                        children: pendientes[d.label.toLowerCase()]
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                ]
            }, d.to, true, {
                fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                lineNumber: 62,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c = NavEscritorio;
function BarraInferior(param) {
    let { pendientes = {} } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-white/95 backdrop-blur md:hidden",
        // El teléfono con gesto de inicio se come la última franja: sin esto, el
        // último centímetro de los botones no responde y parece que la app se
        // colgó.
        style: {
            paddingBottom: 'env(safe-area-inset-bottom)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-lg",
            children: DESTINOS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                    to: d.to,
                    end: d.end,
                    className: (param)=>{
                        let { isActive } = param;
                        return "relative flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] transition ".concat(isActive ? 'text-sky-400' : 'text-slate-500');
                    },
                    children: (param)=>{
                        let { isActive } = param;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(d.icon, {
                                            size: 21,
                                            strokeWidth: isActive ? 2.4 : 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this),
                                        pendientes[d.label.toLowerCase()] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -right-1 -top-0.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-slate-950"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this),
                                d.label
                            ]
                        }, void 0, true);
                    }
                }, d.to, false, {
                    fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_c1 = BarraInferior;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavEscritorio");
__turbopack_context__.k.register(_c1, "BarraInferior");
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
"[project]/src/components/tecnico/EstadoConexion.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EstadoConexion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-client] (ecmascript) <export default as CloudOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cola.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function EstadoConexion() {
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [enLinea, setEnLinea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pendientes, setPendientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [frenados, setFrenados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [enviando, setEnviando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EstadoConexion.useEffect": ()=>{
            const refrescar = {
                "EstadoConexion.useEffect.refrescar": async ()=>{
                    setPendientes(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contarPendientes"])());
                    setFrenados(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trabados"])());
                }
            }["EstadoConexion.useEffect.refrescar"];
            refrescar();
            const soltar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alCambiar"])(refrescar);
            const arriba = {
                "EstadoConexion.useEffect.arriba": ()=>setEnLinea(true)
            }["EstadoConexion.useEffect.arriba"];
            const abajo = {
                "EstadoConexion.useEffect.abajo": ()=>setEnLinea(false)
            }["EstadoConexion.useEffect.abajo"];
            window.addEventListener('online', arriba);
            window.addEventListener('offline', abajo);
            return ({
                "EstadoConexion.useEffect": ()=>{
                    soltar();
                    window.removeEventListener('online', arriba);
                    window.removeEventListener('offline', abajo);
                }
            })["EstadoConexion.useEffect"];
        }
    }["EstadoConexion.useEffect"], []);
    const enviarAhora = async ()=>{
        setEnviando(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["despachar"])();
        } finally{
            setEnviando(false);
        }
    };
    // Todo bien y nada pendiente: no se muestra nada. Un cartel verde permanente
    // de "conectado" se vuelve invisible en dos días, y entonces el rojo tampoco
    // se ve.
    if (enLinea && pendientes === 0) return null;
    const hayTrabados = frenados.length > 0;
    const tono = hayTrabados ? 'border-rose-500/40 bg-rose-500/15 text-rose-200' : !enLinea ? 'border-amber-500/40 bg-amber-500/15 text-amber-200' : 'border-sky-500/40 bg-sky-500/15 text-sky-200';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b px-4 py-2 text-[12px] ".concat(tono),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-6xl items-center gap-2",
                children: [
                    hayTrabados ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        size: 15,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this) : !enLinea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                        size: 15,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__["CloudOff"], {
                        size: 15,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0 flex-1",
                        children: hayTrabados ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                frenados.length,
                                ' ',
                                frenados.length === 1 ? 'cosa no se pudo enviar' : 'cosas no se pudieron enviar'
                            ]
                        }, void 0, true) : !enLinea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Sin conexión.",
                                ' ',
                                pendientes > 0 ? "".concat(pendientes, " ").concat(pendientes === 1 ? 'cosa espera' : 'cosas esperan', " para enviarse.") : 'Puedes seguir trabajando.'
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                pendientes,
                                " ",
                                pendientes === 1 ? 'cosa falta enviar' : 'cosas faltan enviar'
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    enLinea && pendientes > 0 && !hayTrabados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: enviarAhora,
                        disabled: enviando,
                        className: "flex shrink-0 items-center gap-1 rounded-lg border border-current/30 px-2 py-1 font-medium disabled:opacity-50",
                        children: [
                            enviando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 12,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            "Enviar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    hayTrabados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setAbierto((v)=>!v),
                        className: "shrink-0 rounded-lg border border-current/30 px-2 py-1 font-medium",
                        children: abierto ? 'Ocultar' : 'Ver'
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            abierto && hayTrabados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mt-2 max-w-6xl space-y-1.5",
                children: frenados.map((op)=>{
                    var _DESCRIPCION_op_tipo;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "t-panel p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium",
                                children: (_DESCRIPCION_op_tipo = DESCRIPCION[op.tipo]) !== null && _DESCRIPCION_op_tipo !== void 0 ? _DESCRIPCION_op_tipo : op.tipo
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[11px] opacity-70",
                                children: op.error
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] opacity-50",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(op.creado),
                                    " · ",
                                    op.intentos,
                                    " intentos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.5 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reintentar"])(op.id),
                                        className: "flex items-center gap-1 rounded border border-current/30 px-2 py-0.5 text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            " Reintentar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: async ()=>{
                                            // Confirmación explícita: descartar es perder el trabajo del
                                            // técnico, y perderlo en silencio sería lo peor que puede
                                            // hacer esta pantalla.
                                            if (await confirmar('Se va a perder lo que quedó sin enviar. ¿Descartar?')) {
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["descartar"])(op.id);
                                            }
                                        },
                                        className: "flex items-center gap-1 rounded border border-current/30 px-2 py-0.5 text-[11px] opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            " Descartar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        ]
                    }, op.id, true, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(EstadoConexion, "MAQmNGAsgZhINxKVufFSOf4UFvg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c = EstadoConexion;
const DESCRIPCION = {
    'instalacion.guardar': 'Avance de una instalación',
    'instalacion.finalizar': 'Cierre de una instalación',
    'material.consumir': 'Descuento de material',
    'ticket.cerrar': 'Cierre de un ticket',
    'ticket.estado': 'Cambio de estado de un ticket'
};
var _c;
__turbopack_context__.k.register(_c, "EstadoConexion");
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
"[project]/src/components/tecnico/LayoutCampo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LayoutCampo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/campo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/BarraInferior.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$EstadoConexion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/EstadoConexion.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cola.js [app-client] (ecmascript)");
// Registra qué sabe hacer la cola. El import tiene efecto de módulo y no
// exporta nada que se use acá: sin él, la cola acepta operaciones que después
// no sabe despachar.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/colaCampo.js [app-client] (ecmascript)");
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
function LayoutCampo(param) {
    let { children } = param;
    _s();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    const [sinLeer, setSinLeer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const contar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LayoutCampo.useCallback[contar]": async ()=>{
            const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_notificaciones').select('clave', {
                count: 'exact',
                head: true
            }).eq('leida', false);
            setSinLeer(count !== null && count !== void 0 ? count : 0);
        }
    }["LayoutCampo.useCallback[contar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutCampo.useEffect": ()=>{
            contar();
            // Cada dos minutos, igual que el resto: son datos que cambian por hora, y
            // el técnico está con datos móviles.
            const t = setInterval(contar, 120000);
            return ({
                "LayoutCampo.useEffect": ()=>clearInterval(t)
            })["LayoutCampo.useEffect"];
        }
    }["LayoutCampo.useEffect"], [
        contar
    ]);
    // El despachador vive mientras la app de campo está abierta. Va acá y no en
    // `main.jsx` porque la cola es del técnico: nadie más encola nada, y
    // arrancarla para todos dejaría un intervalo corriendo en las pantallas de
    // oficina sin ninguna razón.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutCampo.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrancarCola"])()
    }["LayoutCampo.useEffect"], []);
    // El título de la sección, para que en el celular se sepa dónde se está: la
    // barra de abajo marca el ícono activo, pero un ícono resaltado en 10 px no
    // alcanza cuando hay sol de frente.
    const seccion = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESTINOS"].find((d)=>d.end ? pathname === d.to : pathname.startsWith(d.to));
    const enInicio = pathname === '/campo';
    var _seccion_label, _perfil_nombre, _perfil_apellido;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-dvh bg-[#F6F8FB] pb-24 text-slate-200 md:pb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-30 border-b border-slate-800 bg-white/95 backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[15px] font-semibold text-slate-100",
                                        children: enInicio ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saludo"])(perfil === null || perfil === void 0 ? void 0 : perfil.nombre) : (_seccion_label = seccion === null || seccion === void 0 ? void 0 : seccion.label) !== null && _seccion_label !== void 0 ? _seccion_label : 'Campo'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500",
                                        children: enInicio ? new Date().toLocaleDateString('es-EC', {
                                            weekday: 'long',
                                            day: 'numeric',
                                            month: 'long'
                                        }) : "".concat((_perfil_nombre = perfil === null || perfil === void 0 ? void 0 : perfil.nombre) !== null && _perfil_nombre !== void 0 ? _perfil_nombre : '', " ").concat((_perfil_apellido = perfil === null || perfil === void 0 ? void 0 : perfil.apellido) !== null && _perfil_apellido !== void 0 ? _perfil_apellido : '').trim()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavEscritorio"], {
                                pendientes: {
                                    avisos: sinLeer
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: "/campo/avisos",
                                className: "relative grid h-10 w-10 shrink-0 place-items-center rounded-xl text-slate-400 active:bg-slate-800",
                                "aria-label": sinLeer ? "".concat(sinLeer, " avisos sin leer") : 'Avisos',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        size: 19
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    sinLeer > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white",
                                        children: sinLeer > 9 ? '9+' : sinLeer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$EstadoConexion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl p-3 md:p-4",
                children: children !== null && children !== void 0 ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Outlet"], {
                    context: {
                        recargarAvisos: contar
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                    lineNumber: 113,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                pendientes: {
                    avisos: sinLeer
                }
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(LayoutCampo, "mDjV1JcCIn/WWmlhTPKuXUE+c/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
_c = LayoutCampo;
var _c;
__turbopack_context__.k.register(_c, "LayoutCampo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ProtectedRoute.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function ProtectedRoute(param) {
    let { children } = param;
    _s();
    const { sesion, cargando } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {
        texto: "Verificando sesión…"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ProtectedRoute.jsx",
        lineNumber: 8,
        columnNumber: 24
    }, this);
    if (!sesion) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
        to: "/login",
        replace: true
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ProtectedRoute.jsx",
        lineNumber: 9,
        columnNumber: 23
    }, this);
    return children;
}
_s(ProtectedRoute, "89IEKbJ0GWjnbixoPbiMNBedCWQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/NextPageShell.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldShell",
    ()=>FieldShell,
    "ProtectedShell",
    ()=>ProtectedShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Layout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$LayoutCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/LayoutCampo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ProtectedRoute$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ProtectedRoute.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function ProtectedShell(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ProtectedRoute$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/NextPageShell.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/NextPageShell.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ProtectedShell;
function FieldShell(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ProtectedRoute$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$LayoutCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/NextPageShell.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/NextPageShell.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c1 = FieldShell;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProtectedShell");
__turbopack_context__.k.register(_c1, "FieldShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/onus/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$olt$2f$OnuDetallePage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/olt/OnuDetallePage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$NextPageShell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/NextPageShell.jsx [app-client] (ecmascript)");
'use client';
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$NextPageShell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedShell"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$olt$2f$OnuDetallePage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/onus/[id]/page.jsx",
            lineNumber: 7,
            columnNumber: 26
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/onus/[id]/page.jsx",
        lineNumber: 7,
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

//# sourceMappingURL=_77c0e2d1._.js.map