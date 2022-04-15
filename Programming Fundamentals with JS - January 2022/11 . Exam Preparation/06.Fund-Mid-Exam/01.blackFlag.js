function blackFlag(arr) {
    arr = arr.map(Number);
    let daysOfPlunder = arr.shift(); // 5
    let dailyPunder = arr.shift(); // 40
    let expectedPlunder = arr.shift(); // 100
    let totalPlunder = 0;
    let dayCounter = 0;

    for (let i = 0; i < daysOfPlunder; i++) {
        totalPlunder += dailyPunder;
        dayCounter++;
        if (dayCounter % 3 === 0) {
            totalPlunder += dailyPunder * 0.5;
        }
        if (dayCounter % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5", "40", "100"])
blackFlag(["10", "20", "380"])