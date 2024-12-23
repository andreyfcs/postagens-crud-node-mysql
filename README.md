Documentação da API - CRUD com Node.js, Express e MySQL
Tecnologias Utilizadas

    Node.js: Ambiente de execução JavaScript no servidor.
    Express.js: Framework para Node.js utilizado para criar a API.
    MySQL: Banco de dados relacional utilizado para armazenar os dados.
    Cors: Middleware que permite a comunicação da API com aplicações de diferentes domínios.
    Dotenv: Biblioteca que carrega variáveis de ambiente a partir de um arquivo .env.

Objetivo

A API foi desenvolvida para fornecer endpoints para operações CRUD (Create, Read, Update, Delete) de um banco de dados MySQL. Ela permite criar, ler, atualizar e excluir registros em uma tabela do banco de dados.
Estrutura do Projeto

    index.js: Arquivo principal onde a aplicação Express é configurada e onde as rotas são integradas.
    router/: Diretório contendo os arquivos que gerenciam as rotas para as operações CRUD. Cada operação (GET, POST, PUT, DELETE) tem seu próprio arquivo de rota, o que facilita a escalabilidade e manutenção do código.

Exemplo de Estrutura do Projeto

    /my-api
    ├── node_modules/
    ├── router/
    │   ├── getRoutes.js
    │   ├── postRoutes.js
    │   ├── putRoutes.js
    │   └── deleteRoutes.js
    ├── .env
    ├── index.js
    ├── package.json
    └──  package-lock.json

Como Funciona

    Express Router: A funcionalidade Express Router foi utilizada para organizar as rotas da API. Cada arquivo de rota (dentro de router/) contém um conjunto de endpoints para uma operação específica (GET, POST, PUT, DELETE).
    CORS (Cross-Origin Resource Sharing): O middleware cors foi configurado para permitir que a API seja acessada de domínios externos, garantindo maior flexibilidade para integrar a API com outras aplicações.
    Dotenv: As variáveis de ambiente são carregadas a partir de um arquivo .env, onde informações sensíveis como credenciais de banco de dados e outras configurações são armazenadas.

Funcionamento do CRUD

    GET (/getRoutes.js): Rota responsável por obter os dados do banco de dados.
    POST (/postRoutes.js): Rota para inserir novos registros no banco de dados.
    PUT (/putRoutes.js): Rota para atualizar registros existentes.
    DELETE (/deleteRoutes.js): Rota para excluir registros do banco de dados.

Exemplo de Como Usar a API
1. Iniciar o Servidor

Execute o comando abaixo para iniciar o servidor:

node index.js

Isso irá rodar o servidor na porta configurada na variável de ambiente PORT.
2. Variáveis de Ambiente

No arquivo .env, defina as variáveis necessárias para conectar ao banco de dados MySQL:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=meu_banco
PORT=3000

3. Endpoints

Abaixo estão alguns exemplos de como utilizar os endpoints da API:

    GET: /items
    Retorna todos os usuários do banco de dados.

    GET: /items/:id
    Retorna todos os usuários do banco de dados.
    
    POST: /items
    Cria um novo usuário com os dados enviados no corpo da requisição (JSON).

    PUT: /items/:id
    Atualiza os dados de um usuário pelo ID fornecido.

    DELETE: /items/:id
    Exclui um usuário pelo ID fornecido.

Instalação

    Clone o repositório ou faça o download dos arquivos.
    Instale as dependências executando:

npm install

    Crie um arquivo .env e configure as variáveis de ambiente.

    Inicie o servidor:

node index.js