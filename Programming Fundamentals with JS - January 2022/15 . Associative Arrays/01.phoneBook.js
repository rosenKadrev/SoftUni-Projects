function phoneBook(arr) {

    let objWithPhoneBook = {};

    for (let element of arr) {
        let currentInfo = element.split(' ');
        let name = currentInfo[0];
        let phone = currentInfo[1];
        objWithPhoneBook[name] = phone;
    }
    for (let key in objWithPhoneBook) {
        console.log(`${key} -> ${objWithPhoneBook[key]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])
phoneBook([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
])