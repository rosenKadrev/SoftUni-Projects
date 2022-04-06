function numberModification(num) {

    let average = 0;
    let averageTotal = 0;
    let numS = num.toString();
    let lengthNum = numS.length;

    while (averageTotal <= 5) {
        for (let i = 0; i < lengthNum; i++) {
            let currentIndex = Number(numS[i]);
            average += currentIndex;
        }
        averageTotal = average / Number(lengthNum);
        if (averageTotal > 5) {
            console.log(numS);
            return;
        } else {
            lengthNum++;
            numS += '9';
            average = 0;
            averageTotal = 0;
        }
    }
}
numberModification(0101)
numberModification(5835)