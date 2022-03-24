function specialNumbers(n) {

    let sumOfDigits = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = i
        let currentNumS = currentNum.toString();

        for (let j = 0; j < currentNumS.length; j++) {
            sumOfDigits += Number(currentNumS[j]);
        }
        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }
        sumOfDigits = 0
    }
}
// specialNumbers(15)
specialNumbers(20)

