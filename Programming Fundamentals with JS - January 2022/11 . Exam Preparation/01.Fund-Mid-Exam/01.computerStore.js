function computerStore(arr) {

    let i = 0;
    let total = 0;
    while (arr[i] !== 'regular' && arr[i] !== 'special') {
        let partsPrice = Number(arr[i]);
        if (partsPrice <= 0) {
            console.log('Invalid price!');
            i++;
            continue;
        }
        total += partsPrice;
        i++;
    }
    let taxes = (total * 0.2);
    let totalWithTaxes = (taxes + total);

    if (arr[arr.length - 1] === 'special') {
        totalWithTaxes = totalWithTaxes * 0.9;
    }

    if (total === 0) {
        console.log('Invalid order!');
        return;
    }

    console.log(`Congratulations you've just bought a new computer!` + '\n' +
        `Price without taxes: ${total.toFixed(2)}$` + '\n' +
        `Taxes: ${taxes.toFixed(2)}$` + '\n' +
        '-----------' + '\n' +
        `Total price: ${totalWithTaxes.toFixed(2)}$`
    );
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'])
computerStore(['regular'])