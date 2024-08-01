var database = require("../database/config")

function obterDados(idUSer) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUSer)
    var instrucaoSql = `
        SELECT idQuiz, pontuation FROM quiz WHERE fkUser = '${idUSer}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(idUsuario, pontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarQuiz():", idUsuario, pontuacao);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (fkUser, pontuation) VALUES (${idUsuario}, ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Add model para consulta de ranking 05/07/2024
function ranking() {
    console.log('Model quiz acessada, Função ranking executada');

    // Comando ORDER BY adicionado para exibir ranking do maior para o menor 12/07/2024
    // Reformulando query para consulta de novos dados 01/08/2024
    var instrucaoSql = `

    -- Subconsulta para as 10 maiores pontuações
    (SELECT usuario.nome, MAX(quiz.pontuation) AS pontuation, 'maior' AS tipo
     FROM usuario
     JOIN quiz ON usuario.id = quiz.fkUser 
     GROUP BY usuario.nome
     ORDER BY pontuation DESC
     LIMIT 10)
    
    UNION ALL

    -- Subconsulta para as 10 menores pontuações
    (SELECT usuario.nome, MAX(quiz.pontuation) AS pontuation, 'menor' AS tipo
     FROM usuario
     JOIN quiz ON usuario.id = quiz.fkUser 
     GROUP BY usuario.nome
     ORDER BY pontuation ASC
     LIMIT 10);


    -- SELECT usuario.nome, MAX(quiz.pontuation) AS pontuation FROM usuario
    --     JOIN quiz ON id = fkUser GROUP BY nome
    --   ORDER BY pontuation DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Add model para consulta de dados gerais 19/07/2024
function generalData(id) {
    let instrucaoSql = `
    SELECT pontuation AS pontuacao, 'quiz' AS origem
    FROM quiz
    WHERE fkUser = ${id}
    UNION ALL
    SELECT pontuacao AS pontuacao, 'game' AS origem
    FROM game
    WHERE fkUser = ${id};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDados,
    cadastrar,
    ranking,
    generalData
};