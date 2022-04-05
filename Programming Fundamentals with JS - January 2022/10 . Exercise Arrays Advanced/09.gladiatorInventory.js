function gladiatorInventory(comands) {

    let inventoryOfPeterArr = comands.shift().split(' ');

    for (let index = 0; index < comands.length; index++) {
        let currentComand = comands[index].split(' ');
        // console.log(currentComand);
        switch (currentComand[0]) {
            case 'Buy':
                buy(inventoryOfPeterArr, currentComand);
                break;
            case 'Trash':
                trash(inventoryOfPeterArr, currentComand);
                break;
            case 'Repair':
                repair(inventoryOfPeterArr, currentComand);
                break;
            case 'Upgrade':
                upgrade(inventoryOfPeterArr, currentComand);
                break;
        }
    }
    // console.log(comands);
    function buy(inventoryOfPeterArr, currentComand) {
        let currentObject = currentComand[1];
        if (inventoryOfPeterArr.includes(currentObject) === false) {
            inventoryOfPeterArr.push(currentObject);
        }
        return inventoryOfPeterArr;
    }

    function trash(inventoryOfPeterArr, currentComand) {
        let currentObject = currentComand[1];
        if (inventoryOfPeterArr.includes(currentObject)) {
            let index = inventoryOfPeterArr.indexOf(currentObject);
            inventoryOfPeterArr.splice(index, 1);
        }
        return inventoryOfPeterArr;
    }

    function repair(inventoryOfPeterArr, currentComand) {
        let currentObject = currentComand[1];
        if (inventoryOfPeterArr.includes(currentObject)) {
            let index = inventoryOfPeterArr.indexOf(currentObject);
            inventoryOfPeterArr.splice(index, 1);
            inventoryOfPeterArr.push(currentObject);
        }
        return inventoryOfPeterArr;
    }

    function upgrade(inventoryOfPeterArr, currentComand) {
        let currentObject = currentComand[1];
        let objectForIncludeIndex = currentObject.indexOf('-');
        let objectForInclude = currentObject.slice(0, objectForIncludeIndex);
        let insertObject = currentObject.replace('-', ':');
        if (inventoryOfPeterArr.includes(objectForInclude)) {
            let index = inventoryOfPeterArr.indexOf(objectForInclude);
            inventoryOfPeterArr.splice(index + 1, 0, insertObject);

        }
        return inventoryOfPeterArr;
    }
    console.log(inventoryOfPeterArr.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'])