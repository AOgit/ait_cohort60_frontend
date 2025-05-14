let x;

setTimeout(() => {
    x = 10;
}, 0);

console.log(x);

const printHello  = () => {
    console.log("Hello");
};

const printHelloInterval =  setInterval(printHello, 1000);

setTimeout(() => {
    clearInterval(printHelloInterval);
}, 10_000);

