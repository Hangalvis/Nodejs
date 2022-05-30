create database example;

use example;

create table users(
    id int primary key auto_increment,
    Firstname varchar(200),
    phone int
);
insert into users values(1,'carlos',213213);
insert into users values(2,'luis',213213);
insert into users values(3,'andres',345435);
insert into users values(4,'adam',54654);
insert into users values(5,'felipe',435435);