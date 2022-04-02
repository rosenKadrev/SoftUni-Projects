function repeatString(repeatValue, numOfRepeats) {

    let repeatString = '';

    for (let i = 0; i < numOfRepeats; i++) {
        repeatString += repeatValue;
    }
    console.log(repeatString);
}
repeatString("abc", 3)
repeatString("String", 2)



function repeatStringg(repeatValue, numOfRepeats) {

    console.log(repeatValue.repeat(numOfRepeats));
}
repeatStringg("abc", 3)
repeatStringg("String", 2)