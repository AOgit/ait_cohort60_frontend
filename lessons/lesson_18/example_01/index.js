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

// https://aogit.github.io/ait_cohort60_frontend/lessons/lesson_18/example_01/joe-sparrow.json
// https://aogit.github.io/ait_cohort60_frontend/lessons/lesson_18/example_01/user.json