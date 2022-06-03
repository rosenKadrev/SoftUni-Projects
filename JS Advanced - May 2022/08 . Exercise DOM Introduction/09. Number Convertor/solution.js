function solve() {

    document.getElementsByTagName('button')[0].addEventListener('click', onClick);

    let input = document.getElementById('input');
    let result = document.getElementById('result');
    let selectMenuTo = document.getElementById('selectMenuTo');

    // let childOneBinary = document.getElementById('selectMenuTo').children[0];
    // childOneBinary.textContent = 'Binary';
    // childOneBinary.value = 'binary';

    let childOneBinary = document.createElement('option');
    childOneBinary.textContent = 'Binary';
    childOneBinary.value = 'binary';

    let childTwoHexadecimal = document.createElement('option');
    childTwoHexadecimal.textContent = 'Hexadecimal';
    childTwoHexadecimal.value = 'hexadecimal';

    selectMenuTo.appendChild(childOneBinary);
    selectMenuTo.appendChild(childTwoHexadecimal)

    function onClick(event) {
        if (selectMenuTo.value == 'binary') {
            result.value = Number(input.value).toString(2);
        } else if (selectMenuTo.value == 'hexadecimal') {
            result.value = Number(input.value).toString(16).toLocaleUpperCase();
        }
    }

}