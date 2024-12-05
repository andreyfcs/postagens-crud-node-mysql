const express = require('express');
const pool = require('/db');

const router = express.Router();

// Post
router.post('/items', (req, res) => {
    const { name, description } = req.body;
    const sql = 'INSERT INTO items (name, description) VALUES (?, ?)';
    pool.query(sql, [name, description], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: result.insertId, name, description });
    });
  });

  module.exports = router;
  