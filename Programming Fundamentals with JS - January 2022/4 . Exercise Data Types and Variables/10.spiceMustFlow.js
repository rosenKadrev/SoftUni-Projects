function spiceMustFlow(startingYield) {

    let currentYield = 0;
    let daysCounter = 0;

    while (startingYield >= 100) {
        currentYield += startingYield - 26;
        daysCounter++;
        startingYield -= 10
    }
    if (currentYield < 26) {
        console.log(daysCounter);
        console.log(currentYield);
    } else {
        currentYield -= 26;
        console.log(daysCounter);
        console.log(currentYield);
    }
}
spiceMustFlow(111)
spiceMustFlow(450)