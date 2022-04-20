function wordoccurrences(arr) {

    let objWithWords = {};

    for (let word of arr) {
        let currentWord = word;
        let count = 1;
        if (!objWithWords[currentWord]) {
            objWithWords[currentWord] = count;
        } else {
            objWithWords[currentWord] += count;
        }
    }
    let elementsForSortingArr = Object.entries(objWithWords);
    elementsForSortingArr.sort((a, b) => b[1] - a[1]);

    elementsForSortingArr.forEach(word => console.log(`${word[0]} -> ${word[1]} times`));
}
// wordoccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
wordoccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])