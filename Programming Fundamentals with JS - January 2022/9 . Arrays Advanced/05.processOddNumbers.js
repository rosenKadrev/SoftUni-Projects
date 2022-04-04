function processOddNumbers(arr) {

    let oddNums = arr.filter((el, index) => index % 2 != 0);
    let oddNumsDoubled = oddNums.map(x => x * 2).reverse();
    console.log(oddNumsDoubled.join(' '));
}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])



function processOddNumbers(arr) {

    let newArr = arr
        .filter((element, index) => index % 2 != 0)
        .map(element => element * 2)
        .reverse()
        .join(' ')
    console.log(newArr);

}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])