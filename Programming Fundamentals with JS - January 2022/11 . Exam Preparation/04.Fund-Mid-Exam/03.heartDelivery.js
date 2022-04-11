function heartDelivery(arrComands) {

    let arrWithValentinesHouses = arrComands.shift().split('@').map(Number); // [10, 10, 10, 2]
    let i = 0;
    let lastPositionIndex = 0;
    let houseCount = Number(arrWithValentinesHouses.length);

    while (arrComands[i] !== "Love!") {
        let currentComand = arrComands[i].split(' '); // ['Jump', '1'], ['Jump', '2']
        let cupidCurrentJumpLength = Number(currentComand[1]); // 1, 2
        lastPositionIndex += cupidCurrentJumpLength; // 1

        if (lastPositionIndex >= arrWithValentinesHouses.length) {
            lastPositionIndex = 0;
        }
        if (arrWithValentinesHouses[lastPositionIndex] !== 0) {
            arrWithValentinesHouses[lastPositionIndex] -= 2;
            if (arrWithValentinesHouses[lastPositionIndex] === 0) {
                console.log(`Place ${lastPositionIndex} has Valentine's day.`);
                houseCount--;
            }
        } else {
            console.log(`Place ${lastPositionIndex} already had Valentine's day.`);
        }
        i++;
    }
    let sumArr = arrWithValentinesHouses.reduce((a, b) => a + b);
    if (sumArr === 0) {
        console.log(`Cupid's last position was ${lastPositionIndex}.` + '\n' + 'Mission was successful.');
    } else {
        console.log(`Cupid's last position was ${lastPositionIndex}.` + '\n' + `Cupid has failed ${houseCount} places.`);
    }
}
// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"])
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"])