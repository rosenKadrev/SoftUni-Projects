function requiredReading(pagesNumbers, PagesRead, numberOfDays) {

    let allBookRead = pagesNumbers / PagesRead;
    let numberOfHours = allBookRead / numberOfDays;

console.log(numberOfHours);

}
requiredReading(212, 20, 2)
requiredReading(432, 15, 4)