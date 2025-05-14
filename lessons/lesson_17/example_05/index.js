fetch("https://api.thecatapi.com/v1/images/search")
.then((catInfo) => {
    // console.log(catInfo);
    catInfo.json()
    .then((data) => {
        console.log(data);
        console.log(data[0].url);
        // document.getElementById('cat-image').setAttribute('src', data[0].url);
        document.getElementById('cat-image').src = data[0].url;
    });
});