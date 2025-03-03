const express = require('express');
const pool = require('./db');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:3002', // Permite apenas requisições do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
  credentials: true // Permite cookies e headers de autenticação
}));
app.use(express.json());

// Importando as rotas
const getOneRoutes = require('./routes/getone');
const getAllRoutes = require('./routes/getall');
const postRoutes = require('./routes/post');
const putRoutes = require('./routes/put');
const deleteRoutes = require('./routes/delete');

// Usando as rotas
app.use(getOneRoutes);
app.use(getAllRoutes);
app.use(postRoutes);
app.use(putRoutes);
app.use(deleteRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
