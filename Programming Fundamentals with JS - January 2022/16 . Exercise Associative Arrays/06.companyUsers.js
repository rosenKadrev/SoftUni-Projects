function companyUsers(arrWithCompanyUsers) {

    let objWithCompanyUsers = {};

    for (let element of arrWithCompanyUsers) {

        let [companyName, idEmployee] = element.split(' -> '); //['SoftUni', 'AA12345']
        if (!objWithCompanyUsers.hasOwnProperty(companyName)) {
            objWithCompanyUsers[companyName] = [idEmployee];
        } else {
            if (!objWithCompanyUsers[companyName].includes(idEmployee)) {
                objWithCompanyUsers[companyName].push(idEmployee);
            }
        }
    }
    let elementsForSortingArr = Object.entries(objWithCompanyUsers);
    elementsForSortingArr.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, id] of elementsForSortingArr) {
        console.log(`${name}`);
        id.forEach(code => console.log(`-- ${code}`));
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])