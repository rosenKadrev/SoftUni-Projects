function pointsValidation(arr) {

    if (isValid(arr[0], arr[1], 0, 0)) {
        console.log(`{${arr[0]}, ${arr[1]}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${arr[0]}, ${arr[1]}} to {${0}, ${0}} is invalid`);
    }
    if (isValid(arr[2], arr[3], 0, 0)) {
        console.log(`{${arr[2]}, ${arr[3]}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${arr[2]}, ${arr[3]}} to {${0}, ${0}} is invalid`);
    }
    if (isValid(arr[0], arr[1], arr[2], arr[3])) {
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);
    } else {
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`);
    }

    function isValid(x1, y1, x2, y2) {

        let squaredNumber1 = Math.pow(x2 - x1, 2);
        let squaredNumber2 = Math.pow(y2 - y1, 2);
        let result = Math.sqrt(squaredNumber1 + squaredNumber2);

        return Number.isInteger(result);
    }
}
pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])