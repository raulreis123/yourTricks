//  Criação de rota para cadastro de pontuação 26/06/2024
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/cadastrar', (req, res)=>{
    gameController.cadastrar(req, res);
});

router.get('/buscar', (req, res)=>{
    gameController.buscar(req, res);
});