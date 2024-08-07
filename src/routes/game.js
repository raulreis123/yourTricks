//  Criação de rota para cadastro de pontuação 26/06/2024
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/cadastrar', (req, res)=>{
    gameController.cadastrar(req, res);
});

router.get('/buscar/:idUsuario', (req, res)=>{
    gameController.buscar(req, res);
});

// Add rota para consulta de ranking 08/07/2024
router.get("/obterRankingGame", function (req, res) {
    gameController.ranking(req, res);
});

module.exports = router;