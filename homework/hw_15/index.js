const animalsForm = document.getElementById("animals-form");
const animalsContainer = document.getElementById("animals-container");

const animals = [
  { nickname: "Garfield", age: 3, breed: "Persian" },
  { nickname: "Tom", age: 2, breed: "British" },
];

function showAnimals() {
  animalsContainer.innerHTML = "";
  animals.forEach((animal) => {
    const item = document.createElement("div");
    item.innerText = `Nickname: ${animal.nickname}, Age: ${animal.age}, Breed: ${animal.breed}`;
    animalsContainer.appendChild(item);
  });
}

showAnimals();

animalsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  animals.push({
    nickname: animalsForm.nickname.value,
    age: animalsForm.age.value,
    breed: animalsForm.breed.value,
  });
  showAnimals();
});
