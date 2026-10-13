// 2.1. Используя методы строк at, split и toUpperCase, создайте функцию,  
// которая преобразует строку вида "background-color" (kebab-case) 
// в "backgroundColor" (snake-case),  
// т.е. удаляет знак "-" и преобразует последующую букву в заглавную.

function fromKebabToSnake(string) {
    const array_char = string.split('-');
    let new_string = array_char[0];
    for (let i = 1; i < array_char.length; i++) {
        new_string += array_char[i].at(0).toUpperCase() + array_char[i].slice(1);
    }
    return new_string;
}

console.log(fromKebabToSnake("dhdhd-pdkdk-nfknfkfkfn-wwww"));


// 2.2. Задан массив [9,8,7,6,5,4,3,2,1]. 
// Создайте две копии данного массива разными способами 
// и поменяйте в них порядок на обратный так же двумя способами. 
// Выведите все три массива.

const original_array = [9,8,7,6,5,4,3,2,1];

const copy_array_1 = original_array.slice().reverse();
const copy_array_2 = original_array.toReversed();

console.log(original_array);
console.log(copy_array_1);
console.log(copy_array_2);


// 2.4. Создайте объект с днями недели. 
// Ключами в нем должны служить номера дней от начала недели 
// (понедельник - первый и т.д.). 
// Добавьте метод, который выводит текущий день недели.

const week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
    get_week() {
        let today = new Date();
        let day = today.getDay();
        if (day == 0) {
            return this[7]
        }
        return this[day]
    }
}
console.log(week.get_week());


// 2.5. Создайте объект "персонал", содержащий должности и имена. 
// Скопируйте его в объект "персонал 2" и поменяйте в нем имена. 
// Выведите оба объекта, предварительно преобразовав их в строку 
// и используя знаки переноса строки.

const users = {
    developer: 'anton',
    chef: 'max',
    manager: 'ann',

    toString() {
        let result = "";
        for (let employee in this) {
            if (typeof this[employee] == 'function') continue;
            result += `${employee} - ${this[employee]}` + '\n';
        }
        return result;
    }
}

const copyUsers = {...users}
copyUsers.developer = 'albert';
copyUsers.chef = 'kate';
copyUsers.manager = 'jack';

console.log(users.toString())
console.log(copyUsers.toString())


// 2.6.  Создайте объект "предметы", со свойством, в котором через запятую перечислены предметы, 
// преподаваемые в университете/школе (перечислите 2-6). 
// Напишите к нему метод, который будет добавлять предмет, если его еще там нет. 
// Используйте для этого преобразование в массив и свойства массивов split, join, push. 
// Создайте метод для удаления предмета, если он уже там есть, с помощью свойства splice.

const lessons  = {
    all_lessons: 'математика, физика, русский, химия, физра, обж',
    add_new_lesson(new_lesson) {
        const array_lessons = this.all_lessons.split(', ');
        if (!(array_lessons.includes(new_lesson))) {
            array_lessons.push(new_lesson);
            this.all_lessons = array_lessons.join(', ');
        }
    },
    delete_lesson(lesson) {
        const array_lessons = this.all_lessons.split(', ');
        if (array_lessons.includes(lesson)) {
            let index_for_delete = array_lessons.indexOf(lesson);
            array_lessons.splice(index_for_delete, 1);
            this.all_lessons = array_lessons.join(', ');
        }
    }
}


// 2.3. Используя ассоциативный массив, создайте функцию для перевода заданной строки 
// на необходимый язык. Переводимые слова и фразы ограничены 
// заданным набором (для примера 4 слова).

const translate = {
    make: 'создайте',
    function: 'функцию',
    for: 'для',
    translate: 'перевода'
}

function fromRussianToEnglish(string) {
    let result = '';
    const array_string = string.split(' ');
    for (let word of array_string) {
        if (word in translate) {
            result += translate[word] + ' ';
        }
    }
    return result.trim();
}