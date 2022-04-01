function solve(input) {
    let fieldSize = +(input[0]);
    let bugs = input[1].split(' ').map(el => +(el));
    // console.log(bugs);
    if (input[1] === '') {
        bugs = [];
    }
    let commands = input.slice(2);
    // console.log(commands);
    let field = [];


    for (let i = 0; i < fieldSize; i++) {
        bugs.indexOf(i) !== -1 ? field.push(1) : field.push(0);
        // console.log(bugs.indexOf(i));
    }

    for (let c in commands) {
        let temp = commands[c].split(' ');
        let position = +(temp[0]);
        if (commands[c] === '' || position < 0 || position >= fieldSize || field[position] !== 1) {
            continue;
        }
        let right = 'right' === temp[1];
        let step = +(temp[2]);
        field[position] = 0;

        while (position >= 0 && position < fieldSize) {
            right ? position += step : position -= step;

            if (field[position] === 0) {
                field[position] = 1;
                break;
            }
        }
    }
    console.log(field.join(' '));
}
solve([3, '0 1', '0 right 1', '2 right 1'])
    // solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])