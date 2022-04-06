function tseamAccount(arr) {

    let newArrGames = arr[0].toString().split(' ');
    // console.log(newArrGames);
    arr.shift();
    let arrJ = arr.join(' ')
    let newArrOperations = arrJ.split(' ');
    // console.log(newArrOperations);

    let i = 0;
    while (newArrOperations[i] !== 'Play!') {
        let currentOperation = newArrOperations[i];
        let currentGame = newArrOperations[i + 1];
        if (currentOperation === 'Install') {
            if (newArrGames.includes(currentGame)) {
                i += 2;
                continue;
            } else {
                newArrGames.push(currentGame);
            }
        } else if (currentOperation === 'Uninstall') {
            if (newArrGames.includes(currentGame)) {
                let index = newArrGames.indexOf(currentGame);
                newArrGames.splice(index, 1);
            } else {
                i += 2;
                continue;
            }
        } else if (currentOperation === 'Update') {
            if (newArrGames.includes(currentGame)) {
                let indexOne = newArrGames.indexOf(currentGame);
                newArrGames.splice(indexOne, 1);
                newArrGames.push(currentGame);
            } else {
                i += 2;
                continue;
            }
        } else if (currentOperation === 'Expansion') {
            let indexTwo = currentGame.indexOf('-');
            let newCurrentGame = currentGame.slice(0, indexTwo);
            if (newArrGames.includes(newCurrentGame)) {
                let indexThird = newArrGames.indexOf(newCurrentGame);
                let expansionGame = currentGame.split('-')[0] + ':' + currentGame.split('-')[1];
                console.log(currentGame.split('-'));
                newArrGames.splice(indexThird + 1, 0, expansionGame);
            } else {
                i += 2;
                continue;
            }
        }
        i += 2;
    }
    console.log(newArrGames.join(' '));
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'])