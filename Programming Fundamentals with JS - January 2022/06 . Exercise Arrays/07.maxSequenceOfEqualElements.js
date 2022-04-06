function maxSequenceOfEqualElements(arr) {

    let maxCounter = Number.MIN_SAFE_INTEGER;
    let maxNum = '';

    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        let num = arr[i] + ' ';
        let currentElement = Number(arr[i]);
        counter++;

        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = Number(arr[j]);
            if (currentElement === nextElement) {
                counter++;
                num += arr[i] + ' ';
            } else {
                break;
            }
        }
        if (maxCounter < counter) {
            maxCounter = counter;
            maxNum = num;
        }
        counter = 0;
    }

    console.log(maxNum);

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])