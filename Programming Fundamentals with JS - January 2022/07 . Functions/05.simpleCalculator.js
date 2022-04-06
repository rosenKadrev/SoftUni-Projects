function simpleCalculator(numOne, numTwo, operator) {

    let result = 0;

    switch (operator) {
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            result = divide(numOne, numTwo);
            break;
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
    }
    console.log(result);

    function multiply(numOne, numTwo) {
        return numOne * numTwo;
    }

    function divide(numOne, numTwo) {
        return numOne / numTwo;
    }

    function add(numOne, numTwo) {
        return numOne + numTwo;
    }

    function subtract(numOne, numTwo) {
        return numOne - numTwo;
    }
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')



function simpleCalculatorr(numOne, numTwo, operator) {

    let result = 0;
    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;

    switch (operator) {
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            result = divide(numOne, numTwo);
            break;
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
    }
    console.log(result);
}
simpleCalculatorr(5, 5, 'multiply')
simpleCalculatorr(40, 8, 'divide')
simpleCalculatorr(12, 19, 'add')
simpleCalculatorr(50, 13, 'subtract')