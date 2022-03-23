function rounding(number, round) {

    if (round > 15) {
        round = 15
        console.log(parseFloat(number.toFixed(round)));
        return;
    }

    console.log(parseFloat(number.toFixed(round)));

}
rounding(10.5, 3)
rounding(3.1415926535897932384626433832795, 2)
