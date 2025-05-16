const accessToken = localStorage.getItem("access_token");
// console.log(accessToken);
const fullNameElem = document.getElementById("full-name");
const avatarImg = document.getElementById("avatar");
const emailElem = document.getElementById("email");
if(!accessToken){
    window.location.replace("/login");
}

async function fetchProfile() {
   const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
        "Authorization": `Bearer ${accessToken}`
    }
   });

   const user = await res.json();
   const {avatar, email, name} = user;

   fullNameElem.innerText = name;
   avatarImg.src = "https://i.imgur.com/yhW6Yw1_d.webp?maxwidth=760&fidelity=grand";
   emailElem.innerText = email;




   console.log(obj);
}

fetchProfile();