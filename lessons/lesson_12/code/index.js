// Object
// key - value

const user = {email: "john@gmail.com"} // храним ссылку, обьект
const age = 18; // храним переменную, примитивный тип данных

// user = {email: "bob@gmail.com"}; // будет ошибка, так как меняем ссылку самой переменной

user.email = "john2@yahoo.org"; // изменил значения свойства, все нормально

// как добавить в объект новое свойство
user.eyeColor = "brown";

console.log(user);


// "hair color" - так делать не стоит
user["hair color"] = "yellow"; // box syntax

console.log(user);

const {"hair color": color} = user;
console.log(color);

// Пример того, как можно создавать объект из переменных

const pandaName = "Po";
const favouriteFood = "bamboo";

const panda = {name:pandaName, favouriteFood};
console.log(panda); // { name: 'Po', favouriteFood: 'bamboo' }

const bobHeight = 184;
const bob = {height:bobHeight};
console.log(bob);

const key = "name"; // динамический ключ, который лежит внутри переменной

const giraffeSam = {
    name: "Sam",
    age: 7,
};

console.log(giraffeSam[key]);

const keys = ["name", "age"];
for (let i = 0; i < keys.length; i++) {
  console.log(giraffeSam[keys[i]]);
}

// список ключей объекта
const keysOfGiraffe = Object.keys(giraffeSam);
console.log(keysOfGiraffe); // ['name', 'age']

// список значений объекта

const valuesOfGiraffe = Object.values(giraffeSam);
console.log(valuesOfGiraffe); //[ 'Sam', 7 ]

// entries - пары ключ-значение
const entries = Object.entries(giraffeSam);
console.log(entries); //[ [ 'name', 'Sam' ], [ 'age', 7 ] ]

// freeze
const breakfast = {
    title: "omlet",
    calories: 1200,
  };
  Object.freeze(breakfast);
  // Можем ли добавить новый ключ после заморозки? нет
  breakfast.warm = true; // нет
    
  // Можем ли мы изменить значения уже бывших свойств? нет
  breakfast.title = "cereal"; // не изменится
  console.log(breakfast); // { title: 'omlet', calories: 1200 }

  // Object seal
  const dinner = {
    title: "pasta",
    calories: 2000,
  };
  Object.seal(dinner);
// Могу ли добавить новое свойство? Нет
dinner.fat = true; // не добавилось
console.log(dinner); //{ title: 'pasta', calories: 2000 }

// Могу ли изменить старые свойства? да
dinner.calories += 200; // увеличили
console.log(dinner); // { title: 'pasta', calories: 2200 }

// Object create
const musician = Object.create(dinner); // создание обьекта наследование extended
console.log(musician, musician.title, musician.calories); // ентрис обьекта не видно, но они у него есть от родителя

const address = {
    street: "Pfondorfer",
    number: 12,
};

const firma = {
    title: "Horns and hoofs",
};

Object.assign(firma, address); // копирует свойства у адреса и добавляет их в фирму

console.log(firma); // { title: 'Horns and hoofs', street: 'Pfondorfer', number: 12 }
address.post = 10407;
// console.log(firma);
// console.log(address);

const personalInfo = {
    name: "Fedor",
};

const medicalInfo = {
    bloodType: 1,
};

const fedor = {
    ...personalInfo,
    ...medicalInfo,
    age: 19,
}

console.log(fedor);


console.log("======== unify =========");
function unify(obj, key, val){
    return {...obj, [key]:val};
}
console.log(unify({email:"bob@gmail.com"}, "eyeColor", "brown"));

console.log("======== unifyV =========");
const unifyV = (obj, key, val) => ({...obj, [key]:val});
console.log(unifyV({email:"bob@gmail.com"}, "eyeColor", "brown"));


console.log("======== unify1 =========");
function unify1(obj, key, val){
    return Object.assign({...obj}, {[key]:val});
}
console.log(unify1({email:"bob@gmail.com"}, "eyeColor", "brown"));


console.log("======== unifyV1 =========");
const unifyV1 = (obj, key, val) => Object.assign({...obj}, {[key]:val});
console.log(unifyV1({email:"bob@gmail.com"}, "eyeColor", "brown"));

console.log("======== unify3 =========");
function unify3(obj, additionalKey, additionalValue){
    const newObj = {...obj};
    newObj[additionalKey] = additionalValue;
    return newObj;
}
const book = {title: "The Lord Of The Rings"};
const newBook = unify3(book, "author", "Tolkien JR");
console.log(book);
console.log(newBook);
