function partyTime(arrWithPersons) {

    let objWithReservationList = {};
    objWithReservationList['VIP'] = [];
    objWithReservationList['regular'] = [];

    let index = arrWithPersons.indexOf('PARTY');
    let arrWithReservations = arrWithPersons.slice(0, index);
    let arrWithComingPeople = arrWithPersons.slice(index + 1, arrWithPersons.length);

    for (let person of arrWithReservations) {
        let currentPerson = person;
        let VipOrNot = currentPerson[0];

        if (VipOrNot >= 0 && VipOrNot <= 9) {
            objWithReservationList['VIP'].push(currentPerson);
        } else {
            objWithReservationList['regular'].push(currentPerson);
        }
    }

    for (let person of arrWithComingPeople) {
        let currentComePerson = person;

        if (objWithReservationList['VIP'].includes(currentComePerson)) {
            let indexOne = objWithReservationList['VIP'].indexOf(currentComePerson);
            objWithReservationList['VIP'].splice(indexOne, 1);
        } else if (objWithReservationList['regular'].includes(currentComePerson)) {
            let indexTwo = objWithReservationList['regular'].indexOf(currentComePerson);
            objWithReservationList['regular'].splice(indexTwo, 1);
        }
    }
    let count = Number(objWithReservationList['VIP'].length) + Number(objWithReservationList['regular'].length);
    console.log(count);
    for (let key in objWithReservationList) {
        for (let value of objWithReservationList[key]) {
            console.log(value);
        }
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])

function partyTime(arrWithPersons) {

    let objWithReservationList = {};
    objWithReservationList['VIP'] = [];
    objWithReservationList['regular'] = [];

    let index = arrWithPersons.indexOf('PARTY');
    let arrWithReservations = arrWithPersons.slice(0, index);
    let arrWithComingPeople = arrWithPersons.slice(index + 1, arrWithPersons.length);

    for (let person of arrWithReservations) {
        let currentPerson = person;
        let VipOrNot = currentPerson[0];

        if (VipOrNot >= 0 && VipOrNot <= 9) {
            objWithReservationList['VIP'].push(currentPerson);
        } else {
            objWithReservationList['regular'].push(currentPerson);

        }
    }

    let allPeople = [
        ...objWithReservationList['VIP'], ...objWithReservationList["regular"]
    ]
    for (let person of arrWithComingPeople) {
        let currentComePerson = person;
        if (allPeople.includes(currentComePerson)) {
            let indexOne = allPeople.indexOf(currentComePerson);
            allPeople.splice(indexOne, 1);
        }
    }
    console.log(allPeople.length);
    for (let people of allPeople) {
        console.log(people);
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])