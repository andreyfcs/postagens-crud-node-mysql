# Usar a imagem oficial do Node.js
FROM node:18

# Criar e definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que a aplicação vai rodar
EXPOSE 3005

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
