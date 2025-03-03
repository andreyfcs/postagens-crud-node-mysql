const express = require ('express')
const pool = require('../db')

const router = express.Router();

// Delete
router.delete('/postagens/:id', (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM postagens WHERE id = ?`;

  pool.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json({ error: 'Erro ao excluir postagem', details: err });

      res.status(200).json({ message: 'Postagem excluída com sucesso' });
  });
});


 module.exports = router;