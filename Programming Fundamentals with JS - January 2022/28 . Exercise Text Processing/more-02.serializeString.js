function serializaString(arr) {

    let arrText = arr[0].split('');
    let objForSerialization = {};

    for (let i = 0; i < arrText.length; i++) {
        let currentLetter = arrText[i];
        let index = i;
        if (currentLetter.charCodeAt(0) >= 0 && currentLetter.charCodeAt(0) <= 127) {
            if (!objForSerialization.hasOwnProperty(currentLetter)) {
                objForSerialization[currentLetter] = [index];
            } else {
                objForSerialization[currentLetter].push(index);
            }
        }
    }
    for (let key in objForSerialization) {
        console.log(`${key}:${objForSerialization[key].join('/')}`);
    }
}
serializaString(["abababa"])
serializaString(["avjavamsdmcalsdm"])