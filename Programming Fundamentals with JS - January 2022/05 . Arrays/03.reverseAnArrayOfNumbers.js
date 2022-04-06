function reverseAnArrayOfnumbers(n, inputArr) {

    let arr = [];
    let reverseArr = '';

    for (let i = 0; i < n; i++) {
        let currentElement = inputArr[i];
        arr.push(currentElement);
    }
    for (let j = arr.length - 1; j >= 0; j--) {
        let currentNum = arr[j];
        reverseArr += currentNum + ' ';
    }

    console.log(reverseArr);

}