function needForSpeed(arr) {

    let carsForObtainNumber = arr.shift();
    let objForSortObtainCars = {};

    for (let i = 0; i < carsForObtainNumber; i++) {
        let currentObtainInfoForCar = arr[i].split('|');
        let carName = currentObtainInfoForCar[0];
        let mileage = Number(currentObtainInfoForCar[1]);
        let fuel = Number(currentObtainInfoForCar[2]);
        objForSortObtainCars[carName] = { mileage, fuel };
    }

    for (let j = carsForObtainNumber; j < arr.length; j++) {
        let currentObtainInfoForCar = arr[j].split(' : ');
        let currentComand = currentObtainInfoForCar[0];
        if (currentComand === 'Stop') {
            break;
        }
        if (currentComand === 'Drive') {
            let carName = currentObtainInfoForCar[1];
            let mileage = Number(currentObtainInfoForCar[2]);
            let fuel = Number(currentObtainInfoForCar[3]);
            if (Number(objForSortObtainCars[carName]['fuel']) < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                console.log(`${carName} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`);
                objForSortObtainCars[carName]['mileage'] += mileage;
                objForSortObtainCars[carName]['fuel'] -= fuel;
            }
            if (Number(objForSortObtainCars[carName]['mileage']) >= 100000) {
                console.log(`Time to sell the ${carName}!`);
                delete objForSortObtainCars[carName];
            }
        } else if (currentComand === 'Refuel') {
            let carForRefuel = currentObtainInfoForCar[1];
            let fuelForRefuel = Number(currentObtainInfoForCar[2]);
            objForSortObtainCars[carForRefuel]['fuel'] += fuelForRefuel;
            if (Number(objForSortObtainCars[carForRefuel]['fuel']) > 75) {
                let fuelForFitTheTank = 75 - (objForSortObtainCars[carForRefuel]['fuel'] - fuelForRefuel);
                objForSortObtainCars[carForRefuel]['fuel'] = 75;
                console.log(`${carForRefuel} refueled with ${fuelForFitTheTank} liters`);
            } else {
                console.log(`${carForRefuel} refueled with ${fuelForRefuel} liters`);
            }
        } else if (currentComand === 'Revert') {
            let carForRevert = currentObtainInfoForCar[1];
            let kilometresForRevert = Number(currentObtainInfoForCar[2]);
            objForSortObtainCars[carForRevert]['mileage'] -= kilometresForRevert;
            if (Number(objForSortObtainCars[carForRevert]['mileage']) < 10000) {
                objForSortObtainCars[carForRevert]['mileage'] = 10000;
            } else {
                console.log(`${carForRevert} mileage decreased by ${kilometresForRevert} kilometers`);
            }
        }
    }

    let arrForFinalPrint = Object.entries(objForSortObtainCars);
    for (let element of arrForFinalPrint) {
        console.log(`${element[0]} -> Mileage: ${element[1]['mileage']} kms, Fuel in the tank: ${element[1]['fuel']} lt.`);
    }
}
// needForSpeed([
//         '3',
//         'Audi A6|38000|62',
//         'Mercedes CLS|11000|35',
//         'Volkswagen Passat CC|45678|5',
//         'Drive : Audi A6 : 543 : 47',
//         'Drive : Mercedes CLS : 94 : 11',
//         'Drive : Volkswagen Passat CC : 69 : 8',
//         'Refuel : Audi A6 : 50',
//         'Revert : Mercedes CLS : 500',
//         'Revert : Audi A6 : 30000',
//         'Stop'
//     ])
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])