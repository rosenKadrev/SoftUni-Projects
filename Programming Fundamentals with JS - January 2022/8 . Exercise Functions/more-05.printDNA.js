function printDNA(num) {

    let DNA = 'ATCGTTAGGG';
    let counter = 0;
    let counterDNA = 0;

    for (let i = 1; i <= num; i++) {
        counter++;
        counterDNA += 2;
        let indexes = (DNAIndex(counterDNA, DNA)).toString();

        if (counterDNA === 10) {
            counterDNA = 0;
        }
        if (counter === 1) {
            console.log(`**${indexes[0]}${indexes[1]}**`);
        } else if (counter === 2) {
            console.log(`*${indexes[0]}--${indexes[1]}*`);
        } else if (counter === 3) {
            console.log(`${indexes[0]}----${indexes[1]}`);
        } else if (counter === 4) {
            console.log(`*${indexes[0]}--${indexes[1]}*`);
            counter = 0;
        }
    }

    function DNAIndex(counterDNA, DNA) {
        let index1 = 0;
        let index2 = 0;

        if (counterDNA === 2) {
            index1 = DNA[0];
            index2 = DNA[1];
        } else if (counterDNA === 4) {
            index1 = DNA[2];
            index2 = DNA[3];
        } else if (counterDNA === 6) {
            index1 = DNA[4];
            index2 = DNA[5];
        } else if (counterDNA === 8) {
            index1 = DNA[6];
            index2 = DNA[7];
        } else if (counterDNA === 10) {
            index1 = DNA[8];
            index2 = DNA[9];
        }
        return index1 + index2;
    }
}
// printDNA(4)
printDNA(10)


function dnaPrint(number) {

    let str = "ATCGTTAGGG";
    let counter = 0;

    for (let i = 0; i < number; i++) {
        if (i % 4 == 0) {
            console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        }
        counter += 2;
    }
}
dnaPrint(10)