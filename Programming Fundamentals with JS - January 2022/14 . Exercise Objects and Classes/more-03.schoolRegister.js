function schoolRegister(arrWithStudentInfo) {

    let objWithSortStudentsByGrade = {};

    for (let student of arrWithStudentInfo) {
        let currentStudent = student.split(','); // ['Student name: Mark', ' Grade: 8', ' Graduated with an average score: 4.75']
        let studentName = currentStudent[0].split('Student name: ')[1]; // Mark
        let grade = Number(currentStudent[1].split(' Grade: ')[1]) + 1; // 8+1=9
        let avarageScore = Number(currentStudent[2].split(' Graduated with an average score: ')[1]); // 4.75
        let counter = 1;
        if (avarageScore < 3) {
            continue;
        }
        if (!objWithSortStudentsByGrade[grade]) {
            objWithSortStudentsByGrade[grade] = { name: studentName, avarage: avarageScore, numberOfStudents: counter };
        } else {
            objWithSortStudentsByGrade[grade]['name'] += ', ' + studentName;
            objWithSortStudentsByGrade[grade]['avarage'] += avarageScore;
            objWithSortStudentsByGrade[grade]['numberOfStudents'] += counter;
        }
    }
    objWithSortStudentsByGrade = sortObj(objWithSortStudentsByGrade);
    for (let key in objWithSortStudentsByGrade) {
        console.log(key + ' Grade');
        console.log(`List of students: ${objWithSortStudentsByGrade[key].name}`);
        console.log(`Average annual grade from last year: ${(objWithSortStudentsByGrade[key].avarage / objWithSortStudentsByGrade[key].numberOfStudents).toFixed(2)}` + '\n');
    }

    function sortObj(obj) {
        return Object.keys(obj).sort().reduce(function(result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    }
}
schoolRegister([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ])
    // schoolRegister([
    //     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    //     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    //     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    //     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    //     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    //     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    //     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    // ])