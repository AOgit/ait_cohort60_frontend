const wrapper = document.querySelector(".wrapper");
const errEl = document.getElementById("error-msg");
const form = document.getElementById("price-form");
const quantEl = document.getElementById("quantity");

// async вернет Promise
const getProducts = async () => {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    let products;
    if (res.ok) {
      products = await res.json();
    } else {
      throw new Error("Something went wrong");
    }

    return products;
  } catch (e) {
    errEl.innerText = e.message;
  }
};

const render = async ({ minPrice = 0, maxPrice = Infinity }) => {
  // очищаем родителя
  wrapper.innerHTML = "";
  // получаем продукты (getProducts() возвращает Promise, поэтому через await)
  const products = await getProducts();
  const filteredProducts = products
    // фильтруем
    .filter((product) => product.price >= minPrice && product.price <= maxPrice)
    // сортируем по возрастанию
    .sort((a, b) => a.price - b.price);
    quantEl.innerHTML = `(<b>${filteredProducts.length}</b> шт)`;

  filteredProducts.forEach(({ title, price, description, images }) => {
    const cardEl = document.createElement("ul");
    const itemEl = document.createElement("li");
    const titleItemEl = itemEl.cloneNode();
    const priceItemEl = itemEl.cloneNode();
    const descItemEl = itemEl.cloneNode();
    const imgItemEl = itemEl.cloneNode();
    const imgEl = document.createElement("img");
    imgItemEl.appendChild(imgEl);

    titleItemEl.innerHTML = `<i>Title:</i> ${title}`;
    priceItemEl.innerHTML = `<i>Price:</i> ${price}`;
    descItemEl.innerHTML =
      description.length > 100
        ? `${description.slice(0, 100)}...`
        : description;

    // взял рандомную фотку, так как в объекте нерабочий адрес
    const rndId = Math.floor(Math.random() * 101) + 100;
    imgEl.src = `https://picsum.photos/id/${rndId}/250`;
    imgEl.alt = title;
    imgEl.loading = "lazy";

    cardEl.append(imgItemEl, titleItemEl, priceItemEl, descItemEl);
    wrapper.appendChild(cardEl);
  });
};

form.addEventListener("change", (e) => {
  const el = e.target;
  if (el.name === "price") {
    switch (el.value) {
      case "1":
        render({ minPrice: 0, maxPrice: 50 });
        break;
      case "2":
        render({ minPrice: 51, maxPrice: 100 });
        break;
      case "3":
        render({ minPrice: 101 });
        break;
      default:
        render({});
    }
  }
});

render({});
