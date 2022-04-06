function lowerOrUpper(letter) {

    let letterToCharCode = letter.charCodeAt(0);
    
    if (letterToCharCode >= 65 && letterToCharCode <= 90) {
        console.log('upper-case');
    } else if (letterToCharCode >= 97 && letterToCharCode <= 122) {
        console.log('lower-case');
    }

}
lowerOrUpper('L')
lowerOrUpper('f')