var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.post("/obterDados", function (req, res) {
    quizController.obterDados(req, res);
});

// Add rota para consulta de ranking 05/07/2024
router.get("/obterRankingQuiz", function (req, res) {
    quizController.ranking(req, res);
});

router.get("/generalData/:idUsuario", function (req, res) {
    quizController.generalData(req, res);
});


module.exports = router;