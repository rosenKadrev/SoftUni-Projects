function largestNumber(numOne, numTwo, numThree) {

    if (numOne > numTwo && numOne > numThree) {
        console.log(`The largest number is ${numOne}.`);
    } else if (numTwo > numOne && numTwo > numThree) {
        console.log(`The largest number is ${numTwo}.`);
    } else if (numThree > numOne && numThree > numTwo) {
        console.log(`The largest number is ${numThree}.`);
    }

}
largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)