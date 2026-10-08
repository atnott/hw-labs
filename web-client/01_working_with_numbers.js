// 1.5. Найти все делители натурального числа N.
function findDivisions(N) {
    a = new Set();
    for (let i = 1; i < (N ** 0.5) + 1; i++) {
        if (N % i == 0) {
            a.add(i);
            a.add(N / i);
        }
    }
    return a;
}
// console.log(findDivisions(10))

// 1.15. Найти все целые числа из интервала от N до M, которые делятся на сумму всех своих цифр.
function getSumDigits(X) {
    let sum = 0;
    for (let i of String(X)) {
        sum += Number(i);
    }
    return sum;
}

function findAllNumberSumDigits(N, M) {
    const arr = [];
    for (let i = N; i < M; i++) {
        if (i % getSumDigits(i) == 0) {
            arr.push(i)
        }
    }
    return arr;
}
// console.log(findAllNumberSumDigits(0, 30))


// 1.3. Напишите программу, которая выводит на экран все простые числа из интервала 1..N, используя решето Эратосфена.
function sieveOfEratosthenes(N) {
    const sieve = Array(N).fill(true);
    sieve[0] = sieve[1] = false;
    for (let i = 2; i < N; i++) {
        for (let j = i * i; j < N; j += i) {
            sieve[j] = false;
        }
    }
    return sieve;
}
// let N = 23;
// const res = sieveOfEratosthenes(N + 1);
// for (let i = 0; i < N + 1; i++) {
//     if (res[i] == true)
//         console.log(i)
// }

// 1.2. Составить программу, проверяющую, будет ли простым данное натуральное число.
let N = 123;
const is_prime = sieveOfEratosthenes(N + 1);
// if (N in is_prime) {
//     console.log('yes');
// }
// else {
//     console.log('no');
// }

// 1.7.  Натуральное число называется совершенным, если оно равно сумме всех
// своих делителей, включая единицу. Вывести первые N (N<5) совершенных
// чисел на экран.

// тупое решение, находит ток 4
/*
function sum(array) {
    let sm = 0;
    for (let i of array) sm += i;
    return sm;
}

let cnt = 5, number = 1;
while (cnt != 0) {
    const all_divisions = findDivisions(number);
    if (number == sum(all_divisions) - number) {
        console.log(number);
        cnt--;
    }
    number++;
}
*/

// решение по идее 2 ** (P - 1) * (2 ** P - 1), где P и (2 ** P - 1) - простые числа
function perfectFunction(p) {
    return 2 ** (p - 1) * (2 ** p - 1);
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < (num ** 0.5) + 1; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let amount = 5, counter = 0;
for (let i = 2; counter < amount; i++) {
    let num = perfectFunction(i);
    if (isPrime(num / (2 ** (i - 1)))) {
        console.log(num);
        counter++;
    }
}




    



