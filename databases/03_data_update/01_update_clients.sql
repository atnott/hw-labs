-- 1
update clients
set dbirth = case 
    when name = 'Gary' and lastname = 'Harrison' then '1930-10-21'
    when name = 'Michael' and lastname = 'Atwood' then '1934-04-12'
    when name = 'Amy' and lastname = 'Majors' then '1975-08-01'
    when name = 'Katherine' and lastname = 'Smith' then '1959-09-22'
    else dbirth
end
where (name = 'Gary' and lastname = 'Harrison')
   or (name = 'Michael' and lastname = 'Atwood')
   or (name = 'Amy' and lastname = 'Majors')
   or (name = 'Katherine' and lastname = 'Smith')
limit 4; -- обновлено 2 строки

-- 2
update clients
set phone = NULL
where dbirth < '1933-01-01'
limit 13; -- обновлено 13 строк

-- 3
update clients 
set name = 'Johanna', gender = 'F'
where name = 'John' and lastname = 'Ohara'
limit 1; -- обновлена 1 строка

-- 4
update clients 
set phone = case
    when name = 'Humberto' and lastname = 'Hoosier' then '1111222'
    when name = 'Irene' and lastname = 'Schreiber' then '3333444'
    when name = 'Donna' and lastname = 'Wallace' then '5555666'
    else phone
end
    where (name = 'Humberto' and lastname = 'Hoosier')
    or (name = 'Irene' and lastname = 'Schreiber')
    or (name = 'Donna' and lastname = 'Wallace')
limit 3; -- обновлено 3 строки

-- 5
delete from clients 
where id in (215, 340, 449, 470, 607)
limit 5; -- удалено 4 строки

-- 6
delete from clients
where gender = 'M'
    and ((dbirth between '1941-01-01' and '1941-04-30')
    or (dbirth between '1972-09-10' and '1972-09-15'))
limit 2; -- удалено 2 строки

