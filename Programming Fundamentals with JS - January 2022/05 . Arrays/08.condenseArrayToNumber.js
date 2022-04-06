function condenseArrayToNumber(arr) {

    if (Number(arr.length) === 1) {
        console.log(`${arr[0]}`);
        return;
    }

    while (Number(arr.length) > 1) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let currentElement = Number(arr[i]);
            let nextElement = Number(arr[i + 1]);
            let sum = currentElement + nextElement;
            newArr.push(sum);
        }
        arr = newArr;
    }
    console.log(arr[0]);
}