function manOWar(arr) {

    let pirateShip = arr.shift().split('>').map(Number); // [12, 13, 11, 20, 66]
    let warShip = arr.shift().split('>').map(Number); // [12, 22, 33, 44, 55, 32, 18]
    let maxHealthCapacity = Number(arr.shift()) // 70
    let i = 0;

    while (arr[i] !== "Retire") {
        let currentAttack = arr[i].split(' '); //['Fire', '2', '11'],['Fire', '8', '100'],['Defend', '3', '6', '11'],['Defend', '0', '3', '5'],['Repair', '1', '33'],['Status']
        switch (currentAttack[0]) {
            case 'Fire':
                let index = Number(currentAttack[1]);
                let damage = Number(currentAttack[2]);
                if (index >= 0 && index < Number(warShip.length)) {
                    warShip[index] -= damage;
                    if (warShip[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
                break;
            case 'Defend':
                let indexStart = Number(currentAttack[1]);
                let indexEnd = Number(currentAttack[2]);
                let damageD = Number(currentAttack[3]);
                if ((indexStart >= 0 && indexStart < Number(pirateShip.length)) && (indexEnd >= 0 && indexEnd < Number(pirateShip.length))) {
                    for (let i = indexStart; i <= indexEnd; i++) {
                        pirateShip[i] -= damageD;
                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                let indexR = Number(currentAttack[1]);
                let health = Number(currentAttack[2]);
                if (indexR >= 0 && indexR < Number(pirateShip.length)) {
                    pirateShip[indexR] += health;
                    if (pirateShip[indexR] > maxHealthCapacity) {
                        pirateShip[indexR] = maxHealthCapacity;
                    }
                }
                break;
            case 'Status':
                let counter = 0;
                let maxHP = maxHealthCapacity * 0.2;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < maxHP) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`);
                // let sectionsLowerHealt = maxHealthCapacity * 0.2;
                // let sectionsForRepair = pirateShip.filter((a) => a <= sectionsLowerHealt);
                // let count = Number(sectionsForRepair.length);
                // console.log(`${count} sections need repair.`);
                break;
        }
        i++;
    }

    let pirateShipSum = pirateShip.reduce((a, b) => a + b);
    let warShipSum = warShip.reduce((a, b) => a + b);
    console.log(`Pirate ship status: ${pirateShipSum}` + '\n' + `Warship status: ${warShipSum}`);
}
manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])
manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"])
    // manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 50", "Defend 0 4 11", "Repair 3 18", "Retire"])