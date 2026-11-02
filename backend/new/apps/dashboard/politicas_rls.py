"""
La seguridad por fila (RLS) del esquema del dashboard, traducida a SQLite.

En Postgres cada tabla con `ENABLE ROW LEVEL SECURITY` tenía sus políticas:
el técnico solo ve sus trabajos, el vendedor sus comisiones, nadie escribe a
mano una cohorte de comisiones. SQLite no tiene RLS, así que se reproduce en
dos lugares:

- **La API de tablas** (apps/core/rls.py) agrega la condición de la política a
  cada SELECT / UPDATE / DELETE y revisa la fila después de cada INSERT/UPDATE.
- **Las vistas `security_invoker`**, que en Postgres aplicaban la RLS de quien
  consulta: cada tabla con política se cambia, al generar la vista, por
  `(SELECT * FROM tabla WHERE NOT rls_activa() OR <política>)`.

`rls_activa()` es falso para el usuario de servicio (el middleware, que en
es el usuario de servicio), dentro de una función SECURITY DEFINER y fuera
de una petición (comandos, tareas): ahí Postgres tampoco aplicaba RLS.

Lo usan `manage.py generar_vistas` (que escribe politicas_generadas.py) y la
generación de vistas. No lo usa nada en tiempo de ejecución.
"""
import re

import sqlglot
from sqlglot import exp

# Las políticas que le tocan al personal: `TO authenticated` o sin TO (public).
ROLES_DEL_PERSONAL = {'authenticated', 'public'}

COMANDOS = {
    'select': ('SELECT', 'ALL'),
    'insert': ('INSERT', 'ALL'),
    'update': ('UPDATE', 'ALL'),
    'delete': ('DELETE', 'ALL'),
}

# Lo que se genera por tabla: qué filas ve / puede tocar, y cómo tiene que
# quedar la fila escrita.
ACCIONES = ('select', 'insert', 'update', 'update_check', 'delete')


def _es_verdadero(expresion):
    return re.sub(r'[\s()]', '', expresion or '').upper() == 'TRUE'


class Politicas:
    def __init__(self, esquema):
        self.e = esquema

    def expresiones(self, tabla, accion):
        """
        Las expresiones (SQL de Postgres) que se combinan con OR.

        None → la tabla no restringe esa acción. [] → no hay política que la
        permita: Postgres la niega.
        """
        if tabla not in self.e.rls:
            return None
        chequeo = accion in ('insert', 'update_check')
        comandos = COMANDOS[accion.replace('_check', '')]
        salida = []
        for p in self.e.politicas.get(tabla, {}).values():
            if not set(p.roles) & ROLES_DEL_PERSONAL or p.comando not in comandos:
                continue
            # WITH CHECK, si falta, es la misma condición del USING.
            x = (p.chequear or p.usar) if chequeo else p.usar
            if x is None:
                continue
            if _es_verdadero(x):
                return None
            salida.append(x)
        return salida

    def condicion(self, tabla, accion):
        """La condición en SQL de Postgres; None sin restricción, 'FALSE' si se niega todo."""
        xs = self.expresiones(tabla, accion)
        if xs is None:
            return None
        if not xs:
            return 'FALSE'
        cond = ' OR '.join(f'({x})' for x in xs)
        # Igual que hace el traductor con el texto de las vistas.
        return re.sub(r'\bauth\.uid\(\)', 'auth_uid()', cond, flags=re.I)

    # -- envolver las tablas de una consulta --

    def envolver(self, arbol, visitadas=frozenset()):
        """
        Cambia cada tabla con política de lectura por la subconsulta filtrada.

        Las subconsultas de la propia política también se envuelven (en Postgres
        la RLS de `prospectos` aplica adentro de la política de `expedientes`),
        cortando el ciclo si una política vuelve a su tabla.
        """
        ctes = {c.alias_or_name.lower() for c in arbol.find_all(exp.CTE)}

        def cambiar(nodo):
            if not isinstance(nodo, exp.Table) or nodo.args.get('db') or not isinstance(nodo.this, exp.Identifier):
                return nodo
            nombre = nodo.name.lower()
            if nombre in ctes or nombre in visitadas:
                return nodo
            cond = self.condicion(nombre, 'select')
            if cond is None:
                return nodo
            filtro = self.envolver(sqlglot.parse_one(cond, read='postgres'), visitadas | {nombre})
            interno = exp.select('*').from_(exp.to_table(nombre)).where(
                exp.or_(exp.Not(this=exp.Anonymous(this='rls_activa', expressions=[])), exp.paren(filtro)))
            return exp.Subquery(this=interno, alias=exp.TableAlias(this=exp.to_identifier(nodo.alias or nombre)))

        return arbol.transform(cambiar)

    # -- condiciones para la API de tablas --

    def condicion_sqlite(self, traductor, tabla, accion):
        """
        La condición traducida a SQLite, lista para `WHERE` sobre `FROM "tabla"`.
        None si no restringe; '0' si se niega.
        """
        cond = self.condicion(tabla, accion)
        if cond is None:
            return None
        if cond == 'FALSE':
            return '0'
        filtro = self.envolver(sqlglot.parse_one(cond, read='postgres'), frozenset({tabla}))
        consulta = exp.select(exp.Literal.number(1)).from_(exp.to_table(tabla)).where(filtro)
        sql, _ = traductor.traducir(consulta.sql(dialect='postgres'))
        donde = sqlglot.parse_one(sql, read='sqlite').args.get('where')
        if donde is None:
            raise ValueError(f'La política de {tabla} ({accion}) quedó sin WHERE al traducirla')
        # Las columnas de la tabla misma, con el nombre de la tabla: la
        # condición se usa adentro de `SELECT rowid FROM "tabla" WHERE ...`.
        return donde.this.sql(dialect='sqlite')


def generar(esquema, traductor):
    """Lo que va a politicas_generadas.py."""
    politicas = Politicas(esquema)
    condiciones, fallas = {}, {}
    for tabla in sorted(esquema.rls):
        if tabla not in esquema.tablas:
            continue
        por_accion = {}
        for accion in ACCIONES:
            try:
                por_accion[accion] = politicas.condicion_sqlite(traductor, tabla, accion)
            except Exception as e:
                # Sin traducción no se puede filtrar: se niega, que es lo seguro.
                fallas[f'{tabla}.{accion}'] = f'{type(e).__name__}: {str(e).splitlines()[0][:200]}'
                por_accion[accion] = '0'
        condiciones[tabla] = por_accion
    definidoras = sorted(n for n, f in esquema.funciones.items() if f.definidor)
    ocultas = {t: sorted(c) for t, c in sorted(esquema.columnas_revocadas.items())}
    return condiciones, definidoras, ocultas, fallas
