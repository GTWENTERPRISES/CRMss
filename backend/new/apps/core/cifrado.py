"""
Las columnas cifradas en reposo, vistas desde el SQL del sistema.

Los modelos dicen qué va cifrado (EncryptedCharField / EncryptedTextField en
apps/core/fields.py). La base guarda 'enc::...', y para que las vistas, los
procesos (PL/pgSQL) y la API genérica sigan comparando, buscando y ordenando,
este módulo reescribe su SQL antes de ejecutarlo:

    lectura    c.identificacion          → pg_descifrar(c.identificacion)
    escritura  INSERT ... (email) VALUES ('a@b.c')  → VALUES (pg_cifrar('a@b.c'))
               UPDATE clientes SET telefono = x     → SET telefono = pg_cifrar(x)

Solo se tocan columnas de TABLAS cifradas (no de subconsultas ni vistas, que ya
devuelven el texto en claro), resueltas por el alias de cada FROM.
"""
from functools import lru_cache

from sqlglot import exp
from sqlglot.optimizer.scope import traverse_scope


@lru_cache(maxsize=1)
def columnas_cifradas():
    """{tabla: frozenset(columnas)} de todos los modelos con campos cifrados."""
    from django.apps import apps

    from .fields import EncryptedJSONField, EncryptedMixin

    resultado = {}
    for modelo in apps.get_models():
        meta = modelo._meta
        if meta.proxy:
            continue
        cols = {c.column for c in meta.concrete_fields if isinstance(c, (EncryptedMixin, EncryptedJSONField))}
        if cols:
            resultado.setdefault(meta.db_table, set()).update(cols)
    return {t: frozenset(c) for t, c in resultado.items()}


def es_cifrada(tabla, columna):
    return columna in columnas_cifradas().get(tabla, ())


def _f(nombre, nodo):
    return exp.Anonymous(this=nombre, expressions=[nodo])


def _ya_envuelto(nodo, nombre):
    padre = nodo.parent
    return isinstance(padre, exp.Anonymous) and str(padre.this).lower() == nombre


def _tabla(nodo):
    """El nombre de tabla de un exp.Table (o del Schema de un INSERT)."""
    if isinstance(nodo, exp.Schema):
        nodo = nodo.this
    return nodo.name.lower() if isinstance(nodo, exp.Table) else None


# ── lecturas ─────────────────────────────────────────────────────────────────

def _fuente(scope, columna, tipos):
    """La tabla de la que sale una columna: por su alias, subiendo a los scopes de afuera."""
    alias = columna.table
    s = scope
    while s is not None:
        if alias:
            if alias in s.sources:
                return s.sources[alias]
        else:
            # Sin calificar (qualify no pudo): solo si una sola tabla del FROM la tiene.
            candidatas = [src for src in s.sources.values()
                          if isinstance(src, exp.Table) and columna.name in tipos.get(src.name.lower(), ())]
            if len(candidatas) == 1:
                return candidatas[0]
            if s.sources:
                return None
        s = s.parent
    return None


def _descifrar_columna(col):
    if col.meta.get('destino_cifrado') or _ya_envuelto(col, 'pg_descifrar'):
        return
    padre = col.parent
    envuelto = _f('pg_descifrar', col.copy())
    # Una proyección sin alias conserva su nombre de salida.
    if isinstance(padre, exp.Select) and col in padre.expressions:
        envuelto = exp.alias_(envuelto, col.name)
    col.replace(envuelto)


def _lecturas_en_select(raiz, cifradas, tipos):
    for scope in traverse_scope(raiz):
        for col in list(scope.columns):
            fuente = _fuente(scope, col, tipos)
            if isinstance(fuente, exp.Table) and col.name in cifradas.get(fuente.name.lower(), ()):
                _descifrar_columna(col)


def _selects_de_primer_nivel(nodo):
    """Los SELECT dentro de un DML que no están dentro de otro SELECT."""
    for sel in nodo.find_all(exp.Select, exp.Union):
        anc = sel.parent
        while anc is not None and anc is not nodo and not isinstance(anc, (exp.Select, exp.Union)):
            anc = anc.parent
        if anc is nodo or anc is None:
            yield sel


# ── escrituras ───────────────────────────────────────────────────────────────

def _cifrar_valor(nodo):
    if nodo is None or isinstance(nodo, exp.Null) or _ya_envuelto(nodo, 'pg_cifrar'):
        return nodo
    if isinstance(nodo, exp.Column) and nodo.table.lower() == 'excluded':
        return nodo  # EXCLUDED.x ya viene cifrado del VALUES
    return _f('pg_cifrar', nodo.copy())


def _asignaciones(eqs, cols):
    for eq in eqs or []:
        if isinstance(eq, exp.EQ) and isinstance(eq.this, exp.Column) and eq.this.name in cols:
            eq.this.meta['destino_cifrado'] = True
            eq.set('expression', _cifrar_valor(eq.expression))


def _proyecciones(sel):
    if isinstance(sel, exp.Union):
        return [p for lado in (sel.this, sel.expression) for p in _proyecciones(lado)]
    return [sel]


def _escrituras(raiz, cifradas):
    for upd in raiz.find_all(exp.Update):
        cols = cifradas.get(_tabla(upd.this))
        if cols:
            _asignaciones(upd.expressions, cols)

    for ins in raiz.find_all(exp.Insert):
        tabla = _tabla(ins.this)
        cols = cifradas.get(tabla)
        if not cols:
            continue
        nombres = [i.name for i in ins.this.expressions] if isinstance(ins.this, exp.Schema) else []
        posiciones = [i for i, n in enumerate(nombres) if n in cols]
        fuente = ins.expression
        if posiciones and isinstance(fuente, exp.Values):
            for fila in fuente.expressions:
                valores = fila.expressions if isinstance(fila, exp.Tuple) else [fila]
                for i in posiciones:
                    if i < len(valores):
                        valores[i].replace(_cifrar_valor(valores[i]))
        elif posiciones and isinstance(fuente, (exp.Select, exp.Union)):
            for sel in _proyecciones(fuente):
                for i in posiciones:
                    if i < len(sel.expressions):
                        p = sel.expressions[i]
                        objetivo = p.this if isinstance(p, exp.Alias) else p
                        cifrado = _cifrar_valor(objetivo)
                        if isinstance(p, exp.Alias):
                            p.set('this', cifrado)
                        else:
                            p.replace(exp.alias_(cifrado, nombres[i]))
        conflicto = ins.args.get('conflict')
        if conflicto is not None:
            _asignaciones(conflicto.args.get('expressions'), cols)


def _lecturas_en_dml(raiz, cifradas, tipos):
    """Columnas propias de un UPDATE / DELETE (su WHERE, sus SET de la derecha)."""
    for dml in raiz.find_all(exp.Update, exp.Delete):
        tabla = _tabla(dml.this)
        cols = cifradas.get(tabla, ())
        alias = dml.this.alias_or_name.lower() if isinstance(dml.this, exp.Table) else tabla
        if not cols:
            continue
        for col in list(dml.find_all(exp.Column)):
            # Las de un SELECT anidado las resuelve su propio scope.
            if _dentro_de_select(col, dml):
                continue
            if col.name in cols and (not col.table or col.table.lower() in (alias, tabla)):
                _descifrar_columna(col)


def _dentro_de_select(nodo, hasta):
    anc = nodo.parent
    while anc is not None and anc is not hasta:
        if isinstance(anc, (exp.Select, exp.Union)):
            return True
        anc = anc.parent
    return False


def aplicar_cifrado(arbol, tipos=None):
    """Reescribe (en el lugar) un árbol de sqlglot ya calificado. Devuelve el árbol."""
    cifradas = columnas_cifradas()
    if not cifradas:
        return arbol
    tipos = tipos or {}
    _escrituras(arbol, cifradas)
    _lecturas_en_dml(arbol, cifradas, tipos)
    if isinstance(arbol, (exp.Select, exp.Union)):
        _lecturas_en_select(arbol, cifradas, tipos)
    else:
        for sel in list(_selects_de_primer_nivel(arbol)):
            _lecturas_en_select(sel, cifradas, tipos)
    return arbol


def cifrar_lo_que_esta_en_claro(cursor, registro_de_apps):
    """
    Cifra en el lugar los valores en claro de todas las columnas cifradas de los
    modelos de `registro_de_apps` (el de una migración). Salta lo que ya empieza
    con 'enc::'. Devuelve cuántos valores cifró. Lo usan las migraciones.
    """
    from .fields import EncryptedJSONField, EncryptedMixin, cifrar

    total = 0
    hechas = set()
    for modelo in registro_de_apps.get_models():
        meta = modelo._meta
        cols = [c.column for c in meta.concrete_fields if isinstance(c, (EncryptedMixin, EncryptedJSONField))]
        if not cols or meta.proxy or meta.db_table in hechas:
            continue
        hechas.add(meta.db_table)
        for col in cols:
            cursor.execute(
                f'SELECT rowid, "{col}" FROM "{meta.db_table}" '
                f"WHERE \"{col}\" IS NOT NULL AND \"{col}\" <> '' AND \"{col}\" NOT LIKE 'enc::%'"
            )
            for rowid, valor in cursor.fetchall():
                cursor.execute(f'UPDATE "{meta.db_table}" SET "{col}" = %s WHERE rowid = %s',
                               [cifrar(str(valor)), rowid])
                total += 1
    return total
