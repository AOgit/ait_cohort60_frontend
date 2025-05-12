// const emailInput = document.getElementById('email');

// emailInput.value = "john@gmail.com";
// console.log(emailInput.value);

const form = document.getElementById("student-form");
const emailInput = form.elements["email"];
const germanInput = form.elements["german"];
const studentsContainer = document.getElementById("students-container");
const removeBtn = document.getElementById("remove-all-students");
const sortBtn = document.getElementById("sort-students-btn");
const emailError = document.getElementById("email-error");
const filterForm = document.getElementById("filter-form");

let students = [
  { email: "default@gmail.com", german: "A2" },
  { email: "default1@gmail.com", german: "B1" },
  { email: "default2@gmail.com", german: "A1" },
  { email: "default3@gmail.com", german: "B2" },
];

// функция при вызове меняет отображаемые на странице данные
function renderStudents(students) {
  // studentsContainer.innerHTML = '';
  while (studentsContainer.firstChild) {
    studentsContainer.removeChild(studentsContainer.firstChild);
  }
  students.forEach((student) => {
    const studentCard = document.createElement("div");
    //// studentCard.innerText = student.email + ": " +  student.german;
    // const emailInfo = document.createElement("span");
    // const germanInfo = document.createElement("span");
    // const delimiter = document.createTextNode(", ");
    // emailInfo.innerText = student.email;
    // germanInfo.innerText = student.german;

    // добавляем сразу два дочерних элемента
    // studentCard.append(emailInfo, delimiter, germanInfo);

    studentCard.innerHTML = `<span>${student.email}</span>, <span>${student.german}</span>`;

    studentsContainer.append(studentCard);
  });
}

renderStudents(students);

function addStudentToList(event) {
  event.preventDefault();
  // console.log('submit');
  // console.log(emailInput.value);
  if (validateForm()) {
    students.push({ email: emailInput.value, german: germanInput.value });
    console.log(students);
    renderStudents(students);
    emailInput.value = "";
    germanInput.value = "";
    emailError.innerText = "";
  } else {
    emailError.innerText = "Email is not valid";
  }
}

function validateForm() {
  return (
    emailInput.value.includes("@") &&
    !emailInput.value.includes("#") &&
    !emailInput.value.includes(".")
  );
}

// удаляет всех из списка и обновляет отображения
function removeAll() {
  students = [];
  renderStudents(students);
}

function sortStudents(){
    students.sort((a,b) => a.german.localeCompare(b.german));
    renderStudents(students);
}

function filterStudents(event){
    event.preventDefault();
    const filteredStudents = students.filter((student) => student.german === filterForm.german.value);
    renderStudents(filteredStudents);
}

form.addEventListener("submit", addStudentToList);
removeBtn.addEventListener("click", removeAll);
sortBtn.addEventListener("click", sortStudents);

filterForm.addEventListener("submit", filterStudents);