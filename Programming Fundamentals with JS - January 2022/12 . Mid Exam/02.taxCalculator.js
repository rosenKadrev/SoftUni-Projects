function taxCalculator(string) {

    let arr = string[0].split('>>'); // ['family 3 7210', 'van 4 2345', 'heavyDuty 9 31000', 'sports 4 7410']
    let totalTax = 0;

    for (let index = 0; index < arr.length; index++) {
        let currentComand = arr[index].split(' '); // ['family', '3', '7210'],['van', '4', '2345'], ['heavyDuty', '9', '31000'],['sports', '4', '7410']
        let carType = currentComand[0];
        let yearsTheTaxForPaid = Number(currentComand[1]);
        let kilometresTraveled = Number(currentComand[2]);
        let currentTax = 0;

        if (carType === 'family') {
            currentTax = (50 - 5 * yearsTheTaxForPaid) + 12 * Math.trunc(kilometresTraveled / 3000);
        } else if (carType === 'heavyDuty') {
            currentTax = (80 - 8 * yearsTheTaxForPaid) + 14 * Math.trunc(kilometresTraveled / 9000);
        } else if (carType === 'sports') {
            currentTax = (100 - 9 * yearsTheTaxForPaid) + 18 * Math.trunc(kilometresTraveled / 2000);
        } else {
            console.log('Invalid car type.');
            continue;
        }

        console.log(`A ${carType} car will pay ${currentTax.toFixed(2)} euros in taxes.`);
        totalTax += currentTax;
        currentTax = 0
    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])