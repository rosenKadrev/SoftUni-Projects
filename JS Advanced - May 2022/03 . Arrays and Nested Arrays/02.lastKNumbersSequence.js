function lastKNumbersSequence(n, k) {

    let arr = [1];
    let sum = 0;

    for (let i = 1; i < n; i++) {
        sum = 0;
        arr.push(0);
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                sum += arr[i - j];
            }
        }
        arr.splice(i, 1, sum);
    }
    return arr

}
lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)