// Создание переменных
// const, let и var
let dog = "Sharik";
dog = "Tuzik";
dog = 12;
console.log(dog);

// 1. string - является примитивом
let str1 = "13";
// 2. number
let num1 = 9.6;
// 3. bigInt
let num2 =1234n;
console.log(num2);
// 4. Boolean
let isDrunk = true;
if(isDrunk) {
    console.log("Ты пьян");
}
const result = isDrunk ? "Ты пьян" : "Ты не пьян";
// 5. undefined
let str5;
console.log(str5);
// 6. null
// null - отсутствие значения
// можно присвоить null вручную
let empty = null;
console.log(empty);

// 7. symbol
// Для создания уникальных значений внутри программы

let s1 = Symbol("Something");
console.log(s1);
console.log(typeof s1);

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// неявное преобразование
let str7 = "" + 9; //"" + "9" = "9"
// явное преобразование
const num4 = 10;
let str8 = String(num4); // "10"
const res = 9 + 12 + "5"; // "215"
const res1 = "5" + 9 + 12; // "5912"
// Преобразование в число неявное
const num5 = +"6"; //6
const sum = +"9" + +"10"; //19
// Явное преобразование
const num6 = Number("117"); // число 117
const num7 = Number("129*&#"); // NaN - при неудачном преобразовании или мат операции
console.log(typeof NaN);

// 3. Преобразование в булевое значение
// число
const res4 = Boolean(9); // true
const res5 = Boolean(0); // false
// строка
const res6 = Boolean(""); // false
const res7 = Boolean(" "); // true !!!
console.log(res7);
const res8 = Boolean(null); // false
const res9 = Boolean(undefined); // false

// Равенство строгое и не строгое
// = - присваивание
// === - строгое равенство (учитывает тип данных)
// == - нестрогое равенство, пытается привести неявно к одному типу
console.log(9 === "9"); // false
console.log(9 == "9"); // true
const b = ('b' + 'a' + + 'a' + 'a').toLowerCase(); // banana;
// console.log(b)