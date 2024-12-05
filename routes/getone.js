const express = require('express');
const pool = require('../db');

const router = express.Router();

// Get One
router.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM items WHERE id = ?';
    pool.query(sql, [id], (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length === 0) return res.status(404).json({ message: 'Item não encontrado' });
      res.status(200).json(results[0]);
    });
  });
  
module.exports = router;