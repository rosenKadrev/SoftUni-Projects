function passwordGenerator(arr) {

    let wordForReplaceLetters = arr[2];
    let wordForReplaceLettersLength = Number(wordForReplaceLetters.length);

    let concatenateStrings = arr[0] + arr[1];
    let concatenateStringsArr = concatenateStrings.split('');
    let counter = 0;

    for (let letter of concatenateStringsArr) {

        if (letter === 'a' || letter === 'e' || letter === 'o' || letter === 'i' || letter === 'u') {
            if (counter === wordForReplaceLettersLength) {
                counter = 0;
            }
            let index = concatenateStringsArr.indexOf(letter);
            let letterForReplaceUpper = wordForReplaceLetters[counter].toUpperCase();
            concatenateStringsArr.splice(index, 1, letterForReplaceUpper);
            counter++;
        }
    }

    let forPrintPass = concatenateStringsArr.reverse().join('');
    console.log(`Your generated password is ${forPrintPass}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
])
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
])
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
])