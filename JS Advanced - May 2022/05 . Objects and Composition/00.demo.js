let person = {
    firstName: 'Rosen',
    lastName: 'Kadrev',
    age: function(myAge) {
        return `My age is ${myAge}`; // My age is 31
    },
    age(myAge) {
        return `My age is ${myAge}`; // My age is 31
    },
    fullName() {
        return this.firstName + ' ' + this.lastName; // Rosen Kadrev
    }

}
console.log(person.age(31));
console.log(person.fullName());