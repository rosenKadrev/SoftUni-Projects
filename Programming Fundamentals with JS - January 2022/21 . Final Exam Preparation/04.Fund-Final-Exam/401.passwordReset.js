function passwordReset(arr) {

    let stringForResetPass = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let currentInfoForString = arr[i].split(' ');
        let currentCommand = currentInfoForString[0];

        if (currentCommand === "Done") {
            break;
        }
        if (currentCommand === "TakeOdd") {
            let oddPossitionChars = '';
            stringForResetPass = stringForResetPass.split('');
            for (let j = 0; j < stringForResetPass.length; j++) {
                if (j % 2 !== 0) {
                    oddPossitionChars += stringForResetPass[j];
                }
            }
            stringForResetPass = oddPossitionChars
            console.log(stringForResetPass);
        } else if (currentCommand === "Cut") {
            let indexForCut = Number(currentInfoForString[1]);
            let lengthForCut = Number(currentInfoForString[2]);
            let substringForCut = stringForResetPass.substring(indexForCut, indexForCut + lengthForCut);
            stringForResetPass = stringForResetPass.replace(substringForCut, '');
            console.log(stringForResetPass);
        } else if (currentCommand === "Substitute") {
            let substringForSubstitute = currentInfoForString[1];
            let sunstitute = currentInfoForString[2];
            if (stringForResetPass.includes(substringForSubstitute)) {
                while (stringForResetPass.includes(substringForSubstitute)) {
                    stringForResetPass = stringForResetPass.replace(substringForSubstitute, sunstitute);
                }
                console.log(stringForResetPass);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
    }

    console.log(`Your password is: ${stringForResetPass}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
])