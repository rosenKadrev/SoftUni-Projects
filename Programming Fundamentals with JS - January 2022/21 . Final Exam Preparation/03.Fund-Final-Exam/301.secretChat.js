function secretChat(arr) {

    let messageForOperations = arr.shift();

    for (let info of arr) {
        let currentInfo = info.split(':|:');
        let currentComand = currentInfo[0];
        if (currentComand === 'Reveal') {
            break;
        }
        if (currentComand === 'InsertSpace') {
            let indexForInsertSpace = currentInfo[1];
            messageForOperations = messageForOperations.split('');
            messageForOperations.splice(indexForInsertSpace, 0, ' ');
            messageForOperations = messageForOperations.join('');
            console.log(messageForOperations);
        } else if (currentComand === 'Reverse') {
            let substringForReverse = currentInfo[1];
            if (messageForOperations.includes(substringForReverse)) {
                messageForOperations = messageForOperations.replace(substringForReverse, '');
                substringForReverse = substringForReverse.split('').reverse().join('');
                messageForOperations += substringForReverse;
                console.log(messageForOperations);
            } else {
                console.log(`error`);
            }
        } else if (currentComand === 'ChangeAll') {
            let substringForChangeAll = currentInfo[1];
            let replacementForChangeAll = currentInfo[2];
            while (messageForOperations.includes(substringForChangeAll)) {
                messageForOperations = messageForOperations.replace(substringForChangeAll, replacementForChangeAll);
            }
            console.log(messageForOperations);
        }
    }

    console.log(`You have a new text message: ${messageForOperations}`);
}
// secretChat([
//         'heVVodar!gniV',
//         'ChangeAll:|:V:|:l',
//         'Reverse:|:!gnil',
//         'InsertSpace:|:5',
//         'Reveal'
//     ])
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])