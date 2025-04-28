console.log("Hello, Oleksa")

// let x = 6;
let x; // обьявить
x = 10; // присвоить значение = инициализация
console.log(x);

// 1. Тип number
let y = 12.5;
console.log(y);

x = y;
console.log(x);

// 2. Тип string
x = 'Ten';
console.log(x);

let name = 'Alisher';

// 3. Тип bigint для очен крупных чисел
let z =123123n;

// 4. Тип undefined
let message;
console.log(message);

// 5. Тип null
let secondName = null;
console.log(secondName);

// 6. Тип boolean
// true, false
let isMale = true;

let isBigger = 10 > 4;
console.log(isBigger);

// константы
// const m =12;
// m = 13; // Ошибка
const COLOR_RED = "#F00";

//7. Тип symbol
const symbol = Symbol('asd');
console.log(symbol);

// Не примитив Object
const user = {
    "email": "oleksa@gmail.com"
}
console.log(user);

// Преобразование типов
// falsy values - те, которые преобразуются в false

// явное и неявное

// Явное приведение
// 10 -> '10'

let ten = 10;
let tenAsString = String(ten);
console.log(tenAsString);
console.log(typeof ten);
console.log(typeof tenAsString);
console.log(typeof tenAsString == 'string');

// неявное преобразование типов
let elewenAsString = 11 + ''; // '11'

// Приведение к числу
// '11' -> 11
let elewen = Number(elewenAsString);
console.log(elewen);
console.log(typeof elewen);

let wrongNumber = Number("asdfadsfasdf");
console.log(wrongNumber); // NaN - not a number - особое значение типа Number
console.log(typeof NaN);
if (x < Infinity) {
    console.log('Bla');
}
console.log(typeof Infinity); // Infinity - особое значение типа Number

// boolean преобразование
// явного
console.log(Boolean('Alisher')); // true
console.log('12'); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// неявно в Boolean
const myMoneyPoint = 12;
const notMyMoneyPoint = 0;

if(myMoneyPoint) {
    console.log("I'm rich");
}

if(notMyMoneyPoint) {
    console.log("I'm rich");
}

myUser = null;
if(myUser) {
    console.log("User exists");
}

myUser = {email: "user@gmail.com"};
if(myUser) {
    console.log(myUser.email);
}

const myAge = 31;
const myName = 'Alisher';

const text = `Меня зовут ${myName}. Мне ${myAge} год`; // backticks - обратные кавычки
console.log(text);


