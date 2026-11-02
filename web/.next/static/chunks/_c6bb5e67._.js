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
"[project]/src/components/olt/DetalleTarjeta.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetalleTarjeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-plus.js [app-client] (ecmascript) <export default as PackagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/optica.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/olts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$HistorialOptico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/HistorialOptico.jsx [app-client] (ecmascript)");
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
/**
 * Lo que hay detrás de cada tarjeta del tablero.
 *
 * Cada número de arriba es una pregunta a medio hacer: "19 con señal baja" no
 * sirve hasta saber cuáles y de qué abonado son. Esto lo completa.
 *
 * La consulta se arma según la tarjeta y se pide recién al abrirla: cargar las
 * cuatro listas de entrada sería traer casi todas las ONUs para mostrar una.
 */ const CONSULTAS = {
    online: {
        titulo: 'ONTs en línea',
        ayuda: 'Con servicio en este momento, según la última lectura del equipo.',
        filtrar: (q)=>q.eq('onu_estado', 'online'),
        orden: {
            columna: 'rx_power_dbm',
            asc: true
        }
    },
    caidas: {
        titulo: 'ONTs caídas',
        ayuda: 'Sin servicio. La causa —sin luz, corte de fibra, apagada— solo se sabe leyendo la óptica de cada una por la CLI; el inventario por SNMP no la trae.',
        filtrar: (q)=>q.neq('onu_estado', 'online'),
        orden: {
            columna: 'slot',
            asc: true
        }
    },
    senal: {
        titulo: 'ONTs con señal baja',
        ayuda: 'Por debajo de −24 dBm. Si varias son del mismo puerto, el problema es la fibra o el módulo óptico y no los equipos de los abonados.',
        filtrar: (q)=>q.lt('rx_power_dbm', -24),
        orden: {
            columna: 'rx_power_dbm',
            asc: true
        },
        // El número de hoy no dice si esto viene bajando, y esa es la diferencia
        // entre una visita programada y una urgencia de madrugada.
        conTendencia: true,
        siVacio: true
    }
};
function Lista(param) {
    let { tipo } = param;
    _s();
    const def = CONSULTAS[tipo];
    const [filas, setFilas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tendencias, setTendencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [abierta, setAbierta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sinAlertas, setSinAlertas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Lista.useCallback[cargar]": async ()=>{
            let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_onus_clientes').select('*');
            q = def.filtrar(q);
            const { data, error: err } = await q.order(def.orden.columna, {
                ascending: def.orden.asc
            }).limit(300);
            if (err) return setError(err);
            let filas = data !== null && data !== void 0 ? data : [];
            // Ninguna bajo el umbral es una buena noticia, pero una tarjeta vacía no
            // sirve para nada. Se muestran igual las peores: son las que hay que
            // vigilar, y con la tendencia al lado se ve cuál se está yendo.
            if (!filas.length && def.siVacio) {
                const { data: peores } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_onus_clientes').select('*').not('rx_power_dbm', 'is', null).order('rx_power_dbm', {
                    ascending: true
                }).limit(15);
                filas = peores !== null && peores !== void 0 ? peores : [];
                setSinAlertas(true);
            }
            setFilas(filas);
            const data2 = filas;
            // La tendencia se pide en UNA consulta para toda la lista, no una por fila:
            // con trescientas ONTs serían trescientas idas y vueltas.
            if (def.conTendencia && data2.length) {
                const { data: t } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_onu_optica_tendencia').select('onu_id, delta_db, tendencia, muestras').in('onu_id', data2.map({
                    "Lista.useCallback[cargar]": (d)=>d.onu_id
                }["Lista.useCallback[cargar]"]));
                if (t) setTendencias(new Map(t.map({
                    "Lista.useCallback[cargar]": (x)=>[
                            x.onu_id,
                            x
                        ]
                }["Lista.useCallback[cargar]"])));
            }
        }
    }["Lista.useCallback[cargar]"], [
        def
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lista.useEffect": ()=>{
            cargar();
        }
    }["Lista.useEffect"], [
        cargar
    ]);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
        error: error
    }, void 0, false, {
        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
        lineNumber: 102,
        columnNumber: 21
    }, this);
    if (!filas) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonTabla"], {
        filas: 5,
        columnas: 5
    }, void 0, false, {
        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
        lineNumber: 103,
        columnNumber: 22
    }, this);
    // Cuántas por puerto: es lo que delata una causa común.
    const porPuerto = new Map();
    for (const f of filas){
        const k = "".concat(f.olt, " · ").concat(f.slot, "/").concat(f.puerto);
        var _porPuerto_get;
        porPuerto.set(k, ((_porPuerto_get = porPuerto.get(k)) !== null && _porPuerto_get !== void 0 ? _porPuerto_get : 0) + 1);
    }
    const concentradas = [
        ...porPuerto.entries()
    ].filter((param)=>{
        let [, n] = param;
        return n > 2;
    }).sort((a, b)=>b[1] - a[1]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs leading-relaxed text-slate-500",
                children: def.ayuda
            }, void 0, false, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            sinAlertas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Ninguna ONT por debajo de −24 dBm."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    " Se muestran las de peor señal igual: son las que conviene mirar de vez en cuando. La columna de tendencia dice si alguna viene bajando, que es lo que avisa antes de que corte."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            concentradas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: [
                    "Se concentran en pocos puertos:",
                    ' ',
                    concentradas.slice(0, 4).map((param)=>{
                        let [k, n] = param;
                        return "".concat(k, " (").concat(n, ")");
                    }).join(' · '),
                    ". Eso apunta a una causa común, no a ",
                    filas.length,
                    " problemas distintos."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 126,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                columnas: def.conTendencia ? [
                    'OLT',
                    'Ubicación',
                    'Serie',
                    'Abonado',
                    'Señal',
                    'Tendencia',
                    ''
                ] : [
                    'OLT',
                    'Ubicación',
                    'Serie',
                    'Abonado',
                    'Señal',
                    'Estado'
                ],
                filas: filas,
                vacio: "Ninguna.",
                renderFila: (o)=>{
                    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nivel"])(o.rx_power_dbm);
                    const t = tendencias.get(o.onu_id);
                    const esta = abierta === o.onu_id;
                    var _o_nombre_en_la_olt, _o_cliente, _ref;
                    return [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "text-slate-300 ".concat(esta ? 'bg-slate-800/40' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs text-slate-400",
                                    children: o.olt
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-xs text-slate-500",
                                    children: [
                                        o.slot,
                                        "/",
                                        o.puerto,
                                        "/",
                                        o.onu_index
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-xs",
                                    children: o.sn
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-sm",
                                    children: o.client_id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/clientes/".concat(o.client_id),
                                        className: "text-slate-100 hover:text-sky-300",
                                        children: o.cliente
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                        lineNumber: 158,
                                        columnNumber: 19
                                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: [
                                            (_o_nombre_en_la_olt = o.nombre_en_la_olt) !== null && _o_nombre_en_la_olt !== void 0 ? _o_nombre_en_la_olt : '—',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                color: "azul",
                                                children: "sin ficha"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                                lineNumber: 163,
                                                columnNumber: 49
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-xs ".concat(n.punto === 'bg-rose-500' ? 'text-rose-300' : ''),
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$optica$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbm"])(o.rx_power_dbm)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, void 0),
                                def.conTendencia ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 text-xs",
                                            children: !t || t.tendencia === 'sin_datos' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600",
                                                children: "sin datos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                                lineNumber: 175,
                                                columnNumber: 23
                                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: t.tendencia === 'empeorando' ? 'text-rose-300' : t.tendencia === 'mejorando' ? 'text-emerald-300' : 'text-slate-400',
                                                title: "".concat(t.muestras, " lecturas"),
                                                children: [
                                                    t.delta_db > 0 ? '+' : '',
                                                    Number(t.delta_db).toFixed(1),
                                                    " dB",
                                                    t.tendencia === 'empeorando' && ' ↓'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                                lineNumber: 177,
                                                columnNumber: 23
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setAbierta(esta ? null : o.onu_id),
                                                className: "flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    esta ? 'ocultar' : 'historial'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                                lineNumber: 194,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: o.onu_estado === 'online' ? 'verde' : 'gris',
                                        children: o.onu_estado
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                        lineNumber: 206,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, void 0)
                            ]
                        }, o.onu_id, true, {
                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, void 0),
                        esta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 7,
                                className: "bg-[#F6F8FB] px-3 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$HistorialOptico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onuId: o.onu_id,
                                    nombre: (_ref = (_o_cliente = o.cliente) !== null && _o_cliente !== void 0 ? _o_cliente : o.nombre_en_la_olt) !== null && _ref !== void 0 ? _ref : o.sn
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 214,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                lineNumber: 213,
                                columnNumber: 17
                            }, void 0)
                        }, "".concat(o.onu_id, "-historial"), false, {
                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, void 0)
                    ];
                }
            }, void 0, false, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            filas.length === 300 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-slate-600",
                children: "Se muestran las primeras 300. Usa los filtros de la pestaña ONUs de cada OLT para el listado completo."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(Lista, "hQbzGlOZySiTGaoXXBNBDCNmIHA=");
_c = Lista;
function Esperando(param) {
    let { esperando, onBuscar, buscando, onAutorizar, onVer, onPlantillas, onCargarOnu } = param;
    var _esperando_olts;
    if (!(esperando === null || esperando === void 0 ? void 0 : (_esperando_olts = esperando.olts) === null || _esperando_olts === void 0 ? void 0 : _esperando_olts.length)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    children: "Estas ONTs están conectadas a la fibra pero nadie las autorizó todavía: el equipo las ve y no les da servicio. El barrido corre solo cada pocos minutos; acá se muestra lo último que encontró."
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variante: "primario",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
                    onClick: onBuscar,
                    cargando: buscando,
                    children: "Escanear ahora"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
            lineNumber: 238,
            columnNumber: 7
        }, this);
    }
    // Agrupado por OLT: es como se recorre una planta en la realidad, y deja ver
    // de un vistazo cuáles se consultaron bien y cuáles no.
    const porOlt = new Map();
    var _esperando_olts1;
    for (const o of (_esperando_olts1 = esperando.olts) !== null && _esperando_olts1 !== void 0 ? _esperando_olts1 : [])porOlt.set(o.olt_id, {
        ...o,
        onts: []
    });
    for (const o of esperando.onts){
        if (porOlt.has(o.olt_id)) porOlt.get(o.olt_id).onts.push(o);
    }
    const grupos = [
        ...porOlt.values()
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-xs leading-relaxed text-slate-500",
                        children: "SNMP dice en qué puertos hay candidatas y la CLI confirma solo esos: el registro del equipo conserva ONTs que ya salieron de la cola, así que sin confirmar mostraría equipos que no están."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
                        onClick: onBuscar,
                        cargando: buscando,
                        children: "Escanear ahora"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            grupos.map((g)=>{
                var _g_puertos, _g_ms;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            to: "/olts/".concat(g.olt_id),
                                            className: "text-sm text-slate-100 hover:text-sky-300",
                                            children: [
                                                g.numero ? "".concat(g.numero, " · ") : '',
                                                g.olt
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        !g.tiene_snmp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "gris",
                                            children: "sin SNMP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this) : g.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "rojo",
                                            children: "no se pudo consultar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this) : g.onts.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "azul",
                                            children: [
                                                g.onts.length,
                                                " esperando"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "verde",
                                            children: "sin ONTs nuevas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-slate-600",
                                    children: !g.tiene_snmp ? 'sin comunidad SNMP cargada' : g.error ? g.error : g.at ? "escaneada ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hace"])(g.hace), " · ").concat((_g_puertos = g.puertos) !== null && _g_puertos !== void 0 ? _g_puertos : 0, " puertos").concat(g.descartadas ? " · ".concat(g.descartadas, " descartadas") : '', " · ").concat((((_g_ms = g.ms) !== null && _g_ms !== void 0 ? _g_ms : 0) / 1000).toFixed(1), " s") : 'nunca escaneada'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        g.onts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                            columnas: [
                                'Ubicación',
                                'Serie',
                                'Modelo',
                                'Detectada',
                                ''
                            ],
                            filas: g.onts,
                            renderFila: (o, i)=>{
                                var _o_modelo;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "text-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 font-mono text-xs text-slate-500",
                                            children: [
                                                "placa ",
                                                o.slot,
                                                " · puerto ",
                                                o.puerto
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 font-mono text-xs text-slate-100",
                                            children: o.sn
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 text-xs",
                                            children: (_o_modelo = o.modelo) !== null && _o_modelo !== void 0 ? _o_modelo : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 314,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 text-xs text-slate-500",
                                            children: o.detectada ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(o.detectada) : 'no informada'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 315,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variante: "fantasma",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
                                                        onClick: ()=>onVer === null || onVer === void 0 ? void 0 : onVer({
                                                                ...o,
                                                                olt_id: g.olt_id,
                                                                olt: g.olt
                                                            }),
                                                        children: "Ver ONU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                                        lineNumber: 322,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variante: "exito",
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"],
                                                        onClick: ()=>onAutorizar === null || onAutorizar === void 0 ? void 0 : onAutorizar({
                                                                ...o,
                                                                olt_id: g.olt_id,
                                                                olt: g.olt
                                                            }),
                                                        children: "Autorizar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                                        lineNumber: 329,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                                lineNumber: 321,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                            lineNumber: 320,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, "".concat(o.sn, "-").concat(i), true, {
                                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                                    lineNumber: 309,
                                    columnNumber: 17
                                }, void 0);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this)
                    ]
                }, g.olt_id, true, {
                    fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this);
            }),
            esperando.onts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-slate-500",
                children: "Se autorizan desde la OLT correspondiente, en su pestaña de ONUs."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 346,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 border-t border-slate-800 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
                        onClick: onPlantillas,
                        children: "Plantillas de autorización"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "exito",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"],
                        onClick: onCargarOnu,
                        children: "Cargar ONU para autorizar después"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] leading-snug text-slate-500",
                children: "Cargando la serie antes de instalar, el técnico conecta y la ONT entra sola en el barrido siguiente: no hace falta que nadie esté mirando la pantalla en ese momento."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
                lineNumber: 361,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_c1 = Esperando;
function DetalleTarjeta(param) {
    let { tipo, esperando, onCerrar, onBuscar, buscando, onAutorizar, onVer, onPlantillas, onCargarOnu } = param;
    var _CONSULTAS_tipo;
    const titulo = tipo === 'esperando' ? 'Esperando autorización' : (_CONSULTAS_tipo = CONSULTAS[tipo]) === null || _CONSULTAS_tipo === void 0 ? void 0 : _CONSULTAS_tipo.titulo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        title: titulo,
        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variante: "fantasma",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
            onClick: onCerrar,
            children: "Cerrar"
        }, void 0, false, {
            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
            lineNumber: 386,
            columnNumber: 9
        }, void 0),
        children: tipo === 'esperando' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Esperando, {
            esperando: esperando,
            onBuscar: onBuscar,
            buscando: buscando,
            onAutorizar: onAutorizar,
            onVer: onVer,
            onPlantillas: onPlantillas,
            onCargarOnu: onCargarOnu
        }, void 0, false, {
            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
            lineNumber: 392,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lista, {
            tipo: tipo
        }, void 0, false, {
            fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
            lineNumber: 402,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/olt/DetalleTarjeta.jsx",
        lineNumber: 383,
        columnNumber: 5
    }, this);
}
_c2 = DetalleTarjeta;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Lista");
__turbopack_context__.k.register(_c1, "Esperando");
__turbopack_context__.k.register(_c2, "DetalleTarjeta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/AltasPorDia.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AltasPorDia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AltasPorDia(param) {
    let { filas, dias = 45 } = param;
    _s();
    const [ventana, setVentana] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dias);
    const barras = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AltasPorDia.useMemo[barras]": ()=>{
            if (!(filas === null || filas === void 0 ? void 0 : filas.length)) return [];
            // Se suman las OLTs: el gráfico es del sistema entero.
            const porDia = new Map();
            for (const f of filas){
                if (!f.dia) continue;
                var _porDia_get;
                porDia.set(f.dia, ((_porDia_get = porDia.get(f.dia)) !== null && _porDia_get !== void 0 ? _porDia_get : 0) + Number(f.altas));
            }
            if (!porDia.size) return [];
            const fechas = [
                ...porDia.keys()
            ].sort();
            const ultima = new Date("".concat(fechas[fechas.length - 1], "T00:00:00"));
            const salida = [];
            for(let i = ventana - 1; i >= 0; i--){
                const d = new Date(ultima);
                d.setDate(d.getDate() - i);
                const clave = d.toISOString().slice(0, 10);
                var _porDia_get1;
                salida.push({
                    dia: clave,
                    altas: (_porDia_get1 = porDia.get(clave)) !== null && _porDia_get1 !== void 0 ? _porDia_get1 : 0
                });
            }
            return salida;
        }
    }["AltasPorDia.useMemo[barras]"], [
        filas,
        ventana
    ]);
    if (!barras.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-6 text-center text-sm text-slate-500",
            children: "Ninguna ONT tiene fecha de autorización. La trae la descripción del equipo al importarla."
        }, void 0, false, {
            fileName: "[project]/src/components/olt/AltasPorDia.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    const max = Math.max(...barras.map((b)=>b.altas), 1);
    const total = barras.reduce((a, b)=>a + b.altas, 0);
    const conAltas = barras.filter((b)=>b.altas > 0).length;
    const etiqueta = (dia)=>{
        const d = new Date("".concat(dia, "T00:00:00"));
        return "".concat(String(d.getDate()).padStart(2, '0'), "/").concat(String(d.getMonth() + 1).padStart(2, '0'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-200",
                                children: total
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            " altas en ",
                            conAltas,
                            " días"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            30,
                            45,
                            90,
                            365
                        ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setVentana(n),
                                className: "rounded px-2 py-0.5 text-[11px] transition ".concat(ventana === n ? 'bg-sky-600/20 text-sky-300' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'),
                                children: n === 365 ? '1 año' : "".concat(n, " d")
                            }, n, false, {
                                fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-36 items-end gap-[2px] overflow-x-auto t-panel p-2",
                children: barras.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        title: "".concat(b.dia, ": ").concat(b.altas, " ").concat(b.altas === 1 ? 'alta' : 'altas'),
                        className: "group flex min-w-[4px] flex-1 flex-col justify-end",
                        style: {
                            height: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full rounded-sm transition group-hover:bg-sky-400 ".concat(b.altas ? 'bg-sky-600' : 'bg-slate-800/60'),
                            // Los días vacíos conservan una línea mínima visible: si no, el eje
                            // desaparece y no se ve cuánto tiempo pasó sin movimiento.
                            style: {
                                height: b.altas ? "".concat(Math.max(b.altas / max * 100, 6), "%") : '2px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, b.dia, false, {
                        fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-[10px] text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: etiqueta(barras[0].dia)
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "máximo en un día: ",
                            max
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: etiqueta(barras[barras.length - 1].dia)
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AltasPorDia.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/AltasPorDia.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(AltasPorDia, "q5raFgnvqgWJVJ6VRvvULvpCuy4=");
_c = AltasPorDia;
var _c;
__turbopack_context__.k.register(_c, "AltasPorDia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/AutorizarOnt.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AutorizarOnt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
/**
 * Autorizar una ONT que está esperando.
 *
 * El criterio de la pantalla: **lo que el sistema ya sabe, no se pregunta**.
 *
 * La serie, la placa y el puerto los trae el equipo. El nombre, la dirección y
 * el plan salen de la orden de instalación, que se encuentra sola porque el
 * técnico escaneó el QR de esa misma ONT al instalarla. El perfil de servicio
 * se propone por el modelo que reportó la ONT.
 *
 * Queda para tipear lo único que de verdad varía: la VLAN. Todo lo demás está
 * lleno y editable — poder corregirlo no es lo mismo que tener que cargarlo.
 */ /** Sólo lectura: lo dice el equipo y no se discute desde acá. */ function Fijo(param) {
    let { label, valor, hint } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
        label: label,
        hint: hint,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "t-card-sm px-3 py-2 text-sm text-slate-300",
            children: valor !== null && valor !== void 0 ? valor : '—'
        }, void 0, false, {
            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Fijo;
function AutorizarOnt(param) {
    let { olt, ont, onListo, onCancelar } = param;
    var _datos_olt, _datos_planes_find, _datos_perfiles_line_find;
    _s();
    const [datos, setDatos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutorizarOnt.useCallback[cargar]": async ()=>{
            setCargando(true);
            setError(null);
            try {
                var _d_instalacion;
                var _olt_olt_id;
                const d = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.datosAutorizacion((_olt_olt_id = olt.olt_id) !== null && _olt_olt_id !== void 0 ? _olt_olt_id : olt.id, ont.sn);
                setDatos(d);
                var _d_sugerido_line_profile_id, _d_sugerido_srv_profile_id, _d_sugerido_vlan, _d_sugerido_gemport, _d_sugerido_plan_id, _d_sugerido_nombre, _d_sugerido_comentario, _d_instalacion_id;
                setForm({
                    lineProfileId: (_d_sugerido_line_profile_id = d.sugerido.line_profile_id) !== null && _d_sugerido_line_profile_id !== void 0 ? _d_sugerido_line_profile_id : '',
                    srvProfileId: (_d_sugerido_srv_profile_id = d.sugerido.srv_profile_id) !== null && _d_sugerido_srv_profile_id !== void 0 ? _d_sugerido_srv_profile_id : '',
                    vlan: (_d_sugerido_vlan = d.sugerido.vlan) !== null && _d_sugerido_vlan !== void 0 ? _d_sugerido_vlan : '',
                    gemport: (_d_sugerido_gemport = d.sugerido.gemport) !== null && _d_sugerido_gemport !== void 0 ? _d_sugerido_gemport : 1,
                    plan_id: (_d_sugerido_plan_id = d.sugerido.plan_id) !== null && _d_sugerido_plan_id !== void 0 ? _d_sugerido_plan_id : '',
                    nombre: (_d_sugerido_nombre = d.sugerido.nombre) !== null && _d_sugerido_nombre !== void 0 ? _d_sugerido_nombre : '',
                    comentario: (_d_sugerido_comentario = d.sugerido.comentario) !== null && _d_sugerido_comentario !== void 0 ? _d_sugerido_comentario : '',
                    instalacion_id: (_d_instalacion_id = (_d_instalacion = d.instalacion) === null || _d_instalacion === void 0 ? void 0 : _d_instalacion.id) !== null && _d_instalacion_id !== void 0 ? _d_instalacion_id : null
                });
            } catch (err) {
                setError(err);
            } finally{
                setCargando(false);
            }
        }
    }["AutorizarOnt.useCallback[cargar]"], [
        olt,
        ont.sn
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutorizarOnt.useEffect": ()=>{
            cargar();
        }
    }["AutorizarOnt.useEffect"], [
        cargar
    ]);
    const set = (campo)=>(e)=>setForm((f)=>({
                    ...f,
                    [campo]: e.target.value
                }));
    async function autorizar(e) {
        e.preventDefault();
        setGuardando(true);
        setError(null);
        try {
            var _olt_olt_id;
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.autorizar((_olt_olt_id = olt.olt_id) !== null && _olt_olt_id !== void 0 ? _olt_olt_id : olt.id, {
                sn: ont.sn,
                slot: ont.slot,
                puerto: ont.puerto,
                ...form,
                vlan: Number(form.vlan),
                gemport: Number(form.gemport) || 1
            });
            setResultado(r);
            onListo === null || onListo === void 0 ? void 0 : onListo();
        } catch (err) {
            setError(err);
        } finally{
            setGuardando(false);
        }
    }
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {
        texto: "Buscando la orden de instalación y los perfiles del equipo…"
    }, void 0, false, {
        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
        lineNumber: 90,
        columnNumber: 24
    }, this);
    if (resultado) {
        var _resultado_comandos;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            size: 20,
                            className: "mt-0.5 shrink-0 text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-emerald-300",
                                    children: [
                                        "ONT autorizada en la placa ",
                                        resultado.slot,
                                        " puerto ",
                                        resultado.puerto,
                                        ", ONT-ID",
                                        ' ',
                                        resultado.ontId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-0.5 text-xs text-slate-400",
                                    children: resultado.guardadaEnBase ? 'Registrada en el equipo y guardada en el sistema.' : 'Registrada en el equipo. No se pudo guardar en el sistema — revisa el detalle.'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                ((_resultado_comandos = resultado.comandos) === null || _resultado_comandos === void 0 ? void 0 : _resultado_comandos.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border border-slate-800 bg-black/40 p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-1 text-[11px] uppercase tracking-wider text-slate-500",
                            children: "Lo que se le mandó al equipo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        resultado.comandos.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "whitespace-pre-wrap break-all font-mono text-[11px] text-slate-400",
                                children: c
                            }, c, false, {
                                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this),
                resultado.ip_gestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-400",
                    children: [
                        "IP de gestión configurada sola:",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-slate-200",
                            children: resultado.ip_gestion
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this),
                resultado.aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                    tipo: "alerta",
                    children: resultado.aviso
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                    lineNumber: 130,
                    columnNumber: 29
                }, this),
                resultado.ficha_manual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FichaManual, {
                    ficha: resultado.ficha_manual
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                    lineNumber: 135,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    const sinInstalacion = !(datos === null || datos === void 0 ? void 0 : datos.instalacion);
    var _ont_modelo, _datos_perfiles_line_find_usos;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: autorizar,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            sinInstalacion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: [
                    "No hay ninguna orden de instalación con la serie ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: ont.sn
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 148,
                        columnNumber: 60
                    }, this),
                    ". El nombre, la dirección y el plan hay que cargarlos a mano — o cargar la instalación primero, escaneando el QR de este equipo, y volver acá."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 147,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: [
                    "Datos tomados de la instalación de ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: datos.instalacion.nombre
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 154,
                        columnNumber: 46
                    }, this),
                    datos.instalacion.direccion ? " · ".concat(datos.instalacion.direccion) : '',
                    ". Se encontró por la serie que escaneó el técnico."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fijo, {
                        label: "OLT",
                        valor: (_datos_olt = datos.olt) === null || _datos_olt === void 0 ? void 0 : _datos_olt.nombre
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fijo, {
                        label: "Placa",
                        valor: ont.slot
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fijo, {
                        label: "Puerto",
                        valor: ont.puerto,
                        hint: datos.puerto ? "".concat(datos.puerto.ocupados, " de ").concat(datos.puerto.capacidad, " ONTs · ").concat(datos.puerto.libres, " libres") : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fijo, {
                        label: "Serie",
                        valor: ont.sn,
                        className: "sm:col-span-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fijo, {
                        label: "Modelo detectado",
                        valor: (_ont_modelo = ont.modelo) !== null && _ont_modelo !== void 0 ? _ont_modelo : '—'
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Line-profile",
                        hint: "Define la VLAN y los GEM ports. El propuesto es el que usa la mayoría de tus ONTs.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: form.lineProfileId,
                            onChange: set('lineProfileId'),
                            required: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— elige —"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                datos.perfiles.line.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p.id,
                                        children: [
                                            p.id,
                                            " · ",
                                            p.nombre,
                                            p.usos ? " (".concat(p.usos, " ONTs)") : ''
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Service-profile",
                        hint: datos.sugerido.srv_por_modelo ? "Propuesto por el modelo que reportó la ONT (".concat(ont.modelo, ").") : 'No hay uno que coincida con el modelo: elígelo a mano.',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: form.srvProfileId,
                            onChange: set('srvProfileId'),
                            required: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— elige —"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                datos.perfiles.srv.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p.id,
                                        children: [
                                            p.id,
                                            " · ",
                                            p.nombre,
                                            p.usos ? " (".concat(p.usos, " ONTs)") : ''
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-sky-500/30 bg-sky-500/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "VLAN de usuario",
                                hint: "Es el dato que cambia en cada alta.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 100",
                                    type: "number",
                                    value: form.vlan,
                                    onChange: set('vlan'),
                                    min: 1,
                                    max: 4094,
                                    required: true,
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "GEM port",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 1",
                                    type: "number",
                                    value: form.gemport,
                                    onChange: set('gemport'),
                                    min: 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Plan",
                                hint: "Define la velocidad: se aplica con las traffic tables del equipo.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: form.plan_id,
                                    onChange: set('plan_id'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— sin plan —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        datos.planes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    form.plan_id && ((_datos_planes_find = datos.planes.find((p)=>p.id === form.plan_id)) === null || _datos_planes_find === void 0 ? void 0 : _datos_planes_find.traffic_table_index) == null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-amber-300",
                        children: "Ese plan no tiene índice de traffic table, así que la ONT va a quedar autorizada pero sin límite de velocidad aplicado. Se le asigna desde Servicios → Planes."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Nombre",
                        hint: sinInstalacion ? undefined : 'De la orden de instalación',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "Ej.: Juan Pérez",
                            value: form.nombre,
                            onChange: set('nombre'),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Dirección o comentario",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "Ej.: Cliente moroso",
                            value: form.comentario,
                            onChange: set('comentario')
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] leading-relaxed text-slate-500",
                children: [
                    "El nombre y la dirección van a la descripción de la ONT dentro del equipo, con el mismo formato que ya usan tus otras ",
                    (_datos_perfiles_line_find_usos = (_datos_perfiles_line_find = datos.perfiles.line.find((p)=>p.usos > 50)) === null || _datos_perfiles_line_find === void 0 ? void 0 : _datos_perfiles_line_find.usos) !== null && _datos_perfiles_line_find_usos !== void 0 ? _datos_perfiles_line_find_usos : '',
                    " ONTs. Así se sigue leyendo igual desde la CLI y desde cualquier otro sistema."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-end gap-2 border-t border-slate-800 pt-3",
                children: [
                    onCancelar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variante: "fantasma",
                        onClick: onCancelar,
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        variante: "exito",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
                        cargando: guardando,
                        children: "Autorizar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 11,
                        className: "mr-1 inline"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    "Esto escribe en la OLT de producción: registra la ONT y le crea su service-port. Es reversible —se puede eliminar— pero le da servicio a un abonado real."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(AutorizarOnt, "NMJKN6jUQBdgVdVmzkyAdldpAHQ=");
_c1 = AutorizarOnt;
/**
 * Lo que hay que cargar a mano en la ONT.
 *
 * Aparece cuando el equipo no acepta TR069. El técnico está en la calle, con la
 * ONT en la mano y el celular en la otra: los datos van grandes, en monoespaciada
 * y con un botón para copiar cada uno, porque tipearlos mirando una pantalla
 * chica es exactamente donde aparece el error.
 */ function FichaManual(param) {
    let { ficha } = param;
    var _ficha_faltantes;
    _s1();
    const [copiado, setCopiado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const copiar = async (texto, cual)=>{
        try {
            await navigator.clipboard.writeText(texto);
            setCopiado(cual);
            setTimeout(()=>setCopiado(null), 1500);
        } catch (e) {
        // Sin permiso de portapapeles no pasa nada: el valor está a la vista.
        }
    };
    const Dato = (param)=>{
        let { etiqueta, valor, cual } = param;
        return valor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-2 border-b border-slate-800 py-1.5 last:border-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "shrink-0 text-[11px] uppercase tracking-wider text-slate-500",
                    children: etiqueta
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>copiar(valor, cual),
                    title: "Copiar",
                    className: "min-w-0 truncate rounded px-1.5 py-0.5 text-right font-mono text-sm text-slate-100 hover:bg-slate-800",
                    children: copiado === cual ? '¡copiado!' : valor
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
            lineNumber: 318,
            columnNumber: 7
        }, this) : null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 rounded-lg border border-amber-500/40 bg-amber-500/5 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-amber-200",
                        children: "Configura el equipo a mano"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-xs leading-snug text-amber-200/80",
                        children: "Esta ONT no se pudo configurar sola. Entra a su interfaz web y carga esto. Toca cualquier valor para copiarlo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-card-sm px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
                        children: [
                            "Internet — WAN en modo ",
                            ficha.modo
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "Usuario",
                        valor: ficha.pppoe.usuario,
                        cual: "u"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "Contraseña",
                        valor: ficha.pppoe.clave,
                        cual: "c"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "VLAN",
                        valor: ficha.vlan,
                        cual: "v"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-card-sm px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
                        children: "WiFi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "Nombre de red",
                        valor: ficha.wifi.ssid,
                        cual: "s"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "Clave",
                        valor: ficha.wifi.clave,
                        cual: "w"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            ficha.gestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-card-sm px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
                        children: "Gestión — opcional, pero con esto el sistema la va a poder alcanzar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "IP",
                        valor: ficha.gestion.ip,
                        cual: "gi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "Máscara",
                        valor: ficha.gestion.mascara,
                        cual: "gm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "Gateway",
                        valor: ficha.gestion.gateway,
                        cual: "gg"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "DNS 1",
                        valor: ficha.gestion.dns1,
                        cual: "g1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "DNS 2",
                        valor: ficha.gestion.dns2,
                        cual: "g2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                        etiqueta: "VLAN de gestión",
                        valor: ficha.gestion.vlan,
                        cual: "gv"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 361,
                columnNumber: 9
            }, this),
            ((_ficha_faltantes = ficha.faltantes) === null || _ficha_faltantes === void 0 ? void 0 : _ficha_faltantes.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: [
                    "Falta ",
                    ficha.faltantes.join(' y '),
                    ". Complétalo en el paso de red de la instalación antes de cargar el equipo, o el abonado no va a poder autenticar."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 377,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] leading-snug text-slate-500",
                children: "El nombre y la clave de WiFi ya quedaron guardados en la ficha de la ONU. Si en el equipo pones otros, cambialos también ahí — es lo que el soporte va a leer cuando el abonado llame preguntando su clave."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
                lineNumber: 383,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/AutorizarOnt.jsx",
        lineNumber: 334,
        columnNumber: 5
    }, this);
}
_s1(FichaManual, "wpUi+XteLXyVfWeIEx9CtleuqEE=");
_c2 = FichaManual;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Fijo");
__turbopack_context__.k.register(_c1, "AutorizarOnt");
__turbopack_context__.k.register(_c2, "FichaManual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/VerOntEsperando.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerOntEsperando
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
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
function VerOntEsperando(param) {
    let { oltId, sn, onAutorizar, onCambio, onCerrar } = param;
    var _datos_ya_dada_de_alta;
    _s();
    const [datos, setDatos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [resync, setResync] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resincronizando, setResincronizando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function cargar() {
        setCargando(true);
        setError(null);
        try {
            setDatos(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.verEsperando(oltId, sn));
        } catch (err) {
            setError(err);
        } finally{
            setCargando(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerOntEsperando.useEffect": ()=>{
            cargar();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["VerOntEsperando.useEffect"], [
        oltId,
        sn
    ]);
    async function resincronizar() {
        setResincronizando(true);
        setError(null);
        setResync(null);
        try {
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.resyncEsperando(oltId, sn);
            setResync(r);
            onCambio === null || onCambio === void 0 ? void 0 : onCambio();
            if (r.sigue) await cargar();
        } catch (err) {
            setError(err);
        } finally{
            setResincronizando(false);
        }
    }
    if (cargando && !datos) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {
            texto: "Preguntándole al equipo…"
        }, void 0, false, {
            fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    var _datos_instalacion_direccion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            resync && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: resync.sigue ? 'info' : 'alerta',
                children: resync.sigue ? "El equipo la sigue viendo en ".concat(resync.slot, "/").concat(resync.puerto, ".") : resync.aviso
            }, void 0, false, {
                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            datos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    datos.en_la_cola === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        tipo: "alerta",
                        children: "El equipo ya no la ve en la cola. Puede que la haya autorizado alguien más o que la hayan desconectado. Resincroniza para sacarla de la lista."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this),
                    datos.en_la_cola === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        tipo: "alerta",
                        children: "No se pudo preguntarle al equipo. Lo de abajo es lo último que se guardó, no necesariamente lo de ahora."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this),
                    ((_datos_ya_dada_de_alta = datos.ya_dada_de_alta) === null || _datos_ya_dada_de_alta === void 0 ? void 0 : _datos_ya_dada_de_alta.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-amber-500/40 bg-amber-500/5 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    "Esta serie ya está dada de alta"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 text-xs text-amber-200/80",
                                children: datos.ya_dada_de_alta.map((o)=>{
                                    var _o_nombre_cliente;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            (_o_nombre_cliente = o.nombre_cliente) !== null && _o_nombre_cliente !== void 0 ? _o_nombre_cliente : 'sin nombre',
                                            " · placa ",
                                            o.slot,
                                            " puerto ",
                                            o.puerto,
                                            " · ONT",
                                            ' ',
                                            o.onu_index,
                                            o.es_esta_olt ? ' · en esta misma OLT' : ' · en OTRA OLT'
                                        ]
                                    }, o.id, true, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[11px] leading-snug text-amber-300/70",
                                children: "Autorizarla de nuevo la duplicaría. Si es un abonado que se mudó, primero hay que dar de baja la vieja."
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this),
                    datos.instalacion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-sky-500/30 bg-sky-500/5 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this),
                                    "Tiene orden de instalación"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-100",
                                children: datos.instalacion.nombre
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-xs text-slate-400",
                                children: [
                                    (_datos_instalacion_direccion = datos.instalacion.direccion) !== null && _datos_instalacion_direccion !== void 0 ? _datos_instalacion_direccion : 'sin dirección',
                                    " · ",
                                    datos.instalacion.estado
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[11px] text-sky-300/70",
                                children: "El formulario de autorización se llena solo con estos datos."
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-slate-800 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400",
                                children: "Lo que dice el equipo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "divide-y divide-slate-800/70 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "Serie",
                                        v: datos.sn,
                                        mono: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "En hexadecimal",
                                        v: datos.sn_hex,
                                        mono: true,
                                        ayuda: "Como la escribe la CLI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "Ubicación",
                                        v: "placa ".concat(datos.slot, " · puerto ").concat(datos.puerto)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "Modelo",
                                        v: datos.modelo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "Fabricante",
                                        v: datos.fabricante
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "Versión de hardware",
                                        v: datos.version_hw
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "Versión de software",
                                        v: datos.version_sw
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "MAC",
                                        v: datos.mac,
                                        mono: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "LOID",
                                        v: datos.loid,
                                        mono: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "Detectada",
                                        v: datos.detectada ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fechaHora"])(datos.detectada) : null,
                                        ayuda: datos.detectada ? "esperando desde hace ".concat(desdeHace(datos.detectada)) : 'el equipo no informó desde cuándo'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        k: "En la cola ahora",
                                        v: datos.en_la_cola === true ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "verde",
                                            children: "sí"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, void 0) : datos.en_la_cola === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "rojo",
                                            children: "no"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                            lineNumber: 163,
                                            columnNumber: 21
                                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "gris",
                                            children: "no se pudo preguntar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                            lineNumber: 165,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2 border-t border-slate-800 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "exito",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"],
                                disabled: datos.en_la_cola === false,
                                onClick: ()=>onAutorizar === null || onAutorizar === void 0 ? void 0 : onAutorizar(datos),
                                children: "Autorizar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                                cargando: resincronizando,
                                onClick: resincronizar,
                                children: "Resincronizar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            onCerrar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                onClick: onCerrar,
                                children: "Cerrar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(VerOntEsperando, "Cp8XygzKQrjkjwa1C1gsoWVLar0=");
_c = VerOntEsperando;
function Dato(param) {
    let { k, v, mono, ayuda } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-baseline gap-x-3 px-3 py-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "w-44 shrink-0 text-xs text-slate-500",
                children: k
            }, void 0, false, {
                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: "flex-1 text-slate-200 ".concat(mono ? 'font-mono text-xs' : 'text-sm'),
                children: [
                    v !== null && v !== void 0 ? v : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-600",
                        children: "no informado"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                        lineNumber: 201,
                        columnNumber: 15
                    }, this),
                    ayuda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-[11px] text-slate-600",
                        children: ayuda
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                        lineNumber: 202,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/VerOntEsperando.jsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_c1 = Dato;
/** "6 días", "2 horas". Redondeado a propósito: el minuto exacto no cambia nada. */ function desdeHace(iso) {
    const ms = Date.now() - new Date(iso).getTime();
    if (!Number.isFinite(ms) || ms < 0) return '—';
    const minutos = Math.floor(ms / 60000);
    if (minutos < 60) return "".concat(minutos, " min");
    const horas = Math.floor(minutos / 60);
    if (horas < 48) return "".concat(horas, " h");
    return "".concat(Math.floor(horas / 24), " días");
}
var _c, _c1;
__turbopack_context__.k.register(_c, "VerOntEsperando");
__turbopack_context__.k.register(_c1, "Dato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/Presets.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Presets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
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
function Presets(param) {
    let { olt, perfiles, planes = [], onListo } = param;
    var _editando_nombre;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [lista, setLista] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editando, setEditando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function cargar() {
        try {
            setLista(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.presets(olt === null || olt === void 0 ? void 0 : olt.id));
        } catch (err) {
            setError(err);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Presets.useEffect": ()=>{
            cargar();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Presets.useEffect"], [
        olt === null || olt === void 0 ? void 0 : olt.id
    ]);
    async function guardar() {
        setGuardando(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.guardarPreset(editando);
            setEditando(null);
            await cargar();
            onListo === null || onListo === void 0 ? void 0 : onListo();
        } catch (err) {
            setError(err);
        } finally{
            setGuardando(false);
        }
    }
    async function borrar(p) {
        if (!await confirmar('Borrar la plantilla "'.concat(p.nombre, '"?\n\nNo afecta a las ONTs ya autorizadas.'))) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.borrarPreset(p.id);
            await cargar();
        } catch (err) {
            setError(err);
        }
    }
    const nueva = ()=>{
        var _olt_id;
        return {
            nombre: '',
            olt_id: (_olt_id = olt === null || olt === void 0 ? void 0 : olt.id) !== null && _olt_id !== void 0 ? _olt_id : null,
            line_profile_id: '',
            line_profile_nombre: '',
            srv_profile_id: '',
            srv_profile_nombre: '',
            vlan: '',
            gemport: 1,
            plan_id: '',
            zona: '',
            predeterminado: false
        };
    };
    var _editando_olt_id, _editando_line_profile_id, _perfiles_line, _editando_srv_profile_id, _perfiles_srv, _editando_vlan, _editando_gemport, _editando_plan_id, _editando_zona;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/components/olt/Presets.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-xs leading-relaxed text-slate-500",
                        children: "Guardan el juego de datos que se repite. Al autorizar se elige una y los seis campos quedan llenos."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/Presets.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "primario",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                        onClick: ()=>setEditando(nueva()),
                        children: "Nueva plantilla"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/Presets.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/Presets.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            editando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border border-sky-500/30 bg-sky-500/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Nombre",
                                className: "sm:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: editando.nombre,
                                    onChange: (e)=>setEditando({
                                            ...editando,
                                            nombre: e.target.value
                                        }),
                                    placeholder: "Residencial zona centro"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                hint: "A quiénes afecta el aviso.",
                                label: "Alcance",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: (_editando_olt_id = editando.olt_id) !== null && _editando_olt_id !== void 0 ? _editando_olt_id : '',
                                    onChange: (e)=>setEditando({
                                            ...editando,
                                            olt_id: e.target.value || null
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Todas las OLTs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Presets.jsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        olt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: olt.id,
                                            children: [
                                                "Solo ",
                                                olt.nombre
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/Presets.jsx",
                                            lineNumber: 109,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                hint: "Se crea en la OLT; define el tráfico.",
                                label: "Perfil de línea",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: (_editando_line_profile_id = editando.line_profile_id) !== null && _editando_line_profile_id !== void 0 ? _editando_line_profile_id : '',
                                    onChange: (e)=>{
                                        var _perfiles_line;
                                        const p = ((_perfiles_line = perfiles === null || perfiles === void 0 ? void 0 : perfiles.line) !== null && _perfiles_line !== void 0 ? _perfiles_line : []).find((x)=>String(x.id) === e.target.value);
                                        var _p_nombre;
                                        setEditando({
                                            ...editando,
                                            line_profile_id: e.target.value,
                                            line_profile_nombre: (_p_nombre = p === null || p === void 0 ? void 0 : p.nombre) !== null && _p_nombre !== void 0 ? _p_nombre : ''
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— elige —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Presets.jsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        ((_perfiles_line = perfiles === null || perfiles === void 0 ? void 0 : perfiles.line) !== null && _perfiles_line !== void 0 ? _perfiles_line : []).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: [
                                                    p.id,
                                                    " · ",
                                                    p.nombre
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/olt/Presets.jsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Perfil de servicio",
                                hint: "lo normal es dejarlo automático: depende del modelo de cada ONT",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: (_editando_srv_profile_id = editando.srv_profile_id) !== null && _editando_srv_profile_id !== void 0 ? _editando_srv_profile_id : '',
                                    onChange: (e)=>{
                                        var _perfiles_srv;
                                        const p = ((_perfiles_srv = perfiles === null || perfiles === void 0 ? void 0 : perfiles.srv) !== null && _perfiles_srv !== void 0 ? _perfiles_srv : []).find((x)=>String(x.id) === e.target.value);
                                        var _p_nombre;
                                        setEditando({
                                            ...editando,
                                            srv_profile_id: e.target.value,
                                            srv_profile_nombre: (_p_nombre = p === null || p === void 0 ? void 0 : p.nombre) !== null && _p_nombre !== void 0 ? _p_nombre : ''
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Automático, según el modelo de la ONT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Presets.jsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this),
                                        ((_perfiles_srv = perfiles === null || perfiles === void 0 ? void 0 : perfiles.srv) !== null && _perfiles_srv !== void 0 ? _perfiles_srv : []).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: [
                                                    p.id,
                                                    " · ",
                                                    p.nombre,
                                                    p.usos ? " (".concat(p.usos, ")") : ''
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/olt/Presets.jsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "VLAN",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 100",
                                    type: "number",
                                    value: (_editando_vlan = editando.vlan) !== null && _editando_vlan !== void 0 ? _editando_vlan : '',
                                    onChange: (e)=>setEditando({
                                            ...editando,
                                            vlan: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Gemport",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 1",
                                    type: "number",
                                    value: (_editando_gemport = editando.gemport) !== null && _editando_gemport !== void 0 ? _editando_gemport : 1,
                                    onChange: (e)=>setEditando({
                                            ...editando,
                                            gemport: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                hint: "El plan de internet que contrata.",
                                label: "Plan",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: (_editando_plan_id = editando.plan_id) !== null && _editando_plan_id !== void 0 ? _editando_plan_id : '',
                                    onChange: (e)=>setEditando({
                                            ...editando,
                                            plan_id: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Sin plan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Presets.jsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        planes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: p.nombre
                                            }, p.id, false, {
                                                fileName: "[project]/src/components/olt/Presets.jsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Zona",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: Norte",
                                    value: (_editando_zona = editando.zona) !== null && _editando_zona !== void 0 ? _editando_zona : '',
                                    onChange: (e)=>setEditando({
                                            ...editando,
                                            zona: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/Presets.jsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-xs text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: Boolean(editando.predeterminado),
                                onChange: (e)=>setEditando({
                                        ...editando,
                                        predeterminado: e.target.checked
                                    }),
                                className: "accent-sky-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            "Ofrecerla marcada al abrir el formulario de autorización"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/Presets.jsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    editando.olt_id === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        children: [
                            "Al usarla en una OLT, los perfiles se buscan por ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "nombre"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 211,
                                columnNumber: 64
                            }, this),
                            ". Si esa OLT no tiene un perfil con ese nombre, avisa en vez de usar el número — que ahí puede ser otro perfil distinto."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/Presets.jsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "primario",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                                cargando: guardando,
                                disabled: !((_editando_nombre = editando.nombre) === null || _editando_nombre === void 0 ? void 0 : _editando_nombre.trim()),
                                onClick: guardar,
                                children: "Guardar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                onClick: ()=>setEditando(null),
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/Presets.jsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/Presets.jsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            lista.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-1 py-6 text-center text-sm text-slate-500",
                children: "Todavía no hay plantillas."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/Presets.jsx",
                lineNumber: 235,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                columnas: [
                    'Nombre',
                    'Alcance',
                    'Perfiles',
                    'VLAN',
                    'Plan',
                    ''
                ],
                filas: lista,
                renderFila: (p)=>{
                    var _p_line_profile_nombre, _ref, _p_srv_profile_nombre, _ref1, _p_vlan;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-sm text-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            p.predeterminado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                size: 12,
                                                className: "text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/olt/Presets.jsx",
                                                lineNumber: 246,
                                                columnNumber: 40
                                            }, void 0),
                                            p.nombre
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/olt/Presets.jsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, void 0),
                                    p.zona && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-slate-500",
                                        children: p.zona
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/Presets.jsx",
                                        lineNumber: 249,
                                        columnNumber: 28
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 244,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-xs",
                                children: p.olt_id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    color: "azul",
                                    children: "esta OLT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 252,
                                    columnNumber: 29
                                }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    color: "gris",
                                    children: "todas"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 252,
                                    columnNumber: 68
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-xs text-slate-400",
                                children: [
                                    (_ref = (_p_line_profile_nombre = p.line_profile_nombre) !== null && _p_line_profile_nombre !== void 0 ? _p_line_profile_nombre : p.line_profile_id) !== null && _ref !== void 0 ? _ref : '—',
                                    " /",
                                    ' ',
                                    (_ref1 = (_p_srv_profile_nombre = p.srv_profile_nombre) !== null && _p_srv_profile_nombre !== void 0 ? _p_srv_profile_nombre : p.srv_profile_id) !== null && _ref1 !== void 0 ? _ref1 : '—'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 font-mono text-xs",
                                children: (_p_vlan = p.vlan) !== null && _p_vlan !== void 0 ? _p_vlan : '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-xs",
                                children: p.plan_id ? '✓' : '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variante: "fantasma",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
                                            onClick: ()=>setEditando(p),
                                            children: "Editar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Presets.jsx",
                                            lineNumber: 262,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variante: "fantasma",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                            onClick: ()=>borrar(p),
                                            children: "Borrar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Presets.jsx",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Presets.jsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Presets.jsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/olt/Presets.jsx",
                        lineNumber: 243,
                        columnNumber: 13
                    }, void 0);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/olt/Presets.jsx",
                lineNumber: 239,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/Presets.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(Presets, "YEKQ7iiC00Ny6OS3Mot707kt+CU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c = Presets;
var _c;
__turbopack_context__.k.register(_c, "Presets");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/olt/Preautorizadas.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preautorizadas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Preautorizadas(param) {
    let { olt, presets = [], planes = [], onListo } = param;
    var _nueva_sn;
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [lista, setLista] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nueva, setNueva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function cargar() {
        try {
            setLista(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.preautorizadas(olt ? {
                olt_id: olt.id
            } : {}));
        } catch (err) {
            setError(err);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preautorizadas.useEffect": ()=>{
            cargar();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Preautorizadas.useEffect"], [
        olt === null || olt === void 0 ? void 0 : olt.id
    ]);
    const enBlanco = ()=>{
        var _presets_find;
        var _presets_find_id;
        return {
            sn: '',
            preset_id: (_presets_find_id = (_presets_find = presets.find((p)=>p.predeterminado)) === null || _presets_find === void 0 ? void 0 : _presets_find.id) !== null && _presets_find_id !== void 0 ? _presets_find_id : '',
            nombre: '',
            comentario: '',
            plan_id: '',
            vlan: '',
            slot: '',
            puerto: '',
            automatica: true,
            vence_at: ''
        };
    };
    async function guardar() {
        setGuardando(true);
        setError(null);
        try {
            const preset = presets.find((p)=>p.id === nueva.preset_id);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.cargarPreautorizada(olt.id, {
                ...nueva,
                // Lo que no se escribió lo pone la plantilla.
                vlan: nueva.vlan || (preset === null || preset === void 0 ? void 0 : preset.vlan) || '',
                plan_id: nueva.plan_id || (preset === null || preset === void 0 ? void 0 : preset.plan_id) || null,
                vence_at: nueva.vence_at || null
            });
            setNueva(null);
            await cargar();
            onListo === null || onListo === void 0 ? void 0 : onListo();
        } catch (err) {
            setError(err);
        } finally{
            setGuardando(false);
        }
    }
    async function borrar(p) {
        if (!await confirmar("Sacar ".concat(p.sn, " de la lista?\n\nSi ya está autorizada, la ONT no se toca."))) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.borrarPreautorizada(p.id);
            await cargar();
        } catch (err) {
            setError(err);
        }
    }
    async function reactivar(p) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.reactivarPreautorizada(p.id);
            await cargar();
        } catch (err) {
            setError(err);
        }
    }
    const preset = nueva ? presets.find((p)=>p.id === nueva.preset_id) : null;
    const sinVlan = nueva && !nueva.vlan && !(preset === null || preset === void 0 ? void 0 : preset.vlan);
    var _nueva_preset_id, _preset_vlan, _nueva_plan_id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-xs leading-relaxed text-slate-500",
                        children: "Se cargan con la serie del equipo antes de instalarlo. Cuando el técnico lo conecta, el barrido las encuentra y las autoriza con estos datos, sin que nadie tenga que estar mirando."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    olt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "primario",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                        onClick: ()=>setNueva(enBlanco()),
                        children: "Cargar ONU"
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            nueva && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-lg border border-sky-500/30 bg-sky-500/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Serie de la ONT",
                                hint: "La de la etiqueta, como HWTC1234ABCD",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: HWTC1A2B3C4D",
                                    value: nueva.sn,
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            sn: e.target.value.toUpperCase().trim()
                                        }),
                                    className: "font-mono"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                hint: "Un texto ya armado para no escribirlo cada vez.",
                                label: "Plantilla",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: (_nueva_preset_id = nueva.preset_id) !== null && _nueva_preset_id !== void 0 ? _nueva_preset_id : '',
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            preset_id: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— sin plantilla —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        presets.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: [
                                                    p.nombre,
                                                    p.vlan ? " · VLAN ".concat(p.vlan) : ''
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "VLAN",
                                hint: (preset === null || preset === void 0 ? void 0 : preset.vlan) ? "la plantilla trae ".concat(preset.vlan) : null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "number",
                                    value: nueva.vlan,
                                    placeholder: (_preset_vlan = preset === null || preset === void 0 ? void 0 : preset.vlan) !== null && _preset_vlan !== void 0 ? _preset_vlan : '',
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            vlan: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Abonado",
                                className: "sm:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: Juan Pérez o 0912345678",
                                    value: nueva.nombre,
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            nombre: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                hint: "El plan de internet que contrata.",
                                label: "Plan",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: (_nueva_plan_id = nueva.plan_id) !== null && _nueva_plan_id !== void 0 ? _nueva_plan_id : '',
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            plan_id: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: (preset === null || preset === void 0 ? void 0 : preset.plan_id) ? 'el de la plantilla' : 'Sin plan'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        planes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: p.nombre
                                            }, p.id, false, {
                                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Dirección / referencia",
                                className: "sm:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: Frente a la escuela",
                                    value: nueva.comentario,
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            comentario: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Vence",
                                hint: "opcional: hasta cuándo esperarla",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "date",
                                    value: nueva.vence_at,
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            vence_at: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Placa esperada",
                                hint: "opcional",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 1",
                                    type: "number",
                                    value: nueva.slot,
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            slot: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Puerto esperado",
                                hint: "opcional",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 1",
                                    type: "number",
                                    value: nueva.puerto,
                                    onChange: (e)=>setNueva({
                                            ...nueva,
                                            puerto: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-start gap-2 text-xs text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: nueva.automatica,
                                onChange: (e)=>setNueva({
                                        ...nueva,
                                        automatica: e.target.checked
                                    }),
                                className: "mt-0.5 accent-sky-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Autorizarla sola cuando aparezca.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[11px] text-slate-500",
                                        children: "Sin esto, cuando se conecte queda lista para autorizar con un clic pero no se toca el equipo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    sinVlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                        tipo: "alerta",
                        children: "Falta la VLAN. Sin ella la ONT se registraría sin service-port: quedaría conectada y sin pasar tráfico, que es lo más difícil de diagnosticar porque desde el lado GPON se ve todo bien."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this),
                    nueva.slot === '' && nueva.puerto === '' && nueva.automatica && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] leading-snug text-slate-500",
                        children: "Sin placa ni puerto esperados, se autoriza donde sea que aparezca. Cargándolos, si aparece en otro lado no se toca y queda avisado — que es lo que conviene si el equipo puede terminar en manos de otro."
                    }, void 0, false, {
                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                        lineNumber: 221,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "primario",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                                cargando: guardando,
                                disabled: !((_nueva_sn = nueva.sn) === null || _nueva_sn === void 0 ? void 0 : _nueva_sn.trim()) || sinVlan,
                                onClick: guardar,
                                children: "Cargar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                onClick: ()=>setNueva(null),
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            lista.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-1 py-6 text-center text-sm text-slate-500",
                children: "No hay ONUs cargadas esperando."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                lineNumber: 246,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                columnas: [
                    'Serie',
                    'Abonado',
                    'Estado',
                    'VLAN',
                    'Modo',
                    ''
                ],
                filas: lista,
                renderFila: (p)=>{
                    var _p_nombre, _ref, _p_vlan;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 font-mono text-xs text-slate-100",
                                children: [
                                    p.sn,
                                    !olt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[11px] text-slate-500",
                                        children: p.olt
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                        lineNumber: 257,
                                        columnNumber: 26
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-xs",
                                children: [
                                    (_ref = (_p_nombre = p.nombre) !== null && _p_nombre !== void 0 ? _p_nombre : p.instalacion_nombre) !== null && _ref !== void 0 ? _ref : '—',
                                    p.preset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[11px] text-slate-500",
                                        children: p.preset
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                        lineNumber: 261,
                                        columnNumber: 30
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EstadoCarga, {
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 font-mono text-xs",
                                children: (_p_vlan = p.vlan) !== null && _p_vlan !== void 0 ? _p_vlan : '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-xs",
                                children: p.automatica ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1 text-sky-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            size: 11
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                            lineNumber: 270,
                                            columnNumber: 21
                                        }, void 0),
                                        " sola"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 269,
                                    columnNumber: 19
                                }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1 text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 11
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                            lineNumber: 274,
                                            columnNumber: 21
                                        }, void 0),
                                        " a mano"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 273,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-3 py-2 text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-1.5",
                                    children: [
                                        p.estado === 'fallada' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variante: "fantasma",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
                                            onClick: ()=>reactivar(p),
                                            children: "Reintentar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                            lineNumber: 281,
                                            columnNumber: 21
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variante: "fantasma",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                            onClick: ()=>borrar(p),
                                            children: "Quitar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                        lineNumber: 254,
                        columnNumber: 13
                    }, void 0);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                lineNumber: 250,
                columnNumber: 9
            }, this),
            lista.some((p)=>p.estado === 'fallada') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: "Las falladas no se reintentan solas. Si el equipo rechazó el alta, repetir el mismo comando cada cinco minutos no la va a hacer entrar: hay que mirar el error."
            }, void 0, false, {
                fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                lineNumber: 296,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(Preautorizadas, "zsFMkfDh7kBu2WKg9f+JM4YLu8w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c = Preautorizadas;
function EstadoCarga(param) {
    let { p } = param;
    if (p.estado === 'autorizada') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        color: "verde",
        children: "autorizada"
    }, void 0, false, {
        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
        lineNumber: 306,
        columnNumber: 41
    }, this);
    if (p.estado === 'cancelada') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        color: "gris",
        children: "cancelada"
    }, void 0, false, {
        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
        lineNumber: 307,
        columnNumber: 40
    }, this);
    if (p.estado === 'fallada') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    color: "rojo",
                    children: "falló"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-0.5 block text-[11px] leading-snug text-rose-300/70",
                    children: p.ultimo_error
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/Preautorizadas.jsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/Preautorizadas.jsx",
            lineNumber: 310,
            columnNumber: 7
        }, this);
    }
    if (p.vencida) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        color: "gris",
        children: "vencida"
    }, void 0, false, {
        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
        lineNumber: 318,
        columnNumber: 25
    }, this);
    if (p.ya_conectada) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        color: "azul",
        children: "conectada, entrando"
    }, void 0, false, {
        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
        lineNumber: 319,
        columnNumber: 30
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        color: "gris",
        children: "esperando que la conecten"
    }, void 0, false, {
        fileName: "[project]/src/components/olt/Preautorizadas.jsx",
        lineNumber: 320,
        columnNumber: 10
    }, this);
}
_c1 = EstadoCarga;
var _c, _c1;
__turbopack_context__.k.register(_c, "Preautorizadas");
__turbopack_context__.k.register(_c1, "EstadoCarga");
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
"[project]/src/components/olt/ReemplazosPendientes.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReemplazosPendientes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/replace.js [app-client] (ecmascript) <export default as Replace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reemplazos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function ReemplazosPendientes(param) {
    let { onError } = param;
    _s();
    const [filas, setFilas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [resolviendo, setResolviendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReemplazosPendientes.useCallback[cargar]": async ()=>{
            try {
                setFilas(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reemplazosApi"].pendientes());
            } catch (err) {
                // Que falte la migración no puede tumbar el tablero: es una tarjeta extra.
                if ((err === null || err === void 0 ? void 0 : err.code) !== '42P01') onError === null || onError === void 0 ? void 0 : onError(err);
            }
        }
    }["ReemplazosPendientes.useCallback[cargar]"], [
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReemplazosPendientes.useEffect": ()=>{
            cargar();
        }
    }["ReemplazosPendientes.useEffect"], [
        cargar
    ]);
    const reintentar = async (id)=>{
        setResolviendo(id);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reemplazosApi"].aprovisionar(id);
            await cargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setResolviendo(null);
        }
    };
    if (!filas.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-rose-500/40 bg-rose-500/10 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"], {
                    size: 18,
                    className: "mt-0.5 shrink-0 text-rose-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-semibold text-rose-200",
                            children: filas.length === 1 ? 'Un cambio de ONT quedó sin terminar en la OLT' : "".concat(filas.length, " cambios de ONT quedaron sin terminar en la OLT")
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-xs text-slate-400",
                            children: "El equipo nuevo ya está en la casa, pero la OLT sigue con la ONT vieja autorizada. Mientras figure acá, el abonado no tiene servicio."
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-3 space-y-2",
                            children: filas.map((r)=>{
                                var _r_serie_anterior, _MOTIVOS_r_motivo;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-700/70 bg-[#F6F8FB] px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "truncate text-[13px] font-medium text-slate-100",
                                                    children: r.cliente
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: [
                                                        (_r_serie_anterior = r.serie_anterior) !== null && _r_serie_anterior !== void 0 ? _r_serie_anterior : 'equipo anterior',
                                                        " → ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            className: "text-slate-300",
                                                            children: r.serie_nueva
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                                            lineNumber: 79,
                                                            columnNumber: 63
                                                        }, this),
                                                        ' · ',
                                                        (_MOTIVOS_r_motivo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOTIVOS"][r.motivo]) !== null && _MOTIVOS_r_motivo !== void 0 ? _MOTIVOS_r_motivo : r.motivo,
                                                        r.tecnico ? " · ".concat(r.tecnico) : '',
                                                        ' · ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-300",
                                                            children: [
                                                                espera(r.minutos_esperando),
                                                                " sin servicio"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex shrink-0 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                                                    cargando: resolviendo === r.id,
                                                    onClick: ()=>reintentar(r.id),
                                                    children: "Reintentar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                r.ticket_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                    to: "/soporte/".concat(r.ticket_id),
                                                    className: "inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800",
                                                    children: [
                                                        "Ticket #",
                                                        r.ticket_numero,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                                            lineNumber: 100,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, r.id, true, {
                                    fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[11px] text-slate-500",
                            children: "Si el reintento tampoco pasa, autoriza la ONT nueva a mano desde la OLT: va en el mismo puerto y con el mismo perfil que la anterior."
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/olt/ReemplazosPendientes.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(ReemplazosPendientes, "aBrZ1UUNf4vF/kkiB/uKGGhCSI8=");
_c = ReemplazosPendientes;
function espera(minutos) {
    if (minutos == null) return '—';
    // Un reloj del servidor unos segundos adelantado no puede imprimir "hace -3m".
    if (minutos < 1) return 'recién';
    if (minutos < 60) return "".concat(minutos, " min");
    const h = Math.floor(minutos / 60);
    if (h < 24) return "".concat(h, "h ").concat(minutos % 60, "m");
    return "".concat(Math.floor(h / 24), " día(s)");
}
var _c;
__turbopack_context__.k.register(_c, "ReemplazosPendientes");
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
"[project]/src/components/olt/TrasladosPendientes.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrasladosPendientes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traslados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/traslados.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function TrasladosPendientes(param) {
    let { onError } = param;
    _s();
    const [filas, setFilas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [marcando, setMarcando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TrasladosPendientes.useCallback[cargar]": async ()=>{
            try {
                setFilas(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traslados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trasladosApi"].pendientes());
            } catch (err) {
                // Sin la migración 94 esta tarjeta simplemente no existe.
                if ((err === null || err === void 0 ? void 0 : err.code) !== '42P01') onError === null || onError === void 0 ? void 0 : onError(err);
            }
        }
    }["TrasladosPendientes.useCallback[cargar]"], [
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrasladosPendientes.useEffect": ()=>{
            cargar();
        }
    }["TrasladosPendientes.useEffect"], [
        cargar
    ]);
    const marcar = async (t)=>{
        setMarcando(t.id);
        try {
            var _t_sn_anterior, _t_olt_anterior;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traslados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trasladosApi"].marcarBaja(t.id, "Dada de baja a mano: ".concat((_t_sn_anterior = t.sn_anterior) !== null && _t_sn_anterior !== void 0 ? _t_sn_anterior : 'ONT', " en ").concat((_t_olt_anterior = t.olt_anterior) !== null && _t_olt_anterior !== void 0 ? _t_olt_anterior : 'la OLT') + (t.puerto_anterior != null ? " puerto ".concat(t.puerto_anterior) : ''));
            await cargar();
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setMarcando(null);
        }
    };
    if (!filas.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-amber-500/40 bg-amber-500/10 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                    size: 18,
                    className: "mt-0.5 shrink-0 text-amber-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-semibold text-amber-200",
                            children: filas.length === 1 ? 'Un traslado con la ONT vieja todavía autorizada' : "".concat(filas.length, " traslados con la ONT vieja todavía autorizada")
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-xs text-slate-400",
                            children: "El abonado sigue con servicio en el domicilio viejo. Pero si se lleva el mismo equipo, no se va a poder autorizar en el destino hasta que esta se dé de baja."
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-3 space-y-2",
                            children: filas.map((t)=>{
                                var _t_sn_anterior, _t_olt_anterior, _t_slot_anterior, _t_puerto_anterior, _t_onu_index_anterior, _t_direccion_anterior, _t_direccion_nueva;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-700/70 bg-[#F6F8FB] px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "truncate text-[13px] font-medium text-slate-100",
                                                    children: t.cliente
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            className: "text-slate-300",
                                                            children: (_t_sn_anterior = t.sn_anterior) !== null && _t_sn_anterior !== void 0 ? _t_sn_anterior : 'sin serie'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                                            lineNumber: 86,
                                                            columnNumber: 21
                                                        }, this),
                                                        " en",
                                                        ' ',
                                                        (_t_olt_anterior = t.olt_anterior) !== null && _t_olt_anterior !== void 0 ? _t_olt_anterior : 'OLT desconocida',
                                                        t.slot_anterior != null || t.puerto_anterior != null ? " · ".concat((_t_slot_anterior = t.slot_anterior) !== null && _t_slot_anterior !== void 0 ? _t_slot_anterior : 0, "/").concat((_t_puerto_anterior = t.puerto_anterior) !== null && _t_puerto_anterior !== void 0 ? _t_puerto_anterior : '?', "/").concat((_t_onu_index_anterior = t.onu_index_anterior) !== null && _t_onu_index_anterior !== void 0 ? _t_onu_index_anterior : '?') : '',
                                                        t.vlan_anterior != null ? " · VLAN ".concat(t.vlan_anterior) : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "truncate text-[11px] text-slate-600",
                                                    children: [
                                                        (_t_direccion_anterior = t.direccion_anterior) !== null && _t_direccion_anterior !== void 0 ? _t_direccion_anterior : 's/d',
                                                        " → ",
                                                        (_t_direccion_nueva = t.direccion_nueva) !== null && _t_direccion_nueva !== void 0 ? _t_direccion_nueva : 's/d',
                                                        ' · ',
                                                        espera(t.dias_esperando)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex shrink-0 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                                                    cargando: marcando === t.id,
                                                    title: "Ya la borré desde la OLT",
                                                    onClick: ()=>marcar(t),
                                                    children: "Ya la di de baja"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this),
                                                t.instalacion_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                    to: "/clientes/instalaciones/".concat(t.instalacion_id),
                                                    className: "inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800",
                                                    children: [
                                                        t.orden_numero ? "Orden #".concat(t.orden_numero) : 'La orden',
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                                            lineNumber: 114,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[11px] text-slate-500",
                            children: '"Ya la di de baja" no borra nada en el equipo: solo deja de reclamarlo. Bórrala primero desde la OLT.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/olt/TrasladosPendientes.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(TrasladosPendientes, "yLNedS0belkiR9yHPone5WAK4mA=");
_c = TrasladosPendientes;
function espera(dias) {
    if (dias == null) return 'sin fecha';
    // Un reloj adelantado no puede imprimir "hace -1 días".
    if (dias < 1) return 'de hoy';
    if (dias === 1) return 'de ayer';
    return "hace ".concat(dias, " días");
}
var _c;
__turbopack_context__.k.register(_c, "TrasladosPendientes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/olt/DashboardGponPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardGponPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/olts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$DetalleTarjeta$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/DetalleTarjeta.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$AltasPorDia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/AltasPorDia.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$AutorizarOnt$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/AutorizarOnt.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$VerOntEsperando$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/VerOntEsperando.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$Presets$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/Presets.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$Preautorizadas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/Preautorizadas.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$ReemplazosPendientes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/ReemplazosPendientes.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$TrasladosPendientes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/TrasladosPendientes.jsx [app-client] (ecmascript)");
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
;
;
;
;
;
/**
 * Tablero de OLT/GPON.
 *
 * Junta en una pantalla lo que hay que mirar todos los días, de todas las OLTs
 * a la vez. Las cuentas salen de vistas de la base y no de traerse las ONUs al
 * navegador: con mil abonados, contar del lado del cliente significa bajar mil
 * filas para mostrar cuatro números.
 *
 * Lo que se lee de la base es instantáneo; lo que hay que preguntarle a los
 * equipos va con su botón, porque cuesta segundos y consume sus sesiones. La
 * pantalla dice siempre de cuándo es cada dato: un tablero que muestra una
 * lectura de hace tres horas como si fuera de ahora es peor que uno vacío.
 */ const TARJETAS = {
    esperando: {
        titulo: 'Esperando autorización',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        clase: 'border-sky-500/40 bg-sky-500/10',
        texto: 'text-sky-300'
    },
    online: {
        titulo: 'En línea',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        clase: 'border-emerald-500/40 bg-emerald-500/10',
        texto: 'text-emerald-300'
    },
    caidas: {
        titulo: 'Caídas',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
        clase: 'border-slate-600 bg-slate-800/60',
        texto: 'text-slate-200'
    },
    senal: {
        titulo: 'Señal baja',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        clase: 'border-amber-500/40 bg-amber-500/10',
        texto: 'text-amber-300'
    }
};
function Tarjeta(param) {
    let { clave, valor, sub, activa, onClick, cargando } = param;
    const t = TARJETAS[clave];
    const Icono = t.icono;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: "rounded-xl border p-4 text-left transition hover:brightness-125 ".concat(t.clase, " ").concat(activa ? 'ring-2 ring-sky-400/60' : ''),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-8 w-16"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-semibold ".concat(t.texto),
                                children: valor
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs font-medium text-slate-300",
                                children: t.titulo
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                        size: 20,
                        className: t.texto
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[11px] leading-snug text-slate-500",
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 90,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = Tarjeta;
function DashboardGponPage() {
    _s();
    const [resumen, setResumen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [puertos, setPuertos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [altas, setAltas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [eventos, setEventos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [abierta, setAbierta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autorizando, setAutorizando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viendo, setViendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Los dos paneles trabajan contra UNA OLT: los IDs de perfil son de cada
    // equipo, así que "la OLT" no puede quedar implícita.
    const [panel, setPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null) // 'plantillas' | 'cargar'
    ;
    const [oltPanel, setOltPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [presets, setPresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [perfiles, setPerfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [planes, setPlanes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sondeando, setSondeando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [esperando, setEsperando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [buscandoNuevas, setBuscandoNuevas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DashboardGponPage.useCallback[cargar]": async ()=>{
            const [r1, r2, r3, r4, r5, r6] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_olt_resumen').select('*').order('numero'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_pon_puertos').select('*'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_onus_por_dia').select('*').order('dia'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('olt_historial').select('*').order('created_at', {
                    ascending: false
                }).limit(12),
                // Lo esperando se LEE de la base, no se consulta a los equipos: eso lo
                // hace la tarea de fondo cada pocos minutos. Abrir el tablero tiene que
                // ser instantáneo.
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_esperando_autorizacion').select('*').order('numero'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('onts_esperando').select('*').order('detectada')
            ]);
            const fallo = [
                r1,
                r2,
                r3,
                r4,
                r5,
                r6
            ].find({
                "DashboardGponPage.useCallback[cargar].fallo": (r)=>r.error
            }["DashboardGponPage.useCallback[cargar].fallo"]);
            if (fallo) {
                setError(fallo.error.code === '42P01' ? {
                    message: 'Faltan las vistas del tablero',
                    hint: 'Ejecuta supabase/migracion-40-dashboard-gpon.sql en el SQL Editor.'
                } : fallo.error);
                setResumen([]);
                return;
            }
            var _r1_data;
            setResumen((_r1_data = r1.data) !== null && _r1_data !== void 0 ? _r1_data : []);
            var _r2_data;
            setPuertos((_r2_data = r2.data) !== null && _r2_data !== void 0 ? _r2_data : []);
            var _r3_data;
            setAltas((_r3_data = r3.data) !== null && _r3_data !== void 0 ? _r3_data : []);
            var _r4_data;
            setEventos((_r4_data = r4.data) !== null && _r4_data !== void 0 ? _r4_data : []);
            var _r5_data;
            const porOlt = (_r5_data = r5.data) !== null && _r5_data !== void 0 ? _r5_data : [];
            var _r6_data, _porOlt_map_filter_sort_;
            setEsperando({
                olts: porOlt.map({
                    "DashboardGponPage.useCallback[cargar]": (o)=>({
                            olt_id: o.olt_id,
                            olt: o.olt,
                            numero: o.numero,
                            puertos: o.puertos_consultados,
                            descartadas: o.descartadas,
                            ms: o.escaneo_ms,
                            error: o.escaneo_error,
                            at: o.escaneada_at,
                            hace: o.escaneada_hace_segundos,
                            tiene_snmp: o.tiene_snmp
                        })
                }["DashboardGponPage.useCallback[cargar]"]),
                onts: ((_r6_data = r6.data) !== null && _r6_data !== void 0 ? _r6_data : []).map({
                    "DashboardGponPage.useCallback[cargar]": (o)=>{
                        var _porOlt_find;
                        return {
                            ...o,
                            olt: (_porOlt_find = porOlt.find({
                                "DashboardGponPage.useCallback[cargar]": (x)=>x.olt_id === o.olt_id
                            }["DashboardGponPage.useCallback[cargar]"])) === null || _porOlt_find === void 0 ? void 0 : _porOlt_find.olt
                        };
                    }
                }["DashboardGponPage.useCallback[cargar]"]),
                // La antigüedad se toma del barrido MÁS VIEJO: decir "hace 1 minuto"
                // porque una de tres OLTs se escaneó recién ocultaría que las otras dos
                // llevan una hora sin consultarse.
                at: (_porOlt_map_filter_sort_ = porOlt.map({
                    "DashboardGponPage.useCallback[cargar]": (o)=>o.escaneada_at
                }["DashboardGponPage.useCallback[cargar]"]).filter(Boolean).sort()[0]) !== null && _porOlt_map_filter_sort_ !== void 0 ? _porOlt_map_filter_sort_ : null
            });
        }
    }["DashboardGponPage.useCallback[cargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardGponPage.useEffect": ()=>{
            cargar();
        }
    }["DashboardGponPage.useEffect"], [
        cargar
    ]);
    const cargarPresets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DashboardGponPage.useCallback[cargarPresets]": async ()=>{
            try {
                setPresets(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.presets(oltPanel === null || oltPanel === void 0 ? void 0 : oltPanel.olt_id));
            } catch (err) {
                setError(err);
            }
        }
    }["DashboardGponPage.useCallback[cargarPresets]"], [
        oltPanel === null || oltPanel === void 0 ? void 0 : oltPanel.olt_id
    ]);
    // Los perfiles se le piden al equipo, así que solo cuando hace falta: al abrir
    // uno de los dos paneles, no al entrar al tablero.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardGponPage.useEffect": ()=>{
            if (!panel || !oltPanel) return;
            let vivo = true;
            cargarPresets();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('planes_velocidad').select('*').order('bajada_kbps').then({
                "DashboardGponPage.useEffect": (param)=>{
                    let { data } = param;
                    return vivo && setPlanes(data !== null && data !== void 0 ? data : []);
                }
            }["DashboardGponPage.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.perfilesOnt(oltPanel.olt_id).then({
                "DashboardGponPage.useEffect": (p)=>vivo && setPerfiles(p)
            }["DashboardGponPage.useEffect"]).catch({
                "DashboardGponPage.useEffect": (err)=>vivo && setError(err)
            }["DashboardGponPage.useEffect"]);
            return ({
                "DashboardGponPage.useEffect": ()=>{
                    vivo = false;
                }
            })["DashboardGponPage.useEffect"];
        }
    }["DashboardGponPage.useEffect"], [
        panel,
        oltPanel,
        cargarPresets
    ]);
    /** Alcance de todos los equipos: es un TCP por OLT, sale barato. */ async function sondear() {
        setSondeando(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.estados();
            await cargar();
        } catch (err) {
            setError(err);
        } finally{
            setSondeando(false);
        }
    }
    /** Esto SÍ cuesta: son varios comandos por la CLI contra cada equipo. */ async function buscarNuevas() {
        setBuscandoNuevas(true);
        setError(null);
        try {
            // El middleware barre y guarda; después se relee de la base. Así el
            // botón y la tarea automática dejan exactamente el mismo resultado.
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].olt.escanearEsperando();
            await cargar();
        } catch (err) {
            setError(err);
        } finally{
            setBuscandoNuevas(false);
        }
    }
    const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardGponPage.useMemo[total]": ()=>{
            const s = {
                "DashboardGponPage.useMemo[total].s": (campo)=>(resumen !== null && resumen !== void 0 ? resumen : []).reduce({
                        "DashboardGponPage.useMemo[total].s": (a, o)=>a + (Number(o[campo]) || 0)
                    }["DashboardGponPage.useMemo[total].s"], 0)
            }["DashboardGponPage.useMemo[total].s"];
            return {
                onus: s('onus'),
                online: s('online'),
                caidas: s('caidas'),
                los: s('los'),
                power_off: s('power_off'),
                sin_causa: s('sin_causa'),
                sin_lectura: s('sin_lectura'),
                critica: s('senal_critica'),
                aviso: s('senal_aviso'),
                sin_abonado: s('sin_abonado')
            };
        }
    }["DashboardGponPage.useMemo[total]"], [
        resumen
    ]);
    /** Abre uno de los dos paneles contra la OLT que más sentido tiene. */ function abrirPanel(cual) {
        var _esperando_onts_, _esperando_onts;
        const conEspera = esperando === null || esperando === void 0 ? void 0 : (_esperando_onts = esperando.onts) === null || _esperando_onts === void 0 ? void 0 : (_esperando_onts_ = _esperando_onts[0]) === null || _esperando_onts_ === void 0 ? void 0 : _esperando_onts_.olt_id;
        var _esperando_olts;
        const lista = (_esperando_olts = esperando === null || esperando === void 0 ? void 0 : esperando.olts) !== null && _esperando_olts !== void 0 ? _esperando_olts : [];
        var _lista_find, _ref;
        setOltPanel((_ref = (_lista_find = lista.find((o)=>o.olt_id === conEspera)) !== null && _lista_find !== void 0 ? _lista_find : lista[0]) !== null && _ref !== void 0 ? _ref : null);
        setPerfiles(null);
        setPanel(cual);
    }
    const cargando = resumen === null;
    var _esperando_onts;
    const nuevasReales = (_esperando_onts = esperando === null || esperando === void 0 ? void 0 : esperando.onts) !== null && _esperando_onts !== void 0 ? _esperando_onts : [];
    const puertosCaidos = puertos.filter((p)=>p.puerto_caido);
    const puertosDegradados = puertos.filter((p)=>p.puerto_degradado);
    const ultimaLectura = (resumen !== null && resumen !== void 0 ? resumen : []).map((o)=>o.ultima_lectura).filter(Boolean).sort().pop();
    var _esperando_olts, _oltPanel_olt_id, _esperando_olts1, _viendo_sn, _autorizando_sn;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "t-titulo text-lg font-bold text-slate-100",
                                children: "Tablero GPON"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: cargando ? 'Cargando…' : "".concat(resumen.length, " OLTs · ").concat(total.onus, " ONTs · óptica leída ").concat(ultimaLectura ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hace"])(Math.floor((Date.now() - new Date(ultimaLectura)) / 1000)) : 'nunca')
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                                onClick: sondear,
                                cargando: sondeando,
                                children: "Probar alcance"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "primario",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
                                onClick: buscarNuevas,
                                cargando: buscandoNuevas,
                                children: "Buscar ONTs nuevas"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$ReemplazosPendientes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onError: setError
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$TrasladosPendientes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onError: setError
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tarjeta, {
                        clave: "esperando",
                        valor: nuevasReales.length,
                        cargando: cargando,
                        sub: (esperando === null || esperando === void 0 ? void 0 : esperando.at) ? "escaneado ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hace"])(Math.floor((Date.now() - new Date(esperando.at)) / 1000))) : 'Todavía no se escaneó ninguna OLT',
                        activa: abierta === 'esperando',
                        onClick: ()=>setAbierta(abierta === 'esperando' ? null : 'esperando')
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tarjeta, {
                        clave: "online",
                        valor: total.online,
                        sub: "de ".concat(total.onus, " autorizadas"),
                        cargando: cargando,
                        activa: abierta === 'online',
                        onClick: ()=>setAbierta(abierta === 'online' ? null : 'online')
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tarjeta, {
                        clave: "caidas",
                        valor: total.caidas,
                        sub: total.caidas ? "LOS: ".concat(total.los, " · sin luz: ").concat(total.power_off, " · sin causa: ").concat(total.sin_causa) : 'ninguna caída',
                        cargando: cargando,
                        activa: abierta === 'caidas',
                        onClick: ()=>setAbierta(abierta === 'caidas' ? null : 'caidas')
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tarjeta, {
                        clave: "senal",
                        valor: total.critica + total.aviso,
                        sub: "críticas: ".concat(total.critica, " · para mirar: ").concat(total.aviso, " · sin lectura: ").concat(total.sin_lectura),
                        cargando: cargando,
                        activa: abierta === 'senal',
                        onClick: ()=>setAbierta(abierta === 'senal' ? null : 'senal')
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            abierta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$DetalleTarjeta$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tipo: abierta,
                esperando: esperando,
                onCerrar: ()=>setAbierta(null),
                onBuscar: buscarNuevas,
                buscando: buscandoNuevas,
                onAutorizar: setAutorizando,
                onVer: setViendo,
                onPlantillas: ()=>abrirPanel('plantillas'),
                onCargarOnu: ()=>abrirPanel('cargar')
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 348,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: panel !== null,
                titulo: panel === 'plantillas' ? 'Plantillas de autorización' : 'Cargar ONU para autorizar después',
                onCerrar: ()=>setPanel(null),
                ancho: "max-w-4xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        ((_esperando_olts = esperando === null || esperando === void 0 ? void 0 : esperando.olts) !== null && _esperando_olts !== void 0 ? _esperando_olts : []).length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex flex-wrap items-center gap-2 text-xs text-slate-400",
                            children: [
                                "OLT:",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: (_oltPanel_olt_id = oltPanel === null || oltPanel === void 0 ? void 0 : oltPanel.olt_id) !== null && _oltPanel_olt_id !== void 0 ? _oltPanel_olt_id : '',
                                    onChange: (e)=>{
                                        var _esperando_olts, _find;
                                        return setOltPanel((_find = ((_esperando_olts = esperando === null || esperando === void 0 ? void 0 : esperando.olts) !== null && _esperando_olts !== void 0 ? _esperando_olts : []).find((o)=>o.olt_id === e.target.value)) !== null && _find !== void 0 ? _find : null);
                                    },
                                    className: "t-panel px-2 py-1 text-slate-100",
                                    children: ((_esperando_olts1 = esperando === null || esperando === void 0 ? void 0 : esperando.olts) !== null && _esperando_olts1 !== void 0 ? _esperando_olts1 : []).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: o.olt_id,
                                            children: [
                                                o.numero ? "".concat(o.numero, " · ") : '',
                                                o.olt
                                            ]
                                        }, o.olt_id, true, {
                                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                            lineNumber: 379,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-slate-600",
                                    children: "los perfiles y las plantillas se resuelven contra esta OLT"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this),
                        panel === 'plantillas' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$Presets$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            olt: oltPanel ? {
                                id: oltPanel.olt_id,
                                nombre: oltPanel.olt
                            } : null,
                            perfiles: perfiles,
                            planes: planes,
                            onListo: cargarPresets
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this) : panel === 'cargar' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$Preautorizadas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            olt: oltPanel ? {
                                id: oltPanel.olt_id,
                                nombre: oltPanel.olt
                            } : null,
                            presets: presets,
                            planes: planes,
                            onListo: cargar
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 399,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: viendo !== null,
                titulo: "ONU ".concat((_viendo_sn = viendo === null || viendo === void 0 ? void 0 : viendo.sn) !== null && _viendo_sn !== void 0 ? _viendo_sn : ''),
                onCerrar: ()=>setViendo(null),
                ancho: "max-w-2xl",
                children: viendo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$VerOntEsperando$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    oltId: viendo.olt_id,
                    sn: viendo.sn,
                    // Recargar de la base, no volver a barrer todas las OLTs: el
                    // resync ya preguntó por esta ONT y dejó la fila al día.
                    onCambio: cargar,
                    onCerrar: ()=>setViendo(null),
                    onAutorizar: ()=>{
                        // Se pasa la fila de la lista, no la ficha: es la forma que el
                        // formulario de autorización ya sabe leer.
                        setViendo(null);
                        setAutorizando(viendo);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                    lineNumber: 416,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: autorizando !== null,
                titulo: "Autorizar ".concat((_autorizando_sn = autorizando === null || autorizando === void 0 ? void 0 : autorizando.sn) !== null && _autorizando_sn !== void 0 ? _autorizando_sn : ''),
                onCerrar: ()=>setAutorizando(null),
                ancho: "max-w-3xl",
                children: autorizando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$AutorizarOnt$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    olt: {
                        id: autorizando.olt_id,
                        nombre: autorizando.olt
                    },
                    ont: autorizando,
                    onListo: cargar,
                    onCancelar: ()=>setAutorizando(null)
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                    lineNumber: 440,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Puertos PON",
                        subtitle: "Cuando cae un puerto entero, la causa es la fibra o el módulo — no los equipos de los abonados",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
                        children: cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-24 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 457,
                            columnNumber: 13
                        }, this) : puertosCaidos.length === 0 && puertosDegradados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-emerald-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this),
                                "Ningún puerto caído ni degradado."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 459,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                puertosCaidos.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-2 rounded-lg border border-rose-500/50 bg-rose-500/10 px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-rose-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: p.olt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                        lineNumber: 471,
                                                        columnNumber: 21
                                                    }, this),
                                                    " · slot ",
                                                    p.slot,
                                                    " puerto ",
                                                    p.puerto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                lineNumber: 470,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-rose-300/80",
                                                children: [
                                                    p.onus,
                                                    " ONTs, todas caídas — revisa la fibra o el módulo óptico"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                lineNumber: 473,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, "".concat(p.olt_id, "-").concat(p.slot, "-").concat(p.puerto), true, {
                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, this)),
                                puertosDegradados.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-amber-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: p.olt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                        lineNumber: 484,
                                                        columnNumber: 21
                                                    }, this),
                                                    " · slot ",
                                                    p.slot,
                                                    " puerto ",
                                                    p.puerto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                lineNumber: 483,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-amber-300/80",
                                                children: [
                                                    p.caidas,
                                                    " de ",
                                                    p.onus,
                                                    " caídas — se está degradando"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                lineNumber: 486,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, "".concat(p.olt_id, "-").concat(p.slot, "-").concat(p.puerto), true, {
                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                        lineNumber: 479,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 464,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "OLTs",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                        children: cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-24 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                resumen.map((o)=>{
                                    var _o_hw_version;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/olts/".concat(o.olt_id),
                                        className: "flex items-center justify-between gap-3 t-panel px-3 py-2.5 transition hover:border-slate-700 hover:bg-slate-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex min-w-0 items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Punto"], {
                                                        estado: o.olt_estado
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                        lineNumber: 508,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block truncate text-sm text-slate-100",
                                                                children: [
                                                                    o.numero,
                                                                    " · ",
                                                                    o.nombre
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                                lineNumber: 510,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-[11px] text-slate-500",
                                                                children: [
                                                                    (_o_hw_version = o.hw_version) !== null && _o_hw_version !== void 0 ? _o_hw_version : o.marca,
                                                                    " · ",
                                                                    o.onus,
                                                                    " ONTs",
                                                                    o.senal_critica > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-rose-400",
                                                                        children: [
                                                                            " · ",
                                                                            o.senal_critica,
                                                                            " con señal baja"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                                        lineNumber: 516,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                                lineNumber: 513,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                        lineNumber: 509,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                lineNumber: 507,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "shrink-0 text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-sm font-medium text-emerald-400",
                                                        children: o.online
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                        lineNumber: 522,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] text-slate-600",
                                                        children: "en línea"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                        lineNumber: 523,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                lineNumber: 521,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, o.olt_id, true, {
                                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                        lineNumber: 502,
                                        columnNumber: 17
                                    }, this);
                                }),
                                resumen.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "py-4 text-center text-sm text-slate-500",
                                    children: "No hay OLTs cargadas."
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                    lineNumber: 528,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 500,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Autorizaciones por día",
                        subtitle: "Con la fecha que tiene el equipo, no la de importación",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$AltasPorDia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            filas: altas
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Actividad reciente",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                        children: eventos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-4 text-center text-sm text-slate-500",
                            children: "Sin cambios registrados."
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 546,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2",
                            children: eventos.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: e.accion === 'alta' ? 'verde' : 'gris',
                                            children: e.accion
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                            lineNumber: 551,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: e.campo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                    lineNumber: 553,
                                                    columnNumber: 21
                                                }, this),
                                                e.valor_despues && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-500",
                                                    children: [
                                                        " → ",
                                                        String(e.valor_despues).slice(0, 40)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                    lineNumber: 555,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[10px] text-slate-600",
                                                    children: [
                                                        e.quien,
                                                        " ·",
                                                        ' ',
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$olts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hace"])(Math.floor((Date.now() - new Date(e.created_at)) / 1000))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                                    lineNumber: 557,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                            lineNumber: 552,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, e.id, true, {
                                    fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                                    lineNumber: 550,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                            lineNumber: 548,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                children: "Falta el gráfico de estado a lo largo del tiempo: este sistema todavía no guarda un histórico de cuántas ONTs estaban en línea en cada momento, y dibujarlo con los datos de hoy sería inventarlo. Se resuelve tomando una muestra cada tanto y guardándola — dime si lo quieres y lo agrego."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
                lineNumber: 570,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/olt/DashboardGponPage.jsx",
        lineNumber: 267,
        columnNumber: 5
    }, this);
}
_s(DashboardGponPage, "xaGVbU9rhF9/xALntWS6SDLWSr4=");
_c1 = DashboardGponPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Tarjeta");
__turbopack_context__.k.register(_c1, "DashboardGponPage");
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
"[project]/app/gpon/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$olt$2f$DashboardGponPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/olt/DashboardGponPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$NextPageShell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/NextPageShell.jsx [app-client] (ecmascript)");
'use client';
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$NextPageShell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedShell"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$olt$2f$DashboardGponPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/gpon/page.jsx",
            lineNumber: 7,
            columnNumber: 26
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/gpon/page.jsx",
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

//# sourceMappingURL=_c6bb5e67._.js.map