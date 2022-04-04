function arrayManipulations(arr) {

    let arrForManipulation = arr[0].split(' ');
    arr.shift();
    let arrWithComands = arr

    for (let index = 0; index < arrWithComands.length; index++) {
        let currentComand = arrWithComands[index].split(' ');
        switch (currentComand[0]) {
            case 'Add':
                arrForManipulation.push(currentComand[1]);
                break;
            case 'Remove':
                // for (let i = 0; i < arrForManipulation.length; i++) {
                //     let element = arrForManipulation[i];
                //     if (element === currentComand[1]) {
                //         let indexForCut = Number(arrForManipulation.indexOf(currentComand[1]));
                //         arrForManipulation.splice(indexForCut, 1);
                //     }
                // }
                arrForManipulation = remove(arrForManipulation, currentComand[1]);
                break;
            case 'RemoveAt':
                arrForManipulation.splice(currentComand[1], 1);
                break;
            case 'Insert':
                arrForManipulation.splice(currentComand[2], 0, currentComand[1]);
                break;
        }
    }
    console.log(arrForManipulation.join(' '));

    function remove(arr, num) {
        arr = arr.filter(el => el !== num);
        return arr;
    }
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])