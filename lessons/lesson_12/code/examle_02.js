const leon = {
    name: "Leon",
    sayHello() {
      console.log("Hello");
    },
  };
  
leon.sayHello();

const circle = {
    radius: 5, 
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

console.log(circle.getArea()); // 50.26548245743669

circle.radius = 10;

console.log(circle.getArea()); // 314.1592653589793

const square = {
  sideLength: 10,
  getArea() {
    return this.sideLength ** 2;
  },
  getPerimeter() {
    return this.sideLength * 4;
  },
  increaseLength() {
    this.sideLength = this.sideLength * 2;
  }
};

console.log(square.getArea());
console.log(square.getPerimeter());

// const getArea = square.getArea();
const {getArea} = square;
console.log(getArea()); // NaN функция в отрыве от объекта = без this

const chessBoard = {
    sideLength: 3,
}

// bind создает новую функцию, в которой в качестве this выступает указанный объект
const getAreaOfChessBoard = getArea.bind(chessBoard);
console.log(getAreaOfChessBoard());
chessBoard.sideLength += 2; // если объект мутировал - функция будет работать с ним
console.log(getAreaOfChessBoard());

function sayHi() {
    console.log("My name is " + this.name);
}

sayHi(); // My name is undefined

const alisher = {name: "Alisher"};
const alisherSayHi = sayHi.bind(alisher); // получили связанную с объектом функцию

alisherSayHi();

// Apply - сразу вызывает функцию с указанным объектом в качестве this
sayHi.apply({name: "Vasiliy"});