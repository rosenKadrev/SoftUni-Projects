function charactersInRange(character1, character2) {

    let indexOne = character1.charCodeAt(0);
    let indexTwo = character2.charCodeAt(0);
    let range = '';

    if (indexOne > indexTwo) {
        for (let i = indexTwo + 1; i < indexOne; i++) {
            let element = String.fromCharCode(i);
            range += element + ' ';
        }
    } else if (indexOne < indexTwo) {
        for (let i = indexOne + 1; i < indexTwo; i++) {
            let element = String.fromCharCode(i);
            range += element + ' ';
        }
    }
    console.log(range);
}
charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')



function charactersInRange(character1, character2) {

    let indexOne = Math.min(character1.charCodeAt(0), character2.charCodeAt(0));
    let indexTwo = Math.max(character1.charCodeAt(0), character2.charCodeAt(0));
    let arr = [];

    for (let i = indexOne + 1; i < indexTwo; i++) {
        arr.push(String.fromCharCode(i));
    }
    console.log(arr.join(' '));
}
charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')