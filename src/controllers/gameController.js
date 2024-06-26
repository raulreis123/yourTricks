const gameModel = require('...');

// Criação de controller para o miniGame 26/06/2024
function cadastrar(req, res) {
    const dados = {
        pontuacao: req.body.pontuacaoServer,
        id: req.body.idUsuarioServer
    }
    
    if(dados.id == undefined || dados.pontuacao == undefined){
        res.status(401).send('Os dados não foram recebidos corretamente!')
    }else{
        gameModel.cadastrar(dados.pontuacao, dados.id)
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
    const id = req.params.idUsuarioServer;
    
    if(id == undefined){
        res.status(401).send('Não foi possível indentificar o usuário!');
    }else{
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