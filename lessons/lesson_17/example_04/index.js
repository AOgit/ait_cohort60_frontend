// Promise

// fullfilled - удовлетворен - с результатом
// rejected - отклонено - забыли принести еду
// pending - ожидание

// сначала pending - потом fullfilled если все ОК, либо rejected - если возникла ошибка

// Ассинхронные функции - возвращают промис

// Создадим промис, который возвращает нам бургер

// const burgerPromise = new Promise(function(resolve, reject){

//  setTimeout(() => {
//     resolve("Tasty burger");
//  }, 3000);

// });

// console.log(burgerPromise);

// подождать значение === раскрыть промис
// метод then - подождет пока появится значение - 
// burgerPromise.then((burger) => {
//     console.log("Внутри колбека: " + burger);
// });

// console.log("Вне колбека бургер: ", burgerPromise);

// Reject

// const badPromise = new Promise(function(resolve, reject){
//  setTimeout(() => {
//     reject(new Error("The kitchen is on the fire"));
//  }, 3000);
// });

// badPromise
// .then((burger) => {
//     console.log(burger);
// })
// .catch((err) => {
//     console.log(err);
// })

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

const printerPresent = new Promise((resolve, reject) => {
    const rnd = getRandomNumber(2);
    console.log(rnd);
    setTimeout(() => {
        if(rnd) {
            resolve("Here is your 3D printer");
        } else {
            reject (new Error ("You didn't behave this year"));
        }
    }, 2000);
});

printerPresent
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
});