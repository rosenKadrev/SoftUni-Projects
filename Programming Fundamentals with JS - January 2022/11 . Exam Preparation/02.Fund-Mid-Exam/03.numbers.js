function numbers(nums) {

    let arr = nums.split(' ');
    let arrL = arr.length;

    if (arrL === 1) {
        console.log('No');
        return;
    }

    let arrSum = arr.reduce((a, b) => Number(a) + Number(b));
    let avarageSum = arrSum / arrL;
    let result = arr.filter(num => Number(num) > avarageSum);

    if (result.length == 0) {
        console.log('No');
        return;
    }

    result.sort(function(a, b) { return b - a });
    // result.sort((a, b) => b - a);

    if (Number(result.length) > 5) {
        result.splice(5, Number(result.length) - 5);
    }

    let descending = result.join(' ');
    console.log(descending);
}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('5 5')
numbers('-1 -2 -3 -4 -5 -6')