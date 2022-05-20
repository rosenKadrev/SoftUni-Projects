function sumOfNumbers(stringOne, stringTwo) {

    let numOne = Number(stringOne);
    let numTwo = Number(stringTwo);
    let sum = 0;

    for (let i = numOne; i <= numTwo; i++) {
        sum += i;
    }
    console.log(sum);

}
sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')