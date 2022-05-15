function emojiDetector(arr) {

    let text = arr[0];

    let patternEmoji = /([:]{2}|[*]{2})(?<emojiText>[A-Z]{1}[a-z]{2,})\1/g;
    let patternNum = /\d/g

    let arrWithDigitsMatch = text.match(patternNum);
    let coolThresholdSum = arrWithDigitsMatch.reduce((a, b) => a * b);
    let firstMatchEmoji = patternEmoji.exec(text);
    let counterOfEmojis = 0;
    let arrWithCoolEmojis = [];

    while (firstMatchEmoji !== null) {
        counterOfEmojis++;
        let emoji = firstMatchEmoji[0];
        let textOfEmoji = firstMatchEmoji[2];
        let sumOfTextLetters = 0;

        for (let letter of textOfEmoji) {
            let numOfLetter = letter.charCodeAt(0);
            sumOfTextLetters += numOfLetter;
        }
        if (sumOfTextLetters > coolThresholdSum) {
            arrWithCoolEmojis.push(emoji);
        }
        firstMatchEmoji = patternEmoji.exec(text);
    }

    console.log(`Cool threshold: ${coolThresholdSum}`);
    console.log(`${counterOfEmojis} emojis found in the text. The cool ones are:`);
    arrWithCoolEmojis.forEach(element => console.log(element));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])