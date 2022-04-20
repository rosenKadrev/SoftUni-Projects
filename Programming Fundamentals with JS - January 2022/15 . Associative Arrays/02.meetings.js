function meetings(arr) {

    let obj = {};

    for (let iterator of arr) {
        let currentInfo = iterator.split(' ');
        let dayOfWeek = currentInfo[0];
        let name = currentInfo[1];
        if (!obj[dayOfWeek]) {
            console.log(`Scheduled for ${dayOfWeek}`);
            obj[dayOfWeek] = name;
        } else {
            console.log(`Conflict on ${dayOfWeek}!`);
        }
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
meetings([
        'Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'
    ])
    // meetings([
    //     'Friday Bob',
    //     'Saturday Ted',
    //     'Monday Bill',
    //     'Monday John',
    //     'Wednesday George'
    // ])