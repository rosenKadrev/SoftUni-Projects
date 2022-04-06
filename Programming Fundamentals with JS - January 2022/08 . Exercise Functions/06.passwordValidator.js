function rasswordValidator(pass) {

    if ((passLength(pass) >= 6 && passLength(pass) <= 10) && (passDigits(pass) >= 2) && (!otherSymbols(pass))) {
        console.log('Password is valid');
    }
    if (passLength(pass) < 6 || passLength(pass) > 10) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (otherSymbols(pass)) {
        console.log('Password must consist only of letters and digits');
    }
    if (passDigits(pass) < 2) {
        console.log('Password must have at least 2 digits');
    }

    function otherSymbols(count) {
        let boolean = false;
        let countS = count.toString();

        for (let i = 0; i < countS.length; i++) {
            let element = (countS[i]).charCodeAt(0);
            if ((element >= 0 && element <= 47) || (element >= 58 && element <= 64) || (element >= 91 && element <= 96) || (element >= 123 && element <= 127)) {
                boolean = true;
            }
        }
        return boolean;
    }

    function passDigits(count) {
        let counter = 0;
        let countS = count.toString();

        for (let i = 0; i < countS.length; i++) {
            let element = (countS[i]).charCodeAt(0);
            if (element >= 48 && element <= 57) {
                counter++;
            }
        }
        return counter;
    }

    function passLength(a) {
        return a.length;
    }
}
rasswordValidator('logIn')
rasswordValidator('MyPass123')
rasswordValidator('Pa$s$s')