(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/validacion/reglas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Reglas de negocio de los campos, con Zod.
 *
 * El tipo de cada columna sale de la base (tablas.generado.js). Lo que la base
 * no sabe —que una cédula tiene dígito verificador, que una IP tiene cuatro
 * octetos de 0 a 255, que un día de facturación va de 1 a 31— va acá, y se
 * aplica por el NOMBRE de la columna: así vale igual para `telefono` en
 * clientes, prospectos o técnicos.
 *
 * Cada regla es un esquema de Zod sobre un valor ya no vacío. Los mensajes van
 * en tuteo y dicen qué corregir.
 */ __turbopack_context__.s([
    "ESQUEMAS",
    ()=>ESQUEMAS,
    "cedulaValida",
    ()=>cedulaValida,
    "reglaAlCrear",
    ()=>reglaAlCrear,
    "reglaDe",
    ()=>reglaDe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const IPV4 = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
const IPV6 = /^[0-9a-fA-F:]+:[0-9a-fA-F:]*$/;
const MAC = /^([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$/;
const CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function cedulaValida(cedula) {
    if (!/^\d{10}$/.test(cedula)) return false;
    const provincia = Number(cedula.slice(0, 2));
    if (!(provincia >= 1 && provincia <= 24 || provincia === 30)) return false;
    if (Number(cedula[2]) >= 6) return false;
    const suma = [
        ...cedula.slice(0, 9)
    ].reduce((s, d, i)=>{
        let v = Number(d) * (i % 2 === 0 ? 2 : 1);
        if (v > 9) v -= 9;
        return s + v;
    }, 0);
    return (10 - suma % 10) % 10 === Number(cedula[9]);
}
const texto = (v)=>String(v).trim();
const ESQUEMAS = {
    correo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().regex(CORREO, 'no es un correo válido (ejemplo: nombre@correo.com)'),
    telefono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>v.replace(/[\s\-().+]/g, '')).pipe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{7,15}$/, 'debe tener entre 7 y 15 dígitos (ejemplo: 0991234567)')),
    // Formato siempre; el dígito verificador solo al crear (más abajo), para no
    // trabar la edición de fichas viejas que ya tienen una cédula mal cargada.
    identificacion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().refine((v)=>/^\d{10}$/.test(v) || /^\d{10}001$/.test(v) || v === '9999999999999' || /^[A-Za-z0-9]{5,20}$/.test(v), 'debe ser una cédula de 10 dígitos, un RUC de 13 que termine en 001 o un pasaporte'),
    ruc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().regex(/^(\d{10}001|9999999999999)$/, 'debe tener 13 dígitos y terminar en 001'),
    ip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().refine((v)=>IPV4.test(v) || IPV6.test(v), 'no es una dirección IP válida (ejemplo: 192.168.1.10)'),
    red: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().refine((v)=>{
        const [ip, mascara] = v.split('/');
        return IPV4.test(ip) && /^\d+$/.test(mascara !== null && mascara !== void 0 ? mascara : '') && Number(mascara) <= 32 || IPV6.test(ip) && /^\d+$/.test(mascara !== null && mascara !== void 0 ? mascara : '');
    }, 'no es una red válida (ejemplo: 10.0.0.0/24)'),
    mac: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().regex(MAC, 'no es una MAC válida (ejemplo: AA:BB:CC:DD:EE:FF)'),
    latitud: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(-90, 'tiene que estar entre -90 y 90').max(90, 'tiene que estar entre -90 y 90'),
    longitud: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(-180, 'tiene que estar entre -180 y 180').max(180, 'tiene que estar entre -180 y 180'),
    noNegativo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(0, 'no puede ser negativo'),
    porcentaje: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(0, 'va de 0 a 100').max(100, 'va de 0 a 100'),
    diaDelMes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int('tiene que ser un número entero').min(1, 'va del 1 al 31').max(31, 'va del 1 al 31'),
    vlan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int('tiene que ser un número entero').min(1, 'va de 1 a 4094').max(4094, 'va de 1 a 4094'),
    puerto: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int('tiene que ser un número entero').min(0, 'va de 0 a 65535').max(65535, 'va de 0 a 65535')
};
function reglaDe(columna) {
    const c = columna.toLowerCase();
    if (c.endsWith('_id') || c === 'id' || c.endsWith('_encrypted') || c.includes('chat')) return null;
    // email_from_name es el nombre que se muestra como remitente, no un correo.
    if ((/(^|_)(email|correo)(_|$)/.test(c) || c.endsWith('_email')) && !/_(name|nombre)$/.test(c)) return 'correo';
    // Números de teléfono. Las columnas de configuración de WhatsApp
    // (whatsapp_via, whatsapp_pausa_segundos...) no son números.
    if (/(^|_)(telefono|celular|movil)(_|$)/.test(c) || c === 'whatsapp' || c === 'telefono_whatsapp') return 'telefono';
    if (c === 'ruc') return 'ruc';
    // tipo_identificacion es el código del tipo ("05"), no el número.
    if (c.startsWith('tipo_')) return null;
    if (c === 'identificacion' || c === 'cedula' || c.endsWith('_cedula') || c.endsWith('_identificacion')) return 'identificacion';
    if (c === 'cidr' || c === 'red_ipv4' || c === 'subred') return 'red';
    if (/^(ip|gateway|dns1|dns2|ip_address|ip_host|ip_administracion|ip_gestion|rango_desde|rango_hasta)$/.test(c)) return 'ip';
    if (c === 'mac' || c === 'mac_address' || c.endsWith('_mac')) return 'mac';
    if (c === 'latitud' || c === 'lat') return 'latitud';
    if (c === 'longitud' || c === 'lng' || c === 'lon') return 'longitud';
    if (c.includes('porcentaje')) return 'porcentaje';
    if (/^dia_(facturacion|pago|generar_factura|maximo_pago|corte|cierre)$/.test(c)) return 'diaDelMes';
    if (c === 'vlan' || c.startsWith('vlan_')) return 'vlan';
    if (/^(puerto_ssh|puerto_api|snmp_puerto|puerto_snmp|api_port|puerto)$/.test(c)) return 'puerto';
    if (/^(precio|monto|costo|total|subtotal)(_|$)/.test(c) && !c.includes('ajuste')) return 'noNegativo';
    return null;
}
function reglaAlCrear(columna, valor) {
    const c = columna.toLowerCase();
    const esIdentificacion = c === 'identificacion' || c === 'cedula' || c.endsWith('_cedula');
    if (esIdentificacion && /^\d{10}$/.test(texto(valor)) && !cedulaValida(texto(valor))) {
        return 'no es una cédula válida: el dígito verificador no coincide';
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/validacion/tablas.generado.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GENERADO por `python manage.py generar_esquemas_zod` desde los modelos de Django.
// No se edita a mano: si cambia la base, se vuelve a generar.
// t: uuid | texto | entero | decimal | bool | fecha | momento | hora | json
// n: admite null · max: largo máximo · dig/dec: dígitos y decimales · op: valores permitidos
__turbopack_context__.s([
    "FUNCIONES",
    ()=>FUNCIONES,
    "TABLAS",
    ()=>TABLAS
]);
const TABLAS = {
    "alerta_destinos": {
        "activo": {
            "t": "bool"
        },
        "canal": {
            "max": 12,
            "op": [
                "whatsapp",
                "telegram",
                "email",
                "sms"
            ],
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "desde_hora": {
            "n": 1,
            "t": "hora"
        },
        "destino": {
            "max": 120,
            "t": "texto"
        },
        "hasta_hora": {
            "n": 1,
            "t": "hora"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 60,
            "t": "texto"
        },
        "probado_en": {
            "n": 1,
            "t": "momento"
        },
        "probado_ok": {
            "n": 1,
            "t": "bool"
        },
        "tipos": {
            "t": "json"
        },
        "zonas": {
            "t": "json"
        }
    },
    "alerta_envios": {
        "canal": {
            "max": 12,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "destino": {
            "max": 120,
            "t": "texto"
        },
        "destino_id": {
            "n": 1,
            "t": "uuid"
        },
        "estado": {
            "max": 12,
            "op": [
                "enviado",
                "fallido",
                "omitido"
            ],
            "t": "texto"
        },
        "evento_id": {
            "n": 1,
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "respuesta": {
            "n": 1,
            "t": "texto"
        },
        "texto": {
            "n": 1,
            "t": "texto"
        }
    },
    "alerta_eventos": {
        "abonados": {
            "t": "entero"
        },
        "avisado_en": {
            "n": 1,
            "t": "momento"
        },
        "creado_en": {
            "t": "momento"
        },
        "detalle": {
            "t": "json"
        },
        "empezo_en": {
            "t": "momento"
        },
        "entidad": {
            "max": 20,
            "t": "texto"
        },
        "entidad_id": {
            "max": 80,
            "t": "texto"
        },
        "etiqueta": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "regla": {
            "max": 30,
            "t": "texto"
        },
        "resuelto_avisado_en": {
            "n": 1,
            "t": "momento"
        },
        "resuelto_en": {
            "n": 1,
            "t": "momento"
        },
        "zona": {
            "max": 60,
            "n": 1,
            "t": "texto"
        }
    },
    "alerta_reglas": {
        "activa": {
            "t": "bool"
        },
        "actualizado_en": {
            "t": "momento"
        },
        "clave": {
            "max": 30,
            "t": "texto"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "desde_hora": {
            "n": 1,
            "t": "hora"
        },
        "espera_min": {
            "t": "entero"
        },
        "hasta_hora": {
            "n": 1,
            "t": "hora"
        },
        "nombre": {
            "max": 80,
            "t": "texto"
        },
        "umbral": {
            "dec": 2,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        }
    },
    "alertas_red": {
        "created_at": {
            "t": "momento"
        },
        "fecha_resolucion": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "mensaje": {
            "t": "texto"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "resuelta": {
            "t": "bool"
        },
        "severidad": {
            "max": 10,
            "op": [
                "INFO",
                "WARNING",
                "CRITICAL"
            ],
            "t": "texto"
        },
        "tipo": {
            "max": 30,
            "op": [
                "POTENCIA_BAJA",
                "OLT_CAIDA",
                "ROUTER_CAIDO",
                "ONU_LOS"
            ],
            "t": "texto"
        },
        "updated_at": {
            "t": "momento"
        }
    },
    "almacenes": {
        "activo": {
            "t": "bool"
        },
        "creado_en": {
            "t": "momento"
        },
        "direccion": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "tipo": {
            "max": 12,
            "t": "texto"
        }
    },
    "api_llamadas": {
        "created_at": {
            "t": "momento"
        },
        "error": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "entero"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "ip": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "llave_id": {
            "n": 1,
            "t": "uuid"
        },
        "llave_nombre": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "metodo": {
            "max": 8,
            "t": "texto"
        },
        "ms": {
            "n": 1,
            "t": "entero"
        },
        "ruta": {
            "max": 200,
            "t": "texto"
        },
        "status": {
            "n": 1,
            "t": "entero"
        }
    },
    "api_llaves": {
        "activa": {
            "t": "bool"
        },
        "confirma_pagos": {
            "t": "bool"
        },
        "creada_por": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "t": "momento"
        },
        "cuenta_id": {
            "n": 1,
            "t": "uuid"
        },
        "generada_desde": {
            "n": 1,
            "t": "uuid"
        },
        "generada_desde_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "huella": {
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "ips_permitidas": {
            "t": "json"
        },
        "motivo_revocacion": {
            "n": 1,
            "t": "texto"
        },
        "nombre": {
            "max": 80,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "permisos": {
            "t": "json"
        },
        "prefijo": {
            "max": 16,
            "t": "texto"
        },
        "reactiva_servicio": {
            "t": "bool"
        },
        "revocada_at": {
            "n": 1,
            "t": "momento"
        },
        "revocada_por": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "ultimo_uso": {
            "n": 1,
            "t": "momento"
        }
    },
    "articulos": {
        "activo": {
            "t": "bool"
        },
        "categoria": {
            "max": 20,
            "t": "texto"
        },
        "codigo": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "costo_ultimo": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 140,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "por_serie": {
            "t": "bool"
        },
        "stock_minimo": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        },
        "tipo_ont_id": {
            "n": 1,
            "t": "uuid"
        },
        "unidad": {
            "max": 10,
            "t": "texto"
        }
    },
    "audit_logs": {
        "accion": {
            "max": 15,
            "op": [
                "crear",
                "modificar",
                "eliminar"
            ],
            "t": "texto"
        },
        "actor_email": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "actor_id": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "antes": {
            "n": 1,
            "t": "json"
        },
        "categoria": {
            "max": 30,
            "t": "texto"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "despues": {
            "n": 1,
            "t": "json"
        },
        "entidad": {
            "max": 40,
            "t": "texto"
        },
        "entidad_id": {
            "n": 1,
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "ip_origen": {
            "max": 45,
            "n": 1,
            "t": "texto"
        }
    },
    "auditoria_sistema": {
        "accion": {
            "max": 60,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "datos": {
            "n": 1,
            "t": "json"
        },
        "descripcion": {
            "t": "texto"
        },
        "entidad": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "entidad_id": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "entero"
        },
        "ip": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "user_agent": {
            "n": 1,
            "t": "texto"
        },
        "usuario_id": {
            "n": 1,
            "t": "uuid"
        },
        "usuario_nombre": {
            "max": 140,
            "n": 1,
            "t": "texto"
        },
        "usuario_rol": {
            "max": 20,
            "n": 1,
            "t": "texto"
        }
    },
    "autorizacion_presets": {
        "created_at": {
            "t": "momento"
        },
        "gemport": {
            "n": 1,
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "line_profile_id": {
            "n": 1,
            "t": "entero"
        },
        "line_profile_nombre": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "nombre": {
            "max": 80,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "predeterminado": {
            "t": "bool"
        },
        "srv_profile_id": {
            "n": 1,
            "t": "entero"
        },
        "srv_profile_nombre": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "updated_at": {
            "t": "momento"
        },
        "vlan": {
            "n": 1,
            "t": "entero"
        },
        "zona": {
            "max": 60,
            "n": 1,
            "t": "texto"
        }
    },
    "avisos_pendientes": {
        "cliente_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "enviar_desde": {
            "n": 1,
            "t": "momento"
        },
        "error": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "entero"
        },
        "intentos": {
            "t": "entero"
        },
        "procesado_en": {
            "n": 1,
            "t": "momento"
        },
        "referencia_id": {
            "n": 1,
            "t": "uuid"
        },
        "tipo": {
            "max": 30,
            "t": "texto"
        }
    },
    "cargas_combustible": {
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "estacion": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "fecha": {
            "t": "fecha"
        },
        "id": {
            "t": "uuid"
        },
        "litros": {
            "dec": 2,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        },
        "monto": {
            "dec": 2,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "odometro": {
            "t": "entero"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "vehiculo_id": {
            "t": "uuid"
        }
    },
    "clausulas_contrato": {
        "activa": {
            "t": "bool"
        },
        "actualizado_en": {
            "t": "momento"
        },
        "bloque": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "bloque_final": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "cierre": {
            "n": 1,
            "t": "texto"
        },
        "cierre2": {
            "n": 1,
            "t": "texto"
        },
        "condicion": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "etiqueta_condicion": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "lista_campo": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "lista_titulo": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "numeral": {
            "max": 60,
            "t": "texto"
        },
        "numerales": {
            "t": "json"
        },
        "orden": {
            "t": "entero"
        },
        "prestador_id": {
            "n": 1,
            "t": "uuid"
        },
        "raya_firma": {
            "t": "bool"
        },
        "texto": {
            "n": 1,
            "t": "texto"
        },
        "titulo": {
            "max": 120,
            "t": "texto"
        }
    },
    "clientes": {
        "acepta_arbitraje": {
            "n": 1,
            "t": "bool"
        },
        "acepta_datos_personales": {
            "n": 1,
            "t": "bool"
        },
        "activado_en": {
            "n": 1,
            "t": "momento"
        },
        "aplicar_corte": {
            "t": "bool"
        },
        "aviso_dias_1": {
            "n": 1,
            "t": "entero"
        },
        "aviso_dias_2": {
            "n": 1,
            "t": "entero"
        },
        "aviso_dias_3": {
            "n": 1,
            "t": "entero"
        },
        "aviso_dias_4": {
            "n": 1,
            "t": "entero"
        },
        "aviso_factura_canales": {
            "n": 1,
            "t": "json"
        },
        "aviso_pantalla_dias": {
            "n": 1,
            "t": "entero"
        },
        "avisos_activos": {
            "t": "bool"
        },
        "avisos_baja_at": {
            "n": 1,
            "t": "momento"
        },
        "avisos_baja_texto": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "avisos_canales": {
            "n": 1,
            "t": "json"
        },
        "avisos_pantalla": {
            "t": "bool"
        },
        "baja_en": {
            "n": 1,
            "t": "momento"
        },
        "baja_nota": {
            "n": 1,
            "t": "texto"
        },
        "canal_preferido": {
            "max": 15,
            "n": 1,
            "t": "texto"
        },
        "canton": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "ciudad": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "clave_ppp": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "codigo": {
            "n": 1,
            "t": "entero"
        },
        "codigo_externo": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "codigo_pago": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "comentario": {
            "n": 1,
            "t": "texto"
        },
        "condicion_especial": {
            "max": 40,
            "op": [
                "ninguna",
                "tercera_edad",
                "discapacidad",
                "ambas"
            ],
            "t": "texto"
        },
        "conectado_a_id": {
            "n": 1,
            "t": "uuid"
        },
        "cortado_en": {
            "n": 1,
            "t": "fecha"
        },
        "cortar_tras_meses": {
            "t": "entero"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "descripcion_servicio": {
            "n": 1,
            "t": "texto"
        },
        "descuento_documento": {
            "n": 1,
            "t": "texto"
        },
        "descuento_fijo": {
            "dec": 2,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "descuento_fijo_motivo": {
            "max": 160,
            "n": 1,
            "t": "texto"
        },
        "descuento_porcentaje": {
            "dec": 2,
            "dig": 5,
            "n": 1,
            "t": "decimal"
        },
        "descuento_tipo": {
            "n": 1,
            "t": "texto"
        },
        "deuda_equipo": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "dia_facturacion": {
            "n": 1,
            "t": "entero"
        },
        "dia_generar_factura": {
            "n": 1,
            "t": "entero"
        },
        "dias_gracia": {
            "t": "entero"
        },
        "direccion": {
            "n": 1,
            "t": "texto"
        },
        "email": {
            "max": 255,
            "n": 1,
            "t": "texto"
        },
        "equipo_modalidad": {
            "max": 14,
            "op": [
                "arrendamiento",
                "compra"
            ],
            "t": "texto"
        },
        "estado": {
            "max": 20,
            "op": [
                "activo",
                "cortado",
                "suspendido",
                "baja"
            ],
            "t": "texto"
        },
        "estado_desde": {
            "n": 1,
            "t": "momento"
        },
        "excluir_firewall": {
            "t": "bool"
        },
        "factura_electronica": {
            "t": "bool"
        },
        "fecha_instalacion": {
            "n": 1,
            "t": "fecha"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "importado_at": {
            "n": 1,
            "t": "momento"
        },
        "ip": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "ip_administracion": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "ipv6": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "ipv6_duid": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "ipv6_prefijo": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "latitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "longitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "mac_address": {
            "max": 17,
            "n": 1,
            "t": "texto"
        },
        "modalidad_pago": {
            "max": 10,
            "op": [
                "prepago",
                "postpago"
            ],
            "t": "texto"
        },
        "motivo_baja_id": {
            "n": 1,
            "t": "uuid"
        },
        "nap_id": {
            "n": 1,
            "t": "uuid"
        },
        "nombre": {
            "max": 150,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero_orden": {
            "n": 1,
            "t": "entero"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "origen": {
            "max": 20,
            "op": [
                "manual",
                "ppp-secret",
                "simple-queue",
                "dhcp-lease",
                "address-list",
                "onu"
            ],
            "t": "texto"
        },
        "parroquia": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "pasarela": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "permanencia_meses": {
            "n": 1,
            "t": "entero"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "portal_clave": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "portal_clave_hash": {
            "n": 1,
            "t": "texto"
        },
        "portal_clave_puesta": {
            "n": 1,
            "t": "momento"
        },
        "precio_mensual": {
            "dec": 2,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "prestador_id": {
            "n": 1,
            "t": "uuid"
        },
        "promo_desde": {
            "n": 1,
            "t": "fecha"
        },
        "promo_meses": {
            "n": 1,
            "t": "entero"
        },
        "promo_porcentaje": {
            "dec": 2,
            "dig": 5,
            "n": 1,
            "t": "decimal"
        },
        "provincia": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "puerto_nap": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "red_acceso": {
            "max": 40,
            "n": 1,
            "op": [
                "par_cobre",
                "fibra",
                "coaxial",
                "inalambrico",
                "otros"
            ],
            "t": "texto"
        },
        "red_ipv4": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "referencia_servicio": {
            "n": 1,
            "t": "texto"
        },
        "router_id": {
            "n": 1,
            "t": "uuid"
        },
        "rutas": {
            "n": 1,
            "t": "texto"
        },
        "sistema_origen": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "suspendido_hasta": {
            "n": 1,
            "t": "fecha"
        },
        "suspendido_motivo": {
            "n": 1,
            "t": "texto"
        },
        "tarifa_preferencial": {
            "n": 1,
            "t": "bool"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "telefono_movil": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "telegram_chat_id": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "tipo_antena": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "tipo_conexion": {
            "max": 10,
            "op": [
                "ip",
                "pppoe",
                "hotspot"
            ],
            "t": "texto"
        },
        "tipo_cuenta": {
            "max": 40,
            "n": 1,
            "op": [
                "residencial",
                "corporativo",
                "cibercafe",
                "otros"
            ],
            "t": "texto"
        },
        "tipo_identificacion": {
            "max": 2,
            "n": 1,
            "op": [
                "04",
                "05",
                "06",
                "07",
                "08"
            ],
            "t": "texto"
        },
        "tipo_impuesto": {
            "max": 10,
            "op": [
                "incluido",
                "mas",
                "ninguno"
            ],
            "t": "texto"
        },
        "tipo_ip": {
            "max": 10,
            "op": [
                "fija",
                "dinamica"
            ],
            "t": "texto"
        },
        "ultimo_pago_externo": {
            "n": 1,
            "t": "fecha"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        },
        "usuario_ppp": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "valor_instalacion": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        },
        "velocidad_cruda": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "zona": {
            "max": 60,
            "n": 1,
            "t": "texto"
        }
    },
    "cobranza_asignaciones": {
        "asignado_por": {
            "n": 1,
            "t": "uuid"
        },
        "cerrado_en": {
            "n": 1,
            "t": "momento"
        },
        "cliente_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "estado": {
            "max": 12,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "motivo": {
            "n": 1,
            "t": "texto"
        },
        "saldo_inicial": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        },
        "vence_el": {
            "t": "fecha"
        },
        "vendedor_id": {
            "t": "uuid"
        }
    },
    "cobranza_gestiones": {
        "asignacion_id": {
            "t": "uuid"
        },
        "canal": {
            "max": 12,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "observacion": {
            "n": 1,
            "t": "texto"
        },
        "promesa_fecha": {
            "n": 1,
            "t": "fecha"
        },
        "promesa_monto": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        },
        "resultado": {
            "max": 20,
            "t": "texto"
        },
        "usuario_id": {
            "n": 1,
            "t": "uuid"
        },
        "usuario_nombre": {
            "max": 140,
            "n": 1,
            "t": "texto"
        }
    },
    "codigos_recuperacion": {
        "codigo_hash": {
            "max": 128,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "expira_en": {
            "t": "momento"
        },
        "id": {
            "t": "entero"
        },
        "intentos": {
            "t": "entero"
        },
        "ip": {
            "max": 45,
            "t": "texto"
        },
        "usado_en": {
            "n": 1,
            "t": "momento"
        },
        "usuario_id": {
            "t": "entero"
        },
        "verificado_en": {
            "n": 1,
            "t": "momento"
        }
    },
    "comandos_ejecutados": {
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "comando": {
            "max": 40,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "destino_id": {
            "n": 1,
            "t": "uuid"
        },
        "destino_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "destino_tipo": {
            "max": 15,
            "op": [
                "mikrotik",
                "olt",
                "cpe",
                "sistema"
            ],
            "t": "texto"
        },
        "duracion_ms": {
            "n": 1,
            "t": "entero"
        },
        "error": {
            "n": 1,
            "t": "texto"
        },
        "exito": {
            "t": "bool"
        },
        "id": {
            "t": "uuid"
        },
        "ip_origen": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "parametros": {
            "t": "json"
        },
        "salida": {
            "n": 1,
            "t": "texto"
        }
    },
    "comision_bases_plan": {
        "base": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "comisiona": {
            "t": "bool"
        },
        "esquema_id": {
            "t": "uuid"
        },
        "id": {
            "t": "entero"
        },
        "plan_id": {
            "t": "uuid"
        }
    },
    "comision_bonos_calidad": {
        "desde_pct": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "esquema_id": {
            "t": "uuid"
        },
        "hasta_pct": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "id": {
            "t": "uuid"
        },
        "monto": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "orden": {
            "t": "entero"
        }
    },
    "comision_cohortes": {
        "bono": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "calidad": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "cerrado_en": {
            "n": 1,
            "t": "momento"
        },
        "cierra_el": {
            "t": "fecha"
        },
        "cohorte": {
            "t": "fecha"
        },
        "conservados": {
            "t": "entero"
        },
        "detalle": {
            "n": 1,
            "t": "texto"
        },
        "esquema_id": {
            "n": 1,
            "t": "uuid"
        },
        "estado": {
            "max": 8,
            "t": "texto"
        },
        "evaluables": {
            "t": "entero"
        },
        "evaluado_en": {
            "t": "momento"
        },
        "excluidos": {
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "liquidado_en": {
            "n": 1,
            "t": "momento"
        },
        "perdidos": {
            "t": "entero"
        },
        "periodo_liquidado": {
            "n": 1,
            "t": "fecha"
        },
        "vendedor_id": {
            "t": "uuid"
        }
    },
    "comision_esquemas": {
        "activo": {
            "t": "bool"
        },
        "actualizado_en": {
            "t": "momento"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "modo": {
            "max": 12,
            "t": "texto"
        },
        "nombre": {
            "max": 80,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "vigente_desde": {
            "t": "fecha"
        },
        "vigente_hasta": {
            "n": 1,
            "t": "fecha"
        }
    },
    "comision_niveles": {
        "desde_ventas": {
            "t": "entero"
        },
        "esquema_id": {
            "t": "uuid"
        },
        "hasta_ventas": {
            "n": 1,
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 30,
            "t": "texto"
        },
        "orden": {
            "t": "entero"
        },
        "porcentaje": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        }
    },
    "comision_periodos": {
        "aprobado_en": {
            "n": 1,
            "t": "momento"
        },
        "aprobado_por": {
            "n": 1,
            "t": "uuid"
        },
        "base_total": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "bono": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "cerrado_en": {
            "t": "momento"
        },
        "cerrado_por": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "esquema_id": {
            "n": 1,
            "t": "uuid"
        },
        "estado": {
            "max": 10,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "monto": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "nivel": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "pagado_en": {
            "n": 1,
            "t": "momento"
        },
        "pagado_por": {
            "n": 1,
            "t": "uuid"
        },
        "periodo": {
            "t": "fecha"
        },
        "porcentaje": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "vendedor_id": {
            "t": "uuid"
        },
        "ventas_validas": {
            "t": "entero"
        }
    },
    "comision_reglas": {
        "actualizado_en": {
            "t": "momento"
        },
        "actualizado_por": {
            "n": 1,
            "t": "uuid"
        },
        "dia_cierre": {
            "t": "entero"
        },
        "dia_cortesia_desde": {
            "t": "entero"
        },
        "dias_cohorte": {
            "t": "entero"
        },
        "esquema_id": {
            "t": "uuid"
        },
        "meses_sin_pago_retiro": {
            "t": "entero"
        },
        "meses_sin_pago_suspension": {
            "t": "entero"
        },
        "min_clientes_cohorte": {
            "t": "entero"
        },
        "pago_ventana_desde": {
            "t": "entero"
        },
        "pago_ventana_hasta": {
            "t": "entero"
        },
        "requiere_activacion": {
            "t": "bool"
        },
        "requiere_aprobacion": {
            "t": "bool"
        },
        "requiere_contrato": {
            "t": "bool"
        },
        "requiere_documentacion": {
            "t": "bool"
        },
        "requiere_instalacion": {
            "t": "bool"
        },
        "requiere_primer_pago": {
            "t": "bool"
        }
    },
    "comision_ventas": {
        "activado_en": {
            "n": 1,
            "t": "momento"
        },
        "actualizado_en": {
            "t": "momento"
        },
        "anulada_en": {
            "n": 1,
            "t": "momento"
        },
        "anulada_por": {
            "n": 1,
            "t": "uuid"
        },
        "aprobado_en": {
            "n": 1,
            "t": "momento"
        },
        "base": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        },
        "calidad_en": {
            "n": 1,
            "t": "momento"
        },
        "calidad_estado": {
            "max": 14,
            "op": [
                "en_seguimiento",
                "conservado",
                "perdido",
                "excluido"
            ],
            "t": "texto"
        },
        "calidad_motivo": {
            "n": 1,
            "t": "texto"
        },
        "cliente_id": {
            "n": 1,
            "t": "uuid"
        },
        "cohorte": {
            "n": 1,
            "t": "fecha"
        },
        "comisionable_en": {
            "n": 1,
            "t": "momento"
        },
        "contrato_en": {
            "n": 1,
            "t": "momento"
        },
        "creado_en": {
            "t": "momento"
        },
        "documentado_en": {
            "n": 1,
            "t": "momento"
        },
        "espera_pago_hasta": {
            "n": 1,
            "t": "fecha"
        },
        "esquema_id": {
            "n": 1,
            "t": "uuid"
        },
        "estado": {
            "max": 22,
            "t": "texto"
        },
        "ganado_en": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "instalado_en": {
            "n": 1,
            "t": "momento"
        },
        "motivo_anulacion": {
            "n": 1,
            "t": "texto"
        },
        "periodo": {
            "n": 1,
            "t": "fecha"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "primer_pago_en": {
            "n": 1,
            "t": "momento"
        },
        "prospecto_id": {
            "n": 1,
            "t": "uuid"
        },
        "tipo_operacion": {
            "max": 14,
            "t": "texto"
        },
        "vendedor_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "compra_items": {
        "articulo_id": {
            "t": "uuid"
        },
        "cantidad": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "compra_id": {
            "t": "uuid"
        },
        "costo_unit": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "id": {
            "t": "uuid"
        },
        "series": {
            "n": 1,
            "t": "json"
        }
    },
    "compras": {
        "almacen_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "documento": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "t": "texto"
        },
        "fecha": {
            "t": "fecha"
        },
        "id": {
            "t": "uuid"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "proveedor_id": {
            "n": 1,
            "t": "uuid"
        },
        "recibida_en": {
            "n": 1,
            "t": "momento"
        },
        "total": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        }
    },
    "comunicaciones": {
        "asunto": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "automatico": {
            "t": "bool"
        },
        "canal": {
            "max": 15,
            "op": [
                "email",
                "whatsapp",
                "telegram",
                "sms"
            ],
            "t": "texto"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "cuerpo": {
            "n": 1,
            "t": "texto"
        },
        "destino": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "direccion": {
            "max": 10,
            "op": [
                "saliente",
                "entrante"
            ],
            "t": "texto"
        },
        "entregado_at": {
            "n": 1,
            "t": "momento"
        },
        "enviado_at": {
            "n": 1,
            "t": "momento"
        },
        "error": {
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "op": [
                "pendiente",
                "enviado",
                "entregado",
                "leido",
                "fallido",
                "recibido"
            ],
            "t": "texto"
        },
        "factura_id": {
            "n": 1,
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "leido_at": {
            "n": 1,
            "t": "momento"
        },
        "plantilla_id": {
            "n": 1,
            "t": "uuid"
        },
        "proveedor_id": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "ticket_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "config_avisos_pago": {
        "activa": {
            "t": "bool"
        },
        "actualizado_en": {
            "t": "momento"
        },
        "canal": {
            "max": 15,
            "op": [
                "preferido",
                "email",
                "whatsapp",
                "telegram",
                "sms"
            ],
            "t": "texto"
        },
        "dias_aviso_1": {
            "t": "entero"
        },
        "dias_aviso_2": {
            "t": "entero"
        },
        "dias_aviso_3": {
            "t": "entero"
        },
        "dias_aviso_4": {
            "t": "entero"
        },
        "id": {
            "t": "entero"
        },
        "limite": {
            "t": "entero"
        },
        "repetir_cada_4": {
            "t": "entero"
        }
    },
    "config_cartera": {
        "actualizado_en": {
            "t": "momento"
        },
        "archivar_prospectos": {
            "t": "bool"
        },
        "comision_porcentaje": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "id": {
            "t": "entero"
        },
        "ventana_cobranza_meses": {
            "t": "entero"
        }
    },
    "config_corte": {
        "activa": {
            "t": "bool"
        },
        "actualizado_en": {
            "t": "momento"
        },
        "aviso_despues_de_pagar": {
            "t": "texto"
        },
        "cuentas_inicializadas": {
            "t": "bool"
        },
        "id": {
            "t": "entero"
        },
        "mensaje": {
            "t": "texto"
        },
        "mostrar_facturas": {
            "t": "bool"
        },
        "mostrar_saldo": {
            "t": "bool"
        },
        "telefono_pagos": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "titulo": {
            "max": 120,
            "t": "texto"
        },
        "whatsapp_pagos": {
            "max": 30,
            "n": 1,
            "t": "texto"
        }
    },
    "config_firma": {
        "actualizado_en": {
            "t": "momento"
        },
        "api_habilitada": {
            "t": "bool"
        },
        "api_key_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "api_url": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "entero"
        },
        "proveedor": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "roles_autorizan": {
            "t": "json"
        },
        "timeout_segundos": {
            "t": "entero"
        },
        "vigencia_horas": {
            "t": "entero"
        }
    },
    "config_general": {
        "actualizado_en": {
            "t": "momento"
        },
        "id": {
            "t": "entero"
        },
        "lema": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "logo_b64": {
            "n": 1,
            "t": "texto"
        },
        "moneda_codigo": {
            "max": 3,
            "t": "texto"
        },
        "moneda_simbolo": {
            "max": 5,
            "t": "texto"
        },
        "nombre_sistema": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "zona_horaria": {
            "t": "texto"
        }
    },
    "config_mensajeria": {
        "actualizado_en": {
            "t": "momento"
        },
        "avisos_desde": {
            "t": "texto"
        },
        "avisos_hasta": {
            "t": "texto"
        },
        "id": {
            "t": "entero"
        },
        "nms_canal": {
            "max": 15,
            "n": 1,
            "t": "texto"
        },
        "nms_destino": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "telegram_bot_usuario": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "telegram_token_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "twilio_desde": {
            "max": 32,
            "n": 1,
            "t": "texto"
        },
        "twilio_sid": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "twilio_token_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "whatsapp_app_secret_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "whatsapp_crm_header": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "whatsapp_crm_key_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "whatsapp_crm_nombre": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "whatsapp_crm_url": {
            "n": 1,
            "t": "texto"
        },
        "whatsapp_desde": {
            "max": 32,
            "n": 1,
            "t": "texto"
        },
        "whatsapp_evolution_instancia": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "whatsapp_evolution_key_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "whatsapp_evolution_url": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "whatsapp_pausa_segundos": {
            "t": "entero"
        },
        "whatsapp_phone_id": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "whatsapp_token_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "whatsapp_verify_token": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "whatsapp_via": {
            "max": 12,
            "op": [
                "manual",
                "meta",
                "twilio",
                "baileys",
                "evolution",
                "crm"
            ],
            "t": "texto"
        }
    },
    "config_tareas": {
        "actualizado_en": {
            "t": "momento"
        },
        "alertas_automaticas": {
            "n": 1,
            "t": "bool"
        },
        "alertas_cada_minutos": {
            "n": 1,
            "t": "entero"
        },
        "avisos_pago_automatico": {
            "n": 1,
            "t": "bool"
        },
        "avisos_pago_hora": {
            "max": 5,
            "n": 1,
            "t": "texto"
        },
        "cartera_automatico": {
            "n": 1,
            "t": "bool"
        },
        "cartera_hora": {
            "max": 5,
            "n": 1,
            "t": "texto"
        },
        "cobranza_cada_minutos": {
            "n": 1,
            "t": "entero"
        },
        "comisiones_automatico": {
            "n": 1,
            "t": "bool"
        },
        "comisiones_hora": {
            "max": 5,
            "n": 1,
            "t": "texto"
        },
        "consumo_automatico": {
            "n": 1,
            "t": "bool"
        },
        "consumo_cada_minutos": {
            "n": 1,
            "t": "entero"
        },
        "cortes_automaticos": {
            "n": 1,
            "t": "bool"
        },
        "cortes_hora": {
            "max": 5,
            "n": 1,
            "t": "texto"
        },
        "cortes_limite": {
            "n": 1,
            "t": "entero"
        },
        "esperando_automatico": {
            "n": 1,
            "t": "bool"
        },
        "esperando_cada_minutos": {
            "n": 1,
            "t": "entero"
        },
        "facturacion_automatica": {
            "n": 1,
            "t": "bool"
        },
        "facturacion_hora": {
            "max": 5,
            "n": 1,
            "t": "texto"
        },
        "firmas_automatico": {
            "t": "bool"
        },
        "firmas_cada_minutos": {
            "t": "entero"
        },
        "id": {
            "t": "entero"
        },
        "incidencias_automatico": {
            "n": 1,
            "t": "bool"
        },
        "incidencias_cada_minutos": {
            "n": 1,
            "t": "entero"
        },
        "incidencias_cola_activa": {
            "n": 1,
            "t": "bool"
        },
        "incidencias_lote": {
            "n": 1,
            "t": "entero"
        },
        "incidencias_minutos": {
            "n": 1,
            "t": "entero"
        },
        "mora_automatico": {
            "n": 1,
            "t": "bool"
        },
        "mora_barrida_minutos": {
            "n": 1,
            "t": "entero"
        },
        "mora_hora": {
            "max": 5,
            "n": 1,
            "t": "texto"
        },
        "mora_limite": {
            "n": 1,
            "t": "entero"
        },
        "mora_reconexion_minutos": {
            "n": 1,
            "t": "entero"
        },
        "mora_reconexion_segundos": {
            "n": 1,
            "t": "entero"
        },
        "nms_automatico": {
            "n": 1,
            "t": "bool"
        },
        "nms_cada_minutos": {
            "n": 1,
            "t": "entero"
        },
        "nms_paquetes": {
            "n": 1,
            "t": "entero"
        },
        "optica_automatica": {
            "n": 1,
            "t": "bool"
        },
        "optica_cada_minutos": {
            "n": 1,
            "t": "entero"
        },
        "pausas_automatico": {
            "t": "bool"
        },
        "pausas_hora": {
            "t": "texto"
        },
        "stock_automatico": {
            "n": 1,
            "t": "bool"
        },
        "stock_hora": {
            "max": 5,
            "n": 1,
            "t": "texto"
        }
    },
    "consumo_contadores": {
        "bajada_bytes": {
            "t": "entero"
        },
        "client_id": {
            "t": "uuid"
        },
        "fuente": {
            "max": 15,
            "t": "texto"
        },
        "leido_at": {
            "n": 1,
            "t": "momento"
        },
        "origen": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "subida_bytes": {
            "t": "entero"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "consumo_diario": {
        "bajada_bytes": {
            "t": "entero"
        },
        "client_id": {
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "estado_servicio": {
            "max": 15,
            "op": [
                "activo",
                "promesa",
                "cortado",
                "suspendido"
            ],
            "t": "texto"
        },
        "fecha": {
            "t": "fecha"
        },
        "fuente": {
            "max": 15,
            "op": [
                "mikrotik",
                "radius",
                "olt",
                "manual"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "subida_bytes": {
            "t": "entero"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "contratos": {
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "contenido_hash": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "dia_pago": {
            "n": 1,
            "t": "entero"
        },
        "documento_url": {
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 15,
            "op": [
                "vigente",
                "terminado",
                "anulado",
                "suspendido"
            ],
            "t": "texto"
        },
        "fecha_fin": {
            "n": 1,
            "t": "fecha"
        },
        "fecha_inicio": {
            "t": "fecha"
        },
        "firma_en": {
            "n": 1,
            "t": "momento"
        },
        "firma_enviado_en": {
            "n": 1,
            "t": "momento"
        },
        "firma_estado": {
            "max": 12,
            "op": [
                "no_enviado",
                "enviado",
                "firmado",
                "rechazado",
                "vencido"
            ],
            "t": "texto"
        },
        "firma_evidencia_url": {
            "n": 1,
            "t": "texto"
        },
        "firma_por": {
            "n": 1,
            "t": "uuid"
        },
        "firma_proveedor": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "firma_referencia": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "permanencia_meses": {
            "n": 1,
            "t": "entero"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "precio_mensual": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        },
        "version": {
            "t": "entero"
        }
    },
    "conversaciones_whatsapp": {
        "cliente_id": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "t": "momento"
        },
        "estado": {
            "max": 20,
            "op": [
                "ACTIVA",
                "PAUSADA",
                "CERRADA"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "telefono": {
            "max": 255,
            "t": "texto"
        },
        "telefono_hash": {
            "max": 64,
            "t": "texto"
        },
        "ultima_actividad": {
            "t": "momento"
        },
        "updated_at": {
            "t": "momento"
        }
    },
    "cortes": {
        "cliente_id": {
            "t": "uuid"
        },
        "created_at": {
            "t": "momento"
        },
        "ejecutado_por": {
            "max": 50,
            "t": "texto"
        },
        "fecha_corte": {
            "t": "momento"
        },
        "fecha_reactivacion": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "motivo": {
            "max": 20,
            "op": [
                "MORA",
                "MANUAL",
                "SOLICITUD"
            ],
            "t": "texto"
        },
        "reactivado": {
            "t": "bool"
        },
        "updated_at": {
            "t": "momento"
        }
    },
    "cotizaciones": {
        "convertida_en": {
            "n": 1,
            "t": "uuid"
        },
        "costo_equipo": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "costo_instalacion": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "descuento": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "estado": {
            "max": 12,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "meses_contrato": {
            "n": 1,
            "t": "entero"
        },
        "meses_promocion": {
            "n": 1,
            "t": "entero"
        },
        "nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "plan_nombre": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "precio_mensual": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "precio_promocional": {
            "dec": 2,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "primer_mes": {
            "dec": 2,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "promocion_id": {
            "n": 1,
            "t": "uuid"
        },
        "promocion_nombre": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "prospecto_id": {
            "n": 1,
            "t": "uuid"
        },
        "sector": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "validez_dias": {
            "t": "entero"
        },
        "vendedor_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "cuadrilla_miembros": {
        "cuadrilla_id": {
            "t": "uuid"
        },
        "id": {
            "t": "entero"
        },
        "rol": {
            "max": 20,
            "op": [
                "lider",
                "tecnico",
                "ayudante"
            ],
            "t": "texto"
        },
        "tecnico_id": {
            "t": "uuid"
        }
    },
    "cuadrillas": {
        "activo": {
            "t": "bool"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "vehiculo": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "zona": {
            "max": 100,
            "n": 1,
            "t": "texto"
        }
    },
    "cuentas_pago": {
        "activa": {
            "t": "bool"
        },
        "banco": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "mostrar_en_corte": {
            "t": "bool"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "numero": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "tipo": {
            "max": 20,
            "op": [
                "efectivo",
                "banco",
                "billetera",
                "otro"
            ],
            "t": "texto"
        },
        "titular": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "usuario_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "detalles_factura": {
        "aplica_iva": {
            "t": "bool"
        },
        "cantidad": {
            "dec": 2,
            "dig": 10,
            "t": "decimal"
        },
        "created_at": {
            "t": "momento"
        },
        "descripcion": {
            "max": 255,
            "t": "texto"
        },
        "factura_id": {
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "precio_unitario": {
            "dec": 2,
            "dig": 10,
            "t": "decimal"
        },
        "servicio_id": {
            "n": 1,
            "t": "uuid"
        },
        "subtotal": {
            "dec": 2,
            "dig": 10,
            "t": "decimal"
        },
        "updated_at": {
            "t": "momento"
        }
    },
    "document_items": {
        "base_imponible_iva": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "cantidad": {
            "dec": 6,
            "dig": 14,
            "t": "decimal"
        },
        "codigo_auxiliar": {
            "max": 25,
            "n": 1,
            "t": "texto"
        },
        "codigo_impuesto": {
            "max": 1,
            "t": "texto"
        },
        "codigo_porcentaje": {
            "max": 4,
            "t": "texto"
        },
        "codigo_principal": {
            "max": 25,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "descripcion": {
            "max": 300,
            "t": "texto"
        },
        "descuento": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "document_id": {
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "orden": {
            "t": "entero"
        },
        "precio_total_sin_impuesto": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "precio_unitario": {
            "dec": 6,
            "dig": 14,
            "t": "decimal"
        },
        "tarifa_iva": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "valor_iva": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        }
    },
    "documentos": {
        "categoria": {
            "max": 30,
            "op": [
                "cedula_frontal",
                "cedula_reverso",
                "contrato",
                "acta_entrega",
                "planilla_servicio",
                "foto_instalacion",
                "autorizacion",
                "ruc",
                "cedula_representante",
                "otro"
            ],
            "t": "texto"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "firmado_at": {
            "n": 1,
            "t": "momento"
        },
        "firmante_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "mime": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "nombre": {
            "max": 200,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "reemplazado_en": {
            "n": 1,
            "t": "momento"
        },
        "reemplazado_por": {
            "n": 1,
            "t": "uuid"
        },
        "ruta": {
            "t": "texto"
        },
        "tamano": {
            "n": 1,
            "t": "entero"
        },
        "visible_cliente": {
            "t": "bool"
        }
    },
    "electronic_documents": {
        "ambiente": {
            "max": 1,
            "t": "texto"
        },
        "clave_acceso": {
            "max": 49,
            "t": "texto"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "direccion_comprador": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "doc_modificado_fecha": {
            "n": 1,
            "t": "fecha"
        },
        "doc_modificado_numero": {
            "max": 17,
            "n": 1,
            "t": "texto"
        },
        "doc_modificado_tipo": {
            "max": 2,
            "n": 1,
            "t": "texto"
        },
        "email_comprador": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "enviado_por_email": {
            "n": 1,
            "t": "bool"
        },
        "establecimiento": {
            "max": 3,
            "t": "texto"
        },
        "estado": {
            "max": 15,
            "op": [
                "BORRADOR",
                "FIRMADO",
                "ENVIADO",
                "AUTORIZADO",
                "NO_AUTORIZADO",
                "ANULADO"
            ],
            "t": "texto"
        },
        "fecha_autorizacion": {
            "n": 1,
            "t": "momento"
        },
        "fecha_emision": {
            "t": "fecha"
        },
        "fecha_envio_email": {
            "n": 1,
            "t": "momento"
        },
        "forma_pago": {
            "max": 2,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion_comprador": {
            "max": 20,
            "t": "texto"
        },
        "importe_total": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "mensaje_autorizacion": {
            "n": 1,
            "t": "texto"
        },
        "moneda": {
            "max": 20,
            "t": "texto"
        },
        "motivo": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "numero_autorizacion": {
            "max": 49,
            "n": 1,
            "t": "texto"
        },
        "observaciones": {
            "n": 1,
            "t": "texto"
        },
        "propina": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "punto_emision": {
            "max": 3,
            "t": "texto"
        },
        "razon_social_comprador": {
            "max": 300,
            "t": "texto"
        },
        "secuencial": {
            "max": 9,
            "t": "texto"
        },
        "tipo_doc": {
            "max": 2,
            "op": [
                "01",
                "03",
                "04",
                "05",
                "06",
                "07"
            ],
            "t": "texto"
        },
        "tipo_emision": {
            "max": 1,
            "t": "texto"
        },
        "tipo_identificacion_comprador": {
            "max": 2,
            "t": "texto"
        },
        "total_descuento": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "total_iva": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "total_sin_impuestos": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        },
        "xml_autorizado": {
            "n": 1,
            "t": "texto"
        },
        "xml_firmado": {
            "n": 1,
            "t": "texto"
        },
        "xml_sin_firma": {
            "n": 1,
            "t": "texto"
        }
    },
    "entrega_items": {
        "entrega_id": {
            "t": "uuid"
        },
        "equipo_id": {
            "n": 1,
            "t": "uuid"
        },
        "estado_fisico": {
            "max": 12,
            "op": [
                "bueno",
                "dañado",
                "incompleto"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "modelo": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "observacion": {
            "n": 1,
            "t": "texto"
        },
        "retiro_id": {
            "n": 1,
            "t": "uuid"
        },
        "serie": {
            "max": 100,
            "n": 1,
            "t": "texto"
        }
    },
    "entregas_inventario": {
        "almacen_destino": {
            "n": 1,
            "t": "uuid"
        },
        "almacen_origen": {
            "n": 1,
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "entrega_id": {
            "n": 1,
            "t": "uuid"
        },
        "estado": {
            "max": 12,
            "op": [
                "pendiente",
                "recibida",
                "anulada"
            ],
            "t": "texto"
        },
        "firma_b64": {
            "n": 1,
            "t": "texto"
        },
        "firma_entrega_b64": {
            "n": 1,
            "t": "texto"
        },
        "firma_entrega_en": {
            "n": 1,
            "t": "momento"
        },
        "firmado_en": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "motivo_anulacion": {
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "recibe_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "equipos": {
        "actualizado_en": {
            "t": "momento"
        },
        "almacen_id": {
            "n": 1,
            "t": "uuid"
        },
        "articulo_id": {
            "t": "uuid"
        },
        "cliente_id": {
            "n": 1,
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "estado": {
            "max": 12,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "mac": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "serie": {
            "max": 60,
            "t": "texto"
        }
    },
    "equipos_cliente": {
        "client_id": {
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "devuelto_at": {
            "n": 1,
            "t": "momento"
        },
        "documento_id": {
            "n": 1,
            "t": "uuid"
        },
        "entregado_at": {
            "n": 1,
            "t": "momento"
        },
        "estado": {
            "max": 15,
            "op": [
                "entregado",
                "devuelto",
                "perdido",
                "dañado"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "mac": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "marca": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "modelo": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "propiedad": {
            "max": 10,
            "op": [
                "isp",
                "cliente"
            ],
            "t": "texto"
        },
        "serie": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "tipo": {
            "max": 30,
            "op": [
                "ont",
                "router",
                "antena",
                "cpe",
                "switch",
                "otro"
            ],
            "t": "texto"
        }
    },
    "existencias": {
        "almacen_id": {
            "t": "uuid"
        },
        "articulo_id": {
            "t": "uuid"
        },
        "cantidad": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "id": {
            "t": "entero"
        }
    },
    "expediente_documentos": {
        "bytes": {
            "n": 1,
            "t": "entero"
        },
        "estado": {
            "max": 10,
            "t": "texto"
        },
        "expediente_id": {
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "mime": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "ruta": {
            "t": "texto"
        },
        "subido_en": {
            "t": "momento"
        },
        "subido_por": {
            "n": 1,
            "t": "uuid"
        },
        "tipo": {
            "max": 20,
            "t": "texto"
        },
        "validado_en": {
            "n": 1,
            "t": "momento"
        },
        "validado_por": {
            "n": 1,
            "t": "uuid"
        }
    },
    "expedientes": {
        "actualizado_en": {
            "t": "momento"
        },
        "cliente_id": {
            "n": 1,
            "t": "uuid"
        },
        "contrato_id": {
            "n": 1,
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "datos_confirmados_en": {
            "n": 1,
            "t": "momento"
        },
        "enviado_en": {
            "n": 1,
            "t": "momento"
        },
        "estado": {
            "max": 12,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "latitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "longitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "precision_m": {
            "dec": 2,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        },
        "prospecto_id": {
            "t": "uuid"
        },
        "ubicacion_en": {
            "n": 1,
            "t": "momento"
        },
        "ubicacion_origen": {
            "max": 6,
            "n": 1,
            "t": "texto"
        },
        "ubicacion_por": {
            "n": 1,
            "t": "uuid"
        }
    },
    "facturas": {
        "anulada": {
            "t": "bool"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "cliente_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "concepto": {
            "max": 300,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "descuento": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "descuento_motivo": {
            "n": 1,
            "t": "texto"
        },
        "document_id": {
            "n": 1,
            "t": "uuid"
        },
        "fecha_emision": {
            "t": "fecha"
        },
        "fecha_vencimiento": {
            "t": "fecha"
        },
        "id": {
            "t": "uuid"
        },
        "impuesto": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "motivo_anulacion": {
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "origen": {
            "max": 20,
            "op": [
                "sistema",
                "migracion",
                "manual"
            ],
            "t": "texto"
        },
        "periodo_desde": {
            "n": 1,
            "t": "fecha"
        },
        "periodo_hasta": {
            "n": 1,
            "t": "fecha"
        },
        "subtotal": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "tipo": {
            "max": 15,
            "op": [
                "servicios",
                "libre",
                "instalacion",
                "otro"
            ],
            "t": "texto"
        },
        "total": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "firewall_bloqueos": {
        "activo": {
            "n": 1,
            "t": "bool"
        },
        "cliente_id": {
            "n": 1,
            "t": "uuid"
        },
        "cliente_ip": {
            "max": 45,
            "t": "texto"
        },
        "comentario": {
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "lista": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "mac_address": {
            "max": 17,
            "n": 1,
            "t": "texto"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "router_id": {
            "n": 1,
            "t": "uuid"
        },
        "routeros_id": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "tipo_accion": {
            "max": 20,
            "op": [
                "CORTAR_SERVICIO",
                "REDIRECCION_PAGO",
                "DROP_FORWARD"
            ],
            "t": "texto"
        }
    },
    "firmas_contrato": {
        "actualizado_en": {
            "t": "momento"
        },
        "autorizado_en": {
            "n": 1,
            "t": "momento"
        },
        "autorizado_por": {
            "n": 1,
            "t": "uuid"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "contenido_hash": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "contrato_id": {
            "n": 1,
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "documento_firmado_url": {
            "n": 1,
            "t": "texto"
        },
        "enlace_firma": {
            "n": 1,
            "t": "texto"
        },
        "enviado_en": {
            "n": 1,
            "t": "momento"
        },
        "error_api": {
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "op": [
                "pendiente",
                "enviado",
                "firmado",
                "rechazado",
                "vencido",
                "fallido"
            ],
            "t": "texto"
        },
        "fecha_firma": {
            "n": 1,
            "t": "momento"
        },
        "firmante_identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "firmante_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "metodo": {
            "max": 16,
            "op": [
                "electronica_api",
                "manual"
            ],
            "t": "texto"
        },
        "motivo_manual": {
            "n": 1,
            "t": "texto"
        },
        "proveedor": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "referencia_proveedor": {
            "max": 160,
            "n": 1,
            "t": "texto"
        },
        "validado_en": {
            "n": 1,
            "t": "momento"
        },
        "validado_por": {
            "n": 1,
            "t": "uuid"
        },
        "vence_en": {
            "n": 1,
            "t": "momento"
        }
    },
    "incidencia_avisos": {
        "canal": {
            "max": 15,
            "n": 1,
            "t": "texto"
        },
        "client_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "enviado_en": {
            "n": 1,
            "t": "momento"
        },
        "estado": {
            "max": 10,
            "op": [
                "pendiente",
                "enviado",
                "fallido",
                "omitido"
            ],
            "t": "texto"
        },
        "id": {
            "t": "entero"
        },
        "incidencia_id": {
            "t": "uuid"
        },
        "intentos": {
            "t": "entero"
        },
        "momento": {
            "max": 12,
            "op": [
                "apertura",
                "resolucion"
            ],
            "t": "texto"
        },
        "motivo": {
            "n": 1,
            "t": "texto"
        }
    },
    "incidencias_masivas": {
        "abierta_at": {
            "n": 1,
            "t": "momento"
        },
        "afectados": {
            "n": 1,
            "t": "entero"
        },
        "alcance": {
            "max": 12,
            "op": [
                "zona",
                "punto",
                "nodo",
                "olt",
                "router",
                "manual"
            ],
            "t": "texto"
        },
        "avisar_apertura": {
            "t": "bool"
        },
        "avisar_resolucion": {
            "t": "bool"
        },
        "clientes_manual": {
            "t": "json"
        },
        "created_at": {
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "op": [
                "borrador",
                "abierta",
                "resuelta",
                "cancelada"
            ],
            "t": "texto"
        },
        "estimado_at": {
            "n": 1,
            "t": "momento"
        },
        "fin_previsto": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "inicio_previsto": {
            "n": 1,
            "t": "momento"
        },
        "nodo_evento_id": {
            "n": 1,
            "t": "entero"
        },
        "nodo_id": {
            "n": 1,
            "t": "uuid"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "ocurrio_at": {
            "t": "momento"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "origen": {
            "max": 10,
            "op": [
                "manual",
                "nms"
            ],
            "t": "texto"
        },
        "programada": {
            "t": "bool"
        },
        "puerto_pon": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "punto_id": {
            "n": 1,
            "t": "uuid"
        },
        "resuelta_at": {
            "n": 1,
            "t": "momento"
        },
        "router_id": {
            "n": 1,
            "t": "uuid"
        },
        "tipo": {
            "max": 20,
            "op": [
                "averia",
                "fibra_rota",
                "mantenimiento",
                "corte_energia",
                "enlace_caido",
                "otro"
            ],
            "t": "texto"
        },
        "titulo": {
            "max": 120,
            "t": "texto"
        },
        "zona": {
            "max": 60,
            "n": 1,
            "t": "texto"
        }
    },
    "instalacion_fotos": {
        "clave_idempotencia": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "descripcion": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "t": "uuid"
        },
        "ruta": {
            "t": "texto"
        },
        "tipo": {
            "max": 20,
            "op": [
                "foto",
                "fachada",
                "exterior",
                "cableado",
                "roseta",
                "equipo",
                "potencia",
                "velocidad",
                "otro"
            ],
            "t": "texto"
        }
    },
    "instalaciones": {
        "acepta_arbitraje": {
            "n": 1,
            "t": "bool"
        },
        "acepta_datos_personales": {
            "n": 1,
            "t": "bool"
        },
        "alta_at": {
            "n": 1,
            "t": "momento"
        },
        "aprovisionado_at": {
            "n": 1,
            "t": "momento"
        },
        "canton": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "ccq": {
            "n": 1,
            "t": "entero"
        },
        "ciudad": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "clave_ppp": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "condicion_especial": {
            "max": 40,
            "op": [
                "ninguna",
                "tercera_edad",
                "discapacidad",
                "ambas"
            ],
            "t": "texto"
        },
        "costo": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "cuadrilla_id": {
            "n": 1,
            "t": "uuid"
        },
        "detalle_no_realizada": {
            "n": 1,
            "t": "texto"
        },
        "dia_facturacion": {
            "n": 1,
            "t": "entero"
        },
        "direccion": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "distancia_nodo_m": {
            "n": 1,
            "t": "entero"
        },
        "email": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "equipo": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "equipo_mac": {
            "max": 17,
            "n": 1,
            "t": "texto"
        },
        "equipo_modalidad": {
            "max": 14,
            "op": [
                "arrendamiento",
                "compra"
            ],
            "t": "texto"
        },
        "equipo_modelo": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "equipo_origen": {
            "max": 10,
            "n": 1,
            "t": "texto"
        },
        "equipo_sn": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "equipo_tipo": {
            "max": 10,
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 20,
            "op": [
                "prospecto",
                "agendada",
                "en_curso",
                "hecha",
                "cancelada",
                "nueva",
                "revisando",
                "lista_asignar",
                "en_ruta",
                "no_realizada",
                "reprogramada"
            ],
            "t": "texto"
        },
        "factibilidad": {
            "max": 15,
            "op": [
                "pendiente",
                "factible",
                "con_obra",
                "no_factible"
            ],
            "t": "texto"
        },
        "factibilidad_at": {
            "n": 1,
            "t": "momento"
        },
        "factibilidad_notas": {
            "n": 1,
            "t": "texto"
        },
        "fecha": {
            "t": "fecha"
        },
        "firma_b64": {
            "n": 1,
            "t": "texto"
        },
        "firmante_identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "firmante_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "franja": {
            "max": 10,
            "n": 1,
            "t": "texto"
        },
        "hora": {
            "n": 1,
            "t": "hora"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "ip": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "ipv6": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "latitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "lectura_at": {
            "n": 1,
            "t": "momento"
        },
        "llegada_at": {
            "n": 1,
            "t": "momento"
        },
        "llegada_lat": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "llegada_lng": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "llegada_precision_m": {
            "n": 1,
            "t": "entero"
        },
        "longitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "metros_cable": {
            "n": 1,
            "t": "entero"
        },
        "motivo_no_realizada": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "nap_id": {
            "n": 1,
            "t": "uuid"
        },
        "nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "observaciones": {
            "n": 1,
            "t": "texto"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "parroquia": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "paso": {
            "t": "entero"
        },
        "permanencia_meses": {
            "n": 1,
            "t": "entero"
        },
        "ping_ms": {
            "dec": 1,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        },
        "ping_ok": {
            "n": 1,
            "t": "bool"
        },
        "ping_perdida": {
            "n": 1,
            "t": "entero"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "pool": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "precio_mensual": {
            "dec": 2,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "provincia": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "pruebas_at": {
            "n": 1,
            "t": "momento"
        },
        "puerto_nap": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "puerto_pon": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "red_acceso": {
            "max": 40,
            "n": 1,
            "op": [
                "par_cobre",
                "fibra",
                "coaxial",
                "inalambrico",
                "otros"
            ],
            "t": "texto"
        },
        "referencia": {
            "n": 1,
            "t": "texto"
        },
        "reprogramada_para": {
            "n": 1,
            "t": "fecha"
        },
        "router_id": {
            "n": 1,
            "t": "uuid"
        },
        "rx_power_dbm": {
            "dec": 2,
            "dig": 6,
            "n": 1,
            "t": "decimal"
        },
        "sector": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "senal_dbm": {
            "dec": 2,
            "dig": 6,
            "n": 1,
            "t": "decimal"
        },
        "tarifa_preferencial": {
            "n": 1,
            "t": "bool"
        },
        "tecnico": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "tecnologia": {
            "max": 10,
            "op": [
                "ftth",
                "wireless"
            ],
            "t": "texto"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "telefono_whatsapp": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "test_bajada_mbps": {
            "dec": 2,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        },
        "test_subida_mbps": {
            "dec": 2,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        },
        "tipo": {
            "max": 20,
            "op": [
                "nueva",
                "traslado",
                "reparacion",
                "retiro",
                "revision"
            ],
            "t": "texto"
        },
        "tipo_conexion": {
            "max": 10,
            "op": [
                "ip",
                "pppoe",
                "hotspot"
            ],
            "t": "texto"
        },
        "tipo_cuenta": {
            "max": 40,
            "n": 1,
            "op": [
                "residencial",
                "corporativo",
                "cibercafe",
                "otros"
            ],
            "t": "texto"
        },
        "tipo_identificacion": {
            "max": 2,
            "n": 1,
            "t": "texto"
        },
        "tipo_ip": {
            "max": 10,
            "op": [
                "fija",
                "dinamica"
            ],
            "t": "texto"
        },
        "torre_id": {
            "n": 1,
            "t": "uuid"
        },
        "tx_power_dbm": {
            "dec": 2,
            "dig": 6,
            "n": 1,
            "t": "decimal"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        },
        "usuario_ppp": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "valor_instalacion": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        }
    },
    "ip_addresses": {
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "descripcion": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 20,
            "n": 1,
            "op": [
                "libre",
                "asignada",
                "reservada"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "interfaz": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "ip_address": {
            "max": 45,
            "t": "texto"
        },
        "mac_address": {
            "max": 17,
            "n": 1,
            "t": "texto"
        },
        "netmask": {
            "max": 15,
            "n": 1,
            "t": "texto"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "origen": {
            "max": 15,
            "op": [
                "manual",
                "arp",
                "dhcp",
                "ppp",
                "address",
                "alta"
            ],
            "t": "texto"
        },
        "router_id": {
            "n": 1,
            "t": "uuid"
        },
        "subred_id": {
            "n": 1,
            "t": "uuid"
        },
        "visto_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "jornadas": {
        "creado_en": {
            "t": "momento"
        },
        "distancia_ingreso_m": {
            "n": 1,
            "t": "entero"
        },
        "fecha": {
            "t": "fecha"
        },
        "fin_at": {
            "n": 1,
            "t": "momento"
        },
        "foto_ingreso": {
            "n": 1,
            "t": "texto"
        },
        "foto_ingreso_at": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "inicio_at": {
            "n": 1,
            "t": "momento"
        },
        "km_fin": {
            "n": 1,
            "t": "entero"
        },
        "km_inicio": {
            "n": 1,
            "t": "entero"
        },
        "lat_ingreso": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "lng_ingreso": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "precision_ingreso_m": {
            "n": 1,
            "t": "entero"
        },
        "primer_trabajo_id": {
            "n": 1,
            "t": "uuid"
        },
        "tecnico_id": {
            "t": "uuid"
        },
        "vehiculo_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "licencia": {
        "actualizado_en": {
            "t": "momento"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "entero"
        },
        "instalacion": {
            "t": "uuid"
        },
        "token": {
            "n": 1,
            "t": "texto"
        },
        "ultimo_contacto": {
            "n": 1,
            "t": "momento"
        },
        "ultimo_error": {
            "n": 1,
            "t": "texto"
        }
    },
    "line_profiles": {
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "gemport_id": {
            "n": 1,
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "profile_id_olt": {
            "t": "entero"
        },
        "vlan_id": {
            "t": "entero"
        }
    },
    "mantenimiento_intervalos": {
        "cada_km": {
            "n": 1,
            "t": "entero"
        },
        "cada_meses": {
            "n": 1,
            "t": "entero"
        },
        "id": {
            "t": "entero"
        },
        "tipo_id": {
            "t": "uuid"
        },
        "vehiculo_id": {
            "t": "uuid"
        }
    },
    "mantenimiento_tipos": {
        "activo": {
            "t": "bool"
        },
        "cada_km": {
            "n": 1,
            "t": "entero"
        },
        "cada_meses": {
            "n": 1,
            "t": "entero"
        },
        "clave": {
            "max": 40,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 80,
            "t": "texto"
        },
        "orden": {
            "t": "entero"
        }
    },
    "mantenimientos": {
        "costo": {
            "dec": 2,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "creado_en": {
            "t": "momento"
        },
        "fecha": {
            "t": "fecha"
        },
        "id": {
            "t": "uuid"
        },
        "nota": {
            "n": 1,
            "t": "texto"
        },
        "odometro": {
            "n": 1,
            "t": "entero"
        },
        "taller": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "tipo_id": {
            "t": "uuid"
        },
        "vehiculo_id": {
            "t": "uuid"
        }
    },
    "mensajes_comerciales": {
        "canal": {
            "max": 20,
            "t": "texto"
        },
        "clave_idempotencia": {
            "n": 1,
            "t": "uuid"
        },
        "cotizacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "cuerpo": {
            "t": "texto"
        },
        "destino": {
            "max": 40,
            "t": "texto"
        },
        "enviado_en": {
            "n": 1,
            "t": "momento"
        },
        "estado": {
            "max": 20,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "prospecto_id": {
            "n": 1,
            "t": "uuid"
        },
        "proveedor_id": {
            "n": 1,
            "t": "texto"
        },
        "vendedor_id": {
            "n": 1,
            "t": "uuid"
        },
        "via": {
            "max": 20,
            "t": "texto"
        }
    },
    "mensajes_whatsapp": {
        "conversacion_id": {
            "t": "uuid"
        },
        "created_at": {
            "t": "momento"
        },
        "cuerpo": {
            "t": "texto"
        },
        "direccion": {
            "max": 10,
            "op": [
                "ENTRANTE",
                "SALIENTE"
            ],
            "t": "texto"
        },
        "estado": {
            "max": 20,
            "op": [
                "ENVIADO",
                "ENTREGADO",
                "LEIDO",
                "FALLIDO"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "payload_json": {
            "n": 1,
            "t": "json"
        },
        "tipo": {
            "max": 20,
            "op": [
                "TEXTO",
                "PLANTILLA",
                "IMAGEN",
                "DOCUMENTO"
            ],
            "t": "texto"
        },
        "updated_at": {
            "t": "momento"
        },
        "wa_message_id": {
            "max": 100,
            "t": "texto"
        }
    },
    "metas_venta": {
        "anio": {
            "t": "entero"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "mes": {
            "t": "entero"
        },
        "meta_altas": {
            "t": "entero"
        },
        "meta_monto": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "vendedor_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "motivos_baja": {
        "activo": {
            "t": "bool"
        },
        "afecta_calidad": {
            "t": "bool"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 80,
            "t": "texto"
        },
        "orden": {
            "t": "entero"
        }
    },
    "movimientos_inventario": {
        "almacen_destino_id": {
            "n": 1,
            "t": "uuid"
        },
        "almacen_origen_id": {
            "n": 1,
            "t": "uuid"
        },
        "articulo_id": {
            "t": "uuid"
        },
        "cantidad": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "clave_idempotencia": {
            "n": 1,
            "t": "uuid"
        },
        "compra_id": {
            "n": 1,
            "t": "uuid"
        },
        "costo_unit": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        },
        "creado_en": {
            "t": "momento"
        },
        "equipo_id": {
            "n": 1,
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "motivo": {
            "n": 1,
            "t": "texto"
        },
        "ticket_id": {
            "n": 1,
            "t": "uuid"
        },
        "tipo": {
            "max": 14,
            "t": "texto"
        },
        "usuario_id": {
            "n": 1,
            "t": "uuid"
        },
        "usuario_nombre": {
            "max": 140,
            "n": 1,
            "t": "texto"
        }
    },
    "nodo_eventos": {
        "causa_padre_id": {
            "n": 1,
            "t": "uuid"
        },
        "desde": {
            "t": "momento"
        },
        "detalle": {
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "op": [
                "up",
                "warning",
                "down",
                "desconocido"
            ],
            "t": "texto"
        },
        "hasta": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "latencia_ms": {
            "dec": 1,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        },
        "nodo_id": {
            "t": "uuid"
        },
        "notificado": {
            "t": "bool"
        },
        "notificado_at": {
            "n": 1,
            "t": "momento"
        },
        "perdida_pct": {
            "n": 1,
            "t": "entero"
        }
    },
    "nodos_red": {
        "avisar": {
            "t": "bool"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "desde": {
            "n": 1,
            "t": "momento"
        },
        "equipo": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "op": [
                "up",
                "warning",
                "down",
                "desconocido"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "ip": {
            "max": 45,
            "t": "texto"
        },
        "latencia_ms": {
            "dec": 1,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        },
        "latencia_warning_ms": {
            "t": "entero"
        },
        "monitorear": {
            "t": "bool"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "padre_id": {
            "n": 1,
            "t": "uuid"
        },
        "perdida_pct": {
            "n": 1,
            "t": "entero"
        },
        "perdida_warning_pct": {
            "t": "entero"
        },
        "punto_id": {
            "n": 1,
            "t": "uuid"
        },
        "router_id": {
            "n": 1,
            "t": "uuid"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "tipo": {
            "max": 15,
            "op": [
                "ptp",
                "ptmp",
                "rb_torre",
                "olt",
                "energia",
                "switch",
                "otro"
            ],
            "t": "texto"
        },
        "ultimo_chequeo": {
            "n": 1,
            "t": "momento"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "notificaciones": {
        "creado_en": {
            "t": "momento"
        },
        "detalle": {
            "n": 1,
            "t": "texto"
        },
        "entidad": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "entidad_id": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "leida_en": {
            "n": 1,
            "t": "momento"
        },
        "ruta": {
            "n": 1,
            "t": "texto"
        },
        "tipo": {
            "max": 30,
            "t": "texto"
        },
        "titulo": {
            "t": "texto"
        },
        "usuario_id": {
            "t": "uuid"
        }
    },
    "olt_backups": {
        "bytes": {
            "n": 1,
            "t": "entero"
        },
        "comando": {
            "n": 1,
            "t": "texto"
        },
        "contenido": {
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 120,
            "t": "texto"
        },
        "olt_id": {
            "t": "uuid"
        },
        "quien": {
            "n": 1,
            "t": "texto"
        }
    },
    "olt_escaneos": {
        "at": {
            "t": "momento"
        },
        "descartadas": {
            "t": "entero"
        },
        "encontradas": {
            "t": "entero"
        },
        "error": {
            "n": 1,
            "t": "texto"
        },
        "ms": {
            "n": 1,
            "t": "entero"
        },
        "olt_id": {
            "t": "uuid"
        },
        "puertos": {
            "t": "entero"
        }
    },
    "olt_historial": {
        "accion": {
            "max": 20,
            "t": "texto"
        },
        "campo": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "olt_id": {
            "t": "uuid"
        },
        "quien": {
            "n": 1,
            "t": "texto"
        },
        "valor_antes": {
            "n": 1,
            "t": "texto"
        },
        "valor_despues": {
            "n": 1,
            "t": "texto"
        }
    },
    "olts": {
        "activo": {
            "n": 1,
            "t": "bool"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "enable_password_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "n": 1,
            "op": [
                "online",
                "offline",
                "desconocido"
            ],
            "t": "texto"
        },
        "estado_at": {
            "n": 1,
            "t": "momento"
        },
        "estado_detalle": {
            "n": 1,
            "t": "texto"
        },
        "estado_latencia_ms": {
            "n": 1,
            "t": "entero"
        },
        "hw_version": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "ip_host": {
            "max": 45,
            "t": "texto"
        },
        "iptv": {
            "n": 1,
            "t": "bool"
        },
        "marca": {
            "max": 20,
            "op": [
                "Huawei",
                "VSOL"
            ],
            "t": "texto"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "ntp_servers": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "password_encrypted": {
            "t": "texto"
        },
        "pon_tipos": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "puerto_ssh": {
            "n": 1,
            "t": "entero"
        },
        "snmp_puerto": {
            "n": 1,
            "t": "entero"
        },
        "snmp_ro_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "snmp_rw_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "snmp_trap": {
            "n": 1,
            "t": "bool"
        },
        "sw_version": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "tr069_interfaz": {
            "max": 40,
            "n": 1,
            "op": [
                "mgmt_ip",
                "wan_ip",
                "loopback",
                "ninguna"
            ],
            "t": "texto"
        },
        "tr069_perfil": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        },
        "usuario": {
            "max": 50,
            "t": "texto"
        },
        "versiones_at": {
            "n": 1,
            "t": "momento"
        },
        "via_vpn": {
            "n": 1,
            "t": "bool"
        }
    },
    "onts_esperando": {
        "created_at": {
            "t": "momento"
        },
        "detectada": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "entero"
        },
        "modelo": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "olt_id": {
            "t": "uuid"
        },
        "puerto": {
            "n": 1,
            "t": "entero"
        },
        "slot": {
            "n": 1,
            "t": "entero"
        },
        "sn": {
            "max": 50,
            "t": "texto"
        },
        "visto_at": {
            "t": "momento"
        }
    },
    "onts_preautorizadas": {
        "automatica": {
            "t": "bool"
        },
        "autorizada_at": {
            "n": 1,
            "t": "momento"
        },
        "comentario": {
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "t": "momento"
        },
        "estado": {
            "max": 20,
            "t": "texto"
        },
        "gemport": {
            "n": 1,
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "intentos": {
            "t": "entero"
        },
        "line_profile_id": {
            "n": 1,
            "t": "entero"
        },
        "nombre": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "olt_id": {
            "t": "uuid"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "preset_id": {
            "n": 1,
            "t": "uuid"
        },
        "puerto": {
            "n": 1,
            "t": "entero"
        },
        "slot": {
            "n": 1,
            "t": "entero"
        },
        "sn": {
            "max": 50,
            "t": "texto"
        },
        "srv_profile_id": {
            "n": 1,
            "t": "entero"
        },
        "ultimo_error": {
            "n": 1,
            "t": "texto"
        },
        "updated_at": {
            "t": "momento"
        },
        "vence_at": {
            "n": 1,
            "t": "momento"
        },
        "vlan": {
            "n": 1,
            "t": "entero"
        }
    },
    "onu_optica_historial": {
        "id": {
            "t": "entero"
        },
        "medida_at": {
            "t": "momento"
        },
        "onu_id": {
            "t": "uuid"
        },
        "rx_dbm": {
            "dec": 2,
            "dig": 5,
            "n": 1,
            "t": "decimal"
        },
        "temperatura_c": {
            "n": 1,
            "t": "entero"
        },
        "tx_dbm": {
            "dec": 2,
            "dig": 5,
            "n": 1,
            "t": "decimal"
        }
    },
    "onus": {
        "autorizada_at": {
            "n": 1,
            "t": "fecha"
        },
        "causa_caida": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "causa_caida_cruda": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "clave_wifi": {
            "max": 128,
            "n": 1,
            "t": "texto"
        },
        "configurada_at": {
            "n": 1,
            "t": "momento"
        },
        "configurada_por": {
            "max": 15,
            "n": 1,
            "t": "texto"
        },
        "contacto": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "descripcion_olt": {
            "n": 1,
            "t": "texto"
        },
        "direccion": {
            "n": 1,
            "t": "texto"
        },
        "distancia_m": {
            "n": 1,
            "t": "entero"
        },
        "estado": {
            "max": 20,
            "n": 1,
            "op": [
                "online",
                "offline",
                "los",
                "power_off",
                "unknown"
            ],
            "t": "texto"
        },
        "ficha_leida_at": {
            "n": 1,
            "t": "momento"
        },
        "frame": {
            "n": 1,
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "line_profile_id": {
            "n": 1,
            "t": "uuid"
        },
        "line_profile_olt": {
            "n": 1,
            "t": "entero"
        },
        "modelo": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "nap_id": {
            "n": 1,
            "t": "uuid"
        },
        "nap_origen": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "nombre_cliente": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "odb": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "olt_rx_power_dbm": {
            "dec": 2,
            "dig": 6,
            "n": 1,
            "t": "decimal"
        },
        "onu_index": {
            "t": "entero"
        },
        "optica_registrada_at": {
            "n": 1,
            "t": "momento"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "plan_velocidad": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "puerto": {
            "t": "entero"
        },
        "rx_power_dbm": {
            "dec": 2,
            "dig": 5,
            "n": 1,
            "t": "decimal"
        },
        "slot": {
            "t": "entero"
        },
        "sn": {
            "max": 50,
            "t": "texto"
        },
        "srv_profile_nombre": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "srv_profile_olt": {
            "n": 1,
            "t": "entero"
        },
        "ssid": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "temperatura_c": {
            "dec": 1,
            "dig": 5,
            "n": 1,
            "t": "decimal"
        },
        "tipo_ont_id": {
            "n": 1,
            "t": "uuid"
        },
        "tx_power_dbm": {
            "dec": 2,
            "dig": 5,
            "n": 1,
            "t": "decimal"
        },
        "ultima_caida": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "ultima_lectura": {
            "n": 1,
            "t": "momento"
        },
        "vlan": {
            "n": 1,
            "t": "entero"
        },
        "zona": {
            "max": 60,
            "n": 1,
            "t": "texto"
        }
    },
    "pagos": {
        "activo_servicio": {
            "t": "bool"
        },
        "anulado": {
            "t": "bool"
        },
        "anulado_at": {
            "n": 1,
            "t": "momento"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "cliente_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "comision": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "cuenta_id": {
            "n": 1,
            "t": "uuid"
        },
        "document_id": {
            "n": 1,
            "t": "uuid"
        },
        "es_excedente": {
            "t": "bool"
        },
        "es_reparto": {
            "t": "bool"
        },
        "factura_id": {
            "n": 1,
            "t": "uuid"
        },
        "facturar": {
            "t": "bool"
        },
        "fecha_pago": {
            "t": "fecha"
        },
        "forma_pago": {
            "max": 20,
            "op": [
                "efectivo",
                "transferencia",
                "deposito",
                "tarjeta",
                "billetera",
                "otro"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "monto": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "motivo_anulacion": {
            "n": 1,
            "t": "texto"
        },
        "n_transaccion": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "pago_origen_id": {
            "n": 1,
            "t": "uuid"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "pagos_reportados": {
        "banco_origen": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "cliente_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "comprobante_url": {
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "t": "momento"
        },
        "cuenta_id": {
            "n": 1,
            "t": "uuid"
        },
        "depositante": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "op": [
                "pendiente",
                "confirmado",
                "rechazado"
            ],
            "t": "texto"
        },
        "factura_id": {
            "n": 1,
            "t": "uuid"
        },
        "fecha_pago": {
            "t": "fecha"
        },
        "forma_pago": {
            "max": 20,
            "op": [
                "efectivo",
                "transferencia",
                "deposito",
                "tarjeta",
                "otro"
            ],
            "t": "texto"
        },
        "hash_qr": {
            "max": 128,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "llave_id": {
            "n": 1,
            "t": "uuid"
        },
        "llave_nombre": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "metodo_verificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "monto": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "motivo_rechazo": {
            "n": 1,
            "t": "texto"
        },
        "n_transaccion": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "origen": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "pago_id": {
            "n": 1,
            "t": "uuid"
        },
        "referencia_externa": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "uuid_transaccion": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "verificado_at": {
            "n": 1,
            "t": "momento"
        },
        "verificado_por": {
            "max": 64,
            "n": 1,
            "t": "texto"
        }
    },
    "parametros_tecnicos": {
        "actualizado_en": {
            "t": "momento"
        },
        "actualizado_por": {
            "n": 1,
            "t": "uuid"
        },
        "dias_reincidencia": {
            "t": "entero"
        },
        "id": {
            "t": "entero"
        },
        "optica_limite": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "optica_optimo": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "optica_saturado": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "perdida_maxima_pct": {
            "t": "entero"
        },
        "ping_bueno_ms": {
            "t": "entero"
        },
        "ping_limite_ms": {
            "t": "entero"
        },
        "radio_ccq_minimo": {
            "t": "entero"
        },
        "radio_limite": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "radio_optimo": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "tolerancia_puntualidad_min": {
            "t": "entero"
        },
        "velocidad_minima_pct": {
            "t": "entero"
        }
    },
    "plan_routers": {
        "aprovisionado_at": {
            "n": 1,
            "t": "momento"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "error": {
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "op": [
                "pendiente",
                "aplicado",
                "error"
            ],
            "t": "texto"
        },
        "id": {
            "t": "entero"
        },
        "perfil_aplicado": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "plan_id": {
            "t": "uuid"
        },
        "rate_limit": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "router_id": {
            "t": "uuid"
        }
    },
    "planes_velocidad": {
        "activo": {
            "t": "bool"
        },
        "bajada_kbps": {
            "t": "entero"
        },
        "burst_bajada_kbps": {
            "n": 1,
            "t": "entero"
        },
        "burst_limit": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "burst_segundos_bajada": {
            "n": 1,
            "t": "entero"
        },
        "burst_segundos_subida": {
            "n": 1,
            "t": "entero"
        },
        "burst_subida_kbps": {
            "n": 1,
            "t": "entero"
        },
        "categoria": {
            "max": 15,
            "op": [
                "residencial",
                "corporativo",
                "empresarial",
                "otro"
            ],
            "t": "texto"
        },
        "codigo_facturacion": {
            "max": 25,
            "n": 1,
            "t": "texto"
        },
        "comparticion": {
            "max": 8,
            "n": 1,
            "t": "texto"
        },
        "control_pppoe": {
            "max": 10,
            "op": [
                "olt",
                "mikrotik"
            ],
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "garantizado_bajada_kbps": {
            "n": 1,
            "t": "entero"
        },
        "garantizado_subida_kbps": {
            "n": 1,
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "iva_porcentaje": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "minima_bajada_kbps": {
            "n": 1,
            "t": "entero"
        },
        "minima_subida_kbps": {
            "n": 1,
            "t": "entero"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "perfil_ppp": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "precio": {
            "dec": 2,
            "dig": 10,
            "t": "decimal"
        },
        "prioridad": {
            "n": 1,
            "t": "entero"
        },
        "subida_kbps": {
            "t": "entero"
        },
        "tablas_verificadas_at": {
            "n": 1,
            "t": "momento"
        },
        "tablas_verificadas_en": {
            "n": 1,
            "t": "uuid"
        },
        "tipo_impuesto": {
            "max": 10,
            "op": [
                "incluido",
                "mas",
                "ninguno"
            ],
            "t": "texto"
        },
        "traffic_table_bajada": {
            "n": 1,
            "t": "entero"
        },
        "traffic_table_index": {
            "n": 1,
            "t": "entero"
        },
        "traffic_table_subida": {
            "n": 1,
            "t": "entero"
        },
        "umbral_bajada_kbps": {
            "n": 1,
            "t": "entero"
        },
        "umbral_subida_kbps": {
            "n": 1,
            "t": "entero"
        }
    },
    "planes_velocidad_historico": {
        "bajada_kbps": {
            "n": 1,
            "t": "entero"
        },
        "cambiado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "motivo": {
            "n": 1,
            "t": "texto"
        },
        "nombre": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "subida_kbps": {
            "n": 1,
            "t": "entero"
        }
    },
    "plantillas_mensaje": {
        "activa": {
            "t": "bool"
        },
        "actualizado_en": {
            "n": 1,
            "t": "momento"
        },
        "actualizado_por": {
            "n": 1,
            "t": "uuid"
        },
        "asunto": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "canal": {
            "max": 15,
            "op": [
                "email",
                "whatsapp",
                "telegram",
                "sms",
                "cualquiera",
                "documento",
                "web"
            ],
            "t": "texto"
        },
        "categoria": {
            "max": 12,
            "op": [
                "documento",
                "correo",
                "sms",
                "web"
            ],
            "t": "texto"
        },
        "clave": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "cuerpo": {
            "t": "texto"
        },
        "del_sistema": {
            "t": "bool"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "formato": {
            "max": 6,
            "op": [
                "texto",
                "html"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "variables": {
            "n": 1,
            "t": "json"
        }
    },
    "plantillas_whatsapp": {
        "actualizado_en": {
            "t": "momento"
        },
        "categoria": {
            "max": 15,
            "op": [
                "UTILITY",
                "MARKETING",
                "AUTHENTICATION"
            ],
            "t": "texto"
        },
        "cuerpo_meta": {
            "t": "texto"
        },
        "ejemplos": {
            "t": "json"
        },
        "estado": {
            "max": 12,
            "op": [
                "borrador",
                "enviada",
                "aprobada",
                "rechazada",
                "pausada"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "idioma": {
            "max": 10,
            "t": "texto"
        },
        "meta_id": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "motivo_rechazo": {
            "n": 1,
            "t": "texto"
        },
        "nombre_meta": {
            "max": 64,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "plantilla_id": {
            "t": "uuid"
        },
        "purpose_crm": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "sid_twilio": {
            "max": 40,
            "n": 1,
            "t": "texto"
        },
        "variables": {
            "t": "json"
        }
    },
    "portal_codigos": {
        "canal": {
            "max": 15,
            "n": 1,
            "t": "texto"
        },
        "cliente_id": {
            "t": "uuid"
        },
        "codigo_hash": {
            "max": 64,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "enviado_a": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "expira_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "intentos": {
            "t": "entero"
        },
        "usado_en": {
            "n": 1,
            "t": "momento"
        }
    },
    "portal_sesiones": {
        "agente": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "cliente_id": {
            "t": "uuid"
        },
        "creada_en": {
            "t": "momento"
        },
        "expira_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "token_hash": {
            "max": 64,
            "t": "texto"
        },
        "ultimo_uso": {
            "n": 1,
            "t": "momento"
        }
    },
    "portal_solicitudes": {
        "aplicada_en": {
            "n": 1,
            "t": "momento"
        },
        "cliente_id": {
            "t": "uuid"
        },
        "creada_en": {
            "t": "momento"
        },
        "estado": {
            "max": 15,
            "op": [
                "pendiente",
                "aplicada",
                "fallida",
                "cancelada"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "intentos": {
            "t": "entero"
        },
        "tipo": {
            "max": 20,
            "op": [
                "clave_wifi",
                "nombre_wifi"
            ],
            "t": "texto"
        },
        "ultimo_error": {
            "n": 1,
            "t": "texto"
        },
        "valor_encrypted": {
            "t": "texto"
        }
    },
    "prestadores": {
        "activo": {
            "t": "bool"
        },
        "actualizado_en": {
            "t": "momento"
        },
        "arbitraje_por_defecto": {
            "t": "bool"
        },
        "beneficio_anexo": {
            "n": 1,
            "t": "texto"
        },
        "beneficios_permanencia": {
            "n": 1,
            "t": "texto"
        },
        "canton": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "ciudad": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "costo_no_permanencia": {
            "n": 1,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "direccion": {
            "n": 1,
            "t": "texto"
        },
        "email": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "modelo_inscrito_el": {
            "n": 1,
            "t": "fecha"
        },
        "nombre_comercial": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "parroquia": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "permanencia_meses": {
            "t": "entero"
        },
        "plazo_instalacion": {
            "max": 40,
            "t": "texto"
        },
        "predeterminado": {
            "t": "bool"
        },
        "provincia": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "razon_social": {
            "max": 160,
            "t": "texto"
        },
        "reclamos_email": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "reclamos_horario": {
            "max": 80,
            "n": 1,
            "t": "texto"
        },
        "reclamos_oficinas": {
            "n": 1,
            "t": "texto"
        },
        "reclamos_telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "ruc": {
            "max": 13,
            "n": 1,
            "t": "texto"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "valor_instalacion": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "vigencia_meses": {
            "t": "entero"
        },
        "web": {
            "max": 160,
            "n": 1,
            "t": "texto"
        }
    },
    "promesas_pago": {
        "activo_servicio": {
            "t": "bool"
        },
        "client_id": {
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "document_id": {
            "n": 1,
            "t": "uuid"
        },
        "estado": {
            "max": 15,
            "op": [
                "activa",
                "cumplida",
                "incumplida",
                "anulada"
            ],
            "t": "texto"
        },
        "factura_id": {
            "n": 1,
            "t": "uuid"
        },
        "fecha_promesa": {
            "t": "fecha"
        },
        "id": {
            "t": "uuid"
        },
        "monto": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        },
        "nota": {
            "n": 1,
            "t": "texto"
        },
        "pago_id": {
            "n": 1,
            "t": "uuid"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "promocion_planes": {
        "id": {
            "t": "entero"
        },
        "plan_id": {
            "t": "uuid"
        },
        "promocion_id": {
            "t": "uuid"
        }
    },
    "promociones": {
        "activa": {
            "t": "bool"
        },
        "color": {
            "max": 7,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "meses_aplica": {
            "n": 1,
            "t": "entero"
        },
        "nombre": {
            "max": 120,
            "t": "texto"
        },
        "tipo": {
            "max": 20,
            "t": "texto"
        },
        "valor": {
            "dec": 2,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "vigente_desde": {
            "t": "fecha"
        },
        "vigente_hasta": {
            "n": 1,
            "t": "fecha"
        }
    },
    "prospecto_actividades": {
        "completado_en": {
            "n": 1,
            "t": "momento"
        },
        "creado_en": {
            "t": "momento"
        },
        "detalle": {
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "op": [
                "pendiente",
                "completado",
                "cancelado"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "programado_para": {
            "n": 1,
            "t": "momento"
        },
        "prospecto_id": {
            "t": "uuid"
        },
        "proxima_accion": {
            "n": 1,
            "t": "texto"
        },
        "resultado": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "tipo": {
            "max": 15,
            "t": "texto"
        },
        "usuario_id": {
            "n": 1,
            "t": "uuid"
        },
        "usuario_nombre": {
            "max": 140,
            "n": 1,
            "t": "texto"
        }
    },
    "prospectos": {
        "actualizado_en": {
            "t": "momento"
        },
        "archivado_en": {
            "n": 1,
            "t": "momento"
        },
        "canton": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "cliente_id": {
            "n": 1,
            "t": "uuid"
        },
        "cobertura": {
            "max": 15,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "direccion": {
            "n": 1,
            "t": "texto"
        },
        "distancia_nodo_m": {
            "n": 1,
            "t": "entero"
        },
        "email": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 15,
            "t": "texto"
        },
        "ganado_en": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "latitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "longitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "motivo_perdida": {
            "n": 1,
            "t": "texto"
        },
        "nap_id": {
            "n": 1,
            "t": "uuid"
        },
        "nombre": {
            "max": 150,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "origen": {
            "max": 20,
            "t": "texto"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "promocion_id": {
            "n": 1,
            "t": "uuid"
        },
        "proxima_accion": {
            "n": 1,
            "t": "fecha"
        },
        "referencia": {
            "n": 1,
            "t": "texto"
        },
        "sector": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "telefono_whatsapp": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "tipo_operacion": {
            "max": 14,
            "op": [
                "nueva",
                "reactivacion"
            ],
            "t": "texto"
        },
        "vendedor_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "proveedores": {
        "activo": {
            "t": "bool"
        },
        "contacto": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "direccion": {
            "n": 1,
            "t": "texto"
        },
        "email": {
            "max": 120,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "nombre": {
            "max": 140,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        }
    },
    "puertos_pon": {
        "created_at": {
            "t": "momento"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "leido_at": {
            "n": 1,
            "t": "momento"
        },
        "olt_id": {
            "t": "uuid"
        },
        "onts_equipo": {
            "n": 1,
            "t": "entero"
        },
        "placa": {
            "n": 1,
            "t": "texto"
        },
        "puerto": {
            "t": "entero"
        },
        "slot": {
            "t": "entero"
        },
        "updated_at": {
            "t": "momento"
        },
        "vlan": {
            "n": 1,
            "t": "entero"
        },
        "vlans_equipo": {
            "n": 1,
            "t": "json"
        }
    },
    "puntos_red": {
        "activo": {
            "t": "bool"
        },
        "capacidad": {
            "n": 1,
            "t": "entero"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "direccion": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "latitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "longitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "origen": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "puerto_pon": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "slot": {
            "n": 1,
            "t": "entero"
        },
        "tipo": {
            "max": 20,
            "op": [
                "nap",
                "antena",
                "torre",
                "switch",
                "otro"
            ],
            "t": "texto"
        }
    },
    "reactivaciones": {
        "cliente_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "meses_inactivo": {
            "t": "entero"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "origen": {
            "max": 10,
            "t": "texto"
        },
        "pago_anterior": {
            "n": 1,
            "t": "fecha"
        },
        "pago_id": {
            "n": 1,
            "t": "uuid"
        },
        "reactivado_el": {
            "t": "fecha"
        },
        "retiro_id": {
            "n": 1,
            "t": "uuid"
        },
        "vendedor_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "reconexiones_pendientes": {
        "cliente_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "error": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "entero"
        },
        "intentos": {
            "t": "entero"
        },
        "motivo": {
            "max": 30,
            "t": "texto"
        },
        "procesado_en": {
            "n": 1,
            "t": "momento"
        }
    },
    "reemplazos_equipo": {
        "cliente_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "destino_anterior": {
            "max": 12,
            "t": "texto"
        },
        "detalle": {
            "n": 1,
            "t": "texto"
        },
        "equipo_anterior_id": {
            "n": 1,
            "t": "uuid"
        },
        "equipo_nuevo_id": {
            "t": "uuid"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "motivo": {
            "max": 24,
            "t": "texto"
        },
        "olt_at": {
            "n": 1,
            "t": "momento"
        },
        "onu_anterior_id": {
            "n": 1,
            "t": "uuid"
        },
        "pendiente_olt": {
            "t": "bool"
        },
        "serie_anterior": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "serie_nueva": {
            "max": 60,
            "t": "texto"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "ticket_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "retencion_items": {
        "base_imponible": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        },
        "cod_doc_sustento": {
            "max": 2,
            "n": 1,
            "t": "texto"
        },
        "codigo": {
            "max": 1,
            "t": "texto"
        },
        "codigo_retencion": {
            "max": 5,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "document_id": {
            "t": "uuid"
        },
        "fecha_emision_doc_sustento": {
            "n": 1,
            "t": "fecha"
        },
        "id": {
            "t": "uuid"
        },
        "num_doc_sustento": {
            "max": 17,
            "n": 1,
            "t": "texto"
        },
        "porcentaje_retener": {
            "dec": 2,
            "dig": 5,
            "t": "decimal"
        },
        "valor_retenido": {
            "dec": 2,
            "dig": 14,
            "t": "decimal"
        }
    },
    "retiro_categorias": {
        "activa": {
            "t": "bool"
        },
        "cierra_ficha": {
            "t": "bool"
        },
        "clave": {
            "max": 24,
            "t": "texto"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "es_perdida": {
            "t": "bool"
        },
        "nombre": {
            "max": 80,
            "t": "texto"
        },
        "orden": {
            "t": "entero"
        },
        "reclamable": {
            "t": "bool"
        }
    },
    "retiro_intentos": {
        "creado_en": {
            "t": "momento"
        },
        "foto_url": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "observacion": {
            "n": 1,
            "t": "texto"
        },
        "resultado": {
            "max": 16,
            "t": "texto"
        },
        "retiro_id": {
            "t": "uuid"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "usuario_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "retiros_equipo": {
        "agenda_nota": {
            "n": 1,
            "t": "texto"
        },
        "agendado_para": {
            "n": 1,
            "t": "momento"
        },
        "asignado_en": {
            "n": 1,
            "t": "momento"
        },
        "categoria_cierre": {
            "max": 24,
            "n": 1,
            "t": "texto"
        },
        "cerrado_en": {
            "n": 1,
            "t": "momento"
        },
        "cerrado_por": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "cliente_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "deuda_aplicada": {
            "t": "bool"
        },
        "equipo_id": {
            "n": 1,
            "t": "uuid"
        },
        "estado": {
            "max": 14,
            "t": "texto"
        },
        "evidencia_url": {
            "n": 1,
            "t": "texto"
        },
        "fecha_instalacion": {
            "n": 1,
            "t": "fecha"
        },
        "firma_b64": {
            "n": 1,
            "t": "texto"
        },
        "firmado_en": {
            "n": 1,
            "t": "momento"
        },
        "firmante": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "intentos": {
            "t": "entero"
        },
        "meses_sin_pago": {
            "n": 1,
            "t": "entero"
        },
        "modelo": {
            "max": 140,
            "n": 1,
            "t": "texto"
        },
        "motivo": {
            "max": 24,
            "n": 1,
            "t": "texto"
        },
        "observaciones": {
            "n": 1,
            "t": "texto"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "recordado_en": {
            "n": 1,
            "t": "momento"
        },
        "responsable_id": {
            "n": 1,
            "t": "uuid"
        },
        "serie": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "suspendido_en": {
            "n": 1,
            "t": "fecha"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "ultimo_pago": {
            "n": 1,
            "t": "fecha"
        },
        "valor": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "vendedor_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "routers_mikrotik": {
        "activo": {
            "n": 1,
            "t": "bool"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "ip_host": {
            "max": 45,
            "t": "texto"
        },
        "ipv6_activo": {
            "t": "bool"
        },
        "ipv6_lista_morosos": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "ipv6_preparado_at": {
            "n": 1,
            "t": "momento"
        },
        "lista_aviso": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "lista_morosos": {
            "max": 50,
            "t": "texto"
        },
        "modo_api": {
            "max": 10,
            "op": [
                "binaria",
                "rest"
            ],
            "t": "texto"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "password_encrypted": {
            "t": "texto"
        },
        "puerto_api": {
            "n": 1,
            "t": "entero"
        },
        "usa_https": {
            "n": 1,
            "t": "bool"
        },
        "usuario": {
            "max": 50,
            "t": "texto"
        }
    },
    "servicios": {
        "cliente_id": {
            "t": "uuid"
        },
        "created_at": {
            "t": "momento"
        },
        "estado": {
            "max": 20,
            "op": [
                "activo",
                "suspendido",
                "cancelado"
            ],
            "t": "texto"
        },
        "fecha_alta": {
            "t": "fecha"
        },
        "id": {
            "t": "uuid"
        },
        "onu_id": {
            "n": 1,
            "t": "uuid"
        },
        "plan_id": {
            "n": 1,
            "t": "uuid"
        },
        "updated_at": {
            "t": "momento"
        }
    },
    "sesiones_conexion": {
        "bajada_bytes": {
            "n": 1,
            "t": "entero"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "fin": {
            "n": 1,
            "t": "momento"
        },
        "fuente": {
            "max": 15,
            "op": [
                "mikrotik",
                "radius"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "inicio": {
            "t": "momento"
        },
        "ip": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "mac": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "motivo_desconexion": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "nas": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "subida_bytes": {
            "n": 1,
            "t": "entero"
        },
        "usuario": {
            "max": 100,
            "n": 1,
            "t": "texto"
        }
    },
    "solicitudes_validacion": {
        "actualizado_en": {
            "t": "momento"
        },
        "creado_en": {
            "t": "momento"
        },
        "estado": {
            "max": 16,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "motivo_interno": {
            "n": 1,
            "t": "texto"
        },
        "motivo_publico": {
            "n": 1,
            "t": "texto"
        },
        "prospecto_id": {
            "t": "uuid"
        },
        "validado_en": {
            "n": 1,
            "t": "momento"
        },
        "validado_por": {
            "n": 1,
            "t": "uuid"
        }
    },
    "sondeos_red": {
        "created_at": {
            "t": "momento"
        },
        "detalle": {
            "t": "texto"
        },
        "estado": {
            "max": 10,
            "op": [
                "OK",
                "WARN",
                "DOWN"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "latencia_ms": {
            "n": 1,
            "t": "entero"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "router_id": {
            "n": 1,
            "t": "uuid"
        },
        "timestamp": {
            "t": "momento"
        },
        "updated_at": {
            "t": "momento"
        }
    },
    "sri_config": {
        "agente_retencion": {
            "max": 10,
            "n": 1,
            "t": "texto"
        },
        "ambiente": {
            "max": 1,
            "op": [
                "1",
                "2"
            ],
            "t": "texto"
        },
        "certificado_b64": {
            "n": 1,
            "t": "texto"
        },
        "certificado_pass_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "certificado_vence": {
            "n": 1,
            "t": "fecha"
        },
        "contribuyente_especial": {
            "max": 13,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "dia_maximo_pago": {
            "n": 1,
            "t": "entero"
        },
        "dir_establecimiento": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "dir_matriz": {
            "max": 300,
            "t": "texto"
        },
        "email": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "email_from": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "email_from_name": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "establecimiento": {
            "max": 3,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "logo_b64": {
            "n": 1,
            "t": "texto"
        },
        "meses_desplazado": {
            "n": 1,
            "t": "entero"
        },
        "nombre_comercial": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "obligado_contabilidad": {
            "t": "bool"
        },
        "plantilla_info_adicional": {
            "n": 1,
            "t": "texto"
        },
        "punto_emision": {
            "max": 3,
            "t": "texto"
        },
        "razon_social": {
            "max": 300,
            "t": "texto"
        },
        "regimen_microempresas": {
            "n": 1,
            "t": "bool"
        },
        "ruc": {
            "max": 13,
            "t": "texto"
        },
        "smtp_host": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "smtp_pass_encrypted": {
            "n": 1,
            "t": "texto"
        },
        "smtp_port": {
            "n": 1,
            "t": "entero"
        },
        "smtp_secure": {
            "n": 1,
            "t": "bool"
        },
        "smtp_user": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "tipo_emision": {
            "max": 1,
            "t": "texto"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "sri_secuenciales_libres": {
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "document_id": {
            "n": 1,
            "t": "uuid"
        },
        "establecimiento": {
            "max": 3,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "motivo": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "t": "entero"
        },
        "punto_emision": {
            "max": 3,
            "t": "texto"
        },
        "tipo_doc": {
            "max": 2,
            "t": "texto"
        }
    },
    "sri_sequences": {
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "establecimiento": {
            "max": 3,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "punto_emision": {
            "max": 3,
            "t": "texto"
        },
        "tipo_doc": {
            "max": 2,
            "t": "texto"
        },
        "ultimo_numero": {
            "t": "entero"
        }
    },
    "stock_minimos": {
        "almacen_id": {
            "t": "uuid"
        },
        "articulo_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "entero"
        },
        "minimo": {
            "dec": 2,
            "dig": 12,
            "t": "decimal"
        },
        "reponer": {
            "dec": 2,
            "dig": 12,
            "n": 1,
            "t": "decimal"
        }
    },
    "subredes": {
        "activo": {
            "t": "bool"
        },
        "cidr": {
            "max": 50,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "dns1": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "dns2": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "gateway": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 100,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "pool_router": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "proposito": {
            "max": 20,
            "op": [
                "abonados",
                "gestion_onu",
                "wan_onu"
            ],
            "t": "texto"
        },
        "punto_id": {
            "n": 1,
            "t": "uuid"
        },
        "rango_desde": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "rango_hasta": {
            "max": 50,
            "n": 1,
            "t": "texto"
        },
        "router_id": {
            "n": 1,
            "t": "uuid"
        },
        "tipo": {
            "max": 15,
            "op": [
                "estatica",
                "pool_pppoe",
                "cgnat",
                "nodos"
            ],
            "t": "texto"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        },
        "vlan": {
            "n": 1,
            "t": "entero"
        }
    },
    "tecnicos": {
        "activo": {
            "t": "bool"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "email": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "especialidad": {
            "max": 20,
            "op": [
                "ftth",
                "wireless",
                "ambas"
            ],
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "nombre": {
            "max": 150,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "user_id": {
            "max": 64,
            "n": 1,
            "t": "texto"
        }
    },
    "ticket_adjuntos": {
        "clave_idempotencia": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "descripcion": {
            "max": 200,
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "ruta": {
            "t": "texto"
        },
        "ticket_id": {
            "t": "uuid"
        },
        "tipo": {
            "max": 20,
            "op": [
                "foto",
                "potencia",
                "antes",
                "despues",
                "otro"
            ],
            "t": "texto"
        }
    },
    "ticket_comentarios": {
        "autor_id": {
            "n": 1,
            "t": "entero"
        },
        "created_at": {
            "t": "momento"
        },
        "cuerpo": {
            "t": "texto"
        },
        "es_interno": {
            "t": "bool"
        },
        "id": {
            "t": "uuid"
        },
        "ticket_id": {
            "t": "uuid"
        },
        "updated_at": {
            "t": "momento"
        }
    },
    "ticket_eventos": {
        "clave_idempotencia": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "estado_anterior": {
            "max": 15,
            "n": 1,
            "t": "texto"
        },
        "estado_nuevo": {
            "max": 15,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "nota": {
            "n": 1,
            "t": "texto"
        },
        "ticket_id": {
            "t": "uuid"
        }
    },
    "tickets": {
        "antena_modelo": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "canton": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "cerrado_at": {
            "n": 1,
            "t": "momento"
        },
        "cerrado_por": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "checklist": {
            "t": "json"
        },
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "cpe_ip": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "created_by": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "cuadrilla_id": {
            "n": 1,
            "t": "uuid"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "direccion": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "email": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 15,
            "op": [
                "abierto",
                "asignado",
                "en_ruta",
                "en_proceso",
                "resuelto",
                "cancelado"
            ],
            "t": "texto"
        },
        "fecha_visita": {
            "n": 1,
            "t": "fecha"
        },
        "firma_b64": {
            "n": 1,
            "t": "texto"
        },
        "firmante_cedula": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "firmante_nombre": {
            "max": 150,
            "n": 1,
            "t": "texto"
        },
        "franja": {
            "max": 10,
            "n": 1,
            "op": [
                "manana",
                "tarde",
                "exacta"
            ],
            "t": "texto"
        },
        "frecuencia": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "hora_visita": {
            "n": 1,
            "t": "hora"
        },
        "id": {
            "t": "uuid"
        },
        "identificacion": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "latitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "llegada_at": {
            "n": 1,
            "t": "momento"
        },
        "llegada_lat": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "llegada_lng": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "llegada_precision_m": {
            "dec": 1,
            "dig": 8,
            "n": 1,
            "t": "decimal"
        },
        "longitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "material_usado": {
            "n": 1,
            "t": "texto"
        },
        "motivo_cancelacion": {
            "n": 1,
            "t": "texto"
        },
        "nap_id": {
            "n": 1,
            "t": "uuid"
        },
        "nombre": {
            "max": 150,
            "t": "texto"
        },
        "numero": {
            "n": 1,
            "t": "entero"
        },
        "ont_modelo": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "ont_serie": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "potencia_dbm": {
            "dec": 2,
            "dig": 6,
            "n": 1,
            "t": "decimal"
        },
        "prioridad": {
            "max": 10,
            "op": [
                "alta",
                "media",
                "baja"
            ],
            "t": "texto"
        },
        "puerto_nap": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "referencia": {
            "n": 1,
            "t": "texto"
        },
        "salida_at": {
            "n": 1,
            "t": "momento"
        },
        "sector": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "senal_dbm": {
            "dec": 2,
            "dig": 6,
            "n": 1,
            "t": "decimal"
        },
        "solucion": {
            "n": 1,
            "t": "texto"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "tecnologia": {
            "max": 10,
            "op": [
                "ftth",
                "wireless"
            ],
            "t": "texto"
        },
        "telefono": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "telefono_whatsapp": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "tipo_incidencia": {
            "max": 40,
            "t": "texto"
        },
        "torre_id": {
            "n": 1,
            "t": "uuid"
        },
        "updated_at": {
            "n": 1,
            "t": "momento"
        }
    },
    "tipos_ont": {
        "canales": {
            "t": "json"
        },
        "capacidad": {
            "max": 20,
            "op": [
                "bridging",
                "bridging_routing"
            ],
            "t": "texto"
        },
        "catv": {
            "t": "entero"
        },
        "created_at": {
            "n": 1,
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "imagen_url": {
            "n": 1,
            "t": "texto"
        },
        "marca": {
            "max": 50,
            "t": "texto"
        },
        "modelo": {
            "max": 50,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "parametros": {
            "n": 1,
            "t": "json"
        },
        "perfil_default_id": {
            "n": 1,
            "t": "uuid"
        },
        "perfiles_propios": {
            "t": "bool"
        },
        "pon_tipo": {
            "max": 10,
            "op": [
                "GPON",
                "EPON"
            ],
            "t": "texto"
        },
        "prefijo_eth": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "prefijo_voip": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "prefijo_wifi": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "puertos_ethernet": {
            "n": 1,
            "t": "entero"
        },
        "puertos_fxs": {
            "n": 1,
            "t": "entero"
        },
        "soporta_tr069": {
            "n": 1,
            "t": "bool"
        },
        "updated_at": {
            "t": "momento"
        },
        "vendor_id": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "version_spec": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "wifi": {
            "n": 1,
            "t": "bool"
        },
        "wifi_ssids": {
            "t": "entero"
        }
    },
    "traslados": {
        "baja_at": {
            "n": 1,
            "t": "momento"
        },
        "baja_detalle": {
            "n": 1,
            "t": "texto"
        },
        "cerrado_en": {
            "n": 1,
            "t": "momento"
        },
        "cliente_id": {
            "t": "uuid"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "direccion_anterior": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "direccion_nueva": {
            "max": 300,
            "n": 1,
            "t": "texto"
        },
        "estado": {
            "max": 12,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "instalacion_id": {
            "n": 1,
            "t": "uuid"
        },
        "ip_anterior": {
            "max": 45,
            "n": 1,
            "t": "texto"
        },
        "latitud_anterior": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "latitud_nueva": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "longitud_anterior": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "longitud_nueva": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "motivo": {
            "n": 1,
            "t": "texto"
        },
        "nap_anterior_id": {
            "n": 1,
            "t": "uuid"
        },
        "olt_anterior_id": {
            "n": 1,
            "t": "uuid"
        },
        "onu_anterior_id": {
            "n": 1,
            "t": "uuid"
        },
        "onu_index_anterior": {
            "n": 1,
            "t": "entero"
        },
        "pendiente_baja": {
            "t": "bool"
        },
        "puerto_anterior": {
            "n": 1,
            "t": "entero"
        },
        "puerto_nap_anterior": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "router_anterior_id": {
            "n": 1,
            "t": "uuid"
        },
        "slot_anterior": {
            "n": 1,
            "t": "entero"
        },
        "sn_anterior": {
            "max": 60,
            "n": 1,
            "t": "texto"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "vlan_anterior": {
            "n": 1,
            "t": "entero"
        }
    },
    "usuario_dispositivos": {
        "accesos": {
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "ip": {
            "max": 45,
            "t": "texto"
        },
        "primera_vez": {
            "t": "momento"
        },
        "ultima_vez": {
            "t": "momento"
        },
        "user_agent": {
            "n": 1,
            "t": "texto"
        },
        "usuario_id": {
            "t": "uuid"
        }
    },
    "usuarios_sistema": {
        "activo": {
            "t": "bool"
        },
        "actualizado_en": {
            "t": "momento"
        },
        "apellido": {
            "max": 60,
            "t": "texto"
        },
        "auth_id": {
            "max": 64,
            "n": 1,
            "t": "texto"
        },
        "celular": {
            "max": 30,
            "n": 1,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "creado_por": {
            "n": 1,
            "t": "uuid"
        },
        "dos_factores": {
            "t": "bool"
        },
        "email": {
            "max": 120,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 60,
            "t": "texto"
        },
        "permisos": {
            "t": "json"
        },
        "rol": {
            "max": 20,
            "op": [
                "super_admin",
                "admin",
                "finanzas",
                "cobrador",
                "cajero",
                "vendedor",
                "supervisor",
                "tecnico",
                "bodega",
                "recaudacion"
            ],
            "t": "texto"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        },
        "todas_las_zonas": {
            "t": "bool"
        },
        "ultimo_acceso": {
            "n": 1,
            "t": "momento"
        },
        "usuario": {
            "max": 40,
            "t": "texto"
        }
    },
    "vehiculos": {
        "activo": {
            "t": "bool"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 60,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "placa": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "tecnico_id": {
            "n": 1,
            "t": "uuid"
        }
    },
    "ventanas_whatsapp": {
        "client_id": {
            "n": 1,
            "t": "uuid"
        },
        "created_at": {
            "t": "momento"
        },
        "mensajes": {
            "t": "entero"
        },
        "telefono": {
            "max": 20,
            "t": "texto"
        },
        "ultimo_entrante": {
            "t": "momento"
        },
        "ultimo_texto": {
            "max": 300,
            "n": 1,
            "t": "texto"
        }
    },
    "verificaciones_cobertura": {
        "capacidad": {
            "n": 1,
            "t": "entero"
        },
        "creado_en": {
            "t": "momento"
        },
        "direccion": {
            "t": "texto"
        },
        "disponibles": {
            "n": 1,
            "t": "entero"
        },
        "distancia_m": {
            "n": 1,
            "t": "entero"
        },
        "id": {
            "t": "uuid"
        },
        "latitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "longitud": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "nap_id": {
            "n": 1,
            "t": "uuid"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "olt_id": {
            "n": 1,
            "t": "uuid"
        },
        "prospecto_id": {
            "n": 1,
            "t": "uuid"
        },
        "puerto_nap": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "puerto_pon": {
            "max": 20,
            "n": 1,
            "t": "texto"
        },
        "referencia": {
            "n": 1,
            "t": "texto"
        },
        "resultado": {
            "max": 22,
            "t": "texto"
        },
        "sector": {
            "max": 100,
            "n": 1,
            "t": "texto"
        },
        "tecnologia": {
            "max": 10,
            "t": "texto"
        },
        "verificado_por": {
            "max": 64,
            "n": 1,
            "t": "texto"
        }
    },
    "vlans_olt": {
        "created_at": {
            "t": "momento"
        },
        "descripcion": {
            "n": 1,
            "t": "texto"
        },
        "id": {
            "t": "uuid"
        },
        "olt_id": {
            "t": "uuid"
        },
        "updated_at": {
            "t": "momento"
        },
        "uso": {
            "max": 20,
            "op": [
                "internet",
                "gestion",
                "voip",
                "iptv",
                "otra"
            ],
            "t": "texto"
        },
        "vlan": {
            "t": "entero"
        }
    },
    "zonas_cobertura": {
        "activa": {
            "t": "bool"
        },
        "centro_lat": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "centro_lng": {
            "dec": 7,
            "dig": 10,
            "n": 1,
            "t": "decimal"
        },
        "color": {
            "max": 7,
            "t": "texto"
        },
        "creado_en": {
            "t": "momento"
        },
        "id": {
            "t": "uuid"
        },
        "nombre": {
            "max": 120,
            "t": "texto"
        },
        "notas": {
            "n": 1,
            "t": "texto"
        },
        "poligono": {
            "n": 1,
            "t": "json"
        },
        "radio_m": {
            "n": 1,
            "t": "entero"
        },
        "tecnologia": {
            "max": 10,
            "t": "texto"
        },
        "tipo": {
            "max": 10,
            "t": "texto"
        }
    }
};
const FUNCIONES = {
    "abrir_expediente_al_ganar": {},
    "abrir_gestion_recuperacion": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_dias": {
            "n": 1,
            "t": "entero"
        }
    },
    "abrir_incidencia": {
        "p_id": {
            "n": 1,
            "t": "texto"
        },
        "p_usuario": {
            "n": 1,
            "t": "texto"
        }
    },
    "afectados_por_alcance": {
        "p_alcance": {
            "n": 1,
            "t": "texto"
        },
        "p_manual": {
            "n": 1,
            "t": "json"
        },
        "p_nodo_id": {
            "n": 1,
            "t": "texto"
        },
        "p_olt_id": {
            "n": 1,
            "t": "texto"
        },
        "p_puerto_pon": {
            "n": 1,
            "t": "texto"
        },
        "p_punto_id": {
            "n": 1,
            "t": "texto"
        },
        "p_router_id": {
            "n": 1,
            "t": "texto"
        },
        "p_zona": {
            "n": 1,
            "t": "texto"
        }
    },
    "afectados_por_incidencia": {
        "p_id": {
            "n": 1,
            "t": "texto"
        }
    },
    "agendar_retiro_equipo": {
        "p_cuando": {
            "n": 1,
            "t": "momento"
        },
        "p_nota": {
            "n": 1,
            "t": "texto"
        },
        "p_retiro": {
            "n": 1,
            "t": "texto"
        }
    },
    "alertas_por_enviar": {},
    "alta_copia_aceptacion_anexo2": {},
    "anotar_entrante_whatsapp": {
        "p_client_id": {
            "n": 1,
            "t": "texto"
        },
        "p_cuando": {
            "n": 1,
            "t": "momento"
        },
        "p_telefono": {
            "n": 1,
            "t": "texto"
        },
        "p_texto": {
            "n": 1,
            "t": "texto"
        }
    },
    "anular_comision_venta": {
        "p_motivo": {
            "n": 1,
            "t": "texto"
        },
        "p_venta": {
            "n": 1,
            "t": "texto"
        }
    },
    "aplicar_cobro": {
        "p_activo_servicio": {
            "n": 1,
            "t": "bool"
        },
        "p_client_id": {
            "n": 1,
            "t": "texto"
        },
        "p_comision": {
            "n": 1,
            "t": "decimal"
        },
        "p_created_by": {
            "n": 1,
            "t": "texto"
        },
        "p_cuenta_id": {
            "n": 1,
            "t": "texto"
        },
        "p_factura_id": {
            "n": 1,
            "t": "texto"
        },
        "p_facturar": {
            "n": 1,
            "t": "bool"
        },
        "p_fecha_pago": {
            "n": 1,
            "t": "fecha"
        },
        "p_forma_pago": {
            "n": 1,
            "t": "texto"
        },
        "p_monto": {
            "n": 1,
            "t": "decimal"
        },
        "p_n_transaccion": {
            "n": 1,
            "t": "texto"
        },
        "p_notas": {
            "n": 1,
            "t": "texto"
        },
        "p_solo_servicio": {
            "n": 1,
            "t": "bool"
        }
    },
    "aplicar_movimiento_inventario": {},
    "aplicar_promo_al_cliente": {},
    "aplicar_saldo_a_favor": {
        "p_factura_id": {
            "n": 1,
            "t": "texto"
        }
    },
    "archivar_prospecto_de_instalacion": {},
    "asignar_cobranza": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_dias": {
            "n": 1,
            "t": "entero"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        },
        "p_vendedor": {
            "n": 1,
            "t": "texto"
        }
    },
    "asignar_retiro_a": {
        "p_retiro": {
            "n": 1,
            "t": "texto"
        },
        "p_usuario": {
            "n": 1,
            "t": "texto"
        }
    },
    "asignar_retiro_equipo": {
        "p_retiro": {
            "n": 1,
            "t": "texto"
        },
        "p_tecnico": {
            "n": 1,
            "t": "texto"
        }
    },
    "asignar_retiros_equipo": {
        "p_retiros": {
            "n": 1,
            "t": "json"
        },
        "p_usuario": {
            "n": 1,
            "t": "texto"
        }
    },
    "audit_actor": {},
    "audit_cambios": {},
    "auditar_cambio_comisiones": {},
    "avisar_bienvenida": {},
    "avisar_del_ticket": {},
    "avisar_ficha_por_cerrar": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        }
    },
    "avisar_fichas_por_cerrar": {},
    "avisar_pago_recibido": {},
    "avisar_respuesta_de_ticket": {},
    "avisar_stock_bajo": {},
    "bono_de_calidad": {
        "p_calidad": {
            "n": 1,
            "t": "decimal"
        },
        "p_esquema": {
            "n": 1,
            "t": "texto"
        }
    },
    "cajas_del_usuario": {
        "p_auth": {
            "n": 1,
            "t": "texto"
        }
    },
    "cartera_completa": {},
    "cerrar_ficha_por_retiro": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        },
        "p_nota": {
            "n": 1,
            "t": "texto"
        }
    },
    "cerrar_periodo_comisiones": {
        "p_forzar": {
            "n": 1,
            "t": "bool"
        },
        "p_periodo": {
            "n": 1,
            "t": "fecha"
        },
        "p_vendedor": {
            "n": 1,
            "t": "texto"
        }
    },
    "cerrar_retiro_equipo": {
        "p_almacen": {
            "n": 1,
            "t": "texto"
        },
        "p_firma": {
            "n": 1,
            "t": "texto"
        },
        "p_firmante": {
            "n": 1,
            "t": "texto"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        },
        "p_observacion": {
            "n": 1,
            "t": "texto"
        },
        "p_recuperado": {
            "n": 1,
            "t": "bool"
        },
        "p_retiro": {
            "n": 1,
            "t": "texto"
        },
        "p_serie": {
            "n": 1,
            "t": "texto"
        }
    },
    "clientes_de_nodo": {
        "p_nodo": {
            "n": 1,
            "t": "texto"
        }
    },
    "cobertura_cercana": {
        "p_lat": {
            "n": 1,
            "t": "decimal"
        },
        "p_limite": {
            "n": 1,
            "t": "entero"
        },
        "p_lng": {
            "n": 1,
            "t": "decimal"
        },
        "p_tecnologia": {
            "n": 1,
            "t": "texto"
        }
    },
    "comision_de_periodo": {
        "p_periodo": {
            "n": 1,
            "t": "fecha"
        },
        "p_vendedor": {
            "n": 1,
            "t": "texto"
        }
    },
    "confirmar_pago_reportado": {
        "p_cuenta_id": {
            "n": 1,
            "t": "texto"
        },
        "p_id": {
            "n": 1,
            "t": "texto"
        },
        "p_usuario": {
            "n": 1,
            "t": "texto"
        }
    },
    "consolida_cobros": {},
    "convertir_cotizacion_en_prospecto": {
        "p_cotizacion": {
            "n": 1,
            "t": "texto"
        }
    },
    "copiar_modelo_a_prestador": {
        "p_prestador": {
            "n": 1,
            "t": "texto"
        }
    },
    "copiar_numero_orden": {},
    "crear_almacen_del_tecnico": {},
    "crear_entrega_inventario": {
        "p_equipos": {
            "n": 1,
            "t": "json"
        },
        "p_firma": {
            "n": 1,
            "t": "texto"
        },
        "p_notas": {
            "n": 1,
            "t": "texto"
        }
    },
    "dar_de_baja_cliente": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        },
        "p_nota": {
            "n": 1,
            "t": "texto"
        }
    },
    "detectar_alertas": {},
    "detectar_reactivaciones": {
        "p_desde": {
            "n": 1,
            "t": "fecha"
        }
    },
    "dias_de_atraso": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_hasta": {
            "n": 1,
            "t": "fecha"
        }
    },
    "documento_de_identidad": {
        "p_categoria": {
            "n": 1,
            "t": "texto"
        }
    },
    "documento_reemplaza_al_anterior": {},
    "documentos_pasan_al_abonado": {},
    "enviar_expediente_a_instalaciones": {
        "p_expediente": {
            "n": 1,
            "t": "texto"
        }
    },
    "esquema_comisiones_vigente": {
        "p_fecha": {
            "n": 1,
            "t": "fecha"
        }
    },
    "evaluar_cohortes": {
        "p_cohorte": {
            "n": 1,
            "t": "fecha"
        },
        "p_vendedor": {
            "n": 1,
            "t": "texto"
        }
    },
    "evaluar_cohortes_de_cliente": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        }
    },
    "fecha_de_corte": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        }
    },
    "finalizar_alta_instalacion": {
        "p_instalacion_id": {
            "n": 1,
            "t": "texto"
        }
    },
    "firma_actualiza_contrato": {},
    "firma_manual_requiere_autorizacion": {},
    "generar_comisiones": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        }
    },
    "generar_retiros_equipo": {},
    "incidencia_activa_de": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        }
    },
    "iniciar_traslado": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_direccion": {
            "n": 1,
            "t": "texto"
        },
        "p_fecha": {
            "n": 1,
            "t": "fecha"
        },
        "p_latitud": {
            "n": 1,
            "t": "decimal"
        },
        "p_longitud": {
            "n": 1,
            "t": "decimal"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        },
        "p_referencia": {
            "n": 1,
            "t": "texto"
        },
        "p_tecnico": {
            "n": 1,
            "t": "texto"
        }
    },
    "instalacion_actualiza_cliente": {},
    "limpiar_reconexiones_vencidas": {},
    "marcar_cambio_de_estado": {},
    "meses_de_atraso": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_hasta": {
            "n": 1,
            "t": "fecha"
        }
    },
    "meses_sin_pago": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_hasta": {
            "n": 1,
            "t": "fecha"
        }
    },
    "mi_legajo": {},
    "mi_legajo_id": {},
    "mi_tecnico_id": {},
    "mis_clientes_visibles": {},
    "mover_periodo_comisiones": {
        "p_destino": {
            "n": 1,
            "t": "texto"
        },
        "p_nota": {
            "n": 1,
            "t": "texto"
        },
        "p_periodo_id": {
            "n": 1,
            "t": "texto"
        }
    },
    "nivel_comision": {
        "p_esquema": {
            "n": 1,
            "t": "texto"
        },
        "p_ventas": {
            "n": 1,
            "t": "entero"
        }
    },
    "nodos_de_cliente": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        }
    },
    "notificar": {
        "p_detalle": {
            "n": 1,
            "t": "texto"
        },
        "p_entidad": {
            "n": 1,
            "t": "texto"
        },
        "p_entidad_id": {
            "n": 1,
            "t": "texto"
        },
        "p_ruta": {
            "n": 1,
            "t": "texto"
        },
        "p_tipo": {
            "n": 1,
            "t": "texto"
        },
        "p_titulo": {
            "n": 1,
            "t": "texto"
        },
        "p_usuario": {
            "n": 1,
            "t": "texto"
        }
    },
    "notificar_estado_nodo": {},
    "notificar_expediente_enviado": {},
    "notificar_instalacion": {},
    "onu_resuelve_su_modelo": {},
    "pago_cierra_promesa": {},
    "parametros_tecnicos": {},
    "pedir_reconexion": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        }
    },
    "prestador_hereda_del_sri": {},
    "primera_ip_libre": {
        "p_subred": {
            "n": 1,
            "t": "texto"
        }
    },
    "proteger_plantillas_del_sistema": {},
    "puede_autorizar_firma_manual": {},
    "puede_configurar_alertas": {},
    "puede_configurar_comisiones": {},
    "puede_gestionar_retiros": {},
    "puede_operar_red": {},
    "puede_ver_monitoreo": {},
    "puede_ver_red": {},
    "quien_es_la_onu": {
        "p_onu": {
            "n": 1,
            "t": "texto"
        }
    },
    "quien_tiene_la_ip": {
        "p_excluir": {
            "n": 1,
            "t": "texto"
        },
        "p_ip": {
            "n": 1,
            "t": "texto"
        },
        "p_router": {
            "n": 1,
            "t": "texto"
        }
    },
    "racha_de_ventas": {
        "p_vendedor": {
            "n": 1,
            "t": "texto"
        }
    },
    "rechazar_pago_reportado": {
        "p_id": {
            "n": 1,
            "t": "texto"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        },
        "p_usuario": {
            "n": 1,
            "t": "texto"
        }
    },
    "recibir_entrega_inventario": {
        "p_almacen": {
            "n": 1,
            "t": "texto"
        },
        "p_entrega": {
            "n": 1,
            "t": "texto"
        },
        "p_firma": {
            "n": 1,
            "t": "texto"
        },
        "p_notas": {
            "n": 1,
            "t": "texto"
        }
    },
    "reconectar_al_pagar": {},
    "reconectar_al_prometer": {},
    "recordar_retiros_agendados": {
        "p_horas": {
            "n": 1,
            "t": "entero"
        }
    },
    "reemplazar_equipo_cliente": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_destino": {
            "n": 1,
            "t": "texto"
        },
        "p_detalle": {
            "n": 1,
            "t": "texto"
        },
        "p_instalacion": {
            "n": 1,
            "t": "texto"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        },
        "p_serie_nueva": {
            "n": 1,
            "t": "texto"
        },
        "p_ticket": {
            "n": 1,
            "t": "texto"
        }
    },
    "registrar_alta_olt": {},
    "registrar_cambio_olt": {},
    "registrar_chequeo_nodo": {
        "p_detalle": {
            "n": 1,
            "t": "texto"
        },
        "p_estado": {
            "n": 1,
            "t": "texto"
        },
        "p_latencia": {
            "n": 1,
            "t": "decimal"
        },
        "p_nodo_id": {
            "n": 1,
            "t": "texto"
        },
        "p_perdida": {
            "n": 1,
            "t": "entero"
        }
    },
    "registrar_gestion_cobranza": {
        "p_asignacion": {
            "n": 1,
            "t": "texto"
        },
        "p_canal": {
            "n": 1,
            "t": "texto"
        },
        "p_observacion": {
            "n": 1,
            "t": "texto"
        },
        "p_promesa_fecha": {
            "n": 1,
            "t": "fecha"
        },
        "p_promesa_monto": {
            "n": 1,
            "t": "decimal"
        },
        "p_resultado": {
            "n": 1,
            "t": "texto"
        }
    },
    "registrar_intento_retiro": {
        "p_foto": {
            "n": 1,
            "t": "texto"
        },
        "p_observacion": {
            "n": 1,
            "t": "texto"
        },
        "p_resultado": {
            "n": 1,
            "t": "texto"
        },
        "p_retiro": {
            "n": 1,
            "t": "texto"
        }
    },
    "resolver_incidencia": {
        "p_id": {
            "n": 1,
            "t": "texto"
        },
        "p_usuario": {
            "n": 1,
            "t": "texto"
        }
    },
    "saldar_deuda_equipo": {
        "p_cliente": {
            "n": 1,
            "t": "texto"
        },
        "p_nota": {
            "n": 1,
            "t": "texto"
        }
    },
    "sellar_activacion": {},
    "sellar_ganado": {},
    "sincronizar_cobranza_comercial": {},
    "sincronizar_corte_del_abonado": {},
    "sincronizar_tarifa_preferencial": {},
    "sri_liberar_secuencial": {
        "p_document_id": {
            "n": 1,
            "t": "texto"
        },
        "p_motivo": {
            "n": 1,
            "t": "texto"
        }
    },
    "sri_next_secuencial": {
        "p_estab": {
            "n": 1,
            "t": "texto"
        },
        "p_pto": {
            "n": 1,
            "t": "texto"
        },
        "p_tipo": {
            "n": 1,
            "t": "texto"
        }
    },
    "sumar_consumo": {
        "p_bajada": {
            "n": 1,
            "t": "entero"
        },
        "p_client_id": {
            "n": 1,
            "t": "texto"
        },
        "p_estado": {
            "n": 1,
            "t": "texto"
        },
        "p_fecha": {
            "n": 1,
            "t": "fecha"
        },
        "p_fuente": {
            "n": 1,
            "t": "texto"
        },
        "p_subida": {
            "n": 1,
            "t": "entero"
        }
    },
    "ticket_registra_estado": {},
    "ticket_sella_tiempos": {},
    "tiene_permiso_comision": {
        "p_clave": {
            "n": 1,
            "t": "texto"
        }
    },
    "tocar_updated_at": {},
    "totales_transacciones": {
        "p_anulados": {
            "n": 1,
            "t": "bool"
        },
        "p_cuenta": {
            "n": 1,
            "t": "texto"
        },
        "p_desde": {
            "n": 1,
            "t": "fecha"
        },
        "p_forma_pago": {
            "n": 1,
            "t": "texto"
        },
        "p_hasta": {
            "n": 1,
            "t": "fecha"
        },
        "p_operador": {
            "n": 1,
            "t": "texto"
        },
        "p_router": {
            "n": 1,
            "t": "texto"
        },
        "p_ubicacion": {
            "n": 1,
            "t": "texto"
        }
    },
    "traslado_se_cancela": {},
    "traslado_se_cierra": {},
    "validar_cobro_de_recaudacion": {},
    "validar_cuenta_del_pago": {},
    "validar_solicitud": {
        "p_estado": {
            "n": 1,
            "t": "texto"
        },
        "p_interno": {
            "n": 1,
            "t": "texto"
        },
        "p_prospecto": {
            "n": 1,
            "t": "texto"
        },
        "p_publico": {
            "n": 1,
            "t": "texto"
        }
    },
    "valor_del_prospecto": {
        "p_precio_lista": {
            "n": 1,
            "t": "decimal"
        },
        "p_prospecto": {
            "n": 1,
            "t": "texto"
        }
    },
    "ve_comisiones_de_todos": {},
    "ve_todo_el_equipo": {},
    "vencer_firmas_pendientes": {},
    "vendedor_de_instalacion": {
        "p_instalacion": {
            "n": 1,
            "t": "texto"
        }
    },
    "verificar_comisiones": {},
    "zona_horaria": {}
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/validacion/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validación con Zod de todo lo que el dashboard guarda.
 *
 * Se engancha en djangoClient: cada insert / update / upsert sobre una tabla
 * pasa por `validarDatos` antes de salir. Si algo no cumple, el pedido no se
 * manda y la pantalla recibe un error como los de la API —con `message`,
 * `hint` y, además, `campos` ({columna: mensaje})—, así que todos los
 * formularios lo muestran sin cambiar nada.
 *
 * Qué se valida, por columna:
 *  - el tipo, el largo máximo, los decimales y los valores permitidos, tal como
 *    los define la base (tablas.generado.js, que sale de los modelos);
 *  - que no venga null en una columna que no lo admite;
 *  - las reglas de negocio por nombre de columna (reglas.js): cédula, teléfono,
 *    correo, IP, red, MAC, coordenadas, montos, porcentajes, días, VLAN.
 *
 * Además limpia: un '' en una columna que no es de texto (número, fecha, uuid)
 * se manda como null, que es lo que significa en un formulario.
 */ __turbopack_context__.s([
    "errorDeValidacion",
    ()=>errorDeValidacion,
    "esquemaDeFuncion",
    ()=>esquemaDeFuncion,
    "esquemaDeTabla",
    ()=>esquemaDeTabla,
    "etiqueta",
    ()=>etiqueta,
    "validarArgumentos",
    ()=>validarArgumentos,
    "validarDatos",
    ()=>validarDatos,
    "validarPorNombre",
    ()=>validarPorNombre
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validacion/reglas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$tablas$2e$generado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validacion/tablas.generado.js [app-client] (ecmascript)");
;
;
;
const UUID = /^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/;
// Nombres legibles para los mensajes. Lo que no está se arma solo.
const ETIQUETAS = {
    identificacion: 'Cédula o RUC',
    tipo_identificacion: 'Tipo de identificación',
    telefono: 'Teléfono',
    telefono_movil: 'Celular',
    telefono_whatsapp: 'WhatsApp',
    email: 'Correo',
    direccion: 'Dirección',
    ip: 'IP',
    mac_address: 'MAC',
    mac: 'MAC',
    cidr: 'Red',
    gateway: 'Gateway',
    dns1: 'DNS 1',
    dns2: 'DNS 2',
    rango_desde: 'Inicio del rango',
    rango_hasta: 'Fin del rango',
    latitud: 'Latitud',
    longitud: 'Longitud',
    precio: 'Precio',
    precio_mensual: 'Precio mensual',
    monto: 'Monto',
    total: 'Total',
    subtotal: 'Subtotal',
    dia_facturacion: 'Día de facturación',
    dia_pago: 'Día de pago',
    vlan: 'VLAN',
    nombre: 'Nombre',
    ruc: 'RUC',
    razon_social: 'Razón social',
    placa: 'Placa',
    usuario_ppp: 'Usuario PPPoE',
    ip_administracion: 'IP de administración'
};
function etiqueta(columna) {
    if (ETIQUETAS[columna]) return ETIQUETAS[columna];
    const base = columna.replace(/_id$/, '').replace(/_/g, ' ');
    return base.charAt(0).toUpperCase() + base.slice(1);
}
const vacio = (v)=>v === null || v === undefined || typeof v === 'string' && v.trim() === '';
const aNumero = (v)=>typeof v === 'string' && v.trim() !== '' ? Number(v) : v;
/** El esquema de Zod del TIPO de una columna (sin la regla de negocio). */ function esquemaDeTipo(meta) {
    switch(meta.t){
        case 'uuid':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(UUID, 'no es un identificador válido');
        case 'entero':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(aNumero, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
                error: 'tiene que ser un número'
            }).int('tiene que ser un número entero'));
        case 'decimal':
            {
                let n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
                    error: 'tiene que ser un número'
                });
                if (meta.dig != null) {
                    var _meta_dec;
                    const tope = 10 ** (meta.dig - ((_meta_dec = meta.dec) !== null && _meta_dec !== void 0 ? _meta_dec : 0));
                    n = n.refine((v)=>Math.abs(v) < tope, "es demasiado grande (máximo ".concat(tope - 1, ")"));
                }
                if (meta.dec != null) {
                    n = n.refine((v)=>Number.isInteger(Math.round(v * 10 ** meta.dec * 1e6) / 1e6), "admite hasta ".concat(meta.dec, " decimales"));
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(aNumero, n);
            }
        case 'bool':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((v)=>v === 'true' ? true : v === 'false' ? false : v, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean({
                error: 'tiene que ser sí o no'
            }));
        case 'fecha':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{4}-\d{2}-\d{2}/, 'no es una fecha válida').refine((v)=>!Number.isNaN(new Date(v.slice(0, 10)).getTime()), 'no es una fecha válida');
        case 'momento':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((v)=>v instanceof Date ? v.toISOString() : v, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((v)=>!Number.isNaN(new Date(v).getTime()), 'no es una fecha y hora válida'));
        case 'hora':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{2}:\d{2}/, 'no es una hora válida (ejemplo: 14:30)');
        case 'json':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any();
        default:
            {
                let s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((v)=>typeof v === 'number' ? String(v) : v, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string({
                    error: 'tiene que ser texto'
                }));
                if (meta.max) s = s.refine((v)=>v.length <= meta.max, "admite hasta ".concat(meta.max, " caracteres"));
                return s;
            }
    }
}
/** Tipo + valores permitidos + regla de negocio (por el nombre, sin el `p_` de las RPC). */ function esquemaDeColumna(col, meta) {
    let esquema = esquemaDeTipo(meta);
    if (meta.op) {
        const permitidos = meta.op;
        esquema = esquema.refine((v)=>permitidos.includes(String(v)), "no es una opción válida (".concat(permitidos.join(', '), ")"));
    }
    const regla = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reglaDe"])(col.replace(/^p_/, ''));
    if (regla && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESQUEMAS"][regla]) {
        const deNegocio = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESQUEMAS"][regla];
        esquema = esquema.superRefine((v, ctx)=>{
            const r = deNegocio.safeParse(typeof v === 'number' ? regla === 'telefono' ? String(v) : v : v);
            if (!r.success) ctx.addIssue({
                code: 'custom',
                message: r.error.issues[0].message
            });
        });
    }
    return {
        meta,
        esquema
    };
}
const CACHE = new Map();
function armar(clave, definicion) {
    if (!definicion) return null;
    if (!CACHE.has(clave)) {
        CACHE.set(clave, Object.fromEntries(Object.entries(definicion).map((param)=>{
            let [col, meta] = param;
            return [
                col,
                esquemaDeColumna(col, meta)
            ];
        })));
    }
    return CACHE.get(clave);
}
function esquemaDeTabla(tabla) {
    return armar("tabla:".concat(tabla), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$tablas$2e$generado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLAS"][tabla]);
}
function esquemaDeFuncion(funcion) {
    return armar("rpc:".concat(funcion), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$tablas$2e$generado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FUNCIONES"][funcion]);
}
/** Valida un objeto {campo: valor} contra sus esquemas; devuelve la copia limpia y los errores. */ function validarFila(columnas, fila, modo, nombre, errores) {
    if (typeof fila !== 'object' || fila === null) return fila;
    const limpia = {
        ...fila
    };
    for (const [col, valor] of Object.entries(fila)){
        const def = columnas[col];
        if (!def || valor === undefined) continue; // lo que no es de la tabla lo rechaza el backend
        const { meta, esquema } = def;
        if (vacio(valor)) {
            // '' en un número, una fecha o un uuid es "no hay dato": va como null.
            if (meta.t !== 'texto' && meta.t !== 'json') limpia[col] = null;
            if (limpia[col] === null && !meta.n) errores.push({
                campo: col,
                mensaje: "".concat(nombre(col), " no puede quedar vacío")
            });
            continue;
        }
        const r = esquema.safeParse(valor);
        if (!r.success) {
            errores.push({
                campo: col,
                mensaje: "".concat(nombre(col), " ").concat(r.error.issues[0].message)
            });
            continue;
        }
        if (modo === 'crear') {
            const extra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reglaAlCrear"])(col, valor);
            if (extra) errores.push({
                campo: col,
                mensaje: "".concat(nombre(col), " ").concat(extra)
            });
        }
    }
    return limpia;
}
function validarDatos(tabla, datos) {
    let modo = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'crear';
    const columnas = esquemaDeTabla(tabla);
    if (!columnas || datos == null) return {
        ok: true,
        datos
    };
    const filas = Array.isArray(datos) ? datos : [
        datos
    ];
    const errores = [];
    const limpias = filas.map((fila)=>validarFila(columnas, fila, modo, etiqueta, errores));
    if (errores.length) return {
        ok: false,
        errores
    };
    return {
        ok: true,
        datos: Array.isArray(datos) ? limpias : limpias[0]
    };
}
function validarArgumentos(funcion, args) {
    const parametros = esquemaDeFuncion(funcion);
    if (!parametros || args == null || typeof args !== 'object' || Array.isArray(args)) return {
        ok: true,
        datos: args
    };
    const errores = [];
    const limpios = validarFila(parametros, args, 'rpc', (p)=>etiqueta(p.replace(/^p_/, '')), errores);
    return errores.length ? {
        ok: false,
        errores
    } : {
        ok: true,
        datos: limpios
    };
}
function validarPorNombre(datos) {
    if (datos == null || typeof datos !== 'object') return {
        ok: true,
        datos
    };
    const errores = [];
    for (const [clave, valor] of Object.entries(datos)){
        if (vacio(valor) || typeof valor === 'object') continue;
        const regla = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reglaDe"])(clave);
        if (!regla || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESQUEMAS"][regla]) continue;
        const r = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESQUEMAS"][regla].safeParse(typeof valor === 'number' && regla === 'telefono' ? String(valor) : valor);
        if (!r.success) errores.push({
            campo: clave,
            mensaje: "".concat(etiqueta(clave), " ").concat(r.error.issues[0].message)
        });
    }
    return errores.length ? {
        ok: false,
        errores
    } : {
        ok: true,
        datos
    };
}
function errorDeValidacion(errores) {
    const campos = Object.fromEntries(errores.map((e)=>[
            e.campo,
            e.mensaje
        ]));
    const message = errores.length === 1 ? "".concat(errores[0].mensaje, ".") : "Revisa ".concat(errores.length, " campos: ").concat(errores.map((e)=>e.mensaje).join('; '), ".");
    return {
        message,
        code: 'VALIDACION',
        status: 0,
        hint: 'Corrige el dato y vuelve a guardar. No se envió nada al servidor.',
        campos
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/validacion/enVivo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validación en vivo de cada campo del dashboard.
 *
 * `<Field>` (components/ui) llama a `revisarCampo` al salir del campo y,
 * después, mientras se corrige. Mira tres cosas, en este orden:
 *  1. lo que el navegador ya sabe del control: required, type=email/number,
 *     min, max, maxLength, pattern;
 *  2. la regla de negocio de la columna (reglas.js): por el nombre del campo
 *     (`campo="email"`) o, si no lo tiene, por la etiqueta ("Correo", "Cédula");
 *  3. al escribir una cédula nueva, su dígito verificador.
 *
 * Y cuando un guardado vuelve con errores de validación (djangoClient),
 * `avisarErrores` los reparte entre los campos que están en pantalla y lleva
 * el foco al primero.
 */ __turbopack_context__.s([
    "EVENTO_ERRORES",
    ()=>EVENTO_ERRORES,
    "avisarErrores",
    ()=>avisarErrores,
    "enfocarPrimero",
    ()=>enfocarPrimero,
    "errorParaCampo",
    ()=>errorParaCampo,
    "reglaDelCampo",
    ()=>reglaDelCampo,
    "reglaPorEtiqueta",
    ()=>reglaPorEtiqueta,
    "revisarCampo",
    ()=>revisarCampo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validacion/reglas.js [app-client] (ecmascript)");
;
const EVENTO_ERRORES = 'validacion:errores';
const sinTildes = (s)=>s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
function reglaPorEtiqueta(etiqueta, tipo) {
    const e = sinTildes(etiqueta || '');
    if (!e) return null;
    if (/(^|\s)(correo|e-?mail)\b/.test(e) && !/plantilla|asunto|mensaje/.test(e)) return 'correo';
    if (/^(cedula|identificacion|cedula o ruc|cedula\/ruc|n° de cedula)/.test(e)) return 'identificacion';
    if (/^ruc\b/.test(e)) return 'ruc';
    if (/^(telefono|celular|movil|whatsapp)\b/.test(e) && tipo !== 'number' && !/plantilla|mensaje|via|pausa|numero de envio/.test(e)) return 'telefono';
    if (/^(latitud)\b/.test(e)) return 'latitud';
    if (/^(longitud)\b/.test(e)) return 'longitud';
    if (/^(direccion mac|mac)\b/.test(e)) return 'mac';
    if (/^vlan\b/.test(e)) return 'vlan';
    return null;
}
function reglaDelCampo(param) {
    let { campo, etiqueta, tipo } = param;
    return campo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reglaDe"])(campo) || reglaPorEtiqueta(etiqueta, tipo);
}
function mensajeNativo(el) {
    const v = el.validity;
    if (!v || v.valid) return null;
    if (v.valueMissing) return el.tagName === 'SELECT' ? 'Elige una opción de la lista.' : 'Este campo es obligatorio.';
    if (v.badInput) return 'Tiene que ser un número.';
    if (v.typeMismatch) return el.type === 'email' ? 'No es un correo válido (ejemplo: nombre@correo.com).' : 'El formato no es válido.';
    if (v.rangeUnderflow) return "El mínimo es ".concat(el.min, ".");
    if (v.rangeOverflow) return "El máximo es ".concat(el.max, ".");
    if (v.tooLong) return "Admite hasta ".concat(el.maxLength, " caracteres.");
    if (v.tooShort) return "Necesita al menos ".concat(el.minLength, " caracteres.");
    if (v.patternMismatch) return el.title || 'El formato no es válido.';
    if (v.stepMismatch) return null // 25.5 en un step=1: lo decide el formulario, no es un error de tipeo
    ;
    return null;
}
const mayuscula = (s)=>s.charAt(0).toUpperCase() + s.slice(1);
function revisarCampo(el) {
    let { campo, regla, etiqueta, escrito = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!el || el.disabled || el.readOnly) return null;
    if (el.type === 'checkbox' || el.type === 'radio' || el.type === 'file' || el.type === 'hidden') return null;
    const nativo = mensajeNativo(el);
    if (nativo) return nativo;
    var _el_value;
    const valor = String((_el_value = el.value) !== null && _el_value !== void 0 ? _el_value : '').trim();
    if (!valor) return null;
    const nombre = regla === false ? null : regla || reglaDelCampo({
        campo,
        etiqueta,
        tipo: el.type
    });
    if (nombre && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESQUEMAS"][nombre] && el.tagName !== 'SELECT') {
        const r = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESQUEMAS"][nombre].safeParse(valor);
        if (!r.success) return "".concat(mayuscula(r.error.issues[0].message), ".");
        if (nombre === 'identificacion' && escrito && /^\d{10}$/.test(valor) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$reglas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cedulaValida"])(valor)) {
            return 'No es una cédula válida: el dígito verificador no coincide.';
        }
    }
    return null;
}
function avisarErrores(campos) {
    if ("object" === 'undefined' || !campos) return;
    window.dispatchEvent(new CustomEvent(EVENTO_ERRORES, {
        detail: campos
    }));
    enfocarPrimero();
}
let reloj = null;
function enfocarPrimero() {
    if (typeof document === 'undefined') return;
    clearTimeout(reloj);
    reloj = setTimeout(()=>{
        const primero = document.querySelector('[data-campo-invalido="1"] :is(input, select, textarea)');
        if (primero) {
            var _window_matchMedia, _window;
            primero.focus({
                preventScroll: true
            });
            const quieto = (_window_matchMedia = (_window = window).matchMedia) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.call(_window, '(prefers-reduced-motion: reduce)').matches;
            primero.scrollIntoView({
                block: 'center',
                behavior: quieto ? 'auto' : 'smooth'
            });
        }
    }, 30);
}
function errorParaCampo(campos, param) {
    let { campo, etiqueta } = param;
    if (!campos) return null;
    const claves = campo ? [
        campo,
        "p_".concat(campo)
    ] : [];
    for (const c of claves)if (campos[c]) return campos[c];
    // Sin `campo`: por la etiqueta, que es con la que empieza el mensaje.
    const e = sinTildes(etiqueta || '');
    if (!e) return null;
    for (const mensaje of Object.values(campos)){
        if (sinTildes(mensaje).startsWith("".concat(e, " "))) return mensaje;
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/djangoClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cliente Django REST compatible con la API de Supabase.
 * Permite migrar de Supabase a Django sin cambiar el código del frontend.
 * 
 * Uso:
 * import { django } from './djangoClient'
 * 
 * // Reemplazar:
 * // const { data } = await supabase.from('clientes').select('*')
 * // Por:
 * const { data } = await django.from('clientes').select('*')
 */ __turbopack_context__.s([
    "django",
    ()=>django,
    "djangoConfigurado",
    ()=>djangoConfigurado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validacion/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validacion/enVivo.js [app-client] (ecmascript)");
;
;
/** El error para la pantalla, y cada campo en pantalla marcado con el suyo. */ function rechazar(errores) {
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorDeValidacion"])(errores);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisarErrores"])(error.campos);
    return error;
}
const API_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || 'http://localhost:8000/api/v1';
/** True si el JWT vence en menos de un minuto (o no se puede leer). */ function venceEnBreve(token) {
    try {
        const { exp } = JSON.parse(atob(token.split('.')[1]));
        return !exp || exp * 1000 - Date.now() < 60 * 1000;
    } catch (e) {
        return true;
    }
}
/**
 * fetch a Django con el token vigente.
 *
 * El access token dura una hora. Antes se renovaba con un temporizador de 50
 * minutos contados desde que se abrió la página: si se recargaba a mitad de
 * camino, o la notebook se suspendía, el token vencía antes y todas las
 * consultas fallaban con 401 hasta volver a entrar. Ahora se renueva justo
 * antes de usarlo, y si igual llega un 401 se renueva y se reintenta una vez.
 */ async function fetchConSesion(url) {
    let opciones = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const enviar = async ()=>{
        const token = await django.auth.tokenVigente();
        const headers = {
            ...opciones.headers || {}
        };
        delete headers.Authorization;
        delete headers.authorization;
        if (token) headers.Authorization = "Bearer ".concat(token);
        return fetch(url, {
            ...opciones,
            headers
        });
    };
    let respuesta = await enviar();
    if (respuesta.status === 401 && "object" !== 'undefined' && localStorage.getItem('django_refresh_token')) {
        localStorage.removeItem('django_access_token');
        respuesta = await enviar();
        if (respuesta.status === 401) window.dispatchEvent(new Event('django:sesion-vencida'));
    }
    return respuesta;
}
class DjangoQueryBuilder {
    /**
   * SELECT columns
   * Ej: .select('*') o .select('id,nombre,email')
   *     .select('*', { count: 'exact', head: true }) → solo el total (count)
   */ select() {
        let columns = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '*', { count, head } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.params.set('select', columns);
        if (count === 'exact' || count === true) this.params.set('count', 'exact');
        if (head) this.params.set('head', 'true');
        return this;
    }
    /**
   * Filtros tipo Supabase
   * Ej: .eq('estado', 'activo')
   *     .gt('edad', 18)
   *     .like('nombre', '%Juan%')
   */ eq(column, value) {
        this.params.append(column, "eq.".concat(value));
        return this;
    }
    neq(column, value) {
        this.params.append(column, "neq.".concat(value));
        return this;
    }
    not(column, operator, value) {
        this.params.append(column, "not.".concat(operator, ".").concat(value));
        return this;
    }
    gt(column, value) {
        this.params.append(column, "gt.".concat(value));
        return this;
    }
    gte(column, value) {
        this.params.append(column, "gte.".concat(value));
        return this;
    }
    lt(column, value) {
        this.params.append(column, "lt.".concat(value));
        return this;
    }
    lte(column, value) {
        this.params.append(column, "lte.".concat(value));
        return this;
    }
    like(column, pattern) {
        this.params.append(column, "like.".concat(pattern));
        return this;
    }
    ilike(column, pattern) {
        this.params.append(column, "ilike.".concat(pattern));
        return this;
    }
    is(column, value) {
        this.params.append(column, "is.".concat(value));
        return this;
    }
    in(column, values) {
        this.params.append(column, "in.(".concat(values.join(','), ")"));
        return this;
    }
    /**
   * Condiciones alternativas, como en supabase-js:
   * .or('nombre.ilike.%ana%,identificacion.ilike.%ana%')
   */ or(condiciones) {
        this.params.append('or', "(".concat(condiciones, ")"));
        return this;
    }
    /** .filter('estado', 'in', '(a,b)') — el operador va crudo, como en PostgREST. */ filter(column, operator, value) {
        this.params.append(column, "".concat(operator, ".").concat(value));
        return this;
    }
    /** .match({ estado: 'activo', zona: 'norte' }) → un .eq() por clave. */ match(condiciones) {
        for (const [column, value] of Object.entries(condiciones))this.eq(column, value);
        return this;
    }
    /** Cancela la petición con un AbortController. */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
   * Ordenamiento. Se puede encadenar: .order('a').order('b', { ascending: false })
   */ order(column) {
        let { ascending = true } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const direction = ascending ? 'asc' : 'desc';
        this.params.append('order', "".concat(column, ".").concat(direction));
        return this;
    }
    /**
   * Paginación
   * Ej: .limit(10).range(0, 9)
   */ limit(count) {
        this.params.set('limit', count);
        return this;
    }
    range(from, to) {
        this.params.set('offset', from);
        this.params.set('limit', to - from + 1);
        return this;
    }
    /**
   * INSERT
   * Ej: .insert({ nombre: 'Juan', email: 'juan@example.com' })
   */ insert(data) {
        this.method = 'POST';
        this.body = JSON.stringify(data);
        this._aValidar = {
            datos: data,
            modo: 'crear'
        };
        return this;
    }
    /**
   * UPDATE
   * Ej: .update({ estado: 'activo' }).eq('id', 123)
   */ update(data) {
        this.method = 'PATCH';
        this.body = JSON.stringify(data);
        this._aValidar = {
            datos: data,
            modo: 'editar'
        };
        // Necesitamos el ID para PATCH, se extrae del filtro .eq('id', ...)
        return this;
    }
    /**
   * DELETE
   * Ej: .delete().eq('id', 123)
   */ delete() {
        this.method = 'DELETE';
        return this;
    }
    /**
   * UPSERT (INSERT con conflicto → UPDATE)
   * Ej: .upsert({ id: 1, nombre: 'Juan' })
   */ upsert(data) {
        let { onConflict = 'id' } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        // Django no tiene UPSERT nativo, simular con try INSERT → catch UPDATE
        this.method = 'POST';
        this.body = JSON.stringify({
            ...data,
            _upsert: true,
            _conflict: onConflict
        });
        this._aValidar = {
            datos: data,
            modo: 'crear',
            extra: {
                _upsert: true,
                _conflict: onConflict
            }
        };
        return this;
    }
    /**
   * SINGLE - Retorna un solo registro en vez de array
   * Ej: .select('*').eq('id', 123).single()
   */ single() {
        this._single = 'exacto';
        return this;
    }
    /**
   * Como single(), pero cero filas no es un error: devuelve data = null.
   * Ej: .select('*').eq('identificacion', ced).maybeSingle()
   */ maybeSingle() {
        this._single = 'opcional';
        return this;
    }
    /**
   * Ejecuta la query y retorna { data, error }
   */ async execute() {
        // Zod antes de salir: lo que no cumple no se manda (ver lib/validacion).
        if (this._aValidar) {
            const { datos, modo, extra } = this._aValidar;
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validarDatos"])(this.table, datos, modo);
            if (!r.ok) return {
                data: null,
                error: rechazar(r.errores),
                status: 0
            };
            this.body = JSON.stringify(extra ? {
                ...r.datos,
                ...extra
            } : r.datos);
        }
        try {
            let url = "".concat(API_URL, "/tables/").concat(this.table);
            // Si es UPDATE o DELETE con filtro .eq('id', X), agregar /<id> a la URL
            // Sólo con un único `id=eq.X`: un `in.(...)` o varios filtros por id van
            // por la colección, que el backend sabe filtrar.
            const idParam = this.params.getAll('id').length === 1 ? this.params.get('id') : null;
            if ((this.method === 'PATCH' || this.method === 'DELETE') && (idParam === null || idParam === void 0 ? void 0 : idParam.startsWith('eq.'))) {
                const id = idParam.replace('eq.', '');
                url = "".concat(url, "/").concat(id);
                this.params.delete('id'); // No enviar en query string
            }
            // Agregar query params
            const queryString = this.params.toString();
            if (queryString) {
                url = "".concat(url, "?").concat(queryString);
            }
            const response = await fetchConSesion(url, {
                method: this.method,
                headers: this.headers,
                body: this.body,
                signal: this.signal
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                return {
                    data: null,
                    error: {
                        message: errorData.error || errorData.detail || errorData.message || response.statusText,
                        hint: errorData.hint,
                        // El código de Postgres cuando el backend lo informa (23505 = ya
                        // existe...), que es lo que las pantallas comparan; si no, el HTTP.
                        code: errorData.code || String(response.status),
                        status: response.status,
                        details: errorData
                    },
                    status: response.status
                };
            }
            // DELETE retorna 204 sin body
            if (response.status === 204) {
                return {
                    data: null,
                    error: null
                };
            }
            // El total, cuando se pidió con { count: 'exact' }
            const total = response.headers.get('X-Total-Count');
            const count = total !== null ? Number(total) : null;
            const data = await response.json();
            // .single() exige exactamente una fila; .maybeSingle() acepta cero.
            // Los códigos son los de PostgREST, que es lo que el código ya compara.
            if (this._single && Array.isArray(data)) {
                if (data.length > 1 || data.length === 0 && this._single === 'exacto') {
                    return {
                        data: null,
                        count,
                        error: {
                            message: data.length === 0 ? 'No se encontró el registro' : 'Se esperaba un solo registro y vinieron varios',
                            code: 'PGRST116',
                            details: {
                                filas: data.length
                            }
                        }
                    };
                }
                var _data_;
                return {
                    data: (_data_ = data[0]) !== null && _data_ !== void 0 ? _data_ : null,
                    error: null,
                    count
                };
            }
            return {
                data,
                error: null,
                count
            };
        } catch (err) {
            return {
                data: null,
                error: {
                    message: err.message,
                    code: err.name === 'AbortError' ? 'ABORTED' : 'NETWORK_ERROR',
                    details: err
                }
            };
        }
    }
    /**
   * Hace al builder "await-able". Como supabase-js, NUNCA rechaza por un error
   * de la API: lo devuelve en `error`. Rechazar hacía que
   * `const { data, error } = await ...` lanzara una excepción, y el manejo de
   * `error` de cada pantalla quedaba sin ejecutarse.
   */ then(resolve, reject) {
        return this.execute().then(resolve, reject);
    }
    constructor(table, token){
        this.table = table;
        this.token = token;
        this.params = new URLSearchParams();
        this.method = 'GET';
        this.body = null;
        this.headers = {
            'Content-Type': 'application/json'
        };
        if (token) {
            this.headers['Authorization'] = "Bearer ".concat(token);
        }
    }
}
class DjangoRPC {
    /**
   * Ejecuta una función RPC (stored procedure)
   * Ej: django.rpc('clientes_estadisticas_basicas')
   *     django.rpc('racha_de_ventas', { empleado_id: 5 })
   */ async call(functionName) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        // Mismo criterio que las tablas: con un argumento inválido no sale nada.
        const validacion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validarArgumentos"])(functionName, params);
        if (!validacion.ok) return {
            data: null,
            error: rechazar(validacion.errores)
        };
        var _validacion_datos;
        params = (_validacion_datos = validacion.datos) !== null && _validacion_datos !== void 0 ? _validacion_datos : {};
        try {
            const response = await fetchConSesion("".concat(API_URL, "/rpc/").concat(functionName), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.token && {
                        Authorization: "Bearer ".concat(this.token)
                    }
                },
                body: JSON.stringify(params)
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                var _errorData_details, _errorData_hint;
                // Como supabase-js: el mensaje del RAISE de la función y su código
                // (P0001, 23505...), que es lo que las pantallas muestran y comparan.
                return {
                    data: null,
                    error: {
                        message: errorData.message || errorData.error || response.statusText,
                        code: errorData.code || String(response.status),
                        details: (_errorData_details = errorData.details) !== null && _errorData_details !== void 0 ? _errorData_details : null,
                        hint: (_errorData_hint = errorData.hint) !== null && _errorData_hint !== void 0 ? _errorData_hint : null,
                        status: response.status
                    }
                };
            }
            const data = await response.json();
            return {
                data,
                error: null
            };
        } catch (err) {
            return {
                data: null,
                error: {
                    message: err.message,
                    code: 'NETWORK_ERROR'
                }
            };
        }
    }
    constructor(token){
        this.token = token;
    }
}
class DjangoStorage {
    /**
   * Selecciona un bucket
   * Ej: django.storage.from('avatars')
   */ from(bucket) {
        this.bucket = bucket;
        return this;
    }
    /**
   * Sube un archivo
   * Ej: .upload('users/avatar.jpg', file)
   */ async upload(path, file) {
        let opciones = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('path', path);
        if (opciones.upsert) formData.append('upsert', 'true');
        try {
            const response = await fetchConSesion("".concat(API_URL, "/storage/").concat(this.bucket), {
                method: 'POST',
                headers: {
                    ...this.token && {
                        Authorization: "Bearer ".concat(this.token)
                    }
                },
                body: formData
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                return {
                    data: null,
                    error: {
                        message: errorData.error || response.statusText
                    }
                };
            }
            const data = await response.json();
            return {
                data,
                error: null
            };
        } catch (err) {
            return {
                data: null,
                error: {
                    message: err.message
                }
            };
        }
    }
    /**
   * Descarga un archivo
   * Ej: .download('users/avatar.jpg')
   */ async download(path) {
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        try {
            const response = await fetchConSesion("".concat(API_URL, "/storage/").concat(this.bucket, "/").concat(path), {
                headers: {
                    ...this.token && {
                        Authorization: "Bearer ".concat(this.token)
                    }
                }
            });
            if (!response.ok) {
                return {
                    data: null,
                    error: {
                        message: response.statusText
                    }
                };
            }
            const blob = await response.blob();
            return {
                data: blob,
                error: null
            };
        } catch (err) {
            return {
                data: null,
                error: {
                    message: err.message
                }
            };
        }
    }
    /**
   * Elimina archivos
   * Ej: .remove(['users/avatar.jpg'])
   */ async remove(paths) {
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        const results = [];
        for (const path of paths){
            try {
                const response = await fetchConSesion("".concat(API_URL, "/storage/").concat(this.bucket, "/").concat(path), {
                    method: 'DELETE',
                    headers: {
                        ...this.token && {
                            Authorization: "Bearer ".concat(this.token)
                        }
                    }
                });
                results.push({
                    path,
                    success: response.ok,
                    error: response.ok ? null : response.statusText
                });
            } catch (err) {
                results.push({
                    path,
                    success: false,
                    error: err.message
                });
            }
        }
        return {
            data: results,
            error: null
        };
    }
    /**
   * Lista archivos en un path
   * Ej: .list('users/')
   */ async list() {
        let path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        try {
            const response = await fetchConSesion("".concat(API_URL, "/storage/").concat(this.bucket, "/list?prefix=").concat(encodeURIComponent(path)), {
                headers: {
                    ...this.token && {
                        Authorization: "Bearer ".concat(this.token)
                    }
                }
            });
            if (!response.ok) {
                return {
                    data: null,
                    error: {
                        message: response.statusText
                    }
                };
            }
            const data = await response.json();
            return {
                data,
                error: null
            };
        } catch (err) {
            return {
                data: null,
                error: {
                    message: err.message
                }
            };
        }
    }
    /**
   * URL firmada y temporaria para un archivo privado.
   * Ej: .createSignedUrl('clientes/12/cedula.jpg', 3600)
   *
   * Devuelve `{ data: { signedUrl }, error }`, como supabase-js. Hace falta
   * porque la descarga pide sesión y un `<img src>` no manda cabeceras: la firma
   * va en la URL y vence sola.
   */ async createSignedUrl(path) {
        let segundos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3600;
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        const parametros = new URLSearchParams({
            path,
            segundos: String(segundos)
        });
        try {
            const response = await fetchConSesion("".concat(API_URL, "/storage/").concat(this.bucket, "/signed-url?").concat(parametros.toString()), {
                headers: {
                    ...this.token && {
                        Authorization: "Bearer ".concat(this.token)
                    }
                }
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                return {
                    data: {
                        signedUrl: null
                    },
                    error: {
                        message: errorData.error || response.statusText
                    }
                };
            }
            const data = await response.json();
            return {
                data: {
                    signedUrl: data.signedUrl
                },
                error: null
            };
        } catch (err) {
            return {
                data: {
                    signedUrl: null
                },
                error: {
                    message: err.message
                }
            };
        }
    }
    /**
   * Obtiene URL pública de un archivo
   * Ej: .getPublicUrl('users/avatar.jpg')
   */ getPublicUrl(path) {
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        return {
            data: {
                publicURL: "".concat(API_URL, "/storage/").concat(this.bucket, "/public/").concat(path)
            }
        };
    }
    constructor(token){
        this.token = token;
        this.bucket = null;
    }
}
class DjangoAuth {
    /**
   * Login con email y contraseña
   * Ej: django.auth.signInWithPassword({ email, password })
   */ async signInWithPassword(param) {
        let { email, password } = param;
        try {
            const response = await fetch("".concat(API_URL, "/auth/token/"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: {
                        message: errorData.detail || 'Invalid credentials'
                    }
                };
            }
            const data = await response.json();
            this.token = data.access;
            // Guardar token en localStorage
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('django_access_token', data.access);
                localStorage.setItem('django_refresh_token', data.refresh);
            }
            // Obtener datos del usuario (decodificar JWT o llamar a endpoint /me)
            const user = await this.getUser();
            return {
                data: {
                    user: user.data,
                    session: {
                        access_token: data.access,
                        refresh_token: data.refresh
                    }
                },
                error: null
            };
        } catch (err) {
            return {
                data: {
                    user: null,
                    session: null
                },
                error: {
                    message: err.message
                }
            };
        }
    }
    /**
   * Recuperación de contraseña con un código al correo (rutas públicas).
   * Devuelven { data, error } con el `error`/`hint` que manda Django.
   */ async _postPublico(ruta, cuerpo) {
        try {
            const response = await fetch("".concat(API_URL).concat(ruta), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cuerpo)
            });
            const data = await response.json().catch(()=>({}));
            if (!response.ok) {
                const message = response.status === 429 ? 'Demasiados intentos. Espera un rato antes de volver a probar.' : data.error || data.detail || 'No se pudo completar el pedido';
                return {
                    data: null,
                    error: {
                        message,
                        hint: data.hint
                    }
                };
            }
            return {
                data,
                error: null
            };
        } catch (err) {
            return {
                data: null,
                error: {
                    message: 'No hay conexión con el servidor',
                    hint: err.message
                }
            };
        }
    }
    /** Manda un código de 6 dígitos al correo. Contesta igual exista o no la cuenta. */ pedirCodigoRecuperacion(email) {
        return this._postPublico('/auth/recuperar', {
            email
        });
    }
    /** Verifica el código; si es correcto devuelve { token } para elegir la contraseña nueva. */ verificarCodigoRecuperacion(email, codigo) {
        return this._postPublico('/auth/recuperar/verificar', {
            email,
            codigo
        });
    }
    /** Guarda la contraseña nueva con el token de verificarCodigoRecuperacion. */ cambiarClaveConCodigo(token, password) {
        return this._postPublico('/auth/recuperar/cambiar', {
            token,
            password
        });
    }
    /**
   * Obtiene el usuario actual (llama a /api/v1/auth/me para datos completos)
   */ async getUser() {
        // Renovado si está por vencer: con el token vencido esto contestaba "Token
        // expirado" aunque el refresh siguiera sirviendo.
        const token = await this.tokenVigente();
        if (!token) {
            return {
                data: {
                    user: null
                },
                error: null
            };
        }
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload.exp && payload.exp * 1000 < Date.now()) {
                return {
                    data: {
                        user: null
                    },
                    error: {
                        message: 'Token expirado'
                    }
                };
            }
            // Llamar al endpoint /auth/me para obtener datos completos del usuario
            const response = await fetchConSesion("".concat(API_URL, "/auth/me"), {
                headers: {
                    'Authorization': "Bearer ".concat(token),
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                // Fallback: construir usuario básico desde el JWT
                this.user = {
                    id: String(payload.user_id),
                    email: payload.email || ''
                };
                return {
                    data: {
                        user: this.user
                    },
                    error: null
                };
            }
            const userData = await response.json();
            this.user = {
                id: String(userData.id),
                email: userData.email,
                username: userData.username,
                first_name: userData.first_name,
                last_name: userData.last_name,
                is_staff: userData.is_staff,
                is_superuser: userData.is_superuser
            };
            return {
                data: {
                    user: this.user
                },
                error: null
            };
        } catch (err) {
            return {
                data: {
                    user: null
                },
                error: {
                    message: err.message
                }
            };
        }
    }
    /**
   * El access token listo para usar: si vence en menos de un minuto se renueva
   * con el refresh token (uno solo a la vez, aunque lo pidan diez consultas
   * juntas). Null si no hay sesión o ya no se puede renovar.
   */ async tokenVigente() {
        const actual = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('django_access_token') : "TURBOPACK unreachable";
        if (actual && !venceEnBreve(actual)) {
            this.token = actual;
            return actual;
        }
        if ("object" === 'undefined' || !localStorage.getItem('django_refresh_token')) return actual;
        var _this__renovando;
        (_this__renovando = this._renovando) !== null && _this__renovando !== void 0 ? _this__renovando : this._renovando = this.refreshSession().finally(()=>{
            this._renovando = null;
        });
        const { data, error } = await this._renovando;
        return error ? null : data.session.access_token;
    }
    /**
   * Obtiene la sesión actual (renovando el token si hace falta)
   * Compatible con la API de Supabase
   */ async getSession() {
        let accessToken = null;
        let refreshToken = null;
        if ("TURBOPACK compile-time truthy", 1) {
            accessToken = await this.tokenVigente();
            refreshToken = localStorage.getItem('django_refresh_token');
        } else //TURBOPACK unreachable
        ;
        if (!accessToken) {
            return {
                data: {
                    session: null
                },
                error: null
            };
        }
        // Quién es, leído del JWT (como Supabase, la sesión trae `user`). Sin
        // esto `personalApi.yo()` no encontraba el id y el legajo no cargaba
        // nunca: Personal decía "tu sesión no tiene legajo" y no dejaba guardar.
        let user = null;
        try {
            const payload = JSON.parse(atob(accessToken.split('.')[1]));
            user = {
                id: String(payload.user_id),
                email: payload.email || ''
            };
        } catch (e) {
            user = null;
        }
        return {
            data: {
                session: {
                    access_token: accessToken,
                    refresh_token: refreshToken,
                    user
                }
            },
            error: null
        };
    }
    /**
   * Cierra sesión
   */ async signOut() {
        this.token = null;
        this.user = null;
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem('django_access_token');
            localStorage.removeItem('django_refresh_token');
        }
        return {
            error: null
        };
    }
    /**
   * Refresca el token de acceso
   */ async refreshSession() {
        const refreshToken = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('django_refresh_token') : "TURBOPACK unreachable";
        if (!refreshToken) {
            return {
                data: {
                    session: null,
                    user: null
                },
                error: {
                    message: 'No refresh token'
                }
            };
        }
        try {
            const response = await fetch("".concat(API_URL, "/auth/token/refresh/"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refresh: refreshToken
                })
            });
            if (!response.ok) {
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: {
                        message: 'Failed to refresh token'
                    }
                };
            }
            const data = await response.json();
            this.token = data.access;
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('django_access_token', data.access);
                // Con ROTATE_REFRESH_TOKENS Django manda uno nuevo: guardarlo es lo que
                // hace que la sesión dure 7 días desde el último uso y no desde el login.
                if (data.refresh) localStorage.setItem('django_refresh_token', data.refresh);
            }
            return {
                data: {
                    session: {
                        access_token: data.access,
                        refresh_token: data.refresh || refreshToken
                    }
                },
                error: null
            };
        } catch (err) {
            return {
                data: {
                    session: null,
                    user: null
                },
                error: {
                    message: err.message
                }
            };
        }
    }
    constructor(){
        this.token = null;
        this.user = null;
    }
}
class DjangoClient {
    /**
   * Inicia una query sobre una tabla
   * Ej: django.from('clientes')
   */ from(table) {
        return new DjangoQueryBuilder(table, this.auth.token);
    }
    /**
   * Ejecuta una función RPC
   * Ej: django.rpc('clientes_estadisticas_basicas')
   */ rpc(functionName, params) {
        const rpc = new DjangoRPC(this.auth.token);
        return rpc.call(functionName, params);
    }
    /**
   * Storage API
   */ get storage() {
        return new DjangoStorage(this.auth.token);
    }
    constructor(){
        this.auth = new DjangoAuth();
        // Cargar token guardado
        if ("TURBOPACK compile-time truthy", 1) {
            const token = localStorage.getItem('django_access_token');
            if (token) {
                this.auth.token = token;
            }
        }
    }
}
const django = new DjangoClient();
// Validación de configuración
const djangoApiUrl = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1");
const esFaltante = !djangoApiUrl || djangoApiUrl.includes('ejemplo.com');
const djangoConfigurado = !!djangoApiUrl && !esFaltante;
if (!djangoConfigurado && "object" !== 'undefined') {
    console.warn('NEXT_PUBLIC_DJANGO_API_URL no está configurado. Completa el .env con la URL del backend Django.');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/demo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * MODO DEMO — se activa con NEXT_PUBLIC_DEMO_MODE=true en web/.env
 *
 * Sirve para recorrer la interfaz sin Supabase ni equipos de red: reemplaza la
 * capa de datos por un store en memoria y las llamadas al middleware por
 * respuestas de ejemplo.
 *
 * Todo lo que se cree se pierde al recargar la página. No es un entorno de
 * pruebas: es una maqueta navegable para ver el frontend.
 */ __turbopack_context__.s([
    "demoApi",
    ()=>demoApi,
    "demoDb",
    ()=>demoDb,
    "modoDemo",
    ()=>modoDemo,
    "resetDemo",
    ()=>resetDemo,
    "sesionDemo",
    ()=>sesionDemo,
    "usuarioDemo",
    ()=>usuarioDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const modoDemo = ("TURBOPACK compile-time value", "false") === 'true';
const uid = ()=>crypto.randomUUID();
const ID_OLT_HUAWEI = uid();
const ID_OLT_VSOL = uid();
const ID_ROUTER = uid();
const ID_PLAN_100 = uid();
const ID_PLAN_50 = uid();
const ID_PERFIL_100 = uid();
const ahora = ()=>new Date().toISOString();
const haceMinutos = (m)=>new Date(Date.now() - m * 60000).toISOString();
/** Datos de ejemplo, uno por tabla del schema. */ const SEMILLA = {
    olts: [
        {
            id: ID_OLT_HUAWEI,
            nombre: 'OLT Central',
            marca: 'Huawei',
            ip_host: '192.168.1.10',
            puerto_ssh: 22,
            usuario: 'root',
            password_encrypted: 'demo',
            activo: true,
            created_at: haceMinutos(4000)
        },
        {
            id: ID_OLT_VSOL,
            nombre: 'OLT Barrio Norte',
            marca: 'VSOL',
            ip_host: '192.168.1.20',
            puerto_ssh: 22,
            usuario: 'admin',
            password_encrypted: 'demo',
            activo: true,
            created_at: haceMinutos(3000)
        }
    ],
    routers_mikrotik: [
        {
            id: ID_ROUTER,
            nombre: 'Router Borde',
            ip_host: '192.168.88.1',
            puerto_api: 80,
            usa_https: false,
            usuario: 'admin',
            password_encrypted: 'demo',
            activo: true,
            created_at: haceMinutos(3500)
        }
    ],
    tipos_ont: [
        {
            id: uid(),
            marca: 'Huawei',
            modelo: 'HG8310M',
            puertos_ethernet: 1,
            puertos_fxs: 0,
            wifi: false,
            created_at: haceMinutos(5000)
        },
        {
            id: uid(),
            marca: 'Huawei',
            modelo: 'HG8546M',
            puertos_ethernet: 4,
            puertos_fxs: 1,
            wifi: true,
            created_at: haceMinutos(5000)
        },
        {
            id: uid(),
            marca: 'V-SOL',
            modelo: 'V2801RH',
            puertos_ethernet: 1,
            puertos_fxs: 0,
            wifi: false,
            created_at: haceMinutos(5000)
        },
        {
            id: uid(),
            marca: 'V-SOL',
            modelo: 'V2802RGW',
            puertos_ethernet: 4,
            puertos_fxs: 1,
            wifi: true,
            created_at: haceMinutos(5000)
        }
    ],
    line_profiles: [
        {
            id: ID_PERFIL_100,
            olt_id: ID_OLT_HUAWEI,
            nombre: 'PROFILE_VLAN100',
            vlan_id: 100,
            gemport_id: 1,
            profile_id_olt: 100,
            created_at: haceMinutos(2000)
        },
        {
            id: uid(),
            olt_id: ID_OLT_HUAWEI,
            nombre: 'PROFILE_VLAN200',
            vlan_id: 200,
            gemport_id: 1,
            profile_id_olt: 200,
            created_at: haceMinutos(1900)
        }
    ],
    planes_velocidad: [
        {
            id: uid(),
            nombre: 'PLAN_30M',
            bajada_kbps: 30000,
            subida_kbps: 15000,
            burst_limit: null,
            precio: 18,
            traffic_table_index: 30,
            created_at: haceMinutos(5000)
        },
        {
            id: ID_PLAN_50,
            nombre: 'PLAN_50M',
            bajada_kbps: 50000,
            subida_kbps: 25000,
            burst_limit: '60M/30M',
            precio: 25,
            traffic_table_index: 50,
            created_at: haceMinutos(5000)
        },
        {
            id: ID_PLAN_100,
            nombre: 'PLAN_100M',
            bajada_kbps: 102400,
            subida_kbps: 10240,
            burst_limit: '120M/60M',
            precio: 35,
            traffic_table_index: 10,
            created_at: haceMinutos(5000)
        }
    ],
    onus: [
        {
            id: uid(),
            olt_id: ID_OLT_HUAWEI,
            sn: '485754431A2B3C4D',
            nombre_cliente: 'Juan Pérez',
            frame: 0,
            slot: 1,
            puerto: 0,
            onu_index: 0,
            plan_id: ID_PLAN_100,
            plan_velocidad: 'PLAN_100M',
            line_profile_id: ID_PERFIL_100,
            estado: 'online',
            rx_power_dbm: -21.4,
            tx_power_dbm: 2.31,
            distancia_m: 1240,
            ultima_lectura: haceMinutos(6),
            created_at: haceMinutos(1200)
        },
        {
            id: uid(),
            olt_id: ID_OLT_HUAWEI,
            sn: '48575443AABBCCDD',
            nombre_cliente: 'Panadería La Esquina',
            frame: 0,
            slot: 1,
            puerto: 0,
            onu_index: 1,
            plan_id: ID_PLAN_50,
            plan_velocidad: 'PLAN_50M',
            line_profile_id: ID_PERFIL_100,
            estado: 'online',
            rx_power_dbm: -28.9,
            tx_power_dbm: 2.05,
            distancia_m: 3870,
            ultima_lectura: haceMinutos(4),
            created_at: haceMinutos(900)
        },
        {
            id: uid(),
            olt_id: ID_OLT_HUAWEI,
            sn: '4857544311223344',
            nombre_cliente: 'María Gómez',
            frame: 0,
            slot: 1,
            puerto: 1,
            onu_index: 0,
            plan_id: ID_PLAN_50,
            plan_velocidad: 'PLAN_50M',
            estado: 'offline',
            rx_power_dbm: null,
            tx_power_dbm: null,
            distancia_m: null,
            ultima_lectura: null,
            created_at: haceMinutos(600)
        },
        {
            id: uid(),
            olt_id: ID_OLT_VSOL,
            sn: 'GPON00112233',
            nombre_cliente: 'Kiosco Central',
            frame: 0,
            slot: 0,
            puerto: 1,
            onu_index: 18,
            plan_id: null,
            plan_velocidad: 'PLAN_30M',
            estado: 'los',
            rx_power_dbm: -30.2,
            tx_power_dbm: null,
            distancia_m: 1,
            ultima_lectura: haceMinutos(30),
            created_at: haceMinutos(300)
        }
    ],
    ip_addresses: [],
    firewall_bloqueos: [],
    clientes: [
        {
            id: uid(),
            router_id: ID_ROUTER,
            nombre: 'Juan Pérez',
            ip: '10.0.0.5',
            usuario_ppp: 'jperez',
            velocidad_cruda: '25M/50M',
            estado: 'activo',
            origen: 'ppp-secret',
            mac_address: 'AA:BB:CC:DD:EE:FF',
            created_at: haceMinutos(1200)
        },
        {
            id: uid(),
            router_id: ID_ROUTER,
            nombre: 'Panadería La Esquina',
            ip: '10.0.0.7',
            usuario_ppp: null,
            velocidad_cruda: '10M/20M',
            estado: 'cortado',
            origen: 'simple-queue',
            comentario: 'Factura 0234 vencida',
            created_at: haceMinutos(900)
        },
        {
            id: uid(),
            router_id: ID_ROUTER,
            nombre: 'María Gómez',
            ip: '10.0.0.12',
            usuario_ppp: 'mgomez',
            velocidad_cruda: '25M/50M',
            estado: 'activo',
            origen: 'ppp-secret',
            created_at: haceMinutos(600)
        }
    ]
};
// Copia mutable: la semilla queda intacta para poder resetear.
let store = estructuraInicial();
function estructuraInicial() {
    return JSON.parse(JSON.stringify(SEMILLA));
}
function resetDemo() {
    store = estructuraInicial();
}
// --- Capa de datos (reemplaza a Supabase) -----------------------------------
const esperar = function() {
    let ms = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 180;
    return new Promise((r)=>setTimeout(r, ms));
};
const demoDb = {
    async listar (tabla, param) {
        let { orderBy, ascending } = param;
        await esperar();
        var _store_tabla;
        const filas = [
            ...(_store_tabla = store[tabla]) !== null && _store_tabla !== void 0 ? _store_tabla : []
        ];
        if (orderBy) {
            filas.sort((a, b)=>{
                const x = a[orderBy], y = b[orderBy];
                if (x === y) return 0;
                const menor = x == null ? true : y == null ? false : x < y;
                return (menor ? -1 : 1) * (ascending ? 1 : -1);
            });
        }
        return filas;
    },
    async insertar (tabla, fila) {
        await esperar();
        const nueva = {
            id: uid(),
            created_at: ahora(),
            ...fila
        };
        var _store_tabla;
        store[tabla] = [
            ...(_store_tabla = store[tabla]) !== null && _store_tabla !== void 0 ? _store_tabla : [],
            nueva
        ];
        return nueva;
    },
    async actualizar (tabla, id, cambios) {
        await esperar();
        var _store_tabla;
        store[tabla] = ((_store_tabla = store[tabla]) !== null && _store_tabla !== void 0 ? _store_tabla : []).map((f)=>f.id === id ? {
                ...f,
                ...cambios
            } : f);
    },
    async eliminar (tabla, id) {
        await esperar();
        var _store_tabla;
        store[tabla] = ((_store_tabla = store[tabla]) !== null && _store_tabla !== void 0 ? _store_tabla : []).filter((f)=>f.id !== id);
    }
};
// --- Capa de red (reemplaza al middleware) ----------------------------------
const ONUS_PUERTO = [
    {
        ontId: 0,
        onuIndex: 0,
        sn: '485754431A2B3C4D',
        estado: 'online',
        runState: 'online',
        descripcion: 'Juan Pérez',
        modelo: 'HG8310M'
    },
    {
        ontId: 1,
        onuIndex: 1,
        sn: '48575443AABBCCDD',
        estado: 'online',
        runState: 'online',
        descripcion: 'Panadería La Esquina',
        modelo: 'HG8546M'
    },
    {
        ontId: 2,
        onuIndex: 2,
        sn: '4857544311223344',
        estado: 'offline',
        runState: 'offline',
        descripcion: 'María Gómez',
        modelo: 'HG8310M'
    }
];
const AUTOFIND = [
    {
        sn: '485754439ABCDEF0',
        puerto: 0,
        equipmentId: 'HG8546M',
        vendorId: 'HWTC'
    },
    {
        sn: '4857544355667788',
        puerto: 1,
        equipmentId: 'HG8310M',
        vendorId: 'HWTC'
    }
];
const POOLS = [
    {
        '.id': '*1',
        name: 'pool-clientes',
        ranges: '10.0.0.10-10.0.0.254',
        comment: 'PPPoE'
    },
    {
        '.id': '*2',
        name: 'pool-gestion',
        ranges: '172.16.0.10-172.16.0.50',
        comment: ''
    }
];
const ADDRESSES = [
    {
        '.id': '*1',
        address: '10.0.0.1/24',
        network: '10.0.0.0',
        interface: 'ether2',
        comment: 'Gateway clientes'
    },
    {
        '.id': '*2',
        address: '192.168.88.1/24',
        network: '192.168.88.0',
        interface: 'ether1',
        comment: ''
    }
];
const INTERFACES = [
    {
        id: '*1',
        nombre: 'ether1',
        tipo: 'ether',
        running: true,
        disabled: false
    },
    {
        id: '*2',
        nombre: 'ether2',
        tipo: 'ether',
        running: true,
        disabled: false
    },
    {
        id: '*3',
        nombre: 'vlan100',
        tipo: 'vlan',
        running: true,
        disabled: false
    }
];
let bloqueosDemo = [
    {
        id: '*5',
        address: '10.0.0.55',
        lista: 'CORTE_MOROSOS',
        comment: 'Factura 0234 vencida',
        dynamic: false
    }
];
async function demoApi(metodo, ruta, body) {
    await esperar(320);
    if (ruta === '/api/health') return {
        ok: true,
        servicio: 'demo',
        configuracionFaltante: []
    };
    if (ruta.startsWith('/api/crypto/encrypt')) return {
        encrypted: 'v1:demo:demo:demo'
    };
    // --- OLT ---
    if (/\/api\/olt\/[^/]+\/test/.test(ruta)) {
        return {
            ok: true,
            marca: 'Huawei',
            modelo: 'MA5800-X7',
            version: 'V100R019C10'
        };
    }
    if (/\/api\/olt\/[^/]+\/autofind/.test(ruta)) return AUTOFIND;
    if (/\/api\/olt\/[^/]+\/onus\/\d+\/metricas/.test(ruta)) {
        const rx = -21.4 + (Math.random() * 2 - 1);
        return {
            online: true,
            rxPowerDbm: Number(rx.toFixed(2)),
            txPowerDbm: 2.31,
            temperaturaC: 47,
            voltajeV: 3.28,
            distanciaM: 1240,
            version: {
                modelo: 'HG8310M',
                versionSoftware: 'V5R020C10S115'
            },
            umbralDbm: -27,
            alerta: rx < -27
        };
    }
    if (/\/api\/olt\/[^/]+\/onus$/.test(ruta) && metodo === 'GET') return ONUS_PUERTO;
    if (/\/api\/olt\/[^/]+\/onus$/.test(ruta) && metodo === 'POST') {
        return {
            ok: true,
            registradaEnOlt: {
                ontId: 3,
                onuIndex: 3,
                comando: 'ont add 0 3 sn-auth 485754439ABCDEF0 omci'
            },
            guardadaEnBase: true
        };
    }
    if (/\/api\/olt\/[^/]+\/onus\/servicio/.test(ruta)) {
        return {
            ok: true,
            comandos: [
                'onu 3 tcont 1',
                'onu 3 gemport 1 tcont 1',
                'onu 3 service-port 1 gemport 1 uservlan 100 vlan 100'
            ],
            advertencia: 'Si este tcont era nuevo en el puerto, el puerto PON pudo caer unos segundos.'
        };
    }
    if (/\/api\/olt\/[^/]+\/onus\/\d+$/.test(ruta) && metodo === 'DELETE') return {
        ok: true
    };
    if (/\/api\/olt\/[^/]+\/line-profiles/.test(ruta)) {
        return {
            ok: true,
            creadoEnOlt: {
                comandos: [
                    'ont-lineprofile gpon profile-name "PROFILE_VLAN300"',
                    'vlan-map 1 300',
                    'commit',
                    'quit'
                ]
            }
        };
    }
    if (/\/api\/olt\/[^/]+\/traffic-tables/.test(ruta)) {
        return {
            ok: true,
            comando: 'traffic table ip index 10 name "PLAN_100M" cir 10240 pir 102400 priority 6'
        };
    }
    // --- MikroTik ---
    if (/\/api\/mikrotik\/[^/]+\/test/.test(ruta)) {
        return {
            ok: true,
            identidad: 'RouterBorde',
            version: '7.16.1',
            modelo: 'RB4011iGS+',
            uptime: '12d04:31:07'
        };
    }
    if (/\/api\/mikrotik\/[^/]+\/pools/.test(ruta)) {
        if (metodo === 'POST') return {
            ok: true,
            pools: POOLS
        };
        if (metodo === 'DELETE') return {
            ok: true
        };
        return POOLS;
    }
    if (/\/api\/mikrotik\/[^/]+\/interfaces/.test(ruta)) return INTERFACES;
    if (/\/api\/mikrotik\/[^/]+\/addresses/.test(ruta)) {
        if (metodo === 'POST') return {
            ok: true,
            addresses: ADDRESSES
        };
        if (metodo === 'DELETE') return {
            ok: true
        };
        return ADDRESSES;
    }
    if (/\/api\/mikrotik\/[^/]+\/bloqueos/.test(ruta)) {
        if (metodo === 'POST') return {
            ok: true,
            regla: {
                creada: false,
                mensaje: 'La regla de corte ya existía'
            }
        };
        if (metodo === 'DELETE') {
            bloqueosDemo = bloqueosDemo.slice(1);
            return {
                ok: true
            };
        }
        return bloqueosDemo;
    }
    if (/\/api\/mikrotik\/[^/]+\/redireccion-pago/.test(ruta)) {
        return {
            creada: true,
            mensaje: 'Regla de redirección de pago creada'
        };
    }
    if (/\/api\/mikrotik\/[^/]+\/queues/.test(ruta)) return [];
    // --- Importación de clientes ---
    if (/\/api\/mikrotik\/[^/]+\/escaneo/.test(ruta)) return ESCANEO_DEMO;
    if (/\/api\/mikrotik\/[^/]+\/importar/.test(ruta)) {
        return {
            ok: true,
            creados: 3,
            actualizados: 1
        };
    }
    if (/\/api\/mikrotik\/[^/]+\/exportar/.test(ruta)) {
        return {
            modo: 'simple-queue',
            creados: [
                'Juan Pérez',
                'María Gómez'
            ],
            salteados: [
                'Panadería La Esquina'
            ],
            fallidos: [
                {
                    nombre: 'Kiosco Central',
                    error: 'no tiene IP'
                }
            ]
        };
    }
    if (/\/api\/mikrotik\/[^/]+\/sincronizar-morosos/.test(ruta)) {
        const plan = {
            lista: 'CORTE_MOROSOS',
            agregar: [
                {
                    address: '10.0.0.7',
                    nombre: 'Panadería La Esquina',
                    comment: 'Panadería La Esquina'
                }
            ],
            quitar: [
                {
                    address: '10.0.0.12',
                    nombre: 'María Gómez',
                    motivo: 'el cliente figura como "activo" en el sistema',
                    conocido: true
                },
                {
                    address: '192.168.99.4',
                    nombre: null,
                    motivo: 'no hay ningún cliente con esa IP en el sistema',
                    conocido: false
                }
            ],
            sinIp: [
                {
                    nombre: 'Kiosco Central',
                    motivo: 'el cliente no tiene IP registrada'
                }
            ],
            yaCoinciden: 2,
            sinCambios: false
        };
        if (!(body === null || body === void 0 ? void 0 : body.aplicar)) return {
            plan,
            aplicado: false
        };
        return {
            plan,
            aplicado: true,
            resultado: {
                lista: 'CORTE_MOROSOS',
                agregadas: [
                    '10.0.0.7'
                ],
                quitadas: [
                    '10.0.0.12'
                ],
                fallidas: []
            },
            aviso: 'Se dejaron sin tocar 1 bloqueo(s) que no corresponden a ningún cliente del sistema.'
        };
    }
    if (/\/api\/mikrotik\/[^/]+\/migrar-lista/.test(ruta)) {
        return {
            origen: 'Moroso',
            destino: 'CORTE_MOROSOS',
            encontradas: 4,
            copiadas: [
                '10.0.0.7',
                '10.0.0.31',
                '10.0.0.44'
            ],
            salteadas: [
                '10.0.0.55'
            ],
            fallidas: [],
            guardadoEnBase: true
        };
    }
    return undefined;
}
/** Resultado de escaneo de ejemplo, con los casos que vale la pena mostrar. */ const ESCANEO_DEMO = {
    listaMorosos: 'Moroso',
    clientes: [
        {
            nombre: 'Juan Pérez',
            ip: '10.0.0.5',
            usuario_ppp: 'jperez',
            mac_address: 'AA:BB:CC:DD:EE:FF',
            velocidad_cruda: '25M/50M',
            estado: 'activo',
            origen: 'ppp-secret',
            origenes: [
                'ppp-secret',
                'simple-queue',
                'dhcp-lease'
            ]
        },
        {
            nombre: 'Panadería La Esquina',
            ip: '10.0.0.7',
            usuario_ppp: null,
            velocidad_cruda: '10M/20M',
            estado: 'cortado',
            origen: 'simple-queue',
            origenes: [
                'simple-queue',
                'address-list'
            ]
        },
        {
            nombre: 'María Gómez',
            ip: '10.0.0.12',
            usuario_ppp: 'mgomez',
            velocidad_cruda: '25M/50M',
            estado: 'activo',
            origen: 'ppp-secret',
            origenes: [
                'ppp-secret'
            ]
        },
        {
            nombre: 'Carlos Ruiz',
            ip: '10.0.0.31',
            usuario_ppp: 'cruiz',
            velocidad_cruda: '10M/20M',
            estado: 'cortado',
            origen: 'ppp-secret',
            origenes: [
                'ppp-secret',
                'address-list'
            ]
        },
        // Sin IP: PPPoE con dirección dinámica y sin sesión activa al escanear.
        {
            nombre: 'Kiosco Central',
            ip: null,
            usuario_ppp: 'kiosco',
            velocidad_cruda: null,
            estado: 'activo',
            origen: 'ppp-secret',
            origenes: [
                'ppp-secret'
            ]
        },
        // Solo aparece en la lista de cortes: cliente viejo sin cola ni secret.
        {
            nombre: 'Cliente sin cola',
            ip: '10.0.0.44',
            usuario_ppp: null,
            velocidad_cruda: null,
            estado: 'cortado',
            origen: 'address-list',
            origenes: [
                'address-list'
            ]
        },
        {
            nombre: 'Ferretería Sur',
            ip: '10.0.0.60',
            usuario_ppp: null,
            velocidad_cruda: '50M/100M',
            estado: 'suspendido',
            origen: 'simple-queue',
            origenes: [
                'simple-queue'
            ]
        }
    ],
    listas: [
        {
            nombre: 'Moroso',
            cantidad: 4
        },
        {
            nombre: 'servers_wisphub',
            cantidad: 6
        },
        {
            nombre: 'permitidos',
            cantidad: 2
        }
    ],
    resumen: {
        total: 7,
        cortados: 3,
        conVelocidad: 5,
        sinIp: 1,
        fuentes: {
            pppSecrets: 4,
            pppActive: 3,
            simpleQueues: 5,
            dhcpLeases: 8,
            addressList: 12
        }
    }
};
const usuarioDemo = {
    id: 'demo-user',
    email: 'demo@taller.local',
    app_metadata: {},
    user_metadata: {},
    aud: 'authenticated'
};
const sesionDemo = {
    access_token: 'demo-token',
    token_type: 'bearer',
    user: usuarioDemo
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  DEPRECADO: Este archivo está obsoleto                           ║
 * ║                                                                  ║
 * ║  Usar directamente: import { django } from './djangoClient'      ║
 * ║                                                                  ║
 * ║  Re-exportación temporal para mantener compatibilidad            ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */ // DEPRECADO: Usar djangoClient directamente
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
}),
"[project]/src/lib/permisos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * El catálogo de permisos y las plantillas de rol.
 *
 * Vive en el frente porque el frente es quien dibuja los checkboxes, pero el
 * middleware importa este mismo archivo para validar. Tener dos copias sería
 * peor que tener una en el lugar imperfecto: la copia del servidor se
 * desactualiza y termina autorizando lo que la pantalla ya no ofrece.
 *
 * ── Cómo se lee un permiso ──
 *
 * La clave es `modulo.accion`. El comodín `*` es "todo" y solo lo tiene el
 * Super Administrador; `modulo.*` no existe a propósito — un permiso que se
 * expande solo es un permiso que nadie revisa.
 *
 * ── Rol contra permisos ──
 *
 * El rol NO decide qué puede hacer alguien: decide qué checkboxes vienen
 * marcados al crearlo. Lo que vale después es la lista guardada. La única
 * excepción es quién puede crear a quién, que se resuelve por rol y en el
 * servidor: un Administrador no puede fabricarse un par, aunque le marquen el
 * checkbox de "crear usuarios".
 */ __turbopack_context__.s([
    "CLAVES_PERMISO",
    ()=>CLAVES_PERMISO,
    "CLAVES_SOLO_SUPER",
    ()=>CLAVES_SOLO_SUPER,
    "GRUPOS_PERMISOS",
    ()=>GRUPOS_PERMISOS,
    "ROLES",
    ()=>ROLES,
    "TODO",
    ()=>TODO,
    "buscarRol",
    ()=>buscarRol,
    "diferenciaConElRol",
    ()=>diferenciaConElRol,
    "nombrePermiso",
    ()=>nombrePermiso,
    "nombreRol",
    ()=>nombreRol,
    "permisosDeRol",
    ()=>permisosDeRol,
    "puedeEditarA",
    ()=>puedeEditarA,
    "puedeGestionarRol",
    ()=>puedeGestionarRol,
    "rolesAsignablesPor",
    ()=>rolesAsignablesPor,
    "tienePermiso",
    ()=>tienePermiso
]);
const TODO = '*';
const GRUPOS_PERMISOS = [
    {
        clave: 'clientes',
        nombre: 'Clientes',
        permisos: [
            {
                clave: 'clientes.cartera',
                nombre: 'Leer cualquier cliente de la base',
                nota: 'El control de fondo: sin esto, la base de datos misma le niega las filas que no le corresponden. Quitárselo a alguien lo deja viendo solo sus asignaciones, aunque escriba la URL a mano.'
            },
            {
                clave: 'clientes.ver',
                nombre: 'Abrir el listado de clientes',
                nota: 'Es la pantalla. El cajero cobra sin tenerlo: busca por cédula, no navega la cartera.'
            },
            {
                clave: 'clientes.crear',
                nombre: 'Crear clientes'
            },
            {
                clave: 'clientes.editar',
                nombre: 'Editar clientes'
            },
            {
                clave: 'clientes.eliminar',
                nombre: 'Eliminar clientes'
            },
            {
                clave: 'clientes.importar',
                nombre: 'Importar abonados'
            },
            {
                clave: 'clientes.ver_contacto',
                nombre: 'Ver teléfono y correo'
            },
            {
                clave: 'clientes.ver_direccion',
                nombre: 'Ver dirección'
            },
            {
                clave: 'clientes.ver_ubicacion',
                nombre: 'Ver ubicación en el mapa'
            },
            {
                clave: 'clientes.contratos',
                nombre: 'Contratos'
            }
        ]
    },
    {
        clave: 'facturacion',
        nombre: 'Facturación',
        permisos: [
            {
                clave: 'facturacion.ver',
                nombre: 'Consultar facturas'
            },
            {
                clave: 'facturacion.emitir',
                nombre: 'Emitir facturas'
            },
            {
                clave: 'facturacion.editar',
                nombre: 'Editar facturas'
            },
            {
                clave: 'facturacion.anular',
                nombre: 'Anular facturas'
            },
            {
                clave: 'facturacion.reimprimir',
                nombre: 'Reimprimir facturas'
            },
            {
                clave: 'facturacion.vencidas',
                nombre: 'Ver facturas vencidas'
            },
            {
                clave: 'facturacion.estado_cuenta',
                nombre: 'Ver estado de cuenta'
            }
        ]
    },
    {
        clave: 'pagos',
        nombre: 'Pagos y cobranza',
        permisos: [
            {
                clave: 'pagos.ver',
                nombre: 'Ver pagos'
            },
            {
                clave: 'pagos.registrar',
                nombre: 'Registrar pagos'
            },
            {
                clave: 'pagos.parcial',
                nombre: 'Registrar pagos parciales'
            },
            /**
       * ── Las dos que separan una ventanilla de un punto de recaudación ──
       *
       * El punto de recaudación cobra SOLO en efectivo: la plata se la entregan
       * en la mano. Dejarle elegir "transferencia" abre la puerta a que registre
       * un cobro que nunca entró y se lo lleve la caja — y encima aparecería en
       * la conciliación como un comprobante sin respaldo, mandando a llamar a un
       * abonado que sí pagó.
       *
       * Y el recibo se imprime solo: es lo que se le entrega al cliente ahí
       * mismo. En la ventanilla de la oficina no siempre se imprime —el que paga
       * cinco facturas quiere una sola hoja— así que ahí sigue siendo a pedido.
       */ {
                clave: 'pagos.otras_formas',
                nombre: 'Cobrar por transferencia, depósito o tarjeta',
                nota: 'Sin esto solo se puede cobrar en efectivo. Es lo que corresponde a un punto de recaudación: la plata se la entregan en la mano.'
            },
            {
                clave: 'pagos.recibo_automatico',
                nombre: 'Imprimir el recibo apenas se cobra',
                nota: 'El comprobante sale solo al terminar el cobro, para entregárselo al cliente.'
            },
            {
                clave: 'pagos.anular',
                nombre: 'Anular pagos'
            },
            {
                clave: 'pagos.promesas',
                nombre: 'Registrar promesas y compromisos de pago'
            },
            {
                clave: 'pagos.deudores',
                nombre: 'Ver clientes con deuda'
            },
            {
                clave: 'pagos.observaciones',
                nombre: 'Registrar observaciones de cobranza'
            }
        ]
    },
    {
        clave: 'finanzas',
        nombre: 'Finanzas',
        permisos: [
            {
                clave: 'finanzas.dashboard',
                nombre: 'Dashboard financiero'
            },
            {
                clave: 'finanzas.ingresos',
                nombre: 'Ver y registrar ingresos'
            },
            {
                clave: 'finanzas.egresos',
                nombre: 'Ver y registrar egresos'
            },
            {
                clave: 'finanzas.cuentas_cobrar',
                nombre: 'Cuentas por cobrar'
            },
            {
                clave: 'finanzas.transferencias',
                nombre: 'Ver transferencias'
            },
            {
                clave: 'finanzas.reportes',
                nombre: 'Reportes financieros'
            },
            {
                clave: 'finanzas.exportar',
                nombre: 'Exportar reportes'
            },
            /**
       * ── Los tres permisos de consolidación ──
       *
       * Son la diferencia entre cobrar y CONSOLIDAR. Quien cobra ve lo suyo;
       * quien consolida ve la caja de todos, cruza el extracto del banco y arma
       * el reporte del regulador.
       *
       * Existen por separado porque se delegan por separado: el contador puede
       * necesitar conciliar sin ver el cierre de cada punto de recaudación.
       *
       * Sin `finanzas.ver_todos`, la pantalla de transacciones y su PDF muestran
       * SOLO lo que cobró quien está mirando. Eso no lo decide la pantalla: lo
       * decide el servidor, porque esconder una columna no protege un dato.
       */ {
                clave: 'finanzas.ver_todos',
                nombre: 'Ver los cobros de todos los operadores',
                nota: 'Sin esto, Transacciones y su reporte muestran solo lo que cobró uno mismo. Es lo que separa cerrar la caja propia de consolidar la de todos.'
            },
            {
                clave: 'finanzas.conciliacion',
                nombre: 'Conciliación bancaria',
                nota: 'Subir el extracto del banco y cruzarlo contra los cobros.'
            },
            {
                clave: 'finanzas.reporte_arcotel',
                nombre: 'Reporte para ARCOTEL',
                nota: 'Armar y exportar el listado que pide el regulador.'
            }
        ]
    },
    {
        clave: 'ventas',
        nombre: 'Ventas',
        permisos: [
            {
                clave: 'ventas.dashboard',
                nombre: 'Ver el dashboard comercial'
            },
            {
                clave: 'ventas.prospectos',
                nombre: 'Crear y editar prospectos'
            },
            {
                clave: 'ventas.oportunidades',
                nombre: 'Gestionar oportunidades'
            },
            {
                clave: 'ventas.actividad',
                nombre: 'Registrar llamadas, visitas y seguimientos'
            },
            {
                clave: 'ventas.solicitudes',
                nombre: 'Crear solicitudes de instalación'
            },
            {
                clave: 'ventas.cobertura',
                nombre: 'Verificar cobertura y ver el mapa comercial'
            },
            {
                clave: 'ventas.planes',
                nombre: 'Consultar planes y precios'
            },
            {
                clave: 'ventas.cotizaciones',
                nombre: 'Generar cotizaciones'
            },
            {
                clave: 'ventas.inteligencia',
                nombre: 'Inteligencia comercial',
                nota: 'Dónde piden servicio y no llegamos. Es información de expansión: la mira quien decide dónde tender red, no quien vende.'
            },
            {
                clave: 'ventas.equipo',
                nombre: 'Ver el equipo completo y fijar metas',
                nota: 'Sin esto, el vendedor ve solo su propia cartera y su propia meta.'
            },
            {
                clave: 'ventas.validar',
                nombre: 'Aprobar o rechazar solicitudes',
                nota: 'La admisión del abonado. Decide si una venta puede seguir adelante, así que no la tiene quien vende.'
            },
            {
                clave: 'ventas.validacion_sensible',
                nombre: 'Ver el detalle interno de una validación',
                nota: 'El motivo real por el que se aprobó o rechazó. El vendedor solo ve el motivo que se le comunica; esto es lo que hay detrás.'
            }
        ]
    },
    {
        clave: 'soporte',
        nombre: 'Tickets',
        permisos: [
            {
                clave: 'soporte.ver',
                nombre: 'Ver todos los tickets'
            },
            {
                clave: 'soporte.asignados',
                nombre: 'Ver sus tickets asignados',
                nota: 'Es lo mínimo del técnico: solo lo suyo.'
            },
            {
                clave: 'soporte.crear',
                nombre: 'Crear tickets'
            },
            {
                clave: 'soporte.asignar',
                nombre: 'Asignar tickets a técnicos'
            },
            {
                clave: 'soporte.estado',
                nombre: 'Cambiar estados del ticket'
            },
            {
                clave: 'soporte.cerrar',
                nombre: 'Cerrar tickets'
            }
        ]
    },
    {
        clave: 'instalaciones',
        nombre: 'Instalaciones',
        permisos: [
            {
                clave: 'instalaciones.ver',
                nombre: 'Ver todas las instalaciones'
            },
            {
                clave: 'instalaciones.asignadas',
                nombre: 'Ver sus instalaciones asignadas'
            },
            {
                clave: 'instalaciones.crear',
                nombre: 'Crear órdenes de instalación'
            },
            {
                clave: 'instalaciones.completar',
                nombre: 'Completar el alta en campo'
            },
            {
                clave: 'instalaciones.materiales',
                nombre: 'Registrar materiales utilizados'
            },
            {
                clave: 'instalaciones.backoffice',
                nombre: 'Bandeja de nuevas instalaciones',
                nota: 'Revisar el expediente que mandó el vendedor, validar la cédula, asignar técnico y poner fecha.'
            }
        ]
    },
    {
        clave: 'red',
        nombre: 'Red',
        permisos: [
            {
                clave: 'red.olts_ver',
                nombre: 'Ver OLTs y su estado'
            },
            {
                clave: 'red.olts_gestionar',
                nombre: 'Configurar OLTs'
            },
            {
                clave: 'red.onus_ver',
                nombre: 'Ver ONUs y potencias'
            },
            {
                clave: 'red.onus_aprovisionar',
                nombre: 'Autorizar y aprovisionar ONUs'
            },
            {
                clave: 'red.routers',
                nombre: 'Routers MikroTik'
            },
            {
                clave: 'red.ipam',
                nombre: 'Direccionamiento y VLANs'
            },
            {
                clave: 'red.diagnostico',
                nombre: 'Diagnosticar la conexión de un abonado',
                nota: 'Leer su señal, pinguearlo y reiniciarle la ONT. Es lo que se le habilita al bot para que resuelva "no tengo internet" sin pasar por una persona: solo toca el equipo del abonado que consulta.'
            },
            {
                clave: 'red.incidencias',
                nombre: 'Avisar cortes masivos a los abonados',
                nota: 'Abrir una incidencia le manda un mensaje a todos los afectados —pueden ser cientos— y no se puede desenviar. Va aparte de ver el monitoreo: mirar qué nodos están caídos es una cosa, escribirle a un sector en nombre del ISP es otra.'
            },
            {
                clave: 'red.wifi',
                nombre: 'Cambiar el WiFi del abonado',
                nota: 'El nombre de la red y su clave, por TR-069. Lo usa el soporte y es lo que se le habilita al bot para que resuelva el cambio de contraseña sin pasar por una persona.'
            },
            {
                clave: 'red.monitoreo_ver',
                nombre: 'Ver el estado de la red',
                nota: 'Solo mirar: qué nodos están arriba y cuáles caídos. Es lo que el técnico necesita en campo para saber si la falla es del cliente o de la zona.'
            },
            {
                clave: 'red.monitoreo',
                nombre: 'Monitor de red: configurar y sondear',
                nota: 'Incluye forzar sondeos y dar de alta nodos. Quien solo mira alcanza con el permiso de arriba.'
            },
            {
                clave: 'red.cortes',
                nombre: 'Cortes y reconexiones'
            }
        ]
    },
    {
        clave: 'inventario',
        nombre: 'Inventario y bodega',
        permisos: [
            {
                clave: 'inventario.ver',
                nombre: 'Ver el stock'
            },
            {
                clave: 'inventario.ingresos',
                nombre: 'Registrar ingresos de material'
            },
            {
                clave: 'inventario.salidas',
                nombre: 'Registrar salidas de material'
            },
            {
                clave: 'inventario.compras',
                nombre: 'Registrar compras'
            },
            {
                clave: 'inventario.proveedores',
                nombre: 'Gestionar proveedores'
            },
            {
                clave: 'inventario.transferir',
                nombre: 'Transferir material a técnicos'
            },
            {
                clave: 'inventario.movimientos',
                nombre: 'Ver movimientos'
            },
            {
                clave: 'inventario.almacen_propio',
                nombre: 'Ver su almacén personal'
            },
            {
                clave: 'retiros.gestionar',
                nombre: 'Retiros de equipo a ex abonados',
                nota: 'Abrir, asignar y cerrar las órdenes de recuperación de ONT. El equipo recuperado vuelve al stock; el no recuperado queda registrado como pérdida, sin descontárselo a nadie.'
            }
        ]
    },
    {
        clave: 'reportes',
        nombre: 'Reportes',
        permisos: [
            {
                clave: 'reportes.ver',
                nombre: 'Ver reportes y estadísticas'
            },
            {
                clave: 'reportes.exportar',
                nombre: 'Exportar reportes'
            }
        ]
    },
    {
        clave: 'usuarios',
        nombre: 'Personal',
        permisos: [
            {
                clave: 'usuarios.ver',
                nombre: 'Ver el personal'
            },
            {
                clave: 'usuarios.crear',
                nombre: 'Crear usuarios'
            },
            {
                clave: 'usuarios.editar',
                nombre: 'Editar usuarios'
            },
            {
                clave: 'usuarios.eliminar',
                nombre: 'Eliminar usuarios'
            },
            {
                clave: 'usuarios.permisos',
                nombre: 'Configurar permisos'
            },
            {
                clave: 'usuarios.admins',
                nombre: 'Crear y editar Administradores',
                nota: 'Reservado al Super Administrador: el servidor lo rechaza para cualquier otro rol.',
                soloSuper: true
            }
        ]
    },
    {
        clave: 'config',
        nombre: 'Configuración',
        permisos: [
            {
                clave: 'config.general',
                nombre: 'General y empresa'
            },
            {
                clave: 'config.facturacion',
                nombre: 'Facturación electrónica y SRI'
            },
            {
                clave: 'config.mensajeria',
                nombre: 'Mensajería y correo'
            },
            {
                clave: 'config.planes',
                nombre: 'Servicios, planes y velocidades'
            },
            {
                clave: 'config.tareas',
                nombre: 'Tareas programadas'
            },
            {
                clave: 'config.licencia',
                nombre: 'Licencia'
            },
            {
                clave: 'config.integraciones',
                nombre: 'Integraciones y llaves de API',
                nota: 'Emitir y revocar las llaves con las que entran el CRM, el bot de WhatsApp y los webhooks de las pasarelas. Quien tiene esto puede darle a un sistema externo permiso para cobrar: va con el mismo cuidado que crear un usuario.'
            },
            {
                clave: 'config.seguridad',
                nombre: 'Configuraciones críticas de seguridad',
                nota: 'Reservado al Super Administrador.',
                soloSuper: true
            }
        ]
    },
    {
        clave: 'comisiones',
        nombre: 'Comisiones e incentivos',
        permisos: [
            {
                clave: 'comisiones.ver_propias',
                nombre: 'Ver mi comisión y mi progreso',
                nota: 'Lo que necesita el vendedor: sus ventas válidas, su nivel y cuánto le falta para el siguiente. Nunca las de otro.'
            },
            {
                clave: 'comisiones.ver_todas',
                nombre: 'Ver las comisiones de todo el equipo',
                nota: 'Comparar vendedores y ver el costo comercial. Es información financiera del personal: no la tiene quien vende.'
            },
            {
                clave: 'comisiones.configurar',
                nombre: 'Configurar bases, escalones, bonos y reglas',
                nota: 'Define cuánto se le paga a todos. Cada cambio crea una versión nueva y queda en la auditoría.'
            },
            {
                clave: 'comisiones.aprobar',
                nombre: 'Aprobar comisiones de un período cerrado'
            },
            {
                clave: 'comisiones.pagar',
                nombre: 'Marcar comisiones como pagadas',
                nota: 'Separado de aprobar a propósito: conviene que quien autoriza el gasto no sea quien lo ejecuta.'
            },
            {
                clave: 'comisiones.anular',
                nombre: 'Anular una comisión',
                nota: 'Solo con motivo escrito. Una comisión aprobada no se reduce por bajas posteriores: se anula por fraude o error, y queda registrado.'
            },
            {
                clave: 'comisiones.simular',
                nombre: 'Usar el simulador',
                nota: 'Probar porcentajes y escalones sin tocar la configuración real.'
            }
        ]
    },
    {
        clave: 'auditoria',
        nombre: 'Auditoría',
        permisos: [
            {
                clave: 'auditoria.ver',
                nombre: 'Ver la auditoría'
            },
            {
                clave: 'auditoria.logs',
                nombre: 'Ver los logs del sistema'
            }
        ]
    }
];
const CLAVES_PERMISO = GRUPOS_PERMISOS.flatMap(_c = (g)=>g.permisos.map((p)=>p.clave));
_c1 = CLAVES_PERMISO;
const CLAVES_SOLO_SUPER = GRUPOS_PERMISOS.flatMap(_c2 = (g)=>g.permisos.filter((p)=>p.soloSuper).map((p)=>p.clave));
_c3 = CLAVES_SOLO_SUPER;
const todasDe = function() {
    for(var _len = arguments.length, grupos = new Array(_len), _key = 0; _key < _len; _key++){
        grupos[_key] = arguments[_key];
    }
    return GRUPOS_PERMISOS.filter((g)=>grupos.includes(g.clave)).flatMap((g)=>g.permisos).filter((p)=>!p.soloSuper).map((p)=>p.clave);
};
const ROLES = [
    {
        clave: 'super_admin',
        nombre: 'Super Administrador',
        color: 'rojo',
        resumen: 'Acceso total. Es el único que puede crear, editar o eliminar Administradores.',
        permisos: [
            TODO
        ],
        puede: [
            'Todo el sistema',
            'Crear y eliminar Administradores',
            'Configuración de seguridad',
            'Auditoría y logs'
        ],
        noPuede: []
    },
    {
        clave: 'admin',
        nombre: 'Administrador',
        color: 'ambar',
        resumen: 'Maneja la operación diaria y crea al resto del personal, menos otros Administradores.',
        permisos: [
            ...todasDe('clientes', 'facturacion', 'pagos', 'ventas', 'soporte', 'instalaciones', 'red', 'inventario', 'reportes'),
            'finanzas.dashboard',
            'finanzas.reportes',
            /**
       * El Administrador consolida: es quien cierra la caja de todos y arma lo
       * que se manda afuera. El Super Administrador lo tiene por `TODO`.
       *
       * Cualquier otro perfil los recibe uno por uno desde Gestión de personal,
       * que es como se delega sin regalar el resto del módulo financiero.
       */ 'finanzas.ver_todos',
            'finanzas.conciliacion',
            'finanzas.reporte_arcotel',
            'usuarios.ver',
            'usuarios.crear',
            'usuarios.editar',
            'usuarios.permisos',
            'ventas.equipo',
            'config.general',
            'config.mensajeria',
            'config.planes',
            'config.facturacion',
            // Las llaves del CRM y del bot. Va con el Administrador y no más abajo:
            // emitir una llave que puede cobrar es del mismo peso que crear a un
            // cobrador, y eso ya es suyo.
            'config.integraciones',
            'auditoria.ver',
            // Ve y aprueba lo del equipo, pero NO define cuánto se paga ni marca
            // pagado: esas dos son del Super Administrador hasta que decidas delegarlas.
            'comisiones.ver_todas',
            'comisiones.aprobar'
        ],
        puede: [
            'Crear técnicos, cobradores, cajeros, vendedores, finanzas y bodega',
            'Clientes, inventario, tickets e instalaciones',
            'Ver reportes'
        ],
        noPuede: [
            'Crear otros Administradores ni Super Administradores',
            'Modificar a un Super Administrador',
            'Tocar la configuración crítica de seguridad'
        ]
    },
    {
        clave: 'finanzas',
        nombre: 'Finanzas',
        color: 'verde',
        resumen: 'Ve el dinero entero: ingresos, egresos, cartera y reportes. No toca la red.',
        permisos: [
            ...todasDe('finanzas'),
            'clientes.cartera',
            'clientes.ver',
            'clientes.ver_contacto',
            'facturacion.ver',
            'facturacion.emitir',
            'facturacion.editar',
            'facturacion.vencidas',
            'facturacion.estado_cuenta',
            'pagos.ver',
            'pagos.registrar',
            'pagos.parcial',
            // Finanzas cobra por donde sea: es quien concilia después.
            'pagos.otras_formas',
            'pagos.promesas',
            'pagos.deudores',
            ...todasDe('reportes')
        ],
        puede: [
            'Dashboard financiero, ingresos y egresos',
            'Facturar, registrar pagos y promesas',
            'Reportes financieros y exportarlos'
        ],
        noPuede: [
            'Configurar OLTs',
            'Gestionar usuarios',
            'Aprovisionar servicios',
            'Gestionar instalaciones técnicas'
        ]
    },
    {
        clave: 'cobrador',
        nombre: 'Cobrador',
        color: 'ambar',
        resumen: 'Sale a cobrar: ve al moroso, cómo ubicarlo y registra lo que trae.',
        permisos: [
            'clientes.cartera',
            'clientes.ver_contacto',
            'clientes.ver_direccion',
            'clientes.ver_ubicacion',
            'pagos.deudores',
            'pagos.registrar',
            'pagos.parcial',
            'pagos.otras_formas',
            'pagos.promesas',
            'pagos.observaciones',
            'facturacion.ver',
            'facturacion.vencidas',
            'facturacion.estado_cuenta'
        ],
        puede: [
            'Ver clientes con deuda, su teléfono, dirección y ubicación',
            'Registrar pagos y compromisos',
            'Consultar facturas vencidas'
        ],
        noPuede: [
            'Crear o eliminar clientes',
            'Crear usuarios',
            'Gestionar inventario',
            'Tocar la configuración'
        ]
    },
    {
        clave: 'cajero',
        nombre: 'Cajero',
        color: 'azul',
        resumen: 'Atiende la ventanilla: cobra, factura y reimprime.',
        permisos: [
            'clientes.cartera',
            'clientes.ver_contacto',
            'pagos.registrar',
            'pagos.ver',
            'pagos.otras_formas',
            'facturacion.ver',
            'facturacion.emitir',
            'facturacion.reimprimir',
            'facturacion.estado_cuenta'
        ],
        puede: [
            'Registrar pagos',
            'Emitir y reimprimir facturas',
            'Consultar el estado de cuenta'
        ],
        noPuede: [
            'Configurar el sistema',
            'Gestionar usuarios',
            'Gestionar inventario',
            'Aprovisionar servicios'
        ]
    },
    {
        clave: 'recaudacion',
        nombre: 'Punto de recaudación',
        color: 'verde',
        resumen: 'La tienda que cobra el internet: busca al abonado, cobra el total e imprime. Nada más.',
        /**
     * ── Por qué no alcanzaba con el Cajero ──
     *
     * El cajero de la oficina emite facturas, consulta estados de cuenta y puede
     * tomar un abono parcial. Un punto de recaudación hace UNA cosa —cobrar lo
     * que se debe, completo— y todo lo demás que pueda hacer es superficie para
     * equivocarse en un mostrador donde no hay a quién preguntarle.
     *
     * Sin `clientes.ver`: no navega la cartera, la busca. Es la diferencia entre
     * atender a quien llega y poder llevarse el padrón entero del ISP.
     *
     * Sin `pagos.parcial`: no negocia montos. Es la regla que más tienta a
     * saltarse —"solo tengo veinte"— y el resultado es una factura a medio pagar
     * que el abonado cree cancelada y un corte que llega igual.
     */ permisos: [
            'clientes.cartera',
            'pagos.registrar',
            'pagos.ver',
            'facturacion.reimprimir',
            // Cobra en efectivo y entrega el comprobante: las dos cosas que hace.
            // Sin `pagos.otras_formas`, la pantalla no le ofrece transferencia.
            'pagos.recibo_automatico'
        ],
        puede: [
            'Buscar un abonado por nombre, cédula o contrato',
            'Cobrar el valor completo de lo que debe',
            'Imprimir el comprobante',
            'Ver y exportar lo que él mismo recaudó'
        ],
        noPuede: [
            'Abrir el listado de clientes',
            'Cobrar montos parciales',
            'Editar facturas, nombres ni ningún dato',
            'Ver lo que recaudaron los demás'
        ]
    },
    {
        clave: 'vendedor',
        nombre: 'Vendedor',
        color: 'gris',
        resumen: 'Trabaja el prospecto hasta la solicitud de instalación. No ve plata.',
        // Sin `clientes.ver_ubicacion`: ese permiso abre el mapa de abonados, que
        // es la cartera completa del ISP con nombre y estado de cada uno. El
        // vendedor tiene su propio mapa —el de cobertura—, que no muestra ni un
        // cliente. Dárselo por comodidad sería entregarle la base comercial entera
        // a quien más fácil se la lleva a la competencia.
        // Sin `ventas.equipo`: el vendedor ve su cartera y su meta, no la del
        // resto. Quién vende cuánto es información de quien dirige, y ponerla en la
        // pantalla de todos convierte el tablero en un ranking.
        permisos: [
            // Sin `ventas.planes`: ese permiso solo abre la pantalla de Servicios, y
            // ahí el vendedor no tiene nada que hacer. El plan se elige donde importa
            // —dentro del Cotizador y de la ficha del prospecto— con el catálogo
            // vigente y su precio. Una pantalla más con la misma lista es un lugar
            // extra donde mirar un precio que puede estar desactualizado respecto del
            // que la cotización acaba de congelar.
            ...todasDe('ventas').filter((c)=>![
                    'ventas.equipo',
                    'ventas.inteligencia',
                    'ventas.planes'
                ].includes(c)),
            'clientes.ver_contacto',
            // Cobrar lo que vendió, dentro de su ventana. Es el único permiso de
            // `pagos` que tiene, y a propósito: registra la GESTIÓN del cobro, no el
            // pago. El dinero lo recibe caja.
            'pagos.observaciones',
            // Su comisión, no la de nadie más. Sin esto el módulo no cumple su
            // objetivo: un incentivo que el vendedor no puede ver no incentiva.
            'comisiones.ver_propias'
        ],
        puede: [
            'Prospectos, oportunidades, llamadas y visitas',
            'Mapa de cobertura: hasta dónde se vende y dónde hay puerto libre',
            'Consultar el catálogo de planes y su precio',
            'Cotizaciones y solicitudes de instalación',
            'Ver su propia comisión, su nivel y cuánto le falta para el siguiente'
        ],
        noPuede: [
            'Ver la cartera de clientes ni su mapa',
            'Editar planes, precios o perfiles de velocidad',
            'Ver reportes financieros ni registrar pagos',
            'Ver la comisión de otro vendedor ni el costo comercial del equipo',
            'Gestionar inventario o configurar el sistema'
        ]
    },
    {
        clave: 'supervisor_ventas',
        nombre: 'Supervisor de ventas',
        color: 'verde',
        resumen: 'Dirige al equipo comercial: metas, embudo y cobranzas. No accede a la base de abonados.',
        // Sin `clientes.cartera`, y es la decisión que define el rol.
        //
        // La versión anterior de este rol —un "Supervisor" que hacía las dos cosas—
        // lo tenía, y eso le daba a un jefe comercial exactamente lo que acabamos de
        // quitarle a los vendedores. Con más motivo para llevárselo, además, porque
        // maneja al equipo entero.
        //
        // Ve el embudo y el rendimiento de su gente. Un dato puntual de un abonado
        // se lo pide a administración, y ese pedido queda registrado.
        permisos: [
            // Igual que el vendedor: el catálogo se consulta desde el Cotizador, no
            // desde una pantalla de configuración de servicios.
            ...todasDe('ventas').filter((c)=>c !== 'ventas.planes'),
            'clientes.ver_contacto',
            // Supervisa las cobranzas del equipo, así que abre la bandeja.
            'pagos.observaciones',
            ...todasDe('reportes'),
            // Para poder mirar qué está haciendo su equipo: quién abre cuántas fichas
            // es justamente lo que un jefe de ventas tiene que poder revisar.
            'auditoria.ver',
            // Ve las comisiones del equipo y las aprueba. No define cuánto se paga
            // —eso mueve el costo comercial de la empresa entera— ni marca pagado.
            'comisiones.ver_propias',
            'comisiones.ver_todas',
            'comisiones.aprobar',
            'comisiones.simular'
        ],
        puede: [
            'El tablero comercial del equipo completo, y fijar las metas',
            'Ver los prospectos, cotizaciones y cobranzas de sus vendedores',
            'Reportes comerciales y auditoría del equipo',
            'Ver y aprobar las comisiones del equipo, y simular escenarios'
        ],
        noPuede: [
            'Abrir la base de abonados ni buscar en ella',
            'Asignar técnicos ni tocar instalaciones',
            'Registrar pagos o tocar la red'
        ]
    },
    {
        clave: 'jefe_tecnico',
        nombre: 'Jefe técnico',
        color: 'azul',
        resumen: 'Operaciones: recibe las ventas cerradas, valida el expediente, asigna técnicos y controla la red.',
        permisos: [
            // Con la cartera, y acá sí corresponde: para despachar una cuadrilla hay
            // que ver al abonado, su dirección y su historial de fallas.
            'clientes.cartera',
            'clientes.ver',
            'clientes.ver_contacto',
            'clientes.ver_direccion',
            'clientes.ver_ubicacion',
            ...todasDe('soporte', 'instalaciones', 'reportes'),
            'ventas.inteligencia',
            // Ve el personal porque de ahí elige a quién asignar cada trabajo.
            'usuarios.ver',
            'red.olts_ver',
            'red.onus_ver',
            'red.monitoreo',
            'red.cortes',
            // Despacha material a los técnicos.
            'inventario.ver',
            'inventario.movimientos',
            'inventario.transferir',
            // Manda al técnico a recuperar el equipo del que se fue: es despacho de
            // campo, igual que asignar una instalación.
            'retiros.gestionar',
            'auditoria.ver'
        ],
        puede: [
            'La bandeja de nuevas instalaciones: validar el expediente y asignar técnico',
            'Ver y asignar todos los tickets e instalaciones',
            'Ver el estado de la red y los cortes',
            'Transferir material a los técnicos'
        ],
        noPuede: [
            'Ver el tablero comercial ni las metas de los vendedores',
            'Registrar ni anular pagos',
            'Crear usuarios ni configurar el sistema'
        ]
    },
    {
        clave: 'tecnico',
        nombre: 'Técnico',
        color: 'azul',
        resumen: 'Solo lo suyo: los clientes de sus tickets e instalaciones, y nada más.',
        permisos: [
            'clientes.ver_contacto',
            'clientes.ver_direccion',
            'clientes.ver_ubicacion',
            'soporte.asignados',
            'soporte.estado',
            'soporte.cerrar',
            'instalaciones.asignadas',
            'instalaciones.completar',
            'instalaciones.materiales',
            'red.onus_ver',
            // Ver el estado de la red, sin poder tocarla. Parado en la vereda, saber
            // si el nodo de la zona está caído es la diferencia entre revisar el
            // domicilio durante una hora y avisar que la falla no es de ahí.
            'red.monitoreo_ver',
            'inventario.almacen_propio'
        ],
        puede: [
            'Sus tickets e instalaciones asignadas',
            'Nombre, celular, dirección y GPS del cliente de ese trabajo',
            'Datos de la ONT: serial, MAC, OLT, puerto PON y potencias',
            'Cerrar tickets, completar instalaciones y descargar material de su almacén',
            'Ver si los nodos de la red están arriba o caídos'
        ],
        noPuede: [
            'Ver la cartera completa de clientes',
            'Ver facturación, pagos ni reportes financieros',
            'Crear usuarios',
            'Modificar configuraciones'
        ]
    },
    {
        clave: 'bodega',
        nombre: 'Bodega / Almacén',
        color: 'ambar',
        resumen: 'Controla el material: lo que entra, lo que sale y lo que se lleva cada técnico.',
        // Sin `inventario.almacen_propio`: ese permiso abre "Mi almacén", que es la
        // pantalla del técnico. A quien atiende el depósito le mostraría una
        // sección que le dice que no está vinculado a ningún técnico — ruido puro.
        permisos: [
            ...todasDe('inventario').filter((c)=>c !== 'inventario.almacen_propio'),
            'reportes.ver'
        ],
        puede: [
            'Ingresos y salidas de inventario',
            'Compras y proveedores',
            'Control de stock y transferencias a técnicos',
            'Ver movimientos'
        ],
        noPuede: [
            'Ver finanzas',
            'Configurar el sistema',
            'Gestionar usuarios'
        ]
    }
];
const buscarRol = (clave)=>ROLES.find((r)=>r.clave === clave);
const permisosDeRol = (clave)=>{
    var _buscarRol;
    var _buscarRol_permisos;
    return [
        ...(_buscarRol_permisos = (_buscarRol = buscarRol(clave)) === null || _buscarRol === void 0 ? void 0 : _buscarRol.permisos) !== null && _buscarRol_permisos !== void 0 ? _buscarRol_permisos : []
    ];
};
const nombreRol = (clave)=>{
    var _buscarRol;
    var _buscarRol_nombre;
    return (_buscarRol_nombre = (_buscarRol = buscarRol(clave)) === null || _buscarRol === void 0 ? void 0 : _buscarRol.nombre) !== null && _buscarRol_nombre !== void 0 ? _buscarRol_nombre : clave;
};
const nombrePermiso = (clave)=>{
    for (const g of GRUPOS_PERMISOS){
        const p = g.permisos.find((x)=>x.clave === clave);
        if (p) return p.nombre;
    }
    return clave;
};
function diferenciaConElRol(usuario) {
    const p = Array.isArray(usuario === null || usuario === void 0 ? void 0 : usuario.permisos) ? usuario.permisos : [];
    // Con el comodín no hay nada que comparar: puede todo por definición.
    if (p.includes(TODO)) return {
        de_mas: [],
        de_menos: []
    };
    const molde = permisosDeRol(usuario === null || usuario === void 0 ? void 0 : usuario.rol);
    if (!molde.length) return {
        de_mas: [],
        de_menos: []
    };
    return {
        de_mas: p.filter((c)=>!molde.includes(c)),
        de_menos: molde.filter((c)=>!p.includes(c))
    };
}
function tienePermiso(usuario, clave) {
    if (!usuario || usuario.activo === false) return false;
    var _usuario_permisos;
    const lista = (_usuario_permisos = usuario.permisos) !== null && _usuario_permisos !== void 0 ? _usuario_permisos : [];
    return lista.includes(TODO) || lista.includes(clave);
}
function puedeGestionarRol(rolDeQuienGestiona, rolObjetivo) {
    // El Super Administrador NO se crea ni se asigna desde el sistema. Nadie:
    // tampoco otro Super Administrador.
    //
    // Es el dueño de la instalación, no un rol que se reparte. La primera versión
    // dejaba que un Super Administrador creara otro, y eso abría un camino corto
    // y silencioso: alguien que encuentra la sesión abierta se crea un segundo
    // Super Administrador, entra con él y elimina al primero. La verificación del
    // "último Super Administrador activo" no lo frena, porque para entonces ya
    // son dos. El dueño queda afuera de su propio sistema y solo se recupera
    // entrando a la base a mano.
    //
    // El costo de cerrarlo es que sumar un segundo dueño —dos socios, una
    // sucesión— deja de hacerse por pantalla y pasa a ser un SQL deliberado, que
    // está documentado al pie de la migración 66. Es exactamente el tipo de
    // decisión que conviene que cueste.
    if (rolObjetivo === 'super_admin') return false;
    if (rolDeQuienGestiona === 'super_admin') return true;
    // Un Administrador arma al resto del personal, pero no a sus pares ni a quien
    // está por encima. Si pudiera, el escalón dejaría de existir.
    if (rolDeQuienGestiona === 'admin') return rolObjetivo !== 'admin';
    return false;
}
function puedeEditarA(actor, objetivo) {
    if (!actor || !objetivo) return false;
    if (actor.id && actor.id === objetivo.id) return true;
    return puedeGestionarRol(actor.rol, objetivo.rol);
}
const rolesAsignablesPor = (rol)=>ROLES.filter((r)=>puedeGestionarRol(rol, r.clave));
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CLAVES_PERMISO$GRUPOS_PERMISOS.flatMap");
__turbopack_context__.k.register(_c1, "CLAVES_PERMISO");
__turbopack_context__.k.register(_c2, "CLAVES_SOLO_SUPER$GRUPOS_PERMISOS.flatMap");
__turbopack_context__.k.register(_c3, "CLAVES_SOLO_SUPER");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/personal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "personalApi",
    ()=>personalApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permisos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validacion/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validacion/enVivo.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Antes de mandar un usuario: las mismas reglas de la tabla (correo, celular,
 * largo de cada campo...). Si algo no cumple, no sale el pedido.
 */ function validarUsuario(datos, modo) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validarDatos"])('usuarios_sistema', datos, modo);
    if (r.ok) return r.datos;
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorDeValidacion"])(r.errores);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisarErrores"])(e.campos);
    throw Object.assign(new Error(e.message), {
        hint: e.hint,
        campos: e.campos,
        code: e.code
    });
}
/**
 * El acceso a los datos de personal y auditoría.
 *
 * Leer va directo a las APIs de Django (la sesión del usuario ya da permiso):
 * pasarlo por más saltos solo sumaría demora. Escribir va por el módulo de
 * red — el proceso interno, a través del proxy de Django —, siempre: ahí se
 * verifica quién puede crear a quién, que en el navegador se saltea con la
 * consola abierta.
 */ const DJANGO = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || 'http://localhost:8000/api/v1').replace(/\/$/, '');
const BASE = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1/red") || "".concat(DJANGO, "/red")).replace(/\/$/, '');
/**
 * En modo demo no hay backend ni servicio de red: se arma un plantel de mentira en
 * memoria. Sin esto la pantalla de personal sería la única del sistema que la
 * demo no puede mostrar, que es justo la que más se quiere mostrar al vender.
 */ const demo = {
    usuarios: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].slice(0, 6).map((rol, i)=>({
            id: "demo-".concat(rol.clave),
            nombre: [
                'Ana',
                'Carlos',
                'Lucía',
                'Marco',
                'Sofía',
                'Diego'
            ][i],
            apellido: [
                'Rojas',
                'Pineda',
                'Vera',
                'Cedeño',
                'Marín',
                'Torres'
            ][i],
            usuario: [
                'arojas',
                'cpineda',
                'lvera',
                'mcedeno',
                'smarin',
                'dtorres'
            ][i],
            email: "demo".concat(i, "@ejemplo.com"),
            celular: "09".concat(80000000 + i * 111111),
            rol: rol.clave,
            activo: i !== 5,
            todas_las_zonas: i < 2,
            dos_factores: i < 2,
            permisos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["permisosDeRol"])(rol.clave),
            ultimo_acceso: null,
            creado_en: new Date(2025, i, 3).toISOString()
        })),
    auditoria: []
};
async function pedir(metodo, ruta, cuerpo) {
    var _data_session;
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getSession();
    const token = data === null || data === void 0 ? void 0 : (_data_session = data.session) === null || _data_session === void 0 ? void 0 : _data_session.access_token;
    const res = await fetch("".concat(BASE).concat(ruta), {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
            ...token ? {
                Authorization: "Bearer ".concat(token)
            } : {}
        },
        body: cuerpo ? JSON.stringify(cuerpo) : undefined
    }).catch(()=>{
        throw new Error("No se puede contactar al backend en ".concat(BASE, ". ¿Está corriendo Django?"));
    });
    const texto = await res.text();
    let json = null;
    try {
        json = texto ? JSON.parse(texto) : null;
    } catch (e) {
    /* respuesta que no es JSON: se informa el texto crudo abajo */ }
    if (!res.ok) {
        const err = new Error((json === null || json === void 0 ? void 0 : json.error) || (json === null || json === void 0 ? void 0 : json.mensaje) || texto || "Error ".concat(res.status));
        err.hint = json === null || json === void 0 ? void 0 : json.hint;
        err.status = res.status;
        throw err;
    }
    return json;
}
const personalApi = {
    /** El plantel completo. Incluye a los inactivos: filtrarlos es de la pantalla. */ async listar () {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) return demo.usuarios;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('usuarios_sistema').select('*').order('activo', {
            ascending: false
        }).order('nombre');
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * El legajo de quien tiene la sesión abierta.
   *
   * ── Por qué distingue "no hay legajo" de "no se pudo leer" ──
   *
   * Antes ignoraba el `error` de la consulta y devolvía `null` en los dos
   * casos. Y `null` significa, para el resto del sistema, "instalación vieja sin
   * la migración 66" — que abre todos los permisos para no dejar a nadie afuera
   * al actualizar.
   *
   * O sea que un corte de red de un segundo le daba a un vendedor el sistema
   * completo hasta que recargara. Silencioso, y del lado peligroso.
   *
   * Ahora `null` es solo lo que de verdad es null: la consulta anduvo y no hay
   * fila. Si la consulta falla, esto revienta y quien llama decide — que no es
   * lo mismo que suponer.
   */ async yo () {
        var _ses_session_user, _ses_session;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) return {
            ...demo.usuarios[0],
            rol: 'super_admin',
            permisos: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODO"]
            ]
        };
        // `getSession` lee del almacenamiento local; `getUser` pregunta al servidor.
        // Sin señal, el segundo se cuelga y con él toda la app: hay que saber quién
        // entró para dibujar cualquier cosa.
        const { data: ses } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getSession();
        const authId = ses === null || ses === void 0 ? void 0 : (_ses_session = ses.session) === null || _ses_session === void 0 ? void 0 : (_ses_session_user = _ses_session.user) === null || _ses_session_user === void 0 ? void 0 : _ses_session_user.id;
        if (!authId) return null;
        /**
     * Sin red, ni se intenta.
     *
     * Es el primer paso de todo el arranque, así que cada segundo que espere
     * acá es un segundo de pantalla vacía. Cuando `navigator.onLine` dice que
     * no hay red, no se equivoca —el dispositivo no tiene ninguna interfaz— y
     * conviene fallar en el acto para que `AuthContext` use el perfil guardado.
     */ if (!navigator.onLine) {
            const err = new Error('Sin conexión');
            err.sinRed = true;
            throw err;
        }
        /**
     * Y con red dudosa, cinco segundos.
     *
     * Sin este límite, en una zona de una raya la consulta no falla: espera. Y
     * mientras espera, `cargandoPerfil` sigue en true y la pantalla queda en
     * blanco — que es exactamente lo que le pasó al técnico en el campo.
     *
     * Fallar rápido es lo que permite pasar al plan B: el perfil guardado.
     */ const corte = new AbortController();
        const reloj = setTimeout(()=>corte.abort(), 5000);
        try {
            const { data: fila, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('usuarios_sistema').select('*').eq('auth_id', authId).abortSignal(corte.signal).maybeSingle();
            if (error) throw error;
            return fila !== null && fila !== void 0 ? fila : null;
        } finally{
            clearTimeout(reloj);
        }
    },
    crear: async (usuario)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"] ? {
            usuario
        } : pedir('POST', '/api/personal', validarUsuario(usuario, 'crear')),
    editar: (id, cambios)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            usuario: cambios
        }) : (async ()=>pedir('PATCH', "/api/personal/".concat(id), validarUsuario(cambios, 'editar')))(),
    eliminar: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            ok: true
        }) : pedir('DELETE', "/api/personal/".concat(id)),
    cambiarClave: (id, clave)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            ok: true
        }) : pedir('POST', "/api/personal/".concat(id, "/clave"), {
            clave
        }),
    /** Sella el último acceso al entrar. Que falle no puede impedir usar la app. */ marcarAcceso: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            ok: true
        }) : pedir('POST', '/api/personal/acceso').catch(()=>null),
    /**
   * La auditoría. `usuarioId` la acota al historial de una persona, que es como
   * se la consulta el 90% de las veces: alguien pregunta qué hizo fulano.
   */ async auditoria () {
        let { usuarioId, accion, desde, limite = 200 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) return demo.auditoria;
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('auditoria_sistema').select('*').order('creado_en', {
            ascending: false
        }).limit(limite);
        if (usuarioId) q = q.eq('usuario_id', usuarioId);
        if (accion) q = q.like('accion', "".concat(accion, "%"));
        if (desde) q = q.gte('creado_en', desde);
        const { data, error } = await q;
        if (error) throw error;
        return data !== null && data !== void 0 ? data : [];
    },
    /**
   * Deja un hecho registrado desde cualquier pantalla.
   *
   * No lanza: una acción que ya sucedió no puede fallar porque no se pudo
   * escribir su renglón. Lo que sí hace es avisar por consola.
   */ registrar: function(accion, descripcion) {
        let extra = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve() : pedir('POST', '/api/personal/auditoria', {
            accion,
            descripcion,
            ...extra
        }).catch((err)=>console.warn('[auditoria] no se registró:', err.message));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/instalaciones.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Reglas del ciclo de vida de una instalación.
 *
 * Viven acá porque las comparten tres pantallas —la agenda de la oficina, el
 * asistente del celular y la ficha del abonado— y porque son reglas del
 * negocio, no decisiones de diseño: un trabajo no se puede cerrar sin que
 * alguien haya medido la señal, y eso tiene que valer igual en las tres.
 */ __turbopack_context__.s([
    "COLOR_SEMAFORO",
    ()=>COLOR_SEMAFORO,
    "ESTADOS",
    ()=>ESTADOS,
    "ESTADOS_ABIERTOS_INST",
    ()=>ESTADOS_ABIERTOS_INST,
    "ESTADOS_BACKOFFICE",
    ()=>ESTADOS_BACKOFFICE,
    "FACTIBILIDAD",
    ()=>FACTIBILIDAD,
    "FRANJAS",
    ()=>FRANJAS,
    "OPTICA",
    ()=>OPTICA,
    "PASOS",
    ()=>PASOS,
    "PRUEBAS",
    ()=>PRUEBAS,
    "RADIO",
    ()=>RADIO,
    "TECNOLOGIAS",
    ()=>TECNOLOGIAS,
    "TIPOS",
    ()=>TIPOS,
    "cargarParametros",
    ()=>cargarParametros,
    "claveSugerida",
    ()=>claveSugerida,
    "conUnidad",
    ()=>conUnidad,
    "faltantes",
    ()=>faltantes,
    "leerEtiqueta",
    ()=>leerEtiqueta,
    "normalizarMac",
    ()=>normalizarMac,
    "pasoAlcanzado",
    ()=>pasoAlcanzado,
    "semaforoDe",
    ()=>semaforoDe,
    "semaforoOptico",
    ()=>semaforoOptico,
    "semaforoPruebas",
    ()=>semaforoPruebas,
    "semaforoRadio",
    ()=>semaforoRadio,
    "usuarioSugerido",
    ()=>usuarioSugerido
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript) <export django as supabase>");
;
const ESTADOS = {
    nueva: {
        label: 'Nueva',
        color: 'violeta',
        clase: 'bg-violet-500/15 text-violet-300 border-violet-500/40',
        ayuda: 'Llegó del vendedor con el expediente completo. Falta revisarla.'
    },
    revisando: {
        label: 'Revisando',
        color: 'ambar',
        clase: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
        ayuda: 'Alguien está verificando la documentación y la ubicación.'
    },
    lista_asignar: {
        label: 'Lista para asignar',
        color: 'azul',
        clase: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
        ayuda: 'Documentación aprobada. Falta elegir técnico y fecha.'
    },
    prospecto: {
        label: 'Prospecto',
        color: 'gris',
        clase: 'bg-slate-500/15 text-slate-300 border-slate-500/40',
        ayuda: 'Pidió el servicio. Falta saber si le llega.'
    },
    agendada: {
        label: 'Agendada',
        color: 'azul',
        clase: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
        ayuda: 'Es factible, tiene día y tiene quién vaya.'
    },
    en_curso: {
        label: 'En curso',
        color: 'ambar',
        clase: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
        ayuda: 'El técnico está en el domicilio instalando.'
    },
    hecha: {
        label: 'Hecha',
        color: 'verde',
        clase: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
        ayuda: 'Quedó instalado y el abonado pasó a Usuarios.'
    },
    en_ruta: {
        label: 'En ruta',
        color: 'ambar',
        clase: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
        ayuda: 'El técnico salió para allá.'
    },
    no_realizada: {
        label: 'No realizada',
        color: 'rojo',
        clase: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
        ayuda: 'Fue y no se pudo: no había nadie, faltaba material, no era factible.'
    },
    reprogramada: {
        label: 'Reprogramada',
        color: 'gris',
        clase: 'bg-slate-500/15 text-slate-300 border-slate-500/40',
        ayuda: 'Se pasó para otro día. Vuelve a la agenda con fecha nueva.'
    },
    cancelada: {
        label: 'Cancelada',
        color: 'rojo',
        clase: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
        ayuda: 'No se hizo y no se va a hacer: el cliente desistió.'
    }
};
const ESTADOS_ABIERTOS_INST = [
    'nueva',
    'revisando',
    'lista_asignar',
    'prospecto',
    'agendada',
    'en_ruta',
    'en_curso',
    'reprogramada'
];
const ESTADOS_BACKOFFICE = [
    'nueva',
    'revisando',
    'lista_asignar'
];
const FACTIBILIDAD = {
    pendiente: {
        label: 'Sin revisar',
        color: 'gris',
        ayuda: 'Todavía nadie miró si hay cobertura en esa dirección.'
    },
    factible: {
        label: 'Factible',
        color: 'verde',
        ayuda: 'Hay caja o torre cerca con lugar libre.'
    },
    con_obra: {
        label: 'Con obra',
        color: 'ambar',
        ayuda: 'Llega, pero hay que tender, poner un poste o ampliar la caja.'
    },
    no_factible: {
        label: 'No factible',
        color: 'rojo',
        ayuda: 'Fuera de alcance. Queda registrado para cuando se amplíe la red.'
    }
};
const TECNOLOGIAS = {
    ftth: {
        label: 'Fibra (FTTH)',
        equipo: 'ONT',
        punto: 'caja NAP'
    },
    wireless: {
        label: 'Inalámbrico',
        equipo: 'antena CPE',
        punto: 'torre'
    }
};
const TIPOS = [
    {
        valor: 'nueva',
        label: 'Instalación nueva'
    },
    {
        valor: 'traslado',
        label: 'Traslado'
    },
    {
        valor: 'reparacion',
        label: 'Reparación'
    },
    {
        valor: 'revision',
        label: 'Revisión'
    },
    {
        valor: 'retiro',
        label: 'Retiro de equipos'
    }
];
const FRANJAS = {
    manana: 'Mañana (08:00 – 12:00)',
    tarde: 'Tarde (13:00 – 18:00)',
    exacta: 'Hora exacta'
};
const PASOS = [
    {
        n: 1,
        titulo: 'Lectura del equipo',
        corto: 'Equipo'
    },
    {
        n: 2,
        titulo: 'Autenticación y potencia',
        corto: 'Señal'
    },
    {
        n: 3,
        titulo: 'Parámetros de red',
        corto: 'Red'
    },
    {
        n: 4,
        titulo: 'Test de salida',
        corto: 'Pruebas'
    },
    // Antes del cierre y no después: una vez que el alta se finaliza, el
    // asistente se cierra y el técnico ya está guardando la escalera. Lo que no
    // se descuenta acá no se descuenta nunca, y el inventario empieza a mentir.
    {
        n: 5,
        titulo: 'Material utilizado',
        corto: 'Material'
    },
    {
        n: 6,
        titulo: 'Cierre y alta',
        corto: 'Cierre'
    }
];
const OPTICA = {
    optimo: -25,
    limite: -27,
    saturado: -8
};
const RADIO = {
    optimo: -70,
    limite: -80,
    ccqMinimo: 80
};
const PRUEBAS = {
    pingBuenoMs: 30,
    pingLimiteMs: 80,
    perdidaMaximaPct: 2,
    velocidadMinimaPct: 80
};
let parametrosCargados = false;
async function cargarParametros() {
    if (parametrosCargados) return {
        OPTICA,
        RADIO,
        PRUEBAS
    };
    // Sin red no se intenta: dejaría una consulta colgada en el arranque, que es
    // justo el momento en que el técnico está mirando una pantalla vacía. Los
    // valores de fábrica alcanzan hasta que vuelva la señal.
    if (typeof navigator !== 'undefined' && !navigator.onLine) return {
        OPTICA,
        RADIO,
        PRUEBAS
    };
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('parametros_tecnicos').select('*').eq('id', 1).maybeSingle();
        if (error || !data) throw error !== null && error !== void 0 ? error : new Error('sin parámetros');
        OPTICA.optimo = Number(data.optica_optimo);
        OPTICA.limite = Number(data.optica_limite);
        OPTICA.saturado = Number(data.optica_saturado);
        RADIO.optimo = Number(data.radio_optimo);
        RADIO.limite = Number(data.radio_limite);
        RADIO.ccqMinimo = Number(data.radio_ccq_minimo);
        PRUEBAS.pingBuenoMs = Number(data.ping_bueno_ms);
        PRUEBAS.pingLimiteMs = Number(data.ping_limite_ms);
        PRUEBAS.perdidaMaximaPct = Number(data.perdida_maxima_pct);
        PRUEBAS.velocidadMinimaPct = Number(data.velocidad_minima_pct);
        parametrosCargados = true;
    } catch (err) {
        console.warn('No se pudieron leer los parámetros técnicos, se usan los de fábrica:', err);
    }
    return {
        OPTICA,
        RADIO,
        PRUEBAS
    };
}
function semaforoPruebas(param, planMbps) {
    let { ping_ms, ping_perdida, test_bajada_mbps } = param;
    if (ping_ms == null && test_bajada_mbps == null) return null;
    if (ping_ms != null && ping_ms > PRUEBAS.pingLimiteMs || ping_perdida != null && ping_perdida > PRUEBAS.perdidaMaximaPct || planMbps > 0 && test_bajada_mbps != null && test_bajada_mbps < planMbps * PRUEBAS.velocidadMinimaPct / 100) {
        return 'rojo';
    }
    if (ping_ms != null && ping_ms > PRUEBAS.pingBuenoMs) return 'ambar';
    return 'verde';
}
function semaforoOptico(rx) {
    if (rx == null) return null;
    if (rx < OPTICA.limite || rx > OPTICA.saturado) return 'rojo';
    if (rx < OPTICA.optimo) return 'ambar';
    return 'verde';
}
function semaforoRadio(senal, ccq) {
    if (senal == null) return null;
    if (senal < RADIO.limite) return 'rojo';
    if (senal < RADIO.optimo || ccq != null && ccq < RADIO.ccqMinimo) return 'ambar';
    return 'verde';
}
const semaforoDe = (i)=>(i === null || i === void 0 ? void 0 : i.tecnologia) === 'wireless' ? semaforoRadio(i === null || i === void 0 ? void 0 : i.senal_dbm, i === null || i === void 0 ? void 0 : i.ccq) : semaforoOptico(i === null || i === void 0 ? void 0 : i.rx_power_dbm);
const COLOR_SEMAFORO = {
    verde: {
        clase: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
        label: 'Óptimo'
    },
    ambar: {
        clase: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
        label: 'Justo'
    },
    rojo: {
        clase: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
        label: 'Atenuado'
    },
    // "No se pudo medir" no es un color del semáforo óptico: es la ausencia de
    // medición. Antes caía en rojo y el técnico revisaba conectores sanos porque
    // el equipo no había contestado.
    gris: {
        clase: 'bg-slate-500/15 text-slate-300 border-slate-500/40',
        label: 'Sin medición'
    }
};
function faltantes(i) {
    if (!i) return [];
    const falta = [];
    if (!i.equipo_sn && !i.equipo_mac) falta.push('Leer la serie o la MAC del equipo');
    if (!i.lectura_at) falta.push('Medir la señal contra la OLT o la radio');
    if (i.tipo_conexion === 'pppoe') {
        if (!i.usuario_ppp) falta.push('Asignar el usuario PPPoE');
    } else if (i.tipo_ip === 'fija' && !i.ip) {
        falta.push('Asignar la IP');
    }
    if (!i.pruebas_at) falta.push('Correr el test de salida');
    if (!i.firma_b64) falta.push('Tomar la firma de conformidad');
    return falta;
}
function pasoAlcanzado(i) {
    if (!i) return 1;
    // La firma manda sobre las pruebas: si ya firmó, el trabajo está en el
    // cierre. El material se salta acá a propósito — se llega a él avanzando,
    // no se rebobina a alguien que ya está por finalizar.
    if (i.firma_b64) return 6;
    if (i.pruebas_at) return 5;
    if (i.usuario_ppp || i.ip) return 4;
    if (i.lectura_at) return 3;
    if (i.equipo_sn || i.equipo_mac) return 2;
    return 1;
}
function leerEtiqueta(texto) {
    var _crudo_match, _crudo_match1, _crudo_match2, _this;
    const crudo = String(texto !== null && texto !== void 0 ? texto : '').trim();
    if (!crudo) return {
        sn: null,
        mac: null
    };
    var _crudo_match_;
    const mac = (_crudo_match_ = (_crudo_match = crudo.match(/([0-9A-F]{2}[:-]){5}[0-9A-F]{2}/i)) === null || _crudo_match === void 0 ? void 0 : _crudo_match[0]) !== null && _crudo_match_ !== void 0 ? _crudo_match_ : null;
    var _crudo_match_1;
    // Serie GPON: cuatro letras del fabricante y ocho hexadecimales.
    const gpon = (_crudo_match_1 = (_crudo_match1 = crudo.match(/\b([A-Z]{4}[0-9A-F]{8})\b/i)) === null || _crudo_match1 === void 0 ? void 0 : _crudo_match1[0]) !== null && _crudo_match_1 !== void 0 ? _crudo_match_1 : null;
    var _crudo_match_2;
    const etiquetada = (_crudo_match_2 = (_crudo_match2 = crudo.match(/\b(?:SN|S\/N|SERIE|SERIAL)\s*[:=]?\s*([A-Z0-9-]{6,32})\b/i)) === null || _crudo_match2 === void 0 ? void 0 : _crudo_match2[1]) !== null && _crudo_match_2 !== void 0 ? _crudo_match_2 : null;
    // Sin etiqueta ni patrón conocido, si lo escaneado es una sola palabra se
    // toma entera: es lo que pasa con los códigos de barras, que traen la serie
    // pelada.
    const suelto = /^[A-Z0-9-]{6,32}$/i.test(crudo) ? crudo : null;
    var _ref, _toUpperCase;
    return {
        sn: (_toUpperCase = (_this = (_ref = gpon !== null && gpon !== void 0 ? gpon : etiquetada) !== null && _ref !== void 0 ? _ref : suelto) === null || _this === void 0 ? void 0 : _this.toUpperCase()) !== null && _toUpperCase !== void 0 ? _toUpperCase : null,
        mac: mac ? mac.toUpperCase().replace(/-/g, ':') : null
    };
}
function normalizarMac(texto) {
    const hex = String(texto !== null && texto !== void 0 ? texto : '').replace(/[^0-9A-F]/gi, '').toUpperCase();
    if (hex.length !== 12) return null;
    return hex.match(/.{2}/g).join(':');
}
// NFD separa la tilde de la letra y `\p{Diacritic}` la borra. Escrito como
// rango de caracteres serían marcas que se dibujan encima de la letra anterior
// y en el editor quedan invisibles.
const sinTildes = (t)=>String(t !== null && t !== void 0 ? t : '').normalize('NFD').replace(RegExp("\\p{Diacritic}", "gu"), '').toLowerCase();
function usuarioSugerido() {
    let { nombre, identificacion } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const partes = sinTildes(nombre).replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(Boolean);
    if (!partes.length) return String(identificacion !== null && identificacion !== void 0 ? identificacion : '').replace(/\D/g, '') || '';
    if (partes.length === 1) return partes[0].slice(0, 40);
    // "Jefferson Fabián Oña Riera" → jefferson.ona. Con cuatro palabras el
    // apellido es el tercero, porque acá se usan dos nombres y dos apellidos;
    // con menos, el segundo. El técnico lo puede corregir de todos modos.
    const apellido = partes.length >= 4 ? partes[2] : partes[1];
    return "".concat(partes[0], ".").concat(apellido).slice(0, 40);
}
function claveSugerida() {
    let largo = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
    const alfabeto = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    const bytes = crypto.getRandomValues(new Uint8Array(largo));
    return Array.from(bytes, (b)=>alfabeto[b % alfabeto.length]).join('');
}
const conUnidad = function(valor, unidad) {
    let decimales = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return valor == null || valor === '' ? '—' : "".concat(Number(valor).toFixed(decimales), " ").concat(unidad);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cacheLocal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Lo último que se pudo leer, guardado para cuando no hay señal.
 *
 * ── Por qué hace falta ──
 *
 * La cola resuelve la mitad del trabajo sin conexión: lo que el técnico
 * ESCRIBE. La otra mitad es lo que necesita LEER —su ruta, sus órdenes, los
 * datos del cliente— y eso venía de una consulta que sin señal falla.
 *
 * El resultado era una app que abría perfecto y mostraba tarjetas vacías. Peor
 * que no abrir: parece rota.
 *
 * ── La regla que no se negocia ──
 *
 * Un dato guardado NUNCA se muestra como si fuera de ahora. Siempre viaja con
 * la hora en que se leyó, y la pantalla la dice.
 *
 * Es el mismo criterio que la cola: ahí se dice "preparado" y no "enviado";
 * acá se dice "datos de las 14:32" y no simplemente los datos. Un técnico
 * mirando la ruta de ayer creyendo que es la de hoy maneja hasta la casa
 * equivocada.
 *
 * ── Por qué localStorage y no IndexedDB ──
 *
 * IndexedDB es para la cola, que guarda cosas que no se pueden perder. Esto es
 * distinto: si se pierde, se vuelve a pedir. localStorage es síncrono, así que
 * la pantalla puede dibujarse con lo guardado en el primer cuadro, sin el
 * parpadeo de esperar una promesa.
 */ __turbopack_context__.s([
    "conCache",
    ()=>conCache,
    "guardarCache",
    ()=>guardarCache,
    "leerCache",
    ()=>leerCache,
    "limpiarCache",
    ()=>limpiarCache
]);
const PREFIJO = 'campo-cache:';
function guardarCache(clave, datos) {
    try {
        localStorage.setItem(PREFIJO + clave, JSON.stringify({
            en: Date.now(),
            datos
        }));
    } catch (e) {
    // Sin espacio o en modo privado. No es motivo para romper nada: se sigue
    // sin caché, que es como estaba antes.
    }
}
function leerCache(clave) {
    try {
        const crudo = localStorage.getItem(PREFIJO + clave);
        if (!crudo) return null;
        const { en, datos } = JSON.parse(crudo);
        if (!en || datos == null) return null;
        return {
            datos,
            en,
            minutos: Math.round((Date.now() - en) / 60000)
        };
    } catch (e) {
        return null;
    }
}
function limpiarCache() {
    try {
        for (const k of Object.keys(localStorage)){
            if (k.startsWith(PREFIJO)) localStorage.removeItem(k);
        }
    } catch (e) {
    /* nada que hacer */ }
}
async function conCache(clave, leer) {
    let { tiempoLimite = 6000 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    /**
   * Sin red, ni se intenta.
   *
   * ── Por qué esto importa tanto ──
   *
   * Sin este atajo, abrir la app en modo avión tardaba entre diez y quince
   * segundos: cada consulta salía, esperaba su tiempo límite y recién ahí caía
   * a la caché. Quince segundos mirando una pantalla vacía es indistinguible de
   * una app rota, y el técnico la cierra antes de que termine.
   *
   * `navigator.onLine` no sirve para afirmar que HAY internet —puede decir que
   * sí con el wifi conectado a un router sin salida— pero cuando dice que NO,
   * no se equivoca: el dispositivo no tiene ninguna interfaz de red. Y ese es
   * justamente el caso que hay que resolver rápido.
   */ const guardadoYa = leerCache(clave);
    if (!navigator.onLine && guardadoYa) {
        return {
            datos: guardadoYa.datos,
            deCache: true,
            minutos: guardadoYa.minutos
        };
    }
    try {
        /**
     * Y con red dudosa, un tiempo límite.
     *
     * El caso peor no es no tener señal: es tener una raya. Ahí la consulta no
     * falla, se arrastra, y la pantalla queda esperando sin decir nada. Seis
     * segundos es más de lo que tarda una consulta normal y menos de lo que
     * alguien espera parado en una vereda.
     */ const datos = await Promise.race([
            leer(),
            new Promise((_, rechazar)=>setTimeout(()=>rechazar(new Error('La consulta tardó demasiado')), tiempoLimite))
        ]);
        guardarCache(clave, datos);
        return {
            datos,
            deCache: false,
            minutos: 0
        };
    } catch (err) {
        const guardado = leerCache(clave);
        if (guardado) {
            return {
                datos: guardado.datos,
                deCache: true,
                minutos: guardado.minutos
            };
        }
        // Sin nada guardado no se puede inventar: el error sube y la pantalla lo
        // dice. Es el caso del técnico que estrena el teléfono en una zona sin
        // señal, y ahí la verdad es que no hay datos.
        throw err;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth,
    "usePermisos",
    ()=>usePermisos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/personal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permisos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/instalaciones.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cacheLocal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    sesion: null,
    usuario: null,
    cargando: true
});
/* ── El perfil guardado, para poder arrancar sin señal ───────────────────── */ const CLAVE_PERFIL = 'legajo-cache';
/**
 * Guarda el legajo junto al `auth_id` de quien es.
 *
 * El `auth_id` no es decorativo: es lo que impide que en un teléfono que se
 * presta, el perfil del anterior le pinte la pantalla al siguiente.
 */ function guardarPerfil(fila, authId) {
    try {
        if (!fila || !authId) return;
        localStorage.setItem(CLAVE_PERFIL, JSON.stringify({
            authId,
            fila
        }));
    } catch (e) {
    /* modo privado: se sigue sin caché, que es como estaba antes */ }
}
function leerPerfil(authId) {
    try {
        if (!authId) return null;
        const crudo = localStorage.getItem(CLAVE_PERFIL);
        if (!crudo) return null;
        const { authId: de, fila } = JSON.parse(crudo);
        return de === authId ? fila : null;
    } catch (e) {
        return null;
    }
}
const olvidarPerfil = ()=>{
    try {
        localStorage.removeItem(CLAVE_PERFIL);
    } catch (e) {
    /* nada que hacer */ }
};
/**
 * Lee el token guardado en localStorage y construye un objeto de sesión
 * compatible con el formato que espera el resto de la app.
 */ function leerSesionGuardada() {
    try {
        const token = localStorage.getItem('django_access_token');
        const refresh = localStorage.getItem('django_refresh_token');
        if (!token) return null;
        // Decodificar payload del JWT
        const payload = JSON.parse(atob(token.split('.')[1]));
        // Verificar que no esté expirado
        if (payload.exp && payload.exp * 1000 < Date.now()) return null;
        return {
            access_token: token,
            refresh_token: refresh,
            user: {
                id: String(payload.user_id),
                email: payload.email || ''
            }
        };
    } catch (e) {
        return null;
    }
}
function AuthProvider(param) {
    let { children } = param;
    var _perfil_permisos;
    _s();
    const [sesion, setSesion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // El legajo: quién es y qué puede.
    const [perfil, setPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargandoPerfil, setCargandoPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [errorPerfil, setErrorPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // En modo demo no hay backend: se entra con una sesión falsa.
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) {
                setSesion(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sesionDemo"]);
                setCargando(false);
                return;
            }
            // ── Leer la sesión guardada en localStorage (token Django) ────────────
            // Con el access token vencido pero el refresh vigente (volver al otro día,
            // recargar después de una hora) se renueva en vez de mandar al login.
            let vigente = true;
            ({
                "AuthProvider.useEffect": async ()=>{
                    let sesionGuardada = leerSesionGuardada();
                    if (!sesionGuardada && localStorage.getItem('django_refresh_token')) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.tokenVigente();
                        sesionGuardada = leerSesionGuardada();
                    }
                    if (!vigente) return;
                    if (sesionGuardada) setSesion(sesionGuardada);
                    setCargando(false);
                }
            })["AuthProvider.useEffect"]();
            // Una consulta que no pudo renovar el token avisa: la sesión terminó de
            // verdad (refresh vencido o revocado) y hay que volver a entrar.
            const alVencer = {
                "AuthProvider.useEffect.alVencer": ()=>{
                    setSesion(null);
                    olvidarPerfil();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limpiarCache"])();
                }
            }["AuthProvider.useEffect.alVencer"];
            window.addEventListener('django:sesion-vencida', alVencer);
            // ── Mantener el token al día aunque no haya consultas ────────────────
            // Cada consulta ya lo renueva sola si hace falta; esto solo actualiza el
            // token que guarda la sesión. Un error de red NO cierra la sesión: el
            // técnico sin señal no tiene que volver a entrar al recuperarla. La sesión
            // termina solo con 'django:sesion-vencida' (refresh vencido o revocado).
            const intervalo = setInterval({
                "AuthProvider.useEffect.intervalo": async ()=>{
                    const token = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.tokenVigente();
                    if (token) setSesion({
                        "AuthProvider.useEffect.intervalo": (prev)=>prev && prev.access_token !== token ? {
                                ...prev,
                                access_token: token
                            } : prev
                    }["AuthProvider.useEffect.intervalo"]);
                }
            }["AuthProvider.useEffect.intervalo"], 10 * 60 * 1000);
            return ({
                "AuthProvider.useEffect": ()=>{
                    vigente = false;
                    clearInterval(intervalo);
                    window.removeEventListener('django:sesion-vencida', alVencer);
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    const recargarPerfil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[recargarPerfil]": async ()=>{
            if (!sesion) {
                setPerfil(null);
                setErrorPerfil(null);
                setCargandoPerfil(false);
                return null;
            }
            setCargandoPerfil(true);
            try {
                var _sesion_user;
                const fila = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].yo();
                setPerfil(fila);
                setErrorPerfil(null);
                guardarPerfil(fila, (_sesion_user = sesion.user) === null || _sesion_user === void 0 ? void 0 : _sesion_user.id);
                return fila;
            } catch (err) {
                var _sesion_user1;
                console.warn('No se pudo leer el legajo del usuario:', err);
                /**
       * Plan B: el último perfil conocido.
       *
       * Sin esto, el técnico que abre la app en una zona rural ve una pantalla
       * en blanco. El perfil guardado NO relaja ninguna seguridad: cada consulta
       * la sigue filtrando el backend.
       */ const guardado = leerPerfil((_sesion_user1 = sesion.user) === null || _sesion_user1 === void 0 ? void 0 : _sesion_user1.id);
                if (guardado) {
                    setPerfil(guardado);
                    setErrorPerfil(null);
                    return guardado;
                }
                setPerfil(null);
                setErrorPerfil(err);
                return null;
            } finally{
                setCargandoPerfil(false);
            }
        }
    }["AuthProvider.useCallback[recargarPerfil]"], [
        sesion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            let vivo = true;
            recargarPerfil().then({
                "AuthProvider.useEffect": (fila)=>{
                    if (vivo && fila) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalApi"].marcarAcceso();
                    if (vivo && fila) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cargarParametros"])();
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>{
                    vivo = false;
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        recargarPerfil
    ]);
    const cerrarSesion = async ()=>{
        olvidarPerfil();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limpiarCache"])();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) {
            setSesion(null);
            return;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["django"].auth.signOut();
        setSesion(null);
    };
    const entrarDemo = ()=>setSesion(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sesionDemo"]);
    /**
   * ¿Puede hacer esto?
   *
   * Devuelve false mientras carga el perfil (evita parpadeo de menú),
   * false si hubo error (no decidir a ciegas), y evalúa permisos cuando ya hay datos.
   */ const puede = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[puede]": (clave)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modoDemo"]) return true;
            if (cargandoPerfil) return false;
            if (errorPerfil) return false;
            if (!perfil) return true;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tienePermiso"])(perfil, clave);
        }
    }["AuthProvider.useCallback[puede]"], [
        perfil,
        cargandoPerfil,
        errorPerfil
    ]);
    var _sesion_user, _perfil_rol;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            sesion,
            usuario: (_sesion_user = sesion === null || sesion === void 0 ? void 0 : sesion.user) !== null && _sesion_user !== void 0 ? _sesion_user : null,
            perfil,
            rol: (_perfil_rol = perfil === null || perfil === void 0 ? void 0 : perfil.rol) !== null && _perfil_rol !== void 0 ? _perfil_rol : null,
            esSuperAdmin: (perfil === null || perfil === void 0 ? void 0 : perfil.rol) === 'super_admin' || (perfil === null || perfil === void 0 ? void 0 : (_perfil_permisos = perfil.permisos) === null || _perfil_permisos === void 0 ? void 0 : _perfil_permisos.includes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TODO"])) === true,
            puede,
            recargarPerfil,
            cargando,
            cargandoPerfil,
            errorPerfil,
            cerrarSesion,
            entrarDemo
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/AuthContext.jsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "OVS3FZyY+9YGZ3LIaSnIH+a3Mjw=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
};
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const usePermisos = ()=>{
    _s2();
    const { puede, perfil, rol, esSuperAdmin, cargandoPerfil, errorPerfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    return {
        puede,
        perfil,
        rol,
        esSuperAdmin,
        cargandoPerfil,
        errorPerfil
    };
};
_s2(usePermisos, "C3s1EYa3Kmf3CUCNTUq7jx7yqoI=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shadcn/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant = "default", size = "default", asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/button.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shadcn/alert.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/alert.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/alert.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/alert.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shadcn/tooltip.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript) <export * as Tooltip>");
;
;
;
;
function TooltipProvider(param) {
    let { delayDuration = 0, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Provider, {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/tooltip.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = TooltipProvider;
function Tooltip(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Root, {
        "data-slot": "tooltip",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/tooltip.jsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_c1 = Tooltip;
function TooltipTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Trigger, {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/tooltip.jsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_c2 = TooltipTrigger;
function TooltipContent(param) {
    let { className, sideOffset = 0, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Content, {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Arrow, {
                    className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/shadcn/tooltip.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shadcn/tooltip.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shadcn/tooltip.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/notificaciones.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Avisos breves en una esquina ("Cliente creado", "Pago anulado · Deshacer").
 *
 * Un solo lugar para todos: así quien usa el sistema aprende dónde mirar. Los
 * dibuja <Avisos/> (components/layout/Avisos.jsx), montado una vez en el layout.
 *
 *     avisar('Pago registrado')
 *     avisar('No se pudo enviar', { tipo: 'error' })
 *     await conDeshacer('Cliente dado de baja', () => api.darDeBaja(id))
 */ __turbopack_context__.s([
    "avisar",
    ()=>avisar,
    "cerrarAviso",
    ()=>cerrarAviso,
    "conDeshacer",
    ()=>conDeshacer,
    "suscribirAvisos",
    ()=>suscribirAvisos
]);
let siguiente = 1;
let lista = [];
const oyentes = new Set();
const emitir = ()=>oyentes.forEach((f)=>f(lista));
function suscribirAvisos(fn) {
    oyentes.add(fn);
    fn(lista);
    return ()=>oyentes.delete(fn);
}
function cerrarAviso(id) {
    lista = lista.filter((a)=>a.id !== id);
    emitir();
}
function avisar(mensaje) {
    let { tipo = 'exito', duracion = 4000, accion, cuenta } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const id = siguiente++;
    lista = [
        ...lista.slice(-3),
        {
            id,
            mensaje,
            tipo,
            accion,
            cuenta,
            duracion,
            desde: Date.now()
        }
    ];
    emitir();
    if (duracion > 0) setTimeout(()=>cerrarAviso(id), duracion);
    return id;
}
// Lo que espera su turno: si se cierra la pestaña, se ejecuta igual (lo que el
// usuario confirmó no puede perderse por cerrar rápido).
const pendientes = new Map();
if ("TURBOPACK compile-time truthy", 1) {
    window.addEventListener('pagehide', ()=>{
        for (const ejecutar of pendientes.values())ejecutar();
    });
}
function conDeshacer(mensaje, accion) {
    let { segundos = 6 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return new Promise((resolver, rechazar)=>{
        let hecho = false;
        let idAviso = null;
        const clave = Symbol('pendiente');
        const ejecutar = ()=>{
            if (hecho) return;
            hecho = true;
            pendientes.delete(clave);
            cerrarAviso(idAviso);
            Promise.resolve().then(accion).then(resolver, (err)=>{
                avisar((err === null || err === void 0 ? void 0 : err.message) || 'No se pudo completar la acción.', {
                    tipo: 'error',
                    duracion: 7000
                });
                rechazar(err);
            });
        };
        idAviso = avisar(mensaje, {
            tipo: 'info',
            duracion: 0,
            accion: {
                label: 'Deshacer',
                onClick: ()=>{
                    if (hecho) return;
                    hecho = true;
                    pendientes.delete(clave);
                    clearTimeout(reloj);
                    cerrarAviso(idAviso);
                    avisar('Listo, no se hizo ningún cambio.', {
                        tipo: 'info',
                        duracion: 3000
                    });
                    resolver({
                        deshecho: true
                    });
                }
            },
            cuenta: segundos
        });
        pendientes.set(clave, ejecutar);
        const reloj = setTimeout(ejecutar, segundos * 1000);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Aviso",
    ()=>Aviso,
    "Badge",
    ()=>Badge,
    "BarraProporcion",
    ()=>BarraProporcion,
    "Button",
    ()=>Button,
    "Card",
    ()=>Card,
    "Cargando",
    ()=>Cargando,
    "DatosEnFicha",
    ()=>DatosEnFicha,
    "EnlaceIp",
    ()=>EnlaceIp,
    "ErrorBanner",
    ()=>ErrorBanner,
    "EstadoBadge",
    ()=>EstadoBadge,
    "Field",
    ()=>Field,
    "FiltrosGuardados",
    ()=>FiltrosGuardados,
    "Input",
    ()=>Input,
    "MenuAcciones",
    ()=>MenuAcciones,
    "Modal",
    ()=>Modal,
    "PedirMotivo",
    ()=>PedirMotivo,
    "Punto",
    ()=>Punto,
    "Select",
    ()=>Select,
    "Skeleton",
    ()=>Skeleton,
    "SkeletonTabla",
    ()=>SkeletonTabla,
    "Stat",
    ()=>Stat,
    "Table",
    ()=>Table,
    "Tabs",
    ()=>Tabs,
    "Tendencia",
    ()=>Tendencia,
    "Textarea",
    ()=>Textarea,
    "Variacion",
    ()=>Variacion,
    "esCero",
    ()=>esCero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shadcn/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shadcn/alert.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shadcn/tooltip.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validacion/enVivo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notificaciones.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function Card(param) {
    let { title, subtitle, icon: Icon, actions, children, className = '', desbordable = false } = param;
    // La tarjeta de shadcn/ui (borde fino, sombra apenas marcada, radio 16px),
    // con la misma API que antes: título, subtítulo, ícono y acciones arriba.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col rounded-xl border bg-card text-card-foreground shadow-xs', desbordable ? '' : 'overflow-hidden', className),
        children: [
            (title || actions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-start justify-between gap-4 border-b px-4 py-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "flex items-center gap-2 text-sm leading-none font-semibold text-foreground",
                                children: [
                                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 15,
                                        className: "text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 65,
                                        columnNumber: 24
                                    }, this),
                                    title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-xs text-muted-foreground",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 68,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-2",
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 70,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = Card;
/**
 * El primario lleva el degradado de marca; el resto son neutros.
 *
 * Un solo color de marca para todo lo que no es un estado: si el botón de
 * guardar fuera verde y el de borrar rojo, el verde dejaría de significar "en
 * línea" y el rojo "crítico", que es lo que de verdad hay que poder leer de un
 * vistazo en una pantalla de red.
 *
 * `peligro` sí es rojo, y es la excepción correcta: ahí el color ES el estado
 * de lo que va a pasar.
 */ // Nuestras variantes, sobre las de shadcn/ui (src/components/shadcn/button).
const VARIANTES = {
    primario: {
        variant: 'default'
    },
    secundario: {
        variant: 'outline'
    },
    peligro: {
        variant: 'destructive'
    },
    fantasma: {
        variant: 'ghost'
    },
    exito: {
        variant: 'default',
        className: 'bg-emerald-600 text-white hover:bg-emerald-700'
    },
    alerta: {
        variant: 'default',
        className: 'bg-amber-500 text-slate-900 hover:bg-amber-600'
    }
};
function Button(param) {
    let { children, variante = 'secundario', icon: Icon, cargando = false, className = '', ...props } = param;
    var _VARIANTES_variante;
    const { variant, className: extra } = (_VARIANTES_variante = VARIANTES[variante]) !== null && _VARIANTES_variante !== void 0 ? _VARIANTES_variante : VARIANTES.secundario;
    const soloIcono = !children && props.title;
    const { title, ...resto } = props;
    const boton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ...soloIcono ? resto : props,
        "aria-label": soloIcono ? title : props['aria-label'],
        variant: variant,
        size: children ? 'default' : 'icon',
        disabled: props.disabled || cargando,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(extra, className),
        children: [
            cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                size: 15,
                className: "animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 121,
                columnNumber: 19
            }, this) : Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 15
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 121,
                columnNumber: 76
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
    // Un botón de solo ícono dice qué hace al pasar el mouse (tooltip de shadcn,
    // no el globito tardío del navegador) y lo anuncia al lector de pantalla.
    if (!soloIcono) return boton;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        delayDuration: 250,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: boton
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 130,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c1 = Button;
function Field(param) {
    let { label, hint, children, className = '', campo, regla } = param;
    _s();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const marcado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const escrito = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idMensaje = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [obligatorio, setObligatorio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dinero, setDinero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const etiqueta = ()=>{
        var _ref_current_querySelector, _ref_current;
        var _ref_current_querySelector_textContent;
        return (_ref_current_querySelector_textContent = (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : (_ref_current_querySelector = _ref_current.querySelector('[data-etiqueta]')) === null || _ref_current_querySelector === void 0 ? void 0 : _ref_current_querySelector.textContent) !== null && _ref_current_querySelector_textContent !== void 0 ? _ref_current_querySelector_textContent : '';
    };
    const control = ()=>{
        var _ref_current;
        return (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.querySelector('input:not([type=checkbox]):not([type=radio]):not([type=hidden]), select, textarea');
    };
    /**
   * Lo que se deduce del control, después de dibujarlo:
   *  - el asterisco, si es obligatorio y la etiqueta no lo trae ya: todos los
   *    obligatorios marcados igual, y no enterarse recién al guardar;
   *  - el teclado del teléfono que corresponde (numérico, decimal, de teléfono);
   *  - el "$" adelante en los montos.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Field.useEffect": ()=>{
            var _ref_current;
            const el = control();
            const requerido = !!((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.querySelector('[required]'));
            setObligatorio(requerido && !etiqueta().includes('*'));
            if (!el || el.tagName !== 'INPUT') return setDinero(false);
            const nombre = regla === false ? null : regla || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reglaDelCampo"])({
                campo,
                etiqueta: etiqueta(),
                tipo: el.type
            });
            if (!el.hasAttribute('inputmode') && (el.type === 'text' || el.type === '' || el.type === 'tel')) {
                const modo = {
                    telefono: 'tel',
                    ruc: 'numeric',
                    diaDelMes: 'numeric',
                    vlan: 'numeric',
                    puerto: 'numeric',
                    noNegativo: 'decimal',
                    porcentaje: 'decimal',
                    latitud: 'decimal',
                    longitud: 'decimal'
                }[nombre];
                if (modo) el.setAttribute('inputmode', modo);
            }
            setDinero(nombre === 'noNegativo' && el.type !== 'date');
        }
    }["Field.useEffect"]);
    // El mensaje (error o ayuda) atado al control, para los lectores de pantalla.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Field.useEffect": ()=>{
            const el = control();
            if (!el) return;
            if (error) el.setAttribute('aria-invalid', 'true');
            else el.removeAttribute('aria-invalid');
            if (error || hint) el.setAttribute('aria-describedby', idMensaje);
            else el.removeAttribute('aria-describedby');
        }
    }["Field.useEffect"], [
        error,
        hint,
        idMensaje
    ]);
    const revisar = (el)=>{
        if (!(el instanceof Element) || !el.matches('input, select, textarea')) return;
        setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revisarCampo"])(el, {
            campo,
            regla,
            etiqueta: etiqueta(),
            escrito: escrito.current
        }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Field.useEffect": ()=>{
            const alGuardar = {
                "Field.useEffect.alGuardar": (e)=>{
                    const mensaje = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorParaCampo"])(e.detail, {
                        campo,
                        etiqueta: etiqueta()
                    });
                    if (mensaje) {
                        marcado.current = true;
                        setError(mensaje);
                    }
                }
            }["Field.useEffect.alGuardar"];
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENTO_ERRORES"], alGuardar);
            return ({
                "Field.useEffect": ()=>window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENTO_ERRORES"], alGuardar)
            })["Field.useEffect"];
        }
    }["Field.useEffect"], [
        campo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: "block ".concat(error ? 'campo-invalido' : '', " ").concat(dinero ? 'campo-dinero' : '', " ").concat(className),
        "data-campo-invalido": error ? '1' : undefined,
        onBlurCapture: (e)=>{
            marcado.current = true;
            revisar(e.target);
        },
        onChangeCapture: (e)=>{
            escrito.current = true;
            if (marcado.current) revisar(e.target);
        },
        // Al enviar, lo que el navegador rechaza (required, min...) se muestra
        // igual que el resto, debajo del campo, en lugar del globo del navegador.
        onInvalidCapture: (e)=>{
            e.preventDefault();
            marcado.current = true;
            revisar(e.target);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enfocarPrimero"])();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1.5 block text-[13px] leading-none font-medium text-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-etiqueta": true,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    obligatorio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-0.5 text-red-500",
                        title: "Obligatorio",
                        children: [
                            "*",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: " (obligatorio)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 234,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            children,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: idMensaje,
                role: "alert",
                className: "campo-error-texto mt-1.5 flex items-start gap-1 text-xs font-medium",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        size: 12,
                        className: "mt-px shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 240,
                columnNumber: 9
            }, this) : hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: idMensaje,
                className: "mt-1.5 block text-xs text-muted-foreground",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 245,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s(Field, "q1SXutKibGOqH7IrAmMePiGkX9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c2 = Field;
/* Fondo blanco y no gris: un campo de formulario tiene que parecer un hueco
   donde escribir, y sobre una tarjeta blanca eso se consigue con el borde, no
   con el relleno. */ const ESTILO_CAMPO = 'flex min-h-9 w-full min-w-0 rounded-md border border-input bg-card px-3 py-1.5 text-sm text-foreground shadow-xs ' + 'transition-[color,box-shadow] outline-none placeholder:text-muted-foreground ' + 'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 ' + 'disabled:cursor-not-allowed disabled:opacity-50 ' + 'aria-invalid:border-destructive aria-invalid:ring-destructive/20 ' + 'file:border-0 file:bg-transparent file:text-sm file:font-medium';
const Input = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(ESTILO_CAMPO, 'max-w-md', props.className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 266,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Input;
const Textarea = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(ESTILO_CAMPO, 'min-h-16 py-2', props.className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 269,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = Textarea;
const Select = (param)=>{
    let { children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(ESTILO_CAMPO, 'max-w-md pr-8', props.className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 273,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = Select;
/**
 * Badges sin borde: fondo suave y texto del color.
 *
 * El borde de la versión anterior servía sobre fondo oscuro, donde un relleno
 * al 15% casi no se distingue del panel. Sobre blanco sobra: el fondo suave ya
 * recorta la pastilla, y el borde solo agrega ruido cuando hay cinco en una
 * fila de tabla.
 *
 * Y siempre con texto, nunca solo color. Un estado que se distingue únicamente
 * por el color no existe para quien no distingue ese color —ni para nadie
 * mirando el celular al sol.
 */ const COLORES_BADGE = {
    verde: 't-badge-ok',
    rojo: 't-badge-critico',
    ambar: 't-badge-aviso',
    azul: 't-badge-marca',
    gris: 't-badge-neutro'
};
const Badge = (param)=>{
    let { color = 'gris', children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "t-badge ".concat(COLORES_BADGE[color]),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 299,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = Badge;
function EnlaceIp(param) {
    let { ip, puerto, esquema = 'http', className = '' } = param;
    const texto = String(ip !== null && ip !== void 0 ? ip : '').trim();
    const esIpv4 = /^\d{1,3}(\.\d{1,3}){3}$/.test(texto);
    if (!esIpv4) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: ip !== null && ip !== void 0 ? ip : '—'
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 326,
        columnNumber: 23
    }, this);
    const destino = "".concat(esquema, "://").concat(texto).concat(puerto ? ":".concat(puerto) : '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: destino,
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Abrir ".concat(destino, " en una pestaña nueva"),
        onClick: (e)=>e.stopPropagation(),
        className: "underline decoration-dotted underline-offset-2 hover:text-sky-400 ".concat(className),
        children: texto
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
_c7 = EnlaceIp;
function EstadoBadge(param) {
    let { estado } = param;
    const mapa = {
        online: [
            'verde',
            'online'
        ],
        offline: [
            'gris',
            'offline'
        ],
        los: [
            'rojo',
            'LOS'
        ]
    };
    var _mapa_String_toLowerCase;
    const [color, texto] = (_mapa_String_toLowerCase = mapa[String(estado).toLowerCase()]) !== null && _mapa_String_toLowerCase !== void 0 ? _mapa_String_toLowerCase : [
        'gris',
        estado || 'desconocido'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
        color: color,
        children: texto
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 352,
        columnNumber: 10
    }, this);
}
_c8 = EstadoBadge;
function Table(param) {
    let { columnas, filas, vacio = 'Sin datos', renderFila, bajoEncabezado, accionVacia } = param;
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Etiqueta de cada celda = el texto de su encabezado (respeta colSpan).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Table.useEffect": ()=>{
            const tabla = ref.current;
            if (!tabla) return;
            const titulos = [
                ...tabla.querySelectorAll('thead tr:first-child th')
            ].flatMap({
                "Table.useEffect.titulos": (th)=>Array(th.colSpan || 1).fill(th.textContent.trim())
            }["Table.useEffect.titulos"]);
            for (const tr of tabla.querySelectorAll('tbody tr')){
                let i = 0;
                for (const td of tr.children){
                    var _titulos_i;
                    td.setAttribute('data-label', td.colSpan > 1 ? '' : (_titulos_i = titulos[i]) !== null && _titulos_i !== void 0 ? _titulos_i : '');
                    i += td.colSpan || 1;
                }
            }
        }
    }["Table.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto sm:max-h-[75vh] sm:overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: "t-tabla t-tabla-adaptable min-w-[600px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "sticky top-0 z-[1] bg-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: columnas.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: c
                                }, i, false, {
                                    fileName: "[project]/src/components/ui/index.jsx",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this),
                        bajoEncabezado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-slate-800/40",
                            children: bajoEncabezado
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 404,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: filas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: columnas.length,
                            className: "px-3 py-10 text-center text-slate-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                        size: 28,
                                        className: "text-slate-600",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 411,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: vacio
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 412,
                                        columnNumber: 19
                                    }, this),
                                    accionVacia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        variante: "primario",
                                        icon: accionVacia.icon,
                                        onClick: accionVacia.onClick,
                                        children: accionVacia.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 414,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 410,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 409,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 408,
                        columnNumber: 13
                    }, this) : filas.map(renderFila)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 389,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
_s1(Table, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c9 = Table;
function ErrorBanner(param) {
    let { error, onCerrar } = param;
    if (!error) return null;
    const mensaje = error.message || String(error);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
        variant: "destructive",
        className: "border-red-200 bg-red-50/60 pr-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                className: "line-clamp-none",
                children: mensaje
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            (error.hint || error.detalle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                children: [
                    error.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: error.hint
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 444,
                        columnNumber: 26
                    }, this),
                    error.detalle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "t-dato mt-2 max-h-32 w-full overflow-auto rounded-md bg-white/70 p-2 text-[11px]",
                        children: error.detalle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 446,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 443,
                columnNumber: 9
            }, this),
            onCerrar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onCerrar,
                "aria-label": "Cerrar",
                className: "absolute top-3 right-3 text-red-500 hover:text-red-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 454,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 453,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 439,
        columnNumber: 5
    }, this);
}
_c10 = ErrorBanner;
function Aviso(param) {
    let { children, tipo = 'info' } = param;
    const estilos = {
        info: 'border-sky-200 bg-sky-50/60 text-sky-900',
        alerta: 'border-amber-200 bg-amber-50/60 text-amber-900',
        exito: 'border-emerald-200 bg-emerald-50/60 text-emerald-900'
    };
    var _tipo;
    const Icono = (_tipo = ({
        alerta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        exito: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"]
    })[tipo]) !== null && _tipo !== void 0 ? _tipo : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
        className: estilos[tipo],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {}, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                className: "text-current",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 471,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}
_c11 = Aviso;
const Cargando = (param)=>{
    let { texto = 'Cargando…' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-2 py-8 text-sm text-slate-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                size: 16,
                className: "animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 478,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            texto
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 477,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c12 = Cargando;
function Modal(param) {
    let { abierto, ...props } = param;
    if (!abierto) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalAbierto, {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 499,
        columnNumber: 10
    }, this);
}
_c13 = Modal;
function ModalAbierto(param) {
    let { titulo, onCerrar, children, ancho = 'max-w-lg', avisoAlGuardar = true } = param;
    _s2();
    const cerrarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onCerrar);
    cerrarRef.current = onCerrar;
    const caja = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const estado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        enviado: 0,
        anulado: false,
        sucio: false,
        esc: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalAbierto.useEffect": ()=>{
            const s = estado.current;
            const alFallar = {
                "ModalAbierto.useEffect.alFallar": ()=>s.anulado = true
            }["ModalAbierto.useEffect.alFallar"];
            // Esc lo maneja el Dialog de Radix (solo la ventana de arriba lo recibe);
            // acá solo Ctrl+Enter, y solo para la ventana de arriba.
            const tecla = {
                "ModalAbierto.useEffect.tecla": (e)=>{
                    var _caja_current;
                    if (e.key !== 'Enter' || !(e.ctrlKey || e.metaKey)) return;
                    const abiertas = document.querySelectorAll('[data-slot="modal"]');
                    if (abiertas[abiertas.length - 1] !== caja.current) return;
                    const form = (_caja_current = caja.current) === null || _caja_current === void 0 ? void 0 : _caja_current.querySelector('form');
                    if (form) {
                        e.preventDefault();
                        form.requestSubmit();
                    }
                }
            }["ModalAbierto.useEffect.tecla"];
            window.addEventListener('keydown', tecla);
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENTO_ERRORES"], alFallar);
            return ({
                "ModalAbierto.useEffect": ()=>{
                    window.removeEventListener('keydown', tecla);
                    window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validacion$2f$enVivo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENTO_ERRORES"], alFallar);
                    if (avisoAlGuardar && s.enviado && !s.anulado && Date.now() - s.enviado < 60000) {
                        const texto = typeof avisoAlGuardar === 'string' ? avisoAlGuardar : 'Se guardó correctamente';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisar"])(typeof titulo === 'string' && avisoAlGuardar === true ? "".concat(texto, " · ").concat(titulo) : texto);
                    }
                }
            })["ModalAbierto.useEffect"];
        }
    }["ModalAbierto.useEffect"], []);
    const cerrar = ()=>{
        var _cerrarRef_current;
        estado.current.anulado = true;
        (_cerrarRef_current = cerrarRef.current) === null || _cerrarRef_current === void 0 ? void 0 : _cerrarRef_current.call(cerrarRef);
    };
    // El Dialog de shadcn/ui (Radix): atrapa el foco adentro, lo devuelve al
    // cerrar y anuncia la ventana a los lectores de pantalla. Va dentro del
    // Overlay para que un formulario largo se pueda desplazar entero.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        open: true,
        onOpenChange: (abierto)=>!abierto && cerrar(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay, {
                className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4 pt-16 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=open]:fade-in-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                    ref: caja,
                    "data-slot": "modal",
                    "aria-describedby": undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full overflow-clip rounded-xl border bg-card text-card-foreground shadow-lg outline-none', 'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95', ancho),
                    onEscapeKeyDown: (e)=>{
                        // Con algo escrito, un segundo Esc: un dedo no borra un formulario.
                        const s = estado.current;
                        if (s.sucio && Date.now() - s.esc > 2500) {
                            e.preventDefault();
                            s.esc = Date.now();
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisar"])('Presiona Esc otra vez para cerrar sin guardar.', {
                                tipo: 'info',
                                duracion: 2500
                            });
                        }
                    },
                    onChangeCapture: ()=>estado.current.sucio = true,
                    onSubmitCapture: ()=>Object.assign(estado.current, {
                            enviado: Date.now(),
                            anulado: false
                        }),
                    onClickCapture: (e)=>{
                        var _e_target_closest, _e_target;
                        // Un botón que no envía (Cancelar, Volver...) después de enviar: si
                        // la ventana se cierra, no fue por haber guardado.
                        const b = (_e_target_closest = (_e_target = e.target).closest) === null || _e_target_closest === void 0 ? void 0 : _e_target_closest.call(_e_target, 'button');
                        if (b && b.type !== 'submit' && estado.current.enviado) estado.current.anulado = true;
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "flex items-center justify-between gap-4 border-b px-6 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
                                    className: "text-base leading-none font-semibold",
                                    children: titulo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/index.jsx",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: cerrar,
                                    "aria-label": "Cerrar",
                                    className: "rounded-md p-1 text-muted-foreground opacity-70 transition hover:bg-accent hover:opacity-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 582,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/index.jsx",
                                    lineNumber: 576,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 574,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "t-modal-cuerpo p-6",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 585,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 547,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 546,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 545,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 544,
        columnNumber: 5
    }, this);
}
_s2(ModalAbierto, "zIMkDWf7vjvjsE8yS4CfO0eTtbs=");
_c14 = ModalAbierto;
function PedirMotivo(param) {
    let { abierto, titulo, etiquetaAccion = 'Confirmar', variante = 'peligro', icon, datos = [], sugerencias = [], advertencia = null, ayuda = 'Queda guardado y es lo que se le contesta al abonado si pregunta.', cargando = false, onCancelar, onConfirmar, children = null } = param;
    _s3();
    const [motivo, setMotivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Se vacía al abrir y no al cerrar: si se limpiara al cerrar, un error de red
    // que deja la ventana abierta borraría lo que la persona acaba de escribir.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PedirMotivo.useEffect": ()=>{
            if (abierto) setMotivo('');
        }
    }["PedirMotivo.useEffect"], [
        abierto
    ]);
    const listo = motivo.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
        abierto: abierto,
        titulo: titulo,
        onCerrar: onCancelar,
        avisoAlGuardar: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                datos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatosEnFicha, {
                    datos: datos
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 644,
                    columnNumber: 30
                }, this),
                advertencia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Aviso, {
                    tipo: "alerta",
                    children: advertencia
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 646,
                    columnNumber: 25
                }, this),
                children,
                sugerencias.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mb-2 block text-xs font-semibold text-slate-400",
                            children: "Motivos frecuentes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 652,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: sugerencias.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMotivo(m),
                                    className: "rounded-full px-3 py-1 text-[11px] font-medium transition ".concat(motivo === m ? 'bg-[#F0F9FF] text-sky-400' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100'),
                                    children: m
                                }, m, false, {
                                    fileName: "[project]/src/components/ui/index.jsx",
                                    lineNumber: 657,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 655,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 651,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                    label: "Motivo",
                    hint: ayuda,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        rows: 3,
                        autoFocus: true,
                        value: motivo,
                        onChange: (e)=>setMotivo(e.target.value),
                        placeholder: sugerencias.length ? 'Elige uno de arriba o escribe el tuyo…' : 'Escribe el motivo…'
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 675,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 674,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 pt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variante: "fantasma",
                            onClick: onCancelar,
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 687,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variante: variante,
                            icon: icon,
                            // Sin motivo no se ejecuta. Un "Sin motivo indicado" guardado en la
                            // base no le sirve a nadie dentro de tres meses.
                            disabled: !listo,
                            cargando: cargando,
                            onClick: ()=>onConfirmar(motivo.trim()),
                            children: etiquetaAccion
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 690,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 686,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 643,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 642,
        columnNumber: 5
    }, this);
}
_s3(PedirMotivo, "U0Q6mFki/rWoQv262FWGfRNdHz8=");
_c15 = PedirMotivo;
function DatosEnFicha(param) {
    let { datos } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-slate-800/60 p-3.5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
            className: "grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs",
            children: datos.map((param)=>{
                let [k, v] = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contents",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                            className: "text-slate-500",
                            children: k
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 714,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            className: "t-dato text-right font-semibold text-slate-200",
                            children: v !== null && v !== void 0 ? v : '—'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 715,
                            columnNumber: 13
                        }, this)
                    ]
                }, k, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 713,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 711,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 710,
        columnNumber: 5
    }, this);
}
_c16 = DatosEnFicha;
function Tabs(param) {
    let { tabs, activa, onCambiar } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            role: "tablist",
            className: "inline-flex min-w-max items-center gap-1 rounded-lg bg-muted p-[3px] text-muted-foreground",
            children: tabs.map((t)=>{
                const esta = t.clave === activa;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    role: "tab",
                    "aria-selected": esta,
                    onClick: ()=>onCambiar(t.clave),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] font-medium whitespace-nowrap transition', esta ? 'bg-card text-foreground shadow-sm' : 'hover:text-foreground'),
                    children: [
                        t.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(t.icon, {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 748,
                            columnNumber: 26
                        }, this),
                        t.label,
                        t.contador != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "t-dato rounded-full bg-muted-foreground/10 px-1.5 py-0.5 text-[10px]",
                            children: t.contador
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 751,
                            columnNumber: 17
                        }, this)
                    ]
                }, t.clave, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 737,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 733,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 732,
        columnNumber: 5
    }, this);
}
_c17 = Tabs;
const Skeleton = (param)=>{
    let { className = 'h-4 w-full' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('animate-pulse rounded-md bg-muted', className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 769,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c18 = Skeleton;
const SkeletonTabla = (param)=>{
    let { filas = 5, columnas = 4 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: Array.from({
            length: filas
        }, (_, f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: Array.from({
                    length: columnas
                }, (_, c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-8 ".concat(c === 0 ? 'w-16' : 'flex-1')
                    }, c, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 777,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, f, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 775,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 773,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c19 = SkeletonTabla;
function Punto(param) {
    let { estado, titulo } = param;
    const estilos = {
        online: 'bg-emerald-500',
        offline: 'bg-rose-500',
        desconocido: 'bg-slate-600'
    };
    var _estilos_estado;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        title: titulo !== null && titulo !== void 0 ? titulo : estado,
        className: "inline-block h-2.5 w-2.5 shrink-0 rounded-full ".concat((_estilos_estado = estilos[estado]) !== null && _estilos_estado !== void 0 ? _estilos_estado : estilos.desconocido)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 798,
        columnNumber: 5
    }, this);
}
_c20 = Punto;
const esCero = (v)=>v === 0 || typeof v === 'string' && /^\s*\$?\s*0([.,]0+)?\s*%?\s*$/.test(v);
function Stat(param) {
    let { label, valor, sub, icon: Icon, color = 'text-sky-400', cargando = false, tono, serie, variacion, mejorSiBaja = false } = param;
    _s4();
    // Mientras llega el primer dato, un hueco animado y no un "0": un cero que
    // después se vuelve 11 parece un dato real durante un segundo. Las recargas
    // siguientes dejan ver el número anterior.
    const yaCargo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    if (!cargando) yaCargo.current = true;
    const esperando = cargando && !yaCargo.current;
    const cero = !esperando && esCero(valor);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('t-kpi-card flex flex-col p-4 sm:p-5', tono && "t-tono-".concat(tono), cero && 't-cero'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0 truncate text-[13px] text-muted-foreground",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this),
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 16,
                        className: "shrink-0 ".concat(cero ? 'text-slate-600' : color)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 833,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            esperando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                className: "mt-auto h-8 w-20"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 838,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex items-end justify-between gap-2 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "t-kpi-valor ".concat(String(valor !== null && valor !== void 0 ? valor : '').length > 7 ? 't-kpi-largo' : ''),
                        children: valor
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 841,
                        columnNumber: 11
                    }, this),
                    (serie === null || serie === void 0 ? void 0 : serie.length) > 1 && new Set(serie).size > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tendencia, {
                        serie: serie
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 842,
                        columnNumber: 60
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 840,
                columnNumber: 9
            }, this),
            !esperando && (sub || variacion != null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 flex flex-wrap items-center gap-x-2 text-[11px] text-slate-500",
                children: [
                    variacion != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Variacion, {
                        valor: variacion,
                        mejorSiBaja: mejorSiBaja
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 847,
                        columnNumber: 33
                    }, this),
                    sub
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 846,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 830,
        columnNumber: 5
    }, this);
}
_s4(Stat, "a5V6sr05fFkl1nHxxq01CxZHyNk=");
_c21 = Stat;
function Tendencia(param) {
    let { serie, ancho = 72, alto = 26, className = 'text-sky-500', fluido = false } = param;
    // `fluido`: ocupa todo el ancho de su contenedor (se estira en horizontal).
    const max = Math.max(...serie);
    const min = Math.min(...serie);
    const rango = max - min || 1;
    const puntos = serie.map((v, i)=>[
            i / (serie.length - 1) * ancho,
            alto - 2 - (v - min) / rango * (alto - 4)
        ]);
    const linea = puntos.map((param, i)=>{
        let [x, y] = param;
        return "".concat(i ? 'L' : 'M').concat(x.toFixed(1), ",").concat(y.toFixed(1));
    }).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: fluido ? '100%' : ancho,
        height: alto,
        viewBox: "0 0 ".concat(ancho, " ").concat(alto),
        preserveAspectRatio: fluido ? 'none' : undefined,
        className: "shrink-0 ".concat(className),
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "".concat(linea, " L").concat(ancho, ",").concat(alto, " L0,").concat(alto, " Z"),
                fill: "currentColor",
                opacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 872,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: linea,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                vectorEffect: "non-scaling-stroke"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 873,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 870,
        columnNumber: 5
    }, this);
}
_c22 = Tendencia;
function Variacion(param) {
    let { valor, mejorSiBaja = false, sufijo = 'vs. período anterior' } = param;
    if (valor == null || !Number.isFinite(valor)) return null;
    const redondo = Math.round(valor);
    if (redondo === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-semibold text-slate-500",
        children: "= sin cambios"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 883,
        columnNumber: 29
    }, this);
    const bueno = mejorSiBaja ? redondo < 0 : redondo > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-semibold ".concat(bueno ? 'text-emerald-400' : 'text-red-400'),
        title: sufijo,
        children: [
            redondo > 0 ? '▲' : '▼',
            " ",
            Math.abs(redondo),
            "% ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-normal text-slate-500",
                children: sufijo
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 887,
                columnNumber: 54
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 886,
        columnNumber: 5
    }, this);
}
_c23 = Variacion;
function BarraProporcion(param) {
    let { partes, alto = 'h-3' } = param;
    const total = partes.reduce((s, p)=>s + p.valor, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex ".concat(alto, " w-full overflow-hidden rounded-full bg-slate-800"),
                role: "img",
                "aria-label": partes.map((p)=>"".concat(p.nombre, ": ").concat(p.valor)).join(', '),
                children: total > 0 && partes.filter((p)=>p.valor > 0).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "".concat(p.valor / total * 100, "%"),
                            backgroundColor: p.color
                        },
                        title: "".concat(p.nombre, ": ").concat(p.valor)
                    }, p.nombre, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 905,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 902,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 space-y-2",
                children: partes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2.5 text-xs ".concat(p.valor ? '' : 'opacity-60'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2.5 w-2.5 shrink-0 rounded-full",
                                style: {
                                    backgroundColor: p.color
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 911,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 truncate text-slate-400",
                                children: p.nombre
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 912,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "t-dato font-bold text-slate-100",
                                children: p.valor
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 913,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "t-dato w-10 text-right text-slate-500",
                                children: [
                                    total ? Math.round(p.valor / total * 100) : 0,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 914,
                                columnNumber: 13
                            }, this)
                        ]
                    }, p.nombre, true, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 910,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 908,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 901,
        columnNumber: 5
    }, this);
}
_c24 = BarraProporcion;
function FiltrosGuardados(param) {
    let { clave, actual, onAplicar } = param;
    _s5();
    const llave = "filtros:".concat(clave);
    const [lista, setLista] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FiltrosGuardados.useState": ()=>{
            try {
                return JSON.parse(localStorage.getItem(llave) || '[]');
            } catch (e) {
                return [];
            }
        }
    }["FiltrosGuardados.useState"]);
    const [abierto, setAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const caja = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const guardarLista = (nueva)=>{
        setLista(nueva);
        try {
            localStorage.setItem(llave, JSON.stringify(nueva));
        } catch (e) {
        /* sin almacenamiento: queda en memoria */ }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FiltrosGuardados.useEffect": ()=>{
            if (!abierto) return;
            const fuera = {
                "FiltrosGuardados.useEffect.fuera": (e)=>{
                    var _caja_current;
                    return !((_caja_current = caja.current) === null || _caja_current === void 0 ? void 0 : _caja_current.contains(e.target)) && setAbierto(false);
                }
            }["FiltrosGuardados.useEffect.fuera"];
            document.addEventListener('mousedown', fuera);
            return ({
                "FiltrosGuardados.useEffect": ()=>document.removeEventListener('mousedown', fuera)
            })["FiltrosGuardados.useEffect"];
        }
    }["FiltrosGuardados.useEffect"], [
        abierto
    ]);
    const guardar = ()=>{
        const n = nombre.trim();
        if (!n) return;
        guardarLista([
            ...lista.filter((f)=>f.nombre !== n),
            {
                nombre: n,
                filtros: actual
            }
        ]);
        setNombre('');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notificaciones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisar"])("Filtro «".concat(n, "» guardado"));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: caja,
        className: "relative shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setAbierto((a)=>!a),
                "aria-expanded": abierto,
                title: "Guardar este filtro o aplicar uno guardado",
                className: "flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 979,
                        columnNumber: 9
                    }, this),
                    "Filtros guardados",
                    lista.length ? " (".concat(lista.length, ")") : ''
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 972,
                columnNumber: 7
            }, this),
            abierto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-card absolute right-0 z-30 mt-1 w-72 p-3 shadow-xl",
                children: [
                    lista.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs text-slate-500",
                        children: "Todavía no guardaste ningún filtro."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 985,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mb-2 space-y-1",
                        children: lista.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            onAplicar(f.filtros);
                                            setAbierto(false);
                                        },
                                        className: "min-w-0 flex-1 truncate rounded-lg px-2 py-1.5 text-left text-sm text-slate-200 hover:bg-slate-800",
                                        children: f.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 990,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": "Quitar ".concat(f.nombre),
                                        onClick: ()=>guardarLista(lista.filter((x)=>x.nombre !== f.nombre)),
                                        className: "rounded p-1 text-slate-500 hover:text-red-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/index.jsx",
                                            lineNumber: 1006,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 1000,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, f.nombre, true, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 989,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 987,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 border-t border-[rgba(15,23,42,0.06)] pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: nombre,
                                onChange: (e)=>setNombre(e.target.value),
                                onKeyDown: (e)=>e.key === 'Enter' && (e.preventDefault(), guardar()),
                                placeholder: "Ej.: Cortados con deuda",
                                "aria-label": "Nombre del filtro",
                                className: "".concat(ESTILO_CAMPO, " py-1.5 text-xs")
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 1013,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variante: "primario",
                                onClick: guardar,
                                disabled: !nombre.trim(),
                                className: "py-1.5 text-xs",
                                children: "Guardar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 1021,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 1012,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 983,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 971,
        columnNumber: 5
    }, this);
}
_s5(FiltrosGuardados, "K/jHZVA+FI4V2jwOplahSIiPdes=");
_c25 = FiltrosGuardados;
function MenuAcciones(param) {
    let { acciones, etiqueta = 'Más acciones' } = param;
    const visibles = acciones.filter(Boolean);
    if (!visibles.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenu, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuTrigger, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shadcn$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    "aria-label": etiqueta,
                    title: etiqueta,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoreHorizontal, {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 1045,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 1044,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 1043,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuContent, {
                align: "end",
                className: "min-w-44",
                children: visibles.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            a.peligro && i > 0 && !visibles[i - 1].peligro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuSeparator, {}, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 1051,
                                columnNumber: 64
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuItem, {
                                onSelect: a.onClick,
                                variant: a.peligro ? 'destructive' : 'default',
                                children: [
                                    a.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(a.icon, {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 1053,
                                        columnNumber: 26
                                    }, this),
                                    a.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 1052,
                                columnNumber: 13
                            }, this)
                        ]
                    }, a.label, true, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 1050,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 1048,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 1042,
        columnNumber: 5
    }, this);
}
_c26 = MenuAcciones;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "Field");
__turbopack_context__.k.register(_c3, "Input");
__turbopack_context__.k.register(_c4, "Textarea");
__turbopack_context__.k.register(_c5, "Select");
__turbopack_context__.k.register(_c6, "Badge");
__turbopack_context__.k.register(_c7, "EnlaceIp");
__turbopack_context__.k.register(_c8, "EstadoBadge");
__turbopack_context__.k.register(_c9, "Table");
__turbopack_context__.k.register(_c10, "ErrorBanner");
__turbopack_context__.k.register(_c11, "Aviso");
__turbopack_context__.k.register(_c12, "Cargando");
__turbopack_context__.k.register(_c13, "Modal");
__turbopack_context__.k.register(_c14, "ModalAbierto");
__turbopack_context__.k.register(_c15, "PedirMotivo");
__turbopack_context__.k.register(_c16, "DatosEnFicha");
__turbopack_context__.k.register(_c17, "Tabs");
__turbopack_context__.k.register(_c18, "Skeleton");
__turbopack_context__.k.register(_c19, "SkeletonTabla");
__turbopack_context__.k.register(_c20, "Punto");
__turbopack_context__.k.register(_c21, "Stat");
__turbopack_context__.k.register(_c22, "Tendencia");
__turbopack_context__.k.register(_c23, "Variacion");
__turbopack_context__.k.register(_c24, "BarraProporcion");
__turbopack_context__.k.register(_c25, "FiltrosGuardados");
__turbopack_context__.k.register(_c26, "MenuAcciones");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/confirmar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmarProvider",
    ()=>ConfirmarProvider,
    "useConfirmar",
    ()=>useConfirmar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
/**
 * El "¿estás seguro?" del sistema, en lugar del cuadro del navegador.
 *
 * ── Por qué se espera en vez de recibir un callback ──
 *
 * El `confirm()` nativo frena la ejecución y devuelve `true` o `false`, así que
 * el código quedaba escrito así:
 *
 *     if (!confirm('¿Borrar la foto?')) return
 *     await borrar()
 *
 * Una ventana de React no puede frenar nada: dibuja, espera un clic, y avisa
 * por un callback. Convertir cada uno de los sesenta y nueve lugares a esa forma
 * significaba partir cada función en dos —lo de antes de preguntar y lo de
 * después— con un estado en el medio para acordarse de sobre qué se preguntaba.
 * Sesenta y nueve oportunidades de equivocarse en código que hoy anda.
 *
 * Con una promesa, la forma de arriba se conserva:
 *
 *     if (!(await confirmar('¿Borrar la foto?'))) return
 *     await borrar()
 *
 * Cambia una línea y no cambia el flujo. La promesa se resuelve cuando la
 * persona elige, que es exactamente lo que hacía el `confirm` nativo — sin
 * congelar la pestaña mientras tanto.
 *
 * ── Por qué hay una sola ventana y no una por pantalla ──
 *
 * Vive en la raíz de la aplicación y se dibuja una vez. Cualquier pantalla la
 * pide con el hook. Así el aspecto, el foco, el Escape y el botón peligroso son
 * los mismos en todos lados, y se cambian en un solo lugar.
 */ const Contexto = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ConfirmarProvider(param) {
    let { children } = param;
    var _pedido_datos;
    _s();
    const [pedido, setPedido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * El `resolve` de la promesa que está esperando.
   *
   * Va en una ref y no en el estado a propósito: si estuviera en el estado,
   * cada dibujado crearía una identidad nueva y el `confirmar` que devuelve el
   * hook cambiaría en cada render, invalidando cualquier `useCallback` que lo
   * tenga como dependencia.
   */ const resolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConfirmarProvider.useCallback[confirmar]": (opciones)=>{
            // Se acepta un texto suelto porque la mayoría de los llamados son eso: una
            // sola pregunta. Pedir un objeto para escribir `{ mensaje: '¿Borrar?' }`
            // sería ceremonia sin nada a cambio.
            const cfg = typeof opciones === 'string' ? {
                mensaje: opciones
            } : opciones;
            return new Promise({
                "ConfirmarProvider.useCallback[confirmar]": (resolve)=>{
                    resolver.current = resolve;
                    setPedido(cfg);
                }
            }["ConfirmarProvider.useCallback[confirmar]"]);
        }
    }["ConfirmarProvider.useCallback[confirmar]"], []);
    const responder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConfirmarProvider.useCallback[responder]": (respuesta)=>{
            var _resolver_current;
            setPedido(null);
            (_resolver_current = resolver.current) === null || _resolver_current === void 0 ? void 0 : _resolver_current.call(resolver, respuesta);
            resolver.current = null;
        }
    }["ConfirmarProvider.useCallback[responder]"], []);
    var _pedido_titulo, _pedido_etiquetaCancelar, _pedido_variante, _pedido_etiquetaAccion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Contexto.Provider, {
        value: confirmar,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: !!pedido,
                titulo: (_pedido_titulo = pedido === null || pedido === void 0 ? void 0 : pedido.titulo) !== null && _pedido_titulo !== void 0 ? _pedido_titulo : 'Confirmar',
                // Cerrar con la X o con Escape es decir que no. Cualquier otra cosa
                // dejaría la promesa colgada para siempre y la pantalla trabada.
                onCerrar: ()=>responder(false),
                children: pedido && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 20,
                                    className: pedido.variante === 'peligro' || !pedido.variante ? 'mt-0.5 flex-none text-amber-400' : 'mt-0.5 flex-none text-sky-400'
                                }, void 0, false, {
                                    fileName: "[project]/src/lib/confirmar.jsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "whitespace-pre-line text-sm text-slate-300",
                                    children: pedido.mensaje
                                }, void 0, false, {
                                    fileName: "[project]/src/lib/confirmar.jsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/confirmar.jsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        ((_pedido_datos = pedido.datos) === null || _pedido_datos === void 0 ? void 0 : _pedido_datos.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatosEnFicha"], {
                            datos: pedido.datos
                        }, void 0, false, {
                            fileName: "[project]/src/lib/confirmar.jsx",
                            lineNumber: 99,
                            columnNumber: 42
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    onClick: ()=>responder(false),
                                    children: (_pedido_etiquetaCancelar = pedido.etiquetaCancelar) !== null && _pedido_etiquetaCancelar !== void 0 ? _pedido_etiquetaCancelar : 'Cancelar'
                                }, void 0, false, {
                                    fileName: "[project]/src/lib/confirmar.jsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: (_pedido_variante = pedido.variante) !== null && _pedido_variante !== void 0 ? _pedido_variante : 'peligro',
                                    autoFocus: true,
                                    onClick: ()=>responder(true),
                                    children: (_pedido_etiquetaAccion = pedido.etiquetaAccion) !== null && _pedido_etiquetaAccion !== void 0 ? _pedido_etiquetaAccion : 'Sí, continuar'
                                }, void 0, false, {
                                    fileName: "[project]/src/lib/confirmar.jsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/confirmar.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/confirmar.jsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/lib/confirmar.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/lib/confirmar.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(ConfirmarProvider, "SIst3oOQjjNnM52Fl766f4pG9Rc=");
_c = ConfirmarProvider;
function useConfirmar() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Contexto);
    if (ctx) return ctx;
    return (opciones)=>{
        const cfg = typeof opciones === 'string' ? {
            mensaje: opciones
        } : opciones;
        // eslint-disable-next-line no-alert
        return Promise.resolve(window.confirm(cfg.mensaje));
    };
}
_s1(useConfirmar, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ConfirmarProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ErrorBoundary.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, info) {
        console.error('Error de render:', error, info);
    }
    render() {
        if (!this.state.error) return this.props.children;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid h-full place-items-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl rounded-xl border border-red-500/30 bg-red-500/10 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-base font-semibold text-red-200",
                        children: "La aplicación no pudo cargar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ErrorBoundary.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-red-300/90",
                        children: this.state.error.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ErrorBoundary.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-4 max-h-64 overflow-auto rounded-lg bg-black/40 p-3 text-[11px] text-red-200/70",
                        children: this.state.error.stack
                    }, void 0, false, {
                        fileName: "[project]/src/components/ErrorBoundary.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        className: "mt-4 rounded-lg border border-red-500/40 px-3 py-2 text-sm text-red-100 transition hover:bg-red-500/20",
                        children: "Recargar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ErrorBoundary.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ErrorBoundary.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ErrorBoundary.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    constructor(...args){
        super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "state", {
            error: null
        });
    }
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/FranjaAmbiente.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FranjaAmbiente
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
;
;
function FranjaAmbiente() {
    const ambiente = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AMBIENTE;
    if (!ambiente) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        // `sticky` y no `fixed`: empuja el contenido en vez de taparlo. Con
        // `fixed` la franja se comería la primera fila de cualquier tabla.
        className: "sticky top-0 z-[60] flex items-center justify-center gap-2 border-b border-amber-400/40 bg-amber-500 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                size: 14,
                className: "flex-none"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/FranjaAmbiente.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "Ambiente de ",
                    ambiente
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/FranjaAmbiente.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden font-normal normal-case tracking-normal opacity-80 sm:inline",
                children: "· los datos no son reales y nada de lo que hagas acá afecta a los abonados"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/FranjaAmbiente.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/FranjaAmbiente.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = FranjaAmbiente;
var _c;
__turbopack_context__.k.register(_c, "FranjaAmbiente");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AvisoVersion.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvisoVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature();
;
;
function AvisoVersion() {
    _s();
    const [hayNueva, setHayNueva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvisoVersion.useEffect": ()=>{
            if (!('serviceWorker' in navigator)) return undefined;
            /*
      Sin controlador es la PRIMERA instalación: no hay versión anterior que
      reemplazar. Avisar ahí diría "hay una versión nueva" a alguien que acaba
      de abrir la app por primera vez.
    */ if (!navigator.serviceWorker.controller) return undefined;
            const alCambiar = {
                "AvisoVersion.useEffect.alCambiar": ()=>setHayNueva(true)
            }["AvisoVersion.useEffect.alCambiar"];
            navigator.serviceWorker.addEventListener('controllerchange', alCambiar);
            /*
      El navegador busca actualizaciones al navegar, y en una aplicación de una
      sola página casi no hay navegaciones de verdad. Sin esto, una pestaña
      abierta desde la mañana no se entera de nada.

      Al volver a la pestaña y cada cuarto de hora: es barato —una petición
      condicional al service worker— y cubre el caso de quien la deja abierta.
    */ let registro = null;
            navigator.serviceWorker.getRegistration().then({
                "AvisoVersion.useEffect": (r)=>{
                    registro = r !== null && r !== void 0 ? r : null;
                }
            }["AvisoVersion.useEffect"]);
            const buscar = {
                "AvisoVersion.useEffect.buscar": ()=>{
                    var _registro_update;
                    return registro === null || registro === void 0 ? void 0 : (_registro_update = registro.update) === null || _registro_update === void 0 ? void 0 : _registro_update.call(registro).catch({
                        "AvisoVersion.useEffect.buscar": ()=>{}
                    }["AvisoVersion.useEffect.buscar"]);
                }
            }["AvisoVersion.useEffect.buscar"];
            const reloj = setInterval(buscar, 15 * 60 * 1000);
            window.addEventListener('focus', buscar);
            return ({
                "AvisoVersion.useEffect": ()=>{
                    navigator.serviceWorker.removeEventListener('controllerchange', alCambiar);
                    window.removeEventListener('focus', buscar);
                    clearInterval(reloj);
                }
            })["AvisoVersion.useEffect"];
        }
    }["AvisoVersion.useEffect"], []);
    if (!hayNueva) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        className: "fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-center gap-3 border-t border-[rgba(15,23,42,0.08)] bg-white px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.25)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-slate-200",
                children: "Hay una versión nueva del sistema."
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AvisoVersion.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>window.location.reload(),
                className: "t-btn t-btn-marca",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AvisoVersion.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    "Actualizar ahora"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AvisoVersion.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setHayNueva(false),
                className: "text-xs text-slate-500 hover:text-slate-300",
                children: "Después"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AvisoVersion.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AvisoVersion.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(AvisoVersion, "pCF+WQaNhcr9whrwnjMxAG5Qtf8=");
_c = AvisoVersion;
var _c;
__turbopack_context__.k.register(_c, "AvisoVersion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/NextProviders.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NextProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ErrorBoundary.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$FranjaAmbiente$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/FranjaAmbiente.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AvisoVersion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AvisoVersion.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function NextProviders(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrictMode"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmarProvider"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$FranjaAmbiente$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/NextProviders.jsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AvisoVersion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/NextProviders.jsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/NextProviders.jsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/NextProviders.jsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/NextProviders.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/NextProviders.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = NextProviders;
var _c;
__turbopack_context__.k.register(_c, "NextProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_213690a5._.js.map