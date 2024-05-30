create database yourTricks;

use yourTricks;

create table usuario(
	id int primary key auto_increment,
    nome varchar(45),
    email varchar(100),
    senha varchar(50)
);

create table quiz(
	idQuiz int auto_increment,
    fkUser int,
    constraint pkComposta primary key(idQuiz, fkUser),
    constraint fkUsuario foreign key (fkUser)
		references usuario(id),
	pontuation int,
    dataQuiz timestamp default current_timestamp
);

select * from usuario;

insert into quiz values(default, 1, 15, default);

select * from usuario join quiz
	on usuario.id = quiz.fkUser;

drop table quiz; 

select * from quiz;