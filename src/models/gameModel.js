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

    // Comando ORDER BY adicionado para exibir ranking do maior para o menor 12/07/2024
    var instrucaoSql = `

    -- Subconsulta para as 10 maiores pontuações
    (SELECT usuario.nome, MAX(game.pontuacao) AS pontuacao, 'maior' AS tipo
     FROM usuario
     JOIN game ON usuario.id = game.fkUser 
     GROUP BY usuario.nome
     ORDER BY pontuacao DESC
     LIMIT 10)
    
    UNION ALL

    -- Subconsulta para as 10 menores pontuações
    (SELECT usuario.nome, MIN(game.pontuacao) AS pontuacao, 'menor' AS tipo
     FROM usuario
     JOIN game ON usuario.id = game.fkUser 
     GROUP BY usuario.nome
     ORDER BY pontuacao ASC
     LIMIT 10);


    -- SELECT usuario.nome, MAX(game.pontuacao) AS pontuacao FROM usuario
	--     JOIN game ON id = fkUser GROUP BY nome
    --         ORDER BY pontuacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscar,
    ranking
}