const pirateCard = document.getElementById("pirate-card");


// 
// Promise <res>
fetch("https://aogit.github.io/ait_cohort60_frontend/lessons/lesson_18/example_01/joe-sparrow.json")
// http ответ преобразовываем в объект
.then((res) => {
    // console.log(res);
    // console.log(res.status);
    // if(res.status === 404) {
    //     throw new Error("Custom not found message");
    // }
    // console.log(res.ok);
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Something went wrong");
    };
})
.then((data) => {
    // console.log(data); // обязательно посмотрите чем является тело ответаo
    // console.log(data.name);
    const {name, url, favouriteDrink, parrots} = data;
    pirateCard.innerHTML = `
    <h2>${name}</h2>
    <p>Favoutite drink: ${favouriteDrink}</p>
    <img style="width:200px" src="${url}">
    `;
    const parrotContainer = document.createElement("ul");
    // console.log(parrots);
    parrots.forEach((parrot) => {
        const parrotCard = document.createElement('li');
        parrotCard.innerText = parrot.name;
        parrotContainer.appendChild(parrotCard);
    });
    // добавляем сформированный список
    pirateCard.appendChild(parrotContainer);
})
.catch((error) => console.log(error.message));

// method GET
// создать - метод POST

