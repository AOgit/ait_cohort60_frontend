// const outer = function () { // отображается age в консоли
const outer = () => { // не отобржаестся age в консоли
    this.age = 16;
    function inner() {
        return this;
    }
    return inner;
}

const inner = outer();
console.log(inner());