// function singCheck(num1, num2, num3) {

//     let newArr = [];
//     newArr.push(num1);
//     newArr.push(num2);
//     newArr.push(num3);
//     let counter = 0;

//     for (let i = 0; i < newArr.length; i++) {
//         let element = Number(newArr[i]);
//         if (element < 0) {
//             counter++;
//         }
//     }
//     if (counter % 2 === 0) {
//         console.log('Positive');
//     } else {
//         console.log('Negative');
//     }
// }
// singCheck(5, 12, -15)
// singCheck(-6, -12, 14)
// singCheck(-1, -2, -3)
// singCheck(-5, 1, 1)



function singCheckk(num1, num2, num3) {

    let totalNegative = 0;

    if (isNegative(num1)) {
        totalNegative++;
    }
    if (isNegative(num2)) {
        totalNegative++;
    }
    if (isNegative(num3)) {
        totalNegative++;
    }

    if (totalNegative % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

    function isNegative(number) {
        return number < 0;
    }
}
singCheckk(5, 12, -15)
singCheckk(-6, -12, 14)
singCheckk(-1, -2, -3)
singCheckk(-5, 1, 1)