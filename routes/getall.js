const express = require('express');
const pool = require('../db');

const router = express.Router();

// Buscar todas as postagens
router.get('/postagens', (req, res) => {
    const { user_id } = req.query; // Captura o ID do usuário vindo do frontend

    if (!user_id) {
        return res.status(400).json({ error: 'ID do usuário não fornecido' });
    }

    const sql = `
        SELECT 
            postagens.id, 
            postagens.titulo, 
            postagens.conteudo, 
            postagens.status, 
            postagens.imagem_url, 
            postagens.data_criacao, 
            postagens.data_atualizacao,
            Users.name AS autor,
            categorias.nome AS categoria
        FROM postagens
        JOIN Users ON postagens.Users_id = Users.id
        LEFT JOIN categorias ON postagens.categoria_id = categorias.id
        WHERE postagens.Users_id = ?  -- Adicionando o filtro para o usuário autenticado
        ORDER BY postagens.data_criacao DESC
    `;

    pool.query(sql, [user_id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar postagens', details: err });

        res.status(200).json(results);
    });
});


module.exports = router;
