function sameNumbers(num) {

    let convertNum = num.toString();
    let firstDigit = convertNum[0];
    let arrConvertNum = convertNum.split('');

    for (let i = 1; i < convertNum.length; i++) {
        let currentDigit = convertNum[i];

        if (firstDigit !== currentDigit) {
            console.log('false');
            console.log(arrConvertNum.reduce((a, b) => Number(a) + Number(b)));
            return;
        }
    }
    console.log('true');
    console.log(arrConvertNum.reduce((a, b) => Number(a) + Number(b)));

}
sameNumbers(2222222)
sameNumbers(1234)