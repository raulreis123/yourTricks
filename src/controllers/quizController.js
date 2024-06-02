var quizModel = require("../models/quizModel");
// var aquarioModel = require("../models/aquarioModel");

function obterDados(req, res) {
    var idUser = req.body.idUsuario;

    if (idUser == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } else {

        quizModel.obterDados(idUser)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 0) {
                        res.status(204).json({msg: "Você ainda não realizou uma tentativa no quiz!"});
                    } else{
                        res.status(200).json(
                            {
                                ok: true,
                                data: resultadoAutenticar
                            });
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUserServer;
    var pontuacao = req.body.pontuacaoServer;
    // var senha = req.body.senhaServer;
    console.log(`\n\nDados do Servidor: id: ${idUsuario}, pontuacao: ${pontuacao}\n\n`)

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.cadastrar(idUsuario, pontuacao)
            .then(
                function (resultado) {
                    res.status(200).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    obterDados,
    cadastrar
}