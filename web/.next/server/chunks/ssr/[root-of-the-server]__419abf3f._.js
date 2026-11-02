module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const API_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || 'http://localhost:8000/api/v1';
/** True si el JWT vence en menos de un minuto (o no se puede leer). */ function venceEnBreve(token) {
    try {
        const { exp } = JSON.parse(atob(token.split('.')[1]));
        return !exp || exp * 1000 - Date.now() < 60 * 1000;
    } catch  {
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
 */ async function fetchConSesion(url, opciones = {}) {
    const enviar = async ()=>{
        const token = await django.auth.tokenVigente();
        const headers = {
            ...opciones.headers || {}
        };
        delete headers.Authorization;
        delete headers.authorization;
        if (token) headers.Authorization = `Bearer ${token}`;
        return fetch(url, {
            ...opciones,
            headers
        });
    };
    let respuesta = await enviar();
    if (respuesta.status === 401 && "undefined" !== 'undefined' && localStorage.getItem('django_refresh_token')) //TURBOPACK unreachable
    ;
    return respuesta;
}
class DjangoQueryBuilder {
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
            this.headers['Authorization'] = `Bearer ${token}`;
        }
    }
    /**
   * SELECT columns
   * Ej: .select('*') o .select('id,nombre,email')
   *     .select('*', { count: 'exact', head: true }) → solo el total (count)
   */ select(columns = '*', { count, head } = {}) {
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
        this.params.append(column, `eq.${value}`);
        return this;
    }
    neq(column, value) {
        this.params.append(column, `neq.${value}`);
        return this;
    }
    not(column, operator, value) {
        this.params.append(column, `not.${operator}.${value}`);
        return this;
    }
    gt(column, value) {
        this.params.append(column, `gt.${value}`);
        return this;
    }
    gte(column, value) {
        this.params.append(column, `gte.${value}`);
        return this;
    }
    lt(column, value) {
        this.params.append(column, `lt.${value}`);
        return this;
    }
    lte(column, value) {
        this.params.append(column, `lte.${value}`);
        return this;
    }
    like(column, pattern) {
        this.params.append(column, `like.${pattern}`);
        return this;
    }
    ilike(column, pattern) {
        this.params.append(column, `ilike.${pattern}`);
        return this;
    }
    is(column, value) {
        this.params.append(column, `is.${value}`);
        return this;
    }
    in(column, values) {
        this.params.append(column, `in.(${values.join(',')})`);
        return this;
    }
    /**
   * Condiciones alternativas, como en supabase-js:
   * .or('nombre.ilike.%ana%,identificacion.ilike.%ana%')
   */ or(condiciones) {
        this.params.append('or', `(${condiciones})`);
        return this;
    }
    /** .filter('estado', 'in', '(a,b)') — el operador va crudo, como en PostgREST. */ filter(column, operator, value) {
        this.params.append(column, `${operator}.${value}`);
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
   */ order(column, { ascending = true } = {}) {
        const direction = ascending ? 'asc' : 'desc';
        this.params.append('order', `${column}.${direction}`);
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
        return this;
    }
    /**
   * UPDATE
   * Ej: .update({ estado: 'activo' }).eq('id', 123)
   */ update(data) {
        this.method = 'PATCH';
        this.body = JSON.stringify(data);
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
   */ upsert(data, { onConflict = 'id' } = {}) {
        // Django no tiene UPSERT nativo, simular con try INSERT → catch UPDATE
        this.method = 'POST';
        this.body = JSON.stringify({
            ...data,
            _upsert: true,
            _conflict: onConflict
        });
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
        try {
            let url = `${API_URL}/tables/${this.table}`;
            // Si es UPDATE o DELETE con filtro .eq('id', X), agregar /<id> a la URL
            // Sólo con un único `id=eq.X`: un `in.(...)` o varios filtros por id van
            // por la colección, que el backend sabe filtrar.
            const idParam = this.params.getAll('id').length === 1 ? this.params.get('id') : null;
            if ((this.method === 'PATCH' || this.method === 'DELETE') && idParam?.startsWith('eq.')) {
                const id = idParam.replace('eq.', '');
                url = `${url}/${id}`;
                this.params.delete('id'); // No enviar en query string
            }
            // Agregar query params
            const queryString = this.params.toString();
            if (queryString) {
                url = `${url}?${queryString}`;
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
                return {
                    data: data[0] ?? null,
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
}
class DjangoRPC {
    constructor(token){
        this.token = token;
    }
    /**
   * Ejecuta una función RPC (stored procedure)
   * Ej: django.rpc('clientes_estadisticas_basicas')
   *     django.rpc('racha_de_ventas', { empleado_id: 5 })
   */ async call(functionName, params = {}) {
        try {
            const response = await fetchConSesion(`${API_URL}/rpc/${functionName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.token && {
                        Authorization: `Bearer ${this.token}`
                    }
                },
                body: JSON.stringify(params)
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                // Como supabase-js: el mensaje del RAISE de la función y su código
                // (P0001, 23505...), que es lo que las pantallas muestran y comparan.
                return {
                    data: null,
                    error: {
                        message: errorData.message || errorData.error || response.statusText,
                        code: errorData.code || String(response.status),
                        details: errorData.details ?? null,
                        hint: errorData.hint ?? null,
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
}
class DjangoStorage {
    constructor(token){
        this.token = token;
        this.bucket = null;
    }
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
   */ async upload(path, file, opciones = {}) {
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('path', path);
        if (opciones.upsert) formData.append('upsert', 'true');
        try {
            const response = await fetchConSesion(`${API_URL}/storage/${this.bucket}`, {
                method: 'POST',
                headers: {
                    ...this.token && {
                        Authorization: `Bearer ${this.token}`
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
            const response = await fetchConSesion(`${API_URL}/storage/${this.bucket}/${path}`, {
                headers: {
                    ...this.token && {
                        Authorization: `Bearer ${this.token}`
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
                const response = await fetchConSesion(`${API_URL}/storage/${this.bucket}/${path}`, {
                    method: 'DELETE',
                    headers: {
                        ...this.token && {
                            Authorization: `Bearer ${this.token}`
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
   */ async list(path = '') {
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        try {
            const response = await fetchConSesion(`${API_URL}/storage/${this.bucket}/list?prefix=${encodeURIComponent(path)}`, {
                headers: {
                    ...this.token && {
                        Authorization: `Bearer ${this.token}`
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
   */ async createSignedUrl(path, segundos = 3600) {
        if (!this.bucket) {
            throw new Error('Must call .from(bucket) first');
        }
        const parametros = new URLSearchParams({
            path,
            segundos: String(segundos)
        });
        try {
            const response = await fetchConSesion(`${API_URL}/storage/${this.bucket}/signed-url?${parametros.toString()}`, {
                headers: {
                    ...this.token && {
                        Authorization: `Bearer ${this.token}`
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
                publicURL: `${API_URL}/storage/${this.bucket}/public/${path}`
            }
        };
    }
}
class DjangoAuth {
    constructor(){
        this.token = null;
        this.user = null;
    }
    /**
   * Login con email y contraseña
   * Ej: django.auth.signInWithPassword({ email, password })
   */ async signInWithPassword({ email, password }) {
        try {
            const response = await fetch(`${API_URL}/auth/token/`, {
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
            const response = await fetch(`${API_URL}${ruta}`, {
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
            const response = await fetchConSesion(`${API_URL}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
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
        const actual = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this.token;
        if (actual && !venceEnBreve(actual)) {
            this.token = actual;
            return actual;
        }
        if ("undefined" === 'undefined' || !localStorage.getItem('django_refresh_token')) return actual;
        //TURBOPACK unreachable
        ;
        const data = undefined, error = undefined;
    }
    /**
   * Obtiene la sesión actual (renovando el token si hace falta)
   * Compatible con la API de Supabase
   */ async getSession() {
        let accessToken = null;
        let refreshToken = null;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            accessToken = this.token;
        }
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
        } catch  {
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return {
            error: null
        };
    }
    /**
   * Refresca el token de acceso
   */ async refreshSession() {
        const refreshToken = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if ("TURBOPACK compile-time truthy", 1) {
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
        //TURBOPACK unreachable
        ;
    }
}
class DjangoClient {
    constructor(){
        this.auth = new DjangoAuth();
        // Cargar token guardado
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
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
}
const django = new DjangoClient();
// Validación de configuración
const djangoApiUrl = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1");
const esFaltante = !djangoApiUrl || djangoApiUrl.includes('ejemplo.com');
const djangoConfigurado = !!djangoApiUrl && !esFaltante;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/src/lib/demo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const esperar = (ms = 180)=>new Promise((r)=>setTimeout(r, ms));
const demoDb = {
    async listar (tabla, { orderBy, ascending }) {
        await esperar();
        const filas = [
            ...store[tabla] ?? []
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
        store[tabla] = [
            ...store[tabla] ?? [],
            nueva
        ];
        return nueva;
    },
    async actualizar (tabla, id, cambios) {
        await esperar();
        store[tabla] = (store[tabla] ?? []).map((f)=>f.id === id ? {
                ...f,
                ...cambios
            } : f);
    },
    async eliminar (tabla, id) {
        await esperar();
        store[tabla] = (store[tabla] ?? []).filter((f)=>f.id !== id);
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
        if (!body?.aplicar) return {
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
}),
"[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)");
}),
"[project]/src/lib/permisos.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const CLAVES_PERMISO = GRUPOS_PERMISOS.flatMap((g)=>g.permisos.map((p)=>p.clave));
const CLAVES_SOLO_SUPER = GRUPOS_PERMISOS.flatMap((g)=>g.permisos.filter((p)=>p.soloSuper).map((p)=>p.clave));
const todasDe = (...grupos)=>GRUPOS_PERMISOS.filter((g)=>grupos.includes(g.clave)).flatMap((g)=>g.permisos).filter((p)=>!p.soloSuper).map((p)=>p.clave);
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
const permisosDeRol = (clave)=>[
        ...buscarRol(clave)?.permisos ?? []
    ];
const nombreRol = (clave)=>buscarRol(clave)?.nombre ?? clave;
const nombrePermiso = (clave)=>{
    for (const g of GRUPOS_PERMISOS){
        const p = g.permisos.find((x)=>x.clave === clave);
        if (p) return p.nombre;
    }
    return clave;
};
function diferenciaConElRol(usuario) {
    const p = Array.isArray(usuario?.permisos) ? usuario.permisos : [];
    // Con el comodín no hay nada que comparar: puede todo por definición.
    if (p.includes(TODO)) return {
        de_mas: [],
        de_menos: []
    };
    const molde = permisosDeRol(usuario?.rol);
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
    const lista = usuario.permisos ?? [];
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
}),
"[project]/src/lib/personal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "personalApi",
    ()=>personalApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permisos.js [app-ssr] (ecmascript)");
;
;
;
/**
 * El acceso a los datos de personal y auditoría.
 *
 * Leer va directo a las APIs de Django (la sesión del usuario ya da permiso):
 * pasarlo por más saltos solo sumaría demora. Escribir va por el módulo de
 * red — el proceso interno, a través del proxy de Django —, siempre: ahí se
 * verifica quién puede crear a quién, que en el navegador se saltea con la
 * consola abierta.
 */ const DJANGO = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || 'http://localhost:8000/api/v1').replace(/\/$/, '');
const BASE = (("TURBOPACK compile-time value", "http://localhost:8000/api/v1/red") || `${DJANGO}/red`).replace(/\/$/, '');
/**
 * En modo demo no hay backend ni servicio de red: se arma un plantel de mentira en
 * memoria. Sin esto la pantalla de personal sería la única del sistema que la
 * demo no puede mostrar, que es justo la que más se quiere mostrar al vender.
 */ const demo = {
    usuarios: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLES"].slice(0, 6).map((rol, i)=>({
            id: `demo-${rol.clave}`,
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
            email: `demo${i}@ejemplo.com`,
            celular: `09${80000000 + i * 111111}`,
            rol: rol.clave,
            activo: i !== 5,
            todas_las_zonas: i < 2,
            dos_factores: i < 2,
            permisos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["permisosDeRol"])(rol.clave),
            ultimo_acceso: null,
            creado_en: new Date(2025, i, 3).toISOString()
        })),
    auditoria: []
};
async function pedir(metodo, ruta, cuerpo) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getSession();
    const token = data?.session?.access_token;
    const res = await fetch(`${BASE}${ruta}`, {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {}
        },
        body: cuerpo ? JSON.stringify(cuerpo) : undefined
    }).catch(()=>{
        throw new Error(`No se puede contactar al backend en ${BASE}. ¿Está corriendo Django?`);
    });
    const texto = await res.text();
    let json = null;
    try {
        json = texto ? JSON.parse(texto) : null;
    } catch  {
    /* respuesta que no es JSON: se informa el texto crudo abajo */ }
    if (!res.ok) {
        const err = new Error(json?.error || json?.mensaje || texto || `Error ${res.status}`);
        err.hint = json?.hint;
        err.status = res.status;
        throw err;
    }
    return json;
}
const personalApi = {
    /** El plantel completo. Incluye a los inactivos: filtrarlos es de la pantalla. */ async listar () {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) return demo.usuarios;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('usuarios_sistema').select('*').order('activo', {
            ascending: false
        }).order('nombre');
        if (error) throw error;
        return data ?? [];
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
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) return {
            ...demo.usuarios[0],
            rol: 'super_admin',
            permisos: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TODO"]
            ]
        };
        // `getSession` lee del almacenamiento local; `getUser` pregunta al servidor.
        // Sin señal, el segundo se cuelga y con él toda la app: hay que saber quién
        // entró para dibujar cualquier cosa.
        const { data: ses } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].auth.getSession();
        const authId = ses?.session?.user?.id;
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
            const { data: fila, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('usuarios_sistema').select('*').eq('auth_id', authId).abortSignal(corte.signal).maybeSingle();
            if (error) throw error;
            return fila ?? null;
        } finally{
            clearTimeout(reloj);
        }
    },
    crear: (usuario)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            usuario
        }) : pedir('POST', '/api/personal', usuario),
    editar: (id, cambios)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            usuario: cambios
        }) : pedir('PATCH', `/api/personal/${id}`, cambios),
    eliminar: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            ok: true
        }) : pedir('DELETE', `/api/personal/${id}`),
    cambiarClave: (id, clave)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            ok: true
        }) : pedir('POST', `/api/personal/${id}/clave`, {
            clave
        }),
    /** Sella el último acceso al entrar. Que falle no puede impedir usar la app. */ marcarAcceso: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve({
            ok: true
        }) : pedir('POST', '/api/personal/acceso').catch(()=>null),
    /**
   * La auditoría. `usuarioId` la acota al historial de una persona, que es como
   * se la consulta el 90% de las veces: alguien pregunta qué hizo fulano.
   */ async auditoria ({ usuarioId, accion, desde, limite = 200 } = {}) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) return demo.auditoria;
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('auditoria_sistema').select('*').order('creado_en', {
            ascending: false
        }).limit(limite);
        if (usuarioId) q = q.eq('usuario_id', usuarioId);
        if (accion) q = q.like('accion', `${accion}%`);
        if (desde) q = q.gte('creado_en', desde);
        const { data, error } = await q;
        if (error) throw error;
        return data ?? [];
    },
    /**
   * Deja un hecho registrado desde cualquier pantalla.
   *
   * No lanza: una acción que ya sucedió no puede fallar porque no se pudo
   * escribir su renglón. Lo que sí hace es avisar por consola.
   */ registrar: (accion, descripcion, extra = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"] ? Promise.resolve() : pedir('POST', '/api/personal/auditoria', {
            accion,
            descripcion,
            ...extra
        }).catch((err)=>console.warn('[auditoria] no se registró:', err.message))
};
}),
"[project]/src/lib/instalaciones.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript) <export django as supabase>");
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__django__as__supabase$3e$__["supabase"].from('parametros_tecnicos').select('*').eq('id', 1).maybeSingle();
        if (error || !data) throw error ?? new Error('sin parámetros');
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
function semaforoPruebas({ ping_ms, ping_perdida, test_bajada_mbps }, planMbps) {
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
const semaforoDe = (i)=>i?.tecnologia === 'wireless' ? semaforoRadio(i?.senal_dbm, i?.ccq) : semaforoOptico(i?.rx_power_dbm);
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
    const crudo = String(texto ?? '').trim();
    if (!crudo) return {
        sn: null,
        mac: null
    };
    const mac = crudo.match(/([0-9A-F]{2}[:-]){5}[0-9A-F]{2}/i)?.[0] ?? null;
    // Serie GPON: cuatro letras del fabricante y ocho hexadecimales.
    const gpon = crudo.match(/\b([A-Z]{4}[0-9A-F]{8})\b/i)?.[0] ?? null;
    const etiquetada = crudo.match(/\b(?:SN|S\/N|SERIE|SERIAL)\s*[:=]?\s*([A-Z0-9-]{6,32})\b/i)?.[1] ?? null;
    // Sin etiqueta ni patrón conocido, si lo escaneado es una sola palabra se
    // toma entera: es lo que pasa con los códigos de barras, que traen la serie
    // pelada.
    const suelto = /^[A-Z0-9-]{6,32}$/i.test(crudo) ? crudo : null;
    return {
        sn: (gpon ?? etiquetada ?? suelto)?.toUpperCase() ?? null,
        mac: mac ? mac.toUpperCase().replace(/-/g, ':') : null
    };
}
function normalizarMac(texto) {
    const hex = String(texto ?? '').replace(/[^0-9A-F]/gi, '').toUpperCase();
    if (hex.length !== 12) return null;
    return hex.match(/.{2}/g).join(':');
}
// NFD separa la tilde de la letra y `\p{Diacritic}` la borra. Escrito como
// rango de caracteres serían marcas que se dibujan encima de la letra anterior
// y en el editor quedan invisibles.
const sinTildes = (t)=>String(t ?? '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
function usuarioSugerido({ nombre, identificacion } = {}) {
    const partes = sinTildes(nombre).replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(Boolean);
    if (!partes.length) return String(identificacion ?? '').replace(/\D/g, '') || '';
    if (partes.length === 1) return partes[0].slice(0, 40);
    // "Jefferson Fabián Oña Riera" → jefferson.ona. Con cuatro palabras el
    // apellido es el tercero, porque acá se usan dos nombres y dos apellidos;
    // con menos, el segundo. El técnico lo puede corregir de todos modos.
    const apellido = partes.length >= 4 ? partes[2] : partes[1];
    return `${partes[0]}.${apellido}`.slice(0, 40);
}
function claveSugerida(largo = 8) {
    const alfabeto = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    const bytes = crypto.getRandomValues(new Uint8Array(largo));
    return Array.from(bytes, (b)=>alfabeto[b % alfabeto.length]).join('');
}
const conUnidad = (valor, unidad, decimales = 1)=>valor == null || valor === '' ? '—' : `${Number(valor).toFixed(decimales)} ${unidad}`;
}),
"[project]/src/lib/cacheLocal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    } catch  {
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
    } catch  {
        return null;
    }
}
function limpiarCache() {
    try {
        for (const k of Object.keys(localStorage)){
            if (k.startsWith(PREFIJO)) localStorage.removeItem(k);
        }
    } catch  {
    /* nada que hacer */ }
}
async function conCache(clave, leer, { tiempoLimite = 6000 } = {}) {
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
}),
"[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth,
    "usePermisos",
    ()=>usePermisos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/djangoClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/personal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permisos.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/instalaciones.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cacheLocal.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
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
    } catch  {
    /* modo privado: se sigue sin caché, que es como estaba antes */ }
}
function leerPerfil(authId) {
    try {
        if (!authId) return null;
        const crudo = localStorage.getItem(CLAVE_PERFIL);
        if (!crudo) return null;
        const { authId: de, fila } = JSON.parse(crudo);
        return de === authId ? fila : null;
    } catch  {
        return null;
    }
}
const olvidarPerfil = ()=>{
    try {
        localStorage.removeItem(CLAVE_PERFIL);
    } catch  {
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
    } catch  {
        return null;
    }
}
function AuthProvider({ children }) {
    const [sesion, setSesion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // El legajo: quién es y qué puede.
    const [perfil, setPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargandoPerfil, setCargandoPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [errorPerfil, setErrorPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // En modo demo no hay backend: se entra con una sesión falsa.
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) {
            setSesion(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sesionDemo"]);
            setCargando(false);
            return;
        }
        // ── Leer la sesión guardada en localStorage (token Django) ────────────
        // Con el access token vencido pero el refresh vigente (volver al otro día,
        // recargar después de una hora) se renueva en vez de mandar al login.
        let vigente = true;
        (async ()=>{
            let sesionGuardada = leerSesionGuardada();
            if (!sesionGuardada && localStorage.getItem('django_refresh_token')) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].auth.tokenVigente();
                sesionGuardada = leerSesionGuardada();
            }
            if (!vigente) return;
            if (sesionGuardada) setSesion(sesionGuardada);
            setCargando(false);
        })();
        // Una consulta que no pudo renovar el token avisa: la sesión terminó de
        // verdad (refresh vencido o revocado) y hay que volver a entrar.
        const alVencer = ()=>{
            setSesion(null);
            olvidarPerfil();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limpiarCache"])();
        };
        window.addEventListener('django:sesion-vencida', alVencer);
        // ── Mantener el token al día aunque no haya consultas ────────────────
        // Cada consulta ya lo renueva sola si hace falta; esto solo actualiza el
        // token que guarda la sesión. Un error de red NO cierra la sesión: el
        // técnico sin señal no tiene que volver a entrar al recuperarla. La sesión
        // termina solo con 'django:sesion-vencida' (refresh vencido o revocado).
        const intervalo = setInterval(async ()=>{
            const token = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].auth.tokenVigente();
            if (token) setSesion((prev)=>prev && prev.access_token !== token ? {
                    ...prev,
                    access_token: token
                } : prev);
        }, 10 * 60 * 1000);
        return ()=>{
            vigente = false;
            clearInterval(intervalo);
            window.removeEventListener('django:sesion-vencida', alVencer);
        };
    }, []);
    const recargarPerfil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!sesion) {
            setPerfil(null);
            setErrorPerfil(null);
            setCargandoPerfil(false);
            return null;
        }
        setCargandoPerfil(true);
        try {
            const fila = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalApi"].yo();
            setPerfil(fila);
            setErrorPerfil(null);
            guardarPerfil(fila, sesion.user?.id);
            return fila;
        } catch (err) {
            console.warn('No se pudo leer el legajo del usuario:', err);
            /**
       * Plan B: el último perfil conocido.
       *
       * Sin esto, el técnico que abre la app en una zona rural ve una pantalla
       * en blanco. El perfil guardado NO relaja ninguna seguridad: cada consulta
       * la sigue filtrando el backend.
       */ const guardado = leerPerfil(sesion.user?.id);
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
    }, [
        sesion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let vivo = true;
        recargarPerfil().then((fila)=>{
            if (vivo && fila) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$personal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalApi"].marcarAcceso();
            if (vivo && fila) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$instalaciones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cargarParametros"])();
        });
        return ()=>{
            vivo = false;
        };
    }, [
        recargarPerfil
    ]);
    const cerrarSesion = async ()=>{
        olvidarPerfil();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cacheLocal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limpiarCache"])();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) {
            setSesion(null);
            return;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$djangoClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["django"].auth.signOut();
        setSesion(null);
    };
    const entrarDemo = ()=>setSesion(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sesionDemo"]);
    /**
   * ¿Puede hacer esto?
   *
   * Devuelve false mientras carga el perfil (evita parpadeo de menú),
   * false si hubo error (no decidir a ciegas), y evalúa permisos cuando ya hay datos.
   */ const puede = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clave)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modoDemo"]) return true;
        if (cargandoPerfil) return false;
        if (errorPerfil) return false;
        if (!perfil) return true;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tienePermiso"])(perfil, clave);
    }, [
        perfil,
        cargandoPerfil,
        errorPerfil
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            sesion,
            usuario: sesion?.user ?? null,
            perfil,
            rol: perfil?.rol ?? null,
            esSuperAdmin: perfil?.rol === 'super_admin' || perfil?.permisos?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permisos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TODO"]) === true,
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
const useAuth = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
const usePermisos = ()=>{
    const { puede, perfil, rol, esSuperAdmin, cargandoPerfil, errorPerfil } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    return {
        puede,
        perfil,
        rol,
        esSuperAdmin,
        cargandoPerfil,
        errorPerfil
    };
};
}),
"[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Aviso",
    ()=>Aviso,
    "Badge",
    ()=>Badge,
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
    "Input",
    ()=>Input,
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
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
;
;
;
function Card({ title, subtitle, icon: Icon, actions, children, className = '', desbordable = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `t-card ${desbordable ? '' : 'overflow-hidden'} ${className}`,
        children: [
            (title || actions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-start justify-between gap-4 border-b border-[rgba(15,23,42,0.06)] px-4 pt-4 pb-3 sm:px-6 sm:pt-5 sm:pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-5 w-1 shrink-0 rounded-full bg-gradient-to-b from-sky-700 to-sky-400",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "t-titulo flex items-center gap-2 text-sm font-bold text-slate-100",
                                        children: [
                                            Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 15,
                                                className: "text-sky-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/index.jsx",
                                                lineNumber: 57,
                                                columnNumber: 26
                                            }, this),
                                            title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-[11.5px] text-slate-500",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/index.jsx",
                                        lineNumber: 60,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-2",
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 63,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
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
 */ const VARIANTES = {
    primario: 'bg-gradient-to-r from-sky-700 to-sky-500 hover:from-sky-800 hover:to-sky-600 text-white border-transparent shadow-[0_6px_16px_-6px_rgba(3,105,161,0.6)]',
    secundario: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700',
    peligro: 'bg-red-600 hover:bg-red-700 text-white border-transparent',
    fantasma: 'bg-transparent hover:bg-slate-800 text-slate-300 border-transparent',
    exito: 'bg-emerald-600 hover:bg-emerald-700 text-white border-transparent',
    alerta: 'bg-amber-500 hover:bg-amber-600 text-[#0F172A] border-amber-500'
};
function Button({ children, variante = 'secundario', icon: Icon, cargando = false, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...props,
        disabled: props.disabled || cargando,
        className: `inline-flex items-center justify-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition
        disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTES[variante]} ${className}`,
        children: [
            cargando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                size: 15,
                className: "animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 109,
                columnNumber: 19
            }, this) : Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 15
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 109,
                columnNumber: 76
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function Field({ label, hint, children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `block ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-xs font-semibold text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            children,
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 block text-[11px] text-slate-600",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 120,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
/* Fondo blanco y no gris: un campo de formulario tiene que parecer un hueco
   donde escribir, y sobre una tarjeta blanca eso se consigue con el borde, no
   con el relleno. */ const ESTILO_CAMPO = 'w-full rounded-xl border border-slate-700 bg-white px-3 py-2 text-sm text-slate-100 ' + 'placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20';
const Input = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ...props,
        className: `${ESTILO_CAMPO} ${props.className || ''}`
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 132,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0));
const Textarea = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        ...props,
        className: `${ESTILO_CAMPO} ${props.className || ''}`
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 135,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Select = ({ children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        ...props,
        className: `${ESTILO_CAMPO} ${props.className || ''}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 139,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
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
const Badge = ({ color = 'gris', children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `t-badge ${COLORES_BADGE[color]}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 165,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function EnlaceIp({ ip, puerto, esquema = 'http', className = '' }) {
    const texto = String(ip ?? '').trim();
    const esIpv4 = /^\d{1,3}(\.\d{1,3}){3}$/.test(texto);
    if (!esIpv4) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: ip ?? '—'
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 192,
        columnNumber: 23
    }, this);
    const destino = `${esquema}://${texto}${puerto ? `:${puerto}` : ''}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: destino,
        target: "_blank",
        rel: "noopener noreferrer",
        title: `Abrir ${destino} en una pestaña nueva`,
        onClick: (e)=>e.stopPropagation(),
        className: `underline decoration-dotted underline-offset-2 hover:text-sky-400 ${className}`,
        children: texto
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
function EstadoBadge({ estado }) {
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
    const [color, texto] = mapa[String(estado).toLowerCase()] ?? [
        'gris',
        estado || 'desconocido'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
        color: color,
        children: texto
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 218,
        columnNumber: 10
    }, this);
}
function Table({ columnas, filas, vacio = 'Sin datos', renderFila, bajoEncabezado }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "t-tabla min-w-[600px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: columnas.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: c
                                }, i, false, {
                                    fileName: "[project]/src/components/ui/index.jsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        bajoEncabezado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-slate-800/40",
                            children: bajoEncabezado
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 239,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: filas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: columnas.length,
                            className: "px-3 py-8 text-center text-slate-500",
                            children: vacio
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 244,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 243,
                        columnNumber: 13
                    }, this) : filas.map(renderFila)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 224,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
function ErrorBanner({ error, onCerrar }) {
    if (!error) return null;
    const mensaje = error.message || String(error);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-3 rounded-xl bg-[#FEF2F2] px-4 py-3 text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                size: 18,
                className: "mt-0.5 shrink-0 text-red-400"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-red-400",
                        children: mensaje
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    error.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-red-300",
                        children: error.hint
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 270,
                        columnNumber: 24
                    }, this),
                    error.detalle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "t-dato mt-2 max-h-32 overflow-auto rounded-lg bg-white/70 p-2 text-[11px] text-red-300",
                        children: error.detalle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            onCerrar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onCerrar,
                className: "shrink-0 text-red-400 hover:text-red-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 278,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
function Aviso({ children, tipo = 'info' }) {
    const estilos = {
        info: 'bg-[#F0F9FF] text-sky-200',
        alerta: 'bg-[#FFFBEB] text-amber-300',
        exito: 'bg-[#ECFDF5] text-emerald-300'
    };
    const Icono = {
        alerta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        exito: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"]
    }[tipo] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-start gap-3 rounded-xl px-4 py-3 text-sm ${estilos[tipo]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icono, {
                size: 16,
                className: "mt-0.5 shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
const Cargando = ({ texto = 'Cargando…' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-2 py-8 text-sm text-slate-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                size: 16,
                className: "animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 303,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            texto
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 302,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Modal({ abierto, titulo, onCerrar, children, ancho = 'max-w-lg' }) {
    if (!abierto) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[rgba(15,23,42,0.45)] p-4 pt-16 backdrop-blur-[2px]",
        onClick: onCerrar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `t-card w-full ${ancho} overflow-hidden shadow-2xl`,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between border-b border-[rgba(15,23,42,0.06)] px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "t-titulo text-sm font-bold text-slate-100",
                            children: titulo
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCerrar,
                            "aria-label": "Cerrar",
                            className: "rounded-lg p-1 text-slate-500 transition hover:bg-slate-800 hover:text-slate-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/index.jsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 315,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 311,
        columnNumber: 5
    }, this);
}
function PedirMotivo({ abierto, titulo, etiquetaAccion = 'Confirmar', variante = 'peligro', icon, datos = [], sugerencias = [], advertencia = null, ayuda = 'Queda guardado y es lo que se le contesta al abonado si pregunta.', cargando = false, onCancelar, onConfirmar, children = null }) {
    const [motivo, setMotivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Se vacía al abrir y no al cerrar: si se limpiara al cerrar, un error de red
    // que deja la ventana abierta borraría lo que la persona acaba de escribir.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (abierto) setMotivo('');
    }, [
        abierto
    ]);
    const listo = motivo.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
        abierto: abierto,
        titulo: titulo,
        onCerrar: onCancelar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                datos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DatosEnFicha, {
                    datos: datos
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 386,
                    columnNumber: 30
                }, this),
                advertencia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Aviso, {
                    tipo: "alerta",
                    children: advertencia
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 388,
                    columnNumber: 25
                }, this),
                children,
                sugerencias.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mb-2 block text-xs font-semibold text-slate-400",
                            children: "Motivos frecuentes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: sugerencias.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMotivo(m),
                                    className: `rounded-full px-3 py-1 text-[11px] font-medium transition ${motivo === m ? 'bg-[#F0F9FF] text-sky-400' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100'}`,
                                    children: m
                                }, m, false, {
                                    fileName: "[project]/src/components/ui/index.jsx",
                                    lineNumber: 399,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 397,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 393,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                    label: "Motivo",
                    hint: ayuda,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        rows: 3,
                        autoFocus: true,
                        value: motivo,
                        onChange: (e)=>setMotivo(e.target.value),
                        placeholder: sugerencias.length ? 'Elige uno de arriba o escribe el tuyo…' : 'Escribe el motivo…'
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 416,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 pt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variante: "fantasma",
                            onClick: onCancelar,
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
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
                            lineNumber: 432,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 385,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
function DatosEnFicha({ datos }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-slate-800/60 p-3.5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
            className: "grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs",
            children: datos.map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contents",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                            className: "text-slate-500",
                            children: k
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            className: "t-dato text-right font-semibold text-slate-200",
                            children: v ?? '—'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 457,
                            columnNumber: 13
                        }, this)
                    ]
                }, k, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 455,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 453,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 452,
        columnNumber: 5
    }, this);
}
function Tabs({ tabs, activa, onCambiar }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto border-b border-[rgba(15,23,42,0.06)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex min-w-max gap-1",
            children: tabs.map((t)=>{
                const esta = t.clave === activa;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onCambiar(t.clave),
                    className: `relative whitespace-nowrap px-4 py-2.5 text-[13px] font-semibold transition ${esta ? 'text-sky-400' : 'text-slate-400 hover:text-slate-200'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: [
                                t.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(t.icon, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/index.jsx",
                                    lineNumber: 488,
                                    columnNumber: 28
                                }, this),
                                t.label,
                                t.contador != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "t-dato rounded-full bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400",
                                    children: t.contador
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/index.jsx",
                                    lineNumber: 491,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 487,
                            columnNumber: 15
                        }, this),
                        esta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-x-2 -bottom-px h-0.5 rounded bg-gradient-to-r from-sky-700 to-sky-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/index.jsx",
                            lineNumber: 497,
                            columnNumber: 17
                        }, this)
                    ]
                }, t.clave, true, {
                    fileName: "[project]/src/components/ui/index.jsx",
                    lineNumber: 479,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ui/index.jsx",
            lineNumber: 475,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 474,
        columnNumber: 5
    }, this);
}
const Skeleton = ({ className = 'h-4 w-full' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `animate-pulse rounded-lg bg-slate-800 ${className}`
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 515,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SkeletonTabla = ({ filas = 5, columnas = 4 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: Array.from({
            length: filas
        }, (_, f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: Array.from({
                    length: columnas
                }, (_, c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: `h-8 ${c === 0 ? 'w-16' : 'flex-1'}`
                    }, c, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, f, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 521,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 519,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Punto({ estado, titulo }) {
    const estilos = {
        online: 'bg-emerald-500',
        offline: 'bg-rose-500',
        desconocido: 'bg-slate-600'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        title: titulo ?? estado,
        className: `inline-block h-2.5 w-2.5 shrink-0 rounded-full ${estilos[estado] ?? estilos.desconocido}`
    }, void 0, false, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 544,
        columnNumber: 5
    }, this);
}
function Stat({ label, valor, sub, icon: Icon, color = 'text-sky-400' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "t-card relative overflow-hidden p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "t-stripe",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 561,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-slate-400",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 16,
                        className: color
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/index.jsx",
                        lineNumber: 564,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 562,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "t-kpi-valor mt-3",
                children: valor
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 566,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-[11px] text-slate-500",
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/components/ui/index.jsx",
                lineNumber: 567,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/index.jsx",
        lineNumber: 560,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/confirmar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmarProvider",
    ()=>ConfirmarProvider,
    "useConfirmar",
    ()=>useConfirmar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/index.jsx [app-ssr] (ecmascript)");
;
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
 */ const Contexto = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function ConfirmarProvider({ children }) {
    const [pedido, setPedido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * El `resolve` de la promesa que está esperando.
   *
   * Va en una ref y no en el estado a propósito: si estuviera en el estado,
   * cada dibujado crearía una identidad nueva y el `confirmar` que devuelve el
   * hook cambiaría en cada render, invalidando cualquier `useCallback` que lo
   * tenga como dependencia.
   */ const resolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const confirmar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((opciones)=>{
        // Se acepta un texto suelto porque la mayoría de los llamados son eso: una
        // sola pregunta. Pedir un objeto para escribir `{ mensaje: '¿Borrar?' }`
        // sería ceremonia sin nada a cambio.
        const cfg = typeof opciones === 'string' ? {
            mensaje: opciones
        } : opciones;
        return new Promise((resolve)=>{
            resolver.current = resolve;
            setPedido(cfg);
        });
    }, []);
    const responder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((respuesta)=>{
        setPedido(null);
        resolver.current?.(respuesta);
        resolver.current = null;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Contexto.Provider, {
        value: confirmar,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                abierto: !!pedido,
                titulo: pedido?.titulo ?? 'Confirmar',
                // Cerrar con la X o con Escape es decir que no. Cualquier otra cosa
                // dejaría la promesa colgada para siempre y la pantalla trabada.
                onCerrar: ()=>responder(false),
                children: pedido && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 20,
                                    className: pedido.variante === 'peligro' || !pedido.variante ? 'mt-0.5 flex-none text-amber-400' : 'mt-0.5 flex-none text-sky-400'
                                }, void 0, false, {
                                    fileName: "[project]/src/lib/confirmar.jsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        pedido.datos?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatosEnFicha"], {
                            datos: pedido.datos
                        }, void 0, false, {
                            fileName: "[project]/src/lib/confirmar.jsx",
                            lineNumber: 99,
                            columnNumber: 42
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: "fantasma",
                                    onClick: ()=>responder(false),
                                    children: pedido.etiquetaCancelar ?? 'Cancelar'
                                }, void 0, false, {
                                    fileName: "[project]/src/lib/confirmar.jsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variante: pedido.variante ?? 'peligro',
                                    autoFocus: true,
                                    onClick: ()=>responder(true),
                                    children: pedido.etiquetaAccion ?? 'Sí, continuar'
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
function useConfirmar() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(Contexto);
    if (ctx) return ctx;
    return (opciones)=>{
        const cfg = typeof opciones === 'string' ? {
            mensaje: opciones
        } : opciones;
        // eslint-disable-next-line no-alert
        return Promise.resolve(window.confirm(cfg.mensaje));
    };
}
}),
"[project]/src/components/ErrorBoundary.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    state = {
        error: null
    };
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid h-full place-items-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl rounded-xl border border-red-500/30 bg-red-500/10 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-base font-semibold text-red-200",
                        children: "La aplicación no pudo cargar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ErrorBoundary.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-red-300/90",
                        children: this.state.error.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ErrorBoundary.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-4 max-h-64 overflow-auto rounded-lg bg-black/40 p-3 text-[11px] text-red-200/70",
                        children: this.state.error.stack
                    }, void 0, false, {
                        fileName: "[project]/src/components/ErrorBoundary.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}
}),
"[project]/src/components/layout/FranjaAmbiente.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FranjaAmbiente
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
;
;
function FranjaAmbiente() {
    const ambiente = process.env.NEXT_PUBLIC_AMBIENTE;
    if (!ambiente) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        // `sticky` y no `fixed`: empuja el contenido en vez de taparlo. Con
        // `fixed` la franja se comería la primera fila de cualquier tabla.
        className: "sticky top-0 z-[60] flex items-center justify-center gap-2 border-b border-amber-400/40 bg-amber-500 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                size: 14,
                className: "flex-none"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/FranjaAmbiente.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "Ambiente de ",
                    ambiente
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/FranjaAmbiente.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/layout/AvisoVersion.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvisoVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
;
;
;
function AvisoVersion() {
    const [hayNueva, setHayNueva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!('serviceWorker' in navigator)) return undefined;
        /*
      Sin controlador es la PRIMERA instalación: no hay versión anterior que
      reemplazar. Avisar ahí diría "hay una versión nueva" a alguien que acaba
      de abrir la app por primera vez.
    */ if (!navigator.serviceWorker.controller) return undefined;
        const alCambiar = ()=>setHayNueva(true);
        navigator.serviceWorker.addEventListener('controllerchange', alCambiar);
        /*
      El navegador busca actualizaciones al navegar, y en una aplicación de una
      sola página casi no hay navegaciones de verdad. Sin esto, una pestaña
      abierta desde la mañana no se entera de nada.

      Al volver a la pestaña y cada cuarto de hora: es barato —una petición
      condicional al service worker— y cubre el caso de quien la deja abierta.
    */ let registro = null;
        navigator.serviceWorker.getRegistration().then((r)=>{
            registro = r ?? null;
        });
        const buscar = ()=>registro?.update?.().catch(()=>{});
        const reloj = setInterval(buscar, 15 * 60 * 1000);
        window.addEventListener('focus', buscar);
        return ()=>{
            navigator.serviceWorker.removeEventListener('controllerchange', alCambiar);
            window.removeEventListener('focus', buscar);
            clearInterval(reloj);
        };
    }, []);
    if (!hayNueva) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        className: "fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-center gap-3 border-t border-[rgba(15,23,42,0.08)] bg-white px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.25)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-slate-200",
                children: "Hay una versión nueva del sistema."
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AvisoVersion.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>window.location.reload(),
                className: "t-btn t-btn-marca",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/NextProviders.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NextProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/confirmar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ErrorBoundary.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$FranjaAmbiente$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/FranjaAmbiente.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AvisoVersion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AvisoVersion.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function NextProviders({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StrictMode"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$confirmar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmarProvider"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$FranjaAmbiente$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/NextProviders.jsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AvisoVersion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__419abf3f._.js.map