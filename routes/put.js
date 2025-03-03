const express = require('express')
const pool = require('../db');

const router =  express.Router();

// Put
router.put('/postagens/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, conteudo, status, imagem_url, categoria_id } = req.body;

  if (!titulo || !conteudo) {
      return res.status(400).json({ error: 'Título e conteúdo são obrigatórios' });
  }

  const sql = `
      UPDATE postagens 
      SET titulo = ?, conteudo = ?, status = ?, imagem_url = ?, categoria_id = ?, data_atualizacao = NOW()
      WHERE id = ?
  `;

  pool.query(sql, [titulo, conteudo, status, imagem_url, categoria_id, id], (err, result) => {
      if (err) return res.status(500).json({ error: 'Erro ao atualizar postagem', details: err });

      res.status(200).json({ message: 'Postagem atualizada com sucesso' });
  });
});


  module.exports = router;