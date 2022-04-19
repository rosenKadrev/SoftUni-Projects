function catalogue(arrWithProducts) {

    let newObj = {};
    arrWithProducts = arrWithProducts.sort((a, b) => a.localeCompare(b));

    for (let element = 0; element < arrWithProducts.length; element++) {
        let current = arrWithProducts[element].split(' : '); // ['Anti-Bug Spray', '15'], ['Apple', '1.25'],['Appricot', '20.4']
        let key = (current[0].charAt(0)); // A
        if (newObj[key]) { // if 'A' exist
            newObj[key][current[0]] = current[1]; // {Anti-Bug Spray: '15', Apple: '1.25'}, {Anti-Bug Spray: '15', Apple: '1.25', Appricot: '20.4'}
        } else { // if 'A' not exist
            newObj[key] = {}; // A:{}
            newObj[key][current[0]] = current[1]; // A:{Anti-Bug Spray: '15'}
        }
        // console.log(newObj[key]);
    }

    for (let key in newObj) {
        console.log(`${key}`)
        for (let keys of Object.keys(newObj[key])) {
            if (key === keys.charAt(0)) {
                console.log(`  ${keys}: ${newObj[key][keys]}`);
            }
        }
    }
}
// catalogue(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59'])
catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])