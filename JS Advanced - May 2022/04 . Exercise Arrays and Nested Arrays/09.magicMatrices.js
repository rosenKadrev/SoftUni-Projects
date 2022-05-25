function magicMatrices(arrWithElements) {

    let arrWithRowAndCols = [];
    let rowL = arrWithElements.length;
    for (let i = 0; i < rowL; i++) {
        const currentRow = arrWithElements[i];
        const rowSum = currentRow.reduce((a, b) => a + b);
        arrWithRowAndCols.push(rowSum)
        let colSum = 0;
        for (let j = 0; j < rowL; j++) {
            const currentCol = arrWithElements[j][i];
            colSum += currentCol;
        }
        arrWithRowAndCols.push(colSum);
    }
    console.log(arrWithRowAndCols.every((element) => element == arrWithRowAndCols[0]));

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