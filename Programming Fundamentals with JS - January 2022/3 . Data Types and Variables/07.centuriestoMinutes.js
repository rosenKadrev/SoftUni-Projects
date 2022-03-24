function centuriesToMinutes(centuries) {

    let conertYears = centuries * 100;
    let convertDays = parseInt(conertYears * 365.2422);
    let convertHours = convertDays * 24;
    let convertMinutes = convertHours * 60;

    console.log(`${centuries} centuries = ${conertYears} years = ${convertDays} days = ${convertHours} hours = ${convertMinutes} minutes`);

}
centuriesToMinutes(1)
centuriesToMinutes(5)