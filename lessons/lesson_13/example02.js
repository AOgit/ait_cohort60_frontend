// push, pop, shift unshift - мутирующие методы
// at - аналог бокс синтаксиса
const fruits = ["apple", "orange", "grape"];

console.log(fruits.at(0));
console.log(fruits.at(-1));

// map
// создает новый массив и не мутирует исходный

const upFruits = fruits.map((item)=>item.toUpperCase());
console.log(upFruits);

const fruitsLengthes = fruits.map((item)=>item.length);
console.log(fruitsLengthes);

const strArr = fruits.map((item)=>item.length).map((item)=>item.toString());
console.log(strArr);

// пример с использованием массивов объектов
const animals = [
    {name: "Po", specie: "panda", weight: 300},
    {name: "Tigra", specie: "tiger", weight: 250},
    {name: "Kovalsky", specie: "penguin", weight: 5},
    {name: "Melman", specie: "giraffe", weight: 600},
];

// хочу создать массив с более толстыми версиями этих животных

const americanAnimals = animals.map((item) => item.weight * 1.3);
console.log(americanAnimals); // будут только веса

const americanAnimals1 = animals.map((item) => {
    const tempArr = { ...item};
    tempArr.weight *= 1.3;
    return tempArr;
});
console.log(americanAnimals1);

const americanAnimals2 = animals.map((animal) => ({...animal, weight: animal.weight * 1.3,}))
console.log(americanAnimals2);

const animalsNames = animals.map((animal) => animal.name);
console.log(animalsNames);

// Если мы хотим изменить исходный массив - элементы в нем, то лучше воспользоваться
// методом  forEach
// метод можно использовать, чтобы выполнить операции с каждым из элементов

animals.forEach((item) => {item.isHeathy = true});
console.log(animals);

// reduce
// Мы решили отвезти на екскурсию автобусную 
// грузоподьемностью автобуса 2500 кг
// Сможем ли мы поместить животных в автобус

let acc = 0;
for (let i = 0; i < animals.length; i++) {
    acc += animals.at(i).weight;
}
console.log(acc);

const totalWeight = animals.reduce((acc, item) => acc + item.weight, 0);
console.log(totalWeight);

const dishes = [
    {name: "bamboo", calories: 500},
    {name: "meat", calories: 1600},
    {name: "fish", calories: 1000},
];

const totalCalories = dishes.reduce((acc, item) => acc + item.calories, 0);
console.log(totalCalories);

const totalCalories1 = dishes.reduce((acc, item) => item.name === 'meat' ? acc + item.calories * 3 : acc + item.calories, 0);
console.log(totalCalories1);

const totalCalories2 = dishes.reduce((acc, item) =>  acc + item.calories * (item.name === 'meat' ? 3 : 1), 0);
console.log(totalCalories1);

// join
const fruitsCoctail = fruits.join("-");
console.log(fruitsCoctail);

// split
const ensurance = "123.128.12412312";
const numsAsStrings = ensurance.split(".") // dilimeter - разделитель - символ, который отделяет друг от друга
console.log(numsAsStrings);  // [ '123', '128', '12412312' ]

const nums = numsAsStrings.map((item)=> Number(item));
console.log(nums);

// пингвин заболел
animals.forEach((animal) => animal.specie === "penguin" ? animal.isHeathy = false : "");
console.log(animals);

// Есть ли больные?
// some  - будет возвращать истину если предикат выполняется хотя бы у одного
const isQuaranteen = animals.some((animal) => animal.isHeathy === false);
console.log(isQuaranteen);

// болеют ли все животные?
const isEpidemy = animals.every((animal) => animal.isHeathy === false);
console.log(isEpidemy);

let isWanted = animals.some((animal) => animal.specie === 'tiger' && animal.name === "Killer");
console.log( 'isWanted: ' + isWanted);

animals.push({name:"Killer", specie: "tiger", weight: 400});

isWanted = animals.some((animal) => animal.specie === 'tiger' && animal.name === "Killer");
console.log( 'isWanted: ' + isWanted);


// find - возвращает элемент массива с нужным условием
isWanted = animals.find((animal) => animal.name === "Killer");
console.log(isWanted);

//  как найти первый индекс елемента массива, который удовлетворяет условию
const isWantedIndex = animals.findIndex((animal) => animal.name === "Killer");
console.log(isWantedIndex);

//  как найти последний индекс елемента массива, который удовлетворяет условию
const isWantedLastIndex = animals.findLastIndex((animal) => animal.name === "Killer");
console.log(isWantedLastIndex);

// slice - создает копию из исходного массива с индекс по индекс (невключиельно)
const shortListOfAnimals = animals.slice(2);
const shortListOfAnimals1 = animals.slice(2, 3);

console.log(animals);
console.log(shortListOfAnimals);
console.log(shortListOfAnimals1);

// splice мутирует исходный массив
// с какого индекса и СКОЛЬКО элементов
const months = [
    "January",
    "February",
    "March",
    "April"
];

// Можно указать элементы, которые мы хотим подставить вместо вырезанного куска
const removedMonths = months.splice(2, 2, 'month1', 'month2');
console.log(months);
console.log(removedMonths);

const chars = ["@", "@", "@", "*", "*", "$"];
// # хочу заменить * на решетку

// chars.splice(3, 2, "#", "#");
const substitutes = ["#", "#"];
chars.splice(3, 2, ...substitutes);
console.log(chars);

console.log(animals);
const deletedIsWanded = animals.splice(isWantedIndex, 1); // убрали элемент по индексу
console.log(animals);
console.log(deletedIsWanded);

