Documentação da API Modular - Gerenciamento de Itens

Índice

Introdução

Pré-requisitos

Instruções de Instalação

Estrutura do Projeto

Rotas e Endpoints

Configuração do Banco de Dados

Próximas Melhorias

1. Introdução

Esta API modular foi desenvolvida utilizando Node.js com Express e MySQL. Seu objetivo é fornecer endpoints para operações CRUD (Create, Read, Update, Delete) sobre um recurso chamado "items".

A arquitetura modular facilita a manutenção e escalabilidade, permitindo a adição de novos módulos sem afetar o funcionamento do sistema.

2. Pré-requisitos

Node.js versão 16 ou superior.

NPM ou Yarn.

MySQL instalado e configurado.

Docker (opcional, para rodar o MySQL em container).

Git instalado.

3. Instruções de Instalação

1. Clone o repositório

git clone <URL_DO_REPOSITORIO>

2. Acesse o diretório do projeto

cd nome_do_projeto

3. Instale as dependências

npm install

4. Configuração do ambiente

Renomeie o arquivo .env.example para .env e configure as variáveis:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=database_name
PORT=3000

5. Execute o servidor

npm start

O servidor estará disponível em: http://localhost:3000

4. Estrutura do Projeto

├── db.js
├── index.js
├── routes
│   ├── delete.js
│   ├── getall.js
│   ├── getone.js
│   ├── post.js
│   ├── put.js
└── .env

db.js - Conexão com o banco de dados MySQL.

index.js - Arquivo principal que inicializa o servidor e importa as rotas.

routes/ - Contém as rotas organizadas por operação CRUD.

.env - Variáveis de ambiente para configuração segura.

5. Rotas e Endpoints

1. Criar Item (POST)

POST /items

Body (JSON):

{
  "name": "Nome do Item",
  "description": "Descrição do Item"
}

Resposta:

201 Created
{
  "id": 1,
  "name": "Nome do Item",
  "description": "Descrição do Item"
}

2. Buscar Todos os Itens (GET)

GET /items

Resposta:

200 OK
[
  {
    "id": 1,
    "name": "Nome do Item",
    "description": "Descrição do Item"
  }
]

3. Buscar um Item por ID (GET)

GET /items/:id

Resposta:

200 OK
{
  "id": 1,
  "name": "Nome do Item",
  "description": "Descrição do Item"
}

Erros:

404 Not Found: Item não encontrado.

4. Atualizar um Item (PUT)

PUT /items/:id

Body (JSON):

{
  "name": "Novo Nome",
  "description": "Nova Descrição"
}

Resposta:

200 OK
{
  "id": 1,
  "name": "Novo Nome",
  "description": "Nova Descrição"
}

Erros:

404 Not Found: Item não encontrado.

5. Deletar um Item (DELETE)

DELETE /items/:id

Resposta:

200 OK
{
  "message": "Item deletado com sucesso"
}

Erros:

404 Not Found: Item não encontrado.

6. Configuração do Banco de Dados

Certifique-se de criar o banco de dados e a tabela necessária:

CREATE DATABASE database_name;

USE database_name;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

7. Próximas Melhorias

Autenticação e Autorização:

Implementar JWT para proteger endpoints.

Paginação e Ordenação:

Adicionar suporte para paginação nos endpoints GET /items.

Validações de Entrada:

Utilizar bibliotecas como Joi ou Express-Validator para validar os dados.

Logs e Monitoramento:

Adicionar ferramentas como Winston ou Morgan para registrar logs.

Testes Automatizados:

Implementar testes unitários e de integração utilizando Jest ou Mocha.

Dockerização Completa:

Criar um Dockerfile para a aplicação e usar docker-compose para rodar o sistema com o banco de dados.

Contribuição

Contribuições são bem-vindas! Para contribuir:

Fork o repositório.

Crie uma branch: git checkout -b feature/nova-funcionalidade.

Commit suas mudanças: git commit -m 'Adiciona nova funcionalidade'.

Envie para o repositório remoto: git push origin feature/nova-funcionalidade.

Abra um Pull Request.

Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para obter mais detalhes.