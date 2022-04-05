function train(arr) {

    let arrWithWagons = arr[0].split(' '); // ['32' '54' '21' '12' '4' '0' '23']
    arr.shift();
    let maxPassengersInOneWagon = Number(arr[0]); // '75'
    arr.shift(); // ['Add 10', 'Add 0', '30', '10', '75']

    for (let index = 0; index < arr.length; index++) {
        let currentOperation = arr[index].split(' ');
        if (currentOperation[0] === 'Add') {
            arrWithWagons.push(currentOperation[1]);
        } else {
            arrWithWagons = checkSeats(arrWithWagons, Number(currentOperation[0]), maxPassengersInOneWagon)
        }
    }

    function checkSeats(arr, passengersForSeats, maxPassengersInOneWagon) {
        for (let i = 0; i < arr.length; i++) {
            let current = Number(arr[i]);
            let freeSeats = maxPassengersInOneWagon - current;
            if (freeSeats >= Number(passengersForSeats)) {
                arr[i] = current + passengersForSeats;
                break;
            }
        }
        return arr;
    }
    console.log(arrWithWagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])