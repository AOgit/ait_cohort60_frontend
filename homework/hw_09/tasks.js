// Task 1
let temperature = 25;
if (temperature < 0) {
    console.log("Холодно!"); 
} else if (temperature < 21) {
    console.log("Прохладно");
} else if (temperature < 31) {
    console.log("Тепло");
} else {
    console.log("Жарко");
}

// Task 2
console.log(wetherCodeDescription('ds'));

function wetherCodeDescription(wetherCode = '') {
    switch (wetherCode.toUpperCase()) {
        case "SQ":
            return "шквал";
        case "PO":
            return "пыльный вихрь";
        case "FC":
            return "торнадо";
        case "BR":
            return "дымка (видимость от 1 до 9 км)";
        case "HZ":
            return "мгла (видимость менее 10 км)";
        case "FU":
            return "дым (видимость менее 10 км)";
        case "DS":
            return "пыльная буря (видимость менее 10 км)";
        case "SS":
            return "песчаная буря (видимость менее 10 км)";
        default:
            return "Описание с данным кодом не найдено";
    }
}
