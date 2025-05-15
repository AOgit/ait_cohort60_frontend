//Json
// JavaScrtipt object notation

const user = {
    name: "john",
    age: 18,
};

const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString); // {"name":"john","age":18}

const userFromJson = JSON.parse(userAsJSONString);
console.log(userFromJson);
