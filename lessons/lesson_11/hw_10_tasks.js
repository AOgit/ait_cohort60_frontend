const array = ["apple", "banana", "plum", "pear"];

function swapFirstAndLast1(arr) {
    const newArr = arr.slice(1, arr.length - 1);
    newArr.unshift(arr[arr.length - 1]);
    newArr.push(arr[0]);
    return newArr;
}

console.log(swapFirstAndLast1(array));

function swapFirstAndLast2(arr) {
    const newArr = [...arr];
    newArr[0] = arr[arr.length - 1];
    newArr[arr.length - 1] = arr[0];
    return newArr;
}
console.log(swapFirstAndLast2(array), 'newArray');

const numbers = [1, 7, 3, 6, 5, 9];
const [, seven] = numbers; // destructuring assignment
console.log(seven, '- второй элемент массива полученный через destructuring');

const admin = {
    email: "admin@gmail.com",
    age: 24,
    firstName: "Administrina",
    secondName: "Tiranikus"
}
// const email = admin.email; // старый
const {age, secondName} = admin;
console.log(age, secondName);

const catPerson = {
    name:"Annamay",
    cats: ["Tom", "Garfield", "Barsik"],
};

console.log(catPerson);
const {cats} = catPerson;
console.log(cats);
const [, garfield] = cats;
console.log(garfield);
const {cats: [,garfield1]} = catPerson;
const [,garfield2] = catPerson.cats;
console.log(garfield2);

const arr = [[1, 2, 3], ["Igor", "John", "Bob"], {isDrunk: true}];
const [[,two],[,john],{isDrunk:drunk}] = arr; // :drunk необязательно
console.log(two, john, drunk);