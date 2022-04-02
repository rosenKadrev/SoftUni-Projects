function mathPower(num, sqrt) {

    let raisedNum = num;

    for (let i = 0; i < sqrt - 1; i++) {
        let element = num;
        raisedNum *= element;
    }
    console.log(raisedNum);
}
mathPower(2, 8)
mathPower(3, 4)



function mathPowerr(num, sqrt) {

    let raisedNum = Math.pow(num, sqrt);
    console.log(raisedNum);
}
mathPowerr(2, 8)
mathPowerr(3, 4)