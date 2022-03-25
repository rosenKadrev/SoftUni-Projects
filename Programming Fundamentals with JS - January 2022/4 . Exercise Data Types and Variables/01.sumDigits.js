function sumDigits(input) {

    let inputS = input.toString();
    let sumDigits = 0;

    for (let i = 0; i < inputS.length; i++) {
        let currentDigit = Number(inputS[i]);
        sumDigits += currentDigit;
    }
    console.log(sumDigits);

}
sumDigits(245678)
sumDigits(97561)
sumDigits(543) 