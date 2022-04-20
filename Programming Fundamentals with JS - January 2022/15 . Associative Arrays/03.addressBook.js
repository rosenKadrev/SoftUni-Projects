function addressBook(arr) {

    let objWithAddress = {}; // {Tim: 'Doe Crossing', Bill: 'Ornery Rd', Peter: 'Carlyle Ave'}

    for (let iterator of arr) {
        let currentInfo = iterator.split(':');
        let name = currentInfo[0];
        let address = currentInfo[1];
        objWithAddress[name] = address;
    }
    let elementsForSortingArr = Object.entries(objWithAddress); //[Array(2), Array(2), Array(2)]
    elementsForSortingArr.sort((a, b) => a[0].localeCompare(b[0]));
    // for (let elementArr of elementsForSortingArr) {
    //     console.log(`${elementArr[0]} -> ${elementArr[1]}`);
    // }
    elementsForSortingArr.forEach(product => console.log(`${product[0]} -> ${product[1]}`));
}
// addressBook([
//         'Tim:Doe Crossing',
//         'Bill:Nelson Place',
//         'Peter:Carlyle Ave',
//         'Bill:Ornery Rd'
//     ])
addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
])