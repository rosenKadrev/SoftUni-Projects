function solve(arr) {
    let field = Array(arr[0]).fill(0);
    console.log(field);
    let ladybugs = arr[1].split(' ');
    // console.log(ladybugs);
    for (let i = 0; i < ladybugs.length; i++) {
        if (field[ladybugs[i]] === 0) {
            field[ladybugs[i]] = 1;
        }
    }
    // console.log(field);
    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(' ');
        // console.log(command);
        let direction = command[1];
        let spot = +command[0];
        let moves = +command[2];
        switch (direction) {
            case 'right':
                if (field[spot] === 1) {
                    field[spot] = 0;
                    while (field[spot + moves] !== 0 && spot + moves < field.length) {
                        moves += moves;
                    }
                    if (field[spot + moves] === 0) {
                        field[spot + moves] = 1;
                    }
                }
                break;
            case 'left':
                if (field[spot] === 1) {
                    field[spot] = 0;
                    while (field[spot - moves] !== 0 && spot - moves >= 0) {
                        moves += moves;
                    }
                    if (field[spot - moves] === 0) {
                        field[spot - moves] = 1;
                    }
                }
                break;
        }
    }
    console.log(field.join(' '));
}
solve([3, '0 1', '0 right 1', '2 right 1'])
    // solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])