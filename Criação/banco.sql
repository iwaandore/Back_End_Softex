use softex;

create table cadastro(
nome varchar(30) not null ,
cpf int primary key not null,
genero varchar(30) not null,
data_nascimento varchar(30) not null,
telefone int not null,
email varchar(15) not null
);

select*from cadastro;

