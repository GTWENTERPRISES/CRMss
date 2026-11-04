# Middleware de red (OLT, MikroTik, NMS). Solo lo ve Django, por la red interna.
#
# Se construye desde la raíz del repo: el middleware comparte con la web unas
# reglas puras (web/src/lib: permisos, alertas, teléfono, crecimiento) y las
# importa por ruta relativa, así que la imagen repite esa estructura.
FROM node:20-slim

ENV NODE_ENV=production
WORKDIR /app/middleware

COPY middleware/package.json middleware/package-lock.json ./
RUN npm ci --omit=dev

COPY middleware/ ./
COPY web/src/lib/permisos.js web/src/lib/alertas.js web/src/lib/telefono.js web/src/lib/crecimientoRouters.js /app/web/src/lib/

EXPOSE 4000 8090
CMD ["node", "src/server.js"]
