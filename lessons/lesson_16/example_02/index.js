// RegExp

const text1 = "Hello, Alisher! Oh, Anna, you are also here, well hello there!";
console.log(text1.match(/Hello/));

// Good day, Alisher! Oh, Anna, you are also here, well hello there!
console.log(text1.replace(/Hello/, "Good day")); 


const text2 = "Apple Orange apple orange Apple"
const newText2 = text2.replace(/Apple/ig, "banana");
console.log(newText2); 


