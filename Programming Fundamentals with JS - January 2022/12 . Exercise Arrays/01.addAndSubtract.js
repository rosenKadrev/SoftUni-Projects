function addAndSubtract(arr) {

    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        oldSum += Number(arr[i]);
        if (Number(arr[i]) % 2 === 0) {
            arr[i] = Number(arr[i]) + Number(i);
        } else {
            arr[i] = Number(arr[i]) - Number(i);
        }
        newSum += Number(arr[i]);
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])