function firstAndLastKNums(arr) {

    let k = arr[0];
    arr.shift();
    let firstPart = arr.slice(0, k);
    let secontPart = arr.slice(arr.length - k);

    console.log(firstPart.join(' '));
    console.log(secontPart.join(' '));
}
firstAndLastKNums([2, 7, 8, 9])
firstAndLastKNums([3, 6, 7, 8, 9])