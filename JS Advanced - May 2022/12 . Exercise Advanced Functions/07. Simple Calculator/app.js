function calculator() {

    let num1 = undefined;
    let num2 = undefined;
    let result = undefined;

    return {
        init,
        add,
        subtract
    };

    function init(fOne, fTwo, fResult) {
        num1 = document.querySelector(fOne);
        num2 = document.querySelector(fTwo);
        result = document.querySelector(fResult);
    }

    function add() {
        result.value = Number(num1.value) + Number(num2.value);
    }

    function subtract() {
        result.value = Number(num1.value) - Number(num2.value);
    }

}