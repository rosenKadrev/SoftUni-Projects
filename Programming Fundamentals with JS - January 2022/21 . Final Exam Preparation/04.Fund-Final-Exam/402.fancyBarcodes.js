function fancyBarcodes(arr) {

    let pattern = /(@{1}#+)(?<matchChar>[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})(@{1}#+)/;
    let patternDigit = /\d/g;
    let numberOfBarcodes = arr.shift();

    for (let i = 0; i < numberOfBarcodes; i++) {
        let currentBarcode = arr[i];
        let boolean = pattern.test(currentBarcode);

        if (!boolean) {
            console.log("Invalid barcode");
        } else {
            let productGroup = currentBarcode.match(patternDigit);
            if (productGroup === null) {
                console.log(`Product group: ${'00'}`);
            } else {
                console.log(`Product group: ${productGroup.join('')}`);
            }
        }
    }
}
fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
])
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
])