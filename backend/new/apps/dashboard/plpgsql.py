"""
Intérprete de PL/pgSQL sobre SQLite.

Las funciones del esquema del dashboard (las RPC que llama el dashboard y las de los
disparadores) están escritas en PL/pgSQL. En lugar de reescribirlas una por una
en Python, este módulo ejecuta su cuerpo tal como está:

- el control de flujo (DECLARE, IF/ELSIF, CASE, LOOP, WHILE, FOR ... IN SELECT,
  FOREACH, EXIT/CONTINUE, RETURN, RETURN QUERY, RAISE, EXCEPTION WHEN) lo
  interpreta Python;
- cada sentencia SQL de adentro (SELECT ... INTO, INSERT/UPDATE/DELETE ...
  RETURNING INTO, PERFORM, expresiones) pasa por el traductor de vistas
  (vistas_sqlite.Traductor) con las variables como parámetros, y se ejecuta en
  la conexión SQLite.

Valores en SQLite: uuid → hex sin guiones (como lo guarda Django), booleanos →
0/1, fechas → texto ISO, json/arreglos → texto JSON.

Uso:
    from apps.dashboard.plpgsql import ejecutar_funcion
    resultado = ejecutar_funcion('aplicar_cobro', {'p_client_id': ..., 'p_monto': 20})
"""
import json
import re
import threading
from dataclasses import dataclass, field
from decimal import Decimal

import sqlglot
from sqlglot import exp

# ── errores ──────────────────────────────────────────────────────────────────


class ErrorPlpgsql(Exception):
    """RAISE EXCEPTION (o un error de SQL adentro de una función)."""

    def __init__(self, mensaje, codigo='P0001', detalle=None, sugerencia=None):
        super().__init__(mensaje)
        self.mensaje = mensaje
        self.codigo = codigo
        self.detalle = detalle
        self.sugerencia = sugerencia


class _Salir(Exception):
    def __init__(self, etiqueta=None):
        self.etiqueta = etiqueta


class _Continuar(Exception):
    def __init__(self, etiqueta=None):
        self.etiqueta = etiqueta


class _Retornar(Exception):
    def __init__(self, valor):
        self.valor = valor


# El último error de una función llamada desde SQLite (un disparador, una UDF):
# SQLite lo reemplaza por "user-defined function raised exception".
_local = threading.local()


def ultimo_error():
    return getattr(_local, 'error', None)


def limpiar_error():
    _local.error = None


# ── tokens ───────────────────────────────────────────────────────────────────

_TOKEN = re.compile(r"""
    (?P<espacio>\s+)
  | (?P<comentario>--[^\n]*|/\*.*?\*/)
  | (?P<dolar>\$[A-Za-z_]*\$)
  | (?P<cadena>[Ee]?'(?:[^']|'')*')
  | (?P<ident>"(?:[^"]|"")+"|[A-Za-z_][A-Za-z0-9_$]*)
  | (?P<numero>\d+(?:\.\d+)?)
  | (?P<op>:=|\.\.|<<|>>|::|<>|!=|<=|>=|\|\||[-+*/%^=<>(),;.\[\]:|&@~#?!])
""", re.S | re.X)


@dataclass
class Token:
    tipo: str
    texto: str
    inicio: int
    fin: int

    @property
    def palabra(self):
        return self.texto.upper() if self.tipo == 'ident' else None


def tokenizar(texto):
    tokens, i = [], 0
    while i < len(texto):
        m = _TOKEN.match(texto, i)
        if not m:
            tokens.append(Token('op', texto[i], i, i + 1))
            i += 1
            continue
        tipo = m.lastgroup
        if tipo == 'dolar':
            fin = texto.find(m.group(0), m.end())
            fin = len(texto) if fin < 0 else fin + len(m.group(0))
            tokens.append(Token('cadena', texto[i:fin], i, fin))
            i = fin
            continue
        if tipo not in ('espacio', 'comentario'):
            tokens.append(Token(tipo, m.group(0), m.start(), m.end()))
        i = m.end()
    return tokens


# ── árbol ────────────────────────────────────────────────────────────────────


@dataclass
class Declaracion:
    nombre: str
    tipo: str
    defecto: str = None
    constante: bool = False


@dataclass
class Bloque:
    declaraciones: list
    cuerpo: list
    manejadores: list = field(default_factory=list)   # [(condiciones, cuerpo)]
    etiqueta: str = None


@dataclass
class Si:
    ramas: list          # [(condición, cuerpo)]
    otro: list = None


@dataclass
class Caso:
    expresion: str       # None = CASE WHEN ...
    ramas: list          # [(valores_o_condición, cuerpo)]
    otro: list = None


@dataclass
class Bucle:
    cuerpo: list
    etiqueta: str = None


@dataclass
class Mientras:
    condicion: str
    cuerpo: list
    etiqueta: str = None


@dataclass
class ParaEntero:
    variable: str
    desde: str
    hasta: str
    paso: str
    reverso: bool
    cuerpo: list
    etiqueta: str = None


@dataclass
class ParaConsulta:
    variables: list
    consulta: str
    cuerpo: list
    etiqueta: str = None


@dataclass
class ParaCada:
    variable: str
    arreglo: str
    cuerpo: list
    etiqueta: str = None


@dataclass
class Salir:
    etiqueta: str = None
    condicion: str = None
    continuar: bool = False


@dataclass
class Retornar:
    expresion: str = None
    consulta: str = None
    siguiente: bool = False


@dataclass
class Lanzar:
    nivel: str
    formato: str
    argumentos: list
    opciones: dict


@dataclass
class Asignar:
    destino: str
    expresion: str


@dataclass
class Sql:
    texto: str
    destinos: list = None      # INTO
    estricto: bool = False
    perform: bool = False


@dataclass
class Diagnostico:
    asignaciones: list         # [(variable, item)]


# ── parser ───────────────────────────────────────────────────────────────────


class Parser:
    def __init__(self, texto):
        self.texto = texto
        self.t = tokenizar(texto)
        self.i = 0

    # utilidades

    def ver(self, k=0):
        j = self.i + k
        return self.t[j] if j < len(self.t) else None

    def palabra(self, k=0):
        tok = self.ver(k)
        return tok.palabra if tok else None

    def es(self, *palabras):
        return self.palabra() in palabras

    def tomar(self, esperado=None):
        tok = self.ver()
        if tok is None:
            raise ErrorPlpgsql(f'Fin inesperado del cuerpo (se esperaba {esperado})', 'XX000')
        if esperado and (tok.palabra or tok.texto) != esperado:
            raise ErrorPlpgsql(f'Se esperaba {esperado} y vino {tok.texto!r} cerca de: '
                               f'{self.texto[tok.inicio:tok.inicio + 60]!r}', 'XX000')
        self.i += 1
        return tok

    def punto_y_coma(self):
        if self.ver() and self.ver().texto == ';':
            self.i += 1

    def hasta(self, *cortes, dentro=False):
        """El texto desde acá hasta la primera palabra/op de `cortes` a profundidad 0."""
        inicio = self.ver().inicio if self.ver() else len(self.texto)
        prof = 0
        caso = 0          # CASE ... END dentro de una expresión SQL
        while self.ver() is not None:
            tok = self.ver()
            p = tok.palabra
            if tok.texto in ('(', '['):
                prof += 1
            elif tok.texto in (')', ']'):
                prof -= 1
            elif prof == 0 and p == 'CASE':
                caso += 1
            elif prof == 0 and p == 'END' and caso:
                caso -= 1
                self.i += 1
                continue
            if prof == 0 and not caso and ((p and p in cortes) or tok.texto in cortes):
                break
            self.i += 1
        fin = self.ver().inicio if self.ver() else len(self.texto)
        return self.texto[inicio:fin].strip()

    # entrada

    def funcion(self):
        bloques = []
        while self.ver() is not None:
            bloques.append(self.bloque())
            self.punto_y_coma()
        return bloques[0] if len(bloques) == 1 else Bloque([], bloques)

    def bloque(self, etiqueta=None):
        declaraciones = []
        if self.es('DECLARE'):
            self.tomar()
            while not self.es('BEGIN'):
                declaraciones.append(self.declaracion())
        self.tomar('BEGIN')
        cuerpo = self.sentencias('EXCEPTION', 'END')
        manejadores = []
        if self.es('EXCEPTION'):
            self.tomar()
            while self.es('WHEN'):
                self.tomar()
                condiciones = self.hasta('THEN')
                self.tomar('THEN')
                manejadores.append(([c.strip().lower() for c in re.split(r'\s+OR\s+', condiciones, flags=re.I)],
                                    self.sentencias('WHEN', 'END')))
        self.tomar('END')
        if self.ver() and self.ver().tipo == 'ident' and self.ver().texto != ';' and not self.es('IF', 'LOOP', 'CASE'):
            self.tomar()          # END etiqueta
        return Bloque(declaraciones, cuerpo, manejadores, etiqueta)

    def declaracion(self):
        nombre = self.tomar().texto.strip('"').lower()
        constante = False
        if self.es('CONSTANT'):
            self.tomar()
            constante = True
        if self.es('ALIAS'):
            self.hasta(';')
            self.punto_y_coma()
            return Declaracion(nombre, 'ALIAS')
        tipo = self.hasta(':=', '=', 'DEFAULT', ';')
        defecto = None
        if self.ver() and (self.ver().texto in (':=', '=') or self.es('DEFAULT')):
            self.tomar()
            defecto = self.hasta(';')
        self.punto_y_coma()
        tipo = re.sub(r'\s+NOT\s+NULL\s*$', '', tipo, flags=re.I).strip()
        return Declaracion(nombre, tipo, defecto, constante)

    def sentencias(self, *fin):
        salida = []
        while self.ver() is not None and not self.es(*fin):
            s = self.sentencia()
            if s is not None:
                salida.append(s)
        return salida

    def sentencia(self):
        tok = self.ver()
        if tok.texto == ';':
            self.i += 1
            return None
        etiqueta = None
        if tok.texto == '<<':
            self.tomar()
            etiqueta = self.tomar().texto.lower()
            self.tomar('>>')
            tok = self.ver()
        p = tok.palabra
        if p in ('DECLARE', 'BEGIN'):
            b = self.bloque(etiqueta)
            self.punto_y_coma()
            return b
        if p == 'IF':
            return self.si()
        if p == 'CASE':
            return self.caso()
        if p == 'LOOP':
            self.tomar()
            cuerpo = self.sentencias('END')
            self.fin_de('LOOP')
            return Bucle(cuerpo, etiqueta)
        if p == 'WHILE':
            self.tomar()
            cond = self.hasta('LOOP')
            self.tomar('LOOP')
            cuerpo = self.sentencias('END')
            self.fin_de('LOOP')
            return Mientras(cond, cuerpo, etiqueta)
        if p == 'FOR':
            return self.para(etiqueta)
        if p == 'FOREACH':
            self.tomar()
            var = self.tomar().texto.lower()
            if self.es('SLICE'):
                self.tomar()
                self.tomar()
            self.tomar('IN')
            self.tomar('ARRAY')
            arreglo = self.hasta('LOOP')
            self.tomar('LOOP')
            cuerpo = self.sentencias('END')
            self.fin_de('LOOP')
            return ParaCada(var, arreglo, cuerpo, etiqueta)
        if p in ('EXIT', 'CONTINUE'):
            self.tomar()
            et, cond = None, None
            if self.ver() and self.ver().tipo == 'ident' and not self.es('WHEN'):
                et = self.tomar().texto.lower()
            if self.es('WHEN'):
                self.tomar()
                cond = self.hasta(';')
            self.punto_y_coma()
            return Salir(et, cond, p == 'CONTINUE')
        if p == 'RETURN':
            self.tomar()
            if self.es('QUERY'):
                self.tomar()
                consulta = self.hasta(';')
                self.punto_y_coma()
                return Retornar(consulta=consulta)
            if self.es('NEXT'):
                self.tomar()
                e = self.hasta(';')
                self.punto_y_coma()
                return Retornar(expresion=e or None, siguiente=True)
            e = self.hasta(';')
            self.punto_y_coma()
            return Retornar(expresion=e or None)
        if p == 'RAISE':
            return self.lanzar()
        if p == 'NULL' and self.ver(1) and self.ver(1).texto == ';':
            self.tomar()
            self.punto_y_coma()
            return None
        if p == 'PERFORM':
            self.tomar()
            texto = self.hasta(';')
            self.punto_y_coma()
            return Sql(texto, perform=True)
        if p == 'GET':
            self.tomar()
            if self.es('CURRENT', 'STACKED'):
                self.tomar()
            self.tomar('DIAGNOSTICS')
            texto = self.hasta(';')
            self.punto_y_coma()
            asignaciones = []
            for parte in texto.split(','):
                v, _, item = parte.partition('=')
                if not item:
                    v, _, item = parte.partition(':=')
                asignaciones.append((v.strip().lower(), item.strip().upper()))
            return Diagnostico(asignaciones)
        if p in ('SELECT', 'WITH', 'INSERT', 'UPDATE', 'DELETE', 'VALUES', 'LOCK', 'TRUNCATE', 'EXECUTE'):
            return self.sql()
        # asignación: destino := expresión
        inicio = self.i
        destino = self.hasta(':=', '=', ';')
        if self.ver() and self.ver().texto in (':=', '='):
            self.tomar()
            expresion = self.hasta(';')
            self.punto_y_coma()
            return Asignar(destino.lower(), expresion)
        self.i = inicio
        return self.sql()

    def fin_de(self, palabra):
        self.tomar('END')
        self.tomar(palabra)
        if self.ver() and self.ver().tipo == 'ident':
            self.tomar()
        self.punto_y_coma()

    def si(self):
        self.tomar('IF')
        ramas = []
        cond = self.hasta('THEN')
        self.tomar('THEN')
        ramas.append((cond, self.sentencias('ELSIF', 'ELSEIF', 'ELSE', 'END')))
        otro = None
        while self.es('ELSIF', 'ELSEIF'):
            self.tomar()
            cond = self.hasta('THEN')
            self.tomar('THEN')
            ramas.append((cond, self.sentencias('ELSIF', 'ELSEIF', 'ELSE', 'END')))
        if self.es('ELSE'):
            self.tomar()
            otro = self.sentencias('END')
        self.fin_de('IF')
        return Si(ramas, otro)

    def caso(self):
        self.tomar('CASE')
        expresion = None
        if not self.es('WHEN'):
            expresion = self.hasta('WHEN')
        ramas = []
        while self.es('WHEN'):
            self.tomar()
            cond = self.hasta('THEN')
            self.tomar('THEN')
            ramas.append((cond, self.sentencias('WHEN', 'ELSE', 'END')))
        otro = None
        if self.es('ELSE'):
            self.tomar()
            otro = self.sentencias('END')
        self.fin_de('CASE')
        return Caso(expresion, ramas, otro)

    def para(self, etiqueta):
        self.tomar('FOR')
        variables = [self.tomar().texto.lower()]
        while self.ver().texto == ',':
            self.tomar()
            variables.append(self.tomar().texto.lower())
        self.tomar('IN')
        reverso = False
        if self.es('REVERSE'):
            self.tomar()
            reverso = True
        # ¿Rango de enteros (a .. b) o consulta?
        j, prof, es_rango = self.i, 0, False
        while j < len(self.t):
            tk = self.t[j]
            if tk.texto == '(':
                prof += 1
            elif tk.texto == ')':
                prof -= 1
            elif prof == 0 and tk.palabra == 'LOOP':
                break
            elif prof == 0 and tk.texto == '..':
                es_rango = True
                break
            j += 1
        if es_rango:
            desde = self.hasta('..')
            self.tomar('..')
            hasta = self.hasta('BY', 'LOOP')
            paso = None
            if self.es('BY'):
                self.tomar()
                paso = self.hasta('LOOP')
            self.tomar('LOOP')
            cuerpo = self.sentencias('END')
            self.fin_de('LOOP')
            return ParaEntero(variables[0], desde, hasta, paso, reverso, cuerpo, etiqueta)
        consulta = self.hasta('LOOP')
        self.tomar('LOOP')
        cuerpo = self.sentencias('END')
        self.fin_de('LOOP')
        return ParaConsulta(variables, consulta, cuerpo, etiqueta)

    def lanzar(self):
        self.tomar('RAISE')
        nivel = 'EXCEPTION'
        if self.es('EXCEPTION', 'NOTICE', 'WARNING', 'INFO', 'LOG', 'DEBUG'):
            nivel = self.tomar().palabra
        texto = self.hasta(';')
        self.punto_y_coma()
        opciones = {}
        usando = re.search(r'\bUSING\b(.*)$', texto, re.I | re.S)
        if usando:
            texto = texto[:usando.start()].strip()
            for parte in _partir_comas(usando.group(1)):
                k, _, v = parte.partition('=')
                opciones[k.strip().upper()] = v.strip()
        if not texto:
            return Lanzar(nivel, None, [], opciones)
        partes = _partir_comas(texto)
        formato = partes[0]
        if formato.startswith(("'", "E'", "e'", '$')):
            return Lanzar(nivel, formato, partes[1:], opciones)
        # RAISE nombre_de_condición / SQLSTATE '...'
        return Lanzar(nivel, None, [], {**opciones, 'CONDICION': texto})

    def sql(self):
        texto = self.hasta(';')
        self.punto_y_coma()
        destinos, estricto = None, False
        # INTO de un SELECT (en cualquier lugar de la proyección) o del RETURNING.
        tokens = tokenizar(texto)
        prof = 0
        for k, tk in enumerate(tokens):
            if tk.texto == '(':
                prof += 1
            elif tk.texto == ')':
                prof -= 1
            elif prof == 0 and tk.palabra == 'INTO':
                previo = tokens[k - 1].palabra if k else None
                if previo == 'INSERT':
                    continue
                j = k + 1
                if j < len(tokens) and tokens[j].palabra == 'STRICT':
                    estricto = True
                    j += 1
                nombres = []
                while j < len(tokens):
                    nombres.append(tokens[j].texto.lower())
                    j += 1
                    while j < len(tokens) and tokens[j].texto == '.':
                        nombres[-1] += '.' + tokens[j + 1].texto.lower()
                        j += 2
                    if j < len(tokens) and tokens[j].texto == ',':
                        j += 1
                        continue
                    break
                fin = tokens[j].inicio if j < len(tokens) else len(texto)
                destinos = nombres
                texto = (texto[:tk.inicio] + ' ' + texto[fin:]).strip()
                break
        return Sql(texto, destinos, estricto)


def _partir_comas(texto):
    partes, actual, prof, i = [], [], 0, 0
    for tk in tokenizar(texto):
        if tk.texto in ('(', '['):
            prof += 1
        elif tk.texto in (')', ']'):
            prof -= 1
        if tk.texto == ',' and prof == 0:
            partes.append(texto[i:tk.inicio].strip())
            i = tk.fin
    partes.append(texto[i:].strip())
    return [p for p in partes if p]


def compilar(cuerpo):
    return Parser(cuerpo).funcion()


# ══ ejecución ════════════════════════════════════════════════════════════════
