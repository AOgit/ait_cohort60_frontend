// const word = "1998-hjklwj:ohn";
// const regex = /\d+-[a-z]{6}:[a-z]+/i;

// console.log(word.match(regex));

const fullName = "John Bowie";
const regex2 = /John\sBowie/;
console.log(regex2.test(fullName));

const regex3 = /[A-Z][a-z]+\s[A-Z][a-z]+/;
console.log(regex2.test(fullName));

const text = "I am programmer but you can never say. I am sure";
const regex7 = /(I) (am)/gi;
console.log(text.replace(regex7, `$2 $1`));

const text2 = "I am Alisher Khamidov, I am looking for Eva Dieterle";
const FullNameReg = /([A-Z][a-z]+)\s([A-Z][a-z]+)/g;
console.log(text2.replace(FullNameReg, `$2 $1`));


const phoneNumber = "0151 52466512";

const regexPhone = /\d(\d+)\s(\d{3})(\d{3})(\d{2})/;

console.log(phoneNumber.replace(regexPhone, `+49 ($1) $2 $3 $4`));



