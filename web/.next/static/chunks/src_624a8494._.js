(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/temaCampo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTemaCampo",
    ()=>useTemaCampo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
/**
 * El tema de las pantallas de campo: claro para el sol, oscuro para el resto.
 *
 * ── Por qué se guarda en el dispositivo y no en el usuario ──
 *
 * La primera idea fue guardarlo en el legajo, para que "siga a la persona". Es
 * la respuesta equivocada: el mismo vendedor usa el celular en la vereda al
 * mediodía y la computadora en la oficina a las siete. Si la preferencia
 * viajara con él, poner el teléfono en claro le pondría también la pantalla del
 * escritorio en blanco — que es justo donde no hace falta y donde molesta.
 *
 * El contexto no es la persona: es el aparato y dónde está parado. Por eso vive
 * en `localStorage`, y cada dispositivo recuerda el suyo.
 *
 * Efecto secundario útil: no hay ida y vuelta al servidor, así que el cambio es
 * instantáneo. Alguien que sale al sol y no ve nada aprieta el botón y ve —no
 * espera a que responda una API con la pantalla en negro.
 */ const CLAVE = 'tema-campo';
/**
 * Arranca en oscuro.
 *
 * Se evaluó deducirlo de `prefers-color-scheme` del sistema. Se descartó: esa
 * preferencia dice si a la persona le gusta el modo oscuro, no si está bajo el
 * sol. Un teléfono en modo oscuro al mediodía necesita la pantalla clara igual,
 * y adivinarlo mal en el arranque es peor que dejar que lo elija.
 */ /**
 * ...salvo que la pantalla diga otra cosa.
 *
 * El tablero del técnico arranca en claro: se usa afuera, y una pantalla oscura
 * al sol del mediodía no se lee. El del vendedor sigue arrancando en oscuro,
 * que es como se diseñó.
 *
 * Lo guardado siempre gana sobre el valor de arranque: en cuanto alguien elige,
 * su elección vale para todas las pantallas de campo de ese dispositivo. El
 * parámetro solo decide qué mostrar la primera vez.
 */ const inicial = (porDefecto)=>{
    try {
        const guardado = localStorage.getItem(CLAVE);
        if (guardado === 'claro' || guardado === 'oscuro') return guardado;
        return porDefecto;
    } catch (e) {
        // Modo privado en algunos navegadores tira al leer. No es motivo para que
        // la pantalla no cargue.
        return porDefecto;
    }
};
function useTemaCampo() {
    let porDefecto = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'oscuro';
    _s();
    const [tema, setTema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useTemaCampo.useState": ()=>inicial(porDefecto)
    }["useTemaCampo.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTemaCampo.useEffect": ()=>{
            try {
                localStorage.setItem(CLAVE, tema);
            } catch (e) {
            /* si no se puede guardar, la elección vale para esta sesión igual */ }
        }
    }["useTemaCampo.useEffect"], [
        tema
    ]);
    const alternar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTemaCampo.useCallback[alternar]": ()=>setTema({
                "useTemaCampo.useCallback[alternar]": (t)=>t === 'claro' ? 'oscuro' : 'claro'
            }["useTemaCampo.useCallback[alternar]"])
    }["useTemaCampo.useCallback[alternar]"], []);
    return {
        tema,
        alternar,
        esClaro: tema === 'claro'
    };
}
_s(useTemaCampo, "m9fXXHbt6AkFMZW/90VlrxgSOuE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ventas/BotonTema.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BotonTema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
;
;
function BotonTema(param) {
    let { tema, onAlternar } = param;
    const aClaro = tema === 'oscuro';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onAlternar,
        className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg campo-suave transition hover:campo-txt",
        title: aClaro ? 'Cambiar a claro — se lee mejor al sol' : 'Cambiar a oscuro',
        "aria-label": aClaro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro',
        children: aClaro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/src/components/ventas/BotonTema.jsx",
            lineNumber: 25,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/src/components/ventas/BotonTema.jsx",
            lineNumber: 25,
            columnNumber: 37
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ventas/BotonTema.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = BotonTema;
var _c;
__turbopack_context__.k.register(_c, "BotonTema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mapaPreferido.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APPS_MAPA",
    ()=>APPS_MAPA,
    "mapaPreferido",
    ()=>mapaPreferido,
    "useMapaPreferido",
    ()=>useMapaPreferido
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
/**
 * Con qué aplicación abre el técnico las direcciones.
 *
 * ── Por qué una preferencia y no un menú cada vez ──
 *
 * Porque "Llegar" es el botón que más se aprieta en el día: una vez por parada,
 * más las que se vuelve a mirar en el camino. Agregarle un menú de dos opciones
 * a la acción más repetida son cuarenta toques por semana para elegir siempre
 * lo mismo.
 *
 * Se elige una vez, en Perfil, y todos los botones del sistema lo respetan.
 *
 * ── Por qué se guarda en el dispositivo y no en el legajo ──
 *
 * Es el mismo razonamiento que el tema de campo, y está escrito allá:
 *
 *     "El contexto no es la persona: es el aparato y dónde está parado."
 *
 * El técnico puede tener Waze en su celular y no tenerlo en la tablet de la
 * oficina. Una preferencia que viajara con la persona le abriría en la tablet
 * una aplicación que no está instalada, y ahí el botón no hace nada.
 */ const CLAVE = 'mapa-preferido';
const APPS_MAPA = [
    {
        clave: 'google',
        label: 'Google Maps',
        nota: 'Abre igual aunque no la tengas instalada.'
    },
    {
        clave: 'waze',
        label: 'Waze'
    },
    {
        clave: 'sistema',
        label: 'La que yo elija en el teléfono',
        nota: 'Te muestra todas las que tengas: maps.me, OsmAnd, la que uses. Si tocas «Siempre», deja de preguntar.',
        soloAndroid: true
    }
];
const VALIDAS = APPS_MAPA.map(_c = (a)=>a.clave);
_c1 = VALIDAS;
/**
 * Arranca en Google Maps.
 *
 * No se deduce de lo que el teléfono tenga instalado: el navegador no puede
 * saberlo, y probar a abrir para ver si funciona deja al técnico mirando una
 * pantalla en blanco cuando no está. Google Maps abre en el navegador aunque la
 * aplicación no esté, así que es la única que nunca falla.
 */ function inicial() {
    try {
        const g = localStorage.getItem(CLAVE);
        return VALIDAS.includes(g) ? g : 'google';
    } catch (e) {
        // Modo privado en algunos navegadores tira al leer. No es motivo para que
        // la pantalla no cargue.
        return 'google';
    }
}
function useMapaPreferido() {
    _s();
    const [app, setAppEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(inicial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMapaPreferido.useEffect": ()=>{
            try {
                localStorage.setItem(CLAVE, app);
            } catch (e) {
            /* si no se puede guardar, la elección vale para esta sesión igual */ }
        }
    }["useMapaPreferido.useEffect"], [
        app
    ]);
    const setApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMapaPreferido.useCallback[setApp]": (v)=>{
            if (VALIDAS.includes(v)) setAppEstado(v);
        }
    }["useMapaPreferido.useCallback[setApp]"], []);
    return {
        app,
        setApp
    };
}
_s(useMapaPreferido, "okOoFzXWKfBkKdeE/Sz/Ourw8s8=");
const mapaPreferido = ()=>inicial();
var _c, _c1;
__turbopack_context__.k.register(_c, "VALIDAS$APPS_MAPA.map");
__turbopack_context__.k.register(_c1, "VALIDAS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tecnico/MapaCampo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapaCampo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin-off.js [app-client] (ecmascript) <export default as MapPinOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
/**
 * El mapita de las tarjetas del técnico.
 *
 * Sirve para dos cosas con la misma pieza: un punto —la próxima instalación— o
 * una ruta numerada —las paradas del día—.
 *
 * ── Lo que hay que decir de entrada ──
 *
 * Los mapas NO funcionan sin conexión. Las imágenes vienen de un servidor de
 * OpenStreetMap, y el service worker no las precachea: serían cientos de
 * archivos de una zona que no sabemos cuál es hasta que el técnico llega.
 *
 * Por eso, sin señal, en vez de dejar una grilla gris rota se dice qué pasa y
 * se muestra la dirección, que es el dato que de verdad se necesita. Un mapa a
 * medio cargar hace pensar que la app se colgó.
 *
 * ── Por qué es Leaflet directo y no una librería de React ──
 *
 * Porque es lo que ya usa el resto del sistema —el mapa de clientes, el
 * comercial, el de cobertura—. Meter una segunda forma de dibujar mapas
 * significa dos comportamientos distintos para el mismo gesto.
 */ const TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
/** Un marcador redondo con número adentro, del color del estado. */ const marcador = (L, texto, clase)=>L.divIcon({
        className: '',
        html: '<span class="grid h-7 w-7 place-items-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow '.concat(clase, '">').concat(texto, "</span>"),
        iconSize: [
            28,
            28
        ],
        iconAnchor: [
            14,
            14
        ]
    });
const COLOR = {
    hecha: 'bg-emerald-500',
    en_curso: 'bg-amber-500',
    en_ruta: 'bg-sky-500',
    reprogramada: 'bg-violet-500'
};
function MapaCampo(param) {
    let { puntos = [], alto = 'h-44', conRuta = false } = param;
    _s();
    const contenedor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [enLinea, setEnLinea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapaCampo.useEffect": ()=>{
            const arriba = {
                "MapaCampo.useEffect.arriba": ()=>setEnLinea(true)
            }["MapaCampo.useEffect.arriba"];
            const abajo = {
                "MapaCampo.useEffect.abajo": ()=>setEnLinea(false)
            }["MapaCampo.useEffect.abajo"];
            window.addEventListener('online', arriba);
            window.addEventListener('offline', abajo);
            return ({
                "MapaCampo.useEffect": ()=>{
                    window.removeEventListener('online', arriba);
                    window.removeEventListener('offline', abajo);
                }
            })["MapaCampo.useEffect"];
        }
    }["MapaCampo.useEffect"], []);
    const conCoordenadas = puntos.filter((p)=>Number.isFinite(Number(p.lat)) && Number.isFinite(Number(p.lng)));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapaCampo.useEffect": ()=>{
            let cancelado = false;
            async function renderizarMapa() {
                if (!enLinea || !conCoordenadas.length || !contenedor.current) return;
                const modulo = await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)");
                if (cancelado || !contenedor.current) return;
                const L = modulo.default;
                if (!mapa.current) {
                    mapa.current = L.map(contenedor.current, {
                        // Sin controles: es una miniatura para ubicarse, no una herramienta de
                        // exploración. El zoom con dos dedos sigue andando; lo que se saca son
                        // los botones, que en 44 px de alto tapan medio mapa.
                        zoomControl: false,
                        attributionControl: false,
                        // Que el mapa no se arrastre solo cuando el técnico quiere desplazar la
                        // página con el dedo encima de la tarjeta.
                        dragging: !L.Browser.mobile
                    });
                    L.tileLayer(TILES, {
                        attribution: '© OpenStreetMap',
                        maxZoom: 19
                    }).addTo(mapa.current);
                }
                const capa = L.layerGroup().addTo(mapa.current);
                conCoordenadas.forEach({
                    "MapaCampo.useEffect.renderizarMapa": (p, i)=>{
                        var _COLOR_p_estado, _p_titulo;
                        L.marker([
                            Number(p.lat),
                            Number(p.lng)
                        ], {
                            icon: marcador(L, conRuta ? String(i + 1) : '', (_COLOR_p_estado = COLOR[p.estado]) !== null && _COLOR_p_estado !== void 0 ? _COLOR_p_estado : 'bg-sky-600'),
                            title: (_p_titulo = p.titulo) !== null && _p_titulo !== void 0 ? _p_titulo : ''
                        }).addTo(capa);
                    }
                }["MapaCampo.useEffect.renderizarMapa"]);
                // La línea que une las paradas en el orden en que se recorren. No es la ruta
                // real por calles —para eso está el botón "Ubicación", que abre el navegador
                // del teléfono— sino el orden de visita, que es lo que esta tarjeta responde.
                if (conRuta && conCoordenadas.length > 1) {
                    L.polyline(conCoordenadas.map({
                        "MapaCampo.useEffect.renderizarMapa": (p)=>[
                                Number(p.lat),
                                Number(p.lng)
                            ]
                    }["MapaCampo.useEffect.renderizarMapa"]), {
                        color: '#0284c7',
                        weight: 3,
                        opacity: 0.7,
                        dashArray: '6 6'
                    }).addTo(capa);
                }
                // Con cero puntos, `fitBounds` recibe unos límites inválidos y lanza. El
                // caso existe: una visita cargada sin coordenadas, o un técnico sin nada
                // asignado todavía.
                if (conCoordenadas.length) {
                    const limites = L.latLngBounds(conCoordenadas.map({
                        "MapaCampo.useEffect.renderizarMapa.limites": (p)=>[
                                Number(p.lat),
                                Number(p.lng)
                            ]
                    }["MapaCampo.useEffect.renderizarMapa.limites"]));
                    if (conCoordenadas.length === 1) {
                        mapa.current.setView(limites.getCenter(), 16);
                    } else {
                        mapa.current.fitBounds(limites, {
                            padding: [
                                28,
                                28
                            ],
                            maxZoom: 16
                        });
                    }
                }
                // Leaflet mide mal el contenedor cuando la tarjeta se dibuja después que él.
                // Sin esto, el mapa queda con las imágenes cortadas hasta que algo lo toca.
                const t = setTimeout({
                    "MapaCampo.useEffect.renderizarMapa.t": ()=>{
                        var _mapa_current;
                        return (_mapa_current = mapa.current) === null || _mapa_current === void 0 ? void 0 : _mapa_current.invalidateSize();
                    }
                }["MapaCampo.useEffect.renderizarMapa.t"], 60);
            }
            renderizarMapa();
            return ({
                "MapaCampo.useEffect": ()=>{
                    cancelado = true;
                }
            })["MapaCampo.useEffect"];
        }
    }["MapaCampo.useEffect"], [
        conCoordenadas,
        conRuta,
        enLinea
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapaCampo.useEffect": ()=>({
                "MapaCampo.useEffect": ()=>{
                    var _mapa_current;
                    (_mapa_current = mapa.current) === null || _mapa_current === void 0 ? void 0 : _mapa_current.remove();
                    mapa.current = null;
                }
            })["MapaCampo.useEffect"]
    }["MapaCampo.useEffect"], []);
    if (!conCoordenadas.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Aviso, {
            alto: alto,
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinOff$3e$__["MapPinOff"],
            children: "Sin coordenadas cargadas"
        }, void 0, false, {
            fileName: "[project]/src/components/tecnico/MapaCampo.jsx",
            lineNumber: 142,
            columnNumber: 7
        }, this);
    }
    if (!enLinea) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Aviso, {
            alto: alto,
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"],
            children: "El mapa necesita conexión"
        }, void 0, false, {
            fileName: "[project]/src/components/tecnico/MapaCampo.jsx",
            lineNumber: 150,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: contenedor,
        className: "campo-borde w-full overflow-hidden rounded-xl border ".concat(alto),
        // El mapa no debe robarle el desplazamiento a la página: en un teléfono,
        // arrastrar el dedo sobre una tarjeta tiene que mover la pantalla.
        style: {
            touchAction: 'pan-y'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/tecnico/MapaCampo.jsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(MapaCampo, "MQCbx1oPXV72wKmRAr0PUECcUSM=");
_c = MapaCampo;
const Aviso = (param)=>{
    let { alto, icono: Icono, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campo-borde campo-tenue flex ".concat(alto, " w-full flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed text-[12px]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/MapaCampo.jsx",
                lineNumber: 171,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tecnico/MapaCampo.jsx",
        lineNumber: 168,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Aviso;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapaCampo");
__turbopack_context__.k.register(_c1, "Aviso");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/red/ReparacionesRed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ESTADO_REPARACION",
    ()=>ESTADO_REPARACION,
    "TIPO_AVERIA",
    ()=>TIPO_AVERIA,
    "default",
    ()=>ReparacionesRed,
    "useBitacora",
    ()=>useBitacora
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
;
;
const TIPO_AVERIA = {
    fibra_rota: 'Fibra cortada',
    enlace_caido: 'Enlace o antena caída',
    corte_energia: 'Corte de energía',
    averia: 'Avería',
    otro: 'Otro',
    corte_grupo: 'Corte agrupado (OLT)',
    nap_degradada: 'NAP degradándose'
};
const ESTADO_REPARACION = {
    asignada: {
        label: 'Asignada',
        color: 'azul'
    },
    en_curso: {
        label: 'En curso',
        color: 'ambar'
    },
    reparada: {
        label: 'Reparada',
        color: 'verde'
    },
    cancelada: {
        label: 'Cancelada',
        color: 'gris'
    }
};
const fecha = (v)=>v ? new Date(v).toLocaleString('es-EC', {
        dateStyle: 'short',
        timeStyle: 'short'
    }) : '—';
/** Los errores de una RPC llegan como objeto suelto: se los pasa a Error para el banner. */ const comoError = (e)=>{
    var _e_message;
    return e instanceof Error ? e : new Error((_e_message = e === null || e === void 0 ? void 0 : e.message) !== null && _e_message !== void 0 ? _e_message : String(e));
};
function ReparacionesRed() {
    _s();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const [sinAsignar, setSinAsignar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [enMarcha, setEnMarcha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cuadrillas, setCuadrillas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tecnicos, setTecnicos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [asignando, setAsignando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bitacora, setBitacora] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReparacionesRed.useCallback[recargar]": async ()=>{
            const [s, r] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_averias_sin_asignar').select('*').order('desde', {
                    ascending: false
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_reparaciones_red').select('*')// Las cerradas de los últimos días quedan a la vista: es donde la
                // oficina lee qué se hizo antes de llamar al abonado.
                .or("estado.in.(asignada,en_curso),cerrada_at.gte.".concat(new Date(Date.now() - 3 * 864e5).toISOString())).order('creada_at', {
                    ascending: false
                }).limit(60)
            ]);
            // Sin la 209 las dos fallan: el panel no se dibuja en vez de gritar.
            if (s.error && r.error) setError(null);
            else setError(s.error ? comoError(s.error) : r.error ? comoError(r.error) : null);
            var _s_data;
            setSinAsignar((_s_data = s.data) !== null && _s_data !== void 0 ? _s_data : []);
            var _r_data;
            setEnMarcha((_r_data = r.data) !== null && _r_data !== void 0 ? _r_data : []);
            setCargando(false);
        }
    }["ReparacionesRed.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReparacionesRed.useEffect": ()=>{
            recargar();
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('cuadrillas').select('id, nombre').eq('activo', true).order('nombre'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('tecnicos').select('id, nombre').eq('activo', true).order('nombre')
            ]).then({
                "ReparacionesRed.useEffect": (param)=>{
                    let [c, t] = param;
                    var _c_data;
                    setCuadrillas((_c_data = c.data) !== null && _c_data !== void 0 ? _c_data : []);
                    var _t_data;
                    setTecnicos((_t_data = t.data) !== null && _t_data !== void 0 ? _t_data : []);
                }
            }["ReparacionesRed.useEffect"]);
        }
    }["ReparacionesRed.useEffect"], [
        recargar
    ]);
    async function cancelar(r) {
        if (!await confirmar("¿Cancelar la reparación #".concat(r.numero, "? La cuadrilla deja de verla."))) return;
        const { error: e } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('cancelar_reparacion', {
            p_id: r.id,
            p_motivo: null
        });
        if (e) return setError(comoError(e));
        await recargar();
    }
    if (cargando) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
        lineNumber: 105,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        title: "Reparaciones de red",
        subtitle: "Quién va a arreglar cada avería. La cierra el jefe de grupo desde el campo.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5 p-4 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                        error: error,
                        onCerrar: ()=>setError(null)
                    }, void 0, false, {
                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                                children: [
                                    "Sin asignar (",
                                    sinAsignar.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            !sinAsignar.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "Todo lo que está roto tiene a alguien asignado."
                            }, void 0, false, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "divide-y divide-slate-800/60",
                                children: sinAsignar.map((a)=>{
                                    var _TIPO_AVERIA_a_tipo;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-wrap items-center gap-3 py-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-100",
                                                        children: a.titulo
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500",
                                                        children: [
                                                            (_TIPO_AVERIA_a_tipo = TIPO_AVERIA[a.tipo]) !== null && _TIPO_AVERIA_a_tipo !== void 0 ? _TIPO_AVERIA_a_tipo : a.tipo,
                                                            a.lugar && " · ".concat(a.lugar),
                                                            a.afectados != null && " · ".concat(a.afectados, " abonados"),
                                                            " · desde ".concat(fecha(a.desde)),
                                                            a.estado === 'borrador' && ' · corte sin avisar'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
                                                variante: "primario",
                                                onClick: ()=>setAsignando({
                                                        origen: a.origen,
                                                        id: a.id,
                                                        titulo: a.titulo,
                                                        cuadrilla_id: '',
                                                        tecnico_id: '',
                                                        prioridad: 'alta',
                                                        instrucciones: ''
                                                    }),
                                                children: "Asignar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, "".concat(a.origen, "-").concat(a.id), true, {
                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                                children: [
                                    "Asignadas y recientes (",
                                    enMarcha.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            !enMarcha.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "No hay reparaciones en marcha."
                            }, void 0, false, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "divide-y divide-slate-800/60",
                                children: enMarcha.map((r)=>{
                                    var _ESTADO_REPARACION_r_estado;
                                    const est = (_ESTADO_REPARACION_r_estado = ESTADO_REPARACION[r.estado]) !== null && _ESTADO_REPARACION_r_estado !== void 0 ? _ESTADO_REPARACION_r_estado : ESTADO_REPARACION.asignada;
                                    const abierta = [
                                        'asignada',
                                        'en_curso'
                                    ].includes(r.estado);
                                    var _r_ultimo_reporte_de;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-wrap items-start gap-3 py-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: [
                                                                    "#",
                                                                    r.numero
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                                lineNumber: 174,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            r.titulo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                        lineNumber: 173,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500",
                                                        children: [
                                                            r.cuadrilla ? "Cuadrilla ".concat(r.cuadrilla) : r.tecnico,
                                                            r.jefe && " · jefe de grupo hoy: ".concat(r.jefe),
                                                            r.lugar && " · ".concat(r.lugar),
                                                            " · ".concat(fecha(r.creada_at))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                        lineNumber: 176,
                                                        columnNumber: 23
                                                    }, this),
                                                    r.ultimo_reporte && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[12px] text-slate-300",
                                                        children: [
                                                            "“",
                                                            r.ultimo_reporte,
                                                            "”",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: [
                                                                    "— ",
                                                                    (_r_ultimo_reporte_de = r.ultimo_reporte_de) !== null && _r_ultimo_reporte_de !== void 0 ? _r_ultimo_reporte_de : '—',
                                                                    ", ",
                                                                    fecha(r.ultimo_reporte_at)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                                lineNumber: 185,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                        lineNumber: 183,
                                                        columnNumber: 25
                                                    }, this),
                                                    r.estado === 'reparada' && r.origen_activo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[11px] text-amber-400",
                                                        children: "La cerraron como reparada pero la alerta sigue abierta: las lecturas todavía no se normalizaron."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        color: est.color,
                                                        children: est.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                        lineNumber: 198,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
                                                        variante: "fantasma",
                                                        onClick: ()=>setBitacora(r),
                                                        children: "Bitácora"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 23
                                                    }, this),
                                                    abierta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"],
                                                                variante: "fantasma",
                                                                onClick: ()=>{
                                                                    var _r_incidencia_id, _r_cuadrilla_id, _r_tecnico_id, _r_instrucciones;
                                                                    return setAsignando({
                                                                        origen: r.incidencia_id ? 'incidencia' : r.alerta_id ? 'alerta' : null,
                                                                        id: (_r_incidencia_id = r.incidencia_id) !== null && _r_incidencia_id !== void 0 ? _r_incidencia_id : r.alerta_id,
                                                                        titulo: r.titulo,
                                                                        cuadrilla_id: (_r_cuadrilla_id = r.cuadrilla_id) !== null && _r_cuadrilla_id !== void 0 ? _r_cuadrilla_id : '',
                                                                        tecnico_id: r.cuadrilla_id ? '' : (_r_tecnico_id = r.tecnico_id) !== null && _r_tecnico_id !== void 0 ? _r_tecnico_id : '',
                                                                        prioridad: r.prioridad,
                                                                        instrucciones: (_r_instrucciones = r.instrucciones) !== null && _r_instrucciones !== void 0 ? _r_instrucciones : '',
                                                                        reasignar: true
                                                                    });
                                                                },
                                                                children: "Reasignar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                                lineNumber: 204,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"],
                                                                variante: "fantasma",
                                                                onClick: ()=>cancelar(r),
                                                                children: "Cancelar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                                lineNumber: 222,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormAsignar, {
                datos: asignando,
                setDatos: setAsignando,
                cuadrillas: cuadrillas,
                tecnicos: tecnicos,
                onListo: recargar
            }, void 0, false, {
                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bitacora, {
                reparacion: bitacora,
                onCerrar: ()=>setBitacora(null)
            }, void 0, false, {
                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(ReparacionesRed, "EMVrE+NcAIt2slvqcDfVY6wp0Y8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"]
    ];
});
_c = ReparacionesRed;
function FormAsignar(param) {
    let { datos, setDatos, cuadrillas, tecnicos, onListo } = param;
    _s1();
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const set = (campo)=>(e)=>setDatos((d)=>({
                    ...d,
                    [campo]: e.target.value
                }));
    async function guardar(e) {
        e.preventDefault();
        setGuardando(true);
        setError(null);
        const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('asignar_reparacion', {
            p_incidencia: datos.origen === 'incidencia' ? datos.id : null,
            p_alerta: datos.origen === 'alerta' ? datos.id : null,
            // Cuadrilla o técnico suelto: si eligió las dos, manda la cuadrilla.
            p_cuadrilla: datos.cuadrilla_id || null,
            p_tecnico: datos.cuadrilla_id ? null : datos.tecnico_id || null,
            p_titulo: datos.titulo,
            p_instrucciones: datos.instrucciones,
            p_prioridad: datos.prioridad
        });
        setGuardando(false);
        if (err) return setError(comoError(err));
        setDatos(null);
        await onListo();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        abierto: Boolean(datos),
        titulo: (datos === null || datos === void 0 ? void 0 : datos.reasignar) ? 'Reasignar la reparación' : 'Asignar la reparación',
        onCerrar: ()=>setDatos(null),
        children: datos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: guardar,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                    error: error,
                    onCerrar: ()=>setError(null)
                }, void 0, false, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 281,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Qué hay que reparar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        value: datos.titulo,
                        onChange: set('titulo'),
                        maxLength: 150,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                        lineNumber: 283,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 282,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Cuadrilla",
                            hint: "La cierra su jefe de grupo del día.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: datos.cuadrilla_id,
                                onChange: set('cuadrilla_id'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "— Ninguna —"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this),
                                    cuadrillas.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.id,
                                            children: c.nombre
                                        }, c.id, false, {
                                            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                            lineNumber: 290,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "O un técnico suelto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: datos.tecnico_id,
                                onChange: set('tecnico_id'),
                                disabled: Boolean(datos.cuadrilla_id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "— Ninguno —"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this),
                                    tecnicos.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t.id,
                                            children: t.nombre
                                        }, t.id, false, {
                                            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Prioridad",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: datos.prioridad,
                        onChange: set('prioridad'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "alta",
                                children: "Alta"
                            }, void 0, false, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 313,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "media",
                                children: "Media"
                            }, void 0, false, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 314,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "baja",
                                children: "Baja"
                            }, void 0, false, {
                                fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                        lineNumber: 312,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 311,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Indicaciones para la cuadrilla",
                    hint: "Opcional: material, acceso, a quién llamar.",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        rows: 3,
                        value: datos.instrucciones,
                        onChange: set('instrucciones')
                    }, void 0, false, {
                        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                        lineNumber: 319,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 318,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variante: "fantasma",
                            onClick: ()=>setDatos(null),
                            children: "Volver"
                        }, void 0, false, {
                            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            variante: "primario",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
                            cargando: guardando,
                            disabled: !datos.cuadrilla_id && !datos.tecnico_id,
                            children: datos.reasignar ? 'Reasignar' : 'Asignar'
                        }, void 0, false, {
                            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
            lineNumber: 280,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s1(FormAsignar, "8rMI9cNKmJrR7UnRB7EeXJ+UJSA=");
_c1 = FormAsignar;
function useBitacora(id) {
    _s2();
    const [filas, setFilas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBitacora.useEffect": ()=>{
            if (!id) return setFilas(null);
            let vigente = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_reparacion_reportes').select('id, tipo, texto, quien, creado_at').eq('reparacion_id', id).order('creado_at').then({
                "useBitacora.useEffect": (param)=>{
                    let { data } = param;
                    return vigente && setFilas(data !== null && data !== void 0 ? data : []);
                }
            }["useBitacora.useEffect"]);
            return ({
                "useBitacora.useEffect": ()=>{
                    vigente = false;
                }
            })["useBitacora.useEffect"];
        }
    }["useBitacora.useEffect"], [
        id
    ]);
    return filas;
}
_s2(useBitacora, "vIJhxyVon/1Zwmy/xvp2YaysVn4=");
function Bitacora(param) {
    let { reparacion, onCerrar } = param;
    _s3();
    const filas = useBitacora(reparacion === null || reparacion === void 0 ? void 0 : reparacion.id);
    var _reparacion_numero;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        abierto: Boolean(reparacion),
        titulo: "Reparación #".concat((_reparacion_numero = reparacion === null || reparacion === void 0 ? void 0 : reparacion.numero) !== null && _reparacion_numero !== void 0 ? _reparacion_numero : ''),
        onCerrar: onCerrar,
        children: reparacion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-200",
                    children: reparacion.titulo
                }, void 0, false, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 366,
                    columnNumber: 11
                }, this),
                reparacion.instrucciones && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "flex gap-2 text-[12px] text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                            size: 14,
                            className: "mt-0.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                            lineNumber: 369,
                            columnNumber: 15
                        }, this),
                        " ",
                        reparacion.instrucciones
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 368,
                    columnNumber: 13
                }, this),
                !filas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cargando"], {}, void 0, false, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 373,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: filas.map((f)=>{
                        var _f_quien;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "text-[12px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500",
                                    children: [
                                        fecha(f.creado_at),
                                        " · ",
                                        (_f_quien = f.quien) !== null && _f_quien !== void 0 ? _f_quien : '—'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                    lineNumber: 378,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: f.tipo === 'reparada' ? 'text-emerald-400' : 'text-slate-200',
                                    children: f.texto
                                }, void 0, false, {
                                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                                    lineNumber: 379,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, f.id, true, {
                            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                            lineNumber: 377,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/red/ReparacionesRed.jsx",
                    lineNumber: 375,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/red/ReparacionesRed.jsx",
            lineNumber: 365,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/red/ReparacionesRed.jsx",
        lineNumber: 363,
        columnNumber: 5
    }, this);
}
_s3(Bitacora, "P53DkzCIu/orIeoWfE62021W9Hg=", false, function() {
    return [
        useBitacora
    ];
});
_c2 = Bitacora;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ReparacionesRed");
__turbopack_context__.k.register(_c1, "FormAsignar");
__turbopack_context__.k.register(_c2, "Bitacora");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tecnico/ReparacionesCampo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReparacionesCampo,
    "useReparaciones",
    ()=>useReparaciones
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquarePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-plus.js [app-client] (ecmascript) <export default as MessageSquarePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$red$2f$ReparacionesRed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/red/ReparacionesRed.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$servicio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/servicio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$IngresoGrupal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/IngresoGrupal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function useReparaciones() {
    _s();
    const [filas, setFilas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReparaciones.useCallback[recargar]": async ()=>{
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_reparaciones_red').select('*').in('estado', [
                'asignada',
                'en_curso'
            ]).order('creada_at', {
                ascending: false
            });
            setFilas(error ? [] : data !== null && data !== void 0 ? data : []);
        }
    }["useReparaciones.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReparaciones.useEffect": ()=>{
            recargar();
        }
    }["useReparaciones.useEffect"], [
        recargar
    ]);
    return {
        filas,
        recargar
    };
}
_s(useReparaciones, "/pU2SF/GFLjkxZbhN78uNiNongA=");
/**
 * La ubicación del momento, si el teléfono la da rápido. No se espera más de
 * ocho segundos: el reporte importa más que la coordenada.
 */ function ubicacion() {
    return new Promise((resolver)=>{
        if (!navigator.geolocation) return resolver(null);
        navigator.geolocation.getCurrentPosition((p)=>resolver({
                lat: p.coords.latitude,
                lng: p.coords.longitude
            }), ()=>resolver(null), {
            enableHighAccuracy: true,
            timeout: 8000,
            maximumAge: 60000
        });
    });
}
function ReparacionesCampo(param) {
    let { filas, onCambio } = param;
    if (!(filas === null || filas === void 0 ? void 0 : filas.length)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-center gap-1.5 px-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    " Reparaciones asignadas (",
                    filas.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            filas.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reparacion, {
                    r: r,
                    onCambio: onCambio
                }, r.id, false, {
                    fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = ReparacionesCampo;
const PRIORIDAD = {
    alta: 'border-rose-500/50',
    media: 'border-amber-500/40',
    baja: 'border-slate-700'
};
function Reparacion(param) {
    let { r, onCambio } = param;
    _s1();
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"])();
    const prepararIngreso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$IngresoGrupal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrepararIngreso"])();
    // 'avance' | 'cierre' | null
    const [modo, setModo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [texto, setTexto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [enviando, setEnviando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hecho, setHecho] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [verBitacora, setVerBitacora] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bitacora = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$red$2f$ReparacionesRed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBitacora"])(verBitacora ? r.id : null);
    async function enviar(e) {
        e.preventDefault();
        if (!texto.trim()) return;
        if (modo === 'cierre') {
            var _r_corte_afectados;
            const aviso = r.corte_estado === 'abierta' ? "Se va a resolver el corte masivo y se les avisa a ".concat((_r_corte_afectados = r.corte_afectados) !== null && _r_corte_afectados !== void 0 ? _r_corte_afectados : 'los', " abonados que el servicio volvió.\n\n¿Quedó reparado?") : '¿Quedó reparado?';
            if (!await confirmar(aviso)) return;
        }
        setEnviando(true);
        setError(null);
        let foto = null;
        try {
            // El primer reporte del día en el poste es el ingreso (migración 212).
            foto = await prepararIngreso({
                tipo: 'reparacion',
                id: r.id,
                lat: null,
                lng: null
            });
        } catch (err) {
            setEnviando(false);
            return setError(err.message);
        }
        const pos = await ubicacion();
        var _pos_lat, _pos_lng;
        const args = {
            p_id: r.id,
            p_lat: (_pos_lat = pos === null || pos === void 0 ? void 0 : pos.lat) !== null && _pos_lat !== void 0 ? _pos_lat : null,
            p_lng: (_pos_lng = pos === null || pos === void 0 ? void 0 : pos.lng) !== null && _pos_lng !== void 0 ? _pos_lng : null
        };
        const { data, error: err } = modo === 'cierre' ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('cerrar_reparacion', {
            ...args,
            p_nota: texto.trim()
        }) : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('reportar_reparacion', {
            ...args,
            p_texto: texto.trim()
        });
        setEnviando(false);
        if (err) return setError(err.message);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$servicio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["completarIngreso"])(foto);
        if (modo === 'cierre') {
            setHecho((data === null || data === void 0 ? void 0 : data.corte_resuelto) ? "Reparada. Se resolvió el corte y salen ".concat(data.avisos, " avisos de restablecimiento.") : r.alerta_id ? 'Reparada. La alerta se cierra sola cuando las lecturas de la OLT se normalicen.' : 'Reparada. La oficina ya fue avisada.');
        }
        setTexto('');
        setModo(null);
        onCambio === null || onCambio === void 0 ? void 0 : onCambio();
    }
    if (hecho) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "t-card border border-emerald-500/40 p-3 text-[13px] text-emerald-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    size: 15,
                    className: "mr-1.5 inline"
                }, void 0, false, {
                    fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                hecho
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    var _PRIORIDAD_r_prioridad, _TIPO_AVERIA_r_tipo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "t-card border p-3 ".concat((_PRIORIDAD_r_prioridad = PRIORIDAD[r.prioridad]) !== null && _PRIORIDAD_r_prioridad !== void 0 ? _PRIORIDAD_r_prioridad : PRIORIDAD.media),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-500",
                            children: [
                                "#",
                                r.numero,
                                " · ",
                                (_TIPO_AVERIA_r_tipo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$red$2f$ReparacionesRed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPO_AVERIA"][r.tipo]) !== null && _TIPO_AVERIA_r_tipo !== void 0 ? _TIPO_AVERIA_r_tipo : r.tipo,
                                r.prioridad === 'alta' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-rose-400",
                                    children: " · prioridad alta"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                    lineNumber: 146,
                                    columnNumber: 40
                                }, this),
                                r.estado === 'en_curso' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-400",
                                    children: " · en curso"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                    lineNumber: 147,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14px] font-medium text-slate-100",
                            children: r.titulo
                        }, void 0, false, {
                            fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        (r.lugar || r.afectados != null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 flex items-center gap-1 text-[12px] text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    size: 12,
                                    className: "shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                [
                                    r.lugar,
                                    r.afectados != null && "".concat(r.afectados, " abonados")
                                ].filter(Boolean).join(' · ')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            r.instrucciones && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 rounded-lg bg-sky-500/10 p-2 text-[12px] text-sky-200",
                children: r.instrucciones
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 160,
                columnNumber: 9
            }, this),
            r.origen_activo === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[12px] text-emerald-400",
                children: "El sistema ya ve el servicio restablecido. Si quedó bien, ciérrala."
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            r.ultimo_reporte && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[12px] text-slate-300",
                children: [
                    "“",
                    r.ultimo_reporte,
                    "” ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500",
                        children: [
                            "— ",
                            r.ultimo_reporte_de
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 171,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 170,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[11px] text-slate-500",
                children: r.puedo_cerrar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            size: 11,
                            className: "mr-1 inline text-amber-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        "La cierras tú cuando quede reparada."
                    ]
                }, void 0, true) : r.jefe ? "La cierra el jefe de grupo: ".concat(r.jefe, ". Vos puedes reportar avances.") : 'Puedes reportar avances.'
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            modo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: enviar,
                className: "mt-2 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 3,
                        autoFocus: true,
                        value: texto,
                        onChange: (e)=>setTexto(e.target.value),
                        placeholder: modo === 'cierre' ? 'Qué se reparó: "empalme de 12 hilos en el poste 14, potencias OK"' : 'Qué encontraron o qué falta: "el corte está a 300 m del poste 14"',
                        className: "w-full rounded-lg border border-slate-700 bg-slate-900 p-2 text-[13px] text-slate-100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] text-rose-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 202,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setModo(null),
                                className: "flex-1 rounded-lg border border-slate-700 py-2 text-[13px] text-slate-300",
                                children: "Volver"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: enviando || !texto.trim(),
                                className: "flex-1 rounded-lg py-2 text-[13px] font-semibold text-white disabled:opacity-50 ".concat(modo === 'cierre' ? 'bg-emerald-600' : 'bg-sky-600'),
                                children: enviando ? 'Enviando…' : modo === 'cierre' ? 'Marcar reparada' : 'Enviar reporte'
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 189,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setModo('avance'),
                        className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-sky-500/50 py-2 text-[13px] text-sky-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquarePlus$3e$__["MessageSquarePlus"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            " Reportar avance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    r.puedo_cerrar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setModo('cierre'),
                        className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 py-2 text-[13px] font-semibold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this),
                            " Marcar reparada"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setVerBitacora((v)=>!v),
                className: "mt-2 flex items-center gap-1 text-[11px] text-slate-500",
                children: [
                    verBitacora ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 248,
                        columnNumber: 24
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 248,
                        columnNumber: 50
                    }, this),
                    " Bitácora"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            verBitacora && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-1 space-y-1.5 border-t border-slate-800 pt-2",
                children: (bitacora !== null && bitacora !== void 0 ? bitacora : []).map((f)=>{
                    var _f_quien;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-[12px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: [
                                    new Date(f.creado_at).toLocaleString('es-EC', {
                                        day: '2-digit',
                                        month: 'short',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }),
                                    ' ',
                                    "· ",
                                    (_f_quien = f.quien) !== null && _f_quien !== void 0 ? _f_quien : '—'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-300",
                                children: f.texto
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, this)
                        ]
                    }, f.id, true, {
                        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                        lineNumber: 253,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
                lineNumber: 251,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tecnico/ReparacionesCampo.jsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s1(Reparacion, "r2OQUToeTazZA8P4ifTZZQcLYec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfirmar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$IngresoGrupal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrepararIngreso"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$red$2f$ReparacionesRed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBitacora"]
    ];
});
_c1 = Reparacion;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReparacionesCampo");
__turbopack_context__.k.register(_c1, "Reparacion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tecnico/RutaDelDia.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RutaDelDia,
    "registrarLlamada",
    ()=>registrarLlamada,
    "useMiRuta",
    ()=>useMiRuta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-ordered.js [app-client] (ecmascript) <export default as ListOrdered>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
function registrarLlamada(tipo, id) {
    let canal = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'llamada';
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('registrar_llamada', {
        p_tipo: tipo,
        p_id: id,
        p_canal: canal
    }).then(()=>{});
}
function useMiRuta() {
    _s();
    const [ruta, setRuta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMiRuta.useCallback[recargar]": async ()=>{
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('mi_ruta_hoy');
            // Sin la 216 no hay ruta: la tarjeta no se dibuja.
            setRuta(error ? null : data !== null && data !== void 0 ? data : null);
        }
    }["useMiRuta.useCallback[recargar]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMiRuta.useEffect": ()=>{
            recargar();
        }
    }["useMiRuta.useEffect"], [
        recargar
    ]);
    return {
        ruta,
        recargar
    };
}
_s(useMiRuta, "jsZGe271cku+u05xz8kRcsjEADk=");
const enlaceDe = (i)=>i.tipo === 'ticket' ? "/campo/soporte/".concat(i.id) : "/instalaciones/".concat(i.id, "/alta");
const mapaDe = (i)=>i.latitud != null && i.longitud != null ? "https://www.google.com/maps/dir/?api=1&destination=".concat(i.latitud, ",").concat(i.longitud) : i.direccion ? "https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(i.direccion)) : null;
const queEs = (i)=>i.tipo === 'ticket' ? "Ticket #".concat(i.numero, " · ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["etiquetaIncidencia"])(i.detalle)) : "Instalación".concat(i.numero ? " #".concat(i.numero) : '');
const ESTADO = {
    en_ruta: 'En camino',
    en_proceso: 'En el sitio',
    en_curso: 'En el sitio'
};
function RutaDelDia(param) {
    let { ruta, onCambio } = param;
    _s1();
    const [ordenando, setOrdenando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [motivo, setMotivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [guardando, setGuardando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!ruta) return null;
    var _ruta_items;
    const items = (_ruta_items = ruta.items) !== null && _ruta_items !== void 0 ? _ruta_items : [];
    if (!items.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "t-card p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__["ListOrdered"], {
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        " Ruta de hoy"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-[13px] text-slate-400",
                    children: "No tienes trabajos pendientes para hoy."
                }, void 0, false, {
                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
            lineNumber: 84,
            columnNumber: 7
        }, this);
    }
    const [actual, ...despues] = items;
    const tel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separarTelefonos"])(actual.telefono)[0];
    const wa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enlaceWhatsApp"])(actual.telefono);
    const mapa = mapaDe(actual);
    async function guardarOrden() {
        setGuardando(true);
        setError(null);
        const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].rpc('ordenar_ruta', {
            p_items: ordenando.map((i)=>({
                    tipo: i.tipo,
                    id: i.id
                })),
            p_motivo: motivo.trim() || null
        });
        setGuardando(false);
        if (err) return setError(err.message);
        setOrdenando(null);
        setMotivo('');
        onCambio === null || onCambio === void 0 ? void 0 : onCambio();
    }
    const mover = (idx, delta)=>setOrdenando((lista)=>{
            const n = [
                ...lista
            ];
            const j = idx + delta;
            if (j < 0 || j >= n.length) return n;
            [n[idx], n[j]] = [
                n[j],
                n[idx]
            ];
            return n;
        });
    /* ── Cambiar el orden ── */ if (ordenando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "t-card space-y-3 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__["ListOrdered"], {
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        " Cambiar el orden de la ruta"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1.5",
                    children: ordenando.map((i, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-2 t-panel px-2 py-1.5 text-[13px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-5 text-center text-slate-500",
                                    children: idx + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-0 flex-1 truncate text-slate-200",
                                    children: i.nombre
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>mover(idx, -1),
                                    className: "p-1 text-slate-400",
                                    "aria-label": "Subir",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>mover(idx, 1),
                                    className: "p-1 text-slate-400",
                                    "aria-label": "Bajar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i.id, true, {
                            fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                !ruta.es_oficina && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    rows: 2,
                    value: motivo,
                    onChange: (e)=>setMotivo(e.target.value),
                    placeholder: "Por qué cambias el orden (lo ve la oficina)",
                    className: "w-full rounded-lg border border-slate-700 bg-slate-900 p-2 text-[13px] text-slate-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[12px] text-rose-400",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                    lineNumber: 151,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setOrdenando(null),
                            className: "flex-1 rounded-lg border border-slate-700 py-2 text-[13px] text-slate-300",
                            children: "Volver"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: guardarOrden,
                            disabled: guardando || !ruta.es_oficina && !motivo.trim(),
                            className: "flex-1 rounded-lg bg-sky-600 py-2 text-[13px] font-semibold text-white disabled:opacity-50",
                            children: guardando ? 'Guardando…' : 'Guardar el orden'
                        }, void 0, false, {
                            fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
            lineNumber: 124,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "t-card p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__["ListOrdered"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            " Ruta de hoy · ",
                            items.length,
                            " ",
                            items.length === 1 ? 'trabajo' : 'trabajos'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    ruta.puede_ordenar && items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setOrdenando(items),
                        className: "text-[12px] text-sky-400",
                        children: "Cambiar orden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-sky-500/40 bg-sky-500/10 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold uppercase tracking-wide text-sky-300",
                        children: [
                            "Ahora",
                            ESTADO[actual.estado] ? " · ".concat(ESTADO[actual.estado]) : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-[15px] font-semibold text-slate-100",
                        children: actual.nombre
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] text-slate-400",
                        children: queEs(actual)
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    actual.direccion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 flex items-start gap-1 text-[12px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                size: 12,
                                className: "mt-0.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            " ",
                            actual.direccion
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-4 gap-2 text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: enlaceDe(actual),
                                className: "col-span-1 flex flex-col items-center gap-1 rounded-lg bg-sky-600 py-2 font-semibold text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    " Abrir"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: tel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enlaceLlamada"])(actual.telefono) : undefined,
                                onClick: ()=>tel && registrarLlamada(actual.tipo, actual.id, 'llamada'),
                                className: "flex flex-col items-center gap-1 rounded-lg border py-2 ".concat(tel ? 'border-sky-500/40 text-sky-300' : 'pointer-events-none border-slate-800 text-slate-600'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    " Llamar"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: wa !== null && wa !== void 0 ? wa : undefined,
                                target: "_blank",
                                rel: "noreferrer",
                                onClick: ()=>wa && registrarLlamada(actual.tipo, actual.id, 'whatsapp'),
                                className: "flex flex-col items-center gap-1 rounded-lg border py-2 ".concat(wa ? 'border-emerald-500/40 text-emerald-300' : 'pointer-events-none border-slate-800 text-slate-600'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    " WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: mapa !== null && mapa !== void 0 ? mapa : undefined,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "flex flex-col items-center gap-1 rounded-lg border py-2 ".concat(mapa ? 'border-violet-500/40 text-violet-300' : 'pointer-events-none border-slate-800 text-slate-600'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    " Mapa"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] text-slate-500",
                        children: 'Si el cliente no contesta: llamalo desde acá, espera 10 minutos en el sitio y marca "No se pudo atender" dentro del trabajo.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            despues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 space-y-1.5",
                children: despues.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2 text-[13px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                size: 13,
                                className: "shrink-0 text-slate-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-5 shrink-0 text-center text-slate-500",
                                children: i.posicion
                            }, void 0, false, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-w-0 flex-1 truncate",
                                children: [
                                    i.nombre,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-600",
                                        children: [
                                            "· ",
                                            queEs(i)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                        lineNumber: 251,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i.id, true, {
                        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                        lineNumber: 247,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
                lineNumber: 245,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tecnico/RutaDelDia.jsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s1(RutaDelDia, "YHb/5ORyGngNK/zOeOEUYJqLFBg=");
_c = RutaDelDia;
var _c;
__turbopack_context__.k.register(_c, "RutaDelDia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/tecnico/InicioPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InicioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nextNavigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-client] (ecmascript) <export default as CloudOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2d$tower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RadioTower$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio-tower.js [app-client] (ecmascript) <export default as RadioTower>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-x.js [app-client] (ecmascript) <export default as PackageX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permisos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$temaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/temaCampo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ventas$2f$BotonTema$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ventas/BotonTema.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/soporte.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mapaPreferido$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mapaPreferido.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/campo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ruta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ruta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$MapaCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/MapaCampo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formato.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$MiCuadrilla$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/MiCuadrilla.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$ReparacionesCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/ReparacionesCampo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$RutaDelDia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tecnico/RutaDelDia.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telefono.js [app-client] (ecmascript)");
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
;
;
function InicioPage() {
    var _d_red_incidencias, _d_red, _perfil_nombre, _perfil_apellido, _d_retiros, _d_material, _d_jornada, _d_notificaciones, _d_retiros1;
    _s();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    // Quién es el jefe de grupo hoy, y si es él: lo primero que tiene que ver.
    const cuadrilla = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$MiCuadrilla$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMiCuadrilla"])(perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id);
    // La reparación de red asignada a su cuadrilla: va arriba, es lo urgente.
    const { filas: reparaciones, recargar: recargarReparaciones } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$ReparacionesCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReparaciones"])();
    // La ruta del día (migración 216): un trabajo a la vez, en el orden fijado.
    const { ruta, recargar: recargarRuta } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$RutaDelDia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMiRuta"])();
    const { tema, alternar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$temaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemaCampo"])('claro');
    const [d, setD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * La jornada de hoy, aparte del tablero.
   *
   * No sale de `tableroDelDia` porque ese pasa por el caché de campo, pensado
   * para datos que se pueden mostrar viejos un rato. Éste no: decirle "ya
   * iniciaste" a alguien que todavía no inició —o al revés— es el único dato
   * de esta pantalla que hace que alguien NO haga algo que tenía que hacer.
   *
   * Si la consulta falla no se muestra la tarjeta y listo: sin señal el
   * técnico ya sabe que va a tener que marcar después, y un error rojo arriba
   * de todo no le agrega nada.
   */ const [jornadaHoy, setJornadaHoy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InicioPage.useCallback[recargar]": async ()=>{
            try {
                setD(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableroDelDia"])(perfil));
                setError(null);
            } catch (err) {
                setError(err);
            } finally{
                setCargando(false);
            }
            if (perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id) {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].from('v_jornadas').select('id, inicio_at, foto_ingreso, km_inicio').eq('tecnico_id', perfil.tecnico_id).eq('fecha', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoyISO"])()).maybeSingle();
                setJornadaHoy(data !== null && data !== void 0 ? data : null);
            }
        }
    }["InicioPage.useCallback[recargar]"], [
        perfil
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InicioPage.useEffect": ()=>{
            recargar();
            // Cada dos minutos. La red cambia sola y el técnico no va a tirar para
            // recargar mientras trabaja; más seguido gastaría datos móviles por un dato
            // que no cambia tan rápido.
            const t = setInterval({
                "InicioPage.useEffect.t": ()=>{
                    recargar();
                    recargarRuta();
                }
            }["InicioPage.useEffect.t"], 120000);
            return ({
                "InicioPage.useEffect": ()=>clearInterval(t)
            })["InicioPage.useEffect"];
        }
    }["InicioPage.useEffect"], [
        recargar,
        recargarRuta
    ]);
    var _d_red_incidencias_find;
    const critica = (_d_red_incidencias_find = d === null || d === void 0 ? void 0 : (_d_red = d.red) === null || _d_red === void 0 ? void 0 : (_d_red_incidencias = _d_red.incidencias) === null || _d_red_incidencias === void 0 ? void 0 : _d_red_incidencias.find((n)=>n.estado === 'down')) !== null && _d_red_incidencias_find !== void 0 ? _d_red_incidencias_find : null;
    var _perfil_nombre1, _perfil_apellido1, _perfil_nombre_, _perfil_apellido_, _d_novedadesNuevas, _d_ruta, _d_atrasadas, _d_recientes, _d_retiros_length, _d_retirosVencidos, _d_material_length, _d_materialAgotado, _d_jornada_pendientes, _d_notificaciones_length, _d_retiros_length1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campo campo-fondo -m-3 space-y-4 p-3 md:-m-4 md:p-4",
        "data-tema": tema,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "campo-txt text-lg font-semibold",
                                children: "Dashboard Técnico"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "campo-tenue text-[11px]",
                                children: new Date().toLocaleDateString('es-EC', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long'
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: recargar,
                                className: "campo-tenue flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[12px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 13,
                                        className: cargando ? 'animate-spin' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Actualizar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ventas$2f$BotonTema$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                tema: tema,
                                onAlternar: alternar
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: "/campo/perfil",
                                className: "flex items-center gap-2 pl-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden text-right sm:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "campo-txt text-[13px] font-medium leading-tight",
                                                children: "".concat((_perfil_nombre1 = perfil === null || perfil === void 0 ? void 0 : perfil.nombre) !== null && _perfil_nombre1 !== void 0 ? _perfil_nombre1 : '', " ").concat((_perfil_apellido1 = perfil === null || perfil === void 0 ? void 0 : perfil.apellido) !== null && _perfil_apellido1 !== void 0 ? _perfil_apellido1 : '').trim() || 'Sin nombre'
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "campo-tenue text-[11px] leading-tight",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nombreRol"])(perfil === null || perfil === void 0 ? void 0 : perfil.rol)
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-600/20 text-[13px] font-semibold text-sky-500",
                                        children: "".concat((_perfil_nombre_ = perfil === null || perfil === void 0 ? void 0 : (_perfil_nombre = perfil.nombre) === null || _perfil_nombre === void 0 ? void 0 : _perfil_nombre[0]) !== null && _perfil_nombre_ !== void 0 ? _perfil_nombre_ : '').concat((_perfil_apellido_ = perfil === null || perfil === void 0 ? void 0 : (_perfil_apellido = perfil.apellido) === null || _perfil_apellido === void 0 ? void 0 : _perfil_apellido[0]) !== null && _perfil_apellido_ !== void 0 ? _perfil_apellido_ : '').toUpperCase() || '?'
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$MiCuadrilla$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                c: cuadrilla
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-[13px] text-rose-400",
                children: "No se pudo cargar y no hay nada guardado de antes. Revisa la señal y toca actualizar."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            (d === null || d === void 0 ? void 0 : d.deCache) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-[13px] text-amber-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__["CloudOff"], {
                        size: 16,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Sin conexión. Estás viendo los datos de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: d.minutosDeCache < 60 ? "hace ".concat(d.minutosDeCache, " min") : "hace ".concat(Math.floor(d.minutosDeCache / 60), " h")
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            ". Se actualizan solos al volver la señal."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-3 xl:grid-cols-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                                children: "Estado de la red"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EstadoRed, {
                                red: d === null || d === void 0 ? void 0 : d.red,
                                cargando: cargando
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IncidenciaCritica, {
                            n: critica,
                            cargando: cargando
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvisoJornada, {
                j: jornadaHoy,
                cargaKm: !cuadrilla || cuadrilla.sin_jefe || cuadrilla.soy_jefe
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$RutaDelDia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ruta: ruta,
                onCambio: recargarRuta
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$ReparacionesCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                filas: reparaciones,
                onCambio: recargarReparaciones
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-3 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NovedadesRed, {
                        novedades: d === null || d === void 0 ? void 0 : d.novedades,
                        nuevas: (_d_novedadesNuevas = d === null || d === void 0 ? void 0 : d.novedadesNuevas) !== null && _d_novedadesNuevas !== void 0 ? _d_novedadesNuevas : 0,
                        desde: d === null || d === void 0 ? void 0 : d.desdeUltimoIngreso
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Jornada, {
                        j: d === null || d === void 0 ? void 0 : d.jornada,
                        resumen: d === null || d === void 0 ? void 0 : d.resumen,
                        cargando: cargando
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    !ruta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Proxima, {
                        o: d === null || d === void 0 ? void 0 : d.proxima,
                        cargando: cargando
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 224,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-3 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ruta, {
                        ruta: (_d_ruta = d === null || d === void 0 ? void 0 : d.ruta) !== null && _d_ruta !== void 0 ? _d_ruta : [],
                        atrasadas: (_d_atrasadas = d === null || d === void 0 ? void 0 : d.atrasadas) !== null && _d_atrasadas !== void 0 ? _d_atrasadas : [],
                        cargando: cargando
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Recientes, {
                        filas: (_d_recientes = d === null || d === void 0 ? void 0 : d.recientes) !== null && _d_recientes !== void 0 ? _d_recientes : [],
                        cargando: cargando
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            ((_d_retiros_length = d === null || d === void 0 ? void 0 : (_d_retiros = d.retiros) === null || _d_retiros === void 0 ? void 0 : _d_retiros.length) !== null && _d_retiros_length !== void 0 ? _d_retiros_length : 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PorRetirar, {
                filas: d.retiros,
                vencidos: (_d_retirosVencidos = d.retirosVencidos) !== null && _d_retirosVencidos !== void 0 ? _d_retirosVencidos : 0
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 238,
                columnNumber: 9
            }, this),
            ((_d_material_length = d === null || d === void 0 ? void 0 : (_d_material = d.material) === null || _d_material === void 0 ? void 0 : _d_material.length) !== null && _d_material_length !== void 0 ? _d_material_length : 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaterialQueFalta, {
                filas: d.material,
                agotados: (_d_materialAgotado = d.materialAgotado) !== null && _d_materialAgotado !== void 0 ? _d_materialAgotado : 0
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 247,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccesosRapidos, {
                pendientes: (_d_jornada_pendientes = d === null || d === void 0 ? void 0 : (_d_jornada = d.jornada) === null || _d_jornada === void 0 ? void 0 : _d_jornada.pendientes) !== null && _d_jornada_pendientes !== void 0 ? _d_jornada_pendientes : 0,
                avisos: (_d_notificaciones_length = d === null || d === void 0 ? void 0 : (_d_notificaciones = d.notificaciones) === null || _d_notificaciones === void 0 ? void 0 : _d_notificaciones.length) !== null && _d_notificaciones_length !== void 0 ? _d_notificaciones_length : 0,
                retiros: (_d_retiros_length1 = d === null || d === void 0 ? void 0 : (_d_retiros1 = d.retiros) === null || _d_retiros1 === void 0 ? void 0 : _d_retiros1.length) !== null && _d_retiros_length1 !== void 0 ? _d_retiros_length1 : 0
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 250,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(InicioPage, "6+hRH/cjlfgrT8CRjRwit8fgFZw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$MiCuadrilla$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMiCuadrilla"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$ReparacionesCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReparaciones"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$RutaDelDia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMiRuta"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$temaCampo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemaCampo"]
    ];
});
_c = InicioPage;
/* ────────────────────────────────────────────────────────────────────────── */ const Titulo = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "campo-tenue mb-2 text-[11px] font-semibold uppercase tracking-wider",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 262,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Titulo;
const Panel = (param)=>{
    let { children, className = '' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campo-borde campo-sup rounded-2xl border p-4 ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 266,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Panel;
const Hueco = (param)=>{
    let { alto = 'h-32' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campo-borde campo-sup ".concat(alto, " animate-pulse rounded-2xl border")
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 270,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = Hueco;
/* ── Estado de la red ─────────────────────────────────────────────────────── */ const TARJETAS = [
    {
        clave: 'up',
        label: 'En línea',
        pie: 'Operativos',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
        color: 'text-emerald-500',
        fondo: 'bg-emerald-500/15'
    },
    {
        clave: 'warning',
        label: 'En alerta',
        pie: 'Requieren revisión',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        color: 'text-amber-500',
        fondo: 'bg-amber-500/15'
    },
    {
        clave: 'down',
        label: 'Caídos',
        pie: 'Incidencia activa',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"],
        color: 'text-rose-500',
        fondo: 'bg-rose-500/15'
    },
    {
        clave: 'recuperadosHoy',
        label: 'Recuperados hoy',
        pie: 'Servicio restablecido',
        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
        color: 'text-sky-500',
        fondo: 'bg-sky-500/15'
    }
];
function EstadoRed(param) {
    let { red, cargando } = param;
    if (cargando && !red) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hueco, {}, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 283,
        columnNumber: 32
    }, this);
    // Sin nodos cargados no se muestra un cero: se calla. Un "0 caídos" en verde
    // diría que la red está perfecta cuando en realidad nadie la está midiendo.
    if (!red || red.total === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-tenue py-6 text-center text-[13px]",
                children: "No hay equipos monitoreados todavía."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 290,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
            lineNumber: 289,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
        children: TARJETAS.map((t)=>{
            var _red_t_clave;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campo-borde campo-sup rounded-2xl border p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid h-10 w-10 place-items-center rounded-full ".concat(t.fondo),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(t.icono, {
                            size: 19,
                            className: t.color
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-3xl font-semibold tabular-nums ".concat(t.color),
                        children: (_red_t_clave = red[t.clave]) !== null && _red_t_clave !== void 0 ? _red_t_clave : 0
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "campo-txt text-[13px] font-medium",
                        children: t.label
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "campo-tenue text-[11px]",
                        children: t.pie
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this)
                ]
            }, t.clave, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 300,
                columnNumber: 9
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_c4 = EstadoRed;
function IncidenciaCritica(param) {
    let { n, cargando } = param;
    if (cargando && !n) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hueco, {}, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 314,
        columnNumber: 30
    }, this);
    // Sin incidencia no se dibuja un cartel verde de "todo en orden". Un aviso
    // permanente se vuelve invisible en dos días, y entonces el rojo tampoco se ve.
    if (!n) return null;
    var _n_clientes_afectados;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full rounded-2xl border border-rose-500/40 bg-rose-500/[0.07] p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-rose-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-rose-500"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            "Incidencia crítica"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2d$tower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RadioTower$3e$__["RadioTower"], {
                        size: 26,
                        className: "shrink-0 text-rose-500/70"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-txt mt-2 text-[17px] font-bold",
                children: n.nombre
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-suave text-[13px]",
                children: [
                    "Sin conexión desde hace ",
                    duracion(n.minutos_asi)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campo-tenue mt-2 space-y-0.5 text-[12px]",
                children: [
                    n.desde && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Última comunicación:",
                            ' ',
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hora"])(n.desde)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Clientes posiblemente afectados: ",
                            (_n_clientes_afectados = n.clientes_afectados) !== null && _n_clientes_afectados !== void 0 ? _n_clientes_afectados : 0
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    n.punto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Ubicación: ",
                            n.punto
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 345,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/campo/red?nodo=".concat(n.id),
                className: "campo-borde campo-txt mt-3 inline-flex items-center gap-1.5 rounded-lg border bg-white/5 px-3 py-2 text-[12px] font-medium",
                children: [
                    "Ver detalle ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 352,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 348,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
_c5 = IncidenciaCritica;
/* ── Novedades de red ─────────────────────────────────────────────────────── */ const CLASE = {
    caida: {
        punto: 'bg-rose-500',
        texto: 'perdió comunicación'
    },
    recuperado: {
        punto: 'bg-emerald-500',
        texto: 'recuperado'
    },
    degradado: {
        punto: 'bg-amber-500',
        texto: 'presentó alta latencia'
    },
    // Lo que no responde al ping (migración 209). El texto es el detalle de la
    // vista: "Fibra cortada", "6 ONTs sin señal a la vez", "Bajó 2.4 dB…".
    corte_masivo: {
        punto: 'bg-rose-500',
        texto: null
    },
    corte_grupo: {
        punto: 'bg-rose-500',
        texto: null
    },
    nap_degradada: {
        punto: 'bg-amber-500',
        texto: null
    }
};
function NovedadesRed(param) {
    let { novedades, nuevas = 0, desde } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-baseline justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                        children: "Novedades de red"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/campo/red",
                        className: "text-[12px] text-sky-500",
                        children: "Ver todas"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            desde && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-tenue -mt-1 mb-2 text-[11px]",
                children: nuevas > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-sky-500",
                    children: [
                        nuevas,
                        " ",
                        nuevas === 1 ? 'novedad nueva' : 'novedades nuevas',
                        " desde tu último ingreso"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                    lineNumber: 388,
                    columnNumber: 13
                }, this) : 'Sin novedades desde tu último ingreso'
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 386,
                columnNumber: 9
            }, this),
            !(novedades === null || novedades === void 0 ? void 0 : novedades.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-tenue py-6 text-center text-[13px]",
                children: "Sin novedades en la red."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 399,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0",
                children: novedades.slice(0, 4).map((e, i)=>{
                    var _CLASE_e_clase;
                    const c = (_CLASE_e_clase = CLASE[e.clase]) !== null && _CLASE_e_clase !== void 0 ? _CLASE_e_clase : CLASE.degradado;
                    var _e_titulo, _c_texto;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "campo-borde flex items-center gap-2.5 border-b py-2.5 last:border-0 ".concat(e.nueva ? '' : 'opacity-60'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "campo-tenue shrink-0 text-[12px] tabular-nums",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hora"])(e.momento)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 413,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 shrink-0 rounded-full ".concat(c.punto)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 416,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "campo-txt min-w-0 flex-1 truncate text-[13px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "font-medium",
                                        children: (_e_titulo = e.titulo) !== null && _e_titulo !== void 0 ? _e_titulo : e.nodo
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 418,
                                        columnNumber: 19
                                    }, this),
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "campo-suave",
                                        children: (_c_texto = c.texto) !== null && _c_texto !== void 0 ? _c_texto : e.detalle
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 419,
                                        columnNumber: 19
                                    }, this),
                                    e.reparacion_cuadrilla && e.clase !== 'recuperado' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sky-500",
                                        children: [
                                            " · ",
                                            e.reparacion_cuadrilla
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 421,
                                        columnNumber: 21
                                    }, this),
                                    e.duracion_min != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "campo-tenue",
                                        children: [
                                            " · ",
                                            duracion(e.duracion_min)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 424,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 417,
                                columnNumber: 17
                            }, this)
                        ]
                    }, "".concat(e.id, "-").concat(e.clase, "-").concat(i), true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 405,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 401,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
_c6 = NovedadesRed;
/* ── Mi jornada ───────────────────────────────────────────────────────────── */ function Jornada(param) {
    let { j, resumen, cargando } = param;
    if (cargando && !j) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hueco, {
        alto: "h-48"
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 439,
        columnNumber: 30
    }, this);
    if (!j) return null;
    const cifras = [
        {
            n: j.pendientes,
            label: 'Pendientes',
            color: 'text-sky-500'
        },
        {
            n: j.enProceso,
            label: 'En proceso',
            color: 'text-amber-500'
        },
        {
            n: j.hechas,
            label: 'Completadas',
            color: 'text-emerald-500'
        },
        {
            n: j.reagendadas,
            label: 'Reagendada',
            color: 'campo-suave'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                children: "Mi jornada"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 gap-2",
                children: cifras.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "campo-borde rounded-xl border py-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-semibold tabular-nums ".concat(c.color),
                                children: c.n
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "campo-tenue text-[10px]",
                                children: c.label
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this)
                        ]
                    }, c.label, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campo-borde mt-3 flex items-start gap-2.5 rounded-xl border bg-sky-500/[0.06] p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                        size: 17,
                        className: "mt-0.5 shrink-0 text-sky-500"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "campo-suave text-[12px]",
                        children: [
                            j.total === 0 ? 'No tienes trabajos agendados para hoy.' : "Tienes ".concat(j.total, " ").concat(j.total === 1 ? 'orden asignada' : 'órdenes asignadas', " para hoy."),
                            j.atrasadas > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/campo/ordenes",
                                        className: "font-medium text-amber-500",
                                        children: [
                                            "Y ",
                                            j.atrasadas,
                                            " de días anteriores."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 471,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            (resumen === null || resumen === void 0 ? void 0 : resumen.inicio) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campo-borde mt-3 grid grid-cols-2 gap-2 border-t pt-3 text-[12px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "campo-tenue text-[10px] uppercase tracking-wide",
                                children: "Inicio de jornada"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "campo-txt font-medium",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formato$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hora"])(resumen.inicio)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 487,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "campo-tenue text-[10px] uppercase tracking-wide",
                                children: "En jornada"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 492,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "campo-txt font-medium",
                                children: duracion(resumen.minutosDesdeInicio)
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 491,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 484,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
_c7 = Jornada;
/* ── Próxima instalación ──────────────────────────────────────────────────── */ function Proxima(param) {
    let { o, cargando } = param;
    var _o_tecnologia;
    if (cargando && !o) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hueco, {
        alto: "h-48"
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 504,
        columnNumber: 30
    }, this);
    if (!o) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                    children: "Próxima instalación"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                    lineNumber: 509,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "campo-tenue py-8 text-center text-[13px]",
                    children: "No queda nada agendado para hoy."
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                    lineNumber: 510,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
            lineNumber: 508,
            columnNumber: 7
        }, this);
    }
    const falta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faltaPara"])(o);
    var _o_cliente, _o_cliente1, _o_direccion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                children: [
                    "Próxima ",
                    o.tipo === 'nueva' ? 'instalación' : 'visita'
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 521,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$MapaCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                alto: "h-32",
                puntos: [
                    {
                        lat: o.latitud,
                        lng: o.longitud,
                        titulo: (_o_cliente = o.cliente) !== null && _o_cliente !== void 0 ? _o_cliente : o.nombre,
                        estado: o.estado
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            o.hora && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-txt mt-3 flex items-center gap-1.5 text-[15px] font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        size: 15,
                        className: "campo-tenue"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 533,
                        columnNumber: 11
                    }, this),
                    " ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HORA"])(o.hora)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 532,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-txt mt-1 text-[17px] font-bold",
                children: (_o_cliente1 = o.cliente) !== null && _o_cliente1 !== void 0 ? _o_cliente1 : o.nombre
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 536,
                columnNumber: 7
            }, this),
            o.numero && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-tenue text-[11px]",
                children: [
                    "Orden #",
                    o.numero
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 537,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-suave mt-0.5 flex items-start gap-1.5 text-[13px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        size: 14,
                        className: "campo-tenue mt-0.5 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (_o_direccion = o.direccion) !== null && _o_direccion !== void 0 ? _o_direccion : 'sin dirección cargada'
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 540,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            (o.plan || o.tecnologia) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-suave mt-1 text-[13px]",
                children: [
                    o.plan,
                    (_o_tecnologia = o.tecnologia) === null || _o_tecnologia === void 0 ? void 0 : _o_tecnologia.toUpperCase()
                ].filter(Boolean).join(' · ')
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 543,
                columnNumber: 9
            }, this),
            (o.contrato_firmado || o.documentos_completos) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-1.5",
                children: [
                    o.contrato_firmado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Etiqueta, {
                        tono: "verde",
                        children: "Contrato firmado"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 556,
                        columnNumber: 34
                    }, this),
                    o.documentos_completos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Etiqueta, {
                        tono: "azul",
                        children: "Documentos completos"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 557,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 555,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-1.5",
                children: falta.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Etiqueta, {
                    tono: "verde",
                    children: "Lista para cerrar"
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                    lineNumber: 564,
                    columnNumber: 11
                }, this) : falta.slice(0, 3).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Etiqueta, {
                        tono: "ambar",
                        children: [
                            "Falta ",
                            f
                        ]
                    }, f, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 567,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 562,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 grid grid-cols-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Boton, {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telefono$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enlaceLlamada"])(o.telefono),
                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                        children: "Llamar"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Boton, {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$soporte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["enlaceMapa"])(o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mapaPreferido$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapaPreferido"])()),
                        icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                        externo: true,
                        children: "Ubicación"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/instalaciones/".concat(o.id, "/alta"),
                        className: "flex items-center justify-center gap-1.5 rounded-xl bg-sky-600 py-2.5 text-[13px] font-semibold text-white",
                        children: [
                            "Iniciar ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 585,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 581,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 574,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 520,
        columnNumber: 5
    }, this);
}
_c8 = Proxima;
const Boton = (param)=>{
    let { href, icono: Icono, externo, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href !== null && href !== void 0 ? href : undefined,
        target: externo ? '_blank' : undefined,
        rel: externo ? 'noreferrer' : undefined,
        className: "campo-borde campo-txt flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-[13px] font-medium ".concat(href ? '' : 'pointer-events-none opacity-40'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                size: 15
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 601,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            " ",
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 593,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c9 = Boton;
const Etiqueta = (param)=>{
    let { tono, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-md px-2 py-0.5 text-[11px] ".concat(tono === 'verde' ? 'bg-emerald-500/15 text-emerald-600' : tono === 'azul' ? 'bg-sky-500/15 text-sky-600' : 'bg-amber-500/15 text-amber-600'),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 606,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c10 = Etiqueta;
/* ── Mi ruta de hoy ───────────────────────────────────────────────────────── */ const PASO_RUTA = {
    agendada: {
        label: 'Pendiente',
        chip: 'campo-suave campo-borde border'
    },
    en_ruta: {
        label: 'En camino',
        chip: 'bg-sky-500/15 text-sky-600'
    },
    en_curso: {
        label: 'En proceso',
        chip: 'bg-amber-500/15 text-amber-600'
    },
    hecha: {
        label: 'Finalizada',
        chip: 'bg-emerald-500/15 text-emerald-600'
    },
    reprogramada: {
        label: 'Reagendada',
        chip: 'bg-violet-500/15 text-violet-600'
    },
    no_realizada: {
        label: 'No realizada',
        chip: 'bg-rose-500/15 text-rose-600'
    },
    cancelada: {
        label: 'Cancelada',
        chip: 'campo-tenue campo-borde border'
    }
};
function Ruta(param) {
    let { ruta, atrasadas, cargando } = param;
    if (cargando && !ruta.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hueco, {
        alto: "h-48"
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 632,
        columnNumber: 40
    }, this);
    const lista = [
        ...ruta,
        ...atrasadas
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-baseline justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                        children: "Mi ruta de hoy"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/campo/ordenes",
                        className: "text-[12px] text-sky-500",
                        children: "Ver todas"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 639,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 637,
                columnNumber: 7
            }, this),
            !lista.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-tenue py-8 text-center text-[13px]",
                children: "Sin paradas para hoy."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 645,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LargoDeRuta, {
                        lista: lista
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 648,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tecnico$2f$MapaCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        alto: "h-40",
                        conRuta: true,
                        puntos: lista.map((o)=>{
                            var _o_cliente;
                            return {
                                lat: o.latitud,
                                lng: o.longitud,
                                titulo: (_o_cliente = o.cliente) !== null && _o_cliente !== void 0 ? _o_cliente : o.nombre,
                                estado: o.estado
                            };
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 653,
                        columnNumber: 11
                    }, this),
                    lista.map((o, i)=>{
                        var _PASO_RUTA_o_estado;
                        const e = (_PASO_RUTA_o_estado = PASO_RUTA[o.estado]) !== null && _PASO_RUTA_o_estado !== void 0 ? _PASO_RUTA_o_estado : PASO_RUTA.agendada;
                        const hecha = o.estado === 'hecha';
                        var _HORA, _o_cliente, _o_sector, _ref;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/instalaciones/".concat(o.id, "/alta"),
                            className: "campo-borde flex items-center gap-3 rounded-xl border p-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "grid h-8 w-8 shrink-0 place-items-center rounded-full text-[12px] font-semibold ".concat(hecha ? 'bg-emerald-500/15 text-emerald-600' : 'bg-sky-500/15 text-sky-600'),
                                    children: hecha ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 677,
                                        columnNumber: 28
                                    }, this) : i + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                    lineNumber: 672,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "campo-tenue shrink-0 text-[12px] tabular-nums",
                                    children: (_HORA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HORA"])(o.hora)) !== null && _HORA !== void 0 ? _HORA : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                    lineNumber: 679,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block truncate text-[13px] ".concat(hecha ? 'campo-tenue line-through' : 'campo-txt font-medium'),
                                            children: (_o_cliente = o.cliente) !== null && _o_cliente !== void 0 ? _o_cliente : o.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                            lineNumber: 683,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "campo-tenue block truncate text-[11px]",
                                            children: (_ref = (_o_sector = o.sector) !== null && _o_sector !== void 0 ? _o_sector : o.direccion) !== null && _ref !== void 0 ? _ref : ''
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                            lineNumber: 690,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                    lineNumber: 682,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 rounded-full px-2 py-0.5 text-[10px] ".concat(e.chip),
                                    children: e.label
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                    lineNumber: 697,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, o.id, true, {
                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                            lineNumber: 667,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 647,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 636,
        columnNumber: 5
    }, this);
}
_c11 = Ruta;
/* ── Trabajos recientes ───────────────────────────────────────────────────── */ function Recientes(param) {
    let { filas, cargando } = param;
    if (cargando && !filas.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hueco, {
        alto: "h-48"
    }, void 0, false, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 712,
        columnNumber: 41
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-baseline justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                        children: "Trabajos recientes"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 717,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/campo/ordenes",
                        className: "text-[12px] text-sky-500",
                        children: "Ver todas"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 716,
                columnNumber: 7
            }, this),
            !filas.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "campo-tenue py-8 text-center text-[13px]",
                children: "Todavía no hay trabajos."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 724,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left text-[12px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "campo-tenue text-[10px] uppercase tracking-wide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2 pr-3 font-medium",
                                        children: "Orden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 730,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2 pr-3 font-medium",
                                        children: "Cliente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 731,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2 pr-3 font-medium",
                                        children: "Tipo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 732,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2 pr-3 font-medium",
                                        children: "Hora"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 733,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2 pr-3 font-medium",
                                        children: "Estado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 734,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 735,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 729,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                            lineNumber: 728,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filas.map((f)=>{
                                var _PASO_RUTA_f_estado;
                                const e = (_PASO_RUTA_f_estado = PASO_RUTA[f.estado]) !== null && _PASO_RUTA_f_estado !== void 0 ? _PASO_RUTA_f_estado : {
                                    label: f.estado,
                                    chip: 'campo-suave campo-borde border'
                                };
                                var _f_cliente, _HORA;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "campo-borde border-t",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "campo-tenue py-2 pr-3 font-mono text-[11px]",
                                            children: f.numero ? "#".concat(f.numero) : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                            lineNumber: 746,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "campo-txt max-w-[10rem] truncate py-2 pr-3 font-medium",
                                            children: (_f_cliente = f.cliente) !== null && _f_cliente !== void 0 ? _f_cliente : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                            lineNumber: 749,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "campo-suave py-2 pr-3",
                                            children: f.tipo
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                            lineNumber: 752,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "campo-tenue py-2 pr-3 tabular-nums",
                                            children: (_HORA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$campo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HORA"])(f.hora)) !== null && _HORA !== void 0 ? _HORA : new Date(f.cuando).toLocaleDateString('es-EC', {
                                                day: '2-digit',
                                                month: 'short'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                            lineNumber: 753,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-2 pr-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full px-2 py-0.5 text-[10px] ".concat(e.chip),
                                                children: e.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                                lineNumber: 761,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                            lineNumber: 760,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-2 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: f.a,
                                                className: "text-[12px] text-sky-500",
                                                children: "Abrir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                                lineNumber: 766,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                            lineNumber: 765,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "".concat(f.tipo, "-").concat(f.id), true, {
                                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                    lineNumber: 745,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                            lineNumber: 738,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                    lineNumber: 727,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 726,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 715,
        columnNumber: 5
    }, this);
}
_c12 = Recientes;
/* ── Accesos rápidos ──────────────────────────────────────────────────────── */ /**
 * Los equipos que hay que ir a buscar.
 *
 * ── Por qué las citas vencidas van primero y en rojo ──
 *
 * Porque son la razón por la que este bloque existe. El abonado dijo "pasá el
 * jueves a las tres", nadie fue, y sin nada que lo muestre esa orden se pierde
 * entre las otras hasta que el equipo ya no se recupera. Es la diferencia entre
 * una lista y un recordatorio.
 */ function PorRetirar(param) {
    let { filas, vencidos } = param;
    const hora = (f)=>{
        if (!f) return null;
        const d = new Date(f);
        return Number.isNaN(d.getTime()) ? null : d.toLocaleString('es-EC', {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "t-card p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex items-center gap-2 text-sm font-semibold text-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageX$3e$__["PackageX"], {
                                size: 16,
                                className: "text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 806,
                                columnNumber: 11
                            }, this),
                            "Equipos por retirar",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-normal text-slate-500",
                                children: filas.length
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 808,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 805,
                        columnNumber: 9
                    }, this),
                    vencidos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[11px] text-red-300",
                        children: [
                            vencidos,
                            " con la hora pasada"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 811,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 804,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: filas.slice(0, 4).map((r)=>{
                    const cuando = hora(r.agendado_para);
                    const vencida = r.agendado_para && new Date(r.agendado_para) < new Date();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/campo/retiros",
                        className: "block t-panel px-3 py-2 transition hover:border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate text-sm text-slate-200",
                                        children: r.cliente
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 828,
                                        columnNumber: 17
                                    }, this),
                                    cuando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 text-[11px] ".concat(vencida ? 'text-red-400' : 'text-sky-400'),
                                        children: cuando
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 830,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 827,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "truncate text-[11px] text-slate-500",
                                children: [
                                    r.zona,
                                    r.direccion,
                                    r.serie
                                ].filter(Boolean).join(' · ')
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 835,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 822,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 817,
                columnNumber: 7
            }, this),
            filas.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/campo/retiros",
                className: "mt-2 block text-[12px] text-sky-500",
                children: [
                    "Ver los ",
                    filas.length,
                    " →"
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 844,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 803,
        columnNumber: 5
    }, this);
}
_c13 = PorRetirar;
/* ── Accesos rápidos ──────────────────────────────────────────────────────── */ /**
 * Lo que hay que pedir en bodega antes de salir.
 *
 * ── Por qué el número que se muestra es cuánto pedir y no cuánto queda ──
 *
 * Porque "te quedan 2 conectores" obliga a hacer una cuenta —¿cuántos necesito
 * para hoy?, ¿cuántos me daban antes?— parado en la puerta de la bodega. "Pedí
 * 20" se puede ejecutar sin pensar, que es lo único que se hace bien a las siete
 * de la mañana.
 */ function MaterialQueFalta(param) {
    let { filas, agotados } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "campo-tarjeta rounded-xl p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                size: 14,
                                className: "mr-1.5 inline"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 869,
                                columnNumber: 11
                            }, this),
                            "Material por pedir"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 868,
                        columnNumber: 9
                    }, this),
                    agotados > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-rose-500/15 px-2 py-0.5 text-[11px] text-rose-500",
                        children: [
                            agotados,
                            " sin nada"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 873,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 867,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1.5",
                children: filas.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between gap-2 text-[13px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "campo-txt min-w-0 truncate",
                                children: [
                                    m.articulo,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "campo-tenue ml-1.5 text-[11px]",
                                        children: m.agotado ? 'no te queda ninguno' : "te quedan ".concat(m.cantidad, " ").concat(m.unidad)
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                        lineNumber: 884,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 882,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 rounded px-1.5 py-0.5 text-[12px] tabular-nums ".concat(m.agotado ? 'bg-rose-500/15 text-rose-500' : 'bg-amber-500/15 text-amber-600'),
                                children: [
                                    "pedir ",
                                    m.sugerido
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 888,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.articulo, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 881,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/inventario/mi-almacen",
                className: "mt-2 block text-[12px] text-sky-500",
                children: "Ver mi almacén"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 899,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 866,
        columnNumber: 5
    }, this);
}
_c14 = MaterialQueFalta;
function AccesosRapidos(param) {
    let { pendientes, avisos, retiros } = param;
    const items = [
        {
            to: '/campo/ordenes',
            label: 'Órdenes asignadas',
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
            n: pendientes
        },
        {
            to: '/campo/retiros',
            label: 'Equipos por retirar',
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageX$3e$__["PackageX"],
            n: retiros
        },
        {
            to: '/campo/entregar',
            label: 'Entregar a oficina',
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"]
        },
        {
            to: '/campo/soporte',
            label: 'Soporte',
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
        },
        {
            to: '/campo/inventario',
            label: 'Materiales',
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"]
        },
        {
            to: '/campo/red',
            label: 'Monitoreo de red',
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2d$tower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RadioTower$3e$__["RadioTower"],
            nota: 'Solo lectura'
        },
        {
            to: '/campo/avisos',
            label: 'Notificaciones',
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
            n: avisos
        },
        {
            to: '/campo/desempeno',
            label: 'Mi desempeño',
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Titulo, {
                children: "Accesos rápidos"
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 920,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
                children: items.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: i.to,
                        className: "campo-borde campo-sup relative flex flex-col items-center gap-2 rounded-2xl border p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(i.icono, {
                                size: 22,
                                className: "campo-suave"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 928,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "campo-txt text-center text-[12px] font-medium",
                                children: i.label
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 929,
                                columnNumber: 13
                            }, this),
                            i.nota && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "campo-tenue rounded bg-black/5 px-1.5 text-[9px] uppercase tracking-wide",
                                children: i.nota
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 931,
                                columnNumber: 15
                            }, this),
                            i.n > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-2 top-2 grid h-5 min-w-5 place-items-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white",
                                children: i.n
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                                lineNumber: 936,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i.to, true, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 923,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 921,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 919,
        columnNumber: 5
    }, this);
}
_c15 = AccesosRapidos;
/** "3h 27m". Sin segundos: a nadie le sirven acá. */ function duracion(minutos) {
    if (minutos == null) return '—';
    // Un negativo significa que el reloj del servidor y el del evento no
    // coinciden —o que alguien cargó una fecha futura—. "hace -5h" no le dice
    // nada a nadie; "recién" es lo más cercano a la verdad que se puede afirmar.
    if (minutos < 0) return 'recién';
    if (minutos < 60) return "".concat(minutos, " min");
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    if (h < 48) return m ? "".concat(h, "h ").concat(m, "m") : "".concat(h, "h");
    return "".concat(Math.floor(h / 24), "d ").concat(h % 24, "h");
}
/* ── Falta iniciar la jornada, o falta su foto ─────────────────────────────── */ /**
 * Solo aparece cuando hay algo que hacer.
 *
 * Con la jornada abierta y su foto subida no se dibuja nada: un cartel verde
 * de "todo en orden" arriba de la pantalla se vuelve parte del fondo en dos
 * días, y el día que diga otra cosa tampoco se va a leer.
 */ function AvisoJornada(param) {
    let { j, cargaKm } = param;
    if ((j === null || j === void 0 ? void 0 : j.inicio_at) && (j === null || j === void 0 ? void 0 : j.foto_ingreso)) return null;
    // Desde la 212 el ingreso se marca solo en el primer cliente: lo único que
    // falta antes de salir es la salida del vehículo, y solo para quien maneja.
    const sinIniciar = !(j === null || j === void 0 ? void 0 : j.inicio_at);
    if (sinIniciar && (!cargaKm || (j === null || j === void 0 ? void 0 : j.km_inicio) != null)) return null;
    const texto = sinIniciar ? {
        titulo: 'Registra la salida del vehículo',
        sub: 'Los km al salir de la base. Tu ingreso se marca solo al llegar al primer cliente.',
        accion: 'Registrar'
    } : {
        titulo: 'Falta tu foto de ingreso',
        sub: 'La jornada está abierta. Sube la foto cuando tengas señal.',
        accion: 'Subir'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nextNavigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
        to: "/campo/jornada",
        className: "campo-borde flex items-center gap-3 rounded-2xl border p-4 ".concat(sinIniciar ? 'bg-sky-500/[0.08]' : 'bg-amber-500/[0.08]'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl ".concat(sinIniciar ? 'bg-sky-500/15 text-sky-500' : 'bg-amber-500/15 text-amber-500'),
                children: sinIniciar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                    lineNumber: 1002,
                    columnNumber: 23
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                    lineNumber: 1002,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 997,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "campo-txt block text-[14px] font-semibold",
                        children: texto.titulo
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 1005,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "campo-suave mt-0.5 block text-[12px] leading-snug",
                        children: texto.sub
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                        lineNumber: 1006,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 1004,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 rounded-lg px-3 py-1.5 text-[12px] font-semibold text-white ".concat(sinIniciar ? 'bg-sky-600' : 'bg-amber-600'),
                children: texto.accion
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 1008,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 991,
        columnNumber: 5
    }, this);
}
_c16 = AvisoJornada;
/**
 * Cuánto da el recorrido del día, y con qué honestidad.
 *
 * ── Por qué dice "en línea recta" y no lo esconde ──
 *
 * Porque el número va a estar siempre por debajo del real: no conoce las
 * calles, los sentidos únicos ni el río. Un técnico que lee "8 km" y maneja 14
 * deja de creerle a la pantalla — y con razón. Diciendo de dónde sale, el
 * número sigue sirviendo para lo único que sirve: comparar un día contra otro.
 *
 * ── Y por qué avisa cuando faltan coordenadas ──
 *
 * Sumar solo los tramos medibles y presentarlo como el total del día es la
 * forma silenciosa de mentir. Si de seis paradas solo tres se pudieron medir,
 * eso se dice.
 */ function LargoDeRuta(param) {
    let { lista } = param;
    const { metros, tramosMedidos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ruta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["largoDeRuta"])(lista);
    if (!tramosMedidos) return null;
    const sinUbicar = lista.filter((o)=>o.latitud == null || o.longitud == null).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "campo-tenue mb-2 text-[11px] leading-snug",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                className: "campo-suave",
                children: metros >= 1000 ? "".concat((metros / 1000).toFixed(1), " km") : "".concat(metros, " m")
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
                lineNumber: 1043,
                columnNumber: 7
            }, this),
            ' ',
            "en línea recta entre las paradas, en este orden.",
            sinUbicar > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    ' ',
                    sinUbicar === 1 ? 'Una parada sin ubicación quedó afuera de la cuenta.' : "".concat(sinUbicar, " paradas sin ubicación quedaron afuera de la cuenta.")
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/tecnico/InicioPage.jsx",
        lineNumber: 1042,
        columnNumber: 5
    }, this);
}
_c17 = LargoDeRuta;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "InicioPage");
__turbopack_context__.k.register(_c1, "Titulo");
__turbopack_context__.k.register(_c2, "Panel");
__turbopack_context__.k.register(_c3, "Hueco");
__turbopack_context__.k.register(_c4, "EstadoRed");
__turbopack_context__.k.register(_c5, "IncidenciaCritica");
__turbopack_context__.k.register(_c6, "NovedadesRed");
__turbopack_context__.k.register(_c7, "Jornada");
__turbopack_context__.k.register(_c8, "Proxima");
__turbopack_context__.k.register(_c9, "Boton");
__turbopack_context__.k.register(_c10, "Etiqueta");
__turbopack_context__.k.register(_c11, "Ruta");
__turbopack_context__.k.register(_c12, "Recientes");
__turbopack_context__.k.register(_c13, "PorRetirar");
__turbopack_context__.k.register(_c14, "MaterialQueFalta");
__turbopack_context__.k.register(_c15, "AccesosRapidos");
__turbopack_context__.k.register(_c16, "AvisoJornada");
__turbopack_context__.k.register(_c17, "LargoDeRuta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_624a8494._.js.map