function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let piramidHeight = 0;

    for (let i = base; i >= 1; i -= 2) {

        piramidHeight++;

        if (i === 2 || i === 1) {
            gold += i * i;
            break;
        }

        if (piramidHeight % 5 === 0) {
            stone += (i - 2) * (i - 2);
            lapis += i * i - ((i - 2) * (i - 2));

        } else {
            stone += (i - 2) * (i - 2);
            marble += i * i - ((i - 2) * (i - 2));
        }
    }

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.trunc(piramidHeight * increment)}`);

}
thePyramidOfKingDjoser(11, 1)
thePyramidOfKingDjoser(11, 0.75)
thePyramidOfKingDjoser(12, 1)
thePyramidOfKingDjoser(23, 0.5)