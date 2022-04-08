function counterStrike(arr) {

    let startEnergy = Number(arr.shift());
    let i = 0;
    let battlesCounter = 0;
    let boolean = false;

    while (arr[i] !== "End of battle") {
        let currentDistance = Number(arr[i]);

        if (startEnergy >= currentDistance) {
            startEnergy -= currentDistance;
            battlesCounter++;
        } else {
            console.log(`Not enough energy! Game ends with ${battlesCounter} won battles and ${startEnergy} energy`);
            boolean = true;
            return;
        }
        if (battlesCounter % 3 === 0) {
            startEnergy += battlesCounter;
        }
        i++;
    }
    if (!boolean) {
        console.log(`Won battles: ${battlesCounter}. Energy left: ${startEnergy}`);
    }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"])
counterStrike(["200", "54", "14", "28", "13", "End of battle"])