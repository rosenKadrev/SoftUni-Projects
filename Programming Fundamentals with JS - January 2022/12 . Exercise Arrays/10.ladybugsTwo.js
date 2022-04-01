function ladybugs(arr) {

    let fieldSize = Array(arr[0]).fill(0);
    let ladybugs = arr[1].split(' ');
    for (let i = 0; i < ladybugs.length; i++) {
        let currentElement = ladybugs[i];
        if (fieldSize[currentElement] === 0) {
            fieldSize[currentElement] = 1;
        }
    }
    let arrComands = arr.splice(2);
    // console.log(arrComands);
    for (let j = 0; j < arrComands.length; j++) {
        let currentComand = arrComands[j].split(' ');
        let startIndex = +currentComand[0];
        let direction = currentComand[1];
        let moveDistance = +currentComand[2];
        // console.log(startIndex + ' ' + direction + ' ' + moveDistance);
        switch (direction) {
            case 'right':
                if (fieldSize[startIndex] === 1) {
                    fieldSize[startIndex] = 0;
                    while (fieldSize[startIndex + moveDistance] !== 0 && startIndex + moveDistance < fieldSize.length) {
                        moveDistance += moveDistance;
                    }
                    if (fieldSize[startIndex + moveDistance] === 0) {
                        fieldSize[startIndex + moveDistance] = 1;
                    }
                }
                break;
            case 'left':
                if (fieldSize[startIndex] === 1) {
                    fieldSize[startIndex] = 0;
                    while (fieldSize[startIndex - moveDistance] !== 0 && startIndex - moveDistance >= 0) {
                        moveDistance += moveDistance;
                    }
                    if (fieldSize[startIndex - moveDistance] === 0) {
                        fieldSize[startIndex - moveDistance] = 1;
                    }
                }
                break;
        }
    }
    console.log(fieldSize.join(' '));
}
ladybugs([3, '0 1', '0 right 1', '2 right 1'])
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])