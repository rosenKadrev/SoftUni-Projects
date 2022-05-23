function elevPositionElement(arr) {

    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result += arr[i];
            result += ' ';
        }
    }
    console.log(result);

}
elevPositionElement(['20', '30', '40', '50', '60'])
elevPositionElement(['5', '10'])