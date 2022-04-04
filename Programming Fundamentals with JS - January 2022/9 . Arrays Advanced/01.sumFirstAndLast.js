function sumFirstAndLast(arr) {

    let numArr = arr.map(i => Number(i));
    let sum = numArr[0] + numArr[numArr.length - 1];
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])