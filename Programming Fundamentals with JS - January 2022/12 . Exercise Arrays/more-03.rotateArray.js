function rotateArray(arr) {

    let numberOfRotations = Number(arr[arr.length - 1]);
    arr.pop();
    let arrL = arr.length

    for (let i = 1; i <= numberOfRotations; i++) {
        let currentLast = arr[arrL - 1];
        arr.pop();
        arr.unshift(currentLast);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])