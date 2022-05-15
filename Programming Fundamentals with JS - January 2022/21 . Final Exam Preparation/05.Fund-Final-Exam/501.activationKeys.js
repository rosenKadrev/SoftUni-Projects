function activationKeys(arr) {

    let activationKey = arr.shift();

    for (let command of arr) {
        let currentCommand = command.split('>>>');
        let nameCommand = currentCommand[0];

        if (nameCommand === "Generate") {
            break;
        }
        if (nameCommand === 'Contains') {
            let substringContains = currentCommand[1];
            if (activationKey.includes(substringContains)) {
                console.log(`${activationKey} contains ${substringContains}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (nameCommand === 'Flip') {
            let caseUpperOrLower = currentCommand[1];
            let startIndex = Number(currentCommand[2]);
            let endIndex = Number(currentCommand[3]);
            let substringForFlip = activationKey.substring(startIndex, endIndex);
            if (caseUpperOrLower === 'Upper') {
                let substringForFlipForReplaceUpper = substringForFlip.toUpperCase();
                activationKey = activationKey.replace(substringForFlip, substringForFlipForReplaceUpper);
            } else if (caseUpperOrLower === 'Lower') {
                let substringForFlipForReplaceLower = substringForFlip.toLowerCase();
                activationKey = activationKey.replace(substringForFlip, substringForFlipForReplaceLower);
            }
            console.log(activationKey);
        } else if (nameCommand === 'Slice') {
            let startIndexForSlice = Number(currentCommand[1]);
            let endIndexForSlice = Number(currentCommand[2]);
            let substringForSlice = activationKey.substring(startIndexForSlice, endIndexForSlice);
            activationKey = activationKey.replace(substringForSlice, '');
            console.log(activationKey);
        }
    }
    console.log(`Your activation key is: ${activationKey}`);
}
// activationKeys([
//         "abcdefghijklmnopqrstuvwxyz",
//         "Slice>>>2>>>6",
//         "Flip>>>Upper>>>3>>>14",
//         "Flip>>>Lower>>>5>>>7",
//         "Contains>>>def",
//         "Contains>>>deF",
//         "Generate"
//     ])
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
])