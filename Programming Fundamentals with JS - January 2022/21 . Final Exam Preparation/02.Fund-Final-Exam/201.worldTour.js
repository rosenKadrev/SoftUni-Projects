function worldTour(arr) {

    let stringForManipulation = arr.shift();

    for (let element of arr) {
        let currentInfo = element.split(':');
        let currentComand = currentInfo[0];
        if (currentComand === "Travel") {
            break;
        }
        if (currentComand === "Add Stop") {
            let indexForAdd = Number(currentInfo[1]);
            let stringForAdd = currentInfo[2];
            if (indexForAdd >= 0 && indexForAdd < stringForManipulation.length) {
                stringForManipulation = stringForManipulation.split('');
                stringForManipulation.splice(indexForAdd, 0, stringForAdd);
                stringForManipulation = stringForManipulation.join('');
            }
            console.log(stringForManipulation);
        } else if (currentComand === "Remove Stop") {
            let startIndex = Math.min(Number(currentInfo[1]), Number(currentInfo[2]));
            let endIndex = Math.max(Number(currentInfo[1]), Number(currentInfo[2]));
            if ((startIndex >= 0 && startIndex < stringForManipulation.length) && (endIndex >= 0 && endIndex < stringForManipulation.length)) {
                stringForManipulation = stringForManipulation.split('');
                stringForManipulation.splice(startIndex, endIndex - startIndex + 1);
                stringForManipulation = stringForManipulation.join('');
            }
            console.log(stringForManipulation);
        } else if (currentComand === "Switch") {
            let oldString = currentInfo[1];
            let newString = currentInfo[2];
            if (stringForManipulation.includes(oldString)) {
                // let splitted = stringForManipulation.split(oldString);
                // stringForManipulation = splitted.join(newString);
                stringForManipulation = stringForManipulation.replace(oldString, newString);
            }
            // while (stringForManipulation.includes(oldString)) {
            //     stringForManipulation = stringForManipulation.replace(oldString, newString);
            // }
            console.log(stringForManipulation);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stringForManipulation}`);
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
])