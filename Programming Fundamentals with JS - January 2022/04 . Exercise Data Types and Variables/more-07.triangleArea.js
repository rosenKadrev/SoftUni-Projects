function triangleArea(one, two, three) {

    let input = [one, two, three];

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let elementIndex = 0;
    let newArray = [maxNumber];

    for (let i = 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            let currentNumber = Number(input[j]);
            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }
        newArray.push(maxNumber);
        elementIndex = input.indexOf(maxNumber);
        input.splice(elementIndex, 1);
        maxNumber = Number.MIN_SAFE_INTEGER;
    }

    newArray.splice(0, 1);

    let sumOne = newArray[0] + (newArray[1] + newArray[2]);
    let sumTwo = newArray[2] - (newArray[0] - newArray[1]);
    let sumThree = newArray[2] + (newArray[0] - newArray[1]);
    let sumFour = newArray[0] + (newArray[1] - newArray[2]);
    let area = 0.25 * Math.sqrt(sumOne * sumTwo * sumThree * sumFour);

    console.log(area);

}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);



// function triangleArea(one, two, three) {

//     let s = (one + two + three) / 2;
//     let area = Math.sqrt(s * (s - one) * (s - two) * (s - three));
//     console.log(area);

// }
// triangleArea(2, 3.5, 4);
// triangleArea(3, 5.5, 4);