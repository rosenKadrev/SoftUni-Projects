// function storeProvision(arrWithStock, arrWithOrderedProducts) {

//     let allProducts = {};

//     arrWithStock.forEach((element, index) => {
//         if (index % 2 == 0) {
//             if (!allProducts[element]) {
//                 allProducts[element] = Number(arrWithStock[index + 1]);
//             } else {
//                 allProducts[element] += Number(arrWithStock[index + 1]);
//             }
//         }
//     });

//     arrWithOrderedProducts.forEach((element, index) => {
//         if (index % 2 == 0) {
//             if (!allProducts[element]) {
//                 allProducts[element] = Number(arrWithOrderedProducts[index + 1]);
//             } else {
//                 allProducts[element] += Number(arrWithOrderedProducts[index + 1]);
//             }
//         }
//     });

//     Object.keys(allProducts)
//         .forEach(product => console.log(`${product} -> ${allProducts[product]}`));
// }
// // storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
// storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])



function storeProvision(arrWithStock, arrWithOrderedProducts) {

    let allProducts = {};

    for (let i = 0; i < arrWithStock.length; i += 2) {

        let currentProduct = arrWithStock[i];
        let currentQuantity = Number(arrWithStock[i + 1]);
        if (!allProducts.hasOwnProperty(currentProduct)) {
            allProducts[currentProduct] = currentQuantity;
        } else {
            allProducts[currentProduct] += currentQuantity;
        }
    }

    for (let j = 0; j < arrWithOrderedProducts.length; j += 2) {

        let currentProduct = arrWithOrderedProducts[j];
        let currentQuantity = Number(arrWithOrderedProducts[j + 1]);
        if (!allProducts.hasOwnProperty(currentProduct)) {
            allProducts[currentProduct] = currentQuantity;
        } else {
            allProducts[currentProduct] += currentQuantity;
        }
    }

    for (let key in allProducts) {
        console.log(`${key} -> ${allProducts[key]}`);
    }
}
// storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])