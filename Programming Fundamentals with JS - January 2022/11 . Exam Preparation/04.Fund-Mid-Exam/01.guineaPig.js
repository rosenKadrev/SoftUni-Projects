function guineaPig(arr) {
    arr = arr.map(Number);
    let quantityFoodInGrams = arr[0] * 1000;
    let quantityHayInGrams = arr[1] * 1000;
    let quantityCoverInGrams = arr[2] * 1000;
    let guineaPigWeightInGrams = arr[3] * 1000;
    let days = 0;
    let boolean = false;

    while (days !== 30) {
        days++;
        quantityFoodInGrams -= 300;
        if (days % 2 === 0) {
            quantityHayInGrams -= quantityFoodInGrams * 0.05;
        }
        if (days % 3 === 0) {
            quantityCoverInGrams -= guineaPigWeightInGrams / 3;
        }
        if (quantityFoodInGrams <= 0 || quantityHayInGrams <= 0 || quantityCoverInGrams <= 0) {
            console.log(`Merry must go to the pet store!`);
            boolean = true;
            break;
        }
    }
    if (!boolean) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFoodInGrams / 1000).toFixed(2)}, Hay: ${(quantityHayInGrams / 1000).toFixed(2)}, Cover: ${(quantityCoverInGrams / 1000).toFixed(2)}.`);
    }
}
guineaPig(["10", "5", "5.2", "1"])
guineaPig(["1", "1.5", "3", "1.5"])
guineaPig(["9", "5", "5.2", "1"])