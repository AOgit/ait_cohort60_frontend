const brothers = [
    {race:"hobbit", height: 110, age:45, name:"Frodo Baggins"},
    {race:"human", height: 185, age:46, name:"Aragorn"},
    {race:"elf", height: 189, age:110, name:"Legolas"},
    {race:"dworf", height: 140, age:150, name:"Gimly"},
    {race:"human", height: 195, age:200, name:"Gandalf"},
];

// const frodo = brothers[0];
const [frodo, aragorn, Legolas, Gimly, {race:raceOfGandalf}] = brothers;
console.log(raceOfGandalf);