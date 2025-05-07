console.log("hello");
const messageElement = document.getElementById("welcome-message");
const magicBtn = document.getElementById("btn-js-is-here");
const catBtn = document.getElementById("btn-cat");
const containerForCat = document.getElementById("container-cat");

console.log(messageElement);
console.log(magicBtn);

magicBtn.addEventListener("click", () => {
    console.log("Function is working"); // убедимся что все работает
    //innerText
    messageElement.innerText = "JS is here, baby!";
});


// подключаем скрипт, не забываем про дефер
// проверяем, что скрипт работает - вывод в консоль
// получаем нужные нам элементы и сохраняем в переменные
// прописываем, если нужно, слушатель событий
// - проверяем - работает ли он - выводом в консоль
// делаем то, что нам необходимо

catBtn.addEventListener("click", ()=> {
    console.log("Cat is here");
    let catImg = document.getElementById("cat-img");
    if (catImg) {
        catImg.remove();
        return false;
    } 

    catImg = document.createElement("img");

    catImg.setAttribute(
        "src", 
        "https://preview.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-0o96ygkg9jw91.jpg?width=640&crop=smart&auto=webp&s=f2b697113affe3da13283197767d071e80644ff7",
    );
    
    catImg.setAttribute(
        "id",
        "cat-img",
    );

    // прописать некоторые стили
    catImg.style.width = "200px";
    // а еще удобнее добавить просто class для элемента, в котором уже прописано все
    catImg.classList.add("catImg");

    console.log(catImg);
    // appendChild - добавляет дочерний элемент в родителя
    containerForCat.appendChild(catImg);

});