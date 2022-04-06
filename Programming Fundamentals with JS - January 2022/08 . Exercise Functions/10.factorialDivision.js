function factorialDivision(num1, num2) {

    let divisionOfFactorial = factorial(num1) / factorial(num2);

    console.log(divisionOfFactorial.toFixed(2));

    function factorial(number) {
        let factorialValue = 1;
        for (let i = Number(number); i >= 1; i--) {
            let element = i;
            factorialValue *= element;
        }
        return factorialValue;
    }
}
factorialDivision(5, 2)
factorialDivision(6, 2)