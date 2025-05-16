const form = document.getElementById("login-form");
const errElem = document.getElementById("login-form-err")

function loginHandler(e){
    e.preventDefault();
    errElem.innerText = '';
    // console.log(form.email.value);
    // console.log(form.password.value);
    const credentials = {email: form.email.value, password: form.password.value}


    fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        if (res.status === 401) {
            throw new Error("Wrong password or Email");
        }
        throw new Error ("Auth error");
    })
    .then((obj) => {

    })
    .catch((err) => {
        errElem.innerHTML = `<span style="color:red;padding: 10px;">${err.message}</span>`
    })

}

form.addEventListener('submit', loginHandler)