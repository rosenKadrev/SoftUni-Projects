function daysInAMonth(month, year) {

    let numberOfdays = new Date(year, month, 0).getDate();
    console.log(numberOfdays);

}
daysInAMonth(1, 2012)
daysInAMonth(2, 2021)