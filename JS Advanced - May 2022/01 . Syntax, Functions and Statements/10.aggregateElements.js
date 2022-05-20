function aggregateElements(arr) {

    let sum = arr.reduce((a, b) => a + b);
    console.log(sum);

    let sumOne = (arr.map((a) => 1 / a)).reduce((a, b) => a + b);
    console.log(sumOne);

    let concatenate = arr.join('');
    console.log(concatenate);

}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])