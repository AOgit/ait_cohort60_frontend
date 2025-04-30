
sayHi();
// hoisting = поднятие
// когда вызов может быть раньше в коде, чем декларация функции



// functional declaration (объявление)
function sayHi() {
    console.log("Hi!");
}

console.log(x); // hoisting var
var x = 10;
// const и let так не работает!



// sayGoodbye(); // здесь не сработает hoisting

// Functional expression
const sayGoodbye = function() {
    console.log("Bye bye");
}

function butler(action){
    action();
}

butler(sayHi);
butler(sayGoodbye);

function neighbour(action, thing){
    action(thing);
}

const party = function(track) {
    console.log("Tuc-tuc-tuc " + track);
}

const drill = function(item) {
    console.log("I drill " + item);
}

neighbour(party, "Britney");
neighbour(drill, "wall");

function calculator(action, a, b) {
    return action(a,b);
}

function add(a, b) {
    return a + b;
}

function devide(a, b) {
    return a / b;
}

console.log(calculator(add, 9, 7));
console.log(calculator(devide, 9, 3));

// anonymus function - анонимная функция

// пример с вычитанием
const res = calculator(function(a, b){return a-b;}, 9, 4)
console.log(res);
console.log(calculator((a,b) => a - b, 9, 4));
const multiply = (a,b) => a*b; // стрелочная функция без тела

const multiply2 = (a,b) => { // стрелочная функция с телом
    return a * b;
}
console.log(multiply(2,3));

// стрелочная функция, которую передали в качестве параметра в другую функцию называется 
// колбеком
// возведение в степень b числа a

const power = (a,b) => a**b;
const twoInPowerOfThree = calculator(power, 2, 3);
console.log(twoInPowerOfThree);

// pirate
function pirate(operation, item){
    operation(item);
}


const trinkSmth = (a)=>console.log("I drink " + a);
const swim = (vehicle)=>console.log("I roam seas in my " + vehicle);

pirate(trinkSmth, "rom");
pirate(swim, "barrel")
