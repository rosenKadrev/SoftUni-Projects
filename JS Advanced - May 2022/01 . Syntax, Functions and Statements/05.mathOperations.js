function mathOperations(numOne, numTwo, string) {

    if (string === '+') {
        console.log(numOne + numTwo);
    } else if (string === '-') {
        console.log(numOne - numTwo);
    } else if (string === '*') {
        console.log(numOne * numTwo);
    } else if (string === '/') {
        console.log(numOne / numTwo);
    } else if (string === '%') {
        console.log(numOne % numTwo);
    } else if (string === '**') {
        console.log(numOne ** numTwo);
    }

}
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')