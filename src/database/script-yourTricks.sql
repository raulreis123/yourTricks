-- show databases;

-- drop database yourTricks;

create database yourTricks;

use yourTricks;

create table usuario(
	id int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(100) not null,
    senha varchar(64) not null
);

create table quiz(
	idQuiz int auto_increment,
    fkUser int not null,
    constraint pkComposta primary key(idQuiz, fkUser),
    constraint fkUsuario foreign key (fkUser)
		references usuario(id),
	pontuation int not null,
    dataQuiz timestamp default current_timestamp
);

create table anotacoes(
	idAnotacao int auto_increment,
    fkUser int not null,
    constraint pkComposta primary key(idAnotacao, fkUser),
    constraint fkUsuarioAnotacao foreign key (fkUser)
		references usuario(id),
	titulo varchar(50),
    anotacao varchar(250),
    dataAnotacao timestamp default current_timestamp
);

-- Criação de nova tabela Game 26/06/2024
create table game(
	idGame int auto_increment,
    fkUser int not null,
    constraint pkComposta primary key(idGame, fkUser),
    constraint fkUsuarioGame foreign key (fkUser)
		references usuario(id),
	pontuacao int
);

select * from usuario;
select * from anotacoes;
select * from game;

insert into quiz values(default, 3, 10, default);

drop table usuario;
drop table quiz; 

delete from usuario where id = 4;

describe quiz;
describe game;
select * from usuario;
select * from quiz;
select * from usuario join quiz
	on usuario.id = quiz.fkUser;

SELECT quiz.pontuation, usuario.nome FROM quiz JOIN usuario
	on quiz.fkUser = usuario.id
		ORDER BY quiz.pontuation DESC LIMIT 10;

-- SELECT para selecionar os jogadores com maior pontuação criado 11/07/2024
SELECT usuario.nome, MAX(quiz.pontuation) FROM usuario
	JOIN quiz ON id = fkUser GROUP BY nome;
    
-- SELECT para coletar os dados gerais do quiz e game 26/07/2024
SELECT pontuation AS pontuacao, 'quiz' AS origem
    FROM quiz
    WHERE fkUser = undefined
    UNION ALL
    SELECT pontuacao AS pontuacao, 'game' AS origem
    FROM game
    WHERE fkUser = undefined;
    
SELECT count(nome) as 'qtdUser' from usuario;


-- Subconsulta para as 10 maiores pontuações
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
 
 
 describe game;
 
 select game.pontuacao from game;
 
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