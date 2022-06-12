create database example;
use example;

create table games(
id int primary key auto_increment,
name varchar(100)
);

insert into games (name) values("manhunt");