module.exports = [
"[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const OutletContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const OutletData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function Link({ to, href, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href ?? to,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/lib/nextNavigation.jsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
function NavLink({ to, href, className, children, end, ...props }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const target = href ?? to;
    const active = end ? pathname === target : pathname === target || pathname.startsWith(`${target}/`);
    const classes = typeof className === 'function' ? className({
        isActive: active
    }) : className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
function useNavigate() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return (href, options = {})=>{
        if (options.replace) router.replace(href);
        else router.push(href);
    };
}
function useLocation() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            pathname,
            search: `?${search.toString()}`,
            hash: '',
            state: null,
            key: pathname
        }), [
        pathname,
        search
    ]);
}
function useParams() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const nextParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])() || {};
    const last = pathname.split('/').filter(Boolean).at(-1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...nextParams,
            ...last ? {
                id: last,
                slug: last
            } : {}
        }), [
        last,
        nextParams
    ]);
}
function useSearchParams() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new URLSearchParams(current.toString()), [
        current
    ]);
    // Como el de react-router: acepta los parámetros nuevos o una función que los
    // calcula desde los actuales, y `{ replace: true }` para no sumar historial.
    const setParams = (next, options = {})=>{
        const calculado = typeof next === 'function' ? next(new URLSearchParams(current.toString())) : next;
        const value = calculado instanceof URLSearchParams ? calculado : new URLSearchParams(calculado ?? '');
        const query = value.toString();
        const destino = query ? `${pathname}?${query}` : pathname;
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
function useOutletContext() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(OutletData);
}
function Outlet({ context }) {
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(OutletContent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OutletData.Provider, {
        value: context,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/lib/nextNavigation.jsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
function Navigate({ to, replace = false }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (replace) router.replace(to);
        else router.push(to);
    }, [
        replace,
        router,
        to
    ]);
    return null;
}
}),
"[project]/src/lib/apiNetwork.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-ssr] (ecmascript)");
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
const BASE = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1/red") || `${DJANGO}/red`).replace(/\/$/, '');
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
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) {
        const respuesta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demoApi"])(metodo, ruta, body);
        if (respuesta === undefined) {
            throw new ApiError(`El modo demo no simula ${metodo} ${ruta}`, {
                hint: 'Sal del modo demo (NEXT_PUBLIC_DEMO_MODE) y levanta Django con el servicio de red para usar esta función de verdad.'
            });
        }
        return respuesta;
    }
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getSession();
    const token = data?.session?.access_token;
    let res;
    try {
        res = await fetch(`${BASE}${ruta}`, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            },
            body: body ? JSON.stringify(body) : undefined
        });
    } catch  {
        throw new ApiError(`No se puede contactar al backend en ${BASE}`, {
            hint: 'Verifica que Django esté corriendo (puerto 8000) y con él el servicio de red (middleware/): el navegador habla con /api/v1/red/...'
        });
    }
    const texto = await res.text();
    let json = null;
    try {
        json = texto ? JSON.parse(texto) : null;
    } catch  {
        throw new ApiError('El middleware devolvió una respuesta que no es JSON', {
            status: res.status,
            detalle: texto.slice(0, 200)
        });
    }
    if (!res.ok) {
        const { error: _e, ...resto } = json ?? {};
        // `mensaje` además de `error`: algunas rutas contestan un estado del trabajo
        // —"la OLT no ve la ONT"— con `res.status(409).json({ mensaje })` en vez de
        // lanzar. Sin este segundo intento, al técnico le llegaba "Error 409" y el
        // texto que explicaba qué hacer se perdía en el camino.
        throw new ApiError(json?.error || json?.mensaje || `Error ${res.status}`, {
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
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) {
        throw new ApiError('El modo demo no genera archivos', {
            hint: 'Sal del modo demo (NEXT_PUBLIC_DEMO_MODE) y levanta Django con el servicio de red para descargar el RIDE.'
        });
    }
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getSession();
    const token = data?.session?.access_token;
    let res;
    try {
        // Con cuerpo va por POST: la plantilla del padrón se arma a partir de lo que
        // se acaba de elegir, y eso no entra cómodo en una URL.
        res = await fetch(`${BASE}${ruta}`, {
            method: body ? 'POST' : 'GET',
            headers: {
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {},
                ...body ? {
                    'Content-Type': 'application/json'
                } : {}
            },
            ...body ? {
                body: JSON.stringify(body)
            } : {}
        });
    } catch  {
        throw new ApiError(`No se puede contactar al backend en ${BASE}`, {
            hint: 'Verifica que Django esté corriendo (puerto 8000) y con él el servicio de red (middleware/).'
        });
    }
    if (!res.ok) {
        // Los errores sí vienen en JSON: el PDF solo sale cuando todo salió bien.
        let json = null;
        try {
            json = JSON.parse(await res.text());
        } catch  {
        // Se queda con el mensaje genérico de abajo.
        }
        throw new ApiError(json?.error || `Error ${res.status}`, {
            status: res.status,
            hint: json?.hint,
            detalle: json?.detalle
        });
    }
    return res.blob();
}
const get = (ruta)=>request('GET', ruta);
const post = (ruta, body)=>request('POST', ruta, body);
const del = (ruta)=>request('DELETE', ruta);
const put = (ruta, body)=>request('PUT', ruta, body);
const qs = (params)=>{
    const limpio = Object.entries(params).filter(([, v])=>v !== undefined && v !== null && v !== '');
    return limpio.length ? `?${new URLSearchParams(limpio)}` : '';
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
        editar: (id, datos)=>put(`/api/tipos-onu/${id}`, datos),
        borrar: (id, forzar)=>del(`/api/tipos-onu/${id}${qs({
                forzar: forzar ? 'true' : ''
            })}`),
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
        ont: ({ oltId, frame, slot, puerto, onuId })=>get(`/api/tr069/ont${qs({
                oltId,
                frame,
                slot,
                puerto,
                onuId
            })}`),
        asignar: (datos)=>post('/api/tr069/ont', datos)
    },
    mikrotik: {
        test: (id)=>get(`/api/mikrotik/${id}/test`),
        pools: (id)=>get(`/api/mikrotik/${id}/pools`),
        crearPool: (id, datos)=>post(`/api/mikrotik/${id}/pools`, datos),
        borrarPool: (id, poolId)=>del(`/api/mikrotik/${id}/pools/${encodeURIComponent(poolId)}`),
        interfaces: (id)=>get(`/api/mikrotik/${id}/interfaces`),
        addresses: (id)=>get(`/api/mikrotik/${id}/addresses`),
        crearAddress: (id, datos)=>post(`/api/mikrotik/${id}/addresses`, datos),
        borrarAddress: (id, addrId)=>del(`/api/mikrotik/${id}/addresses/${encodeURIComponent(addrId)}`),
        bloqueos: (id)=>get(`/api/mikrotik/${id}/bloqueos`),
        bloquear: (id, datos)=>post(`/api/mikrotik/${id}/bloqueos`, datos),
        desbloquear: (id, entradaId)=>del(`/api/mikrotik/${id}/bloqueos/${encodeURIComponent(entradaId)}`),
        redireccionPago: (id, datos)=>post(`/api/mikrotik/${id}/redireccion-pago`, datos),
        filter: (id)=>get(`/api/mikrotik/${id}/firewall/filter`),
        nat: (id)=>get(`/api/mikrotik/${id}/firewall/nat`),
        queues: (id)=>get(`/api/mikrotik/${id}/queues`),
        crearQueue: (id, datos)=>post(`/api/mikrotik/${id}/queues`, datos),
        /** Los perfiles PPP del equipo: en PPPoE son los que aplican la velocidad. */ perfilesPpp: (id)=>get(`/api/mikrotik/${id}/ppp-profiles`),
        // Clientes: importar del router, exportar hacia él, sincronizar cortes
        // Deja el router igual a lo que dice el sistema: secrets que faltan, IPs
        // que no coinciden, y morosos que ya pagaron y siguen bloqueados.
        // IPv6: revisar qué falta, dejarlo puesto, y apagar su uso sin tocar el equipo.
        revisarIpv6: (id)=>get(`/api/mikrotik/${id}/ipv6`),
        prepararIpv6: (id, datos)=>post(`/api/mikrotik/${id}/ipv6`, datos),
        apagarIpv6: (id)=>del(`/api/mikrotik/${id}/ipv6`),
        // Dejar un equipo nuevo listo para operar. `revisar` no toca nada.
        revisarConfiguracion: (id, red)=>get(`/api/mikrotik/${id}/configurar${red ? `?red=${encodeURIComponent(red)}` : ''}`),
        configurar: (id, datos)=>post(`/api/mikrotik/${id}/configurar`, datos),
        revisarReparacion: (id)=>get(`/api/mikrotik/${id}/reparar`),
        reparar: (id, datos)=>post(`/api/mikrotik/${id}/reparar`, datos),
        escaneo: (id, { lista, fuentes } = {})=>get(`/api/mikrotik/${id}/escaneo${qs({
                lista,
                fuentes: fuentes?.join(',')
            })}`),
        importar: (id, clientes)=>post(`/api/mikrotik/${id}/importar`, {
                clientes
            }),
        exportar: (id, datos)=>post(`/api/mikrotik/${id}/exportar`, datos),
        migrarLista: (id, datos)=>post(`/api/mikrotik/${id}/migrar-lista`, datos),
        sincronizarMorosos: (id, datos)=>post(`/api/mikrotik/${id}/sincronizar-morosos`, datos)
    },
    /**
   * Herramientas técnicas sobre un abonado.
   *
   * Reciben el id del CLIENTE, no el del router: el objetivo lo deduce el
   * middleware leyendo su ficha. Mandar la IP desde acá haría que un id
   * equivocado le reinicie el equipo al vecino.
   */ herramientas: {
        ping: (clientId, datos = {})=>post(`/api/herramientas/${clientId}/ping`, datos),
        traceroute: (clientId, datos = {})=>post(`/api/herramientas/${clientId}/traceroute`, datos),
        senal: (clientId)=>post(`/api/herramientas/${clientId}/senal`, {}),
        testVelocidad: (clientId, datos = {})=>post(`/api/herramientas/${clientId}/test-velocidad`, datos),
        reiniciar: (clientId)=>post(`/api/herramientas/${clientId}/reiniciar`, {
                confirmar: true
            }),
        kickPpp: (clientId)=>post(`/api/herramientas/${clientId}/kick-ppp`, {}),
        wifi: (clientId, datos)=>post(`/api/herramientas/${clientId}/wifi`, datos),
        dispositivos: (clientId)=>get(`/api/herramientas/${clientId}/dispositivos`)
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
     */ lectura: (id, donde = {})=>post(`/api/instalaciones/${id}/lectura`, donde),
        /**
     * Qué segmento de red le toca a la instalación según dónde apareció la ONT.
     * Sale de la cadena puerto PON → VLAN → subred, sin preguntarle al técnico.
     */ segmentoSugerido: (id)=>get(`/api/instalaciones/${id}/segmento-sugerido`),
        /**
     * Autoriza la ONT desde el campo, con los datos de la orden de trabajo.
     * Es lo único que le falta al técnico cuando la fibra ya llegó.
     */ autorizar: (id, datos)=>post(`/api/instalaciones/${id}/autorizar`, datos),
        /** La siguiente dirección libre del pool o del segmento del nodo. */ // Todos los segmentos entre los que el técnico puede elegir, con su torre.
        segmentos: (id)=>get(`/api/instalaciones/${id}/segmentos`),
        ipLibre: (id, { pool, red, router_id } = {})=>get(`/api/instalaciones/${id}/ip-libre${qs({
                pool,
                red,
                router_id
            })}`),
        /** Deja al abonado configurado en el router: secret PPPoE o reserva DHCP. */ aprovisionar: (id, datos)=>post(`/api/instalaciones/${id}/aprovisionar`, datos),
        /** Ping y test de ancho de banda contra el equipo recién instalado. */ pruebas: (id, datos = {})=>post(`/api/instalaciones/${id}/pruebas`, datos)
    },
    /**
   * Cambio de ONT: el paso de la OLT.
   *
   * Va solo el id del reemplazo. El puerto, el perfil y la VLAN los lee el
   * servidor de la ONU anterior — el técnico no elige ninguno, que es lo que
   * separa "cambiar un equipo" de "configurar la OLT desde el celular".
   */ reemplazos: {
        aprovisionar: (id)=>post(`/api/reemplazos/${id}/aprovisionar`, {})
    },
    /**
   * Aplicar un plan a los abonados que ya lo tienen.
   *
   * Cambiar la velocidad en la base no le cambia nada a nadie: eso vive en los
   * equipos, y llega distinto según cómo se conecte cada abonado.
   */ planes: {
        /** A cuántos afectaría y en qué equipos. No toca nada. */ impacto: (id)=>get(`/api/planes/${id}/impacto`),
        /** Reescribe la Simple Queue de cada abonado del plan. */ sincronizar: (id)=>post(`/api/planes/${id}/sincronizar`, {}),
        /** En qué routers está disponible el plan y cómo quedó su perfil. */ routers: (id)=>get(`/api/planes/${id}/routers`),
        /**
     * Crea o corrige el perfil PPP del plan en los routers asignados.
     *
     * El perfil queda SIN rate-limit a propósito: en fibra el caudal lo pone la
     * traffic table de la OLT.
     */ aprovisionar: (id)=>post(`/api/planes/${id}/aprovisionar`, {})
    },
    /**
   * IPAM: qué direcciones existen y quién ocupa cada una.
   *
   * `sincronizar` trae lo que el router tiene CONFIGURADO; `escanear` averigua
   * qué hay CONECTADO. La diferencia entre las dos listas es la auditoría.
   */ ipam: {
        // Deja el pool del router igual al rango declarado en el bloque. El rango
        // vive en los dos lados y el que manda es el router.
        sincronizarPool: (subredId)=>post(`/api/ipam/subredes/${subredId}/sincronizar-pool`),
        // Reconstruye los bloques leyendo los pools del router. Es lo que evita
        // cargar a mano la red de un ISP que llega con todo armado.
        importarBloques: (routerId, datos)=>post(`/api/ipam/routers/${routerId}/importar-bloques`, datos),
        sincronizar: (subredId)=>post(`/api/ipam/subredes/${subredId}/sincronizar`, {}),
        escanear: (subredId, datos = {})=>post(`/api/ipam/subredes/${subredId}/escanear`, datos),
        libre: (subredId)=>get(`/api/ipam/subredes/${subredId}/libre`),
        /**
     * ¿Está libre esta IP?
     *
     * Contesta con el NOMBRE de quien la tiene, no con un sí o un no: "está
     * ocupada" obliga a ir a buscar por quién, y el que está dando de alta a un
     * abonado con el técnico esperando en el poste no va a ir a buscar nada.
     */ verificarIp: (ip, { router, excluir } = {})=>get(`/api/ipam/ips/${encodeURIComponent(ip)}${qs({
                router,
                excluir
            })}`),
        /**
     * Comparar las IPs del sistema con las del router.
     *
     * Se corre después de migrar un padrón: el sistema cree saber qué IP tiene
     * cada abonado —la que decía el archivo— y el router sabe otra cosa.
     */ conciliarIps: (routerId)=>get(`/api/ipam/routers/${routerId}/conciliar-ips`),
        /**
     * Hacerse cargo del corte que ya existe en el router.
     *
     * Va en dos pasos siempre: `planCorte` mira y no toca nada, `adoptarCorte`
     * ejecuta. Lo que está del otro lado es el firewall de un equipo con
     * abonados conectados.
     */ planCorte: (routerId)=>get(`/api/ipam/routers/${routerId}/corte`),
        adoptarCorte: (routerId, datos)=>post(`/api/ipam/routers/${routerId}/corte`, datos),
        /** Estado de cada CCR con su carga de CPU y memoria. */ saludRouters: ()=>get('/api/ipam/routers/salud')
    },
    /** Monitoreo de la red en vivo. */ nms: {
        estado: ()=>get('/api/nms/estado'),
        sondear: ()=>post('/api/nms/sondear', {}),
        /** Prueba suelta de un nodo: no registra nada en el historial. */ probar: (nodoId)=>post(`/api/nms/nodos/${nodoId}/probar`, {})
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
        guardar: (id, datos)=>put(`/api/plantillas-whatsapp/${id}`, datos)
    },
    /**
   * Cortes masivos y mantenimientos programados.
   *
   * `previsualizar` es la llamada importante: dice a cuántos abonados alcanzaría
   * un alcance ANTES de que exista algo que se pueda abrir de un clic.
   */ incidencias: {
        listar: (estado = 'abierta')=>get(`/api/incidencias${qs({
                estado
            })}`),
        previsualizar: (alcance)=>post('/api/incidencias/previsualizar', alcance),
        crear: (datos)=>post('/api/incidencias', datos),
        abrir: (id)=>post(`/api/incidencias/${id}/abrir`, {}),
        resolver: (id)=>post(`/api/incidencias/${id}/resolver`, {}),
        cancelar: (id, motivo)=>post(`/api/incidencias/${id}/cancelar`, {
                motivo
            }),
        avisos: (id)=>get(`/api/incidencias/${id}/avisos`),
        enviarPendientes: (lote = 40)=>post('/api/incidencias/enviar-pendientes', {
                lote
            })
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
        guardar: (id, datos)=>put(`/api/integracion-admin/llaves/${id}`, datos),
        revocar: (id, motivo = null)=>request('DELETE', `/api/integracion-admin/llaves/${id}`, {
                motivo
            }),
        llamadas: (filtros = {})=>get(`/api/integracion-admin/llamadas${qs(filtros)}`),
        reportados: (estado = 'pendiente')=>get(`/api/integracion-admin/pagos-reportados${qs({
                estado
            })}`),
        confirmar: (id, datos = {})=>post(`/api/integracion-admin/pagos-reportados/${id}/confirmar`, datos),
        rechazar: (id, motivo)=>post(`/api/integracion-admin/pagos-reportados/${id}/rechazar`, {
                motivo
            })
    },
    portalAdmin: {
        resumen: ()=>get('/api/portal-admin/resumen'),
        buscar: (q)=>get(`/api/portal-admin/buscar?q=${encodeURIComponent(q)}`),
        resetear: (id)=>post(`/api/portal-admin/abonados/${id}/resetear`),
        // Genera una clave y la deja legible en la ficha, para dictarla por teléfono.
        fijarClave: (id)=>post(`/api/portal-admin/abonados/${id}/clave`),
        cerrarSesiones: (id)=>post(`/api/portal-admin/abonados/${id}/cerrar-sesiones`),
        solicitudes: (estado = 'pendiente')=>get(`/api/portal-admin/solicitudes?estado=${estado}`),
        marcarSolicitud: (id, estado)=>post(`/api/portal-admin/solicitudes/${id}`, {
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
        retiro: (id)=>archivo(`/api/actas/retiro/${id}`),
        entrega: (id)=>archivo(`/api/actas/entrega/${id}`)
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
     */ contrato: (clienteId, { contratoId = null, descargar = false } = {})=>archivo(`/api/documentos/contrato/${clienteId}${qs({
                contrato: contratoId,
                descargar: descargar ? '1' : null
            })}`),
        /**
     * El contrato de adhesión de la ARCOTEL, con sus cuatro anexos.
     *
     * `origen` es 'cliente' o 'orden': el contrato se firma ANTES del alta, así
     * que tiene que poder salir de una orden de trabajo — de alguien que
     * todavía no es abonado— con los datos que cargó el vendedor.
     */ contratoArcotel: (id, { origen = 'cliente', contratoId = null, descargar = false } = {})=>archivo(`/api/documentos/contrato-arcotel/${origen === 'orden' ? 'orden/' : ''}${id}${qs({
                contrato: contratoId,
                descargar: descargar ? '1' : null
            })}`),
        /** Qué quedaría en blanco, para avisarlo ANTES de imprimir las nueve hojas. */ revisarContrato: (id, origen = 'cliente')=>get(`/api/documentos/contrato-arcotel/${origen === 'orden' ? 'orden/' : ''}${id}?revisar=1`),
        instalacion: (id, descargar = false)=>archivo(`/api/documentos/instalacion/${id}${descargar ? '?descargar=1' : ''}`),
        ticket: (id, descargar = false)=>archivo(`/api/documentos/ticket/${id}${descargar ? '?descargar=1' : ''}`),
        recibo: (pagoId, descargar = false)=>archivo(`/api/documentos/recibo/${pagoId}${descargar ? '?descargar=1' : ''}`),
        /**
     * El recibo para la térmica: llega como TEXTO, no como PDF.
     *
     * Una tirilla de 58 mm no se pagina; mandarle un PDF abriría el diálogo de
     * impresión con márgenes de hoja A4, que es lo que estorba en el mostrador.
     */ reciboPos: (pagoId, ancho = 32)=>archivo(`/api/documentos/recibo-pos/${pagoId}?ancho=${ancho}`).then((b)=>b.text()),
        /** La vista previa del editor, con datos reales de ese abonado o ese cobro. */ previa: (tipo, id)=>get(`/api/documentos/${tipo}/${id}?texto=1`)
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
        /** Prueba la conexión sin crear ningún trámite. */ probar: (api_url = null)=>post('/api/firmas/probar', {
                api_url
            }),
        de: ({ instalacionId = null, clienteId = null } = {})=>get(`/api/firmas${qs({
                instalacion: instalacionId,
                cliente: clienteId
            })}`),
        solicitar: (datos)=>post('/api/firmas/solicitar', datos),
        autorizarManual: (id, motivo = null)=>post(`/api/firmas/${id}/autorizar-manual`, {
                motivo
            }),
        registrarManual: (id, datos)=>post(`/api/firmas/${id}/registrar-manual`, datos),
        vencer: ()=>post('/api/firmas/vencer', {})
    },
    /** Las alertas en tiempo real: estado del canal y prueba de destinos. */ alertas: {
        estado: ()=>get('/api/alertas/estado'),
        probar: (id)=>post(`/api/alertas/destinos/${id}/probar`, {}),
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
        marcarEnviado: (id)=>post(`/api/comunicaciones/${id}/marcar-enviado`, {})
    },
    /** Consumo medido de los abonados. */ consumo: {
        estado: ()=>get('/api/consumo/estado'),
        recolectar: (datos = {})=>post('/api/consumo/recolectar', datos),
        sincronizarSesiones: ()=>post('/api/consumo/sesiones/sincronizar', {}),
        reporte: (clientId, mes, descargar = false)=>archivo(`/api/consumo/${clientId}/reporte?mes=${mes}${descargar ? '&descargar=1' : ''}`)
    },
    sri: {
        config: ()=>get('/api/sri/config'),
        guardarConfig: (datos)=>request('PUT', '/api/sri/config', datos),
        catalogos: ()=>get('/api/sri/catalogos'),
        preview: (detalles)=>post('/api/sri/preview', {
                detalles
            }),
        emitirFactura: (datos)=>post('/api/sri/facturas', datos),
        xml: (id)=>get(`/api/sri/documentos/${id}/xml`),
        /** RIDE en PDF: lo que se le entrega al abonado. */ ride: (id)=>archivo(`/api/sri/documentos/${id}/ride`),
        /** Emite las facturas de los cobros del cierre y las manda al SRI. */ facturarLote: (datos)=>post('/api/sri/facturar-lote', datos),
        /** Devuelve el número de un comprobante que nunca salió, para reutilizarlo. */ liberarNumero: (id, datos)=>post(`/api/sri/documentos/${id}/liberar-numero`, datos),
        /** Generación mensual de las facturas del sistema. */ facturasDelMes: ()=>get('/api/sri/facturas-mes'),
        generarFacturasDelMes: (datos)=>post('/api/sri/facturas-mes', datos),
        certificado: ()=>get('/api/sri/certificado'),
        subirCertificado: (datos)=>post('/api/sri/certificado', datos),
        borrarCertificado: ()=>del('/api/sri/certificado'),
        probarFirma: ()=>post('/api/sri/probar-firma'),
        firmar: (id)=>post(`/api/sri/documentos/${id}/firmar`),
        enviar: (id)=>post(`/api/sri/documentos/${id}/enviar`),
        autorizacion: (id)=>post(`/api/sri/documentos/${id}/autorizacion`),
        procesar: (id, opciones)=>post(`/api/sri/documentos/${id}/procesar`, opciones),
        /** Manda el XML autorizado y el RIDE al comprador. */ email: (id, datos)=>post(`/api/sri/documentos/${id}/email`, datos),
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
     */ comprobante: (id)=>archivo(`/api/pagos/${id}/comprobante`),
        /** El recibo de cobro pelado, para cuando se lo quiere sí o sí. */ recibo: (id)=>archivo(`/api/pagos/${id}/recibo`),
        /** Estado de cuenta de una factura: sus pagos, excedentes y saldo. */ facturaPdf: (id)=>archivo(`/api/pagos/facturas/${id}/pdf`),
        /**
     * El cierre de caja: todo lo cobrado con estos filtros, con sus totales.
     *
     * Los filtros viajan como texto de query y el filtrado se rehace del lado del
     * servidor. Mandar las filas que se ven en pantalla haría un cierre de quince
     * cobros con un total que parece correcto.
     */ transaccionesPdf: (query = '')=>archivo(`/api/pagos/transacciones/pdf${query ? `?${query}` : ''}`),
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
     */ arcotel: (query = '')=>archivo(`/api/pagos/arcotel${query ? `?${query}` : ''}`),
        /** Estado del corte automático y a quién cortaría si corriera ahora. */ cortes: ()=>get('/api/pagos/cortes'),
        ejecutarCortes: (datos)=>post('/api/pagos/cortes/ejecutar', datos)
    },
    olt: {
        test: (id)=>get(`/api/olt/${id}/test`),
        /**
     * Estado del equipo: temperatura, placas, consumo y puertos PON.
     *
     * Se lee en vivo y tarda —son varios comandos contra la CLI— así que la
     * pantalla no lo pide sola: lo trae cuando alguien abre el panel.
     */ salud: (id)=>get(`/api/olt/${id}/salud`),
        onus: (id, { frame, slot, puerto })=>get(`/api/olt/${id}/onus${qs({
                frame,
                slot,
                puerto
            })}`),
        autofind: (id, { frame, slot, puerto, puertos })=>get(`/api/olt/${id}/autofind${qs({
                frame,
                slot,
                puerto,
                puertos
            })}`),
        registrar: (id, datos)=>post(`/api/olt/${id}/onus`, datos),
        configurarServicio: (id, datos)=>post(`/api/olt/${id}/onus/servicio`, datos),
        eliminar: (id, onuId, { frame, slot, puerto })=>del(`/api/olt/${id}/onus/${onuId}${qs({
                frame,
                slot,
                puerto
            })}`),
        metricas: (id, onuId, { frame, slot, puerto })=>get(`/api/olt/${id}/onus/${onuId}/metricas${qs({
                frame,
                slot,
                puerto
            })}`),
        crearLineProfile: (id, datos)=>post(`/api/olt/${id}/line-profiles`, datos),
        aplicarPlan: (id, datos)=>post(`/api/olt/${id}/traffic-tables`, datos),
        cli: (id, comandos)=>post(`/api/olt/${id}/cli`, {
                comandos
            }),
        // --- Ficha del equipo ---------------------------------------------------
        /**
     * Alcance. Es un TCP contra el puerto de gestión, no una sesión CLI: el
     * listado necesita saber si el equipo contesta, no hablar con él.
     */ estado: (id)=>get(`/api/olt/${id}/estado`),
        estados: ()=>post('/api/olt/estados'),
        /** Lee modelo y firmware del equipo y los deja guardados en la ficha. */ versiones: (id)=>post(`/api/olt/${id}/versiones`),
        placas: (id)=>get(`/api/olt/${id}/cards`),
        puertosPon: (id, { slot } = {})=>get(`/api/olt/${id}/pon-ports${qs({
                slot
            })}`),
        /**
     * Estado detallado por puerto: potencia Tx del módulo de la OLT, su
     * temperatura, ONU rogue y cuándo se cayó por última vez.
     *
     * Es un comando por puerto, así que va bajo demanda.
     */ /**
     * Puertos de subida con las VLANs que pasan por cada uno. Un comando por
     * placa más uno por puerto, así que va bajo demanda.
     */ uplinks: (id, { slots } = {})=>get(`/api/olt/${id}/uplinks${qs({
                slots
            })}`),
        /**
     * Agrega o quita VLANs de un troncal.
     *
     * Quitar una VLAN con abonados los deja sin salida a todos a la vez: el
     * middleware se niega salvo que se insista con `forzar`, y devuelve cuántos
     * son para que la pantalla lo pueda decir.
     */ cambiarVlansUplink: (id, datos)=>post(`/api/olt/${id}/uplinks/vlans`, {
                confirmar: true,
                ...datos
            }),
        estadoPuertos: (id, { slot, puertos } = {})=>get(`/api/olt/${id}/pon-ports/estado${qs({
                slot,
                puertos
            })}`),
        /**
     * Acciones masivas sobre todos los puertos de una placa.
     * `accion`: encender · apagar · autofind_on · autofind_off · reiniciar_onts
     */ accionPuertos: (id, { slot, accion, puertos })=>post(`/api/olt/${id}/pon-ports/acciones`, {
                confirmar: true,
                slot,
                accion,
                puertos
            }),
        /** Reinicia las ONTs de un puerto. Corta el servicio de sus abonados. */ reiniciarPuerto: (id, { slot, puerto, graceful = true })=>post(`/api/olt/${id}/pon-ports/${slot}/${puerto}/reiniciar`, {
                confirmar: true,
                graceful
            }),
        /**
     * Le pregunta al equipo qué comandos entiende de un área y devuelve la
     * salida cruda. Es el paso previo a escribir el parser, no su reemplazo.
     */ relevar: (id, area)=>post(`/api/olt/${id}/relevar/${area}`),
        areas: ()=>get('/api/olt/areas'),
        historial: (id, { limite } = {})=>get(`/api/olt/${id}/historial${qs({
                limite
            })}`),
        backups: (id)=>get(`/api/olt/${id}/backups`),
        respaldar: (id, datos)=>post(`/api/olt/${id}/backups`, datos ?? {}),
        verBackup: (id, backupId)=>get(`/api/olt/${id}/backups/${backupId}`),
        borrarBackup: (id, backupId)=>del(`/api/olt/${id}/backups/${backupId}`),
        // --- SNMP: lectura masiva -----------------------------------------------
        /**
     * Le pregunta la comunidad SNMP al equipo y la guarda cifrada. Nunca
     * devuelve el valor, solo cuántos caracteres tiene.
     */ detectarComunidad: (id)=>post(`/api/olt/${id}/snmp/detectar`),
        /**
     * Potencia óptica de todas las ONTs de una sola vez.
     *
     * Por defecto solo la RX, que es la que dispara alertas. `completo` agrega
     * temperatura, voltaje y corriente del láser, pero cuesta cinco recorridos
     * en vez de uno.
     */ potencias: (id, { guardar, completo } = {})=>get(`/api/olt/${id}/potencias${qs({
                guardar: guardar ? 1 : undefined,
                completo: completo ? 1 : undefined
            })}`),
        /**
     * ONTs conectadas que nadie autorizó todavía. Va bajo demanda: son varios
     * comandos por la CLI y consumen la sesión del equipo.
     */ esperando: (id)=>get(`/api/olt/${id}/esperando`),
        /**
     * Dispara el barrido de todas las OLTs y lo deja guardado. La pantalla lee
     * el resultado de la base, no de acá: así abrir el tablero es instantáneo.
     */ escanearEsperando: ()=>post('/api/olt/esperando/escanear'),
        /**
     * Ficha completa de una ONU: lo guardado y lo que dice el equipo ahora, en
     * bloques separados. Cuesta una sesión SSH, por eso va a pedido.
     */ fichaOnu: (oltId, onuId)=>get(`/api/olt/${oltId}/onus/${onuId}/ficha`),
        /**
     * Relee del equipo y corrige NUESTRA copia. No le manda nada a la ONT.
     * La que sí le escribe es reprovisionarOnu.
     */ actualizarFichaOnu: (oltId, onuId)=>post(`/api/olt/${oltId}/onus/${onuId}/actualizar-ficha`),
        /**
     * Le vuelve a ENVIAR la configuración a la ONT.
     * Para cuando el TR069 no la aplicó y el abonado quedó sin servicio.
     */ reprovisionarOnu: (oltId, onuId)=>post(`/api/olt/${oltId}/onus/${onuId}/reprovisionar`, {
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
     */ tr069DeLaOlt: (oltId)=>get(`/api/olt/${oltId}/tr069/perfiles`),
        /** Cómo sale a internet una ONT, y los perfiles de WAN de su OLT. */ wanOnu: (oltId, onuId)=>get(`/api/olt/${oltId}/onus/${onuId}/wan`),
        /** Configura o saca la WAN. Cambia el servicio del abonado. */ configurarWanOnu: (oltId, onuId, datos)=>post(`/api/olt/${oltId}/onus/${onuId}/wan`, {
                confirmar: true,
                ...datos
            }),
        /**
     * La dirección, el PPPoE o el DHCP de la WAN, por TR-069.
     *
     * Es lo que el perfil de la OLT no guarda: `wanOnu` ya trae esto en
     * `datos.tr069` para mostrarlo, y esto es el pedido de cambiarlo.
     */ configurarWanTr069Onu: (oltId, onuId, datos)=>post(`/api/olt/${oltId}/onus/${onuId}/wan/tr069`, {
                confirmar: true,
                ...datos
            }),
        gestionOnu: (oltId, onuId, datos)=>post(`/api/olt/${oltId}/onus/${onuId}/gestion`, datos),
        cambiarPerfilesOnu: (oltId, onuId, { srv_profile_id, line_profile_id })=>post(`/api/olt/${oltId}/onus/${onuId}/perfiles`, {
                confirmar: true,
                srv_profile_id,
                line_profile_id
            }),
        /** Devuelve la ONT a fábrica: borra el wifi y todo lo del abonado. */ restaurarFabricaOnu: (oltId, onuId, completamente = false)=>post(`/api/olt/${oltId}/onus/${onuId}/restaurar-fabrica`, {
                confirmar: true,
                completamente
            }),
        /** La configuración que el equipo tiene en ejecución para esa ONT. */ configActivaOnu: (oltId, onuId)=>get(`/api/olt/${oltId}/onus/${onuId}/config-activa`),
        /** Los puertos de adentro de la ONT: ethernet de la casa y teléfono. */ puertosOnu: (oltId, onuId)=>get(`/api/olt/${oltId}/onus/${onuId}/puertos`),
        /** Modelo, firmware y fabricante, en vivo. */ softwareOnu: (oltId, onuId)=>get(`/api/olt/${oltId}/onus/${onuId}/software`),
        /**
     * Velocidad en vivo. Se consulta repetidamente: la primera respuesta no
     * trae Mbps porque hacen falta dos lecturas para restar.
     */ traficoOnu: (oltId, onuId)=>get(`/api/olt/${oltId}/onus/${onuId}/trafico`),
        /** Reinicia UNA ONT. Corta el servicio un par de minutos. */ reiniciarOnu: (oltId, onuId)=>post(`/api/olt/${oltId}/onus/${onuId}/reiniciar`, {
                confirmar: true
            }),
        /**
     * Cajas NAP. `proponerNaps` devuelve candidatas para revisar, no un mapa:
     * la OLT no puede saber de qué caja cuelga un abonado.
     */ naps: (oltId)=>get(`/api/olt/naps${qs({
                olt_id: oltId
            })}`),
        proponerNaps: (oltId)=>get(`/api/olt/${oltId}/naps/proponer`),
        crearNap: (oltId, datos)=>post(`/api/olt/${oltId}/naps`, datos),
        borrarNap: (napId)=>del(`/api/olt/naps/${napId}`),
        asignarANap: (napId, onu_ids, verificada = false)=>post(`/api/olt/naps/${napId}/onus`, {
                onu_ids,
                verificada
            }),
        /** Relee del equipo la ficha de TODAS las ONUs. Arranca y contesta ya. */ resyncMasivo: (oltId, todas = false)=>post(`/api/olt/${oltId}/resync-masivo`, {
                todas
            }),
        estadoResyncMasivo: ()=>get('/api/olt/resync-masivo/estado'),
        detenerResyncMasivo: ()=>post('/api/olt/resync-masivo/detener'),
        /**
     * Perfiles de velocidad (traffic tables) de varias OLTs a la vez.
     *
     * El índice es de cada equipo: el 12 de una OLT no tiene por qué ser la
     * misma velocidad que el 12 de otra. Por eso se listan por equipo.
     */ velocidades: (oltIds)=>get(`/api/olt/velocidades${qs({
                olt_ids: (oltIds ?? []).join(',')
            })}`),
        crearVelocidad: (datos)=>post('/api/olt/velocidades', datos),
        /**
     * Crea un plan comercial a partir de un par de tablas que ya existe.
     *
     * Es el camino inverso al del formulario de planes, y el que sirve en una
     * red que ya está andando: las tablas están desde hace años y lo único que
     * falta es el nombre comercial y el precio.
     */ crearPlanDesdeTablas: (oltId, datos)=>post(`/api/olt/${oltId}/velocidades/plan`, datos),
        borrarVelocidad: (index, oltIds)=>del(`/api/olt/velocidades/${index}${qs({
                olt_ids: (oltIds ?? []).join(',')
            })}`),
        /**
     * Las VLANs de la OLT: las del equipo más lo que sabemos de ellas.
     *
     * Lo que el equipo no puede decir —para qué se usa cada una y de qué puerto
     * PON es la predeterminada— es lo que después permite que una instalación
     * elija sola su segmento de red.
     */ vlans: (oltId)=>get(`/api/olt/${oltId}/vlans`),
        // La misma información al revés: los puertos de cada placa con su VLAN. Es
        // la vista con la que se configura, porque muestra también los puertos
        // vacíos — que son justamente los que falta configurar.
        vlansPorPuerto: (oltId)=>get(`/api/olt/${oltId}/vlans/puertos`),
        // Pools de IP para las ONUs: las de gestión (TR069) y las WAN estáticas.
        // No tocan el equipo: son el registro de qué direcciones hay y cuáles
        // están libres, que hoy se resuelve mirando la OLT a mano.
        poolsIp: (oltId, proposito)=>get(`/api/olt/${oltId}/pools-ip${qs({
                proposito
            })}`),
        poolIps: (oltId, subredId, params = {})=>get(`/api/olt/${oltId}/pools-ip/${subredId}/ips${qs(params)}`),
        revisarPoolIp: (oltId, datos)=>post(`/api/olt/${oltId}/pools-ip/revisar`, datos),
        crearPoolIp: (oltId, datos)=>post(`/api/olt/${oltId}/pools-ip`, datos),
        editarPoolIp: (oltId, subredId, datos)=>put(`/api/olt/${oltId}/pools-ip/${subredId}`, datos),
        ampliarPoolIp: (oltId, subredId, datos)=>post(`/api/olt/${oltId}/pools-ip/${subredId}/ampliar`, datos),
        borrarPoolIp: (oltId, subredId, forzar)=>del(`/api/olt/${oltId}/pools-ip/${subredId}${qs({
                forzar: forzar ? 'true' : ''
            })}`),
        siguienteIpPool: (oltId, subredId)=>get(`/api/olt/${oltId}/pools-ip/${subredId}/siguiente`),
        // Trae las IPs de gestión que las ONTs ya tienen puestas. Es el paso de una
        // migración: sin esto el primer alta entrega una dirección repetida.
        importarIpsGestion: (oltId, datos)=>post(`/api/olt/${oltId}/pools-ip/importar`, datos),
        // Lo caro: preguntarle al equipo cómo está armado. Es un botón aparte
        // porque tarda ~30 s y casi todo es hardware que no cambia.
        relevarPuertos: (oltId)=>post(`/api/olt/${oltId}/vlans/puertos/relevar`),
        // Traer al sistema lo que el equipo ya tiene. No escribe en la OLT: lo
        // único que toca son nuestras anotaciones.
        importarVlans: (oltId, datos)=>post(`/api/olt/${oltId}/vlans/importar`, datos),
        // La VLAN de un puerto vive aparte de la VLAN en sí: varios puertos pueden
        // compartir una, y con la clave puesta en la VLAN solo entraba uno.
        asignarPuerto: (oltId, slot, puerto, datos)=>put(`/api/olt/${oltId}/puertos/${slot}/${puerto}`, datos),
        desasignarPuerto: (oltId, slot, puerto)=>del(`/api/olt/${oltId}/puertos/${slot}/${puerto}`),
        crearVlans: (oltId, datos)=>post(`/api/olt/${oltId}/vlans`, datos),
        borrarVlans: (oltId, datos)=>post(`/api/olt/${oltId}/vlans/borrar`, datos),
        anotarVlan: (oltId, vlan, datos)=>put(`/api/olt/${oltId}/vlans/${vlan}`, datos),
        vlansCorrelativas: (oltId, datos)=>post(`/api/olt/${oltId}/vlans/correlativas`, datos),
        // El esquema por puerto va en dos pasos: primero se calcula y se contrasta
        // con lo que ya existe sin tocar nada, y recién después se crea. Dieciséis
        // subredes salidas de un solo botón son demasiadas para no verlas antes.
        esquemaSimular: (oltId, datos)=>post(`/api/olt/${oltId}/vlans/esquema/simular`, datos),
        esquemaAplicar: (oltId, datos)=>post(`/api/olt/${oltId}/vlans/esquema/aplicar`, datos),
        // Deshacer: el bloque, el pool y la VLAN del puerto, de una. Crear son tres
        // cosas y deshacerlas eran tres pantallas distintas.
        esquemaDeshacer: (oltId, datos)=>post(`/api/olt/${oltId}/vlans/esquema/deshacer`, datos),
        // Un perfil PPP por VLAN, con el gateway de cada bloque.
        perfilesPorVlan: (oltId, datos)=>post(`/api/olt/${oltId}/perfiles-por-vlan`, datos),
        /** Las traffic tables de UNA OLT, para elegir desde un plan. */ trafficTables: (oltId)=>get(`/api/olt/${oltId}/traffic-tables`),
        /** Comprueba los planes contra las tablas que el equipo tiene de verdad. */ verificarPlanes: (oltId, guardar = false)=>get(`/api/olt/${oltId}/planes/verificar${guardar ? '?guardar=1' : ''}`),
        /** Perfiles de línea y de servicio que tiene cargados el equipo. */ perfilesOnt: (id)=>get(`/api/olt/${id}/perfiles`),
        /**
     * Plantillas de autorización: el juego de datos que se repite en todas las
     * altas de una zona.
     */ presets: (oltId)=>get(`/api/olt/presets${qs({
                olt_id: oltId
            })}`),
        guardarPreset: (datos)=>post('/api/olt/presets', datos),
        borrarPreset: (id)=>del(`/api/olt/presets/${id}`),
        /** ONTs cargadas antes de estar conectadas. */ preautorizadas: (filtros)=>get(`/api/olt/preautorizadas${qs(filtros ?? {})}`),
        cargarPreautorizada: (oltId, datos)=>post(`/api/olt/${oltId}/preautorizar`, datos),
        borrarPreautorizada: (id)=>del(`/api/olt/preautorizadas/${id}`),
        reactivarPreautorizada: (id)=>post(`/api/olt/preautorizadas/${id}/reactivar`),
        /**
     * Ficha de una ONT que espera autorización: quién es, desde cuándo está y
     * si esa serie ya figura en una orden de instalación o en otra OLT.
     */ verEsperando: (id, sn)=>get(`/api/olt/${id}/esperando/${encodeURIComponent(sn)}`),
        /**
     * Vuelve a preguntarle al equipo por UNA ONT. Puede sacarla de la cola si el
     * equipo ya no la ve, por eso es POST.
     */ resyncEsperando: (id, sn)=>post(`/api/olt/${id}/esperando/${encodeURIComponent(sn)}/resync`),
        /**
     * Todo lo que hace falta para llenar el formulario de autorización: la
     * orden de instalación que coincide con esa serie, los perfiles del equipo,
     * los planes y qué proponer en cada campo.
     */ datosAutorizacion: (id, sn)=>get(`/api/olt/${id}/autorizar/datos${qs({
                sn
            })}`),
        /** Registra la ONT en la OLT y le crea su service-port. */ autorizar: (id, datos)=>post(`/api/olt/${id}/autorizar`, datos),
        /** Vista previa de la importación: no escribe nada. */ inventario: (id)=>get(`/api/olt/${id}/inventario`),
        importarOnus: (id)=>post(`/api/olt/${id}/inventario`),
        /** Enlace ONT↔abonado. `crear` da de alta las fichas que faltan. */ abonados: (id)=>get(`/api/olt/${id}/abonados`),
        enlazarAbonados: (id, { crear } = {})=>post(`/api/olt/${id}/abonados`, {
                crear: Boolean(crear)
            }),
        // --- Operaciones sobre una ONT instalada --------------------------------
        /** Cambia la velocidad. No corta el servicio. */ cambiarPlanOnu: (id, onuId, planId)=>post(`/api/olt/${id}/onus/${onuId}/plan`, {
                plan_id: planId
            }),
        /** Suspende o reactiva. Reversible: la configuración queda intacta. */ suspenderOnu: (id, onuId, activar)=>post(`/api/olt/${id}/onus/${onuId}/suspender`, {
                activar
            }),
        /** Cómo está configurada la ONT en el equipo, tal cual. */ configOnu: (id, onuId)=>get(`/api/olt/${id}/onus/${onuId}/config`),
        /** Mueve la ONT a otro puerto. Es borrar y recrear: corta el servicio. */ moverOnu: (id, onuId, { slot, puerto })=>post(`/api/olt/${id}/onus/${onuId}/mover`, {
                confirmar: true,
                slot,
                puerto
            }),
        /** Baja definitiva: borra la ONT del equipo y de la base. */ darDeBajaOnu: (id, onuId)=>del(`/api/olt/${id}/onus/${onuId}/baja?confirmar=true`),
        /** Coherencia entre lo que dice la base y lo que hay configurado. */ inconsistencias: ({ profundo } = {})=>get(`/api/olt/inconsistencias${qs({
                profundo: profundo ? 1 : undefined
            })}`)
    }
};
}),
"[project]/src/lib/pdf.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
async function abrirPdf(traer, nombre = 'documento.pdf') {
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
            } catch  {
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
}),
"[project]/src/lib/cola.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
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
    db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openDB"])(BASE, 1, {
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
    if (err?.definitivo) return true;
    const code = err?.code ?? '';
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
    const code = err?.code ?? '';
    if (code === 'PGRST301' || err?.status === 401) return true;
    return /jwt|token|expired|refresh/i.test(err?.message ?? '');
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
                    error: `Tipo desconocido: ${op.tipo}`
                });
                continue;
            }
            try {
                await manejador(op.datos, op.clave);
                await borrar(op.id);
                enviadas++;
            } catch (err) {
                // 23505 significa que el servidor ya lo tenía. Es éxito, no error.
                if (err?.code === '23505') {
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
                await guardar({
                    ...op,
                    intentos,
                    estado: trabado ? 'trabado' : 'pendiente',
                    error: err?.message ?? String(err)
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
}),
"[project]/src/lib/colaCampo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campoApi",
    ()=>campoApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cola.js [app-ssr] (ecmascript)");
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
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registrarTipo"])('instalacion.guardar', async ({ id, campos })=>{
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('instalaciones').update(campos).eq('id', id);
    if (error) throw error;
});
/* ── 2. Descontar material ──────────────────────────────────────────────────
 *
 * Acá la clave es imprescindible: es la operación que, reintentada, deja el
 * inventario mintiendo. El índice único de la migración 84 la rechaza con 23505
 * y la cola lee ese código como "ya estaba".
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registrarTipo"])('material.consumir', async ({ movimientos }, clave)=>{
    // Varias líneas del mismo consumo comparten la clave base con un sufijo:
    // cada fila necesita su propia clave única, pero todas tienen que ser
    // estables entre reintentos.
    const filas = movimientos.map((m, i)=>({
            ...m,
            clave_idempotencia: derivar(clave, i)
        }));
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(filas);
    if (error) throw error;
});
/* ── 3. Cerrar la instalación ───────────────────────────────────────────────
 *
 * La función de la base ya es idempotente: si la instalación tiene `client_id`,
 * devuelve ese mismo id sin crear otro abonado, y el `FOR UPDATE` serializa dos
 * llamadas a la vez. Se comprobó antes de permitir encolarla — es lo que hace
 * posible que el botón sea uno solo.
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registrarTipo"])('instalacion.finalizar', async ({ id })=>{
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('finalizar_alta_instalacion', {
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
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registrarTipo"])('ticket.actualizar', async ({ id, campos })=>{
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tickets').update(campos).eq('id', id);
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encolar"])(tipo, datos);
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
 */ const esDeConexion = (err)=>!navigator.onLine || !err?.code || err.message?.includes('fetch') || err.message?.includes('network');
const campoApi = {
    guardarOrden: (id, campos)=>intentarOEncolar('instalacion.guardar', {
            id,
            campos
        }, async ()=>{
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('instalaciones').update(campos).eq('id', id);
            if (error) throw error;
        }),
    // Devuelve el id del cliente en `data` cuando se ejecutó de verdad. Encolada
    // no puede devolverlo —el cliente todavía no existe— y quien llama tiene que
    // mirar `encolado` antes de usarlo.
    finalizarOrden: (id)=>intentarOEncolar('instalacion.finalizar', {
            id
        }, async ()=>{
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('finalizar_alta_instalacion', {
                p_instalacion_id: id
            });
            if (error) throw error;
            return data;
        }),
    /** Cerrar el ticket, marcarlo en ruta, cambiarle el estado: es lo mismo. */ actualizarTicket: (id, campos)=>intentarOEncolar('ticket.actualizar', {
            id,
            campos
        }, async ()=>{
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tickets').update(campos).eq('id', id);
            if (error) throw error;
        }),
    consumirMaterial: (movimientos)=>intentarOEncolar('material.consumir', {
            movimientos
        }, async ()=>{
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(movimientos);
            if (error) throw error;
        })
};
}),
"[project]/src/components/tecnico/AvisoIncidencia.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvisoIncidencia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
;
;
;
;
;
function AvisoIncidencia({ clientId }) {
    const [incidencias, setIncidencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!clientId) return;
        let vivo = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_incidencia_de_cliente').select('*').eq('client_id', clientId).then(({ data, error })=>{
            // Si la consulta falla —la migración 86 sin correr, por ejemplo— no se
            // muestra nada. Es un aviso extra: que falte no puede impedirle al
            // técnico abrir el trabajo.
            if (vivo && !error) setIncidencias(data ?? []);
        });
        return ()=>{
            vivo = false;
        };
    }, [
        clientId
    ]);
    if (!incidencias.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: incidencias.map((i)=>{
            const caido = i.estado === 'down';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-xl border p-3 ${caido ? 'border-rose-500/40 bg-rose-500/10' : 'border-amber-500/40 bg-amber-500/10'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            size: 18,
                            className: `mt-0.5 shrink-0 ${caido ? 'text-rose-400' : 'text-amber-400'}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-[14px] font-semibold ${caido ? 'text-rose-200' : 'text-amber-200'}`,
                                    children: caido ? 'Atención: la zona está caída' : 'Atención: la zona viene con problemas'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[13px] text-slate-300",
                                    children: [
                                        "Este cliente está conectado a ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[12px] text-slate-400",
                                    children: [
                                        i.clientes_afectados > 1 ? `Hay ${i.clientes_afectados} clientes en la misma situación. ` : '',
                                        "Lo que le pasa al abonado puede ser por esto y no por su instalación."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/tecnico/AvisoIncidencia.jsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                    to: `/campo/red?nodo=${i.nodo_id}`,
                                    className: "mt-2 inline-flex items-center gap-1.5 rounded-lg border border-slate-600/60 px-2.5 py-1.5 text-[12px] text-slate-200 active:bg-slate-800",
                                    children: [
                                        "Ver la incidencia ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
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
function duracion(minutos) {
    if (minutos == null) return '—';
    if (minutos < 0) return 'unos minutos';
    if (minutos < 60) return `${minutos} minutos`;
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    return m ? `${h}h ${m}m` : `${h} horas`;
}
}),
"[project]/src/components/soporte/FirmaDigital.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FirmaDigital
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eraser.js [app-ssr] (ecmascript) <export default as Eraser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
;
;
;
;
function FirmaDigital({ valor, onCambio, alto = 180 }) {
    const lienzoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dibujando = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [vacio, setVacio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!valor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lienzo = lienzoRef.current;
        if (!lienzo) return;
        const dpr = window.devicePixelRatio || 1;
        const ancho = lienzo.parentElement.clientWidth;
        lienzo.width = ancho * dpr;
        lienzo.height = alto * dpr;
        lienzo.style.width = `${ancho}px`;
        lienzo.style.height = `${alto}px`;
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
            img.onload = ()=>ctx.drawImage(img, 0, 0, ancho, alto);
            img.src = valor;
            setVacio(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        alto
    ]);
    const punto = (e)=>{
        const r = lienzoRef.current.getBoundingClientRect();
        const t = e.touches?.[0] ?? e;
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
        onCambio?.(lienzoRef.current.toDataURL('image/jpeg', 0.8));
    }
    function borrar() {
        const lienzo = lienzoRef.current;
        const ctx = lienzo.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, lienzo.width / dpr, lienzo.height / dpr);
        setVacio(true);
        onCambio?.(null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-lg border border-slate-600 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
                    vacio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center gap-2 text-sm text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variante: "fantasma",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__["Eraser"],
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
}),
"[project]/src/lib/telefono.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const limpio = String(telefono ?? '').replace(/\D/g, '');
    if (!limpio) return null;
    if (limpio.startsWith(PAIS)) return limpio;
    return `${PAIS}${limpio.replace(/^0+/, '')}`;
}
function enlaceWhatsApp(telefono, texto = '') {
    const n = aWhatsApp(telefono);
    if (!n) return null;
    return `https://wa.me/${n}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;
}
}),
"[project]/src/lib/soporte.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-ssr] (ecmascript)");
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
const etiquetaIncidencia = (v)=>INCIDENCIAS.find((i)=>i.valor === v)?.label ?? v ?? '—';
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
function enlaceMapa(ticket, app = 'google') {
    const { latitud, longitud, direccion, sector, canton } = ticket ?? {};
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
     */ if (app === 'sistema') return `geo:${latitud},${longitud}?q=${latitud},${longitud}`;
        return app === 'waze' ? `https://waze.com/ul?ll=${latitud},${longitud}&navigate=yes` : `https://www.google.com/maps/dir/?api=1&destination=${latitud},${longitud}`;
    }
    const texto = [
        direccion,
        sector,
        canton
    ].filter(Boolean).join(', ');
    if (!texto) return null;
    // Sin coordenadas solo queda buscar por texto, y `geo:` no sabe hacerlo:
    // ahí cae a Google, que es el que resuelve una dirección escrita.
    return app === 'waze' ? `https://waze.com/ul?q=${encodeURIComponent(texto)}` : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(texto)}`;
}
async function comprimirImagen(archivo, { max = 1280, calidad = 0.7 } = {}) {
    const bitmap = await createImageBitmap(archivo);
    const escala = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
    const lienzo = document.createElement('canvas');
    lienzo.width = Math.round(bitmap.width * escala);
    lienzo.height = Math.round(bitmap.height * escala);
    lienzo.getContext('2d').drawImage(bitmap, 0, 0, lienzo.width, lienzo.height);
    const blob = await new Promise((r)=>lienzo.toBlob(r, 'image/jpeg', calidad));
    bitmap.close?.();
    return blob ?? archivo;
}
function distanciaEnMetros(a, b) {
    if (!a?.lat || !a?.lng || !b?.lat || !b?.lng) return null;
    const rad = (g)=>Number(g) * Math.PI / 180;
    const dLat = rad(b.lat - a.lat);
    const dLng = rad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return Math.round(6371000 * 2 * Math.asin(Math.sqrt(h)));
}
const RADIO_LLEGADA_M = 250;
function ubicacionActual({ timeout = 12_000 } = {}) {
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
    if (m < 60) return `${m} min`;
    const h = Math.floor(m / 60);
    return `${h} h ${m % 60} min`;
}
function haceCuanto(horas) {
    const h = Number(horas) || 0;
    if (h < 1) return `hace ${Math.max(1, Math.round(h * 60))} min`;
    if (h < 24) return `hace ${Math.round(h)} h`;
    const d = Math.floor(h / 24);
    return `hace ${d} ${d === 1 ? 'día' : 'días'}`;
}
}),
"[project]/src/lib/telefono.js [app-ssr] (ecmascript) <export enlaceWhatsApp as enlaceWhatsapp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enlaceWhatsapp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enlaceWhatsApp"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-ssr] (ecmascript)");
}),
"[project]/src/lib/formato.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    return `${valor < 0 ? '-' : ''}${simbolo}${texto}`;
};
const numero = (n, decimales)=>n == null || n === '' || Number.isNaN(Number(n)) ? '—' : Number(n).toLocaleString('en-US', {
        // Sin decimales pedidos: los que tenga, hasta dos (12.5 m de fibra).
        minimumFractionDigits: decimales ?? 0,
        maximumFractionDigits: decimales ?? 2
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
    const d = solo ? new Date(`${texto}T12:00:00-05:00`) : new Date(v);
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
}),
"[project]/src/components/soporte/TicketFicha.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketFicha
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$up$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerUpLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-up-left.js [app-ssr] (ecmascript) <export default as CornerUpLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/colaCampo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$AvisoIncidencia$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/AvisoIncidencia.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$FirmaDigital$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/soporte/FirmaDigital.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-ssr] (ecmascript) <export enlaceWhatsApp as enlaceWhatsapp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-ssr] (ecmascript)");
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
 */ const fecha = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fecha"])(`${String(f).slice(0, 10)}T12:00:00`) : '—';
const fechaHora = (f)=>f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fechaHora"])(f) : '—';
function Dato({ etiqueta, valor, mono = false }) {
    if (valor === null || valor === undefined || valor === '') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "text-[11px] uppercase tracking-wide text-slate-500",
                children: etiqueta
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: `truncate text-sm text-slate-200 ${mono ? 'font-mono' : ''}`,
                children: valor
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
function TicketFicha({ ticket, onCambio, onError }) {
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [t, setT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(ticket);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [eventos, setEventos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adjuntos, setAdjuntos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [urls, setUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [subiendo, setSubiendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cierre, setCierre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        solucion: '',
        material_usado: '',
        firmante_nombre: '',
        firmante_cedula: '',
        firma_b64: null,
        checklist: {}
    });
    const archivoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ubicando, setUbicando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Elegir técnico o cuadrilla al pasar un ticket abierto a asignado.
    const [asignando, setAsignando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [personal, setPersonal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setT(ticket), [
        ticket
    ]);
    /**
   * Un botón de los de abajo. Pasar a "asignado" sin técnico pide a quién: un
   * ticket asignado a nadie no aparece en ninguna agenda y queda olvidado. Y
   * cancelar se confirma, porque lo saca de la cola de todos.
   */ async function transicion(e) {
        if (e === 'asignado' && !t.tecnico_id && !t.cuadrilla_id) {
            if (!personal) {
                const [tec, cua] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tecnicos').select('id, nombre').eq('activo', true).order('nombre'),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('cuadrillas').select('id, nombre').eq('activo', true).order('nombre')
                ]);
                setPersonal({
                    tecnicos: tec.data ?? [],
                    cuadrillas: cua.data ?? []
                });
            }
            setAsignando({
                tecnico_id: '',
                cuadrilla_id: ''
            });
            return;
        }
        if (e === 'cancelado' && !await confirmar(`¿Cancelar el ticket N° ${t.numero ?? ''}? Sale de la agenda del técnico.`)) {
            return;
        }
        await cambiarEstado(e);
    }
    async function confirmarAsignacion(ev) {
        ev.preventDefault();
        const { tecnico_id, cuadrilla_id } = asignando;
        await cambiarEstado('asignado', {
            tecnico_id: tecnico_id || null,
            cuadrilla_id: cuadrilla_id || null
        });
        setAsignando(null);
    }
    const puntos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CHECKLIST"][t.tecnologia] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CHECKLIST"].ftth;
    const estado = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][t.estado] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"].abierto;
    const cerrado = t.estado === 'resuelto' || t.estado === 'cancelado';
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const [ev, ad] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ticket_eventos').select('*').eq('ticket_id', t.id).order('created_at', {
                ascending: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ticket_adjuntos').select('*').eq('ticket_id', t.id).order('created_at')
        ]);
        setEventos(ev.data ?? []);
        setAdjuntos(ad.data ?? []);
        // El bucket es privado: cada foto necesita una URL firmada para poder verse.
        // Duran una hora, que es más de lo que dura abierta esta pantalla.
        const mapa = {};
        for (const a of ad.data ?? []){
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].storage.from('tickets').createSignedUrl(a.ruta, 3600);
            if (data?.signedUrl) mapa[a.id] = data.signedUrl;
        }
        setUrls(mapa);
    }, [
        t.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        recargar();
    }, [
        recargar
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCierre((c)=>({
                ...c,
                solucion: t.solucion ?? '',
                material_usado: t.material_usado ?? '',
                firmante_nombre: t.firmante_nombre ?? t.nombre ?? '',
                firmante_cedula: t.firmante_cedula ?? t.identificacion ?? '',
                firma_b64: t.firma_b64 ?? null,
                checklist: t.checklist ?? {}
            }));
    }, [
        t
    ]);
    const wa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enlaceWhatsApp__as__enlaceWhatsapp$3e$__["enlaceWhatsapp"])(t.telefono_whatsapp || t.telefono, `Hola ${String(t.nombre ?? '').split(' ')[0]}, le escribimos por su reporte N° ${t.codigo}.`);
    async function cambiarEstado(nuevo, extra = {}) {
        setGuardando(true);
        onError?.(null);
        try {
            // `cerrado_por` solo cuando de verdad se está cerrando. Ponerlo en cada
            // cambio de estado hacía figurar como "cerrado por" a quien apenas salió
            // hacia el domicilio.
            const campos = {
                estado: nuevo,
                ...extra,
                ...nuevo === 'resuelto' || nuevo === 'cancelado' ? {
                    cerrado_por: (await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getUser()).data?.user?.id ?? null
                } : {},
                ...nuevo === 'en_ruta' ? {
                    salida_at: new Date().toISOString()
                } : {}
            };
            // Por la cola: "salgo para allá" se toca en la puerta del taller y
            // "llegué" en la vereda del cliente. Los dos son lugares donde la señal
            // falta seguido, y son las marcas de tiempo con las que después se mide
            // cuánto tardó una visita.
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["campoApi"].actualizarTicket(t.id, campos);
            setT((v)=>({
                    ...v,
                    ...campos
                }));
            if (r.encolado) return;
            await recargar();
            await onCambio?.();
        } catch (err) {
            onError?.(err);
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
        const mapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t);
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
        onError?.(null);
        try {
            const pos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ubicacionActual"])();
            const metros = pos && t.latitud && t.longitud ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["distanciaEnMetros"])({
                lat: Number(t.latitud),
                lng: Number(t.longitud)
            }, {
                lat: pos.lat,
                lng: pos.lng
            }) : null;
            if (metros != null && metros > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RADIO_LLEGADA_M"]) {
                const seguir = await confirmar(`Estás a ${metros} m del domicilio del ticket.\n\n` + 'Puede ser que la coordenada del abonado esté mal cargada. ' + '¿Iniciar el trabajo igual? Queda registrado desde dónde marcaste.');
                if (!seguir) return;
            }
            if (!pos) {
                const seguir = await confirmar('No se pudo tomar la ubicación del dispositivo.\n\n' + '¿Iniciar el trabajo igual? El ticket va a quedar sin confirmación de llegada.');
                if (!seguir) return;
            }
            const campos = {
                estado: 'en_proceso',
                llegada_at: new Date().toISOString(),
                llegada_lat: pos?.lat ?? null,
                llegada_lng: pos?.lng ?? null,
                llegada_precision_m: pos?.precision ? Math.round(pos.precision) : null
            };
            // Pasa por la cola: llegar al domicilio es justo donde suele no haber
            // señal, y perder la marca de llegada obliga a rehacerla desde la
            // memoria — que es como se llena de horarios inventados.
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["campoApi"].actualizarTicket(t.id, campos);
            setT((v)=>({
                    ...v,
                    ...campos
                }));
            if (r.encolado) return;
            await recargar();
            await onCambio?.();
        } catch (err) {
            onError?.(err);
        } finally{
            setUbicando(false);
        }
    }
    async function subirFotos(e) {
        const archivos = Array.from(e.target.files ?? []);
        if (!archivos.length) return;
        setSubiendo(true);
        onError?.(null);
        try {
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getUser();
            for (const archivo of archivos){
                // Se achica antes de subir: el técnico está con datos móviles y una foto
                // de 4 MB del celular a veces no llega.
                const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["comprimirImagen"])(archivo);
                const ruta = `${t.id}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
                const { error: errSubida } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].storage.from('tickets').upload(ruta, blob, {
                    contentType: 'image/jpeg'
                });
                if (errSubida) throw errSubida;
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ticket_adjuntos').insert({
                    ticket_id: t.id,
                    tipo: 'foto',
                    ruta,
                    created_by: sesion?.user?.id ?? null
                });
                if (error) throw error;
            }
            await recargar();
        } catch (err) {
            onError?.(err);
        } finally{
            setSubiendo(false);
            if (archivoRef.current) archivoRef.current.value = '';
        }
    }
    async function borrarFoto(a) {
        if (!await confirmar('¿Borrar esta foto?')) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].storage.from('tickets').remove([
            a.ruta
        ]);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('ticket_adjuntos').delete().eq('id', a.id);
        await recargar();
    }
    async function cerrarTicket(e) {
        e.preventDefault();
        if (!cierre.firma_b64) {
            return onError?.(new Error('Falta la firma de conformidad del abonado'));
        }
        setGuardando(true);
        onError?.(null);
        try {
            const { data: sesion } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getUser();
            // Un solo botón, con o sin señal. Sin conexión el cierre queda en la cola
            // y sale solo; la franja de arriba dice que falta enviarlo.
            //
            // Es seguro reintentarlo: el historial del ticket lo escribe un
            // disparador guardado por `IF NEW.estado IS DISTINCT FROM OLD.estado`, así
            // que cerrar dos veces no deja dos renglones de cierre.
            const campos = {
                estado: 'resuelto',
                solucion: cierre.solucion?.trim() || null,
                material_usado: cierre.material_usado?.trim() || null,
                checklist: cierre.checklist,
                firma_b64: cierre.firma_b64,
                firmante_nombre: cierre.firmante_nombre?.trim() || null,
                firmante_cedula: cierre.firmante_cedula?.trim() || null,
                cerrado_at: new Date().toISOString(),
                cerrado_por: sesion?.user?.id ?? null
            };
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["campoApi"].actualizarTicket(t.id, campos);
            // La pantalla refleja el cierre en los dos casos: para el técnico el
            // trabajo terminó. Lo que distingue "enviado" de "falta enviar" es la
            // franja de arriba, que no se puede cerrar mientras haya pendientes.
            setT((v)=>({
                    ...v,
                    ...campos
                }));
            if (r.encolado) return;
            await recargar();
            await onCambio?.();
        } catch (err) {
            onError?.(err);
        } finally{
            setGuardando(false);
        }
    }
    const faltan = puntos.filter((p)=>!cierre.checklist[p.clave]).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$AvisoIncidencia$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                clientId: t.client_id
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-xl border p-4 ${estado.clase}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-xs opacity-80",
                                        children: [
                                            "TICKET N° ",
                                            t.codigo
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "truncate text-xl font-bold",
                                        children: t.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm opacity-90",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["etiquetaIncidencia"])(t.tipo_incidencia)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 flex-col items-end gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-black/20 px-3 py-1 text-xs font-bold uppercase",
                                        children: estado.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rounded-full border px-2 py-0.5 text-[11px] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORIDADES"][t.prioridad]?.clase ?? ''}`,
                                        children: [
                                            "Prioridad ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PRIORIDADES"][t.prioridad]?.label ?? t.prioridad
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] uppercase opacity-75",
                                        children: t.tecnologia === 'ftth' ? 'FTTH · Fibra' : 'Wireless · Radio'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 flex items-center gap-2 text-xs opacity-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            "Abierto ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["haceCuanto"])(t.horas_abierto),
                            t.fecha_visita && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, this),
                                    "Visita ",
                                    fecha(t.fecha_visita),
                                    t.franja && ` · ${t.franja === 'exacta' ? String(t.hora_visita).slice(0, 5) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FRANJAS"][t.franja]}`
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    t.visita_atrasada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 rounded-lg bg-[#FEF2F2] px-3 py-2 text-xs text-rose-200",
                        children: [
                            "La visita estaba para el ",
                            fecha(t.fecha_visita),
                            " y sigue sin resolverse."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 429,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: t.telefono ? `tel:${t.telefono}` : undefined,
                        className: `flex flex-col items-center gap-1 rounded-xl border p-3 text-xs transition ${t.telefono ? 'border-sky-500/40 bg-sky-500/10 text-sky-200 active:bg-sky-500/20' : 'pointer-events-none border-slate-800 text-slate-600'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            "Llamar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: wa ?? undefined,
                        target: "_blank",
                        rel: "noreferrer",
                        className: `flex flex-col items-center gap-1 rounded-xl border p-3 text-xs transition ${wa ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200 active:bg-emerald-500/20' : 'pointer-events-none border-slate-800 text-slate-600'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 459,
                                columnNumber: 11
                            }, this),
                            "WhatsApp"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t) ?? undefined,
                        target: "_blank",
                        rel: "noreferrer",
                        className: `flex flex-col items-center gap-1 rounded-xl border p-3 text-xs transition ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t) ? 'border-violet-500/40 bg-violet-500/10 text-violet-200 active:bg-violet-500/20' : 'pointer-events-none border-slate-800 text-slate-600'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            "Navegar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t, 'waze') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(t, 'waze'),
                target: "_blank",
                rel: "noreferrer",
                className: "block text-center text-[11px] text-slate-500 underline",
                children: "Abrir en Waze"
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 479,
                columnNumber: 9
            }, this),
            t.estado === 'asignado' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variante: "primario",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                onClick: irAlDomicilio,
                cargando: guardando,
                className: "w-full py-4 text-base",
                children: "Ir al domicilio"
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 494,
                columnNumber: 9
            }, this),
            t.estado === 'en_ruta' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variante: "primario",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"],
                onClick: iniciarTrabajo,
                cargando: ubicando || guardando,
                className: "w-full py-4 text-base",
                children: ubicando ? 'Confirmando llegada…' : 'Llegué — iniciar trabajo'
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 506,
                columnNumber: 9
            }, this),
            t.estado === 'en_ruta' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-[11px] text-slate-500",
                children: "Al iniciar se toma tu ubicación para dejar constancia de que llegaste."
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 518,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TRANSICIONES"][t.estado]?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TRANSICIONES"][t.estado].filter((e)=>!(t.estado === 'asignado' && e === 'en_ruta')).filter((e)=>!(t.estado === 'en_ruta' && e === 'en_proceso'))// Resolver va por el formulario de cierre (checklist, qué se hizo,
                // firma): un atajo acá cerraba el ticket sin nada de eso.
                .filter((e)=>!(t.estado === 'en_proceso' && e === 'resuelto')).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variante: "fantasma",
                        icon: e === 'cancelado' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$up$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerUpLeft$3e$__["CornerUpLeft"],
                        onClick: ()=>transicion(e),
                        cargando: guardando,
                        className: "text-xs",
                        children: etiquetaTransicion(t.estado, e)
                    }, e, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 534,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 526,
                columnNumber: 9
            }, this),
            asignando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: confirmarAsignacion,
                className: "space-y-3 rounded-xl border border-slate-700 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-slate-200",
                        children: "¿Quién va?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        hint: "Quién va a hacer el trabajo.",
                        label: "Técnico",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: asignando.tecnico_id,
                            onChange: (ev)=>setAsignando({
                                    tecnico_id: ev.target.value,
                                    cuadrilla_id: ''
                                }),
                            className: "w-full rounded-xl border border-slate-700 bg-white px-3 py-2 text-sm text-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— elige —"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 557,
                                    columnNumber: 15
                                }, this),
                                (personal?.tecnicos ?? []).map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: x.id,
                                        children: x.nombre
                                    }, x.id, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 559,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 552,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 551,
                        columnNumber: 11
                    }, this),
                    (personal?.cuadrillas ?? []).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        hint: "O un equipo completo en lugar de una persona.",
                        label: "O cuadrilla",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: asignando.cuadrilla_id,
                            onChange: (ev)=>setAsignando({
                                    tecnico_id: '',
                                    cuadrilla_id: ev.target.value
                                }),
                            className: "w-full rounded-xl border border-slate-700 bg-white px-3 py-2 text-sm text-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— elige —"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 570,
                                    columnNumber: 17
                                }, this),
                                personal.cuadrillas.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: x.id,
                                        children: x.nombre
                                    }, x.id, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 572,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 565,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 564,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variante: "fantasma",
                                onClick: ()=>setAsignando(null),
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 578,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                variante: "primario",
                                cargando: guardando,
                                disabled: !asignando.tecnico_id && !asignando.cuadrilla_id,
                                children: "Asignar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 577,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 549,
                columnNumber: 9
            }, this),
            (t.salida_at || t.llegada_at) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-card-sm p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "grid grid-cols-2 gap-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Salió"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-slate-200",
                                        children: fechaHora(t.salida_at)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 599,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 597,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Llegó"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-slate-200",
                                        children: t.llegada_at ? fechaHora(t.llegada_at) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400",
                                            children: "en camino"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 604,
                                            columnNumber: 59
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 603,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 601,
                                columnNumber: 13
                            }, this),
                            t.minutos_en_ruta != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "Viaje"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 609,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-slate-200",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["duracion"])(t.minutos_en_ruta)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 610,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 608,
                                columnNumber: 15
                            }, this),
                            t.llegada_at && t.minutos_en_sitio != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-wide text-slate-500",
                                        children: "En el lugar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 615,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-slate-200",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["duracion"])(t.minutos_en_sitio)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 616,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 614,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 596,
                        columnNumber: 11
                    }, this),
                    t.llegada_at && (t.llegada_distancia_m == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] text-slate-500",
                        children: "Sin confirmación de ubicación: el dispositivo no dio el GPS o el ticket no tiene coordenadas cargadas."
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 623,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-2 text-[11px] ${Number(t.llegada_distancia_m) <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RADIO_LLEGADA_M"] ? 'text-emerald-400' : 'text-amber-400'}`,
                        children: [
                            Number(t.llegada_distancia_m) <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RADIO_LLEGADA_M"] ? `Llegada confirmada a ${t.llegada_distancia_m} m del domicilio` : `Inició el trabajo a ${t.llegada_distancia_m} m del domicilio`,
                            t.llegada_precision_m ? ` · GPS ±${t.llegada_precision_m} m` : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 628,
                        columnNumber: 15
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 595,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Lo que reporta el abonado",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "whitespace-pre-wrap text-sm text-slate-200",
                    children: t.descripcion || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500",
                        children: "Sin descripción."
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 647,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 645,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Ubicación y contacto",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Dirección",
                            valor: t.direccion
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 654,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Sector / cantón",
                            valor: [
                                t.sector,
                                t.canton
                            ].filter(Boolean).join(' · ')
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 655,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Referencia",
                            valor: t.referencia
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 656,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Cédula / RUC",
                            valor: t.identificacion,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 657,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Teléfono",
                            valor: t.telefono,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 658,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "WhatsApp",
                            valor: t.telefono_whatsapp,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 659,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Coordenadas",
                            valor: t.latitud && t.longitud ? `${t.latitud}, ${t.longitud}` : null,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 660,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                            etiqueta: "Asignado a",
                            valor: t.tecnico ?? t.cuadrilla
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 653,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: t.tecnologia === 'ftth' ? 'Servicio FTTH' : 'Servicio Wireless',
                icon: t.tecnologia === 'ftth' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: t.tecnologia === 'ftth' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Caja NAP",
                                valor: t.nap
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 677,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Puerto",
                                valor: t.puerto_nap,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 678,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Modelo ONT",
                                valor: t.ont_modelo
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 679,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Serie ONT",
                                valor: t.ont_serie,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 680,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Potencia reportada",
                                valor: t.potencia_dbm != null ? `${t.potencia_dbm} dBm` : null,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 681,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Nodo / torre",
                                valor: t.torre
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 689,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "IP del CPE",
                                valor: t.cpe_ip,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 690,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Frecuencia",
                                valor: t.frecuencia,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 691,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Señal reportada",
                                valor: t.senal_dbm != null ? `${t.senal_dbm} dBm` : null,
                                mono: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 692,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Antena",
                                valor: t.antena_modelo
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 697,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 674,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Fotos del trabajo",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
                subtitle: "Lectura de potencia, instalación, antes y después",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2 sm:grid-cols-4",
                        children: [
                            adjuntos.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative aspect-square overflow-hidden rounded-lg border border-slate-700",
                                    children: [
                                        urls[a.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: urls[a.id],
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: urls[a.id],
                                                alt: "",
                                                className: "h-full w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                                lineNumber: 714,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 713,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full w-full animate-pulse bg-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 717,
                                            columnNumber: 17
                                        }, this),
                                        !cerrado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>borrarFoto(a),
                                            className: "absolute right-1 top-1 rounded-md bg-black/60 p-1 text-rose-300 opacity-0 transition group-hover:opacity-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                                lineNumber: 725,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 720,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, a.id, true, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, this)),
                            !cerrado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>archivoRef.current?.click(),
                                disabled: subiendo,
                                className: "flex aspect-square flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-slate-600 text-xs text-slate-400 transition hover:border-sky-500/60 hover:text-sky-300 disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 738,
                                        columnNumber: 15
                                    }, this),
                                    subiendo ? 'Subiendo…' : 'Agregar'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 732,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 709,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: archivoRef,
                        type: "file",
                        accept: "image/*",
                        capture: "environment",
                        multiple: true,
                        onChange: subirFotos,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 744,
                        columnNumber: 9
                    }, this),
                    adjuntos.length === 0 && cerrado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "Se cerró sin fotos."
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 755,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 704,
                columnNumber: 7
            }, this),
            t.estado === 'en_proceso' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Cerrar el ticket",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: cerrarTicket,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-wide text-slate-500",
                                    children: "Verificación antes de irse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 764,
                                    columnNumber: 15
                                }, this),
                                puntos.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 p-3 text-sm text-slate-200 transition active:bg-slate-800/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                lineNumber: 772,
                                                columnNumber: 19
                                            }, this),
                                            p.label
                                        ]
                                    }, p.clave, true, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 768,
                                        columnNumber: 17
                                    }, this)),
                                faltan > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-amber-300",
                                    children: [
                                        "Quedan ",
                                        faltan,
                                        " sin marcar. Se puede cerrar igual, pero queda registrado así."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 788,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 763,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Qué se hizo",
                            hint: "Lo que el próximo técnico necesita saber",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                placeholder: "Ej.: Se limpiaron conectores y se reinició la ONT",
                                rows: 3,
                                value: cierre.solucion,
                                onChange: (e)=>setCierre((c)=>({
                                            ...c,
                                            solucion: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 795,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 794,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Material usado",
                            hint: "Metros de fibra, conectores, rosetas",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                placeholder: "Ej.: 1 conector SC/APC",
                                rows: 2,
                                value: cierre.material_usado,
                                onChange: (e)=>setCierre((c)=>({
                                            ...c,
                                            material_usado: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 803,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 802,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Quién firma",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: Juan Pérez",
                                        value: cierre.firmante_nombre,
                                        onChange: (e)=>setCierre((c)=>({
                                                    ...c,
                                                    firmante_nombre: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 812,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 811,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Cédula de quien firma",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Ej.: 0912345678",
                                        value: cierre.firmante_cedula,
                                        onChange: (e)=>setCierre((c)=>({
                                                    ...c,
                                                    firmante_cedula: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 818,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 817,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 810,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-xs uppercase tracking-wide text-slate-500",
                                    children: "Firma de conformidad"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 826,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$FirmaDigital$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    valor: cierre.firma_b64,
                                    onCambio: (v)=>setCierre((c)=>({
                                                ...c,
                                                firma_b64: v
                                            }))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 829,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 825,
                            columnNumber: 13
                        }, this),
                        !cierre.firma_b64 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "Sin la firma del abonado el ticket no se cierra: es lo que respalda que el trabajo se hizo y que quedó conforme."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 836,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                            cargando: guardando,
                            disabled: !cierre.firma_b64,
                            className: "w-full",
                            children: "Cerrar como resuelto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 842,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 762,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 761,
                columnNumber: 9
            }, this),
            t.estado === 'resuelto' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Cierre",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Resuelto",
                                valor: fechaHora(t.cerrado_at)
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 860,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                etiqueta: "Firmó",
                                valor: [
                                    t.firmante_nombre,
                                    t.firmante_cedula
                                ].filter(Boolean).join(' · ')
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 861,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 859,
                        columnNumber: 11
                    }, this),
                    t.solucion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 whitespace-pre-wrap rounded-lg bg-[#F6F8FB] p-3 text-sm text-slate-200",
                        children: t.solucion
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 865,
                        columnNumber: 13
                    }, this),
                    t.material_usado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-slate-400",
                        children: [
                            "Material: ",
                            t.material_usado
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 871,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 space-y-1",
                        children: puntos.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2 text-xs",
                                children: [
                                    t.checklist?.[p.clave] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 13,
                                        className: "text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 878,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 13,
                                        className: "text-slate-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 880,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: t.checklist?.[p.clave] ? 'text-slate-300' : 'text-slate-600',
                                        children: p.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                        lineNumber: 882,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.clave, true, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 876,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 874,
                        columnNumber: 11
                    }, this),
                    t.firma_b64 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-1 text-[11px] uppercase tracking-wide text-slate-500",
                                children: "Conformidad del abonado"
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 891,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: t.firma_b64,
                                alt: "Firma del abonado",
                                className: "w-full max-w-xs rounded-lg border border-slate-700 bg-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                lineNumber: 894,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                        lineNumber: 890,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 858,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Historial",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "space-y-2",
                    children: eventos.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `mt-1.5 h-2 w-2 shrink-0 rounded-full ${e.estado_nuevo === 'resuelto' ? 'bg-emerald-400' : e.estado_nuevo === 'cancelado' ? 'bg-rose-400' : 'bg-sky-400'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 909,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-slate-200",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][e.estado_nuevo]?.label ?? e.estado_nuevo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 919,
                                            columnNumber: 17
                                        }, this),
                                        e.estado_anterior && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-500",
                                            children: [
                                                " · venía de ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][e.estado_anterior]?.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 921,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[11px] text-slate-500",
                                            children: [
                                                fechaHora(e.created_at),
                                                e.nota ? ` — ${e.nota}` : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                            lineNumber: 923,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                                    lineNumber: 918,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, e.id, true, {
                            fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                            lineNumber: 908,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                    lineNumber: 906,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/TicketFicha.jsx",
                lineNumber: 905,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/soporte/TicketFicha.jsx",
        lineNumber: 387,
        columnNumber: 5
    }, this);
}
const ORDEN_ESTADOS = [
    'abierto',
    'asignado',
    'en_ruta',
    'en_proceso',
    'resuelto'
];
/** "Volver a" solo si de verdad es para atrás; si avanza, "Pasar a". */ function etiquetaTransicion(actual, destino) {
    if (destino === 'cancelado') return 'Cancelar ticket';
    if (actual === 'cancelado') return 'Reabrir';
    if (destino === 'asignado' && actual === 'abierto') return 'Asignar técnico';
    const atras = ORDEN_ESTADOS.indexOf(destino) < ORDEN_ESTADOS.indexOf(actual);
    return `${atras ? 'Volver a' : 'Pasar a'} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ESTADOS"][destino].label.toLowerCase()}`;
}
}),
"[project]/src/lib/inventario.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/personal.js [app-ssr] (ecmascript)");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_articulos').select('*').order('nombre'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('almacenes').select('*').eq('activo', true).order('tipo').order('nombre')
        ]);
        if (articulos.error) throw articulos.error;
        return {
            articulos: articulos.data ?? [],
            almacenes: almacenes.data ?? []
        };
    },
    async existencias (almacenId) {
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_existencias').select('*').order('articulo');
        if (almacenId) q = q.eq('almacen_id', almacenId);
        const { data, error } = await q;
        if (error) throw error;
        // Las filas en cero son ruido: un artículo que alguna vez pasó por un
        // almacén deja su renglón para siempre, y con veinte almacenes la lista se
        // llena de ceros que tapan lo que sí hay.
        return (data ?? []).filter((e)=>Number(e.cantidad) !== 0);
    },
    /**
   * Lo que está en el mínimo o por debajo, almacén por almacén.
   *
   * Se pregunta por almacén y no por artículo porque es lo que hay que hacer
   * con la respuesta: el pedido de material es de una bodega o de la mochila de
   * un técnico. Un total sumado de todos lados no le dice a nadie qué cargar en
   * la camioneta.
   */ async stockBajo () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_stock_bajo').select('*')// Lo agotado primero: es la diferencia entre "hay que reponer" y "hoy no
        // se puede instalar".
        .order('agotado', {
            ascending: false
        }).order('falta', {
            ascending: false
        });
        if (error) throw error;
        return data ?? [];
    },
    /**
   * El mínimo de un artículo en un almacén concreto.
   *
   * Existe además del mínimo del artículo porque la bodega y la mochila del
   * técnico no se miden con la misma vara: la bodega avisa a las 20 ONTs, el
   * técnico a las 2. Con un solo número, o el técnico vive en alerta permanente
   * o el aviso de la bodega llega tarde.
   */ async guardarMinimo ({ almacen_id, articulo_id, minimo, reponer }) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').upsert({
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
    /** Dejar de controlar ese artículo en ese almacén. */ async borrarMinimo ({ almacen_id, articulo_id }) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').delete().eq('almacen_id', almacen_id).eq('articulo_id', articulo_id);
        if (error) throw error;
    },
    /** Los mínimos ya cargados, para poder editarlos. */ async minimos () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').select('*');
        if (error) throw error;
        return data ?? [];
    },
    async guardarArticulo (articulo) {
        const { id, ...datos } = articulo;
        const fila = {
            ...datos,
            codigo: datos.codigo?.trim() || null,
            tipo_ont_id: datos.tipo_ont_id || null,
            stock_minimo: datos.stock_minimo === '' ? null : Number(datos.stock_minimo)
        };
        const { data, error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').update(fila).eq('id', id).select().single() : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').insert(fila).select().single();
        if (error) throw error;
        return data;
    },
    async equipos ({ almacenId, articuloId, busqueda } = {}) {
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_equipos').select('*').order('creado_en', {
            ascending: false
        }).limit(500);
        if (almacenId) q = q.eq('almacen_id', almacenId);
        if (articuloId) q = q.eq('articulo_id', articuloId);
        if (busqueda) q = q.or(`serie.ilike.%${busqueda}%,mac.ilike.%${busqueda}%`);
        const { data, error } = await q;
        if (error) throw error;
        return data ?? [];
    },
    /**
   * Registra un movimiento. Es la única forma de mover stock.
   *
   * Para artículos por serie inserta un movimiento por equipo, no uno con
   * cantidad 5: cada aparato tiene su propia historia de dónde estuvo, y un
   * renglón agrupado la pierde justo para los que más importa rastrear.
   */ async mover ({ tipo, articuloId, cantidad, equipoIds = [], origen, destino, motivo, instalacionId, ticketId, costoUnit }, perfil) {
        const comun = {
            tipo,
            articulo_id: articuloId,
            almacen_origen_id: origen || null,
            almacen_destino_id: destino || null,
            instalacion_id: instalacionId || null,
            ticket_id: ticketId || null,
            costo_unit: costoUnit == null || costoUnit === '' ? null : Number(costoUnit),
            motivo: motivo || null,
            usuario_id: perfil?.id ?? null,
            usuario_nombre: perfil ? `${perfil.nombre} ${perfil.apellido ?? ''}`.trim() : null
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(filas);
        if (error) throw error;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalApi"].registrar(`inventario.${tipo}`, `${TIPOS_MOVIMIENTO[tipo]?.label ?? tipo} de ${filas.length > 1 ? `${filas.length} equipos` : `${cantidad ?? 1}`}` + (motivo ? ` — ${motivo}` : ''), {
            entidad: 'articulo',
            entidad_id: articuloId
        });
    },
    /** Da de alta equipos con serie. No mueve stock por sí solo: eso es el ingreso. */ async altaEquipos ({ articuloId, almacenId, series, mac }, perfil) {
        const limpias = [
            ...new Set(series.map((s)=>s.trim().toUpperCase()).filter(Boolean))
        ];
        if (!limpias.length) throw new Error('No hay ninguna serie para dar de alta');
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('equipos').insert(limpias.map((serie, i)=>({
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
    async movimientos ({ articuloId, almacenId, limite = 300 } = {}) {
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_movimientos').select('*').order('creado_en', {
            ascending: false
        }).limit(limite);
        if (articuloId) q = q.eq('articulo_id', articuloId);
        if (almacenId) {
            q = q.or(`almacen_origen_id.eq.${almacenId},almacen_destino_id.eq.${almacenId}`);
        }
        const { data, error } = await q;
        if (error) throw error;
        return data ?? [];
    },
    // ── Proveedores y compras ──
    async proveedores () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').select('*').order('nombre');
        if (error) throw error;
        return data ?? [];
    },
    async guardarProveedor (p) {
        const { id, ...datos } = p;
        const { error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').update(datos).eq('id', id) : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').insert(datos);
        if (error) throw error;
    },
    async compras () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').select('*, proveedores(nombre), compra_items(*, articulos(nombre, unidad, por_serie))').order('fecha', {
            ascending: false
        }).limit(200);
        if (error) throw error;
        return data ?? [];
    },
    async guardarCompra ({ compra, items }, perfil) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').insert({
            ...compra,
            creado_por: perfil?.id ?? null
        }).select().single();
        if (error) throw error;
        if (items.length) {
            const { error: e2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compra_items').insert(items.map((i)=>({
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
        for (const item of compra.compra_items ?? []){
            const series = Array.isArray(item.series) ? item.series : [];
            if (item.articulos?.por_serie && series.length) {
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
                    motivo: `Compra ${String(compra.numero).padStart(5, '0')}`
                }, perfil);
            }
            // El último costo sirve para valorizar el stock sin llevar un promedio
            // ponderado, que en un ISP chico nadie mantiene.
            if (Number(item.costo_unit) > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').update({
                    costo_ultimo: item.costo_unit
                }).eq('id', item.articulo_id);
            }
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').update({
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
   */ async consumosDeTrabajo ({ instalacionId, ticketId }) {
        if (!instalacionId && !ticketId) return [];
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_movimientos').select('*').eq('tipo', 'consumo').order('creado_en');
        q = instalacionId ? q.eq('instalacion_id', instalacionId) : q.eq('ticket_id', ticketId);
        const { data, error } = await q;
        if (error) throw error;
        return data ?? [];
    },
    /**
   * Descuenta el material usado en una instalación.
   *
   * Un movimiento por línea, todos en un solo insert: si la señal se corta a la
   * mitad no puede quedar descontado el cable y no la ONT. Que la base lo
   * acepte o lo rechace entero es la única forma de que el técnico sepa qué
   * pasó sin tener que revisar el stock desde la vereda.
   */ async registrarConsumo ({ instalacionId, ticketId, almacenId, lineas }, perfil) {
        const comun = {
            tipo: 'consumo',
            almacen_origen_id: almacenId,
            instalacion_id: instalacionId ?? null,
            ticket_id: ticketId ?? null,
            // El motivo dice de qué trabajo salió. Es lo que después separa "cuánto
            // material se fue en altas" de "cuánto se fue en garantías", que son dos
            // números muy distintos para quien mira los costos.
            motivo: instalacionId ? 'Usado en la instalación' : 'Usado en la reparación',
            usuario_id: perfil?.id ?? null,
            usuario_nombre: perfil ? `${perfil.nombre} ${perfil.apellido ?? ''}`.trim() : null
        };
        const filas = lineas.flatMap((l)=>l.equipoIds?.length ? l.equipoIds.map((equipo_id)=>({
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
            ]);
        if (!filas.length) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(filas);
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('equipos').update({
            cliente_id: clienteId
        }).eq('instalacion_id', instalacionId);
        // No se propaga: el alta ya se completó y devolver un error acá haría que el
        // técnico crea que falló, y la repita.
        if (error) console.warn('[inventario] no se pudo vincular el equipo al cliente:', error.message);
    },
    /** El almacén del técnico que tiene la sesión abierta. */ async miAlmacen (tecnicoId) {
        if (!tecnicoId) return null;
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('almacenes').select('*').eq('tecnico_id', tecnicoId).maybeSingle();
        return data ?? null;
    }
};
}),
"[project]/src/lib/reemplazos.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESTINOS",
    ()=>DESTINOS,
    "MOTIVOS",
    ()=>MOTIVOS,
    "reemplazosApi",
    ()=>reemplazosApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-ssr] (ecmascript)");
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
   */ async registrar ({ clienteId, serieNueva, motivo, destino, detalle, ticketId, instalacionId }) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].rpc('reemplazar_equipo_cliente', {
            p_cliente: clienteId,
            p_serie_nueva: serieNueva,
            p_motivo: motivo,
            p_destino: destino ?? 'averiado',
            p_detalle: detalle || null,
            p_ticket: ticketId ?? null,
            p_instalacion: instalacionId ?? null
        });
        if (error) throw error;
        return data;
    },
    /** Paso 2: la OLT. Solo va el id — puerto, perfil y VLAN los copia el servidor. */ aprovisionar: (reemplazoId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].reemplazos.aprovisionar(reemplazoId),
    /** Lo que quedó a medias. Mientras esté acá, el abonado no tiene servicio. */ async pendientes () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_reemplazos_pendientes').select('*').order('creado_en');
        if (error) throw error;
        return data ?? [];
    },
    /** El historial de un abonado: qué equipo tuvo antes y por qué se cambió. */ async delCliente (clienteId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('reemplazos_equipo').select('*').eq('cliente_id', clienteId).order('creado_en', {
            ascending: false
        });
        if (error) throw error;
        return data ?? [];
    }
};
}),
"[project]/src/components/soporte/CambioDeEquipo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CambioDeEquipo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$replace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/replace.js [app-ssr] (ecmascript) <export default as Replace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/inventario.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reemplazos.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function CambioDeEquipo({ ticket, instalacionId, onCambio, onError }) {
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [almacen, setAlmacen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serie, setSerie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [motivo, setMotivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('quemado');
    const [destino, setDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('averiado');
    const [detalle, setDetalle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [paso, setPaso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // 'inventario' | 'olt'
    ;
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reemplazoId, setReemplazoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fallaOlt, setFallaOlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const enLinea = typeof navigator === 'undefined' || navigator.onLine;
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!perfil?.tecnico_id) return;
        setCargando(true);
        try {
            const mio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventarioApi"].miAlmacen(perfil.tecnico_id);
            setAlmacen(mio);
            if (mio) {
                const eq = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventarioApi"].equipos({
                    almacenId: mio.id
                });
                // Solo ONTs, y solo las que de verdad se pueden instalar. Una averiada
                // en el listado es un cambio de equipo que termina en otro reclamo.
                setEquipos(eq.filter((q)=>q.categoria === 'ont' && q.estado === 'en_stock'));
            }
        } catch (err) {
            onError?.(err);
        } finally{
            setCargando(false);
        }
    }, [
        perfil,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (abierto) cargar();
    }, [
        abierto,
        cargar
    ]);
    const elegido = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>equipos.find((q)=>String(q.serie) === serie) ?? null, [
        equipos,
        serie
    ]);
    const clienteId = ticket?.client_id ?? null;
    /** Paso 2, aislado: se reintenta solo, sin volver a mover inventario. */ const aprovisionar = async (id)=>{
        setPaso('olt');
        setFallaOlt(null);
        try {
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reemplazosApi"].aprovisionar(id);
            setResultado(r);
            onCambio?.();
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
            onError?.(new Error('Este ticket no tiene abonado asociado, así que no se sabe a quién se le cambia el equipo.'));
            return;
        }
        setPaso('inventario');
        try {
            const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reemplazosApi"].registrar({
                clienteId,
                serieNueva: serie,
                motivo,
                destino,
                detalle,
                ticketId: ticket.id,
                instalacionId: instalacionId ?? null
            });
            setReemplazoId(id);
            setPaso(null);
            await aprovisionar(id);
        } catch (err) {
            setPaso(null);
            onError?.(err);
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
    if (!perfil?.tecnico_id) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variante: "secundario",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$replace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"],
                onClick: ()=>setAbierto(true),
                children: "Cambiar la ONT"
            }, void 0, false, {
                fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: abierto,
                titulo: "Cambiar el equipo del abonado",
                onCerrar: cerrar,
                children: resultado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 18,
                                    className: "mt-0.5 shrink-0 text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-emerald-200",
                                            children: resultado.ya_estaba ? 'Ese cambio ya estaba aprovisionado.' : 'Equipo cambiado y ONT autorizada.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-slate-300",
                                            children: [
                                                "Quedó en el puerto ",
                                                resultado.puerto,
                                                " de la placa ",
                                                resultado.slot ?? 0,
                                                ", con el mismo perfil y la misma VLAN que tenía la anterior."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        resultado.ip_gestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        resultado.aviso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: resultado.aviso
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 165,
                            columnNumber: 33
                        }, this),
                        resultado.ficha_manual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "t-card-sm p-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-slate-200",
                                    children: "Configurar a mano"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[13px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "VLAN"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "text-slate-200",
                                            children: resultado.ficha_manual.vlan
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "Usuario PPPoE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono text-slate-200",
                                            children: resultado.ficha_manual.pppoe?.usuario ?? '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "Clave PPPoE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono text-slate-200",
                                            children: resultado.ficha_manual.pppoe?.clave ?? '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "SSID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono text-slate-200",
                                            children: resultado.ficha_manual.wifi?.ssid ?? '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-slate-500",
                                            children: "Clave WiFi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono text-slate-200",
                                            children: resultado.ficha_manual.wifi?.clave ?? '—'
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                }, this) : fallaOlt ? /* Inventario sí, OLT no ---------------------------------------- */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2.5 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 18,
                                    className: "mt-0.5 shrink-0 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-amber-200",
                                            children: fallaOlt.sin_respuesta || fallaOlt.status === 503 ? 'El cambio quedó registrado, pero la OLT no contestó.' : 'El cambio quedó registrado, pero la OLT todavía no está.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-slate-300",
                                            children: fallaOlt.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        fallaOlt.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-slate-400",
                                            children: fallaOlt.hint
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                            lineNumber: 203,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-slate-400",
                                            children: [
                                                "El equipo ya figura instalado y descontado de tu almacén:",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "no vuelvas a cargar el cambio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                ", se descontaría una segunda ONT. Reintenta acá."
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                                    cargando: paso === 'olt',
                                    onClick: ()=>aprovisionar(reemplazoId),
                                    className: "flex-1",
                                    children: "Reintentar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                }, this) : /* El formulario ------------------------------------------------ */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        !enLinea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "Esto necesita internet: hay que autorizar la ONT nueva en la OLT y no se puede dejar para después — el abonado queda sin servicio hasta que se haga."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 235,
                            columnNumber: 15
                        }, this),
                        !clienteId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "Este ticket no está asociado a ningún abonado, así que no se sabe a quién se le cambia el equipo."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, this),
                        cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500",
                            children: "Buscando ONTs en tu almacén…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this) : !almacen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: "No tienes un almacén asignado. Pide que te vinculen uno para poder descontar equipos."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 251,
                            columnNumber: 15
                        }, this) : !equipos.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                "No hay ONTs en stock en tu almacén (",
                                almacen.nombre,
                                "). Pide la transferencia antes de instalar."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 256,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            label: "ONT nueva",
                            hint: `De tu almacén: ${almacen.nombre}. Si el equipo que tienes en la mano no está acá, todavía no te lo transfirieron.`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: serie,
                                onChange: (e)=>setSerie(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Elige la serie…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                        lineNumber: 266,
                                        columnNumber: 19
                                    }, this),
                                    equipos.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            hint: "Para el control del equipo retirado.",
                            label: "Qué le pasó a la anterior",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: motivo,
                                onChange: (e)=>setMotivo(e.target.value),
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOTIVOS"]).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: k,
                                        children: v
                                    }, k, false, {
                                        fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                        lineNumber: 279,
                                        columnNumber: 19
                                    }, this))
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Qué haces con la anterior",
                            hint: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DESTINOS"][destino]?.ayuda,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: destino,
                                onChange: (e)=>setDestino(e.target.value),
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reemplazos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DESTINOS"]).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: k,
                                        children: v.label
                                    }, k, false, {
                                        fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                                        lineNumber: 289,
                                        columnNumber: 19
                                    }, this))
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Detalle",
                            hint: "Opcional. Lo que un compañero necesitaría saber si vuelve a este domicilio.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "t-card-sm p-2.5 text-[12px] text-slate-400",
                            children: "La ONT nueva se autoriza en el mismo puerto y con el mismo perfil que tenía la anterior. No hay nada de red que elegir acá."
                        }, void 0, false, {
                            fileName: "[project]/src/components/soporte/CambioDeEquipo.jsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$replace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"],
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                        elegido && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/inventario/MaterialUsado.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MaterialUsado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/inventario.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function MaterialUsado({ instalacionId, ticketId, serieSugerida, onError, onRegistrado, compacto = false }) {
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [almacen, setAlmacen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [existencias, setExistencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [yaConsumido, setYaConsumido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lineas, setLineas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setCargando(true);
        try {
            // Lo ya descontado por este trabajo. Sin esto, un técnico que recarga
            // porque se le cortó la señal vuelve a cargar todo y descuenta el doble.
            // En el celular, en la calle, eso no es hipotético.
            setYaConsumido(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventarioApi"].consumosDeTrabajo({
                instalacionId,
                ticketId
            }));
            const mio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventarioApi"].miAlmacen(perfil?.tecnico_id);
            setAlmacen(mio);
            if (mio) {
                const [ex, eq] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventarioApi"].existencias(mio.id),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventarioApi"].equipos({
                        almacenId: mio.id
                    })
                ]);
                setExistencias(ex);
                setEquipos(eq.filter((q)=>[
                        'en_stock',
                        'asignado'
                    ].includes(q.estado)));
            }
        } catch (err) {
            onError?.(err);
        } finally{
            setCargando(false);
        }
    }, [
        instalacionId,
        ticketId,
        perfil,
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        recargar();
    }, [
        recargar
    ]);
    /**
   * Si el equipo leído en el trabajo está en su almacén, se propone solo.
   *
   * Es el olvido más caro: la ONT queda descontada del stock del técnico para
   * siempre y nadie sabe en qué casa terminó.
   */ const sugerido = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!serieSugerida) return null;
        const sn = String(serieSugerida).trim().toUpperCase();
        return equipos.find((q)=>String(q.serie).toUpperCase() === sn) ?? null;
    }, [
        serieSugerida,
        equipos
    ]);
    const yaEnLista = (id)=>lineas.some((l)=>l.equipoIds?.includes(id));
    const yaDescontado = (id)=>yaConsumido.some((c)=>c.equipo_id === id);
    const agregarEquipo = (q)=>setLineas((ls)=>[
                ...ls,
                {
                    clave: `eq-${q.id}`,
                    articuloId: q.articulo_id,
                    etiqueta: `${q.articulo} · ${q.serie}`,
                    equipoIds: [
                        q.id
                    ]
                }
            ]);
    const agregarMaterial = (e)=>setLineas((ls)=>[
                ...ls,
                {
                    clave: `mat-${e.articulo_id}`,
                    articuloId: e.articulo_id,
                    etiqueta: e.articulo,
                    unidad: e.unidad,
                    disponible: Number(e.cantidad),
                    cantidad: 1
                }
            ]);
    const registrar = async ()=>{
        setGuardando(true);
        onError?.(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventarioApi"].registrarConsumo({
                instalacionId,
                ticketId,
                almacenId: almacen.id,
                lineas
            }, perfil);
            setLineas([]);
            await recargar();
            await onRegistrado?.();
        } catch (err) {
            onError?.(err);
        } finally{
            setGuardando(false);
        }
    };
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cargando"], {
        texto: "Cargando tu almacén…"
    }, void 0, false, {
        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
        lineNumber: 132,
        columnNumber: 24
    }, this);
    if (!almacen) {
        // En el ticket esto sería ruido: la mayoría de quienes lo abren no son
        // técnicos, y no tiene sentido explicarles cómo vincularse a uno.
        if (compacto) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
            tipo: "alerta",
            children: [
                "Tu usuario no tiene un almacén asignado, así que el material no se puede descontar solo. Puedes seguir; el consumo lo va a tener que cargar bodega a mano. Para que se descuente solo, pídele a un administrador que te vincule a un técnico en",
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "Ajustes → Gestión de personal"
                }, void 0, false, {
                    fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                "."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    }
    const disponiblesMaterial = existencias.filter((e)=>!lineas.some((l)=>l.articuloId === e.articulo_id && !l.equipoIds));
    const disponiblesEquipo = equipos.filter((q)=>!yaEnLista(q.id) && !yaDescontado(q.id));
    const excedido = lineas.some((l)=>!l.equipoIds && Number(l.cantidad) > (l.disponible ?? 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            yaConsumido.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center gap-2 text-[13px] font-medium text-emerald-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            " Ya descontado de tu almacén"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: yaConsumido.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[13px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-300",
                                        children: [
                                            c.articulo,
                                            c.serie ? ` · ${c.serie}` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tabular-nums text-slate-400",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numero"])(c.cantidad),
                                            " ",
                                            c.unidad
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] text-slate-500",
                        children: "Esto ya salió de tu stock. Si te equivocaste, no lo cargues de nuevo: avísale a bodega para que haga el ajuste."
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            sugerido && !yaEnLista(sugerido.id) && !yaDescontado(sugerido.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                children: [
                    "El equipo que leíste (",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: sugerido.serie
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 185,
                        columnNumber: 33
                    }, this),
                    ") está en tu almacén.",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "font-medium text-sky-300 underline",
                        onClick: ()=>agregarEquipo(sugerido),
                        children: "Agregarlo al consumo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    !compacto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-2 text-sm font-medium text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            " Material usado"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    lineas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "rounded-lg border border-dashed border-slate-800 py-5 text-center text-[13px] text-slate-500",
                        children: yaConsumido.length ? 'Agrega más si usaste otra cosa.' : 'Si no usaste material, déjalo vacío.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: lineas.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 t-card-sm p-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "truncate text-[13px] text-slate-100",
                                                children: l.etiqueta
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            l.disponible != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-slate-500",
                                                children: [
                                                    "tienes ",
                                                    l.disponible,
                                                    " ",
                                                    l.unidad
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 219,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this),
                                    l.equipoIds ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: "azul",
                                        children: "1 equipo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 226,
                                        columnNumber: 19
                                    }, this) : // Botones grandes y no solo un campo: esto se usa en la calle,
                                    // con guantes, y el teclado numérico del celular tapa media
                                    // pantalla.
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variante: "fantasma",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"],
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
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variante: "fantasma",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
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
                                                lineNumber: 251,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 text-[12px] text-slate-500",
                                                children: l.unidad
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                                lineNumber: 260,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 231,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variante: "fantasma",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                        onClick: ()=>setLineas(lineas.filter((_, x)=>x !== i))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l.clave, true, {
                                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        hint: "Equipos que se controlan uno por uno (ONT, router).",
                        label: "Agregar equipo con serie",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                            value: "",
                            onChange: (e)=>{
                                const q = equipos.find((x)=>x.id === e.target.value);
                                if (q) agregarEquipo(q);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: disponiblesEquipo.length ? '— elige el equipo —' : 'No te queda ninguno'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this),
                                disponiblesEquipo.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: q.id,
                                        children: [
                                            q.articulo,
                                            " · ",
                                            q.serie
                                        ]
                                    }, q.id, true, {
                                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        hint: "Material que se descuenta por cantidad (cable, conectores).",
                        label: "Agregar material",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                            value: "",
                            onChange: (e)=>{
                                const ex = existencias.find((x)=>x.articulo_id === e.target.value);
                                if (ex) agregarMaterial(ex);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: disponiblesMaterial.length ? '— elige el material —' : 'No te queda material'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                disponiblesMaterial.map((ex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            excedido && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: "Estás cargando más cantidad de la que tienes asignada. Corrige el número, o pídele a bodega que te transfiera lo que falta."
            }, void 0, false, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 318,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variante: "primario",
                className: "w-full",
                cargando: guardando,
                disabled: guardando || lineas.length === 0 || excedido || lineas.some((l)=>!l.equipoIds && !(Number(l.cantidad) > 0)),
                onClick: registrar,
                children: "Descontar de mi almacén"
            }, void 0, false, {
                fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/inventario/MaterialUsado.jsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/SinPermiso.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SinPermiso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permisos.js [app-ssr] (ecmascript)");
;
;
;
;
;
function SinPermiso({ que = 'esta pantalla' }) {
    const { rol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-lg py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mb-4 grid h-14 w-14 place-items-center t-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-400",
                children: [
                    "Tu usuario entra como ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-200",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nombreRol"])(rol) || 'sin rol'
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
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
}),
"[project]/src/components/layout/ConPermiso.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConPermiso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SinPermiso.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
;
;
;
;
function ConPermiso({ permiso, children, envezDe, que }) {
    const { puede, perfil, cargandoPerfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
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
        return envezDe !== undefined ? envezDe : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
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
    if (habilitado) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    return envezDe !== undefined ? envezDe : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        que: que
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ConPermiso.jsx",
        lineNumber: 45,
        columnNumber: 44
    }, this);
}
}),
"[project]/src/crm-pages/TicketPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$TicketFicha$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/soporte/TicketFicha.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$CambioDeEquipo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/soporte/CambioDeEquipo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventario$2f$MaterialUsado$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventario/MaterialUsado.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ConPermiso.jsx [app-ssr] (ecmascript)");
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
function TicketPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
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
    const [ticket, setTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_tickets').select('*').eq('id', id).maybeSingle();
        if (err) setError(err);
        setTicket(data ?? null);
        setCargando(false);
    }, [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        cargar();
    }, [
        cargar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        to: enCampo ? "/campo/soporte" : "/soporte",
                        className: "inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            ticket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abrirPdf"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].documentos.ticket(ticket.id)).catch(setError),
                                className: "inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
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
                            ticket?.client_id && !enCampo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                to: `/clientes/${ticket.client_id}`,
                                className: "inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300",
                                children: [
                                    "Ficha del abonado ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "p-4 text-sm text-slate-500",
                children: "Cargando el ticket…"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                lineNumber: 96,
                columnNumber: 9
            }, this) : !ticket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "p-4 text-sm text-slate-500",
                children: "No existe ese ticket."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/TicketPage.jsx",
                lineNumber: 98,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$TicketFicha$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ticket: ticket,
                        onCambio: cargar,
                        onError: setError
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/TicketPage.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        permiso: "inventario.almacen_propio",
                        envezDe: null,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$soporte$2f$CambioDeEquipo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        permiso: "inventario.almacen_propio",
                        envezDe: null,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            title: "Material usado en esta reparación",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
                            subtitle: "Sale de tu almacén. Descontarlo acá es lo que evita que a fin de mes el stock no cuadre.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventario$2f$MaterialUsado$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/src/lib/useMarca.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMarca",
    ()=>useMarca
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-ssr] (ecmascript)");
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
const BASE = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1/red") || `${DJANGO}/red`).replace(/\/$/, '');
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
    pedido ??= fetch(`${BASE}/api/general`).then((r)=>r.ok ? r.json() : POR_DEFECTO).catch(()=>POR_DEFECTO).then((m)=>{
        cache = m;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configurarMoneda"])(m.moneda_simbolo);
        // La pestaña del navegador: es cómo se distingue esta instalación de las
        // otras diez que alguien puede tener abiertas.
        document.title = m.lema ? `${m.nombre_sistema} — ${m.lema}` : m.nombre_sistema;
        return m;
    });
    return pedido;
}
function useMarca() {
    const [marca, setMarca] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cache ?? POR_DEFECTO);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let vivo = true;
        traer().then((m)=>vivo && setMarca(m));
        return ()=>{
            vivo = false;
        };
    }, []);
    return marca;
}
}),
"[project]/src/lib/rutasPermisos.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
].sort((a, b)=>b[0].length - a[0].length);
const coincide = (ruta, prefijo)=>prefijo === '/' ? ruta === '/' : ruta === prefijo || ruta.startsWith(`${prefijo}/`);
function permisoDeRuta(ruta) {
    const entrada = ORDENADAS.find(([prefijo])=>coincide(ruta, prefijo));
    return entrada ? entrada[1] : null;
}
function puedeEntrar(puede, ruta) {
    const permiso = permisoDeRuta(ruta);
    if (!permiso) return true;
    return Array.isArray(permiso) ? permiso.some((p)=>puede(p)) : puede(permiso);
}
}),
"[project]/src/components/layout/Sidebar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useMarca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useMarca.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rutasPermisos.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-ssr] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/backpack.js [app-ssr] (ecmascript) <export default as Backpack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-ssr] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-ssr] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-left.js [app-ssr] (ecmascript) <export default as ChevronsLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-ssr] (ecmascript) <export default as FileSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-ssr] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-ssr] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pinned.js [app-ssr] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-x.js [app-ssr] (ecmascript) <export default as PackageX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-ssr] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/router.js [app-ssr] (ecmascript) <export default as Router>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-search.js [app-ssr] (ecmascript) <export default as ScanSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
;
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                hijos: [
                    {
                        to: '/clientes',
                        label: 'Usuarios',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        end: true
                    },
                    {
                        to: '/clientes/mapa',
                        label: 'Mapa de clientes',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
                    },
                    {
                        to: '/instalaciones/nuevas',
                        label: 'Nuevas instalaciones',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"],
                        contador: 'nuevas'
                    },
                    {
                        to: '/clientes/instalaciones',
                        label: 'Instalaciones',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"]
                    },
                    {
                        to: '/clientes/contratos',
                        label: 'Contratos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__["FileSignature"]
                    }
                ]
            },
            // Los planes van antes que Finanzas porque son su origen: de acá sale el
            // precio y el impuesto que después se factura.
            {
                to: '/servicios',
                label: 'Servicios',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
                hijos: [
                    {
                        to: '/servicios/planes',
                        label: 'Planes de internet',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"]
                    },
                    // Las traffic tables viven en las OLTs, no en la base: el plan solo
                    // apunta a una y le pone el precio. Por eso van al lado.
                    {
                        to: '/servicios/velocidades',
                        label: 'Perfiles de velocidad',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
            },
            {
                to: '/finanzas',
                label: 'Finanzas',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
                hijos: [
                    {
                        to: '/pagos',
                        label: 'Pagos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
                    },
                    {
                        to: '/transacciones',
                        label: 'Transacciones',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"]
                    },
                    // Va pegada a Transacciones porque es su continuación: primero se mira
                    // lo cobrado, después se comprueba que haya entrado.
                    {
                        to: '/conciliacion',
                        label: 'Conciliación bancaria',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
                    },
                    // El reporte del regulador va en Finanzas y no en Ajustes: sale de las
                    // facturas, y quien lo arma es el mismo que mira la caja.
                    {
                        to: '/arcotel',
                        label: 'Reporte ARCOTEL',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
                    },
                    {
                        to: '/estadisticas',
                        label: 'Estadísticas',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                    },
                    {
                        to: '/facturacion',
                        label: 'Facturación',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
                    }
                ]
            },
            {
                to: '/soporte',
                label: 'Soporte',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"],
                hijos: [
                    {
                        to: '/soporte',
                        label: 'Tickets',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"],
                        end: true
                    },
                    {
                        to: '/soporte/tecnicos',
                        label: 'Técnicos y cuadrillas',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"]
                    },
                    {
                        to: '/soporte/desempeno',
                        label: 'Desempeño del equipo',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"]
                    },
                    {
                        to: '/soporte/jornadas',
                        label: 'Ingresos del día',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
                    },
                    {
                        to: '/soporte/vehiculos',
                        label: 'Vehículos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
                    }
                ]
            },
            {
                to: '/inventario',
                label: 'Inventario',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                hijos: [
                    {
                        to: '/inventario/stock',
                        label: 'Stock',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
                    },
                    {
                        to: '/inventario/compras',
                        label: 'Compras y proveedores',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"]
                    },
                    {
                        to: '/inventario/movimientos',
                        label: 'Movimientos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
                    },
                    // Los equipos que quedaron en casas que dejaron de pagar. Va en
                    // Inventario y no en Ventas porque el trabajo es logístico: alguien
                    // tiene que ir a buscarlos y devolverlos al stock.
                    {
                        to: '/inventario/retiros',
                        label: 'Retiros de equipo',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageX$3e$__["PackageX"]
                    },
                    {
                        to: '/inventario/entregas',
                        label: 'Recibir de técnicos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"]
                    },
                    // Última: es la del técnico, que no entra por acá sino desde su
                    // propia pantalla de inicio.
                    {
                        to: '/inventario/mi-almacen',
                        label: 'Mi almacén',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__["Backpack"]
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
                soloVendedor: true
            },
            // Va segunda, pegada a "Mi día": es la otra pregunta que el vendedor se
            // hace todas las mañanas, y tenerla escondida abajo la convierte en algo
            // que se consulta a fin de mes en vez de algo que orienta el día.
            {
                to: '/ventas/mi-comision',
                label: 'Mi comisión',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                soloVendedor: true
            },
            {
                to: '/ventas/prospectos',
                label: 'Prospectos',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
            },
            // Vistas preajustadas de la misma pantalla, no pantallas nuevas. Son los
            // dos cortes que un vendedor hace todo el tiempo, y llegar a ellos con un
            // clic en vez de tres es la diferencia entre usarlos y no.
            {
                to: '/ventas/prospectos?f=abiertos',
                label: 'Pipeline',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                soloVendedor: true
            },
            {
                to: '/ventas/prospectos?f=enfriando',
                label: 'Seguimientos',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
                contador: 'enfriando',
                soloVendedor: true
            },
            {
                to: '/ventas/cobertura',
                label: 'Verificar cobertura',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"]
            },
            {
                to: '/ventas/mapa',
                label: 'Mapa comercial',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"]
            },
            {
                to: '/ventas/cotizador',
                label: 'Cotizador',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
            },
            {
                to: '/ventas/promociones',
                label: 'Promociones',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
            }
        ]
    },
    {
        titulo: 'Reportes',
        items: [
            {
                to: '/ventas/reportes',
                label: 'Reportes comerciales',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
            },
            {
                to: '/ventas/inteligencia',
                label: 'Inteligencia comercial',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"]
            },
            // Aparte de Inteligencia comercial y no adentro: esa pantalla contesta
            // dónde nos piden servicio y no llegamos; esta, cuánto cuesta el canal y
            // qué calidad trae cada uno. Son dos preguntas distintas y juntarlas en
            // una sola pantalla no ayuda a ninguna de las dos.
            {
                to: '/ventas/comisiones',
                label: 'Comisiones del equipo',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
            }
        ]
    },
    {
        titulo: 'Cobranzas',
        items: [
            {
                to: '/ventas/cobranza',
                label: 'Cobros por gestionar',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
            },
            {
                to: '/olts',
                label: 'OLTs',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"]
            },
            // Global y no por OLT: un modelo de ONT es el mismo cuelgue de donde
            // cuelgue, y tenerlo por equipo haría que las copias se contradigan.
            {
                to: '/onu-types',
                label: 'Tipos de ONU',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
            },
            {
                to: '/onus',
                label: 'ONUs',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"]
            },
            {
                to: '/naps',
                label: 'Cajas NAP',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
            },
            {
                to: '/perfiles',
                label: 'Perfiles y planes',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"]
            },
            // Global y no por OLT, por lo mismo que los tipos de ONU: un ACS sirve a
            // todas. Tenerlo por equipo es cómo se llega a que cada OLT apunte a una
            // dirección distinta sin que nadie lo note.
            {
                to: '/tr069',
                label: 'TR-069 / ACS',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"]
            },
            {
                to: '/metricas',
                label: 'Métricas ópticas',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"]
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                hijos: [
                    {
                        to: '/red/routers',
                        label: 'Routers MikroTik',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__["Router"]
                    },
                    {
                        to: '/red/redes',
                        label: 'Redes IPv4',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"]
                    },
                    {
                        to: '/red/auditoria',
                        label: 'Auditoría de subred',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__["ScanSearch"]
                    },
                    {
                        to: '/red/shaping',
                        label: 'Regla de shaping',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"]
                    },
                    // El tablero y el inventario son la misma pregunta hecha dos veces:
                    // se veía una caída y había que cambiar de pantalla para saber de qué
                    // torre colgaba. Van juntos y el menú tiene una sola entrada.
                    {
                        to: '/monitoreo',
                        label: 'Monitoreo de red',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                    },
                    // Aparte del monitoreo aunque salga de él: una cosa es enterarse de que
                    // se cayó la torre y otra es escribirle a los que cuelgan de ella. Quien
                    // hace lo segundo suele ser soporte, no quien mira el tablero.
                    {
                        to: '/monitoreo/incidencias',
                        label: 'Cortes masivos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
                    },
                    {
                        to: '/bloqueos',
                        label: 'Cortes / morosos',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"]
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
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
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const pedidos = {};
        if (puede('pagos.observaciones')) {
            pedidos.cobros = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_cobros_por_gestionar').select('asignacion_id', {
                count: 'exact',
                head: true
            });
        }
        if (puede('ventas.prospectos')) {
            // "Enfriándose" es la condición del embudo que se mira todos los días:
            // abierto y sin contacto hace cinco días o más.
            pedidos.enfriando = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_prospectos').select('id', {
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
            pedidos.nuevas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('instalaciones').select('id', {
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
        setN(Object.fromEntries(claves.map((k, i)=>[
                k,
                res[i].error ? null : res[i].count
            ])));
    }, [
        puede
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        cargar();
        // Dos minutos: son cifras que cambian por hora, no por segundo.
        const t = setInterval(cargar, 120000);
        return ()=>clearInterval(t);
    }, [
        cargar
    ]);
    return n;
}
const CLASE_ITEM = (activo)=>`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${activo ? 'bg-[#F0F9FF] font-semibold text-sky-400 shadow-[inset_3px_0_0_var(--marca)]' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`;
/**
 * El menú mientras se resuelve quién entró.
 *
 * Barras grises con la forma del menú, no el menú de verdad. Lo importante es
 * que ocupe el mismo lugar: si no dibujara nada, el contenido de la derecha se
 * correría al aparecer y la página saltaría en cada recarga.
 */ const MenuCargando = ({ plegado })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 px-1",
        children: [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-8 animate-pulse rounded-lg bg-slate-800/50 ${plegado ? 'w-10' : ''}`,
                // Largos distintos: todas iguales se leen como una tabla vacía, no como
                // algo que está por llegar.
                style: plegado ? undefined : {
                    width: `${68 + i * 37 % 30}%`
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
/** El número al lado de un ítem. Solo aparece si hay algo: un "0" es ruido. */ const Insignia = ({ n })=>n > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "ml-auto grid h-5 min-w-5 place-items-center rounded-full bg-[#F0F9FF] px-1.5 text-[11px] font-semibold text-sky-400",
        children: n > 99 ? '99+' : n
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Sidebar.jsx",
        lineNumber: 389,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : null;
function Grupo({ item, contadores, plegado }) {
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    // El grupo está "dentro" si la ruta actual es la suya o la de alguno de sus
    // hijos: Finanzas agrupa rutas sueltas, no un prefijo común.
    const dentro = pathname === item.to || pathname.startsWith(`${item.to}/`) || item.hijos.some((h)=>pathname === h.to || pathname.startsWith(`${h.to}/`));
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(dentro);
    const Icon = item.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setAbierto((a)=>!a),
                title: plegado ? item.label : undefined,
                className: `w-full ${CLASE_ITEM(dentro && !abierto)} ${plegado ? 'justify-center px-0' : 'justify-between'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                    !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 14,
                        className: `transition-transform ${abierto ? 'rotate-180' : ''}`
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
            abierto && !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 space-y-0.5 border-l border-[rgba(15,23,42,0.08)] pl-3 ml-4",
                children: item.hijos.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: h.to,
                        end: h.end,
                        className: ({ isActive })=>`flex items-center gap-2 rounded-xl px-3 py-1.5 text-[13px] transition ${isActive ? 'bg-[#F0F9FF] font-semibold text-sky-400 shadow-[inset_3px_0_0_var(--marca)]' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(h.icon, {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this),
                            h.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Insignia, {
                                n: contadores?.[h.contador]
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
function Sidebar({ abierto = false, onCerrar = ()=>{} }) {
    const { puede, perfil, cargandoPerfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const marca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useMarca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMarca"])();
    const contadores = useContadores(puede);
    // Plegado: en una pantalla de 13 pulgadas, 240 px de menú son el 20% del
    // ancho. Se recuerda por dispositivo, igual que el tema.
    const [plegado, setPlegado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        try {
            return localStorage.getItem('menu-plegado') === 'si';
        } catch  {
            return false;
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('menu-plegado', plegado ? 'si' : 'no');
        } catch  {}
    }, [
        plegado
    ]);
    /**
   * Poda el menú dejando solo lo alcanzable.
   *
   * Un grupo se queda si le sobrevive al menos un hijo, aunque su propia ruta
   * esté vedada: "/finanzas" no es una pantalla, es un cajón, y esconderlo
   * porque el cajón no tiene permiso propio dejaría afuera a los pagos que sí
   * lo tienen.
   */ const secciones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>SECCIONES.map((seccion)=>({
                ...seccion,
                items: seccion.items.map((item)=>{
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
                    ].flat().some((p)=>puede(p))) return null;
                    if (!item.hijos) return item.permiso ? item : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, item.to) ? item : null;
                    const hijos = item.hijos.filter((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, h.to));
                    return hijos.length ? {
                        ...item,
                        hijos
                    } : null;
                }).filter(Boolean)
            })).filter((s)=>s.items.length), [
        puede
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            abierto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Cerrar el menú",
                onClick: onCerrar,
                className: "fixed inset-0 z-30 bg-[rgba(15,23,42,0.45)] lg:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 513,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `z-40 flex shrink-0 flex-col border-r border-[rgba(15,23,42,0.06)] bg-white transition-transform lg:transition-[width] max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:w-64 ${abierto ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'} ${plegado ? 'lg:w-16' : 'lg:w-60'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 border-b border-[rgba(15,23,42,0.06)] px-4 py-4",
                        children: [
                            marca?.logo_b64 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: marca.logo_b64,
                                alt: "",
                                className: "h-8 w-auto max-w-28 shrink-0 rounded-lg object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 540,
                                columnNumber: 11
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-sky-700 to-sky-400 text-sm font-bold text-white",
                                children: (marca?.nombre_sistema ?? 'S').trim().charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this),
                            !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "t-titulo truncate text-sm font-bold text-slate-100",
                                        children: marca?.nombre_sistema ?? 'SmartOLT'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[11px] text-slate-500",
                                        children: marca?.lema ?? ''
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 space-y-5 overflow-y-auto px-3 py-4",
                        children: cargandoPerfil && !perfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuCargando, {
                            plegado: plegado
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.jsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this) : secciones.map((seccion, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    seccion.titulo && (plegado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto mb-2 h-px w-6 bg-slate-800"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 577,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600",
                                        children: seccion.titulo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 579,
                                        columnNumber: 17
                                    }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: seccion.items.map((item)=>item.hijos ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Grupo, {
                                                item: item,
                                                contadores: contadores,
                                                plegado: plegado
                                            }, item.to, false, {
                                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                                                to: item.to,
                                                end: item.end,
                                                // Plegado, el nombre pasa al tooltip del navegador: un menú
                                                // de solo íconos sin forma de saber qué es cada uno obliga a
                                                // probarlos.
                                                title: plegado ? item.label : undefined,
                                                className: ({ isActive })=>`${CLASE_ITEM(isActive)} ${plegado ? 'justify-center px-0' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                                lineNumber: 601,
                                                                columnNumber: 23
                                                            }, this),
                                                            plegado && contadores?.[item.contador] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Insignia, {
                                                        n: contadores?.[item.contador]
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setPlegado((v)=>!v),
                        className: "flex items-center gap-3 border-t border-[rgba(15,23,42,0.06)] px-4 py-3 text-[12px] text-slate-500 transition hover:text-slate-300",
                        title: plegado ? 'Mostrar el menú' : 'Ocultar el menú',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__["ChevronsLeft"], {
                                size: 16,
                                className: `transition-transform ${plegado ? 'rotate-180' : ''}`
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
}),
"[project]/src/components/layout/Campana.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Campana
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
;
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
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [avisos, setAvisos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [abierta, setAbierta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const caja = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!perfil?.id) return;
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_notificaciones').select('*').order('urgencia').order('creado_en', {
            ascending: false
        }).limit(40);
        setAvisos(data ?? []);
    }, [
        perfil
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        recargar();
        const t = setInterval(recargar, CADA);
        return ()=>clearInterval(t);
    }, [
        recargar
    ]);
    // Cerrar al tocar afuera. En el celular, sin esto queda un panel tapando la
    // pantalla que solo se va tocando exactamente la campana otra vez.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!abierta) return;
        const fuera = (e)=>{
            if (caja.current && !caja.current.contains(e.target)) setAbierta(false);
        };
        document.addEventListener('mousedown', fuera);
        return ()=>document.removeEventListener('mousedown', fuera);
    }, [
        abierta
    ]);
    const urgentes = avisos.filter((a)=>a.urgencia === 0 && !a.leida).length;
    const sinLeer = avisos.filter((a)=>!a.leida).length;
    const marcarLeida = async (a)=>{
        if (!a.se_puede_marcar) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('notificaciones').update({
            leida_en: new Date().toISOString()
        }).eq('id', a.clave);
        await recargar();
    };
    const marcarTodas = async ()=>{
        const ids = avisos.filter((a)=>a.se_puede_marcar && !a.leida).map((a)=>a.clave);
        if (!ids.length) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('notificaciones').update({
            leida_en: new Date().toISOString()
        }).in('id', ids);
        await recargar();
    };
    // Sin legajo no hay a quién notificar. No se dibuja nada en vez de una campana
    // que siempre está vacía.
    if (!perfil?.id) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: caja,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setAbierta((a)=>!a),
                className: "relative grid h-10 w-10 place-items-center rounded-xl text-slate-400 transition hover:bg-slate-800 hover:text-slate-100",
                "aria-label": `Notificaciones${sinLeer ? `: ${sinLeer} sin leer` : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Campana.jsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    sinLeer > 0 && // El punto rojo solo si hay algo urgente. Lo informativo mueve el
                    // número pero no el color.
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full px-1 text-[10px] font-semibold text-white ${urgentes > 0 ? 'bg-red-500' : 'bg-slate-600'}`,
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
            abierta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 z-50 mt-2 max-h-[70vh] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto t-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[rgba(15,23,42,0.06)] px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px] font-medium text-slate-200",
                                children: "Notificaciones"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Campana.jsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            avisos.some((a)=>a.se_puede_marcar && !a.leida) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    avisos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-3 py-8 text-center text-[13px] text-slate-500",
                        children: "Nada pendiente. Cuando falte algo en un expediente o venza una promesa, va a aparecer acá."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Campana.jsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-slate-800/70",
                        children: avisos.map((a)=>{
                            const Icono = a.urgencia === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"];
                            const cuerpo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex gap-2.5 px-3 py-2.5 transition hover:bg-slate-800/60 ${a.leida ? 'opacity-50' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                                        size: 15,
                                        className: `mt-0.5 shrink-0 ${a.urgencia === 0 ? 'text-amber-400' : 'text-sky-400'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Campana.jsx",
                                        lineNumber: 138,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] leading-snug text-slate-100",
                                                children: a.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Campana.jsx",
                                                lineNumber: 145,
                                                columnNumber: 23
                                            }, this),
                                            a.detalle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    a.se_puede_marcar && !a.leida && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            marcarLeida(a);
                                        },
                                        className: "shrink-0 self-start rounded p-1 text-slate-500 hover:text-slate-200",
                                        "aria-label": "Marcar como leída",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
                            return a.ruta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                to: a.ruta,
                                onClick: ()=>setAbierta(false),
                                className: "block",
                                children: cuerpo
                            }, a.clave, false, {
                                fileName: "[project]/src/components/layout/Campana.jsx",
                                lineNumber: 168,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    avisos.some((a)=>!a.se_puede_marcar) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/layout/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server-cog.js [app-ssr] (ecmascript) <export default as ServerCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Campana$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Campana.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Navbar({ onAbrirMenu = ()=>{} }) {
    const { puede } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const { usuario, cerrarSesion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [middleware, setMiddleware] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        estado: 'consultando'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let vigente = true;
        const consultar = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].health().then((r)=>{
                if (!vigente) return;
                setMiddleware(r.ok ? {
                    estado: 'ok'
                } : {
                    estado: 'incompleto',
                    detalle: r.configuracionFaltante?.join(', ')
                });
            }).catch(()=>vigente && setMiddleware({
                    estado: 'caido'
                }));
        consultar();
        const t = setInterval(consultar, 30000);
        return ()=>{
            vigente = false;
            clearInterval(t);
        };
    }, []);
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
            `middleware sin configurar: ${middleware.detalle || ''}`
        ],
        caido: [
            'bg-red-500',
            'middleware no responde'
        ]
    }[middleware.estado];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center justify-between border-b border-[rgba(15,23,42,0.06)] bg-white px-3 py-2.5 sm:px-6 sm:py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-3 text-xs text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onAbrirMenu,
                        "aria-label": "Abrir el menú",
                        className: "-ml-1 shrink-0 rounded-lg p-1.5 text-slate-500 hover:bg-slate-800 hover:text-slate-200 lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-[#FFFBEB] px-2.5 py-0.5 font-semibold text-amber-300",
                        children: "MODO DEMO — datos de ejemplo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        title: indicador[1],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerCog$3e$__["ServerCog"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-2 w-2 rounded-full ${indicador[0]}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    puede('pagos.registrar') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: "/pagos",
                        title: "Registrar un pago",
                        className: ({ isActive })=>`flex size-8 items-center justify-center rounded-xl border transition ${isActive ? 'border-transparent bg-[#ECFDF5] text-emerald-400' : 'border-slate-700 text-emerald-400 hover:bg-slate-800'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Campana$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: "/mi-perfil",
                        title: "Mi perfil y mi contraseña",
                        className: "hidden max-w-[16rem] truncate rounded-lg px-2 py-1 text-xs text-slate-400 hover:bg-slate-800 hover:text-slate-200 sm:inline-block",
                        children: usuario?.email
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: cerrarSesion,
                        className: "flex items-center gap-1.5 rounded-xl border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
}),
"[project]/src/components/layout/Layout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SinPermiso.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rutasPermisos.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Layout({ children }) {
    const { puede, perfil, cargandoPerfil, errorPerfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const permitido = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, pathname);
    /**
   * El menú, abierto o cerrado. Solo importa en pantallas chicas, donde la
   * barra lateral es un cajón; de `lg` para arriba está siempre a la vista y
   * este estado no la afecta.
   *
   * Se cierra al navegar. Sin eso, elegir una opción deja el menú tapando
   * justo la pantalla que se acaba de abrir, y hay que cerrarlo a mano cada
   * vez.
   */ const [menuAbierto, setMenuAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMenuAbierto(false), [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                abierto: menuAbierto,
                onCerrar: ()=>setMenuAbierto(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onAbrirMenu: ()=>setMenuAbierto(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Layout.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto p-4 sm:p-6",
                        children: cargandoPerfil && !perfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cargando, {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this) : errorPerfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NoSePudoVerificar, {
                            error: errorPerfil
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this) : permitido ? children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
 */ const NoSePudoVerificar = ({ error })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-md py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "t-titulo text-lg font-bold text-slate-100",
                children: "No se pudo verificar tu perfil"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-400",
                children: "El sistema no pudo leer quién eres, así que no muestra nada hasta saberlo. Suele ser la conexión."
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>window.location.reload(),
                className: "mt-5 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800",
                children: "Reintentar"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            error?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
const Cargando = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-7 w-48 animate-pulse rounded-lg bg-slate-800/60"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 108,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-72 animate-pulse rounded bg-slate-800/40"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 109,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-3 md:grid-cols-3",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/lib/ruta.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-ssr] (ecmascript) <locals>");
;
/** La coordenada de una orden, o null si no tiene. */ const punto = (o)=>o?.latitud != null && o?.longitud != null ? {
        lat: Number(o.latitud),
        lng: Number(o.longitud)
    } : null;
/** Metros entre dos paradas. `null` si a alguna le falta la coordenada. */ function entre(a, b) {
    if (!a || !b) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["distanciaEnMetros"])(a, b);
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
    if (ida != null && vuelta != null) return ida + vuelta - (directo ?? 0);
    // Al final, o arrancando: solo el tramo que se agrega.
    if (ida != null) return ida;
    if (vuelta != null) return vuelta;
    return null;
}
function ordenarPorCercania(ordenes, { desde = null } = {}) {
    const lista = [
        ...ordenes ?? []
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
   */ const conCoordenada = libres.filter((o)=>punto(o)).sort((a, b)=>(entre(desde, punto(b)) ?? 0) - (entre(desde, punto(a)) ?? 0));
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
function largoDeRuta(ruta, { desde = null } = {}) {
    let metros = 0;
    let medidos = 0;
    let anterior = desde;
    for (const o of ruta ?? []){
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
}),
"[project]/src/lib/campo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ruta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ruta.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/instalaciones.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cacheLocal.js [app-ssr] (ecmascript)");
;
;
;
;
const hoyISO = ()=>{
    const d = new Date();
    const dosDigitos = (n)=>String(n).padStart(2, '0');
    return `${d.getFullYear()}-${dosDigitos(d.getMonth() + 1)}-${dosDigitos(d.getDate())}`;
};
/** La fecha local de un instante cualquiera. Mismo motivo que arriba. */ const fechaLocalDe = (valor)=>{
    if (!valor) return null;
    const d = new Date(valor);
    if (Number.isNaN(d.getTime())) return null;
    const dosDigitos = (n)=>String(n).padStart(2, '0');
    return `${d.getFullYear()}-${dosDigitos(d.getMonth() + 1)}-${dosDigitos(d.getDate())}`;
};
/**
 * Todo lo del inicio, en un viaje.
 *
 * Cada bloque falla por separado a propósito: que el estado de la red no
 * responda no puede dejar al técnico sin ver su ruta. Lo que falla queda en
 * `null` y la pantalla lo dice, en vez de mostrar un error que tapa todo.
 */ async function leerTablero(perfil) {
    const tecnicoId = perfil?.tecnico_id ?? null;
    const hoy = hoyISO();
    const [ordenes, tickets, red, notificaciones, novedades, retiros, material] = await Promise.all([
        // Las instalaciones ya vienen filtradas por RLS: `instalaciones_lectura`
        // solo devuelve las de su `tecnico_id`. El filtro de acá abajo es para el
        // día, no para la seguridad — si fuera para la seguridad estaría en el
        // lugar equivocado.
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_instalaciones').select('*').in('estado', [
            'agendada',
            'en_ruta',
            'en_curso',
            'reprogramada'
        ]).order('fecha').order('hora', {
            nullsFirst: false
        }).limit(40).then(({ data, error })=>{
            if (error) throw error;
            return data ?? [];
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
     */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tickets').select('id, numero, nombre, tipo_incidencia, descripcion, estado, prioridad, direccion, fecha_visita, franja, created_at, salida_at, llegada_at, cerrado_at').order('created_at', {
            ascending: false
        }).limit(30).then(({ data, error })=>{
            // El error se propaga en vez de convertirse en una lista vacía. Una
            // lista vacía es una afirmación —"no hay nada"— y esta pantalla no
            // puede afirmar eso cuando lo que pasó es que no pudo preguntar.
            if (error) throw error;
            return data ?? [];
        }),
        // Va por la vista y no por el middleware: son datos que ya están en la base
        // y una llamada HTTP más es una espera más en una conexión de celular.
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_estado_red').select('*').eq('monitorear', true)// Esta sí puede fallar sin romper nada: la 85 puede no estar corrida
        // todavía, y sin estado de red el técnico igual tiene que ver su día.
        // Devuelve `null`, que la pantalla lee como "no se sabe" y oculta la
        // tarjeta — distinto de `[]`, que diría "no hay nodos".
        .then(({ data, error })=>error ? null : data ?? []),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_notificaciones').select('*').eq('leida', false).order('creado_en', {
            ascending: false
        }).limit(10).then(({ data, error })=>error ? [] : data ?? []),
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
     */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_novedades_red').select('*').order('momento', {
            ascending: false
        }).limit(12).then(({ data, error })=>error ? [] : data ?? []),
        /**
     * Los equipos que tiene que ir a buscar.
     *
     * Igual que las instalaciones: ya vienen filtradas por RLS, que devuelve
     * solo las del técnico asignado o las de quien figura como responsable. El
     * orden es el del día de trabajo — primero lo que tiene hora.
     *
     * Falla en silencio a `[]` a propósito: que la cartera no responda no puede
     * dejar al técnico sin ver su ruta de instalaciones.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_retiros_equipo').select('id, cliente, telefono, direccion, zona, serie, modelo, estado, agendado_para, agenda_nota, meses_sin_pago, intentos').in('estado', [
            'pendiente',
            'asignado'
        ]).order('agendado_para', {
            ascending: true,
            nullsFirst: false
        }).limit(20).then(({ data, error })=>error ? [] : data ?? []),
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
     */ tecnicoId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_stock_bajo').select('articulo, cantidad, unidad, minimo, sugerido, agotado').eq('tecnico_id', tecnicoId).order('agotado', {
            ascending: false
        }).limit(15).then(({ data, error })=>error ? [] : data ?? []) : Promise.resolve([])
    ]);
    const delDia = (ordenes ?? []).filter((o)=>o.fecha === hoy);
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
    if (perfil?.tecnico_id) {
        const { data: j } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('jornadas').select('lat_ingreso, lng_ingreso').eq('tecnico_id', perfil.tecnico_id).eq('fecha', hoy).maybeSingle();
        if (j?.lat_ingreso != null && j?.lng_ingreso != null) {
            partida = {
                lat: Number(j.lat_ingreso),
                lng: Number(j.lng_ingreso)
            };
        }
    }
    const ruta = rutaDe(delDia, partida);
    const atrasadas = (ordenes ?? []).filter((o)=>o.fecha && o.fecha < hoy);
    // Los tickets abiertos son los que cuentan como trabajo pendiente; los
    // cerrados vienen igual porque alimentan "recientes" y el resumen del día.
    const ticketsAbiertos = (tickets ?? []).filter((t)=>![
            'resuelto',
            'cancelado'
        ].includes(t.estado));
    /**
   * Cuáles no había visto.
   *
   * `perfil.ultimo_acceso` vale porque el legajo se lee ANTES de sellar el
   * acceso nuevo: durante toda la sesión guarda el ingreso ANTERIOR, que es
   * justamente el corte que se busca.
   */ const desde = perfil?.ultimo_acceso ? new Date(perfil.ultimo_acceso).getTime() : null;
    const novedadesMarcadas = (novedades ?? []).map((e)=>({
            ...e,
            nueva: desde ? new Date(e.momento).getTime() > desde : false
        }));
    return {
        tecnicoId,
        ordenes: ordenes ?? [],
        tickets: ticketsAbiertos,
        todosLosTickets: tickets ?? [],
        notificaciones: notificaciones ?? [],
        novedades: novedadesMarcadas,
        novedadesNuevas: novedadesMarcadas.filter((e)=>e.nueva).length,
        desdeUltimoIngreso: perfil?.ultimo_acceso ?? null,
        red: red === null ? null : resumirRed(red, novedades ?? []),
        jornada: jornadaDe(delDia, atrasadas, ticketsAbiertos),
        resumen: resumenDelDia(delDia, tickets ?? []),
        recientes: recientesDe(ordenes ?? [], tickets ?? []),
        retiros: retiros ?? [],
        material: material ?? [],
        materialAgotado: (material ?? []).filter((m)=>m.agotado).length,
        // Los que tienen cita y ya se pasó la hora: es lo único de este bloque que
        // el técnico tiene que ver sin buscarlo.
        retirosVencidos: (retiros ?? []).filter((r)=>r.agendado_para && new Date(r.agendado_para) < new Date()).length,
        ruta,
        // La próxima es la primera de la ruta que todavía no se hizo. Sale aparte
        // porque es lo único que el técnico necesita mirar sin pensar.
        // La próxima sale de la MISMA ruta y no de otro cálculo: si se ordenaran
        // por separado, la pantalla podría anunciar una próxima parada que no es la
        // que encabeza la lista de abajo.
        proxima: ruta.find((o)=>o.estado !== 'hecha') ?? null,
        atrasadas
    };
}
async function tableroDelDia(perfil) {
    const clave = `tablero:${perfil?.id ?? 'anonimo'}`;
    const { datos, deCache, minutos } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conCache"])(clave, ()=>leerTablero(perfil));
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
    const inicio = marcas[0] ?? null;
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
    const deInstalacion = ordenes.map((o)=>({
            id: o.id,
            numero: o.numero,
            tipo: o.tipo === 'nueva' ? 'Instalación' : 'Visita',
            cliente: o.cliente ?? o.nombre,
            cuando: o.fecha ? `${o.fecha}T${o.hora ?? '00:00:00'}` : o.created_at,
            hora: o.hora,
            estado: o.estado,
            a: `/instalaciones/${o.id}/alta`
        }));
    const deTicket = tickets.map((t)=>({
            id: t.id,
            numero: t.numero,
            tipo: 'Soporte',
            cliente: t.nombre,
            cuando: t.created_at,
            hora: null,
            estado: t.estado,
            a: `/campo/soporte/${t.id}`
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
 */ function resumirRed(nodos, novedades = []) {
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
        ].sort((a, b)=>(a.estado === 'down' ? 0 : 1) - (b.estado === 'down' ? 0 : 1) || (b.minutos_asi ?? 0) - (a.minutos_asi ?? 0)),
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
    const cuenta = (...estados)=>delDia.filter((o)=>estados.includes(o.estado)).length;
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
 */ function rutaDe(delDia, desde = null) {
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
   */ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ruta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ordenarPorCercania"])(delDia, {
        desde
    });
}
const semaforoOrden = (o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["semaforoDe"])(o);
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
function saludo(nombre) {
    const h = new Date().getHours();
    const momento = h < 12 ? 'Buen día' : h < 19 ? 'Buenas tardes' : 'Buenas noches';
    return nombre ? `${momento}, ${String(nombre).split(' ')[0]}` : momento;
}
}),
"[project]/src/components/tecnico/BarraInferior.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESTINOS",
    ()=>DESTINOS,
    "NavEscritorio",
    ()=>NavEscritorio,
    "default",
    ()=>BarraInferior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-ssr] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-ssr] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
;
;
;
const DESTINOS = [
    {
        to: '/campo',
        label: 'Dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        end: true
    },
    {
        to: '/campo/ordenes',
        label: 'Órdenes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
    },
    {
        to: '/campo/soporte',
        label: 'Soporte',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"]
    },
    {
        to: '/campo/inventario',
        label: 'Inventario',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"]
    },
    {
        to: '/campo/perfil',
        label: 'Perfil',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    }
];
function NavEscritorio({ pendientes = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden items-center gap-1 md:flex",
        children: DESTINOS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                to: d.to,
                end: d.end,
                className: ({ isActive })=>`relative flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] transition ${isActive ? 'bg-sky-600/15 font-medium text-sky-300' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(d.icon, {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    d.label,
                    pendientes[d.label.toLowerCase()] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function BarraInferior({ pendientes = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-white/95 backdrop-blur md:hidden",
        // El teléfono con gesto de inicio se come la última franja: sin esto, el
        // último centímetro de los botones no responde y parece que la app se
        // colgó.
        style: {
            paddingBottom: 'env(safe-area-inset-bottom)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-lg",
            children: DESTINOS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                    to: d.to,
                    end: d.end,
                    className: ({ isActive })=>`relative flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] transition ${isActive ? 'text-sky-400' : 'text-slate-500'}`,
                    children: ({ isActive })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(d.icon, {
                                            size: 21,
                                            strokeWidth: isActive ? 2.4 : 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tecnico/BarraInferior.jsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this),
                                        pendientes[d.label.toLowerCase()] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        }, void 0, true)
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
}),
"[project]/src/components/tecnico/EstadoConexion.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EstadoConexion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-ssr] (ecmascript) <export default as CloudOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cola.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function EstadoConexion() {
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [enLinea, setEnLinea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pendientes, setPendientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [frenados, setFrenados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [enviando, setEnviando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const refrescar = async ()=>{
            setPendientes(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contarPendientes"])());
            setFrenados(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trabados"])());
        };
        refrescar();
        const soltar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alCambiar"])(refrescar);
        const arriba = ()=>setEnLinea(true);
        const abajo = ()=>setEnLinea(false);
        window.addEventListener('online', arriba);
        window.addEventListener('offline', abajo);
        return ()=>{
            soltar();
            window.removeEventListener('online', arriba);
            window.removeEventListener('offline', abajo);
        };
    }, []);
    const enviarAhora = async ()=>{
        setEnviando(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["despachar"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border-b px-4 py-2 text-[12px] ${tono}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-6xl items-center gap-2",
                children: [
                    hayTrabados ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        size: 15,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this) : !enLinea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                        size: 15,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__["CloudOff"], {
                        size: 15,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0 flex-1",
                        children: hayTrabados ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                frenados.length,
                                ' ',
                                frenados.length === 1 ? 'cosa no se pudo enviar' : 'cosas no se pudieron enviar'
                            ]
                        }, void 0, true) : !enLinea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Sin conexión.",
                                ' ',
                                pendientes > 0 ? `${pendientes} ${pendientes === 1 ? 'cosa espera' : 'cosas esperan'} para enviarse.` : 'Puedes seguir trabajando.'
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
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
                    enLinea && pendientes > 0 && !hayTrabados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: enviarAhora,
                        disabled: enviando,
                        className: "flex shrink-0 items-center gap-1 rounded-lg border border-current/30 px-2 py-1 font-medium disabled:opacity-50",
                        children: [
                            enviando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 12,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
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
                    hayTrabados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            abierto && hayTrabados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mt-2 max-w-6xl space-y-1.5",
                children: frenados.map((op)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "t-panel p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium",
                                children: DESCRIPCION[op.tipo] ?? op.tipo
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[11px] opacity-70",
                                children: op.error
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] opacity-50",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fechaHora"])(op.creado),
                                    " · ",
                                    op.intentos,
                                    " intentos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/EstadoConexion.jsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.5 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reintentar"])(op.id),
                                        className: "flex items-center gap-1 rounded border border-current/30 px-2 py-0.5 text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: async ()=>{
                                            // Confirmación explícita: descartar es perder el trabajo del
                                            // técnico, y perderlo en silencio sería lo peor que puede
                                            // hacer esta pantalla.
                                            if (await confirmar('Se va a perder lo que quedó sin enviar. ¿Descartar?')) {
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["descartar"])(op.id);
                                            }
                                        },
                                        className: "flex items-center gap-1 rounded border border-current/30 px-2 py-0.5 text-[11px] opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
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
                    }, this))
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
const DESCRIPCION = {
    'instalacion.guardar': 'Avance de una instalación',
    'instalacion.finalizar': 'Cierre de una instalación',
    'material.consumir': 'Descuento de material',
    'ticket.cerrar': 'Cierre de un ticket',
    'ticket.estado': 'Cambio de estado de un ticket'
};
}),
"[project]/src/components/tecnico/LayoutCampo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LayoutCampo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/campo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/BarraInferior.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$EstadoConexion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/EstadoConexion.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cola.js [app-ssr] (ecmascript)");
// Registra qué sabe hacer la cola. El import tiene efecto de módulo y no
// exporta nada que se use acá: sin él, la cola acepta operaciones que después
// no sabe despachar.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colaCampo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/colaCampo.js [app-ssr] (ecmascript)");
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
function LayoutCampo({ children }) {
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const [sinLeer, setSinLeer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const contar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_notificaciones').select('clave', {
            count: 'exact',
            head: true
        }).eq('leida', false);
        setSinLeer(count ?? 0);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        contar();
        // Cada dos minutos, igual que el resto: son datos que cambian por hora, y
        // el técnico está con datos móviles.
        const t = setInterval(contar, 120000);
        return ()=>clearInterval(t);
    }, [
        contar
    ]);
    // El despachador vive mientras la app de campo está abierta. Va acá y no en
    // `main.jsx` porque la cola es del técnico: nadie más encola nada, y
    // arrancarla para todos dejaría un intervalo corriendo en las pantallas de
    // oficina sin ninguna razón.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cola$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrancarCola"])(), []);
    // El título de la sección, para que en el celular se sepa dónde se está: la
    // barra de abajo marca el ícono activo, pero un ícono resaltado en 10 px no
    // alcanza cuando hay sol de frente.
    const seccion = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DESTINOS"].find((d)=>d.end ? pathname === d.to : pathname.startsWith(d.to));
    const enInicio = pathname === '/campo';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-dvh bg-[#F6F8FB] pb-24 text-slate-200 md:pb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-30 border-b border-slate-800 bg-white/95 backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[15px] font-semibold text-slate-100",
                                        children: enInicio ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saludo"])(perfil?.nombre) : seccion?.label ?? 'Campo'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500",
                                        children: enInicio ? new Date().toLocaleDateString('es-EC', {
                                            weekday: 'long',
                                            day: 'numeric',
                                            month: 'long'
                                        }) : `${perfil?.nombre ?? ''} ${perfil?.apellido ?? ''}`.trim()
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavEscritorio"], {
                                pendientes: {
                                    avisos: sinLeer
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                to: "/campo/avisos",
                                className: "relative grid h-10 w-10 shrink-0 place-items-center rounded-xl text-slate-400 active:bg-slate-800",
                                "aria-label": sinLeer ? `${sinLeer} avisos sin leer` : 'Avisos',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        size: 19
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    sinLeer > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$EstadoConexion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl p-3 md:p-4",
                children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Outlet"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/src/components/layout/ProtectedRoute.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
;
;
;
;
function ProtectedRoute({ children }) {
    const { sesion, cargando } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cargando"], {
        texto: "Verificando sesión…"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ProtectedRoute.jsx",
        lineNumber: 8,
        columnNumber: 24
    }, this);
    if (!sesion) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigate"], {
        to: "/login",
        replace: true
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ProtectedRoute.jsx",
        lineNumber: 9,
        columnNumber: 23
    }, this);
    return children;
}
}),
"[project]/src/NextPageShell.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldShell",
    ()=>FieldShell,
    "ProtectedShell",
    ()=>ProtectedShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Layout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Layout.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$LayoutCampo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/LayoutCampo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ProtectedRoute$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ProtectedRoute.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ProtectedShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ProtectedRoute$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Layout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
function FieldShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ProtectedRoute$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$LayoutCampo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/app/soporte/[id]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$TicketPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/TicketPage.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$NextPageShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/NextPageShell.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$NextPageShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtectedShell"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$TicketPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/soporte/[id]/page.jsx",
            lineNumber: 7,
            columnNumber: 26
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/soporte/[id]/page.jsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_93bf3f81._.js.map