// function piccolo(arr) {

//     let objWithParkingNums = {};

//     for (let parkNum of arr) {
//         let [isInOrOut, carNum] = parkNum.split(', ');
//         if (isInOrOut === 'IN') {
//             objWithParkingNums[carNum] = isInOrOut;
//         } else if (isInOrOut === 'OUT') {
//             delete objWithParkingNums[carNum];
//         }
//     }

//     let elementsForSortingArr = Object.keys(objWithParkingNums);
//     elementsForSortingArr.sort((a, b) => a.localeCompare(b));
//     let size = Object.entries(objWithParkingNums).length;
//     if (size === 0) {
//         console.log("Parking Lot is Empty");
//     }
//     elementsForSortingArr.forEach(carNums => console.log(`${carNums}`));
// }
// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ])
// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'
// ])



function piccolo(input) {
    let parking = new Set();
    for (let line of input) {
        let [command, number] = line.split(', ');
        if (command == 'IN') {
            parking.add(number);
        } else {
            parking.delete(number);
        }
    }
    if (parking.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        let result = Array.from(parking).sort();
        for (let car of result) {
            console.log(car);
        }
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])