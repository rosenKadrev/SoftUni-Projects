function wordTracker(arr) {

    let objWords = {};
    let words = arr.shift().split(" ");
    for (let word of words) {
        let currentWord = word;
        objWords[currentWord] = 0;
        for (let repeatWords of arr) {
            let currentRepeatWord = repeatWords;
            if (currentWord === currentRepeatWord) {
                // if (currentRepeatWord in objWords)
                objWords[currentWord] += 1
            }
        }
    }
    let elementsForSortingArr = Object.entries(objWords);
    elementsForSortingArr.sort((a, b) => b[1] - a[1]);
    // console.log(elementsForSortingArr);
    elementsForSortingArr.forEach(word => console.log(`${word[0]} - ${word[1]}`));
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
])