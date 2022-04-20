function schoolGrades(arr) {

    let objWithStudentsInfo = {};

    for (let element of arr) {
        let currentInfo = element.split(' '); //['Lilly', '4', '6', '6', '5']
        let studentName = currentInfo.shift();
        if (!objWithStudentsInfo[studentName]) {
            objWithStudentsInfo[studentName] = currentInfo;
        } else {
            for (let i of currentInfo) {
                let currentGrade = i;
                objWithStudentsInfo[studentName].push(currentGrade);
            }
        }
    }
    let elementsForSortingArr = Object.entries(objWithStudentsInfo); //[Array(2), Array(2), Array(2)]
    elementsForSortingArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let elementArr of elementsForSortingArr) {
        let reducer = elementArr[1].reduce(
            (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
        );
        let gradesNum = Number(elementArr[1].length);
        console.log(`${elementArr[0]}: ${(reducer / gradesNum).toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])
schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
])