function sumEvenNumbers(inputArr) {

    let evenSum = 0;

    for (let i = 0; i < inputArr.length; i++) {

        let currentNum = Number(inputArr[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        }
    }
    console.log(evenSum);
}