function houseParty(arrWithComingPeople) {

    let outputArr = [];

    for (let i = 0; i < arrWithComingPeople.length; i++) {
        let arrComands = arrWithComingPeople[i].split(' ');
        let name = arrComands[0];
        arrComands.shift();
        let stringWithComOrNotCome = arrComands.join(' ').toString();

        if (stringWithComOrNotCome === 'is going!') {
            if (outputArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                outputArr.push(name);
            }
        }
        if (stringWithComOrNotCome === 'is not going!') {
            if (outputArr.includes(name)) {
                let index = outputArr.indexOf(name);
                outputArr.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(outputArr.join('\n'));
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])



function houseParty(arrWithComingPeople) {
    let outputArr = [];

    for (let i = 0; i < arrWithComingPeople.length; i++) {
        let arrComands = arrWithComingPeople[i].split(' ');
        let name = arrComands[0];
        arrComands.shift();
        let stringWithComOrNotCome = arrComands.join(' ').toString();
        if (stringWithComOrNotCome === 'is going!') {
            isGoing(outputArr, name, stringWithComOrNotCome)
        }
        if (stringWithComOrNotCome === 'is not going!') {
            isNotGoing(outputArr, name, stringWithComOrNotCome)
        }
    }
    console.log(outputArr.join('\n'));

    function isGoing(arr, names, string) {
        if (string === 'is going!') {
            if (arr.includes(names)) {
                return console.log(`${names} is already in the list!`);
            } else {
                return arr.push(names);
            }
        }

    }

    function isNotGoing(arr, names, string) {
        if (string === 'is not going!') {
            if (arr.includes(names)) {
                let index = arr.indexOf(names);
                arr.splice(index, 1);
            } else {
                console.log(`${names} is not in the list!`);
            }
        }
    }
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])