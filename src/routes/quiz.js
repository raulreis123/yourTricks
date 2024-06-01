var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.post("/obterDados:idUsuario", function (req, res) {
    quizController.obterDados(req, res);
});

module.exports = router;