// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";



let scoreBtn = 0;
let scoreClone = 0;

const scoreBlock = document.createElement("div");
scoreBlock.style.padding = "20px";
scoreBlock.style.display = "flex";
scoreBlock.style.columnGap = "40px";
const btnScore = document.createElement("div");
// btnScore.id = "magic-btn-score";
const cloneBtnScore = btnScore.cloneNode(true);
// cloneBtnScore.id = "magic-btn-2-score";
scoreBlock.appendChild(btnScore);
scoreBlock.appendChild(cloneBtnScore);
document.body.insertBefore(scoreBlock, btn);

btn.addEventListener('click', () => {
  if (clonedBtn && btn.style.color === "black" ) {
    btn.innerHTML = "Нет я тебя!";
    btn.style.backgroundColor = "#f7c815";
    clonedBtn.style.backgroundColor = "pink";
    btnScore.innerHTML = `Magic button score: ${++scoreBtn}`;
    return false;
  }
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  // console.log(clonedBtn);
  clonedBtn.innerHTML = "<b>Я изменю тебя!</b>";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  clonedBtn.classList.add("second-btn");
  document.body.appendChild(clonedBtn);
});

clonedBtn.addEventListener("click", () => {
  if (btn.innerHTML === "Нет я тебя!" ) {
    clonedBtn.innerHTML = "Нет я тебя!";
  }
  
  cloneBtnScore.innerHTML = `Clone button score: ${++scoreClone}`;
  clonedBtn.style.backgroundColor = "#a78b71";
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});
// здесь можете создать EventListener для второй кнопки