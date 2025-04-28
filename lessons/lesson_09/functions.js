function sum(a, b) {
    return a + b;
}

sum(10, 12);
console.log(sum(2));

function sum1(a, b) {
    return a + b;
}
console.log(sum1(2));

function greeting(name="Dowson") {
    return `Hi, ${name}! How are you?`;
}
console.log(greeting("John"));
console.log(greeting());

function greeting1(name) {
    return `Hi, ${name || 'Dowson'}! How are you?`;
}
console.log(greeting2("John"));
console.log(greeting2());

function greeting2(name) {
    return `Hi, ${name??'Dowson'}! How are you?`;
}
console.log(greeting2("John"));
console.log(greeting2());