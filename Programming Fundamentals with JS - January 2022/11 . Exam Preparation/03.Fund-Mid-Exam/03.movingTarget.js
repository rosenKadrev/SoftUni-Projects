function movingTarget(arrWithShoots) {

    let sequenceOfTargets = arrWithShoots.shift().split(' ').map(Number); // [52, 74, 23, 44, 96, 110]
    let i = 0;

    while (arrWithShoots[i] !== "End") {
        let currentShoot = arrWithShoots[i].split(' '); // ['Shoot', '5', '10'],['Shoot', '1', '80'],['Strike', '2', '1'],['Add', '22', '3']
        switch (currentShoot[0]) {
            case 'Shoot':
                shoot(currentShoot, sequenceOfTargets);
                break;
            case 'Add':
                add(currentShoot, sequenceOfTargets);
                break;
            case 'Strike':
                strike(currentShoot, sequenceOfTargets);
                break;
        }
        i++;
    }
    console.log(sequenceOfTargets.join('|'));

    function shoot(currentShootArr, sequenceOfTargetsArr) {
        let indexCurr = Number(currentShootArr[1]);
        let powerCurr = Number(currentShootArr[2]);

        if (indexCurr >= 0 && indexCurr < sequenceOfTargetsArr.length) {
            sequenceOfTargetsArr[indexCurr] -= powerCurr;
            if (sequenceOfTargetsArr[indexCurr] <= 0) {
                sequenceOfTargetsArr.splice(indexCurr, 1);
            }
        }
        return sequenceOfTargetsArr;
    }

    function add(currentShootArr, sequenceOfTargetsArr) {
        let indexCurr = Number(currentShootArr[1]);
        let valueCurr = Number(currentShootArr[2]);

        if (indexCurr >= 0 && indexCurr < sequenceOfTargetsArr.length) {
            sequenceOfTargetsArr.splice(indexCurr, 0, valueCurr);
            return sequenceOfTargetsArr;
        } else {
            return sequenceOfTargetsArr, console.log('Invalid placement!');
        }
    }

    function strike(currentShootArr, sequenceOfTargetsArr) {
        let indexCurr = Number(currentShootArr[1]);
        let radiusCurr = Number(currentShootArr[2]);
        if (indexCurr - radiusCurr < 0 || indexCurr + radiusCurr > sequenceOfTargetsArr.length) {
            return sequenceOfTargetsArr, console.log('Strike missed!');
        } else {
            sequenceOfTargetsArr.splice(indexCurr - radiusCurr, radiusCurr * 2 + 1);
            return sequenceOfTargetsArr;
        }
    }
}
movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"])
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"])