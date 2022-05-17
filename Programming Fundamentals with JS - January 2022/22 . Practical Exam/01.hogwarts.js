function hogwarts(arr) {

    let spellForDeciphered = arr.shift();

    for (let iterator of arr) {
        let currentCommand = iterator.split(' ');
        let nameOfCommand = currentCommand[0];
        if (nameOfCommand === 'Abracadabra') {
            break;
        }
        if (nameOfCommand === 'Abjuration') {
            spellForDeciphered = spellForDeciphered.toUpperCase();
            console.log(spellForDeciphered);
        } else if (nameOfCommand === 'Necromancy') {
            spellForDeciphered = spellForDeciphered.toLowerCase();
            console.log(spellForDeciphered);
        } else if (nameOfCommand === 'Illusion') {
            let indexForIllusion = Number(currentCommand[1]);
            let letterForIllusion = currentCommand[2];
            let splitted = spellForDeciphered.split('');
            if (indexForIllusion >= 0 && indexForIllusion < splitted.length) {
                splitted.splice(indexForIllusion, 1, letterForIllusion);
                spellForDeciphered = splitted.join('');
                console.log("Done!");
            } else {
                console.log("The spell was too weak.");
            }
        } else if (nameOfCommand === 'Divination') {
            let firstSubstring = currentCommand[1];
            let secondSubstring = currentCommand[2];
            if (spellForDeciphered.includes(firstSubstring)) {
                while (spellForDeciphered.includes(firstSubstring)) {
                    spellForDeciphered = spellForDeciphered.replace(firstSubstring, secondSubstring);
                }
                console.log(spellForDeciphered);
            } else {
                continue;
            }
        } else if (nameOfCommand === 'Alteration') {
            let substringForAlteration = currentCommand[1];
            if (spellForDeciphered.includes(substringForAlteration)) {
                spellForDeciphered = spellForDeciphered.replace(substringForAlteration, '');
                console.log(spellForDeciphered);
            } else {
                continue;
            }
        } else {
            console.log("The spell did not work!");
        }
    }
}
hogwarts([
    "A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"
])
hogwarts([
    "TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"
])
hogwarts([
    "SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"
])