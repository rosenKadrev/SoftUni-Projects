// function integrandFloat(firstNum, secondNum, thirdNum) {

//     let sum = firstNum + secondNum + thirdNum;
//     let type = '';

//     if (sum % 1 === 0) {
//         type = 'Integer'
//     } else {
//         type = 'Float'
//     }

//     console.log(`${sum} - ${type}`);

// }
// integrandFloat(9, 100, 1.1)
// integrandFloat(100, 200, 303)



function integrandFloat(firstNum, secondNum, thirdNum) {

    let sum = firstNum + secondNum + thirdNum;

    let type = sum % 1 === 0 ? 'Integer' : 'Float';

    console.log(`${sum} - ${type}`);

}
integrandFloat(9, 100, 1.1)
integrandFloat(100, 200, 303)