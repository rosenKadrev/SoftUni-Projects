function processOddPositions(arr) {

    let arrOddElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            const element = arr[i] * 2;
            arrOddElements.push(element);
        }
    }
    return arrOddElements.reverse();
}
console.log(processOddPositions([10, 15, 20, 25]))
console.log(processOddPositions([3, 0, 10, 4, 7, 3]))



function processOddPositions(arr) {

    const result = arr
        .filter((element, index) => index % 2 != 0)
        .map((a) => a * 2)
        .reverse();
    return result;

}
console.log(processOddPositions([10, 15, 20, 25]))
console.log(processOddPositions([3, 0, 10, 4, 7, 3]))