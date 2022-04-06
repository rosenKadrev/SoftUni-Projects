function printNthElement(arr) {

    let nThElement = '';

    for (let i = 0; i < arr.length - 1; i += Number(arr[arr.length - 1])) {
        let element = arr[i];
        nThElement += element + ' ';
    }
    console.log(nThElement);
}
printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])