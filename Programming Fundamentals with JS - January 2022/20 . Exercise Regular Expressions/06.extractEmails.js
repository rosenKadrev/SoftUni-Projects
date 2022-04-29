function extractEmail(input) {

    let regex = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g

    let result = input.match(regex);
    for (let line of result) {
        console.log(line);
    }
}
extractEmail('Please contact us at: support@github.com.')
console.log(`-------------------------`);
extractEmail('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
console.log(`-------------------------`);
extractEmail('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')