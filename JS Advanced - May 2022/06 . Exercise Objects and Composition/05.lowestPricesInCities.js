function lowestPricesInCities(arrOfStrings) {

    const objWithLowestPrice = {};

    for (let iterator of arrOfStrings) {
        const currentData = iterator.split(' | ');
        const town = currentData[0];
        const productName = currentData[1];
        const price = Number(currentData[2]);

        if (!objWithLowestPrice.hasOwnProperty(productName)) {
            objWithLowestPrice[productName] = { town, price };
        } else {
            let oldPrice = objWithLowestPrice[productName].price;
            let newPrice = price;
            if (oldPrice > newPrice) {
                objWithLowestPrice[productName].price = price;
                objWithLowestPrice[productName].town = town;
            }
        }
    }
    for (const key in objWithLowestPrice) {
        console.log(`${key} -> ${objWithLowestPrice[key].price} (${objWithLowestPrice[key].town})`);
    }

}
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])
lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
])