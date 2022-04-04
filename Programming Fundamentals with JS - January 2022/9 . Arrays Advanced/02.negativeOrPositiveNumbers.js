function negativeOrPositive(arr) {

    let numArr = arr.map(i => Number(i));
    let newArr = [];

    for (let index = 0; index < numArr.length; index++) {
        let currentnum = numArr[index];
        if (positive(currentnum)) {
            newArr.push(currentnum);
        } else {
            newArr.unshift(currentnum);
        }

    }

    function positive(number) {
        return number >= 0;
    }
    console.log(newArr.join('\n'));

}
negativeOrPositive(['7', '-2', '8', '9'])
negativeOrPositive(['3', '-2', '0', '-1'])