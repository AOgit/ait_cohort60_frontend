let fruit = "apple";

let fruitUpper = fruit.toUpperCase();
console.log(fruitUpper); // APPLE

console.log(fruit[0]); // a
console.log(fruit.at(0)); // a

console.log(fruit[10]); // undefined box notation == syntax
console.log(fruit.at[10]); // undefined

console.log(fruit.toUpperCase().toLocaleLowerCase()); // apple -> APPLE -> apple // pipeline

console.log("0".toUpperCase());
console.log("A".toUpperCase());

console.log(fruit.charAt(0)); // a
console.log(fruit.charAt(7)); // пустой символ

console.log(fruit.charCodeAt(0)); // 97
console.log(fruit.charCodeAt(7)); // NaN

// useful
const pineapple = "pine".concat(null);
console.log(pineapple); // pinenull

const pine = "pine";
if (pine && typeof(pine) == "string"){
    const pineapple = pine.concat(fruit);
    console.log(pineapple);
}

const email = " John@gmail.com ";
console.log(email.trim().toLowerCase());
console.log(email.indexOf("@")); // 5 это индекс @
console.log(email.indexOf("$")); // -1

console.log(email.trimStart()); // "John@gmail.com "
console.log(email.trimEnd()); //" John@gmail.com"

// pad
const cake = "Cake";
console.log(cake.length);
console.log(cake.padStart(10)); // "      Cake" // длина 10 символов
console.log(cake.padStart(10).length); // 10
console.log(cake.padEnd(10, "*")); // Cake******

const sliceOfCake = cake.slice(3);
console.log(sliceOfCake); // "e"
console.log(cake.slice(0)); // "Cake"
console.log(cake.slice(1)); // "ake"
// a piece of cake

console.log(cake.slice(1,3)); // ak // правый индекс не включительно
console.log(cake.slice(-2)); // ke // начина с конца строки
console.log("курочка".slice(-2)); //ka
console.log("улыбочка".slice(-2)); //ka

// substring
const animal = "panda";
console.log(animal.substring(2)); //nda // если указываем один параметр - то от индекса до конца строки
console.log(animal.substring(2, 4)); // nd - с какого по какой символ не включительно

console.log("курочка".substring(-2)); // курочка - не умеет работать с отрицательным индексом

const token = "paper.bread.leaf";
const indexOfFirstDot = token.indexOf(".")
const indexOfLastDot = token.lastIndexOf(".")


/////////////////////////////// at ////////////////////////////
const email1 = "   alisher-khamidov@gmail.com  ";
function nameFromEmail(email) {
    let indexAt = email.indexOf("@");
    if (indexAt < 0) throw new Error("Invalid email");
    return email.substring(0, indexAt).trim();
}
try {
    console.log(nameFromEmail(email1));
    console.log(nameFromEmail("alisher-khamidovgmail.com"));
} catch(e){
    console.error(e);
}

function domenFromEmail(email) {
    let indexAt = email.indexOf("@");
    return email.slice(-(email.length - indexAt)); 
}
console.log(domenFromEmail(email1));

function getFirstName(email) {
    let indexAt = email.indexOf("-");
    return email.substring(0, indexAt).trim();
}
console.log(getFirstName(email1));