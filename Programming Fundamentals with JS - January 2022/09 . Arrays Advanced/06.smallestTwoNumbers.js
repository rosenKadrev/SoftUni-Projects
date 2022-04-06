function smallestTwoNums(arr) {

    let min = Math.min(...arr).toString() + ' ';
    let index = arr.indexOf(Math.min(...arr));

    arr.splice(index, 1);
    min += Math.min(...arr);
    console.log(min);
}
smallestTwoNums([30, 15, 50, 5])
smallestTwoNums([3, 0, 10, 4, 7, 3])



function smallestTwoNums(arr) {

    arr.sort((a, b) => a - b);
    let minTwoArr = arr.slice(0, 2);
    console.log(minTwoArr.join(' '));
}
smallestTwoNums([30, 15, 50, 5])
smallestTwoNums([3, 0, 10, 4, 7, 3])