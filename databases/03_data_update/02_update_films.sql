-- 1
update films
set director = 'Сестры Вачовски'
where title = 'Матрица'
limit 1; -- обновлена 1 строка

-- 2
update films
set rating = 9.5
where title = 'Побег из Шоушенка'
limit 1; -- обновлена 1 строка

-- 3
update films
set genre = 'Научная фантастика'
where director = 'Кристофер Нолан' and genre = 'Фантастика'
limit 3; -- обновлено 3 строки

-- 4
delete from films
where director = 'Фрэнк Дарабонт'
limit 2; -- удалено 2 строки

-- 5
delete from films
where release_year = 1994 and rating < 9.0
limit 1; -- удалена 1 строка

