function sortArray(arr, string) {

    if (string == 'asc') {
        asc(arr);
    } else if (string == 'desc') {
        desc(arr);
    }
    return arr;

    function asc(arrWithNums) {
        arrWithNums = arrWithNums.sort((a, b) => a - b);
    }

    function desc(arrWithNums) {
        arrWithNums = arrWithNums.sort((a, b) => b - a);
    }
}
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');



function sortArray(arr, type) {
    if (type == 'asc') {
        arr.sort((a, b) => a - b);
    } else {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');



function sortArray(arr, type) {
    const methods = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }

    arr.sort(methods[type]);
    return arr;
}
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');