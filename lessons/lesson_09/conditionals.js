// условный оператор if
let condition = true;
if (condition) {

}

let age = 24;
if(age > 21) {
    console.log("You can buy alcohol");
} else if (age > 18) {
    console.log("Wait a little!");
} else {
    console.log("You are so young! Come back to mammy");
}

const country = "USA";
switch(country){
    case "USA":
        console.log("Washington");
        break;
    case "UK":
        console.log("London");
        break;
    default:
        console.log("Непонятно");
        break;
}

let myAge = 1;
switch (myAge) {
    case 1:
        console.log("Малыш"); 
        break;
    case 2:
        console.log("Ползунок"); 
        break;
    case 5:
        console.log("Дошкольник"); 
        break;
    case 16:
        console.log("Подросток"); 
        break;
    case 45:
        console.log("Зрелый"); 
        break;
    default:
        console.log("Отличный возраст"); 
        break;
}

console.log(12 - 3 + true + 12 + Boolean(NaN)); // "1012false"

// functional declaration
function neighbor(time) {
    if (time > 0 && time < 8) {
        console.log('Drr-drr-drr-drr');
        return "Drr-drr-drr-drr";
    }
}

neighbor(); // вызов функции - call
neighbor(); // вызов без параметра, тогда будет undefined
const result = neighbor(5);
console.log(result);

{
    const animal = "Panda";
    console.log(animal);
}

// console.log(animal); // будет ошибка, так как не видит переменную внутри блока

{
    var x = 10;
}

console.log(x); // а здесь ошибки не будет, так как var имеет функциональную область видимости







// 1. Область видимости (Scope):
//var имеет функциональную область видимости (function scope).
//let имеет блочную область видимости (block scope).
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 — переменная доступна за пределами блока
}

function testLet() {
    if (true) {
        let y = 10;
    }
    console.log(y); // ReferenceError — переменная недоступна вне блока
}

// 2. Всплытие (Hoisting):
// var всплывает (hoisted) и инициализируется undefined.
// let тоже всплывает, но не инициализируется — возникает ReferenceError, если обратиться до объявления.
console.log(a); // undefined
var a = 5;
// console.log(b); // ReferenceError
let b = 5;

// 3. Повторное объявление:
// var позволяет повторно объявлять переменные в одной и той же области видимости.
// let не позволяет повторно объявлять переменные в одной и той же области.
var x = 1;
var x = 2; // OK

let y = 1;
// let y = 2; // SyntaxError

// 4. Присутствие в глобальном объекте:
// Переменные, объявленные с помощью var в глобальной области, становятся свойствами window (в браузере).
// let — не становится.