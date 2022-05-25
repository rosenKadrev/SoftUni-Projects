function extractIncreasingSubsetFromArray(arrWithElements) {

    let arrWithResult = [];
    let biggerNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arrWithElements.length; i++) {
        const currentNum = arrWithElements[i];
        if (biggerNum <= currentNum) {
            arrWithResult.push(currentNum);
            biggerNum = currentNum;
        }
    }
    return arrWithResult;

}
extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
extractIncreasingSubsetFromArray([1, 2, 3, 4])
extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1])



function extractIncreasingSubsetFromArray(arrWithElements) {

    let arrWithResult = [arrWithElements[0]];

    for (let i = 0; i < arrWithElements.length; i++) {
        const currentNum = arrWithElements[i];
        if (arrWithResult[arrWithResult.length - 1] <= currentNum) {
            arrWithResult.push(currentNum);
        }
    }
    return arrWithResult;

}
extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
extractIncreasingSubsetFromArray([1, 2, 3, 4])
extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1])



function extractIncreasingSubsetFromArray(array) {
    let result = array.reduce((arr, current) => {
        if (arr.length) {
            if (current >= arr[arr.length - 1]) {
                arr.push(current);
            }
        } else {
            arr.push(current);
        }
        return arr;
    }, []);
    return result;
}
extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
extractIncreasingSubsetFromArray([1, 2, 3, 4])
extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1])