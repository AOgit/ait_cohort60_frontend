function validate (str) {
    return str.match(/^[a-z]19\d{2}born$/) ? true : false;
}

console.log(validate("c1986born")); // true
console.log(validate("b1988born")); // true
console.log(validate("1986born")); // false — нет начальной буквы
console.log(validate("c1886born")); // false — не 19XX
console.log(validate("c1986bor")); // false — не заканчивается на 'born'

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
console.log(sentence.replace(/javascript/ig, "TypeScript"));