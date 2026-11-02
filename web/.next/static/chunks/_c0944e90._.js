(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/inventario.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/personal.js [app-client] (ecmascript)");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_articulos').select('*').order('nombre'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('almacenes').select('*').eq('activo', true).order('tipo').order('nombre')
        ]);
        if (articulos.error) throw articulos.error;
        var _articulos_data, _almacenes_data;
        return {
            articulos: (_articulos_data = articulos.data) !== null && _articulos_data !== void 0 ? _articulos_data : [],
            almacenes: (_almacenes_data = almacenes.data) !== null && _almacenes_data !== void 0 ? _almacenes_data : []
        };
    },
    async existencias (almacenId) {
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_existencias').select('*').order('articulo');
        if (almacenId) q = q.eq('almacen_id', almacenId);
        const { data, error } = await q;
        if (error) throw error;
        // Las filas en cero son ruido: un artículo que alguna vez pasó por un
        // almacén deja su renglón para siempre, y con veinte almacenes la lista se
        // llena de ceros que tapan lo que sí hay.
        return (data !== null && data !== void 0 ? data : []).filter((e)=>Number(e.cantidad) !== 0);
    },
    /**
   * Lo que está en el mínimo o por debajo, almacén por almacén.
   *
   * Se pregunta por almacén y no por artículo porque es lo que hay que hacer
   * con la respuesta: el pedido de material es de una bodega o de la mochila de
   * un técnico. Un total sumado de todos lados no le dice a nadie qué cargar en
   * la camioneta.
   */ async stockBajo () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_stock_bajo').select('*')// Lo agotado primero: es la diferencia entre "hay que reponer" y "hoy no
        // se puede instalar".
        .order('agotado', {
            ascending: false
        }).order('falta', {
            ascending: false
        });
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * El mínimo de un artículo en un almacén concreto.
   *
   * Existe además del mínimo del artículo porque la bodega y la mochila del
   * técnico no se miden con la misma vara: la bodega avisa a las 20 ONTs, el
   * técnico a las 2. Con un solo número, o el técnico vive en alerta permanente
   * o el aviso de la bodega llega tarde.
   */ async guardarMinimo (param) {
        let { almacen_id, articulo_id, minimo, reponer } = param;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').upsert({
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
    /** Dejar de controlar ese artículo en ese almacén. */ async borrarMinimo (param) {
        let { almacen_id, articulo_id } = param;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').delete().eq('almacen_id', almacen_id).eq('articulo_id', articulo_id);
        if (error) throw error;
    },
    /** Los mínimos ya cargados, para poder editarlos. */ async minimos () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('stock_minimos').select('*');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async guardarArticulo (articulo) {
        var _datos_codigo;
        const { id, ...datos } = articulo;
        const fila = {
            ...datos,
            codigo: ((_datos_codigo = datos.codigo) === null || _datos_codigo === void 0 ? void 0 : _datos_codigo.trim()) || null,
            tipo_ont_id: datos.tipo_ont_id || null,
            stock_minimo: datos.stock_minimo === '' ? null : Number(datos.stock_minimo)
        };
        const { data, error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').update(fila).eq('id', id).select().single() : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').insert(fila).select().single();
        if (error) throw error;
        return data;
    },
    async equipos () {
        let { almacenId, articuloId, busqueda } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_equipos').select('*').order('creado_en', {
            ascending: false
        }).limit(500);
        if (almacenId) q = q.eq('almacen_id', almacenId);
        if (articuloId) q = q.eq('articulo_id', articuloId);
        if (busqueda) q = q.or("serie.ilike.%".concat(busqueda, "%,mac.ilike.%").concat(busqueda, "%"));
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Registra un movimiento. Es la única forma de mover stock.
   *
   * Para artículos por serie inserta un movimiento por equipo, no uno con
   * cantidad 5: cada aparato tiene su propia historia de dónde estuvo, y un
   * renglón agrupado la pierde justo para los que más importa rastrear.
   */ async mover (param, perfil) {
        let { tipo, articuloId, cantidad, equipoIds = [], origen, destino, motivo, instalacionId, ticketId, costoUnit } = param;
        var _TIPOS_MOVIMIENTO_tipo;
        var _perfil_id, _perfil_apellido;
        const comun = {
            tipo,
            articulo_id: articuloId,
            almacen_origen_id: origen || null,
            almacen_destino_id: destino || null,
            instalacion_id: instalacionId || null,
            ticket_id: ticketId || null,
            costo_unit: costoUnit == null || costoUnit === '' ? null : Number(costoUnit),
            motivo: motivo || null,
            usuario_id: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null,
            usuario_nombre: perfil ? "".concat(perfil.nombre, " ").concat((_perfil_apellido = perfil.apellido) !== null && _perfil_apellido !== void 0 ? _perfil_apellido : '').trim() : null
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(filas);
        if (error) throw error;
        var _TIPOS_MOVIMIENTO_tipo_label;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].registrar("inventario.".concat(tipo), "".concat((_TIPOS_MOVIMIENTO_tipo_label = (_TIPOS_MOVIMIENTO_tipo = TIPOS_MOVIMIENTO[tipo]) === null || _TIPOS_MOVIMIENTO_tipo === void 0 ? void 0 : _TIPOS_MOVIMIENTO_tipo.label) !== null && _TIPOS_MOVIMIENTO_tipo_label !== void 0 ? _TIPOS_MOVIMIENTO_tipo_label : tipo, " de ").concat(filas.length > 1 ? "".concat(filas.length, " equipos") : "".concat(cantidad !== null && cantidad !== void 0 ? cantidad : 1)) + (motivo ? " — ".concat(motivo) : ''), {
            entidad: 'articulo',
            entidad_id: articuloId
        });
    },
    /** Da de alta equipos con serie. No mueve stock por sí solo: eso es el ingreso. */ async altaEquipos (param, perfil) {
        let { articuloId, almacenId, series, mac } = param;
        const limpias = [
            ...new Set(series.map((s)=>s.trim().toUpperCase()).filter(Boolean))
        ];
        if (!limpias.length) throw new Error('No hay ninguna serie para dar de alta');
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('equipos').insert(limpias.map((serie, i)=>({
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
    async movimientos () {
        let { articuloId, almacenId, limite = 300 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_movimientos').select('*').order('creado_en', {
            ascending: false
        }).limit(limite);
        if (articuloId) q = q.eq('articulo_id', articuloId);
        if (almacenId) {
            q = q.or("almacen_origen_id.eq.".concat(almacenId, ",almacen_destino_id.eq.").concat(almacenId));
        }
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    // ── Proveedores y compras ──
    async proveedores () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').select('*').order('nombre');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async guardarProveedor (p) {
        const { id, ...datos } = p;
        const { error } = id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').update(datos).eq('id', id) : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('proveedores').insert(datos);
        if (error) throw error;
    },
    async compras () {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').select('*, proveedores(nombre), compra_items(*, articulos(nombre, unidad, por_serie))').order('fecha', {
            ascending: false
        }).limit(200);
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    async guardarCompra (param, perfil) {
        let { compra, items } = param;
        var _perfil_id;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').insert({
            ...compra,
            creado_por: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null
        }).select().single();
        if (error) throw error;
        if (items.length) {
            const { error: e2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compra_items').insert(items.map((i)=>({
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
        var _compra_compra_items;
        for (const item of (_compra_compra_items = compra.compra_items) !== null && _compra_compra_items !== void 0 ? _compra_compra_items : []){
            var _item_articulos;
            const series = Array.isArray(item.series) ? item.series : [];
            if (((_item_articulos = item.articulos) === null || _item_articulos === void 0 ? void 0 : _item_articulos.por_serie) && series.length) {
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
                    motivo: "Compra ".concat(String(compra.numero).padStart(5, '0'))
                }, perfil);
            }
            // El último costo sirve para valorizar el stock sin llevar un promedio
            // ponderado, que en un ISP chico nadie mantiene.
            if (Number(item.costo_unit) > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('articulos').update({
                    costo_ultimo: item.costo_unit
                }).eq('id', item.articulo_id);
            }
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('compras').update({
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
   */ async consumosDeTrabajo (param) {
        let { instalacionId, ticketId } = param;
        if (!instalacionId && !ticketId) return [];
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('v_movimientos').select('*').eq('tipo', 'consumo').order('creado_en');
        q = instalacionId ? q.eq('instalacion_id', instalacionId) : q.eq('ticket_id', ticketId);
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Descuenta el material usado en una instalación.
   *
   * Un movimiento por línea, todos en un solo insert: si la señal se corta a la
   * mitad no puede quedar descontado el cable y no la ONT. Que la base lo
   * acepte o lo rechace entero es la única forma de que el técnico sepa qué
   * pasó sin tener que revisar el stock desde la vereda.
   */ async registrarConsumo (param, perfil) {
        let { instalacionId, ticketId, almacenId, lineas } = param;
        var _perfil_id, _perfil_apellido;
        const comun = {
            tipo: 'consumo',
            almacen_origen_id: almacenId,
            instalacion_id: instalacionId !== null && instalacionId !== void 0 ? instalacionId : null,
            ticket_id: ticketId !== null && ticketId !== void 0 ? ticketId : null,
            // El motivo dice de qué trabajo salió. Es lo que después separa "cuánto
            // material se fue en altas" de "cuánto se fue en garantías", que son dos
            // números muy distintos para quien mira los costos.
            motivo: instalacionId ? 'Usado en la instalación' : 'Usado en la reparación',
            usuario_id: (_perfil_id = perfil === null || perfil === void 0 ? void 0 : perfil.id) !== null && _perfil_id !== void 0 ? _perfil_id : null,
            usuario_nombre: perfil ? "".concat(perfil.nombre, " ").concat((_perfil_apellido = perfil.apellido) !== null && _perfil_apellido !== void 0 ? _perfil_apellido : '').trim() : null
        };
        const filas = lineas.flatMap((l)=>{
            var _l_equipoIds;
            return ((_l_equipoIds = l.equipoIds) === null || _l_equipoIds === void 0 ? void 0 : _l_equipoIds.length) ? l.equipoIds.map((equipo_id)=>({
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
            ];
        });
        if (!filas.length) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('movimientos_inventario').insert(filas);
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('equipos').update({
            cliente_id: clienteId
        }).eq('instalacion_id', instalacionId);
        // No se propaga: el alta ya se completó y devolver un error acá haría que el
        // técnico crea que falló, y la repita.
        if (error) console.warn('[inventario] no se pudo vincular el equipo al cliente:', error.message);
    },
    /** El almacén del técnico que tiene la sesión abierta. */ async miAlmacen (tecnicoId) {
        if (!tecnicoId) return null;
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('almacenes').select('*').eq('tecnico_id', tecnicoId).maybeSingle();
        return data !== null && data !== void 0 ? data : null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/crm-pages/inventario/MiAlmacenPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MiAlmacenPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/backpack.js [app-client] (ecmascript) <export default as Backpack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/inventario.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function MiAlmacenPage() {
    var _devolviendo_articulo, _devolviendo_articulo1, _devolviendo_articulo2, _devolviendo_articulo3;
    _s();
    const { perfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"])();
    const [almacen, setAlmacen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [existencias, setExistencias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [equipos, setEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [almacenes, setAlmacenes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [devolviendo, setDevolviendo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recargar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MiAlmacenPage.useCallback[recargar]": async ()=>{
            setCargando(true);
            try {
                const mio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].miAlmacen(perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id);
                setAlmacen(mio);
                if (mio) {
                    const [ex, eq, cat] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].existencias(mio.id),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].equipos({
                            almacenId: mio.id
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].catalogo()
                    ]);
                    setExistencias(ex);
                    setEquipos(eq);
                    // Solo las bodegas: un técnico devuelve a bodega, no le pasa material a
                    // otro técnico por su cuenta — eso lo despacha quien lleva el control.
                    setAlmacenes(cat.almacenes.filter({
                        "MiAlmacenPage.useCallback[recargar]": (a)=>a.tipo !== 'tecnico'
                    }["MiAlmacenPage.useCallback[recargar]"]));
                }
                setError(null);
            } catch (err) {
                setError(err);
            } finally{
                setCargando(false);
            }
        }
    }["MiAlmacenPage.useCallback[recargar]"], [
        perfil
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MiAlmacenPage.useEffect": ()=>{
            recargar();
        }
    }["MiAlmacenPage.useEffect"], [
        recargar
    ]);
    // Sin técnico vinculado no hay almacén posible. Es el mismo campo del que
    // dependen sus tickets asignados, así que el aviso apunta a donde se arregla.
    if (!cargando && !(perfil === null || perfil === void 0 ? void 0 : perfil.tecnico_id)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: [
                    "Tu usuario no está vinculado a un técnico, así que todavía no tiene almacén. Pedile a un administrador que te vincule en ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Ajustes → Gestión de personal"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                        lineNumber: 82,
                        columnNumber: 43
                    }, this),
                    ', en el campo "Técnico vinculado".'
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    if (!cargando && !almacen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                tipo: "alerta",
                children: "Todavía no se creó tu almacén. Se crean solos al correr la migración de inventario para los técnicos activos; si sos nuevo, pedile a bodega que te lo dé de alta."
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
            lineNumber: 91,
            columnNumber: 7
        }, this);
    }
    var _devolviendo_articulo_articulo, _devolviendo_articulo_unidad, _devolviendo_articulo_cantidad;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "flex items-center gap-2 text-xl font-semibold text-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__["Backpack"], {
                                size: 20,
                                className: "text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            "Mi almacén"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: [
                            almacen === null || almacen === void 0 ? void 0 : almacen.nombre,
                            " — el material que tenés asignado y todavía no usaste."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                error: error,
                onCerrar: ()=>setError(null)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Artículos distintos",
                        valor: existencias.length
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Equipos con serie",
                        valor: equipos.filter((q)=>[
                                'en_stock',
                                'asignado'
                            ].includes(q.estado)).length,
                        color: "text-sky-400"
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Instalados por vos",
                        valor: equipos.filter((q)=>q.estado === 'instalado').length
                    }, void 0, false, {
                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Material",
                subtitle: "Lo que se descuenta solo cuando cerrás una instalación",
                children: cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonTabla"], {
                    filas: 4,
                    columnas: 3
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Artículo',
                        'Cantidad',
                        ''
                    ],
                    filas: existencias,
                    vacio: "No tenés material asignado. Pedíselo a bodega.",
                    renderFila: (e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-slate-800/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-slate-200",
                                    children: e.articulo
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 tabular-nums text-slate-100",
                                    children: [
                                        Number(e.cantidad).toLocaleString('es-EC'),
                                        " ",
                                        e.unidad
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variante: "fantasma",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"],
                                        onClick: ()=>{
                                            var _almacenes_;
                                            var _almacenes__id;
                                            return setDevolviendo({
                                                articuloId: e.articulo_id,
                                                articulo: e,
                                                cantidad: '',
                                                destino: (_almacenes__id = (_almacenes_ = almacenes[0]) === null || _almacenes_ === void 0 ? void 0 : _almacenes_.id) !== null && _almacenes__id !== void 0 ? _almacenes__id : '',
                                                equipoIds: []
                                            });
                                        },
                                        children: "Devolver"
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, void 0)
                            ]
                        }, e.articulo_id, true, {
                            fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                            lineNumber: 136,
                            columnNumber: 15
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                title: "Equipos que tenés",
                subtitle: "ONT y routers asignados a tu nombre",
                children: cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonTabla"], {
                    filas: 4,
                    columnas: 3
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    columnas: [
                        'Serie',
                        'Artículo',
                        'Estado',
                        'Cliente'
                    ],
                    filas: equipos,
                    vacio: "Sin equipos asignados.",
                    renderFila: (q)=>{
                        var _ESTADOS_EQUIPO_q_estado, _ESTADOS_EQUIPO_q_estado1;
                        var _ESTADOS_EQUIPO_q_estado_color, _ESTADOS_EQUIPO_q_estado_label, _q_cliente;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-slate-800/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 font-mono text-[12px] text-slate-100",
                                    children: q.serie
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-slate-300",
                                    children: q.articulo
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: (_ESTADOS_EQUIPO_q_estado_color = (_ESTADOS_EQUIPO_q_estado = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTADOS_EQUIPO"][q.estado]) === null || _ESTADOS_EQUIPO_q_estado === void 0 ? void 0 : _ESTADOS_EQUIPO_q_estado.color) !== null && _ESTADOS_EQUIPO_q_estado_color !== void 0 ? _ESTADOS_EQUIPO_q_estado_color : 'gris',
                                        children: (_ESTADOS_EQUIPO_q_estado_label = (_ESTADOS_EQUIPO_q_estado1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTADOS_EQUIPO"][q.estado]) === null || _ESTADOS_EQUIPO_q_estado1 === void 0 ? void 0 : _ESTADOS_EQUIPO_q_estado1.label) !== null && _ESTADOS_EQUIPO_q_estado_label !== void 0 ? _ESTADOS_EQUIPO_q_estado_label : q.estado
                                    }, void 0, false, {
                                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                        lineNumber: 177,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 text-[12px] text-slate-400",
                                    children: (_q_cliente = q.cliente) !== null && _q_cliente !== void 0 ? _q_cliente : '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, void 0)
                            ]
                        }, q.id, true, {
                            fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                            lineNumber: 173,
                            columnNumber: 15
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: !!devolviendo,
                titulo: "Devolver ".concat((_devolviendo_articulo_articulo = devolviendo === null || devolviendo === void 0 ? void 0 : (_devolviendo_articulo = devolviendo.articulo) === null || _devolviendo_articulo === void 0 ? void 0 : _devolviendo_articulo.articulo) !== null && _devolviendo_articulo_articulo !== void 0 ? _devolviendo_articulo_articulo : ''),
                onCerrar: ()=>setDevolviendo(null),
                children: devolviendo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aviso"], {
                            children: "Lo que devolvés vuelve al stock de bodega. Devolver lo que sobró es lo que hace que el inventario cuadre: si se queda en la camioneta, el sistema lo da por consumido."
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Devolver a",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: devolviendo.destino,
                                onChange: (e)=>setDevolviendo({
                                        ...devolviendo,
                                        destino: e.target.value
                                    }),
                                children: almacenes.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: a.id,
                                        children: a.nombre
                                    }, a.id, false, {
                                        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                        lineNumber: 205,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Cantidad (".concat((_devolviendo_articulo_unidad = (_devolviendo_articulo1 = devolviendo.articulo) === null || _devolviendo_articulo1 === void 0 ? void 0 : _devolviendo_articulo1.unidad) !== null && _devolviendo_articulo_unidad !== void 0 ? _devolviendo_articulo_unidad : 'u', ")"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                step: "0.01",
                                max: (_devolviendo_articulo2 = devolviendo.articulo) === null || _devolviendo_articulo2 === void 0 ? void 0 : _devolviendo_articulo2.cantidad,
                                value: devolviendo.cantidad,
                                onChange: (e)=>setDevolviendo({
                                        ...devolviendo,
                                        cantidad: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    onClick: ()=>setDevolviendo(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    disabled: !devolviendo.cantidad || Number(devolviendo.cantidad) <= 0 || Number(devolviendo.cantidad) > Number((_devolviendo_articulo_cantidad = (_devolviendo_articulo3 = devolviendo.articulo) === null || _devolviendo_articulo3 === void 0 ? void 0 : _devolviendo_articulo3.cantidad) !== null && _devolviendo_articulo_cantidad !== void 0 ? _devolviendo_articulo_cantidad : 0),
                                    onClick: async ()=>{
                                        try {
                                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$inventario$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventarioApi"].mover({
                                                tipo: 'transferencia',
                                                articuloId: devolviendo.articuloId,
                                                cantidad: devolviendo.cantidad,
                                                origen: almacen.id,
                                                destino: devolviendo.destino,
                                                motivo: 'Devolución del técnico'
                                            }, perfil);
                                            setDevolviendo(null);
                                            await recargar();
                                        } catch (err) {
                                            setError(err);
                                        }
                                    },
                                    children: "Devolver"
                                }, void 0, false, {
                                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/crm-pages/inventario/MiAlmacenPage.jsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(MiAlmacenPage, "7Fbw94ZksLpeKblax1skrZbgOVU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermisos"]
    ];
});
_c = MiAlmacenPage;
var _c;
__turbopack_context__.k.register(_c, "MiAlmacenPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/campo/inventario/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$inventario$2f$MiAlmacenPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/crm-pages/inventario/MiAlmacenPage.jsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$crm$2d$pages$2f$inventario$2f$MiAlmacenPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/campo/inventario/page.jsx",
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
"[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Undo2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Undo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Undo2", [
    [
        "path",
        {
            d: "M9 14 4 9l5-5",
            key: "102s5s"
        }
    ],
    [
        "path",
        {
            d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
            key: "f3b9sd"
        }
    ]
]);
;
 //# sourceMappingURL=undo-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Undo2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_c0944e90._.js.map