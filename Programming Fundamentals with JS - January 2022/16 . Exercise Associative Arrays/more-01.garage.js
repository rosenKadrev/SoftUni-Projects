function garage(arrWithCarInfo) {

    let sortCarsByGarage = {};

    for (let iteratorA of arrWithCarInfo) {
        let garage = iteratorA.split(' - ')[0]; // 1
        let carinfo = iteratorA.split(' - ')[1]; //color: blue, fuel type: diesel
        if (!sortCarsByGarage.hasOwnProperty(garage)) {
            sortCarsByGarage[garage] = [carinfo];
        } else {
            sortCarsByGarage[garage].push(carinfo);
        }
    }

    for (let key in sortCarsByGarage) {
        console.log(`Garage № ${key}`);

        for (let iteratorB of sortCarsByGarage[key]) {
            let splitByComa = iteratorB.split(', ') //[ 'color: blue', 'fuel type: diesel' ]
            let forPrint = '';
            let allForPrint = '--- ';
            let counter = 0;

            for (let iteratorC of splitByComa) {
                counter++;
                let [name, info] = iteratorC.split(': ') //[ 'color', 'blue' ],[ 'fuel type', 'diesel' ]
                let forPrint = name + ' - ' + info;
                if (counter === Number(splitByComa.length)) {
                    allForPrint += forPrint;
                } else {
                    allForPrint += forPrint + ', ';
                }
            }
            console.log(allForPrint);
            allForPrint = '';
        }
    }
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
])



// function garage(arrWithCarInfo) {

//     let sortCarsByGarage = {};

//     for (let iteratorA of arrWithCarInfo) {
//         let garage = iteratorA.split(' - ')[0]; // 1
//         let carinfo = iteratorA.split(' - ')[1]; //color: blue, fuel type: diesel

//         if (!sortCarsByGarage.hasOwnProperty(garage)) {
//             sortCarsByGarage[garage] = [carinfo];
//         } else {
//             sortCarsByGarage[garage].push(carinfo);
//         }
//     }

//     for (let key in sortCarsByGarage) {
//         console.log(`Garage № ${key}`);
//         for (let iteratorB of sortCarsByGarage[key]) {
//             const regex = /:/ig;
//             iteratorB = iteratorB.replaceAll(regex, ' -');
//             console.log(`--- ${iteratorB}`);
//         }
//     }
// }
// garage(['1 - color: blue, fuel type: diesel',
//         '1 - color: red, manufacture: Audi',
//         '2 - fuel type: petrol',
//         '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
//     ])
// garage(['1 - color: green, fuel type: petrol',
//     '1 - color: dark red, manufacture: WV',
//     '2 - fuel type: diesel',
//     '3 - color: dark blue, fuel type: petrol'
// ])