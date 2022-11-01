create database city_data;
use city_data;
create table city (
                      idCity int not null primary key auto_increment,
                      Nation varchar(100),
                      GDP int,
                      Describee varchar(200),
                      area int
);
alter table city
    add nameCity varchar(100);
insert into city(nameCity,Nation,GDP,Describee,area,nameCity)
    value ('a','b',1,'',1,'c');
DELETE FROM city WHERE idCity=3;
UPDATE city
SET nameCity = '', Nation = '',GDP=1,Describee='',area=1
WHERE idCity=3;
select * from city where idCity = id

