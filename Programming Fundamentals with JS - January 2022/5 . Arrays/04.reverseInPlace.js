function reverseAnArrayOfStrings(inputArr) {

    for (let i = 0; i < inputArr.length / 2; i++) {
        let buffer = inputArr[i];
        inputArr[i] = inputArr[inputArr.length - 1 - i];
        inputArr[inputArr.length - 1 - i] = buffer;
    }

    console.log(inputArr.join(' '));

}