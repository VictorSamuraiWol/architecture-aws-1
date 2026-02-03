# ===============================
# Stage 1 — Build da aplicação
# ===============================
FROM node:20-alpine AS build

# Define diretório de trabalho
WORKDIR /app

# Copia apenas arquivos de dependência (melhora cache)
COPY package.json package-lock.json ./

# Instala dependências de forma reproduzível
RUN npm ci

# Copia o restante do código
COPY . .

# Build de produção do React (CRA)
RUN npm run build

# ===============================
# Stage 2 — Runtime
# ===============================
FROM node:20-alpine

# Define diretório de trabalho
WORKDIR /app

# Instala servidor estático
RUN npm install -g serve

# Copia apenas o build final
COPY --from=build /app/build ./build

# Porta padrão do serve
EXPOSE 3000

# Comando de inicialização
CMD ["serve", "-s", "build", "-l", "3000"]
