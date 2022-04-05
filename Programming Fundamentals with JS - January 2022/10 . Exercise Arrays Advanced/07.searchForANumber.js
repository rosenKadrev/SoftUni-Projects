function searchForNumber(arr1, arr2) {

    let cutElements = arr2[0];
    let dellElements = arr2[1];
    let searchNum = arr2[2];
    let arrForManipulation = arr1.splice(0, cutElements);
    arrForManipulation.splice(0, dellElements);
    console.log(`Number ${searchNum} occurs ${findCountOfNumber(arrForManipulation, searchNum)} times.`);

    function findCountOfNumber(arr, num) {
        let counter = 0;
        for (let index = 0; index < arr.length; index++) {
            let currentNum = arr[index];
            if (num === currentNum) {
                counter++;
            }
        }
        return counter;
    }
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5])



function searchForNumber(arr, input) {

    let numberToTakeFromArr = input[0];
    let deletenumbersFromArr = input[1];
    let searchedNumber = input[2];
    let myNewArr = arr.splice(0, numberToTakeFromArr);
    myNewArr = myNewArr.splice(deletenumbersFromArr);

    let counter = 0;
    for (let index = 0; index < myNewArr.length; index++) {
        if (myNewArr[index] === searchedNumber) {
            counter++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5])