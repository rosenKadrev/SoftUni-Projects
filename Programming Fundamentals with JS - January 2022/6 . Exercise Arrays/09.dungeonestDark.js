function dungeonestDark(arr) {

    let arrText = arr.toString()
    let word = arrText.split('|');
    let wordJ = word.join(' ')
    let newArr = wordJ.split(' ')

    let healt = 100;
    let coins = 0;
    let boolean = false;

    for (let i = 0; i < newArr.length - 1; i += 2) {
        let currentOperation = newArr[i];
        let currentPoints = Number(newArr[i + 1]);
        if (currentOperation === 'potion') {
            healt += currentPoints;
            if (healt > 100) {
                currentPoints -= healt - 100;
                healt = 100;
            }
            console.log(`You healed for ${currentPoints} hp.`);
            console.log(`Current health: ${healt} hp.`);
        } else if (currentOperation === 'chest') {
            coins += currentPoints;
            console.log(`You found ${currentPoints} coins.`);
        } else {
            healt -= currentPoints;
            if (healt <= 0) {
                console.log(`You died! Killed by ${currentOperation}.`);
                console.log(`Best room: ${Math.ceil((i + 1) / 2)}`);
                boolean = true;
                return;
            } else {
                console.log(`You slayed ${currentOperation}.`);
            }
        }
    }
    if (!boolean) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${healt}`);
    }
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])