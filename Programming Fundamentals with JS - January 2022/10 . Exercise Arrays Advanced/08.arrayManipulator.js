function arrayManipulator(arrWithElementsForManipulation, arrWithComands) {

    for (let comand = 0; comand < arrWithComands.length; comand++) { // for (let comand of arrWithComands)
        let currentComandArr = arrWithComands[comand].split(' ');

        if (currentComandArr[0] === 'add') { // switch(currentComandArr[0])
            add(currentComandArr, arrWithElementsForManipulation);
        } else if (currentComandArr[0] === 'addMany') {
            addMany(currentComandArr, arrWithElementsForManipulation);
        } else if (currentComandArr[0] === 'contains') {
            contains(currentComandArr, arrWithElementsForManipulation);
        } else if (currentComandArr[0] === 'remove') {
            remove(currentComandArr, arrWithElementsForManipulation);
        } else if (currentComandArr[0] === 'shift') {
            rotateLeft(currentComandArr, arrWithElementsForManipulation);
        } else if (currentComandArr[0] === 'sumPairs') {
            arrWithElementsForManipulation = sumPairs(arrWithElementsForManipulation);
        } else if (currentComandArr[0] === 'print') {
            print(arrWithElementsForManipulation);
        }
    }

    function add(arr, manipulationArr) {
        let index = +Number(arr[1]);
        let element = +Number(arr[2]);
        manipulationArr.splice(index, 0, element);
        return manipulationArr;
    }

    function addMany(arr, manipulationArr) {
        arr.shift();
        let index = Number(arr.shift());
        let numArr = arr.map((Number));
        manipulationArr.splice(index, 0, ...numArr);
        return manipulationArr;
    }

    function contains(arr, manipulationArr) {
        let numContain = +Number(arr[1]);
        let index = Number(manipulationArr.indexOf(numContain));
        return console.log(index);
    }

    function remove(arr, manipulationArr) {
        let index = +Number(arr[1]);
        manipulationArr.splice(index, 1);
        return manipulationArr;
    }

    function rotateLeft(arr, manipulationArr) {
        let rotations = +arr[1];
        for (let j = 0; j < rotations; j++) {
            let element = manipulationArr.shift();
            manipulationArr.push(element);
        }
        return manipulationArr;
    }

    function sumPairs(manipulationArr) {
        let newArr = [];
        for (let index = 0; index < manipulationArr.length; index++) {
            let element = Number(manipulationArr[index++]);
            let nextElement = Number(manipulationArr[index]);
            if (index >= manipulationArr.length) {
                newArr.push(element);
                continue;
            }
            let sum = element + nextElement;
            newArr.push(sum)
        }
        return newArr;
    }

    function print(manipulationArr) {
        return console.log('[ ' + manipulationArr.join(', ') + ' ]');
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);



// let arrNew = [];
// if (num.length % 2 !== 0) {
//     num.push(0);
// }
// for (let i = 0; i < num.length - 1; i += 2) {
//     let sum = num[i] + num[i + 1];
//     arrNew.push(sum)
// }
// num = arrNew;