function storeCatalogue(arrOfStrings) {

    const objForCatalog = {};

    for (const iterator of arrOfStrings) {

        const currentData = iterator.split(' : ');
        const productName = currentData[0];
        const productPrice = Number(currentData[1]);
        const productFirstLetter = productName[0];

        if (!objForCatalog.hasOwnProperty(productFirstLetter)) {
            objForCatalog[productFirstLetter] = {
                [productName]: productPrice
            }
        } else {
            objForCatalog[productFirstLetter][productName] = productPrice;
        }
    }
    let firstLettersForSort = Object.keys(objForCatalog).sort((a, b) => a.localeCompare(b));

    for (const letter of firstLettersForSort) {
        console.log(letter);
        let productNamesForSort = Object.keys(objForCatalog[letter]).sort((a, b) => a.localeCompare(b));
        for (const name of productNamesForSort) {
            console.log(`  ${name}: ${objForCatalog[letter][name]}`);
        }
    }

}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'

])