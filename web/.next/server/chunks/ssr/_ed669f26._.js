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
"[project]/src/lib/useTablaDjango.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTabla",
    ()=>useTablaDjango,
    "useTablaDjango",
    ()=>useTablaDjango
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-ssr] (ecmascript)");
;
;
;
function useTablaDjango(tabla, { select = '*', orderBy = 'created_at', ascending = false } = {}) {
    const [filas, setFilas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setCargando(true);
        setError(null);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) {
            setFilas(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demoDb"].listar(tabla, {
                orderBy,
                ascending
            }));
            setCargando(false);
            return;
        }
        const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from(tabla).select(select).order(orderBy, {
            ascending
        });
        if (err) setError(traducir(err, tabla));
        else setFilas(data ?? []);
        setCargando(false);
    }, [
        tabla,
        select,
        orderBy,
        ascending
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        recargar();
    }, [
        recargar
    ]);
    const insertar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (fila)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) {
            const nueva = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demoDb"].insertar(tabla, fila);
            await recargar();
            return nueva;
        }
        const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from(tabla).insert(fila).select().single();
        if (err) throw traducir(err, tabla);
        await recargar();
        return data;
    }, [
        tabla,
        recargar
    ]);
    const actualizar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, cambios)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demoDb"].actualizar(tabla, id, cambios);
        } else {
            const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from(tabla).update(cambios).eq('id', id);
            if (err) throw traducir(err, tabla);
        }
        await recargar();
    }, [
        tabla,
        recargar
    ]);
    const eliminar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demoDb"].eliminar(tabla, id);
        } else {
            const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from(tabla).delete().eq('id', id);
            if (err) throw traducir(err, tabla);
        }
        await recargar();
    }, [
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
/** Convierte los errores de Django REST en mensajes útiles. */ function traducir(err, tabla) {
    const e = new Error(err.message);
    e.hint = err.details?.hint || '';
    // Códigos HTTP comunes
    if (err.code === 404) {
        e.message = `La tabla "${tabla}" no existe o el registro no fue encontrado`;
        e.hint = 'Verifica que el modelo Django esté creado y migrado.';
    } else if (err.code === 401 || err.code === 403) {
        e.message = `Sin permiso para operar sobre "${tabla}"`;
        e.hint = 'Verifica que estés autenticado y que tu usuario tenga permisos sobre este recurso.';
    } else if (err.code === 400 && err.message.includes('unique')) {
        e.message = 'Ya existe un registro con esos datos';
        e.hint = err.details?.detail || 'Violación de constraint UNIQUE';
    } else if (err.code === 400 && err.message.includes('foreign key')) {
        e.message = 'El registro está referenciado por otro y no se puede borrar';
        e.hint = err.details?.detail || 'Violación de constraint FOREIGN KEY';
    } else if (err.code === 500) {
        e.message = 'Error del servidor';
        e.hint = 'Revisa los logs del backend Django para más detalles.';
    }
    return e;
}
;
}),
"[project]/src/lib/abonados.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
function mesesDesde(fecha, ahora = new Date()) {
    if (!fecha) return null;
    const d = new Date(fecha);
    if (Number.isNaN(d.getTime())) return null;
    let meses = (ahora.getFullYear() - d.getFullYear()) * 12 + (ahora.getMonth() - d.getMonth());
    if (ahora.getDate() < d.getDate()) meses -= 1;
    return Math.max(0, meses);
}
function diasDesde(fecha, ahora = new Date()) {
    if (!fecha) return null;
    const d = new Date(fecha);
    if (Number.isNaN(d.getTime())) return null;
    return Math.max(0, Math.floor((ahora - d) / 86400000));
}
function antiguedad(fecha, ahora = new Date()) {
    const meses = mesesDesde(fecha, ahora);
    if (meses == null) return '—';
    if (meses >= 1) return `${meses} ${meses === 1 ? 'mes' : 'meses'}`;
    const dias = diasDesde(fecha, ahora);
    if (dias === 0) return 'hoy';
    return `${dias} ${dias === 1 ? 'día' : 'días'}`;
}
function enlace(cliente) {
    const e = cliente?.onu_estado;
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
function fechaLocal(d = new Date()) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function clientesConVencido(facturas, hoy = fechaLocal()) {
    return new Set((facturas ?? []).filter((f)=>Number(f.saldo ?? 0) > 0 && f.fecha_vencimiento && f.fecha_vencimiento < hoy).map((f)=>f.client_id));
}
function filtrarAbonados(filas, { busqueda = '', estado = '', router = '', zona = '', plan = '', vencidos = null } = {}) {
    const q = String(busqueda).trim().toLowerCase();
    return (filas ?? []).filter((c)=>{
        if (estado && c.estado !== estado) return false;
        if (vencidos && !vencidos.has(c.id)) return false;
        if (router && String(c.router_id) !== String(router)) return false;
        if (zona && (c.zona ?? '') !== zona) return false;
        if (plan && String(c.plan_id) !== String(plan)) return false;
        if (!q) return true;
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
            String(c.codigo ?? '')
        ].filter(Boolean).some((v)=>String(v).toLowerCase().includes(q));
    });
}
function seleccionarParaExportar(filas, { modo = 'antiguedad', estado = 'suspendido', meses = 2, desde = '', hasta = '' } = {}, ahora = new Date()) {
    const conEstado = (filas ?? []).filter((c)=>!estado || c.estado === estado);
    if (modo === 'rango') {
        // Las fechas vienen del <input type="date">: 'YYYY-MM-DD'. Se comparan como
        // texto contra los diez primeros caracteres del timestamp para no arrastrar
        // la zona horaria — un corte de las 23:40 no puede caer en el día siguiente
        // solo porque el navegador esté en otro huso.
        const d = String(desde ?? '').slice(0, 10);
        const h = String(hasta ?? '').slice(0, 10);
        return conEstado.filter((c)=>{
            const f = String(c.estado_desde ?? '').slice(0, 10);
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
        texto: (c)=>c.nombre ?? ''
    },
    {
        clave: 'direccion',
        titulo: 'Dirección principal',
        grupo: 'principal',
        ancho: true,
        texto: (c)=>c.direccion ?? ''
    },
    // Para qué es el servicio cuando una persona tiene más de uno. Uso interno:
    // el nombre y la dirección son lo que sale impreso, esto no.
    {
        clave: 'referencia_servicio',
        titulo: 'Servicio',
        grupo: 'principal',
        texto: (c)=>c.referencia_servicio ?? ''
    },
    {
        clave: 'ip',
        titulo: 'IP',
        grupo: 'principal',
        mono: true,
        texto: (c)=>c.ip ?? ''
    },
    {
        clave: 'mac',
        titulo: 'MAC',
        grupo: 'principal',
        mono: true,
        texto: (c)=>c.mac_address ?? ''
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
        texto: (c)=>c.email ?? ''
    },
    {
        clave: 'plan',
        titulo: 'Plan',
        grupo: 'principal',
        texto: (c)=>c.plan ?? ''
    },
    {
        clave: 'movil',
        titulo: 'Teléfono móvil',
        grupo: 'principal',
        mono: true,
        texto: (c)=>c.telefono_movil ?? ''
    },
    {
        clave: 'router',
        titulo: 'Router',
        grupo: 'principal',
        texto: (c)=>c.router ?? ''
    },
    {
        clave: 'cedula',
        titulo: 'Cédula',
        grupo: 'principal',
        mono: true,
        texto: (c)=>c.identificacion ?? ''
    },
    {
        clave: 'zona',
        titulo: 'Zona',
        grupo: 'principal',
        texto: (c)=>c.zona ?? ''
    },
    {
        clave: 'estatus',
        titulo: 'Estatus',
        grupo: 'principal',
        texto: (c)=>enlace(c)?.texto ?? ''
    },
    // ── Las que se encienden cuando hacen falta ──────────────────────────────
    {
        clave: 'telefono',
        titulo: 'Teléfono fijo',
        grupo: 'extra',
        mono: true,
        texto: (c)=>c.telefono ?? ''
    },
    {
        clave: 'ip_receptor',
        titulo: 'IP receptor',
        grupo: 'extra',
        mono: true,
        texto: (c)=>c.ip_administracion ?? ''
    },
    {
        clave: 'pppuser',
        titulo: 'Usuario PPPoE',
        grupo: 'extra',
        mono: true,
        texto: (c)=>c.usuario_ppp ?? ''
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
        texto: (c)=>c.conectado_a ?? ''
    },
    {
        clave: 'tipo_antena',
        titulo: 'Antena',
        grupo: 'extra',
        texto: (c)=>c.tipo_antena ?? ''
    },
    {
        clave: 'onu',
        titulo: 'ONU',
        grupo: 'extra',
        mono: true,
        texto: (c)=>c.onu_serial ?? ''
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
        texto: (c)=>c.latitud && c.longitud ? `${c.latitud}, ${c.longitud}` : ''
    },
    {
        clave: 'pasarela',
        titulo: 'Pasarela',
        grupo: 'extra',
        texto: (c)=>c.pasarela ?? ''
    },
    {
        clave: 'codigo_pago',
        titulo: 'Código de pago',
        grupo: 'extra',
        mono: true,
        texto: (c)=>c.codigo_pago ?? ''
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
        texto: (c)=>c.modalidad_pago ?? ''
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
        texto: (c)=>c.estado === 'baja' ? soloFecha(c.baja_en ?? c.estado_desde) : ''
    },
    {
        clave: 'antiguedad',
        titulo: 'Tiempo en el estado',
        grupo: 'extra',
        texto: (c, ctx)=>antiguedad(c.estado_desde, ctx?.ahora)
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
        texto: (c, ctx)=>dosDecimales(Math.max(0, Number(c.saldo ?? 0) - Number(cuenta(ctx, c).a_favor ?? 0)))
    }
];
const dosDecimales = (n)=>n == null || n === '' ? '' : Number(n).toFixed(2);
const soloFecha = (f)=>f ? String(f).slice(0, 10) : '';
const cuenta = (ctx, c)=>ctx?.cuentas?.[c.id] ?? {};
const CAMPOS_FILTRO = COLUMNAS_ABONADOS.filter((c)=>c.grupo === 'principal');
function filtrarPorCampo(filas, { campo = '', valor = '' } = {}, ctx = {}) {
    return filtrarPorColumnas(filas, campo ? {
        [campo]: valor
    } : {}, ctx);
}
function filtrarPorColumnas(filas, filtros = {}, ctx = {}) {
    const activos = Object.entries(filtros ?? {}).map(([clave, valor])=>[
            COLUMNAS_ABONADOS.find((c)=>c.clave === clave),
            String(valor ?? '').trim().toLowerCase()
        ]).filter(([col, q])=>col && q);
    if (!activos.length) return filas ?? [];
    return (filas ?? []).filter((c)=>activos.every(([col, q])=>{
            const texto = String(col.texto(c, ctx) ?? '').toLowerCase();
            return col.exacto ? texto === q : texto.includes(q);
        }));
}
const filtrosActivos = (filtros = {}, visibles = [])=>Object.entries(filtros ?? {}).filter(([clave, valor])=>visibles.includes(clave) && String(valor ?? '').trim()).length;
const COLUMNAS_POR_DEFECTO = COLUMNAS_ABONADOS.filter((c)=>c.grupo === 'principal').map((c)=>c.clave);
const necesitaCuentas = (visibles)=>COLUMNAS_ABONADOS.some((c)=>c.extra && visibles.includes(c.clave));
function resumirCuentas({ facturas = [], cobrosSinImputar = [] } = {}) {
    const out = {};
    for (const f of facturas){
        const c = out[f.client_id] ??= {
            a_favor: 0
        };
        const v = String(f.fecha_vencimiento ?? '').slice(0, 10);
        if (!v) continue;
        if (!c.ultimo_vencimiento || v > c.ultimo_vencimiento) c.ultimo_vencimiento = v;
        if (!c.proximo_vencimiento || v < c.proximo_vencimiento) c.proximo_vencimiento = v;
    }
    for (const p of cobrosSinImputar){
        const c = out[p.client_id] ??= {
            a_favor: 0
        };
        c.a_favor = Math.round((c.a_favor + Number(p.monto ?? 0)) * 100) / 100;
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
        valor: (c)=>String(c.estado_desde ?? '').slice(0, 10)
    },
    {
        titulo: 'Tiempo en el estado',
        valor: (c, ahora)=>antiguedad(c.estado_desde, ahora)
    },
    {
        titulo: 'Deuda',
        valor: (c)=>Number(c.saldo ?? 0).toFixed(2)
    },
    {
        titulo: 'Día de pago',
        valor: (c)=>c.dia_facturacion
    }
];
function aCSV(filas, ahora = new Date(), columnas = COLUMNAS_EXPORT) {
    const escapar = (v)=>{
        const s = String(v ?? '');
        return /[",;\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    return [
        columnas.map((c)=>escapar(c.titulo)).join(';'),
        ...filas.map((f)=>columnas.map((c)=>escapar(c.valor(f, ahora))).join(';'))
    ].join('\n');
}
function nombreArchivo({ modo, estado, meses, desde, hasta }, ahora = new Date()) {
    const hoy = ahora.toISOString().slice(0, 10);
    if (modo === 'rango') {
        return `abonados-${estado}-${String(desde).slice(0, 10) || 'inicio'}-a-${String(hasta).slice(0, 10) || hoy}.csv`;
    }
    return `abonados-${estado}-${meses}-meses-o-mas-${hoy}.csv`;
}
}),
"[project]/src/lib/ip.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const partes = String(ip ?? '').trim().split('.');
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
    const [dir, bitsTexto] = String(cidr ?? '').trim().split('/');
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
function libresDe(cidr, ocupadas = [], tope = 250) {
    const r = rangoDeCidr(cidr);
    if (!r) return [];
    const usadas = new Set();
    for (const o of ocupadas){
        // "10.0.0.5/24" y "10.0.0.5" son la misma dirección ocupada.
        const n = aEntero(String(o ?? '').split('/')[0]);
        if (n != null) usadas.add(n);
    }
    const libres = [];
    for(let n = r.desde; n <= r.hasta && libres.length < tope; n++){
        if (!usadas.has(n)) libres.push(aIp(n));
    }
    return libres;
}
}),
"[project]/src/components/clientes/ClienteForm.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClienteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-ssr] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useTablaDjango$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useTablaDjango.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/instalaciones.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Alta y edición de un cliente.
 *
 * Los datos de red (IP, PPPoE) vienen del router al importar. Los fiscales
 * —identificación, correo, dirección— no están en el MikroTik y hay que
 * cargarlos: sin identificación no se le puede emitir un comprobante.
 */ const TIPOS_ID = [
    {
        codigo: '05',
        label: 'Cédula'
    },
    {
        codigo: '04',
        label: 'RUC'
    },
    {
        codigo: '06',
        label: 'Pasaporte'
    },
    {
        codigo: '07',
        label: 'Consumidor final'
    },
    {
        codigo: '08',
        label: 'Identificación del exterior'
    }
];
const VACIO = {
    nombre: '',
    tipo_identificacion: '05',
    identificacion: '',
    email: '',
    telefono: '',
    direccion: '',
    referencia_servicio: '',
    tipo_conexion: 'ip',
    ip: '',
    red_ipv4: '',
    usuario_ppp: '',
    clave_ppp: '',
    velocidad_cruda: '',
    precio_mensual: '',
    dia_facturacion: '',
    router_id: '',
    plan_id: '',
    estado: 'activo'
};
const desdeFila = (c)=>({
        ...VACIO,
        ...Object.fromEntries(Object.entries(c).filter(([, v])=>v != null))
    });
/** 51200 → "50 Mbps". Es como el operador piensa la velocidad, no en kbps. */ /**
 * En el alta solo se ofrecen las redes de IP asignada a mano.
 *
 * Es la contracara del formulario: acá se carga una IP en un campo, y eso solo
 * tiene sentido en una red estática o de CGNAT. En un pool de PPPoE la
 * dirección la reparte el servidor cuando el abonado se autentica, así que
 * elegir una acá sería cargar un dato que el equipo va a ignorar.
 *
 * `nodos` queda afuera siempre: son redes de infraestructura, no de abonados.
 */ const REDES_DEL_ALTA = [
    'estatica',
    'cgnat'
];
const mbps = (kbps)=>kbps ? `${Math.round(kbps / 1000)} Mbps` : '—';
/** Longitud esperada según el tipo: cédula 10, RUC 13. */ const LARGO_ESPERADO = {
    '05': 10,
    '04': 13
};
function ClienteForm({ cliente = null, onGuardado, onCancelar }) {
    const editando = Boolean(cliente);
    const { filas: routers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useTablaDjango$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTablaDjango"])('routers_mikrotik');
    const { filas: planes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useTablaDjango$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTablaDjango"])('planes_velocidad', {
        orderBy: 'nombre',
        ascending: true
    });
    const { filas: redes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useTablaDjango$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTablaDjango"])('v_subredes', {
        orderBy: 'numero',
        ascending: true
    });
    // Las direcciones ya tomadas de la red elegida. Se piden al cambiar de red y
    // no al abrir: son cientos por red y casi siempre se usa una sola.
    const [ocupadas, setOcupadas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [otrosServicios, setOtrosServicios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>cliente ? desdeFila(cliente) : VACIO);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const set = (campo)=>(e)=>setForm((f)=>({
                    ...f,
                    [campo]: e.target.value
                }));
    // Hotspot se comporta como PPPoE para esto: los dos piden usuario y clave.
    const esPppoe = [
        'pppoe',
        'hotspot'
    ].includes(form.tipo_conexion);
    const redElegida = redes.find((r)=>r.cidr === form.red_ipv4) ?? null;
    const planElegido = planes.find((p)=>p.id === form.plan_id) ?? null;
    /**
   * Al cambiar de red se traen las direcciones que ya están tomadas.
   *
   * Se miran dos fuentes porque ninguna alcanza sola: `v_direcciones_ip` tiene
   * lo que el sistema ve en los equipos, y `clientes.ip` lo que alguien cargó a
   * mano. Una IP puede estar en la ficha de un abonado y todavía no aparecer en
   * el router —el alta se carga antes de ir a instalarla— y proponerla otra vez
   * termina en dos abonados con la misma dirección.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!redElegida) {
            setOcupadas([]);
            return;
        }
        let vivo = true;
        Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_direcciones_ip').select('ip_address').eq('subred_id', redElegida.id),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('clientes').select('ip').not('ip', 'is', null)
        ]).then(([a, b])=>{
            if (!vivo) return;
            setOcupadas([
                ...(a.data ?? []).map((x)=>x.ip_address),
                ...(b.data ?? []).map((x)=>x.ip)
            ]);
        });
        return ()=>{
            vivo = false;
        };
    }, [
        redElegida?.id
    ]);
    /**
   * Si esa cédula ya tiene servicios, avisarlo.
   *
   * Es lo que reemplaza al índice único que la base tenía hasta la migración
   * 192. Aquel rechazaba el alta y obligaba a inventar un "JUAN PEREZ-2" con la
   * cédula vacía — que después no se puede facturar bien ni firmar.
   *
   * Un aviso es mejor que un rechazo porque las dos situaciones existen y se
   * ven iguales desde acá: alguien está cargando el segundo servicio de una
   * persona —el local además de la casa— o está duplicando una ficha por error.
   * Quien carga sabe cuál de las dos es; la base no.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cedula = String(form.identificacion ?? '').replace(/\D/g, '');
        if (cedula.length < 5) {
            setOtrosServicios([]);
            return;
        }
        let vivo = true;
        // Se espera a que deje de escribir: sin esto sale una consulta por tecla.
        const reloj = setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('clientes').select('id, nombre, referencia_servicio, direccion, estado').eq('identificacion', cedula).neq('estado', 'baja').then(({ data })=>{
                if (!vivo) return;
                setOtrosServicios((data ?? []).filter((c)=>c.id !== cliente?.id));
            });
        }, 400);
        return ()=>{
            vivo = false;
            clearTimeout(reloj);
        };
    }, [
        form.identificacion,
        cliente?.id
    ]);
    const libres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>redElegida ? // proponérsela a un abonado deja a los dos peleando por la misma IP
        // —el cliente sin internet y, según el equipo, el segmento entero—.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["libresDe"])(redElegida.cidr, [
            ...ocupadas,
            redElegida.gateway
        ].filter(Boolean)) : [], [
        redElegida?.cidr,
        redElegida?.gateway,
        ocupadas
    ]);
    // `null` cuando no hay red elegida o la IP está vacía: no hay nada que objetar.
    const ipFueraDeRed = form.ip && redElegida ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perteneceA"])(form.ip, redElegida.cidr) === false : false;
    const precioDistinto = planElegido && form.precio_mensual !== '' && Math.abs(Number(form.precio_mensual) - Number(planElegido.precio)) > 0.005;
    const largo = LARGO_ESPERADO[form.tipo_identificacion];
    const idIncompleta = largo && form.identificacion && form.identificacion.replace(/\D/g, '').length !== largo;
    async function guardar(e) {
        e.preventDefault();
        setError(null);
        /**
     * Sin plan no se da de alta.
     *
     * Un abonado sin plan no es un abonado incompleto: es uno que después no
     * tiene velocidad para aplicar en el router, ni perfil PPPoE, y que en los
     * informes figura sin plan para siempre. El problema aparece semanas
     * después, cuando ya nadie recuerda ese alta.
     *
     * Se valida acá y no solo con el `required` del navegador porque las fichas
     * viejas pueden venir sin plan, y al editarlas el formulario tiene que
     * pedirlo igual.
     */ if (!form.plan_id) {
            setError(new Error('Elige un plan. Sin plan no se le puede aplicar velocidad ni facturar el precio de lista.'));
            return;
        }
        setGuardando(true);
        try {
            await onGuardado({
                nombre: form.nombre,
                tipo_identificacion: form.tipo_identificacion,
                identificacion: form.identificacion || null,
                email: form.email || null,
                telefono: form.telefono || null,
                direccion: form.direccion || null,
                referencia_servicio: form.referencia_servicio || null,
                tipo_conexion: form.tipo_conexion || 'ip',
                /**
         * Los datos de la otra forma de conexión no se guardan.
         *
         * Un abonado IPoE con usuario PPPoE cargado —o al revés— es una ficha
         * que parece completa y no funciona: la velocidad se aplica en el lugar
         * equivocado y nadie entiende por qué. Se guarda solo lo que corresponde
         * a lo que se eligió.
         */ ip: esPppoe ? null : form.ip || null,
                red_ipv4: esPppoe ? null : form.red_ipv4 || null,
                usuario_ppp: esPppoe ? form.usuario_ppp || null : null,
                clave_ppp: esPppoe ? form.clave_ppp || null : null,
                velocidad_cruda: form.velocidad_cruda || null,
                precio_mensual: form.precio_mensual ? Number(form.precio_mensual) : null,
                dia_facturacion: form.dia_facturacion ? Number(form.dia_facturacion) : null,
                router_id: form.router_id || null,
                plan_id: form.plan_id || null,
                estado: form.estado
            });
            if (!editando) setForm(VACIO);
        } catch (err) {
            setError(err);
        } finally{
            setGuardando(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: guardar,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        campo: "nombre",
                        label: "Nombre o razón social",
                        className: "sm:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            value: form.nombre,
                            onChange: set('nombre'),
                            placeholder: "JUAN PÉREZ",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        campo: "tipo_identificacion",
                        hint: "Cédula, RUC o pasaporte; define cómo sale la factura.",
                        label: "Tipo de identificación",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                            value: form.tipo_identificacion,
                            onChange: set('tipo_identificacion'),
                            children: TIPOS_ID.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: t.codigo,
                                    children: t.label
                                }, t.codigo, false, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        campo: "identificacion",
                        label: "Identificación",
                        hint: largo ? `${largo} dígitos` : 'Requerida para facturar',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            value: form.identificacion,
                            onChange: set('identificacion'),
                            placeholder: form.tipo_identificacion === '04' ? '1790012345001' : '1712345678'
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        campo: "email",
                        label: "Correo",
                        hint: "Ahí se envía la factura electrónica",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "Ej.: cliente@correo.com",
                            type: "email",
                            value: form.email,
                            onChange: set('email')
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        campo: "telefono",
                        label: "Teléfono",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "Ej.: 0991234567",
                            value: form.telefono,
                            onChange: set('telefono')
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        campo: "direccion",
                        label: "Dirección",
                        className: "sm:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "Ej.: Av. 9 de Octubre 123 y Boyacá",
                            value: form.direccion,
                            onChange: set('direccion')
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        campo: "referencia_servicio",
                        label: "Referencia del servicio",
                        hint: "Casa, Local, Bodega. Solo para distinguirlo por dentro: no sale en la factura.",
                        className: "sm:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            value: form.referencia_servicio,
                            onChange: set('referencia_servicio'),
                            placeholder: "Casa",
                            maxLength: 40
                        }, void 0, false, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            idIncompleta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: [
                    "La ",
                    form.tipo_identificacion === '04' ? 'RUC' : 'cédula',
                    " debería tener ",
                    largo,
                    " dígitos y tiene ",
                    form.identificacion.replace(/\D/g, '').length,
                    ". El SRI rechaza el comprobante si no coincide."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                lineNumber: 305,
                columnNumber: 9
            }, this),
            otrosServicios.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                children: [
                    "Esta cédula ya tiene ",
                    otrosServicios.length,
                    ' ',
                    otrosServicios.length === 1 ? 'servicio' : 'servicios',
                    ":",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-1 space-y-0.5",
                        children: otrosServicios.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: o.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, this),
                                    o.referencia_servicio ? ` · ${o.referencia_servicio}` : '',
                                    o.direccion ? ` · ${o.direccion}` : ''
                                ]
                            }, o.id, true, {
                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                lineNumber: 324,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 block text-xs",
                        children: "Si estás agregando otro servicio de la misma persona, está bien: ponle el nombre real y una referencia para distinguirlo. Si es un duplicado, cierra y edita el que ya existe."
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                lineNumber: 319,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-800 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500",
                        children: "Servicio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    precioDistinto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                planElegido.nombre,
                                " cuesta ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        "$",
                                        planElegido.precio
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 346,
                                    columnNumber: 43
                                }, this),
                                " y estás poniendo",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        "$",
                                        form.precio_mensual
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                ". Se le va a facturar lo que pusiste. Si es un acuerdo, déjalo escrito en Facturación → Descuento acordado."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this),
                    !esPppoe && ipFueraDeRed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                            tipo: "alerta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: form.ip
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this),
                                " no pertenece a ",
                                redElegida.cidr,
                                ". Revisa la red o la dirección: una IP fuera del bloque no navega y el problema aparece recién en la instalación."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                campo: "tipo_conexion",
                                label: "Tipo de conexión",
                                hint: "Define qué datos hacen falta abajo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: form.tipo_conexion,
                                    onChange: set('tipo_conexion'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "ip",
                                            children: "IPoE (IP directa, fija o por DHCP)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "pppoe",
                                            children: "PPPoE (usuario y clave)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "hotspot",
                                            children: "Hotspot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                campo: "router_id",
                                hint: "El MikroTik que le da servicio.",
                                label: "Router",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: form.router_id,
                                    onChange: set('router_id'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— sin asignar —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        routers.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: r.id,
                                                children: r.nombre
                                            }, r.id, false, {
                                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            !esPppoe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "red_ipv4",
                                        label: "Red IPv4",
                                        hint: "De las cargadas en Red → Redes IPv4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                            value: form.red_ipv4,
                                            onChange: (e)=>setForm((f)=>({
                                                        ...f,
                                                        red_ipv4: e.target.value,
                                                        ip: ''
                                                    })),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "— sin definir —"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                    lineNumber: 393,
                                                    columnNumber: 15
                                                }, this),
                                                redes.filter((r)=>REDES_DEL_ALTA.includes(r.tipo)).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: r.cidr,
                                                        children: [
                                                            r.nombre,
                                                            " · ",
                                                            r.cidr,
                                                            " (",
                                                            r.asignadas ?? 0,
                                                            "/",
                                                            r.utilizables ?? 0,
                                                            ")"
                                                        ]
                                                    }, r.id, true, {
                                                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                        lineNumber: 397,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 389,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                        lineNumber: 388,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "ip",
                                        label: "IP",
                                        hint: redElegida ? `${libres.length}${libres.length === 250 ? '+' : ''} libres en ${redElegida.cidr}` : 'Elige una red para ver las libres',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    list: "ips-libres",
                                                    value: form.ip,
                                                    onChange: set('ip'),
                                                    placeholder: redElegida ? libres[0] : '172.16.10.5',
                                                    className: "font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                    lineNumber: 416,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                    id: "ips-libres",
                                                    children: libres.map((ip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: ip
                                                        }, ip, false, {
                                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                            lineNumber: 425,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                    lineNumber: 423,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variante: "secundario",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"],
                                                    title: "Poner la primera dirección libre de esta red",
                                                    disabled: !libres.length,
                                                    onClick: ()=>setForm((f)=>({
                                                                ...f,
                                                                ip: libres[0]
                                                            })),
                                                    children: "Sugerir"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                    lineNumber: 428,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 412,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                        lineNumber: 404,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true),
                            esPppoe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "usuario_ppp",
                                        label: "Usuario PPPoE",
                                        hint: "Generar lo propone a partir del nombre",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "Ej.: jperez01",
                                                    value: form.usuario_ppp,
                                                    onChange: set('usuario_ppp'),
                                                    className: "font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                    lineNumber: 451,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variante: "secundario",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"],
                                                    title: "Proponer usuario y contraseña",
                                                    disabled: !form.nombre.trim(),
                                                    onClick: ()=>setForm((f)=>({
                                                                ...f,
                                                                usuario_ppp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usuarioSugerido"])({
                                                                    nombre: f.nombre,
                                                                    identificacion: f.identificacion
                                                                }),
                                                                clave_ppp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["claveSugerida"])()
                                                            })),
                                                    children: "Generar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                    lineNumber: 456,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 450,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                        lineNumber: 446,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        campo: "clave_ppp",
                                        label: "Contraseña PPPoE",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Ej.: clave123",
                                            value: form.clave_ppp,
                                            onChange: set('clave_ppp'),
                                            autoComplete: "off",
                                            className: "font-mono"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 485,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                        lineNumber: 484,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                campo: "plan_id",
                                label: "Plan *",
                                hint: "De él salen la velocidad y el precio",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: form.plan_id,
                                    required: true,
                                    onChange: (e)=>{
                                        const id = e.target.value;
                                        const p = planes.find((x)=>x.id === id);
                                        setForm((f)=>({
                                                ...f,
                                                plan_id: id,
                                                // El precio se completa con el del plan, salvo que alguien ya
                                                // haya escrito uno: ahí manda lo que se acordó con el abonado.
                                                precio_mensual: f.precio_mensual === '' && p ? String(p.precio) : f.precio_mensual
                                            }));
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— elegir —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 511,
                                            columnNumber: 15
                                        }, this),
                                        planes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: [
                                                    p.nombre,
                                                    " — ",
                                                    mbps(p.bajada_kbps),
                                                    " — $",
                                                    p.precio
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                campo: "precio_mensual",
                                label: "Precio mensual",
                                hint: "Sin IVA. Se completa con el del plan",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 25.00",
                                    type: "number",
                                    step: "0.01",
                                    value: form.precio_mensual,
                                    onChange: set('precio_mensual')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                campo: "dia_facturacion",
                                label: "Día de facturación",
                                hint: "1 a 28",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ej.: 5",
                                    type: "number",
                                    min: 1,
                                    max: 28,
                                    value: form.dia_facturacion,
                                    onChange: set('dia_facturacion')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                lineNumber: 529,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                campo: "estado",
                                label: "Estado",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: form.estado,
                                    onChange: set('estado'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "activo",
                                            children: "activo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 541,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "cortado",
                                            children: "cortado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 542,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "suspendido",
                                            children: "suspendido"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "baja",
                                            children: "baja"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                lineNumber: 550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2",
                children: [
                    onCancelar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variante: "fantasma",
                        onClick: onCancelar,
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        variante: "primario",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
                        cargando: guardando,
                        children: editando ? 'Guardar cambios' : 'Crear cliente'
                    }, void 0, false, {
                        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                        lineNumber: 558,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/clientes/ClienteForm.jsx",
                lineNumber: 552,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/clientes/ClienteForm.jsx",
        lineNumber: 245,
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
"[project]/src/crm-pages/ClientesPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/columns-3.js [app-ssr] (ecmascript) <export default as Columns3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-plus.js [app-ssr] (ecmascript) <export default as ListPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rows$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rows3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rows-3.js [app-ssr] (ecmascript) <export default as Rows3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useTablaDjango$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useTablaDjango.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/abonados.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$ClienteForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/clientes/ClienteForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ConPermiso.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
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
 * El estado del abonado, como se lee.
 *
 * `baja` se muestra "retirado" porque es la palabra que se usa hablando: el
 * abonado se retiró, o se le retiró el equipo. En la base sigue siendo `baja`,
 * que es lo que escriben las funciones y lo que miran las políticas — cambiar
 * el valor guardado por una cuestión de vocabulario obligaría a tocar media
 * docena de migraciones para no ganar nada.
 */ const ESTADO = {
    activo: {
        label: 'activo',
        color: 'verde'
    },
    cortado: {
        label: 'cortado',
        color: 'rojo'
    },
    suspendido: {
        label: 'suspendido',
        color: 'ambar'
    },
    baja: {
        label: 'retirado',
        color: 'gris'
    }
};
const RECUERDO = 'abonados.columnas';
const RECUERDO_PAGINA = 'abonados.porPagina';
/** Sin tope. No es 0 ni Infinity para que no se confunda con "ninguno". */ const TODOS = -1;
const CUANTOS = [
    {
        valor: 15,
        label: '15 registros'
    },
    {
        valor: 25,
        label: '25 registros'
    },
    {
        valor: 50,
        label: '50 registros'
    },
    {
        valor: 100,
        label: '100 registros'
    },
    {
        valor: 200,
        label: '200 registros'
    },
    {
        valor: 300,
        label: '300 registros'
    },
    {
        valor: TODOS,
        label: 'Mostrar todos'
    }
];
function ClientesPage() {
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const { filas: clientes, cargando, error, recargar, setError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useTablaDjango$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTablaDjango"])('v_clientes_ficha', {
        orderBy: 'codigo',
        ascending: true
    });
    const [busqueda, setBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [filtroEstado, setFiltroEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    /**
   * "Solo deuda vencida", encendible desde la URL.
   *
   * El panel de inicio enlaza acá con `?deuda=vencida` para que el KPI de
   * cartera abra exactamente a la gente que contó: un número que obliga a
   * volver a filtrar a mano lo que ya decía no sirve para decidir, y uno que
   * abre una lista distinta de la que contó es peor todavía.
   *
   * Se siembra al arrancar y después vive en la pantalla, como el resto de los
   * filtros. Y tiene interruptor a la vista a propósito: un filtro que solo se
   * enciende por la URL deja a alguien mirando una lista recortada sin nada en
   * pantalla que explique por qué faltan abonados ni cómo traerlos de vuelta.
   *
   * `si` se sigue aceptando: es como se llamaba antes y puede haber un enlace
   * guardado. Cuesta una comparación y evita que ese enlace abra sin filtro.
   */ const [params] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [soloVencida, setSoloVencida] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>[
            'vencida',
            'si'
        ].includes(params.get('deuda')));
    /**
   * Quiénes deben algo vencido.
   *
   * Es una consulta aparte porque el dato no está en la ficha del abonado: la
   * ficha trae el total por cobrar —todas sus facturas con saldo, hayan
   * vencido o no— y no distingue lo uno de lo otro. Para saber quién está
   * vencido hay que mirar las fechas de vencimiento, que viven en las
   * facturas.
   *
   * Solo se pide con el filtro encendido. Son las facturas impagas de todos
   * los abonados; traerlas siempre, para un filtro que la mayoría de las veces
   * está apagado, es un viaje al pedo — el mismo criterio que ya usan las
   * cuentas de acá abajo.
   *
   * `null` significa "todavía no llegó", y es distinto de un conjunto vacío:
   * vacío quiere decir que nadie debe nada vencido.
   */ const [vencidos, setVencidos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!soloVencida) return undefined;
        let vigente = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_facturas_por_cobrar').select('client_id, saldo, fecha_vencimiento').then(({ data })=>vigente && setVencidos((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientesConVencido"])(data ?? [])));
        return ()=>{
            vigente = false;
        };
    }, [
        soloVencida
    ]);
    const [enFormulario, setEnFormulario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exportando, setExportando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* Dos filtros que se suman, y son dos cosas distintas:

     · La fila de casillas debajo de los encabezados está SIEMPRE. Es la de
       todos los días: se busca donde se está mirando.
     · El panel de "Seleccionar campo" se abre con el botón. Sirve para filtrar
       por una columna que no se tiene puesta, sin tener que encenderla. */ const [filtrosCol, setFiltrosCol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [filtroAbierto, setFiltroAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campo, setCampo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [valor, setValor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [pagina, setPagina] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [porPagina, setPorPagina] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const n = Number(localStorage.getItem(RECUERDO_PAGINA));
        return CUANTOS.some((c)=>c.valor === n) ? n : 15;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem(RECUERDO_PAGINA, String(porPagina));
        } catch  {
        // Igual que con las columnas: no poder recordarlo no rompe la pantalla.
        }
    }, [
        porPagina
    ]);
    /* La elección de columnas se recuerda: quien arma su tabla para cobrar no
     tiene por qué volver a armarla cada mañana. */ const [visibles, setVisibles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        try {
            const guardado = JSON.parse(localStorage.getItem(RECUERDO) ?? 'null');
            if (Array.isArray(guardado) && guardado.length) return guardado;
        } catch  {
        // Un localStorage corrupto no puede dejar la pantalla sin tabla.
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLUMNAS_POR_DEFECTO"];
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem(RECUERDO, JSON.stringify(visibles));
        } catch  {
        // Sin espacio o en modo privado: la tabla igual funciona, no se recuerda.
        }
    }, [
        visibles
    ]);
    /* Las cuentas solo se piden si hay alguna columna que las use. Traer las
     facturas de todos para una columna apagada sería un viaje al pedo. */ const [cuentas, setCuentas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const hacenFalta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["necesitaCuentas"])(visibles);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hacenFalta) return;
        let vigente = true;
        Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_facturas_por_cobrar').select('client_id, fecha_vencimiento'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('pagos').select('client_id, monto').is('factura_id', null).eq('anulado', false)
        ]).then(([f, p])=>{
            if (!vigente) return;
            setCuentas((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumirCuentas"])({
                facturas: f.data ?? [],
                cobrosSinImputar: p.data ?? []
            }));
        });
        return ()=>{
            vigente = false;
        };
    }, [
        hacenFalta
    ]);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            cuentas,
            ahora: new Date()
        }), [
        cuentas
    ]);
    /* Solo se filtra por las casillas de columnas que están a la vista. Si
     alguien escribe en "Coordenadas" y después apaga esa columna, seguir
     filtrando por ella dejaría una lista recortada por algo que ya no se ve en
     ninguna parte de la pantalla. */ const filtrosVigentes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.fromEntries(Object.entries(filtrosCol).filter(([k])=>visibles.includes(k))), [
        filtrosCol,
        visibles
    ]);
    const filas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filtrarPorCampo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filtrarPorColumnas"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filtrarAbonados"])(clientes, {
            busqueda,
            estado: filtroEstado,
            vencidos: soloVencida ? vencidos : null
        }), filtrosVigentes, ctx), {
            campo,
            valor
        }, ctx), [
        clientes,
        busqueda,
        filtroEstado,
        soloVencida,
        vencidos,
        filtrosVigentes,
        campo,
        valor,
        ctx
    ]);
    /* El orden lo manda el catálogo, no el orden en que se marcaron: si no, la
     tabla se reordena sola cada vez que alguien enciende una columna. */ const columnas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLUMNAS_ABONADOS"].filter((c)=>visibles.includes(c.clave)), [
        visibles
    ]);
    /**
   * Cuántos se muestran y en qué página.
   *
   * Volver a la primera cada vez que cambia lo que se está mirando no es un
   * detalle: quedarse en la página 4 de un filtro que ahora devuelve dos
   * abonados muestra una tabla vacía, y eso se lee como "no hay ninguno".
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setPagina(1), [
        busqueda,
        filtroEstado,
        soloVencida,
        filtrosVigentes,
        campo,
        valor,
        porPagina
    ]);
    /* Y si la lista se achicó por debajo de la página en la que estábamos —se
     borró un abonado, cambió el estado de varios— se retrocede hasta la última
     que existe. Si no, la tabla queda vacía sin motivo aparente. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (porPagina === TODOS) return;
        const ultima = Math.max(1, Math.ceil(filas.length / porPagina));
        setPagina((p)=>Math.min(p, ultima));
    }, [
        filas.length,
        porPagina
    ]);
    const enPantalla = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (porPagina === TODOS) return filas;
        const desde = (pagina - 1) * porPagina;
        return filas.slice(desde, desde + porPagina);
    }, [
        filas,
        pagina,
        porPagina
    ]);
    const contar = (estado)=>clientes.filter((c)=>c.estado === estado).length;
    /* Solo cuentan las de las columnas que están a la vista: una casilla llena
     bajo una columna que después se apagó no filtra nada, y contarla haría
     prometer un filtro que no existe. */ const activos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filtrosActivos"])(filtrosCol, visibles);
    const limpiarFiltro = ()=>setFiltrosCol({});
    const limpiarPanel = ()=>{
        setCampo('');
        setValor('');
    };
    const escribir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (accion)=>{
        try {
            const { error: err } = await accion();
            if (err) throw err;
            await recargar();
        } catch (err) {
            setError(err);
        }
    }, [
        recargar,
        setError
    ]);
    const borrar = async (c)=>await confirmar(`¿Eliminar a "${c.nombre}" del sistema?`) && escribir(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('clientes').delete().eq('id', c.id));
    const alternar = (clave)=>setVisibles((v)=>v.includes(clave) ? v.filter((x)=>x !== clave) : [
                ...v,
                clave
            ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "t-titulo text-lg font-bold text-slate-100",
                                children: "Clientes"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Abonados registrados en el sistema"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                                onClick: ()=>setExportando(true),
                                children: "Exportar"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                permiso: "clientes.importar",
                                envezDe: null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                    to: "/clientes/importar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"],
                                        children: "Importar de otro sistema"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                permiso: "clientes.crear",
                                envezDe: null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "primario",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                                    onClick: ()=>setEnFormulario({}),
                                    children: "Nuevo cliente"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            cargando || soloVencida && vencidos === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 375,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "t-kpis",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stat"], {
                                cargando: cargando,
                                label: "Total",
                                valor: clientes.length,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stat"], {
                                cargando: cargando,
                                label: "Activos",
                                valor: contar('activo'),
                                color: "text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stat"], {
                                cargando: cargando,
                                label: "Cortados",
                                valor: contar('cortado'),
                                color: "text-red-400",
                                tono: "critico"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stat"], {
                                cargando: cargando,
                                label: "Suspendidos",
                                valor: contar('suspendido'),
                                color: "text-amber-400",
                                tono: "aviso"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this),
                    clientes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                        children: [
                            "Todavía no hay clientes. Puedes traerlos desde un MikroTik en la sección",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Importar"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this),
                            ", que los busca en los PPPoE, las colas simples, los leases DHCP y las listas de cortes."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 386,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Listado",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        subtitle: filas.length === clientes.length ? `${clientes.length} abonados` : `${filas.length} de ${clientes.length}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex flex-wrap items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuMostrar, {
                                        valor: porPagina,
                                        onElegir: setPorPagina
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuColumnas, {
                                        titulo: "Columnas",
                                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns3$3e$__["Columns3"],
                                        opciones: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLUMNAS_ABONADOS"].filter((c)=>c.grupo === 'principal'),
                                        visibles: visibles,
                                        onAlternar: alternar
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuColumnas, {
                                        titulo: "Más columnas",
                                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListPlus$3e$__["ListPlus"],
                                        opciones: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLUMNAS_ABONADOS"].filter((c)=>c.grupo === 'extra'),
                                        visibles: visibles,
                                        onAlternar: alternar,
                                        marcado: true,
                                        pie: "Las de facturación se calculan con las facturas pendientes y los cobros sin imputar."
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconoBoton, {
                                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"],
                                        etiqueta: "Filtrar",
                                        ayuda: "filtrar por una columna que no tienes puesta",
                                        activo: filtroAbierto,
                                        marcado: Boolean(campo && valor),
                                        onClick: ()=>setFiltroAbierto((a)=>!a)
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 425,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-28 shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                            value: filtroEstado,
                                            onChange: (e)=>setFiltroEstado(e.target.value),
                                            className: "py-1.5 text-xs",
                                            title: "Mostrar solo los abonados en este estado",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Todos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "activo",
                                                    children: "Activos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                    lineNumber: 450,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "cortado",
                                                    children: "Cortados"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                    lineNumber: 451,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "suspendido",
                                                    children: "Suspendidos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                    lineNumber: 452,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "baja",
                                                    children: "Retirados"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                    lineNumber: 453,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 443,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSoloVencida((v)=>!v),
                                        "aria-pressed": soloVencida,
                                        title: "Dejar solo los abonados con al menos una factura vencida e impaga",
                                        className: `flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${soloVencida ? 'bg-[#FEF2F2] text-red-400' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                lineNumber: 475,
                                                columnNumber: 19
                                            }, this),
                                            "Deuda vencida"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiltrosGuardados"], {
                                        clave: "clientes",
                                        actual: {
                                            busqueda,
                                            filtroEstado,
                                            soloVencida,
                                            filtrosCol,
                                            campo,
                                            valor
                                        },
                                        onAplicar: (f)=>{
                                            setBusqueda(f.busqueda ?? '');
                                            setFiltroEstado(f.filtroEstado ?? '');
                                            setSoloVencida(Boolean(f.soloVencida));
                                            setFiltrosCol(f.filtrosCol ?? {});
                                            setCampo(f.campo ?? '');
                                            setValor(f.valor ?? '');
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 479,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto w-56 shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            value: busqueda,
                                            onChange: (e)=>setBusqueda(e.target.value),
                                            placeholder: "Nombre, cédula, ID, IP…",
                                            className: "py-1.5 text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 493,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 405,
                                columnNumber: 15
                            }, this),
                            filtroAbierto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex flex-wrap items-end gap-2 t-panel p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "w-48 text-[11px] uppercase tracking-wide text-slate-500",
                                        children: [
                                            "Seleccionar campo",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: campo,
                                                onChange: (e)=>setCampo(e.target.value),
                                                className: "mt-1 py-1.5 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "— elige uno —"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                        lineNumber: 514,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAMPOS_FILTRO"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c.clave,
                                                            children: c.titulo
                                                        }, c.clave, false, {
                                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                            lineNumber: 516,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                lineNumber: 509,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 507,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "w-56 text-[11px] uppercase tracking-wide text-slate-500",
                                        children: [
                                            "Buscar",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: valor,
                                                onChange: (e)=>setValor(e.target.value),
                                                disabled: !campo,
                                                placeholder: campo ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAMPOS_FILTRO"].find((c)=>c.clave === campo)?.titulo}…` : 'Elige primero el campo',
                                                className: "mt-1 py-1.5 text-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                lineNumber: 525,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 523,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconoBoton, {
                                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
                                        etiqueta: "Resetear filtro",
                                        disabled: !campo && !valor,
                                        onClick: limpiarPanel,
                                        className: "mb-px"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 538,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 506,
                                columnNumber: 17
                            }, this) : /* Cerrado pero filtrando: sin esto la lista queda recortada por
                   algo que no se ve en ninguna parte de la pantalla. */ campo && valor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center gap-2 text-xs text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-sky-300",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAMPOS_FILTRO"].find((c)=>c.clave === campo)?.titulo,
                                            ": ",
                                            valor,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: limpiarPanel,
                                                className: "text-sky-300/70 hover:text-sky-200",
                                                title: "Quitar el filtro",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                    lineNumber: 560,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                lineNumber: 554,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 552,
                                        columnNumber: 21
                                    }, this),
                                    "filtro activo con el panel cerrado"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 551,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                columnas: [
                                    ...columnas.map((c)=>c.titulo),
                                    ''
                                ],
                                filas: enPantalla,
                                vacio: "Ningún abonado coincide con el filtro.",
                                bajoEncabezado: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        columnas.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-1.5 font-normal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: filtrosCol[col.clave] ?? '',
                                                    onChange: (e)=>setFiltrosCol((f)=>({
                                                                ...f,
                                                                [col.clave]: e.target.value
                                                            })),
                                                    placeholder: "Busca",
                                                    title: `Buscar en ${col.titulo}${col.exacto ? ' (coincidencia exacta)' : ''}`,
                                                    className: "w-full min-w-[4.5rem] rounded border border-slate-700 bg-[#F6F8FB] px-1.5 py-1 text-[11px] font-normal normal-case tracking-normal text-slate-100 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                    lineNumber: 576,
                                                    columnNumber: 27
                                                }, void 0)
                                            }, col.clave, false, {
                                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                lineNumber: 575,
                                                columnNumber: 25
                                            }, void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-2 py-1.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconoBoton, {
                                                icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
                                                etiqueta: "Limpiar las búsquedas de las columnas",
                                                disabled: activos === 0,
                                                onClick: limpiarFiltro,
                                                className: "!p-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                                lineNumber: 588,
                                                columnNumber: 23
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 587,
                                            columnNumber: 21
                                        }, void 0)
                                    ]
                                }, void 0, true),
                                renderFila: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Fila, {
                                        c: c,
                                        columnas: columnas,
                                        ctx: ctx,
                                        onBorrar: borrar,
                                        onEditar: setEnFormulario
                                    }, c.id, false, {
                                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                        lineNumber: 599,
                                        columnNumber: 19
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 568,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Paginador, {
                                total: filas.length,
                                pagina: pagina,
                                porPagina: porPagina,
                                onPagina: setPagina
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 610,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-[11px] text-slate-500",
                                children: "El estado se muestra al lado del nombre y acá no se edita: lo mueven los cortes, el alta y la baja, que son las pantallas donde además queda escrito el motivo."
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 617,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 392,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: enFormulario !== null,
                titulo: enFormulario?.id ? `Editar ${enFormulario.nombre}` : 'Nuevo cliente',
                onCerrar: ()=>setEnFormulario(null),
                ancho: "max-w-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$clientes$2f$ClienteForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    cliente: enFormulario?.id ? enFormulario : null,
                    onCancelar: ()=>setEnFormulario(null),
                    onGuardado: async (datos)=>{
                        // El error se lanza para que el formulario lo muestre adentro y quede
                        // abierto con lo cargado. Antes se cerraba igual y lo escrito se
                        // perdía, con el aviso detrás del modal.
                        const { error: err } = await (enFormulario?.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('clientes').update(datos).eq('id', enFormulario.id) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('clientes').insert(datos));
                        if (err) throw err;
                        await recargar();
                        setEnFormulario(null);
                    }
                }, enFormulario?.id ?? 'nuevo', false, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 626,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExportarAbonados, {
                abierto: exportando,
                clientes: clientes,
                onCerrar: ()=>setExportando(false)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 650,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 347,
        columnNumber: 5
    }, this);
}
// ---------------------------------------------------------------------------
/**
 * Un botón de barra: solo el icono, con el nombre en el `title`.
 *
 * El `aria-label` va aparte del `title` a propósito. El title es para el mouse;
 * el aria-label es lo que lee un lector de pantalla, que no tiene mouse con el
 * que descubrir para qué sirve un dibujo.
 */ function IconoBoton({ icono: Icono, etiqueta, ayuda, activo, marcado, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        title: ayuda ? `${etiqueta} — ${ayuda}` : etiqueta,
        "aria-label": etiqueta,
        ...props,
        className: `relative rounded-lg border p-2 transition disabled:cursor-not-allowed disabled:opacity-40 ${activo ? 'border-sky-500/40 bg-sky-500/15 text-sky-300' : 'border-slate-700 bg-slate-800 text-slate-200 enabled:hover:bg-slate-700'} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 681,
                columnNumber: 7
            }, this),
            marcado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-sky-400"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 682,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 670,
        columnNumber: 5
    }, this);
}
/**
 * Un botón que despliega un panel.
 *
 * Se cierra al hacer clic afuera y con Escape. Sin eso queda abierto tapando la
 * tabla, que es justo lo que se está tratando de mirar.
 *
 * El panel se ancla a la izquierda del botón: estos viven pegados al borde
 * izquierdo de la pantalla, y anclarlo a la derecha lo mandaría afuera.
 */ function Desplegable({ etiqueta, ayuda, icono: Icono, marcado, ancho = 'w-64', children }) {
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const caja = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!abierto) return;
        const afuera = (e)=>!caja.current?.contains(e.target) && setAbierto(false);
        const escape = (e)=>e.key === 'Escape' && setAbierto(false);
        document.addEventListener('mousedown', afuera);
        document.addEventListener('keydown', escape);
        return ()=>{
            document.removeEventListener('mousedown', afuera);
            document.removeEventListener('keydown', escape);
        };
    }, [
        abierto
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: caja,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                title: ayuda ? `${etiqueta} — ${ayuda}` : etiqueta,
                "aria-label": etiqueta,
                onClick: ()=>setAbierto((a)=>!a),
                className: `relative rounded-lg border p-2 transition ${abierto ? 'border-sky-500/40 bg-sky-500/15 text-sky-300' : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this),
                    marcado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-sky-400"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 732,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 717,
                columnNumber: 7
            }, this),
            abierto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: (e)=>e.target.closest('button') && setAbierto(false),
                className: `absolute left-0 z-30 mt-1 max-h-[70vh] ${ancho} overflow-y-auto t-card p-1.5 shadow-xl`,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 737,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 713,
        columnNumber: 5
    }, this);
}
/** Cuántos abonados se muestran de una vez. */ function MenuMostrar({ valor, onElegir }) {
    const actual = CUANTOS.find((c)=>c.valor === valor);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Desplegable, {
        etiqueta: "Mostrar",
        ayuda: `cuántos por página (${actual?.label ?? ''})`,
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rows$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rows3$3e$__["Rows3"],
        ancho: "w-44",
        children: CUANTOS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onElegir(c.valor),
                className: `flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs transition hover:bg-slate-800 ${c.valor === valor ? 'text-sky-300' : 'text-slate-300'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-3",
                        children: c.valor === valor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 11
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 768,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 768,
                        columnNumber: 11
                    }, this),
                    c.label
                ]
            }, c.valor, true, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 760,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 753,
        columnNumber: 5
    }, this);
}
/** Qué columnas se ven. */ function MenuColumnas({ titulo, icono, opciones, visibles, onAlternar, pie, marcado }) {
    const encendidas = opciones.filter((o)=>visibles.includes(o.clave)).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Desplegable, {
        etiqueta: titulo,
        ayuda: `${encendidas} de ${opciones.length} puestas`,
        icono: icono,
        marcado: marcado ? encendidas > 0 : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: (e)=>e.stopPropagation(),
            children: [
                opciones.map((o)=>{
                    const puesta = visibles.includes(o.clave);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: o.fija,
                        onClick: ()=>onAlternar(o.clave),
                        title: o.fija ? 'El nombre no se puede sacar: es por donde se abre la ficha.' : undefined,
                        className: `flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs transition ${o.fija ? 'cursor-default text-slate-500' : 'text-slate-300 hover:bg-slate-800'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex h-4 w-4 shrink-0 items-center justify-center rounded border ${puesta ? 'border-sky-500 bg-sky-500/20 text-sky-300' : 'border-slate-700'}`,
                                children: puesta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 11
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 806,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 801,
                                columnNumber: 17
                            }, this),
                            o.titulo
                        ]
                    }, o.clave, true, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 791,
                        columnNumber: 15
                    }, this);
                }),
                pie && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 border-t border-slate-800 px-2 pt-1.5 text-[10px] leading-snug text-slate-500",
                    children: pie
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 813,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 787,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 781,
        columnNumber: 5
    }, this);
}
// ---------------------------------------------------------------------------
/**
 * Cuántos se están viendo y de cuántos.
 *
 * La frase completa —"del 1 al 15 de un total de 87"— y no solo el número de
 * página: es lo que evita que alguien mire quince filas y crea que ese es todo
 * su padrón.
 *
 * Con pocas páginas se listan todas; con muchas se muestra una ventana
 * alrededor de la actual, porque doscientos botones no ayudan a nadie.
 */ function Paginador({ total, pagina, porPagina, onPagina }) {
    if (porPagina === TODOS || total === 0) {
        return total === 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-[11px] text-slate-500",
            children: [
                "Mostrando los ",
                total,
                " abonados."
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 837,
            columnNumber: 7
        }, this);
    }
    const paginas = Math.max(1, Math.ceil(total / porPagina));
    const desde = (pagina - 1) * porPagina + 1;
    const hasta = Math.min(pagina * porPagina, total);
    const ventana = [];
    for(let p = Math.max(1, pagina - 2); p <= Math.min(paginas, pagina + 2); p++)ventana.push(p);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 flex flex-wrap items-center justify-between gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-slate-500",
                children: [
                    "Mostrando del ",
                    desde,
                    " al ",
                    hasta,
                    " de un total de ",
                    total
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 850,
                columnNumber: 7
            }, this),
            paginas > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Paso, {
                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"],
                        disabled: pagina === 1,
                        onClick: ()=>onPagina(pagina - 1)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 856,
                        columnNumber: 11
                    }, this),
                    ventana[0] > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumPagina, {
                                n: 1,
                                actual: pagina,
                                onClick: onPagina
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 859,
                                columnNumber: 15
                            }, this),
                            ventana[0] > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1 text-slate-600",
                                children: "…"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 860,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true),
                    ventana.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumPagina, {
                            n: p,
                            actual: pagina,
                            onClick: onPagina
                        }, p, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 864,
                            columnNumber: 13
                        }, this)),
                    ventana.at(-1) < paginas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            ventana.at(-1) < paginas - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1 text-slate-600",
                                children: "…"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 868,
                                columnNumber: 48
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumPagina, {
                                n: paginas,
                                actual: pagina,
                                onClick: onPagina
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 869,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Paso, {
                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"],
                        disabled: pagina === paginas,
                        onClick: ()=>onPagina(pagina + 1)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 872,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 855,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 849,
        columnNumber: 5
    }, this);
}
const NumPagina = ({ n, actual, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>onClick(n),
        className: `min-w-[1.75rem] rounded-lg px-2 py-1 text-xs transition ${n === actual ? 'bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30' : 'text-slate-400 hover:bg-slate-800'}`,
        children: n
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 884,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Paso = ({ icono: Icono, disabled, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        disabled: disabled,
        onClick: onClick,
        className: "rounded-lg p-1.5 text-slate-400 transition enabled:hover:bg-slate-800 disabled:opacity-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 904,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 898,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// ---------------------------------------------------------------------------
function Fila({ c, columnas, ctx, onBorrar, onEditar }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "text-slate-300",
        children: [
            columnas.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: [
                        'px-3 py-2',
                        col.mono ? 'font-mono text-[11px]' : 'text-xs',
                        col.centro ? 'text-center' : '',
                        col.derecha ? 'text-right' : '',
                        col.ancho ? 'max-w-[16rem] truncate' : ''
                    ].join(' '),
                    title: col.ancho ? col.texto(c, ctx) : undefined,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Celda, {
                        col: col,
                        c: c,
                        ctx: ctx
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                        lineNumber: 925,
                        columnNumber: 11
                    }, this)
                }, col.clave, false, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 914,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-3 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            to: `/clientes/${c.id}`,
                            className: "rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200",
                            title: "Abrir la ficha completa",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 936,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 931,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            permiso: "clientes.editar",
                            envezDe: null,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
                                title: "Editar",
                                onClick: ()=>onEditar(c)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 939,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 938,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ConPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            permiso: "clientes.eliminar",
                            envezDe: null,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "fantasma",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                                onClick: ()=>onBorrar(c)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                lineNumber: 942,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 941,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 930,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                lineNumber: 929,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 912,
        columnNumber: 5
    }, this);
}
/**
 * Lo que se pinta en cada celda.
 *
 * Casi todas son el texto que ya calculó el catálogo. Las que no lo son están
 * acá y no allá porque son JSX: el nombre abre la ficha, la IP abre el equipo,
 * el estado y el enlace son etiquetas de color, y la deuda se pinta en rojo
 * solo si la hay.
 */ function Celda({ col, c, ctx }) {
    const texto = col.texto(c, ctx);
    if (col.clave === 'nombre') {
        const e = ESTADO[c.estado] ?? {
            label: c.estado,
            color: 'gris'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                    to: `/clientes/${c.id}`,
                    className: "font-medium text-slate-100 hover:text-sky-400 hover:underline",
                    children: c.nombre
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 965,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    color: e.color,
                    children: e.label
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 971,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 964,
            columnNumber: 7
        }, this);
    }
    // La IP abre el equipo del abonado en otra pestaña. Es la razón por la que
    // esta columna se mira: entrar a la ONT o al router del cliente.
    if (col.clave === 'ip') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnlaceIp"], {
        ip: c.ip
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 978,
        columnNumber: 34
    }, this);
    if (col.clave === 'estatus') {
        const link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enlace"])(c);
        return link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            color: link.color,
            children: link.texto
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 982,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600",
            children: "—"
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 982,
            columnNumber: 68
        }, this);
    }
    if (col.clave === 'cedula' && !texto) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-amber-400",
            title: "Sin identificación no se puede facturar",
            children: "falta"
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 987,
            columnNumber: 7
        }, this);
    }
    if ((col.clave === 'deuda' || col.clave === 'total_cobrar') && Number(texto) > 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-red-400",
            children: texto
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 994,
            columnNumber: 12
        }, this);
    }
    if (col.clave === 'fecha_suspendido' && texto) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            title: `Lleva ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["antiguedad"])(c.estado_desde, ctx.ahora)}`,
            children: [
                texto,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-1 text-slate-600",
                    children: [
                        "(",
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["antiguedad"])(c.estado_desde, ctx.ahora),
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 1001,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 999,
            columnNumber: 7
        }, this);
    }
    return texto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: texto
    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-slate-600",
        children: "—"
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 1006,
        columnNumber: 33
    }, this);
}
// ---------------------------------------------------------------------------
/**
 * El archivo para salir a recuperar.
 *
 * Dos modos porque son dos preguntas: por antigüedad se arma la ruta de visitas
 * —"los que llevan dos meses o más"— y por rango se mide un mes cerrado. La
 * cuenta se muestra antes de descargar: bajar un archivo vacío y abrirlo para
 * enterarse es la peor forma de decir que no hay nadie.
 */ function ExportarAbonados({ abierto, clientes, onCerrar }) {
    const [modo, setModo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('antiguedad');
    const [estado, setEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('suspendido');
    const [meses, setMeses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const [desde, setDesde] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [hasta, setHasta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const criterio = {
        modo,
        estado,
        meses,
        desde,
        hasta
    };
    const elegidos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>abierto ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seleccionarParaExportar"])(clientes, criterio) : [], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        abierto,
        clientes,
        modo,
        estado,
        meses,
        desde,
        hasta
    ]);
    function descargar() {
        const ahora = new Date();
        const blob = new Blob([
            '﻿' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aCSV"])(elegidos, ahora, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLUMNAS_EXPORT"])
        ], {
            type: 'text/csv;charset=utf-8'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nombreArchivo"])(criterio, ahora);
        a.click();
        setTimeout(()=>URL.revokeObjectURL(url), 5000);
        onCerrar();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
        abierto: abierto,
        titulo: "Exportar abonados",
        onCerrar: onCerrar,
        ancho: "max-w-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1.5",
                    children: [
                        {
                            clave: 'antiguedad',
                            label: 'Por antigüedad'
                        },
                        {
                            clave: 'rango',
                            label: 'Por fechas'
                        }
                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setModo(m.clave),
                            className: `rounded-lg px-3 py-1.5 text-xs transition ${modo === m.clave ? 'bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30' : 'text-slate-400 hover:bg-slate-800'}`,
                            children: m.label
                        }, m.clave, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 1055,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 1050,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs text-slate-400",
                            children: [
                                "Estado",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: estado,
                                    onChange: (e)=>setEstado(e.target.value),
                                    className: "mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "suspendido",
                                            children: "Suspendidos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1074,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "cortado",
                                            children: "Cortados"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1075,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "activo",
                                            children: "Activos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1076,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "baja",
                                            children: "Retirados"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1077,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Todos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1078,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 1073,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 1071,
                            columnNumber: 11
                        }, this),
                        modo === 'antiguedad' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs text-slate-400",
                            children: [
                                "Llevan al menos",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: meses,
                                    onChange: (e)=>setMeses(Number(e.target.value)),
                                    className: "mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 0,
                                            children: "cualquier antigüedad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1090,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 1,
                                            children: "1 mes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1091,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 2,
                                            children: "2 meses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1092,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 3,
                                            children: "3 meses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1093,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 6,
                                            children: "6 meses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1094,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 12,
                                            children: "un año"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1095,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 1085,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 1083,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-400",
                                    children: [
                                        "Desde",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "date",
                                            value: desde,
                                            onChange: (e)=>setDesde(e.target.value),
                                            className: "mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 1100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-400",
                                    children: [
                                        "Hasta",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "date",
                                            value: hasta,
                                            onChange: (e)=>setHasta(e.target.value),
                                            className: "mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                            lineNumber: 1111,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 1109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 1070,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "t-panel p-3 text-xs text-slate-400",
                    children: [
                        modo === 'antiguedad' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Los que están ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: estado ? ESTADO[estado]?.label ?? estado : 'en cualquier estado'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 1125,
                                    columnNumber: 29
                                }, this),
                                Number(meses) > 0 ? ` desde hace ${meses} ${meses === 1 ? 'mes' : 'meses'} o más` : '',
                                ", del más viejo al más nuevo."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Los que quedaron",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: estado ? ESTADO[estado]?.label ?? estado : 'en cualquier estado'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 1132,
                                    columnNumber: 15
                                }, this),
                                " entre",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: desde || 'el principio'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 1133,
                                    columnNumber: 15
                                }, this),
                                " y ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: hasta || 'hoy'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                                    lineNumber: 1133,
                                    columnNumber: 50
                                }, this),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 text-slate-200",
                            children: elegidos.length === 0 ? 'No hay ninguno que cumpla eso.' : `${elegidos.length} ${elegidos.length === 1 ? 'abonado' : 'abonados'}.`
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 1136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 1122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "secundario",
                            onClick: onCerrar,
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 1144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                            onClick: descargar,
                            disabled: elegidos.length === 0,
                            children: "Descargar CSV"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                            lineNumber: 1147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/ClientesPage.jsx",
                    lineNumber: 1143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/ClientesPage.jsx",
            lineNumber: 1049,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/ClientesPage.jsx",
        lineNumber: 1048,
        columnNumber: 5
    }, this);
}
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
    ()=>Sidebar,
    "pantallasDelMenu",
    ()=>pantallasDelMenu,
    "podarMenu",
    ()=>podarMenu
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
function podarMenu(puede) {
    return SECCIONES.map((seccion)=>({
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
        })).filter((s)=>s.items.length);
}
function pantallasDelMenu(puede) {
    return podarMenu(puede).flatMap((s)=>s.items.flatMap((item)=>item.hijos ? item.hijos.map((h)=>({
                    ...h,
                    seccion: item.label
                })) : [
                {
                    ...item,
                    seccion: s.titulo ?? ''
                }
            ]));
}
function useContadores(puede) {
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
                lineNumber: 419,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Sidebar.jsx",
        lineNumber: 417,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
/** El número al lado de un ítem. Solo aparece si hay algo: un "0" es ruido. */ const Insignia = ({ n })=>n > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "ml-auto grid h-5 min-w-5 place-items-center rounded-full bg-[#F0F9FF] px-1.5 text-[11px] font-semibold text-sky-400",
        children: n > 99 ? '99+' : n
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Sidebar.jsx",
        lineNumber: 433,
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
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            !plegado && item.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 14,
                        className: `transition-transform ${abierto ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 452,
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
                                lineNumber: 487,
                                columnNumber: 15
                            }, this),
                            h.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Insignia, {
                                n: contadores?.[h.contador]
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 489,
                                columnNumber: 15
                            }, this)
                        ]
                    }, h.to, true, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 475,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 473,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Sidebar.jsx",
        lineNumber: 451,
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
   */ const secciones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>podarMenu(puede), [
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
                lineNumber: 530,
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
                                lineNumber: 557,
                                columnNumber: 11
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-sky-700 to-sky-400 text-sm font-bold text-white",
                                children: (marca?.nombre_sistema ?? 'S').trim().charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 563,
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
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[11px] text-slate-500",
                                        children: marca?.lema ?? ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 553,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 space-y-5 overflow-y-auto px-3 py-4",
                        children: cargandoPerfil && !perfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuCargando, {
                            plegado: plegado
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.jsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this) : secciones.map((seccion, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    seccion.titulo && (plegado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto mb-2 h-px w-6 bg-slate-800"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600",
                                        children: seccion.titulo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 596,
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
                                                lineNumber: 603,
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
                                                                lineNumber: 618,
                                                                columnNumber: 23
                                                            }, this),
                                                            plegado && contadores?.[item.contador] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute -right-1 -top-1 h-2 w-2 rounded-full bg-sky-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                                lineNumber: 622,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                        lineNumber: 617,
                                                        columnNumber: 21
                                                    }, this),
                                                    !plegado && item.label,
                                                    !plegado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Insignia, {
                                                        n: contadores?.[item.contador]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                        lineNumber: 626,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, item.to, true, {
                                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                                lineNumber: 605,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                                        lineNumber: 600,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/layout/Sidebar.jsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 577,
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
                                lineNumber: 642,
                                columnNumber: 9
                            }, this),
                            !plegado && 'Ocultar menú'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.jsx",
                        lineNumber: 636,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.jsx",
                lineNumber: 546,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>window.dispatchEvent(new Event('buscador:abrir')),
                        "aria-label": "Buscar (Ctrl+K)",
                        title: "Buscar cliente, factura, ticket o pantalla (Ctrl+K)",
                        className: "flex items-center gap-2 rounded-xl border border-slate-700 px-2.5 py-1.5 text-xs text-slate-500 transition hover:bg-slate-800 hover:text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "Buscar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                className: "t-dato hidden rounded border border-slate-700 px-1 text-[10px] lg:inline",
                                children: "Ctrl K"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    puede('pagos.registrar') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: "/pagos",
                        title: "Registrar un pago",
                        className: ({ isActive })=>`flex size-8 items-center justify-center rounded-xl border transition ${isActive ? 'border-transparent bg-[#ECFDF5] text-emerald-400' : 'border-slate-700 text-emerald-400 hover:bg-slate-800'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.jsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Campana$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: "/mi-perfil",
                        title: "Mi perfil y mi contraseña",
                        className: "hidden max-w-[16rem] truncate rounded-lg px-2 py-1 text-xs text-slate-400 hover:bg-slate-800 hover:text-slate-200 sm:inline-block",
                        children: usuario?.email
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 121,
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
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            "Salir"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.jsx",
                        lineNumber: 128,
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
"[project]/src/components/layout/Avisos.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Avisos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notificaciones.js [app-ssr] (ecmascript)");
;
;
;
;
const ESTILO = {
    exito: {
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        color: 'text-emerald-600'
    },
    error: {
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        color: 'text-red-600'
    },
    info: {
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
        color: 'text-sky-600'
    }
};
/** Cuenta regresiva del "Deshacer": cuántos segundos quedan. */ function Cuenta({ desde, segundos }) {
    const [, tic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setInterval(()=>tic((n)=>n + 1), 250);
        return ()=>clearInterval(t);
    }, []);
    const quedan = Math.max(0, Math.ceil(segundos - (Date.now() - desde) / 1000));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "t-dato text-[11px] text-slate-500",
        children: [
            quedan,
            "s"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Avisos.jsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function Avisos() {
    const [avisos, setAvisos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["suscribirAvisos"])(setAvisos), []);
    if (!avisos.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-x-4 bottom-4 z-[70] flex flex-col items-stretch gap-2 sm:inset-x-auto sm:right-6 sm:w-96",
        "aria-live": "polite",
        role: "status",
        children: avisos.map((a)=>{
            const { icono: Icono, color } = ESTILO[a.tipo] ?? ESTILO.info;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-card pointer-events-auto flex items-center gap-3 px-4 py-3 text-sm shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                        size: 18,
                        className: `shrink-0 ${color}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Avisos.jsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "min-w-0 flex-1 font-medium text-slate-100",
                        children: a.mensaje
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Avisos.jsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this),
                    a.cuenta != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cuenta, {
                        desde: a.desde,
                        segundos: a.cuenta
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Avisos.jsx",
                        lineNumber: 43,
                        columnNumber: 34
                    }, this),
                    a.accion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: a.accion.onClick,
                        className: "shrink-0 rounded-lg px-2 py-1 text-xs font-bold text-sky-600 hover:bg-sky-500/10",
                        children: a.accion.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Avisos.jsx",
                        lineNumber: 45,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cerrarAviso"])(a.id),
                        "aria-label": "Cerrar aviso",
                        className: "shrink-0 rounded p-0.5 text-slate-500 hover:text-slate-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Avisos.jsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Avisos.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                ]
            }, a.id, true, {
                fileName: "[project]/src/components/layout/Avisos.jsx",
                lineNumber: 40,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Avisos.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Buscador.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Buscador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-ssr] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-ssr] (ecmascript) <export default as CornerDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rutasPermisos.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const sinTildes = (s)=>String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
// Lo que se escribe va dentro de un filtro de PostgREST: sin comas ni paréntesis.
const limpio = (q)=>q.replace(/[,()*%]/g, ' ').trim();
function Buscador() {
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [texto, setTexto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [resultados, setResultados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [buscando, setBuscando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activo, setActivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const { puede } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const entrada = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ultima = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pantallas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pantallasDelMenu"])(puede), [
        puede
    ]);
    // Ctrl+K / ⌘K abre; también el evento 'buscador:abrir' (botón de la barra).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tecla = (e)=>{
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setAbierto((a)=>!a);
            }
        };
        const abrir = ()=>setAbierto(true);
        window.addEventListener('keydown', tecla);
        window.addEventListener('buscador:abrir', abrir);
        return ()=>{
            window.removeEventListener('keydown', tecla);
            window.removeEventListener('buscador:abrir', abrir);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (abierto) {
            setTexto('');
            setResultados([]);
            setActivo(0);
            setTimeout(()=>entrada.current?.focus(), 0);
        }
    }, [
        abierto
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const q = limpio(texto);
        const deMenu = q ? pantallas.filter((p)=>sinTildes(`${p.label} ${p.seccion}`).includes(sinTildes(q))).slice(0, 5).map((p)=>({
                clave: `p:${p.to}`,
                tipo: 'Pantalla',
                icono: p.icon,
                titulo: p.label,
                detalle: p.seccion,
                ir: p.to
            })) : pantallas.slice(0, 6).map((p)=>({
                clave: `p:${p.to}`,
                tipo: 'Pantalla',
                icono: p.icon,
                titulo: p.label,
                detalle: p.seccion,
                ir: p.to
            }));
        setResultados(deMenu);
        setActivo(0);
        if (q.length < 2) return setBuscando(false);
        const id = ++ultima.current;
        setBuscando(true);
        const reloj = setTimeout(async ()=>{
            const pedidos = [];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, '/clientes')) {
                pedidos.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('clientes').select('id, nombre, identificacion, ip, estado').or([
                    `nombre.ilike.%${q}%`,
                    `identificacion.ilike.%${q}%`,
                    `ip.ilike.%${q}%`,
                    `codigo.ilike.%${q}%`
                ].join(',')).order('nombre').limit(6).then(({ data })=>(data ?? []).map((c)=>({
                            clave: `c:${c.id}`,
                            tipo: 'Cliente',
                            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
                            titulo: c.nombre,
                            detalle: [
                                c.identificacion,
                                c.ip,
                                c.estado
                            ].filter(Boolean).join(' · '),
                            ir: `/clientes/${c.id}`
                        }))));
            }
            if (/^\d+$/.test(q) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, '/facturacion')) {
                pedidos.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('facturas').select('id, numero, cliente_nombre, client_id').eq('numero', Number(q)).limit(4).then(({ data })=>(data ?? []).map((f)=>({
                            clave: `f:${f.id}`,
                            tipo: 'Factura',
                            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                            titulo: `Factura ${f.numero}`,
                            detalle: f.cliente_nombre ?? '',
                            ir: f.client_id ? `/clientes/${f.client_id}?ver=facturacion` : '/facturacion'
                        }))));
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, '/soporte')) {
                const porNumero = /^\d+$/.test(q) ? [
                    `numero.eq.${q}`
                ] : [];
                pedidos.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('tickets').select('id, numero, nombre, estado').or([
                    ...porNumero,
                    `nombre.ilike.%${q}%`,
                    `identificacion.ilike.%${q}%`
                ].join(',')).order('created_at', {
                    ascending: false
                }).limit(4).then(({ data })=>(data ?? []).map((t)=>({
                            clave: `t:${t.id}`,
                            tipo: 'Ticket',
                            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"],
                            titulo: `Ticket #${t.numero ?? ''} · ${t.nombre ?? ''}`,
                            detalle: t.estado ?? '',
                            ir: `/soporte/${t.id}`
                        }))));
            }
            // Que falle una búsqueda no apaga las otras.
            const partes = await Promise.all(pedidos.map((p)=>p.catch(()=>[])));
            if (id !== ultima.current) return;
            setResultados([
                ...partes.flat(),
                ...deMenu
            ]);
            setBuscando(false);
        }, 250);
        return ()=>clearTimeout(reloj);
    }, [
        texto,
        pantallas,
        puede
    ]);
    const ir = (r)=>{
        if (!r) return;
        setAbierto(false);
        navigate(r.ir);
    };
    if (!abierto) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-start justify-center bg-[rgba(15,23,42,0.45)] p-4 pt-[12vh] backdrop-blur-[2px]",
        onClick: ()=>setAbierto(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Buscar",
            className: "t-card w-full max-w-xl overflow-hidden shadow-2xl",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 border-b border-[rgba(15,23,42,0.06)] px-4 py-3",
                    children: [
                        buscando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            size: 18,
                            className: "animate-spin text-slate-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Buscador.jsx",
                            lineNumber: 155,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 18,
                            className: "text-slate-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Buscador.jsx",
                            lineNumber: 155,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: entrada,
                            value: texto,
                            onChange: (e)=>setTexto(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === 'Escape') setAbierto(false);
                                else if (e.key === 'ArrowDown') {
                                    e.preventDefault();
                                    setActivo((a)=>Math.min(a + 1, resultados.length - 1));
                                } else if (e.key === 'ArrowUp') {
                                    e.preventDefault();
                                    setActivo((a)=>Math.max(a - 1, 0));
                                } else if (e.key === 'Enter') {
                                    e.preventDefault();
                                    ir(resultados[activo]);
                                }
                            },
                            placeholder: "Cédula, nombre, IP, N° de factura o ticket, o una pantalla…",
                            "aria-label": "Buscar",
                            className: "min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Buscador.jsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "t-dato hidden rounded border border-slate-700 px-1.5 py-0.5 text-[10px] text-slate-500 sm:inline",
                            children: "Esc"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Buscador.jsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Buscador.jsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "max-h-[55vh] overflow-y-auto py-1",
                    role: "listbox",
                    children: [
                        resultados.length === 0 && !buscando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-4 py-6 text-center text-sm text-slate-500",
                            children: limpio(texto).length < 2 ? 'Escribe al menos 2 letras o números.' : 'Nada coincide. Prueba con la cédula o la IP.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Buscador.jsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        resultados.map((r, i)=>{
                            const Icono = r.icono ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                role: "option",
                                "aria-selected": i === activo,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onMouseEnter: ()=>setActivo(i),
                                    onClick: ()=>ir(r),
                                    className: `flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm ${i === activo ? 'bg-sky-500/10' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                                            size: 16,
                                            className: "shrink-0 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Buscador.jsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block truncate font-medium text-slate-100",
                                                    children: r.titulo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Buscador.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                r.detalle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block truncate text-xs text-slate-500",
                                                    children: r.detalle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Buscador.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Buscador.jsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0 text-[10px] font-semibold uppercase tracking-wide text-slate-500",
                                            children: r.tipo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Buscador.jsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this),
                                        i === activo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__["CornerDownLeft"], {
                                            size: 13,
                                            className: "shrink-0 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Buscador.jsx",
                                            lineNumber: 201,
                                            columnNumber: 36
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Buscador.jsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this)
                            }, r.clave, false, {
                                fileName: "[project]/src/components/layout/Buscador.jsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Buscador.jsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 border-t border-[rgba(15,23,42,0.06)] px-4 py-2 text-[11px] text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "↑ ↓ para moverte"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Buscador.jsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Enter para abrir"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Buscador.jsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-auto",
                            children: "Ctrl + K"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Buscador.jsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Buscador.jsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Buscador.jsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Buscador.jsx",
        lineNumber: 143,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Avisos$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Avisos.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Buscador$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Buscador.jsx [app-ssr] (ecmascript)");
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
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onAbrirMenu: ()=>setMenuAbierto(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Layout.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto p-4 sm:p-6",
                        children: cargandoPerfil && !perfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cargando, {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this) : errorPerfil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NoSePudoVerificar, {
                            error: errorPerfil
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this) : permitido ? children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 60,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SinPermiso$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Layout.jsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Layout.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Avisos$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Buscador$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.jsx",
        lineNumber: 37,
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
                lineNumber: 92,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-400",
                children: "El sistema no pudo leer quién eres, así que no muestra nada hasta saberlo. Suele ser la conexión."
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>window.location.reload(),
                className: "mt-5 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800",
                children: "Reintentar"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 97,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            error?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 font-mono text-[11px] text-slate-600",
                children: error.message
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.jsx",
        lineNumber: 91,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Cargando = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-7 w-48 animate-pulse rounded-lg bg-slate-800/60"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 112,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-72 animate-pulse rounded bg-slate-800/40"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 113,
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
                        lineNumber: 116,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.jsx",
                lineNumber: 114,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.jsx",
        lineNumber: 111,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Avisos$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Avisos.jsx [app-ssr] (ecmascript)");
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
        className: "min-h-dvh bg-background pb-24 text-slate-200 md:pb-6",
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
                                        lineNumber: 78,
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
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavEscritorio"], {
                                pendientes: {
                                    avisos: sinLeer
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                lineNumber: 92,
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
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    sinLeer > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white",
                                        children: sinLeer > 9 ? '9+' : sinLeer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$EstadoConexion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                lineNumber: 73,
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
                    lineNumber: 114,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$BarraInferior$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                pendientes: {
                    avisos: sinLeer
                }
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Avisos$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tecnico/LayoutCampo.jsx",
        lineNumber: 72,
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
"[project]/app/clientes/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$ClientesPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/ClientesPage.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$NextPageShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/NextPageShell.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$NextPageShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtectedShell"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$ClientesPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/clientes/page.jsx",
            lineNumber: 7,
            columnNumber: 26
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/clientes/page.jsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_ed669f26._.js.map