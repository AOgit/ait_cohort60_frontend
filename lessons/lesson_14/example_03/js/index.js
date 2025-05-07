console.log('check');

// получаем элементы
const infoBtn = document.getElementById('info-btn');
// console.log(infoBtn);
const removeInfoBtn =document.getElementById("remove-info-btn");

const infoMessage = document.createElement("p");
// infoMessage.setAttribute("class", "par");
infoMessage.innerText = "This summer is not warm at all";
console.log(infoMessage);

// повесим слушатель событий
infoBtn.addEventListener("click", () => {
    // console.log("click");

    document.body.appendChild(infoMessage);

});
removeInfoBtn.addEventListener("click", () => {
    // удалить элемент со страницы
    // document.body.removeChild(infoMessage);
    infoMessage.remove();
});

const infoClone = document.cloneNode(infoBtn);
infoClone.id = "new-id-msg";
console.log("Склонированный узел, с измененным id", infoClone);