-- 1 Сделайте выборку id и имен клиентов, приведенных: 
-- a)
select id, upper(name), upper(lastname) from clients limit 10;

-- b)
select id, lower(name), lower(lastname) from clients limit 10;