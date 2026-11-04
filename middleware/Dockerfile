# Middleware de red (OLT, MikroTik, NMS). Solo lo ve Django, por la red interna.
FROM node:20-slim

ENV NODE_ENV=production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 4000 8090
CMD ["node", "src/server.js"]
