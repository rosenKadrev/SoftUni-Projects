function equalSums(arr) {

    if (Number(arr.length) === 1) {
        console.log(0);
        return;
    }

    let boolean = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += Number(arr[j]);
        }
        let rightSum = 0;
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += Number(arr[k]);
        }
        // console.log(leftSum + ' ' + rightSum);
        if (leftSum === rightSum) {
            console.log(i);
            boolean = true;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (!boolean) {
        console.log('no');
    }
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])