const gameModel = require('../models/gameModel');

// Criação de controller para o miniGame 26/06/2024
function cadastrar(req, res) {
    const dados = {
        pontuacao: req.body.pontuacaoServer,
        id: req.body.idUsuarioServer
    }
    
    if(dados.id == undefined || dados.pontuacao == undefined){
        res.status(401).send('Os dados não foram recebidos corretamente!')
    }else{
        gameModel.cadastrar(dados.id, dados.pontuacao)
        .then(
            ()=>{
                res.status(200).send('Pontuação cadastrada com sucesso');
        })
        .catch(
            ()=>{
                res.status(500).send('Houve um erro ao cadastrar sua pontuação');
        });
    }
}

function buscar(req, res){
    const id = req.params.idUsuario;
    console.log('Model game acessada, rota buscar!')
    if(id == undefined){
        console.log('Id de rota model definido');
        res.status(401).send('Não foi possível indentificar o usuário!');
    }else{
        console.log('Id de rota model definido');
        gameModel.buscar(id)
        .then(resultado =>{
            res.status(200).json({
                ok: true,
                data: resultado
            });            
        })
        .catch(()=>{
            res.status(500).send('Os dados não foram encontrados!')
        });
        }
}

module.exports = {
    cadastrar,
    buscar
}