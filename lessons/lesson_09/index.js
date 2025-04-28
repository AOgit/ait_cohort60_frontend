'use strict'
// number, string, bigint, boolean, symbol, undefined, null - примитивные типы данных

//Operators, operand
// Math:  +, -, *, /, %
//reminder %

// a + b - binary operator
// !a - унарные операторы
// a ? b : c; - тернарные операторы

let sum = 1 + 2;
console.log(sum);

let exmpl2 = "1" + 2;
console.log(exmpl2); // "12"

let exmpl3 = true + 4; // under the hood - implicit (скрытый)
console.log(exmpl3); // 5

let exmpl4 = "a" / 9
console.log(exmpl4); //NaN

let exmpl5 = "9" - 5;
console.log(exmpl5);

let exmpl6 = 7 % 3; // 1
console.log(exmpl6);

const age = 31;
const ageIstEven = (age % 2) === 0; // odd - нечетный, even - четный

const exmpl7 = 2 ** 3; // 2 * 2 * 3
console.log(exmpl7);

// Logical
// || - или (дизьюнкция)
// && - и (коньюнкция)
// !  - отрицание

let exmpl8 = true && false; // false
let exmpl10 = !!true; // true

let exmpl11 = !0; // false
console.log(exmpl11);

let exmpl12 = Boolean(5);
console.log(exmpl12);

let myName = "Ali";
let defaultName = "John";
const result = myName || defaultName
console.log(result);

let myName1 = undefined;
let defaultName1 = "John";
const result1 = myName1 || defaultName1
console.log(result1);

// false: null, undefined, "", 0, NaN

// Операторы сравнения
// <, >, >=, <= 
console.log(6 > NaN); // false

// Равенство
// == - loose equality
// === - strict equality

console.log("5" == 5);  // true если типы отличаются пытается сделает неяавное преобразование в число
console.log("5" === 5); // false учитывает типы данных и не делает преобразование
console.log("hello" === true); //false
console.log("hello" == true); // false
console.log("true" == true); // false
console.log(String(true)); // 'true'
console.log(Number("hello"));// NaN
console.log(Number(true)); // 1

console.log("9" == 9); //true
console.log(("9" + 3) == 12); // false 93 != 12
console.log(null == undefined); // true
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// != - с приведением типов, используется крайне редко
// !== - без приведения типов