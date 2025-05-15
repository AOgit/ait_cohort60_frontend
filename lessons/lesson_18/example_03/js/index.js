// HTTP
// status

// method - метод
// GET - получение информации
// POST - создать какой-то ресурс
// DELETE - удалить ресурс

// Структура запроса:
// url

function fetchProducts(id) {
  const url = `https://dummyjson.com/products${id ? '/'+id : ""}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProducts(3);
fetchProducts();




// POST
fetch("https://dummyjson.com/auth/login", {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional, defaults to 60
  }),
});
