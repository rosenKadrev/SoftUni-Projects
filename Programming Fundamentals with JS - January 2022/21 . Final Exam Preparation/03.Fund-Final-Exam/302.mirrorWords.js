function mirrorWords(arr) {

    let pattern = /(@|#)(?<wordOne>[A-Za-z]{3,})\1{2}?(?<wordTwo>[A-Za-z]{3,})\1?/g;

    let mirrorWords = [];
    let validPairs = 0;

    let firstMatch = pattern.exec(arr);
    if (firstMatch === null) {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
        return;
    }
    while (firstMatch !== null) {
        validPairs++;
        let firstWord = firstMatch[2];
        let secondWord = firstMatch[3];
        if (firstWord.length === secondWord.length) {
            let boolean = false;
            for (let i = 0; i < firstWord.length; i++) {
                let currentLetterFirstWord = firstWord[i];
                let currentLetterSecondWord = secondWord[firstWord.length - 1 - i];
                if (currentLetterFirstWord !== currentLetterSecondWord) {
                    boolean = true;
                    break;
                }
            }
            if (!boolean) {
                mirrorWords.push(firstWord);
                mirrorWords.push(secondWord);
            }
        }
        firstMatch = pattern.exec(arr);
    }

    let mirrorString = '';
    console.log(`${validPairs} word pairs found!`);
    if (mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        for (let j = 0; j < mirrorWords.length; j += 2) {
            if (j === (mirrorWords.length - 2)) {
                mirrorString += `${mirrorWords[j]} <=> ${mirrorWords[j+1]}`;
            } else {
                mirrorString += `${mirrorWords[j]} <=> ${mirrorWords[j+1]}` + ', ';
            }
        }
        console.log(mirrorString);
    } else if (mirrorWords.length === 0)
        console.log(`No mirror words!`);
}
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])



function mirrorWords(input) {

    let text = input[0];
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;

    let match = pattern.exec(text);
    let result = [];
    let count = 0;

    while (match != null) {
        count++;
        let word1 = match[2];
        let word2 = match[3];
        let reversed = word2.split('').reverse().join('');
        if (word1 == reversed) {
            result.push(`${word1} <=> ${word2}`);
        }
        match = pattern.exec(text);
    }

    if (count == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${count} word pairs found!`);
    }

    if (result.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
    }
}
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])