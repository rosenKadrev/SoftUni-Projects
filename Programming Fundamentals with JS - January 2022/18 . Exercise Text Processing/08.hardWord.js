function hardWords(arr) {

    let textWithWords = arr[0];
    let textWithArrWords = arr[0].split(' ');
    let words = arr[1];

    for (let word of textWithArrWords) {
        if (word.includes('_')) {
            let counter = 0;
            for (let letter of word) {
                if (letter === '_') {
                    counter++;
                }
            }
            for (let wordForReplace of words) {
                let wordForReplaceLength = Number(wordForReplace.length);
                if (wordForReplaceLength === counter) {
                    let underscoreForReplace = '_'.repeat(counter);
                    textWithWords = textWithWords.replace(underscoreForReplace, wordForReplace);
                }
            }
        }
    }
    console.log(textWithWords);
}
hardWords([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
])