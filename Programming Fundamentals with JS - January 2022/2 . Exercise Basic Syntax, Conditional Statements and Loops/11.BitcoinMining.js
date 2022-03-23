// input = [100, 200, 300];
// input = [50, 100];
input = [3124.15, 504.212, 2511.124];

function bitcoinMining(input) {

    let inputL = input.length;
    let daysCounter = 0;
    let availableMoney = 0
    let dayOfFirstBitcoin = 0;
    let boolean = false;

    for (let i = 0; i < inputL; i++) {
        daysCounter++;
        let currentGramsOfGold = Number(input[i]);

        if (daysCounter % 3 === 0) {
            availableMoney += currentGramsOfGold * 0.7 * 67.51;
        } else {
            availableMoney += currentGramsOfGold * 67.51;
        }
        if (availableMoney >= 11949.16 && boolean === false) {
            dayOfFirstBitcoin = daysCounter;
            boolean = true;
        }
    }
    let allBuyedBitcoins = Math.trunc(availableMoney / 11949.16);
    console.log(`Bought bitcoins: ${allBuyedBitcoins}`);

    if (boolean) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    
    console.log(`Left money: ${(availableMoney - allBuyedBitcoins * 11949.16).toFixed(2)} lv.`);
}
bitcoinMining(input)