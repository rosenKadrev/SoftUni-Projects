function smallestNum() {
    let smallestNu = (num1, num2, num3) => Math.min(num1, num2, num3);
    console.log(smallestNu(2, 5, 3));
    console.log(smallestNu(600, 342, 123));
    console.log(smallestNu(25, 21, 4));
    console.log(smallestNu(2, 2, 2));
}
smallestNum()



// function smallestNumm(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else if (num3 < num1 && num3 < num2) {
//         console.log(num3);
//     } else if (num1 == num2 && num2 == num3) {
//         console.log(num1);
//     }
// }
// smallestNumm(2, 5, 3)
// smallestNumm(600, 342, 123)
// smallestNumm(25, 21, 4)
// smallestNumm(2, 2, 2)



// function smallestNummm(num1, num2, num3) {
//     let arr = [];
//     arr.push(num1);
//     arr.push(num2);
//     arr.push(num3);
//     let minNum = Number.MAX_SAFE_INTEGER;

//     for (let i = 0; i < arr.length; i++) {
//         let element = Number(arr[i]);
//         if (minNum > element) {
//             minNum = element;
//         }
//     }
//     console.log(minNum);
// }
// smallestNummm(2, 5, 3)
// smallestNummm(600, 342, 123)
// smallestNummm(25, 21, 4)
// smallestNummm(2, 2, 2)



// function smallestNum(num1, num2, num3) {

//     console.log(Math.min(num1, num2, num3));
// }
// smallestNum(2, 5, 3)
// smallestNum(600, 342, 123)
// smallestNum(25, 21, 4)
// smallestNum(2, 2, 2)