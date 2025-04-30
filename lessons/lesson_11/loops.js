for (let i = 1; i <=10; i+=2) {
    console.log(i);
}

for (let i = 100; i >=0; i-=3) {
    console.log(i);
}

function newIter(initCounter) {
    for (let i = initCounter; i >=0; i-=3) {
        console.log(i);
    }
}

console.log(newIter(162));

// для примера более сложный пример
for (let i = 100, j = 5; i > j && j < 60; i--, j++) {
    console.log(i, j);
  }


  const animals = ["panda", "wolf", "fox"];
  let i = 0;
  console.log(animals);
  while( i < animals.length) {
    animals[i] = animals[i].toUpperCase();
    i++;
  }
  console.log(animals);