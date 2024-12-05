const express = require('express')
const pool = require('../db');

const router =  express.Router();

// Put
router.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const sql = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
    pool.query(sql, [name, description, id], (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Item não encontrado' });
      res.status(200).json({ id, name, description });
    });
  });

  module.exports = router;