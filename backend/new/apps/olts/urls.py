from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    DiagnosticoONTView,
    LineProfileViewSet,
    OLTViewSet,
    ONUViewSet,
    TipoONTViewSet,
)

router = DefaultRouter()
router.register('olts', OLTViewSet, basename='olt')
router.register('tipos-ont', TipoONTViewSet, basename='tipo-ont')
router.register('line-profiles', LineProfileViewSet, basename='line-profile')
router.register('onus', ONUViewSet, basename='onu')

urlpatterns = router.urls + [
    path('diagnostico-ont/', DiagnosticoONTView.as_view({'get': 'list'}), name='diagnostico-ont'),
]
