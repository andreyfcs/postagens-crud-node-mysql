const express = require('express');
const pool = require('./db');

const router = express.Router();

// Get All
router.get('/items', (req, res) => {
    const sql = 'SELECT * FROM items';
    pool.query(sql, (err, results) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(results);
    });
  });

  module.exports = router;