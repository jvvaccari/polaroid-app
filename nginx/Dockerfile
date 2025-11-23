# Build do app React
FROM node:latest AS builder

WORKDIR /app

COPY polaroid-app/app/package*.json ./
RUN npm install

COPY polaroid-app/app .
RUN npm run build

# Nginx servindo os arquivos
FROM nginx:alpine

# Copia o build do React
COPY --from=builder /app/dist /var/www/html

# Copia a configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]