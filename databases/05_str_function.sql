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

-- 3) Выведите по каждому клиенту, в фамилии которого есть такие вхождения строк tt, ss, ll, 
-- имя и фамилию приведите к формату, где имя будет сокращено до 1 символа с точкой 
-- (например: J. Wiliams).

select id, dbirth, gender, phone,
concat_ws('. ', left(name, 1), lastname) as fullnam
from clients
where instr(lastname, 'tt') != 0
    or instr(lastname, 'ss') != 0
    or instr(lastname, 'll') != 0
limit 10;

-- 4. Найдите все записи, в которых телефонные номера:
-- а) начинаются на 586
select * from clients
where instr(phone, '586') = 1;

select * from clients
where locate('586', phone) = 1;

select * from clients
where position('586' in phone) = 1;

select * from clients
where phone like '586%';

select * from clients
where left(phone, 3) = '586';

select * from clients
where substring(phone, 1, 3) = '586';

select * from clients
where phone regexp '^586';

-- б) содержат 657,
select * from clients
where instr(phone, '657') != 0;

select * from clients
where locate('657', phone) != 0;

select * from clients
where position('657' in phone) != 0;

select * from clients
where phone like '%657%';

select * from clients
where phone regexp '[1-9]*(657)[1-9]*';

-- в) заканчиваются на 707
select * from clients
where instr(phone, '707') = length(phone) - 2;

select * from clients
where locate('707', phone) = length(phone) - 2;

select * from clients
where position('707' in phone) = length(phone) - 2;

select * from clients
where phone like '%707';

select * from clients
where right(phone, 3) = '707';

select * from clients
where substring(phone, length(phone) - 2, 3) = '707';

select * from clients
where reverse(phone) regexp '^707';
