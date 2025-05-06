const obj = { name: "Bob", surname: "Slay", age: 35 };

function swapKeyValue(obj) {
  const tempObj = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let i = 0; i < keys.length; i++) {
    tempObj[values[i]] = keys[i];
  }
  return tempObj;
}
console.log(obj);
console.log(swapKeyValue);

const oak = {
  name: 'oak',
  height: 140,
  year: 2025,
  // grow() {
  //   this.height += 30;
  //   this.year++;
  // },
};
// const {grow} = oak;

// const grow = () => {this.year++;this.height += 30;};
const grow = function () {
  this.year++;
  this.height += 30;
};


for (let i = 1; i <= 20; i++) {
  grow.apply(oak);
  console.log(oak);
}

const sycamore = {
  name: "sycamore",
  height:300,
  year: 2001,
};

for (let i = 1; i <= 20; i++) {
  grow.bind(sycamore);
  grow();
  console.log(sycamore);
}
