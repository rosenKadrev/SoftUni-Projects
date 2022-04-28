function matchPhoneNumber(names) {

    let pattern = /\+[359]{3}([ ]{1}|-)[2]{1}(\1)\d{3}(\1)\b\d{4}\b/g;
    let validNames = [];
    let firstMatch = pattern.exec(names);
    while (firstMatch !== null) {
        validNames.push(firstMatch[0]);
        firstMatch = pattern.exec(names);
    }
    console.log(validNames.join(', '));
}
matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")