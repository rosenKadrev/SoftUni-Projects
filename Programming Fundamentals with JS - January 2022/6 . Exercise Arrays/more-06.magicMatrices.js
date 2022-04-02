// function magicMatrices(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         let currentSum1 = arr[0].reduce((a, b) => a + b);
//         let currentSum2 = arr[i].reduce((a, b) => a + b);
//         if (currentSum1 != currentSum2) {
//             console.log(false);
//             return;
//         }
//         currentSum2 = 0;

//         for (let j = 0; j < arr[i].length; j++) {
//             let currentElement = Number(arr[j][i]);
//             currentSum2 += currentElement;
//         }
//         if (currentSum1 != currentSum2) {
//             console.log(false);
//             return;
//         }
//         currentSum2 = 0;
//     }
//     console.log(true);

// }
// magicMatrices([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]
// ])
// magicMatrices([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]
// ])
// magicMatrices([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]
// ])



function magicMatrices(arr) {

    let sumRow = arr.map((col => col.reduce((a, b) => a + b)));

    let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));

    let allEqual = array => array.every(v => v === array[0]);

    return allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();

}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
])
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
])