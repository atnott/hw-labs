-- задача 6

create table if not exists projects (
    project_id int primary key,
    name varchar(255) not null,
    customer_id int,
    customer_adress varchar(255)
);





