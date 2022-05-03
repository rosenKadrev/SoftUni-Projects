function theImitationGame(arr) {

    let encryptedMessage = arr.shift();

    for (let commad of arr) {
        let currentCommand = commad.split('|');
        if (currentCommand[0] === 'Decode') {
            break;
        }
        if (currentCommand[0] === 'Move') {
            let numberOfMoveLetters = currentCommand[1];
            let moveLetters = encryptedMessage.substring(0, numberOfMoveLetters);
            encryptedMessage = encryptedMessage.replace(moveLetters, '');
            encryptedMessage += moveLetters;
        } else if (currentCommand[0] === 'Insert') {
            let indexForAdd = currentCommand[1];
            let newCharForAdd = currentCommand[2];
            encryptedMessage = encryptedMessage.split('');
            encryptedMessage.splice(indexForAdd, 0, newCharForAdd);
            encryptedMessage = encryptedMessage.join('');
        } else if (currentCommand[0] === 'ChangeAll') {
            let substringForChange = currentCommand[1];
            let replacementText = currentCommand[2];
            for (let i = 0; i < encryptedMessage.length; i++) {
                if (encryptedMessage[i] === substringForChange) {
                    encryptedMessage = encryptedMessage.replace(substringForChange, replacementText);
                }
            }
        }
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])



function theImitationGame(arr) {

    let encryptedMessage = arr.shift();

    for (let commad of arr) {
        let currentCommand = commad.split('|');
        if (currentCommand[0] === 'Decode') {
            break;
        }
        if (currentCommand[0] === 'Move') {
            encryptedMessage = move(currentCommand, encryptedMessage);
        } else if (currentCommand[0] === 'Insert') {
            encryptedMessage = insert(currentCommand, encryptedMessage);
        } else if (currentCommand[0] === 'ChangeAll') {
            encryptedMessage = changeAll(currentCommand, encryptedMessage);
        }
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);

    function move(splitCommand, encryptedMessageForFunc) {
        let numberOfMoveLetters = splitCommand[1];
        let moveLetters = encryptedMessageForFunc.substring(0, numberOfMoveLetters);
        encryptedMessageForFunc = encryptedMessageForFunc.replace(moveLetters, '');
        encryptedMessageForFunc += moveLetters;
        return encryptedMessageForFunc;
    }

    function insert(splitCommand, encryptedMessageForFunc) {
        let indexForAdd = splitCommand[1];
        let newCharForAdd = splitCommand[2];
        encryptedMessageForFunc = encryptedMessageForFunc.split('');
        encryptedMessageForFunc.splice(indexForAdd, 0, newCharForAdd);
        encryptedMessageForFunc = encryptedMessageForFunc.join('');
        return encryptedMessageForFunc;
    }

    function changeAll(splitCommand, encryptedMessageForFunc) {
        let substringForChange = splitCommand[1];
        let replacementText = splitCommand[2];
        for (let i = 0; i < encryptedMessageForFunc.length; i++) {
            if (encryptedMessageForFunc[i] === substringForChange) {
                encryptedMessageForFunc = encryptedMessageForFunc.replace(substringForChange, replacementText);
            }
        }
        return encryptedMessageForFunc;
    }
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])



function theImitationGame(arr) {

    let encryptedMessage = arr.shift();
    let commands = {
        Move,
        Insert,
        ChangeAll
    };

    for (let commad of arr) {
        let currentCommand = commad.split('|');
        if (currentCommand[0] === 'Decode') {
            break;
        }
        let command = commands[currentCommand[0]];
        encryptedMessage = command(currentCommand, encryptedMessage);
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);

    function Move(splitCommand, encryptedMessageForFunc) {
        let numberOfMoveLetters = splitCommand[1];
        let moveLetters = encryptedMessageForFunc.substring(0, numberOfMoveLetters);
        encryptedMessageForFunc = encryptedMessageForFunc.replace(moveLetters, '');
        encryptedMessageForFunc += moveLetters;
        return encryptedMessageForFunc;
    }

    function Insert(splitCommand, encryptedMessageForFunc) {
        let indexForAdd = splitCommand[1];
        let newCharForAdd = splitCommand[2];
        encryptedMessageForFunc = encryptedMessageForFunc.split('');
        encryptedMessageForFunc.splice(indexForAdd, 0, newCharForAdd);
        encryptedMessageForFunc = encryptedMessageForFunc.join('');
        return encryptedMessageForFunc;
    }

    function ChangeAll(splitCommand, encryptedMessageForFunc) {
        let substringForChange = splitCommand[1];
        let replacementText = splitCommand[2];
        for (let i = 0; i < encryptedMessageForFunc.length; i++) {
            if (encryptedMessageForFunc[i] === substringForChange) {
                encryptedMessageForFunc = encryptedMessageForFunc.replace(substringForChange, replacementText);
            }
        }
        return encryptedMessageForFunc;
    }
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])