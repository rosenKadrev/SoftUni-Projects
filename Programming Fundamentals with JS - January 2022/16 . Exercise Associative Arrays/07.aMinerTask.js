function minerTask(arr) {

    let objWithResourceAndQuantity = {};

    for (let index = 0; index < arr.length; index += 2) {
        let resourse = arr[index];
        let quantity = Number(arr[index + 1]);
        if (!objWithResourceAndQuantity.hasOwnProperty(resourse)) {
            objWithResourceAndQuantity[resourse] = quantity;
        } else {
            objWithResourceAndQuantity[resourse] += quantity;
        }
    }
    console.log(objWithResourceAndQuantity);
    for (let key in objWithResourceAndQuantity) {
        console.log(`${key} -> ${objWithResourceAndQuantity[key]}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])