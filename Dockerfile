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

# Observações importantes dos comandos build e run:
# Criar (buildar) a imagem a partir do Dockerfile:
# comando: "docker build -t nome-do-projeto ."
# "-t" define o nome (tag) da imagem
# "." indica o diretório atual, onde está o Dockerfile
# Rodar um container a partir da imagem:
# comando: "docker run -p porta_host:porta_container nome-do-projeto"
# "-p" faz o mapeamento de portas
# "nome-do-projeto" é a imagem criada no build
