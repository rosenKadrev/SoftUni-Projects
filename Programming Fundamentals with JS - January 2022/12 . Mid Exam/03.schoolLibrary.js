function schoolLibrary(arrComands) {

    let arrWithBooks = arrComands.shift().split('&'); // ['Don Quixote', 'The Great Gatsby', 'Moby Dick']
    let i = 0;

    while (arrComands[i] !== "Done") {

        let currentComand = arrComands[i].split('|'); // ['Add Book ', ' Ulysses'],['Take Book ', ' Don Quixote'],['Insert Book ', ' Alice's Adventures in Wonderland']
        let currentAction = currentComand[0].slice(0, -1); // 'Add Book','Take Book'

        switch (currentAction) {
            case 'Add Book':
                let currentBook = currentComand[1].slice(1);
                if (!arrWithBooks.includes(currentBook)) {
                    arrWithBooks.unshift(currentBook);
                }
                break;
            case 'Take Book':
                let currentBook1 = currentComand[1].slice(1);
                if (arrWithBooks.includes(currentBook1)) {
                    let index = arrWithBooks.indexOf(currentBook1);
                    arrWithBooks.splice(index, 1);
                }
                break;
            case 'Swap Books':
                let bookOne = currentComand[1].trim();
                let bookTwo = currentComand[2].slice(1);
                if (arrWithBooks.includes(bookOne) && arrWithBooks.includes(bookTwo)) {
                    let indexone = arrWithBooks.indexOf(bookOne);
                    let indexTwo = arrWithBooks.indexOf(bookTwo);
                    arrWithBooks[indexone] = bookTwo;
                    arrWithBooks[indexTwo] = bookOne;
                }
                break;
            case 'Insert Book':
                let currentBook2 = currentComand[1].slice(1);
                if (!arrWithBooks.includes(currentBook2)) {
                    arrWithBooks.push(currentBook2);
                }
                break;
            case 'Check Book':
                let index = Number(currentComand[1].slice(1));
                if (index >= 0 && index < arrWithBooks.length) {
                    console.log(arrWithBooks[index]);
                }
                break;
        }
        i++;
    }
    console.log(arrWithBooks.join(', '));
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick", "Add Book | Ulysses", "Take Book | Don Quixote", "Insert Book | Alice's Adventures in Wonderland", "Done"])
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger", "Add Book | Catch-22", "Swap Books | Anna Karenina | Catch-22", "Take Book | David Copperfield", "Done"])
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary", "Check Book | 2", "Swap Books | Don Quixote | Ulysses", "Done"])