// Array
// JAVA - нумерованный, одного типа значения, фиксированная длина

const students = [];
console.log(students);

const teachers = ["Sergey", "Alisher", "Igor"];
console.log(teachers);

// получить из массива элемент по индексу
const firstTeacher = teachers[0];
console.log(firstTeacher);

const animals = new Array();
console.log(teachers[10]); // undefined

const secondTeacher = teachers.at(1);
console.log(secondTeacher);

const teacher = teachers.at(-2);
console.log(teacher); // Alisher

const plants = new Array("Camomile", "Dandelion", "Basil");
console.log(plants);
plants[3] = "Oak";
console.log(plants);
// push - добавит элемен в конец массива
plants.push("Cactus");
console.log(plants);
plants[plants.length - 1] = "Rose";
console.log(plants);

// Забирает последний элемент массива и возвращает его
const rose = plants.pop();
console.log(plants);
console.log(rose);

function createPersonalInfo(age, name, hairColor){
    // return new Array (age, name, hairColor);
    return [age, name, hairColor];
}

console.log(createPersonalInfo(31, "Alisher", "brown"));

// shift - забирает элемент вначале
// unshift - добавляет элемент в начало

const cars = ["BMW"];
cars.unshift("Mercedes");
console.log(cars); //[ 'Mercedes', 'BMW' ]
const mercedes = cars.shift();
console.log(cars); // [ 'BMW' ]

const cities = ["Berlin"];
const cities2 = cities;
cities.push("London");
console.log(cities2); // [ 'Berlin', 'London' ]
cities2.push("Milan");
console.log(cities); // [ 'Berlin', 'London', 'Milan' ]

const newCities = [...cities]; // spread оператор
newCities.push("Hamburg");
console.log(cities);
console.log(newCities);

const array1 = ["a", "b", "c"];
const array2 = ["e", "f", "g"];
const alphabet = [...array1, ...array2];
console.log(alphabet); // [ 'a', 'b', 'c', 'e', 'f', 'g' ]