-- задача 6

create table if not exists projects (
    project_id int primary key,
    name varchar(255) not null,
    customer_id int,
    customer_adress varchar(255)
);

insert into projects values
(1, 'tg bot', 141, 'moscow'),
(2, 'site low-code', 142, 'irkutsk'),
(3, 'ai-helper henry', 143, 'sochi'),
(4, 'smart bottle', 141, 'moscow');

