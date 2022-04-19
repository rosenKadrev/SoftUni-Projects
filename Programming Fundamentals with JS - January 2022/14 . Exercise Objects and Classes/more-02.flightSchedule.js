function flightSchedule(arr) {

    let allFlights = arr[0]; //['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania']
    let newlyChangedStatuses = arr[1]; //['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled']
    let flightStatusForCheck = arr[2][0]; //Cancelled
    let objWithFlights = {};

    for (let flight of allFlights) {
        let currentFlight = flight.split(' '); // ['WN269', 'Delaware'],['FL2269', 'Oregon'],['WN498', 'Las', 'Vegas']......
        let key = currentFlight.shift();
        let Destination = '';
        if (currentFlight.length === 1) {
            Destination = currentFlight.shift();
        } else {
            Destination = currentFlight.join(' ');
        }
        objWithFlights[key] = { Destination };
    }
    // console.log(objWithFlights);
    for (let newFlight of newlyChangedStatuses) {
        let [keyForChange, newValue] = newFlight.split(' '); // ['DL2120', 'Cancelled'],['WN612', 'Cancelled'],['WN1173', 'Cancelled'],['SK430', 'Cancelled']
        if (objWithFlights[keyForChange]) {
            objWithFlights[keyForChange].Status = newValue;
        }
    }
    // console.log(objWithFlights);
    if (flightStatusForCheck === 'Cancelled') {
        for (let key in objWithFlights) {
            if (flightStatusForCheck === objWithFlights[key].Status) {
                console.log(objWithFlights[key]);
            }
        }
    } else if (flightStatusForCheck === 'Ready to fly') {
        for (let key in objWithFlights) {
            if (objWithFlights[key].Status === undefined) {
                objWithFlights[key].Status = 'Ready to fly';
                console.log(objWithFlights[key]);
            }
        }
    }
}
// flightSchedule([
//     [
//         'WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     [
//         'DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'
//     ],
//     ['Cancelled']
// ])
flightSchedule([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    ['Ready to fly']
])