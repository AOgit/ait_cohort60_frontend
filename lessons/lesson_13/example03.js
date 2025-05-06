const drinks = [
    {name: "Bloody Mary", strength: 14, price: 7},
    {name: "Jin", strength: 25, price: 4},
    {name: "Beer", strength: 8.5, price: 0.5},
    {name: "Cider", strength: 2, price: 5},
    {name: "Beer", strength: 4.8, price: 0.8},
];

const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");
console.log(indexOfJin);
drinks.splice(indexOfJin,1,{name:"Tequilla", strength: 25, price: 10});
console.log(drinks);
drinks.forEach((drink)=> drink.strength++);
console.log(drinks);

const totalBeerPrice = drinks.reduce((acc, drink) => drink.name === "Beer" ? acc + drink.price : acc, 0);
console.log(totalBeerPrice);

// filter
// создает новый массив, в него войдут только элементы удовлетворяющие условию

const beers = drinks.filter((a) => a.name === "Beer");
console.log(beers);