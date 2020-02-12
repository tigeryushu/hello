mysql -uroot

show databases;

-- create database yiqing
use yiqing;

show tables; 

create table pdata
(
    name nvarchar(255),
    ename varchar(255),
    value int,
    death int,
    cure int
);

insert pdata (name, ename, value, death, cure) values ('北京', 'beijing', 396, 1, 26);
insert pdata values ('北京', 'beijing', 396, 1, 26);
delete from pdata

create table cdata
(
    pname varchar(255),
    name nvarchar(255),
    value int,
    death int,
    cure int
);

select * from pdata
select * from cdata