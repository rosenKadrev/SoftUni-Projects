function addAndSubtract(num1, num2, num3) {

    let result = subtract(add(num1, num2), num3);
    console.log(result);

    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function subtract(addResult, thirdNum) {
        return addResult - thirdNum;
    }
}
addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)
addAndSubtract(42, 58, 100)



function addAndSubtractt(num1, num2, num3) {

    let add = (firstNum, secondNum) => firstNum + secondNum;
    let subtract = (addResult, thirdNum) => addResult - thirdNum;

    let result = subtract(add(num1, num2), num3);
    console.log(result);
}
addAndSubtractt(23, 6, 10)
addAndSubtractt(1, 17, 30)
addAndSubtractt(42, 58, 100)