const brothers = [
    {race:"hobbit", height: 110, age:45, name:"Frodo Baggins"},
    {race:"human", height: 185, age:46, name:"Aragorn"},
    {race:"elf", height: 189, age:110, name:"Legolas"},
    {race:"dworf", height: 140, age:150, name:"Gimly"},
    {race:"human", height: 195, age:200, name:"Gandalf"},
];


// Метод Map - возвращает новый массив,
// созданный путем применения функции к каждому элементу исходного массива
//Этот метод не изменяет исходный массив
// const names = brothers.map((item) => {const {name} = item; return name;});
// const names = brothers.map((item) => item.name);
const names = brothers.map(({name}) =>  name); // [ 'Frodo Baggins', 'Aragorn', 'Legolas', 'Gimly', 'Gandalf' ]
console.log(names);

const ages = brothers.map(({age}) =>  age); // [ 'Frodo Baggins', 'Aragorn', 'Legolas', 'Gimly', 'Gandalf' ]
console.log(ages);

// const racesNames = brothers.map((brother) => brother.race + " " + brother.name);
const racesNames = brothers.map(({race, name}) => race + " " + name);
console.log(racesNames);

const sizes = brothers.map(({height, name}) => name + (height >= 170 ? " высокий" : " маленький"));
console.log(sizes);

// + 1 год к возрасту
brothers.forEach((brothers) => brothers.age += 1);
console.log(brothers);

// Все имена в верхний регистр
// brothers.forEach(({name}) => name = name.toUpperCase()); // не сработает, если нужно менять елемент
brothers.forEach((brother) => brother.name = brother.name.toUpperCase());
console.log(brothers);

// Аккумулятор (accumulator) - значение,
  // которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора
 // после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора.
 // Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора
 // при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет
 // начальным значением аккумулятора.
const sum2 = ages.reduce((acc, current) => acc + current);
console.log(sum2);

// Комбинация map+reduce
 // общая высота наших героев
 const totalHeight = brothers.reduce((acc,brother)=> acc + brother.height, 0)
 console.log(totalHeight); // 819
// можно сделать цепочку
 const totalHeight2 = brothers
 .map((brother)=> brother.height) //получили массив ростов
 .reduce((acc, height)=> acc + height, 0);
 console.log(totalHeight2);

 //Метод split разделяет строку на массив
 const str = "Gandalf, Sauron, Saruman, Legolas, Elrond";
 const namesArr = str.split(", ") // метод сплит принимает разделитель
 console.log(namesArr);

 // Метод join соединяет(склеивает) елементы массива в строку
 const newString = namesArr.join(", ");
 console.log(newString);

 // Метод find - возвращает первое совпадение с заданным условием;
 const person = brothers.find((brother) => brother.race === "human");
 console.log(person);

// Пример 16
// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
//Выбрать тех кто старше 100 лет

const oldBrothers = brothers.filter((brother) => brother.age > 100);
console.log(oldBrothers);