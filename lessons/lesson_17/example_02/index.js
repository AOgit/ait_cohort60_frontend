// Timers
let x = 10;
console.log(x);

setTimeout(() => {
    console.log("Hey-hey");
}, 2000);

const y = 15;
console.log(y);

setTimeout(() => {
    x = 12;
}, 1000);

console.log("X: ", x);

setTimeout(() => {
    console.log("X: ", x);
}, 1000);