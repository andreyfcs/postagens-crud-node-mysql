Documentação da API - CRUD com Node.js, Express e MySQL.

Tecnologias Utilizadas

    Node.js(18.19.1): Ambiente de execução JavaScript no servidor.
    
    Express.js(4.21.1): Framework para Node.js utilizado para criar a API.
    
    MySQL: Banco de dados relacional utilizado para armazenar os dados.
    
    Cors: Middleware que permite a comunicação da API com aplicações de diferentes domínios.
    
    Dotenv: Biblioteca que carrega variáveis de ambiente a partir de um arquivo .env.

Objetivo

A API foi desenvolvida na arquitetura RESTful para fornecer endpoints para operações CRUD (Create, Read, Update, Delete) de um banco de dados MySQL. Ela permite criar, ler, atualizar e excluir registros em uma tabela do banco de dados.

Estrutura do Projeto

index.js: Arquivo principal onde a aplicação Express é configurada e onde as rotas são integradas.

router/: Diretório contendo os arquivos que gerenciam as rotas para as operações CRUD. Cada operação (GET, POST, PUT, DELETE) tem seu próprio arquivo de rota, o que facilita a escalabilidade e manutenção do código.

Exemplo de Estrutura do Projeto

    /crud-api
    ├── node_modules/
    ├── router/
    │   ├── getone.js
    │   ├── getall.js
    │   ├── post.js
    │   ├── put.js
    │   └── delete.js
    ├── .env
    ├── index.js
    ├── package.json
    └── package-lock.json

Como Funciona

Express Router: A funcionalidade Express Router foi utilizada para organizar as rotas da API. Cada arquivo de rota (dentro de router/) contém um conjunto de endpoints para uma operação específica (GET, POST, PUT, DELETE).

CORS (Cross-Origin Resource Sharing): O middleware cors foi configurado para permitir que a API seja acessada de domínios externos, garantindo maior flexibilidade para integrar a API com outras aplicações.

Dotenv: As variáveis de ambiente são carregadas a partir de um arquivo .env, onde informações sensíveis como credenciais de banco de dados e outras configurações são armazenadas.

Funcionamento das rotas CRUD
```bash
GET: (router/getall): Rota responsável por obter os dados do banco de dados.

GET: (router/getone): Rota responsável por obter os dados de um id do banco de dados.
    
POST: (router/post.js): Rota para inserir novos registros no banco de dados.
    
PUT: (router/put.js): Rota para atualizar registros existentes.
    
DELETE: (router/delete.js): Rota para excluir registros do banco de dados.
```


Exemplo de Como Usar a API

1. Iniciar o Servidor

Execute o comando abaixo para iniciar o servidor:

```bash
node index.js
```

Isso irá rodar o servidor na porta configurada na variável de ambiente(.env) "PORT".

2. Variáveis de Ambiente

No arquivo .env, defina as variáveis necessárias para conectar ao banco de dados MySQL:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=meu_banco
PORT=3000
```

3. Endpoints

Abaixo estão alguns exemplos de como utilizar os endpoints da API:

    GET: /items
    Retorna todos os items do banco de dados.

    GET: /items/:id
    Retorna um item pelo ID fornecido.
    
    POST: /items
    Cria um novo item com os dados enviados no corpo da requisição (JSON).

    PUT: /items/:id
    Atualiza os dados de um item pelo ID fornecido.

    DELETE: /items/:id
    Exclui um usuário pelo ID fornecido.

Instalação

Clone o repositório ou faça o download dos arquivos.
Instale as dependências executando:

```bash
npm install
```
configure o arquivo .env e incie o servidor:    

```bash
node index.js
```
<br>
Código SQL para criar banco de dados com nome "teste" e a tabela "items" com os campos "nome" e "descrição" 

```bash
CREATE DATABASE IF NOT EXISTS teste;

USE teste;

CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL
);

INSERT INTO items (nome, descricao) VALUES
('Item 1', 'Descrição do Item 1'),
('Item 2', 'Descrição do Item 2'),
('Item 3', 'Descrição do Item 3');
```

<br>Implementações futuras:

1. Autenticação e Autorização:

        Implementação de JWT para autenticação de usuários.
        Adicionar roles e permissões para controle de acesso.

2. Validação de Dados

        Utilizar middleware de validação de dados com Joi ou express-validator.

3. Paginação e Filtros

        Implementar paginação para a rota GET de itens.
        Adicionar filtros para busca de itens por nome ou descrição.

4. Melhorias de Desempenho

        Implementar cache para respostas frequentes.
        Utilizar índices no banco de dados para otimizar as consultas.

5. Testes Automatizados

        Adicionar testes unitários e de integração usando Jest ou Mocha.

6. Documentação da API

        Gerar documentação automática com Swagger.

7. Escalabilidade

        Configurar balanceamento de carga para suportar mais tráfego.
        Implementar microserviços para áreas específicas (ex: autenticação, processamento).

8. Segurança

        Adicionar criptografia para senhas com bcrypt.
        Implementar CORS mais restritivo para segurança.

9. Logs e Monitoramento

        Implementar logs com Winston ou Morgan.
        Adicionar monitoramento de desempenho com ferramentas como New Relic.
10. Suporte a Múltiplos Bancos de Dados

        Adicionar suporte para banco de dados NoSQL como MongoDB, além de MySQL.

