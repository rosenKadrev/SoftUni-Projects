function lettersChangeNumbers(text) {

    let textArr = text.split(' ');
    let arrForFinalSum = [];

    for (let iterator of textArr) {

        if (iterator.length > 0) {
            let firstLetter = iterator[0];
            let lastLetter = iterator[iterator.length - 1];
            let number = iterator.substring(1, iterator.length - 1);
            if (firstLetter.charCodeAt(0) >= 65 && firstLetter.charCodeAt(0) <= 90) {
                let possitionInAlphabetUpFirst = Number(firstLetter.charCodeAt(0)) - 64;
                number = number / possitionInAlphabetUpFirst;
            } else if (firstLetter.charCodeAt(0) >= 97 && firstLetter.charCodeAt(0) <= 122) {
                let possitionInAlphabetDownFirst = Number(firstLetter.charCodeAt(0)) - 96;
                number = number * possitionInAlphabetDownFirst;
            }
            if (lastLetter.charCodeAt(0) >= 65 && lastLetter.charCodeAt(0) <= 90) {
                let possitionInAlphabetUpLast = Number(lastLetter.charCodeAt(0)) - 64;
                number -= possitionInAlphabetUpLast;
            } else if (lastLetter.charCodeAt(0) >= 97 && lastLetter.charCodeAt(0) <= 122) {
                let possitionInAlphabetDownLast = Number(lastLetter.charCodeAt(0)) - 96;
                number += possitionInAlphabetDownLast;
            }
            arrForFinalSum.push(number)
        }
    }
    arrForFinalSum = arrForFinalSum.map(Number);
    let sum = arrForFinalSum.reduce((a, b) => a + b);
    console.log(sum.toFixed(2));
}
lettersChangeNumbers('A12b s17G')
lettersChangeNumbers('P34562Z q2576f   H456z')
lettersChangeNumbers('a1A')