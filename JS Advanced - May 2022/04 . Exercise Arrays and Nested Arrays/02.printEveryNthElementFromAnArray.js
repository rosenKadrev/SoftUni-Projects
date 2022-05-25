function printEveryNthElementFromAnArray(arrOfStrings, number) {

    let newArrWithResult = [];
    for (let i = 0; i < arrOfStrings.length; i += number) {
        newArrWithResult.push(arrOfStrings[i]);
    }
    return newArrWithResult;

}
printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2)
printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2)
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6)



function printEveryNthElementFromAnArray(arrOfStrings, step) {

    return arrOfStrings.filter((element, index) => index % step == 0);

}
printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2)
printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2)
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6)