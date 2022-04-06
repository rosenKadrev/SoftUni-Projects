function arrayRotation(arr, numberOfRotations) {

    for (let i = 1; i <= numberOfRotations; i++) {
        let currentElement = arr[0];
        arr.shift();;
        arr.push(currentElement);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)