-- Query para total de usuários
    SELECT count(nome) AS 'qtdUser' from usuario;


-- Hash function:
async function hashCode(data){
    let hash = crypto.createHash('sha256').update(data).digest('hex');
    return hash;
}

"12345678" = "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f"







-- Query para ranking do quiz
    (SELECT usuario.nome, MAX(quiz.pontuation) AS pontuation, 'maior' AS tipo
     FROM usuario
     JOIN quiz ON usuario.id = quiz.fkUser 
     GROUP BY usuario.nome
     ORDER BY pontuation DESC
     LIMIT 10)
    
    UNION ALL

    -- Subconsulta para as 10 menores pontuações
    (SELECT usuario.nome, MIN(quiz.pontuation) AS pontuation, 'menor' AS tipo
     FROM usuario
     JOIN quiz ON usuario.id = quiz.fkUser 
     GROUP BY usuario.nome
     ORDER BY pontuation ASC
     LIMIT 10);








-- Query para ranking de quiz
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











-- Tirando porcentagem de quiz:
pontQuiz.media = (Math.round(pontQuiz.media / pontQuiz.pont.length)) * 100 / 10;

-- Tirando média do game:
pontGame.media = Math.round(pontGame.media / pontGame.pont.length);