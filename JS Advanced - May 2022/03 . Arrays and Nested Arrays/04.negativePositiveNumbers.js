function negativeOrPositiveNumbers(arr) {

    let newArr = [];
    for (let iterator of arr) {
        if (iterator >= 0) {
            newArr.push(iterator)
        } else {
            newArr.unshift(iterator)
        }
    }
    newArr.forEach(element => console.log(element));

}
negativeOrPositiveNumbers([7, -2, 8, 9])
negativeOrPositiveNumbers([3, -2, 0, -1])