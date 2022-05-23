function diagonalSums(arr) {

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        firstDiagonalSum += arr[i][i];
        secondDiagonalSum += arr[i][arr.length - 1 - i];
    }

    console.log(`${firstDiagonalSum} ${secondDiagonalSum}`);

}
diagonalSums([
    [20, 40],
    [10, 60]
])
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])