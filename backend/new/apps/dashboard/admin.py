"""
Admin de las tablas del dashboard sin dueño: uno automático por modelo.

Muestra las primeras columnas simples y busca en las de texto. Para las tablas
con dueño (clientes, olts, tickets...) el admin está en su app.
"""
from django.apps import apps
from django.contrib import admin
from django.db import models

SIMPLES = (models.CharField, models.IntegerField, models.BooleanField, models.DateField,
           models.DecimalField, models.FloatField)


def admin_para(modelo):
    campos = [f for f in modelo._meta.concrete_fields if isinstance(f, SIMPLES) and not f.primary_key]
    texto = [f.name for f in campos if isinstance(f, models.CharField)][:4]
    return type(f'{modelo.__name__}Admin', (admin.ModelAdmin,), {
        'list_display': ['__str__'] + [f.name for f in campos[:6]],
        'search_fields': texto,
        'list_filter': [f.name for f in campos if isinstance(f, models.BooleanField)][:3],
    })


for modelo in apps.get_app_config('dashboard').get_models():
    admin.site.register(modelo, admin_para(modelo))
