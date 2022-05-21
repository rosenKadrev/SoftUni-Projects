function wordsUppercase(words) {

    let result = words.toUpperCase()
        .match(/\w+/g)
        .join(', ');

    console.log(result);

}

wordsUppercase('Hi, how are you?')
wordsUppercase('hello')



function wordsUppercase(words) {

    let arr = [];
    let reg = /\w+/g
    let firstMatch = reg.exec(words);

    while (firstMatch !== null) {
        arr.push(firstMatch[0])
        firstMatch = reg.exec(words);
    }

    arr = arr.map(element => element.toUpperCase());
    console.log(arr.join(', '));

}

wordsUppercase('Hi, how are you?')
wordsUppercase('hello')