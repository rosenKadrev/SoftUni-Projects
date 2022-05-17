function dictionary(arr) {

    let wordsWithDefinitions = arr[0].split(' | ');
    let words = arr[1].split(' | ');
    let command = arr[2];

    let objForSortDictionary = {};
    for (let iterator of wordsWithDefinitions) {
        let current = iterator.split(': ');
        let wordForObj = current[0];
        let definition = current[1];
        if (!objForSortDictionary.hasOwnProperty(wordForObj)) {
            objForSortDictionary[wordForObj] = [definition];
        } else {
            objForSortDictionary[wordForObj].push(definition);
        }
    }
    if (command === "Test") {
        for (let iterator of words) {
            if (objForSortDictionary.hasOwnProperty(iterator)) {
                console.log(`${iterator}:`);
                for (let def of objForSortDictionary[iterator]) {
                    console.log(` -${def}`);
                }
            }
        }
    } else if (command === "Hand Over") {
        let forFinalPrint = Object.keys(objForSortDictionary);
        console.log(forFinalPrint.join(' '));

    }
}
// dictionary([
//         "programmer: an animal, which turns coffee into code | developer: a magician",
//         "fish | domino",
//         "Hand Over"
//     ])
// dictionary([
//         "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
//         "care | kitchen | flower",
//         "Test"
//     ])
dictionary([
    "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"
])