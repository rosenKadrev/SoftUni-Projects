function theBiscuitFactory(arr) {
    arr = arr.map(Number);
    let biscuitsProducedPerDay = arr.shift();
    let countOfWorkersInFactory = arr.shift();
    let otherBiscuitsProducedFor30Days = arr.shift();
    let myFabricProductionFor30Days = 0;
    let dayCounter = 0;

    for (let i = 1; i <= 30; i++) {
        dayCounter++;
        if (dayCounter % 3 === 0) {
            myFabricProductionFor30Days += Math.trunc((countOfWorkersInFactory * biscuitsProducedPerDay) * 0.75);
        } else {
            myFabricProductionFor30Days += countOfWorkersInFactory * biscuitsProducedPerDay;
        }
    }
    console.log(`You have produced ${myFabricProductionFor30Days} biscuits for the past month.`);

    if (myFabricProductionFor30Days > otherBiscuitsProducedFor30Days) {
        let percentageWin = (myFabricProductionFor30Days - otherBiscuitsProducedFor30Days) / otherBiscuitsProducedFor30Days * 100;
        console.log(`You produce ${percentageWin.toFixed(2)} percent more biscuits.`);
    } else if (myFabricProductionFor30Days < otherBiscuitsProducedFor30Days) {
        let percentageLoose = (otherBiscuitsProducedFor30Days - myFabricProductionFor30Days) / otherBiscuitsProducedFor30Days * 100;
        console.log(`You produce ${percentageLoose.toFixed(2)} percent less biscuits.`);
    }
}
theBiscuitFactory(["78", "8", "16000"])
theBiscuitFactory(["65", "12", "26000"])
theBiscuitFactory(["163", "16", "67020"])