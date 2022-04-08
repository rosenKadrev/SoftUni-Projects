function shootForTheWin(arrWithIndexes) { // ["0", "4", "3", "1", "End"]

    let targetsArr = arrWithIndexes.shift().split(' '); //  ['24', '50', '36', '70']
    targetsArr = targetsArr.map(Number);
    let targetCounter = 0;
    let i = 0

    while (arrWithIndexes[i] !== "End") {
        let currentIndexForShoot = Number(arrWithIndexes[i]); // index = 0
        let valueOfCurrentIndexForShoot = Number(targetsArr[currentIndexForShoot]); // value = '24'
        if (currentIndexForShoot >= 0 && currentIndexForShoot < targetsArr.length) {
            targetCounter++;
            targetsArr.splice(Number(arrWithIndexes[i]), 1, -1); //  ['-1', '50', '36', '70']

            // for (let j = 0; j < targetsArr.length; j++) {
            //     if (valueOfCurrentIndexForShoot < targetsArr[j] && targetsArr[j] != -1) {
            //         targetsArr[j] -= valueOfCurrentIndexForShoot;
            //     } else if (valueOfCurrentIndexForShoot >= targetsArr[j] && targetsArr[j] != -1) {
            //         targetsArr[j] += valueOfCurrentIndexForShoot;
            //     }
            // }

            targetsArr = targetsArr.map((element) => {
                if (valueOfCurrentIndexForShoot < element && element != -1) {
                    element -= valueOfCurrentIndexForShoot;
                } else if (valueOfCurrentIndexForShoot >= element && element != -1) {
                    element += valueOfCurrentIndexForShoot;
                }
                return element;
            }, valueOfCurrentIndexForShoot)
        }
        i++
    }
    console.log(`Shot targets: ${targetCounter} -> ${targetsArr.join(' ')}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"])
    // shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"])