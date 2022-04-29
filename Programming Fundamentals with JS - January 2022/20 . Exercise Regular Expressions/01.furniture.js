function furniture(arr) {

    let pattern = /[>>]{2}(?<name>[A-Z]{1}[A-Za-z]{1,})[<<]{2}(?<price>(\d*[.])?\d{1,})[!]{1}(?<quantity>\d{1,})/g;
    let firstMatch = pattern.exec(arr);
    let totalMoneySpend = 0;
    let arrWithCitys = [];

    while (firstMatch !== null) {
        let cityName = firstMatch[1];
        let price = firstMatch[2];
        let quantity = firstMatch[4];
        totalMoneySpend += price * quantity;
        arrWithCitys.push(cityName);
        firstMatch = pattern.exec(arr);
    }

    console.log(`Bought furniture:`);
    arrWithCitys.forEach(element => console.log(element));
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
])