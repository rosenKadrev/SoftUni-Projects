// function subString(string, numStart, count) {
//     let numEnd = numStart + count;
//     let newString = string.substring(numStart, numEnd);
//     console.log(newString);
// }
// subString('ASentence', 1, 8)
// subString('SkipWord', 4, 7)



function subString(string, numStart, count) {
    let numEnd = numStart + count;
    let newString = string.slice(numStart, numEnd);
    console.log(newString);
}
subString('ASentence', 1, 8)
subString('SkipWord', 4, 7)