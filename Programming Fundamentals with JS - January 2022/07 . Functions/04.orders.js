function orders(product, quantity) {

    let finalPrice = 0;

    switch (product) {
        case 'coffee':
            finalPrice = 1.50 * quantity;
            break;
        case 'coke':
            finalPrice = 1.40 * quantity;
            break;
        case 'water':
            finalPrice = 1.00 * quantity;
            break;
        case 'snacks':
            finalPrice = 2.00 * quantity;
            break;
    }
    console.log(finalPrice.toFixed(2));
}
orders('water', 5)
orders('coffee', 2)