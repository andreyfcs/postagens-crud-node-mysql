const express = require('express');
const pool = require('../db');

const router = express.Router();

// Criar uma nova postagem
router.post('/postagens', (req, res) => {
    const { Users_id, titulo, conteudo, status = 'rascunho', imagem_url = null, categoria_id = null } = req.body;

    if (!Users_id || !titulo || !conteudo) {
        return res.status(400).json({ error: 'Os campos Users_id, titulo e conteudo são obrigatórios.' });
    }

    const sql = `
        INSERT INTO postagens (Users_id, titulo, conteudo, status, imagem_url, categoria_id) 
        VALUES (?, ?, ?, ?, ?, ?)
    `; // A query precisa estar dentro de crases

    pool.query(sql, [Users_id, titulo, conteudo, status, imagem_url, categoria_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar a postagem', details: err });
        }

        res.status(201).json({ 
            id: result.insertId, 
            Users_id, 
            titulo, 
            conteudo, 
            status, 
            imagem_url, 
            categoria_id 
        });
    });
});

module.exports = router;
