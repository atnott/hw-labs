-- задача 6

create table if not exists projects (
    project_id int primary key,
    name varchar(255) not null,
    customer_id int,
    customer_address varchar(255)
);

insert into projects values
(1, 'tg bot', 141, 'moscow'),
(2, 'site low-code', 142, 'irkutsk'),
(3, 'ai-helper henry', 143, 'sochi'),
(4, 'smart bottle', 141, 'moscow');

-- Проблемы:
-- 1. адрес 'moscow' сразу в двух строках, если заказчик переедет, 
-- придется менять адрес в двух кортежах
-- то есть customer_adress зависит от customer_id, а не от project_id
-- это транзитивная зависиимость, нарушение 3нф

create table if not exists customers (
    customer_id int primary key,
    customer_address varchar(255) not null
);

insert into customers (customer_id, customer_address)
select distinct customer_id, customer_address from projects;

alter table projects
drop column customer_address;