CRUD API com MySQL

Este projeto é uma API RESTful simples para realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados MySQL. Ele foi desenvolvido com Node.js, Express e utiliza MySQL como banco de dados relacional.
Funcionalidades

    Criar um novo usuário
    Listar todos os usuários
    Buscar um usuário por ID
    Atualizar os dados de um usuário
    Excluir um usuário

Pré-requisitos

Para rodar este projeto, você precisa ter instalado:

    Node.js
    MySQL
    Git

Instalação

    Clone o repositório:

    bash

git clone https://github.com/andreyfcs/CRUD_API_Mysql.git

Acesse o diretório do projeto:

bash

cd CRUD_API_Mysql

Instale as dependências do projeto:

bash

npm install

Configure as credenciais do banco de dados:

    No arquivo config/db.config.js, altere as configurações de acordo com o seu ambiente MySQL (host, usuário, senha, nome do banco de dados).

js

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "sua_senha",
  DB: "nome_do_banco",
};

Crie o banco de dados no MySQL:

    Acesse o MySQL no terminal e crie o banco de dados.

sql

    CREATE DATABASE nome_do_banco;

Executando o Projeto

    Após configurar o banco de dados, execute o servidor:

    bash

npm start

O servidor estará rodando na porta 3000. Para acessar, abra o navegador ou uma ferramenta de API como o Postman e acesse:

arduino

    http://localhost:3000

Rotas da API
Criar um novo usuário

    Método: POST
    Rota: /users
    Body (JSON):

    json

    {
      "name": "Nome do usuário",
      "email": "email@exemplo.com",
      "active": true
    }

Listar todos os usuários

    Método: GET
    Rota: /users

Buscar um usuário por ID

    Método: GET
    Rota: /users/:id

Atualizar um usuário

    Método: PUT
    Rota: /users/:id
    Body (JSON):

    json

    {
      "name": "Nome atualizado",
      "email": "email@exemplo.com",
      "active": false
    }

Excluir um usuário

    Método: DELETE
    Rota: /users/:id

Estrutura de Diretórios

bash

CRUD_API_Mysql/
│
├── config/               # Configuração do banco de dados
│   └── db.config.js      # Arquivo de configuração da conexão MySQL
│
├── controllers/          # Lógica das operações CRUD
│   └── user.controller.js
│
├── models/               # Definição dos dados
│   └── user.model.js
│
├── routes/               # Definição das rotas da API
│   └── user.routes.js
│
├── app.js                # Arquivo principal da aplicação
├── package.json          # Dependências e informações do projeto
└── README.md             # Documentação

Tecnologias Utilizadas

    Node.js
    Express.js
    MySQL
    body-parser (middleware para requisições JSON)

Melhorias Futuras

    Implementação de autenticação (JWT, OAuth).
    Validação dos dados de entrada nas rotas (express-validator).
    Tratamento de erros mais robusto.
    Adicionar testes automatizados.

Contribuição

Sinta-se à vontade para fazer um fork do projeto, enviar Pull Requests e relatar problemas.

Você pode usar este modelo e ajustá-lo conforme necessário para seu projeto.