function countStringOccurrences(text, sigleWord) {

    let counter = 0;
    let arrText = text.split(' ');

    for (let iterator of arrText) {
        if (iterator === sigleWord) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni')