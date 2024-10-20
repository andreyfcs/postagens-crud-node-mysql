const express = require('express');
const pool = require('./db');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json());

// CREATE - Adicionar um novo item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const sql = 'INSERT INTO items (name, description) VALUES (?, ?)';
  pool.query(sql, [name, description], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, name, description });
  });
});

// READ - Listar todos os itens
app.get('/items', (req, res) => {
  const sql = 'SELECT * FROM items';
  pool.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
});

// READ - Obter um item específico
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM items WHERE id = ?';
  pool.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'Item não encontrado' });
    res.status(200).json(results[0]);
  });
});

// UPDATE - Atualizar um item
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const sql = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
  pool.query(sql, [name, description, id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Item não encontrado' });
    res.status(200).json({ id, name, description });
  });
});

// DELETE - Deletar um item
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM items WHERE id = ?';
  pool.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Item não encontrado' });
    res.status(204).send();
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
