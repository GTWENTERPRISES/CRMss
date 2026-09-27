# Dockerfile para CRM ISP Django
FROM python:3.11-slim

# Variables de entorno
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    libpq-dev \
    libxml2-dev \
    libxslt1-dev \
    libssl-dev \
    libffi-dev \
    && rm -rf /var/lib/apt/lists/*

# Crear directorio de trabajo
WORKDIR /app

# Copiar requirements
COPY requirements.txt .

# Instalar dependencias Python
RUN pip install --upgrade pip && \
    pip install -r requirements.txt && \
    pip install gunicorn

# Copiar proyecto
COPY . .

# Crear directorios necesarios
RUN mkdir -p logs staticfiles media

# Recolectar archivos estáticos
RUN python manage.py collectstatic --noinput || true

# Exponer puerto
EXPOSE 8000

# Comando por defecto
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
