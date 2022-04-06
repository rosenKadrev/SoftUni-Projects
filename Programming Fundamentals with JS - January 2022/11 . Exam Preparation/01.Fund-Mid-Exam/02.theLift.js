function theLift(arr) {

    let peopleForLift = Number(arr.shift());
    let arrWithPeopleInEachWagon = arr.join(' ').split(' ');
    let maxPeopleInOneWagon = 4;

    for (let i = 0; i < arrWithPeopleInEachWagon.length; i++) {
        let currentWagonPeople = arrWithPeopleInEachWagon[i];
        for (let j = 0; j < maxPeopleInOneWagon; j++) {
            if (currentWagonPeople < maxPeopleInOneWagon) {
                if (peopleForLift > 0) {
                    currentWagonPeople++;
                    arrWithPeopleInEachWagon[i]++;
                }
                peopleForLift--;
            }
        }
    }
    if (peopleForLift < 0) {
        console.log(`The lift has empty spots!` + '\n' + `${arrWithPeopleInEachWagon.join(' ')} `);
    } else if (peopleForLift === 0) {
        console.log(arrWithPeopleInEachWagon.join(' '));
    } else {
        console.log(`There isn't enough space! ${peopleForLift} people in a queue!` + '\n' + `${arrWithPeopleInEachWagon.join(' ')} `);
    }
}
theLift(["15", "0 0 0 0 0"])
theLift(["20", "0 2 0"])