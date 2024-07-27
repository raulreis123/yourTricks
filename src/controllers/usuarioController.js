const usuarioModel = require("../models/usuarioModel");
const hashPass = require("../services/hashFunction");
// var aquarioModel = require("../models/aquarioModel");

async function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    await hashPass(senha).then(hash=> {senha = hash;})

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                    // let resultadoParse = resultadoAutenticar[0];
                    console.log(`Formato de data: ${Object.keys(resultadoAutenticar[0])}`)

                    if (resultadoAutenticar.length == 1) {
                        console.log(`Nome de usuario: ${Object.keys(resultadoAutenticar)}`)
                        console.log(resultadoAutenticar);
                        res.status(200).json(
                            {
                                ok: true,
                                data: { 
                                    id: resultadoAutenticar[0].id,
                                    nome: resultadoAutenticar[0].nome,
                                    email: resultadoAutenticar[0].email
                                }
                            }
                        );
                        
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
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

async function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    await hashPass(senha).then(hash=> {senha = hash;})

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
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

function allUser(req, res){
    usuarioModel.allUser()
    .then(resultado =>{
        console.log(`Resposta sql controller allUser: ${resultado[0].qtdUser}`);
        if (resultado.length == 0) {
            res.status(204).send('Nenhum resultado encontrado!');
        } else{
            res.status(200).json({
                ok: true,
                data: resultado[0].qtdUser
            });
        }
    })
}

module.exports = {
    autenticar,
    cadastrar,
    allUser
}