function greatestCommonDivisor(numOne, numTwo) {

    let maxNumOfInput = Math.max(numOne, numTwo);
    let maxNum = 0;

    for (let i = 1; i < maxNumOfInput; i++) {
        if (numOne % i === 0 && numTwo % i === 0) {
            maxNum = i;
        }
    }
    console.log(maxNum);

}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)