let x = 10;

function getHello() {
    x += 2;
    return "Hello!";
}

console.log(getHello());
console.log(getHello());

console.log(x);

const arr = ['pickle', 'pickle', 'pickle'];

function addPrefix (arr, prefix) {
    const prefixedArr = [];
    for (let i = 0; i< arr.length; i++) {
        prefixedArr[i] = prefix + arr[i];
    }
    return prefixedArr;
}

const saltedPicked = addPrefix(arr, "salted");

console.log(arr);
console.log(saltedPicked);

function gardender(operation, item) {
    operation(item);
}

function water(plant){
    console.log("I water this " + plant);
}

gardender(water, "rose");

gardender((plant) => {console.log('I dig this ' + plant); }, 'nettle');