function biggestElement(arr) {

    let biggestElement = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const currentElement = arr[i][j];
            if (currentElement > biggestElement) {
                biggestElement = currentElement;
            }
        }
    }
    return biggestElement;

}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]
])
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
])