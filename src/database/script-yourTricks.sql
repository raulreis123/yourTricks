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
    
-- SELECT para coletar os dados gerais do quiz e game

SELECT 
	(SELECT pontuation FROM quiz WHERE fkUser = 3) AS pontQuiz,
    (SELECT pontuacao FROM game WHERE fkUser = 3) AS pontGame;