function reavealWords(words, text) {

    let arrWithWords = words.split(', ');

    for (let currentWord of arrWithWords) {
        let currentWordL = currentWord.length;
        let wordForFinding = '*'.repeat(currentWordL);
        text = text.replace(wordForFinding, currentWord)
    }
    console.log(text);
}
// reavealWords(
//     'great',
//     'softuni is ***** place for learning new programming languages'
// )
reavealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)