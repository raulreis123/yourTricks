var database = require("../database/config");

// Criação de Model para o miniGame 26/06/2024
function cadastrar(id, pontuacao){
    console.log(`\nModel game acessada, registrando os seguintes dados {ID: ${id}, Pontuação: ${pontuacao}}\n`)
    const instrucaoSql = `INSERT INTO game VALUES (default, ${id}, ${pontuacao});`;

    return database.executar(instrucaoSql)
}

function buscar(id){
    console.log(`\nModel game acessada, Realizando consulta de dados\n`);
    const instrucaoSql = `SELECT idGame, pontuacao FROM game WHERE fkUser = ${id};`;

    return database.executar(instrucaoSql);
}

// Add model para consulta de ranking 08/07/2024
function ranking() {
    console.log('Model game acessada, Função ranking executada');

    var instrucaoSql = `SELECT game.pontuacao, usuario.nome FROM game JOIN usuario
                        on game.fkUser = usuario.id
                            ORDER BY game.pontuacao DESC LIMIT 10;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscar,
    ranking
}