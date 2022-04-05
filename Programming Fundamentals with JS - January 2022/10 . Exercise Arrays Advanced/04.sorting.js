// function sorting(arrForSorting) {

//     let arrLength = arrForSorting.length;
//     let outputArr = [];
//     let counter = 0;

//     for (let i = 0; i < arrLength; i++) {
//         counter++;
//         if (counter % 2 !== 0) {
//             outputArr.push(Math.max(...arrForSorting));
//             let index = arrForSorting.indexOf(Math.max(...arrForSorting));
//             arrForSorting.splice(index, 1);
//         } else {
//             outputArr.push(Math.min(...arrForSorting));
//             let index = arrForSorting.indexOf(Math.min(...arrForSorting));
//             arrForSorting.splice(index, 1);
//         }
//     }
//     console.log(outputArr.join(' '));
// }
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])



function sorting(arrForSorting) {

    arrForSorting = arrForSorting.sort((a, b) => b - a);
    let newArr = [];
    while (arrForSorting.length > 0) {
        let biggerNum = arrForSorting.shift();
        newArr.push(biggerNum);
        let smallerMun = arrForSorting.pop();
        newArr.push(smallerMun);
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])