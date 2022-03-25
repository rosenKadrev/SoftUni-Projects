function primeNumberChecker(num) {

    if ((num % 2 === 0 || num % 3 === 0) && (num !== 2 || num !== 3)) {
        console.log('false');
    } else {
        console.log('true');
    }
}
primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)