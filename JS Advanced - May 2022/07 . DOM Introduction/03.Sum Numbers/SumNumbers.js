function calc() {

    const firstNumConvert = document.getElementById('num1');
    const firstNum = firstNumConvert.value;

    const secondNumConvert = document.getElementById('num2');
    const secondNum = secondNumConvert.value;

    const resultToConvert = document.getElementById('sum');
    const sumResult = Number(firstNum) + Number(secondNum);
    resultToConvert.value = sumResult

}



// function calc() { 
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     let sum = Number(num1) + Number(num2);
//     document.getElementById('sum').value = sum;
//   }