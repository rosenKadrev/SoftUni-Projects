function distinctArray(arr) {

    let toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index);
    let duplicateElementa = toFindDuplicates(arr);
    console.log(duplicateElementa.join(' '));
}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])



function distinctArray(arr) {

    function toFindDuplicates(array) {
        array = array.filter((item, index) => array.indexOf(item) === index);
        return array;
    }

    let duplicateElementa = toFindDuplicates(arr);
    console.log(duplicateElementa.join(' '));
}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])



function distinctArray(arr) {

    arr = arr.filter((item, index) => arr.indexOf(item) === index);
    console.log(arr.join(' '));
}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])