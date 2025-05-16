const form = document.getElementById("login-form");
const errElem = document.getElementById("login-form-err");

function loginHandler(e){
    e.preventDefault();
    // console.log(form.email.value);
    // console.log(form.password.value);
    fetchLogin();
}


// then -> await

// await только внутри функций, которые являются асинхронными
// при объявлении укажем слово async

async function fetchLogin() {
  try {
    const credentials = {
      email: form.email.value,
      password: form.password.value,
    };

    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    let obj;
    if (res.ok) {
        obj = await res.json();
        errElem.innerText = ""; 
    } else if (res.status === 401) {
      throw new Error("Wrong password or Email");
    } else {
      throw new Error ("Auth error");
    }
    

     const {access_token} = obj;
     console.log(access_token);
     // в браузере есть встроенные способы хранения:
     // sessionStorage, localeStorage, cookies
     // сохранили в локал сторадж токен с ключем access_token
     localStorage.setItem("access_token", access_token);

     window.location.href = "/profile";


  } catch (err) {
    errElem.innerHTML = `<span style="color:red;padding: 10px;">${err.message}</span>`;
  }
}

form.addEventListener('submit', loginHandler)