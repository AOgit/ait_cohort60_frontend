function validate (str) {
    return console.log(str.match(/^[a-z]19\d{2}born$/) ? true : false);
}

validate("c1986born"); // true
validate("b1988born"); // true
validate("1986born"); // false — нет начальной буквы
validate("c1886born"); // false — не 19XX
validate("c1986bor"); // false — не заканчивается на 'born'

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
console.log(sentence.replace(/javascript/ig, "TypeScript"));