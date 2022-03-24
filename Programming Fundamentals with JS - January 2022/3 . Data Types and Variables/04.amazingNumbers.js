function amazingNumbers(number) {

    let numberS = number.toString()
    let sum = 0;

    for (let i = 0; i < numberS.length; i++) {
        sum += Number(numberS[i]);
    }

    let result = sum.toString().includes('9');
    let finalResult = result ? `${number} Amazing? True` : `${number} Amazing? False`
    console.log(finalResult);

}
amazingNumbers(1233)
amazingNumbers(999) 