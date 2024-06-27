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
    constraint pkComposta primary key(idAnotacao, fkUser),
    constraint fkUsuarioGame foreign key (fkUser)
		references usuario(id),
	titulo varchar(50),
    anotacao varchar(250),
    dataAnotacao timestamp default current_timestamp
);

select * from usuario;
select * from anotacoes;

insert into quiz values(default, 3, 10, default);

drop table usuario;
drop table quiz; 

delete from usuario where id = 4;

describe quiz;
select * from usuario;
select * from quiz;
select * from usuario join quiz
	on usuario.id = quiz.fkUser;