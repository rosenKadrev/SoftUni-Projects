function storage(arr) {

    let map = new Map();

    for (let iterator of arr) {
        let currentProductInfo = iterator.split(' ');
        if (!map.has(currentProductInfo[0])) {
            map.set(currentProductInfo[0], currentProductInfo[1]);
        } else {
            let currentQuantity = Number(map.get(currentProductInfo[0]));
            let newQuantity = currentQuantity += Number(currentProductInfo[1]);
            map.set(currentProductInfo[0], newQuantity);
        }
    }
    console.log(map);
    let sort = Array.from(map.entries());
    sort.forEach(product => console.log(`${product[0]} -> ${product[1]}`));
}
storage([
        'tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40'
    ])
    // storage([
    //     'apple 50',
    //     'apple 61',
    //     'coffee 115',
    //     'coffee 40'
    // ])