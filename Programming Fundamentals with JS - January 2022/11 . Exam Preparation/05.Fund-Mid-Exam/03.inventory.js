function inventory(arrComands) {

    let colectItems = arrComands.shift().split(', '); // ['Iron', 'Wood', 'Sword']
    let i = 0;

    while (arrComands[i] !== 'Craft!') {
        let currentComand = arrComands[i].split(' '); //  ['Collect', '-', 'Gold'],['Drop', '-', 'Wood']
        // console.log(currentComand);
        let includesItem = colectItems.includes(currentComand[2]);
        let index = Number(colectItems.indexOf(currentComand[2]));
        if (currentComand[2] === '-') {
            currentComand[0] = currentComand[0] + ' ' + currentComand[1];
        }
        switch (currentComand[0]) {
            case 'Collect':
                if (!includesItem) {
                    colectItems.push(currentComand[2]);
                }
                break;
            case 'Drop':
                if (includesItem) {
                    colectItems.splice(index, 1);
                }
                break;
            case 'Combine Items':
                combineItems(currentComand, colectItems);
                break;
            case 'Renew':
                if (includesItem) {
                    colectItems.splice(index, 1);
                    colectItems.push(currentComand[2]);
                }
                break;
        }
        i++;
    }
    console.log(colectItems.join(', '));

    function combineItems(currentComandArr, colectItemsArr) {
        let indexForSlice = currentComandArr[3].indexOf(':');
        let oldItem = currentComandArr[3].slice(0, indexForSlice);
        let newItem = currentComandArr[3].slice(indexForSlice + 1);
        let indexOldItem = colectItemsArr.indexOf(oldItem);
        if (colectItemsArr.includes(oldItem)) {
            colectItemsArr.splice(indexOldItem + 1, 0, newItem);
            return colectItemsArr;
        } else {
            return colectItemsArr;
        }
    }
}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!'])