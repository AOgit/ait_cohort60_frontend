// Задание 1
// Создайте метод, который принимает объект, а возврщает новый объект, в котором ключи и значения поменялись местами.
// {name: "Bob"} --> {"Bob": "name"}
// (вам понабится поработать с Object.values, Object.keys )

const obj = {name: "Bob", surname: "Slay", age: 35};

function swapKeyValV1(obj){

    let tempObj = {};
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    for (let i=0; i < keys.length;i++){
        tempObj[values[i]] = keys[i];
    }
  
  return tempObj;
}
console.log(swapKeyValV1(obj));

function swapKeyValV2(obj){

    let tempObj = {};
    for( let item in obj) {
        tempObj[obj[item]] = item;
    }

  return tempObj;
}

console.log(swapKeyValV1(obj));