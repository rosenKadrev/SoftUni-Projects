function modernTimesOfHashTag(string) {

    let symbolforFinding = '#';
    let arrWithString = string.split(' ');

    for (let currentWord of arrWithString) {
        let boolean = false;
        if (currentWord.startsWith(symbolforFinding)) {
            let currentWordL = Number(currentWord.length);
            if (currentWordL === 1) {
                continue;
            }
            currentWord = currentWord.slice(1);
            for (let letter of currentWord) {
                if ((letter.charCodeAt(0) >= 0 && letter.charCodeAt(0) < 65) || (letter.charCodeAt(0) > 90 && letter.charCodeAt(0) < 97) || (letter.charCodeAt(0) > 122 && letter.charCodeAt(0) <= 127)) {
                    boolean = true;
                    break;
                }
            }
            if (!boolean) {
                console.log(currentWord);
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
    // modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')


function modernTimesOfHashTag(string) {

    let symbolforFinding = '#';
    let arrWithString = string.split(' ');

    arrWithString = arrWithString
        .filter(word => word.includes(symbolforFinding) && word.length > 1)
        .map((element) => element.slice(1));
    arrWithString.forEach(element => {
        let boolean = false;
        for (let letter of element) {
            if ((letter.charCodeAt(0) >= 0 && letter.charCodeAt(0) < 65) || (letter.charCodeAt(0) > 90 && letter.charCodeAt(0) < 97) || (letter.charCodeAt(0) > 122 && letter.charCodeAt(0) <= 127)) {
                boolean = true;
                return;
            }
        }
        if (!boolean) {
            console.log(element);
        }
    });
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
    // modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')