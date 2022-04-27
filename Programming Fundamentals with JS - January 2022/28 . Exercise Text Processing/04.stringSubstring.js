function stringSubstring(word, text) {

    let arrText = text.split(' ');

    for (let currentWord of arrText) {
        let currentWordCaseInsensitive = currentWord.toLowerCase();
        if (currentWordCaseInsensitive === word) {
            console.log(currentWordCaseInsensitive);
            return;
        }
    }

    console.log(`${word} not found!`);
}
stringSubstring(
    'javascript',
    'JavaScript is the best programming language'
)
stringSubstring(
    'python',
    'JavaScript is the best programming language'
)