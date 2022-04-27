function replaceRepeatingChars(text) {

    let word = text;

    for (let i = 0; i < text.length; i++) {
        let currentLetter = text[i];
        let startIndex = i;
        let counter = 1;

        for (let j = i + 1; j < text.length; j++) {
            if (text[j] === currentLetter) {
                counter++;
                i++;
                if (j === text.length - 1) {
                    let endIndex = startIndex + counter;
                    let forReplace = text.substring(startIndex, endIndex)
                    word = word.replace(forReplace, currentLetter)
                    continue;
                }
            } else {
                let endIndex = startIndex + counter;
                let forReplace = text.substring(startIndex, endIndex)
                word = word.replace(forReplace, currentLetter)
                break;
            }
        }
    }
    console.log(word);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')




function replaceRepeatingChars(text) {

    let word = text;
    let unique = '';

    for (let i = 0; i < text.length; i++) {
        let currentLetter = text[i];
        let nextLetter = text[i + 1];

        if (currentLetter != nextLetter) {
            unique += currentLetter;
        }
    }
    console.log(unique);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')