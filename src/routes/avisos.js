var express = require("express");
var router = express.Router();

var anotacoesController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    anotacoesController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    anotacoesController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    anotacoesController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    anotacoesController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    anotacoesController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    anotacoesController.deletar(req, res);
});

module.exports = router;