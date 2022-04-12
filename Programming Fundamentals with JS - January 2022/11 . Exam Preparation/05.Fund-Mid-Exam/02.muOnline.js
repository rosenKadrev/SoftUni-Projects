function muOnline(string) {

    let healt = 100;
    let coins = 0;
    let bestRoom = 0;
    let boolean = false;
    let arrWithComands = string.split('|') //['rat 10', 'bat 20', 'potion 10', 'rat 10', 'chest 100', 'boss 70', 'chest 1000']

    for (let i = 0; i < arrWithComands.length; i++) {
        let currentComand = arrWithComands[i].split(' '); //['rat', '10'],['bat', '20'],['potion', '10'],['rat', '10'],['chest', '100'],['boss', '70'],['chest', '1000']
        bestRoom++;
        if (currentComand[0] === 'potion') {
            healt += Number(currentComand[1]);
            let heal = Number(currentComand[1]);
            if (healt > 100) {
                heal -= (healt - 100);
                healt = 100;
            }
            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${healt} hp.`);
        } else if (currentComand[0] === 'chest') {
            coins += Number(currentComand[1]);
            console.log(`You found ${currentComand[1]} bitcoins.`);
        } else {
            let monsterName = currentComand[0];
            let monsterAtack = Number(currentComand[1]);
            healt -= monsterAtack;
            if (healt > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                boolean = true;
                return;
            }
        }
    }
    if (!boolean) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${healt}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
    // muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")