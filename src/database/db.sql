CREATE DATABASE railway;

use railway;

Create table Objetos (
id int not null auto_increment primary key,
nombre varchar(50),
precio float,
descripcion varchar(100)
);

insert into Objetos values(1,"PSX",11.23,"CONSOLA DE VIDEOJUEGOS");
insert into Objetos values(2,"PS1",21.23,"CONSOLA DE VIDEOJUEGOS");
insert into Objetos values(3,"PS2",31.23,"CONSOLA DE VIDEOJUEGOS");
insert into Objetos values(4,"PS3",41.234,"CONSOLA DE VIDEOJUEGOS");
insert into Objetos values(5,"PS4",51.234,"CONSOLA DE VIDEOJUEGOS");
insert into Objetos values(6,"PS5",61.23,"CONSOLA DE VIDEOJUEGOS");