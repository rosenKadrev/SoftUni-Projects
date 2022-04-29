function softUniBarIncome(arr) {

    let globalPattern = /\%[A-Z][a-z]+\%[^\|\$\%\.]*?\<\w+\>[^\|\$\%\.]*?\|[0-9]+\|[\w\-]*?[0-9.]+[0-9](\$)/g;
    let totalIncome = 0;

    let firstMatch = globalPattern.exec(arr);
    while (firstMatch !== null) {
        let stringForProcessing = firstMatch[0];

        let patternNameCustomer = /(?<=%)\w+(?=%)/g;
        let patternNameProduct = /(?<=<)\w+(?=>)/g;
        let patternProductCount = /(?<=\|)\d+(?=\|)/g;
        let patternProductPrice = /(?<price>(\d*[.])?\d{1,})(\${1})/g;

        let firstMatchNameCustomer = patternNameCustomer.exec(stringForProcessing);
        let firstMatchNameProduct = patternNameProduct.exec(stringForProcessing);
        let firstMatchProductCount = patternProductCount.exec(stringForProcessing);
        let firstMatchProductPrice = patternProductPrice.exec(stringForProcessing);

        console.log(`${firstMatchNameCustomer[0]}: ${firstMatchNameProduct[0]} - ${(Number(firstMatchProductCount[0]) * Number(firstMatchProductPrice[1])).toFixed(2)}`);
        totalIncome += Number(firstMatchProductCount[0]) * Number(firstMatchProductPrice[1])
        firstMatch = globalPattern.exec(arr);
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])





function softUniBarIncome(input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
    let total = 0;
    while ((valid = pattern.exec(input)) != null) {
        let customer = valid.groups['customer'];
        let product = valid.groups['product'];
        let count = valid.groups['count'];
        let price = valid.groups['price'];
        total += count * price;
        console.log(`${customer}: ${product} - ${(count*price).toFixed(2)}`);
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|00.0$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])