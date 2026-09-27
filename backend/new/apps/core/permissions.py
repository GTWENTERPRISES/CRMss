from rest_framework.permissions import BasePermission


class TienePermiso(BasePermission):
    required_permission = None

    def has_permission(self, request, view):
        if not request.user or not request.user.is_authenticated:
            return False
        if not self.required_permission:
            return True
        return request.user.has_perm(self.required_permission)


class PuedeLeerClientes(TienePermiso):
    required_permission = 'clientes.view_cliente'


class PuedeEditarClientes(TienePermiso):
    required_permission = 'clientes.change_cliente'


class PuedeCortarServicio(TienePermiso):
    required_permission = 'pagos.add_corte'


class EsAdministrador(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.is_staff
        )


class SoloLecturaOAutenticado(BasePermission):
    def has_permission(self, request, view):
        if request.method in ('GET', 'HEAD', 'OPTIONS'):
            return True
        return bool(request.user and request.user.is_authenticated)
