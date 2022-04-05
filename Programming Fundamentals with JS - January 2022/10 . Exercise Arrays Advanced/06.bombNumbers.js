function bombNums(numberArr, bombArr) {

    let bombNum = bombArr[0];
    let powerOfBombNum = bombArr[1];

    for (let i = 0; i < numberArr.length; i++) {
        let currentElement = numberArr[i];
        if (currentElement === bombNum) {
            let index = numberArr.indexOf(bombNum);
            numberArr.splice(index - powerOfBombNum, 2 * powerOfBombNum + 1);
            // console.log(index - powerOfBombNum, 2 * powerOfBombNum + 1);
        }

    }
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    console.log(numberArr.reduce(reducer));
    // console.log(numberArr);
}
bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNums([1, 7, 7, 1, 2, 3], [7, 1])
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])



function bombNums(array, bomb) {

    let bombNumber = bomb[0];
    let bombRadius = bomb[1];

    let indexOfBomb = array.indexOf(bombNumber);
    while (indexOfBomb !== -1) {
        let startExlosionIndex = Math.max(0, indexOfBomb - bombRadius);
        let explosionLength = bombRadius * 2 + 1;
        array.splice(startExlosionIndex, explosionLength);
        indexOfBomb = array.indexOf(bombNumber);
    }
    let sum = array.reduce((a, b) => a + b, 0);
    console.log(sum);
}
bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNums([1, 7, 7, 1, 2, 3], [7, 1])
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])