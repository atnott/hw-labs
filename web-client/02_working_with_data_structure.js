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
