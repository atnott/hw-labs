-- 1. Из таблицы clients сделайте по каждому клиенту 
-- выборку года рождения;

select id, name, lastname, year(dbirth) as birth_year
from clients
limit 10;
