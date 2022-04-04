function lastKNumbersSequance(n, k) {

    let sequence = Array(n).fill(0);
    sequence.splice(sequence[0], 1, 1);

    for (let index = 1; index < sequence.length; index++) {

        let currentSumK = 0;
        for (let i = index - k; i < index; i++) {
            if (i >= 0) {
                currentSumK += Number(sequence[i]);
            }
        }
        sequence.splice(index, 1, currentSumK);
        currentSumK = 0
    }
    console.log(sequence.join(' '));
}
lastKNumbersSequance(6, 3)
lastKNumbersSequance(8, 2)