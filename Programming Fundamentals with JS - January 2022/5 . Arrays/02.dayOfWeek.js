function dayOfWeek(day) {

    let input = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (day >= 1 && day <= 7) {
        console.log(input[day - 1]);
    } else {
        console.log(`Invalid day!`);
    }

}