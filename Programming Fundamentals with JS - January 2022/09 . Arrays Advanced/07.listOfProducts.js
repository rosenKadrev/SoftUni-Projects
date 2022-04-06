function listOfProducts(arr) {

    arr.sort()
    let newArr = arr.map((element, newChar) => ((newChar + 1) + '.') + element);
    console.log(newArr.join('\n'));
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])



function listOfProducts(arr) {

    let sortArr = arr.sort()
    for (let index = 0; index < sortArr.length; index++) {
        console.log(`${index + 1}.${sortArr[index]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])