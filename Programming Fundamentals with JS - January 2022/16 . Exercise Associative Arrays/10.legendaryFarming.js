function legendaryFarming(string) {

    let objWithSortItems = {};
    let objWithSortItemsOther = {};
    let arrWithItems = string.split(' ');

    objWithSortItems['motes'] = 0;
    objWithSortItems['fragments'] = 0;
    objWithSortItems['shards'] = 0;

    for (let i = 0; i < arrWithItems.length; i += 2) {
        let currentPoints = Number(arrWithItems[i]);
        let currentMaterials = arrWithItems[i + 1].toLowerCase();

        if (currentMaterials === 'motes') {
            objWithSortItems['motes'] += currentPoints;

            if (objWithSortItems['motes'] >= 250) {
                objWithSortItems['motes'] -= 250;
                console.log(`Dragonwrath obtained!`);
                break;
            }
        } else if (currentMaterials === 'fragments') {
            objWithSortItems['fragments'] += currentPoints;

            if (objWithSortItems['fragments'] >= 250) {
                objWithSortItems['fragments'] -= 250;
                console.log(`Valanyr obtained!`);
                break;
            }
        } else if (currentMaterials === 'shards') {
            objWithSortItems['shards'] += currentPoints;

            if (objWithSortItems['shards'] >= 250) {
                objWithSortItems['shards'] -= 250;
                console.log(`Shadowmourne obtained!`);
                break;
            }
        } else {
            if (!objWithSortItemsOther[currentMaterials]) {
                objWithSortItemsOther[currentMaterials] = currentPoints;
            } else {
                objWithSortItemsOther[currentMaterials] += currentPoints;
            }
        }
    }

    let elementsForSortingArr = Object.entries(objWithSortItems); // [ [ 'motes', 3 ], [ 'fragments', 5 ], [ 'shards', 5 ] ]
    elementsForSortingArr.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])); //[ [ 'fragments', 5 ], [ 'shards', 5 ], [ 'motes', 3 ] ]
    elementsForSortingArr.forEach(item => console.log(`${item[0]}: ${item[1]}`)); //fragments: 5 '\n' shards: 5 '\n' motes: 3

    let elementsForSortingArrOther = Object.entries(objWithSortItemsOther); //[ [ 'stones', 5 ], [ 'leathers', 6 ] ]
    elementsForSortingArrOther.sort((a, b) => a[0].localeCompare(b[0])); //[ [ 'leathers', 6 ], [ 'stones', 5 ] ]
    elementsForSortingArrOther.forEach(item => console.log(`${item[0]}: ${item[1]}`)); // leathers: 6 '\n' stones: 5
}
// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')