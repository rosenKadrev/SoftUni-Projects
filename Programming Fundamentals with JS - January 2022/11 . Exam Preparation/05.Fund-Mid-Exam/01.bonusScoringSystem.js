function bonusScoringSystem(arr) {

    arr = arr.map(Number);
    let numberOfStudents = arr.shift();
    let numberOfLectures = arr.shift();
    let additionalBonus = arr.shift();
    let maxBonus = 0;
    let attendances = 0;

    for (let i = 0; i < numberOfStudents; i++) {
        let currentStudentAttendances = arr[i];
        let currentMaxBonus = Math.ceil(currentStudentAttendances / numberOfLectures * (5 + additionalBonus));
        if (currentStudentAttendances > attendances) {
            attendances = currentStudentAttendances;
            maxBonus = currentMaxBonus;
        }
    }
    console.log(`Max Bonus: ${maxBonus}.` + '\n' +
        `The student has attended ${attendances} lectures.`
    );
}
bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20'])
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])



function bonusScoringSystem(arr) {

    arr = arr.map(Number);
    let numberOfLectures = arr.shift();
    let additionalBonus = arr.shift();
    let maxAttendances = Math.max(...arr);
    let maxBonus = Math.ceil(maxAttendances / numberOfLectures * (5 + additionalBonus));

    console.log(`Max Bonus: ${maxBonus}.` + '\n' +
        `The student has attended ${maxAttendances} lectures.`
    );
}
bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20'])
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])