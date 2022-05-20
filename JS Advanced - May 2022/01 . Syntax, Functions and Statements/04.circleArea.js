function circleArea(argument) {

    let typeOfArgument = typeof(argument);

    if (typeOfArgument === 'number') {
        let area = argument ** 2 * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(argument)}.`);
    }

}
circleArea(5)
circleArea('name')