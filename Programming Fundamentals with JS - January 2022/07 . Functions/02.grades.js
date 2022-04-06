function grades(evaluation) {

    if (evaluation < 3) {
        console.log(`Fail (${2})`);
    } else if (evaluation >= 3 && evaluation < 3.5) {
        console.log(`Poor (${evaluation.toFixed(2)})`);
    } else if (evaluation >= 3.5 && evaluation < 4.5) {
        console.log(`Good (${evaluation.toFixed(2)})`);
    } else if (evaluation >= 4.5 && evaluation < 5.5) {
        console.log(`Very good (${evaluation.toFixed(2)})`);
    } else if (evaluation >= 5.5) {
        console.log(`Excellent (${evaluation.toFixed(2)})`);
    }
}
grades(3.33)
grades(4.50)
grades(2.99)
grades(5.99)