function vacantion(people, type, day) {

    let price = 0;

    if (day === 'Friday') {
        switch (type) {
            case 'Students':
                price = 8.45;
                break;
            case 'Business':
                price = 10.90;
                break;
            case 'Regular':
                price = 15;
                break;
        }

    } else if (day === 'Saturday') {
        switch (type) {
            case 'Students':
                price = 9.80;
                break;
            case 'Business':
                price = 15.60;
                break;
            case 'Regular':
                price = 20;
                break;
        }

    } else if (day === 'Sunday') {
        switch (type) {
            case 'Students':
                price = 10.46;
                break;
            case 'Business':
                price = 16;
                break;
            case 'Regular':
                price = 22.50;
                break;
        }
    }

    if (people >= 30 && type === 'Students') {
        price = price * 0.85 * people;
        console.log('Total price: ' + price.toFixed(2));
        return;
    } else if (people >= 100 && type === 'Business') {
        price = price * people - price * 10;
        console.log('Total price: ' + price.toFixed(2));
        return;
    } else if (people >= 10 && people <= 20 && type === 'Regular') {
        price = price * 0.95 * people;
        console.log('Total price: ' + price.toFixed(2));
        return;
    }

    price = price * people;
    console.log('Total price: ' + price.toFixed(2));
}
vacantion(30, 'Students', 'Sunday')
vacantion(40, 'Regular', 'Saturday')