function memoryGame(arrWithIndexes) {

    let arrSequenceOfElements = arrWithIndexes.shift().split(' ');
    let i = 0;
    let moves = 0;
    let boolean = false;

    while (arrWithIndexes[i] !== 'end') {
        let currentIndexes = arrWithIndexes[i++].split(' ');
        moves++;

        if ((currentIndexes[0] === currentIndexes[1]) || (currentIndexes[0] < 0 || currentIndexes[0] >= arrSequenceOfElements.length || currentIndexes[1] < 0 || currentIndexes[1] >= arrSequenceOfElements.length)) {
            equalIndexesOrOutOfBounds(arrSequenceOfElements, currentIndexes, moves);
        } else {
            twoMatchingElementsOrNot(arrSequenceOfElements, currentIndexes, moves);
        }
        if (Number(arrSequenceOfElements.length) === 0) {
            console.log(`You have won in ${moves} turns!`);
            boolean = true;
            return;
        }
    }

    if (!boolean) {
        console.log('Sorry you lose :(' + '\n' + `${arrSequenceOfElements.join(' ')}`);
    }

    function equalIndexesOrOutOfBounds(arrWithSequenceOfElements, arrCurrentIndexes, movess) {
        let indexOne = Number(arrCurrentIndexes[0]);
        let indexTwo = Number(arrCurrentIndexes[1]);
        let arrLength = Number(arrWithSequenceOfElements.length);
        if (indexOne === indexTwo) {
            arrWithSequenceOfElements.splice(arrLength / 2, 0, `-${movess}a`, `-${movess}a`);
        }
        if (indexOne < 0 || indexOne >= arrLength || indexTwo < 0 || indexTwo >= arrLength) {
            arrWithSequenceOfElements.splice(arrLength / 2, 0, `-${movess}a`, `-${movess}a`);
        }
        return arrWithSequenceOfElements, console.log(`Invalid input! Adding additional elements to the board`);
    }

    function twoMatchingElementsOrNot(arrWithSequenceOfElements, arrCurrentIndexes) {
        let indexOne = Number(arrCurrentIndexes[0]);
        let indexTwo = Number(arrCurrentIndexes[1]);
        let firstElement = arrWithSequenceOfElements[indexOne];
        let secondElement = arrWithSequenceOfElements[indexTwo];

        if (firstElement === secondElement) {
            arrWithSequenceOfElements.splice(Math.min(indexOne, indexTwo), 1);
            arrWithSequenceOfElements.splice(Math.max(indexOne, indexTwo) - 1, 1);
            return arrWithSequenceOfElements, console.log(`Congrats! You have found matching elements - ${firstElement}!`);
        }
        if (firstElement !== secondElement) {
            return arrWithSequenceOfElements, console.log(`Try again!`);
        }
    }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"])
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"])
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"])