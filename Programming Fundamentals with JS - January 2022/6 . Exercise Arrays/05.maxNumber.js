function maxNumber(arr) {

    let maxNums = '';

    for (let i = 0; i < arr.length - 1; i++) {

        let currentNum = Number(arr[i]);
        let boolean = false;

        for (let j = i + 1; j < arr.length; j++) {
            if (currentNum <= Number(arr[j])) {
                boolean = false;
                break;
            } else {
                boolean = true;
            }
        }
        if (boolean) {
            maxNums += currentNum.toString() + ' ';
            boolean = false;
        }
    }
    console.log(maxNums + arr[arr.length - 1]);
    // console.log(arr[arr.length - 1]);
}
// maxNumber([1, 4, 3, 2])
// maxNumber([14, 24, 3, 19, 15, 17])
// maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])