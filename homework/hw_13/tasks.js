const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

// task 1
const withoutPriceCars = cars.map((auto) => ({
  brand: auto.brand,
  isDiesel: auto.isDiesel,
}));
// console.log(cars);
console.log("\nCars without price:\n", withoutPriceCars);

// task 2
const dieselCars = cars.filter((auto) => auto.isDiesel === true);
console.log("\nDiesel cars:\n", dieselCars);

// task 3
const notDieselCars = cars.filter((auto) => auto.isDiesel === false);
console.log("\nNot diesel cars:\n", notDieselCars);

// task 4
const totalPriceOfNotDieselCars = cars.reduce(
  (acc, auto) => acc + (auto.isDiesel === false ? auto.price : 0),
  0
);
console.log(`\nTotal price of not diesel cars: ${totalPriceOfNotDieselCars}`);

// task 5
cars.forEach((auto) => (auto.price *= 1.2));
console.log("\nCar prices increased by 20%\n", cars);

// task 6
const dieselGateCars = cars.map((auto) =>
  auto.isDiesel === true
    ? { brand: "Tesla", price: 25000, isDiesel: false }
    : auto
);
console.log("\nConsequences of Dieselgate:\n", dieselGateCars);

const tesla = { brand: "Tesla", price: 25000, isDiesel: false };
// Внимание создаем новые объекты, a не копируем переменную с ссылкой на объект
const modernCars = cars.map((car) => (car.isDiesel ? {... tesla} : car));
// const modernCars = cars.map((car) => (car.isDiesel ? $tesla : car)); // так не правильно!!! будет вставляться один и тот же объект
console.log("modernCars: ", modernCars);
