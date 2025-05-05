const oak = {
    name: 'oak',
    height: 140,
    year: 2025,
    grow() {
        this.height += 30;
        this.year++;
    }
}

const {grow:objGrow} = oak;

// Oak growing
plantGrow(oak, objGrow.bind(oak))

// Maple growing
const maple = {name: "maple", height:100, year:2000,};
plantGrow(maple, objGrow.bind(maple))

// Pine growing через apply
plantGrow({name:'pine', height:50, year:1983})



function plantGrow(obj, fnGrow = null){

    console.log(`\n=============== ${obj.name} ===========`);
    for(let i = 1; i<=10; i++)
    {
            console.log(`Прошел ${i} год `);
            if(fnGrow) {fnGrow()} else { objGrow.apply(obj)};
            console.log(`Сейчас ${obj.year} год и моя высота уже ${obj.height} см `  + ">".padEnd(i, ">"));
    }
}

