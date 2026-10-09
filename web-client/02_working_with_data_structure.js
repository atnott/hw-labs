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



