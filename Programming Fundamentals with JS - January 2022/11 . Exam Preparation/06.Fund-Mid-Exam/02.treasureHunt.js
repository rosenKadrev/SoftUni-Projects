function treasureHunt(arr) {

    let lootTreasure = arr.shift().split('|'); //  ['Gold', 'Silver', 'Bronze', 'Medallion', 'Cup']
    // console.log(lootTreasure);

    let i = 0;
    while (arr[i] !== "Yohoho!") {
        let currentComand = arr[i].split(' ') //['Loot', 'Wood', 'Gold', 'Coins'],['Loot', 'Silver', 'Pistol'],['Drop', '3'],['Steal', '3']
        switch (currentComand[0]) {
            case 'Loot':
                for (let i = 1; i < currentComand.length; i++) {
                    let currentElement = currentComand[i];
                    let ifTrue = lootTreasure.includes(currentElement)
                    if (!ifTrue) {
                        lootTreasure.unshift(currentElement);
                    }
                }
                break;
            case 'Drop':
                let currentIndex = Number(currentComand[1]);
                let currentElement = lootTreasure[currentIndex];
                if (currentIndex >= 0 && currentIndex < lootTreasure.length) {
                    lootTreasure.splice(currentIndex, 1);
                    lootTreasure.push(currentElement);
                }
                break;
            case 'Steal':
                let countOfElements = Number(currentComand[1]);
                if (countOfElements >= lootTreasure.length) {
                    console.log(lootTreasure.splice(0).join(', '));
                } else {
                    console.log(lootTreasure.splice(-countOfElements, countOfElements).join(', '));
                }
                break;
        }
        i++;
    }
    if (lootTreasure.length > 0) {
        let sumLength = 0;
        for (let j = 0; j < lootTreasure.length; j++) {
            sumLength += Number(lootTreasure[j].length);
        }
        let avarage = (sumLength / Number(lootTreasure.length)).toFixed(2);
        console.log(`Average treasure gain: ${avarage} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])