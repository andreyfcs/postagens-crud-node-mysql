const express = require ('express')
const db = require('/db')

const router = exŕess.Router();

// Delete
router.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM items WHERE id = ?';
    pool.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Item não encontrado' });
      res.status(204).send();
    });
 });


 module.exports = router;