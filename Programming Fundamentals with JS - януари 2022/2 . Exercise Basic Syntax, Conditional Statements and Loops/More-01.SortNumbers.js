// function sortNumbers(one, two, three) {

//     let numArray = [one, two, three];
//     let newArray = numArray.sort((a, b) => a - b).join('\n');
//     console.log(newArray);

// }
// sortNumbers(2, 1, 3)

function sortNumbers(one, two, three) {
    let input = [one, two, three];
    // input.push(one);
    // input.push(two);
    // input.push(three);

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let elementIndex = 0;

    for (let i = 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            let currentNumber = Number(input[j]);
            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }

        console.log(maxNumber);
        elementIndex = input.indexOf(maxNumber);
        input.splice(elementIndex, 1);
        maxNumber = Number.MIN_SAFE_INTEGER;
    }
}
sortNumbers(2, 1, 3)