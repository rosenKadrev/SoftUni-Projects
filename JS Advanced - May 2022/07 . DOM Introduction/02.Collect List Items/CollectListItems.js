function extractText() {

    let elements = document.querySelectorAll('ul#items li');
    let result = document.querySelector('#result');

    for (const iterator of elements) {
        result.value += iterator.textContent + '\n';
    }

}