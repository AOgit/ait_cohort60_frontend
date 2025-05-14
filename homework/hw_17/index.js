//Task 1
const formatString = (input) =>
  input.replace(/^(\d{4})\.(\d{3})\.(\d{3})\s(\d{2})$/, "$1 $2:$3-$4");

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"

//Task 2
const rnd = () => Math.floor(Math.random() * 2);
const prom = new Promise((resolve, reject) => {
  rnd()
    ? resolve("Best day of my life")
    : reject(new Error("Something is off"));
});

prom
.then((result) => console.log(result))
.catch((error) => console.log(error))
;
