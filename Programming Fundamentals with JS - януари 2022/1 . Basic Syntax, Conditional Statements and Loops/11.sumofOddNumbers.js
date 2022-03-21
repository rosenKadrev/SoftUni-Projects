function solve(n) {

    let number = 1;
    let sumCounter = 0;

    for (let i = 1; i <= n; i++) {
        console.log(number);
        sumCounter += number;

        number += 2;

    }
    console.log('Sum: ' + sumCounter);
}
solve(5)
solve(3)