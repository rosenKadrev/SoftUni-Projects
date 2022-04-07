function softUniReception(arr) {

    let numberOfStudents = Number(arr[arr.length - 1]);
    arr.pop();
    let timeCounter = 0;
    let allEmployeesForH = arr.reduce((a, b) => Number(a) + Number(b));
    // console.log(allEmployeesForH);

    while (numberOfStudents > 0) {
        timeCounter++;
        if (timeCounter % 4 !== 0) {
            numberOfStudents = numberOfStudents - allEmployeesForH;

        }
    }
    console.log(`Time needed: ${timeCounter}h.`);
}
softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40'])



function softUniReception(input) {

    let e1 = Number(input[0]);
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);
    let efficiency = e1 + e2 + e3;
    let students = Number(input[3]);
    let time = 0;

    while (students > 0) {
        time++;
        if (time % 4 != 0) {
            students -= efficiency;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40'])