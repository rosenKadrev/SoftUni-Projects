function pascalCaseSplitter(text) {

    let forPrint = '';

    for (let i = 0; i < text.length; i++) {
        let currentLetter = text[i];
        let startIndex = i;
        let counter = 1;

        for (let j = i + 1; j < text.length; j++) {
            let nextLetter = text[i + 1];
            if (nextLetter.charCodeAt(0) >= 97 && nextLetter.charCodeAt(0) <= 122) {
                counter++;
                i++;
                if (j === text.length - 1) {
                    let endIndex = startIndex + counter;
                    let print = text.substring(startIndex, endIndex);
                    forPrint += print;
                    continue;
                }
            } else {
                let endIndex = startIndex + counter;
                let print = text.substring(startIndex, endIndex);
                if (j === text.length - 1) {
                    forPrint += print + ', ' + nextLetter;
                    continue;
                }
                forPrint += print + ', ';
                break;
            }
        }
    }
    console.log(forPrint);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')
pascalCaseSplitter('ThisTheDoorR')



function pascalCaseSplitter(text) {

    let words = [];
    let currentWord = text[0];

    for (let index = 1; index < text.length; index++) {
        if (text[index].toUpperCase() !== text[index]) {
            currentWord = currentWord.concat(text[index]);
        } else {
            words.push(currentWord);
            currentWord = text[index];
        }
    }
    words.push(currentWord)
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')
pascalCaseSplitter('ThisTheDoorR')