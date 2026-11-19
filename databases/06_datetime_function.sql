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

-- 3. Подсчитайте сколько было/будет полных лет каждому клиенту на:
-- а) 8 декабря 1992 года,
select id, name, lastname, 
    timestampdiff(year, dbirth, '1992-12-08') as full_years_old
from clients
where dbirth <= '1992-12-08'
limit 10;

-- б) 15 июля 2024 года;
select id, name, lastname, 
    timestampdiff(year, dbirth, '2024-07-15') as full_years_old
from clients
where dbirth <= '2024-07-15'
limit 10;
