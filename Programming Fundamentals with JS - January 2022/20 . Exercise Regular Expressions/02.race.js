function race(arr) {

    let namesForCheck = arr.shift().split(', ');
    let objWithSortStore = {};

    for (let iterator of arr) {
        let currentText = iterator;
        if (currentText === 'end of race') {
            break
        }

        let patternLetters = /(?:[A-Za-z])/g;
        let patternNums = /\d/g;
        let name = '';
        let runDistance = 0;

        let firstMatchLetters = patternLetters.exec(currentText);
        while (firstMatchLetters !== null) {
            name += firstMatchLetters[0];
            firstMatchLetters = patternLetters.exec(currentText)
        }

        let firstMatchNums = patternNums.exec(currentText);
        while (firstMatchNums !== null) {
            runDistance += Number(firstMatchNums[0]);
            firstMatchNums = patternNums.exec(currentText)
        }

        if (namesForCheck.includes(name)) {
            if (!objWithSortStore.hasOwnProperty(name)) {
                objWithSortStore[name] = runDistance;
            } else {
                objWithSortStore[name] += runDistance;
            }
        }
    }

    let personsForSortByDistance = Object.entries(objWithSortStore);
    personsForSortByDistance = personsForSortByDistance.sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${personsForSortByDistance[0][0]}`);
    console.log(`2nd place: ${personsForSortByDistance[1][0]}`);
    console.log(`3rd place: ${personsForSortByDistance[2][0]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])
race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
])