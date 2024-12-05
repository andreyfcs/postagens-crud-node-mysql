const express = require('express');
const pool = require('./db');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json());

app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM items WHERE id = ?';
    pool.query(sql, [id], (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length === 0) return res.status(404).json({ message: 'Item não encontrado' });
      res.status(200).json(results[0]);
    });
  });
  