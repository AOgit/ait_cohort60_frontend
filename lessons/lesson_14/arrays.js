const cars = [
    { brand: "AMW", price: 20000, isDiesel: true },
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
  ];
  
cars.reverse();
console.log(cars);

//sort
const parts = ["air filter", "tires", "spark plugs", "accumulator"];

console.log(parts);
const nums = [1, 4, 2, 10, 12];

nums.sort();
console.log(nums); // [ 1, 10, 12, 2, 4 ]
const nums1 = [1, 4, 2, 10, 12];
// nums1.sort((a, b) => b.localeCompare(a));
// console.log(nums1); // [ 1, 10, 12, 2, 4 ]


// -1, 0, 1
// сортировка чисел
nums.sort((a, b) => a - b);
console.log(nums); // [ 1, 2, 4, 10, 12 ]

nums.sort((a, b) => -1*(a - b));
console.log(nums); // [ 12, 10, 4, 2, 1 ]

parts.sort((a, b) => b.localeCompare(a));
console.log(parts); [ 'tires', 'spark plugs', 'air filter', 'accumulator' ]

cars.sort((a, b) => a.price - b.price); // сортируем по возрастанию цены
console.log(cars);

// сравнение по нескольким параметрам
// сначала сравним по цене
// если цена совпадает, то сортируем уже по названию - по алфавиту

cars.sort((a, b) => {
    const priceComparisonResult = a.price - b.price;
    if (priceComparisonResult === 0) {
        // проверяем по алфавиту
        return a.brand.localeCompare(b.brand);
    }
    return priceComparisonResult;
});

console.log(cars);