// function calculator(number1, operator, number2) {

//     let input = [number1, operator, number2];
//     let answer = eval(number1 + operator + number2)
//     console.log(answer.toFixed(2));

// }
// calculator(5, '+', 10)
// calculator(25.5, '-', 3)



function calculator(number1, operator, number2) {

    let answer = 0;

    if (operator === '+') {
        answer = number1 + number2;
    } else if (operator === '-') {
        answer = number1 - number2;
    } else if (operator === '/') {
        answer = number1 / number2;
    } else if (operator === '*') {
        answer = number1 * number2;
    }
    console.log(answer.toFixed(2));
}
calculator(5, '+', 10)
calculator(25.5, '-', 3)
