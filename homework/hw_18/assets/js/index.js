const wrapper = document.createElement("div");
const titleEl = document.createElement("h1");
const authorEl = document.createElement("p");
const yearEl = authorEl.cloneNode(false);
wrapper.append(titleEl, authorEl, yearEl);
document.body.appendChild(wrapper);

fetch("https://aogit.github.io/ait_cohort60_frontend/homework/hw_18/assets/data/book.json")
.then((res) => {
    if (res.ok) {return res.json()}
        else { throw new Error ("Something went wrong")}
})
.then ((data) => {
    const {title, author, year} = data;
    titleEl.innerText = title;
    authorEl.innerText = `Автор: ${author}`;
    yearEl.innerText = `Год: ${year}`;
})
.catch((err) => {
    console.log(err.message);
})