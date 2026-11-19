-- 1. Из таблицы clients сделайте по каждому клиенту 
-- выборку года рождения;

select id, name, lastname, year(dbirth) as birth_year
from clients
limit 10;

-- 2.Вычислите по каждому клиенту его текущий возраст 
-- относительно сегодняшней даты: 
-- а) полных лет, 
select id, name, lastname,
timestampdiff(year, dbirth, curdate()) as full_years_old
from clients
limit 10;

-- б) лет до конца текущего года
select id, name, lastname,
    year(curdate()) - year(dbirth) as full_years_old
from clients
limit 10;
