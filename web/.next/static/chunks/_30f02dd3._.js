(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/jornadaFoto.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subirFotoIngreso",
    ()=>subirFotoIngreso,
    "ubicacionDelIngreso",
    ()=>ubicacionDelIngreso,
    "urlDeFoto",
    ()=>urlDeFoto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
;
;
/**
 * La foto con la que el técnico abre su jornada.
 *
 * ── Por qué vive en su propio archivo ──
 *
 * La usan dos pantallas que no se parecen en nada: la del técnico, que la saca
 * en el teléfono, y la de revisión, que la mira desde una computadora. Si la
 * subida viviera en la primera, la segunda tendría que conocer la forma de la
 * ruta para poder pedir la URL — y el día que la ruta cambie, una de las dos
 * se entera y la otra no.
 *
 * ── Por qué subir nunca tira el error hacia afuera ──
 *
 * La jornada se abre con foto o sin ella. El técnico que está en una zona sin
 * cobertura tiene que poder empezar a trabajar igual; si la foto fallara la
 * apertura, empezaría sin registrar nada, que es peor que no tener la foto.
 *
 * Por eso `subirFotoIngreso` devuelve `{ ok, error }` en vez de lanzar: quien
 * llama decide si eso es un aviso al costado o un problema, y en la pantalla
 * del técnico es un aviso.
 */ const BUCKET = 'jornadas';
async function subirFotoIngreso(jornadaId, archivo) {
    if (!jornadaId || !archivo) return {
        ok: false,
        error: new Error('Falta la jornada o la foto')
    };
    try {
        const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["comprimirImagen"])(archivo);
        const ruta = "".concat(jornadaId, "/ingreso-").concat(Date.now(), ".jpg");
        const { error: errSubida } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].storage.from(BUCKET).upload(ruta, blob, {
            contentType: 'image/jpeg'
        });
        if (errSubida) throw errSubida;
        /**
     * La hora de la foto se guarda aparte de `inicio_at`.
     *
     * No son lo mismo: sin señal la jornada se abre a las 7 y la foto sube a
     * las 9, cuando el técnico pasa por una zona con cobertura. Esa diferencia
     * es un dato —dice dónde estuvo trabajando— y machacarla con una sola hora
     * la borraría.
     */ const { error: errFila } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('jornadas').update({
            foto_ingreso: ruta,
            foto_ingreso_at: new Date().toISOString()
        }).eq('id', jornadaId);
        if (errFila) throw errFila;
        return {
            ok: true,
            ruta
        };
    } catch (error) {
        return {
            ok: false,
            error
        };
    }
}
async function urlDeFoto(ruta) {
    let segundos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 300;
    if (!ruta) return null;
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].storage.from(BUCKET).createSignedUrl(ruta, segundos);
    var _data_signedUrl;
    return (_data_signedUrl = data === null || data === void 0 ? void 0 : data.signedUrl) !== null && _data_signedUrl !== void 0 ? _data_signedUrl : null;
}
async function ubicacionDelIngreso(tecnicoId, hoy) {
    const donde = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ubicacionActual"])();
    if (!donde) return {
        lat: null,
        lng: null,
        precision: null,
        primerTrabajoId: null,
        distancia: null
    };
    const base = {
        lat: donde.lat,
        lng: donde.lng,
        precision: donde.precision != null ? Math.round(donde.precision) : null,
        primerTrabajoId: null,
        distancia: null
    };
    if (!tecnicoId || !hoy) return base;
    /**
   * La PRIMERA por hora, y solo entre las que tienen coordenada.
   *
   * Si la de las 8:00 no tiene ubicación cargada y la de las 10:00 sí, se
   * compara contra la de las 10:00 — y por eso se guarda cuál fue. Comparar
   * contra una orden sin coordenada no da un cero: no da nada.
   */ const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_instalaciones').select('id, latitud, longitud, hora').eq('tecnico_id', tecnicoId).eq('fecha', hoy).not('latitud', 'is', null).not('longitud', 'is', null).order('hora', {
        nullsFirst: false
    }).limit(1);
    const primera = data === null || data === void 0 ? void 0 : data[0];
    if (!primera) return base;
    return {
        ...base,
        primerTrabajoId: primera.id,
        distancia: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["distanciaEnMetros"])({
            lat: donde.lat,
            lng: donde.lng
        }, {
            lat: primera.latitud,
            lng: primera.longitud
        })
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mantenimiento.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cuánto le falta a un vehículo para su próximo servicio.
 *
 * ── Por qué vive acá y no en el componente ──
 *
 * Porque es la regla del negocio, y decide si alguien lleva una camioneta al
 * taller. Adentro de un .jsx solo se puede probar montando React; acá se prueba
 * con el runner de node, igual que `abonados.js` — que es el mismo motivo por
 * el que ese archivo tampoco importa nada.
 *
 * ── Los dos criterios ──
 *
 * El aceite va por kilómetros, la matrícula por fecha, y algunos por los dos.
 * Con los dos, vence el que llegue primero: el aceite se degrada con el tiempo
 * aunque el vehículo esté parado.
 */ /** Cuán urgente es, mirando los dos criterios: gana el que esté peor. */ __turbopack_context__.s([
    "cuantoFalta",
    ()=>cuantoFalta,
    "urgencia",
    ()=>urgencia
]);
function urgencia(m) {
    if (m.sin_registro) return 'sin_registro';
    const porKm = m.km_restantes == null ? null : m.km_restantes <= 0 ? 'vencido' : m.km_restantes <= 500 ? 'pronto' : 'ok';
    const porFecha = m.dias_restantes == null ? null : m.dias_restantes <= 0 ? 'vencido' : m.dias_restantes <= 15 ? 'pronto' : 'ok';
    const peor = [
        porKm,
        porFecha
    ].filter(Boolean);
    if (peor.includes('vencido')) return 'vencido';
    if (peor.includes('pronto')) return 'pronto';
    if (peor.includes('ok')) return 'ok';
    // Con intervalo pero sin nada medible todavía: el tipo va por km y el último
    // servicio se anotó sin odómetro.
    return 'sin_dato';
}
function cuantoFalta(m) {
    if (m.sin_registro) return 'Nunca se registró';
    const partes = [];
    if (m.km_restantes != null) {
        partes.push(m.km_restantes <= 0 ? "".concat(Math.abs(m.km_restantes).toLocaleString('es-EC'), " km pasado") : "faltan ".concat(m.km_restantes.toLocaleString('es-EC'), " km"));
    }
    if (m.dias_restantes != null) {
        partes.push(m.dias_restantes <= 0 ? "".concat(Math.abs(m.dias_restantes), " días vencido") : "faltan ".concat(m.dias_restantes, " días"));
    }
    return partes.join(' · ') || 'Sin datos para calcular';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/tecnico/JornadaPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JornadaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fuel.js [app-client] (ecmascript) <export default as Fuel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as StopCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/campo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jornadaFoto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jornadaFoto.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mantenimiento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mantenimiento.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function JornadaPage() {
    _s();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [vehiculos, setVehiculos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jornada, setJornada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [estado, setEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        vehiculo_id: '',
        km_inicio: '',
        km_fin: ''
    });
    const [carga, setCarga] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * Lo que le falta al vehículo de hoy.
   *
   * Se pide acá y no en el tablero de inicio porque el aviso solo tiene sentido
   * al lado del odómetro: el técnico está mirando el tablero del vehículo, que
   * es el único momento del día en que "faltan 300 km para el aceite" significa
   * algo concreto.
   */ const [pendiente, setPendiente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    /**
   * La foto de ingreso.
   *
   * `foto` es lo que se sacó y todavía no subió; `subiendo` corta el doble
   * toque; `avisoFoto` es lo que se le dice al técnico cuando la subida
   * falla — que NO es un error de la jornada, porque la jornada ya se abrió.
   */ const [foto, setFoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subiendo, setSubiendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avisoFoto, setAvisoFoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "JornadaPage.useCallback[recargar]": async ()=>{
            var _v_data;
            if (!(perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id)) {
                setCargando(false);
                return;
            }
            const [v, j] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('vehiculos').select('*').eq('activo', true).order('nombre'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_jornadas').select('*').eq('tecnico_id', perfil.tecnico_id).eq('fecha', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoyISO"])()).maybeSingle()
            ]);
            var _v_data1;
            setVehiculos((_v_data1 = v.data) !== null && _v_data1 !== void 0 ? _v_data1 : []);
            var _j_data;
            setJornada((_j_data = j.data) !== null && _j_data !== void 0 ? _j_data : null);
            if (j.data) {
                var _j_data_vehiculo_id, _j_data_km_inicio, _j_data_km_fin;
                setForm({
                    vehiculo_id: (_j_data_vehiculo_id = j.data.vehiculo_id) !== null && _j_data_vehiculo_id !== void 0 ? _j_data_vehiculo_id : '',
                    km_inicio: (_j_data_km_inicio = j.data.km_inicio) !== null && _j_data_km_inicio !== void 0 ? _j_data_km_inicio : '',
                    km_fin: (_j_data_km_fin = j.data.km_fin) !== null && _j_data_km_fin !== void 0 ? _j_data_km_fin : ''
                });
                // Lo que el vehículo tiene por hacer, vencido o por vencer.
                if (j.data.vehiculo_id) {
                    const { data: mant } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_mantenimiento').select('*').eq('vehiculo_id', j.data.vehiculo_id);
                    setPendiente((mant !== null && mant !== void 0 ? mant : []).filter({
                        "JornadaPage.useCallback[recargar]": (m)=>[
                                'vencido',
                                'pronto'
                            ].includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mantenimiento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urgencia"])(m))
                    }["JornadaPage.useCallback[recargar]"]));
                }
                // Cuánto falta para la próxima carga de ESE vehículo.
                if (j.data.vehiculo_id) {
                    const { data: est } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_vehiculos').select('*').eq('id', j.data.vehiculo_id).maybeSingle();
                    setEstado(est !== null && est !== void 0 ? est : null);
                }
            } else if (((_v_data = v.data) === null || _v_data === void 0 ? void 0 : _v_data.length) === 1) {
                // Con un solo vehículo no se pregunta: se elige solo.
                setForm({
                    "JornadaPage.useCallback[recargar]": (f)=>({
                            ...f,
                            vehiculo_id: v.data[0].id
                        })
                }["JornadaPage.useCallback[recargar]"]);
            }
            setCargando(false);
        }
    }["JornadaPage.useCallback[recargar]"], [
        perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JornadaPage.useEffect": ()=>{
            recargar();
        }
    }["JornadaPage.useEffect"], [
        recargar
    ]);
    async function abrir() {
        if (!form.vehiculo_id || form.km_inicio === '') return;
        setGuardando(true);
        setError(null);
        try {
            /**
       * La ubicación se pide ANTES de escribir, y su demora se nota.
       *
       * El GPS puede tardar varios segundos; pedirlo después dejaría la jornada
       * ya abierta y la coordenada llegando tarde, o no llegando. Pedirlo antes
       * la deja guardada en la misma escritura.
       *
       * Si falla, devuelve todo en NULL y la jornada se abre igual: el técnico
       * sin señal o con el permiso de ubicación negado tiene que poder empezar.
       */ const donde = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jornadaFoto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ubicacionDelIngreso"])(perfil.tecnico_id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoyISO"])());
            // `upsert` sobre (tecnico_id, fecha), que es único: si el técnico toca dos
            // veces —o si un reintento llega tarde— actualiza en vez de duplicar.
            const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('jornadas').upsert({
                tecnico_id: perfil.tecnico_id,
                fecha: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoyISO"])(),
                vehiculo_id: form.vehiculo_id,
                km_inicio: Number(form.km_inicio),
                inicio_at: new Date().toISOString(),
                lat_ingreso: donde.lat,
                lng_ingreso: donde.lng,
                precision_ingreso_m: donde.precision,
                primer_trabajo_id: donde.primerTrabajoId,
                distancia_ingreso_m: donde.distancia
            }, {
                onConflict: 'tecnico_id,fecha'
            });
            if (err) throw err;
            /**
       * La foto va DESPUÉS de que la jornada existe, y su fallo no la voltea.
       *
       * Necesita el id de la fila para saber en qué carpeta guardarse, así que
       * no puede ir antes. Y si no sube —sin señal, que es la mitad de los
       * días— la jornada igual quedó abierta: el técnico tiene que poder
       * empezar a trabajar, y la foto se reintenta desde acá mismo cuando
       * agarre cobertura.
       */ const { data: nueva } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('jornadas').select('id').eq('tecnico_id', perfil.tecnico_id).eq('fecha', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoyISO"])()).maybeSingle();
            if (foto && (nueva === null || nueva === void 0 ? void 0 : nueva.id)) {
                const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jornadaFoto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subirFotoIngreso"])(nueva.id, foto);
                if (r.ok) setFoto(null);
                else setAvisoFoto('La jornada quedó abierta, pero la foto no subió. Probá de nuevo cuando tengas señal.');
            }
            await recargar();
        } catch (err) {
            setError(err);
        } finally{
            setGuardando(false);
        }
    }
    /** Reintentar la foto, o sacarla de nuevo si salió movida. */ async function guardarFoto() {
        if (!foto || !(jornada === null || jornada === void 0 ? void 0 : jornada.id)) return;
        setSubiendo(true);
        setAvisoFoto(null);
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jornadaFoto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subirFotoIngreso"])(jornada.id, foto);
        setSubiendo(false);
        if (r.ok) {
            setFoto(null);
            await recargar();
        } else {
            setAvisoFoto('No se pudo subir. Si no tenés señal, vas a poder más tarde.');
        }
    }
    async function cerrar() {
        if (form.km_fin === '') return;
        if (Number(form.km_fin) < Number(jornada.km_inicio)) {
            return setError(new Error("El tablero no puede marcar menos que al salir (".concat(jornada.km_inicio, " km). Revisá el número.")));
        }
        setGuardando(true);
        setError(null);
        try {
            const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('jornadas').update({
                km_fin: Number(form.km_fin),
                fin_at: new Date().toISOString()
            }).eq('id', jornada.id);
            if (err) throw err;
            await recargar();
        } catch (err) {
            setError(err);
        } finally{
            setGuardando(false);
        }
    }
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-40 animate-pulse rounded-2xl bg-[#F6F8FB]"
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
        lineNumber: 222,
        columnNumber: 24
    }, this);
    if (!(perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-16 text-center text-[14px] text-slate-400",
            children: "Tu usuario no está vinculado a un técnico, así que no se puede registrar jornada."
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
            lineNumber: 226,
            columnNumber: 7
        }, this);
    }
    if (!vehiculos.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                    size: 28,
                    className: "mx-auto mb-2 text-slate-700"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400",
                    children: "No hay vehículos cargados."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-[12px] text-slate-600",
                    children: "La oficina tiene que darlos de alta antes de poder registrar kilómetros."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
            lineNumber: 234,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-lg space-y-3",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-[13px] text-rose-300",
                children: error.message
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 247,
                columnNumber: 9
            }, this),
            (estado === null || estado === void 0 ? void 0 : estado.km_para_cargar) != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2.5 rounded-2xl border p-4 ".concat(estado.km_para_cargar <= 50 ? 'border-amber-500/40 bg-amber-500/10' : 'border-slate-800 bg-[#F6F8FB]'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__["Fuel"], {
                        size: 18,
                        className: "mt-0.5 shrink-0 ".concat(estado.km_para_cargar <= 50 ? 'text-amber-400' : 'text-slate-500')
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] font-semibold text-slate-100",
                                children: estado.km_para_cargar <= 50 ? "Cargá pronto: quedan unos ".concat(estado.km_para_cargar, " km") : "Quedan unos ".concat(estado.km_para_cargar, " km para cargar")
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[11px] text-slate-500",
                                children: [
                                    "Este vehículo hace ",
                                    estado.km_promedio_tanque,
                                    " km por tanque en promedio. Llevás",
                                    ' ',
                                    estado.km_desde_la_carga,
                                    " km desde la última carga."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 256,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvisoMantenimiento, {
                items: pendiente
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "t-card p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            " Jornada de hoy"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    !(jornada === null || jornada === void 0 ? void 0 : jornada.inicio_at) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Vehículo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: form.vehiculo_id,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            vehiculo_id: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "— elegí con cuál salís —"
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        vehiculos.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: v.id,
                                                children: [
                                                    v.nombre,
                                                    v.placa ? " · ".concat(v.placa) : ''
                                                ]
                                            }, v.id, true, {
                                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Kilometraje al salir",
                                hint: "El número del tablero, tal cual.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "number",
                                    inputMode: "numeric",
                                    value: form.km_inicio,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            km_inicio: e.target.value
                                        }),
                                    placeholder: "Ej: 84520"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FotoIngreso, {
                                foto: foto,
                                onFoto: setFoto
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "primario",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"],
                                className: "w-full py-3",
                                onClick: abrir,
                                cargando: guardando,
                                disabled: !form.vehiculo_id || form.km_inicio === '' || guardando,
                                children: "Iniciar jornada"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        label: "Salida",
                                        valor: "".concat(jornada.km_inicio, " km")
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dato, {
                                        label: "Recorrido",
                                        valor: jornada.km_recorridos != null ? "".concat(jornada.km_recorridos, " km") : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[11px] text-slate-500",
                                children: [
                                    jornada.vehiculo,
                                    jornada.placa ? " · ".concat(jornada.placa) : '',
                                    " · desde las",
                                    ' ',
                                    new Date(jornada.inicio_at).toLocaleTimeString('es-EC', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DistanciaIngreso, {
                                j: jornada
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            jornada.foto_ingreso ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center justify-center gap-1.5 text-[11px] font-medium text-emerald-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 353,
                                        columnNumber: 17
                                    }, this),
                                    " Foto de ingreso subida"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 352,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FotoIngreso, {
                                        foto: foto,
                                        onFoto: setFoto
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 357,
                                        columnNumber: 17
                                    }, this),
                                    foto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
                                        className: "w-full",
                                        onClick: guardarFoto,
                                        cargando: subiendo,
                                        children: "Subir la foto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 359,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 356,
                                columnNumber: 15
                            }, this),
                            avisoFoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[11px] leading-snug text-amber-400",
                                children: avisoFoto
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 372,
                                columnNumber: 15
                            }, this),
                            jornada.km_fin == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        label: "Kilometraje al volver",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "number",
                                            inputMode: "numeric",
                                            value: form.km_fin,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    km_fin: e.target.value
                                                }),
                                            placeholder: "Más de ".concat(jornada.km_inicio)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                            lineNumber: 378,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 377,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__["StopCircle"],
                                        className: "w-full py-3",
                                        onClick: cerrar,
                                        cargando: guardando,
                                        disabled: form.km_fin === '' || guardando,
                                        children: "Cerrar jornada"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 386,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-[13px] text-emerald-300",
                                children: [
                                    "Jornada cerrada · ",
                                    jornada.km_recorridos,
                                    " km"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 397,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setCarga({
                                        odometro: form.km_fin || jornada.km_inicio,
                                        litros: '',
                                        monto: ''
                                    }),
                                className: "w-full rounded-xl border border-slate-700 py-2.5 text-[13px] text-slate-300 active:bg-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__["Fuel"], {
                                        size: 14,
                                        className: "mr-1.5 inline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    "Registrar carga de combustible"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            carga && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CargaCombustible, {
                jornada: jornada,
                tecnicoId: perfil.tecnico_id,
                inicial: carga,
                onCerrar: ()=>setCarga(null),
                onError: setError,
                onGuardado: async ()=>{
                    setCarga(null);
                    await recargar();
                }
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 417,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s(JornadaPage, "uikubKnMdj/pJ/hK6nO9sPB1ZwM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = JornadaPage;
const Dato = (param)=>{
    let { label, valor } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "t-panel py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-semibold tabular-nums text-slate-100",
                children: valor
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 435,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-wide text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 436,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
        lineNumber: 434,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Dato;
/**
 * La carga de combustible.
 *
 * ── Por qué el odómetro es obligatorio y los litros no ──
 *
 * Sin odómetro, la carga solo dice cuánta plata se gastó. Con odómetro se puede
 * decir "hicimos 340 km con el tanque anterior", que es de donde sale el aviso
 * de cuándo volver a cargar.
 *
 * Los litros y el monto son opcionales porque a veces se carga "lo que entre" y
 * el ticket se pierde. Exigirlos haría que la carga no se registre, y perder el
 * odómetro por no tener el monto es perder lo que importa por lo que no.
 *
 * ── Esta pantalla necesita señal ──
 *
 * No pasa por la cola. Una carga se hace en una estación de servicio, que está
 * sobre una ruta; y a diferencia de una instalación, si no se registra en el
 * momento se puede cargar después sin perder nada: el odómetro sigue escrito en
 * el ticket.
 */ function CargaCombustible(param) {
    let { jornada, tecnicoId, inicial, onCerrar, onError, onGuardado } = param;
    _s1();
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(inicial);
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function guardar() {
        if (!f.odometro) return;
        setGuardando(true);
        try {
            // Se busca antes de insertar: dos cargas del mismo vehículo con el mismo
            // odómetro son la misma carga cargada dos veces, y duplicarla arruinaría
            // el promedio de rendimiento.
            const { data: repetida } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('cargas_combustible').select('id').eq('vehiculo_id', jornada.vehiculo_id).eq('odometro', Number(f.odometro)).maybeSingle();
            if (repetida) {
                onError === null || onError === void 0 ? void 0 : onError(new Error('Ya hay una carga registrada con ese kilometraje.'));
                return;
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('cargas_combustible').insert({
                vehiculo_id: jornada.vehiculo_id,
                tecnico_id: tecnicoId,
                odometro: Number(f.odometro),
                litros: f.litros === '' ? null : Number(f.litros),
                monto: f.monto === '' ? null : Number(f.monto)
            });
            if (error) throw error;
            await (onGuardado === null || onGuardado === void 0 ? void 0 : onGuardado());
        } catch (err) {
            onError === null || onError === void 0 ? void 0 : onError(err);
        } finally{
            setGuardando(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "t-card p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__["Fuel"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this),
                    " Carga de combustible"
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 501,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Kilometraje al cargar",
                        hint: "Es lo que permite saber cuánto rindió el tanque anterior.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            type: "number",
                            inputMode: "numeric",
                            value: f.odometro,
                            onChange: (e)=>setF({
                                    ...f,
                                    odometro: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Litros",
                                hint: "Opcional",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "number",
                                    step: "0.01",
                                    inputMode: "decimal",
                                    value: f.litros,
                                    onChange: (e)=>setF({
                                            ...f,
                                            litros: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Monto",
                                hint: "Opcional",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "number",
                                    step: "0.01",
                                    inputMode: "decimal",
                                    value: f.monto,
                                    onChange: (e)=>setF({
                                            ...f,
                                            monto: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this),
                    !navigator.onLine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-start gap-1.5 text-[11px] text-amber-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                                size: 12,
                                className: "mt-0.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 538,
                                columnNumber: 13
                            }, this),
                            "Sin señal esto no se guarda. Anotá el kilometraje del ticket y cargalo después."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 537,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "flex-1",
                                onClick: onCerrar,
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 543,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variante: "primario",
                                className: "flex-1",
                                onClick: guardar,
                                cargando: guardando,
                                disabled: !f.odometro || guardando,
                                children: "Guardar"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 542,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 504,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
        lineNumber: 500,
        columnNumber: 5
    }, this);
}
_s1(CargaCombustible, "FxMJiVx1yyOQrSttD/SpnryIH4Y=");
_c2 = CargaCombustible;
/**
 * Sacar la foto de ingreso.
 *
 * `capture="user"` abre la cámara FRONTAL: la foto es de quien está marcando,
 * y con la trasera la sacaría apuntando a otro lado. Es lo contrario de las
 * fotos del expediente, que son de un documento y usan la de atrás.
 *
 * La vista previa se arma con `URL.createObjectURL` y se libera al cambiar: sin
 * eso, un técnico que saca cinco fotos hasta que sale bien deja cinco imágenes
 * retenidas en memoria.
 */ function FotoIngreso(param) {
    let { foto, onFoto } = param;
    _s2();
    const [previa, setPrevia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FotoIngreso.useEffect": ()=>{
            if (!foto) return setPrevia(null);
            const url = URL.createObjectURL(foto);
            setPrevia(url);
            return ({
                "FotoIngreso.useEffect": ()=>URL.revokeObjectURL(url)
            })["FotoIngreso.useEffect"];
        }
    }["FotoIngreso.useEffect"], [
        foto
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-xs font-semibold text-slate-400",
                children: "Foto de ingreso"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 584,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-700 p-3 transition active:bg-slate-800",
                children: [
                    previa ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: previa,
                        alt: "",
                        className: "h-14 w-14 shrink-0 rounded-lg object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 588,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                            size: 20,
                            className: "text-slate-500"
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                            lineNumber: 591,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 590,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0 text-[13px] leading-snug text-slate-300",
                        children: [
                            previa ? 'Tocá para sacarla de nuevo' : 'Tocá para sacar la foto',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 block text-[11px] text-slate-500",
                                children: "Queda con la hora de inicio. Si no tenés señal ahora, la subís después."
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 596,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*",
                        capture: "user",
                        className: "hidden",
                        onChange: (e)=>{
                            var _e_target_files;
                            var _e_target_files_;
                            return onFoto((_e_target_files_ = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) !== null && _e_target_files_ !== void 0 ? _e_target_files_ : null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 600,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 586,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
        lineNumber: 583,
        columnNumber: 5
    }, this);
}
_s2(FotoIngreso, "nLjSv7OMMDp4xvkuHBd0rxk8GEM=");
_c3 = FotoIngreso;
/**
 * A qué distancia del primer trabajo quedó el ingreso.
 *
 * ── Por qué se le muestra al técnico y no solo al jefe ──
 *
 * Porque si el número solo lo ve la oficina, el técnico se entera de que algo
 * estaba mal cuando ya no puede explicarlo. Viéndolo en el momento, el que
 * marcó desde la esquina equivocada lo sabe ahí y puede decirlo.
 *
 * ── Por qué la precisión se muestra al lado ──
 *
 * Una distancia de 300 m con un GPS que informa 400 m de error no significa
 * nada, y sin ese dato parecería que sí. Cuando el error es mayor que la
 * distancia, el cartel lo dice en vez de acusar.
 */ function DistanciaIngreso(param) {
    let { j } = param;
    if ((j === null || j === void 0 ? void 0 : j.distancia_ingreso_m) == null) {
        // Sin dato no se dibuja nada. Un "no se pudo medir" permanente arriba de la
        // pantalla es ruido: el técnico no puede hacer nada al respecto.
        return null;
    }
    const d = j.distancia_ingreso_m;
    const err = j.precision_ingreso_m;
    const dudoso = err != null && err >= d;
    const lejos = d > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RADIO_LLEGADA_M"] && !dudoso;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center text-[11px] leading-snug ".concat(lejos ? 'text-amber-400' : 'text-slate-500'),
        children: dudoso ? "Marcaste a ".concat(d, " m del primer trabajo, pero el GPS informó ").concat(err, " m de error: el dato no alcanza para concluir nada.") : lejos ? "Marcaste a ".concat(d, " m del primer trabajo del día.") : "Marcaste a ".concat(d, " m del primer trabajo. Dentro del rango.")
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
        lineNumber: 640,
        columnNumber: 5
    }, this);
}
_c4 = DistanciaIngreso;
/**
 * Lo que el vehículo necesita, dicho al técnico.
 *
 * ── Por qué acá y no en un listado aparte ──
 *
 * Porque una pantalla de "mantenimientos pendientes" es una que el técnico no
 * abre nunca: no es su trabajo, es el del que administra. Lo que sí hace todos
 * los días es escribir el kilometraje del tablero — y ahí, con el número del
 * odómetro delante, "faltan 300 km para el aceite" es accionable.
 *
 * ── Por qué no bloquea ──
 *
 * Porque el técnico no decide cuándo se lleva la camioneta al taller. Avisarle
 * sirve para que lo diga; impedirle trabajar por algo que no depende de él solo
 * lo dejaría parado.
 */ function AvisoMantenimiento(param) {
    let { items } = param;
    if (!(items === null || items === void 0 ? void 0 : items.length)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campo-borde flex items-start gap-2.5 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                size: 18,
                className: "mt-0.5 shrink-0 text-amber-400"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 675,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[14px] font-semibold text-slate-100",
                        children: items.length === 1 ? 'El vehículo necesita un servicio' : "El vehículo necesita ".concat(items.length, " servicios")
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-1 space-y-0.5",
                        children: items.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-[11px] text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "text-slate-400",
                                        children: m.tipo
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                        lineNumber: 683,
                                        columnNumber: 15
                                    }, this),
                                    " · ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mantenimiento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cuantoFalta"])(m)
                                ]
                            }, m.tipo_id, true, {
                                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                                lineNumber: 682,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-[11px] leading-snug text-slate-500",
                        children: "Avisale a la oficina para que lo agenden."
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/JornadaPage.jsx",
        lineNumber: 674,
        columnNumber: 5
    }, this);
}
_c5 = AvisoMantenimiento;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "JornadaPage");
__turbopack_context__.k.register(_c1, "Dato");
__turbopack_context__.k.register(_c2, "CargaCombustible");
__turbopack_context__.k.register(_c3, "FotoIngreso");
__turbopack_context__.k.register(_c4, "DistanciaIngreso");
__turbopack_context__.k.register(_c5, "AvisoMantenimiento");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/campo/jornada/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$tecnico$2f$JornadaPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/tecnico/JornadaPage.jsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$tecnico$2f$JornadaPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/campo/jornada/page.jsx",
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
"[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Camera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Camera", [
    [
        "path",
        {
            d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
            key: "1tc9qg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }
    ]
]);
;
 //# sourceMappingURL=camera.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/fuel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Fuel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Fuel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Fuel", [
    [
        "line",
        {
            x1: "3",
            x2: "15",
            y1: "22",
            y2: "22",
            key: "xegly4"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "14",
            y1: "9",
            y2: "9",
            key: "xcnuvu"
        }
    ],
    [
        "path",
        {
            d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",
            key: "16j0yd"
        }
    ],
    [
        "path",
        {
            d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
            key: "7cu91f"
        }
    ]
]);
;
 //# sourceMappingURL=fuel.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/fuel.js [app-client] (ecmascript) <export default as Fuel>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fuel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fuel.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CirclePlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CirclePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CirclePlay", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polygon",
        {
            points: "10 8 16 12 10 16 10 8",
            key: "1cimsy"
        }
    ]
]);
;
 //# sourceMappingURL=circle-play.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Route
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Route", [
    [
        "circle",
        {
            cx: "6",
            cy: "19",
            r: "3",
            key: "1kj8tv"
        }
    ],
    [
        "path",
        {
            d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
            key: "1d8sl"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }
    ]
]);
;
 //# sourceMappingURL=route.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Route",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleStop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleStop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleStop", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "9",
            width: "6",
            height: "6",
            rx: "1",
            key: "1ssd4o"
        }
    ]
]);
;
 //# sourceMappingURL=circle-stop.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as StopCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StopCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as TriangleAlert>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TriangleAlert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_30f02dd3._.js.map