const container = document.querySelector(".container");
fetch("https://api.sampleapis.com/wines/whites")
.then(res => res.json())
.then(json => render(json));

const render = array => {
   array
   .filter(element => element.rating.average >= 4.8)
   .forEach(({image, wine, winery, rating}) => {
        const cardElem = document.createElement('div');
        const titleElem = document.createElement('p');
        const wineryElem = document.createElement('p');
        const ratingElem = document.createElement('p');
        const imgElem = document.createElement('img');

        titleElem.innerText = `Title: ${wine}`;
        wineryElem.innerText = `Winery: ${winery}`;
        ratingElem.innerText = `Rating: ${rating.average}`;
        imgElem.src = image;
        imgElem.alt = wine;

        cardElem.style.backgroundColor = rating.average > 4.8 ? 'lightgreen' : 'lightblue';
        cardElem.append(imgElem, titleElem, wineryElem, ratingElem);
        container.append(cardElem);

   })
}