function sumFirstLast(arr) {

    arr = arr.map(Number);
    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];
    const sumOfElements = firstElement + lastElement;

    return sumOfElements;

}
sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])