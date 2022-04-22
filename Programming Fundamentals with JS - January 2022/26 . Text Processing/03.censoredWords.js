function censoredWords(text, singleWord) {

    let censored = text.replace(singleWord, repeat(singleWord));
    while (censored.includes(singleWord)) {
        censored = censored.replace(singleWord, repeat(singleWord));
    }
    console.log(censored);

    function repeat(wordOne) {
        let singleWordL = Number(wordOne.length);
        return '*'.repeat(singleWordL);
    }
}
censoredWords('A small sentence with some words', 'small')
censoredWords('Find the hidden word', 'hidden')