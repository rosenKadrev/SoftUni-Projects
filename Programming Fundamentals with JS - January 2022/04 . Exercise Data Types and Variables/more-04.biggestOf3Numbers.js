function biggestOf3Numbers(num1, num2, num3) {

    let input = [num1, num2, num3];
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i <= input.length; i++) {
        let currentNum = Number(input[i]);
        if (currentNum >= maxNum) {
            maxNum = currentNum;
        }
    }
    console.log(maxNum);
}
biggestOf3Numbers(-2, 7, 3)
biggestOf3Numbers(130, 5, 99)
biggestOf3Numbers(43, 43.2, 43.1)
biggestOf3Numbers(2, 2, 2)