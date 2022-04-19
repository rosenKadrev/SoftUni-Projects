function employees(arrWithPersons) {

    class Person {
        constructor(fullName, personalNumber) {
            this.fullName = fullName;
            this.personalNumber = personalNumber;
        }
    }

    let arrNew = [];
    for (let informationForPerson of arrWithPersons) {
        let [fullName, personalNumber] = [informationForPerson, informationForPerson.length];
        let person = new Person(fullName, personalNumber);
        arrNew.push(person);
    }

    arrNew.forEach((currEmployees) =>
        console.log(`Name: ${currEmployees.fullName} -- Personal Number: ${currEmployees.personalNumber}`));

}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland'])



function employees(arrWithPersons) {

    let arrNew = [];
    for (let informationForPerson of arrWithPersons) {

        let person = {};
        person.fullName = informationForPerson;
        person.personalNumber = informationForPerson.length;
        arrNew.push(person);
    }

    for (let iterator of arrNew) {
        console.log(`Name: ${iterator.fullName} -- Personal Number: ${iterator.personalNumber}`);
    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
    // employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland'])