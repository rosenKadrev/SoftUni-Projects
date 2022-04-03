function perfectNumber(num) {

    let newArr = pushArr(num);
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    let sumOfDividers = newArr.reduce(reducer)

    if (num === sumOfDividers) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function pushArr(number) {
        let arr = [];

        for (let i = 1; i < number; i++) {
            let element = i;
            if (number % element === 0)
                arr.push(element);
        }
        return arr;
    }
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)