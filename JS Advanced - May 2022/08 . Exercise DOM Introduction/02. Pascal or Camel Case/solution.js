function solve() {

    const text = document.getElementById('text').value.toLowerCase();
    const type = document.getElementById('naming-convention').value;

    let arrForResult = [];
    let arrWithWords = text.split(' ');

    if (type == "Camel Case") {
        let firstElement = arrWithWords.shift();
        arrForResult.push(firstElement);

        for (const word of arrWithWords) {
            let currentWord = word.slice(1);
            let firstLetter = word[0].toUpperCase();
            arrForResult.push(firstLetter + currentWord);
        }
        let result = arrForResult.join('');
        document.getElementById('result').textContent = result;

    } else if (type == "Pascal Case") {
        for (const word of arrWithWords) {
            let currentWord = word.slice(1);
            let firstLetter = word[0].toUpperCase();
            arrForResult.push(firstLetter + currentWord);
        }
        let result = arrForResult.join('');
        document.getElementById('result').textContent = result;

    } else {
        document.getElementById('result').textContent = 'Error!'
    }

}