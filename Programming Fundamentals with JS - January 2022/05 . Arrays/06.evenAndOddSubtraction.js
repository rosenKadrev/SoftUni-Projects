function evenAndOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let currentNum of arr) {
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(evenSum - oddSum);
}