function biggerGHalf(arr) {

    arr.sort(function(a, b) { return a - b });
    const arrL = Number(arr.length);
    const arrHalf = Math.floor(arrL / 2);

    arr.splice(0, 0 + arrHalf);
    return arr;

}
biggerGHalf([4, 7, 2, 5])
biggerGHalf([3, 19, 14, 7, 2, 19, 6])