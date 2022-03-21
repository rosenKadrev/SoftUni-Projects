function solve(type, age) {

    if (age >= 0 && age <= 18) {
        switch (type) {
            case 'Weekday':
                console.log(`12$`);
                break;
            case 'Weekend':
                console.log(`15$`);
                break;
            case 'Holiday':
                console.log(`5$`);
        }
    } else if (age > 18 && age <= 64) {
        switch (type) {
            case 'Weekday':
                console.log(`18$`);
                break;
            case 'Weekend':
                console.log(`20$`);
                break;
            case 'Holiday':
                console.log(`12$`);
        }
    } else if (age > 64 && age <= 122) {
        switch (type) {
            case 'Weekday':
                console.log(`12$`);
                break;
            case 'Weekend':
                console.log(`15$`);
                break;
            case 'Holiday':
                console.log(`10$`);
        }
    } else {
        console.log('Error!');
    }
}
solve('Weekday', 42)
solve('Holiday', -12)
solve('Holiday', 15)