function valueOfaString(arr) {

    let textForManipulation = arr[0];
    let withWhatCaseWeWork = arr[1];
    let arrWithNumsPorFinalSum = [];

    for (let letter of textForManipulation) {

        let number = Number(letter.charCodeAt(0));
        if (withWhatCaseWeWork === 'LOWERCASE') {
            if (number >= 97 && number <= 122) {
                arrWithNumsPorFinalSum.push(number);
            }
        } else if (withWhatCaseWeWork === 'UPPERCASE') {
            if (number >= 65 && number <= 90) {
                arrWithNumsPorFinalSum.push(number);
            }
        }
    }

    let totalSum = arrWithNumsPorFinalSum.reduce((a, b) => a + b);
    console.log(`The total sum is: ${totalSum}`);
}
valueOfaString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE'])
valueOfaString(['AC/DC', 'UPPERCASE'])