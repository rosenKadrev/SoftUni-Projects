function thePianist(arr) {

    let objWithPianists = {};
    let inputL = arr.shift();

    for (let i = 0; i < inputL; i++) {
        let [piece, composer, key] = arr[i].split('|');
        objWithPianists[piece] = { composer, key };
    }

    for (let j = inputL; j < arr.length; j++) {
        let currentInfo = arr[j].split('|');
        let currentOperation = currentInfo.shift();
        if (currentOperation === 'Stop') {
            break;
        }
        if (currentOperation === 'Add') {
            let [ifPieceIsExsist, composer, key] = currentInfo;
            if (!objWithPianists.hasOwnProperty(ifPieceIsExsist)) {
                console.log(`${ifPieceIsExsist} by ${composer} in ${key} added to the collection!`);
                objWithPianists[ifPieceIsExsist] = { composer, key };
            } else {
                console.log(`${ifPieceIsExsist} is already in the collection!`);
            }
        } else if (currentOperation === 'Remove') {
            let pieceForRemove = currentInfo[0];
            if (objWithPianists.hasOwnProperty(pieceForRemove)) {
                console.log(`Successfully removed ${pieceForRemove}!`);
                delete objWithPianists[pieceForRemove];
            } else {
                console.log(`Invalid operation! ${pieceForRemove} does not exist in the collection.`);
            }
        } else if (currentOperation === 'ChangeKey') {
            let [pieceForChange, newKey] = currentInfo;
            if (objWithPianists.hasOwnProperty(pieceForChange)) {
                console.log(`Changed the key of ${pieceForChange} to ${newKey}!`);
                objWithPianists[pieceForChange]['key'] = newKey;
            } else {
                console.log(`Invalid operation! ${pieceForChange} does not exist in the collection.`);
            }
        }
    }
    let elementsForSortingArr = Object.entries(objWithPianists);
    // console.log(elementsForSortingArr);
    // elementsForSortingArr.sort((a, b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer));
    for (let iterator of elementsForSortingArr) {
        let obj = iterator[1];
        console.log(`${iterator[0]} -> Composer: ${obj.composer}, Key: ${obj.key}`);
    }
}
// thePianist([
//         '3',
//         'Fur Elise|Beethoven|A Minor',
//         'Moonlight Sonata|Beethoven|C# Minor',
//         'Clair de Lune|Debussy|C# Minor',
//         'Add|Sonata No.2|Chopin|B Minor',
//         'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//         'Add|Fur Elise|Beethoven|C# Minor',
//         'Remove|Clair de Lune',
//         'ChangeKey|Moonlight Sonata|C# Major',
//         'Stop'
//     ])
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])