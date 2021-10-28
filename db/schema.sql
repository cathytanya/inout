drop database if exists inout_db;
-- creation of the database 
create database inout_db;
-- creating the user table
-- use inout_db;
-- create table user_(
-- id int primary key auto_increment not null,
-- username varchar(30) not null,
-- email varchar(30) not null,
-- pass_word varchar(30) not null
-- );
-- -- creating the category table 
--  create table category(
-- id int primary key not null auto_increment,
-- category_id varchar(30) not null
-- );
-- -- creating the indoor table
-- create table indoor_activity(
-- id int primary key auto_increment,
-- category_in_id int not null,
-- activity_in_Name varchar(30) not null,
-- foreign key (category_in_id) references category(id)
-- );
-- -- creating the outdoor table 
--  create table outdoor_activity(
-- id int primary key auto_increment,
-- category_out_id int not null,
-- activity_out_name varchar(30) not null,
-- foreign key (category_out_id) references category(id)
-- );
-- -- creating the comment table 
--  create table comment_(
-- id int primary key auto_increment,
-- user_id int not null,
-- comment varchar(30),
-- foreign key (user_id) references user_(id)
-- );





