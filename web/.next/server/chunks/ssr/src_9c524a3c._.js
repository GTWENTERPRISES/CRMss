module.exports = [
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
"[project]/src/components/olt/ONUStatsCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UMBRAL_RX_DBM",
    ()=>UMBRAL_RX_DBM,
    "default",
    ()=>ONUStatsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-ssr] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const UMBRAL_RX_DBM = -27;
function ONUStatsCard({ olt, ubicacion, onuId, etiqueta }) {
    const [metricas, setMetricas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [historial, setHistorial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leyendo, setLeyendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function leer() {
        setLeyendo(true);
        setError(null);
        try {
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].olt.metricas(olt.id, onuId, ubicacion);
            setMetricas(r);
            if (r.rxPowerDbm != null) {
                setHistorial((h)=>[
                        ...h,
                        {
                            hora: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hora"])(new Date()),
                            rx: r.rxPowerDbm
                        }
                    ].slice(-20));
            }
        } catch (err) {
            setError(err);
            setMetricas(null);
        } finally{
            setLeyendo(false);
        }
    }
    const alerta = metricas?.rxPowerDbm != null && metricas.rxPowerDbm < UMBRAL_RX_DBM;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        title: `Señal óptica — ONU ${onuId}`,
        subtitle: etiqueta,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
            onClick: leer,
            cargando: leyendo,
            children: "Leer ahora"
        }, void 0, false, {
            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
            lineNumber: 59,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                    error: error,
                    onCerrar: ()=>setError(null)
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                !metricas && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-6 text-center text-sm text-slate-500",
                    children: "Pulsa “Leer ahora” para consultar la potencia óptica en vivo."
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                metricas && !metricas.online && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Aviso"], {
                    tipo: "alerta",
                    children: metricas.mensaje || 'La ONU no está online. La potencia óptica se lee por OMCI contra el equipo del cliente, así que no hay dato disponible.'
                }, void 0, false, {
                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this),
                metricas?.online && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        alerta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this),
                                "Señal baja: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        metricas.rxPowerDbm,
                                        " dBm"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this),
                                " está por debajo del umbral de",
                                ' ',
                                UMBRAL_RX_DBM,
                                " dBm."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "t-kpis",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stat"], {
                                    label: "Rx power",
                                    valor: metricas.rxPowerDbm != null ? `${metricas.rxPowerDbm} dBm` : '—',
                                    sub: `umbral ${UMBRAL_RX_DBM} dBm`,
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
                                    color: alerta ? 'text-red-400' : 'text-emerald-400'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stat"], {
                                    label: "Tx power",
                                    valor: metricas.txPowerDbm != null ? `${metricas.txPowerDbm} dBm` : '—',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stat"], {
                                    label: "Distancia",
                                    valor: metricas.distanciaM != null ? `${metricas.distanciaM} m` : '—',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stat"], {
                                    label: "Temperatura",
                                    valor: metricas.temperaturaC != null ? `${metricas.temperaturaC} °C` : '—',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        historial.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-48 t-panel p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                                    data: historial,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: "#1e293b"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "hora",
                                            tick: {
                                                fill: '#64748b',
                                                fontSize: 10
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: {
                                                fill: '#64748b',
                                                fontSize: 10
                                            },
                                            domain: [
                                                'dataMin - 2',
                                                'dataMax + 2'
                                            ],
                                            unit: " dBm",
                                            width: 64
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                            lineNumber: 121,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                background: '#0f172a',
                                                border: '1px solid #1e293b',
                                                borderRadius: 8,
                                                fontSize: 12
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                            y: UMBRAL_RX_DBM,
                                            stroke: "#ef4444",
                                            strokeDasharray: "4 4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                            lineNumber: 135,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                            type: "monotone",
                                            dataKey: "rx",
                                            stroke: "#38bdf8",
                                            strokeWidth: 2,
                                            dot: {
                                                r: 3
                                            },
                                            name: "Rx"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                            lineNumber: 136,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                    lineNumber: 118,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                                lineNumber: 117,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
                            lineNumber: 116,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/olt/ONUStatsCard.jsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/estados.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-ssr] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-ssr] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-ssr] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
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
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"]
    },
    transferencia: {
        label: 'Transferencia',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"]
    },
    deposito: {
        label: 'Depósito',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
    },
    tarjeta: {
        label: 'Tarjeta',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
    },
    billetera: {
        label: 'Billetera digital',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
    },
    otro: {
        label: 'Otro',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"]
    }
};
const formaDePago = (valor)=>FORMAS_PAGO[valor] ?? {
        label: valor ? valor.charAt(0).toUpperCase() + valor.slice(1) : '—',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"]
    };
}),
"[project]/src/components/layout/ResumenAreas.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResumenAreas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function ResumenAreas() {
    const { puede } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [d, setD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const cargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // La fecha, en hora local. `toISOString()` da UTC, y en Ecuador eso hace que
        // después de las 19:00 el sistema empiece a contar el día siguiente — ya nos
        // pasó una vez y el síntoma es un tablero en cero a la tarde.
        const hoy = new Date();
        const iso = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
        const desde = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()).toISOString();
        const [ventas, movimiento, expedientes, ordenes, jornadas, criticas] = await Promise.all([
            // Una venta es un prospecto GANADO. No una cotización enviada ni un
            // prospecto cargado: es cuando la persona dijo que sí.
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_prospectos').select('id, nombre, vendedor, vendedor_id, valor_mensual, plan').eq('estado', 'ganado').gte('ganado_en', desde),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_prospectos').select('id, nombre, vendedor, vendedor_id, estado').gte('actualizado_en', desde),
            // Ventas cerradas que todavía no pueden convertirse en orden de trabajo.
            // Es el cuello de botella real del área comercial: la venta está hecha y
            // el técnico no puede salir.
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_expedientes').select('id, cliente, ok_datos, ok_cedula_frontal, ok_cedula_posterior, ok_fotos, ok_ubicacion, ok_plan, ok_contrato, ok_firma').eq('completo', false),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_instalaciones').select('id, numero, cliente, nombre, tecnico_nombre, estado, hora').eq('fecha', iso).in('estado', [
                'agendada',
                'en_curso'
            ]),
            // Jornada abierta = arrancó y no cerró. Es quién está trabajando ahora,
            // no quién tiene turno asignado.
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_jornadas').select('id, tecnico, tecnico_id, vehiculo, placa, inicio_at').is('fin_at', null).gte('inicio_at', desde),
            // Nodos caídos por sí mismos. Los que se cayeron porque se cayó su padre
            // no se cuentan: son el mismo problema contado diez veces.
            //
            // `not(... is true)` y no `eq(..., false)`: la vista deja `por_el_padre`
            // en NULL —no en `false`— cuando el nodo se cayó solo, así que comparar
            // con `false` no contaba ninguna. Con una torre caída arrastrando dos APs,
            // el tablero decía "0 incidencias críticas" con el sector sin servicio.
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_estado_red').select('id, nombre, minutos_asi, clientes_afectados').eq('estado', 'down').not('por_el_padre', 'is', true)
        ]);
        // Un dato que no se pudo leer queda en `null`, no en cero: "0 incidencias
        // críticas" y "no pude consultarlo" son cosas muy distintas para quien
        // decide si sale a la calle.
        const filas = (r)=>r.error ? null : r.data ?? [];
        setD({
            ventas: filas(ventas),
            movimiento: filas(movimiento),
            expedientes: filas(expedientes),
            ordenes: filas(ordenes),
            jornadas: filas(jornadas),
            criticas: filas(criticas)
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        cargar();
    }, [
        cargar
    ]);
    /** Quién movió algo hoy, con cuánto. Se agrupa acá y no en la base: son diez filas. */ const porVendedor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!d?.movimiento) return null;
        const mapa = new Map();
        for (const p of d.movimiento){
            const clave = p.vendedor_id ?? 'sin';
            const y = mapa.get(clave) ?? {
                nombre: p.vendedor ?? 'Sin vendedor',
                gestionados: 0,
                ganados: 0
            };
            y.gestionados++;
            if (p.estado === 'ganado') y.ganados++;
            mapa.set(clave, y);
        }
        return [
            ...mapa.values()
        ].sort((a, b)=>b.ganados - a.ganados || b.gestionados - a.gestionados);
    }, [
        d
    ]);
    const veComercial = puede('ventas.prospectos') || puede('ventas.dashboard');
    const veTecnica = puede('instalaciones.ver') || puede('soporte.ver');
    if (!veComercial || !veTecnica) return null;
    const alternar = (k)=>setAbierto((a)=>a === k ? null : k);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 lg:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Area, {
                titulo: "Área comercial",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                color: "text-sky-400",
                borde: "border-sky-500/30",
                a: "/ventas/prospectos",
                enlace: "Ver área comercial",
                cargando: !d,
                abierto: abierto,
                onAbrir: alternar,
                partes: [
                    {
                        clave: 'ventas',
                        valor: d?.ventas?.length,
                        label: 'ventas hoy',
                        vacio: 'Todavía no se cerró ninguna venta hoy.',
                        filas: d?.ventas?.map((v)=>({
                                principal: v.nombre,
                                secundario: v.vendedor ?? 'sin vendedor asignado',
                                extra: v.plan
                            }))
                    },
                    {
                        clave: 'movimiento',
                        valor: porVendedor?.length,
                        label: 'vendedores con movimiento',
                        vacio: 'Nadie tocó un prospecto hoy.',
                        filas: porVendedor?.map((v)=>({
                                principal: v.nombre,
                                secundario: `${v.gestionados} prospecto${v.gestionados === 1 ? '' : 's'} gestionado${v.gestionados === 1 ? '' : 's'}`,
                                extra: v.ganados ? `${v.ganados} cerrada${v.ganados === 1 ? '' : 's'}` : null
                            }))
                    },
                    {
                        clave: 'expedientes',
                        valor: d?.expedientes?.length,
                        label: 'expedientes sin completar',
                        // Una venta cerrada que no puede convertirse en orden es plata
                        // parada, no un pendiente administrativo.
                        alerta: (d?.expedientes?.length ?? 0) > 0,
                        vacio: 'Todos los expedientes están completos.',
                        filas: d?.expedientes?.map((e)=>({
                                principal: e.cliente,
                                secundario: falta(e)
                            }))
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Area, {
                titulo: "Área técnica",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
                color: "text-emerald-400",
                borde: "border-emerald-500/30",
                a: "/clientes/instalaciones",
                enlace: "Ver área técnica",
                cargando: !d,
                abierto: abierto,
                onAbrir: alternar,
                partes: [
                    {
                        clave: 'ordenes',
                        valor: d?.ordenes?.length,
                        label: 'órdenes hoy',
                        vacio: 'No hay órdenes agendadas para hoy.',
                        filas: d?.ordenes?.map((o)=>({
                                principal: `${o.numero ? `#${o.numero} · ` : ''}${o.cliente ?? o.nombre ?? 'sin nombre'}`,
                                secundario: o.tecnico_nombre ?? 'sin técnico asignado',
                                extra: o.estado === 'en_curso' ? 'en curso' : o.hora?.slice(0, 5) ?? null
                            }))
                    },
                    {
                        clave: 'jornadas',
                        valor: d?.jornadas?.length,
                        label: 'técnicos en campo',
                        vacio: 'Nadie abrió jornada hoy.',
                        filas: d?.jornadas?.map((j)=>({
                                principal: j.tecnico ?? 'sin nombre',
                                secundario: j.vehiculo ? `${j.vehiculo}${j.placa ? ` · ${j.placa}` : ''}` : 'sin vehículo',
                                extra: j.inicio_at ? `desde ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hora"])(j.inicio_at)}` : null
                            }))
                    },
                    {
                        clave: 'criticas',
                        valor: d?.criticas?.length,
                        label: 'incidencias críticas',
                        alerta: (d?.criticas?.length ?? 0) > 0,
                        vacio: 'La red está en orden.',
                        filas: d?.criticas?.map((n)=>({
                                principal: n.nombre,
                                secundario: n.clientes_afectados ? `${n.clientes_afectados} cliente${n.clientes_afectados === 1 ? '' : 's'} afectado${n.clientes_afectados === 1 ? '' : 's'}` : 'sin clientes colgados',
                                extra: duracion(n.minutos_asi)
                            }))
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ResumenAreas.jsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
/** Qué le falta a un expediente. Se nombra lo que falta, no lo que hay. */ function falta(e) {
    const pendientes = [
        !e.ok_datos && 'datos',
        (!e.ok_cedula_frontal || !e.ok_cedula_posterior) && 'cédula',
        !e.ok_fotos && 'fotos',
        !e.ok_ubicacion && 'ubicación',
        !e.ok_plan && 'plan',
        !e.ok_contrato && 'contrato',
        !e.ok_firma && 'firma'
    ].filter(Boolean);
    return pendientes.length ? `falta ${pendientes.join(', ')}` : 'completo';
}
function duracion(minutos) {
    if (minutos == null) return null;
    // Un reloj del servidor unos segundos adelantado no puede imprimir "hace -3m".
    if (minutos < 1) return 'recién';
    if (minutos < 60) return `hace ${minutos} min`;
    const h = Math.floor(minutos / 60);
    return h < 24 ? `hace ${h}h` : `hace ${Math.floor(h / 24)} días`;
}
function Area({ titulo, icon: Icon, color, borde, a, enlace, partes, cargando, abierto, onAbrir }) {
    const parteAbierta = partes.find((p)=>p.clave === abierto);
    // Todo en cero: una línea, no tres ceros grandes que tapan lo que sí pasa.
    if (!cargando && partes.every((p)=>p.valor === 0)) {
        return(// Del ancho de su contenido (justify-self-start), no estirada a media pantalla.
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex w-full items-center gap-2 justify-self-start rounded-xl border bg-[#F6F8FB] px-4 py-2.5 sm:w-auto ${borde}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 16,
                    className: "text-slate-600"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-semibold text-slate-300",
                    children: titulo
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[12px] text-slate-500",
                    children: "· sin movimiento hoy"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                    to: a,
                    className: "ml-auto inline-flex items-center gap-1 pl-4 text-[12px] text-slate-500 transition hover:text-slate-200",
                    children: [
                        enlace,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 13
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                            lineNumber: 289,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/ResumenAreas.jsx",
            lineNumber: 281,
            columnNumber: 7
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border bg-[#F6F8FB] p-4 ${borde}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 17,
                        className: color
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-semibold text-slate-100",
                        children: titulo
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        to: a,
                        className: "ml-auto inline-flex items-center gap-1 text-[12px] text-slate-500 transition hover:text-slate-200",
                        children: [
                            enlace,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                                lineNumber: 304,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-start gap-x-5 gap-y-2",
                children: partes.map((p)=>{
                    const activo = abierto === p.clave;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        // Un número que no se pudo leer no se puede abrir: no hay nada
                        // detrás y un panel vacío se lee como "no hay", que es distinto.
                        disabled: cargando || p.valor == null,
                        onClick: ()=>onAbrir(p.clave),
                        className: `-mx-1 min-w-0 rounded-lg px-1 text-left transition disabled:cursor-default ${activo ? 'bg-slate-800/70' : 'hover:bg-slate-800/40'}`,
                        children: [
                            cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-7 w-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                                lineNumber: 324,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-2xl font-semibold ${p.valor == null || p.valor === 0 ? 'text-slate-600' : p.alerta ? 'text-amber-400' : 'text-slate-100'}`,
                                children: p.valor ?? '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                                lineNumber: 326,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center gap-1 text-[11px] leading-tight text-slate-500",
                                children: [
                                    p.label,
                                    p.valor != null && !cargando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 11,
                                        className: `transition ${activo ? 'rotate-180 text-slate-300' : 'text-slate-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                                        lineNumber: 341,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.clave, true, {
                        fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                        lineNumber: 312,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            parteAbierta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 space-y-1.5 border-t border-slate-800 pt-3",
                children: parteAbierta.filas?.length ? parteAbierta.filas.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-baseline gap-2 text-[13px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-w-0 flex-1 truncate text-slate-200",
                                children: f.principal
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                                lineNumber: 357,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 text-[11px] text-slate-500",
                                children: f.secundario
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                                lineNumber: 358,
                                columnNumber: 17
                            }, this),
                            f.extra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400",
                                children: f.extra
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                                lineNumber: 360,
                                columnNumber: 19
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                        lineNumber: 356,
                        columnNumber: 15
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-[12px] text-slate-500",
                    children: parteAbierta.vacio
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                    lineNumber: 367,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ResumenAreas.jsx",
                lineNumber: 353,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ResumenAreas.jsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/crm-pages/Dashboard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-ssr] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-ssr] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-ssr] (ecmascript) <export default as PauseCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiNetwork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rutasPermisos.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/abonados.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$ONUStatsCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/olt/ONUStatsCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/estados.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ResumenAreas$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ResumenAreas.jsx [app-ssr] (ecmascript)");
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
;
;
;
;
/**
 * El panel de inicio.
 *
 * ── Qué es y qué no es ──
 *
 * No es un informe: es la puerta del sistema. Todo lo que muestra es un enlace
 * a la pantalla donde eso se trabaja, con el filtro ya puesto cuando la
 * pantalla de destino sabe recibirlo. Un número que obliga a abrir un módulo y
 * volver a buscar lo mismo a mano no sirve para decidir — queda de adorno.
 *
 * Por eso cada KPI, cada fila de OLT, cada ticket y cada cobro es un `<Link>`
 * de verdad y no un `div` con `onClick`: se abre en pestaña nueva con el botón
 * del medio, se copia la dirección, y quien navega con teclado lo alcanza con
 * el tabulador y ve dónde está parado.
 *
 * ── Por qué las tarjetas se preguntan el permiso ──
 *
 * Una tarjeta que lleva a una pantalla que rebota es peor que no tenerla:
 * enseña que la pantalla existe y hace perder un clic. Cada bloque consulta el
 * MISMO mapa de rutas que usa el guardián del layout (`puedeEntrar`), así que
 * el panel no puede contradecirlo: el día que una ruta cambie de permiso, la
 * tarjeta lo sigue sola.
 *
 * ── Por qué los datos se piden con `allSettled` ──
 *
 * Son diez consultas independientes contra vistas distintas. Con `Promise.all`
 * una sola que falle —una instalación a la que le falta una migración, una
 * vista sin permiso de lectura— deja el panel entero en blanco. Así cada
 * bloque muestra lo suyo y el que no pudo cargar se dice a sí mismo, sin
 * arrastrar a los demás.
 */ const ABIERTO = (t)=>![
        'resuelto',
        'cancelado'
    ].includes(t.estado);
/**
 * Contador animado.
 *
 * Cuenta desde cero respetando prefijo, sufijo y decimales, para que "$2.340"
 * siga siendo "$2.340" mientras sube. Con `prefers-reduced-motion` no anima:
 * para algunas personas el movimiento no es elegancia, es mareo.
 */ function useContador(valor) {
    const [mostrado, setMostrado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(valor);
    const anterior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const texto = String(valor);
        const sinMovimiento = "undefined" !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        // Solo anima la primera vez que llega un valor. Si animara en cada
        // refresco, el panel estaría contando sin parar y sería imposible leerlo.
        if (sinMovimiento || anterior.current === texto || anterior.current !== null) {
            anterior.current = texto;
            setMostrado(texto);
            return undefined;
        }
        anterior.current = texto;
        const m = texto.match(/^([^\d-]*)(-?[\d.,]+)(.*)$/);
        if (!m) {
            setMostrado(texto);
            return undefined;
        }
        const [, prefijo, numero, sufijo] = m;
        const destino = parseFloat(numero.replace(/\./g, '').replace(',', '.'));
        if (!Number.isFinite(destino)) {
            setMostrado(texto);
            return undefined;
        }
        const decimales = (numero.split(',')[1] || '').length;
        const inicio = performance.now();
        let raf;
        const paso = (ahora)=>{
            const p = Math.min(1, (ahora - inicio) / 900);
            const suave = 1 - Math.pow(1 - p, 3);
            setMostrado(prefijo + (suave * destino).toLocaleString('es-EC', {
                minimumFractionDigits: decimales,
                maximumFractionDigits: decimales
            }) + sufijo);
            if (p < 1) raf = requestAnimationFrame(paso);
        };
        raf = requestAnimationFrame(paso);
        return ()=>cancelAnimationFrame(raf);
    }, [
        valor
    ]);
    return mostrado;
}
const moneda = (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dineroCero"])(n);
const numero = (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numero"])(n || 0);
/* ═══════════════════════════════════════════════════════════════════════════
   PIEZAS
   ═══════════════════════════════════════════════════════════════════════════ */ /**
 * Tarjeta de KPI.
 *
 * Es un enlace entero, no una tarjeta con un enlace adentro: el área de clic
 * es toda la tarjeta, que es lo que uno intenta apretar.
 */ function KpiCard({ icon: Icon, etiqueta, valor, pista, a, tono = 'marca', serie, variacion, mejorSiBaja }) {
    const mostrado = useContador(valor);
    // La franja y el número dicen el estado (index.css: .t-tono-*); un cero se
    // atenúa (.t-cero) para que el ojo vaya primero a lo que pide atención.
    const cero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["esCero"])(valor);
    // El color solo aparece cuando el número ES un estado. Un KPI neutro va del
    // color de marca como todo lo demás; si "abonados activos" fuera verde, el
    // verde dejaría de significar "en línea" en la pantalla de al lado.
    const tonos = {
        marca: 'bg-[#F0F9FF] text-sky-400',
        ok: 'bg-[#ECFDF5] text-emerald-400',
        aviso: 'bg-[#FFFBEB] text-amber-400',
        critico: 'bg-[#FEF2F2] text-red-400'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
        to: a,
        className: `t-kpi-card t-card-hover flex flex-col p-4 sm:p-5 ${tono !== 'marca' ? `t-tono-${tono}` : ''} ${cero ? 't-cero' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `t-kpi-icon ${cero ? 'bg-slate-800 text-slate-600' : tonos[tono]}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 14,
                        className: "mt-1 text-slate-600",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex items-end justify-between gap-2 pt-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `t-kpi-valor ${String(valor ?? '').length > 7 ? 't-kpi-largo' : ''}`,
                        children: mostrado
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    serie?.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tendencia"], {
                        serie: serie,
                        ancho: 56,
                        alto: 24,
                        className: tono === 'critico' ? 'text-red-400' : tono === 'aviso' ? 'text-amber-400' : 'text-sky-500'
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-xs font-semibold text-slate-300",
                children: etiqueta
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            pista && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-[11px] text-slate-500",
                children: pista
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 180,
                columnNumber: 17
            }, this),
            variacion != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Variacion"], {
                    valor: variacion,
                    mejorSiBaja: mejorSiBaja,
                    sufijo: "vs. 14 días antes"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 182,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
/** 'YYYY-MM-DD' de hace n días (hora local). */ const haceDias = (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fechaLocal"])(new Date(Date.now() - n * 86400000));
/** Suma por día de los últimos `dias` días: [más viejo … hoy]. */ function porDia(filas, campoFecha, dias, valor = ()=>1, desde = 0) {
    const serie = Array(dias).fill(0);
    const indice = new Map(Array.from({
        length: dias
    }, (_, i)=>[
            haceDias(desde + dias - 1 - i),
            i
        ]));
    for (const f of filas ?? []){
        const i = indice.get(String(f[campoFecha] ?? '').slice(0, 10));
        if (i != null) serie[i] += valor(f);
    }
    return serie;
}
const variacionPct = (actual, anterior)=>anterior > 0 ? (actual - anterior) / anterior * 100 : null;
const suma = (xs)=>xs.reduce((s, x)=>s + x, 0);
/** Las líneas de tendencia del panel: tickets nuevos (14 días) y cobros (30 días), con su variación. */ function tendencias(d, _hoy) {
    const tickets = porDia(d.ticketsRecientes, 'created_at', 14);
    const ticketsAntes = porDia(d.ticketsRecientes, 'created_at', 14, ()=>1, 14);
    const monto = (p)=>Number(p.monto || 0);
    const cobros = porDia(d.cobros60, 'fecha_pago', 30, monto);
    const cobrosAntes = porDia(d.cobros60, 'fecha_pago', 30, monto, 30);
    return {
        serieTickets: tickets,
        variacionTickets: variacionPct(suma(tickets), suma(ticketsAntes)),
        serieCobros: cobros,
        cobrado30: suma(cobros),
        variacionCobros: variacionPct(suma(cobros), suma(cobrosAntes))
    };
}
/** Tarjeta de sección: encabezado con barrita de marca y enlace al módulo. */ function Seccion({ titulo, subtitulo, a, etiquetaEnlace = 'Ver todo', children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `t-card overflow-hidden ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between gap-4 border-b border-[rgba(15,23,42,0.06)] px-6 pt-5 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-5 w-1 shrink-0 rounded-full bg-gradient-to-b from-sky-700 to-sky-400",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "t-titulo truncate text-sm font-bold text-slate-100",
                                        children: titulo
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    subtitulo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-[11.5px] text-slate-500",
                                        children: subtitulo
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 235,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    a && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        to: a,
                        className: "flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-semibold text-sky-400 transition hover:bg-[#F0F9FF]",
                        children: [
                            etiquetaEnlace,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
/** El hueco cuando no hay nada que mostrar. Dice qué significa el vacío. */ const Vacio = ({ icon: Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], titulo, sub })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center px-4 py-10 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 grid h-10 w-10 place-items-center rounded-full bg-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 18,
                    className: "text-slate-600"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                    lineNumber: 257,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 256,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold text-slate-400",
                children: titulo
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 259,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] text-slate-500",
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 260,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 255,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Dashboard() {
    const { puede } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermisos"])();
    const abre = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ruta)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rutasPermisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["puedeEntrar"])(puede, ruta), [
        puede
    ]);
    const [d, setD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * Lo que salió mal en la última corrida de las tareas.
   *
   * Va por el middleware y no por la base porque ese resultado vive en memoria
   * del proceso que corre las tareas: es lo último que hizo, no un histórico.
   *
   * Si el middleware no responde, queda en null y la tarjeta no se dibuja. Es
   * correcto: no saber si hubo fallas no es lo mismo que saber que las hubo, y
   * un cartel rojo porque se cayó la API sería una alarma sobre la alarma.
   */ const [problemas, setProblemas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let vivo = true;
        const hoy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fechaLocal"])();
        // Todas de solo lectura y todas contra vistas que el sistema ya usaba en
        // otras pantallas. El panel no consulta nada que no se consultara ya.
        const consultas = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_olt_resumen').select('olt_id, numero, nombre, olt_estado, onus, online, caidas, los').order('numero'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_nodos_red').select('id, nombre, equipo, ip, estado, punto').order('nombre'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_tickets').select('*').order('created_at', {
                ascending: false
            }).limit(80),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_pagos').select('*').order('created_at', {
                ascending: false
            }).limit(12),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_facturas_por_cobrar').select('client_id, saldo, fecha_vencimiento'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_clientes_ficha').select('id, estado'),
            /* La MISMA vista y el MISMO filtro que usa el listado de ONUs.
         `senal_baja` se calcula en la base —migración 44— justamente para que
         la regla viva en un solo lugar: si el umbral cambia, cambia para el
         número de esta tarjeta y para la lista que abre, a la vez. */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_onus_clientes').select('onu_id, sn, cliente, nombre_en_la_olt, rx_power_dbm, olt, ruta_onu', {
                count: 'exact'
            }).eq('senal_baja', true).order('rx_power_dbm')/* Se cuenta en la base y se bajan solo las que se dibujan. Sin esto,
           un ISP con doscientas ONUs degradadas se las bajaba TODAS para
           mostrar un número y cuatro filas — y además el número habría quedado
           tapado por el tope de mil filas de la API. */ .limit(6),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_instalaciones').select('id, numero, cliente, nombre, tecnico_nombre, estado, hora').eq('fecha', hoy),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('tecnicos').select('id, nombre').eq('activo', true).order('nombre'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_expedientes').select('id').eq('completo', false),
            /* Los pausados cuya fecha ya pasó.
         Quedan sin servicio y sin factura, así que no generan ningún reclamo:
         el abonado cree que sigue de viaje y el ISP no cobra. Es una pérdida
         silenciosa, y la única forma de enterarse es que alguien se acuerde. */ __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('clientes').select('id, nombre, suspendido_motivo, suspendido_hasta', {
                count: 'exact'
            }).eq('estado', 'suspendido').not('suspendido_hasta', 'is', null).lt('suspendido_hasta', hoy).order('suspendido_hasta').limit(6),
            // Para las tendencias: tickets nuevos (28 días) y cobros (60 días). Solo
            // fecha y monto: cada punto es un día.
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('v_tickets').select('created_at').gte('created_at', haceDias(28)).limit(5000),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].from('pagos').select('fecha_pago, monto').eq('anulado', false).gte('fecha_pago', haceDias(60)).limit(10000)
        ];
        Promise.allSettled(consultas).then((res)=>{
            if (!vivo) return;
            // Una vista que falla devuelve lista vacía y el resto del panel sigue.
            const filas = (i)=>res[i].status === 'fulfilled' ? res[i].value.data ?? [] : [];
            // El total que informa la base, para las consultas que no bajan todo.
            const cuantas = (i)=>res[i].status === 'fulfilled' ? res[i].value.count ?? filas(i).length : 0;
            // Si TODAS fallaron no es una vista faltante, es la conexión: ahí sí
            // conviene decirlo en vez de mostrar un panel lleno de ceros.
            const todasFallaron = res.every((r)=>r.status === 'rejected' || r.value?.error);
            if (todasFallaron) {
                setError(res.find((r)=>r.value?.error)?.value.error ?? new Error('Sin conexión'));
            }
            setD({
                olts: filas(0),
                nodos: filas(1),
                tickets: filas(2),
                pagos: filas(3).filter((p)=>!p.anulado),
                facturas: filas(4),
                clientes: filas(5),
                onusBajas: filas(6),
                onusBajasTotal: cuantas(6),
                instalaciones: filas(7),
                tecnicos: filas(8),
                expedientes: filas(9),
                pausadosVencidos: filas(10),
                pausadosVencidosTotal: cuantas(10),
                ticketsRecientes: filas(11),
                cobros60: filas(12)
            });
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].tareas.estado().then((r)=>vivo && setProblemas(r?.problemas ?? null)).catch(()=>{});
        return ()=>{
            vivo = false;
        };
    }, []);
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!d) return null;
        const hoy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fechaLocal"])();
        const conSaldo = d.facturas.filter((f)=>Number(f.saldo) > 0);
        const porVencer = conSaldo.filter((f)=>f.fecha_vencimiento && f.fecha_vencimiento >= hoy);
        /* La MISMA función que usa el listado de abonados para su filtro. Es lo
       que garantiza que el número de esta tarjeta y la lista que abre hablen
       de la misma gente: si el criterio cambia, cambia para los dos. */ const idsVencidos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$abonados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientesConVencido"])(d.facturas, hoy);
        const vencidas = conSaldo.filter((f)=>idsVencidos.has(f.client_id));
        return {
            activos: d.clientes.filter((c)=>c.estado === 'activo').length,
            abiertos: d.tickets.filter(ABIERTO),
            vencidoMonto: vencidas.reduce((s, f)=>s + Number(f.saldo || 0), 0),
            vencidasCuentas: idsVencidos.size,
            cartera: [
                {
                    nombre: 'Al día',
                    valor: d.clientes.filter((c)=>c.estado === 'activo').length - new Set(conSaldo.map((f)=>f.client_id)).size,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEX"].verde
                },
                {
                    nombre: 'Por vencer',
                    valor: new Set(porVencer.map((f)=>f.client_id)).size,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEX"].ambar
                },
                {
                    nombre: 'Vencido',
                    valor: idsVencidos.size,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEX"].rojo
                }
            ].map((x)=>({
                    ...x,
                    valor: Math.max(0, x.valor)
                })),
            visitasHoy: d.instalaciones,
            enCurso: d.instalaciones.filter((i)=>i.estado === 'en_curso').length,
            ...tendencias(d, hoy),
            cobradoHoy: d.pagos.filter((p)=>String(p.fecha_pago || '').slice(0, 10) === hoy).reduce((s, p)=>s + Number(p.monto || 0), 0)
        };
    }, [
        d
    ]);
    if (!d || !m) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelCargando, {}, void 0, false, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 421,
        columnNumber: 24
    }, this);
    return(// En el teléfono, por urgencia: números, tickets, red (alertas primero),
    // áreas, cobros. En pantallas grandes, el orden de siempre (lg:order-none).
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "t-titulo text-xl font-extrabold text-slate-100",
                        children: "Panel"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-xs text-slate-500",
                        children: "El estado del sistema, y la puerta a cada módulo"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TareasConProblemas, {
                problemas: problemas,
                puede: abre
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PausadosVencidos, {
                abonados: d.pausadosVencidos,
                total: d.pausadosVencidosTotal,
                puede: abre
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-kpis",
                children: [
                    abre('/clientes') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        etiqueta: "Abonados activos",
                        valor: numero(m.activos),
                        pista: `de ${numero(d.clientes.length)} en el padrón`,
                        a: "/clientes"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 453,
                        columnNumber: 11
                    }, this),
                    abre('/soporte') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"],
                        etiqueta: "Tickets abiertos",
                        valor: numero(m.abiertos.length),
                        pista: `${m.abiertos.filter((t)=>t.prioridad === 'alta').length} de prioridad alta`,
                        a: "/soporte?estado=pendientes",
                        tono: m.abiertos.some((t)=>t.prioridad === 'alta') ? 'critico' : m.abiertos.length ? 'aviso' : 'ok',
                        serie: m.serieTickets,
                        variacion: m.variacionTickets,
                        mejorSiBaja: true
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 462,
                        columnNumber: 11
                    }, this),
                    abre('/clientes') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                        etiqueta: "Cartera vencida",
                        valor: moneda(m.vencidoMonto),
                        pista: `${numero(m.vencidasCuentas)} cuentas con saldo vencido`,
                        a: "/clientes?deuda=vencida",
                        tono: m.vencidoMonto > 0 ? 'critico' : 'ok'
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 478,
                        columnNumber: 11
                    }, this),
                    abre('/onus') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
                        etiqueta: "ONUs con señal baja",
                        valor: numero(d.onusBajasTotal),
                        pista: `por debajo de ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$olt$2f$ONUStatsCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UMBRAL_RX_DBM"]} dBm`,
                        a: "/onus?senal=baja",
                        tono: d.onusBajasTotal ? 'critico' : 'ok'
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 488,
                        columnNumber: 11
                    }, this),
                    abre('/clientes/instalaciones') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                        etiqueta: "Visitas técnicas hoy",
                        valor: numero(m.visitasHoy.length),
                        pista: `${m.enCurso} en curso`,
                        a: "/clientes/instalaciones"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 498,
                        columnNumber: 11
                    }, this),
                    abre('/instalaciones/nuevas') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"],
                        etiqueta: "Por despachar",
                        valor: numero(d.expedientes.length),
                        pista: "ventas cerradas sin orden",
                        a: "/instalaciones/nuevas",
                        tono: d.expedientes.length ? 'aviso' : 'ok'
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "order-3 lg:order-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ResumenAreas$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                    lineNumber: 521,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "order-1 grid gap-5 lg:order-none lg:grid-cols-2 xl:grid-cols-3",
                children: [
                    abre('/soporte') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Seccion, {
                        titulo: "Tickets de soporte",
                        subtitulo: "Por estado, los más recientes primero",
                        a: "/soporte",
                        className: "order-2 lg:order-none lg:col-span-2",
                        children: m.abiertos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Vacio, {
                            titulo: "No hay tickets sin resolver",
                            sub: "La bandeja está limpia"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 539,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-3",
                            children: [
                                [
                                    'Sin asignar',
                                    [
                                        'abierto'
                                    ]
                                ],
                                [
                                    'Asignados',
                                    [
                                        'asignado'
                                    ]
                                ],
                                [
                                    'En curso',
                                    [
                                        'en_ruta',
                                        'en_proceso'
                                    ]
                                ]
                            ].map(([titulo, estados])=>{
                                const lista = m.abiertos.filter((t)=>estados.includes(t.estado));
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2.5 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-wider text-slate-600",
                                                    children: titulo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                    lineNumber: 551,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "t-dato text-[11px] font-bold text-slate-400",
                                                    children: lista.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                    lineNumber: 554,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                            lineNumber: 550,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: lista.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "t-panel p-3 text-[11px] text-slate-500",
                                                children: "Ninguno"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 560,
                                                columnNumber: 27
                                            }, this) : lista.slice(0, 3).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                    to: `/soporte/${t.id}`,
                                                    className: "t-panel t-lift block p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "t-dato text-[10px] font-bold text-slate-500",
                                                                    children: [
                                                                        "#",
                                                                        t.codigo
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 33
                                                                }, this),
                                                                t.prioridad && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `t-badge t-badge-${{
                                                                        alta: 'critico',
                                                                        media: 'aviso',
                                                                        baja: 'neutro'
                                                                    }[t.prioridad] ?? 'neutro'}`,
                                                                    children: t.prioridad
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                            lineNumber: 568,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 truncate text-xs font-semibold text-slate-200",
                                                            children: t.cliente || t.nombre || 'Sin cliente'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                            lineNumber: 584,
                                                            columnNumber: 31
                                                        }, this),
                                                        t.tecnico && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 truncate text-[11px] text-slate-500",
                                                            children: t.tecnico
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                            lineNumber: 588,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, t.id, true, {
                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                    lineNumber: 563,
                                                    columnNumber: 29
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                            lineNumber: 558,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, titulo, true, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 549,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 541,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this),
                    abre('/monitoreo') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Seccion, {
                        titulo: "Alertas técnicas",
                        subtitulo: "Lo que hay que mirar ahora",
                        a: "/monitoreo/incidencias",
                        className: "order-1 lg:order-none",
                        children: d.onusBajasTotal === 0 && d.nodos.filter((n)=>n.estado === 'down').length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Vacio, {
                            titulo: "Sin alertas activas",
                            sub: "Todo operando con normalidad"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 607,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2",
                            children: [
                                d.nodos.filter((n)=>n.estado === 'down').slice(0, 4).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            to: "/monitoreo",
                                            className: "t-panel t-lift flex items-start gap-2.5 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    size: 15,
                                                    className: "mt-0.5 shrink-0 text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                    lineNumber: 616,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-xs font-semibold text-slate-200",
                                                            children: [
                                                                n.nombre,
                                                                " sin responder"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                            lineNumber: 618,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "t-dato mt-0.5 truncate text-[11px] text-slate-500",
                                                            children: [
                                                                n.equipo,
                                                                " · ",
                                                                n.ip
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                            lineNumber: 621,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                    lineNumber: 617,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                            lineNumber: 615,
                                            columnNumber: 23
                                        }, this)
                                    }, `n-${n.id}`, false, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 614,
                                        columnNumber: 21
                                    }, this)),
                                abre('/onus') && d.onusBajas.slice(0, 4).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            to: `/onus/${o.onu_id}`,
                                            className: "t-panel t-lift flex items-start gap-2.5 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    size: 15,
                                                    className: "mt-0.5 shrink-0 text-amber-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                    lineNumber: 639,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-xs font-semibold text-slate-200",
                                                            children: [
                                                                "Señal degradada",
                                                                o.cliente || o.nombre_en_la_olt ? ` · ${o.cliente ?? o.nombre_en_la_olt}` : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                            lineNumber: 641,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "t-dato mt-0.5 truncate text-[11px] text-slate-500",
                                                            children: [
                                                                o.sn,
                                                                " · ",
                                                                o.rx_power_dbm,
                                                                " dBm",
                                                                o.ruta_onu ? ` · ${o.ruta_onu}` : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                            lineNumber: 647,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                    lineNumber: 640,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                            lineNumber: 635,
                                            columnNumber: 21
                                        }, this)
                                    }, `o-${o.onu_id}`, false, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 630,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 609,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 605,
                        columnNumber: 11
                    }, this),
                    abre('/pagos') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Seccion, {
                        titulo: "Últimos cobros registrados",
                        subtitulo: `${moneda(m.cobradoHoy)} cobrados hoy`,
                        a: "/pagos",
                        className: "order-6 lg:order-none",
                        children: d.pagos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Vacio, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                            titulo: "Todavía no se registró ningún cobro"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 667,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "divide-y divide-[rgba(15,23,42,0.06)]",
                            children: d.pagos.slice(0, 6).map((p)=>{
                                const { label, icono: Icono } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$estados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formaDePago"])(p.forma_pago);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        to: p.client_id ? `/clientes/${p.client_id}` : '/pagos',
                                        className: "flex items-center gap-3 py-2.5 transition hover:text-sky-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                                                size: 15,
                                                className: "shrink-0 text-slate-600",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 680,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block truncate text-[13px] font-semibold text-slate-200",
                                                        children: p.cliente || p.cliente_nombre || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 682,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block truncate text-[11px] text-slate-500",
                                                        children: [
                                                            label,
                                                            " · ",
                                                            p.created_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fechaHora"])(p.created_at) : '—'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 685,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 681,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "t-dato shrink-0 text-[13px] font-bold text-slate-100",
                                                children: moneda(p.monto)
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 689,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 676,
                                        columnNumber: 23
                                    }, this)
                                }, p.id, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 673,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 669,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 660,
                        columnNumber: 11
                    }, this),
                    abre('/clientes') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Seccion, {
                        titulo: "Estado de la cartera",
                        subtitulo: "Abonados por situación de pago",
                        a: "/clientes",
                        className: "order-5 lg:order-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarraProporcion"], {
                            partes: m.cartera
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 703,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 700,
                        columnNumber: 11
                    }, this),
                    abre('/pagos') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Seccion, {
                        titulo: "Cobrado en 30 días",
                        subtitulo: "Lo que entró, día por día",
                        a: "/transacciones",
                        className: "order-6 lg:order-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "t-kpi-valor",
                                children: moneda(m.cobrado30)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 714,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[11px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Variacion"], {
                                    valor: m.variacionCobros,
                                    sufijo: "vs. los 30 días anteriores"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 716,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 715,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tendencia"], {
                                    serie: m.serieCobros,
                                    fluido: true,
                                    alto: 96,
                                    className: "text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 719,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 718,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 flex justify-between text-[11px] text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "hace 30 días"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 722,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            moneda(m.cobradoHoy),
                                            " hoy"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 723,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 721,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 708,
                        columnNumber: 11
                    }, this),
                    abre('/gpon') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Seccion, {
                        titulo: "Topología GPON",
                        subtitulo: "Cada OLT, con sus ONUs en línea y caídas",
                        a: "/gpon",
                        className: "order-3 lg:order-none",
                        children: d.olts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Vacio, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                            titulo: "No hay OLTs cargadas",
                            sub: "Registra la primera en el módulo OLT"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 736,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResumenOlts, {
                            olts: d.olts
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 742,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 729,
                        columnNumber: 11
                    }, this),
                    abre('/soporte/tecnicos') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Seccion, {
                        titulo: "Personal en campo",
                        subtitulo: "Quién está y con qué",
                        a: "/soporte/tecnicos",
                        className: "order-4 lg:order-none",
                        children: d.tecnicos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Vacio, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"],
                            titulo: "No hay técnicos activos"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 750,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2",
                            children: d.tecnicos.slice(0, 5).map((t)=>{
                                const suyas = m.visitasHoy.filter((i)=>i.tecnico_nombre === t.nombre);
                                const enCurso = suyas.find((i)=>i.estado === 'en_curso');
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/soporte/tecnicos",
                                        className: "t-panel t-lift flex items-center gap-3 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "t-dato grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F0F9FF] text-[11px] font-bold text-sky-400",
                                                children: t.nombre.split(' ').slice(0, 2).map((p)=>p[0]).join('').toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 762,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-xs font-semibold text-slate-200",
                                                        children: t.nombre
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 771,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-[11px] text-slate-500",
                                                        children: enCurso ? `En sitio · ${enCurso.cliente ?? enCurso.nombre ?? ''}` : suyas.length ? `${suyas.length} visita${suyas.length > 1 ? 's' : ''} hoy` : 'Sin visitas hoy'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 772,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 770,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `t-badge ${enCurso ? 't-badge-aviso' : 't-badge-ok'}`,
                                                children: enCurso ? 'En sitio' : 'Libre'
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 780,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 758,
                                        columnNumber: 23
                                    }, this)
                                }, t.id, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 757,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 752,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 748,
                        columnNumber: 11
                    }, this),
                    abre('/monitoreo') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Seccion, {
                        titulo: "Enlaces de radio y PTP",
                        subtitulo: "Los nodos que sostienen la red fuera de la fibra",
                        a: "/monitoreo",
                        className: "order-7 lg:order-none lg:col-span-2 xl:col-span-1",
                        children: d.nodos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Vacio, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
                            titulo: "No hay nodos cargados",
                            sub: "Se registran en Monitoreo de red"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 800,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "grid lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-1",
                            children: d.nodos.slice(0, 6).map((n)=>{
                                const meta = {
                                    up: [
                                        't-badge-ok',
                                        'En línea',
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
                                        'text-emerald-400'
                                    ],
                                    down: [
                                        't-badge-critico',
                                        'Sin conexión',
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"],
                                        'text-red-400'
                                    ],
                                    degradado: [
                                        't-badge-aviso',
                                        'Degradada',
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                                        'text-amber-400'
                                    ]
                                }[n.estado] ?? [
                                    't-badge-neutro',
                                    'Sin datos',
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                    'text-slate-500'
                                ];
                                const [clase, texto, Icono, colorIcono] = meta;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b border-[rgba(15,23,42,0.06)] last:border-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/monitoreo",
                                        className: "flex items-center gap-3 py-2.5 transition hover:text-sky-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block truncate text-[13px] font-semibold text-slate-200",
                                                        children: n.nombre
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 814,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "t-dato block truncate text-[11px] text-slate-500",
                                                        children: [
                                                            n.equipo,
                                                            n.ip,
                                                            n.punto
                                                        ].filter(Boolean).join(' · ') || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 815,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 813,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `t-badge shrink-0 ${clase}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                                                        size: 11,
                                                        className: colorIcono
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 820,
                                                        columnNumber: 27
                                                    }, this),
                                                    texto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 819,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 812,
                                        columnNumber: 23
                                    }, this)
                                }, n.id, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 811,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 802,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 793,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 530,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 426,
        columnNumber: 5
    }, this));
}
/** Salud de una OLT: 'critico' si está caída o con más del 20% de ONUs caídas. */ function saludDeOlt(o) {
    const caidas = Number(o.caidas || 0);
    const total = Number(o.onus || 0);
    return o.olt_estado === 'down' || caidas > total * 0.2 ? 'critico' : caidas > 0 ? 'aviso' : 'ok';
}
/**
 * La red GPON de un vistazo.
 *
 * Diez tarjetas iguales que dicen "Operativa 1/1" no se leen: se ve una línea
 * de resumen, las OLT con problemas como tarjeta completa arriba, y las que
 * andan bien como una cuadrícula compacta de puntos verdes.
 */ function ResumenOlts({ olts }) {
    const conProblemas = olts.filter((o)=>saludDeOlt(o) !== 'ok');
    const sanas = olts.filter((o)=>saludDeOlt(o) === 'ok');
    const enLinea = olts.reduce((s, o)=>s + Number(o.online || 0), 0);
    const onus = olts.reduce((s, o)=>s + Number(o.onus || 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `font-bold ${conProblemas.length ? 'text-amber-400' : 'text-emerald-400'}`,
                        children: [
                            numero(sanas.length),
                            "/",
                            numero(olts.length),
                            " OLT operativas"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 858,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500",
                        children: [
                            numero(enLinea),
                            " de ",
                            numero(onus),
                            " ONUs en línea"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 861,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 857,
                columnNumber: 7
            }, this),
            conProblemas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3",
                children: conProblemas.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OltTarjeta, {
                        o: o
                    }, o.olt_id, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 868,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 866,
                columnNumber: 9
            }, this),
            sanas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-1",
                children: sanas.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            to: `/olts/${o.olt_id}`,
                            className: "flex items-center gap-2 rounded-lg px-2 py-1 text-[13px] transition hover:bg-slate-800/60",
                            title: "Operativa",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 shrink-0 rounded-full bg-emerald-500",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 881,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-0 flex-1 truncate text-slate-200",
                                    children: o.nombre
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 882,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "t-dato shrink-0 text-[11px] text-slate-500",
                                    children: [
                                        numero(o.online),
                                        "/",
                                        numero(o.onus)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 883,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 876,
                            columnNumber: 15
                        }, this)
                    }, o.olt_id, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 875,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 873,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 856,
        columnNumber: 5
    }, this);
}
/** Tarjeta completa de una OLT (las que tienen problemas). */ function OltTarjeta({ o }) {
    const caidas = Number(o.caidas || 0);
    const total = Number(o.onus || 0);
    const salud = saludDeOlt(o);
    const etiqueta = {
        ok: 'Operativa',
        aviso: 'Degradada',
        critico: 'Crítica'
    }[salud];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
        to: `/olts/${o.olt_id}`,
        className: "t-panel t-lift block p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "t-titulo truncate text-[13px] font-bold text-slate-100",
                                children: o.nombre
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 910,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "t-dato mt-0.5 text-[11px] text-slate-500",
                                children: [
                                    "OLT-",
                                    String(o.numero).padStart(2, '0')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 913,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 909,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `t-badge t-badge-${salud === 'ok' ? 'ok' : salud}`,
                        children: etiqueta
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 917,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 908,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-end justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "t-dato text-lg font-bold leading-none text-slate-100",
                                children: [
                                    numero(o.online),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-slate-500",
                                        children: [
                                            ' ',
                                            "/ ",
                                            numero(total)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 926,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 924,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[11px] text-slate-500",
                                children: "ONUs en línea"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 931,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 923,
                        columnNumber: 9
                    }, this),
                    caidas > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "t-dato text-[11px] font-semibold text-red-400",
                        children: [
                            numero(caidas),
                            " caídas"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 934,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 922,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full bg-gradient-to-r from-sky-700 to-sky-400",
                    style: {
                        width: `${total ? Number(o.online) / total * 100 : 0}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                    lineNumber: 947,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 943,
                columnNumber: 7
            }, this)
        ]
    }, o.olt_id, true, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 903,
        columnNumber: 5
    }, this);
}
/** El panel mientras carga: el hueco con la forma que va a tener. */ const PanelCargando = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-32"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 960,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "mt-2 h-3 w-64"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 961,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 959,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-kpis",
                children: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "t-card h-[132px] animate-pulse"
                    }, i, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 965,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 963,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "t-card h-64 animate-pulse lg:col-span-2"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 969,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "t-card h-64 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                        lineNumber: 970,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 968,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 958,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
/* ── Lo que la última corrida no pudo hacer ────────────────────────────────── */ const TAREAS = {
    mora: {
        titulo: 'Corte por mora',
        queSignifica: 'Esos abonados siguen navegando sin haber pagado.',
        donde: '/red/routers',
        verbo: 'Revisar los routers'
    },
    cortes: {
        titulo: 'Cortes y promesas',
        queSignifica: 'Quedaron cortes o reconexiones sin aplicar en el router.',
        donde: '/red/routers',
        verbo: 'Revisar los routers'
    },
    avisos_pago: {
        titulo: 'Avisos de pago',
        queSignifica: 'Esos abonados no recibieron su aviso.',
        donde: '/ajustes/crontab',
        verbo: 'Ver la corrida'
    }
};
/**
 * Solo aparece cuando hay algo que arreglar.
 *
 * ── Por qué acá y no en Tareas programadas ──
 *
 * Ahí ya estaba, y por eso no servía: nadie abre todos los días una pantalla
 * que casi siempre está bien. Uno se entera de que un corte falló cuando llama
 * el cliente o cuando falta la plata a fin de mes.
 *
 * El panel es lo que se abre igual. Una tarjeta que solo existe cuando hay
 * problema no se vuelve parte del paisaje — el día que aparece, aparece.
 *
 * ── Por qué dice qué significa y no solo cuántos ──
 *
 * "3 fallidos en corte por mora" no mueve a nadie. "Esos abonados siguen
 * navegando sin haber pagado" sí, porque nombra la consecuencia — que es lo que
 * decide si vale la pena dejar lo que uno estaba haciendo.
 */ /**
 * Los pausados que ya deberían haber vuelto.
 *
 * Es la única pérdida del sistema que no genera ningún reclamo: el abonado
 * quedó sin servicio y sin factura, cree que sigue de viaje, y el ISP no cobra.
 * Nadie llama porque a nadie le molesta — hasta que pasan tres meses.
 *
 * Por eso va en el panel y no en un listado: hay que tropezarse con esto, no
 * ir a buscarlo.
 */ function PausadosVencidos({ abonados, total, puede }) {
    if (!abonados?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "t-card border-l-4 border-l-amber-500 p-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-start justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-w-0 items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "t-kpi-icon shrink-0 bg-[#FFFBEB] text-amber-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__["PauseCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                lineNumber: 1034,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 1033,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "t-titulo text-sm font-bold text-slate-100",
                                    children: total === 1 ? 'Un abonado pausado ya pasó su fecha' : `${total} abonados pausados ya pasaron su fecha`
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 1037,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-0.5 text-xs text-slate-500",
                                    children: "Siguen sin internet y sin facturarse. Si ya volvieron, hay que reactivarlos."
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 1042,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 space-y-0.5",
                                    children: [
                                        abonados.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-[11px] text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                        to: `/clientes/${c.id}`,
                                                        className: "font-medium text-slate-400 hover:text-sky-400",
                                                        children: c.nombre
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 1049,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "t-dato",
                                                        children: [
                                                            " · volvía el ",
                                                            c.suspendido_hasta
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 1052,
                                                        columnNumber: 19
                                                    }, this),
                                                    c.suspendido_motivo ? ` · ${c.suspendido_motivo}` : ''
                                                ]
                                            }, c.id, true, {
                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                lineNumber: 1048,
                                                columnNumber: 17
                                            }, this)),
                                        total > abonados.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-[11px] text-slate-600",
                                            children: [
                                                "y ",
                                                total - abonados.length,
                                                " más"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                            lineNumber: 1057,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 1046,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 1036,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                    lineNumber: 1032,
                    columnNumber: 9
                }, this),
                puede('/clientes') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                    to: "/clientes?estado=suspendido",
                    className: "t-btn t-btn-marca shrink-0",
                    children: "Ver los pausados"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                    lineNumber: 1064,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/Dashboard.jsx",
            lineNumber: 1031,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 1030,
        columnNumber: 5
    }, this);
}
function TareasConProblemas({ problemas, puede }) {
    if (!problemas) return null;
    const conFalla = Object.entries(problemas).filter(([, p])=>p && (p.error || p.fallidos > 0));
    if (!conFalla.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: conFalla.map(([clave, p])=>{
            const t = TAREAS[clave] ?? {
                titulo: clave,
                queSignifica: '',
                donde: '/ajustes/crontab',
                verbo: 'Ver'
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-card border-l-4 border-l-amber-500 p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-start justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "t-kpi-icon shrink-0 bg-[#FFFBEB] text-amber-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                        lineNumber: 1090,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 1089,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "t-titulo text-sm font-bold text-slate-100",
                                            children: p.error ? `${t.titulo}: la tarea no pudo correr` : `${t.titulo}: ${p.fallidos} ${p.fallidos === 1 ? 'caso quedó' : 'casos quedaron'} sin aplicar`
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                            lineNumber: 1093,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-xs text-slate-500",
                                            children: p.error ? p.error : t.queSignifica
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                            lineNumber: 1098,
                                            columnNumber: 19
                                        }, this),
                                        p.ejemplos?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-2 space-y-0.5",
                                            children: [
                                                p.ejemplos.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "t-dato truncate text-[11px] text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                className: "text-slate-400",
                                                                children: e.cliente ?? '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                                lineNumber: 1106,
                                                                columnNumber: 27
                                                            }, this),
                                                            e.motivo ? ` · ${e.motivo}` : ''
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                        lineNumber: 1105,
                                                        columnNumber: 25
                                                    }, this)),
                                                p.fallidos > p.ejemplos.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-[11px] text-slate-600",
                                                    children: [
                                                        "y ",
                                                        p.fallidos - p.ejemplos.length,
                                                        " más"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                                    lineNumber: 1111,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                            lineNumber: 1103,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 1092,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 1088,
                            columnNumber: 15
                        }, this),
                        puede(t.donde) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            to: t.donde,
                            className: "t-btn t-btn-marca shrink-0",
                            children: [
                                t.verbo,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                                    lineNumber: 1126,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/Dashboard.jsx",
                            lineNumber: 1121,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/Dashboard.jsx",
                    lineNumber: 1087,
                    columnNumber: 13
                }, this)
            }, clave, false, {
                fileName: "[project]/src/crm-pages/Dashboard.jsx",
                lineNumber: 1086,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/Dashboard.jsx",
        lineNumber: 1082,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_9c524a3c._.js.map