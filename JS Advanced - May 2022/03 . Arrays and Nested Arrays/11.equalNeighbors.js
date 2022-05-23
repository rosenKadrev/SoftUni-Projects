function equalNeighbors(arr) {

    let equalPairs = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const current = arr[i][j];
            let next = Number.MAX_SAFE_INTEGER;
            if (i + 1 < arr.length) {
                next = arr[i + 1][j];
            }
            if (current == next) {
                equalPairs++;
            }
            if (current == arr[i][j + 1]) {
                equalPairs++;
            }
        }
    }
    return equalPairs;

}
equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
])
equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
])