function equalArrays(arrOne, arrTwo) {

    let sum = 0;
    let boolean = false;

    for (let i = 0; i < arrOne.length; i++) {
        let currentNum = Number(arrOne[i]);
        let currentElement = i;

        if (currentNum === Number(arrTwo[i])) {
            sum += currentNum;
        } else {
            console.log(`Arrays are not identical. Found difference at ${currentElement} index`);
            boolean = true;
            return;
        }
    }
    if (!boolean) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}