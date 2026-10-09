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


