// Task 1
const array = ["apple", "banana", "plum", "pear"];

function swapFirstAndLast(array) {
    let newArray = [...array];
    let firstEl = newArray.shift();
    let lastEl = newArray.pop();
    newArray.push(firstEl);
    newArray.unshift(lastEl);
    return newArray;
}
console.log(array);
console.log(swapFirstAndLast(array));

// Task 2
function firstCapitalLetter(array) {
    if (typeof(array[0]) === "string")
        array[0] = array[0][0].toUpperCase().concat(array[0].slice(1));
}
firstCapitalLetter(array);
console.log(array);
