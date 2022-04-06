function carWash(arr) {

    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentComand = arr[i];
        switchValue(currentComand);
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);

    function switchValue(operation) {
        switch (operation) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value += value * 0.2;
                break;
            case 'vacuum cleaner':
                value += value * 0.25;
                break;
            case 'mud':
                value -= value * 0.1;
                break;
        }
        return value;
    }
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])