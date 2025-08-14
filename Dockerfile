# Etapa 1 - Build da aplicação Vue 3 (Vite)
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
# Compila a aplicação (ajuste se o script no package.json for diferente)
RUN npm run build:page

# Etapa 2 - Servir via Nginx
FROM nginx:stable-alpine AS runner

# Remove arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia a build para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
