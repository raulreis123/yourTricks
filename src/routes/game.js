//  Criação de rota para cadastro de pontuação 26/06/2024
const express = require('express');
const router = express.Router();
const gameController = require('...');

router.post('/cadastrar', (req, res)=>{
    gameController.cadastro(req, res);
});

router.post('/buscar', (req, res)=>{
    gameController.buscar(req, res);
});