function treasureFinder(arrWithStrings) {

    let arrWithKey = arrWithStrings.shift().split(' ');
    let arrWithKeyLength = Number(arrWithKey.length);
    let newArrWithTypeAndCoordinates = [];

    for (let string of arrWithStrings) {
        let index = 0;
        let newString = '';
        if (string === 'find') {
            break
        }
        for (let letter of string) {
            if (index === arrWithKeyLength) {
                index = 0;
            }
            let letterConvertToAscii = Number(letter.charCodeAt(0));
            let newLetterFromAsciiToAlphabet = String.fromCharCode(letterConvertToAscii - Number(arrWithKey[index]));
            newString += newLetterFromAsciiToAlphabet;
            index++;
        }
        newArrWithTypeAndCoordinates.push(newString);
    }

    for (let iterator of newArrWithTypeAndCoordinates) {
        let startIndex = iterator.indexOf('<');
        let endIndex = iterator.indexOf('>');
        let coordinates = iterator.substring(startIndex + 1, endIndex);
        let type = iterator.split('&')[1];
        console.log(`Found ${type} at ${coordinates}`);
    }
}
treasureFinder([
        '1 2 1 3',
        `ikegfp'jpne)bv=41P83X@`,
        `ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA`,
        'find'
    ])
    // treasureFinder([
    //     '1 4 2 5 3 2 1',
    //     `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    //     `tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC`,
    //     `'stj)>34W68Z@`,
    //     'find'
    // ])