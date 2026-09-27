try:
    from .celery import app as celery_app

    __all__ = ('celery_app',)
except ModuleNotFoundError:  # celery not installed yet; core project still works
    celery_app = None
    __all__ = ()
