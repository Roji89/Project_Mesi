FROM node:14-slim as node
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/mesi /usr/share/nginx/html