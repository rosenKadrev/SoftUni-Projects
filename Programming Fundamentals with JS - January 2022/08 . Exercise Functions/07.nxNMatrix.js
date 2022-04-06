function matrix(num) {

    let fullCol = '';

    for (let col = 0; col < num; col++) {
        fullCol += row(num) + '\n';
    }
    console.log(fullCol);

    function row(lengthOfRow) {
        let fullRow = '';
        for (let row = 0; row < lengthOfRow; row++) {
            let currentElement = lengthOfRow;
            fullRow += currentElement + ' ';
        }
        return fullRow;
    }
}
matrix(3)
matrix(7)
matrix(2)