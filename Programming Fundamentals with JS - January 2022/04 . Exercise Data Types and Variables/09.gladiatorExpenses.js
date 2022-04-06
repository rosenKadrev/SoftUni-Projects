function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let repair = 0;
    let helmtCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        helmtCounter++;
        swordCounter++;
        if (helmtCounter % 2 === 0) {
            repair += helmetPrice;
        }
        if (swordCounter % 3 === 0) {
            repair += swordPrice;
        }
        if (helmtCounter % 2 === 0 && swordCounter % 3 === 0) {
            shieldCounter++;
            repair += shieldPrice;
        }
        if (shieldCounter % 2 === 0 && shieldCounter !== 0) {
            repair += armorPrice;
            shieldCounter = 0;
        }
    }
    console.log(`Gladiator expenses: ${repair.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)
