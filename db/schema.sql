CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id int auto_increment not null primary key,
name varchar(255) not null,
eaten boolean not null
);

