function squareOfStars(num) {

    let row = ('* '.repeat(num)).trim();
    let ceil = ((row + '\n').repeat(num)).trim();
    console.log(ceil);

}
squareOfStars(1)
squareOfStars(2)
squareOfStars(5)
squareOfStars(7)