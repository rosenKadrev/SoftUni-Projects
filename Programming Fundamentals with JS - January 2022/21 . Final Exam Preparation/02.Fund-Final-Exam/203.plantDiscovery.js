function plantDiscovery(arr) {

    let startInput = arr.shift();
    let objForStorageOfInfo = {};

    for (let i = 0; i < startInput; i++) {
        let [plant, rarity] = arr[i].split('<->');
        objForStorageOfInfo[plant] = { rarity, rating: 0 };
    }

    for (let j = startInput; j < arr.length; j++) {
        let currentData = arr[j].split(': ');
        let currentComand = currentData[0];
        if (currentComand === "Exhibition") {
            break;
        }
        if (currentComand === "Rate") {
            let dataForSplit = currentData[1].split(' - ')
            let plant = dataForSplit[0];
            let rating = Number(dataForSplit[1]);
            if (objForStorageOfInfo.hasOwnProperty(plant)) {
                if (objForStorageOfInfo[plant]['rating'] !== 0) {
                    objForStorageOfInfo[plant]['rating'].push(rating);
                } else {
                    objForStorageOfInfo[plant]['rating'] = [rating];
                }
            } else {
                console.log(`error`);
            }
        } else if (currentComand === "Update") {
            let dataForUpdate = currentData[1].split(' - ');
            let plantIfExsist = dataForUpdate[0];
            let newRarity = Number(dataForUpdate[1]);
            if (objForStorageOfInfo.hasOwnProperty(plantIfExsist)) {
                objForStorageOfInfo[plantIfExsist]['rarity'] = newRarity;
            } else {
                console.log(`error`);
            }
        } else if (currentComand === "Reset") {
            let dataForReset = currentData[1];
            if (objForStorageOfInfo.hasOwnProperty(dataForReset)) {
                objForStorageOfInfo[dataForReset]['rating'] = 0;
            } else {
                console.log(`error`);
            }
        }
    }

    let forFinalPrintAndAvarageRating = Object.entries(objForStorageOfInfo);
    for (let plant of forFinalPrintAndAvarageRating) {
        if (plant[1].rating != 0) {
            let avarageRating = (plant[1].rating).reduce((a, b) => a + b) / Number((plant[1].rating).length);
            plant[1].rating = avarageRating;
        }
    }

    console.log(`Plants for the exhibition:`);
    forFinalPrintAndAvarageRating.forEach(line => console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${(line[1].rating).toFixed(2)}`));
}
plantDiscovery([
        "3",
        "Arnoldii<->4",
        "Woodii<->7",
        "Welwitschia<->2",
        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"
    ])
    // plantDiscovery([
    //     "2",
    //     "Candelabra<->10",
    //     "Oahu<->10",
    //     "Rate: Oahu - 7",
    //     "Rate: Candelabra - 6",
    //     "Exhibition"
    // ])