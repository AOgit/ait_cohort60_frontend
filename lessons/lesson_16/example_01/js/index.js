const form = document.getElementById("personal-data-form");
const heightInput = form.elements["height"];
const genderInput = form.elements["gender"];
const errMessageElement = document.getElementById("error-message");
const resultCard = document.getElementById("result-card");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validate()) {
    const idealWeight = getIdealWeightByHeightForGender(heightInput.value, genderInput.value);
    resultCard.innerText = "Ваш идеальный вес " + idealWeight;
  }
});

function getIdealWeightByHeightForGender(height, gender) {
  if (gender === "male") {
    return height - 100;
  }
  return height - 110;
}

function validate() {
  let errMessage = "";
  let result = true;
  if (!parseInt(heightInput.value)) {
    errMessage += "Invalid height, please use numbers";
    result = false;
  }

  if (parseInt(heightInput.value) > 210) {
    errMessage += "Sorry, but our program doesn't work with height > 210 cm";
    result = false;
  }

  errMessageElement.innerText = errMessage;
  return result;
}
