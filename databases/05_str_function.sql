-- 1 Сделайте выборку id и имен клиентов, приведенных: 
-- a)
select id, upper(name), upper(lastname) from clients limit 10;

-- b)
select id, lower(name), lower(lastname) from clients limit 10;


-- 2) Выведите по каждому клиенту фамилию и имя в одном столбце, 
-- а в другом номер телефона в сокращенном виде: первые три и последнюю одну цифру 
-- в открытом виде, остальные символы закрыть знаком x, * или # 
-- (например, должно получиться так: 977***4). 
-- Первому столбцу дайте имя full_name, второму phone_number.

select concat_ws(' ', name, lastname) as full_name,
concat_ws(repeat('*', length(phone) - 4), substring(phone, 1, 3), right(phone, 1)) as phone_number
from clients 
limit 10;
