function asciiSumator(arr) {

    let charOne = arr[0].charCodeAt(0);
    let charTwo = arr[1].charCodeAt(0);
    let stringForManipulation = arr[2];

    let firstConstraint = Math.min(charOne, charTwo);
    let secondConstraint = Math.max(charOne, charTwo);
    let totalSum = 0;

    for (let letter of stringForManipulation) {
        let letterToNumInAscii = Number(letter.charCodeAt(0));

        if (letterToNumInAscii > firstConstraint && letterToNumInAscii < secondConstraint) {
            totalSum += letterToNumInAscii;
        }
    }
    console.log(totalSum);
}
asciiSumator([
    '.',
    '@',
    'dsg12gr5653feee5'
])
asciiSumator([
    '?',
    'E',
    '@ABCEF'
])
asciiSumator([
    'a',
    '1',
    'jfe392$#@j24ui9ne#@$'
])